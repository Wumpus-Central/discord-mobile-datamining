// discord_app/modules/local_app_detection/native/RobloxConnectionCoachmark.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import AvatarUtils from "../../../utils/AvatarUtils.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import themes from "../../../design/utils/shared/themes.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import PlatformsDefault from "../../../lib/Platforms.tsx";
import ConnectedAccountsActionCreatorsDefault from "../../../actions/ConnectedAccountsActionCreators.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import inlineStyles from "../../../../_runtime/08453_inlineStyles.js";
import authorizeConnectionDefault from "../../connections/authorizeConnection.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConnectedAccountsStore from "../../../stores/ConnectedAccountsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import LocalAppDetectionStore from "LocalAppDetectionStore.tsx";

require = fn;
function RobloxIcon(theme) {
  let obj = themes;
  const isThemeDarkResult = obj.isThemeDark(theme.theme);
  const tmp = closure_15();
  let str = "white";
  value = PlatformsDefault.get(constants2.ROBLOX);
  if (isThemeDarkResult) {
    str = "black";
  }
  const icon = value.icon;
  obj = { style: null, children: null };
  const items = [tmp.robloxIconContainer, { backgroundColor: str }];
  obj.style = items;
  const source = AvatarUtils.makeSource(isThemeDarkResult ? icon.darkPNG : icon.lightPNG);
  obj = { size: tmp2(1178).IconSizes.LARGE, source, disableColor: true };
  obj.children = map1(native.Icon, obj);
  return map1(View, obj);
}
class UnionIcon {
  constructor(arg0) {
    tmp = closure_0;
    tmp2 = closure_2;
    obj = closure_0(closure_2[24]);
    str = "black";
    if (obj.isThemeDark(global.theme)) {
      str = "white";
    }
    id = closure_4.useId();
    size = { width: 25, height: 4, viewBox: "0 0 25 4", id, children: null };
    tmp4 = closure_1(tmp2[28]);
    items = [,];
    items[0] = jsx(tmp(tmp2[28]).Path, {
      fill: "url(#a)",
      d: "M1.7002 0.799805C2.36285 0.79991 2.90039 1.33732 2.90039 2C2.90029 2.66259 2.36278 3.20009 1.7002 3.2002C1.03752 3.2002 0.500106 2.66265 0.5 2C0.5 1.33726 1.03745 0.799805 1.7002 0.799805ZM8.90039 0.799805C9.56297 0.799989 10.0996 1.33737 10.0996 2C10.0995 2.66254 9.56291 3.20001 8.90039 3.2002C8.23771 3.2002 7.70029 2.66266 7.7002 2C7.7002 1.33726 8.23765 0.799805 8.90039 0.799805ZM16.0996 0.799805C16.7624 0.799805 17.2998 1.33726 17.2998 2C17.2997 2.66266 16.7623 3.2002 16.0996 3.2002C15.4371 3.19996 14.9005 2.66251 14.9004 2C14.9004 1.3374 15.4371 0.800042 16.0996 0.799805ZM23.2998 0.799805C23.9625 0.799805 24.5 1.33726 24.5 2C24.4999 2.66266 23.9625 3.2002 23.2998 3.2002C22.6372 3.20006 22.0997 2.66258 22.0996 2C22.0996 1.33734 22.6372 0.799936 23.2998 0.799805Z",
    });
    obj = { children: null };
    obj1 = { id: "a", x1: 0.5, y1: 2, x2: 24.5, y2: 2, gradientUnits: "userSpaceOnUse", children: null };
    items1 = [,];
    items1[0] = jsx(tmp(tmp2[28]).Stop, { stopColor: str, stopOpacity: 0.3 });
    items1[1] = jsx(tmp(tmp2[28]).Stop, { offset: 1, stopColor: str, stopOpacity: 0.7 });
    obj1.children = items1;
    obj.children = jsxs(tmp(tmp2[28]).LinearGradient, obj1);
    items[1] = jsx(tmp(tmp2[28]).Defs, obj);
    size.children = items;
    return jsxs(tmp4, size);
  }
}
function UserIcon() {
  const tmp = closure_15();
  const items = [UserStore];
  let obj = { style: tmp.avatarContainer, children: null };
  obj = { style: tmp.avatarInnerBorder };
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [
    map1(View, obj),
    map1(native.Avatar, { size: native.AvatarSizes.NORMAL, user: stateFromStores, guildId: "Array" }),
  ];
  obj.children = items1;
  return closure_1_14(View, obj);
}
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsLocations: closure_9, PlatformTypes: c10, UserSettingsSections: closure_11 } = Constants);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
fn(4560);
let createStyles = {
  robloxIconContainer: null,
  content: null,
  text: null,
  avatarContainer: null,
  avatarInnerBorder: null,
};
let size = {
  width: 40,
  height: 40,
  borderRadius: nativeDefault.radii.md,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
createStyles.robloxIconContainer = size;
createStyles = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.content = createStyles;
createStyles.text = { textAlign: "center" };
createStyles.avatarContainer = { position: "relative" };
const size1 = {
  zIndex: 1,
  position: "absolute",
  borderColor: nativeDefault.colors.BORDER_STRONG,
  borderRadius: nativeDefault.radii.round,
  borderWidth: 1,
  width: "100%",
  height: "100%",
};
createStyles.avatarInnerBorder = size1;
let closure_15 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/local_app_detection/native/RobloxConnectionCoachmark.tsx");

export default function RobloxConnectionActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  function handleCancel() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (markAsDismissed != null) {
      tmp2(ContentDismissActionType.DISMISS);
    }
  }
  const tmp = closure_15();
  let obj = markAsDismissed(4271);
  const theme = obj.useThemeContext().theme;
  obj = { startExpanded: true, contentStyles: tmp.content, header: null, onDismiss: null, children: null };
  obj = { title: null, leading: closure_13(markAsDismissed(7199).ActionSheetCloseButton, { onPress: handleCancel }) };
  obj.header = closure_13(markAsDismissed(7149).BottomSheetTitleHeader, obj);
  obj.onDismiss = function onDismiss() {
    return markAsDismissed(ContentDismissActionType.DISMISS);
  };
  const obj1 = { spacing: 24, style: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
  const obj2 = { justify: "center", align: "center", direction: "horizontal", children: null };
  const items = [closure_13(RobloxIcon, { theme }), closure_13(UnionIcon, { theme }), closure_13(UserIcon, {})];
  obj2.children = items;
  const items1 = [closure_14(markAsDismissed(4973).Stack, obj2), ,];
  const obj3 = { justify: "center", children: null };
  const obj4 = { variant: "heading-xl/bold", style: tmp.text, children: null };
  const intl = markAsDismissed(1114).intl;
  obj4.children = intl.string(markAsDismissed(1114).t.t3asUZ);
  const items2 = [closure_13(markAsDismissed(4556).Text, obj4)];
  const obj5 = { variant: "text-md/medium", style: tmp.text, children: null };
  const intl2 = markAsDismissed(1114).intl;
  obj5.children = intl2.string(markAsDismissed(1114).t.no96NU);
  items2[1] = closure_13(markAsDismissed(4556).Text, obj5);
  obj3.children = items2;
  items1[1] = closure_14(markAsDismissed(4973).Stack, obj3);
  const obj6 = { children: null };
  const obj7 = { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null };
  const intl3 = markAsDismissed(1114).intl;
  obj7.text = intl3.string(markAsDismissed(1114).t.ItuabN);
  obj7.icon = closure_13(markAsDismissed(12956).WindowLaunchIcon, { size: "sm", color: nativeDefault.colors.WHITE });
  obj7.onPress = function onPress() {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (markAsDismissed != null) {
      tmp4(ContentDismissActionType.PRIMARY);
    }
    obj = { platformType: constants2.ROBLOX, location: constants.ROBLOX_CONNECTION_ACTION_SHEET };
    authorizeConnectionDefault(obj);
    obj = { screen: constants3.CONNECTIONS };
    openUserSettings.openUserSettings(obj);
  };
  const items3 = [closure_13(markAsDismissed(4975).Button, obj7)];
  const obj9 = { text: null, variant: "secondary", size: "lg", onPress: null };
  const intl4 = markAsDismissed(1114).intl;
  obj9.text = intl4.string(markAsDismissed(1114).t.DiGJy3);
  obj9.onPress = handleCancel;
  items3[1] = closure_13(markAsDismissed(4975).Button, obj9);
  obj6.children = items3;
  items1[2] = closure_14(markAsDismissed(4973).Stack, obj6);
  obj1.children = items1;
  obj.children = closure_14(markAsDismissed(4973).Stack, obj1);
  return closure_13(markAsDismissed(7150).BottomSheet, obj);
}
export { UnionIcon };
export const useShouldShowRobloxConnectionCoachmark = function useShouldShowRobloxConnectionCoachmark() {
  const items = [LocalAppDetectionStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () =>
    appInstalled.isAppInstalled(stateFromStores(13712).DetectableAppNames.ROBLOX),
  );
  const tmp2 = hasRoloxAccount(noop.useState(false), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  let obj = stateFromStores(504);
  const items1 = [ConnectedAccountsStore];
  const stateFromStoresObject = stateFromStores(504).useStateFromStoresObject(items1, () => {
    const obj = { fetchingAccounts: ConnectedAccountsStore.isFetching(), hasRoloxAccount: null };
    const accounts = ConnectedAccountsStore.getAccounts();
    obj.hasRoloxAccount = null != accounts.find((type) => type.type === constants.ROBLOX);
    return obj;
  });
  ({ fetchingAccounts, hasRoloxAccount } = stateFromStoresObject);
  const items2 = [first, stateFromStores];
  const effect = noop.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = !first;
    }
    if (tmp) {
      dependencyMap(true);
      const response = ConnectedAccountsActionCreatorsDefault.fetch();
    }
  }, items2);
  const items3 = [hasRoloxAccount];
  const effect1 = noop.useEffect(() => {
    if (hasRoloxAccount) {
      const obj = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(
        dismissible_content.DismissibleContent.ROBLOX_CONNECTION_COACHMARK,
        obj,
      );
    }
  }, items3);
  let tmp7 = !fetchingAccounts;
  if (!fetchingAccounts) {
    tmp7 = stateFromStores;
  }
  if (tmp7) {
    tmp7 = !hasRoloxAccount;
  }
  return tmp7;
};
