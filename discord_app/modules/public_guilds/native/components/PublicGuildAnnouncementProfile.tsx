// discord_app/modules/public_guilds/native/components/PublicGuildAnnouncementProfile.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { content: { padding: 16 }, avatar: null, nameWrapper: null, headerText: null, description: null };
createCacheKey = { borderRadius: require("Themes").radii.lg, height: 80, width: 80, marginVertical: 16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flexDirection: "row", alignItems: "center" };
createCacheKey[3] = { marginLeft: 8 };
createCacheKey[4] = { marginTop: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/public_guilds/native/components/PublicGuildAnnouncementProfile.tsx");

export default function PublicGuildAnnouncementProfile() {
  const tmp = createCacheKey();
  let obj = { startExpanded: true, children: null };
  obj = { style: tmp.content, children: null };
  obj = { style: tmp.avatar, source: null };
  let obj3 = require("../../PublicGuildsUtils.tsx") /* isPublicSystemMessage */;
  obj[1] = obj3.getPublicSystemMessageAvatar();
  const items = [callback(require("../../../../components_native/common/FastImage.tsx"), obj), , , ];
  const obj1 = { style: tmp.nameWrapper, children: null };
  const obj2 = { source: null, disableColor: true };
  obj2[0] = require("../../../../../_runtime/11027_registerAsset.js");
  const items1 = [callback(require("../../../../design/void/native.tsx") /* Button */.Icon, obj2), ];
  obj3 = { style: tmp.headerText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj3[3] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.xfAlNx);
  items1[1] = callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj3);
  obj1[1] = items1;
  items[1] = callback2(View, obj1);
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj4[3] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.BUZ0sl);
  items[2] = callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj4);
  const obj5 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj5[3] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.w5beJH);
  items[3] = callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj5);
  obj[1] = items;
  obj[1] = callback2(View, obj);
  return callback(require("../../../../design/components/Sheet/native/BottomSheet.native.tsx") /* Background */.BottomSheet, obj);
};