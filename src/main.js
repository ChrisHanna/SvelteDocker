import App from './App.svelte';
const { BlobServiceClient } = require("@azure/storage-blob");
const { DefaultAzureCredential } = require("@azure/identity");


const app = new App({
	target: document.body,
	props: {
		name: 'world'
	},
	ACCOUNT_NAME : process.env.ACCOUNT_NAME,
	AZURE_TENANT_ID : process.env.AZURE_TENANT_ID,
	AZURE_CLIENT_ID  : process.env.AZURE_CLIENT_ID,
	AZURE_CLIENT_SECRET  : process.env.AZURE_CLIENT_SECRET
});

export default app;