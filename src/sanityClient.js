import { createClient  } from "@sanity/client";

const client = createClient({
  projectId: "ka30bmwp",
  dataset: "production",
  useCdn: true,
});

export default client;

