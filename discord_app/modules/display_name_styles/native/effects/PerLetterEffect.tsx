// discord_app/modules/display_name_styles/native/effects/PerLetterEffect.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ View: c4, Text: c5 } = get_ActivityIndicator);
let closure_7 = createCacheKey.createStyles({ container: { overflow: "hidden" } });
const result = require("jsxProd").fileFinishedImporting("modules/display_name_styles/native/effects/PerLetterEffect.tsx");

export default function PerLetterEffect(name) {
  let colors;
  let containerStyle;
  let textProps;
  let textStyle;
  name = name.name;
  ({ textProps, colors } = name);
  ({ containerStyle, textStyle } = name);
  const items = [name, colors];
  let obj = { style: items1, children: null };
  items1 = [callback().container, containerStyle];
  const memo = React.useMemo(() => {
    let closure_0 = colors(outer1_2[4])();
    let c1 = 0;
    let obj = name(outer1_2[5]);
    return name(outer1_2[5]).splitGraphemes(closure_0).map((children) => {
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
      return outer2_6(outer2_5, obj, arg1);
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
  const items2 = [textStyle, { lineHeight: "r" }];
  obj.style = items2;
  obj.children = memo;
  obj[1] = jsx(name(4734).Text, {});
  return <closure_4 />;
};