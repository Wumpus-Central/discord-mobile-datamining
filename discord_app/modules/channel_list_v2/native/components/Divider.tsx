// === Module 11923: Divider ===

// Module 11923 (Divider)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles(() => {
  const obj = { divider: { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: 8, marginBottom: 8, marginHorizontal: 16 } };
  ({ height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: 8, marginBottom: 8, marginHorizontal: 16 });
  return obj;
});
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_5();
  if (cResult[0] !== tmp2.divider) {
    const tmp6 = <View style={tmp2.divider} />;
    cResult[0] = tmp2.divider;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => <View style={closure_5().divider} />);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/Divider.tsx");

export default tmp3;
export const DIVIDER_MARGIN_TOP = 8;
export const DIVIDER_MARGIN_BOTTOM = 8;
export const DIVIDER_HEIGHT = 17;
export const DIVIDER_MARGIN_HORIZONTAL = 16;