// === Module 12133: GuildPowerupPerksSection ===

// Module 12133 (GuildPowerupPerksSection)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2401 */;
import GuildPowerupsSectionHeaderDefault from "GuildPowerupsSectionHeader" /* 12116 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const View = get_ActivityIndicator.View;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
let obj = { container: null };
obj = { flexDirection: "column", gap: ThemesDefault.space.PX_16 };
obj[0] = obj;
let closure_7 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsPerksSection.tsx");

export default function GuildPowerupPerksSection(arg0) {
  ({ guildId: require, listings } = arg0);
  let obj = { children: null };
  obj = { title: null, description: null };
  const tmp = callback3();
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(messagesProxyDefault.TV3Vm8);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(messagesProxyDefault.STx9hp);
  const items = [callback(GuildPowerupsSectionHeaderDefault, obj), ];
  obj = {
    style: tmp.container,
    children: listings.map((type) => {
      type = type.type;
      if ("singlePerk" === type) {
        let obj = { guildId: null, powerup: null, badge: null };
        obj[0] = closure_0;
        ({ powerup: obj3[1], badge: obj3[2] } = type);
        return closure_1_4(closure_1_1(closure_1_2[7]), obj, type.powerup.skuId);
      } else if ("multiPerk" === type) {
        obj = { guildId: null, listing: null };
        obj[0] = closure_0;
        obj[1] = type;
        const _HermesInternal2 = HermesInternal;
        return closure_1_4(closure_1_1(closure_1_2[8]), obj, "" + type.group + "-" + arg1);
      } else if ("gameServer" === type) {
        obj = { guildId: null };
        obj[0] = closure_0;
        const _HermesInternal = HermesInternal;
        return closure_1_4(closure_1_1(closure_1_2[9]), obj, "game-server-" + arg1);
      } else {
        return null;
      }
    })
  };
  items[1] = callback(View, obj);
  obj[0] = items;
  return callback2(closure_5, obj);
};