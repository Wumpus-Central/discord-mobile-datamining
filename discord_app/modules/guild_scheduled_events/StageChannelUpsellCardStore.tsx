// discord_app/modules/guild_scheduled_events/StageChannelUpsellCardStore.tsx
import Storage2 from "../../../discord_common/js/packages/storage/Storage.tsx";
import ReactBatchUpdates from "../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants.tsx";
import _mod4184 from "../../../_runtime/metro/04184__.js";
import identity from "../../../_runtime/metro/01244__.js";
import size from "../../../_runtime/metro/00002__.js";

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

export const useStageChannelUpsellCardStore = function useStageChannelUpsellCardStore() {
  return closure_3((arg0) => {
    const items = [,];
    ({ hasSeenUpsellCard: arr[0], markAsSeen: arr[1] } = arg0);
    return items;
  }, _mod4184.shallow);
};
