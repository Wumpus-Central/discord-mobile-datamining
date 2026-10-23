// === Module 16866: ? ===

// Module 16866
import _regeneratorRuntime2 from "_regeneratorRuntime" /* 16867 */;
import module_8768 from "module_8768" /* 8768 */;

let _regeneratorRuntime = module_8768(_regeneratorRuntime2);

export const getYoutubeMeta = function getYoutubeMeta(arg0) {
  _regeneratorRuntime = arg0;
  return _regeneratorRuntime.default.async(async function getYoutubeMeta$(next) {
    next = next.next;
    next.prev = next;
    while (0 !== next) {
      if (2 === next) {
        sent = next.sent;
        next.next = 5;
        let _default = _regeneratorRuntime.default;
        return _default.awrap(sent.json());
      } else if (5 === next) {
        let str = "return";
        return next.abrupt("return", next.sent);
      } else {
        return next.stop();
      }
    }
    next.next = 2;
    return _regeneratorRuntime.default.awrap(fetch("https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=" + closure_0 + "&format=json"));
  }, null, null, null, Promise);
};