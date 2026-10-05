// discord_app/modules/premium/powerups/hooks/useGuildPowerupExpiringNotificationsConfig.tsx
import react from "../../../../../_runtime/00576_react.js";
import intl4 from "../../../../intl/index.native.tsx";
import _modDef2525 from "../GuildPowerups.messages.js";
import _modDef2947 from "../../../game_server/GameServer.messages.js";
import Powerups from "../../../../../discord_common/js/shared/shared-constants/Powerups.tsx";
import useGetExpiringGuildPowerupsDefault from "useGetExpiringGuildPowerups.tsx";
import useGameServerGetExpiringEntitlementsDefault from "../../../game_server/hooks/useGameServerGetExpiringEntitlements.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const obj = react;
      const cResult = obj.c(19);
      const arr = useGetExpiringGuildPowerupsDefault(arg0);
      const arr2 = useGameServerGetExpiringEntitlementsDefault(arg0);
      if (arr.length > 0 || arr2.length > 0) {
        let tmp9;
        let tmp13;
        let tmp14;
        if (cResult[1] !== arr2.length) {
          let stringResult;
          if (arr2.length > 0) {
            const intl = intl4.intl;
            stringResult = intl.string(_modDef2947["B3OfL/"]);
          }
          cResult[1] = arr2.length;
          cResult[2] = stringResult;
          tmp9 = stringResult;
        } else {
          tmp9 = cResult[2];
        }
        if (cResult[3] === arr) {
          let tmp11;
          if (cResult[4] === tmp9) {
            tmp11 = cResult[5];
          }
          if (cResult[9] === arr2.length) {
            let tmp20;
            if (cResult[10] === arr) {
              tmp20 = cResult[11];
            }
            if (cResult[14] === tmp11) {
              if (cResult[15] === arr) {
                if (cResult[16] === (arr.length > 0 || arr2.length > 0)) {
                  let tmp29;
                  if (cResult[17] === tmp20) {
                    tmp29 = cResult[18];
                  }
                  return tmp29;
                }
              }
            }
            const obj2 = {
              shouldShow: arr.length > 0 || arr2.length > 0,
              expiringPowerups: arr,
              expiringPowerupNames: tmp11,
              warnings: tmp20,
            };
            cResult[14] = tmp11;
            cResult[15] = arr;
            cResult[16] = arr.length > 0 || arr2.length > 0;
            cResult[17] = tmp20;
            cResult[18] = obj2;
            tmp29 = obj2;
          }
          const items = [];
          if (arr.some((skuId) => skuId.skuId === Powerups.VANITY_URL_POWERUP_SKU_ID)) {
            let tmp22;
            const _Symbol3 = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = intl4.intl;
              const stringResult1 = intl2.string(_modDef2525.Sfr0Jw);
              cResult[12] = stringResult1;
              tmp22 = stringResult1;
            } else {
              tmp22 = cResult[12];
            }
            items.push(tmp22);
          }
          if (arr2.length > 0) {
            let tmp26;
            const _Symbol4 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = intl4.intl;
              const stringResult2 = intl3.string(_modDef2947.wiungr);
              cResult[13] = stringResult2;
              tmp26 = stringResult2;
            } else {
              tmp26 = cResult[13];
            }
            items.push(tmp26);
          }
          cResult[9] = arr2.length;
          cResult[10] = arr;
          cResult[11] = items;
          tmp20 = items;
        }
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function w(title) {
            return title.title;
          };
          cResult[6] = fn;
          tmp13 = fn;
        } else {
          tmp13 = cResult[6];
        }
        if (cResult[7] !== tmp9) {
          let items2;
          if (null != tmp9) {
            const items1 = [tmp9];
            items2 = items1;
          } else {
            items2 = [];
          }
          cResult[7] = tmp9;
          cResult[8] = items2;
          tmp14 = items2;
        } else {
          tmp14 = cResult[8];
        }
        const items3 = [];
        HermesBuiltin.arraySpread(items3, tmp14, HermesBuiltin.arraySpread(items3, arr.map(tmp13), 0));
        cResult[3] = arr;
        cResult[4] = tmp9;
        cResult[5] = items3;
        tmp11 = items3;
      } else {
        let first;
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { shouldShow: false, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
          cResult[0] = obj3;
          first = obj3;
        } else {
          first = cResult[0];
        }
        return first;
      }
    }
  : (arg0) => {
      const arr = useGetExpiringGuildPowerupsDefault(arg0);
      const arr2 = useGameServerGetExpiringEntitlementsDefault(arg0);
      if (arr.length > 0 || arr2.length > 0) {
        let items2;
        let stringResult;
        if (arr2.length > 0) {
          const intl = intl4.intl;
          stringResult = intl.string(_modDef2947["B3OfL/"]);
        }
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(
          items,
          arr.map((title) => title.title),
          0,
        );
        if (null != stringResult) {
          const items1 = [stringResult];
          items2 = items1;
        } else {
          items2 = [];
        }
        HermesBuiltin.arraySpread(items, items2, arraySpreadResult);
        const items3 = [];
        if (arr.some((skuId) => skuId.skuId === Powerups.VANITY_URL_POWERUP_SKU_ID)) {
          const push = items3.push;
          const intl2 = intl4.intl;
          push(intl2.string(_modDef2525.Sfr0Jw));
        }
        if (arr2.length > 0) {
          const push2 = items3.push;
          const intl3 = intl4.intl;
          push2(intl3.string(_modDef2947.wiungr));
        }
        return {
          shouldShow: arr.length > 0 || arr2.length > 0,
          expiringPowerups: arr,
          expiringPowerupNames: items,
          warnings: items3,
        };
      } else {
        return { shouldShow: false, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
      }
    };
const result = size.fileFinishedImporting(
  "modules/premium/powerups/hooks/useGuildPowerupExpiringNotificationsConfig.tsx",
);

export default tmp2;
