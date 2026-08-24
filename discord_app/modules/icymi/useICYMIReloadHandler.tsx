// discord_app/modules/icymi/useICYMIReloadHandler.tsx
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../_runtime/00019_noop.js";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/icymi/useICYMIReloadHandler.tsx");

export const useICYMIReloadHandler = function useICYMIReloadHandler(showDot) {
  closure_0 = showDot;
  const items = [showDot];
  return React.useCallback(callback(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp2;
            const ICYMIAnalytics = closure_1_0(9102).ICYMIAnalytics;
            let str = "NoDotShown";
            if (closure_1_0) {
              str = "DotShown";
            }
            obj1 = { variant: null, homeSessionId: "gravity_refresh" };
            obj1[0] = str;
            ICYMIAnalytics.trackFeedShown(obj1);
            v0 = 1;
            dependencyMap = 1;
            let obj2 = { value: null, done: false };
            obj2[0] = v0(9094).fetchDehydrated({ isReloading: true });
            return obj2;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            let obj5 = v0(9094);
            v0 = 2;
            dependencyMap = 1;
            const obj4 = { value: null, done: false };
            obj4[0] = obj5.reloadICYMITab();
            return obj4;
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            obj2 = v0(9094);
            v0 = 3;
            dependencyMap = 1;
            const obj6 = { value: null, done: false };
            obj6[0] = obj2.getGuildChannelScores();
            return obj6;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw arg1;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj7 = { value: null, done: true };
          obj7[0] = arg1;
          return obj7;
        } else {
          obj = v0(9094);
          const recommendedGuilds = obj.getRecommendedGuilds();
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp19) {
        dependencyMap = tmp;
        throw tmp19;
      }
    }
  }), items);
};