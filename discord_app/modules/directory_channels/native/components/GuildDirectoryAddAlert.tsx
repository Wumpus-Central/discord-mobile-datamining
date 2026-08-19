// discord_app/modules/directory_channels/native/components/GuildDirectoryAddAlert.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import componentDidMountDefault from "../../../../components_native/common/Alert.tsx";
import GuildIconSizes from "../../../guild/native/GuildIcon.tsx";
import GuildIconSizesDefault from "../../../guild/native/GuildIcon.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { marginBottom: 16, borderRadius: ThemesDefault.radii.sm };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: 8, textAlign: "center" };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { alignItems: "center", justifyContent: "center" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddAlert.tsx");

export default function GuildDirectoryAddAlert(arg0) {
  ({ onClose, guild, directoryGuildName } = arg0);
  const tmp = callback3();
  let obj = { confirmText: null, onConfirm: null, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["X0WK+6"]);
  obj[1] = onClose;
  obj = { style: tmp.guildIcon, guild, size: null };
  const tmp2 = componentDidMountDefault;
  obj[2] = GuildIconSizes.GuildIconSizes.XLARGE;
  const items = [callback(GuildIconSizesDefault, obj), , ];
  obj1 = { style: tmp.title, accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", children: null };
  const intl2 = getSystemLocale.intl;
  obj1[4] = intl2.string(getSystemLocale.t.CueiPY);
  items[1] = callback(Text.Text, obj1);
  const obj2 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl3 = getSystemLocale.intl;
  obj2[3] = intl3.format(getSystemLocale.t.R7Pqn5, { guildName: directoryGuildName });
  items[2] = callback(Text.Text, obj2);
  obj[1] = items;
  obj[2] = callback2(View, obj);
  return callback(tmp2, obj);
};