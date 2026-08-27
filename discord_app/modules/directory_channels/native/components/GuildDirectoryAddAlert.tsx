// === Module 11806: GuildDirectoryAddAlert ===

// Module 11806 (GuildDirectoryAddAlert)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4441 */;
import componentDidMountDefault from "componentDidMount" /* 4899 */;
import GuildIconSizes from "GuildIconSizes" /* 5956 */;
import GuildIconSizesDefault from "GuildIconSizes" /* 5956 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { guildIcon: null, title: null, description: null, container: null };
createCacheKey = { marginBottom: 16, borderRadius: ThemesDefault.radii.sm };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: 8, textAlign: "center" };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { alignItems: "center", justifyContent: "center" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddAlert.tsx");

export default function GuildDirectoryAddAlert(arg0) {
  ({ onClose, guild, directoryGuildName } = arg0);
  const tmp = callback3();
  let obj = { confirmText: null, onConfirm: null, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["X0WK+6"]);
  obj[1] = onClose;
  obj = { style: tmp.container, children: null };
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