// discord_app/modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteOption.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import KeyboardManagerUtils from "../../../../../utils/native/KeyboardManagerUtils.tsx";
import asyncRequireImpl from "../../../../../../_runtime/01897_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import useAnimationDelayedAutoFocus from "../../hooks/useAnimationDelayedAutoFocus.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let obj2 = {
  container: {
    width: "100%",
    backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
    borderRadius: nativeDefault.radii.lg,
    padding: 12,
    borderWidth: 2,
    borderColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
  },
  hasError: null,
  inputText: null,
};
let obj3 = {
  width: "100%",
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
  padding: 12,
  borderWidth: 2,
  borderColor: "transparent",
  flexDirection: "row",
  alignItems: "center",
};
obj2.hasError = { borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL, padding: 12 };
const obj4 = { borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL, padding: 12 };
obj2.inputText = {
  fontSize: 16,
  alignSelf: "center",
  fontFamily: fn(1074).Fonts.PRIMARY_MEDIUM,
  color: nativeDefault.colors.TEXT_DEFAULT,
};
let closure_6 = createStyles.createStyles(obj2);
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
  initChoice = undefined;
  closure_9 = undefined;
  function onPress() {
    if (closure_1_2 != null) {
      tmp();
    }
    const result = KeyboardManagerUtils.dismissGlobalKeyboard();
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(12322, dependencyMap.paths),
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
  ({ style, autoFocus } = arg0);
  [initChoice, closure_9] = noop.useState(() => {
    if (null != closure_1_7) {
      if ("text" === closure_1_7.type) {
        if ("" !== closure_1_7.text) {
          const obj = { displayName: null, name: null, value: null };
          ({ text: obj.displayName, text: obj.name, text: obj.value } = closure_1_7);
          return obj;
        }
      }
    }
  });
  const tmp3 = ref();
  const animationDelayedAutoFocus = useAnimationDelayedAutoFocus.useAnimationDelayedAutoFocus(autoFocus, onPress);
  const obj2 = { onPress, style: null, children: null };
  const items = [tmp3.container, ,];
  if (hasError) {
    hasError = tmp3.hasError;
  }
  items[1] = hasError;
  items[2] = style;
  obj2.style = items;
  const obj3 = { variant: "text-md/normal", style: tmp3.inputText, children: null };
  let str = " ";
  if (null != initChoice) {
    str = initChoice.displayName;
  }
  obj3.children = str;
  obj2.children = jsx(Text_Text.Text, { variant: "text-md/normal", style: tmp3.inputText, children: null });
  return jsx(Pressables.PressableOpacity, { onPress, style: null, children: null });
}
