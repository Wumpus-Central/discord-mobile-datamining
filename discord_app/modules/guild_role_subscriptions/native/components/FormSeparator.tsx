// === Module 15035: FormSeparator ===

// Module 15035 (FormSeparator)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let size;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { container: { alignSelf: "stretch" }, margins: { marginTop: 16 }, separator: size };
size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_4 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const obj = react2;
  const cResult = obj.c(9);
  style = style.style;
  const withoutMargins = style.withoutMargins;
  const tmp2 = closure_4();
  let margins;
  if (!withoutMargins) {
    margins = tmp2.margins;
  }
  if (cResult[0] === style) {
    if (cResult[1] === tmp2.container) {
      let tmp4;
      let tmp5;
      if (cResult[2] === margins) {
        tmp4 = cResult[3];
      }
      if (cResult[4] !== tmp2.separator) {
        const tmp8 = <View style={tmp2.separator} />;
        cResult[4] = tmp2.separator;
        cResult[5] = tmp8;
        tmp5 = tmp8;
      } else {
        tmp5 = cResult[5];
      }
      if (cResult[6] === tmp4) {
        let tmp9;
        if (cResult[7] === tmp5) {
          tmp9 = cResult[8];
        }
        return tmp9;
      }
      const tmp12 = <View style={tmp4}>{tmp5}</View>;
      cResult[6] = tmp4;
      cResult[7] = tmp5;
      cResult[8] = tmp12;
      tmp9 = tmp12;
    }
  }
  const items = [tmp2.container, margins, style];
  cResult[0] = style;
  cResult[1] = tmp2.container;
  cResult[2] = margins;
  cResult[3] = items;
  tmp4 = items;
}) : ((arg0) => {
  let style;
  let withoutMargins;
  ({ style, withoutMargins } = arg0);
  const tmp = closure_4();
  const items = [tmp.container, , ];
  let margins;
  if (!withoutMargins) {
    margins = tmp.margins;
  }
  items[1] = margins;
  items[2] = style;
  return <View style={items}>{null}</View>;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormSeparator.tsx");

export default tmp3;