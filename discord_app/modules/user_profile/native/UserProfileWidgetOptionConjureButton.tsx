// === Module 15826: UserProfileWidgetOptionConjureButton ===

// Module 15826 (UserProfileWidgetOptionConjureButton)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5929 */;
import MagicWandIcon from "MagicWandIcon" /* 10528 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Pressable = fn(17).Pressable;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5306);
let obj2 = { button: { backgroundColor: nativeDefault.colors.CARD_MUTED_BG, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.md, overflow: "hidden", alignSelf: "stretch", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, minHeight: 96 }, pressed: { opacity: 0.8 } };
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
      obj.showActionSheet({ content: closure_1_5(padding(button[6]), {}), key: require("ConjureCustomWidgetSheet").CONJURE_CUSTOM_WIDGET_SHEET_KEY, stackingBehavior: "stack" });
    }, []),
    accessibilityRole: "button",
    style(pressed) {
      pressed = pressed.pressed;
      items = [button.button, { padding }, , ];
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
    children: null
  };
  items = [closure_5(MagicWandIcon.MagicWandIcon, { size: "md", color: padding(575).colors.TEXT_DEFAULT }), ];
  const obj3 = { variant: "body-md/medium", color: "text-strong", children: null };
  const intl = util.intl;
  obj3.children = intl.string(padding(4131)["5WHmVU"]);
  items[1] = closure_5(Text_Text.Text, obj3);
  obj.children = items;
  return closure_6(Pressable, obj);
};