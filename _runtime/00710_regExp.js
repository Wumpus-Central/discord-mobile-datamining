// _runtime/00710_regExp.js
import CONSOLE_LEVELS from "00700_CONSOLE_LEVELS.js";
import generateSpanId from "00705_generateSpanId.js";
import safeDateNow from "00707_safeDateNow.js";
import MAX_BAGGAGE_STRING_LENGTH from "00711_MAX_BAGGAGE_STRING_LENGTH.js";
import _mod712 from "metro/00712__.js";
import _mod713 from "metro/00713__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const regExp = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

export const TRACEPARENT_REGEXP = regExp;
export const extractTraceparentData = function extractTraceparentData(str) {
  const tmp = str;
  if (tmp) {
    const match = str.match(regExp);
    if (match) {
      let flag = true;
      if ("1" !== match[3]) {
        if ("0" === match[3]) {
          flag = false;
        }
      }
      return { traceId: match[1], parentSampled: flag, parentSpanId: match[2] };
    }
  }
};
export const generateSentryTraceHeader = function generateSentryTraceHeader() {
  let traceId;
  if (traceId === undefined) {
    const obj = generateSpanId;
    traceId = obj.generateTraceId();
  }
  let spanId = propagationSpanId;
  if (propagationSpanId === undefined) {
    const obj2 = generateSpanId;
    spanId = obj2.generateSpanId();
  }
  let str = "";
  if (undefined !== sampled) {
    let str2 = "-0";
    if (sampled) {
      str2 = "-1";
    }
    str = str2;
  }
  return "" + traceId + "-" + spanId + str;
};
export const generateTraceparentHeader = function generateTraceparentHeader() {
  let traceId;
  if (traceId === undefined) {
    const obj = generateSpanId;
    traceId = obj.generateTraceId();
  }
  let spanId = propagationSpanId2;
  if (propagationSpanId2 === undefined) {
    const obj2 = generateSpanId;
    spanId = obj2.generateSpanId();
  }
  let str = "00";
  const tmp7 = sampled2;
  if (tmp7) {
    str = "01";
  }
  return "00-" + traceId + "-" + spanId + "-" + str;
};
export const propagationContextFromHeaders = function propagationContextFromHeaders(dependencyMap, baggage) {
  let tmp4Result10;
  let tmp4Result9;
  let tmp;
  if (dependencyMap) {
    const match = dependencyMap.match(regExp);
    if (match) {
      let flag = true;
      if ("1" !== match[3]) {
        if ("0" === match[3]) {
          flag = false;
        }
      }
      tmp = { traceId: match[1], parentSampled: flag, parentSpanId: match[2] };
      const obj = { traceId: match[1], parentSampled: flag, parentSpanId: match[2] };
    }
  }
  const obj2 = MAX_BAGGAGE_STRING_LENGTH;
  let result = obj2.baggageHeaderToDynamicSamplingContext(baggage);
  let traceId;
  if (tmp != null) {
    traceId = tmp.traceId;
  }
  if (traceId) {
    let sample_rand;
    const parseSampleRate = _mod712.parseSampleRate;
    _mod712;
    if (result != null) {
      sample_rand = result.sample_rand;
    }
    let str3 = parseSampleRate(sample_rand);
    if (undefined === str3) {
      let sample_rate;
      const parseSampleRate2 = _mod712.parseSampleRate;
      _mod712;
      if (result != null) {
        sample_rate = result.sample_rate;
      }
      const parseSampleRate2Result = parseSampleRate2(sample_rate);
      if (parseSampleRate2Result) {
        let safeMathRandomResult1;
        let parentSampled1;
        if (tmp != null) {
          parentSampled1 = tmp.parentSampled;
        }
        if (undefined !== parentSampled1) {
          let result1;
          const parentSampled = tmp.parentSampled;
          const tmp4Result7 = safeDateNow;
          const safeMathRandomResult = tmp4Result7.safeMathRandom();
          if (parentSampled) {
            result1 = safeMathRandomResult * parseSampleRate2Result;
          } else {
            result1 = parseSampleRate2Result + safeMathRandomResult * (1 - parseSampleRate2Result);
          }
          safeMathRandomResult1 = result1;
        }
        str3 = safeMathRandomResult1;
      }
      const tmp4Result8 = safeDateNow;
      safeMathRandomResult1 = tmp4Result8.safeMathRandom();
    }
    if (result) {
      result.sample_rand = str3.toString();
    }
    const obj3 = { traceId: null, parentSpanId: null, sampled: null, dsc: result, sampleRand: str3 };
    ({ traceId: obj9.traceId, parentSpanId: obj9.parentSpanId, parentSampled: obj9.sampled } = tmp);
    if (!result) {
      result = {};
    }
    return obj3;
  } else {
    const obj4 = { traceId: tmp4Result9.generateTraceId(), sampleRand: tmp4Result10.safeMathRandom() };
    tmp4Result9 = generateSpanId;
    tmp4Result10 = safeDateNow;
    return obj4;
  }
};
export const shouldContinueTrace = function shouldContinueTrace(client, org_id) {
  let flag;
  const obj = _mod713;
  const result = obj.extractOrgIdFromClient(client);
  if (org_id) {
    if (result) {
      if (org_id !== result) {
        const debug2 = CONSOLE_LEVELS.debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log(
          "Won't continue trace because org IDs don't match (incoming baggage: " +
            org_id +
            ", SDK options: " +
            result +
            ")",
        );
        flag = false;
      }
      return flag;
    }
  }
  const tmp4 = client.getOptions().strictTraceContinuation || false;
  flag = !tmp4;
  if (tmp4) {
    let tmp5 = org_id && !result;
    if (!tmp5) {
      tmp5 = !org_id && result;
    }
    flag = !tmp5;
  }
  if (!flag) {
    const debug = CONSOLE_LEVELS.debug;
    const _HermesInternal = HermesInternal;
    debug.log(
      "Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: " +
        org_id +
        ", Sentry client: " +
        result +
        ")",
    );
    flag = false;
  }
};
