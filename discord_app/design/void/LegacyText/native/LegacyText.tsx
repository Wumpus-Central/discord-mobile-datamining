// === Module 8941: LegacyText/LegacyText ===

// Module 8941 (LegacyText/LegacyText)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import useLegacyTextMigrationHighlight from "useLegacyTextMigrationHighlight" /* 8942 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ["style", "children"];
const Text = react_native.Text;
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let obj = { text: { fontFamily: Fonts.PRIMARY_MEDIUM, includeFontPadding: false } };
let closure_6 = createStyles.createStyles(obj);
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  let children;
  let style;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(13);
  if (cResult[0] !== arg0) {
    ({ style, children } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = tmp9;
    cResult[3] = style;
    tmp6 = style;
    tmp5 = tmp9;
    tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const tmp10 = closure_6();
  const tmpResult = useLegacyTextMigrationHighlight;
  const legacyTextMigrationHighlight = tmpResult.useLegacyTextMigrationHighlight();
  if (cResult[4] === legacyTextMigrationHighlight) {
    if (cResult[5] === tmp6) {
      let tmp12;
      if (cResult[6] === tmp10.text) {
        tmp12 = cResult[7];
      }
      if (cResult[8] === tmp4) {
        if (cResult[9] === tmp5) {
          if (cResult[10] === ref) {
            let tmp14;
            if (cResult[11] === tmp12) {
              tmp14 = cResult[12];
            }
            return tmp14;
          }
        }
      }
      const merged = Object.assign(tmp5);
      const tmp20 = <Text ref={ref} style={tmp12}>{tmp4}</Text>;
      cResult[8] = tmp4;
      cResult[9] = tmp5;
      cResult[10] = ref;
      cResult[11] = tmp12;
      cResult[12] = tmp20;
      tmp14 = tmp20;
    }
  }
  const items = [tmp10.text, tmp6, legacyTextMigrationHighlight];
  cResult[4] = legacyTextMigrationHighlight;
  cResult[5] = tmp6;
  cResult[6] = tmp10.text;
  cResult[7] = items;
  tmp12 = items;
}) : ((arg0, ref) => {
  let children;
  let style;
  ({ style, children } = arg0);
  const merged = Object.assign(arg0, Object.assign({ style: 0, children: 0 }));
  const tmp2 = closure_6();
  const obj = useLegacyTextMigrationHighlight;
  const legacyTextMigrationHighlight = obj.useLegacyTextMigrationHighlight();
  const merged1 = Object.assign(merged);
  const items = [tmp2.text, style, legacyTextMigrationHighlight];
  return <Text ref={ref} style={items}>{children}</Text>;
}));
const result = size.fileFinishedImporting("design/void/LegacyText/native/LegacyText.tsx");

export default forwardRefResult;