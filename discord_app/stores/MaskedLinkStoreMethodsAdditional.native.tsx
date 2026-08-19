// === Module 8778: getHostname ===

// Module 8778 (getHostname)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("stores/MaskedLinkStoreMethodsAdditional.native.tsx");

export const getHostname = function getHostname(arg0) {
  try {
    const _URL = URL;
    const uRL = new URL(arg0);
    return uRL.hostname;
  } catch (err) {
    return "";
  }
};
export const getProtocol = function getProtocol(url) {
  try {
    const _URL = URL;
    const uRL = new URL(url);
    return uRL.protocol;
  } catch (err) {
    return "";
  }
};