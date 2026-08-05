// _runtime/07482_captureFeedback.js
const require = arg1;
const dependencyMap = arg6;
arg5.captureFeedback = function captureFeedback(arg0) {
  let associatedEventId;
  let email;
  let message;
  let name;
  let source;
  let tags;
  let url;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let currentScope = arg2;
  if (arg2 === undefined) {
    currentScope = require("07402_getClient.js") /* getClient */.getCurrentScope();
    const obj3 = require("07402_getClient.js") /* getClient */;
  }
  obj = { contexts: null, type: "feedback", level: "info", tags: null };
  obj = { feedback: null };
  ({ message, name, email, url, source, associatedEventId, tags } = arg0);
  obj[0] = require("07381_addNonEnumerableProperty.js") /* addNonEnumerableProperty */.dropUndefinedKeys({ contact_email: email, name, message, url, source, associated_event_id: associatedEventId });
  obj[0] = obj;
  obj[3] = tags;
  let client = currentScope;
  if (currentScope) {
    client = currentScope.getClient();
  }
  if (!client) {
    client = require("07402_getClient.js") /* getClient */.getClient();
    const tmp3Result = require("07402_getClient.js") /* getClient */;
  }
  if (client) {
    client.emit("beforeSendFeedback", obj, obj);
  }
  return currentScope.captureEvent(obj, obj);
};