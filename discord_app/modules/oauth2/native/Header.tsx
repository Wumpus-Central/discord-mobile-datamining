// === Module 9836: Header ===

// Module 9836 (Header)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import hasFlag from "hasFlag" /* 1403 */;
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import Text from "Text" /* 4734 */;
import getBotLabelDefault from "getBotLabel" /* 9462 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { UserFlags } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { paddingBottom: 16, marginHorizontal: 16, borderTopLeftRadius: ThemesDefault.radii.sm, borderTopRightRadius: ThemesDefault.radii.sm, flexDirection: "column", justifyContent: "center", alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row" };
createCacheKey[2] = { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginBottom: 24 };
createCacheKey[3] = { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 24 };
createCacheKey[4] = { width: 4, height: 4, marginHorizontal: 2, backgroundColor: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, opacity: 0.1, borderRadius: 2 };
createCacheKey[5] = { marginTop: 4, marginLeft: 8 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/oauth2/native/Header.tsx");

export default function Header(accountScopes) {
  ({ user, application, bot } = accountScopes);
  const tmp = callback3();
  let obj = { id: application.id, icon: application.icon };
  let userAvatarSource;
  const applicationIconSource = obj.getApplicationIconSource(obj);
  if (null != user) {
    let tmp2Result = getAvatarURLDefault;
    userAvatarSource = tmp2Result.getUserAvatarSource(user);
  }
  obj = { style: tmp.header, children: null };
  obj1 = { style: tmp.headerIcons, children: null };
  const items = [callback(Button.Avatar, { source: applicationIconSource, size: Button.AvatarSizes.XLARGE }), , ];
  const obj3 = { style: tmp.ellipseGroup, children: null };
  const items1 = [callback(View, { style: tmp.ellipse }), callback(View, { style: tmp.ellipse }), callback(View, { style: tmp.ellipse })];
  obj3[1] = items1;
  items[1] = callback2(View, obj3);
  items[2] = callback(Button.Avatar, { source: userAvatarSource, size: Button.AvatarSizes.XLARGE });
  obj1[1] = items;
  const items2 = [callback2(View, obj1), , ];
  const obj8 = { style: tmp.applicationNameWrapper, children: null };
  const items3 = [callback(Text.Text, { variant: "text-lg/bold", color: "mobile-text-heading-primary", children: application.name }), ];
  let tmp8Result = null;
  if (null != bot) {
    const obj10 = { style: null, verified: null };
    obj10[0] = tmp.botTag;
    let hasFlagResult = null != bot.public_flags;
    tmp2Result = getBotLabelDefault;
    if (hasFlagResult) {
      hasFlagResult = hasFlag.hasFlag(bot.public_flags, UserFlags.VERIFIED_BOT);
      const tmp9Result = hasFlag;
    }
    obj10[1] = hasFlagResult;
    tmp8Result = callback(tmp2Result, obj10);
  }
  items3[1] = tmp8Result;
  obj8[1] = items3;
  items2[1] = callback2(View, obj8);
  if (accountScopes.accountScopes.length > 0) {
    const intl2 = getSystemLocale.intl;
    let stringResult = intl2.string(getSystemLocale.t.jFbDnJ);
  } else {
    const intl = getSystemLocale.intl;
    stringResult = intl.string(getSystemLocale.t["X+Fdpo"]);
  }
  items2[2] = callback(Text.Text, { variant: "heading-md/normal", color: "text-default", children: stringResult });
  obj[1] = items2;
  return callback2(View, obj);
};