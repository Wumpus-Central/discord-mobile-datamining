// discord_app/modules/user_profile/hooks/useBadges.tsx
import defaultAreStatesEqual from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import explicitContentFromProto from "../../user_settings/UserSettings.tsx";
import initialize from "../../../stores/StreamerModeStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";

require = fn;
const legacy_username = "legacy_username";
const result = require("obj132").fileFinishedImporting("modules/user_profile/hooks/useBadges.tsx");

export default function useBadges(getBadges) {
  const LegacyUsernameDisabled = explicitContentFromProto.LegacyUsernameDisabled;
  let setting = LegacyUsernameDisabled.useSetting();
  if (undefined !== arg1) {
    setting = arg1;
  }
  let tmpResult = defaultAreStatesEqual;
  const items = [closure_3];
  const stateFromStores = tmpResult.useStateFromStores(items, () => currentUser.getCurrentUser());
  tmpResult = defaultAreStatesEqual;
  [][0] = closure_2;
  if (null == getBadges) {
    return [];
  } else {
    let badges;
    if (getBadges != null) {
      badges = getBadges.getBadges();
    }
    if (badges == null) {
      badges = [];
    }
    let found = badges;
    if (tmp7) {
      found = badges.filter((item, index) => item.id !== closure_4);
    }
    let mapped = found;
    if (tmp6) {
      mapped = found.map((item, index) => {
        const obj = {};
        const merged = Object.assign(item);
        if (item.id === closure_4) {
          const intl = callback(1236).intl;
          let description = intl.string(callback(1236).t.Br1ls3);
        } else {
          description = item.description;
        }
        obj.description = description;
        return obj;
      });
    }
    return mapped;
  }
};
export const QUEST_COMPLETED_BADGE = "quest_completed";