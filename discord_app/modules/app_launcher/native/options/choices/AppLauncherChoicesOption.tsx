// === Module 12164: AppLauncherChoicesOption ===

// Module 12164 (AppLauncherChoicesOption)
import nativeDefault from "native" /* 576 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1874 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, alignItems: "center", padding: 12 };
createStyles.container = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/options/choices/AppLauncherChoicesOption.tsx");

export default function AppLauncherChoicesOption(option) {
  option = option.option;
  ({ initialValue: importDefault, onSelect } = option);
  const onOpenChoicesSheet = option.onOpenChoicesSheet;
  const onDismissChoicesSheet = option.onDismissChoicesSheet;
  ({ style, autoFocus, hasError } = option);
  const tmp3 = onOpenChoicesSheet(onDismissChoicesSheet.useState(() => {
    if (null != type) {
      if ("text" === type.type) {
        const choices = option.choices;
        let found;
        if (choices != null) {
          found = choices.find((displayName) => displayName.displayName === text.text);
        }
        if (null != found) {
          const obj = { choice: found, index: null };
          const choices1 = option.choices;
          obj.index = choices1.indexOf(found);
          return obj;
        }
      }
    }
  }), 2);
  const first = tmp3[0];
  closure_6 = tmp3[1];
  const items = [onDismissChoicesSheet, onOpenChoicesSheet, onSelect, option, ];
  let index;
  if (first != null) {
    index = first.index;
  }
  items[4] = index;
  const callback = onDismissChoicesSheet.useCallback(() => {
    onOpenChoicesSheet();
    let obj = KeyboardManagerUtils;
    const result = obj.dismissGlobalKeyboard();
    obj = { option, initChoiceIndex: null, onChoiceSelect: null, onDismiss: null };
    let index;
    const obj2 = ActionSheetActionCreatorsDefault;
    if (first != null) {
      index = first.index;
    }
    obj.initChoiceIndex = index;
    obj.onChoiceSelect = function onChoiceSelect(choice, index) {
      closure_1_6({ choice, index });
      onSelect(choice);
    };
    obj.onDismiss = onDismissChoicesSheet;
    obj2.openLazy(asyncRequireImpl(12165, dependencyMap.paths), "AppLauncherChoicesActionSheet", obj);
  }, items);
  let obj = option(onSelect[9]);
  const animationDelayedAutoFocus = obj.useAnimationDelayedAutoFocus(autoFocus, callback);
  obj = { start: true, end: true, style: null, hasError, label: null, subLabel: null, trailing: null, onPress: null };
  const items1 = [closure_6().container, style];
  obj.style = items1;
  let str = "text-sm/medium";
  if (null == first) {
    str = "text-md/medium";
  }
  obj = { variant: str, color: null, lineClamp: 1, children: null };
  let str2 = "interactive-text-default";
  if (null == first) {
    str2 = "text-default";
  }
  obj.color = str2;
  obj.children = option.displayName;
  obj.label = first(option(onSelect[11]).Text, obj);
  let tmp10Result = null;
  if (null != first) {
    const obj1 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: first.choice.displayName };
    tmp10Result = tmp10(tmp7(tmp8[11]).Text, obj1);
  }
  obj.subLabel = tmp10Result;
  obj.trailing = first(option(onSelect[10]).FormArrow, {});
  obj.onPress = callback;
  return first(option(onSelect[10]).FormRow, obj);
};