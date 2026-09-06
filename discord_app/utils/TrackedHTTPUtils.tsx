// discord_app/utils/TrackedHTTPUtils.tsx
import AnalyticsUtils from "AnalyticsUtils.tsx";
import _objectWithoutProperties from "../../_runtime/metro/00109__objectWithoutProperties.js";

require = fn;
let closure_2 = ["trackedActionData"];
const size = fn(2);
const result = size.fileFinishedImporting("utils/TrackedHTTPUtils.tsx");

export default {
  get(trackedActionData) {
    get = get(trackedActionData[2]).HTTP.get;
    trackedActionData = undefined;
    closure_2 = undefined;
    _objectWithoutProperties = undefined;
    trackedActionData = trackedActionData.trackedActionData;
    const tmp = _objectWithoutProperties(trackedActionData, closure_2);
    closure_2 = tmp;
    _objectWithoutProperties = { url: tmp.url, request_method: "get" };
    return new Promise((arg0, arg1) => {
      del = arg0;
      closure_1 = arg1;
      const promise = del(closure_2);
      del(closure_2)
        .then((status) => {
          let obj = trackedActionData;
          let properties = trackedActionData.properties;
          if (typeof trackedActionData.properties === "function") {
            properties = obj.properties(status);
          }
          obj = { status_code: status.status };
          const merged = Object.assign(closure_3);
          const merged1 = Object.assign(properties);
          AnalyticsUtils.trackNetworkAction(obj.event, obj);
          closure_0(status);
        })
        .catch((error) => {
          let obj = trackedActionData;
          let properties = trackedActionData.properties;
          if (typeof trackedActionData.properties === "function") {
            properties = obj.properties(error);
          }
          obj = { status_code: error.status, error_code: null, error_message: null };
          const body = error.body;
          let code;
          if (body != null) {
            code = body.code;
          }
          obj.error_code = code;
          const body2 = error.body;
          let message;
          if (body2 != null) {
            message = body2.message;
          }
          obj.error_message = message;
          const merged = Object.assign(closure_3);
          const merged1 = Object.assign(properties);
          AnalyticsUtils.trackNetworkAction(obj.event, obj);
          closure_1(error);
        });
    });
  },
  post(request) {
    post = post(trackedActionData[2]).HTTP.post;
    closure_2 = undefined;
    _objectWithoutProperties = undefined;
    trackedActionData = request.trackedActionData;
    const tmp = _objectWithoutProperties(request, closure_2);
    closure_2 = tmp;
    _objectWithoutProperties = { url: tmp.url, request_method: "post" };
    return new Promise((arg0, arg1) => {
      del = arg0;
      closure_1 = arg1;
      const promise = del(closure_2);
      del(closure_2)
        .then((status) => {
          let obj = trackedActionData;
          let properties = trackedActionData.properties;
          if (typeof trackedActionData.properties === "function") {
            properties = obj.properties(status);
          }
          obj = { status_code: status.status };
          const merged = Object.assign(closure_3);
          const merged1 = Object.assign(properties);
          AnalyticsUtils.trackNetworkAction(obj.event, obj);
          closure_0(status);
        })
        .catch((error) => {
          let obj = trackedActionData;
          let properties = trackedActionData.properties;
          if (typeof trackedActionData.properties === "function") {
            properties = obj.properties(error);
          }
          obj = { status_code: error.status, error_code: null, error_message: null };
          const body = error.body;
          let code;
          if (body != null) {
            code = body.code;
          }
          obj.error_code = code;
          const body2 = error.body;
          let message;
          if (body2 != null) {
            message = body2.message;
          }
          obj.error_message = message;
          const merged = Object.assign(closure_3);
          const merged1 = Object.assign(properties);
          AnalyticsUtils.trackNetworkAction(obj.event, obj);
          closure_1(error);
        });
    });
  },
  put(trackedActionData) {
    put = put(trackedActionData[2]).HTTP.put;
    trackedActionData = undefined;
    closure_2 = undefined;
    _objectWithoutProperties = undefined;
    trackedActionData = trackedActionData.trackedActionData;
    const tmp = _objectWithoutProperties(trackedActionData, closure_2);
    closure_2 = tmp;
    _objectWithoutProperties = { url: tmp.url, request_method: "put" };
    return new Promise((arg0, arg1) => {
      del = arg0;
      closure_1 = arg1;
      const promise = del(closure_2);
      del(closure_2)
        .then((status) => {
          let obj = trackedActionData;
          let properties = trackedActionData.properties;
          if (typeof trackedActionData.properties === "function") {
            properties = obj.properties(status);
          }
          obj = { status_code: status.status };
          const merged = Object.assign(closure_3);
          const merged1 = Object.assign(properties);
          AnalyticsUtils.trackNetworkAction(obj.event, obj);
          closure_0(status);
        })
        .catch((error) => {
          let obj = trackedActionData;
          let properties = trackedActionData.properties;
          if (typeof trackedActionData.properties === "function") {
            properties = obj.properties(error);
          }
          obj = { status_code: error.status, error_code: null, error_message: null };
          const body = error.body;
          let code;
          if (body != null) {
            code = body.code;
          }
          obj.error_code = code;
          const body2 = error.body;
          let message;
          if (body2 != null) {
            message = body2.message;
          }
          obj.error_message = message;
          const merged = Object.assign(closure_3);
          const merged1 = Object.assign(properties);
          AnalyticsUtils.trackNetworkAction(obj.event, obj);
          closure_1(error);
        });
    });
  },
  patch(trackedActionData) {
    patch = patch(trackedActionData[2]).HTTP.patch;
    trackedActionData = undefined;
    closure_2 = undefined;
    _objectWithoutProperties = undefined;
    trackedActionData = trackedActionData.trackedActionData;
    const tmp = _objectWithoutProperties(trackedActionData, closure_2);
    closure_2 = tmp;
    _objectWithoutProperties = { url: tmp.url, request_method: "patch" };
    return new Promise((arg0, arg1) => {
      del = arg0;
      closure_1 = arg1;
      const promise = del(closure_2);
      del(closure_2)
        .then((status) => {
          let obj = trackedActionData;
          let properties = trackedActionData.properties;
          if (typeof trackedActionData.properties === "function") {
            properties = obj.properties(status);
          }
          obj = { status_code: status.status };
          const merged = Object.assign(closure_3);
          const merged1 = Object.assign(properties);
          AnalyticsUtils.trackNetworkAction(obj.event, obj);
          closure_0(status);
        })
        .catch((error) => {
          let obj = trackedActionData;
          let properties = trackedActionData.properties;
          if (typeof trackedActionData.properties === "function") {
            properties = obj.properties(error);
          }
          obj = { status_code: error.status, error_code: null, error_message: null };
          const body = error.body;
          let code;
          if (body != null) {
            code = body.code;
          }
          obj.error_code = code;
          const body2 = error.body;
          let message;
          if (body2 != null) {
            message = body2.message;
          }
          obj.error_message = message;
          const merged = Object.assign(closure_3);
          const merged1 = Object.assign(properties);
          AnalyticsUtils.trackNetworkAction(obj.event, obj);
          closure_1(error);
        });
    });
  },
  delete: function del(trackedActionData) {
    del = del(trackedActionData[2]).HTTP.del;
    trackedActionData = undefined;
    closure_2 = undefined;
    _objectWithoutProperties = undefined;
    trackedActionData = trackedActionData.trackedActionData;
    const tmp = _objectWithoutProperties(trackedActionData, closure_2);
    closure_2 = tmp;
    _objectWithoutProperties = { url: tmp.url, request_method: "del" };
    return new Promise((arg0, arg1) => {
      del = arg0;
      closure_1 = arg1;
      const promise = del(closure_2);
      del(closure_2)
        .then((status) => {
          let obj = trackedActionData;
          let properties = trackedActionData.properties;
          if (typeof trackedActionData.properties === "function") {
            properties = obj.properties(status);
          }
          obj = { status_code: status.status };
          const merged = Object.assign(closure_3);
          const merged1 = Object.assign(properties);
          AnalyticsUtils.trackNetworkAction(obj.event, obj);
          closure_0(status);
        })
        .catch((error) => {
          let obj = trackedActionData;
          let properties = trackedActionData.properties;
          if (typeof trackedActionData.properties === "function") {
            properties = obj.properties(error);
          }
          obj = { status_code: error.status, error_code: null, error_message: null };
          const body = error.body;
          let code;
          if (body != null) {
            code = body.code;
          }
          obj.error_code = code;
          const body2 = error.body;
          let message;
          if (body2 != null) {
            message = body2.message;
          }
          obj.error_message = message;
          const merged = Object.assign(closure_3);
          const merged1 = Object.assign(properties);
          AnalyticsUtils.trackNetworkAction(obj.event, obj);
          closure_1(error);
        });
    });
  },
};
