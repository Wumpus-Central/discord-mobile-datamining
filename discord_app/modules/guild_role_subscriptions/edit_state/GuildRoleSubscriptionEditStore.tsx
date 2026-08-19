// === Module 14574: AllChannelAccessOptions ===

// Module 14574 (AllChannelAccessOptions)
import obj132 from "obj132" /* 2 */;
import keys from "keys" /* 644 */;

let obj = keys.create((arg0) => {
  closure_0 = arg0;
  return {
    listings: {},
    setListing(arg0, arg1) {
      const callback = arg0;
      closure_1 = arg1;
      return callback(dependencyMap[1]).batchUpdates(() => callback((listings) => {
        const obj = {};
        const merged = Object.assign(listings.listings);
        obj[closure_0] = callback(listings.listings[closure_0]);
        obj[0] = obj;
        return obj;
      }));
    },
    editStateIdsForGroup: {},
    setEditStateIdsForGroup(arg0, arg1) {
      const callback = arg0;
      closure_1 = arg1;
      return callback(dependencyMap[1]).batchUpdates(() => {
        callback((editStateIdsForGroup) => {
          const obj = {};
          const merged = Object.assign(editStateIdsForGroup.editStateIdsForGroup);
          obj[closure_0] = callback(editStateIdsForGroup.editStateIdsForGroup[closure_0]);
          obj[0] = obj;
          return obj;
        });
      });
    }
  };
});
const result = obj132.fileFinishedImporting("modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionEditStore.tsx");

export const AllChannelAccessOptions = { ALL_CHANNELS_ACCESS: 0, [0]: "ALL_CHANNELS_ACCESS", SOME_CHANNELS_ACCESS: 1, [1]: "SOME_CHANNELS_ACCESS" };
export const useEditStateStore = obj;