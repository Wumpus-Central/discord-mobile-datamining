// === Module 14596: KeyImage ===

// Module 14596 (KeyImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import SecurityKeySpotIllustration from "SecurityKeySpotIllustration" /* 14597 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginBottom: nativeDefault.space.PX_8 };
let closure_4 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp8;
  const obj = react;
  const cResult = obj.c(3);
  const tmp4 = closure_4();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = jsx(SecurityKeySpotIllustration.SecurityKeySpotIllustration, { scale: 0.6 });
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.container) {
    const tmp11 = <View style={tmp4.container}>{first}</View>;
    cResult[1] = tmp4.container;
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (() => <View style={closure_4().container}>{jsx(SecurityKeySpotIllustration.SecurityKeySpotIllustration, { scale: 0.6 })}</View>);
const result = size.fileFinishedImporting("modules/mfa/native/components/KeyImage.tsx");

export const KeyImage = tmp2;