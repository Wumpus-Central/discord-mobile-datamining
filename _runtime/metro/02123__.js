// _runtime/metro/02123__.js

export default function buildMatchPatternFn(arg0) {
  const matchPattern = arg0;
  return (str) => {
    if (arguments.length > 1) {
      if (undefined !== arguments[1]) {
        let obj = arguments[1];
      }
      const match = str.match(matchPattern.matchPattern);
      if (match) {
        const match1 = str.match(matchPattern.parsePattern);
        if (match1) {
          if (matchPattern.valueCallback) {
            let first = matchPattern.valueCallback(match1[0]);
          } else {
            first = match1[0];
          }
          let valueCallbackResult2 = first;
          if (obj.valueCallback) {
            valueCallbackResult2 = obj.valueCallback(first);
          }
          const obj3 = { value: valueCallbackResult2, rest: str.slice(match[0].length) };
          return obj3;
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
    obj = {};
  };
};
export default exports.default;