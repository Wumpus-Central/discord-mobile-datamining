// === Module 5227: ? ===

// Module 5227
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;

const require = fn;
let closure_2 = ["trackedActionData"];
const result = require("obj132").fileFinishedImporting("utils/TrackedHTTPUtils.tsx");

export default {
  get(trackedActionData) {
    get = get(trackedActionData[2]).HTTP.get;
    trackedActionData = undefined;
    closure_2 = undefined;
    let callback;
    trackedActionData = trackedActionData.trackedActionData;
    const tmp = callback(trackedActionData, closure_2);
    closure_2 = tmp;
    callback = { url: tmp.url, request_method: "get" };
    return new Promise((arg0, arg1) => {
      del = arg0;
      closure_1 = arg1;
      const promise = del(closure_2);
      del(closure_2).then((result) => {
        let obj = lib;
        let properties = lib.properties;
        if (typeof lib.properties === "function") {
          properties = obj.properties(result);
        }
        obj = { status_code: result.status };
        const merged = Object.assign(closure_1_3);
        const merged1 = Object.assign(properties);
        del(trackedActionData[1]).trackNetworkAction(obj.event, obj);
        callback(result);
      }).catch((error) => {
        let obj = lib;
        let properties = lib.properties;
        if (typeof lib.properties === "function") {
          properties = obj.properties(error);
        }
        obj = { status_code: error.status, error_code: null, error_message: null };
        const body = error.body;
        let code;
        if (body != null) {
          code = body.code;
        }
        obj[1] = code;
        const body2 = error.body;
        let message;
        if (body2 != null) {
          message = body2.message;
        }
        obj[2] = message;
        const merged = Object.assign(closure_1_3);
        const merged1 = Object.assign(properties);
        del(trackedActionData[1]).trackNetworkAction(obj.event, obj);
        lib(error);
      });
    });
  },
  post(trackedActionData) {
    post = post(trackedActionData[2]).HTTP.post;
    trackedActionData = undefined;
    closure_2 = undefined;
    let callback;
    trackedActionData = trackedActionData.trackedActionData;
    const tmp = callback(trackedActionData, closure_2);
    closure_2 = tmp;
    callback = { url: tmp.url, request_method: "post" };
    return new Promise((arg0, arg1) => {
      del = arg0;
      closure_1 = arg1;
      const promise = del(closure_2);
      del(closure_2).then((result) => {
        let obj = lib;
        let properties = lib.properties;
        if (typeof lib.properties === "function") {
          properties = obj.properties(result);
        }
        obj = { status_code: result.status };
        const merged = Object.assign(closure_1_3);
        const merged1 = Object.assign(properties);
        del(trackedActionData[1]).trackNetworkAction(obj.event, obj);
        callback(result);
      }).catch((error) => {
        let obj = lib;
        let properties = lib.properties;
        if (typeof lib.properties === "function") {
          properties = obj.properties(error);
        }
        obj = { status_code: error.status, error_code: null, error_message: null };
        const body = error.body;
        let code;
        if (body != null) {
          code = body.code;
        }
        obj[1] = code;
        const body2 = error.body;
        let message;
        if (body2 != null) {
          message = body2.message;
        }
        obj[2] = message;
        const merged = Object.assign(closure_1_3);
        const merged1 = Object.assign(properties);
        del(trackedActionData[1]).trackNetworkAction(obj.event, obj);
        lib(error);
      });
    });
  },
  put(trackedActionData) {
    put = put(trackedActionData[2]).HTTP.put;
    trackedActionData = undefined;
    closure_2 = undefined;
    let callback;
    trackedActionData = trackedActionData.trackedActionData;
    const tmp = callback(trackedActionData, closure_2);
    closure_2 = tmp;
    callback = { url: tmp.url, request_method: "put" };
    return new Promise((arg0, arg1) => {
      del = arg0;
      closure_1 = arg1;
      const promise = del(closure_2);
      del(closure_2).then((result) => {
        let obj = lib;
        let properties = lib.properties;
        if (typeof lib.properties === "function") {
          properties = obj.properties(result);
        }
        obj = { status_code: result.status };
        const merged = Object.assign(closure_1_3);
        const merged1 = Object.assign(properties);
        del(trackedActionData[1]).trackNetworkAction(obj.event, obj);
        callback(result);
      }).catch((error) => {
        let obj = lib;
        let properties = lib.properties;
        if (typeof lib.properties === "function") {
          properties = obj.properties(error);
        }
        obj = { status_code: error.status, error_code: null, error_message: null };
        const body = error.body;
        let code;
        if (body != null) {
          code = body.code;
        }
        obj[1] = code;
        const body2 = error.body;
        let message;
        if (body2 != null) {
          message = body2.message;
        }
        obj[2] = message;
        const merged = Object.assign(closure_1_3);
        const merged1 = Object.assign(properties);
        del(trackedActionData[1]).trackNetworkAction(obj.event, obj);
        lib(error);
      });
    });
  },
  patch(trackedActionData) {
    patch = patch(trackedActionData[2]).HTTP.patch;
    trackedActionData = undefined;
    closure_2 = undefined;
    let callback;
    trackedActionData = trackedActionData.trackedActionData;
    const tmp = callback(trackedActionData, closure_2);
    closure_2 = tmp;
    callback = { url: tmp.url, request_method: "patch" };
    return new Promise((arg0, arg1) => {
      del = arg0;
      closure_1 = arg1;
      const promise = del(closure_2);
      del(closure_2).then((result) => {
        let obj = lib;
        let properties = lib.properties;
        if (typeof lib.properties === "function") {
          properties = obj.properties(result);
        }
        obj = { status_code: result.status };
        const merged = Object.assign(closure_1_3);
        const merged1 = Object.assign(properties);
        del(trackedActionData[1]).trackNetworkAction(obj.event, obj);
        callback(result);
      }).catch((error) => {
        let obj = lib;
        let properties = lib.properties;
        if (typeof lib.properties === "function") {
          properties = obj.properties(error);
        }
        obj = { status_code: error.status, error_code: null, error_message: null };
        const body = error.body;
        let code;
        if (body != null) {
          code = body.code;
        }
        obj[1] = code;
        const body2 = error.body;
        let message;
        if (body2 != null) {
          message = body2.message;
        }
        obj[2] = message;
        const merged = Object.assign(closure_1_3);
        const merged1 = Object.assign(properties);
        del(trackedActionData[1]).trackNetworkAction(obj.event, obj);
        lib(error);
      });
    });
  },
  delete: function del(trackedActionData) {
    del = del(trackedActionData[2]).HTTP.del;
    trackedActionData = undefined;
    closure_2 = undefined;
    let callback;
    trackedActionData = trackedActionData.trackedActionData;
    const tmp = callback(trackedActionData, closure_2);
    closure_2 = tmp;
    callback = { url: tmp.url, request_method: "del" };
    return new Promise((arg0, arg1) => {
      del = arg0;
      closure_1 = arg1;
      const promise = del(closure_2);
      del(closure_2).then((result) => {
        let obj = lib;
        let properties = lib.properties;
        if (typeof lib.properties === "function") {
          properties = obj.properties(result);
        }
        obj = { status_code: result.status };
        const merged = Object.assign(closure_1_3);
        const merged1 = Object.assign(properties);
        del(trackedActionData[1]).trackNetworkAction(obj.event, obj);
        callback(result);
      }).catch((error) => {
        let obj = lib;
        let properties = lib.properties;
        if (typeof lib.properties === "function") {
          properties = obj.properties(error);
        }
        obj = { status_code: error.status, error_code: null, error_message: null };
        const body = error.body;
        let code;
        if (body != null) {
          code = body.code;
        }
        obj[1] = code;
        const body2 = error.body;
        let message;
        if (body2 != null) {
          message = body2.message;
        }
        obj[2] = message;
        const merged = Object.assign(closure_1_3);
        const merged1 = Object.assign(properties);
        del(trackedActionData[1]).trackNetworkAction(obj.event, obj);
        lib(error);
      });
    });
  }
};