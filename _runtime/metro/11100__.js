// _runtime/metro/11100__.js
import _mod10999 from "10999__.js";
import _mod11020 from "11020__.js";

require = arg1;
const dependencyMap = arg6;

export const captureFeedback = function captureFeedback(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let currentScope = arg2;
  if (arg2 === undefined) {
    currentScope = _mod11020.getCurrentScope();
  }
  const obj2 = { contexts: null, type: "feedback", level: "info", tags: null };
  const obj4 = {
    feedback: _mod10999.dropUndefinedKeys({
      contact_email: email,
      name,
      message,
      url,
      source,
      associated_event_id: associatedEventId,
    }),
  };
  ({ message, name, email, url, source, associatedEventId, tags } = arg0);
  obj2.contexts = obj4;
  obj2.tags = tags;
  let client = currentScope;
  if (currentScope) {
    client = currentScope.getClient();
  }
  if (!client) {
    client = _mod11020.getClient();
    const tmp3Result = _mod11020;
  }
  if (client) {
    client.emit("beforeSendFeedback", obj2, obj);
  }
  return currentScope.captureEvent(obj2, obj);
};
