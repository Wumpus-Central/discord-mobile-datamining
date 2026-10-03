// discord_app/modules/search/native/components/tabs/pages/placeholders/MemberRowPlaceholder.tsx
import c from "../../../../../../../../_runtime/00576_c.js";
import FormRowPlaceholderDefault from "FormRowPlaceholder.tsx";
import noop from "../../../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_4 = createStyles.createStyles({ container: { paddingHorizontal: 0 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/search/native/components/tabs/pages/placeholders/MemberRowPlaceholder.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      const tmp3 = closure_4();
      if (cResult[0] !== tmp3.container) {
        const obj2 = { style: tmp3.container };
        const tmp7 = jsx(FormRowPlaceholderDefault, { style: tmp3.container });
        cResult[0] = tmp3.container;
        cResult[1] = tmp7;
        let tmp4 = tmp7;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : () => {
      const tmp = closure_4();
      return jsx(FormRowPlaceholderDefault, { style: closure_4().container });
    };
