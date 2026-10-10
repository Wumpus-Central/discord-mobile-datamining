// === Module 11315: ? ===

// Module 11315
import _mod11214 from "module_11214" /* 11214 */;
import _mod11235 from "module_11235" /* 11235 */;

require = arg1;
const dependencyMap = arg6;

export const captureFeedback = function captureFeedback(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let currentScope = arg2;
  if (arg2 === undefined) {
    currentScope = _mod11235.getCurrentScope();
  }
  const obj2 = { contexts: null, type: "feedback", level: "info", tags: null };
  const obj4 = { feedback: _mod11214.dropUndefinedKeys({ contact_email: email, name, message, url, source, associated_event_id: associatedEventId }) };
  ({ message, name, email, url, source, associatedEventId, tags } = arg0);
  obj2.contexts = obj4;
  obj2.tags = tags;
  let client = currentScope;
  if (currentScope) {
    client = currentScope.getClient();
  }
  if (!client) {
    client = _mod11235.getClient();
    const tmp3Result = _mod11235;
  }
  if (client) {
    client.emit("beforeSendFeedback", obj2, obj);
  }
  return currentScope.captureEvent(obj2, obj);
};