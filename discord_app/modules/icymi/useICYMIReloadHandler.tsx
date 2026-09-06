// discord_app/modules/icymi/useICYMIReloadHandler.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/useICYMIReloadHandler.tsx");

export const useICYMIReloadHandler = function useICYMIReloadHandler(showDot) {
  closure_0 = showDot;
  const items = [showDot];
  return noop.useCallback(
    asyncGeneratorStep(async (arg0, value) => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === v3) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const ICYMIAnalytics = tmp2(8359).ICYMIAnalytics;
              let str = "NoDotShown";
              if (tmp2) {
                str = "DotShown";
              }
              const obj1 = { variant: str, homeSessionId: "gravity_refresh" };
              ICYMIAnalytics.trackFeedShown(obj1);
              v3 = 1;
              dependencyMap = 1;
              let obj2 = { value: v3(8351).fetchDehydrated({ isReloading: true }), done: false };
              return obj2;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let obj5 = v3(8351);
              v3 = 2;
              dependencyMap = 1;
              const obj4 = { value: obj5.reloadICYMITab(), done: false };
              return obj4;
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj5 = { value, done: true };
              return obj5;
            } else {
              obj2 = v3(8351);
              v3 = 3;
              dependencyMap = 1;
              const obj6 = { value: obj2.getGuildChannelScores(), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            obj = v3(8351);
            const recommendedGuilds = obj.getRecommendedGuilds();
            dependencyMap = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp19) {
          dependencyMap = tmp;
          throw tmp19;
        }
      }
    }),
    items,
  );
};
