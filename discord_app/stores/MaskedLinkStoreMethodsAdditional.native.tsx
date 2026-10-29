// === Module 8900: MaskedLinkStoreMethodsAdditional ===

// Module 8900 (MaskedLinkStoreMethodsAdditional)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("stores/MaskedLinkStoreMethodsAdditional.native.tsx");

export function getHostname(url) {
  try {
    const _URL = URL;
    const uRL = new URL(url);
    return uRL.hostname;
  } catch (err) {
    return "";
  }
}
export function getProtocol(url) {
  try {
    const _URL = URL;
    const uRL = new URL(url);
    return uRL.protocol;
  } catch (err) {
    return "";
  }
}