// === Module 8352: useBadges ===

// Module 8352 (useBadges)
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import UserSettings from "UserSettings" /* 2041 */;
import StreamerModeStore from "StreamerModeStore" /* 4924 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

require = fn;
const legacy_username = "legacy_username";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useBadges.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useBadges(getBadges, arg1) {
  const cResult = c.c(12);
  const LegacyUsernameDisabled = UserSettings.LegacyUsernameDisabled;
  let setting = LegacyUsernameDisabled.useSetting();
  if (undefined !== arg1) {
    setting = arg1;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function c() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = useStateFromStores.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [StreamerModeStore];
    const fn2 = function v() {
      return StreamerModeStore.hidePersonalInformation;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp10 = fn2;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = useStateFromStores;
  const stateFromStores1 = useStateFromStores.useStateFromStores(tmp9, tmp10);
  if (null == getBadges) {
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [];
      cResult[4] = items2;
      let tmp19 = items2;
    } else {
      tmp19 = cResult[4];
    }
    return tmp19;
  } else {
    if (cResult[5] === stateFromStores) {
      if (cResult[6] === setting) {
        if (cResult[7] === getBadges) {
          if (cResult[8] === stateFromStores1) {
            let tmp13 = cResult[9];
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
    let arr4 = badges;
    if (null != stateFromStores) {
      arr4 = badges;
      if (stateFromStores.id === getBadges.userId) {
        arr4 = badges;
        if (setting) {
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            class E {
              constructor(arg0) {
                return getBadges.id !== closure_1_4;
              }
            }
            cResult[10] = E;
          } else {
            class E {
              constructor(arg0) {
                return getBadges.id !== closure_1_4;
              }
            }
          }
          const found = badges.filter(E);
        }
      }
    }
    if (!stateFromStores1) {
      class E {
        constructor(arg0) {
          return getBadges.id !== closure_1_4;
        }
      }
      cResult[5] = stateFromStores;
      cResult[6] = setting;
      cResult[7] = getBadges;
      cResult[8] = stateFromStores1;
      cResult[9] = arr4;
      tmp13 = arr4;
    } else {
      class E {
        constructor(arg0) {
          return getBadges.id !== closure_1_4;
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor(arg0) {
            obj = {};
            merged = Object.assign(getBadges);
            if (getBadges.id === closure_1_4) {
              tmp2 = closure_1_0;
              tmp3 = closure_1_1;
              intl = closure_1_0(closure_1_1[6]).intl;
              description = intl.string(closure_1_0(closure_1_1[6]).t.Br1ls3);
            } else {
              description = getBadges.description;
            }
            obj.description = description;
            return obj;
          }
        }
        cResult[11] = F;
      } else {
        class F {
          constructor(arg0) {
            obj = {};
            merged = Object.assign(getBadges);
            if (getBadges.id === closure_1_4) {
              tmp2 = closure_1_0;
              tmp3 = closure_1_1;
              intl = closure_1_0(closure_1_1[6]).intl;
              description = intl.string(closure_1_0(closure_1_1[6]).t.Br1ls3);
            } else {
              description = getBadges.description;
            }
            obj.description = description;
            return obj;
          }
        }
      }
      const mapped = arr4.map(F);
    }
  }
  const tmpResult2 = useStateFromStores;
}) : (function useBadges(getBadges, arg1) {
  const LegacyUsernameDisabled = UserSettings.LegacyUsernameDisabled;
  let setting = LegacyUsernameDisabled.useSetting();
  if (undefined !== arg1) {
    setting = arg1;
  }
  const items = [UserStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => currentUser.getCurrentUser());
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
    if (tmp7) {
      found = badges.filter((id) => id.id !== legacy_username);
    }
    let mapped = found;
    if (tmp6) {
      mapped = found.map((id) => {
        const obj = {};
        const merged = Object.assign(id);
        if (id.id === legacy_username) {
          const intl = require("util").intl;
          let description = intl.string(require("util").t.Br1ls3);
        } else {
          description = id.description;
        }
        obj.description = description;
        return obj;
      });
    }
    return mapped;
  }
  const tmpResult = useStateFromStores;
});
export const QUEST_COMPLETED_BADGE = "quest_completed";