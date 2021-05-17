import Vue from 'vue';
import App from './App.vue';
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost'

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index'
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});


new Vue({
  el: '#app',
  apolloProvider,
  render: h => h(App),
})

