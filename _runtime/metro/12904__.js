// _runtime/metro/12904__.js
import _mod12803 from "12803__.js";
import _mod12824 from "12824__.js";

require = arg1;
const dependencyMap = arg6;

export const captureFeedback = function captureFeedback(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let currentScope = arg2;
  if (arg2 === undefined) {
    currentScope = _mod12824.getCurrentScope();
  }
  obj = { contexts: null, type: "feedback", level: "info", tags: null };
  obj = {
    feedback: _mod12803.dropUndefinedKeys({
      contact_email: email,
      name,
      message,
      url,
      source,
      associated_event_id: associatedEventId,
    }),
  };
  ({ message, name, email, url, source, associatedEventId, tags } = arg0);
  obj.contexts = obj;
  obj.tags = tags;
  let client = currentScope;
  if (currentScope) {
    client = currentScope.getClient();
  }
  if (!client) {
    client = _mod12824.getClient();
    const tmp3Result = _mod12824;
  }
  if (client) {
    client.emit("beforeSendFeedback", obj, obj);
  }
  return currentScope.captureEvent(obj, obj);
};
