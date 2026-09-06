// === Module 11726: PollsHttpApi ===

// Module 11726 (PollsHttpApi)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_4 = async function _submitPollVote(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp5;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          ({ channelId: closure_129_0, messageId: closure_129_1, answerIds: closure_129_2 } = closure_0);
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp8) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          c4 = 1;
          const HTTP = closure_130_0(closure_130_1[2]).HTTP;
          const request = { url: closure_130_3.POLL_ANSWERS(closure_129_0, closure_129_1), body: null, rejectWithError: false };
          const obj2 = { answer_ids: closure_129_2 };
          request.body = obj2;
          c5 = 3;
          c6 = 1;
          const obj3 = { value: HTTP.put(request), done: false };
          return obj3;
        }
      } else if (2 === tmp8) {
        c4 = 0;
        closure_129_3 = closure_3;
        const aPIError = new closure_130_0(closure_130_1[3]).APIError(closure_129_3);
        throw aPIError;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c4 = 0;
        c6 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp21) {
      closure_3 = tmp21;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp21;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_5 = async function _endPollEarly(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp5;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          ({ channelId: closure_129_0, messageId: closure_129_1 } = closure_0);
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp8) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          c4 = 1;
          const HTTP = closure_130_0(closure_130_1[2]).HTTP;
          const obj2 = { url: closure_130_3.POLL_EXPIRE(closure_129_0, closure_129_1), rejectWithError: false };
          c5 = 3;
          c6 = 1;
          const obj3 = { value: HTTP.post(obj2), done: false };
          return obj3;
        }
      } else if (2 === tmp8) {
        c4 = 0;
        closure_129_2 = closure_3;
        const aPIError = new closure_130_0(closure_130_1[3]).APIError(closure_129_2);
        throw aPIError;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c4 = 0;
        c6 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp28) {
      closure_3 = tmp28;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp28;
      } else {
        c5 = tmp;
      }
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/PollsHttpApi.tsx");

export const submitPollVote = function submitPollVote() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const endPollEarly = function endPollEarly() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};