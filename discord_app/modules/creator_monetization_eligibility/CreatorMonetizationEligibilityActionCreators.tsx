// === Module 17882: CreatorMonetizationEligibilityActionCreators ===

// Module 17882 (CreatorMonetizationEligibilityActionCreators)
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import ApplicationConstants from "ApplicationConstants" /* 1360 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c3;

let obj = function _createCreatorMonetizationEnableRequest() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj6;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: Endpoints.CREATOR_MONETIZATION_ENABLE_REQUESTS(closure_0), rejectWithError: obj6.rejectWithMigratedError() };
            const post = HTTP.post;
            obj6 = HTTPUtils;
            c2 = 1;
            c1 = 1;
            const obj5 = { value: post(obj4), done: false };
            return obj5;
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
          return { value: "IconComponent", done: null };
        }
      } catch (tmp4) {
        c1 = 3;
        throw tmp4;
      }
    }
  });
  return obj(...arguments);
};
obj = function _getCreatorMonetizationEligibility() {
  obj = _asyncToGenerator(async (arg0) => {
    let c1;
    let c2;
    let obj7;
    let closure_0 = arg0;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: Endpoints.CREATOR_MONETIZATION_ELIGIBILITY(closure_0), rejectWithError: obj7.rejectWithMigratedError() };
    const get = HTTP.get;
    obj7 = HTTPUtils;
    await get(obj4);
    return value.body;
  });
  return obj(...arguments);
};
obj = function _acceptCreatorMonetizationTerms() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let obj6;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS(closure_0, closure_1), rejectWithError: obj6.rejectWithMigratedError() };
            const post = HTTP.post;
            obj6 = HTTPUtils;
            c3 = 1;
            c2 = 1;
            const obj5 = { value: post(obj4), done: false };
            return obj5;
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
          return { value: "IconComponent", done: null };
        }
      } catch (tmp4) {
        c2 = 3;
        throw tmp4;
      }
    }
  });
  return obj(...arguments);
};
obj = function _acceptCreatorMonetizationTermsV() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj6;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: Endpoints.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(closure_0), rejectWithError: obj6.rejectWithMigratedError() };
            const post = HTTP.post;
            obj6 = HTTPUtils;
            c2 = 1;
            c1 = 1;
            const obj5 = { value: post(obj4), done: false };
            return obj5;
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
          return { value: "IconComponent", done: null };
        }
      } catch (tmp4) {
        c1 = 3;
        throw tmp4;
      }
    }
  });
  return obj(...arguments);
};
obj = function _getCreatorMonetizationOnboardingMarketing() {
  obj = _asyncToGenerator(async (arg0) => {
    let c1;
    let c2;
    let obj7;
    let closure_0 = arg0;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: Endpoints.CREATOR_MONETIZATION_MARKETING_ONBOARDING(closure_0), rejectWithError: obj7.rejectWithMigratedError() };
    const get = HTTP.get;
    obj7 = HTTPUtils;
    await get(obj4);
    return value.body;
  });
  return obj(...arguments);
};
obj = function _ownershipTransferOnboard() {
  obj = _asyncToGenerator(async (arg0, team_id) => {
    let closure_2;
    let closure_3;
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj10;
      let obj4;
      const HTTP = HTTPUtils.HTTP;
      const request = { url: Endpoints.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(closure_0), body: obj4, rejectWithError: obj10.rejectWithMigratedError() };
      const post = HTTP.post;
      obj4 = { team_id };
      obj10 = HTTPUtils;
      await post(request);
      const body = value.body;
      if (null != body.application) {
        const obj7 = { type: "APPLICATION_FETCH_SUCCESS", application: body.application };
        obj = closure_131_1(closure_131_2[4]);
        obj.dispatch(obj7);
      }
      return body;
    })();
  });
  return obj(...arguments);
};
obj = function _requestRemoveMonetization() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj6;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const HTTP = HTTPUtils.HTTP;
            const request = { url: Endpoints.CREATOR_MONETIZATION_REMOVE_MONETIZATION(closure_0), body: {}, rejectWithError: obj6.rejectWithMigratedError() };
            const post = HTTP.post;
            obj6 = HTTPUtils;
            c2 = 1;
            c1 = 1;
            const obj4 = { value: post(request), done: false };
            return obj4;
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
          return { value: "IconComponent", done: null };
        }
      } catch (tmp4) {
        c1 = 3;
        throw tmp4;
      }
    }
  });
  return obj(...arguments);
};
obj = function _removeMonetization() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj3;
    function requestRemoveMonetization() {
      return closure_1_12(...arguments);
    }
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
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
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: requestRemoveMonetization(closure_0), done: false };
            return obj5;
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            const obj7 = { type: closure_130_5.GUILD_ROLE_SUBSCRIPTIONS, includeTeam: true };
            c3 = 2;
            c4 = 1;
            const obj8 = { value: obj3.getApplicationsForGuild(closure_0, obj7), done: false };
            obj3 = closure_130_1(closure_130_2[5]);
            return obj8;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp12) {
        c4 = 3;
        throw tmp12;
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const ApplicationTypes = ApplicationConstants.ApplicationTypes;
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/CreatorMonetizationEligibilityActionCreators.tsx");

export const createCreatorMonetizationEnableRequest = function createCreatorMonetizationEnableRequest() {
  return obj(...arguments);
};
export const getCreatorMonetizationEligibility = function getCreatorMonetizationEligibility() {
  return obj(...arguments);
};
export const acceptCreatorMonetizationTerms = function acceptCreatorMonetizationTerms() {
  return obj(...arguments);
};
export const acceptCreatorMonetizationTermsV2 = function acceptCreatorMonetizationTermsV2() {
  return obj(...arguments);
};
export const getCreatorMonetizationOnboardingMarketing = function getCreatorMonetizationOnboardingMarketing() {
  return obj(...arguments);
};
export const ownershipTransferOnboard = function ownershipTransferOnboard() {
  return obj(...arguments);
};
export const acceptNewTerms = function acceptNewTerms(arg0) {
  let obj2;
  const HTTP = HTTPUtils.HTTP;
  const post = HTTP.post;
  obj = { url: Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(arg0), rejectWithError: obj2.rejectWithMigratedError() };
  obj2 = HTTPUtils;
  return post(obj);
};
export const acceptNewTermsDemonetized = function acceptNewTermsDemonetized(arg0) {
  let obj2;
  const HTTP = HTTPUtils.HTTP;
  const post = HTTP.post;
  obj = { url: Endpoints.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(arg0), rejectWithError: obj2.rejectWithMigratedError() };
  obj2 = HTTPUtils;
  return post(obj);
};
export const removeMonetization = function removeMonetization() {
  return obj(...arguments);
};