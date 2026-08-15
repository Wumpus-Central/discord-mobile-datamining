// discord_app/modules/local_app_detection/native/RobloxConnectionCoachmark.tsx
import UNSAFE_isDismissibleContentDismissed from "UNSAFE_isDismissibleContentDismissed";
import getSystemLocale from "getSystemLocale";
import { View } from "Stack";
import set from "set";
import mergeGuildAvatar from "mergeGuildAvatar";
import initialize from "initialize";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "WindowLaunchIcon";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { isThemeLight } from "../../../design/utils/shared/themes.tsx";
import { Button } from "../../../design/void/native.tsx";
import { getPlatformUserUrl } from "../../../lib/Platforms.tsx";
import { getAvatarURL } from "../../../utils/AvatarUtils.tsx";
import { useSafeAreaInsets } from "../../safe_area/useSafeAreaInsets.native.tsx";

let c10;
let c9;
let closure_14;
let map1;
let unpackModuleId;
const require = arg1;
function RobloxIcon(theme) {
  let obj = isThemeLight;
  const isThemeDarkResult = obj.isThemeDark(theme.theme);
  const tmp = createCacheKey();
  let str = "white";
  const value = getPlatformUserUrl.get(constants.ROBLOX);
  if (isThemeDarkResult) {
    str = "black";
  }
  const obj2 = getPlatformUserUrl;
  const icon = value.icon;
  obj = { style: items, children: null };
  items = [tmp.robloxIconContainer, { backgroundColor: str }];
  const source = getAvatarURL.makeSource(isThemeDarkResult ? icon.darkPNG : icon.lightPNG);
  obj = { size: null, source: null, disableColor: true };
  obj[0] = Button.IconSizes.LARGE;
  obj[1] = source;
  obj[1] = callback(Button.Icon, obj);
  return callback(View, obj);
}
class UnionIcon {
  constructor(arg0) {
    tmp = closure_0;
    tmp2 = closure_2;
    obj = require("isThemeLight");
    str = "black";
    if (obj.isThemeDark(global.theme)) {
      str = "white";
    }
    id = getSystemLocale.useId();
    obj = { width: 25, height: 4, viewBox: "0 0 25 4", id, children: null };
    tmp4 = require("inlineStyles");
    items = [, ];
    items[0] = jsx(require("inlineStyles").Path, { fill: "url(#a)", d: "M1.7002 0.799805C2.36285 0.79991 2.90039 1.33732 2.90039 2C2.90029 2.66259 2.36278 3.20009 1.7002 3.2002C1.03752 3.2002 0.500106 2.66265 0.5 2C0.5 1.33726 1.03745 0.799805 1.7002 0.799805ZM8.90039 0.799805C9.56297 0.799989 10.0996 1.33737 10.0996 2C10.0995 2.66254 9.56291 3.20001 8.90039 3.2002C8.23771 3.2002 7.70029 2.66266 7.7002 2C7.7002 1.33726 8.23765 0.799805 8.90039 0.799805ZM16.0996 0.799805C16.7624 0.799805 17.2998 1.33726 17.2998 2C17.2997 2.66266 16.7623 3.2002 16.0996 3.2002C15.4371 3.19996 14.9005 2.66251 14.9004 2C14.9004 1.3374 15.4371 0.800042 16.0996 0.799805ZM23.2998 0.799805C23.9625 0.799805 24.5 1.33726 24.5 2C24.4999 2.66266 23.9625 3.2002 23.2998 3.2002C22.6372 3.20006 22.0997 2.66258 22.0996 2C22.0996 1.33734 22.6372 0.799936 23.2998 0.799805Z" });
    obj1 = { children: null };
    obj2 = { id: "a", x1: 0.5, y1: 2, x2: 24.5, y2: 2, gradientUnits: "userSpaceOnUse", children: null };
    items1 = [, ];
    items1[0] = jsx(require("inlineStyles").Stop, { stopColor: str, stopOpacity: 0.3 });
    items1[1] = jsx(require("inlineStyles").Stop, { offset: 1, stopColor: str, stopOpacity: 0.7 });
    obj2[6] = items1;
    obj1[0] = jsxs(require("inlineStyles").LinearGradient, obj2);
    items[1] = jsx(require("inlineStyles").Defs, obj1);
    obj[4] = items;
    return jsxs(tmp4, obj);
  }
}
function UserIcon() {
  const tmp = createCacheKey();
  let obj = initialize;
  const items = [mergeGuildAvatar];
  obj = { style: tmp.avatarContainer, children: null };
  obj = { style: tmp.avatarInnerBorder };
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [callback(View, obj), ];
  const obj1 = { size: null, user: null, guildId: "Array" };
  obj1[0] = Button.AvatarSizes.NORMAL;
  obj1[1] = stateFromStores;
  items1[1] = callback(Button.Avatar, obj1);
  obj[1] = items1;
  return callback2(View, obj);
}
({ AnalyticsLocations: c9, PlatformTypes: c10, UserSettingsSections: unpackModuleId } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
createCacheKey = { robloxIconContainer: null, content: null, text: null, avatarContainer: null, avatarInnerBorder: null };
createCacheKey = { width: 40, height: 40, borderRadius: require("Themes").radii.md, alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { position: "relative" };
let obj1 = { paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[4] = { zIndex: 1, position: "absolute", borderColor: require("Themes").colors.BORDER_STRONG, borderRadius: require("Themes").radii.round, borderWidth: 1, width: "100%", height: "100%" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { zIndex: 1, position: "absolute", borderColor: require("Themes").colors.BORDER_STRONG, borderRadius: require("Themes").radii.round, borderWidth: 1, width: "100%", height: "100%" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/local_app_detection/native/RobloxConnectionCoachmark.tsx");

export default function RobloxConnectionActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  function handleCancel() {
    outer1_1(outer1_2[13]).hideActionSheet();
    if (markAsDismissed != null) {
      tmp2(outer1_12.DISMISS);
    }
  }
  const tmp = createCacheKey();
  let obj = markAsDismissed(4104);
  const theme = obj.useThemeContext().theme;
  obj = { startExpanded: true, contentStyles: tmp.content, header: null, onDismiss: null, children: null };
  obj = { title: null, leading: null };
  obj[1] = callback(markAsDismissed(7176).ActionSheetCloseButton, { onPress: handleCancel });
  obj[2] = callback(markAsDismissed(6949).BottomSheetTitleHeader, obj);
  obj[3] = function onDismiss() {
    return markAsDismissed(outer1_12.DISMISS);
  };
  const obj1 = { spacing: 24, style: { paddingBottom: useSafeAreaInsets().bottom }, children: null };
  const obj2 = { justify: "center", align: "center", direction: "horizontal", children: null };
  const items = [callback(RobloxIcon, { theme }), callback(UnionIcon, { theme }), callback(UserIcon, {})];
  obj2[3] = items;
  const items1 = [callback2(markAsDismissed(4733).Stack, obj2), , ];
  const obj3 = { justify: "center", children: null };
  const obj4 = { variant: "heading-xl/bold", style: tmp.text, children: null };
  const intl = markAsDismissed(1236).intl;
  obj4[2] = intl.string(markAsDismissed(1236).t.t3asUZ);
  const items2 = [callback(markAsDismissed(4734).Text, obj4), ];
  const obj5 = { variant: "text-md/medium", style: tmp.text, children: null };
  const intl2 = markAsDismissed(1236).intl;
  obj5[2] = intl2.string(markAsDismissed(1236).t.no96NU);
  items2[1] = callback(markAsDismissed(4734).Text, obj5);
  obj3[1] = items2;
  items1[1] = callback2(markAsDismissed(4733).Stack, obj3);
  const obj6 = { children: null };
  const obj7 = { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null };
  const intl3 = markAsDismissed(1236).intl;
  obj7[0] = intl3.string(markAsDismissed(1236).t.ItuabN);
  const obj8 = { size: "sm", color: null };
  obj8[1] = Themes.colors.WHITE;
  obj7[1] = callback(markAsDismissed(12049).WindowLaunchIcon, obj8);
  obj7[4] = function onPress() {
    let obj = outer1_1(outer1_2[13]);
    obj.hideActionSheet();
    if (markAsDismissed != null) {
      tmp4(outer1_12.PRIMARY);
    }
    obj = { platformType: outer1_10.ROBLOX, location: outer1_9.ROBLOX_CONNECTION_ACTION_SHEET };
    outer1_1(outer1_2[22])(obj);
    obj = { screen: outer1_11.CONNECTIONS };
    markAsDismissed(outer1_2[23]).openUserSettings(obj);
  };
  const items3 = [callback(markAsDismissed(4745).Button, obj7), ];
  const obj9 = { text: null, variant: "secondary", size: "lg", onPress: null };
  const intl4 = markAsDismissed(1236).intl;
  obj9[0] = intl4.string(markAsDismissed(1236).t.DiGJy3);
  obj9[3] = handleCancel;
  items3[1] = callback(markAsDismissed(4745).Button, obj9);
  obj6[0] = items3;
  items1[2] = callback2(markAsDismissed(4733).Stack, obj6);
  obj1[2] = items1;
  obj[4] = callback2(markAsDismissed(4733).Stack, obj1);
  return callback(markAsDismissed(6950).BottomSheet, obj);
};
export { UnionIcon };
export const useShouldShowRobloxConnectionCoachmark = function useShouldShowRobloxConnectionCoachmark() {
  let fetchingAccounts;
  let hasRoloxAccount;
  const items = [initialize];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => appInstalled.isAppInstalled(stateFromStores(13259).DetectableAppNames.ROBLOX));
  const tmp2 = hasRoloxAccount(React.useState(false), 2);
  const first = tmp2[0];
  const dependencyMap = tmp2[1];
  let obj = stateFromStores(589);
  const items1 = [set];
  const stateFromStoresObject = stateFromStores(589).useStateFromStoresObject(items1, () => {
    const obj = { fetchingAccounts: set.isFetching(), hasRoloxAccount: null };
    const accounts = set.getAccounts();
    obj[1] = null != accounts.find((type) => type.type === constants.ROBLOX);
    return obj;
  });
  ({ fetchingAccounts, hasRoloxAccount } = stateFromStoresObject);
  const items2 = [first, stateFromStores];
  const effect = React.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = !first;
    }
    if (tmp) {
      dependencyMap(true);
      const response = first(5223).fetch();
      const obj = first(5223);
    }
  }, items2);
  const items3 = [hasRoloxAccount];
  const effect1 = React.useEffect(() => {
    if (hasRoloxAccount) {
      let obj = stateFromStores(4196);
      obj = { dismissAction: null };
      obj[0] = outer1_12.INDIRECT_ACTION;
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(stateFromStores(1377).DismissibleContent.ROBLOX_CONNECTION_COACHMARK, obj);
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