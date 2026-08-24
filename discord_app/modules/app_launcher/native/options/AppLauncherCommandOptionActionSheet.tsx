// === Module 11344: AppLauncherCommandOptionActionSheet ===

// Module 11344 (AppLauncherCommandOptionActionSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { DEFAULT_CONTENT_PADDING } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON" /* 1499 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

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
  obj = { style: { alignSelf: "flex-start" }, children: jsx(merged(7176).ActionSheetCloseButton, obj1) };
  obj[3] = <View style={{ alignSelf: "flex-start" }}>{jsx(merged(7176).ActionSheetCloseButton, obj1)}</View>;
  ({ displayName: obj2[4], displayDescription: obj2[5] } = option);
  obj[6] = jsx(merged(1297).Spacer, { size: 24 });
  obj.header = jsx(merged(6949).BottomSheetTitleHeader, { style: { alignSelf: "flex-start" }, children: jsx(merged(7176).ActionSheetCloseButton, obj1) });
  const items = [tmp2.contentContainer, contentContainerStyles];
  obj.children = <View style={items}>{children}</View>;
  return jsx(merged(6950).BottomSheet, { style: { alignSelf: "flex-start" }, children: jsx(merged(7176).ActionSheetCloseButton, obj1) }, option.name);
};