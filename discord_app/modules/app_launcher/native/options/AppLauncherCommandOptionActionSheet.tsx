// === Module 12166: AppLauncherCommandOptionActionSheet ===

// Module 12166 (AppLauncherCommandOptionActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const DEFAULT_CONTENT_PADDING = fn(1482).DEFAULT_CONTENT_PADDING;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { actionSheetBackground: null, titleContainer: null, titleWrapper: null, subtitleWrapper: null, contentContainer: null };
createStyles = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
createStyles.actionSheetBackground = createStyles;
createStyles.titleContainer = { backgroundColor: "transparent" };
createStyles.titleWrapper = { alignItems: "center" };
createStyles.subtitleWrapper = { paddingHorizontal: 12, textAlign: "center" };
createStyles.contentContainer = { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: DEFAULT_CONTENT_PADDING, flex: 1 };
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/AppLauncherCommandOptionActionSheet.tsx");

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
  const merged = Object.assign(startExpanded, Object.assign({ option: 0, children: 0, contentContainerStyles: 0, scrollable: 0, startExpanded: 0 }));
  const tmp2 = closure_5();
  let obj = {};
  const merged1 = Object.assign(merged);
  obj.backgroundStyles = tmp2.actionSheetBackground;
  obj.scrollable = scrollable;
  obj.startExpanded = flag;
  obj = { titleContainerStyle: tmp2.titleContainer, titleWrapperStyle: tmp2.titleWrapper, subtitleStyle: tmp2.subtitleWrapper, leading: null, title: null, subtitle: null, trailing: null };
  obj = {
    style: { alignSelf: "flex-start" },
    children: jsx(merged(7199).ActionSheetCloseButton, {
      onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const onDismiss = merged.onDismiss;
        if (onDismiss != null) {
          onDismiss();
        }
      }
    })
  };
  obj.leading = <View style={{ alignSelf: "flex-start" }}>{jsx(merged(7199).ActionSheetCloseButton, {
    onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const onDismiss = merged.onDismiss;
      if (onDismiss != null) {
        onDismiss();
      }
    }
  })}</View>;
  ({ displayName: obj2.title, displayDescription: obj2.subtitle } = option);
  obj.trailing = jsx(merged(1178).Spacer, { size: 24 });
  obj.header = jsx(merged(7149).BottomSheetTitleHeader, {
    style: { alignSelf: "flex-start" },
    children: jsx(merged(7199).ActionSheetCloseButton, {
      onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const onDismiss = merged.onDismiss;
        if (onDismiss != null) {
          onDismiss();
        }
      }
    })
  });
  const obj2 = { style: null, children };
  const items = [tmp2.contentContainer, contentContainerStyles];
  obj2.style = items;
  obj.children = <View style={null}>{children}</View>;
  return jsx(merged(7150).BottomSheet, {
    style: { alignSelf: "flex-start" },
    children: jsx(merged(7199).ActionSheetCloseButton, {
      onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const onDismiss = merged.onDismiss;
        if (onDismiss != null) {
          onDismiss();
        }
      }
    })
  }, option.name);
};