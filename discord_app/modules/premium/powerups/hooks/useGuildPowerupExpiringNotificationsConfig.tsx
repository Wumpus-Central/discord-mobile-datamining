// discord_app/modules/premium/powerups/hooks/useGuildPowerupExpiringNotificationsConfig.tsx
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { useGameServerGetExpiringEntitlements } from "../../../game_server/hooks/useGameServerGetExpiringEntitlements.tsx";
import { useGetExpiringGuildPowerups } from "useGetExpiringGuildPowerups.tsx";
const result = require("getSystemLocale").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupExpiringNotificationsConfig.tsx");

export default function useGuildPowerupExpiringNotificationsConfig(arg0) {
  let arr = useGetExpiringGuildPowerups(arg0);
  const arr2 = useGameServerGetExpiringEntitlements(arg0);
  if (arr.length > 0 || arr2.length > 0) {
    let stringResult;
    if (arr2.length > 0) {
      const intl = getSystemLocale.intl;
      stringResult = intl.string(tmp(2725)["B3OfL/"]);
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
    if (arr.some((skuId) => skuId.skuId === callback(table[4]).VANITY_URL_POWERUP_SKU_ID)) {
      const intl2 = getSystemLocale.intl;
      arr = items3.push(intl2.string(tmp(2335).Sfr0Jw));
    }
    if (arr2.length > 0) {
      const intl3 = getSystemLocale.intl;
      arr = items3.push(intl3.string(tmp(2725).wiungr));
    }
    let obj = { shouldShow: null, expiringPowerups: null, expiringPowerupNames: null, warnings: null };
    obj[0] = tmp3;
    obj[1] = arr;
    obj[2] = items;
    obj[3] = items3;
    return obj;
  } else {
    obj = { shouldShow: false, expiringPowerups: null, expiringPowerupNames: null, warnings: null };
    obj[1] = [];
    obj[2] = [];
    obj[3] = [];
    return obj;
  }
};