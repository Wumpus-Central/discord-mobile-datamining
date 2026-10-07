// === Module 241: __fetchSegment ===

// Module 241 (__fetchSegment)
import SegmentFetcher from "SegmentFetcher" /* 242 */;

require = arg1;
const dependencyMap = arg6;
arg0.__fetchSegment = function __fetchSegment(arg0, arg1, arg2) {
  closure_0 = arg2;
  const segment = SegmentFetcher.default.fetchSegment(arg0, arg1, (message) => {
    if (message) {
      const _Error = Error;
      const error = new Error(message.message);
      error.code = message.code;
      closure_0(error);
    } else {
      closure_0(null);
    }
  });
};