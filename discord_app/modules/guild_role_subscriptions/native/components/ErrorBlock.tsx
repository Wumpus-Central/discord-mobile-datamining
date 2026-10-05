// === Module 11852: ErrorBlock ===

// Module 11852 (ErrorBlock)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import MessageBlock from "MessageBlock" /* 11853 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const MessageBlockDefault = MessageBlock;
let children;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  children = children.children;
  if (cResult[0] !== children) {
    MessageBlockDefault;
    const tmp8 = <tmp7 color={MessageBlock.MessageBlockColors.RED}>{children}</tmp7>;
    cResult[0] = children;
    cResult[1] = tmp8;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((children) => {
  children = children.children;
  MessageBlockDefault;
  return <tmp color={MessageBlock.MessageBlockColors.RED}>{children}</tmp>;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/ErrorBlock.tsx");

export default tmp3;