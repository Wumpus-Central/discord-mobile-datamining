// discord_app/modules/public_guilds/native/components/PublicGuildAnnouncementProfile.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import preloadDefault from "../../../../components_native/common/FastImage.tsx";
import Background from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import isPublicSystemMessage from "../../PublicGuildsUtils.tsx";
import registerAssetDefault from "../../../../../_runtime/11463_registerAsset.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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
const result = require("set").fileFinishedImporting(
  "modules/public_guilds/native/components/PublicGuildAnnouncementProfile.tsx",
);

export default function PublicGuildAnnouncementProfile() {
  const tmp = callback3();
  let obj = { startExpanded: true, children: null };
  obj = { style: tmp.content, children: null };
  obj = { style: tmp.avatar, source: null };
  let obj3 = isPublicSystemMessage;
  obj[1] = obj3.getPublicSystemMessageAvatar();
  const items = [callback(preloadDefault, obj), , ,];
  obj1 = { style: tmp.nameWrapper, children: null };
  const tmp2 = preloadDefault;
  const items1 = [callback(Button.Icon, { source: registerAssetDefault, disableColor: true })];
  obj3 = {
    style: tmp.headerText,
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
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
}
