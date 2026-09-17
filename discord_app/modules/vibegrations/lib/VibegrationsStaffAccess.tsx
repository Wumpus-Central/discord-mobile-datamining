// discord_app/modules/vibegrations/lib/VibegrationsStaffAccess.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
let c7 = "conjuring-help";
let c8 = "https://i.dis.gd/conjuring-access";
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsStaffAccess.tsx");

export const VIBEGRATIONS_STAFF_ACCESS_CHANNEL_NAME = "conjuring-help";
export const VIBEGRATIONS_STAFF_ACCESS_URL = "https://i.dis.gd/conjuring-access";
export const useVibegrationsStaffAccessTarget = function useVibegrationsStaffAccessTarget() {
  const items = [UserStore, GuildStore, GuildChannelStore, RelationshipStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.isStaff();
    }
    if (flag == null) {
      flag = false;
    }
    if (flag) {
      guildsArray = guildsArray.getGuildsArray();
      for (const item10017 of guildsArray) {
        let features = item10017.features;
        if (features.has(constants.INTERNAL_EMPLOYEE_ONLY)) {
          selectableChannels = selectableChannels.getSelectableChannels(item10017.id);
          let found = selectableChannels.find(
            (channel) =>
              closure_1_0(closure_1_1[6]).computeChannelName(channel.channel, currentUser, closure_1_4) === closure_1_7,
          );
          if (null != found) {
            let obj = { isStaff: flag, guildId: item10017.id, channelId: found.channel.id };
            obj3.return();
            return obj;
          }
        }
        continue;
      }
      const obj2 = { isStaff: flag, guildId: null, channelId: null };
      return obj2;
    } else {
      const obj4 = { isStaff: flag, guildId: null, channelId: null };
      return obj4;
    }
  });
  ({ guildId, channelId } = stateFromStoresObject);
  if (!stateFromStoresObject.isStaff) {
    return null;
  } else {
    if (null == guildId) {
      let obj2 = { kind: "url", url };
    }
    const obj3 = { kind: "channel", guildId, channelId };
  }
};
