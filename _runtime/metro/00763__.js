// _runtime/metro/00763__.js
import _mod764 from "00764__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function isSentryRequestUrl(name, client) {
  if (client != null) {
    const dsn = client.getDsn();
  }
  if (client != null) {
    const tunnel = client.getOptions().tunnel;
  }
  const result = _mod764.parseStringToURLObject(name);
  let flag = false;
  if (result) {
    flag = false;
    if (!tmp2Result.isURLObjectRelative(result)) {
      let tmp5 = dsn;
      if (tmp5) {
        const host = result.host;
        let hasItem = host.includes(dsn.host);
        if (hasItem) {
          hasItem = /(^|&|\?)sentry_key=/.test(result.search);
          const obj3 = /(^|&|\?)sentry_key=/;
        }
        tmp5 = hasItem;
      }
      flag = tmp5;
    }
    tmp2Result = _mod764;
  }
  if (!flag) {
    let flag2 = false;
    if (tunnel) {
      let substr = name;
      if ("/" === name[name.length - 1]) {
        substr = name.slice(0, -1);
      }
      let substr1 = tunnel;
      if ("/" === tunnel[tunnel.length - 1]) {
        substr1 = tunnel.slice(0, -1);
      }
      flag2 = substr === substr1;
    }
    flag = flag2;
  }
  return flag;
}
