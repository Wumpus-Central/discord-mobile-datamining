// === Module 12696: ? ===

// Module 12696
import _mod12595 from "module_12595" /* 12595 */;
import _mod12616 from "module_12616" /* 12616 */;

require = arg1;
const dependencyMap = arg6;

export const captureFeedback = function captureFeedback(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let currentScope = arg2;
  if (arg2 === undefined) {
    currentScope = _mod12616.getCurrentScope();
  }
  const obj2 = { contexts: null, type: "feedback", level: "info", tags: null };
  const obj4 = { feedback: _mod12595.dropUndefinedKeys({ contact_email: email, name, message, url, source, associated_event_id: associatedEventId }) };
  ({ message, name, email, url, source, associatedEventId, tags } = arg0);
  obj2.contexts = obj4;
  obj2.tags = tags;
  let client = currentScope;
  if (currentScope) {
    client = currentScope.getClient();
  }
  if (!client) {
    client = _mod12616.getClient();
    const tmp3Result = _mod12616;
  }
  if (client) {
    client.emit("beforeSendFeedback", obj2, obj);
  }
  return currentScope.captureEvent(obj2, obj);
};