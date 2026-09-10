// === Module 12974: ? ===

// Module 12974
import _mod12873 from "module_12873" /* 12873 */;
import _mod12894 from "module_12894" /* 12894 */;

require = arg1;
const dependencyMap = arg6;

export const captureFeedback = function captureFeedback(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let currentScope = arg2;
  if (arg2 === undefined) {
    currentScope = _mod12894.getCurrentScope();
  }
  obj = { contexts: null, type: "feedback", level: "info", tags: null };
  obj = { feedback: _mod12873.dropUndefinedKeys({ contact_email: email, name, message, url, source, associated_event_id: associatedEventId }) };
  ({ message, name, email, url, source, associatedEventId, tags } = arg0);
  obj.contexts = obj;
  obj.tags = tags;
  let client = currentScope;
  if (currentScope) {
    client = currentScope.getClient();
  }
  if (!client) {
    client = _mod12894.getClient();
    const tmp3Result = _mod12894;
  }
  if (client) {
    client.emit("beforeSendFeedback", obj, obj);
  }
  return currentScope.captureEvent(obj, obj);
};