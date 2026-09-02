// _runtime/00577_ResponseBase.js
import _createForOfIteratorHelper from "00529__createForOfIteratorHelper.js";

class ResponseBase {
  constructor() {
    return;
  }
  get(arg0) {
    return this.header[global.toLowerCase(global)];
  }
  _setHeaderProperties(arg0) {
    tmp = global["content-type"] || "";
    self = this;
    obj = require("_createForOfIteratorHelper");
    this.type = obj.type(tmp);
    obj2 = require("_createForOfIteratorHelper");
    paramsResult = obj2.params(tmp);
    for (const key10017 in paramsResult) {
      tmp6 = key10017;
      _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        hasOwnPropertyResult = hasOwnProperty(key10017);
      } else {
        hasOwnPropertyResult = call(paramsResult, key10017);
      }
      if (!hasOwnPropertyResult) {
        continue;
      } else {
        self[key10017] = paramsResult[key10017];
        continue;
      }
      continue;
    }
    self.links = {};
    try {
      if (!global.link) {
      } else {
        tmp4 = closure_0;
        tmp5 = closure_1;
        obj3 = require("_createForOfIteratorHelper");
        self.links = obj3.parseLinks(global.link);
      }
      return;
    } catch (err) {}
    return;
  }
  _setStatusProperties(arg0) {
    self = this;
    truncResult = Math.trunc(global / 100);
    this.statusCode = global;
    this.status = this.statusCode;
    this.statusType = truncResult;
    this.info = 1 === truncResult;
    this.ok = 2 === truncResult;
    this.redirect = 3 === truncResult;
    toErrorResult = 4 === truncResult;
    this.clientError = toErrorResult;
    tmp3 = 5 === truncResult;
    this.serverError = tmp3;
    if (!toErrorResult) {
      toErrorResult = tmp3;
    }
    if (toErrorResult) {
      toErrorResult = self.toError();
    }
    self.error = toErrorResult;
    self.created = 201 === global;
    self.accepted = 202 === global;
    self.noContent = 204 === global;
    self.badRequest = 400 === global;
    self.unauthorized = 401 === global;
    self.notAcceptable = 406 === global;
    self.forbidden = 403 === global;
    self.notFound = 404 === global;
    self.unprocessableEntity = 422 === global;
    return;
  }
}

export default ResponseBase;
