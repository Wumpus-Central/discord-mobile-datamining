// discord_app/modules/search/native/components/list/rows/GuildChannelMemberRow.tsx
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import UserRowDefault from "../../../../../main_tabs_v2/native/shared_components/user_list/UserRow.tsx";
import react from "../../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] !== arg0) {
        UserRowDefault;
        const merged = Object.assign(arg0);
        const tmp10 = <tmp6 />;
        cResult[0] = arg0;
        cResult[1] = tmp10;
        tmp3 = tmp10;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : (arg0) => {
      UserRowDefault;
      const merged = Object.assign(arg0);
      return <tmp />;
    };
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/GuildChannelMemberRow.tsx");

export default tmp3;
