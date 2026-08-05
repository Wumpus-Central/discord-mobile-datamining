// discord_app/modules/directory_channels/native/components/GuildDirectoryAddAlert.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { guildIcon: null, title: null, description: null, container: null };
createCacheKey = { marginBottom: 16, borderRadius: require("Themes").radii.sm };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: 8, textAlign: "center" };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { alignItems: "center", justifyContent: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddAlert.tsx");

export default function GuildDirectoryAddAlert(arg0) {
  let directoryGuildName;
  let guild;
  let onClose;
  ({ onClose, guild, directoryGuildName } = arg0);
  const tmp = createCacheKey();
  let obj = { confirmText: null, onConfirm: null, children: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["X0WK+6"]);
  obj[1] = onClose;
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.guildIcon, guild, size: null };
  const tmp2 = require("../../../../components_native/common/Alert.tsx");
  obj[2] = require("../../../guild/native/GuildIcon.tsx") /* GuildIconSizes */.GuildIconSizes.XLARGE;
  const items = [callback(require("../../../guild/native/GuildIcon.tsx"), obj), , ];
  const obj1 = { style: tmp.title, accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary", children: null };
  const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1[4] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.CueiPY);
  items[1] = callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj1);
  const obj2 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj2[3] = intl3.format(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.R7Pqn5, { guildName: directoryGuildName });
  items[2] = callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj2);
  obj[1] = items;
  obj[2] = callback2(View, obj);
  return callback(tmp2, obj);
};