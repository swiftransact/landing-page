import {mutation} from "./_generated/server";
import {v} from "convex/values";

export const addToWaitlist = mutation(
    {
        args: {
            firstname: v.string(),
            lastname: v.string(),
            email: v.string(),
            phone: v.string(),
            location: v.string(),
        },
        handler: async (ctx, args) => {
            const id = await ctx.db.insert("waitlists", {...args});
            return {message: "Registration Successfull"}
        },
    }
);