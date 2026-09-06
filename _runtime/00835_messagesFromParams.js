// _runtime/00835_messagesFromParams.js
import SPAN_STATUS_ERROR from "00705_SPAN_STATUS_ERROR.js";
import captureCheckIn from "00734_captureCheckIn.js";
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "00823_ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.js";
import _mod825 from "metro/00825__.js";
import ANTHROPIC_AI_INSTRUMENTED_METHODS2 from "00836_ANTHROPIC_AI_INSTRUMENTED_METHODS.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const handleResponseError = function handleResponseError(setStatus, error) {
  if (error.error) {
    let obj = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: error.error.type || "internal_error" };
    setStatus.setStatus(obj);
    obj = { mechanism: { handled: false, type: "auto.ai.anthropic.anthropic_error" } };
    captureCheckIn.captureException(error.error, obj);
    const tmp2Result = captureCheckIn;
  }
};
export const messagesFromParams = function messagesFromParams(system) {
  ({ messages, input } = system);
  if (typeof system.system === "string") {
    const obj = { role: "system", content: system.system };
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
export const setMessagesAttribute = function setMessagesAttribute(setAttributes, messagesFromParamsResult) {
  let length;
  if (Array.isArray(messagesFromParamsResult)) {
    length = messagesFromParamsResult.length;
  }
  if (0 !== length) {
    const obj = {};
    obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE] =
      _mod825.getTruncatedJsonString(messagesFromParamsResult);
    obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = length;
    setAttributes.setAttributes(obj);
  }
};
export const shouldInstrument = function shouldInstrument(arg0) {
  const ANTHROPIC_AI_INSTRUMENTED_METHODS = ANTHROPIC_AI_INSTRUMENTED_METHODS2.ANTHROPIC_AI_INSTRUMENTED_METHODS;
  return ANTHROPIC_AI_INSTRUMENTED_METHODS.includes(arg0);
};
