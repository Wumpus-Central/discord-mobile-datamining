// === Module 8843: useStageChannelUpsellCardStore ===

// Module 8843 (useStageChannelUpsellCardStore)
import obj132 from "obj132" /* 2 */;
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1397 */;
import isIterable from "isIterable" /* 4006 */;
import identity from "identity" /* 700 */;

let closure_2 = GUILD_EVENT_MAX_NAME_LENGTH.GUILD_EVENT_STAGE_UPSELL_CARD_KEY;
let closure_3 = identity.createWithEqualityFn((arg0) => {
  const _require = arg0;
  const obj = { hasSeenUpsellCard: null, markAsSeen: null };
  let Storage = _require(595).Storage;
  obj[0] = true === Storage.get(closure_2);
  obj[1] = function markAsSeen() {
    const Storage = callback(dependencyMap[2]).Storage;
    const result = Storage.set(closure_1_2, true);
    callback(dependencyMap[3]).batchUpdates(() => callback({ hasSeenUpsellCard: true }));
  };
  return obj;
});
let result = obj132.fileFinishedImporting("modules/guild_scheduled_events/StageChannelUpsellCardStore.tsx");

export const useStageChannelUpsellCardStore = function useStageChannelUpsellCardStore() {
  return callback((arg0) => {
    const items = [, ];
    ({ hasSeenUpsellCard: arr[0], markAsSeen: arr[1] } = arg0);
    return items;
  }, isIterable.shallow);
};