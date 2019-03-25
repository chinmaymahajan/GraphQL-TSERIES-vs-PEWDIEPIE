const { GraphQLServer } = require('graphql-yoga')
const fetch = require('node-fetch')
const { URL, API_KEY, T_SERIES_CHANNELID, PEWDIEPIE_CHANNELID } = require('./constants');

const resolvers = {
  Query: {
		tseries: () => {
			let url = URL(T_SERIES_CHANNELID, API_KEY);
				return fetchData(url)
		},
		pewdiepie: () => {
			let url = URL(PEWDIEPIE_CHANNELID, API_KEY);
				return fetchData(url)
		}
  }
}

const fetchData = url => fetch(url)
				.then(res => res.json())
				.then(data => data.items[0].statistics.subscriberCount)
				.catch(data => data.error);

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
