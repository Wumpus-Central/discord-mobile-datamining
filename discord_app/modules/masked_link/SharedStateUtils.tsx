// === Module 12767: SharedStateUtils ===

// Module 12767 (SharedStateUtils)
import react2 from "react" /* 576 */;
import MaskedLinkStoreMethodsAdditional from "MaskedLinkStoreMethodsAdditional" /* 8060 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let str;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((url) => {
  let hostname;
  let protocol;
  let tmp4;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(15);
  if (cResult[0] !== url) {
    const tmpResult = MaskedLinkStoreMethodsAdditional;
    const protocol1 = tmpResult.getProtocol(url);
    cResult[0] = url;
    cResult[1] = protocol1;
    tmp4 = protocol1;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== url) {
    const tmpResult2 = MaskedLinkStoreMethodsAdditional;
    const hostname1 = tmpResult2.getHostname(url);
    cResult[2] = url;
    cResult[3] = hostname1;
    tmp6 = hostname1;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === tmp4) {
    let tmp8;
    if (cResult[5] === tmp6) {
      tmp8 = cResult[6];
    }
    ({ protocol, hostname } = tmp8);
    let str3 = "";
    if ("//" === url.substr(protocol.length, 2)) {
      str3 = "//";
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + protocol + str3 + hostname;
    if (cResult[7] === combined) {
      let tmp12;
      if (cResult[8] === url) {
        tmp12 = cResult[9];
      }
      if (cResult[10] === str3) {
        if (cResult[11] === hostname) {
          if (cResult[12] === protocol) {
            let tmp14;
            if (cResult[13] === tmp12) {
              tmp14 = cResult[14];
            }
            return tmp14;
          }
        }
      }
      url = { protocol, authorityPrefix: str3, hostname, theRestOfTheUrl: tmp12 };
      cResult[10] = str3;
      cResult[11] = hostname;
      cResult[12] = protocol;
      cResult[13] = tmp12;
      cResult[14] = url;
      tmp14 = url;
    }
    const replaced = url.replace(combined, "");
    cResult[7] = combined;
    cResult[8] = url;
    cResult[9] = replaced;
    tmp12 = replaced;
  }
  const url1 = { protocol: tmp4, hostname: tmp6 };
  cResult[4] = tmp4;
  cResult[5] = tmp6;
  cResult[6] = url1;
  tmp8 = url1;
}) : ((str) => {
  let hostname;
  let protocol;
  let closure_0 = str;
  const items = [str];
  const memo = react.useMemo(() => {
    let obj2;
    let obj3;
    const url = { protocol: obj2.getProtocol(str), hostname: obj3.getHostname(str) };
    obj2 = MaskedLinkStoreMethodsAdditional;
    obj3 = MaskedLinkStoreMethodsAdditional;
    return url;
  }, items);
  ({ protocol, hostname } = memo);
  str = "";
  if ("//" === str.substr(protocol.length, 2)) {
    str = "//";
  }
  let url = { protocol, authorityPrefix: str, hostname, theRestOfTheUrl: str.replace("" + protocol + str + hostname, "") };
  return url;
});
let closure_4 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((url) => {
  let authorityPrefix;
  let first;
  let hostname;
  let protocol;
  let theRestOfTheUrl;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(17);
  url = url.url;
  const trustUrl = url.trustUrl;
  const onConfirm = url.onConfirm;
  const onCancel = url.onCancel;
  const onClose = url.onClose;
  [first, tmp4] = react.useState(false);
  ({ protocol, authorityPrefix, hostname, theRestOfTheUrl } = closure_4(url));
  const tmp5 = closure_4(url);
  if (cResult[0] === onClose) {
    if (cResult[1] === onConfirm) {
      if (cResult[2] === first) {
        if (cResult[3] === trustUrl) {
          let tmp6;
          if (cResult[4] === url) {
            tmp6 = cResult[5];
          }
          if (cResult[6] === onCancel) {
            let tmp7;
            if (cResult[7] === onClose) {
              tmp7 = cResult[8];
            }
            if (cResult[9] === authorityPrefix) {
              if (cResult[10] === tmp7) {
                if (cResult[11] === tmp6) {
                  if (cResult[12] === hostname) {
                    if (cResult[13] === protocol) {
                      if (cResult[14] === first) {
                        let tmp8;
                        if (cResult[15] === theRestOfTheUrl) {
                          tmp8 = cResult[16];
                        }
                        return tmp8;
                      }
                    }
                  }
                }
              }
            }
            class S {
              constructor() {
                onCancel();
                if (onClose != null) {
                  onClose();
                }
              }
            }
            tmp9[0] = protocol;
            tmp9[1] = authorityPrefix;
            tmp9[2] = hostname;
            tmp9[3] = theRestOfTheUrl;
            tmp9[4] = first;
            tmp9[5] = tmp4;
            tmp9[6] = tmp6;
            tmp9[7] = tmp7;
            cResult[9] = authorityPrefix;
            cResult[10] = tmp7;
            cResult[11] = tmp6;
            cResult[12] = hostname;
            cResult[13] = protocol;
            cResult[14] = first;
            cResult[15] = theRestOfTheUrl;
            cResult[16] = tmp9;
            tmp8 = tmp9;
          }
          class S {
            constructor() {
              onCancel();
              if (onClose != null) {
                onClose();
              }
            }
          }
          cResult[6] = onCancel;
          cResult[7] = onClose;
          cResult[8] = S;
          tmp7 = S;
        }
      }
    }
  }
  const fn = function s() {
    if (first) {
      trustUrl(url);
    }
    onConfirm();
    if (onClose != null) {
      onClose();
    }
  };
  cResult[0] = onClose;
  cResult[1] = onConfirm;
  cResult[2] = first;
  cResult[3] = trustUrl;
  cResult[4] = url;
  cResult[5] = fn;
  tmp6 = fn;
}) : ((url) => {
  let authorityPrefix;
  let first;
  let hostname;
  let protocol;
  let theRestOfTheUrl;
  let tmp3;
  url = url.url;
  const trustUrl = url.trustUrl;
  const onConfirm = url.onConfirm;
  const onCancel = url.onCancel;
  const onClose = url.onClose;
  first = undefined;
  [first, tmp3] = react.useState(false);
  const items = [url, first, trustUrl, onConfirm, onClose];
  ({ protocol, authorityPrefix, hostname, theRestOfTheUrl } = closure_4(url));
  const items1 = [onCancel, onClose];
  const tmp4 = closure_4(url);
  const callback = react.useCallback(() => {
    if (first) {
      trustUrl(url);
    }
    onConfirm();
    if (onClose != null) {
      onClose();
    }
  }, items);
  const url1 = {
    protocol,
    authorityPrefix,
    hostname,
    theRestOfTheUrl,
    shouldTrustUrl: first,
    setShouldTrustUrl: tmp3,
    handleConfirm: callback,
    handleCancel: react.useCallback(() => {
      onCancel();
      if (onClose != null) {
        onClose();
      }
    }, items1)
  };
  return url1;
});
const result = size.fileFinishedImporting("modules/masked_link/SharedStateUtils.tsx");

export const useUrlParts = tmp2;
export const useModalState = tmp3;