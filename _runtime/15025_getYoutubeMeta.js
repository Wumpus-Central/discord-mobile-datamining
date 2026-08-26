// _runtime/15025_getYoutubeMeta.js
import _regeneratorRuntime from "15026__regeneratorRuntime.js";
import 08208__ from "metro/08208__.js";

let closure_0 = module_8208(_regeneratorRuntime);

export const getYoutubeMeta = function getYoutubeMeta(arg0) {
  const mod = arg0;
  return mod.default.async(function getYoutubeMeta$(next) {
    next = next.next;
    next.prev = next;
    while (0 !== next) {
      if (2 === next) {
        let sent = next.sent;
        next.next = 5;
        let tmp = mod;
        let _default = mod.default;
        let tmp2 = sent;
        return _default.awrap(sent.json());
      } else if (5 === next) {
        let str = "return";
        return next.abrupt("return", next.sent);
      } else {
        return next.stop();
      }
    }
    next.next = 2;
    return mod.default.awrap(fetch("https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=" + mod + "&format=json"));
  }, null, null, null, Promise);
};