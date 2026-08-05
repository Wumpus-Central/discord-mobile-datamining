// discord_app/modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteOption.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { container: null, hasError: null, inputText: null };
createCacheKey = { width: "100%", backgroundColor: require("Themes").colors.INPUT_BACKGROUND_DEFAULT, borderRadius: require("Themes").radii.lg, padding: 12, borderWidth: 2, borderColor: "transparent", flexDirection: "row", alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderColor: require("Themes").colors.BORDER_FEEDBACK_CRITICAL, padding: 12 };
const obj1 = { borderColor: require("Themes").colors.BORDER_FEEDBACK_CRITICAL, padding: 12 };
createCacheKey[2] = { fontSize: 16, alignSelf: "center", fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, color: require("Themes").colors.TEXT_DEFAULT };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj2 = { fontSize: 16, alignSelf: "center", fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, color: require("Themes").colors.TEXT_DEFAULT };
let result = require("ME").fileFinishedImporting("modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteOption.tsx");

export default function AppLauncherAutocompleteOption(arg0) {
  let autoFocus;
  let _slicedToArray;
  let noop;
  let closure_7;
  let createCacheKey;
  let dependencyMap;
  let hasError;
  let importDefault;
  let jsx;
  let require;
  let style;
  ({ option: require, onSelect: importDefault, onOpenAutocompleteSheet: dependencyMap, onDismissAutocompleteSheet: _slicedToArray, channel: noop, activeCommand: jsx, optionValues: createCacheKey, initialValue: closure_7, hasError } = arg0);
  let first;
  let closure_9;
  function onPress() {
    if (closure_2 != null) {
      tmp();
    }
    let obj = outer1_0(outer1_2[6]);
    const result = obj.dismissGlobalKeyboard();
    obj = {
      option: closure_0,
      initChoice: first,
      onChoiceSelect(arg0) {
        callback2(arg0);
        callback(arg0);
      },
      channel: noop,
      activeCommand: closure_5,
      onDismissAutocompleteSheet: _slicedToArray,
      optionValues: ref.current
    };
    outer1_1(outer1_2[7]).openLazy(outer1_0(outer1_2[9])(outer1_2[8], outer1_2.paths), "AppLauncherAutocompleteActionSheet", obj);
  }
  ({ style, autoFocus } = arg0);
  const tmp = callback(React.useState(() => {
    if (null != closure_7) {
      if ("text" === tmp.type) {
        if ("" !== tmp.text) {
          const obj = { displayName: null, name: null, value: null };
          ({ text: obj[0], text: obj[1], text: obj[2] } = tmp);
          return obj;
        }
      }
    }
  }), 2);
  first = tmp[0];
  closure_9 = tmp[1];
  const tmp3 = createCacheKey();
  let obj = require(11469) /* useAnimationDelayedAutoFocus */;
  const animationDelayedAutoFocus = obj.useAnimationDelayedAutoFocus(autoFocus, onPress);
  obj = { onPress, style: null, children: null };
  const items = [tmp3.container, , ];
  if (hasError) {
    hasError = tmp3.hasError;
  }
  items[1] = hasError;
  items[2] = style;
  obj[1] = items;
  obj = { variant: "text-md/normal", style: tmp3.inputText, children: null };
  let str = " ";
  if (null != first) {
    str = first.displayName;
  }
  obj[2] = str;
  obj[2] = jsx(require(4281) /* Text */.Text, { variant: "text-md/normal", style: tmp3.inputText, children: null });
  return jsx(require(4812) /* PressableBase */.PressableOpacity, { variant: "text-md/normal", style: tmp3.inputText, children: null });
};