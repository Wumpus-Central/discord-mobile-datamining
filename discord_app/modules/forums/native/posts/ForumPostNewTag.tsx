// discord_app/modules/forums/native/posts/ForumPostNewTag.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let containerStyle;

let obj2;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { paddingVertical: 1, backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND };
let closure_3 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (containerStyle) => {
      const obj = react2;
      const cResult = obj.c(3);
      containerStyle = containerStyle.containerStyle;
      const tmp4 = closure_3();
      if (cResult[0] === containerStyle) {
        let tmp5;
        if (cResult[1] === tmp4.container) {
          tmp5 = cResult[2];
        }
        return tmp5;
      }
      const items = [containerStyle, tmp4.container];
      const tmp6 = jsx(native.NewTag, { containerStyle: items, variant: "text-xs/bold", color: "badge-text-brand" });
      cResult[0] = containerStyle;
      cResult[1] = tmp4.container;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (containerStyle) => {
      containerStyle = containerStyle.containerStyle;
      const items = [containerStyle, closure_3().container];
      closure_3();
      return jsx(native.NewTag, { containerStyle: items, variant: "text-xs/bold", color: "badge-text-brand" });
    };
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostNewTag.tsx");

export default tmp3;
