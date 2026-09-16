// === Module 12308: AppLauncherCommandOptionActionSheet ===

// Module 12308 (AppLauncherCommandOptionActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const DEFAULT_CONTENT_PADDING = fn(1483).DEFAULT_CONTENT_PADDING;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
const obj2 = { actionSheetBackground: { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND }, titleContainer: { backgroundColor: "transparent" }, titleWrapper: { alignItems: "center" }, subtitleWrapper: { paddingHorizontal: 12, textAlign: "center" }, contentContainer: { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: DEFAULT_CONTENT_PADDING, flex: 1 } };
let closure_5 = createStyles.createStyles(obj2);
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
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.backgroundStyles = tmp2.actionSheetBackground;
  obj.scrollable = scrollable;
  obj.startExpanded = flag;
  const obj3 = { titleContainerStyle: tmp2.titleContainer, titleWrapperStyle: tmp2.titleWrapper, subtitleStyle: tmp2.subtitleWrapper, leading: null, title: null, subtitle: null, trailing: null };
  const obj4 = {
    style: { alignSelf: "flex-start" },
    children: jsx(merged(7308).ActionSheetCloseButton, {
      onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const onDismiss = merged.onDismiss;
        if (onDismiss != null) {
          onDismiss();
        }
      }
    })
  };
  obj3.leading = <View style={{ alignSelf: "flex-start" }}>{jsx(merged(7308).ActionSheetCloseButton, {
    onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const onDismiss = merged.onDismiss;
      if (onDismiss != null) {
        onDismiss();
      }
    }
  })}</View>;
  ({ displayName: obj2.title, displayDescription: obj2.subtitle } = option);
  obj3.trailing = jsx(merged(1177).Spacer, { size: 24 });
  obj.header = jsx(merged(7259).BottomSheetTitleHeader, { titleContainerStyle: tmp2.titleContainer, titleWrapperStyle: tmp2.titleWrapper, subtitleStyle: tmp2.subtitleWrapper, leading: null, title: null, subtitle: null, trailing: null });
  const obj9 = { style: null, children };
  const items = [tmp2.contentContainer, contentContainerStyles];
  obj9.style = items;
  obj.children = <View style={null}>{children}</View>;
  return jsx(merged(7260).BottomSheet, {}, option.name);
};