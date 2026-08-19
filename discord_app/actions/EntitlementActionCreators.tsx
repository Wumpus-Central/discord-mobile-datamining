// === Module 5358: _fetchUserEntitlements ===

// Module 5358 (_fetchUserEntitlements)
import dispatcherDefault from "dispatcher" /* 709 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 676 */;

const require = fn;
function _fetchUserEntitlements() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let flag3 = tmp3;
              let flag2 = tmp7;
              let flag;
              flag2 = undefined;
              flag3 = undefined;
              let entitlementType;
              flag = flag.withSku;
              if (flag === undefined) {
                flag = false;
              }
              flag2 = tmp41.withApplication;
              if (flag2 === undefined) {
                flag2 = false;
              }
              flag3 = tmp41.excludeEnded;
              if (flag3 === undefined) {
                flag3 = true;
              }
              entitlementType = tmp41.entitlementType;
              c4 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              flag2(flag3[2]).dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_START" });
              c4 = 1;
              const HTTP = flag(flag3[3]).HTTP;
              const obj2 = { url: null, query: null, rejectWithError: true };
              obj2[0] = c4.ENTITLEMENTS_FOR_USER;
              let obj3 = { with_sku: null, with_application: null, entitlement_type: null, exclude_ended: null };
              obj3[0] = flag;
              obj3[1] = flag2;
              obj3[2] = entitlementType;
              obj3[3] = flag3;
              obj2[1] = obj3;
              c5 = 3;
              c6 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.get(obj2);
              return obj4;
            }
          } else {
            if (2 === tmp7) {
              c4 = 0;
              obj3 = flag2(flag3[2]);
              obj3.dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL" });
              c6 = 3;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c4 = arg1;
              obj = flag2(flag3[2]);
              const obj5 = { type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS", entitlements: null, excludeEnded: null };
              obj5[1] = c4.body;
              obj5[2] = flag3;
              obj.dispatch(obj5);
              c4 = 0;
            }
            c4 = 0;
            c6 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          }
        } catch (tmp20) {
          entitlementType = tmp20;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp20;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
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
function _fetchGiftableEntitlements() {
  const self = this;
  const tmp = callback(function*() {
    const callback = tmp3;
    closure_1_1(closure_1_2[2]).dispatch({ type: "ENTITLEMENTS_GIFTABLE_FETCH" });
    c3 = 1;
    const obj8 = closure_1_1(closure_1_2[2]);
    obj1 = { url: null, rejectWithError: true };
    obj1[0] = constants.ENTITLEMENTS_GIFTABLE;
    yield closure_1_0(closure_1_2[4]).httpGetWithCountryCodeQuery(obj1);
    if (1 === tmp7) {
      c3 = 0;
      let obj3 = callback(709);
      obj3.dispatch({ type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL" });
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      const body = arg1;
      const obj = callback(709);
      obj3 = { type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS", entitlements: null };
      obj3[1] = body.body;
      obj.dispatch(obj3);
      c3 = 0;
    }
    c3 = 0;
    return arg1;
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
const result = require("obj132").fileFinishedImporting("actions/EntitlementActionCreators.tsx");

export const fetchUserEntitlementsForApplication = function fetchUserEntitlementsForApplication(closure_18, arg1) {
  const _require = closure_18;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let obj = dispatcherDefault;
  obj.wait(() => {
    const obj = { type: "ENTITLEMENT_FETCH_APPLICATION_START", applicationId: closure_0 };
    obj.dispatch(obj);
  });
  const HTTP = _require(530).HTTP;
  obj = { url: Endpoints.ENTITLEMENTS_FOR_APPLICATION(closure_18), oldFormErrors: true, query: { exclude_consumed: flag }, rejectWithError: true };
  const value = HTTP.get(obj);
  return value.then((result) => {
    const obj = { type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS", applicationId: closure_0, entitlements: result.body };
    obj.dispatch(obj);
    return result.body;
  }).catch((error) => {
    const obj = { type: "ENTITLEMENT_FETCH_APPLICATION_FAIL", applicationId: closure_0 };
    obj.dispatch(obj);
  });
};
export const fetchUserEntitlements = function fetchUserEntitlements(arg0) {
  const self = this;
  const apply = _fetchUserEntitlements.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchGiftableEntitlements = function fetchGiftableEntitlements() {
  const self = this;
  const apply = _fetchGiftableEntitlements.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};