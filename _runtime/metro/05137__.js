// === Module 5137: ? ===

// Module 5137
const module = arg2;
const dependencyMap = arg6;
arg5.default = {
  decode(arg0, buffer) {
    let value = module(5138).get();
    if (undefined !== value) {
      if (undefined !== arg0) {
        try {
          value = new value(arg0);
          const _DataView = DataView;
          if (buffer instanceof DataView) {
            buffer = buffer.buffer;
          } else {
            const _Uint8Array = Uint8Array;
            buffer = Uint8Array.from(buffer);
          }
          value.decode(buffer);
        } catch (err) {
        }
      }
    }
    const mapped = buffer.map((arg0) => String.fromCharCode(arg0));
    return (function decodeAsciiValue(mapped) {
      try {
        const _decodeURIComponent = decodeURIComponent;
        const _escape = escape;
        return decodeURIComponent(escape(mapped));
      } catch (err) {
        return tmp;
      }
    })(mapped.join(""));
  },
  TAG_HEADER_SIZE: 5
};