// discord_app/modules/vibegrations/lib/useVibegrationsChatToastMessages.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import DurationsDefault from "../../../utils/Durations.tsx";
import MessageRecordUtils from "../../messages/MessageRecordUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import CallChatToastsStore from "../../../stores/CallChatToastsStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";

const require = globalThis.__r;

require = fn;
const result = 10 * DurationsDefault.Millis.SECOND;
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsChatToastMessages.tsx");

export default function useVibegrationsChatToastMessages(arg0, arg1) {
  _require = arg0;
  let stateFromStores = arg1;
  let items = [CallChatToastsStore];
  const items1 = [arg0];
  if (arg1) {
    stateFromStores = obj.useStateFromStores(items, () => CallChatToastsStore.getToastsEnabled(closure_0), items1);
  }
  [first, _slicedToArray] = noop.useState([]);
  const items2 = [stateFromStores, arg0];
  const effect = noop.useEffect(() => {
    function handleMessageCreate(channelId) {
      let timeout;
      if (channelId.channelId === timeout) {
        if (!channelId.optimistic) {
          const _clearTimeout = clearTimeout;
          clearTimeout(timeout);
          const _setTimeout = setTimeout;
          setTimeout(() => closure_1_3([]), result);
          timeout = MessageRecordUtils.createMessageRecord(tmp);
          closure_3((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
            return items.slice(-3);
          });
        }
      }
    }
    if (handleMessageCreate) {
      const subscription = stateFromStores(first[7]).subscribe("MESSAGE_CREATE", handleMessageCreate);
      return () => {
        DispatcherDefault.unsubscribe("MESSAGE_CREATE", handleMessageCreate);
        clearTimeout(closure_0);
        closure_3([]);
      };
    }
  }, items2);
  obj = require("initialize");
  const items3 = [MessageStore];
  const items4 = [arg0, first];
  return require("initialize").useStateFromStoresArray(
    items3,
    () =>
      first.map((id) => {
        message = message.getMessage(closure_1_0, id.id);
        if (message == null) {
          message = id;
        }
        return message;
      }),
    items4,
  );
}
export const VIBEGRATIONS_CHAT_TOAST_LINGER_MS = result;
export const VIBEGRATIONS_CHAT_TOAST_MAX = 3;
