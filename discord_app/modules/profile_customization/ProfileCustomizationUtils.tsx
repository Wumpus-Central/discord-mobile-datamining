// === Module 7837: ProfileCustomizationUtils ===

// Module 7837 (ProfileCustomizationUtils)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import shared from "shared" /* 4729 */;
import react from "react" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7831 */;
import UserProfileStore from "UserProfileStore" /* 7111 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, displayNameStyles;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const mutableAllGuildsAndMembers = GuildMemberStore.getMutableAllGuildsAndMembers();
    cResult[0] = mutableAllGuildsAndMembers;
    first = mutableAllGuildsAndMembers;
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
    tmp5 = mapped;
  } else {
    tmp5 = cResult[2];
  }
  return tmp5;
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  return react.useMemo(() => {
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
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1) => {
  let closure_1;
  let first;
  let pendingErrors;
  let pendingNameplate;
  _require = id;
  dependencyMap = arg1;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp6;
    let tmp8;
    let tmp10;
    if (cResult[2] === id.id) {
      tmp6 = cResult[3];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [UserProfileSettingsStore];
      cResult[4] = items1;
      tmp8 = items1;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] !== arg1) {
      const fn2 = function f() {
        const obj = { pendingNameplate: UserProfileSettingsStore.getPendingChanges(closure_1).pendingNameplate, pendingErrors: UserProfileSettingsStore.getErrors(closure_1).nameplate };
        return obj;
      };
      cResult[5] = arg1;
      cResult[6] = fn2;
      tmp10 = fn2;
    } else {
      tmp10 = cResult[6];
    }
    const tmpResult2 = tmp(504);
    const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp8, tmp10);
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
          let tmp14;
          if (cResult[10] === id.nameplate) {
            tmp14 = cResult[11];
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
}) : ((nameplate, arg1) => {
  let closure_1;
  let pendingErrors;
  let pendingNameplate;
  _require = nameplate;
  dependencyMap = arg1;
  let obj = require("get initialized");
  const items = [GuildMemberStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (undefined !== closure_1) {
      member = GuildMemberStore.getMember(tmp, nameplate.id);
    }
    return member;
  });
  const items1 = [UserProfileSettingsStore];
  const obj2 = require("get initialized");
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const obj = { pendingNameplate: UserProfileSettingsStore.getPendingChanges(closure_1).pendingNameplate, pendingErrors: UserProfileSettingsStore.getErrors(closure_1).nameplate };
    return obj;
  });
  const obj3 = { userNameplate: nameplate.nameplate, guildNameplate: nameplate, pendingNameplate, pendingErrors };
  nameplate = undefined;
  ({ pendingNameplate, pendingErrors } = stateFromStoresObject);
  if (stateFromStores != null) {
    const collectibles = stateFromStores.collectibles;
    if (collectibles != null) {
      nameplate = collectibles.nameplate;
    }
  }
  return obj3;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((displayNameStyles, arg1) => {
  let closure_1;
  let first;
  let pendingDisplayNameStyles;
  let pendingErrors;
  let tryItOutDisplayNameStyles;
  _require = displayNameStyles;
  dependencyMap = arg1;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp6;
    let tmp8;
    let tmp10;
    if (cResult[2] === displayNameStyles) {
      tmp6 = cResult[3];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [UserProfileSettingsStore];
      cResult[4] = items1;
      tmp8 = items1;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] !== arg1) {
      const fn2 = function f() {
        const obj = { pendingDisplayNameStyles: UserProfileSettingsStore.getPendingChanges(closure_1).pendingDisplayNameStyles, tryItOutDisplayNameStyles: UserProfileSettingsStore.getTryItOutChanges().tryItOutDisplayNameStyles, pendingErrors: UserProfileSettingsStore.getErrors(closure_1).displayNameStyles };
        return obj;
      };
      cResult[5] = arg1;
      cResult[6] = fn2;
      tmp10 = fn2;
    } else {
      tmp10 = cResult[6];
    }
    const tmpResult2 = tmp(504);
    const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp8, tmp10);
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
            let tmp15;
            if (cResult[11] === tryItOutDisplayNameStyles) {
              tmp15 = cResult[12];
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
  }
  const fn = function u() {
    let member = null;
    if (undefined !== closure_1) {
      member = null;
      if (null != displayNameStyles) {
        member = GuildMemberStore.getMember(tmp, tmp3.id);
      }
    }
    return member;
  };
  cResult[1] = arg1;
  cResult[2] = displayNameStyles;
  cResult[3] = fn;
  tmp6 = fn;
}) : ((displayNameStyles, arg1) => {
  let closure_1;
  let displayNameStyles1;
  let pendingDisplayNameStyles;
  let pendingErrors;
  let tryItOutDisplayNameStyles;
  _require = displayNameStyles;
  dependencyMap = arg1;
  let obj = require("get initialized");
  const items = [GuildMemberStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let member = null;
    if (undefined !== closure_1) {
      member = null;
      if (null != displayNameStyles) {
        member = GuildMemberStore.getMember(tmp, tmp3.id);
      }
    }
    return member;
  });
  const items1 = [UserProfileSettingsStore];
  const obj2 = require("get initialized");
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const obj = { pendingDisplayNameStyles: UserProfileSettingsStore.getPendingChanges(closure_1).pendingDisplayNameStyles, tryItOutDisplayNameStyles: UserProfileSettingsStore.getTryItOutChanges().tryItOutDisplayNameStyles, pendingErrors: UserProfileSettingsStore.getErrors(closure_1).displayNameStyles };
    return obj;
  });
  displayNameStyles = undefined;
  ({ pendingDisplayNameStyles, tryItOutDisplayNameStyles, pendingErrors } = stateFromStoresObject);
  if (displayNameStyles != null) {
    displayNameStyles = displayNameStyles.displayNameStyles;
  }
  const obj3 = { userDisplayNameStyles: displayNameStyles, guildDisplayNameStyles: displayNameStyles1, pendingDisplayNameStyles, tryItOutDisplayNameStyles, pendingErrors };
  displayNameStyles1 = undefined;
  if (stateFromStores != null) {
    displayNameStyles1 = stateFromStores.displayNameStyles;
  }
  return obj3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let first;
  let guildId;
  const tmp = user;
  const obj = user(guildId[5]);
  const cResult = obj.c(4);
  user = user.user;
  const tmp2 = guildId;
  guildId = user.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    let tmp6;
    let avatarDecoration;
    if (cResult[2] === user) {
      tmp6 = cResult[3];
    }
    const tmpResult = tmp(tmp2[6]);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
    if (null != guildId) {
      let avatarDecoration1;
      if (stateFromStores != null) {
        avatarDecoration1 = stateFromStores.avatarDecoration;
      }
      avatarDecoration = avatarDecoration1;
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
}) : ((user) => {
  let avatarDecoration;
  user = user.user;
  const guildId = user.guildId;
  const items = [GuildMemberStore];
  const obj = user(guildId[6]);
  const stateFromStores = obj.useStateFromStores(items, () => {
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
    avatarDecoration = avatarDecoration1;
  } else {
    avatarDecoration = user.avatarDecoration;
  }
  return avatarDecoration;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let first;
  let guildId;
  const tmp = user;
  const obj = user(guildId[5]);
  const cResult = obj.c(4);
  user = user.user;
  const tmp2 = guildId;
  guildId = user.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    let tmp6;
    if (cResult[2] === user.id) {
      tmp6 = cResult[3];
    }
    const tmpResult = tmp(tmp2[6]);
    return tmpResult.useStateFromStores(first, tmp6);
  }
  const fn = function o() {
    let profileEffect;
    if (null == guildId) {
      const userProfile = UserProfileStore.getUserProfile(user.id);
      let profileEffect1;
      if (userProfile != null) {
        profileEffect1 = userProfile.profileEffect;
      }
      profileEffect = profileEffect1;
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
}) : ((arg0) => {
  let require;
  let user;
  ({ user: require, guildId: dependencyMap } = arg0);
  const items = [UserProfileStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    let profileEffect;
    if (null == dependencyMap) {
      const userProfile = UserProfileStore.getUserProfile(require.id);
      let profileEffect1;
      if (userProfile != null) {
        profileEffect1 = userProfile.profileEffect;
      }
      profileEffect = profileEffect1;
    } else {
      const guildMemberProfile = UserProfileStore.getGuildMemberProfile(require.id, tmp);
      if (guildMemberProfile != null) {
        profileEffect = guildMemberProfile.profileEffect;
      }
    }
    return profileEffect;
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let first;
  let guildId;
  const tmp = user;
  const obj = user(guildId[5]);
  const cResult = obj.c(4);
  user = user.user;
  const tmp2 = guildId;
  guildId = user.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    let tmp6;
    if (cResult[2] === user.id) {
      tmp6 = cResult[3];
    }
    const tmpResult = tmp(tmp2[6]);
    return tmpResult.useStateFromStores(first, tmp6);
  }
  const fn = function o() {
    let profileFrame;
    if (null == guildId) {
      const userProfile = UserProfileStore.getUserProfile(user.id);
      let profileFrame1;
      if (userProfile != null) {
        profileFrame1 = userProfile.profileFrame;
      }
      profileFrame = profileFrame1;
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
}) : ((arg0) => {
  let require;
  let user;
  ({ user: require, guildId: dependencyMap } = arg0);
  const items = [UserProfileStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    let profileFrame;
    if (null == dependencyMap) {
      const userProfile = UserProfileStore.getUserProfile(require.id);
      let profileFrame1;
      if (userProfile != null) {
        profileFrame1 = userProfile.profileFrame;
      }
      profileFrame = profileFrame1;
    } else {
      const guildMemberProfile = UserProfileStore.getGuildMemberProfile(require.id, tmp);
      if (guildMemberProfile != null) {
        profileFrame = guildMemberProfile.profileFrame;
      }
    }
    return profileFrame;
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const obj = { pendingAvatarDecoration: UserProfileSettingsStore.getPendingChanges(closure_0).pendingAvatarDecoration, errors: UserProfileSettingsStore.getErrors(closure_0).avatarDecoration };
      return obj;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresObject(first, tmp6);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [UserProfileSettingsStore];
  return obj.useStateFromStoresObject(items, () => {
    const obj = { pendingAvatarDecoration: UserProfileSettingsStore.getPendingChanges(closure_0).pendingAvatarDecoration, errors: UserProfileSettingsStore.getErrors(closure_0).avatarDecoration };
    return obj;
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const obj = { pendingProfileEffect: UserProfileSettingsStore.getPendingChanges(closure_0).pendingProfileEffect, errors: UserProfileSettingsStore.getErrors(closure_0).profileEffect };
      return obj;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresObject(first, tmp6);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [UserProfileSettingsStore];
  return obj.useStateFromStoresObject(items, () => {
    const obj = { pendingProfileEffect: UserProfileSettingsStore.getPendingChanges(closure_0).pendingProfileEffect, errors: UserProfileSettingsStore.getErrors(closure_0).profileEffect };
    return obj;
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const obj = { pendingProfileFrame: UserProfileSettingsStore.getPendingChanges(closure_0).pendingProfileFrame, errors: UserProfileSettingsStore.getErrors(closure_0).profileFrame };
      return obj;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresObject(first, tmp6);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [UserProfileSettingsStore];
  return obj.useStateFromStoresObject(items, () => {
    const obj = { pendingProfileFrame: UserProfileSettingsStore.getPendingChanges(closure_0).pendingProfileFrame, errors: UserProfileSettingsStore.getErrors(closure_0).profileFrame };
    return obj;
  });
});
function getProfilePreviewValue(arg0) {
  let guildId;
  let guildValue;
  let pendingValue;
  let userValue;
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
const result = size.fileFinishedImporting("modules/profile_customization/ProfileCustomizationUtils.tsx");

export const useAvatarsWithGuilds = tmp2;
export const useGuildMemberAndUserPendingNameplate = tmp3;
export const useGuildMemberOrUserPendingDisplayNameStyles = tmp4;
export const useUserAvatarDecoration = tmp5;
export const useUserProfileEffect = tmp6;
export const useUserProfileFrame = tmp7;
export const useAvatarDecorationSettings = tmp8;
export const useProfileEffectSettings = tmp9;
export const useProfileFrameSettings = tmp10;
export { getProfilePreviewValue };
export const resolveCollectiblesOverride = function resolveCollectiblesOverride(arg0) {
  let guildId;
  let guildValue;
  let pendingValue;
  let userValue;
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
  let tmp2;
  if (undefined === pendingAvatar) {
    tmp2 = null != avatar;
  } else {
    tmp2 = null != pendingAvatar;
  }
  return tmp2;
};
export const showRemoveBanner = function showRemoveBanner(pendingBanner, banner) {
  let tmp2;
  if (undefined === pendingBanner) {
    tmp2 = null != banner;
  } else {
    tmp2 = null != pendingBanner;
  }
  return tmp2;
};
export const announcePendingAvatarChange = function announcePendingAvatarChange(set) {
  if ("set" === set) {
    const AccessibilityAnnouncer3 = shared.AccessibilityAnnouncer;
    const announce3 = AccessibilityAnnouncer3.announce;
    const intl3 = intl4.intl;
    announce3(intl3.string(intl4.t.dyU5c5));
  } else if ("remove" === set) {
    const AccessibilityAnnouncer2 = shared.AccessibilityAnnouncer;
    const announce2 = AccessibilityAnnouncer2.announce;
    const intl2 = intl4.intl;
    announce2(intl2.string(intl4.t["f1+oNk"]));
  } else {
    const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = intl4.intl;
    announce(intl.string(intl4.t["/b5nqj"]));
  }
};