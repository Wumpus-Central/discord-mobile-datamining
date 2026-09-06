// discord_app/stores/MaskedLinkStoreMethodsAdditional.native.tsx
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("stores/MaskedLinkStoreMethodsAdditional.native.tsx");

export const getHostname = function getHostname(url) {
  try {
    const _URL = URL;
    const uRL = new URL(url);
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
