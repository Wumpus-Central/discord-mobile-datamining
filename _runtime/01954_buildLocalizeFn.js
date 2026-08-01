// === Module 1954: buildLocalizeFn ===

// Module 1954 (buildLocalizeFn)

export default function buildLocalizeFn(arg0) {
  let closure_0 = arg0;
  return (arg0, context) => {
    let str = "standalone";
    if (null != context) {
      str = "standalone";
      if (context.context) {
        const _String = String;
        str = String(context.context);
      }
    }
    if ("formatting" === str) {
      if (formattingValues.formattingValues) {
        let StringResult = tmp6;
        if (null != context) {
          StringResult = tmp6;
          if (context.width) {
            const _String3 = String;
            StringResult = String(context.width);
          }
        }
        let tmp5 = tmp2.formattingValues[StringResult] || tmp2.formattingValues[tmp2.defaultFormattingWidth || tmp2.defaultWidth];
        let obj = tmp2;
        const tmp9 = tmp2.formattingValues[StringResult] || tmp2.formattingValues[tmp2.defaultFormattingWidth || tmp2.defaultWidth];
      }
      let argumentCallbackResult = arg0;
      if (obj.argumentCallback) {
        argumentCallbackResult = obj.argumentCallback(arg0);
      }
      return tmp5[argumentCallbackResult];
    }
    obj = formattingValues;
    if (null != context) {
      if (context.width) {
        const _String2 = String;
        let defaultWidth = String(context.width);
      }
      tmp5 = obj.values[defaultWidth] || obj.values[tmp3];
    }
    defaultWidth = obj.defaultWidth;
  };
};
export default exports.default;