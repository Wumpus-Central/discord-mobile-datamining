// discord_app/modules/activities/utils/ActivityLaunchErrorLink.native.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import migration from "../../../intl/native/migration.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let href;
      const obj = react2;
      const cResult = obj.c(3);
      ({ href, children } = arg0);
      if (cResult[0] === children) {
        let tmp4;
        if (cResult[1] === href) {
          tmp4 = cResult[2];
        }
        return tmp4;
      }
      const tmp5 = jsx(migration.IntlLink, { target: href, children });
      cResult[0] = children;
      cResult[1] = href;
      cResult[2] = tmp5;
      tmp4 = tmp5;
    }
  : (arg0) => {
      let children;
      let href;
      ({ href, children } = arg0);
      return jsx(migration.IntlLink, { target, children });
    };
const result = size.fileFinishedImporting("modules/activities/utils/ActivityLaunchErrorLink.native.tsx");

export default tmp3;
