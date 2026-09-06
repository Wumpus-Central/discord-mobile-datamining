// discord_app/modules/premium/powerups/native/GuildPowerupsMarketingHeader.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import nDefault from "../../../../../_runtime/00672_n.js";
import Text from "../../../../design/components/Text/native/Text.tsx";
import useHasAllocateBoostPermissionDefault from "../hooks/useHasAllocateBoostPermission.tsx";
import setDefault from "../hooks/useMarketablePowerupPerks.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../GuildPowerupsStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function PerkText(children) {
  return jsx(Text.Text, { color: "text-overlay-light", variant: "text-sm/semibold", children: children.powerup.title });
}
createCacheKey = { container: null, text: null };
createCacheKey = { padding: ThemesDefault.space.PX_12, backgroundColor: null };
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
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMarketingHeader.tsx");

export default function GuildPowerupsMarketingHeader(guild) {
  guild = guild.guild;
  const tmp = callback();
  const arr = setDefault(guild.id);
  const items = [guild.id];
  const effect = React.useEffect(() => {
    if (closure_1_5.shouldFetchCatalogForGuild(guild.id)) {
      const powerupCatalogForGuild = guild(closure_1_2[9]).fetchPowerupCatalogForGuild(guild.id);
      const obj = guild(closure_1_2[9]);
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
      const intl = guild(1114).intl;
      let str2 = "";
      if (null != arr) {
        str2 = "";
        if (0 !== arr.length) {
          let first = tmp2(13578)(arr);
          if (1 === first.length) {
            obj = { powerup: null };
            first = first[0];
            obj[0] = first;
            let formatResult = tmp6(PerkText, obj);
          } else {
            const intl2 = guild(1114).intl;
            obj1 = { perk1: null, perk2: null };
            const obj2 = { powerup: null };
            obj2[0] = first[0];
            obj1[0] = tmp6(PerkText, obj2);
            const obj3 = { powerup: null };
            obj3[0] = first[1];
            obj1[1] = tmp6(PerkText, obj3);
            formatResult = intl2.format(tmp2(2428).MNO3sG, obj1);
          }
        }
      }
      const obj4 = { perks: null };
      obj4[0] = str2;
      obj[2] = intl.format(tmp2(2428)["7lwpzR"], obj4);
      obj[1] = jsx(guild(4556).Text, { style: null, variant: "text-sm/semibold", children: null });
      return (
        <View style={null} variant="text-sm/semibold">
          {null}
        </View>
      );
    }
  }
}
