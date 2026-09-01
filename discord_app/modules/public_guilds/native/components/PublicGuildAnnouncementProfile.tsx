// === Module 11234: PublicGuildAnnouncementProfile ===

// Module 11234 (PublicGuildAnnouncementProfile)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4474 */;
import preloadDefault from "preload" /* 5493 */;
import Background from "Background" /* 5622 */;
import isPublicSystemMessage from "isPublicSystemMessage" /* 7943 */;
import registerAssetDefault from "registerAsset" /* 11235 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { content: { padding: 16 }, avatar: null, nameWrapper: null, headerText: null, description: null };
createCacheKey = { borderRadius: ThemesDefault.radii.lg, height: 80, width: 80, marginVertical: 16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flexDirection: "row", alignItems: "center" };
createCacheKey[3] = { marginLeft: 8 };
createCacheKey[4] = { marginTop: 8 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/public_guilds/native/components/PublicGuildAnnouncementProfile.tsx");

export default function PublicGuildAnnouncementProfile() {
  const tmp = callback3();
  let obj = { startExpanded: true, children: null };
  obj = { style: tmp.content, children: null };
  obj = { style: tmp.avatar, source: null };
  let obj3 = isPublicSystemMessage;
  obj[1] = obj3.getPublicSystemMessageAvatar();
  const items = [callback(preloadDefault, obj), , , ];
  obj1 = { style: tmp.nameWrapper, children: null };
  const tmp2 = preloadDefault;
  const items1 = [callback(Button.Icon, { source: registerAssetDefault, disableColor: true }), ];
  obj3 = { style: tmp.headerText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj3[3] = intl.string(getSystemLocale.t.xfAlNx);
  items1[1] = callback(Text.Text, obj3);
  obj1[1] = items1;
  items[1] = callback2(View, obj1);
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = getSystemLocale.intl;
  obj4[3] = intl2.string(getSystemLocale.t.BUZ0sl);
  items[2] = callback(Text.Text, obj4);
  const obj5 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl3 = getSystemLocale.intl;
  obj5[3] = intl3.string(getSystemLocale.t.w5beJH);
  items[3] = callback(Text.Text, obj5);
  obj[1] = items;
  obj[1] = callback2(View, obj);
  return callback(Background.BottomSheet, obj);
};