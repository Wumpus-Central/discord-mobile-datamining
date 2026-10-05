// === Module 7914: useBadges ===

// Module 7914 (useBadges)
import useStateFromStores from "useStateFromStores" /* 573 */;
import react from "react" /* 576 */;
import UserSettings from "UserSettings" /* 2028 */;
import StreamerModeStore from "StreamerModeStore" /* 4723 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const legacy_username = "legacy_username";
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((getBadges, arg1) => {
  let currentUser;
  let tmp10;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = react;
  const cResult = obj.c(12);
  const LegacyUsernameDisabled = UserSettings.LegacyUsernameDisabled;
  let setting = LegacyUsernameDisabled.useSetting();
  if (undefined !== arg1) {
    setting = arg1;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function u() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = useStateFromStores;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [StreamerModeStore];
    const fn2 = function v() {
      return StreamerModeStore.hidePersonalInformation;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult2 = useStateFromStores;
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp10);
  if (null == getBadges) {
    let tmp17;
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [];
      cResult[4] = items2;
      tmp17 = items2;
    } else {
      tmp17 = cResult[4];
    }
    return tmp17;
  } else {
    if (cResult[5] === stateFromStores) {
      if (cResult[6] === setting) {
        if (cResult[7] === getBadges) {
          let tmp13;
          if (cResult[8] === stateFromStores1) {
            tmp13 = cResult[9];
          }
          return tmp13;
        }
      }
    }
    let badges;
    if (getBadges != null) {
      badges = getBadges.getBadges();
    }
    if (badges == null) {
      badges = [];
    }
    let found = badges;
    if (null != stateFromStores) {
      found = badges;
      if (stateFromStores.id === getBadges.userId) {
        found = badges;
        if (setting) {
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            class E {
              constructor(id) {
                return id.id !== legacy_username;
              }
            }
            cResult[10] = E;
          } else {
            class E {
              constructor(id) {
                return id.id !== legacy_username;
              }
            }
          }
          found = badges.filter(E);
        }
      }
    }
    let mapped = found;
    if (stateFromStores1) {
      class E {
        constructor(id) {
          return id.id !== legacy_username;
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor(id) {
            let description;
            const obj = { description };
            const merged = Object.assign(id);
            if (id.id === legacy_username) {
              const intl = require("intl").intl;
              description = intl.string(require("intl").t.Br1ls3);
            } else {
              description = id.description;
            }
            return obj;
          }
        }
        cResult[11] = F;
      } else {
        class F {
          constructor(id) {
            let description;
            const obj = { description };
            const merged = Object.assign(id);
            if (id.id === legacy_username) {
              const intl = require("intl").intl;
              description = intl.string(require("intl").t.Br1ls3);
            } else {
              description = id.description;
            }
            return obj;
          }
        }
      }
      mapped = found.map(F);
    }
    cResult[5] = stateFromStores;
    cResult[6] = setting;
    cResult[7] = getBadges;
    cResult[8] = stateFromStores1;
    cResult[9] = mapped;
    tmp13 = mapped;
  }
}) : ((getBadges, arg1) => {
  let currentUser;
  const LegacyUsernameDisabled = UserSettings.LegacyUsernameDisabled;
  let setting = LegacyUsernameDisabled.useSetting();
  if (undefined !== arg1) {
    setting = arg1;
  }
  const items = [UserStore];
  const tmpResult = useStateFromStores;
  const stateFromStores = tmpResult.useStateFromStores(items, () => currentUser.getCurrentUser());
  useStateFromStores;
  [][0] = StreamerModeStore;
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
    const tmp7 = null != stateFromStores && stateFromStores.id === getBadges.userId && setting;
    if (tmp7) {
      found = badges.filter((id) => id.id !== legacy_username);
    }
    let mapped = found;
    if (tmp6) {
      mapped = found.map((id) => {
        let description;
        const obj = { description };
        const merged = Object.assign(id);
        if (id.id === legacy_username) {
          const intl = require("intl").intl;
          description = intl.string(require("intl").t.Br1ls3);
        } else {
          description = id.description;
        }
        return obj;
      });
    }
    return mapped;
  }
});
const result = size.fileFinishedImporting("modules/user_profile/hooks/useBadges.tsx");

export default tmp2;
export const QUEST_COMPLETED_BADGE = "quest_completed";