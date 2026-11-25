// === Module 13495: useGuildPowerupExpiringNotificationsConfig ===

// Module 13495 (useGuildPowerupExpiringNotificationsConfig)
import util from "util" /* 1112 */;
import _modDef2878 from "module_2878" /* 2878 */;
import _modDef3366 from "module_3366" /* 3366 */;
import Powerups from "Powerups" /* 8258 */;
import useGetExpiringGuildPowerupsDefault from "useGetExpiringGuildPowerups" /* 13496 */;
import useGameServerGetExpiringEntitlementsDefault from "useGameServerGetExpiringEntitlements" /* 13497 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupExpiringNotificationsConfig.tsx");

export default function useGuildPowerupExpiringNotificationsConfig(arg0) {
  const arr = useGetExpiringGuildPowerupsDefault(arg0);
  const arr2 = useGameServerGetExpiringEntitlementsDefault(arg0);
  if (arr.length > 0 || arr2.length > 0) {
    let stringResult;
    if (arr2.length > 0) {
      const intl = util.intl;
      stringResult = intl.string(_modDef3366["B3OfL/"]);
    }
    items = [];
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
      items3.push(intl2.string(_modDef2878.Sfr0Jw));
    }
    if (arr2.length > 0) {
      const intl3 = util.intl;
      items3.push(intl3.string(_modDef3366.wiungr));
    }
    const obj2 = { shouldShow: tmp3, expiringPowerups: arr, expiringPowerupNames: items, warnings: items3 };
    return obj2;
  } else {
    const obj = { shouldShow: false, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
    return obj;
  }
};