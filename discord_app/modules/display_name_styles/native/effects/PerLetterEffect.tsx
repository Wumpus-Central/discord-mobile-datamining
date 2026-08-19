// === Module 9459: PerLetterEffect ===

// Module 9459 (PerLetterEffect)
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
({ View: c4, Text: c5 } = get_ActivityIndicator);
let closure_7 = createCacheKey.createStyles({ container: { overflow: "hidden" } });
const result = require("obj132").fileFinishedImporting("modules/display_name_styles/native/effects/PerLetterEffect.tsx");

export default function PerLetterEffect(name) {
  name = name.name;
  ({ textProps, colors } = name);
  ({ containerStyle, textStyle } = name);
  const items = [name, colors];
  const items1 = [callback().container, containerStyle];
  const memo = React.useMemo(() => {
    closure_0 = colors(dependencyMap[4])();
    c1 = 0;
    let obj = name(dependencyMap[5]);
    return name(dependencyMap[5]).splitGraphemes(closure_0).map((item, index) => {
      regex.lastIndex = 0;
      const tmp = regex.test(item) || 0 === item.trim().length;
      let tmp2;
      if (null != c1) {
        if (c1.length > 0) {
          if (!tmp) {
            tmp2 = c1[closure_1 % c1.length];
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
      obj = { style: tmp7, children: item };
      return <closure_2_5 key={index} style={tmp7}>{item}</closure_2_5>;
    });
  }, items);
  let obj = {};
  const merged = Object.assign(textProps);
  obj.textBreakStrategy = "simple";
  let accessibilityLabel = textProps.accessibilityLabel;
  if (accessibilityLabel == null) {
    accessibilityLabel = name;
  }
  obj.accessibilityLabel = accessibilityLabel;
  const items2 = [textStyle, { lineHeight: "r" }];
  obj.style = items2;
  obj.children = memo;
  obj[1] = jsx(name(4734).Text, {});
  return <closure_4 />;
};