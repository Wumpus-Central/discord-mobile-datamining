// discord_app/modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionEditStore.tsx
import 00560__ from "../../../../_runtime/metro/00560__.js";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionEditStore.tsx");

export const AllChannelAccessOptions = { ALL_CHANNELS_ACCESS: 0, [0]: "ALL_CHANNELS_ACCESS", SOME_CHANNELS_ACCESS: 1, [1]: "SOME_CHANNELS_ACCESS" };
export const useEditStateStore = module_560.create((arg0) => {
  closure_0 = arg0;
  return {
    listings: {},
    setListing(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      return closure_0(1249).batchUpdates(() => closure_0((listings) => {
        let obj = { listings: null };
        obj = {};
        const merged = Object.assign(listings.listings);
        obj[closure_1_0] = closure_1_1(listings.listings[closure_1_0]);
        obj.listings = obj;
        return obj;
      }));
    },
    editStateIdsForGroup: {},
    setEditStateIdsForGroup(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      return closure_0(1249).batchUpdates(() => {
        closure_0((editStateIdsForGroup) => {
          let obj = { editStateIdsForGroup: null };
          obj = {};
          const merged = Object.assign(editStateIdsForGroup.editStateIdsForGroup);
          obj[closure_1_0] = closure_1_1(editStateIdsForGroup.editStateIdsForGroup[closure_1_0]);
          obj.editStateIdsForGroup = obj;
          return obj;
        });
      });
    }
  };
});