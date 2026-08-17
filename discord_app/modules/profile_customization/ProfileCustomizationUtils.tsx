// discord_app/modules/profile_customization/ProfileCustomizationUtils.tsx
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import AccessibilityAnnouncer4 from "AccessibilityAnnouncer" /* 1363 */;
import closure_2 from "noop" /* 19 */;
import closure_3 from "handleFormOpen" /* 8370 */;
import closure_4 from "createUserWidgetFromServer" /* 5365 */;
import closure_5 from "trackCommunicationDisabled" /* 1990 */;
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/profile_customization/ProfileCustomizationUtils.tsx");

export const useAvatarsWithGuilds = function useAvatarsWithGuilds(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  return React.useMemo(() => {
    const mutableAllGuildsAndMembers = closure_1_5.getMutableAllGuildsAndMembers();
    const obj = {};
    for (const key10008 in mutableAllGuildsAndMembers) {
      let tmp4 = key10008;
      let tmp5 = closure_0;
      let tmp6 = mutableAllGuildsAndMembers[key10008][closure_0];
      let avatar;
      if (tmp6 != null) {
        avatar = tmp6.avatar;
      }
      if (null == avatar) {
        continue;
      } else {
        if (null == obj[avatar]) {
          obj[avatar] = [];
        }
        let arr = obj[avatar];
        arr = arr.push(key10008);
        continue;
      }
      continue;
    }
    const entries = Object.entries(obj);
    return entries.map((arg0) => arg0[1][0]);
  }, items);
};
export const useGuildMemberAndUserPendingNameplate = function useGuildMemberAndUserPendingNameplate(user, guildId) {
  const _require = user;
  dependencyMap = guildId;
  let obj = _initialize;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (undefined !== closure_1) {
      member = closure_1_5.getMember(tmp, user.id);
    }
    return member;
  });
  const items1 = [closure_3];
  const stateFromStoresObject = _initialize.useStateFromStoresObject(items1, () => ({ pendingNameplate: closure_1_3.getPendingChanges(closure_1).pendingNameplate, pendingErrors: closure_1_3.getErrors(closure_1).nameplate }));
  obj = { userNameplate: user.nameplate, guildNameplate: null, pendingNameplate: null, pendingErrors: null };
  let nameplate;
  ({ pendingNameplate, pendingErrors } = stateFromStoresObject);
  if (stateFromStores != null) {
    const collectibles = stateFromStores.collectibles;
    if (collectibles != null) {
      nameplate = collectibles.nameplate;
    }
  }
  obj[1] = nameplate;
  obj[2] = pendingNameplate;
  obj[3] = pendingErrors;
  return obj;
};
export const useGuildMemberOrUserPendingDisplayNameStyles = function useGuildMemberOrUserPendingDisplayNameStyles(stateFromStores, guildId) {
  const _require = stateFromStores;
  dependencyMap = guildId;
  let obj = _initialize;
  const items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (undefined !== closure_1) {
      member = null;
      if (null != closure_0) {
        member = closure_1_5.getMember(tmp, tmp3.id);
      }
    }
    return member;
  });
  const items1 = [closure_3];
  const stateFromStoresObject = _initialize.useStateFromStoresObject(items1, () => ({ pendingDisplayNameStyles: closure_1_3.getPendingChanges(closure_1).pendingDisplayNameStyles, tryItOutDisplayNameStyles: closure_1_3.getTryItOutChanges().tryItOutDisplayNameStyles, pendingErrors: closure_1_3.getErrors(closure_1).displayNameStyles }));
  let displayNameStyles;
  ({ pendingDisplayNameStyles, tryItOutDisplayNameStyles, pendingErrors } = stateFromStoresObject);
  if (stateFromStores != null) {
    displayNameStyles = stateFromStores.displayNameStyles;
  }
  obj = { userDisplayNameStyles: displayNameStyles, guildDisplayNameStyles: null, pendingDisplayNameStyles: null, tryItOutDisplayNameStyles: null, pendingErrors: null };
  let displayNameStyles1;
  if (stateFromStores != null) {
    displayNameStyles1 = stateFromStores.displayNameStyles;
  }
  obj[1] = displayNameStyles1;
  obj[2] = pendingDisplayNameStyles;
  obj[3] = tryItOutDisplayNameStyles;
  obj[4] = pendingErrors;
  return obj;
};
export const useUserAvatarDecoration = function useUserAvatarDecoration(user) {
  user = user.user;
  const guildId = user.guildId;
  const items = [closure_5];
  const stateFromStores = user(guildId[4]).useStateFromStores(items, () => {
    let member = null;
    if (null != guildId) {
      member = closure_1_5.getMember(tmp, user.id);
    }
    return member;
  });
  if (null != guildId) {
    let avatarDecoration;
    if (stateFromStores != null) {
      avatarDecoration = stateFromStores.avatarDecoration;
    }
  } else {
    avatarDecoration = user.avatarDecoration;
  }
  return avatarDecoration;
};
export const useUserProfileEffect = function useUserProfileEffect(arg0) {
  ({ user: require, guildId: dependencyMap } = arg0);
  const items = [closure_4];
  return initialize.useStateFromStores(items, () => {
    if (null == closure_1) {
      const userProfile = closure_1_4.getUserProfile(user.id);
      let profileEffect;
      if (userProfile != null) {
        profileEffect = userProfile.profileEffect;
      }
    } else {
      const guildMemberProfile = closure_1_4.getGuildMemberProfile(user.id, tmp);
      if (guildMemberProfile != null) {
        profileEffect = guildMemberProfile.profileEffect;
      }
    }
    return profileEffect;
  });
};
export const useUserProfileFrame = function useUserProfileFrame(arg0) {
  ({ user: require, guildId: dependencyMap } = arg0);
  const items = [closure_4];
  return initialize.useStateFromStores(items, () => {
    if (null == closure_1) {
      const userProfile = closure_1_4.getUserProfile(user.id);
      let profileFrame;
      if (userProfile != null) {
        profileFrame = userProfile.profileFrame;
      }
    } else {
      const guildMemberProfile = closure_1_4.getGuildMemberProfile(user.id, tmp);
      if (guildMemberProfile != null) {
        profileFrame = guildMemberProfile.profileFrame;
      }
    }
    return profileFrame;
  });
};
export const useAvatarDecorationSettings = function useAvatarDecorationSettings(arg0) {
  const _require = arg0;
  const items = [closure_3];
  return _initialize.useStateFromStoresObject(items, () => ({ pendingAvatarDecoration: closure_1_3.getPendingChanges(closure_0).pendingAvatarDecoration, errors: closure_1_3.getErrors(closure_0).avatarDecoration }));
};
export const useProfileEffectSettings = function useProfileEffectSettings(arg0) {
  const _require = arg0;
  const items = [closure_3];
  return _initialize.useStateFromStoresObject(items, () => ({ pendingProfileEffect: closure_1_3.getPendingChanges(closure_0).pendingProfileEffect, errors: closure_1_3.getErrors(closure_0).profileEffect }));
};
export const useProfileFrameSettings = function useProfileFrameSettings(arg0) {
  const _require = arg0;
  const items = [closure_3];
  return _initialize.useStateFromStoresObject(items, () => ({ pendingProfileFrame: closure_1_3.getPendingChanges(closure_0).pendingProfileFrame, errors: closure_1_3.getErrors(closure_0).profileFrame }));
};
export const getProfilePreviewValue = function getProfilePreviewValue(arg0) {
  ({ userValue, guildValue, pendingValue, guildId } = arg0);
  if ("" !== pendingValue) {
    if (null !== pendingValue) {
      if ("" === pendingValue) {
        let tmp2 = userValue;
        if (null != guildId) {
          tmp2 = userValue;
          if ("" !== guildValue) {
            tmp2 = userValue;
            if (null != guildValue) {
              tmp2 = guildValue;
            }
          }
        }
        pendingValue = tmp2;
      }
    }
    return pendingValue;
  }
  let tmp3 = null;
  if (null != guildId) {
    tmp3 = userValue;
  }
  pendingValue = tmp3;
};
export const resolveCollectiblesOverride = function resolveCollectiblesOverride(arg0) {
  ({ pendingValue, userValue, guildValue, guildId } = arg0);
  if (undefined !== pendingValue) {
    if ("" !== pendingValue) {
      if (null !== pendingValue) {
        if ("" === pendingValue) {
          let tmp2 = userValue;
          if (null != guildId) {
            tmp2 = userValue;
            if ("" !== guildValue) {
              tmp2 = userValue;
              if (null != guildValue) {
                tmp2 = guildValue;
              }
            }
          }
          pendingValue = tmp2;
        }
      }
      if (pendingValue == null) {
        pendingValue = null;
      }
      return pendingValue;
    }
    let tmp3 = null;
    if (null != guildId) {
      tmp3 = userValue;
    }
    pendingValue = tmp3;
  }
};
export const showRemoveAvatar = function showRemoveAvatar(pendingAvatar, avatar) {
  if (undefined === pendingAvatar) {
    let tmp2 = null != avatar;
  } else {
    tmp2 = null != pendingAvatar;
  }
  return tmp2;
};
export const showRemoveBanner = function showRemoveBanner(arg0, banner) {
  if (undefined === arg0) {
    let tmp2 = null != banner;
  } else {
    tmp2 = null != arg0;
  }
  return tmp2;
};
export const announcePendingAvatarChange = function announcePendingAvatarChange(set) {
  if ("set" === set) {
    const AccessibilityAnnouncer3 = AccessibilityAnnouncer4.AccessibilityAnnouncer;
    const intl3 = getSystemLocale.intl;
    AccessibilityAnnouncer3.announce(intl3.string(getSystemLocale.t.dyU5c5));
  } else if ("remove" === set) {
    const AccessibilityAnnouncer2 = AccessibilityAnnouncer4.AccessibilityAnnouncer;
    const intl2 = getSystemLocale.intl;
    AccessibilityAnnouncer2.announce(intl2.string(getSystemLocale.t["f1+oNk"]));
  } else {
    const AccessibilityAnnouncer = AccessibilityAnnouncer4.AccessibilityAnnouncer;
    const intl = getSystemLocale.intl;
    AccessibilityAnnouncer.announce(intl.string(getSystemLocale.t["/b5nqj"]));
  }
};