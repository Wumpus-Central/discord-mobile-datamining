// discord_app/modules/app_launcher/native/options/AppLauncherCommandOptionActionSheet.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { DEFAULT_CONTENT_PADDING } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { actionSheetBackground: null, titleContainer: null, titleWrapper: null, subtitleWrapper: null, contentContainer: null };
createCacheKey = { backgroundColor: require("Themes").colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: "transparent" };
createCacheKey[2] = { alignItems: "center" };
createCacheKey[3] = { paddingHorizontal: 12, textAlign: "center" };
createCacheKey[4] = { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: DEFAULT_CONTENT_PADDING, flex: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("APP_LAUNCHER_BUILT_IN_SECTION_ICON").fileFinishedImporting("modules/app_launcher/native/options/AppLauncherCommandOptionActionSheet.tsx");

export const AppLauncherCommandOptionActionSheet = function AppLauncherCommandOptionActionSheet(startExpanded) {
  let children;
  let contentContainerStyles;
  let option;
  let scrollable;
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
  const tmp2 = createCacheKey();
  let obj = {};
  const merged1 = Object.assign(merged);
  obj.backgroundStyles = tmp2.actionSheetBackground;
  obj.scrollable = scrollable;
  obj.startExpanded = flag;
  obj = { titleContainerStyle: tmp2.titleContainer, titleWrapperStyle: tmp2.titleWrapper, subtitleStyle: tmp2.subtitleWrapper, leading: null, title: null, subtitle: null, trailing: null };
  obj = { style: { alignSelf: "flex-start" }, children: null };
  obj[1] = jsx(merged(5647).ActionSheetCloseButton, {
    onPress() {
      outer1_1(outer1_2[9]).hideActionSheet();
      const onDismiss = merged.onDismiss;
      if (onDismiss != null) {
        onDismiss();
      }
    }
  });
  obj[3] = <View style={{ alignSelf: "flex-start" }}>{null}</View>;
  ({ displayName: obj2[4], displayDescription: obj2[5] } = option);
  obj[6] = jsx(merged(1297).Spacer, { size: 24 });
  obj.header = jsx(merged(5337).BottomSheetTitleHeader, { style: { alignSelf: "flex-start" }, children: null });
  const items = [tmp2.contentContainer, contentContainerStyles];
  obj.children = <View style={items}>{children}</View>;
  return jsx(merged(5338).BottomSheet, { style: { alignSelf: "flex-start" }, children: null }, option.name);
};