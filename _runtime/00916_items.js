// === Module 916: items ===

// Module 916 (items)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const items = ["X-Client-IP", "X-Forwarded-For", "Fly-Client-IP", "CF-Connecting-IP", "Fastly-Client-Ip", "True-Client-Ip", "X-Real-IP", "X-Cluster-Client-IP", "X-Forwarded", "Forwarded-For", "Forwarded", "X-Vercel-Forwarded-For"];
arg5.getClientIPAddress = function getClientIPAddress(arg0) {
  let obj = {};
  const keys = Object.keys(arg0);
  for (const item10010 of keys) {
    obj[item10010.toLowerCase()] = arg0[item10010];
    continue;
  }
  let mapped = obj.map((item, index) => {
    obj = obj[item.toLowerCase(item)];
    let str = obj;
    if (Array.isArray(obj)) {
      str = obj.join(";");
    }
    if ("Forwarded" === item) {
      let mapped = (function parseForwardedHeader(str) {
        if (str) {
          const parts = str.split(";");
          const iter = parts[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let arr = nextResult;
            if (nextResult.startsWith("for=")) {
              let substr = arr.slice(4);
              iter.return();
              return substr;
            }
          }
          return null;
        } else {
          return null;
        }
      })(str);
    } else if (str != null) {
      let parts = str.split(",");
      mapped = parts.map((item, index) => item.trim());
    }
    return mapped;
  });
  const reduced = mapped.reduce((acc, item, index) => {
    let combined = acc;
    if (item) {
      combined = acc.concat(item);
    }
    return combined;
  }, []);
  return reduced.find((item, index) => {
    let isMatch = null !== item;
    if (isMatch) {
      isMatch = /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(?::[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(?::[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(?::[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(?::[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)/.test(item);
    }
    return isMatch;
  }) || null;
};
arg5.ipHeaderNames = items;