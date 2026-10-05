// === Module 8288: Arrow ===

// Module 8288 (Arrow)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import AssetRegistryDefault from "AssetRegistry" /* 8289 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const jsx = Fragment.jsx;
let obj = { tintColor: obj2 };
obj2 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_4 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp4 = closure_4();
  if (cResult[0] !== tmp4.tintColor) {
    const Icon = native.Icon;
    const tmp8 = <Icon source={AssetRegistryDefault} size={native.Icon.Sizes.MEDIUM} style={tmp4.tintColor} />;
    cResult[0] = tmp4.tintColor;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const tmp = closure_4();
  const Icon = native.Icon;
  return <Icon source={AssetRegistryDefault} size={native.Icon.Sizes.MEDIUM} style={tmp.tintColor} />;
});
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/Arrow.tsx");

export default tmp3;