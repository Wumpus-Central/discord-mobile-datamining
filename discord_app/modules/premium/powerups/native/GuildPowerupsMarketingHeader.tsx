// === Module 13678: GuildPowerupsMarketingHeader ===

// Module 13678 (GuildPowerupsMarketingHeader)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import _modDef2429 from "module_2429" /* 2429 */;
import Text_Text from "Text/Text" /* 4634 */;
import GuildPowerupsActionCreators from "GuildPowerupsActionCreators" /* 12631 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12656 */;
import useMarketablePowerupPerksDefault from "useMarketablePowerupPerks" /* 13679 */;
import orderMarketablePerksForDisplayDefault from "orderMarketablePerksForDisplay" /* 13680 */;
import noop from "module_19" /* 19 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4526 */;

require = fn;
function PerkText(children) {
  return jsx(Text_Text.Text, { color: "text-overlay-light", variant: "text-sm/semibold", children: children.powerup.title });
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let obj2 = { container: null, text: null };
let obj3 = { padding: nativeDefault.space.PX_12, backgroundColor: null };
let obj4 = _modDef672("#000000");
obj3.backgroundColor = _modDef672("#000000").alpha(0.18).hex();
obj2.container = obj3;
let obj5 = { textAlign: "center", color: null };
const alphaResult = _modDef672("#000000").alpha(0.18);
let obj7 = _modDef672("#FFFFFF");
obj5.color = _modDef672("#FFFFFF").alpha(0.5).hex();
obj2.text = obj5;
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMarketingHeader.tsx");

export default function GuildPowerupsMarketingHeader(guild) {
  guild = guild.guild;
  const tmp = closure_7();
  const arr = useMarketablePowerupPerksDefault(guild.id);
  const items = [guild.id];
  const effect = noop.useEffect(() => {
    if (GuildPowerupsStore.shouldFetchCatalogForGuild(guild.id)) {
      const powerupCatalogForGuild = GuildPowerupsActionCreators.fetchPowerupCatalogForGuild(guild.id);
    }
  }, items);
  if (useHasAllocateBoostPermissionDefault(guild.id)) {
    let num;
    if (arr != null) {
      num = arr.length;
    }
    if (num == null) {
      num = 0;
    }
    if (0 !== num) {
      let obj = { style: tmp.container, children: null };
      const obj2 = { style: tmp.text, variant: "text-sm/semibold", children: null };
      const intl = guild(1115).intl;
      let str2 = "";
      if (null != arr) {
        str2 = "";
        if (0 !== arr.length) {
          let first = orderMarketablePerksForDisplayDefault(arr);
          if (1 === first.length) {
            const obj3 = { powerup: null };
            first = first[0];
            obj3.powerup = first;
            let formatResult = <PerkText powerup={null} />;
          } else {
            const intl2 = guild(1115).intl;
            const obj4 = { perk1: null, perk2: null };
            const obj5 = { powerup: first[0] };
            obj4.perk1 = <PerkText powerup={first[0]} />;
            const obj6 = { powerup: first[1] };
            obj4.perk2 = <PerkText powerup={first[1]} />;
            formatResult = intl2.format(_modDef2429.MNO3sG, obj4);
          }
        }
      }
      const obj7 = { perks: str2 };
      obj2.children = intl.format(_modDef2429["7lwpzR"], obj7);
      obj.children = jsx(guild(4634).Text, { style: tmp.text, variant: "text-sm/semibold", children: null });
      return <View style={tmp.container}>{null}</View>;
    }
  }
};