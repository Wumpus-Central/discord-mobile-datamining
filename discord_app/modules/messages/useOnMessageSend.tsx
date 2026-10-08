// discord_app/modules/messages/useOnMessageSend.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import noop from "../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const MessageStates = fn(1085).MessageStates;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/useOnMessageSend.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useOnMessageSend(arg0, arg1) {
      _require = arg0;
      const cResult = require("c").c(4);
      let tmp2;
      if (undefined !== arg1) {
        tmp2 = arg1;
      }
      closure_1 = tmp2;
      if (cResult[0] === arg0) {
        if (cResult[1] === tmp2) {
          let tmp3 = cResult[2];
          let tmp4 = cResult[3];
        }
        const effect = noop.useEffect(tmp3, tmp4);
      }
      const fn = function c() {
        function handleMessage(channelId) {
          let tmp2 = undefined !== handleMessageCreate;
          if (tmp2) {
            tmp2 = channelId.channelId !== tmp;
          }
          if (!tmp2) {
            handleMessage();
          }
        }
        function handleMessageCreate(optimistic) {
          optimistic = optimistic.optimistic;
          if (!optimistic) {
            optimistic = optimistic.message.state === constants.SENDING;
          }
          if (optimistic) {
            if (!tmp3) {
              handleMessage();
            }
            tmp3 = undefined !== handleMessageCreate && optimistic.channelId !== tmp2;
          }
        }
        const subscription = closure_1(584).subscribe("MESSAGE_CREATE", handleMessageCreate);
        let obj = closure_1(584);
        const subscription1 = closure_1(584).subscribe("UPLOAD_START", handleMessage);
        let obj2 = closure_1(584);
        const subscription2 = closure_1(584).subscribe("CALL_CREATE", handleMessage);
        return () => {
          DispatcherDefault.unsubscribe("MESSAGE_CREATE", handleMessageCreate);
          DispatcherDefault.unsubscribe("UPLOAD_START", handleMessage);
          DispatcherDefault.unsubscribe("CALL_CREATE", handleMessage);
        };
      };
      const items = [arg0, tmp2];
      cResult[0] = arg0;
      cResult[1] = tmp2;
      cResult[2] = fn;
      cResult[3] = items;
      tmp4 = items;
      tmp3 = fn;
      let obj = require("c");
    }
  : function useOnMessageSend(arg0) {
      closure_0 = arg0;
      closure_1 = tmp;
      const items = [arg0, arg1];
      const effect = noop.useEffect(() => {
        function handleMessage(channelId) {
          let tmp2 = undefined !== handleMessageCreate;
          if (tmp2) {
            tmp2 = channelId.channelId !== tmp;
          }
          if (!tmp2) {
            handleMessage();
          }
        }
        function handleMessageCreate(optimistic) {
          optimistic = optimistic.optimistic;
          if (!optimistic) {
            optimistic = optimistic.message.state === constants.SENDING;
          }
          if (optimistic) {
            if (!tmp3) {
              handleMessage();
            }
            tmp3 = undefined !== handleMessageCreate && optimistic.channelId !== tmp2;
          }
        }
        const subscription = closure_1(584).subscribe("MESSAGE_CREATE", handleMessageCreate);
        let obj = closure_1(584);
        const subscription1 = closure_1(584).subscribe("UPLOAD_START", handleMessage);
        let obj2 = closure_1(584);
        const subscription2 = closure_1(584).subscribe("CALL_CREATE", handleMessage);
        return () => {
          DispatcherDefault.unsubscribe("MESSAGE_CREATE", handleMessageCreate);
          DispatcherDefault.unsubscribe("UPLOAD_START", handleMessage);
          DispatcherDefault.unsubscribe("CALL_CREATE", handleMessage);
        };
      }, items);
    };
