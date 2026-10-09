// === Module 8274: ProfileCustomizationUtils ===

// Module 8274 (ProfileCustomizationUtils)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import shared from "shared" /* 4930 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8268 */;
import UserProfileStore from "UserProfileStore" /* 7314 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;

const require = globalThis.__r;

require = fn;
fn(558);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAvatarsWithGuilds(arg0) {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const mutableAllGuildsAndMembers = GuildMemberStore.getMutableAllGuildsAndMembers();
    cResult[0] = mutableAllGuildsAndMembers;
    let first = mutableAllGuildsAndMembers;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const obj2 = {};
    for (const key10026 in first) {
      let tmp12 = first[key10026][arg0];
      let avatar;
      if (tmp12 != null) {
        avatar = tmp12.avatar;
      }
      if (null == avatar) {
        continue;
      } else {
        if (null == obj2[avatar]) {
          obj2[avatar] = [];
        }
        let arr = obj2[avatar];
        let arr2 = arr.push(key10026);
        continue;
      }
      continue;
    }
    const _Object = Object;
    const entries = Object.entries(obj2);
    const mapped = entries.map((item) => item[1][0]);
    cResult[1] = arg0;
    cResult[2] = mapped;
    let tmp5 = mapped;
  } else {
    tmp5 = cResult[2];
  }
  return tmp5;
}) : (function useAvatarsWithGuilds(arg0) {
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
        let arr2 = arr.push(key10008);
        continue;
      }
      continue;
    }
    const entries = Object.entries(obj);
    return entries.map((item) => item[1][0]);
  }, items);
});
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildMemberAndUserPendingNameplate(id, arg1) {
  _require = id;
  dependencyMap = arg1;
  const cResult = require("c").c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === id.id) {
      let tmp6 = cResult[3];
    }
    const stateFromStores = tmp(504).useStateFromStores(first, tmp6);
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [UserProfileSettingsStore];
      cResult[4] = items1;
      let tmp8 = items1;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] !== arg1) {
      const fn2 = function f() {
        return { pendingNameplate: UserProfileSettingsStore.getPendingChanges(closure_1).pendingNameplate, pendingErrors: UserProfileSettingsStore.getErrors(closure_1).nameplate };
      };
      cResult[5] = arg1;
      cResult[6] = fn2;
      let tmp10 = fn2;
    } else {
      tmp10 = cResult[6];
    }
    const tmpResult = tmp(504);
    const stateFromStoresObject = tmp(504).useStateFromStoresObject(tmp8, tmp10);
    ({ pendingNameplate, pendingErrors } = stateFromStoresObject);
    let nameplate;
    if (stateFromStores != null) {
      const collectibles = stateFromStores.collectibles;
      if (collectibles != null) {
        nameplate = collectibles.nameplate;
      }
    }
    if (cResult[7] === pendingErrors) {
      if (cResult[8] === pendingNameplate) {
        if (cResult[9] === nameplate) {
          if (cResult[10] === id.nameplate) {
            let tmp14 = cResult[11];
          }
          return tmp14;
        }
      }
    }
    const obj2 = { userNameplate: id.nameplate, guildNameplate: nameplate, pendingNameplate, pendingErrors };
    cResult[7] = pendingErrors;
    cResult[8] = pendingNameplate;
    cResult[9] = nameplate;
    cResult[10] = id.nameplate;
    cResult[11] = obj2;
    tmp14 = obj2;
    const tmpResult2 = tmp(504);
  }
  const fn = function u() {
    let member = null;
    if (undefined !== closure_1) {
      member = GuildMemberStore.getMember(tmp, id.id);
    }
    return member;
  };
  cResult[1] = arg1;
  cResult[2] = id.id;
  cResult[3] = fn;
  tmp6 = fn;
  const obj = require("c");
}) : (function useGuildMemberAndUserPendingNameplate(nameplate, arg1) {
  _require = nameplate;
  dependencyMap = arg1;
  const items = [GuildMemberStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let member = null;
    if (undefined !== closure_1) {
      member = GuildMemberStore.getMember(tmp, nameplate.id);
    }
    return member;
  });
  const obj = require("initialize");
  const items1 = [UserProfileSettingsStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items1, () => ({ pendingNameplate: UserProfileSettingsStore.getPendingChanges(closure_1).pendingNameplate, pendingErrors: UserProfileSettingsStore.getErrors(closure_1).nameplate }));
  const obj3 = { userNameplate: nameplate.nameplate, guildNameplate: null, pendingNameplate: null, pendingErrors: null };
  nameplate = undefined;
  ({ pendingNameplate, pendingErrors } = stateFromStoresObject);
  if (stateFromStores != null) {
    const collectibles = stateFromStores.collectibles;
    if (collectibles != null) {
      nameplate = collectibles.nameplate;
    }
  }
  obj3.guildNameplate = nameplate;
  obj3.pendingNameplate = pendingNameplate;
  obj3.pendingErrors = pendingErrors;
  return obj3;
});
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildMemberOrUserPendingDisplayNameStyles(displayNameStyles, arg1) {
  _require = displayNameStyles;
  dependencyMap = arg1;
  const cResult = require("c").c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === displayNameStyles) {
      let tmp6 = cResult[3];
    }
    const stateFromStores = tmp(504).useStateFromStores(first, tmp6);
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [UserProfileSettingsStore];
      cResult[4] = items1;
      let tmp8 = items1;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] !== arg1) {
      const fn2 = function f() {
        return { pendingDisplayNameStyles: UserProfileSettingsStore.getPendingChanges(closure_1).pendingDisplayNameStyles, tryItOutDisplayNameStyles: UserProfileSettingsStore.getTryItOutChanges().tryItOutDisplayNameStyles, pendingErrors: UserProfileSettingsStore.getErrors(closure_1).displayNameStyles };
      };
      cResult[5] = arg1;
      cResult[6] = fn2;
      let tmp10 = fn2;
    } else {
      tmp10 = cResult[6];
    }
    const tmpResult = tmp(504);
    const stateFromStoresObject = tmp(504).useStateFromStoresObject(tmp8, tmp10);
    ({ pendingDisplayNameStyles, tryItOutDisplayNameStyles, pendingErrors } = stateFromStoresObject);
    displayNameStyles = undefined;
    if (displayNameStyles != null) {
      displayNameStyles = displayNameStyles.displayNameStyles;
    }
    let displayNameStyles1;
    if (stateFromStores != null) {
      displayNameStyles1 = stateFromStores.displayNameStyles;
    }
    if (cResult[7] === pendingDisplayNameStyles) {
      if (cResult[8] === pendingErrors) {
        if (cResult[9] === displayNameStyles) {
          if (cResult[10] === displayNameStyles1) {
            if (cResult[11] === tryItOutDisplayNameStyles) {
              let tmp15 = cResult[12];
            }
            return tmp15;
          }
        }
      }
    }
    const obj2 = { userDisplayNameStyles: displayNameStyles, guildDisplayNameStyles: displayNameStyles1, pendingDisplayNameStyles, tryItOutDisplayNameStyles, pendingErrors };
    cResult[7] = pendingDisplayNameStyles;
    cResult[8] = pendingErrors;
    cResult[9] = displayNameStyles;
    cResult[10] = displayNameStyles1;
    cResult[11] = tryItOutDisplayNameStyles;
    cResult[12] = obj2;
    tmp15 = obj2;
    const tmpResult2 = tmp(504);
  }
  const fn = function u() {
    let member = null;
    if (undefined !== closure_1) {
      member = null;
      if (null != closure_0) {
        member = GuildMemberStore.getMember(tmp, tmp3.id);
      }
    }
    return member;
  };
  cResult[1] = arg1;
  cResult[2] = displayNameStyles;
  cResult[3] = fn;
  tmp6 = fn;
  const obj = require("c");
}) : (function useGuildMemberOrUserPendingDisplayNameStyles(displayNameStyles, arg1) {
  _require = displayNameStyles;
  dependencyMap = arg1;
  const items = [GuildMemberStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let member = null;
    if (undefined !== closure_1) {
      member = null;
      if (null != closure_0) {
        member = GuildMemberStore.getMember(tmp, tmp3.id);
      }
    }
    return member;
  });
  const obj = require("initialize");
  const items1 = [UserProfileSettingsStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items1, () => ({ pendingDisplayNameStyles: UserProfileSettingsStore.getPendingChanges(closure_1).pendingDisplayNameStyles, tryItOutDisplayNameStyles: UserProfileSettingsStore.getTryItOutChanges().tryItOutDisplayNameStyles, pendingErrors: UserProfileSettingsStore.getErrors(closure_1).displayNameStyles }));
  displayNameStyles = undefined;
  ({ pendingDisplayNameStyles, tryItOutDisplayNameStyles, pendingErrors } = stateFromStoresObject);
  if (displayNameStyles != null) {
    displayNameStyles = displayNameStyles.displayNameStyles;
  }
  const obj3 = { userDisplayNameStyles: displayNameStyles, guildDisplayNameStyles: null, pendingDisplayNameStyles: null, tryItOutDisplayNameStyles: null, pendingErrors: null };
  let displayNameStyles1;
  if (stateFromStores != null) {
    displayNameStyles1 = stateFromStores.displayNameStyles;
  }
  obj3.guildDisplayNameStyles = displayNameStyles1;
  obj3.pendingDisplayNameStyles = pendingDisplayNameStyles;
  obj3.tryItOutDisplayNameStyles = tryItOutDisplayNameStyles;
  obj3.pendingErrors = pendingErrors;
  return obj3;
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUserAvatarDecoration(user) {
  const cResult = user(guildId[5]).c(4);
  user = user.user;
  guildId = user.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    if (cResult[2] === user) {
      let tmp6 = cResult[3];
    }
    const stateFromStores = tmp(tmp2[6]).useStateFromStores(first, tmp6);
    if (null != guildId) {
      let avatarDecoration1;
      if (stateFromStores != null) {
        avatarDecoration1 = stateFromStores.avatarDecoration;
      }
      let avatarDecoration = avatarDecoration1;
    } else {
      avatarDecoration = user.avatarDecoration;
    }
    return avatarDecoration;
  }
  const fn = function l() {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, user.id);
    }
    return member;
  };
  cResult[1] = guildId;
  cResult[2] = user;
  cResult[3] = fn;
  tmp6 = fn;
  const obj = user(guildId[5]);
  tmp = user;
  tmp2 = guildId;
}) : (function useUserAvatarDecoration(user) {
  user = user.user;
  const guildId = user.guildId;
  const items = [GuildMemberStore];
  const stateFromStores = user(guildId[6]).useStateFromStores(items, () => {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, user.id);
    }
    return member;
  });
  if (null != guildId) {
    let avatarDecoration1;
    if (stateFromStores != null) {
      avatarDecoration1 = stateFromStores.avatarDecoration;
    }
    let avatarDecoration = avatarDecoration1;
  } else {
    avatarDecoration = user.avatarDecoration;
  }
  return avatarDecoration;
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUserProfileEffect(user) {
  const cResult = user(guildId[5]).c(4);
  user = user.user;
  guildId = user.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    if (cResult[2] === user.id) {
      let tmp6 = cResult[3];
    }
    return tmp(tmp2[6]).useStateFromStores(first, tmp6);
  }
  const fn = function s() {
    if (null == guildId) {
      const userProfile = UserProfileStore.getUserProfile(user.id);
      let profileEffect1;
      if (userProfile != null) {
        profileEffect1 = userProfile.profileEffect;
      }
      let profileEffect = profileEffect1;
    } else {
      const guildMemberProfile = UserProfileStore.getGuildMemberProfile(user.id, tmp);
      if (guildMemberProfile != null) {
        profileEffect = guildMemberProfile.profileEffect;
      }
    }
    return profileEffect;
  };
  cResult[1] = guildId;
  cResult[2] = user.id;
  cResult[3] = fn;
  tmp6 = fn;
  const obj = user(guildId[5]);
  tmp = user;
  tmp2 = guildId;
}) : (function useUserProfileEffect(arg0) {
  ({ user: require, guildId: dependencyMap } = arg0);
  const items = [UserProfileStore];
  return initialize.useStateFromStores(items, () => {
    if (null == dependencyMap) {
      const userProfile = UserProfileStore.getUserProfile(user.id);
      let profileEffect1;
      if (userProfile != null) {
        profileEffect1 = userProfile.profileEffect;
      }
      let profileEffect = profileEffect1;
    } else {
      const guildMemberProfile = UserProfileStore.getGuildMemberProfile(user.id, tmp);
      if (guildMemberProfile != null) {
        profileEffect = guildMemberProfile.profileEffect;
      }
    }
    return profileEffect;
  });
});
ReactCompilerGating = fn(558);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUserProfileFrame(user) {
  const cResult = user(guildId[5]).c(4);
  user = user.user;
  guildId = user.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    if (cResult[2] === user.id) {
      let tmp6 = cResult[3];
    }
    return tmp(tmp2[6]).useStateFromStores(first, tmp6);
  }
  const fn = function s() {
    if (null == guildId) {
      const userProfile = UserProfileStore.getUserProfile(user.id);
      let profileFrame1;
      if (userProfile != null) {
        profileFrame1 = userProfile.profileFrame;
      }
      let profileFrame = profileFrame1;
    } else {
      const guildMemberProfile = UserProfileStore.getGuildMemberProfile(user.id, tmp);
      if (guildMemberProfile != null) {
        profileFrame = guildMemberProfile.profileFrame;
      }
    }
    return profileFrame;
  };
  cResult[1] = guildId;
  cResult[2] = user.id;
  cResult[3] = fn;
  tmp6 = fn;
  const obj = user(guildId[5]);
  tmp = user;
  tmp2 = guildId;
}) : (function useUserProfileFrame(arg0) {
  ({ user: require, guildId: dependencyMap } = arg0);
  const items = [UserProfileStore];
  return initialize.useStateFromStores(items, () => {
    if (null == dependencyMap) {
      const userProfile = UserProfileStore.getUserProfile(user.id);
      let profileFrame1;
      if (userProfile != null) {
        profileFrame1 = userProfile.profileFrame;
      }
      let profileFrame = profileFrame1;
    } else {
      const guildMemberProfile = UserProfileStore.getGuildMemberProfile(user.id, tmp);
      if (guildMemberProfile != null) {
        profileFrame = guildMemberProfile.profileFrame;
      }
    }
    return profileFrame;
  });
});
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAvatarDecorationSettings(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return { pendingAvatarDecoration: UserProfileSettingsStore.getPendingChanges(closure_0).pendingAvatarDecoration, errors: UserProfileSettingsStore.getErrors(closure_0).avatarDecoration };
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresObject(first, tmp6);
}) : (function useAvatarDecorationSettings(arg0) {
  _require = arg0;
  const items = [UserProfileSettingsStore];
  return require("initialize").useStateFromStoresObject(items, () => ({ pendingAvatarDecoration: UserProfileSettingsStore.getPendingChanges(closure_0).pendingAvatarDecoration, errors: UserProfileSettingsStore.getErrors(closure_0).avatarDecoration }));
});
ReactCompilerGating = fn(558);
const tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function useProfileEffectSettings(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return { pendingProfileEffect: UserProfileSettingsStore.getPendingChanges(closure_0).pendingProfileEffect, errors: UserProfileSettingsStore.getErrors(closure_0).profileEffect };
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresObject(first, tmp6);
}) : (function useProfileEffectSettings(arg0) {
  _require = arg0;
  const items = [UserProfileSettingsStore];
  return require("initialize").useStateFromStoresObject(items, () => ({ pendingProfileEffect: UserProfileSettingsStore.getPendingChanges(closure_0).pendingProfileEffect, errors: UserProfileSettingsStore.getErrors(closure_0).profileEffect }));
});
function getProfilePreviewValue(arg0) {
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
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/profile_customization/ProfileCustomizationUtils.tsx");

export const useAvatarsWithGuilds = tmp2;
export const useGuildMemberAndUserPendingNameplate = tmp3;
export const useGuildMemberOrUserPendingDisplayNameStyles = tmp4;
export const useUserAvatarDecoration = tmp5;
export const useUserProfileEffect = tmp6;
export const useUserProfileFrame = tmp7;
export const useAvatarDecorationSettings = tmp8;
export const useProfileEffectSettings = tmp9;
export const useProfileFrameSettings = ReactCompilerGating.isReactCompilerEnabled() ? (function useProfileFrameSettings(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return { pendingProfileFrame: UserProfileSettingsStore.getPendingChanges(closure_0).pendingProfileFrame, errors: UserProfileSettingsStore.getErrors(closure_0).profileFrame };
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresObject(first, tmp6);
}) : (function useProfileFrameSettings(arg0) {
  _require = arg0;
  const items = [UserProfileSettingsStore];
  return require("initialize").useStateFromStoresObject(items, () => ({ pendingProfileFrame: UserProfileSettingsStore.getPendingChanges(closure_0).pendingProfileFrame, errors: UserProfileSettingsStore.getErrors(closure_0).profileFrame }));
});
export { getProfilePreviewValue };
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
export const announcePendingAvatarChange = function announcePendingAvatarChange(set) {
  if ("set" === set) {
    const AccessibilityAnnouncer3 = shared.AccessibilityAnnouncer;
    const intl3 = util.intl;
    AccessibilityAnnouncer3.announce(intl3.string(util.t.dyU5c5));
  } else if ("remove" === set) {
    const AccessibilityAnnouncer2 = shared.AccessibilityAnnouncer;
    const intl2 = util.intl;
    AccessibilityAnnouncer2.announce(intl2.string(util.t["f1+oNk"]));
  } else {
    const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.string(util.t["/b5nqj"]));
  }
};