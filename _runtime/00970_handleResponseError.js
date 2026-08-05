// _runtime/00970_handleResponseError.js
import { getSpanStatusFromHttpCode } from "00840_getSpanStatusFromHttpCode.js";
import { captureCheckIn } from "00869_captureCheckIn.js";
import { buildMethodPath } from "00960_buildMethodPath.js";
import { 00958__ } from "metro/00958__.js";
import { 00971__ } from "metro/00971__.js";
const require = arg1;
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
  let input;
  let messages;
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
    obj[00958__.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE] = buildMethodPath.getTruncatedJsonString(messagesFromParamsResult);
    obj[00958__.GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = length;
    setAttributes.setAttributes(obj);
    const obj2 = buildMethodPath;
  }
};
arg5.shouldInstrument = function shouldInstrument(arg0) {
  const ANTHROPIC_AI_INSTRUMENTED_METHODS = 00971__.ANTHROPIC_AI_INSTRUMENTED_METHODS;
  return ANTHROPIC_AI_INSTRUMENTED_METHODS.includes(arg0);
};