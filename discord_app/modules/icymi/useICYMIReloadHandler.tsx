// discord_app/modules/icymi/useICYMIReloadHandler.tsx
import ICYMIActionCreatorsDefault from "ICYMIActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/useICYMIReloadHandler.tsx");

export const useICYMIReloadHandler = ReactCompilerGating.isReactCompilerEnabled()
  ? function useICYMIReloadHandler(arg0) {
      _require = arg0;
      const cResult = require("c").c(2);
      if (cResult[0] !== arg0) {
        _require = asyncGeneratorStep(async () => {
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
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
                  const ICYMIAnalytics = tmp2(14578).ICYMIAnalytics;
                  let str = "NoDotShown";
                  if (tmp2) {
                    str = "DotShown";
                  }
                  const obj5 = { variant: str, homeSessionId: "gravity_refresh" };
                  ICYMIAnalytics.trackFeedShown(obj5);
                  c1 = 1;
                  c2 = 1;
                  const obj7 = {
                    value: ICYMIActionCreatorsDefault.fetchDehydrated({ isReloading: true }),
                    done: false,
                  };
                  return obj7;
                }
              } else if (1 === tmp5) {
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
                  const obj9 = { value: ICYMIActionCreatorsDefault.reloadICYMITab(), done: false };
                  return obj9;
                }
              } else if (2 === tmp5) {
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
                  const obj12 = { value: ICYMIActionCreatorsDefault.getGuildChannelScores(), done: false };
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
                const recommendedGuilds = ICYMIActionCreatorsDefault.getRecommendedGuilds();
                c2 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp19) {
              c2 = tmp;
              throw tmp19;
            }
          }
        });
        function t0() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        }
        cResult[0] = arg0;
        cResult[1] = t0;
        let tmp2 = t0;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : function useICYMIReloadHandler(arg0) {
      closure_0 = arg0;
      const items = [arg0];
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
              return { value: "IconComponent", done: null };
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
                  const ICYMIAnalytics = tmp2(14578).ICYMIAnalytics;
                  let str = "NoDotShown";
                  if (tmp2) {
                    str = "DotShown";
                  }
                  const obj5 = { variant: str, homeSessionId: "gravity_refresh" };
                  ICYMIAnalytics.trackFeedShown(obj5);
                  v3 = 1;
                  dependencyMap = 1;
                  const obj7 = { value: v3(8455).fetchDehydrated({ isReloading: true }), done: false };
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
                  const obj9 = { value: v3(8455).reloadICYMITab(), done: false };
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
                  const obj12 = { value: v3(8455).getGuildChannelScores(), done: false };
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
                const recommendedGuilds = v3(8455).getRecommendedGuilds();
                dependencyMap = 3;
                return { value: "IconComponent", done: null };
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
