export const tweetSchema = {
    name: 'tweets',
    title: 'Tweets',
    type: 'document',
    fields: [
        {
            name: 'tweet',
            title: 'Tweet',
            type: 'string'
        }
        {
            name: 'timestamp',
        }
    ]
}