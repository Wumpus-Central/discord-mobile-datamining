// _runtime/12647_stripUrlQueryAndFragment.js

export const getNumberOfUrlSegments = function getNumberOfUrlSegments(str) {
  const parts = str.split(/\\?\//);
  return parts.filter((item) => item.length > 0 && "," !== item).length;
};
export const getSanitizedUrlString = function getSanitizedUrlString(path) {
  let host;
  let protocol;
  ({ protocol, host } = path);
  let str = "";
  path = path.path;
  if (protocol) {
    const _HermesInternal = HermesInternal;
    str = "" + protocol + "://";
  }
  let str3 = host;
  if (str3) {
    const str5 = host.replace(/^.*@/, "[filtered]:[filtered]@");
    const str6 = str5.replace(/(:80)$/, "");
    str3 = str6.replace(/(:443)$/, "");
  }
  if (!str3) {
    str3 = "";
  }
  return "" + str + str3 + path;
};
export const parseUrl = function parseUrl(str) {
  const tmp = str;
  if (tmp) {
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
