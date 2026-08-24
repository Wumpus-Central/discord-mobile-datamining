// === Module 15973: useOnMessageSend ===

// Module 15973 (useOnMessageSend)
import closure_2 from "noop" /* 19 */;
import { MessageStates } from "ME" /* 676 */;

const result = require("set").fileFinishedImporting("modules/messages/useOnMessageSend.tsx");

export default function useOnMessageSend(arg0) {
  closure_0 = arg0;
  closure_1 = tmp;
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
        optimistic = optimistic.message.state === closure_1_3.SENDING;
      }
      if (optimistic) {
        if (!tmp3) {
          handleMessage();
        }
        tmp3 = undefined !== handleMessageCreate && optimistic.channelId !== tmp2;
      }
    }
    const subscription = callback(709).subscribe("MESSAGE_CREATE", handleMessageCreate);
    let obj = callback(709);
    const subscription1 = callback(709).subscribe("UPLOAD_START", handleMessage);
    let obj2 = callback(709);
    const subscription2 = callback(709).subscribe("CALL_CREATE", handleMessage);
    return () => {
      handleMessage(handleMessageCreate[2]).unsubscribe("MESSAGE_CREATE", handleMessageCreate);
      const obj = handleMessage(handleMessageCreate[2]);
      handleMessage(handleMessageCreate[2]).unsubscribe("UPLOAD_START", handleMessage);
      const obj2 = handleMessage(handleMessageCreate[2]);
      handleMessage(handleMessageCreate[2]).unsubscribe("CALL_CREATE", handleMessage);
    };
  }, items);
};