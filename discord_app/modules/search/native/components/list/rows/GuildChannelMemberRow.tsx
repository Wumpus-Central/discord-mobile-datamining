// === Module 16873: GuildChannelMemberRow ===

// Module 16873 (GuildChannelMemberRow)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import UserRowDefault from "UserRow" /* 10615 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
}) : ((arg0) => {
  UserRowDefault;
  const merged = Object.assign(arg0);
  return <tmp />;
});
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/GuildChannelMemberRow.tsx");

export default tmp3;