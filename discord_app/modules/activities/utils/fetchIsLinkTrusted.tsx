// discord_app/modules/activities/utils/fetchIsLinkTrusted.tsx
import Constants from "../../../Constants.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import URLUtilsDefault from "../../../utils/URLUtils.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../_runtime/metro/00002__.js";

let obj = function _requestIsLinkTrusted() {
  obj = _asyncToGenerator(async (arg0, url) => {
    let closure_2;
    let closure_0 = arg0;
    let c3 = 0;
    let c5 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj4;
      const HTTP = HTTPUtils.HTTP;
      const request = {
        url: Endpoints.ACTIVITIES_TRUSTED_LINKS(closure_0),
        rejectWithError: false,
        query: obj4,
        timeout: 500,
      };
      const get = HTTP.get;
      obj4 = { url };
      await get(request);
      const body = value.body;
      const _Boolean = Boolean;
      return Boolean(body.trusted);
    })();
  });
  return obj(...arguments);
};
obj = function _fetchIsLinkTrusted() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let c4;
    let closure_3;
    let flag;
    let protocol;
    let tmp2;
    let value;
    function readCache(combined) {
      const value = closure_1_5.get(combined);
      let tmp2 = null;
      if (null != value) {
        let check;
        const _Date = Date;
        if (Date.now() >= value.expiresAt) {
          closure_1_5.delete(combined);
          check = null;
        } else {
          check = value.check;
        }
        tmp2 = check;
      }
      return tmp2;
    }
    function requestIsLinkTrusted() {
      return closure_1_6(...arguments);
    }
    function writeCache(combined, check) {
      if (closure_1_5.size >= 100) {
        const iter = closure_1_5.keys();
        const iter2 = iter.next();
        if (!iter2.done) {
          closure_1_5.delete(iter2.value);
        }
      }
      const obj2 = { check, expiresAt: Date.now() + 300000 };
      const result = closure_1_5.set(combined, obj2);
    }
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = tmp2;
    if (undefined === closure_0) {
      return false;
    }
    const obj6 = URLUtilsDefault;
    const toURLSafeResult = obj6.toURLSafe(closure_1);
    if (toURLSafeResult != null) {
      protocol = toURLSafeResult.protocol;
    }
    if ("http:" !== protocol) {
      if ("https:" !== protocol) {
        let c5 = 3;
        return { value: false, done: true };
      }
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + closure_0 + ":" + tmp33;
    let tmp22 = readCache(combined);
    closure_1 = tmp22;
    if (null == tmp22) {
      const tmp23 = requestIsLinkTrusted(closure_0, closure_1);
      closure_1 = tmp23;
      writeCache(combined, tmp23);
      tmp22 = tmp23;
    }
    await tmp22;
    closure_2 = value;
    if (null == closure_2) {
      value = closure_131_5.get(combined);
      let check;
      if (value != null) {
        check = value.check;
      }
      flag = false;
      if (check === closure_1) {
        const deleteResult = closure_131_5.delete(combined);
        flag = false;
      }
    } else {
      flag = closure_2;
    }
    return flag;
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
new Map();
let result = size.fileFinishedImporting("modules/activities/utils/fetchIsLinkTrusted.tsx");

export const fetchIsLinkTrusted = function fetchIsLinkTrusted() {
  return obj(...arguments);
};
