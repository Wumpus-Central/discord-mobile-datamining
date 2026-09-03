// discord_app/modules/local_app_detection/native/RobloxConnectionCoachmark.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../design/void/native.tsx";
import isThemeLight from "../../../design/utils/shared/themes.tsx";
import getAvatarURL from "../../../utils/AvatarUtils.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import getPlatformUserUrlDefault from "../../../lib/Platforms.tsx";
import inlineStyles from "../../../../_runtime/08254_inlineStyles.js";
import inlineStylesDefault from "../../../../_runtime/08254_inlineStyles.js";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../stores/ConnectedAccountsStore.tsx";
import closure_7 from "../../../stores/UserStore.tsx";
import closure_8 from "LocalAppDetectionStore.tsx";
import ME from "../../../Constants.tsx";
import { ContentDismissActionType } from "../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function RobloxIcon(theme) {
  let obj = isThemeLight;
  const isThemeDarkResult = obj.isThemeDark(theme.theme);
  const tmp = callback3();
  let str = "white";
  const value = getPlatformUserUrlDefault.get(constants.ROBLOX);
  if (isThemeDarkResult) {
    str = "black";
  }
  const obj2 = getPlatformUserUrlDefault;
  const icon = value.icon;
  obj = { style: items, children: null };
  items = [tmp.robloxIconContainer, { backgroundColor: str }];
  const source = getAvatarURL.makeSource(isThemeDarkResult ? icon.darkPNG : icon.lightPNG);
  obj = { size: tmp2(1296).IconSizes.LARGE, source, disableColor: true };
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
    id = closure_4.useId();
    obj = { width: 25, height: 4, viewBox: "0 0 25 4", id, children: null };
    tmp4 = require("inlineStyles");
    items = [,];
    items[0] = jsx(require("inlineStyles").Path, {
      fill: "url(#a)",
      d: "M1.7002 0.799805C2.36285 0.79991 2.90039 1.33732 2.90039 2C2.90029 2.66259 2.36278 3.20009 1.7002 3.2002C1.03752 3.2002 0.500106 2.66265 0.5 2C0.5 1.33726 1.03745 0.799805 1.7002 0.799805ZM8.90039 0.799805C9.56297 0.799989 10.0996 1.33737 10.0996 2C10.0995 2.66254 9.56291 3.20001 8.90039 3.2002C8.23771 3.2002 7.70029 2.66266 7.7002 2C7.7002 1.33726 8.23765 0.799805 8.90039 0.799805ZM16.0996 0.799805C16.7624 0.799805 17.2998 1.33726 17.2998 2C17.2997 2.66266 16.7623 3.2002 16.0996 3.2002C15.4371 3.19996 14.9005 2.66251 14.9004 2C14.9004 1.3374 15.4371 0.800042 16.0996 0.799805ZM23.2998 0.799805C23.9625 0.799805 24.5 1.33726 24.5 2C24.4999 2.66266 23.9625 3.2002 23.2998 3.2002C22.6372 3.20006 22.0997 2.66258 22.0996 2C22.0996 1.33734 22.6372 0.799936 23.2998 0.799805Z",
    });
    obj1 = { children: null };
    obj2 = { id: "a", x1: 0.5, y1: 2, x2: 24.5, y2: 2, gradientUnits: "userSpaceOnUse", children: null };
    items1 = [,];
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
  const tmp = callback3();
  let obj = initialize;
  const items = [closure_7];
  obj = { style: tmp.avatarContainer, children: null };
  obj = { style: tmp.avatarInnerBorder };
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [
    callback(View, obj),
    callback(Button.Avatar, { size: Button.AvatarSizes.NORMAL, user: stateFromStores, guildId: "accessible" }),
  ];
  obj[1] = items1;
  return callback2(View, obj);
}
({ AnalyticsLocations: c9, PlatformTypes: c10, UserSettingsSections: unpackModuleId } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
createCacheKey = {
  robloxIconContainer: null,
  content: null,
  text: null,
  avatarContainer: null,
  avatarInnerBorder: null,
};
createCacheKey = {
  width: 40,
  height: 40,
  borderRadius: ThemesDefault.radii.md,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { position: "relative" };
let obj1 = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[4] = {
  zIndex: 1,
  position: "absolute",
  borderColor: ThemesDefault.colors.BORDER_STRONG,
  borderRadius: ThemesDefault.radii.round,
  borderWidth: 1,
  width: "100%",
  height: "100%",
};
let closure_15 = createCacheKey.createStyles(createCacheKey);
let obj2 = {
  zIndex: 1,
  position: "absolute",
  borderColor: ThemesDefault.colors.BORDER_STRONG,
  borderRadius: ThemesDefault.radii.round,
  borderWidth: 1,
  width: "100%",
  height: "100%",
};
let result = require("set").fileFinishedImporting("modules/local_app_detection/native/RobloxConnectionCoachmark.tsx");

export default function RobloxConnectionActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  function handleCancel() {
    closure_1_1(closure_1_2[13]).hideActionSheet();
    if (markAsDismissed != null) {
      tmp2(closure_1_12.DISMISS);
    }
  }
  const tmp = callback3();
  let obj = markAsDismissed(4204);
  const theme = obj.useThemeContext().theme;
  obj = { startExpanded: true, contentStyles: tmp.content, header: null, onDismiss: null, children: null };
  obj = { title: null, leading: callback(markAsDismissed(5999).ActionSheetCloseButton, { onPress: handleCancel }) };
  obj[2] = callback(markAsDismissed(5630).BottomSheetTitleHeader, obj);
  obj[3] = function onDismiss() {
    return markAsDismissed(closure_1_12.DISMISS);
  };
  obj1 = { spacing: 24, style: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
  const obj2 = { justify: "center", align: "center", direction: "horizontal", children: null };
  const items = [callback(RobloxIcon, { theme }), callback(UnionIcon, { theme }), callback(UserIcon, {})];
  obj2[3] = items;
  const items1 = [callback2(markAsDismissed(4927).Stack, obj2), ,];
  const obj3 = { justify: "center", children: null };
  const obj4 = { variant: "heading-xl/bold", style: tmp.text, children: null };
  const intl = markAsDismissed(1233).intl;
  obj4[2] = intl.string(markAsDismissed(1233).t.t3asUZ);
  const items2 = [callback(markAsDismissed(4474).Text, obj4)];
  const obj5 = { variant: "text-md/medium", style: tmp.text, children: null };
  const intl2 = markAsDismissed(1233).intl;
  obj5[2] = intl2.string(markAsDismissed(1233).t.no96NU);
  items2[1] = callback(markAsDismissed(4474).Text, obj5);
  obj3[1] = items2;
  items1[1] = callback2(markAsDismissed(4927).Stack, obj3);
  const obj6 = { children: null };
  const obj7 = { text: null, icon: null, iconPosition: "end", size: "lg", onPress: null };
  const intl3 = markAsDismissed(1233).intl;
  obj7[0] = intl3.string(markAsDismissed(1233).t.ItuabN);
  obj7[1] = callback(markAsDismissed(13053).WindowLaunchIcon, { size: "sm", color: ThemesDefault.colors.WHITE });
  obj7[4] = function onPress() {
    let obj = closure_1_1(closure_1_2[13]);
    obj.hideActionSheet();
    if (markAsDismissed != null) {
      tmp4(closure_1_12.PRIMARY);
    }
    obj = { platformType: closure_1_10.ROBLOX, location: closure_1_9.ROBLOX_CONNECTION_ACTION_SHEET };
    closure_1_1(closure_1_2[22])(obj);
    obj = { screen: closure_1_11.CONNECTIONS };
    markAsDismissed(closure_1_2[23]).openUserSettings(obj);
  };
  const items3 = [callback(markAsDismissed(4929).Button, obj7)];
  const obj9 = { text: null, variant: "secondary", size: "lg", onPress: null };
  const intl4 = markAsDismissed(1233).intl;
  obj9[0] = intl4.string(markAsDismissed(1233).t.DiGJy3);
  obj9[3] = handleCancel;
  items3[1] = callback(markAsDismissed(4929).Button, obj9);
  obj6[0] = items3;
  items1[2] = callback2(markAsDismissed(4927).Stack, obj6);
  obj1[2] = items1;
  obj[4] = callback2(markAsDismissed(4927).Stack, obj1);
  return callback(markAsDismissed(5631).BottomSheet, obj);
}
export { UnionIcon };
export const useShouldShowRobloxConnectionCoachmark = function useShouldShowRobloxConnectionCoachmark() {
  const items = [closure_8];
  stateFromStores = stateFromStores(586).useStateFromStores(items, () =>
    appInstalled.isAppInstalled(stateFromStores(13603).DetectableAppNames.ROBLOX),
  );
  const tmp2 = hasRoloxAccount(React.useState(false), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  let obj = stateFromStores(586);
  const items1 = [closure_6];
  const stateFromStoresObject = stateFromStores(586).useStateFromStoresObject(items1, () => {
    const obj = { fetchingAccounts: closure_6.isFetching(), hasRoloxAccount: null };
    const accounts = closure_6.getAccounts();
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
      const response = first(5359).fetch();
      const obj = first(5359);
    }
  }, items2);
  const items3 = [hasRoloxAccount];
  const effect1 = React.useEffect(() => {
    if (hasRoloxAccount) {
      let obj = stateFromStores(4298);
      obj = { dismissAction: null };
      obj[0] = closure_1_12.INDIRECT_ACTION;
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(
        stateFromStores(1372).DismissibleContent.ROBLOX_CONNECTION_COACHMARK,
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
