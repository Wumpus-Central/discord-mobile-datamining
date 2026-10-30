// === Module 9015: StageChannelUpsellCardStore ===

// Module 9015 (StageChannelUpsellCardStore)
import Storage2 from "Storage" /* 510 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1260 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 4864 */;
import _mod4924 from "module_4924" /* 4924 */;
import identity from "module_1255" /* 1255 */;
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
    const items = [, ];
    ({ hasSeenUpsellCard: arr[0], markAsSeen: arr[1] } = arg0);
    return items;
  }, _mod4924.shallow);
}