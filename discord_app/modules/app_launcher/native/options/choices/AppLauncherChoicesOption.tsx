// === Module 11355: AppLauncherChoicesOption ===

// Module 11355 (AppLauncherChoicesOption)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { container: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.lg, alignItems: "center", padding: 12 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/options/choices/AppLauncherChoicesOption.tsx");

export default function AppLauncherChoicesOption(option) {
  let autoFocus;
  let hasError;
  let importDefault;
  let onSelect;
  let style;
  option = option.option;
  ({ initialValue: importDefault, onSelect } = option);
  const onOpenChoicesSheet = option.onOpenChoicesSheet;
  const onDismissChoicesSheet = option.onDismissChoicesSheet;
  let first;
  let createCacheKey;
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
          const obj = { choice: null, index: null };
          obj[0] = found;
          const choices1 = tmp.choices;
          obj[1] = choices1.indexOf(found);
          return obj;
        }
        tmp = option;
      }
    }
  }), 2);
  first = tmp3[0];
  createCacheKey = tmp3[1];
  const items = [onDismissChoicesSheet, onOpenChoicesSheet, onSelect, option, ];
  let index;
  if (first != null) {
    index = first.index;
  }
  items[4] = index;
  const callback = onDismissChoicesSheet.useCallback(() => {
    onOpenChoicesSheet();
    let obj = option(onSelect[5]);
    const result = obj.dismissGlobalKeyboard();
    obj = { option, initChoiceIndex: null, onChoiceSelect: null, onDismiss: null };
    let index;
    const obj2 = outer1_1(onSelect[6]);
    if (first != null) {
      index = first.index;
    }
    obj[1] = index;
    obj[2] = function onChoiceSelect(choice, index) {
      callback2({ choice, index });
      callback(choice);
    };
    obj[3] = onDismissChoicesSheet;
    obj2.openLazy(option(onSelect[8])(onSelect[7], onSelect.paths), "AppLauncherChoicesActionSheet", obj);
  }, items);
  let obj = option(onSelect[9]);
  const animationDelayedAutoFocus = obj.useAnimationDelayedAutoFocus(autoFocus, callback);
  obj = { start: true, end: true, style: items1, hasError, label: null, subLabel: null, trailing: null, onPress: null };
  items1 = [createCacheKey().container, style];
  let str = "text-sm/medium";
  if (null == first) {
    str = "text-md/medium";
  }
  obj = { variant: str, color: null, lineClamp: 1, children: null };
  let str2 = "interactive-text-default";
  if (null == first) {
    str2 = "text-default";
  }
  obj[1] = str2;
  obj[3] = option.displayName;
  obj[4] = first(option(onSelect[11]).Text, obj);
  let tmp10Result = null;
  if (null != first) {
    const obj1 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null };
    obj1[3] = first.choice.displayName;
    tmp10Result = tmp10(tmp7(tmp8[11]).Text, obj1);
  }
  obj[5] = tmp10Result;
  obj[6] = first(option(onSelect[10]).FormArrow, {});
  obj[7] = callback;
  return first(option(onSelect[10]).FormRow, obj);
};