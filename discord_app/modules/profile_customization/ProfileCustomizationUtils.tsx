// discord_app/modules/profile_customization/ProfileCustomizationUtils.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import util from "../../intl/index.native.tsx";
import shared from "../../design/shared.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import UserProfileSettingsStore from "../user_profile/UserProfileSettingsStore.tsx";
import UserProfileStore from "../user_profile/UserProfileStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/profile_customization/ProfileCustomizationUtils.tsx");

export const useAvatarsWithGuilds = function useAvatarsWithGuilds(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  return noop.useMemo(() => {
    const mutableAllGuildsAndMembers = GuildMemberStore.getMutableAllGuildsAndMembers();
    const obj = {};
    for (const key10008 in mutableAllGuildsAndMembers) {
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
    return entries.map((item) => item[1][0]);
  }, items);
};
export const useGuildMemberAndUserPendingNameplate = function useGuildMemberAndUserPendingNameplate(user, guildId) {
  _require = user;
  dependencyMap = guildId;
  let obj = require("initialize");
  const items = [GuildMemberStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (undefined !== closure_1) {
      member = GuildMemberStore.getMember(tmp, user.id);
    }
    return member;
  });
  const items1 = [UserProfileSettingsStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items1, () => ({
    pendingNameplate: UserProfileSettingsStore.getPendingChanges(closure_1).pendingNameplate,
    pendingErrors: UserProfileSettingsStore.getErrors(closure_1).nameplate,
  }));
  obj = { userNameplate: user.nameplate, guildNameplate: null, pendingNameplate: null, pendingErrors: null };
  let nameplate;
  ({ pendingNameplate, pendingErrors } = stateFromStoresObject);
  if (stateFromStores != null) {
    const collectibles = stateFromStores.collectibles;
    if (collectibles != null) {
      nameplate = collectibles.nameplate;
    }
  }
  obj.guildNameplate = nameplate;
  obj.pendingNameplate = pendingNameplate;
  obj.pendingErrors = pendingErrors;
  return obj;
};
export const useGuildMemberOrUserPendingDisplayNameStyles = function useGuildMemberOrUserPendingDisplayNameStyles(
  stateFromStores,
  guildId,
) {
  _require = stateFromStores;
  dependencyMap = guildId;
  let obj = require("initialize");
  const items = [GuildMemberStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (undefined !== closure_1) {
      member = null;
      if (null != closure_0) {
        member = GuildMemberStore.getMember(tmp, tmp3.id);
      }
    }
    return member;
  });
  const items1 = [UserProfileSettingsStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items1, () => ({
    pendingDisplayNameStyles: UserProfileSettingsStore.getPendingChanges(closure_1).pendingDisplayNameStyles,
    tryItOutDisplayNameStyles: UserProfileSettingsStore.getTryItOutChanges().tryItOutDisplayNameStyles,
    pendingErrors: UserProfileSettingsStore.getErrors(closure_1).displayNameStyles,
  }));
  let displayNameStyles;
  ({ pendingDisplayNameStyles, tryItOutDisplayNameStyles, pendingErrors } = stateFromStoresObject);
  if (stateFromStores != null) {
    displayNameStyles = stateFromStores.displayNameStyles;
  }
  obj = {
    userDisplayNameStyles: displayNameStyles,
    guildDisplayNameStyles: null,
    pendingDisplayNameStyles: null,
    tryItOutDisplayNameStyles: null,
    pendingErrors: null,
  };
  let displayNameStyles1;
  if (stateFromStores != null) {
    displayNameStyles1 = stateFromStores.displayNameStyles;
  }
  obj.guildDisplayNameStyles = displayNameStyles1;
  obj.pendingDisplayNameStyles = pendingDisplayNameStyles;
  obj.tryItOutDisplayNameStyles = tryItOutDisplayNameStyles;
  obj.pendingErrors = pendingErrors;
  return obj;
};
export const useUserAvatarDecoration = function useUserAvatarDecoration(user) {
  user = user.user;
  const guildId = user.guildId;
  const items = [GuildMemberStore];
  const stateFromStores = user(guildId[4]).useStateFromStores(items, () => {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, user.id);
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
  const items = [UserProfileStore];
  return initialize.useStateFromStores(items, () => {
    if (null == dependencyMap) {
      const userProfile = UserProfileStore.getUserProfile(user.id);
      let profileEffect;
      if (userProfile != null) {
        profileEffect = userProfile.profileEffect;
      }
    } else {
      const guildMemberProfile = UserProfileStore.getGuildMemberProfile(user.id, tmp);
      if (guildMemberProfile != null) {
        profileEffect = guildMemberProfile.profileEffect;
      }
    }
    return profileEffect;
  });
};
export const useUserProfileFrame = function useUserProfileFrame(arg0) {
  ({ user: require, guildId: dependencyMap } = arg0);
  const items = [UserProfileStore];
  return initialize.useStateFromStores(items, () => {
    if (null == dependencyMap) {
      const userProfile = UserProfileStore.getUserProfile(user.id);
      let profileFrame;
      if (userProfile != null) {
        profileFrame = userProfile.profileFrame;
      }
    } else {
      const guildMemberProfile = UserProfileStore.getGuildMemberProfile(user.id, tmp);
      if (guildMemberProfile != null) {
        profileFrame = guildMemberProfile.profileFrame;
      }
    }
    return profileFrame;
  });
};
export const useAvatarDecorationSettings = function useAvatarDecorationSettings(arg0) {
  _require = arg0;
  const items = [UserProfileSettingsStore];
  return require("initialize").useStateFromStoresObject(items, () => ({
    pendingAvatarDecoration: UserProfileSettingsStore.getPendingChanges(closure_0).pendingAvatarDecoration,
    errors: UserProfileSettingsStore.getErrors(closure_0).avatarDecoration,
  }));
};
export const useProfileEffectSettings = function useProfileEffectSettings(arg0) {
  _require = arg0;
  const items = [UserProfileSettingsStore];
  return require("initialize").useStateFromStoresObject(items, () => ({
    pendingProfileEffect: UserProfileSettingsStore.getPendingChanges(closure_0).pendingProfileEffect,
    errors: UserProfileSettingsStore.getErrors(closure_0).profileEffect,
  }));
};
export const useProfileFrameSettings = function useProfileFrameSettings(arg0) {
  _require = arg0;
  const items = [UserProfileSettingsStore];
  return require("initialize").useStateFromStoresObject(items, () => ({
    pendingProfileFrame: UserProfileSettingsStore.getPendingChanges(closure_0).pendingProfileFrame,
    errors: UserProfileSettingsStore.getErrors(closure_0).profileFrame,
  }));
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
export const showRemoveBanner = function showRemoveBanner(pendingBanner, banner) {
  if (undefined === pendingBanner) {
    let tmp2 = null != banner;
  } else {
    tmp2 = null != pendingBanner;
  }
  return tmp2;
};
export const announcePendingAvatarChange = function announcePendingAvatarChange(remove) {
  if ("set" === remove) {
    const AccessibilityAnnouncer3 = shared.AccessibilityAnnouncer;
    const intl3 = util.intl;
    AccessibilityAnnouncer3.announce(intl3.string(util.t.dyU5c5));
  } else if ("remove" === remove) {
    const AccessibilityAnnouncer2 = shared.AccessibilityAnnouncer;
    const intl2 = util.intl;
    AccessibilityAnnouncer2.announce(intl2.string(util.t["f1+oNk"]));
  } else {
    const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.string(util.t["/b5nqj"]));
  }
};
