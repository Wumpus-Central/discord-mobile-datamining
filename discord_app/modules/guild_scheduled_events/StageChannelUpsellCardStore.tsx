// discord_app/modules/guild_scheduled_events/StageChannelUpsellCardStore.tsx
import Storage2 from "../../../discord_common/js/packages/storage/Storage.tsx";
import c from "../../../_runtime/00576_c.js";
import ReactBatchUpdates from "../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants.tsx";
import _mod4498 from "../../../_runtime/metro/04498__.js";
import identity from "../../../_runtime/metro/01254__.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

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

export const useStageChannelUpsellCardStore = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l(arg0) {
          const items = [,];
          ({ hasSeenUpsellCard: arr[0], markAsSeen: arr[1] } = arg0);
          return items;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      return closure_3(first, _mod4498.shallow);
    }
  : () =>
      closure_3((arg0) => {
        const items = [,];
        ({ hasSeenUpsellCard: arr[0], markAsSeen: arr[1] } = arg0);
        return items;
      }, _mod4498.shallow);
