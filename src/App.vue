<template>
  <main id="app">
  <Header></Header>
  <Card :people="people" v-for="people in allPeople.people"></Card>
  <Spinner v-if="hasMore"></Spinner>
  </main>
</template>

<script>
import Spinner from './components/spinner.vue';
import Header from './components/header.vue';
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
          }
        }
      }`,
      variables: {
        first: 5,
        after: ""
      },
      error(error) {
        console.log('error', error);
      }
    }
  },
  data() {
    return {
    hasMore: true,
    }
  },
  methods: {
    loadMore(after) {
      this.$apollo.queries.allPeople.fetchMore({
        variables: {
          first: 5,
          after
        },
        // Transform the previous result with new data
        updateQuery: (previousResult, { fetchMoreResult }) => {

          if( !fetchMoreResult.allPeople.pageInfo.hasNextPage ){
            console.log('Ya se acabó');
            this.hasMore = false;
            return {}
          }
          console.log('trayendo mas data');
          //new query data is appended to old query data
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

        console.log('cargando mas data', this.allPeople.pageInfo.endCursor);
        setTimeout(() => {  this.loadMore(this.allPeople.pageInfo.endCursor); }, 2000);
      }
    }
  },
  components: {
    Spinner,
    Card,
    Header,
  },
}
</script>


<style scoped>

</style>
