// discord_app/modules/message_request/hooks/useIsEmptyMessageRequestChat.tsx
import MessageStore from "../../../stores/MessageStore.tsx";

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useIsEmptyMessageRequestChat.tsx");

export function isEmptyLoadedChat(messages) {
  let ready = messages.ready;
  if (ready) {
    ready = 0 === messages.length;
  }
  if (ready) {
    ready = !messages.hasMoreBefore;
  }
  if (ready) {
    ready = !messages.hasMoreAfter;
  }
  return ready;
}
export function useIsEmptyChat(arg0) {
  _require = arg0;
  const items = [MessageStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const messages = MessageStore.getMessages(closure_0);
      let ready = messages.ready;
      if (ready) {
        ready = 0 === messages.length;
      }
      if (ready) {
        ready = !messages.hasMoreBefore;
      }
      if (ready) {
        ready = !messages.hasMoreAfter;
      }
      return ready;
    },
    items1,
  );
}
export function useIsEmptyMessageRequestChat(id) {
  let isEitherTypeOfMessageRequest = require("useIsMessageRequest").useIsEitherTypeOfMessageRequest(id);
  _require = id;
  const obj = require("useIsMessageRequest");
  const items = [MessageStore];
  const items1 = [id];
  if (isEitherTypeOfMessageRequest) {
    isEitherTypeOfMessageRequest = obj2.useStateFromStores(
      items,
      () => {
        const messages = MessageStore.getMessages(closure_0);
        let ready = messages.ready;
        if (ready) {
          ready = 0 === messages.length;
        }
        if (ready) {
          ready = !messages.hasMoreBefore;
        }
        if (ready) {
          ready = !messages.hasMoreAfter;
        }
        return ready;
      },
      items1,
    );
  }
  return isEitherTypeOfMessageRequest;
}
