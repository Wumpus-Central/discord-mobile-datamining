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
    asyncGeneratorStep(async () => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const ICYMIAnalytics = tmp2(8480).ICYMIAnalytics;
              let str = "NoDotShown";
              if (tmp2) {
                str = "DotShown";
              }
              const obj5 = { variant: str, homeSessionId: "gravity_refresh" };
              ICYMIAnalytics.trackFeedShown(obj5);
              v3 = 1;
              dependencyMap = 1;
              const obj7 = { value: v3(8472).fetchDehydrated({ isReloading: true }), done: false };
              return obj7;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              v3 = 2;
              dependencyMap = 1;
              const obj9 = { value: v3(8472).reloadICYMITab(), done: false };
              return obj9;
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else {
              v3 = 3;
              dependencyMap = 1;
              const obj12 = { value: v3(8472).getGuildChannelScores(), done: false };
              return obj12;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            const recommendedGuilds = v3(8472).getRecommendedGuilds();
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
