<template>
  <main id="app">
  <Header></Header>
  <section class="container">
  <article>
  <Card :people="people" v-for="people in allPeople.people"  @click.native="selectPeople(people)"></Card>
  <Spinner v-if="hasMore"></Spinner>
  <h2 v-if="error" class="error">Failed to Load Data</h2>
  </article>
  <article class="container-center">
  <CardInfo v-if="selected" :people="peopleSelected"></CardInfo>
  </article>
  </section>
  </main>
</template>

<script>
import Spinner from './components/spinner.vue';
import Header from './components/header.vue';
import CardInfo from './components/cardInfo.vue'
import Card from './components/card.vue';
import gql from 'graphql-tag';

export default {
  name: 'app',
  apollo: {
    allPeople: {
      query: gql `query allPeople($first: Int!, $after: String!) {
        allPeople(first: $first, after: $after) {
          pageInfo {
            endCursor
            hasNextPage
          }
          people {
            id
            name
            eyeColor
            homeworld {
              name
            }
            species {
              name
            }
              hairColor
              skinColor
              birthYear
              vehicleConnection{
                vehicles{
                  name
                    }
                }
          }
          }
      }`,
      variables: {
        first: 5,
        after: ""
      },
      error() {
        this.hasMore=false;
        this.error = true;
      }
    }
  },
  data() {
    return {
    hasMore: true,
    error: false,
    peopleSelected:null,
    selected:false,
    allPeople: []
    }
  },
  methods: {
    selectPeople(people) {
      this.peopleSelected = people;
      this.selected = true;

    },
    loadMore(after) {
      this.$apollo.queries.allPeople.fetchMore({
        variables: {
          first: 5,
          after
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {

          if( !fetchMoreResult.allPeople.pageInfo.hasNextPage ){
            this.hasMore = false;
            return {}
          }
          return {
            allPeople: {
              __typename: fetchMoreResult.allPeople.__typename,
              people: [...previousResult.allPeople.people, ...fetchMoreResult.allPeople.people],
              pageInfo: {
                endCursor: fetchMoreResult.allPeople.pageInfo.endCursor,
                hasNextPage: fetchMoreResult.allPeople.pageInfo.hasNextPage,
                __typename: fetchMoreResult.allPeople.pageInfo.__typename
              }
            }
          }
        },
      })
    }
  },
  watch:{
    allPeople() {

      if (this.allPeople.pageInfo.hasNextPage) {
        setTimeout(() => {  this.loadMore(this.allPeople.pageInfo.endCursor); }, 2000);
      }
    }
  },
  components: {
    Card,
    CardInfo,
    Header,
    Spinner,
  },
}
</script>


<style scoped>
.container{
  display:flex;
  width:98vw;
}
.error{
  color:#EC5757;
  font-size:17px;
}
.container-center{
  width:100%;
  display:flex;
  justify-content:center;
}

</style>
