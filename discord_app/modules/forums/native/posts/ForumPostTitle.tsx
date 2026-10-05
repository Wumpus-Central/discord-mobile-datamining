// discord_app/modules/forums/native/posts/ForumPostTitle.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import PlatformUtils from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj3;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
let obj = null;
if (PlatformUtils.isIOS()) {
  obj = { lineHeight: 22 };
}
const obj2 = { title: obj3 };
obj3 = { marginBottom: 6 };
const merged = Object.assign(obj);
let closure_3 = createStyles(obj2);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (hasUnreads) => {
      let ellipsizeMode;
      let lineClamp;
      let onTextLayout;
      let title;
      const obj = react2;
      const cResult = obj.c(7);
      ({ title, lineClamp, ellipsizeMode, onTextLayout } = hasUnreads);
      hasUnreads = hasUnreads.hasUnreads;
      const tmp4 = closure_3();
      let str = "text-muted";
      if (hasUnreads) {
        str = "mobile-text-heading-primary";
      }
      if (cResult[0] === str) {
        if (cResult[1] === ellipsizeMode) {
          if (cResult[2] === lineClamp) {
            if (cResult[3] === onTextLayout) {
              if (cResult[4] === tmp4.title) {
                let tmp5;
                if (cResult[5] === title) {
                  tmp5 = cResult[6];
                }
                return tmp5;
              }
            }
          }
        }
      }
      const tmp6 = jsx(Text_Text.Text, {
        variant: "text-md/semibold",
        color: str,
        lineClamp,
        ellipsizeMode,
        style: tmp4.title,
        onTextLayout,
        children: title,
      });
      cResult[0] = str;
      cResult[1] = ellipsizeMode;
      cResult[2] = lineClamp;
      cResult[3] = onTextLayout;
      cResult[4] = tmp4.title;
      cResult[5] = title;
      cResult[6] = tmp6;
      tmp5 = tmp6;
    }
  : (arg0) => {
      let ellipsizeMode;
      let hasUnreads;
      let lineClamp;
      let onTextLayout;
      let title;
      ({ title, lineClamp, ellipsizeMode, hasUnreads, onTextLayout } = arg0);
      let str = "text-muted";
      const tmp = closure_3();
      if (hasUnreads) {
        str = "mobile-text-heading-primary";
      }
      return jsx(Text_Text.Text, {
        variant: "text-md/semibold",
        color: str,
        lineClamp,
        ellipsizeMode,
        style: tmp.title,
        onTextLayout,
        children: title,
      });
    };
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostTitle.tsx");

export default tmp5;
