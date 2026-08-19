// === Module 4943: ? ===

// Module 4943
import _modDef4944 from "module_4944" /* 4944 */;

importDefault = arg2;
const dependencyMap = arg6;
arg5.default = {
  decode(arg0, buffer) {
    const value = _modDef4944.get();
    if (undefined !== value) {
      if (undefined !== arg0) {
        try {
          const decoder = new value(arg0);
          const _DataView = DataView;
          if (buffer instanceof DataView) {
            buffer = buffer.buffer;
          } else {
            const _Uint8Array = Uint8Array;
            buffer = Uint8Array.from(buffer);
          }
          decoder.decode(buffer);
        } catch (err) {
        }
      }
    }
    const mapped = buffer.map((item, index) => String.fromCharCode(item));
    return (function decodeAsciiValue(arg0) {
      try {
        const _decodeURIComponent = decodeURIComponent;
        const _escape = escape;
        return decodeURIComponent(escape(arg0));
      } catch (err) {
        return tmp;
      }
    })(mapped.join(""));
  },
  TAG_HEADER_SIZE: 5
};