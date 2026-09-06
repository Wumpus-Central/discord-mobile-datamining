// _runtime/12879_stripUrlQueryAndFragment.js

export const getNumberOfUrlSegments = function getNumberOfUrlSegments(str) {
  const parts = str.split(/\\?\//);
  return parts.filter((item) => {
    let tmp = item.length > 0;
    if (tmp) {
      tmp = "," !== item;
    }
    return tmp;
  }).length;
};
export const getSanitizedUrlString = function getSanitizedUrlString(path) {
  ({ protocol, host } = path);
  let str = "";
  if (protocol) {
    const _HermesInternal = HermesInternal;
    str = "" + protocol + "://";
  }
  let str3 = host;
  if (host) {
    const str5 = host.replace(/^.*@/, "[filtered]:[filtered]@");
    str3 = host
      .replace(/^.*@/, "[filtered]:[filtered]@")
      .replace(/(:80)$/, "")
      .replace(/(:443)$/, "");
    const str6 = host.replace(/^.*@/, "[filtered]:[filtered]@").replace(/(:80)$/, "");
  }
  if (!str3) {
    str3 = "";
  }
  return "" + str + str3 + path.path;
};
export const parseUrl = function parseUrl(str) {
  if (str) {
    const match = str.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (match) {
      const url = {
        host: match[4],
        path: match[5],
        protocol: match[2],
        search: match[6] || "",
        hash: match[8] || "",
        relative: match[5] + (match[6] || "") + (match[8] || ""),
      };
      return url;
    } else {
      return {};
    }
  } else {
    return {};
  }
};
export const stripUrlQueryAndFragment = function stripUrlQueryAndFragment(arg0) {
  return arg0.split(/[?#]/, 1)[0];
};
