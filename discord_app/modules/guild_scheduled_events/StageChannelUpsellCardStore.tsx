// === Module 9207: StageChannelUpsellCardStore ===

// Module 9207 (StageChannelUpsellCardStore)
import Storage2 from "Storage" /* 510 */;
import c from "c" /* 576 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1259 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import _mod4492 from "module_4492" /* 4492 */;
import identity from "module_1254" /* 1254 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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

export const useStageChannelUpsellCardStore = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(arg0) {
      const items = [, ];
      ({ hasSeenUpsellCard: arr[0], markAsSeen: arr[1] } = arg0);
      return items;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_3(first, _mod4492.shallow);
}) : (() => closure_3((arg0) => {
  const items = [, ];
  ({ hasSeenUpsellCard: arr[0], markAsSeen: arr[1] } = arg0);
  return items;
}, _mod4492.shallow));