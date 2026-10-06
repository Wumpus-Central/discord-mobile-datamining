// === Module 11369: PollsHttpApi ===

// Module 11369 (PollsHttpApi)
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c5, c6, closure_3;

let obj = function _submitPollVote() {
  obj = _asyncToGenerator(async function(arg0) {
    let c0;
    let c1;
    let c2;
    let obj5;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let answer_ids;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            c0 = undefined;
            c1 = undefined;
            answer_ids = undefined;
            ({ channelId: c0, messageId: c1, answerIds: c2 } = closure_0);
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c4 = 1;
            const HTTP = closure_130_0(closure_130_1[2]).HTTP;
            const request = { url: closure_130_3.POLL_ANSWERS(c0, c1), body: obj5, rejectWithError: false };
            const put = HTTP.put;
            obj5 = { answer_ids };
            c5 = 3;
            c6 = 1;
            const obj6 = { value: put(request), done: false };
            return obj6;
          }
        } else if (2 === c5) {
          c4 = 0;
          const self2 = this;
          const self = this;
          const aPIError = new closure_130_0(closure_130_1[3]).APIError(closure_3);
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
          return { value: "IconComponent", done: null };
        }
      } catch (tmp15) {
        closure_3 = tmp15;
        if (0 === c4) {
          c6 = 3;
          throw tmp15;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _endPollEarly() {
  obj = _asyncToGenerator(async function(arg0) {
    let c0;
    let c1;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let closure_2;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp;
            c0 = undefined;
            c1 = undefined;
            ({ channelId: c0, messageId: c1 } = closure_0);
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else {
          let self;
          if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c4 = 1;
              const HTTP = closure_130_0(closure_130_1[2]).HTTP;
              const obj5 = { url: closure_130_3.POLL_EXPIRE(c0, c1), rejectWithError: false };
              const post = HTTP.post;
              self = post(obj5);
              c5 = 3;
              c6 = 1;
              const obj6 = { value: self, done: false };
              return obj6;
            }
          } else if (2 === c5) {
            c4 = 0;
            closure_2 = closure_3;
            self = this;
            const self2 = this;
            const aPIError = new closure_130_0(closure_130_1[3]).APIError(closure_2);
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
            return { value: "IconComponent", done: null };
          }
        }
      } catch (tmp22) {
        closure_3 = tmp22;
        if (0 === c4) {
          c6 = 3;
          throw tmp22;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/polls/PollsHttpApi.tsx");

export const submitPollVote = function submitPollVote() {
  return obj(...arguments);
};
export const endPollEarly = function endPollEarly() {
  return obj(...arguments);
};