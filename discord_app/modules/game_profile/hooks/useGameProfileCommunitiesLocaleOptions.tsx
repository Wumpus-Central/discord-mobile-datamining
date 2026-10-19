// === Module 9430: useGameProfileCommunitiesLocaleOptions ===

// Module 9430 (useGameProfileCommunitiesLocaleOptions)
import util from "util" /* 1128 */;
import noop from "module_19" /* 19 */;
import GameProfileCommunitiesLocaleFilterStore from "GameProfileCommunitiesLocaleFilterStore" /* 9428 */;

const require = globalThis.__r;

require = fn;
let closure_4 = fn(9428).useGameProfileCommunitiesLocaleFilterExclusions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileCommunitiesLocaleOptions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGameProfileCommunitiesLocaleOptions(arg0, arr) {
  _require = arg0;
  const cResult = require("c").c(21);
  const tmp4 = closure_4(arg0);
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(toggleLocale) {
      return toggleLocale.toggleLocale;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp6 = length(first);
  closure_2 = tmp6;
  if (cResult[1] !== arr) {
    _require = require("util").getAvailableLocales();
    const mapped = arr.map((locale) => {
      closure_0 = locale;
      if ("en-US" === locale) {
        const obj2 = { locale, label: null };
        const intl2 = closure_0(1128).intl;
        obj2.label = intl2.string(closure_0(1128).t.LQLMGP);
        return obj2;
      } else {
        const found = closure_0.find((value) => value.value === closure_0);
        const obj = { locale, label: null };
        let stringResult = locale;
        if (null != found) {
          const intl = closure_0(1128).intl;
          stringResult = intl.string(found.localizedName);
        }
        obj.label = stringResult;
        return obj;
      }
    });
    const sorted = mapped.sort((label, label2) => {
      label = label.label;
      return label.localeCompare(label2.label);
    });
    cResult[1] = arr;
    cResult[2] = sorted;
    arr = sorted;
    const tmpResult = require("util");
  } else {
    arr = cResult[2];
  }
  if (cResult[3] === tmp4) {
    if (cResult[4] === arr) {
      length = cResult[5].length;
      if (cResult[8] === length) {
        if (cResult[9] === tmp4) {
          if (cResult[10] === arr) {
            if (cResult[15] === arg0) {
              if (cResult[16] === tmp6) {
                let tmp14 = cResult[17];
              }
              if (cResult[18] === tmp10) {
                if (cResult[19] === tmp14) {
                  let tmp15 = cResult[20];
                }
                return tmp15;
              }
              const obj2 = { options: tmp10, toggleLocale: tmp14 };
              cResult[18] = tmp10;
              cResult[19] = tmp14;
              cResult[20] = obj2;
              tmp15 = obj2;
            }
            const fn4 = function _(arg0) {
              return closure_2(closure_0, arg0);
            };
            cResult[15] = arg0;
            cResult[16] = tmp6;
            cResult[17] = fn4;
            tmp14 = fn4;
          }
        }
      }
      if (cResult[12] === length) {
        if (cResult[13] === tmp4) {
          let tmp11 = cResult[14];
        }
        const mapped1 = arr.map(tmp11);
        cResult[8] = length;
        cResult[9] = tmp4;
        cResult[10] = arr;
        cResult[11] = mapped1;
      }
      const fn3 = function h(label) {
        locale = label.locale;
        const hasItem = set.has(locale);
        let tmp2 = !hasItem;
        const obj = { locale, label: label.label, checked: tmp2, disabled: null };
        if (!hasItem) {
          tmp2 = 1 === length;
        }
        obj.disabled = tmp2;
        return obj;
      };
      cResult[12] = length;
      cResult[13] = tmp4;
      cResult[14] = fn3;
      tmp11 = fn3;
    }
  }
  if (cResult[6] !== tmp4) {
    const fn2 = function v(arg0) {
      return !set.has(arg0);
    };
    cResult[6] = tmp4;
    cResult[7] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[7];
  }
  const found = arr.filter(tmp8);
  cResult[3] = tmp4;
  cResult[4] = arr;
  cResult[5] = found;
}) : (function useGameProfileCommunitiesLocaleOptions(stateFromStores, arg1) {
  closure_0 = stateFromStores;
  closure_1 = arg1;
  const tmp = memo(stateFromStores);
  noop = tmp;
  let tmp2 = GameProfileCommunitiesLocaleFilterStore((toggleLocale) => toggleLocale.toggleLocale);
  GameProfileCommunitiesLocaleFilterStore = tmp2;
  const items = [arg1];
  memo = noop.useMemo(() => {
    const availableLocales = util.getAvailableLocales();
    const mapped = dependencyMap.map((locale) => {
      closure_0 = locale;
      if ("en-US" === locale) {
        const obj2 = { locale, label: null };
        const intl2 = closure_0(1128).intl;
        obj2.label = intl2.string(closure_0(1128).t.LQLMGP);
        return obj2;
      } else {
        const found = closure_0.find((value) => value.value === closure_0);
        const obj = { locale, label: null };
        let stringResult = locale;
        if (null != found) {
          const intl = closure_0(1128).intl;
          stringResult = intl.string(found.localizedName);
        }
        obj.label = stringResult;
        return obj;
      }
    });
    return mapped.sort((label, label2) => {
      label = label.label;
      return label.localeCompare(label2.label);
    });
  }, items);
  let obj = { options: null, toggleLocale: null };
  const items1 = [memo, arg1, tmp];
  obj.options = noop.useMemo(() => {
    closure_1.filter((item) => !set.has(item)).length;
    return memo.map((label) => {
      locale = label.locale;
      const hasItem = set.has(locale);
      let tmp2 = !hasItem;
      const obj = { locale, label: label.label, checked: tmp2, disabled: null };
      if (!hasItem) {
        tmp2 = 1 === length;
      }
      obj.disabled = tmp2;
      return obj;
    });
  }, items1);
  const items2 = [tmp2, stateFromStores];
  obj.toggleLocale = noop.useCallback((arg0) => closure_3(closure_0, arg0), items2);
  return obj;
});