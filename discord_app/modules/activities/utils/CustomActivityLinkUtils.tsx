// discord_app/modules/activities/utils/CustomActivityLinkUtils.tsx
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import utils_CustomActivityLinkUtils from "../../../../discord_common/js/shared/activities/utils/CustomActivityLinkUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import CustomActivityLinksStore from "../stores/CustomActivityLinksStore.tsx";

require = fn;
function fetchCustomActivityLink() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_7 = async function _fetchCustomActivityLink(arg0) {
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
          if (null != closure_0) {
            if (null != closure_1) {
              const result = utils_CustomActivityLinkUtils.decodeCustomActivityLink(closure_1);
              if (null == result) {
                c2 = 3;
                return { value: null, done: true };
              } else {
                const type2 = result.type;
                if (utils_CustomActivityLinkUtils.CustomLinkType.MANAGED === type2) {
                  const HTTP2 = HTTPUtils.HTTP;
                  const obj1 = { url: Endpoints.APPLICATION_MANAGED_ACTIVITY_LINK(closure_0, result.decodedLinkId), rejectWithError: false };
                  c3 = 1;
                  c2 = 1;
                  const obj2 = { value: HTTP2.get(obj1), done: false };
                  return obj2;
                } else if (utils_CustomActivityLinkUtils.CustomLinkType.QUICK === type2) {
                  const HTTP = HTTPUtils.HTTP;
                  const obj3 = { url: Endpoints.APPLICATION_QUICK_ACTIVITY_LINK(closure_0, result.decodedLinkId), rejectWithError: false };
                  c3 = 2;
                  c2 = 1;
                  const obj4 = { value: HTTP.get(obj3), done: false };
                  return obj4;
                } else {
                  const type = result.type;
                  c2 = 3;
                  return { value: null, done: true };
                }
              }
            }
          }
          c2 = 3;
          return { value: null, done: true };
        }
      } else if (1 === tmp4) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c2 = 3;
          const obj6 = { value: value.body, done: true };
          return obj6;
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        c2 = 3;
        obj = { value: value.body, done: true };
        return obj;
      }
    } catch (tmp7) {
      c2 = tmp;
      throw tmp7;
    }
  }
};
let closure_8 = async function _getCustomActivityLinkParams(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c7 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp14;
          closure_132_0 = undefined;
          c3 = closure_2;
          if (closure_2 == null) {
            c3 = undefined;
          }
          if (null == closure_1) {
            const obj1 = { customId: tmp11 };
            c7 = 3;
            const obj2 = { value: obj1, done: true };
            return obj2;
          } else if (null != tmp11) {
            const obj3 = { customId: tmp11 };
            c7 = 3;
            const obj4 = { value: obj3, done: true };
            return obj4;
          } else {
            c6 = 1;
            c5 = 2;
            c7 = 1;
            const obj5 = { value: fetchCustomActivityLink(closure_0, closure_1), done: false };
            return obj5;
          }
        }
      } else if (1 === tmp6) {
        c6 = 0;
        c7 = 3;
        const obj6 = { value: { customId: "Array" }, done: true };
        return obj6;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c7 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_132_0 = value;
        if (null == closure_132_0) {
          obj = { customId: "Array" };
        } else {
          { customId: null }[0] = closure_132_0.custom_id;
        }
        c6 = 0;
        c7 = 3;
      }
    } catch (tmp13) {
      if (tmp3 === c6) {
        c7 = tmp2;
        throw tmp13;
      } else {
        c5 = tmp;
      }
      tmp14 = c6;
    }
  }
};
function loadCustomActivityLink() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_10 = async function _loadCustomActivityLink() {
  closure_130_1 = value;
  if (null == closure_130_1) {
    return Promise.reject("fetchCustomActivityLink body is null");
  }
  closure_131_1(closure_131_2[5]).dispatch({ type: "CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS", applicationId: closure_130_0, link: closure_130_1 });
  await "HermesInternal";
  closure_3 = tmp5;
  closure_2 = tmp2;
  closure_130_0 = closure_0;
  if (null != closure_0) {
    if (null != closure_1) {
      c4 = 1;
      c5 = 1;
      return { value: fetchCustomActivityLink(tmp24, closure_1), done: false };
    }
  }
  return Promise.reject("appId or linkId null");
};
const Endpoints = fn(1074).Endpoints;
const set = new Set();
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/utils/CustomActivityLinkUtils.tsx");

export { fetchCustomActivityLink };
export const getCustomActivityLinkParams = function getCustomActivityLinkParams() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getQuickLinkImage = function getQuickLinkImage(assetPath) {
  if (null != assetPath) {
    const _location = location;
    const _window = window;
    const _HermesInternal = HermesInternal;
    return "" + location.protocol + "//" + window.GLOBAL_ENV.CDN_HOST + "/attachments-quick-links/" + assetPath;
  }
};
export { loadCustomActivityLink };
export const getOrFetchCustomActivityLink = function getOrFetchCustomActivityLink(id, linkId) {
  let one = CustomActivityLinksStore.getOne(id, linkId);
  if (null == one) {
    one = null;
    if (!set.has(linkId)) {
      loadCustomActivityLink(id, linkId);
      set.add(linkId);
      one = null;
    }
  }
  return one;
};