// === Module 13936: Spacer ===

// Module 13936 (Spacer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import module_12 from "module_12" /* 12 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = module_12.memoize((width) => {
  size = { width, height: width };
  return size;
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let pointerEvents;
  let tmp2;
  const obj = react2;
  const cResult = obj.c(5);
  ({ size, pointerEvents } = arg0);
  if (cResult[0] !== size) {
    const tmp4 = closure_4(size);
    cResult[0] = size;
    cResult[1] = tmp4;
    tmp2 = tmp4;
  } else {
    tmp2 = cResult[1];
  }
  if (cResult[2] === pointerEvents) {
    let tmp5;
    if (cResult[3] === tmp2) {
      tmp5 = cResult[4];
    }
    return tmp5;
  }
  const tmp6 = <View style={tmp2} pointerEvents={pointerEvents} />;
  cResult[2] = pointerEvents;
  cResult[3] = tmp2;
  cResult[4] = tmp6;
  tmp5 = tmp6;
}) : ((pointerEvents) => <View style={closure_4(pointerEvents.size)} pointerEvents={pointerEvents.pointerEvents} />);
let size = size_mod;
const result = size.fileFinishedImporting("design/void/Spacer/native/Spacer.tsx");

export default tmp3;