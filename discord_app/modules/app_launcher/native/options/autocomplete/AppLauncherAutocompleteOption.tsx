// === Module 12170: AppLauncherAutocompleteOption ===

// Module 12170 (AppLauncherAutocompleteOption)
import ThemesDefault from "Themes" /* 576 */;
import Text from "Text" /* 4556 */;
import PressableBase from "PressableBase" /* 5123 */;
import useAnimationDelayedAutoFocus from "useAnimationDelayedAutoFocus" /* 12169 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
createCacheKey = { container: null, hasError: null, inputText: null };
createCacheKey = { width: "100%", backgroundColor: ThemesDefault.colors.INPUT_BACKGROUND_DEFAULT, borderRadius: ThemesDefault.radii.lg, padding: 12, borderWidth: 2, borderColor: "transparent", flexDirection: "row", alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderColor: ThemesDefault.colors.BORDER_FEEDBACK_CRITICAL, padding: 12 };
const obj1 = { borderColor: ThemesDefault.colors.BORDER_FEEDBACK_CRITICAL, padding: 12 };
createCacheKey[2] = { fontSize: 16, alignSelf: "center", fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, color: ThemesDefault.colors.TEXT_DEFAULT };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const obj2 = { fontSize: 16, alignSelf: "center", fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, color: ThemesDefault.colors.TEXT_DEFAULT };
let result = require("set").fileFinishedImporting("modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteOption.tsx");

export default function AppLauncherAutocompleteOption(arg0) {
  ({ option: require, onSelect: importDefault, onOpenAutocompleteSheet: dependencyMap, onDismissAutocompleteSheet: closure_3, channel: closure_4, activeCommand: jsx, optionValues: closure_6, initialValue: closure_7, hasError } = arg0);
  let first;
  closure_9 = undefined;
  function onPress() {
    if (closure_2 != null) {
      tmp();
    }
    let obj = closure_1_0(closure_1_2[6]);
    const result = obj.dismissGlobalKeyboard();
    obj = {
      option: closure_0,
      initChoice: first,
      onChoiceSelect(arg0) {
        callback2(arg0);
        callback(arg0);
      },
      channel: closure_4,
      activeCommand: closure_5,
      onDismissAutocompleteSheet: closure_3,
      optionValues: ref.current
    };
    closure_1_1(closure_1_2[7]).openLazy(closure_1_0(closure_1_2[9])(closure_1_2[8], closure_1_2.paths), "AppLauncherAutocompleteActionSheet", obj);
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
  const tmp3 = callback2();
  let obj = useAnimationDelayedAutoFocus;
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
  obj[2] = jsx(Text.Text, { variant: "text-md/normal", style: tmp3.inputText, children: null });
  return jsx(PressableBase.PressableOpacity, { variant: "text-md/normal", style: tmp3.inputText, children: null });
};