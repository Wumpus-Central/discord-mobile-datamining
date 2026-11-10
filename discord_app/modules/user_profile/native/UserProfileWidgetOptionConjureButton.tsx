// discord_app/modules/user_profile/native/UserProfileWidgetOptionConjureButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import MagicWandIcon from "../../../design/components/Icon/native/redesign/generated/MagicWandIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const Pressable = fn(17).Pressable;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5142);
let obj2 = {
  button: {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_MUTED,
    borderRadius: nativeDefault.radii.md,
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    gap: nativeDefault.space.PX_8,
    minHeight: 96,
  },
  pressed: { opacity: 0.8 },
};
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetOptionConjureButton.tsx");

export default function UserProfileWidgetOptionConjureButton(arg0) {
  ({ width: require, padding } = arg0);
  if (padding === undefined) {
    padding = padding(575).space.PX_12;
  }
  dependencyMap = closure_7();
  let obj = {
    onPress: noop.useCallback(() => {
      const obj = require("ActionSheetActionCreators");
      obj.showActionSheet({
        content: closure_1_5(padding(button[6]), {}),
        key: require("ConjureCustomWidgetSheet").CONJURE_CUSTOM_WIDGET_SHEET_KEY,
        stackingBehavior: "stack",
      });
    }, []),
    accessibilityRole: "button",
    style(pressed) {
      pressed = pressed.pressed;
      items = [button.button, { padding }, ,];
      let tmp3 = null != require;
      if (tmp3) {
        const obj2 = { width: tmp2 };
        tmp3 = obj2;
      }
      items[2] = tmp3;
      if (pressed) {
        pressed = button.pressed;
      }
      items[3] = pressed;
      return items;
    },
    children: null,
  };
  items = [closure_5(MagicWandIcon.MagicWandIcon, { size: "md", color: padding(575).colors.TEXT_DEFAULT })];
  const obj3 = { variant: "body-md/medium", color: "text-strong", children: null };
  const intl = util.intl;
  obj3.children = intl.string(padding(4028)["5WHmVU"]);
  items[1] = closure_5(Text_Text.Text, obj3);
  obj.children = items;
  return closure_6(Pressable, obj);
}
