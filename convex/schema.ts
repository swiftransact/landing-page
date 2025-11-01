import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const waitlistSchema = defineTable({
  firstname: v.string(),
  lastname: v.string(),
  email: v.string(),
  phone: v.string(),
  location: v.string(),
});

export default defineSchema({
    waitlists: waitlistSchema,
});
