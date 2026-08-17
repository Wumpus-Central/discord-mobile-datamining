// discord_app/modules/activities/utils/CustomActivityLinkUtils.tsx
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "getOne" /* 12412 */;
import { Endpoints } from "ME" /* 676 */;
import set from "set" /* 2 */;

const require = arg1;
function fetchCustomActivityLink() {
  const self = this;
  const apply = _fetchCustomActivityLink.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchCustomActivityLink() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c2 = 0;
    return (function*(arg0, body) {
      if (table === 2) {
        table = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          table = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              table = 3;
              throw body;
            } else if (arg0 === 2) {
              table = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              if (null != callback) {
                if (null != tmp14) {
                  const result = callback(table[3]).decodeCustomActivityLink(tmp14);
                  if (null == result) {
                    table = 3;
                    return { value: null, done: true };
                  } else {
                    const type2 = result.type;
                    if (tmp16(tmp17[3]).CustomLinkType.MANAGED === type2) {
                      const HTTP2 = tmp16(tmp17[4]).HTTP;
                      obj1 = { url: null, rejectWithError: false };
                      obj1[0] = closure_1_5.APPLICATION_MANAGED_ACTIVITY_LINK(tmp13, result.decodedLinkId);
                      c3 = 1;
                      table = 1;
                      const obj2 = { value: null, done: false };
                      obj2[0] = HTTP2.get(obj1);
                      return obj2;
                    } else if (tmp16(tmp17[3]).CustomLinkType.QUICK === type2) {
                      const HTTP = tmp16(tmp17[4]).HTTP;
                      const obj3 = { url: null, rejectWithError: false };
                      obj3[0] = closure_1_5.APPLICATION_QUICK_ACTIVITY_LINK(tmp13, result.decodedLinkId);
                      c3 = 2;
                      table = 1;
                      const obj4 = { value: null, done: false };
                      obj4[0] = HTTP.get(obj3);
                      return obj4;
                    } else {
                      const type = result.type;
                      table = 3;
                      return { value: null, done: true };
                    }
                  }
                  const obj11 = callback(table[3]);
                }
              }
              table = 3;
              return { value: null, done: true };
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              table = 3;
              throw body;
            } else if (arg0 === 2) {
              table = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = body;
              return obj5;
            } else {
              table = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = body.body;
              return obj6;
            }
          } else if (arg0 === 1) {
            table = 3;
            throw body;
          } else if (arg0 === 2) {
            table = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = body;
            return obj7;
          } else {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp7) {
          table = tmp;
          throw tmp7;
        }
      }
    })();
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getCustomActivityLinkParams() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c7 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
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
          c7 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp14;
              let custom_id;
              c3 = closure_2;
              if (closure_2 == null) {
                c3 = undefined;
              }
              if (null == closure_1) {
                obj1 = { customId: null };
                obj1[0] = tmp11;
                c7 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = obj1;
                return obj2;
              } else if (null != tmp11) {
                const obj3 = { customId: null };
                obj3[0] = tmp11;
                c7 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = obj3;
                return obj4;
              } else {
                let v0 = 1;
                c5 = 2;
                c7 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = v0(tmp21, tmp22);
                return obj5;
              }
              tmp21 = custom_id;
            }
          } else if (1 === tmp6) {
            v0 = 0;
            c7 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = { customId: "r" };
            return obj6;
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 0;
            c7 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          } else {
            custom_id = arg1;
            if (null == custom_id) {
              obj = { customId: "r" };
            } else {
              { customId: null }[0] = custom_id.custom_id;
            }
            v0 = 0;
            c7 = 3;
          }
        } catch (tmp13) {
          if (tmp3 === v0) {
            c7 = tmp2;
            throw tmp13;
          } else {
            c5 = tmp;
          }
          tmp14 = v0;
        }
      }
    })();
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function loadCustomActivityLink(id, linkId) {
  const self = this;
  const apply = _loadCustomActivityLink.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _loadCustomActivityLink() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp5;
              const table = tmp2;
              let callback;
              if (null != closure_0) {
                if (null != tmp26) {
                  c4 = 1;
                  c5 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = closure_1_6(tmp25, tmp26);
                  return obj1;
                }
              }
              c5 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = Promise.reject("appId or linkId null");
              return obj2;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            callback = arg1;
            if (null == callback) {
              c5 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = Promise.reject("fetchCustomActivityLink body is null");
              return obj4;
            } else {
              obj = callback(table[5]);
              const obj5 = { type: "CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS", applicationId: null, link: null };
              obj5[1] = closure_0;
              obj5[2] = callback;
              obj.dispatch(obj5);
              c5 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          }
        } catch (tmp16) {
          c5 = tmp;
          throw tmp16;
        }
      }
    })();
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let set = new Set();
let result = set.fileFinishedImporting("modules/activities/utils/CustomActivityLinkUtils.tsx");

export { fetchCustomActivityLink };
export const getCustomActivityLinkParams = function getCustomActivityLinkParams(closure_0, value, closure_2) {
  const self = this;
  const apply = _getCustomActivityLinkParams.apply;
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
  one = one.getOne(id, linkId);
  if (null == one) {
    one = null;
    if (!set.has(linkId)) {
      loadCustomActivityLink(id, linkId);
      obj.add(linkId);
      one = null;
    }
    obj = set;
  }
  return one;
};