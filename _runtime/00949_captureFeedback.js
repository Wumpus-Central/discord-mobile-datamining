// === Module 949: captureFeedback ===

// Module 949 (captureFeedback)
import getClient from "getClient" /* 848 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.captureFeedback = function captureFeedback(tags) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let currentScope = arg2;
  if (arg2 === undefined) {
    currentScope = getClient.getCurrentScope();
  }
  obj = { contact_email: tags.email, name: tags.name, message: tags.message, url: tags.url, source: tags.source, associated_event_id: tags.associatedEventId };
  let client;
  if (currentScope != null) {
    client = currentScope.getClient();
  }
  if (!client) {
    client = getClient.getClient();
  }
  if (client) {
    client.emit("beforeSendFeedback", obj, obj);
  }
  return currentScope.captureEvent(obj, obj);
};