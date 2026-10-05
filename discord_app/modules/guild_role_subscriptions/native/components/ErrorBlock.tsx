// discord_app/modules/guild_role_subscriptions/native/components/ErrorBlock.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import MessageBlock from "MessageBlock.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MessageBlockDefault = MessageBlock;
let children;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
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
    }
  : (children) => {
      children = children.children;
      MessageBlockDefault;
      return <tmp color={MessageBlock.MessageBlockColors.RED}>{children}</tmp>;
    };
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/ErrorBlock.tsx");

export default tmp3;
