// === Module 13958: NitroWheel ===

// Module 13958 (NitroWheel)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import FastImageDefault from "FastImage" /* 5981 */;
import AssetRegistryDefault from "AssetRegistry" /* 8894 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let style;

const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  style = style.style;
  if (cResult[0] !== style) {
    FastImageDefault;
    const tmp7 = <tmp6 source={AssetRegistryDefault} style={style} resizeMode="contain" />;
    cResult[0] = style;
    cResult[1] = tmp7;
    tmp3 = tmp7;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : ((style) => {
  style = style.style;
  FastImageDefault;
  return <tmp source={AssetRegistryDefault} style={style} resizeMode="contain" />;
});
const result = size.fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default tmp3;