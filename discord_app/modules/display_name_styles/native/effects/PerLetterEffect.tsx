// === Module 10638: PerLetterEffect ===

// Module 10638 (PerLetterEffect)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ View: closure_4, Text: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ container: { overflow: "hidden" } });
const result = size.fileFinishedImporting("modules/display_name_styles/native/effects/PerLetterEffect.tsx");

export default function PerLetterEffect(name) {
  let colors;
  let containerStyle;
  let textProps;
  let textStyle;
  name = name.name;
  ({ textProps, colors } = name);
  ({ containerStyle, textStyle } = name);
  const items = [name, colors];
  let tmp = closure_7();
  const items1 = [tmp.container, containerStyle];
  const memo = react.useMemo(() => {
    const regex = colors(dependencyMap[4])();
    let closure_1 = 0;
    let obj = name(dependencyMap[5]);
    const splitGraphemesResult = obj.splitGraphemes(regex);
    return splitGraphemesResult.map((children, index) => {
      regex.lastIndex = 0;
      const tmp = regex.test(children) || 0 === children.trim().length;
      let tmp2;
      if (null != colors) {
        if (colors.length > 0) {
          if (!tmp) {
            tmp2 = colors[closure_1 % colors.length];
          }
        }
      }
      if (!tmp) {
        closure_1 = closure_1 + 1;
      }
      let tmp7;
      if (null != tmp2) {
        tmp7 = { color: tmp2 };
        const obj = { color: tmp2 };
      }
      return <hasOwnProperty key={index} style={tmp7}>{children}</hasOwnProperty>;
    });
  }, items);
  const Text = name(4886).Text;
  const merged = Object.assign(textProps);
  let accessibilityLabel = textProps.accessibilityLabel;
  if (accessibilityLabel == null) {
    accessibilityLabel = name;
  }
  const items2 = [textStyle, { lineHeight: "r" }];
  return <closure_4 style={items1}>{null}</closure_4>;
};