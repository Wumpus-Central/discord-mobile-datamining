// === Module 12711: InAppReportsRemediationsElement ===

// Module 12711 (InAppReportsRemediationsElement)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import TableRowGroup2 from "TableRowGroup" /* 6074 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let children;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_32 };
let closure_4 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(6);
  children = children.children;
  const tmp4 = closure_4();
  const container = tmp4.container;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t["k+QA9N"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== children) {
    const tmp9 = jsx(TableRowGroup2.TableRowGroup, { title: first, hasIcons: true, children });
    cResult[1] = children;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.container) {
    let tmp10;
    if (cResult[4] === tmp7) {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = <View style={container}>{tmp7}</View>;
  cResult[3] = tmp4.container;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : ((children) => {
  let intl;
  children = children.children;
  ({ title: intl.string(intl2.t["k+QA9N"]), hasIcons: true, children });
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  intl = intl2.intl;
  return <View style={closure_4().container}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsRemediationsElement.tsx");

export default tmp3;