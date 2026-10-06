// === Module 8060: MaskedLinkStoreMethodsAdditional ===

// Module 8060 (MaskedLinkStoreMethodsAdditional)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("stores/MaskedLinkStoreMethodsAdditional.native.tsx");

export const getHostname = function getHostname(url) {
  try {
    const _URL = URL;
    const self = this;
    const self2 = this;
    const uRL = new URL(url);
    return uRL.hostname;
  } catch (err) {
    return "";
  }
};
export const getProtocol = function getProtocol(url) {
  try {
    const _URL = URL;
    const self = this;
    const self2 = this;
    const uRL = new URL(url);
    return uRL.protocol;
  } catch (err) {
    return "";
  }
};