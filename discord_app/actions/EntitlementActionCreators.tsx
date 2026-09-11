// discord_app/actions/EntitlementActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_5 = async function _fetchUserEntitlements(arg0) {
  let withSku = arg0;
  c5 = 0;
  c6 = 0;
  c4 = 0;
  let iter = (async (arg0) => {
    closure_2 = tmp3;
    let flag = withSku.withSku;
    if (flag === undefined) {
      flag = false;
    }
    closure_129_0 = flag;
    let flag2 = withSku.withApplication;
    if (flag2 === undefined) {
      flag2 = false;
    }
    closure_129_1 = flag2;
    let flag3 = withSku.excludeEnded;
    if (flag3 === undefined) {
      flag3 = true;
    }
    closure_129_2 = flag3;
    const entitlementType = withSku.entitlementType;
    await "PX_16";
    closure_130_1(closure_130_2[2]).dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_START" });
    const HTTP = closure_130_0(closure_130_2[3]).HTTP;
    const request = {
      url: closure_130_4.ENTITLEMENTS_FOR_USER,
      query: {
        with_sku: closure_129_0,
        with_application: closure_129_1,
        entitlement_type: entitlementType,
        exclude_ended: closure_129_2,
      },
      rejectWithError: true,
    };
    await HTTP.get(request);
    if (2 === tmp7) {
      c4 = 0;
      closure_130_1(closure_130_2[2]).dispatch({ type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL" });
      c6 = 3;
      closure_130_1(closure_130_2[2]);
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_129_4 = value;
      closure_130_1(closure_130_2[2]).dispatch({
        type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
        entitlements: closure_129_4.body,
        excludeEnded: closure_129_2,
      });
      c4 = 0;
      closure_130_1(closure_130_2[2]);
    }
    return value;
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
    throw value;
  } else if (arg0 !== 2) {
    closure_128_0 = value;
    obj3 = { type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS", entitlements: closure_128_0.body };
    closure_129_1(closure_129_2[2]).dispatch(obj3);
    c3 = 0;
    closure_129_1(closure_129_2[2]);
  }
  return value;
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
