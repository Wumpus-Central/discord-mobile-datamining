// discord_app/modules/guild_scheduled_events/StageChannelUpsellCardStore.tsx
import set from "../../../_runtime/00002_set.js";
import GUILD_EVENT_MAX_NAME_LENGTH from "GuildScheduledEventsConstants.tsx";
import isIterable from "../../../_runtime/04184_isIterable.js";
import identity from "../../../_runtime/01244_identity.js";

let closure_2 = GUILD_EVENT_MAX_NAME_LENGTH.GUILD_EVENT_STAGE_UPSELL_CARD_KEY;
let closure_3 = identity.createWithEqualityFn((arg0) => {
  const _require = arg0;
  const obj = { hasSeenUpsellCard: null, markAsSeen: null };
  let Storage = require("../../../discord_common/js/packages/storage/Storage.tsx").Storage;
  obj[0] = true === Storage.get(closure_2);
  obj[1] = function markAsSeen() {
    const Storage = callback(closure_1_1[2]).Storage;
    const result = Storage.set(closure_1_2, true);
    callback(closure_1_1[3]).batchUpdates(() => callback({ hasSeenUpsellCard: true }));
  };
  return obj;
});
let result = set.fileFinishedImporting("modules/guild_scheduled_events/StageChannelUpsellCardStore.tsx");

export const useStageChannelUpsellCardStore = function useStageChannelUpsellCardStore() {
  return callback((arg0) => {
    const items = [,];
    ({ hasSeenUpsellCard: arr[0], markAsSeen: arr[1] } = arg0);
    return items;
  }, isIterable.shallow);
};
