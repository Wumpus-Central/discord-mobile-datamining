// === Module 12053: useGuildPowerupExpiringNotificationsConfig ===

// Module 12053 (useGuildPowerupExpiringNotificationsConfig)
import util from "util" /* 1115 */;
import _modDef2519 from "module_2519" /* 2519 */;
import _modDef2941 from "module_2941" /* 2941 */;
import Powerups from "Powerups" /* 4727 */;
import useGetExpiringGuildPowerupsDefault from "useGetExpiringGuildPowerups" /* 12054 */;
import useGameServerGetExpiringEntitlementsDefault from "useGameServerGetExpiringEntitlements" /* 12055 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupExpiringNotificationsConfig.tsx");

export default function useGuildPowerupExpiringNotificationsConfig(arg0) {
  const arr = useGetExpiringGuildPowerupsDefault(arg0);
  const arr2 = useGameServerGetExpiringEntitlementsDefault(arg0);
  if (arr.length > 0 || arr2.length > 0) {
    let stringResult;
    if (arr2.length > 0) {
      const intl = util.intl;
      stringResult = intl.string(_modDef2941["B3OfL/"]);
    }
    const items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(arr.map((title) => title.title), 0);
    if (null != stringResult) {
      const items1 = [stringResult];
      let items2 = items1;
    } else {
      items2 = [];
    }
    HermesBuiltin.arraySpread(items2, arraySpreadResult);
    const items3 = [];
    if (arr.some((skuId) => skuId.skuId === Powerups.VANITY_URL_POWERUP_SKU_ID)) {
      const intl2 = util.intl;
      items3.push(intl2.string(_modDef2519.Sfr0Jw));
    }
    if (arr2.length > 0) {
      const intl3 = util.intl;
      items3.push(intl3.string(_modDef2941.wiungr));
    }
    const obj2 = { shouldShow: tmp3, expiringPowerups: arr, expiringPowerupNames: items, warnings: items3 };
    return obj2;
  } else {
    const obj = { shouldShow: false, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
    return obj;
  }
};