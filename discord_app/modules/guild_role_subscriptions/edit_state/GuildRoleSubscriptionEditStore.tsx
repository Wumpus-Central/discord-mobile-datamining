// discord_app/modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionEditStore.tsx
import 00570__ from "../../../../_runtime/metro/00570__.js";
import size from "../../../../_runtime/metro/00002__.js";

let obj = module_570.create((arg0) => {
  let closure_0 = arg0;
  let obj = {
    listings: {},
    setListing(arg0, arg1) {
      closure_0 = arg0;
      let closure_1 = arg1;
      let obj = closure_0(dependencyMap[1]);
      return obj.batchUpdates(() => closure_0((listings) => {
        let obj2;
        const obj = { listings: obj2 };
        obj2 = {};
        const merged = Object.assign(listings.listings);
        obj2[closure_1_0] = closure_1_1(listings.listings[closure_1_0]);
        return obj;
      }));
    },
    editStateIdsForGroup: {},
    setEditStateIdsForGroup(arg0, arg1) {
      closure_0 = arg0;
      let closure_1 = arg1;
      let obj = closure_0(dependencyMap[1]);
      return obj.batchUpdates(() => {
        closure_0((editStateIdsForGroup) => {
          let obj2;
          const obj = { editStateIdsForGroup: obj2 };
          obj2 = {};
          const merged = Object.assign(editStateIdsForGroup.editStateIdsForGroup);
          obj2[closure_1_0] = closure_1_1(editStateIdsForGroup.editStateIdsForGroup[closure_1_0]);
          return obj;
        });
      });
    }
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionEditStore.tsx");

export const AllChannelAccessOptions = { ALL_CHANNELS_ACCESS: 0, [0]: "ALL_CHANNELS_ACCESS", SOME_CHANNELS_ACCESS: 1, [1]: "SOME_CHANNELS_ACCESS" };
export const useEditStateStore = obj;