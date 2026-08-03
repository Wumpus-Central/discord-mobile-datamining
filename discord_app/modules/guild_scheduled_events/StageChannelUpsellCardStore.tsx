import { GUILD_EVENT_STAGE_UPSELL_CARD_KEY as closure_2 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import identity from "identity";

let closure_3 = identity.createWithEqualityFn((arg0) => {
  const _require = arg0;
  const obj = { hasSeenUpsellCard: null, markAsSeen: null };
  let Storage = _require(595).Storage;
  obj[0] = true === Storage.get(closure_2);
  obj[1] = function markAsSeen() {
    const Storage = callback(outer1_1[2]).Storage;
    const result = Storage.set(outer1_2, true);
    callback(outer1_1[3]).batchUpdates(() => callback({ hasSeenUpsellCard: true }));
  };
  return obj;
});
let result = require("Storage").fileFinishedImporting("modules/guild_scheduled_events/StageChannelUpsellCardStore.tsx");

export const useStageChannelUpsellCardStore = function useStageChannelUpsellCardStore() {
  return callback((arg0) => {
    const items = [, ];
    ({ hasSeenUpsellCard: arr[0], markAsSeen: arr[1] } = arg0);
    return items;
  }, require(3868) /* isIterable */.shallow);
};