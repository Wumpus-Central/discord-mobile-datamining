// === Module 17685: CreatorMonetizationEligibilityActionCreators ===

// Module 17685 (CreatorMonetizationEligibilityActionCreators)
import HTTPUtils from "HTTPUtils" /* 1272 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_6 = async function _createCreatorMonetizationEnableRequest(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const HTTP = HTTPUtils.HTTP;
          const obj1 = { url: Endpoints.CREATOR_MONETIZATION_ENABLE_REQUESTS(closure_0), rejectWithError: HTTPUtils.rejectWithMigratedError() };
          c2 = 1;
          c1 = 1;
          const obj2 = { value: HTTP.post(obj1), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c1 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp5) {
      c1 = tmp;
      throw tmp5;
    }
  }
};
let closure_7 = async function _getCreatorMonetizationEligibility() {
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({ url: Endpoints.CREATOR_MONETIZATION_ELIGIBILITY(closure_0), rejectWithError: HTTPUtils.rejectWithMigratedError() });
  return value.body;
};
let closure_8 = async function _acceptCreatorMonetizationTerms(arg0) {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c2 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const HTTP = HTTPUtils.HTTP;
          const obj1 = { url: Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS(closure_0, closure_1), rejectWithError: HTTPUtils.rejectWithMigratedError() };
          c3 = 1;
          c2 = 1;
          const obj2 = { value: HTTP.post(obj1), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c2 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp5) {
      c2 = tmp;
      throw tmp5;
    }
  }
};
let closure_9 = async function _acceptCreatorMonetizationTermsV(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const HTTP = HTTPUtils.HTTP;
          const obj1 = { url: Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(closure_0), rejectWithError: HTTPUtils.rejectWithMigratedError() };
          c2 = 1;
          c1 = 1;
          const obj2 = { value: HTTP.post(obj1), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c1 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp5) {
      c1 = tmp;
      throw tmp5;
    }
  }
};
let closure_10 = async function _getCreatorMonetizationOnboardingMarketing() {
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({ url: Endpoints.CREATOR_MONETIZATION_MARKETING_ONBOARDING(closure_0), rejectWithError: HTTPUtils.rejectWithMigratedError() });
  return value.body;
};
let closure_11 = async function _ownershipTransferOnboard(arg0) {
  closure_0 = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    closure_3 = tmp2;
    closure_2 = tmp5;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(closure_0), body: { team_id }, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    await HTTP.post(request);
    const body = value.body;
    if (null != body.application) {
      closure_131_1(closure_131_2[4]).dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: body.application });
      closure_131_1(closure_131_2[4]);
    }
    return body;
  })();
};
let closure_12 = async function _requestRemoveMonetization(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const HTTP = HTTPUtils.HTTP;
          const request = { url: Endpoints.CREATOR_MONETIZATION_REMOVE_MONETIZATION(closure_0), body: {}, rejectWithError: HTTPUtils.rejectWithMigratedError() };
          c2 = 1;
          c1 = 1;
          const obj1 = { value: HTTP.post(request), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c1 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp5) {
      c1 = tmp;
      throw tmp5;
    }
  }
};
let closure_13 = async function _removeMonetization() {
  closure_1 = tmp2;
  closure_129_0 = closure_0;
  await (function requestRemoveMonetization() {
    const self = this;
    const apply = closure_1_12.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(closure_0);
  await closure_130_1(closure_130_2[5]).getApplicationsForGuild(closure_129_0, { type: closure_130_5.GUILD_ROLE_SUBSCRIPTIONS, includeTeam: true });
  return value;
};
const Endpoints = fn(1074).Endpoints;
const ApplicationTypes = fn(1350).ApplicationTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/CreatorMonetizationEligibilityActionCreators.tsx");

export const createCreatorMonetizationEnableRequest = function createCreatorMonetizationEnableRequest() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getCreatorMonetizationEligibility = function getCreatorMonetizationEligibility() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const acceptCreatorMonetizationTerms = function acceptCreatorMonetizationTerms() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const acceptCreatorMonetizationTermsV2 = function acceptCreatorMonetizationTermsV2() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getCreatorMonetizationOnboardingMarketing = function getCreatorMonetizationOnboardingMarketing() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const ownershipTransferOnboard = function ownershipTransferOnboard() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const acceptNewTerms = function acceptNewTerms(arg0) {
  const HTTP = HTTPUtils.HTTP;
  const obj = { url: Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(arg0), rejectWithError: HTTPUtils.rejectWithMigratedError() };
  return HTTP.post(obj);
};
export const acceptNewTermsDemonetized = function acceptNewTermsDemonetized(arg0) {
  const HTTP = HTTPUtils.HTTP;
  const obj = { url: Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(arg0), rejectWithError: HTTPUtils.rejectWithMigratedError() };
  return HTTP.post(obj);
};
export const removeMonetization = function removeMonetization() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};