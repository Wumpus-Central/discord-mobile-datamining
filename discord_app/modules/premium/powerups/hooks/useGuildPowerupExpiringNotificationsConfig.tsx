// discord_app/modules/premium/powerups/hooks/useGuildPowerupExpiringNotificationsConfig.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import messagesProxyDefault from "../GuildPowerups.messages.js";
import messagesProxyDefault2 from "../../../game_server/GameServer.messages.js";
import useGetExpiringGuildPowerupsDefault from "useGetExpiringGuildPowerups.tsx";
import useGameServerGetExpiringEntitlementsDefault from "../../../game_server/hooks/useGameServerGetExpiringEntitlements.tsx";

const result = obj132.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupExpiringNotificationsConfig.tsx");

export default function useGuildPowerupExpiringNotificationsConfig(arg0) {
  let arr = useGetExpiringGuildPowerupsDefault(arg0);
  const arr2 = useGameServerGetExpiringEntitlementsDefault(arg0);
  if (arr.length > 0 || arr2.length > 0) {
    let stringResult;
    if (arr2.length > 0) {
      const intl = getSystemLocale.intl;
      stringResult = intl.string(messagesProxyDefault2["B3OfL/"]);
    }
    const items = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(arr.map((item, index) => item.title), 0);
    if (null != stringResult) {
      const items1 = [stringResult];
      let items2 = items1;
    } else {
      items2 = [];
    }
    arraySpreadResult = HermesBuiltin.arraySpread(items2, arraySpreadResult);
    const items3 = [];
    if (arr.some((item, index) => item.skuId === callback(table[4]).VANITY_URL_POWERUP_SKU_ID)) {
      const intl2 = getSystemLocale.intl;
      arr = items3.push(intl2.string(messagesProxyDefault.Sfr0Jw));
    }
    if (arr2.length > 0) {
      const intl3 = getSystemLocale.intl;
      arr = items3.push(intl3.string(messagesProxyDefault2.wiungr));
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