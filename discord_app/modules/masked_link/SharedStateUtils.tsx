// === Module 12728: useUrlParts ===

// Module 12728 (useUrlParts)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/masked_link/SharedStateUtils.tsx");

export const useUrlParts = function useUrlParts(url) {
  closure_0 = url;
  const items = [url];
  const memo = React.useMemo(() => {
    const obj = { protocol: str(trustUrl[2]).getProtocol(str), hostname: null };
    const obj2 = str(trustUrl[2]);
    obj[1] = str(trustUrl[2]).getHostname(str);
    return obj;
  }, items);
  ({ protocol, hostname } = memo);
  let str = "";
  if ("//" === url.substr(protocol.length, 2)) {
    str = "//";
  }
  return { protocol, authorityPrefix: str, hostname, theRestOfTheUrl: url.replace("" + protocol + str + hostname, "") };
};
export const useModalState = function useModalState(url) {
  const str = url.url;
  const trustUrl = url.trustUrl;
  const onConfirm = url.onConfirm;
  const onCancel = url.onCancel;
  const onClose = url.onClose;
  let first;
  let obj = onCancel;
  const tmp = onConfirm(onCancel.useState(false), 2);
  first = tmp[0];
  const items = [str];
  const memo = onCancel.useMemo(() => {
    const obj = { protocol: str(trustUrl[2]).getProtocol(str), hostname: null };
    const obj2 = str(trustUrl[2]);
    obj[1] = str(trustUrl[2]).getHostname(str);
    return obj;
  }, items);
  ({ protocol, hostname } = memo);
  let str2 = "";
  if ("//" === str.substr(protocol.length, 2)) {
    str2 = "//";
  }
  const items1 = [str, first, trustUrl, onConfirm, onClose];
  const replaced = str.replace("" + protocol + str2 + hostname, "");
  const items2 = [onCancel, onClose];
  const callback = obj.useCallback(() => {
    if (first) {
      trustUrl(str);
    }
    if (onClose != null) {
      tmp4();
    }
    onConfirm();
  }, items1);
  obj = {
    protocol,
    authorityPrefix: str2,
    hostname,
    theRestOfTheUrl: replaced,
    shouldTrustUrl: first,
    setShouldTrustUrl: tmp[1],
    handleConfirm: callback,
    handleCancel: obj.useCallback(() => {
      if (onClose != null) {
        tmp();
      }
      onCancel();
    }, items2)
  };
  return obj;
};