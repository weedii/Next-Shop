import { products } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";

// products
export type ProductType = InferSelectModel<typeof products>;
