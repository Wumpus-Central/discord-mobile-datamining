// _runtime/00970_handleResponseError.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.handleResponseError = function handleResponseError(setStatus, error) {
  if (error.error) {
    let obj = { code: null, message: null };
    obj[0] = require(840) /* getSpanStatusFromHttpCode */.SPAN_STATUS_ERROR;
    obj[1] = error.error.type || "internal_error";
    setStatus.setStatus(obj);
    obj = { mechanism: null };
    obj[0] = { handled: false, type: "auto.ai.anthropic.anthropic_error" };
    require(869) /* captureCheckIn */.captureException(error.error, obj);
    const tmp2 = require;
    const tmp2Result = require(869) /* captureCheckIn */;
  }
};
arg5.messagesFromParams = function messagesFromParams(closure_2) {
  let input;
  let messages;
  ({ messages, input } = closure_2);
  if (typeof closure_2.system === "y") {
    const obj = { role: "system", content: null };
    obj[1] = closure_2.system;
    const items = [obj];
    let items1 = items;
  } else {
    items1 = [];
  }
  let tmp = input;
  if (!Array.isArray(input)) {
    let tmp3;
    if (null != input) {
      const items2 = [input];
      tmp3 = items2;
    }
    tmp = tmp3;
  }
  if (Array.isArray(messages)) {
    const items3 = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(items1, 0);
    if (tmp == null) {
      tmp = messages;
    }
    arraySpreadResult = HermesBuiltin.arraySpread(tmp, arraySpreadResult);
    return items3;
  } else if (null != messages) {
    const items4 = [messages];
    let items5 = items4;
  } else {
    items5 = [];
  }
};
arg5.setMessagesAttribute = function setMessagesAttribute(setAttributes, messagesFromParamsResult) {
  let length;
  if (Array.isArray(messagesFromParamsResult)) {
    length = messagesFromParamsResult.length;
  }
  if (0 !== length) {
    const obj = {};
    obj[require(958).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE] = require(960) /* buildMethodPath */.getTruncatedJsonString(messagesFromParamsResult);
    obj[require(958).GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = length;
    setAttributes.setAttributes(obj);
    const obj2 = require(960) /* buildMethodPath */;
  }
};
arg5.shouldInstrument = function shouldInstrument(arg0) {
  const ANTHROPIC_AI_INSTRUMENTED_METHODS = require(971).ANTHROPIC_AI_INSTRUMENTED_METHODS;
  return ANTHROPIC_AI_INSTRUMENTED_METHODS.includes(arg0);
};