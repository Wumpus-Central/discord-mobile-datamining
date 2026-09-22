// === Module 9557: oauth2/Header ===

// Module 9557 (oauth2/Header)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import Text_Text from "Text/Text" /* 4753 */;
import BotTagDefault from "BotTag" /* 9558 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserFlags = fn(1074).UserFlags;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4757);
let obj2 = { header: { paddingBottom: 16, marginHorizontal: 16, borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm, flexDirection: "column", justifyContent: "center", alignItems: "center" }, applicationNameWrapper: { flexDirection: "row" }, headerIcons: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginBottom: 24 }, ellipseGroup: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 24 }, ellipse: null, botTag: null };
let size = { width: 4, height: 4, marginHorizontal: 2, backgroundColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, opacity: 0.1, borderRadius: 2 };
obj2.ellipse = size;
obj2.botTag = { marginTop: 4, marginLeft: 8 };
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/Header.tsx");

export default function Header(accountScopes) {
  ({ user, application, bot } = accountScopes);
  const tmp = closure_7();
  let userAvatarSource;
  const applicationIconSource = AvatarUtilsDefault.getApplicationIconSource({ id: application.id, icon: application.icon });
  if (null != user) {
    userAvatarSource = AvatarUtilsDefault.getUserAvatarSource(user);
    const tmp2Result = AvatarUtilsDefault;
  }
  const obj3 = { style: tmp.header, children: null };
  const obj4 = { style: tmp.headerIcons, children: null };
  const obj2 = { id: application.id, icon: application.icon };
  const items = [hasOwnProperty(native.Avatar, { source: applicationIconSource, size: native.AvatarSizes.XLARGE }), , ];
  const obj6 = { style: tmp.ellipseGroup, children: null };
  const items1 = [hasOwnProperty(View, { style: tmp.ellipse }), hasOwnProperty(View, { style: tmp.ellipse }), hasOwnProperty(View, { style: tmp.ellipse })];
  obj6.children = items1;
  items[1] = timestampProducer(View, obj6);
  const obj5 = { source: applicationIconSource, size: native.AvatarSizes.XLARGE };
  const obj7 = { style: tmp.ellipse };
  const obj8 = { style: tmp.ellipse };
  const obj9 = { style: tmp.ellipse };
  items[2] = hasOwnProperty(native.Avatar, { source: userAvatarSource, size: native.AvatarSizes.XLARGE });
  obj4.children = items;
  const items2 = [timestampProducer(View, obj4), , ];
  const obj11 = { style: tmp.applicationNameWrapper, children: null };
  const items3 = [hasOwnProperty(Text_Text.Text, { variant: "text-lg/bold", color: "mobile-text-heading-primary", children: application.name }), ];
  let tmp8Result = null;
  if (null != bot) {
    const obj13 = { style: tmp.botTag, verified: null };
    let hasFlagResult = null != bot.public_flags;
    if (hasFlagResult) {
      hasFlagResult = FlagUtils.hasFlag(bot.public_flags, UserFlags.VERIFIED_BOT);
      const tmp9Result = FlagUtils;
    }
    obj13.verified = hasFlagResult;
    tmp8Result = hasOwnProperty(BotTagDefault, obj13);
    const tmp2Result2 = BotTagDefault;
  }
  items3[1] = tmp8Result;
  obj11.children = items3;
  items2[1] = timestampProducer(View, obj11);
  if (accountScopes.accountScopes.length > 0) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.jFbDnJ);
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t["X+Fdpo"]);
  }
  items2[2] = hasOwnProperty(Text_Text.Text, { variant: "heading-md/normal", color: "text-default", children: stringResult });
  obj3.children = items2;
  return timestampProducer(View, obj3);
};