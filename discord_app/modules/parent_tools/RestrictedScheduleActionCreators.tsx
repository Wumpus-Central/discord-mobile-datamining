// === Module 13986: _addRestrictedScheduleRule ===

// Module 13986 (_addRestrictedScheduleRule)
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
function _addRestrictedScheduleRule() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
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
              let asyncGeneratorStep = tmp2;
              const table = tmp5;
              body = undefined;
              const HTTP = callback(outer1_2[2]).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: null };
              obj1[0] = c4.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULE(callback);
              obj1[1] = body;
              obj1[2] = callback(outer1_2[2]).rejectWithMigratedError();
              c4 = 1;
              c5 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.post(obj1);
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
            const obj5 = { value: null, done: true };
            obj5[0] = body;
            return obj5;
          }
        } catch (tmp13) {
          c5 = tmp;
          throw tmp13;
        }
      }
    })();
  });
  const _addRestrictedScheduleRule = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (function*(arg0, body) {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let closure_4 = tmp2;
              let asyncGeneratorStep = tmp5;
              body = undefined;
              const HTTP = callback(530).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: null };
              obj1[0] = outer1_4.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULES(callback, body);
              obj1[1] = dependencyMap;
              obj1[2] = callback(530).rejectWithMigratedError();
              c5 = 1;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.patch(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw body;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            body = body.body;
            obj = body(709);
            const obj4 = { type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: null, restrictedSchedule: null };
            obj4[1] = callback;
            obj4[2] = body;
            obj.dispatch(obj4);
            c6 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = body;
            return obj5;
          }
        } catch (tmp13) {
          c6 = tmp;
          throw tmp13;
        }
      }
    })();
  });
  const _updateRestrictedScheduleRule = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
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
              let asyncGeneratorStep = tmp2;
              const table = tmp5;
              body = undefined;
              const HTTP = callback(outer1_2[2]).HTTP;
              const obj1 = { url: null, rejectWithError: null };
              obj1[0] = c4.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULES(callback, body);
              obj1[1] = callback(outer1_2[2]).rejectWithMigratedError();
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
  const _deleteRestrictedScheduleRule = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("sendRequest").fileFinishedImporting("modules/parent_tools/RestrictedScheduleActionCreators.tsx");

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