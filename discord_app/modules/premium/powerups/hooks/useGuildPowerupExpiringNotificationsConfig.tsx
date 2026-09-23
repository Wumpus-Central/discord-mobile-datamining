// discord_app/modules/premium/powerups/hooks/useGuildPowerupExpiringNotificationsConfig.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef2516 from "../GuildPowerups.messages.js";
import _modDef2938 from "../../../game_server/GameServer.messages.js";
import Powerups from "../../../../../discord_common/js/shared/shared-constants/Powerups.tsx";
import useGetExpiringGuildPowerupsDefault from "useGetExpiringGuildPowerups.tsx";
import useGameServerGetExpiringEntitlementsDefault from "../../../game_server/hooks/useGameServerGetExpiringEntitlements.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/premium/powerups/hooks/useGuildPowerupExpiringNotificationsConfig.tsx",
);

export default function useGuildPowerupExpiringNotificationsConfig(arg0) {
  const arr = useGetExpiringGuildPowerupsDefault(arg0);
  const arr2 = useGameServerGetExpiringEntitlementsDefault(arg0);
  if (arr.length > 0 || arr2.length > 0) {
    let stringResult;
    if (arr2.length > 0) {
      const intl = util.intl;
      stringResult = intl.string(_modDef2938["B3OfL/"]);
    }
    const items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(
      arr.map((title) => title.title),
      0,
    );
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
      items3.push(intl2.string(_modDef2516.Sfr0Jw));
    }
    if (arr2.length > 0) {
      const intl3 = util.intl;
      items3.push(intl3.string(_modDef2938.wiungr));
    }
    const obj2 = { shouldShow: tmp3, expiringPowerups: arr, expiringPowerupNames: items, warnings: items3 };
    return obj2;
  } else {
    const obj = { shouldShow: false, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
    return obj;
  }
}
