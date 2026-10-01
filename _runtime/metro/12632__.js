// === Module 12632: ? ===

// Module 12632
import _mod12531 from "module_12531" /* 12531 */;
import _mod12552 from "module_12552" /* 12552 */;

require = arg1;
const dependencyMap = arg6;

export const captureFeedback = function captureFeedback(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let currentScope = arg2;
  if (arg2 === undefined) {
    currentScope = _mod12552.getCurrentScope();
  }
  const obj2 = { contexts: null, type: "feedback", level: "info", tags: null };
  const obj4 = { feedback: _mod12531.dropUndefinedKeys({ contact_email: email, name, message, url, source, associated_event_id: associatedEventId }) };
  ({ message, name, email, url, source, associatedEventId, tags } = arg0);
  obj2.contexts = obj4;
  obj2.tags = tags;
  let client = currentScope;
  if (currentScope) {
    client = currentScope.getClient();
  }
  if (!client) {
    client = _mod12552.getClient();
    const tmp3Result = _mod12552;
  }
  if (client) {
    client.emit("beforeSendFeedback", obj2, obj);
  }
  return currentScope.captureEvent(obj2, obj);
};