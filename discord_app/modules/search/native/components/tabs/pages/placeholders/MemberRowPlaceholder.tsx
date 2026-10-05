// discord_app/modules/search/native/components/tabs/pages/placeholders/MemberRowPlaceholder.tsx
import Fragment from "../../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../../_runtime/00576_react.js";
import FormRowPlaceholderDefault from "FormRowPlaceholder.tsx";
import react from "../../../../../../../../_runtime/00019_react.js";
import createStyles from "../../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ container: { paddingHorizontal: 0 } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp3 = closure_4();
      if (cResult[0] !== tmp3.container) {
        const tmp7 = jsx(FormRowPlaceholderDefault, { style: tmp3.container });
        cResult[0] = tmp3.container;
        cResult[1] = tmp7;
        tmp4 = tmp7;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : () => jsx(FormRowPlaceholderDefault, { style: closure_4().container });
const result = size.fileFinishedImporting(
  "modules/search/native/components/tabs/pages/placeholders/MemberRowPlaceholder.tsx",
);

export default tmp3;
