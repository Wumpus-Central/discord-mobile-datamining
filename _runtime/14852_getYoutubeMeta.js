// _runtime/14852_getYoutubeMeta.js
import _regeneratorRuntime2 from "14853__regeneratorRuntime.js";
import 08106__ from "metro/08106__.js";

let _regeneratorRuntime = module_8106(_regeneratorRuntime2);

export const getYoutubeMeta = function getYoutubeMeta(arg0) {
  _regeneratorRuntime = arg0;
  return _regeneratorRuntime.default.async(function getYoutubeMeta$(next) {
    next = next.next;
    next.prev = next;
    while (0 !== next) {
      if (2 === next) {
        let sent = next.sent;
        next.next = 5;
        let _default = mod.default;
        return _default.awrap(sent.json());
      } else if (5 === next) {
        return next.abrupt("return", next.sent);
      } else {
        return next.stop();
      }
    }
    next.next = 2;
    return mod.default.awrap(fetch("https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=" + mod + "&format=json"));
  }, null, null, null, Promise);
};