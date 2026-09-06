// discord_app/modules/masked_link/SharedStateUtils.tsx
import MaskedLinkStoreMethodsAdditional from "../../stores/MaskedLinkStoreMethodsAdditional.native.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/masked_link/SharedStateUtils.tsx");

export const useUrlParts = function useUrlParts(url) {
  closure_0 = url;
  const items = [url];
  const memo = noop.useMemo(() => {
    const url = { protocol: MaskedLinkStoreMethodsAdditional.getProtocol(str), hostname: null };
    url.hostname = MaskedLinkStoreMethodsAdditional.getHostname(str);
    return url;
  }, items);
  ({ protocol, hostname } = memo);
  let str = "";
  if ("//" === url.substr(protocol.length, 2)) {
    str = "//";
  }
  url = { protocol, authorityPrefix: str, hostname, theRestOfTheUrl: url.replace("" + protocol + str + hostname, "") };
  return url;
};
export const useModalState = function useModalState(url) {
  const str = url.url;
  const trustUrl = url.trustUrl;
  const onConfirm = url.onConfirm;
  const onCancel = url.onCancel;
  const onClose = url.onClose;
  const tmp = onConfirm(onCancel.useState(false), 2);
  const shouldTrustUrl = tmp[0];
  const items = [str];
  const memo = onCancel.useMemo(() => {
    const url = { protocol: MaskedLinkStoreMethodsAdditional.getProtocol(str), hostname: null };
    url.hostname = MaskedLinkStoreMethodsAdditional.getHostname(str);
    return url;
  }, items);
  ({ protocol, hostname } = memo);
  let str2 = "";
  if ("//" === str.substr(protocol.length, 2)) {
    str2 = "//";
  }
  const items1 = [str, shouldTrustUrl, trustUrl, onConfirm, onClose];
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
  url = {
    protocol,
    authorityPrefix: str2,
    hostname,
    theRestOfTheUrl: replaced,
    shouldTrustUrl,
    setShouldTrustUrl: tmp[1],
    handleConfirm: callback,
    handleCancel: obj.useCallback(() => {
      if (onClose != null) {
        tmp();
      }
      onCancel();
    }, items2),
  };
  return url;
};
