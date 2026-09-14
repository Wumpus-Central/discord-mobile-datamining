// discord_app/modules/safety_hub/native/AppealIngestionExternalLink.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import _mod8762 from "../../../../_runtime/metro/08762__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4636);
let obj2 = {
  childButton: { marginBottom: 8, borderRadius: nativeDefault.radii.xs },
  childContainer: null,
  childButtonText: null,
  chevron: null,
};
const obj3 = { marginBottom: 8, borderRadius: nativeDefault.radii.xs };
obj2.childContainer = {
  minHeight: 60,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  paddingVertical: 16,
  paddingStart: 16,
  paddingEnd: 8,
  borderRadius: nativeDefault.radii.xs,
};
obj2.childButtonText = { flex: 1, lineHeight: 20 };
const obj4 = {
  minHeight: 60,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  paddingVertical: 16,
  paddingStart: 16,
  paddingEnd: 8,
  borderRadius: nativeDefault.radii.xs,
};
obj2.chevron = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionExternalLink.tsx");

export default function AppealIngestionExternalLink(children) {
  ({ url: require, onPress: importDefault } = children);
  const tmp = closure_6();
  const obj = {
    style: tmp.childButton,
    accessibilityRole: "button",
    onPress() {
      if (closure_1_1 != null) {
        tmp();
      }
      LinkingDefault.openURL(require);
    },
    children: null,
  };
  const obj2 = { style: tmp.childContainer, children: null };
  const items = [
    closure_4(Text_Text.Text, {
      style: tmp.childButtonText,
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      children: children.text,
    }),
    closure_4(native.Icon, { source: _mod8762, color: tmp.chevron.color }),
  ];
  obj2.children = items;
  obj.children = closure_5(View, obj2);
  return closure_4(Pressables.PressableHighlight, obj);
}
