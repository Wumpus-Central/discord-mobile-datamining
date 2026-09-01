// === Module 9231: useIsUserProfileObfuscated ===

// Module 9231 (useIsUserProfileObfuscated)
import closure_2 from "createUserWidgetFromServer" /* 7366 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/useIsUserProfileObfuscated.tsx");

export default function useIsUserProfileObfuscated(flags) {
  const _require = flags;
  const items = [closure_2];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_2.getUserProfile(id.id));
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
};