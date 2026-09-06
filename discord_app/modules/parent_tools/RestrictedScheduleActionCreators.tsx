// === Module 14936: _addRestrictedScheduleRule ===

// Module 14936 (_addRestrictedScheduleRule)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 1074 */;

const require = arg1;
function _addRestrictedScheduleRule() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, body) {
      closure_3 = tmp2;
      const table = tmp5;
      const HTTP = callback(closure_1_2[2]).HTTP;
      obj1 = { url: null, body: null, rejectWithError: null };
      obj1[0] = c4.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULE(callback);
      obj1[1] = body;
      obj1[2] = callback(closure_1_2[2]).rejectWithMigratedError();
      yield HTTP.post(obj1);
      body = body.body;
      const obj = body(table[3]);
      const obj4 = { type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: null, restrictedSchedule: null };
      obj4[1] = callback;
      obj4[2] = body;
      obj.dispatch(obj4);
      return body;
    })();
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateRestrictedScheduleRule() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    return (function*(arg0, body) {
      closure_4 = tmp2;
      closure_3 = tmp5;
      const HTTP = callback(1272).HTTP;
      obj1 = { url: null, body: null, rejectWithError: null };
      obj1[0] = closure_1_4.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULES(callback, body);
      obj1[1] = dependencyMap;
      obj1[2] = callback(1272).rejectWithMigratedError();
      yield HTTP.patch(obj1);
      body = body.body;
      const obj = body(573);
      const obj4 = { type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: null, restrictedSchedule: null };
      obj4[1] = callback;
      obj4[2] = body;
      obj.dispatch(obj4);
      return body;
    })();
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _deleteRestrictedScheduleRule() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, body) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw body;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              closure_3 = tmp2;
              const table = tmp5;
              body = undefined;
              const HTTP = callback(closure_1_2[2]).HTTP;
              obj1 = { url: null, rejectWithError: null };
              obj1[0] = c4.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULES(callback, body);
              obj1[1] = callback(closure_1_2[2]).rejectWithMigratedError();
              c4 = 1;
              c5 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.del(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw body;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            body = body.body;
            obj = body(table[3]);
            const obj4 = { type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: null, restrictedSchedule: null };
            obj4[1] = callback;
            obj4[2] = body;
            obj.dispatch(obj4);
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp13) {
          c5 = tmp;
          throw tmp13;
        }
      }
    })();
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/parent_tools/RestrictedScheduleActionCreators.tsx");

export const addRestrictedScheduleRule = function addRestrictedScheduleRule(arg0, arg1) {
  const self = this;
  const apply = _addRestrictedScheduleRule.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateRestrictedScheduleRule = function updateRestrictedScheduleRule(arg0, ruleId, arg2) {
  const self = this;
  const apply = _updateRestrictedScheduleRule.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteRestrictedScheduleRule = function deleteRestrictedScheduleRule(c5, ruleId) {
  const self = this;
  const apply = _deleteRestrictedScheduleRule.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};