// === Module 825: captureFeedback ===

// Module 825 (captureFeedback)
import _mod724 from "module_724" /* 724 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const captureFeedback = function captureFeedback(contact_email) {
  let obj4;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let currentScope = arg2;
  if (arg2 === undefined) {
    const obj3 = _mod724;
    currentScope = obj3.getCurrentScope();
  }
  const obj2 = { contexts: obj4, type: "feedback", level: "info", tags: contact_email.tags };
  let client;
  obj4 = { feedback: { contact_email: contact_email.email, name: contact_email.name, message: contact_email.message, url: contact_email.url, source: contact_email.source, associated_event_id: contact_email.associatedEventId } };
  if (currentScope != null) {
    client = currentScope.getClient();
  }
  if (!client) {
    const obj6 = _mod724;
    client = obj6.getClient();
  }
  if (client) {
    client.emit("beforeSendFeedback", obj2, obj);
  }
  return currentScope.captureEvent(obj2, obj);
};