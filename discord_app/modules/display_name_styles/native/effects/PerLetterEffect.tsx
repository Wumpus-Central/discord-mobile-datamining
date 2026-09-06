// === Module 10904: PerLetterEffect ===

// Module 10904 (PerLetterEffect)
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
({ View: c4, Text: c5 } = get_ActivityIndicator);
let closure_7 = createCacheKey.createStyles({ container: { overflow: "hidden" } });
const result = require("set").fileFinishedImporting("modules/display_name_styles/native/effects/PerLetterEffect.tsx");

export default function PerLetterEffect(name) {
  name = name.name;
  ({ textProps, colors } = name);
  ({ containerStyle, textStyle } = name);
  const items = [name, colors];
  let obj = { style: items1, children: null };
  items1 = [callback().container, containerStyle];
  const memo = React.useMemo(() => {
    closure_0 = colors(closure_1_2[4])();
    c1 = 0;
    let obj = name(closure_1_2[5]);
    return name(closure_1_2[5]).splitGraphemes(closure_0).map((children) => {
      regex.lastIndex = 0;
      const tmp = regex.test(children) || 0 === children.trim().length;
      let tmp2;
      if (null != c1) {
        if (arr.length > 0) {
          if (!tmp) {
            tmp2 = arr[closure_1 % arr.length];
          }
        }
      }
      if (!tmp) {
        closure_1 = closure_1 + 1;
      }
      let tmp7;
      if (null != tmp2) {
        let obj = { color: null };
        obj[0] = tmp2;
        tmp7 = obj;
      }
      obj = { style: tmp7, children };
      return closure_2_6(closure_2_5, obj, arg1);
    });
  }, items);
  obj = {};
  const merged = Object.assign(textProps);
  obj.textBreakStrategy = "simple";
  let accessibilityLabel = textProps.accessibilityLabel;
  if (accessibilityLabel == null) {
    accessibilityLabel = name;
  }
  obj.accessibilityLabel = accessibilityLabel;
  const items2 = [textStyle, { lineHeight: "Array" }];
  obj.style = items2;
  obj.children = memo;
  obj[1] = jsx(name(4556).Text, {});
  return <closure_4 />;
};