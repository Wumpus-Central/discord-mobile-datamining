// === Module 15498: GuildRoleSubscriptionEditStore ===

// Module 15498 (GuildRoleSubscriptionEditStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionEditStore.tsx");

export const AllChannelAccessOptions = { ALL_CHANNELS_ACCESS: 0, [0]: "ALL_CHANNELS_ACCESS", SOME_CHANNELS_ACCESS: 1, [1]: "SOME_CHANNELS_ACCESS" };
export const useEditStateStore = module_560.create((arg0) => {
  closure_0 = arg0;
  return {
    listings: {},
    setListing(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      return closure_0(1248).batchUpdates(() => closure_0((listings) => {
        const obj = { listings: null };
        const obj2 = {};
        const merged = Object.assign(listings.listings);
        obj2[closure_1_0] = closure_1_1(listings.listings[closure_1_0]);
        obj.listings = obj2;
        return obj;
      }));
    },
    editStateIdsForGroup: {},
    setEditStateIdsForGroup(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      return closure_0(1248).batchUpdates(() => {
        closure_0((editStateIdsForGroup) => {
          const obj = { editStateIdsForGroup: null };
          const obj2 = {};
          const merged = Object.assign(editStateIdsForGroup.editStateIdsForGroup);
          obj2[closure_1_0] = closure_1_1(editStateIdsForGroup.editStateIdsForGroup[closure_1_0]);
          obj.editStateIdsForGroup = obj2;
          return obj;
        });
      });
    }
  };
});