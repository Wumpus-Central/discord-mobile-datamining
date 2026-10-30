// discord_app/modules/app_launcher/native/options/AppLauncherCommandOptionActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const DEFAULT_CONTENT_PADDING = fn(1497).DEFAULT_CONTENT_PADDING;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
const obj2 = {
  actionSheetBackground: { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND },
  contentContainer: { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: DEFAULT_CONTENT_PADDING, flex: 1 },
};
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/options/AppLauncherCommandOptionActionSheet.tsx",
);

export function AppLauncherCommandOptionActionSheet(startExpanded) {
  ({ option, scrollable } = startExpanded);
  ({ children, contentContainerStyles } = startExpanded);
  if (scrollable === undefined) {
    scrollable = true;
  }
  let flag = startExpanded.startExpanded;
  if (flag === undefined) {
    flag = true;
  }
  const merged = Object.assign(
    startExpanded,
    Object.assign({ option: 0, children: 0, contentContainerStyles: 0, scrollable: 0, startExpanded: 0 }),
  );
  const tmp2 = closure_5();
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.backgroundStyles = tmp2.actionSheetBackground;
  obj.scrollable = scrollable;
  obj.startExpanded = flag;
  const obj3 = { leading: null, title: null, subtitle: null };
  const obj4 = {
    style: { alignSelf: "flex-start" },
    children: jsx(merged(7361).ActionSheetCloseButton, {
      onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const onDismiss = merged.onDismiss;
        if (onDismiss != null) {
          onDismiss();
        }
      },
    }),
  };
  obj3.leading = (
    <View style={{ alignSelf: "flex-start" }}>
      {jsx(merged(7361).ActionSheetCloseButton, {
        onPress() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          const onDismiss = merged.onDismiss;
          if (onDismiss != null) {
            onDismiss();
          }
        },
      })}
    </View>
  );
  ({ displayName: obj2.title, displayDescription: obj2.subtitle } = option);
  obj.header = jsx(merged(7315).BottomSheetTitleHeader, { leading: null, title: null, subtitle: null });
  const obj9 = { style: null, children };
  const items = [tmp2.contentContainer, contentContainerStyles];
  obj9.style = items;
  obj.children = <View style={null}>{children}</View>;
  return jsx(merged(5267).BottomSheet, {}, option.name);
}
