// _runtime/metro/00889__.js

export const isHardCrash = function isHardCrash(exception) {
  if (typeof exception !== "string") {
    if ("exception" in exception) {
      let values2;
      exception = exception.exception;
      let values;
      if (null !== exception) {
        if (undefined !== exception) {
          values = exception.values;
        }
      }
      if (values) {
        values2 = exception.exception.values;
      }
      const iter = values2[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp7 = nextResult;
        if (nextResult.mechanism) {
          if (false === tmp7.mechanism.handled) {
            if ("onerror" === tmp7.mechanism.type) {
              iter.return();
              let flag2 = true;
              return true;
            }
          }
        }
        continue;
      }
      return false;
    }
  }
  values2 = [];
};
