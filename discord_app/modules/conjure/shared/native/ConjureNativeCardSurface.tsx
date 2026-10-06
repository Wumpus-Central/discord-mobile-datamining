// === Module 16682: ConjureNativeCardSurface ===

// Module 16682 (ConjureNativeCardSurface)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let children;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { surface: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, padding: nativeDefault.space.PX_12 };
let closure_4 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const obj = react2;
  const cResult = obj.c(3);
  children = children.children;
  const tmp2 = closure_4();
  if (cResult[0] === children) {
    let tmp3;
    if (cResult[1] === tmp2.surface) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const tmp4 = <View style={tmp2.surface}>{children}</View>;
  cResult[0] = children;
  cResult[1] = tmp2.surface;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : ((children) => <View style={closure_4().surface}>{children.children}</View>);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeCardSurface.tsx");

export default tmp3;