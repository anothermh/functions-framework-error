import { type Context } from '@google-cloud/functions-framework/build/src/functions'
import { type PubsubMessage } from '@google-cloud/pubsub/build/src/publisher'

export const testFunction = async (message: PubsubMessage, context: Context): Promise<void> => {
  const messageId = context.eventId as string
  console.log(`Processing messageId ${messageId}`)
}
