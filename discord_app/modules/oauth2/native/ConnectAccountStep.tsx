// discord_app/modules/oauth2/native/ConnectAccountStep.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import AccessibilityAnnouncer from "../../../design/shared.tsx";
import getAvatarURL from "../../../utils/AvatarUtils.tsx";
import CheckmarkLargeIcon from "../../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import getPlatformUserUrlDefault from "../../../lib/Platforms.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../applications/ApplicationStore.tsx";
import closure_6 from "../../../stores/AuthenticationStore.tsx";
import closure_7 from "../../../stores/UserStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { container: { flexDirection: "column", gap: 16, width: "100%" }, header: { flexDirection: "column", alignItems: "center", gap: 8, marginBottom: 8 }, headerIcons: { flexDirection: "row", alignItems: "center", gap: 16, marginBottom: 8 }, card: null, cardName: null, cardInfo: null, platformIcon: null, platformIconSmall: null, infoNotice: null, infoText: null, divider: null };
createCacheKey = { flexDirection: "row", alignItems: "center", gap: 12, padding: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: ThemesDefault.radii.md };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { flex: 1, minWidth: 0 };
createCacheKey[5] = { flex: 1, minWidth: 0, flexDirection: "column", gap: 2 };
createCacheKey[6] = { width: 40, height: 40, borderRadius: ThemesDefault.radii.sm };
let obj1 = { width: 40, height: 40, borderRadius: ThemesDefault.radii.sm };
createCacheKey[7] = { width: 32, height: 32, borderRadius: ThemesDefault.radii.sm };
let obj2 = { width: 32, height: 32, borderRadius: ThemesDefault.radii.sm };
createCacheKey[8] = { flexDirection: "row", alignItems: "flex-start", gap: 8, padding: 12, backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_INFO, borderColor: ThemesDefault.colors.ICON_FEEDBACK_INFO, borderWidth: 1, borderRadius: ThemesDefault.radii.sm };
createCacheKey[9] = { flex: 1 };
let obj3 = { flexDirection: "row", alignItems: "flex-start", gap: 8, padding: 12, backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_INFO, borderColor: ThemesDefault.colors.ICON_FEEDBACK_INFO, borderWidth: 1, borderRadius: ThemesDefault.radii.sm };
createCacheKey[10] = { height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginVertical: 8 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj4 = { height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginVertical: 8 };
const result = require("set").fileFinishedImporting("modules/oauth2/native/ConnectAccountStep.tsx");

export default function ConnectAccountStep(clientId) {
  clientId = clientId.clientId;
  const platformType = clientId.platformType;
  const platformName = clientId.platformName;
  const tmp = callback3();
  let obj = clientId(589);
  const items = [closure_5];
  const items1 = [clientId];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getApplication(clientId), items1);
  obj1 = clientId(589);
  const items2 = [closure_6, closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => {
    let currentUser = null;
    if (null != id.getId()) {
      currentUser = currentUser.getCurrentUser();
    }
    return currentUser;
  });
  let obj2 = platformType(5174);
  const value = obj2.get(platformType);
  if (null == value) {
    let applicationIconSource;
    if (null != stateFromStores) {
      let tmp2Result = tmp2(1435);
      obj = { id: null, icon: null };
      ({ id: obj7[0], icon: obj7[1] } = stateFromStores);
      applicationIconSource = tmp2Result.getApplicationIconSource(obj);
    }
    let userAvatarSource;
    if (null != stateFromStores1) {
      tmp2Result = tmp2(1435);
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
    const effect = React.useEffect(() => {
      const application = platformType(closure_1_2[13]).fetchApplication(clientId);
    }, items3);
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj1 = { style: null, children: null };
    obj1[0] = tmp.header;
    obj2 = { style: null, children: null };
    obj2[0] = tmp.headerIcons;
    const obj3 = { source: null, size: null };
    obj3[0] = applicationIconSource;
    obj3[1] = tmp5(1297).AvatarSizes.XLARGE;
    const items4 = [callback(tmp5(1297).Avatar, obj3), , ];
    const obj4 = { color: null, size: "md" };
    obj4[0] = tmp2(712).colors.INTERACTIVE_TEXT_DEFAULT;
    items4[1] = callback(tmp5(8819).MoreHorizontalIcon, obj4);
    const obj5 = { source: null, size: null };
    obj5[0] = userAvatarSource;
    obj5[1] = tmp5(1297).AvatarSizes.XLARGE;
    items4[2] = callback(tmp5(1297).Avatar, obj5);
    obj2[1] = items4;
    const items5 = [callback2(View, obj2), , ];
    const obj6 = { variant: "text-lg/normal", color: "text-default", children: null };
    const intl = tmp5(1236).intl;
    obj6[2] = intl.string(tmp5(1236).t.uT1CPa);
    items5[1] = callback(tmp5(4440).Text, obj6);
    const obj7 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: null };
    obj7[2] = str;
    items5[2] = callback(tmp5(4440).Text, obj7);
    obj1[1] = items5;
    const items6 = [callback2(View, obj1), , , ];
    const obj8 = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl2 = tmp5(1236).intl;
    const obj9 = { applicationName: null, platformName: null };
    obj9[0] = str;
    obj9[1] = platformName;
    obj8[2] = intl2.format(tmp5(1236).t["aJRE/Q"], obj9);
    items6[1] = callback(tmp5(4440).Text, obj8);
    const obj10 = { style: null, children: null };
    obj10[0] = tmp.card;
    let tmp16Result = null;
    if (null != null) {
      const obj11 = { source: null, style: null, disableColor: true };
      obj11[0] = null;
      obj11[1] = tmp.platformIcon;
      tmp16Result = tmp16(tmp5(1297).Icon, obj11);
    }
    const items7 = [tmp16Result, , ];
    const obj12 = { variant: "text-md/medium", style: null, color: "text-default", children: null };
    obj12[1] = tmp.cardName;
    obj12[3] = platformName;
    items7[1] = callback(tmp5(4440).Text, obj12);
    const obj13 = { variant: "primary", size: "sm", onPress: null, text: null };
    obj13[2] = function onPress() {
      platformType(closure_1_2[19])({ platformType, location: "OAuth2 Connect Account Step" });
    };
    const intl3 = tmp5(1236).intl;
    obj13[3] = intl3.string(tmp5(1236).t.S0W8Z5);
    items7[2] = callback(tmp5(4879).Button, obj13);
    obj10[1] = items7;
    items6[2] = callback2(View, obj10);
    const obj14 = { style: null, children: null };
    obj14[0] = tmp.infoNotice;
    const obj15 = { color: null, size: "sm" };
    obj15[0] = tmp2(712).colors.ICON_FEEDBACK_INFO;
    const items8 = [callback(tmp5(4399).CircleInformationIcon, obj15), ];
    const obj16 = { variant: "text-sm/normal", color: "text-default", style: null, children: null };
    obj16[2] = tmp.infoText;
    const intl4 = tmp5(1236).intl;
    const obj17 = { platformName: null, applicationName: null };
    obj17[0] = platformName;
    obj17[1] = str;
    obj16[3] = intl4.format(tmp5(1236).t["8psEFX"], obj17);
    items8[1] = callback(tmp5(4440).Text, obj16);
    obj14[1] = items8;
    items6[3] = callback2(View, obj14);
    obj[1] = items6;
    return callback2(View, obj);
  } else {
    let tmp5Result = tmp5(1435);
    tmp5Result = tmp5(1363);
    const icon = value.icon;
    const source = tmp5Result.makeSource(tmp5Result.isThemeLight(tmp4) ? icon.lightPNG : icon.darkPNG);
  }
};
export const ConnectedAccountCard = function ConnectedAccountCard(arg0) {
  ({ platformName, connectedAccount } = arg0);
  ({ platformType, applicationName } = arg0);
  const tmp = callback3();
  let obj = getPlatformUserUrlDefault;
  const value = obj.get(platformType);
  if (null == value) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl = getSystemLocale.intl;
    obj1 = { platformName: null };
    obj1[0] = platformName;
    obj[2] = intl.format(getSystemLocale.t["+oaRw3"], obj1);
    const items = [callback(Text.Text, obj), , , ];
    let obj2 = { style: null, children: null };
    obj2[0] = tmp.card;
    let tmp10Result = null;
    if (null != null) {
      const obj3 = { source: null, style: null, disableColor: true };
      obj3[0] = null;
      obj3[1] = tmp.platformIconSmall;
      tmp10Result = tmp10(tmp11(1297).Icon, obj3);
    }
    const items1 = [tmp10Result, , ];
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.cardInfo;
    const obj5 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
    obj5[2] = connectedAccount.name;
    const items2 = [callback(Text.Text, obj5), ];
    const obj6 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl2 = tmp11(1236).intl;
    const obj7 = { platformName: null, connectedAccountId: null };
    obj7[0] = platformName;
    obj7[1] = connectedAccount.id;
    obj6[2] = intl2.format(getSystemLocale.t.Dkd7sE, obj7);
    items2[1] = callback(Text.Text, obj6);
    obj4[1] = items2;
    items1[1] = closure_9(View, obj4);
    const obj8 = { color: null, size: "sm" };
    obj8[0] = ThemesDefault.colors.TEXT_FEEDBACK_POSITIVE;
    items1[2] = callback(CheckmarkLargeIcon.CheckmarkLargeIcon, obj8);
    obj2[1] = items1;
    items[1] = closure_9(View, obj2);
    const obj9 = { variant: "text-sm/normal", color: "text-default", children: null };
    const intl3 = tmp11(1236).intl;
    const obj10 = { applicationName: null };
    obj10[0] = applicationName;
    obj9[2] = intl3.format(getSystemLocale.t.pyRNXJ, obj10);
    items[2] = callback(Text.Text, obj9);
    const obj11 = { style: null };
    obj11[0] = tmp.divider;
    items[3] = callback(View, obj11);
    obj[1] = items;
    return closure_9(View, obj);
  } else {
    obj1 = getAvatarURL;
    obj2 = AccessibilityAnnouncer;
    const icon = value.icon;
    const source = obj1.makeSource(obj2.isThemeLight(tmp4) ? icon.lightPNG : icon.darkPNG);
  }
};