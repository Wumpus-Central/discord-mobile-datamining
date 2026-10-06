// _runtime/metro/07389__.js
import _modDef7390 from "07390__.js";

export default {
  decode(arg0, buffer) {
    function decodeAsciiValue(arg0) {
      try {
        const _decodeURIComponent = decodeURIComponent;
        const _escape = escape;
        return decodeURIComponent(escape(arg0));
      } catch (err) {
        return arg0;
      }
    }
    const obj = _modDef7390;
    const value = obj.get();
    if (undefined !== value) {
      if (undefined !== arg0) {
        try {
          const self = this;
          const self2 = this;
          const value1 = new value(arg0);
          const _DataView = DataView;
          const decode = value1.decode;
          if (buffer instanceof DataView) {
            buffer = buffer.buffer;
          } else {
            const _Uint8Array = Uint8Array;
            buffer = Uint8Array.from(buffer);
          }
          return decode(buffer);
        } catch (err) {}
      }
    }
    const mapped = buffer.map((item) => String.fromCharCode(item));
    return decodeAsciiValue(mapped.join(""));
  },
  TAG_HEADER_SIZE: 5,
};
