// === Module 9421: ConnectAccountStep ===

// Module 9421 (ConnectAccountStep)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import shared from "shared" /* 4680 */;
import useThemeDefault from "useTheme" /* 4763 */;
import CheckmarkLargeIcon from "CheckmarkLargeIcon" /* 4779 */;
import Text_Text from "Text/Text" /* 4825 */;
import PlatformsDefault from "Platforms" /* 5588 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 7496 */;
import authorizeConnectionDefault from "authorizeConnection" /* 9422 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5056 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { flexDirection: "column", gap: 16, width: "100%" }, header: { flexDirection: "column", alignItems: "center", gap: 8, marginBottom: 8 }, headerIcons: { flexDirection: "row", alignItems: "center", gap: 16, marginBottom: 8 }, card: { flexDirection: "row", alignItems: "center", gap: 12, padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.md }, cardName: { flex: 1, minWidth: 0 }, cardInfo: { flex: 1, minWidth: 0, flexDirection: "column", gap: 2 }, platformIcon: null, platformIconSmall: null, infoNotice: null, infoText: null, divider: null };
let size = { width: 40, height: 40, borderRadius: nativeDefault.radii.sm };
obj2.platformIcon = size;
const size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
obj2.platformIconSmall = size1;
let obj3 = { flexDirection: "row", alignItems: "center", gap: 12, padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.md };
obj2.infoNotice = { flexDirection: "row", alignItems: "flex-start", gap: 8, padding: 12, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, borderColor: nativeDefault.colors.ICON_FEEDBACK_INFO, borderWidth: 1, borderRadius: nativeDefault.radii.sm };
obj2.infoText = { flex: 1 };
let obj4 = { flexDirection: "row", alignItems: "flex-start", gap: 8, padding: 12, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, borderColor: nativeDefault.colors.ICON_FEEDBACK_INFO, borderWidth: 1, borderRadius: nativeDefault.radii.sm };
obj2.divider = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 8 };
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/ConnectAccountStep.tsx");

export default function ConnectAccountStep(clientId) {
  clientId = clientId.clientId;
  const platformType = clientId.platformType;
  const platformName = clientId.platformName;
  const tmp = closure_10();
  const tmp4 = platformType(4763)();
  const items = [ApplicationStore];
  const items1 = [clientId];
  const stateFromStores = clientId(504).useStateFromStores(items, () => ApplicationStore.getApplication(clientId), items1);
  const obj = clientId(504);
  const items2 = [AuthenticationStore, UserStore];
  const stateFromStores1 = clientId(504).useStateFromStores(items2, () => {
    currentUser = null;
    if (null != id.getId()) {
      currentUser = currentUser.getCurrentUser();
    }
    return currentUser;
  });
  const obj2 = clientId(504);
  value = platformType(5588).get(platformType);
  if (null == value) {
    let applicationIconSource;
    if (null != stateFromStores) {
      ({ id: obj7.id, icon: obj7.icon } = stateFromStores);
      applicationIconSource = tmp2(1397).getApplicationIconSource({ id: null, icon: null });
      const obj4 = { id: null, icon: null };
      const tmp2Result = tmp2(1397);
    }
    let userAvatarSource;
    if (null != stateFromStores1) {
      userAvatarSource = tmp2(1397).getUserAvatarSource(stateFromStores1);
      const tmp2Result2 = tmp2(1397);
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
    const obj5 = { style: tmp.container, children: null };
    const obj6 = { style: tmp.header, children: null };
    const obj8 = { style: tmp.headerIcons, children: null };
    const obj9 = { source: applicationIconSource, size: tmp5(1177).AvatarSizes.XLARGE };
    const items4 = [closure_8(tmp5(1177).Avatar, obj9), , ];
    const obj10 = { color: tmp2(576).colors.INTERACTIVE_TEXT_DEFAULT, size: "md" };
    items4[1] = closure_8(tmp5(8271).MoreHorizontalIcon, obj10);
    const obj11 = { source: userAvatarSource, size: tmp5(1177).AvatarSizes.XLARGE };
    items4[2] = closure_8(tmp5(1177).Avatar, obj11);
    obj8.children = items4;
    const items5 = [closure_9(View, obj8), , ];
    const obj12 = { variant: "text-lg/normal", color: "text-default", children: null };
    const intl = tmp5(1115).intl;
    obj12.children = intl.string(tmp5(1115).t.uT1CPa);
    items5[1] = closure_8(tmp5(4825).Text, obj12);
    const obj13 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: str };
    items5[2] = closure_8(tmp5(4825).Text, obj13);
    obj6.children = items5;
    const items6 = [closure_9(View, obj6), , , ];
    const obj14 = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl2 = tmp5(1115).intl;
    const obj15 = { applicationName: str, platformName };
    obj14.children = intl2.format(tmp5(1115).t["aJRE/Q"], obj15);
    items6[1] = closure_8(tmp5(4825).Text, obj14);
    const obj16 = { style: tmp.card, children: null };
    let tmp16Result = null;
    if (null != null) {
      const obj17 = { source: null, style: tmp.platformIcon, disableColor: true };
      tmp16Result = closure_8(tmp5(1177).Icon, obj17);
    }
    const items7 = [tmp16Result, , ];
    const obj18 = { variant: "text-md/medium", style: tmp.cardName, color: "text-default", children: platformName };
    items7[1] = closure_8(tmp5(4825).Text, obj18);
    const obj19 = {
      variant: "primary",
      size: "sm",
      onPress() {
          authorizeConnectionDefault({ platformType, location: "OAuth2 Connect Account Step" });
        },
      text: null
    };
    const intl3 = tmp5(1115).intl;
    obj19.text = intl3.string(tmp5(1115).t.S0W8Z5);
    items7[2] = closure_8(tmp5(5273).Button, obj19);
    obj16.children = items7;
    items6[2] = closure_9(View, obj16);
    const obj20 = { style: tmp.infoNotice, children: null };
    const obj21 = { color: tmp2(576).colors.ICON_FEEDBACK_INFO, size: "sm" };
    const items8 = [closure_8(tmp5(4783).CircleInformationIcon, obj21), ];
    const obj22 = { variant: "text-sm/normal", color: "text-default", style: tmp.infoText, children: null };
    const intl4 = tmp5(1115).intl;
    const obj23 = { platformName, applicationName: str };
    obj22.children = intl4.format(tmp5(1115).t["8psEFX"], obj23);
    items8[1] = closure_8(tmp5(4825).Text, obj22);
    obj20.children = items8;
    items6[3] = closure_9(View, obj20);
    obj5.children = items6;
    return closure_9(View, obj5);
  } else {
    const tmp5Result = tmp5(1397);
    const icon = value.icon;
    const source = tmp5Result.makeSource(tmp5(4680).isThemeLight(tmp4) ? icon.lightPNG : icon.darkPNG);
    const tmp5Result2 = tmp5(4680);
  }
  const obj3 = platformType(5588);
};
export const ConnectedAccountCard = function ConnectedAccountCard(arg0) {
  ({ platformName, connectedAccount } = arg0);
  ({ platformType, applicationName } = arg0);
  const tmp = closure_10();
  const tmp4 = useThemeDefault();
  value = PlatformsDefault.get(platformType);
  if (null == value) {
    const obj4 = { style: tmp.container, children: null };
    const obj5 = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl = util.intl;
    const obj6 = { platformName };
    obj5.children = intl.format(util.t["+oaRw3"], obj6);
    const items = [React6(Text_Text.Text, obj5), , , ];
    const obj7 = { style: tmp.card, children: null };
    let tmp10Result = null;
    if (null != null) {
      const obj8 = { source: null, style: tmp.platformIconSmall, disableColor: true };
      tmp10Result = React6(native.Icon, obj8);
    }
    const items1 = [tmp10Result, , ];
    const obj9 = { style: tmp.cardInfo, children: null };
    const obj10 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: connectedAccount.name };
    const items2 = [React6(Text_Text.Text, obj10), ];
    const obj11 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl2 = util.intl;
    const obj12 = { platformName, connectedAccountId: connectedAccount.id };
    obj11.children = intl2.format(util.t.Dkd7sE, obj12);
    items2[1] = React6(Text_Text.Text, obj11);
    obj9.children = items2;
    items1[1] = React7(View, obj9);
    const obj13 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE, size: "sm" };
    items1[2] = React6(CheckmarkLargeIcon.CheckmarkLargeIcon, obj13);
    obj7.children = items1;
    items[1] = React7(View, obj7);
    const obj14 = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl3 = util.intl;
    const obj15 = { applicationName };
    obj14.children = intl3.format(util.t.pyRNXJ, obj15);
    items[2] = React6(Text_Text.Text, obj14);
    const obj16 = { style: tmp.divider };
    items[3] = React6(View, obj16);
    obj4.children = items;
    return React7(View, obj4);
  } else {
    const obj2 = AvatarUtils;
    const icon = value.icon;
    const source = obj2.makeSource(shared.isThemeLight(tmp4) ? icon.lightPNG : icon.darkPNG);
  }
};