// === Module 8519: StageChannelUpsellCardStore ===

// Module 8519 (StageChannelUpsellCardStore)
import Storage2 from "Storage" /* 510 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1263 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 4898 */;
import _mod4958 from "module_4958" /* 4958 */;
import identity from "module_1258" /* 1258 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_2 = GuildScheduledEventsConstants.GUILD_EVENT_STAGE_UPSELL_CARD_KEY;
let closure_3 = identity.createWithEqualityFn((arg0) => {
  _require = arg0;
  const obj = { hasSeenUpsellCard: null, markAsSeen: null };
  let Storage = require("Storage").Storage;
  obj.hasSeenUpsellCard = true === Storage.get(closure_2);
  obj.markAsSeen = function markAsSeen() {
    const Storage = Storage2.Storage;
    const result = Storage.set(closure_2, true);
    ReactBatchUpdates.batchUpdates(() => closure_1_0({ hasSeenUpsellCard: true }));
  };
  return obj;
});
let result = size.fileFinishedImporting("modules/guild_scheduled_events/StageChannelUpsellCardStore.tsx");

export function useStageChannelUpsellCardStore() {
  return closure_3((arg0) => {
    items = [, ];
    ({ hasSeenUpsellCard: arr[0], markAsSeen: arr[1] } = arg0);
    return items;
  }, _mod4958.shallow);
}