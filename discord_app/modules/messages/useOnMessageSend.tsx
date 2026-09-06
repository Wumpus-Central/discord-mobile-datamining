// discord_app/modules/messages/useOnMessageSend.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import noop from "../../../_runtime/metro/00019__.js";

const MessageStates = fn(1074).MessageStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/useOnMessageSend.tsx");

export default function useOnMessageSend(arg0) {
  closure_0 = arg0;
  dependencyMap = tmp;
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
    const subscription = closure_0(573).subscribe("MESSAGE_CREATE", handleMessageCreate);
    let obj = closure_0(573);
    const subscription1 = closure_0(573).subscribe("UPLOAD_START", handleMessage);
    let obj2 = closure_0(573);
    const subscription2 = closure_0(573).subscribe("CALL_CREATE", handleMessage);
    return () => {
      DispatcherDefault.unsubscribe("MESSAGE_CREATE", handleMessageCreate);
      DispatcherDefault.unsubscribe("UPLOAD_START", handleMessage);
      DispatcherDefault.unsubscribe("CALL_CREATE", handleMessage);
    };
  }, items);
}
