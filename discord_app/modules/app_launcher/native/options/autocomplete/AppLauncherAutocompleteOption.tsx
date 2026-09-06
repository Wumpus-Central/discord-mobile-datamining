// discord_app/modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteOption.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import KeyboardManagerUtils from "../../../../../utils/native/KeyboardManagerUtils.tsx";
import asyncRequireImpl from "../../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import useAnimationDelayedAutoFocus from "../../hooks/useAnimationDelayedAutoFocus.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null, hasError: null, inputText: null };
createStyles = {
  width: "100%",
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
  padding: 12,
  borderWidth: 2,
  borderColor: "transparent",
  flexDirection: "row",
  alignItems: "center",
};
createStyles.container = createStyles;
createStyles.hasError = { borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL, padding: 12 };
const obj1 = { borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL, padding: 12 };
createStyles.inputText = {
  fontSize: 16,
  alignSelf: "center",
  fontFamily: fn(1074).Fonts.PRIMARY_MEDIUM,
  color: nativeDefault.colors.TEXT_DEFAULT,
};
let closure_6 = createStyles.createStyles(createStyles);
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
    activeCommand: jsx,
    optionValues: closure_6,
    initialValue: closure_7,
    hasError,
  } = arg0);
  function onPress() {
    if (closure_1_2 != null) {
      tmp();
    }
    let obj = KeyboardManagerUtils;
    const result = obj.dismissGlobalKeyboard();
    obj = {
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
    };
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(12171, dependencyMap.paths),
      "AppLauncherAutocompleteActionSheet",
      obj,
    );
  }
  ({ style, autoFocus } = arg0);
  const tmp = _slicedToArray(
    noop.useState(() => {
      if (null != closure_1_7) {
        if ("text" === closure_1_7.type) {
          if ("" !== closure_1_7.text) {
            const obj = { displayName: null, name: null, value: null };
            ({ text: obj.displayName, text: obj.name, text: obj.value } = closure_1_7);
            return obj;
          }
        }
      }
    }),
    2,
  );
  const initChoice = tmp[0];
  closure_9 = tmp[1];
  const tmp3 = ref();
  let obj = useAnimationDelayedAutoFocus;
  const animationDelayedAutoFocus = obj.useAnimationDelayedAutoFocus(autoFocus, onPress);
  obj = { onPress, style: null, children: null };
  const items = [tmp3.container, ,];
  if (hasError) {
    hasError = tmp3.hasError;
  }
  items[1] = hasError;
  items[2] = style;
  obj.style = items;
  obj = { variant: "text-md/normal", style: tmp3.inputText, children: null };
  let str = " ";
  if (null != initChoice) {
    str = initChoice.displayName;
  }
  obj.children = str;
  obj.children = jsx(Text_Text.Text, { variant: "text-md/normal", style: tmp3.inputText, children: null });
  return jsx(Pressables.PressableOpacity, { variant: "text-md/normal", style: tmp3.inputText, children: null });
}
