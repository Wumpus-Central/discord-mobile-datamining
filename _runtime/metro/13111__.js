// === Module 13111: ? ===

// Module 13111
import _mod13010 from "module_13010" /* 13010 */;
import _mod13031 from "module_13031" /* 13031 */;

require = arg1;
const dependencyMap = arg6;

export function captureFeedback(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let currentScope = arg2;
  if (arg2 === undefined) {
    currentScope = _mod13031.getCurrentScope();
  }
  const obj2 = { contexts: null, type: "feedback", level: "info", tags: null };
  const obj4 = { feedback: _mod13010.dropUndefinedKeys({ contact_email: email, name, message, url, source, associated_event_id: associatedEventId }) };
  ({ message, name, email, url, source, associatedEventId, tags } = arg0);
  obj2.contexts = obj4;
  obj2.tags = tags;
  let client = currentScope;
  if (currentScope) {
    client = currentScope.getClient();
  }
  if (!client) {
    client = _mod13031.getClient();
    const tmp3Result = _mod13031;
  }
  if (client) {
    client.emit("beforeSendFeedback", obj2, obj);
  }
  return currentScope.captureEvent(obj2, obj);
}