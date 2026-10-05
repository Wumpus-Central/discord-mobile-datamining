// _runtime/00241_SegmentFetcher.js
import _mod242 from "metro/00242__.js";

global.__fetchSegment = function __fetchSegment(arg0, arg1, arg2) {
  let closure_0 = arg2;
  const _default = _mod242.default;
  const segment = _default.fetchSegment(arg0, arg1, function (message) {
    const tmp = message;
    if (tmp) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error(message.message);
      error.code = message.code;
      closure_0(error);
    } else {
      closure_0(null);
    }
  });
};
