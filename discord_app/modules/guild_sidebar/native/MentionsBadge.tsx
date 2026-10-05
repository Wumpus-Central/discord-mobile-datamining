// discord_app/modules/guild_sidebar/native/MentionsBadge.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import native from "../../../design/void/native.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let isMentionLowImportance;
      let mentionsCount;
      const obj = react2;
      const cResult = obj.c(3);
      ({ mentionsCount, isMentionLowImportance } = arg0);
      if (cResult[0] === isMentionLowImportance) {
        let tmp4;
        if (cResult[1] === mentionsCount) {
          tmp4 = cResult[2];
        }
        return tmp4;
      }
      const tmp5 = jsx(native.Badge, { value: mentionsCount, isMentionLowImportance });
      cResult[0] = isMentionLowImportance;
      cResult[1] = mentionsCount;
      cResult[2] = tmp5;
      tmp4 = tmp5;
    }
  : (arg0) => {
      let isMentionLowImportance;
      let mentionsCount;
      ({ mentionsCount, isMentionLowImportance } = arg0);
      return jsx(native.Badge, { value, isMentionLowImportance });
    };
const result = size.fileFinishedImporting("modules/guild_sidebar/native/MentionsBadge.tsx");

export default tmp3;
