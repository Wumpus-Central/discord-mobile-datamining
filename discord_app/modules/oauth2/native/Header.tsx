// discord_app/modules/oauth2/native/Header.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { UserFlags } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../design/void/native.tsx";
import { getAvatarURL } from "../../../utils/AvatarUtils.tsx";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { header: null, applicationNameWrapper: null, headerIcons: null, ellipseGroup: null, ellipse: null, botTag: null };
createCacheKey = { paddingBottom: 16, marginHorizontal: 16, borderTopLeftRadius: require("Themes").radii.sm, borderTopRightRadius: require("Themes").radii.sm, flexDirection: "column", justifyContent: "center", alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row" };
createCacheKey[2] = { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginBottom: 24 };
createCacheKey[3] = { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 24 };
createCacheKey[4] = { width: 4, height: 4, marginHorizontal: 2, backgroundColor: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, opacity: 0.1, borderRadius: 2 };
createCacheKey[5] = { marginTop: 4, marginLeft: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { width: 4, height: 4, marginHorizontal: 2, backgroundColor: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, opacity: 0.1, borderRadius: 2 };
const result = require("ME").fileFinishedImporting("modules/oauth2/native/Header.tsx");

export default function Header(accountScopes) {
  let application;
  let bot;
  let user;
  ({ user, application, bot } = accountScopes);
  const tmp = createCacheKey();
  let obj = getAvatarURL;
  obj = { id: application.id, icon: application.icon };
  let userAvatarSource;
  const applicationIconSource = obj.getApplicationIconSource(obj);
  if (null != user) {
    let tmp2Result = tmp2(1435);
    userAvatarSource = tmp2Result.getUserAvatarSource(user);
  }
  obj = { style: tmp.header, children: null };
  const obj1 = { style: tmp.headerIcons, children: null };
  const obj2 = { source: applicationIconSource, size: null };
  obj2[1] = Button.AvatarSizes.XLARGE;
  const items = [callback(Button.Avatar, obj2), , ];
  const obj3 = { style: tmp.ellipseGroup, children: null };
  const items1 = [callback(View, { style: tmp.ellipse }), callback(View, { style: tmp.ellipse }), callback(View, { style: tmp.ellipse })];
  obj3[1] = items1;
  items[1] = callback2(View, obj3);
  const obj7 = { source: userAvatarSource, size: null };
  obj7[1] = Button.AvatarSizes.XLARGE;
  items[2] = callback(Button.Avatar, obj7);
  obj1[1] = items;
  const items2 = [callback2(View, obj1), , ];
  const obj8 = { style: tmp.applicationNameWrapper, children: null };
  const items3 = [callback(Text.Text, { variant: "text-lg/bold", color: "mobile-text-heading-primary", children: application.name }), ];
  let tmp8Result = null;
  if (null != bot) {
    const obj10 = { style: null, verified: null };
    obj10[0] = tmp.botTag;
    let hasFlagResult = null != bot.public_flags;
    tmp2Result = tmp2(9195);
    if (hasFlagResult) {
      hasFlagResult = tmp9(1403).hasFlag(bot.public_flags, UserFlags.VERIFIED_BOT);
      const tmp9Result = tmp9(1403);
    }
    obj10[1] = hasFlagResult;
    tmp8Result = tmp8(tmp2Result, obj10);
  }
  items3[1] = tmp8Result;
  obj8[1] = items3;
  items2[1] = callback2(View, obj8);
  if (accountScopes.accountScopes.length > 0) {
    const intl2 = tmp9(1236).intl;
    let stringResult = intl2.string(tmp9(1236).t.jFbDnJ);
  } else {
    const intl = tmp9(1236).intl;
    stringResult = intl.string(tmp9(1236).t["X+Fdpo"]);
  }
  items2[2] = callback(Text.Text, { variant: "heading-md/normal", color: "text-default", children: stringResult });
  obj[1] = items2;
  return callback2(View, obj);
};