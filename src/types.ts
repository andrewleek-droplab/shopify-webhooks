export enum WebhookHeader {
	AccessToken = "X-Shopify-Access-Token",
	Hmac = "X-Shopify-Hmac-Sha256",
	Topic = "X-Shopify-Topic",
	Domain = "X-Shopify-Shop-Domain",
}

export type Topic =
	| "app/uninstalled"
	| "carts/create"
	| "carts/update"
	| "channels/delete"
	| "checkouts/create"
	| "checkouts/delete"
	| "checkouts/update"
	| "checkouts/paid"
	| "collection_listings/add"
	| "collection_listings/remove"
	| "collection_listings/update"
	| "collection_publications/create"
	| "collection_publications/delete"
	| "collection_publications/update"
	| "collections/create"
	| "collections/delete"
	| "collections/update"
	| "customer_groups/create"
	| "customer_groups/delete"
	| "customer_groups/update"
	| "customers/create"
	| "customers/delete"
	| "customers/disable"
	| "customers/enable"
	| "customers/update"
	| "disputes/create"
	| "disputes/update"
	| "draft_orders/create"
	| "draft_orders/delete"
	| "draft_orders/update"
	| "fulfillment_events/create"
	| "fulfillment_events/delete"
	| "fulfillments/create"
	| "fulfillments/update"
	| "order_transactions/create"
	| "orders/cancelled"
	| "orders/create"
	| "orders/delete"
	| "orders/edited"
	| "orders/fulfilled"
	| "orders/paid"
	| "orders/partially_fulfilled"
	| "orders/updated"
	| "product_listings/add"
	| "product_listings/remove"
	| "product_listings/update"
	| "product_publications/create"
	| "product_publications/delete"
	| "product_publications/update"
	| "products/create"
	| "products/delete"
	| "products/update"
	| "refunds/create"
	| "shop/update"
	| "tax_services/create"
	| "tax_services/update"
	| "themes/create"
	| "themes/delete"
	| "themes/publish"
	| "themes/update"
	| "variants/in_stock"
	| "variants/out_of_stock"
	| "inventory_levels/connect"
	| "inventory_levels/update"
	| "inventory_levels/disconnect"
	| "inventory_items/create"
	| "inventory_items/update"
	| "inventory_items/delete"
	| "locations/create"
	| "locations/update"
	| "locations/delete"
	| "tender_transactions/create"
	| "app_purchases_one_time/update"
	| "app_subscriptions/update"
	| "variants/delete";

export type WebhookState<Payload = any> = {
	topic: Topic;
	domain: string;
	payload: Payload;
};

export enum ApiVersion {
	July19 = "2019-07",
	October19 = "2019-10",
	January20 = "2020-01",
	Unstable = "unstable",
	Unversioned = "unversioned",
}
