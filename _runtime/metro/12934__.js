// === Module 12934: ? ===

// Module 12934
import _mod12833 from "module_12833" /* 12833 */;
import _mod12854 from "module_12854" /* 12854 */;

require = arg1;
const dependencyMap = arg6;

export const captureFeedback = function captureFeedback(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let currentScope = arg2;
  if (arg2 === undefined) {
    currentScope = _mod12854.getCurrentScope();
  }
  obj = { contexts: null, type: "feedback", level: "info", tags: null };
  obj = { feedback: _mod12833.dropUndefinedKeys({ contact_email: email, name, message, url, source, associated_event_id: associatedEventId }) };
  ({ message, name, email, url, source, associatedEventId, tags } = arg0);
  obj.contexts = obj;
  obj.tags = tags;
  let client = currentScope;
  if (currentScope) {
    client = currentScope.getClient();
  }
  if (!client) {
    client = _mod12854.getClient();
    const tmp3Result = _mod12854;
  }
  if (client) {
    client.emit("beforeSendFeedback", obj, obj);
  }
  return currentScope.captureEvent(obj, obj);
};