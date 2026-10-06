// === Module 14760: RestrictedScheduleActionCreators ===

// Module 14760 (RestrictedScheduleActionCreators)
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let obj = function _addRestrictedScheduleRule() {
  obj = _asyncToGenerator(async (userId, body) => {
    let closure_2;
    let closure_3;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj9;
      const HTTP = HTTPUtils.HTTP;
      const request = { url: Endpoints.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULE(userId), body, rejectWithError: obj9.rejectWithMigratedError() };
      const post = HTTP.post;
      obj9 = HTTPUtils;
      await post(request);
      body = value.body;
      const obj6 = { type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId, restrictedSchedule: body };
      obj = closure_131_1(closure_131_2[3]);
      obj.dispatch(obj6);
      return body;
    })();
  });
  return obj(...arguments);
};
obj = function _updateRestrictedScheduleRule() {
  obj = _asyncToGenerator(async (userId, arg1, body) => {
    let closure_3;
    let closure_4;
    let closure_1 = arg1;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let obj9;
      const HTTP = HTTPUtils.HTTP;
      const request = { url: Endpoints.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULES(userId, closure_1), body, rejectWithError: obj9.rejectWithMigratedError() };
      const patch = HTTP.patch;
      obj9 = HTTPUtils;
      await patch(request);
      body = value.body;
      const obj6 = { type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId, restrictedSchedule: body };
      obj = closure_132_1(closure_132_2[3]);
      obj.dispatch(obj6);
      return body;
    })();
  });
  return obj(...arguments);
};
obj = function _deleteRestrictedScheduleRule() {
  obj = _asyncToGenerator(async (userId, arg1) => {
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj8;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let body;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              body = undefined;
              const HTTP = HTTPUtils.HTTP;
              const del = HTTP.del;
              const obj4 = { url: Endpoints.FAMILY_CENTER_RESTRICTED_SCHEDULE_RULES(userId, closure_1), rejectWithError: obj8.rejectWithMigratedError() };
              c4 = 1;
              c5 = 1;
              obj8 = HTTPUtils;
              const obj5 = { value: del(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            body = value.body;
            const obj7 = { type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId, restrictedSchedule: body };
            obj = closure_131_1(closure_131_2[3]);
            obj.dispatch(obj7);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp12) {
          c5 = 3;
          throw tmp12;
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/parent_tools/RestrictedScheduleActionCreators.tsx");

export const addRestrictedScheduleRule = function addRestrictedScheduleRule() {
  return obj(...arguments);
};
export const updateRestrictedScheduleRule = function updateRestrictedScheduleRule() {
  return obj(...arguments);
};
export const deleteRestrictedScheduleRule = function deleteRestrictedScheduleRule() {
  return obj(...arguments);
};