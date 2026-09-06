// === Module 12557: useGuildPowerupExpiringNotificationsConfig ===

// Module 12557 (useGuildPowerupExpiringNotificationsConfig)
import util from "util" /* 1114 */;
import Powerups from "Powerups" /* 4453 */;
import useGetExpiringGuildPowerupsDefault from "useGetExpiringGuildPowerups" /* 12558 */;
import useGameServerGetExpiringEntitlementsDefault from "useGameServerGetExpiringEntitlements" /* 12559 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupExpiringNotificationsConfig.tsx");

export default function useGuildPowerupExpiringNotificationsConfig(arg0) {
  let arr = useGetExpiringGuildPowerupsDefault(arg0);
  const arr2 = useGameServerGetExpiringEntitlementsDefault(arg0);
  if (arr.length > 0 || arr2.length > 0) {
    let stringResult;
    if (arr2.length > 0) {
      const intl = util.intl;
      stringResult = intl.string(tmp(2850)["B3OfL/"]);
    }
    const items = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(arr.map((title) => title.title), 0);
    if (null != stringResult) {
      const items1 = [stringResult];
      let items2 = items1;
    } else {
      items2 = [];
    }
    arraySpreadResult = HermesBuiltin.arraySpread(items2, arraySpreadResult);
    const items3 = [];
    if (arr.some((skuId) => skuId.skuId === Powerups.VANITY_URL_POWERUP_SKU_ID)) {
      const intl2 = util.intl;
      arr = items3.push(intl2.string(tmp(2428).Sfr0Jw));
    }
    if (arr2.length > 0) {
      const intl3 = util.intl;
      arr = items3.push(intl3.string(tmp(2850).wiungr));
    }
    let obj = { shouldShow: tmp3, expiringPowerups: arr, expiringPowerupNames: items, warnings: items3 };
    return obj;
  } else {
    obj = { shouldShow: false, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
    return obj;
  }
};