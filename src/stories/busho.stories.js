import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import Busho from '../components/Busho'

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql'
})

export default {
    title: '部署',
    component: Busho,
}

// ComponentをApolloProviderでラップする
export const BushoStory = () =>
    <ApolloProvider client={client}>
        <Busho />
    </ApolloProvider>
