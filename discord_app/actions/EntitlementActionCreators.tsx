// discord_app/actions/EntitlementActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_5 = async function _fetchUserEntitlements(arg0) {
  let withSku = arg0;
  c5 = 0;
  c6 = 0;
  c4 = 0;
  let iter = (async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
            closure_1 = tmp7;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            let entitlementType;
            let flag = withSku.withSku;
            if (flag === undefined) {
              flag = false;
            }
            closure_129_0 = flag;
            let flag2 = tmp40.withApplication;
            if (flag2 === undefined) {
              flag2 = false;
            }
            closure_129_1 = flag2;
            let flag3 = tmp40.excludeEnded;
            if (flag3 === undefined) {
              flag3 = true;
            }
            closure_129_2 = flag3;
            entitlementType = tmp40.entitlementType;
            closure_129_4 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "PX_16", done: true };
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            closure_130_1(closure_130_2[2]).dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_START" });
            c4 = 1;
            const HTTP = closure_130_0(closure_130_2[3]).HTTP;
            const request = { url: closure_130_4.ENTITLEMENTS_FOR_USER, query: null, rejectWithError: true };
            const obj2 = {
              with_sku: closure_129_0,
              with_application: closure_129_1,
              entitlement_type: entitlementType,
              exclude_ended: closure_129_2,
            };
            request.query = obj2;
            c5 = 3;
            c6 = 1;
            let obj3 = { value: HTTP.get(request), done: false };
            return obj3;
          }
        } else {
          if (2 === tmp7) {
            c4 = 0;
            obj3 = closure_130_1(closure_130_2[2]);
            obj3.dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL" });
            c6 = 3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_4 = value;
            obj = closure_130_1(closure_130_2[2]);
            const obj4 = {
              type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
              entitlements: closure_129_4.body,
              excludeEnded: closure_129_2,
            };
            obj.dispatch(obj4);
            c4 = 0;
          }
          c4 = 0;
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        }
      } catch (tmp20) {
        closure_3 = tmp20;
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
};
let closure_6 = async function _fetchGiftableEntitlements() {
  closure_1 = tmp3;
  DispatcherDefault.dispatch({ type: "ENTITLEMENTS_GIFTABLE_FETCH" });
  await require("StoreUtils").httpGetWithCountryCodeQuery({
    url: constants.ENTITLEMENTS_GIFTABLE,
    rejectWithError: true,
  });
  if (1 === tmp7) {
    c3 = 0;
    let obj3 = closure_129_1(closure_129_2[2]);
    obj3.dispatch({ type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL" });
    c5 = 3;
  } else if (arg0 === 1) {
    c5 = 3;
    throw arg1;
  } else if (arg0 !== 2) {
    closure_128_0 = arg1;
    obj3 = { type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS", entitlements: closure_128_0.body };
    closure_129_1(closure_129_2[2]).dispatch(obj3);
    c3 = 0;
    closure_129_1(closure_129_2[2]);
  }
  return arg1;
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("actions/EntitlementActionCreators.tsx");

export const fetchUserEntitlementsForApplication = function fetchUserEntitlementsForApplication(id, arg1) {
  _require = id;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  DispatcherDefault.wait(() => {
    const obj = { type: "ENTITLEMENT_FETCH_APPLICATION_START", applicationId };
    obj.dispatch(obj);
  });
  const HTTP = require("HTTPUtils").HTTP;
  const request = {
    url: Endpoints.ENTITLEMENTS_FOR_APPLICATION(id),
    oldFormErrors: true,
    query: { exclude_consumed: flag },
    rejectWithError: true,
  };
  value = HTTP.get(request);
  return value
    .then((body) => {
      const obj = { type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS", applicationId, entitlements: body.body };
      obj.dispatch(obj);
      return body.body;
    })
    .catch(() => {
      const obj = { type: "ENTITLEMENT_FETCH_APPLICATION_FAIL", applicationId };
      obj.dispatch(obj);
    });
};
export const fetchUserEntitlements = function fetchUserEntitlements() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchGiftableEntitlements = function fetchGiftableEntitlements() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
