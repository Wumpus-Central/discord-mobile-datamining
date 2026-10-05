// === Module 11794: AppLauncherAutocompleteOption ===

// Module 11794 (AppLauncherAutocompleteOption)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1881 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import useAnimationDelayedAutoFocus from "useAnimationDelayedAutoFocus" /* 11792 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, hasError: obj3, inputText: { fontSize: 16, alignSelf: "center", fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_DEFAULT } };
obj2 = { width: "100%", backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, padding: 12, borderWidth: 2, borderColor: "transparent", flexDirection: "row", alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL, padding: 12 };
({ fontSize: 16, alignSelf: "center", fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.TEXT_DEFAULT });
let closure_6 = createStyles(obj);
let result = size.fileFinishedImporting("modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteOption.tsx");

export default function AppLauncherAutocompleteOption(arg0) {
  let activeCommand;
  let autoFocus;
  let channel;
  let closure_7;
  let closure_9;
  let hasError;
  let initChoice;
  let onDismissAutocompleteSheet;
  let option;
  let str;
  let style;
  ({ option: require, onSelect: importDefault, onOpenAutocompleteSheet: dependencyMap, onDismissAutocompleteSheet: _slicedToArray, channel: react, activeCommand: jsx, optionValues: closure_6, initialValue: closure_7, hasError } = arg0);
  initChoice = undefined;
  closure_9 = undefined;
  function onPress() {
    if (dependencyMap != null) {
      tmp();
    }
    const obj = KeyboardManagerUtils;
    const result = obj.dismissGlobalKeyboard();
    const obj2 = ActionSheetActionCreatorsDefault;
    const obj3 = {
      option: require,
      initChoice,
      onChoiceSelect(arg0) {
        closure_1_9(arg0);
        closure_1_1(arg0);
      },
      channel: react,
      activeCommand: jsx,
      onDismissAutocompleteSheet: _slicedToArray,
      optionValues: ref.current
    };
    obj2.openLazy(asyncRequire(11795, dependencyMap.paths), "AppLauncherAutocompleteActionSheet", obj3);
  }
  ({ style, autoFocus } = arg0);
  [initChoice, closure_9] = react.useState(() => {
    if (null != closure_7) {
      if ("text" === closure_7.type) {
        if ("" !== closure_7.text) {
          const obj = { displayName: null, name: null, value: null };
          ({ text: obj.displayName, text: obj.name, text: obj.value } = closure_7);
          return obj;
        }
      }
    }
  });
  const tmp3 = ref();
  let obj = useAnimationDelayedAutoFocus;
  const animationDelayedAutoFocus = obj.useAnimationDelayedAutoFocus(autoFocus, onPress);
  const items = [tmp3.container, , ];
  const PressableOpacity = Pressables.PressableOpacity;
  if (hasError) {
    hasError = tmp3.hasError;
  }
  items[1] = hasError;
  items[2] = style;
  let obj3 = { variant: "text-md/normal", style: tmp3.inputText, children: str };
  str = " ";
  const Text = Text_Text.Text;
  if (null != initChoice) {
    str = initChoice.displayName;
  }
  return <PressableOpacity onPress={onPress} style={items}>{null}</PressableOpacity>;
};