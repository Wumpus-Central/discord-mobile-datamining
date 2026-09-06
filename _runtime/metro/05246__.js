// === Module 5246: ? ===

// Module 5246
import _modDef5247 from "module_5247" /* 5247 */;

importDefault = arg2;
const dependencyMap = arg6;

export default {
  decode(arg0, buffer) {
    value = _modDef5247.get();
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
    const mapped = buffer.map((item) => String.fromCharCode(item));
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