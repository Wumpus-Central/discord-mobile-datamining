// _runtime/00949_captureFeedback.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.captureFeedback = function captureFeedback(tags) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let currentScope = arg2;
  if (arg2 === undefined) {
    currentScope = require(848) /* getClient */.getCurrentScope();
    const obj3 = require(848) /* getClient */;
  }
  obj = { contexts: { feedback: obj }, type: "feedback", level: "info", tags: tags.tags };
  obj = { contact_email: tags.email, name: tags.name, message: tags.message, url: tags.url, source: tags.source, associated_event_id: tags.associatedEventId };
  let client;
  if (currentScope != null) {
    client = currentScope.getClient();
  }
  if (!client) {
    client = require(848) /* getClient */.getClient();
    const obj6 = require(848) /* getClient */;
  }
  if (client) {
    client.emit("beforeSendFeedback", obj, obj);
  }
  return currentScope.captureEvent(obj, obj);
};