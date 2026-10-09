// discord_app/modules/guild_role_subscriptions/feature_gating/IAPEligibility.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import getSystemVersion from "getSystemVersion.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";

const require = globalThis.__r;

require = fn;
let c4 = "13.2";
let items = [fn(1085).GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/IAPEligibility.tsx");

export const canUseRoleSubscriptionIAP = function canUseRoleSubscriptionIAP(guildId) {
  if (obj.isIOS()) {
    const str = getSystemVersion.getSystemVersion();
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
        guild = GuildStore.getGuild(guildId);
        let everyResult = null != guild;
        if (everyResult) {
          everyResult = items.every((item) => {
            const features = guild.features;
            return features.has(item);
          });
        }
        return everyResult;
      }
    }
    return false;
  } else {
    return false;
  }
  obj = PlatformUtils;
};
export const useCanUseRoleSubscriptionIAP = ReactCompilerGating.isReactCompilerEnabled()
  ? function useCanUseRoleSubscriptionIAP(arg0) {
      _require = arg0;
      const cResult = require("c").c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const str = tmp(6035).getSystemVersion();
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
        let first = tmp6;
        const tmpResult = tmp(6035);
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const isIOSResult = tmp(1382).isIOS();
        cResult[1] = isIOSResult;
        let stateFromStores = isIOSResult;
        const tmpResult3 = tmp(1382);
      } else {
        stateFromStores = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        items = [GuildStore];
        cResult[2] = items;
        let tmp13 = items;
      } else {
        tmp13 = cResult[2];
      }
      if (cResult[3] !== arg0) {
        const fn = function v() {
          guild = GuildStore.getGuild(closure_0);
          let everyResult = null != guild;
          if (everyResult) {
            everyResult = items.every((item) => {
              const features = guild.features;
              return features.has(item);
            });
          }
          return everyResult;
        };
        cResult[3] = arg0;
        cResult[4] = fn;
        let tmp15 = fn;
      } else {
        tmp15 = cResult[4];
      }
      const obj = require("c");
      if (stateFromStores) {
        stateFromStores = tmpResult4.useStateFromStores(tmp13, tmp15);
      }
      if (stateFromStores) {
        stateFromStores = first;
      }
      return stateFromStores;
    }
  : function useCanUseRoleSubscriptionIAP(arg0) {
      _require = arg0;
      const memo = noop.useMemo(() => {
        const str = closure_0(6035).getSystemVersion();
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
      let memo1 = noop.useMemo(() => closure_0(1382).isIOS(), []);
      items = [GuildStore];
      if (memo1) {
        memo1 = obj.useStateFromStores(items, () => {
          guild = GuildStore.getGuild(closure_0);
          let everyResult = null != guild;
          if (everyResult) {
            everyResult = items.every((item) => {
              const features = guild.features;
              return features.has(item);
            });
          }
          return everyResult;
        });
      }
      if (memo1) {
        memo1 = memo;
      }
      return memo1;
    };
