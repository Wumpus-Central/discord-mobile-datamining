// === Module 2000: buildFormatLongFn ===

// Module 2000 (buildFormatLongFn)

export default function buildFormatLongFn(arg0) {
  closure_0 = arg0;
  return () => {
    if (arguments.length > 0) {
      if (undefined !== arguments[0]) {
        let first = arguments[0];
      }
      if (first.width) {
        const _String = String;
        let defaultWidth = String(first.width);
      } else {
        defaultWidth = closure_0.defaultWidth;
      }
      return closure_0.formats[defaultWidth] || closure_0.formats[closure_0.defaultWidth];
    }
    first = {};
  };
};
export default exports.default;