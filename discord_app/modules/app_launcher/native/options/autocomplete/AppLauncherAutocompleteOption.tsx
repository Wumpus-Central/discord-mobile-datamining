// discord_app/modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteOption.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import KeyboardManagerUtils from "../../../../../utils/native/KeyboardManagerUtils.tsx";
import asyncRequireImpl from "../../../../../../_runtime/01995_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import InputFieldContainer from "../../../../../design/components/Input/native/InputFieldContainer.native.tsx";
import useAnimationDelayedAutoFocus from "../../hooks/useAnimationDelayedAutoFocus.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const ANDROID_FOREGROUND_RIPPLE = fn(1192).ANDROID_FOREGROUND_RIPPLE;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let closure_8 = createStyles.createStyles({ content: { flex: 1 } });
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteOption.tsx",
);

export default function AppLauncherAutocompleteOption(arg0) {
  ({
    option: require,
    onSelect: importDefault,
    onOpenAutocompleteSheet: dependencyMap,
    onDismissAutocompleteSheet: _slicedToArray,
    channel: noop,
    activeCommand: View,
    optionValues: ANDROID_FOREGROUND_RIPPLE,
    initialValue: jsx,
  } = arg0);
  initChoice = undefined;
  closure_9 = undefined;
  function onPress() {
    if (closure_1_2 != null) {
      tmp();
    }
    const result = KeyboardManagerUtils.dismissGlobalKeyboard();
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(12325, dependencyMap.paths),
      "AppLauncherAutocompleteActionSheet",
      {
        option,
        initChoice,
        onChoiceSelect(arg0) {
          closure_1_9(arg0);
          closure_1_1(arg0);
        },
        channel,
        activeCommand,
        onDismissAutocompleteSheet,
        optionValues: ref.current,
      },
    );
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
  return jsx(Pressables.PressableOpacity, {
    onPress,
    style: inputStyles.radius,
    androidRippleConfig: ANDROID_FOREGROUND_RIPPLE,
    children: null,
  });
}
