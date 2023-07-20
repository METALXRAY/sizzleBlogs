import { createClient } from "next-sanity";

const projectId = "720vr7l1";
const dataset = "production";
const apiVersion = "2023-07-20";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
