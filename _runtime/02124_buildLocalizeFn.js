// _runtime/02124_buildLocalizeFn.js

export default function buildLocalizeFn(arg0) {
  const formattingValues = arg0;
  return (arg0, context) => {
    let obj;
    let tmp5;
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
        tmp5 =
          formattingValues.formattingValues[StringResult] ||
          formattingValues.formattingValues[formattingValues.defaultFormattingWidth || formattingValues.defaultWidth];
        obj = formattingValues;
      }
      let argumentCallbackResult = arg0;
      if (obj.argumentCallback) {
        argumentCallbackResult = obj.argumentCallback(arg0);
      }
      return tmp5[argumentCallbackResult];
    }
    obj = formattingValues;
    if (null != context) {
      let defaultWidth;
      if (context.width) {
        const _String2 = String;
        defaultWidth = String(context.width);
      }
      tmp5 = obj.values[defaultWidth] || obj.values[tmp3];
    }
    defaultWidth = obj.defaultWidth;
  };
}
