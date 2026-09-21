// discord_app/modules/vibegrations/native/useAckVibegrationsAppChannelChat.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import MessageStore from "../../../stores/MessageStore.tsx";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

const require = globalThis.__r;

const require = fn;
const Constants = fn(1074);
({
  AnalyticsObjects: closure_7,
  AnalyticsObjectTypes: closure_8,
  AnalyticsSections: closure_9,
  AppStates: c10,
} = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/useAckVibegrationsAppChannelChat.tsx");

export default function useAckVibegrationsAppChannelChat(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const items = [ReadStateStore];
  const items1 = [arg0];
  stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      let hasUnreadOrMentionsResult = null != closure_0;
      if (hasUnreadOrMentionsResult) {
        hasUnreadOrMentionsResult = ReadStateStore.hasUnreadOrMentions(tmp.id);
      }
      return hasUnreadOrMentionsResult;
    },
    items1,
  );
  let obj = require("initialize");
  const items2 = [stateFromStores2];
  const items3 = [arg0];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items2,
    () => {
      if (null == closure_0) {
        return false;
      } else {
        const messages = MessageStore.getMessages(tmp.id);
        return messages.ready && !messages.loadingMore;
      }
    },
    items3,
  );
  let obj2 = require("initialize");
  const items4 = [AppStateStore];
  stateFromStores2 = require("initialize").useStateFromStores(items4, () => state.getState() === constants.ACTIVE);
  const items5 = [arg0, arg1, stateFromStores, stateFromStores1, stateFromStores2];
  const effect = stateFromStores1.useEffect(() => {
    let tmp2 = null != id;
    if (tmp2) {
      tmp2 = closure_1;
    }
    if (tmp2) {
      tmp2 = stateFromStores;
    }
    if (tmp2) {
      tmp2 = stateFromStores1;
    }
    if (tmp2) {
      tmp2 = stateFromStores2;
    }
    if (tmp2) {
      const obj2 = { type: "TRY_ACK", channelId: id.id, location: null };
      const obj3 = {
        section: constants3.CHANNEL,
        object: constants.ACK_MESSAGE_VIEWED,
        objectType: constants2.ACK_AUTOMATIC,
      };
      obj2.location = obj3;
      DispatcherDefault.dispatch(obj2);
    }
  }, items5);
}
