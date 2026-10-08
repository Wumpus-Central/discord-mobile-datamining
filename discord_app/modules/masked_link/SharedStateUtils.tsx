// discord_app/modules/masked_link/SharedStateUtils.tsx
import c from "../../../_runtime/00576_c.js";
import MaskedLinkStoreMethodsAdditional from "../../stores/MaskedLinkStoreMethodsAdditional.native.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useUrlParts(url) {
      const cResult = c.c(15);
      if (cResult[0] !== url) {
        const protocol1 = MaskedLinkStoreMethodsAdditional.getProtocol(url);
        cResult[0] = url;
        cResult[1] = protocol1;
        let tmp4 = protocol1;
        const tmpResult = MaskedLinkStoreMethodsAdditional;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== url) {
        const hostname1 = MaskedLinkStoreMethodsAdditional.getHostname(url);
        cResult[2] = url;
        cResult[3] = hostname1;
        let tmp6 = hostname1;
        const tmpResult2 = MaskedLinkStoreMethodsAdditional;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] === tmp4) {
        if (cResult[5] === tmp6) {
          let tmp8 = cResult[6];
        }
        ({ protocol, hostname } = tmp8);
        let str3 = "";
        if ("//" === url.substr(protocol.length, 2)) {
          str3 = "//";
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + protocol + str3 + hostname;
        if (cResult[7] === combined) {
          if (cResult[8] === url) {
            let tmp12 = cResult[9];
          }
          if (cResult[10] === str3) {
            if (cResult[11] === hostname) {
              if (cResult[12] === protocol) {
                if (cResult[13] === tmp12) {
                  let tmp14 = cResult[14];
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
    }
  : function useUrlParts(str) {
      closure_0 = str;
      const items = [str];
      const memo = noop.useMemo(() => {
        const url = { protocol: MaskedLinkStoreMethodsAdditional.getProtocol(closure_0), hostname: null };
        url.hostname = MaskedLinkStoreMethodsAdditional.getHostname(closure_0);
        return url;
      }, items);
      ({ protocol, hostname } = memo);
      str = "";
      if ("//" === str.substr(protocol.length, 2)) {
        str = "//";
      }
      let url = {
        protocol,
        authorityPrefix: str,
        hostname,
        theRestOfTheUrl: str.replace("" + protocol + str + hostname, ""),
      };
      return url;
    };
let closure_4 = tmp2;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/masked_link/SharedStateUtils.tsx");

export const useUrlParts = tmp2;
export const useModalState = ReactCompilerGating.isReactCompilerEnabled()
  ? function useModalState(url) {
      const cResult = c.c(17);
      url = url.url;
      const trustUrl = url.trustUrl;
      const onConfirm = url.onConfirm;
      const onCancel = url.onCancel;
      const onClose = url.onClose;
      const tmp2 = _slicedToArray(noop.useState(false), 2);
      const first = tmp2[0];
      ({ protocol, authorityPrefix, hostname, theRestOfTheUrl } = closure_4(url));
      if (cResult[0] === onClose) {
        if (cResult[1] === onConfirm) {
          if (cResult[2] === first) {
            if (cResult[3] === trustUrl) {
              if (cResult[4] === url) {
                let tmp5 = cResult[5];
              }
              if (cResult[6] === onCancel) {
                if (cResult[7] === onClose) {
                  let tmp6 = cResult[8];
                }
                if (cResult[9] === authorityPrefix) {
                  if (cResult[10] === tmp6) {
                    if (cResult[11] === tmp5) {
                      if (cResult[12] === hostname) {
                        if (cResult[13] === protocol) {
                          if (cResult[14] === first) {
                            if (cResult[15] === theRestOfTheUrl) {
                              let tmp7 = cResult[16];
                            }
                            return tmp7;
                          }
                        }
                      }
                    }
                  }
                }
                class O {
                  constructor() {
                    tmp = onCancel();
                    if (onClose != null) {
                      tmp2 = onClose();
                    }
                    return;
                  }
                }
                tmp8[0] = protocol;
                tmp8[1] = authorityPrefix;
                tmp8[2] = hostname;
                tmp8[3] = theRestOfTheUrl;
                tmp8[4] = first;
                tmp8[5] = tmp2[1];
                tmp8[6] = tmp5;
                tmp8[7] = tmp6;
                cResult[9] = authorityPrefix;
                cResult[10] = tmp6;
                cResult[11] = tmp5;
                cResult[12] = hostname;
                cResult[13] = protocol;
                cResult[14] = first;
                cResult[15] = theRestOfTheUrl;
                cResult[16] = tmp8;
                tmp7 = tmp8;
              }
              class O {
                constructor() {
                  tmp = onCancel();
                  if (onClose != null) {
                    tmp2 = onClose();
                  }
                  return;
                }
              }
              cResult[6] = onCancel;
              cResult[7] = onClose;
              cResult[8] = O;
              tmp6 = O;
            }
          }
        }
      }
      const fn = function n() {
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
      tmp5 = fn;
    }
  : function useModalState(url) {
      url = url.url;
      const trustUrl = url.trustUrl;
      const onConfirm = url.onConfirm;
      const onCancel = url.onCancel;
      const onClose = url.onClose;
      const tmp = _slicedToArray(noop.useState(false), 2);
      const shouldTrustUrl = tmp[0];
      const items = [url, shouldTrustUrl, trustUrl, onConfirm, onClose];
      ({ protocol, authorityPrefix, hostname, theRestOfTheUrl } = closure_4(url));
      const items1 = [onCancel, onClose];
      const callback = noop.useCallback(() => {
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
        shouldTrustUrl,
        setShouldTrustUrl: tmp[1],
        handleConfirm: callback,
        handleCancel: noop.useCallback(() => {
          onCancel();
          if (onClose != null) {
            onClose();
          }
        }, items1),
      };
      return url1;
    };
