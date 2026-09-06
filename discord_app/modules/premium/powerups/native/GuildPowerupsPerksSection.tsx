// === Module 12569: GuildPowerupsPerksSection ===

// Module 12569 (GuildPowerupsPerksSection)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef2428 from "module_2428" /* 2428 */;
import GuildPowerupsSectionHeaderDefault from "GuildPowerupsSectionHeader" /* 12552 */;
import GuildPowerupsSinglePerkCardDefault from "GuildPowerupsSinglePerkCard" /* 12570 */;
import GuildPowerupsMultiPerkCardDefault from "GuildPowerupsMultiPerkCard" /* 12572 */;
import GuildPowerupsGameServerCardDefault from "GuildPowerupsGameServerCard" /* 12574 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { container: null };
obj = { flexDirection: "column", gap: nativeDefault.space.PX_16 };
obj.container = obj;
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsPerksSection.tsx");

export default function GuildPowerupPerksSection(arg0) {
  ({ guildId: require, listings } = arg0);
  let obj = { children: null };
  obj = { title: null, description: null };
  const tmp = closure_7();
  const intl = util.intl;
  obj.title = intl.string(_modDef2428.TV3Vm8);
  const intl2 = util.intl;
  obj.description = intl2.string(_modDef2428.STx9hp);
  const items = [closure_4(GuildPowerupsSectionHeaderDefault, obj), ];
  obj = {
    style: tmp.container,
    children: listings.map((type, index) => {
      type = type.type;
      if ("singlePerk" === type) {
        let obj = { guildId, powerup: null, badge: null };
        ({ powerup: obj3.powerup, badge: obj3.badge } = type);
        return React4(GuildPowerupsSinglePerkCardDefault, obj, type.powerup.skuId);
      } else if ("multiPerk" === type) {
        obj = { guildId, listing: type };
        const _HermesInternal2 = HermesInternal;
        return React4(GuildPowerupsMultiPerkCardDefault, obj, "" + type.group + "-" + index);
      } else if ("gameServer" === type) {
        obj = { guildId };
        const _HermesInternal = HermesInternal;
        return React4(GuildPowerupsGameServerCardDefault, obj, "game-server-" + index);
      } else {
        return null;
      }
    })
  };
  items[1] = closure_4(View, obj);
  obj.children = items;
  return closure_6(closure_5, obj);
};