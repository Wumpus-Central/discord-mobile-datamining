// === Module 241: SegmentFetcher ===

// Module 241 (SegmentFetcher)
import _mod242 from "module_242" /* 242 */;

global.__fetchSegment = function __fetchSegment(arg0, arg1, arg2) {
  let closure_0 = arg2;
  const _default = _mod242.default;
  const segment = _default.fetchSegment(arg0, arg1, function(message) {
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