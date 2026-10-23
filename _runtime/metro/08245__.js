// === Module 8245: ? ===

// Module 8245
import _modDef8246 from "module_8246" /* 8246 */;

importDefault = arg2;
const dependencyMap = arg6;

export default {
  decode(arg0, buffer) {
    value = _modDef8246.get();
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