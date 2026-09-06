// === Module 835: handleResponseError ===

// Module 835 (handleResponseError)
import getSpanStatusFromHttpCode from "getSpanStatusFromHttpCode" /* 705 */;
import captureCheckIn from "captureCheckIn" /* 734 */;
import _mod823 from "module_823" /* 823 */;
import buildMethodPath from "buildMethodPath" /* 825 */;
import _mod836 from "module_836" /* 836 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.handleResponseError = function handleResponseError(setStatus, error) {
  if (error.error) {
    let obj = { code: null, message: null };
    obj[0] = getSpanStatusFromHttpCode.SPAN_STATUS_ERROR;
    obj[1] = error.error.type || "internal_error";
    setStatus.setStatus(obj);
    obj = { mechanism: null };
    obj[0] = { handled: false, type: "auto.ai.anthropic.anthropic_error" };
    captureCheckIn.captureException(error.error, obj);
    const tmp2 = require;
    const tmp2Result = captureCheckIn;
  }
};
arg5.messagesFromParams = function messagesFromParams(closure_2) {
  ({ messages, input } = closure_2);
  if (typeof closure_2.system === "string") {
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
    obj[_mod823.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE] = buildMethodPath.getTruncatedJsonString(messagesFromParamsResult);
    obj[_mod823.GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = length;
    setAttributes.setAttributes(obj);
    const obj2 = buildMethodPath;
  }
};
arg5.shouldInstrument = function shouldInstrument(arg0) {
  const ANTHROPIC_AI_INSTRUMENTED_METHODS = _mod836.ANTHROPIC_AI_INSTRUMENTED_METHODS;
  return ANTHROPIC_AI_INSTRUMENTED_METHODS.includes(arg0);
};