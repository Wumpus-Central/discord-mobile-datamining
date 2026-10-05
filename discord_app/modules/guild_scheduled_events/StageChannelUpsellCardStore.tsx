// discord_app/modules/guild_scheduled_events/StageChannelUpsellCardStore.tsx
import Storage2 from "../../../discord_common/js/packages/storage/Storage.tsx";
import react from "../../../_runtime/00576_react.js";
import react_native from "../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants.tsx";
import _slicedToArray from "../../../_runtime/metro/04492__slicedToArray.js";
import 01254__ from "../../../_runtime/metro/01254__.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let closure_2 = GuildScheduledEventsConstants.GUILD_EVENT_STAGE_UPSELL_CARD_KEY;
let closure_3 = module_1254.createWithEqualityFn((arg0) => {
  let Storage;
  let closure_0;
  _require = arg0;
  let obj = {
    hasSeenUpsellCard: true === Storage.get(closure_2),
    markAsSeen() {
      const Storage = Storage2.Storage;
      const result = Storage.set(closure_2, true);
      const obj = react_native;
      obj.batchUpdates(() => closure_1_0({ hasSeenUpsellCard: true }));
    }
  };
  Storage = require("Storage").Storage;
  return obj;
});
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l(arg0) {
      const items = [, ];
      ({ hasSeenUpsellCard: arr[0], markAsSeen: arr[1] } = arg0);
      return items;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_3(first, _slicedToArray.shallow);
}) : (() => closure_3((arg0) => {
  const items = [, ];
  ({ hasSeenUpsellCard: arr[0], markAsSeen: arr[1] } = arg0);
  return items;
}, _slicedToArray.shallow));
let result = size.fileFinishedImporting("modules/guild_scheduled_events/StageChannelUpsellCardStore.tsx");

export const useStageChannelUpsellCardStore = tmp2;