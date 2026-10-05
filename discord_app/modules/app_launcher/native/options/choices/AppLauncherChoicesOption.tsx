// discord_app/modules/app_launcher/native/options/choices/AppLauncherChoicesOption.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import KeyboardManagerUtils from "../../../../../utils/native/KeyboardManagerUtils.tsx";
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let obj2;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.lg,
  alignItems: "center",
  padding: 12,
};
let closure_6 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/app_launcher/native/options/choices/AppLauncherChoicesOption.tsx");

export default function AppLauncherChoicesOption(option) {
  let Text;
  let autoFocus;
  let hasError;
  let items1;
  let obj3;
  let onSelect;
  let str2;
  let style;
  let tmp10Result;
  let type;
  option = option.option;
  ({ initialValue: importDefault, onSelect } = option);
  const onOpenChoicesSheet = option.onOpenChoicesSheet;
  const onDismissChoicesSheet = option.onDismissChoicesSheet;
  closure_6 = undefined;
  ({ style, autoFocus, hasError } = option);
  const tmp = closure_6();
  const tmp3 = onOpenChoicesSheet(
    onDismissChoicesSheet.useState(() => {
      let choices1;
      let text;
      if (null != importDefault) {
        if ("text" === importDefault.type) {
          const choices = option.choices;
          let found;
          if (choices != null) {
            found = choices.find((displayName) => displayName.displayName === text.text);
          }
          if (null != found) {
            const obj = { choice: found, index: choices1.indexOf(found) };
            choices1 = option.choices;
            return obj;
          }
        }
      }
    }),
    2,
  );
  const first = tmp3[0];
  closure_6 = tmp3[1];
  const items = [onDismissChoicesSheet, onOpenChoicesSheet, onSelect, option];
  let index;
  const useCallback = onDismissChoicesSheet.useCallback;
  if (first != null) {
    index = first.index;
  }
  items[4] = index;
  const callback = useCallback(() => {
    let index;
    onOpenChoicesSheet();
    let obj = KeyboardManagerUtils;
    const result = obj.dismissGlobalKeyboard();
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    const obj2 = {
      option,
      initChoiceIndex: index,
      onChoiceSelect(choice, index) {
        const obj = { choice, index };
        closure_1_6(obj);
        onSelect(choice);
      },
      onDismiss: onDismissChoicesSheet,
    };
    index = undefined;
    ActionSheetActionCreatorsDefault;
    const tmp4 = asyncRequire(11788, dependencyMap.paths);
    if (first != null) {
      index = first.index;
    }
    openLazy(tmp4, "AppLauncherChoicesActionSheet", obj2);
  }, items);
  let obj = option(onSelect[9]);
  const animationDelayedAutoFocus = obj.useAnimationDelayedAutoFocus(autoFocus, callback);
  let obj2 = {
    start: true,
    end: true,
    style: items1,
    hasError,
    label: first(Text, obj3),
    subLabel: tmp10Result,
    trailing: first(option(onSelect[10]).FormArrow, {}),
    onPress: callback,
  };
  items1 = [tmp.container, style];
  const FormRow = option(onSelect[10]).FormRow;
  let str = "text-sm/medium";
  Text = option(onSelect[11]).Text;
  if (null == first) {
    str = "text-md/medium";
  }
  obj3 = { variant: str, color: str2, lineClamp: 1, children: option.displayName };
  str2 = "interactive-text-default";
  if (null == first) {
    str2 = "text-default";
  }
  tmp10Result = null;
  if (null != first) {
    const obj4 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: first.choice.displayName };
    tmp10Result = tmp10(tmp7(tmp8[11]).Text, obj4);
  }
  return first(FormRow, obj2);
}
