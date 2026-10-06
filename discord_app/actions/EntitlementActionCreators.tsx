// === Module 6915: EntitlementActionCreators ===

// Module 6915 (EntitlementActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj = function _fetchUserEntitlements() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_1;
    let closure_2;
    let closure_3;
    const withSku = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (async (arg0) => {
      let entitlementType;
      let obj6;
      const obj9 = closure_130_1(closure_130_2[2]);
      obj9.dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_START" });
      const HTTP = closure_130_0(closure_130_2[3]).HTTP;
      const request = { url: closure_130_4.ENTITLEMENTS_FOR_USER, query: obj6, rejectWithError: true };
      obj6 = { with_sku: flag, with_application: flag2, entitlement_type: entitlementType, exclude_ended: flag3 };
      await HTTP.get(request);
      if (2 === c5) {
        let c4 = 0;
        const obj4 = closure_130_1(closure_130_2[2]);
        obj4.dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL" });
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        return { value, done: true };
      } else {
        body = value;
        const obj10 = { type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS", entitlements: body.body, excludeEnded: flag3 };
        obj = closure_130_1(closure_130_2[2]);
        obj.dispatch(obj10);
        c4 = 0;
      }
      await "IconComponent";
      entitlementType = withSku.entitlementType;
      return "Reflect";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _fetchGiftableEntitlements() {
  obj = _asyncToGenerator(async () => {
    let obj9;
    if (c5 === 2) {
      c5 = 3;
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
      let c3;
      try {
        let body;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            body = undefined;
            const obj8 = DispatcherDefault;
            obj8.dispatch({ type: "ENTITLEMENTS_GIFTABLE_FETCH" });
            c3 = 1;
            const obj5 = { url: constants.ENTITLEMENTS_GIFTABLE, rejectWithError: true };
            c4 = 2;
            c5 = 1;
            const obj6 = { value: obj9.httpGetWithCountryCodeQuery(obj5), done: false };
            obj9 = require("StoreUtils");
            return obj6;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            const obj4 = closure_129_1(closure_129_2[2]);
            obj4.dispatch({ type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL" });
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            body = value;
            const obj10 = { type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS", entitlements: body.body };
            obj = closure_129_1(closure_129_2[2]);
            obj.dispatch(obj10);
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp16) {
        let closure_2 = tmp16;
        if (0 === c3) {
          c5 = 3;
          throw tmp16;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/EntitlementActionCreators.tsx");

export const fetchUserEntitlementsForApplication = function fetchUserEntitlementsForApplication(id, arg1) {
  let applicationId;
  _require = id;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  obj = DispatcherDefault;
  obj.wait(() => {
    obj = DispatcherDefault;
    const obj2 = { type: "ENTITLEMENT_FETCH_APPLICATION_START", applicationId };
    obj.dispatch(obj2);
  });
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: Endpoints.ENTITLEMENTS_FOR_APPLICATION(id), oldFormErrors: true, query: { exclude_consumed: flag }, rejectWithError: true };
  const value = HTTP.get(request);
  const nextPromise = value.then((body) => {
    obj = DispatcherDefault;
    const obj2 = { type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS", applicationId, entitlements: body.body };
    obj.dispatch(obj2);
    return body.body;
  });
  return nextPromise.catch(() => {
    obj = DispatcherDefault;
    const obj2 = { type: "ENTITLEMENT_FETCH_APPLICATION_FAIL", applicationId };
    obj.dispatch(obj2);
  });
};
export const fetchUserEntitlements = function fetchUserEntitlements() {
  return obj(...arguments);
};
export const fetchGiftableEntitlements = function fetchGiftableEntitlements() {
  return obj(...arguments);
};