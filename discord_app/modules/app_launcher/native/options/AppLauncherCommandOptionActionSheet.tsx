// discord_app/modules/app_launcher/native/options/AppLauncherCommandOptionActionSheet.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { DEFAULT_CONTENT_PADDING } from "../AppLauncherNativeConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
createCacheKey = { actionSheetBackground: null, titleContainer: null, titleWrapper: null, subtitleWrapper: null, contentContainer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: "transparent" };
createCacheKey[2] = { alignItems: "center" };
createCacheKey[3] = { paddingHorizontal: 12, textAlign: "center" };
createCacheKey[4] = { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: DEFAULT_CONTENT_PADDING, flex: 1 };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/app_launcher/native/options/AppLauncherCommandOptionActionSheet.tsx");

export const AppLauncherCommandOptionActionSheet = function AppLauncherCommandOptionActionSheet(startExpanded) {
  ({ option, scrollable } = startExpanded);
  ({ children, contentContainerStyles } = startExpanded);
  if (scrollable === undefined) {
    scrollable = true;
  }
  let flag = startExpanded.startExpanded;
  if (flag === undefined) {
    flag = true;
  }
  const merged = Object.assign(startExpanded, Object.create(null));
  const tmp2 = callback();
  let obj = {};
  const merged1 = Object.assign(merged);
  obj.backgroundStyles = tmp2.actionSheetBackground;
  obj.scrollable = scrollable;
  obj.startExpanded = flag;
  obj = { titleContainerStyle: tmp2.titleContainer, titleWrapperStyle: tmp2.titleWrapper, subtitleStyle: tmp2.subtitleWrapper, leading: null, title: null, subtitle: null, trailing: null };
  obj = { style: { alignSelf: "flex-start" }, children: jsx(merged(5990).ActionSheetCloseButton, obj1) };
  obj[3] = <View style={{ alignSelf: "flex-start" }}>{jsx(merged(5990).ActionSheetCloseButton, obj1)}</View>;
  ({ displayName: obj2[4], displayDescription: obj2[5] } = option);
  obj[6] = jsx(merged(1297).Spacer, { size: 24 });
  obj.header = jsx(merged(5621).BottomSheetTitleHeader, { style: { alignSelf: "flex-start" }, children: jsx(merged(5990).ActionSheetCloseButton, obj1) });
  const items = [tmp2.contentContainer, contentContainerStyles];
  obj.children = <View style={items}>{children}</View>;
  return jsx(merged(5622).BottomSheet, { style: { alignSelf: "flex-start" }, children: jsx(merged(5990).ActionSheetCloseButton, obj1) }, option.name);
};