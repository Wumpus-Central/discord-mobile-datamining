// === Module 12442: captureFeedback ===

// Module 12442 (captureFeedback)
import addNonEnumerableProperty from "addNonEnumerableProperty" /* 12341 */;
import getClient from "getClient" /* 12362 */;

require = arg1;
const dependencyMap = arg6;
arg5.captureFeedback = function captureFeedback(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let currentScope = arg2;
  if (arg2 === undefined) {
    currentScope = getClient.getCurrentScope();
    const obj3 = getClient;
  }
  obj = { contexts: null, type: "feedback", level: "info", tags: null };
  obj = { feedback: addNonEnumerableProperty.dropUndefinedKeys({ contact_email: email, name, message, url, source, associated_event_id: associatedEventId }) };
  ({ message, name, email, url, source, associatedEventId, tags } = arg0);
  obj[0] = obj;
  obj[3] = tags;
  let client = currentScope;
  if (currentScope) {
    client = currentScope.getClient();
  }
  if (!client) {
    client = getClient.getClient();
    const tmp3Result = getClient;
  }
  if (client) {
    client.emit("beforeSendFeedback", obj, obj);
  }
  return currentScope.captureEvent(obj, obj);
};