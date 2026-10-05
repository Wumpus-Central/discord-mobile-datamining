// discord_app/modules/guild_role_subscriptions/feature_gating/IAPEligibility.tsx
import Constants from "../../../Constants.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import getSystemVersion from "getSystemVersion.native.tsx";
import react from "../../../../_runtime/00019_react.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let c4 = "13.2";
let items = [Constants.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE];
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let stateFromStores;
      let tmp13;
      let tmp15;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = require("getSystemVersion");
        const str = tmpResult.getSystemVersion();
        let tmp6 = null != str;
        if (tmp6) {
          const parts = str.split(".");
          const _Number = Number;
          const mapped = parts.map(Number);
          const parts1 = v132.split(".");
          const _Number2 = Number;
          const mapped1 = parts1.map(Number);
          const _Math = Math;
          const bound = Math.max(mapped.length, mapped1.length);
          let num4 = 0;
          let num5 = 0;
          if (0 < bound) {
            while (true) {
              let num6 = mapped[num4];
              if (num6 == null) {
                num6 = 0;
              }
              let num7 = mapped1[num4];
              if (num7 == null) {
                num7 = 0;
              }
              num5 = -1;
              if (num6 < num7) {
                break;
              } else {
                num5 = 1;
                if (num6 > num7) {
                  break;
                } else {
                  let sum = num4 + 1;
                  num4 = sum;
                  num5 = 0;
                  if (sum >= bound) {
                    break;
                  }
                }
              }
            }
          }
          tmp6 = num5 >= 0;
        }
        cResult[0] = tmp6;
        first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult3 = require("PlatformUtils");
        const isIOSResult = tmpResult3.isIOS();
        cResult[1] = isIOSResult;
        stateFromStores = isIOSResult;
      } else {
        stateFromStores = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        items = [GuildStore];
        cResult[2] = items;
        tmp13 = items;
      } else {
        tmp13 = cResult[2];
      }
      if (cResult[3] !== arg0) {
        const fn = function v() {
          const guild = GuildStore.getGuild(closure_0);
          const everyResult =
            null != guild &&
            items.every((item) => {
              const features = guild.features;
              return features.has(item);
            });
          return everyResult;
        };
        cResult[3] = arg0;
        cResult[4] = fn;
        tmp15 = fn;
      } else {
        tmp15 = cResult[4];
      }
      const tmpResult4 = require("useStateFromStores");
      if (stateFromStores) {
        stateFromStores = tmpResult4.useStateFromStores(tmp13, tmp15);
      }
      if (stateFromStores) {
        stateFromStores = first;
      }
      return stateFromStores;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const memo = react.useMemo(() => {
        const obj = closure_0(dependencyMap[4]);
        const str = obj.getSystemVersion();
        let tmp = null != str;
        if (tmp) {
          const parts = str.split(".");
          const _Number = Number;
          const mapped = parts.map(Number);
          const parts1 = v132.split(".");
          const _Number2 = Number;
          const mapped1 = parts1.map(Number);
          const _Math = Math;
          const bound = Math.max(mapped.length, mapped1.length);
          let num4 = 0;
          let num5 = 0;
          if (0 < bound) {
            while (true) {
              let num6 = mapped[num4];
              if (num6 == null) {
                num6 = 0;
              }
              let num7 = mapped1[num4];
              if (num7 == null) {
                num7 = 0;
              }
              num5 = -1;
              if (num6 < num7) {
                break;
              } else {
                num5 = 1;
                if (num6 > num7) {
                  break;
                } else {
                  let sum = num4 + 1;
                  num4 = sum;
                  num5 = 0;
                  if (sum >= bound) {
                    break;
                  }
                }
              }
            }
          }
          tmp = num5 >= 0;
        }
        return tmp;
      }, []);
      let memo1 = react.useMemo(() => {
        const obj = closure_0(dependencyMap[3]);
        return obj.isIOS();
      }, []);
      let obj = require("useStateFromStores");
      items = [GuildStore];
      if (memo1) {
        memo1 = obj.useStateFromStores(items, () => {
          const guild = GuildStore.getGuild(closure_0);
          const everyResult =
            null != guild &&
            items.every((item) => {
              const features = guild.features;
              return features.has(item);
            });
          return everyResult;
        });
      }
      if (memo1) {
        memo1 = memo;
      }
      return memo1;
    };
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/IAPEligibility.tsx");

export const canUseRoleSubscriptionIAP = function canUseRoleSubscriptionIAP(guildId) {
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    const tmpResult = getSystemVersion;
    const str = tmpResult.getSystemVersion();
    if (null != str) {
      const parts = str.split(".");
      const _Number = Number;
      const mapped = parts.map(Number);
      const parts1 = v132.split(".");
      const _Number2 = Number;
      const mapped1 = parts1.map(Number);
      const _Math = Math;
      const bound = Math.max(mapped.length, mapped1.length);
      let num4 = 0;
      let num3 = 0;
      if (0 < bound) {
        while (true) {
          let num = mapped[num4];
          if (num == null) {
            num = 0;
          }
          let num2 = mapped1[num4];
          if (num2 == null) {
            num2 = 0;
          }
          num3 = -1;
          if (num < num2) {
            break;
          } else {
            num3 = 1;
            if (num > num2) {
              break;
            } else {
              let sum = num4 + 1;
              num4 = sum;
              num3 = 0;
              if (sum >= bound) {
                break;
              }
            }
          }
        }
      }
      if (-1 !== num3) {
        const guild = GuildStore.getGuild(guildId);
        const everyResult =
          null != guild &&
          items.every((item) => {
            const features = guild.features;
            return features.has(item);
          });
        return everyResult;
      }
    }
    return false;
  } else {
    return false;
  }
};
export const useCanUseRoleSubscriptionIAP = tmp2;
