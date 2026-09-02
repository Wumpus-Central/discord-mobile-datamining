// === Module 5449: items ===

// Module 5449 (items)
import closure_2 from "noop" /* 19 */;
import closure_3 from "createGuildRecordFromRust" /* 1908 */;

const require = arg1;
let c4 = "13.2";
let items = [require("ME").GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE];
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/IAPEligibility.tsx");

export const canUseRoleSubscriptionIAP = function canUseRoleSubscriptionIAP(guildId) {
  if (obj.isIOS()) {
    const str = tmp(5450).getSystemVersion();
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
          let tmp4 = num4;
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
        guild = guild.getGuild(guildId);
        let everyResult = null != guild;
        if (everyResult) {
          everyResult = items.every((arg0) => {
            const features = guild.features;
            return features.has(arg0);
          });
        }
        return everyResult;
      }
    }
    return false;
  } else {
    return false;
  }
  obj = guild(1234);
  tmp = guild;
};
export const useCanUseRoleSubscriptionIAP = function useCanUseRoleSubscriptionIAP(guildId) {
  const _require = guildId;
  const memo = React.useMemo(() => {
    const str = guildId(5450).getSystemVersion();
    let tmp = null != str;
    if (tmp) {
      const parts = str.split(".");
      const _Number = Number;
      const mapped = parts.map(Number);
      const parts1 = closure_4.split(".");
      const _Number2 = Number;
      const mapped1 = parts1.map(Number);
      const _Math = Math;
      const bound = Math.max(mapped.length, mapped1.length);
      let num4 = 0;
      let num5 = 0;
      if (0 < bound) {
        while (true) {
          let num6 = mapped[num4];
          let tmp5 = num4;
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
  let memo1 = React.useMemo(() => guildId(1234).isIOS(), []);
  items = [closure_3];
  if (memo1) {
    memo1 = obj.useStateFromStores(items, () => {
      guild = closure_1_3.getGuild(guild);
      let everyResult = null != guild;
      if (everyResult) {
        everyResult = closure_1_5.every((arg0) => {
          const features = guild.features;
          return features.has(arg0);
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