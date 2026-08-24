// === Module 7858: getNumberOfUrlSegments ===

// Module 7858 (getNumberOfUrlSegments)
arg5.getNumberOfUrlSegments = function getNumberOfUrlSegments(str) {
  const parts = str.split(/\\?\//);
  return parts.filter((arg0) => {
    let tmp = arg0.length > 0;
    if (tmp) {
      tmp = "," !== arg0;
    }
    return tmp;
  }).length;
};
arg5.getSanitizedUrlString = function getSanitizedUrlString(path) {
  ({ protocol, host } = path);
  let str = "";
  if (protocol) {
    const _HermesInternal = HermesInternal;
    str = "" + protocol + "://";
  }
  let str3 = host;
  if (host) {
    const str5 = host.replace(/^.*@/, "[filtered]:[filtered]@");
    str3 = host.replace(/^.*@/, "[filtered]:[filtered]@").replace(/(:80)$/, "").replace(/(:443)$/, "");
    const str6 = host.replace(/^.*@/, "[filtered]:[filtered]@").replace(/(:80)$/, "");
  }
  if (!str3) {
    str3 = "";
  }
  return "" + str + str3 + path.path;
};
arg5.parseUrl = function parseUrl(str) {
  if (str) {
    const match = str.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (match) {
      const obj = { host: null, path: null, protocol: null, search: null, hash: null, relative: null };
      obj[0] = match[4];
      obj[1] = match[5];
      obj[2] = match[2];
      obj[3] = match[6] || "";
      obj[4] = match[8] || "";
      obj[5] = match[5] + (match[6] || "") + (match[8] || "");
      return obj;
    } else {
      return {};
    }
  } else {
    return {};
  }
};
arg5.stripUrlQueryAndFragment = function stripUrlQueryAndFragment(arg0) {
  return arg0.split(/[?#]/, 1)[0];
};