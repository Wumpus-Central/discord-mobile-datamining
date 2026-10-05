// discord_app/modules/messages/useOnMessageSend.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const MessageStates = Constants.MessageStates;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(4);
      let tmp2;
      if (undefined !== arg1) {
        tmp2 = arg1;
      }
      let closure_1 = tmp2;
      if (cResult[0] === arg0) {
        let tmp3;
        let tmp4;
        if (cResult[1] === tmp2) {
          tmp3 = cResult[2];
          tmp4 = cResult[3];
        }
        const effect = react.useEffect(tmp3, tmp4);
      }
      const fn = function c() {
        function handleMessage(channelId) {
          const tmp2 = undefined !== handleMessageCreate && channelId.channelId !== tmp;
          if (!tmp2) {
            handleMessage();
          }
        }
        function handleMessageCreate(optimistic) {
          optimistic = optimistic.optimistic || optimistic.message.state === constants.SENDING;
          if (optimistic) {
            const tmp3 = undefined !== handleMessageCreate && optimistic.channelId !== tmp2;
            if (!tmp3) {
              handleMessage();
            }
          }
        }
        let obj = closure_1(dependencyMap[4]);
        const subscription = obj.subscribe("MESSAGE_CREATE", handleMessageCreate);
        let obj2 = closure_1(dependencyMap[4]);
        const subscription1 = obj2.subscribe("UPLOAD_START", handleMessage);
        let obj3 = closure_1(dependencyMap[4]);
        const subscription2 = obj3.subscribe("CALL_CREATE", handleMessage);
        return () => {
          const obj = DispatcherDefault;
          obj.unsubscribe("MESSAGE_CREATE", handleMessageCreate);
          const obj2 = DispatcherDefault;
          obj2.unsubscribe("UPLOAD_START", handleMessage);
          const obj3 = DispatcherDefault;
          obj3.unsubscribe("CALL_CREATE", handleMessage);
        };
      };
      const items = [arg0, tmp2];
      cResult[0] = arg0;
      cResult[1] = tmp2;
      cResult[2] = fn;
      cResult[3] = items;
      tmp4 = items;
      tmp3 = fn;
    }
  : (arg0) => {
      let closure_0 = arg0;
      const tmp = arg1;
      let closure_1 = tmp;
      const items = [arg0, tmp];
      const effect = react.useEffect(() => {
        function handleMessage(channelId) {
          const tmp2 = undefined !== handleMessageCreate && channelId.channelId !== tmp;
          if (!tmp2) {
            handleMessage();
          }
        }
        function handleMessageCreate(optimistic) {
          optimistic = optimistic.optimistic || optimistic.message.state === constants.SENDING;
          if (optimistic) {
            const tmp3 = undefined !== handleMessageCreate && optimistic.channelId !== tmp2;
            if (!tmp3) {
              handleMessage();
            }
          }
        }
        let obj = closure_1(dependencyMap[4]);
        const subscription = obj.subscribe("MESSAGE_CREATE", handleMessageCreate);
        let obj2 = closure_1(dependencyMap[4]);
        const subscription1 = obj2.subscribe("UPLOAD_START", handleMessage);
        let obj3 = closure_1(dependencyMap[4]);
        const subscription2 = obj3.subscribe("CALL_CREATE", handleMessage);
        return () => {
          const obj = DispatcherDefault;
          obj.unsubscribe("MESSAGE_CREATE", handleMessageCreate);
          const obj2 = DispatcherDefault;
          obj2.unsubscribe("UPLOAD_START", handleMessage);
          const obj3 = DispatcherDefault;
          obj3.unsubscribe("CALL_CREATE", handleMessage);
        };
      }, items);
    };
const result = size.fileFinishedImporting("modules/messages/useOnMessageSend.tsx");

export default tmp2;
