// discord_app/modules/premium/powerups/native/GuildPowerupsPerksSection.tsx
import set from "../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import messagesProxyDefault from "../GuildPowerups.messages.js";
import GuildPowerupsSectionHeaderDefault from "GuildPowerupsSectionHeader.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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
  const items = [callback(GuildPowerupsSectionHeaderDefault, obj)];
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
    }),
  };
  items[1] = callback(View, obj);
  obj[0] = items;
  return callback2(closure_5, obj);
}
