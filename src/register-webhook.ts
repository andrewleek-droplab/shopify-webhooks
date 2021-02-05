import { ApiVersion, Topic, TopicGraphQL } from "./types";
import { registerWebhookREST } from "./register-webhook-rest";
import { registerWebhookGraphQL } from "./register-webhook-graphql";

type Options = {
	address: string;
	accessToken: string;
	shop: string;
	apiVersion: ApiVersion;
	topic: string;
};

function isTopicREST(topic: string): topic is Topic {
	return topic.toLowerCase() === topic;
}

function isTopicGraphQL(topic:string): topic is TopicGraphQL {
	return topic.toUpperCase() === topic;
}

export async function registerWebhook(options: Options): Promise<{ success: boolean; result: any; }> {
	const {
		topic,
		...sharedParams
	} = options;

	if (isTopicREST(topic))
	{	
		return registerWebhookREST({ ...sharedParams, topic });
	}
	else if (isTopicGraphQL(topic))
	{
		return registerWebhookGraphQL({ ...sharedParams, topic })
	}
	else
	{
		throw new Error("Topic is not a REST API or GraphQL API compatible topic");
	}
}
