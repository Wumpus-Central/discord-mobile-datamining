// === Module 9251: ConnectAccountStep ===

// Module 9251 (ConnectAccountStep)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import AvatarUtils from "AvatarUtils" /* 1396 */;
import shared from "shared" /* 4411 */;
import useThemeDefault from "useTheme" /* 4495 */;
import CheckmarkLargeIcon from "CheckmarkLargeIcon" /* 4511 */;
import Text_Text from "Text/Text" /* 4556 */;
import PlatformsDefault from "Platforms" /* 5283 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 7163 */;
import authorizeConnectionDefault from "authorizeConnection" /* 9252 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { container: { flexDirection: "column", gap: 16, width: "100%" }, header: { flexDirection: "column", alignItems: "center", gap: 8, marginBottom: 8 }, headerIcons: { flexDirection: "row", alignItems: "center", gap: 16, marginBottom: 8 }, card: null, cardName: null, cardInfo: null, platformIcon: null, platformIconSmall: null, infoNotice: null, infoText: null, divider: null };
createStyles = { flexDirection: "row", alignItems: "center", gap: 12, padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.md };
createStyles.card = createStyles;
createStyles.cardName = { flex: 1, minWidth: 0 };
createStyles.cardInfo = { flex: 1, minWidth: 0, flexDirection: "column", gap: 2 };
let size = { width: 40, height: 40, borderRadius: nativeDefault.radii.sm };
createStyles.platformIcon = size;
const size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
createStyles.platformIconSmall = size1;
createStyles.infoNotice = { flexDirection: "row", alignItems: "flex-start", gap: 8, padding: 12, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, borderColor: nativeDefault.colors.ICON_FEEDBACK_INFO, borderWidth: 1, borderRadius: nativeDefault.radii.sm };
createStyles.infoText = { flex: 1 };
let obj1 = { flexDirection: "row", alignItems: "flex-start", gap: 8, padding: 12, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, borderColor: nativeDefault.colors.ICON_FEEDBACK_INFO, borderWidth: 1, borderRadius: nativeDefault.radii.sm };
createStyles.divider = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 8 };
let closure_10 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/ConnectAccountStep.tsx");

export default function ConnectAccountStep(clientId) {
  clientId = clientId.clientId;
  const platformType = clientId.platformType;
  const platformName = clientId.platformName;
  const tmp = closure_10();
  let obj = clientId(504);
  const items = [ApplicationStore];
  const items1 = [clientId];
  const stateFromStores = obj.useStateFromStores(items, () => ApplicationStore.getApplication(clientId), items1);
  let obj1 = clientId(504);
  const items2 = [AuthenticationStore, UserStore];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => {
    currentUser = null;
    if (null != id.getId()) {
      currentUser = currentUser.getCurrentUser();
    }
    return currentUser;
  });
  let obj2 = platformType(5283);
  value = obj2.get(platformType);
  if (null == value) {
    let applicationIconSource;
    if (null != stateFromStores) {
      let tmp2Result = tmp2(1396);
      obj = { id: null, icon: null };
      ({ id: obj7.id, icon: obj7.icon } = stateFromStores);
      applicationIconSource = tmp2Result.getApplicationIconSource(obj);
    }
    let userAvatarSource;
    if (null != stateFromStores1) {
      tmp2Result = tmp2(1396);
      userAvatarSource = tmp2Result.getUserAvatarSource(stateFromStores1);
    }
    let str;
    if (stateFromStores != null) {
      str = stateFromStores.name;
    }
    if (str == null) {
      str = "";
    }
    const items3 = [clientId];
    const effect = noop.useEffect(() => {
      const application = ApplicationActionCreatorsDefault.fetchApplication(clientId);
    }, items3);
    obj = { style: tmp.container, children: null };
    obj1 = { style: tmp.header, children: null };
    obj2 = { style: tmp.headerIcons, children: null };
    const obj3 = { source: applicationIconSource, size: tmp5(1178).AvatarSizes.XLARGE };
    const items4 = [closure_8(tmp5(1178).Avatar, obj3), , ];
    const obj4 = { color: tmp2(576).colors.INTERACTIVE_TEXT_DEFAULT, size: "md" };
    items4[1] = closure_8(tmp5(8672).MoreHorizontalIcon, obj4);
    const obj5 = { source: userAvatarSource, size: tmp5(1178).AvatarSizes.XLARGE };
    items4[2] = closure_8(tmp5(1178).Avatar, obj5);
    obj2.children = items4;
    const items5 = [closure_9(View, obj2), , ];
    const obj6 = { variant: "text-lg/normal", color: "text-default", children: null };
    const intl = tmp5(1114).intl;
    obj6.children = intl.string(tmp5(1114).t.uT1CPa);
    items5[1] = closure_8(tmp5(4556).Text, obj6);
    const obj7 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: str };
    items5[2] = closure_8(tmp5(4556).Text, obj7);
    obj1.children = items5;
    const items6 = [closure_9(View, obj1), , , ];
    const obj8 = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl2 = tmp5(1114).intl;
    const obj9 = { applicationName: str, platformName };
    obj8.children = intl2.format(tmp5(1114).t["aJRE/Q"], obj9);
    items6[1] = closure_8(tmp5(4556).Text, obj8);
    const obj10 = { style: tmp.card, children: null };
    let tmp16Result = null;
    if (null != null) {
      const obj11 = { source: null, style: tmp.platformIcon, disableColor: true };
      tmp16Result = closure_8(tmp5(1178).Icon, obj11);
    }
    const items7 = [tmp16Result, , ];
    const obj12 = { variant: "text-md/medium", style: tmp.cardName, color: "text-default", children: platformName };
    items7[1] = closure_8(tmp5(4556).Text, obj12);
    const obj13 = {
      variant: "primary",
      size: "sm",
      onPress() {
          authorizeConnectionDefault({ platformType, location: "OAuth2 Connect Account Step" });
        },
      text: null
    };
    const intl3 = tmp5(1114).intl;
    obj13.text = intl3.string(tmp5(1114).t.S0W8Z5);
    items7[2] = closure_8(tmp5(4975).Button, obj13);
    obj10.children = items7;
    items6[2] = closure_9(View, obj10);
    const obj14 = { style: tmp.infoNotice, children: null };
    const obj15 = { color: tmp2(576).colors.ICON_FEEDBACK_INFO, size: "sm" };
    const items8 = [closure_8(tmp5(4515).CircleInformationIcon, obj15), ];
    const obj16 = { variant: "text-sm/normal", color: "text-default", style: tmp.infoText, children: null };
    const intl4 = tmp5(1114).intl;
    const obj17 = { platformName, applicationName: str };
    obj16.children = intl4.format(tmp5(1114).t["8psEFX"], obj17);
    items8[1] = closure_8(tmp5(4556).Text, obj16);
    obj14.children = items8;
    items6[3] = closure_9(View, obj14);
    obj.children = items6;
    return closure_9(View, obj);
  } else {
    tmp5(1396);
    const tmp5Result = tmp5(4411);
    const icon = value.icon;
    const source = tmp5Result.makeSource(tmp5Result.isThemeLight(tmp4) ? icon.lightPNG : icon.darkPNG);
  }
  tmp4 = platformType(4495)();
};
export const ConnectedAccountCard = function ConnectedAccountCard(arg0) {
  ({ platformName, connectedAccount } = arg0);
  ({ platformType, applicationName } = arg0);
  const tmp = closure_10();
  let obj = PlatformsDefault;
  value = obj.get(platformType);
  if (null == value) {
    obj = { style: tmp.container, children: null };
    obj = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl = util.intl;
    let obj1 = { platformName };
    obj.children = intl.format(util.t["+oaRw3"], obj1);
    const items = [React6(Text_Text.Text, obj), , , ];
    let obj2 = { style: tmp.card, children: null };
    let tmp10Result = null;
    if (null != null) {
      const obj3 = { source: null, style: tmp.platformIconSmall, disableColor: true };
      tmp10Result = React6(native.Icon, obj3);
    }
    const items1 = [tmp10Result, , ];
    const obj4 = { style: tmp.cardInfo, children: null };
    const obj5 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: connectedAccount.name };
    const items2 = [React6(Text_Text.Text, obj5), ];
    const obj6 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl2 = util.intl;
    const obj7 = { platformName, connectedAccountId: connectedAccount.id };
    obj6.children = intl2.format(util.t.Dkd7sE, obj7);
    items2[1] = React6(Text_Text.Text, obj6);
    obj4.children = items2;
    items1[1] = React7(View, obj4);
    const obj8 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE, size: "sm" };
    items1[2] = React6(CheckmarkLargeIcon.CheckmarkLargeIcon, obj8);
    obj2.children = items1;
    items[1] = React7(View, obj2);
    const obj9 = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl3 = util.intl;
    const obj10 = { applicationName };
    obj9.children = intl3.format(util.t.pyRNXJ, obj10);
    items[2] = React6(Text_Text.Text, obj9);
    const obj11 = { style: tmp.divider };
    items[3] = React6(View, obj11);
    obj.children = items;
    return React7(View, obj);
  } else {
    obj1 = AvatarUtils;
    obj2 = shared;
    const icon = value.icon;
    const source = obj1.makeSource(obj2.isThemeLight(tmp4) ? icon.lightPNG : icon.darkPNG);
  }
  tmp4 = useThemeDefault();
};