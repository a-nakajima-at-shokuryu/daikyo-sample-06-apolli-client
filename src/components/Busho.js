import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_BUSHO = gql`
    query($id: Int!) {
        post(id: $id) {
            id
            name
        }
    }
`
const GET_BUSHO_ALL = gql`
    {
        posts {
            id
            name
        }
    }
`

export default class Busho extends Component {
    render () {
        return (
            <div>
                <Query query={GET_BUSHO_ALL}>
                    {({ data, loading }) => {
                        if (loading) return <p>Loading...</p>
                        const bushos = data.posts
                        return (
                            <ul>
                                {bushos.map(repo => (
                                    <li key={repo.id}>{repo.name}</li>
                                ))}
                            </ul>
                        )
                    }}
                </Query>
                <hr />
                <Query query={GET_BUSHO} variables={{ id: 10 }}>
                    {({ data, loading }) => {
                        if (loading) return <p>Loading...</p>
                        const busho = data.post
                        return (
                            <ul>
                                <li key={busho.id}>{busho.name}</li>
                            </ul>
                        )
                    }}
                </Query>
            </div>
        )
    }
}
