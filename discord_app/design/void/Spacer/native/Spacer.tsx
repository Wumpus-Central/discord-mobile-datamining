// discord_app/design/void/Spacer/native/Spacer.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import react from "../../../../../_runtime/00019_react.js";
import 00012__ from "../../../../../_runtime/metro/00012__.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

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