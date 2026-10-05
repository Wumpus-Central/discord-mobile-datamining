// === Module 16431: useICYMIReloadHandler ===

// Module 16431 (useICYMIReloadHandler)
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8029 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c2;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp2;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    _require = _asyncToGenerator(async () => {
      let obj10;
      let obj3;
      let obj6;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const ICYMIAnalytics = tmp(dependencyMap[4]).ICYMIAnalytics;
              let str = "NoDotShown";
              const trackFeedShown = ICYMIAnalytics.trackFeedShown;
              if (tmp) {
                str = "DotShown";
              }
              const obj5 = { variant: str, homeSessionId: "gravity_refresh" };
              trackFeedShown(obj5);
              c1 = 1;
              c2 = 1;
              const obj7 = { value: obj10.fetchDehydrated({ isReloading: true }), done: false };
              obj10 = ICYMIActionCreatorsDefault;
              return obj7;
            }
          } else if (1 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              c1 = 2;
              c2 = 1;
              const obj9 = { value: obj6.reloadICYMITab(), done: false };
              obj6 = ICYMIActionCreatorsDefault;
              return obj9;
            }
          } else if (2 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else {
              c1 = 3;
              c2 = 1;
              const obj12 = { value: obj3.getGuildChannelScores(), done: false };
              obj3 = ICYMIActionCreatorsDefault;
              return obj12;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            const obj = ICYMIActionCreatorsDefault;
            const recommendedGuilds = obj.getRecommendedGuilds();
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp18) {
          c2 = 3;
          throw tmp18;
        }
      }
    });
    const fn = function() {
      return closure_0(...arguments);
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  return react.useCallback(_asyncToGenerator(async () => {
    let v3;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === v3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const ICYMIAnalytics = tmp(c2[4]).ICYMIAnalytics;
            let str = "NoDotShown";
            const trackFeedShown = ICYMIAnalytics.trackFeedShown;
            if (tmp) {
              str = "DotShown";
            }
            const obj5 = { variant: str, homeSessionId: "gravity_refresh" };
            trackFeedShown(obj5);
            const obj10 = v3(c2[5]);
            v3 = 1;
            c2 = 1;
            const obj7 = { value: obj10.fetchDehydrated({ isReloading: true }), done: false };
            return obj7;
          }
        } else if (1 === v3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            const obj6 = v3(c2[5]);
            v3 = 2;
            c2 = 1;
            const obj9 = { value: obj6.reloadICYMITab(), done: false };
            return obj9;
          }
        } else if (2 === v3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            const obj3 = v3(c2[5]);
            v3 = 3;
            c2 = 1;
            const obj12 = { value: obj3.getGuildChannelScores(), done: false };
            return obj12;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          const obj = v3(c2[5]);
          const recommendedGuilds = obj.getRecommendedGuilds();
          c2 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp18) {
        c2 = 3;
        throw tmp18;
      }
    }
  }), items);
});
const result = size.fileFinishedImporting("modules/icymi/useICYMIReloadHandler.tsx");

export const useICYMIReloadHandler = tmp2;