// === Module 12721: PerkText ===

// Module 12721 (PerkText)
import noop from "noop";
import { View } from "get ActivityIndicator";
import calculateAppliedBoosts from "calculateAppliedBoosts";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function PerkText(children) {
  return jsx(require(4251) /* Text */.Text, { color: "text-overlay-light", variant: "text-sm/semibold", children: children.powerup.title });
}
createCacheKey = { container: null, text: null };
createCacheKey = { padding: require("Themes").space.PX_12, backgroundColor: null };
let obj4 = require("n")("#000000");
createCacheKey[1] = require("n")("#000000").alpha(0.18).hex();
createCacheKey[0] = createCacheKey;
let obj1 = { textAlign: "center", color: null };
const alphaResult = require("n")("#000000").alpha(0.18);
const obj7 = require("n")("#FFFFFF");
obj1[1] = require("n")("#FFFFFF").alpha(0.5).hex();
createCacheKey[1] = obj1;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const alphaResult1 = require("n")("#FFFFFF").alpha(0.5);
const result = require("calculateAppliedBoosts").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMarketingHeader.tsx");

export default function GuildPowerupsMarketingHeader(guild) {
  guild = guild.guild;
  const tmp = createCacheKey();
  const arr = importDefault(12722)(guild.id);
  const items = [guild.id];
  const effect = React.useEffect(() => {
    if (outer1_5.shouldFetchCatalogForGuild(guild.id)) {
      const powerupCatalogForGuild = guild(outer1_2[9]).fetchPowerupCatalogForGuild(guild.id);
      const obj = guild(outer1_2[9]);
    }
  }, items);
  if (importDefault(11725)(guild.id)) {
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
          let first = tmp2(12723)(arr);
          if (1 === first.length) {
            obj = { powerup: null };
            first = first[0];
            obj[0] = first;
            let formatResult = tmp6(PerkText, obj);
          } else {
            const intl2 = guild(1236).intl;
            const obj1 = { perk1: null, perk2: null };
            const obj2 = { powerup: null };
            obj2[0] = first[0];
            obj1[0] = tmp6(PerkText, obj2);
            const obj3 = { powerup: null };
            obj3[0] = first[1];
            obj1[1] = tmp6(PerkText, obj3);
            formatResult = intl2.format(tmp2(2287).MNO3sG, obj1);
          }
        }
      }
      const obj4 = { perks: null };
      obj4[0] = str2;
      obj[2] = intl.format(tmp2(2287)["7lwpzR"], obj4);
      obj[1] = jsx(guild(4251).Text, { style: null, variant: "text-sm/semibold", children: null });
      return <View style={null} variant="text-sm/semibold">{null}</View>;
    }
  }
};