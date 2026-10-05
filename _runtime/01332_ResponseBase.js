// === Module 1332: ResponseBase ===

// Module 1332 (ResponseBase)
import type from "type" /* 1284 */;

let hasOwnProperty;

class ResponseBase {
  constructor() {

  }
  get(arg0) {
    return this.header[arg0.toLowerCase(arg0)];
  }
  _setHeaderProperties(content_type) {
    const self = this;
    const obj = type;
    this.type = obj.type(content_type["content-type"] || "");
    const obj2 = type;
    const paramsResult = obj2.params(content_type["content-type"] || "");
    for (const key10017 in paramsResult) {
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      if (!hasOwnProperty.call(paramsResult, key10017)) {
        continue;
      } else {
        self[key10017] = paramsResult[key10017];
        continue;
      }
      continue;
    }
    self.links = {};
    try {
      if (content_type.link) {
        const obj3 = type;
        self.links = obj3.parseLinks(content_type.link);
      }
    } catch (err) {
    }
  }
  _setStatusProperties(statusCode) {
    const self = this;
    const truncResult = Math.trunc(statusCode / 100);
    this.statusCode = statusCode;
    this.status = this.statusCode;
    this.statusType = truncResult;
    this.info = 1 === truncResult;
    this.ok = 2 === truncResult;
    this.redirect = 3 === truncResult;
    let toErrorResult = 4 === truncResult;
    this.clientError = toErrorResult;
    this.serverError = 5 === truncResult;
    if (!toErrorResult) {
      toErrorResult = tmp3;
    }
    if (toErrorResult) {
      toErrorResult = self.toError();
    }
    self.error = toErrorResult;
    self.created = 201 === statusCode;
    self.accepted = 202 === statusCode;
    self.noContent = 204 === statusCode;
    self.badRequest = 400 === statusCode;
    self.unauthorized = 401 === statusCode;
    self.notAcceptable = 406 === statusCode;
    self.forbidden = 403 === statusCode;
    self.notFound = 404 === statusCode;
    self.unprocessableEntity = 422 === statusCode;
  }
}

export default ResponseBase;