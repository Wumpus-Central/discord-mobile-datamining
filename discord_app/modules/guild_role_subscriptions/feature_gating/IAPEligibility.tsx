// discord_app/modules/guild_role_subscriptions/feature_gating/IAPEligibility.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";

const getSystemVersion = tmp(5500);
require = fn;
let c4 = "13.2";
let items = [fn(1074).GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE];
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
        const guild = GuildStore.getGuild(guildId);
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
export const useCanUseRoleSubscriptionIAP = function useCanUseRoleSubscriptionIAP(guildId) {
  _require = guildId;
  const memo = noop.useMemo(() => {
    const str = guildId(5500).getSystemVersion();
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
  let memo1 = noop.useMemo(() => guildId(1115).isIOS(), []);
  items = [GuildStore];
  if (memo1) {
    memo1 = obj.useStateFromStores(items, () => {
      const guild = GuildStore.getGuild(closure_0);
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
