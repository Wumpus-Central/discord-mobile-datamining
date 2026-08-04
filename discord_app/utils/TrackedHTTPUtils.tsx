import _objectWithoutProperties from "_objectWithoutProperties";

const require = arg1;
let closure_2 = ["trackedActionData"];
const result = require("sendRequest").fileFinishedImporting("utils/TrackedHTTPUtils.tsx");

export default {
  get(trackedActionData) {
    get = get(trackedActionData[2]).HTTP.get;
    trackedActionData = undefined;
    let c2;
    let callback;
    trackedActionData = trackedActionData.trackedActionData;
    const tmp = callback(trackedActionData, c2);
    c2 = tmp;
    callback = { url: tmp.url, request_method: "get" };
    return new Promise((arg0, arg1) => {
      const del = arg0;
      let closure_1 = arg1;
      const promise = del(c2);
      del(c2).then((status) => {
        let obj = lib;
        let properties = lib.properties;
        if (typeof lib.properties === "function") {
          properties = obj.properties(status);
        }
        obj = { status_code: status.status };
        const merged = Object.assign(outer1_3);
        const merged1 = Object.assign(properties);
        del(trackedActionData[1]).trackNetworkAction(obj.event, obj);
        callback(status);
      }).catch((status) => {
        let obj = lib;
        let properties = lib.properties;
        if (typeof lib.properties === "function") {
          properties = obj.properties(status);
        }
        obj = { status_code: status.status, error_code: null, error_message: null };
        const body = status.body;
        let code;
        if (body != null) {
          code = body.code;
        }
        obj[1] = code;
        const body2 = status.body;
        let message;
        if (body2 != null) {
          message = body2.message;
        }
        obj[2] = message;
        const merged = Object.assign(outer1_3);
        const merged1 = Object.assign(properties);
        del(trackedActionData[1]).trackNetworkAction(obj.event, obj);
        lib(status);
      });
    });
  },
  post(trackedActionData, responseHandler) {
    post = post(trackedActionData[2]).HTTP.post;
    trackedActionData = undefined;
    let c2;
    let callback;
    trackedActionData = trackedActionData.trackedActionData;
    const tmp = callback(trackedActionData, c2);
    c2 = tmp;
    callback = { url: tmp.url, request_method: "post" };
    return new Promise((arg0, arg1) => {
      const del = arg0;
      let closure_1 = arg1;
      const promise = del(c2);
      del(c2).then((status) => {
        let obj = lib;
        let properties = lib.properties;
        if (typeof lib.properties === "function") {
          properties = obj.properties(status);
        }
        obj = { status_code: status.status };
        const merged = Object.assign(outer1_3);
        const merged1 = Object.assign(properties);
        del(trackedActionData[1]).trackNetworkAction(obj.event, obj);
        callback(status);
      }).catch((status) => {
        let obj = lib;
        let properties = lib.properties;
        if (typeof lib.properties === "function") {
          properties = obj.properties(status);
        }
        obj = { status_code: status.status, error_code: null, error_message: null };
        const body = status.body;
        let code;
        if (body != null) {
          code = body.code;
        }
        obj[1] = code;
        const body2 = status.body;
        let message;
        if (body2 != null) {
          message = body2.message;
        }
        obj[2] = message;
        const merged = Object.assign(outer1_3);
        const merged1 = Object.assign(properties);
        del(trackedActionData[1]).trackNetworkAction(obj.event, obj);
        lib(status);
      });
    });
  },
  put(trackedActionData) {
    put = put(trackedActionData[2]).HTTP.put;
    trackedActionData = undefined;
    let c2;
    let callback;
    trackedActionData = trackedActionData.trackedActionData;
    const tmp = callback(trackedActionData, c2);
    c2 = tmp;
    callback = { url: tmp.url, request_method: "put" };
    return new Promise((arg0, arg1) => {
      const del = arg0;
      let closure_1 = arg1;
      const promise = del(c2);
      del(c2).then((status) => {
        let obj = lib;
        let properties = lib.properties;
        if (typeof lib.properties === "function") {
          properties = obj.properties(status);
        }
        obj = { status_code: status.status };
        const merged = Object.assign(outer1_3);
        const merged1 = Object.assign(properties);
        del(trackedActionData[1]).trackNetworkAction(obj.event, obj);
        callback(status);
      }).catch((status) => {
        let obj = lib;
        let properties = lib.properties;
        if (typeof lib.properties === "function") {
          properties = obj.properties(status);
        }
        obj = { status_code: status.status, error_code: null, error_message: null };
        const body = status.body;
        let code;
        if (body != null) {
          code = body.code;
        }
        obj[1] = code;
        const body2 = status.body;
        let message;
        if (body2 != null) {
          message = body2.message;
        }
        obj[2] = message;
        const merged = Object.assign(outer1_3);
        const merged1 = Object.assign(properties);
        del(trackedActionData[1]).trackNetworkAction(obj.event, obj);
        lib(status);
      });
    });
  },
  patch(trackedActionData) {
    patch = patch(trackedActionData[2]).HTTP.patch;
    trackedActionData = undefined;
    let c2;
    let callback;
    trackedActionData = trackedActionData.trackedActionData;
    const tmp = callback(trackedActionData, c2);
    c2 = tmp;
    callback = { url: tmp.url, request_method: "patch" };
    return new Promise((arg0, arg1) => {
      const del = arg0;
      let closure_1 = arg1;
      const promise = del(c2);
      del(c2).then((status) => {
        let obj = lib;
        let properties = lib.properties;
        if (typeof lib.properties === "function") {
          properties = obj.properties(status);
        }
        obj = { status_code: status.status };
        const merged = Object.assign(outer1_3);
        const merged1 = Object.assign(properties);
        del(trackedActionData[1]).trackNetworkAction(obj.event, obj);
        callback(status);
      }).catch((status) => {
        let obj = lib;
        let properties = lib.properties;
        if (typeof lib.properties === "function") {
          properties = obj.properties(status);
        }
        obj = { status_code: status.status, error_code: null, error_message: null };
        const body = status.body;
        let code;
        if (body != null) {
          code = body.code;
        }
        obj[1] = code;
        const body2 = status.body;
        let message;
        if (body2 != null) {
          message = body2.message;
        }
        obj[2] = message;
        const merged = Object.assign(outer1_3);
        const merged1 = Object.assign(properties);
        del(trackedActionData[1]).trackNetworkAction(obj.event, obj);
        lib(status);
      });
    });
  },
  delete: function del(trackedActionData) {
    del = del(trackedActionData[2]).HTTP.del;
    trackedActionData = undefined;
    let c2;
    let callback;
    trackedActionData = trackedActionData.trackedActionData;
    const tmp = callback(trackedActionData, c2);
    c2 = tmp;
    callback = { url: tmp.url, request_method: "del" };
    return new Promise((arg0, arg1) => {
      const del = arg0;
      let closure_1 = arg1;
      const promise = del(c2);
      del(c2).then((status) => {
        let obj = lib;
        let properties = lib.properties;
        if (typeof lib.properties === "function") {
          properties = obj.properties(status);
        }
        obj = { status_code: status.status };
        const merged = Object.assign(outer1_3);
        const merged1 = Object.assign(properties);
        del(trackedActionData[1]).trackNetworkAction(obj.event, obj);
        callback(status);
      }).catch((status) => {
        let obj = lib;
        let properties = lib.properties;
        if (typeof lib.properties === "function") {
          properties = obj.properties(status);
        }
        obj = { status_code: status.status, error_code: null, error_message: null };
        const body = status.body;
        let code;
        if (body != null) {
          code = body.code;
        }
        obj[1] = code;
        const body2 = status.body;
        let message;
        if (body2 != null) {
          message = body2.message;
        }
        obj[2] = message;
        const merged = Object.assign(outer1_3);
        const merged1 = Object.assign(properties);
        del(trackedActionData[1]).trackNetworkAction(obj.event, obj);
        lib(status);
      });
    });
  }
};