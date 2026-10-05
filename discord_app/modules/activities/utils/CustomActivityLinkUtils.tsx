// discord_app/modules/activities/utils/CustomActivityLinkUtils.tsx
import Constants from "../../../Constants.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import utils_CustomActivityLinkUtils from "../../../../discord_common/js/shared/activities/utils/CustomActivityLinkUtils.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import CustomActivityLinksStore from "../stores/CustomActivityLinksStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c2, c3, closure_4, customId;

function fetchCustomActivityLink() {
  return obj(...arguments);
}
let obj = function _fetchCustomActivityLink() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
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
            if (null != closure_0) {
              if (null != closure_1) {
                const obj11 = utils_CustomActivityLinkUtils;
                const result = obj11.decodeCustomActivityLink(closure_1);
                if (null == result) {
                  c2 = 3;
                  return { value: null, done: true };
                } else {
                  const type2 = result.type;
                  if (utils_CustomActivityLinkUtils.CustomLinkType.MANAGED === type2) {
                    const HTTP2 = HTTPUtils.HTTP;
                    const obj4 = {
                      url: Endpoints.APPLICATION_MANAGED_ACTIVITY_LINK(closure_0, result.decodedLinkId),
                      rejectWithError: false,
                    };
                    const get2 = HTTP2.get;
                    c3 = 1;
                    c2 = 1;
                    const obj5 = { value: get2(obj4), done: false };
                    return obj5;
                  } else if (utils_CustomActivityLinkUtils.CustomLinkType.QUICK === type2) {
                    const HTTP = HTTPUtils.HTTP;
                    const obj6 = {
                      url: Endpoints.APPLICATION_QUICK_ACTIVITY_LINK(closure_0, result.decodedLinkId),
                      rejectWithError: false,
                    };
                    const get = HTTP.get;
                    c3 = 2;
                    c2 = 1;
                    const obj7 = { value: get(obj6), done: false };
                    return obj7;
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
        } else if (1 === tmp3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            c2 = 3;
            const obj9 = { value: value.body, done: true };
            return obj9;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          c2 = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp6) {
        c2 = 3;
        throw tmp6;
      }
    }
  });
  return obj(...arguments);
};
obj = function _getCustomActivityLinkParams() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let custom_id = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c7 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let tmp11;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_4 = tmp11;
              custom_id = undefined;
              customId = closure_2;
              const tmp16 = custom_id;
              if (closure_2 == null) {
                customId = undefined;
              }
              if (null == closure_1) {
                c7 = 3;
                return { value: { customId }, done: true };
              } else if (null != customId) {
                c7 = 3;
                return { value: { customId }, done: true };
              } else {
                c6 = 1;
                c5 = 2;
                c7 = 1;
                const obj8 = { value: fetchCustomActivityLink(tmp16, closure_1), done: false };
                return obj8;
              }
            }
          } else if (1 === tmp3) {
            c6 = 0;
            c7 = 3;
            return { value: { customId: "r" }, done: true };
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            custom_id = value;
            if (null == custom_id) {
              obj = { customId: "r" };
            } else {
              obj = { customId: custom_id.custom_id };
            }
            c6 = 0;
            c7 = 3;
            return { value: obj, done: true };
          }
        } catch (tmp10) {
          tmp11 = c6;
          if (0 === c6) {
            c7 = 3;
            throw tmp10;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function loadCustomActivityLink() {
  return obj(...arguments);
}
obj = function _loadCustomActivityLink() {
  obj = _asyncToGenerator(async (applicationId, link) => {
    let closure_2;
    let closure_3;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      link = value;
      if (null == link) {
        return Promise.reject("fetchCustomActivityLink body is null");
      }
      const obj8 = { type: "CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS", applicationId, link };
      obj = closure_131_1(closure_131_2[5]);
      obj.dispatch(obj8);
      await "IconComponent";
      if (null != applicationId) {
        if (null != link) {
          c4 = 1;
          c5 = 1;
          const obj4 = { value: fetchCustomActivityLink(tmp22, link), done: false };
          return obj4;
        }
      }
      return Promise.reject("appId or linkId null");
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const set = new Set();
let result = size.fileFinishedImporting("modules/activities/utils/CustomActivityLinkUtils.tsx");

export { fetchCustomActivityLink };
export const getCustomActivityLinkParams = function getCustomActivityLinkParams() {
  return obj(...arguments);
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
