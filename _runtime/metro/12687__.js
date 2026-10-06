// _runtime/metro/12687__.js
import _mod12586 from "12586__.js";
import _mod12607 from "12607__.js";

export const captureFeedback = function captureFeedback(arg0) {
  let associatedEventId;
  let email;
  let message;
  let name;
  let obj4;
  let obj6;
  let source;
  let tags;
  let url;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let currentScope = arg2;
  if (arg2 === undefined) {
    const obj3 = _mod12607;
    currentScope = obj3.getCurrentScope();
  }
  const obj2 = { contexts: obj4, type: "feedback", level: "info", tags };
  obj4 = {
    feedback: obj6.dropUndefinedKeys({
      contact_email: email,
      name,
      message,
      url,
      source,
      associated_event_id: associatedEventId,
    }),
  };
  ({ message, name, email, url, source, associatedEventId, tags } = arg0);
  obj6 = _mod12586;
  let client = currentScope && currentScope.getClient();
  if (!client) {
    const tmp3Result = _mod12607;
    client = tmp3Result.getClient();
  }
  if (client) {
    client.emit("beforeSendFeedback", obj2, obj);
  }
  return currentScope.captureEvent(obj2, obj);
};
