// discord_app/modules/conjure/shared/native/ConjureNativeCardSurface.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let children;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { surface: obj2 };
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.md,
  padding: nativeDefault.space.PX_12,
};
let closure_4 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
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
    }
  : (children) => <View style={closure_4().surface}>{children.children}</View>;
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeCardSurface.tsx");

export default tmp3;
