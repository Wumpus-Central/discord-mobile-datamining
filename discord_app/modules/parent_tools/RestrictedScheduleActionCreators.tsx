// discord_app/modules/parent_tools/RestrictedScheduleActionCreators.tsx
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_5 = async function _addRestrictedScheduleRule(arg0, body) {
  closure_0 = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    closure_3 = tmp2;
    closure_2 = tmp5;
    closure_130_0 = closure_0;
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: Endpoints.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULE(closure_0),
      body,
      rejectWithError: HTTPUtils.rejectWithMigratedError(),
    };
    await HTTP.post(request);
    const body2 = value.body;
    closure_131_1(closure_131_2[3]).dispatch({
      type: "USER_RESTRICTED_SCHEDULE_UPDATE",
      userId: closure_130_0,
      restrictedSchedule: body2,
    });
    return body2;
  })();
};
let closure_6 = async function _updateRestrictedScheduleRule(arg0, arg1, body) {
  closure_0 = arg0;
  closure_1 = arg1;
  c5 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    closure_4 = tmp2;
    closure_3 = tmp5;
    closure_131_0 = closure_0;
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: Endpoints.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULES(closure_0, closure_1),
      body,
      rejectWithError: HTTPUtils.rejectWithMigratedError(),
    };
    await HTTP.patch(request);
    const body2 = value.body;
    closure_132_1(closure_132_2[3]).dispatch({
      type: "USER_RESTRICTED_SCHEDULE_UPDATE",
      userId: closure_131_0,
      restrictedSchedule: body2,
    });
    return body2;
  })();
};
let closure_7 = async function _deleteRestrictedScheduleRule(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp2;
          closure_2 = tmp5;
          closure_130_0 = closure_0;
          let body;
          const HTTP = HTTPUtils.HTTP;
          const obj1 = {
            url: Endpoints.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULES(closure_0, closure_1),
            rejectWithError: HTTPUtils.rejectWithMigratedError(),
          };
          c4 = 1;
          c5 = 1;
          const obj2 = { value: HTTP.del(obj1), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        body = value.body;
        obj = closure_131_1(closure_131_2[3]);
        const obj4 = { type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: closure_130_0, restrictedSchedule: body };
        obj.dispatch(obj4);
        c5 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp13) {
      c5 = tmp;
      throw tmp13;
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/RestrictedScheduleActionCreators.tsx");

export const addRestrictedScheduleRule = function addRestrictedScheduleRule() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateRestrictedScheduleRule = function updateRestrictedScheduleRule() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteRestrictedScheduleRule = function deleteRestrictedScheduleRule() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
