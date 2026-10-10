// === Module 13109: useIsUserProfileObfuscated ===

// Module 13109 (useIsUserProfileObfuscated)
import UserProfileStore from "UserProfileStore" /* 7320 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useIsUserProfileObfuscated.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useIsUserProfileObfuscated(id) {
  _require = id;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function l() {
      return UserProfileStore.getUserProfile(id.id);
    };
    cResult[1] = id.id;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  let bio;
  if (stateFromStores != null) {
    bio = stateFromStores.bio;
  }
  let tmp9 = "" === bio;
  if (tmp9) {
    let pronouns;
    if (stateFromStores != null) {
      pronouns = stateFromStores.pronouns;
    }
    tmp9 = "" === pronouns;
  }
  if (tmp9) {
    let banner;
    if (stateFromStores != null) {
      banner = stateFromStores.banner;
    }
    tmp9 = undefined === banner;
  }
  if (tmp9) {
    let accentColor;
    if (stateFromStores != null) {
      accentColor = stateFromStores.accentColor;
    }
    tmp9 = undefined === accentColor;
  }
  if (tmp9) {
    tmp9 = id.flags === id.publicFlags;
  }
  if (tmp9) {
    let badges;
    if (stateFromStores != null) {
      badges = stateFromStores.badges;
    }
    let tmp14 = null == badges;
    if (!tmp14) {
      let length;
      if (stateFromStores != null) {
        const badges1 = stateFromStores.badges;
        if (badges1 != null) {
          length = badges1.length;
        }
      }
      tmp14 = 0 === length;
    }
    tmp9 = tmp14;
  }
  return tmp9;
}) : (function useIsUserProfileObfuscated(flags) {
  _require = flags;
  const items = [UserProfileStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => UserProfileStore.getUserProfile(id.id));
  let bio;
  if (stateFromStores != null) {
    bio = stateFromStores.bio;
  }
  let tmp3 = "" === bio;
  if (tmp3) {
    let pronouns;
    if (stateFromStores != null) {
      pronouns = stateFromStores.pronouns;
    }
    tmp3 = "" === pronouns;
  }
  if (tmp3) {
    let banner;
    if (stateFromStores != null) {
      banner = stateFromStores.banner;
    }
    tmp3 = undefined === banner;
  }
  if (tmp3) {
    let accentColor;
    if (stateFromStores != null) {
      accentColor = stateFromStores.accentColor;
    }
    tmp3 = undefined === accentColor;
  }
  if (tmp3) {
    tmp3 = flags.flags === flags.publicFlags;
  }
  if (tmp3) {
    let badges;
    if (stateFromStores != null) {
      badges = stateFromStores.badges;
    }
    let tmp8 = null == badges;
    if (!tmp8) {
      let length;
      if (stateFromStores != null) {
        const badges1 = stateFromStores.badges;
        if (badges1 != null) {
          length = badges1.length;
        }
      }
      tmp8 = 0 === length;
    }
    tmp3 = tmp8;
  }
  return tmp3;
});