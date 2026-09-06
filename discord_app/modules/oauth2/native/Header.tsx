// discord_app/modules/oauth2/native/Header.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const UserFlags = fn(1074).UserFlags;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = {
  header: null,
  applicationNameWrapper: null,
  headerIcons: null,
  ellipseGroup: null,
  ellipse: null,
  botTag: null,
};
createStyles = {
  paddingBottom: 16,
  marginHorizontal: 16,
  borderTopLeftRadius: nativeDefault.radii.sm,
  borderTopRightRadius: nativeDefault.radii.sm,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
createStyles.header = createStyles;
createStyles.applicationNameWrapper = { flexDirection: "row" };
createStyles.headerIcons = {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 24,
};
createStyles.ellipseGroup = { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 24 };
let size = {
  width: 4,
  height: 4,
  marginHorizontal: 2,
  backgroundColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
  opacity: 0.1,
  borderRadius: 2,
};
createStyles.ellipse = size;
createStyles.botTag = { marginTop: 4, marginLeft: 8 };
let closure_7 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/Header.tsx");

export default function Header(accountScopes) {
  ({ user, application, bot } = accountScopes);
  const tmp = closure_7();
  let obj = { id: application.id, icon: application.icon };
  let userAvatarSource;
  const applicationIconSource = obj.getApplicationIconSource(obj);
  if (null != user) {
    let tmp2Result = tmp2(1396);
    userAvatarSource = tmp2Result.getUserAvatarSource(user);
  }
  obj = { style: tmp.header, children: null };
  const obj1 = { style: tmp.headerIcons, children: null };
  const items = [hasOwnProperty(native.Avatar, { source: applicationIconSource, size: native.AvatarSizes.XLARGE }), ,];
  const obj3 = { style: tmp.ellipseGroup, children: null };
  const items1 = [
    hasOwnProperty(View, { style: tmp.ellipse }),
    hasOwnProperty(View, { style: tmp.ellipse }),
    hasOwnProperty(View, { style: tmp.ellipse }),
  ];
  obj3.children = items1;
  items[1] = timestampProducer(View, obj3);
  const obj2 = { source: applicationIconSource, size: native.AvatarSizes.XLARGE };
  const obj4 = { style: tmp.ellipse };
  const obj5 = { style: tmp.ellipse };
  const obj6 = { style: tmp.ellipse };
  items[2] = hasOwnProperty(native.Avatar, { source: userAvatarSource, size: native.AvatarSizes.XLARGE });
  obj1.children = items;
  const items2 = [timestampProducer(View, obj1), ,];
  const obj8 = { style: tmp.applicationNameWrapper, children: null };
  const items3 = [
    hasOwnProperty(Text_Text.Text, {
      variant: "text-lg/bold",
      color: "mobile-text-heading-primary",
      children: application.name,
    }),
  ];
  let tmp8Result = null;
  if (null != bot) {
    const obj10 = { style: tmp.botTag, verified: null };
    let hasFlagResult = null != bot.public_flags;
    tmp2Result = tmp2(9438);
    if (hasFlagResult) {
      hasFlagResult = tmp9(1384).hasFlag(bot.public_flags, UserFlags.VERIFIED_BOT);
      const tmp9Result = tmp9(1384);
    }
    obj10.verified = hasFlagResult;
    tmp8Result = tmp8(tmp2Result, obj10);
  }
  items3[1] = tmp8Result;
  obj8.children = items3;
  items2[1] = timestampProducer(View, obj8);
  if (accountScopes.accountScopes.length > 0) {
    const intl2 = tmp9(1114).intl;
    let stringResult = intl2.string(tmp9(1114).t.jFbDnJ);
  } else {
    const intl = tmp9(1114).intl;
    stringResult = intl.string(tmp9(1114).t["X+Fdpo"]);
  }
  items2[2] = hasOwnProperty(Text_Text.Text, {
    variant: "heading-md/normal",
    color: "text-default",
    children: stringResult,
  });
  obj.children = items2;
  return timestampProducer(View, obj);
}
