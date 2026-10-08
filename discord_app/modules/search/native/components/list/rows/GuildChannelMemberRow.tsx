// discord_app/modules/search/native/components/list/rows/GuildChannelMemberRow.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import UserRowDefault from "../../../../../main_tabs_v2/native/shared_components/user_list/UserRow.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/GuildChannelMemberRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildChannelMemberRow(arg0) {
      const cResult = c.c(2);
      if (cResult[0] !== arg0) {
        const obj2 = {};
        const merged = Object.assign(arg0);
        const tmp10 = jsx(UserRowDefault, {});
        cResult[0] = arg0;
        cResult[1] = tmp10;
        let tmp3 = tmp10;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : function GuildChannelMemberRow(arg0) {
      const merged = Object.assign(arg0);
      return jsx(UserRowDefault, {});
    };
