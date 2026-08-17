// _runtime/00241___fetchSegment.js
import { SegmentFetcher } from "00242_SegmentFetcher.js";
const require = arg1;
const dependencyMap = arg6;
arg0.__fetchSegment = function __fetchSegment(arg0, arg1, arg2) {
  const _require = arg2;
  const segment = _SegmentFetcher.default.fetchSegment(arg0, arg1, (message) => {
    if (message) {
      const _Error = Error;
      error = new Error(message.message);
      error.code = message.code;
      callback(error);
    } else {
      callback(null);
    }
  });
};