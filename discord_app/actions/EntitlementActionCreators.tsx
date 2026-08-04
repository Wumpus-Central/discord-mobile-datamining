import set from "set";
import { Endpoints } from "ME";

const require = arg1;
function _fetchUserEntitlements() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let flag3 = tmp3;
      flag = flag.withSku;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = tmp41.withApplication;
      if (flag2 === undefined) {
        flag2 = false;
      }
      flag3 = tmp41.excludeEnded;
      if (flag3 === undefined) {
        flag3 = true;
      }
      const entitlementType = tmp41.entitlementType;
      yield "ct";
      flag2(flag3[2]).dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_START" });
      let c4 = 1;
      const HTTP = flag(flag3[3]).HTTP;
      const obj2 = { url: null, query: null, rejectWithError: true };
      obj2[0] = c4.ENTITLEMENTS_FOR_USER;
      let obj3 = { with_sku: null, with_application: null, entitlement_type: null, exclude_ended: null };
      obj3[0] = flag;
      obj3[1] = flag2;
      obj3[2] = entitlementType;
      obj3[3] = flag3;
      obj2[1] = obj3;
      yield HTTP.get(obj2);
      if (2 === tmp7) {
        c4 = 0;
        obj3 = flag2(flag3[2]);
        obj3.dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL" });
        let c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        c4 = arg1;
        const obj = flag2(flag3[2]);
        const obj5 = { type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS", entitlements: null, excludeEnded: null };
        obj5[1] = c4.body;
        obj5[2] = flag3;
        obj.dispatch(obj5);
        c4 = 0;
      }
      c4 = 0;
      return arg1;
    })();
    iter.next();
    return iter;
  });
  const _fetchUserEntitlements = tmp;
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
    outer1_1(outer1_2[2]).dispatch({ type: "ENTITLEMENTS_GIFTABLE_FETCH" });
    let c3 = 1;
    const obj8 = outer1_1(outer1_2[2]);
    const obj1 = { url: null, rejectWithError: true };
    obj1[0] = constants.ENTITLEMENTS_GIFTABLE;
    yield outer1_0(outer1_2[4]).httpGetWithCountryCodeQuery(obj1);
    if (1 === tmp7) {
      c3 = 0;
      let obj3 = callback(709);
      obj3.dispatch({ type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL" });
      let c5 = 3;
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
  const _fetchGiftableEntitlements = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("dispatcher").fileFinishedImporting("actions/EntitlementActionCreators.tsx");

export const fetchUserEntitlementsForApplication = function fetchUserEntitlementsForApplication(closure_18, arg1) {
  const _require = closure_18;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let obj = importDefault(709);
  obj.wait(() => {
    let obj = outer1_1(outer1_2[2]);
    obj = { type: "ENTITLEMENT_FETCH_APPLICATION_START", applicationId: closure_0 };
    obj.dispatch(obj);
  });
  const HTTP = _require(530).HTTP;
  obj = { url: Endpoints.ENTITLEMENTS_FOR_APPLICATION(closure_18), oldFormErrors: true, query: { exclude_consumed: flag }, rejectWithError: true };
  const value = HTTP.get(obj);
  return value.then((body) => {
    let obj = outer1_1(outer1_2[2]);
    obj = { type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS", applicationId: closure_0, entitlements: body.body };
    obj.dispatch(obj);
    return body.body;
  }).catch(() => {
    let obj = outer1_1(outer1_2[2]);
    obj = { type: "ENTITLEMENT_FETCH_APPLICATION_FAIL", applicationId: closure_0 };
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