// === Module 12056: AppLauncherAutocompleteOption ===

// Module 12056 (AppLauncherAutocompleteOption)
import nativeDefault from "native" /* 587 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1893 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import Text_Text from "Text/Text" /* 5235 */;
import useToken from "useToken" /* 5253 */;
import Pressables from "Pressables" /* 6910 */;
import InputFieldContainer from "InputFieldContainer" /* 7025 */;
import useAnimationDelayedAutoFocus from "useAnimationDelayedAutoFocus" /* 12054 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ANDROID_FOREGROUND_RIPPLE = fn(1203).ANDROID_FOREGROUND_RIPPLE;
const jsx = fn(21).jsx;
const createStyles = fn(4972);
let closure_8 = createStyles.createStyles({ content: { flex: 1 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteOption.tsx");

export default function AppLauncherAutocompleteOption(arg0) {
  ({ option: require, onSelect: importDefault, onOpenAutocompleteSheet: dependencyMap, onDismissAutocompleteSheet: _slicedToArray, channel: noop, activeCommand: View, optionValues: ANDROID_FOREGROUND_RIPPLE, initialValue: jsx } = arg0);
  initChoice = undefined;
  closure_9 = undefined;
  function onPress() {
    if (closure_1_2 != null) {
      tmp();
    }
    const result = KeyboardManagerUtils.dismissGlobalKeyboard();
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12057, dependencyMap.paths), "AppLauncherAutocompleteActionSheet", {
      option,
      initChoice,
      onChoiceSelect(arg0) {
        closure_1_9(arg0);
        closure_1_1(arg0);
      },
      channel,
      activeCommand,
      onDismissAutocompleteSheet,
      optionValues: ref.current
    });
  }
  ({ autoFocus, hasError } = arg0);
  [initChoice, closure_9] = noop.useState(() => {
    if (null != jsx) {
      if ("text" === jsx.type) {
        if ("" !== jsx.text) {
          const obj = { displayName: null, name: null, value: null };
          ({ text: obj.displayName, text: obj.name, text: obj.value } = jsx);
          return obj;
        }
      }
    }
  });
  const tmp3 = initChoice();
  const inputStyles = InputFieldContainer.useInputStyles({});
  const token = useToken.useToken(nativeDefault.modules.mobile.INPUT_FIELD_TEXT_STYLE_LG);
  const animationDelayedAutoFocus = useAnimationDelayedAutoFocus.useAnimationDelayedAutoFocus(autoFocus, onPress);
  const obj4 = { onPress, style: inputStyles.radius, androidRippleConfig: ANDROID_FOREGROUND_RIPPLE, children: null };
  let str = "default";
  if (hasError) {
    str = "error";
  }
  const obj5 = { status: str, children: null };
  const obj6 = { style: null, children: null };
  const items = [inputStyles.padding, tmp3.content];
  obj6.style = items;
  const obj7 = { variant: token, color: "text-default", children: null };
  let str2 = " ";
  if (null != initChoice) {
    str2 = initChoice.displayName;
  }
  obj7.children = str2;
  obj6.children = jsx(Text_Text.Text, { variant: token, color: "text-default", children: null });
  obj5.children = <View style={null}>{null}</View>;
  obj4.children = jsx(InputFieldContainer.InputFieldContainer, { status: str, children: null });
  return jsx(Pressables.PressableOpacity, { onPress, style: inputStyles.radius, androidRippleConfig: ANDROID_FOREGROUND_RIPPLE, children: null });
};