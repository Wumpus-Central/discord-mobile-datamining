// === Module 5089: TrackedHTTPUtils ===

// Module 5089 (TrackedHTTPUtils)
import AnalyticsUtils from "AnalyticsUtils" /* 1252 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import size from "module_2" /* 2 */;

let closure_2 = ["trackedActionData"];
let _objectWithoutProperties = _objectWithoutProperties_mod;
const obj = {
  get(trackedActionData) {
    let closure_3;
    let get;
    get = get(trackedActionData[2]).HTTP.get;
    trackedActionData = undefined;
    closure_2 = undefined;
    _objectWithoutProperties = undefined;
    trackedActionData = trackedActionData.trackedActionData;
    const tmp = _objectWithoutProperties(trackedActionData, closure_2);
    closure_2 = tmp;
    _objectWithoutProperties = { url: tmp.url, request_method: "get" };
    const promise = new Promise((arg0, arg1) => {
      let closure_0;
      del = arg0;
      let closure_1 = arg1;
      const promise = del(closure_2);
      const nextPromise = promise.then((status) => {
        let properties = trackedActionData.properties;
        if (typeof trackedActionData.properties === "function") {
          properties = trackedActionData.properties(status);
        }
        const trackNetworkAction = AnalyticsUtils.trackNetworkAction;
        const event = trackedActionData.event;
        const obj2 = { status_code: status.status };
        AnalyticsUtils;
        const merged = Object.assign(closure_3);
        const merged1 = Object.assign(properties);
        trackNetworkAction(event, obj2);
        closure_0(status);
      });
      nextPromise.catch((error) => {
        let code;
        let message;
        let properties = trackedActionData.properties;
        if (typeof trackedActionData.properties === "function") {
          properties = trackedActionData.properties(error);
        }
        const body = error.body;
        const obj2 = { status_code: error.status, error_code: code, error_message: message };
        code = undefined;
        const trackNetworkAction = AnalyticsUtils.trackNetworkAction;
        const event = trackedActionData.event;
        AnalyticsUtils;
        if (body != null) {
          code = body.code;
        }
        const body2 = error.body;
        message = undefined;
        if (body2 != null) {
          message = body2.message;
        }
        const merged = Object.assign(closure_3);
        const merged1 = Object.assign(properties);
        trackNetworkAction(event, obj2);
        closure_1(error);
      });
    });
    return promise;
  },
  post(trackedActionData) {
    let closure_3;
    let post;
    post = post(trackedActionData[2]).HTTP.post;
    trackedActionData = undefined;
    closure_2 = undefined;
    _objectWithoutProperties = undefined;
    trackedActionData = trackedActionData.trackedActionData;
    const tmp = _objectWithoutProperties(trackedActionData, closure_2);
    closure_2 = tmp;
    _objectWithoutProperties = { url: tmp.url, request_method: "post" };
    const promise = new Promise((arg0, arg1) => {
      let closure_0;
      del = arg0;
      let closure_1 = arg1;
      const promise = del(closure_2);
      const nextPromise = promise.then((status) => {
        let properties = trackedActionData.properties;
        if (typeof trackedActionData.properties === "function") {
          properties = trackedActionData.properties(status);
        }
        const trackNetworkAction = AnalyticsUtils.trackNetworkAction;
        const event = trackedActionData.event;
        const obj2 = { status_code: status.status };
        AnalyticsUtils;
        const merged = Object.assign(closure_3);
        const merged1 = Object.assign(properties);
        trackNetworkAction(event, obj2);
        closure_0(status);
      });
      nextPromise.catch((error) => {
        let code;
        let message;
        let properties = trackedActionData.properties;
        if (typeof trackedActionData.properties === "function") {
          properties = trackedActionData.properties(error);
        }
        const body = error.body;
        const obj2 = { status_code: error.status, error_code: code, error_message: message };
        code = undefined;
        const trackNetworkAction = AnalyticsUtils.trackNetworkAction;
        const event = trackedActionData.event;
        AnalyticsUtils;
        if (body != null) {
          code = body.code;
        }
        const body2 = error.body;
        message = undefined;
        if (body2 != null) {
          message = body2.message;
        }
        const merged = Object.assign(closure_3);
        const merged1 = Object.assign(properties);
        trackNetworkAction(event, obj2);
        closure_1(error);
      });
    });
    return promise;
  },
  put(trackedActionData) {
    let closure_3;
    let put;
    put = put(trackedActionData[2]).HTTP.put;
    trackedActionData = undefined;
    closure_2 = undefined;
    _objectWithoutProperties = undefined;
    trackedActionData = trackedActionData.trackedActionData;
    const tmp = _objectWithoutProperties(trackedActionData, closure_2);
    closure_2 = tmp;
    _objectWithoutProperties = { url: tmp.url, request_method: "put" };
    const promise = new Promise((arg0, arg1) => {
      let closure_0;
      del = arg0;
      let closure_1 = arg1;
      const promise = del(closure_2);
      const nextPromise = promise.then((status) => {
        let properties = trackedActionData.properties;
        if (typeof trackedActionData.properties === "function") {
          properties = trackedActionData.properties(status);
        }
        const trackNetworkAction = AnalyticsUtils.trackNetworkAction;
        const event = trackedActionData.event;
        const obj2 = { status_code: status.status };
        AnalyticsUtils;
        const merged = Object.assign(closure_3);
        const merged1 = Object.assign(properties);
        trackNetworkAction(event, obj2);
        closure_0(status);
      });
      nextPromise.catch((error) => {
        let code;
        let message;
        let properties = trackedActionData.properties;
        if (typeof trackedActionData.properties === "function") {
          properties = trackedActionData.properties(error);
        }
        const body = error.body;
        const obj2 = { status_code: error.status, error_code: code, error_message: message };
        code = undefined;
        const trackNetworkAction = AnalyticsUtils.trackNetworkAction;
        const event = trackedActionData.event;
        AnalyticsUtils;
        if (body != null) {
          code = body.code;
        }
        const body2 = error.body;
        message = undefined;
        if (body2 != null) {
          message = body2.message;
        }
        const merged = Object.assign(closure_3);
        const merged1 = Object.assign(properties);
        trackNetworkAction(event, obj2);
        closure_1(error);
      });
    });
    return promise;
  },
  patch(trackedActionData) {
    let closure_3;
    let patch;
    patch = patch(trackedActionData[2]).HTTP.patch;
    trackedActionData = undefined;
    closure_2 = undefined;
    _objectWithoutProperties = undefined;
    trackedActionData = trackedActionData.trackedActionData;
    const tmp = _objectWithoutProperties(trackedActionData, closure_2);
    closure_2 = tmp;
    _objectWithoutProperties = { url: tmp.url, request_method: "patch" };
    const promise = new Promise((arg0, arg1) => {
      let closure_0;
      del = arg0;
      let closure_1 = arg1;
      const promise = del(closure_2);
      const nextPromise = promise.then((status) => {
        let properties = trackedActionData.properties;
        if (typeof trackedActionData.properties === "function") {
          properties = trackedActionData.properties(status);
        }
        const trackNetworkAction = AnalyticsUtils.trackNetworkAction;
        const event = trackedActionData.event;
        const obj2 = { status_code: status.status };
        AnalyticsUtils;
        const merged = Object.assign(closure_3);
        const merged1 = Object.assign(properties);
        trackNetworkAction(event, obj2);
        closure_0(status);
      });
      nextPromise.catch((error) => {
        let code;
        let message;
        let properties = trackedActionData.properties;
        if (typeof trackedActionData.properties === "function") {
          properties = trackedActionData.properties(error);
        }
        const body = error.body;
        const obj2 = { status_code: error.status, error_code: code, error_message: message };
        code = undefined;
        const trackNetworkAction = AnalyticsUtils.trackNetworkAction;
        const event = trackedActionData.event;
        AnalyticsUtils;
        if (body != null) {
          code = body.code;
        }
        const body2 = error.body;
        message = undefined;
        if (body2 != null) {
          message = body2.message;
        }
        const merged = Object.assign(closure_3);
        const merged1 = Object.assign(properties);
        trackNetworkAction(event, obj2);
        closure_1(error);
      });
    });
    return promise;
  },
  delete: function del(trackedActionData) {
    let closure_3;
    let del;
    del = del(trackedActionData[2]).HTTP.del;
    trackedActionData = undefined;
    closure_2 = undefined;
    _objectWithoutProperties = undefined;
    trackedActionData = trackedActionData.trackedActionData;
    const tmp = _objectWithoutProperties(trackedActionData, closure_2);
    closure_2 = tmp;
    _objectWithoutProperties = { url: tmp.url, request_method: "del" };
    let promise = new Promise((arg0, arg1) => {
      let closure_0;
      del = arg0;
      let closure_1 = arg1;
      const promise = del(closure_2);
      const nextPromise = promise.then((status) => {
        let properties = trackedActionData.properties;
        if (typeof trackedActionData.properties === "function") {
          properties = trackedActionData.properties(status);
        }
        const trackNetworkAction = AnalyticsUtils.trackNetworkAction;
        const event = trackedActionData.event;
        const obj2 = { status_code: status.status };
        AnalyticsUtils;
        const merged = Object.assign(closure_3);
        const merged1 = Object.assign(properties);
        trackNetworkAction(event, obj2);
        closure_0(status);
      });
      nextPromise.catch((error) => {
        let code;
        let message;
        let properties = trackedActionData.properties;
        if (typeof trackedActionData.properties === "function") {
          properties = trackedActionData.properties(error);
        }
        const body = error.body;
        const obj2 = { status_code: error.status, error_code: code, error_message: message };
        code = undefined;
        const trackNetworkAction = AnalyticsUtils.trackNetworkAction;
        const event = trackedActionData.event;
        AnalyticsUtils;
        if (body != null) {
          code = body.code;
        }
        const body2 = error.body;
        message = undefined;
        if (body2 != null) {
          message = body2.message;
        }
        const merged = Object.assign(closure_3);
        const merged1 = Object.assign(properties);
        trackNetworkAction(event, obj2);
        closure_1(error);
      });
    });
    return promise;
  }
};
const result = size.fileFinishedImporting("utils/TrackedHTTPUtils.tsx");

export default obj;