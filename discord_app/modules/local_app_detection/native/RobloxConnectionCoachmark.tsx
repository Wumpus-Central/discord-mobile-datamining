// === Module 17138: RobloxConnectionCoachmark ===

// Module 17138 (RobloxConnectionCoachmark)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import dismissible_content from "dismissible_content" /* 1944 */;
import themes from "themes" /* 4346 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4458 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import PlatformsDefault from "Platforms" /* 5369 */;
import ConnectedAccountsActionCreatorsDefault from "ConnectedAccountsActionCreators" /* 5492 */;
import openUserSettings from "openUserSettings" /* 7492 */;
import inlineStyles from "inlineStyles" /* 8586 */;
import authorizeConnectionDefault from "authorizeConnection" /* 9395 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5367 */;
import UserStore from "UserStore" /* 1372 */;
import LocalAppDetectionStore from "LocalAppDetectionStore" /* 13819 */;

require = fn;
function RobloxIcon(theme) {
  const tmp = closure_15();
  const isThemeDarkResult = themes.isThemeDark(theme.theme);
  let str = "white";
  value = PlatformsDefault.get(constants2.ROBLOX);
  if (isThemeDarkResult) {
    str = "black";
  }
  const icon = value.icon;
  const obj3 = { style: null, children: null };
  const items = [tmp.robloxIconContainer, { backgroundColor: str }];
  obj3.style = items;
  const source = AvatarUtils.makeSource(isThemeDarkResult ? icon.darkPNG : icon.lightPNG);
  const tmp2Result = AvatarUtils;
  obj3.children = map1(native.Icon, { size: native.IconSizes.LARGE, source, disableColor: true });
  return map1(View, obj3);
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
    items = [, ];
    items[0] = jsx(tmp(tmp2[28]).Path, { fill: "url(#a)", d: "M1.7002 0.799805C2.36285 0.79991 2.90039 1.33732 2.90039 2C2.90029 2.66259 2.36278 3.20009 1.7002 3.2002C1.03752 3.2002 0.500106 2.66265 0.5 2C0.5 1.33726 1.03745 0.799805 1.7002 0.799805ZM8.90039 0.799805C9.56297 0.799989 10.0996 1.33737 10.0996 2C10.0995 2.66254 9.56291 3.20001 8.90039 3.2002C8.23771 3.2002 7.70029 2.66266 7.7002 2C7.7002 1.33726 8.23765 0.799805 8.90039 0.799805ZM16.0996 0.799805C16.7624 0.799805 17.2998 1.33726 17.2998 2C17.2997 2.66266 16.7623 3.2002 16.0996 3.2002C15.4371 3.19996 14.9005 2.66251 14.9004 2C14.9004 1.3374 15.4371 0.800042 16.0996 0.799805ZM23.2998 0.799805C23.9625 0.799805 24.5 1.33726 24.5 2C24.4999 2.66266 23.9625 3.2002 23.2998 3.2002C22.6372 3.20006 22.0997 2.66258 22.0996 2C22.0996 1.33734 22.6372 0.799936 23.2998 0.799805Z" });
    obj1 = { children: null };
    obj5 = { id: "a", x1: 0.5, y1: 2, x2: 24.5, y2: 2, gradientUnits: "userSpaceOnUse", children: null };
    items1 = [, ];
    items1[0] = jsx(tmp(tmp2[28]).Stop, { stopColor: str, stopOpacity: 0.3 });
    items1[1] = jsx(tmp(tmp2[28]).Stop, { offset: 1, stopColor: str, stopOpacity: 0.7 });
    obj5.children = items1;
    obj1.children = jsxs(tmp(tmp2[28]).LinearGradient, obj5);
    items[1] = jsx(tmp(tmp2[28]).Defs, obj1);
    size.children = items;
    return jsxs(tmp4, size);
  }
}
function UserIcon() {
  const tmp = closure_15();
  const items = [UserStore];
  const obj2 = { style: tmp.avatarContainer, children: null };
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [map1(View, { style: tmp.avatarInnerBorder }), ];
  const obj3 = { style: tmp.avatarInnerBorder };
  items1[1] = map1(native.Avatar, { size: native.AvatarSizes.NORMAL, user: stateFromStores, guildId: "Array" });
  obj2.children = items1;
  return closure_1_14(View, obj2);
}
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsLocations: closure_9, PlatformTypes: c10, UserSettingsSections: closure_11 } = Constants);
const ContentDismissActionType = fn(1955).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { robloxIconContainer: null, content: null, text: null, avatarContainer: null, avatarInnerBorder: null };
let size = { width: 40, height: 40, borderRadius: nativeDefault.radii.md, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.robloxIconContainer = size;
obj2.content = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.text = { textAlign: "center" };
obj2.avatarContainer = { position: "relative" };
const size1 = { zIndex: 1, position: "absolute", borderColor: nativeDefault.colors.BORDER_STRONG, borderRadius: nativeDefault.radii.round, borderWidth: 1, width: "100%", height: "100%" };
obj2.avatarInnerBorder = size1;
let closure_15 = createStyles.createStyles(obj2);
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
  const theme = markAsDismissed(4348).useThemeContext().theme;
  let obj2 = { startExpanded: true, contentStyles: tmp.content, header: null, onDismiss: null, children: null };
  let obj = markAsDismissed(4348);
  obj2.header = closure_13(markAsDismissed(7259).BottomSheetTitleHeader, { title: null, leading: closure_13(markAsDismissed(7308).ActionSheetCloseButton, { onPress: handleCancel }) });
  obj2.onDismiss = function onDismiss() {
    return markAsDismissed(ContentDismissActionType.DISMISS);
  };
  let obj4 = { spacing: 24, style: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
  const obj5 = { justify: "center", align: "center", direction: "horizontal", children: null };
  const items = [closure_13(RobloxIcon, { theme }), closure_13(UnionIcon, { theme }), closure_13(UserIcon, {})];
  obj5.children = items;
  const items1 = [closure_14(markAsDismissed(5058).Stack, obj5), , ];
  const obj6 = { justify: "center", children: null };
  const obj7 = { variant: "heading-xl/bold", style: tmp.text, children: null };
  const intl = markAsDismissed(1115).intl;
  obj7.children = intl.string(markAsDismissed(1115).t.t3asUZ);
  const items2 = [closure_13(markAsDismissed(4634).Text, obj7), ];
  const obj8 = { variant: "text-md/medium", style: tmp.text, children: null };
  const intl2 = markAsDismissed(1115).intl;
  obj8.children = intl2.string(markAsDismissed(1115).t.no96NU);
  items2[1] = closure_13(markAsDismissed(4634).Text, obj8);
  obj6.children = items2;
  items1[1] = closure_14(markAsDismissed(5058).Stack, obj6);
  const obj9 = { children: null };
  const obj10 = { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null };
  const intl3 = markAsDismissed(1115).intl;
  obj10.text = intl3.string(markAsDismissed(1115).t.ItuabN);
  let obj3 = { title: null, leading: closure_13(markAsDismissed(7308).ActionSheetCloseButton, { onPress: handleCancel }) };
  obj10.icon = closure_13(markAsDismissed(13100).WindowLaunchIcon, { size: "sm", color: nativeDefault.colors.WHITE });
  obj10.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (markAsDismissed != null) {
      tmp4(ContentDismissActionType.PRIMARY);
    }
    authorizeConnectionDefault({ platformType: constants2.ROBLOX, location: constants.ROBLOX_CONNECTION_ACTION_SHEET });
    const obj2 = { platformType: constants2.ROBLOX, location: constants.ROBLOX_CONNECTION_ACTION_SHEET };
    openUserSettings.openUserSettings({ screen: constants3.CONNECTIONS });
    const obj4 = { screen: constants3.CONNECTIONS };
  };
  const items3 = [closure_13(markAsDismissed(5060).Button, obj10), ];
  const obj12 = { text: null, variant: "secondary", size: "lg", onPress: null };
  const intl4 = markAsDismissed(1115).intl;
  obj12.text = intl4.string(markAsDismissed(1115).t.DiGJy3);
  obj12.onPress = handleCancel;
  items3[1] = closure_13(markAsDismissed(5060).Button, obj12);
  obj9.children = items3;
  items1[2] = closure_14(markAsDismissed(5058).Stack, obj9);
  obj4.children = items1;
  obj2.children = closure_14(markAsDismissed(5058).Stack, obj4);
  return closure_13(markAsDismissed(7260).BottomSheet, obj2);
};
export { UnionIcon };
export const useShouldShowRobloxConnectionCoachmark = function useShouldShowRobloxConnectionCoachmark() {
  const items = [LocalAppDetectionStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => appInstalled.isAppInstalled(stateFromStores(13820).DetectableAppNames.ROBLOX));
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
      const obj2 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
      const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.ROBLOX_CONNECTION_COACHMARK, obj2);
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