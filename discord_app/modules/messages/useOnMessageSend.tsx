// discord_app/modules/messages/useOnMessageSend.tsx
import noop from "noop";
import { MessageStates } from "ME";

const result = require("dispatcher").fileFinishedImporting("modules/messages/useOnMessageSend.tsx");

export default function useOnMessageSend(arg0) {
  let closure_0 = arg0;
  const dependencyMap = tmp;
  const items = [arg0, arg1];
  const effect = React.useEffect(() => {
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
        optimistic = optimistic.message.state === outer1_3.SENDING;
      }
      if (optimistic) {
        if (!tmp3) {
          handleMessage();
        }
        tmp3 = undefined !== handleMessageCreate && optimistic.channelId !== tmp2;
      }
    }
    const subscription = callback(tmp[2]).subscribe("MESSAGE_CREATE", handleMessageCreate);
    let obj = callback(tmp[2]);
    const subscription1 = callback(tmp[2]).subscribe("UPLOAD_START", handleMessage);
    let obj2 = callback(tmp[2]);
    const subscription2 = callback(tmp[2]).subscribe("CALL_CREATE", handleMessage);
    return () => {
      handleMessage(handleMessageCreate[2]).unsubscribe("MESSAGE_CREATE", handleMessageCreate);
      const obj = handleMessage(handleMessageCreate[2]);
      handleMessage(handleMessageCreate[2]).unsubscribe("UPLOAD_START", handleMessage);
      const obj2 = handleMessage(handleMessageCreate[2]);
      handleMessage(handleMessageCreate[2]).unsubscribe("CALL_CREATE", handleMessage);
    };
  }, items);
};