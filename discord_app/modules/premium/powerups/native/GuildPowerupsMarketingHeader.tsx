// === Module 13009: PerkText ===

// Module 13009 (PerkText)
import nDefault from "n" /* 689 */;
import ThemesDefault from "Themes" /* 712 */;
import messagesProxyDefault from "messagesProxy" /* 2367 */;
import Text from "Text" /* 4734 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 11682 */;
import setDefault from "set" /* 13010 */;
import orderMarketablePerksForDisplayDefault from "orderMarketablePerksForDisplay" /* 13011 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import calculateAppliedBoosts from "calculateAppliedBoosts" /* 4261 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function PerkText(children) {
  return jsx(Text.Text, { color: "text-overlay-light", variant: "text-sm/semibold", children: children.powerup.title });
}
const createCacheKey = { padding: ThemesDefault.space.PX_12, backgroundColor: null };
let obj4 = nDefault("#000000");
createCacheKey[1] = nDefault("#000000").alpha(0.18).hex();
createCacheKey[0] = createCacheKey;
let obj1 = { textAlign: "center", color: null };
const alphaResult = nDefault("#000000").alpha(0.18);
const obj7 = nDefault("#FFFFFF");
obj1[1] = nDefault("#FFFFFF").alpha(0.5).hex();
createCacheKey[1] = obj1;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const alphaResult1 = nDefault("#FFFFFF").alpha(0.5);
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMarketingHeader.tsx");

export default function GuildPowerupsMarketingHeader(guild) {
  guild = guild.guild;
  const tmp = callback();
  const arr = setDefault(guild.id);
  const items = [guild.id];
  const effect = React.useEffect(() => {
    if (closure_1_5.shouldFetchCatalogForGuild(guild.id)) {
      const powerupCatalogForGuild = guild(dependencyMap[9]).fetchPowerupCatalogForGuild(guild.id);
      const obj = guild(dependencyMap[9]);
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
      let obj = { style: null, children: null };
      obj[0] = tmp.container;
      obj = { style: null, variant: "text-sm/semibold", children: null };
      obj[0] = tmp.text;
      const intl = guild(1236).intl;
      let str2 = "";
      if (null != arr) {
        str2 = "";
        if (0 !== arr.length) {
          let first = orderMarketablePerksForDisplayDefault(arr);
          if (1 === first.length) {
            obj = { powerup: null };
            first = first[0];
            obj[0] = first;
            let formatResult = <PerkText powerup={null} />;
          } else {
            const intl2 = guild(1236).intl;
            obj1 = { perk1: null, perk2: null };
            const obj2 = { powerup: null };
            obj2[0] = first[0];
            obj1[0] = <PerkText powerup={null} />;
            const obj3 = { powerup: null };
            obj3[0] = first[1];
            obj1[1] = <PerkText powerup={null} />;
            formatResult = intl2.format(messagesProxyDefault.MNO3sG, obj1);
          }
        }
      }
      const obj4 = { perks: null };
      obj4[0] = str2;
      obj[2] = intl.format(messagesProxyDefault["7lwpzR"], obj4);
      obj[1] = jsx(guild(4734).Text, { style: null, variant: "text-sm/semibold", children: null });
      return <View style={null} variant="text-sm/semibold">{null}</View>;
    }
  }
};