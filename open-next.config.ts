import { defineCloudflareConfig } from "@opennextjs/cloudflare"
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache"
import { withRegionalCache } from "@opennextjs/cloudflare/overrides/incremental-cache/regional-cache"
import doShardedTagCache from "@opennextjs/cloudflare/overrides/tag-cache/do-sharded-tag-cache"
import doQueue from "@opennextjs/cloudflare/overrides/queue/do-queue"

export default defineCloudflareConfig({
  incrementalCache: withRegionalCache(r2IncrementalCache, {
    mode: "short-lived",
  }),
  queue: doQueue,
  // This is only required if you use On-demand revalidation
  tagCache: doShardedTagCache({ baseShardSize: 12 }),
  // Disable this if you want to use PPR
  enableCacheInterception: true,
})
