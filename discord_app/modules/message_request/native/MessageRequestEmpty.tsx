// discord_app/modules/message_request/native/MessageRequestEmpty.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import native from "../../../design/void/native.tsx";
import Pending from "../../../design/components/Illustration/native/redesign/generated/Pending.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let bodyText;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (bodyText) => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      bodyText = bodyText.bodyText;
      if (cResult[0] !== bodyText) {
        const EmptyState = native.EmptyState;
        const tmp6 = <EmptyState Illustration={Pending.Pending} body={bodyText} />;
        cResult[0] = bodyText;
        cResult[1] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : (bodyText) => {
      bodyText = bodyText.bodyText;
      const EmptyState = native.EmptyState;
      return <EmptyState Illustration={Pending.Pending} body={bodyText} />;
    };
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestEmpty.tsx");

export default tmp3;
