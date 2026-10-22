// === Module 18682: protocol ===

// Module 18682 (protocol)
import Safe from "Safe" /* 11445 */;
import size from "module_2" /* 2 */;

const discordEmbeddedAppShim = "discordEmbeddedAppShim";
const result = size.fileFinishedImporting("../discord_common/js/packages/embedded-app-shims/src/shared/protocol.tsx");

export const SHIM_MESSAGE_KEY = "discordEmbeddedAppShim";
export const isShimWindowMessage = function isShimWindowMessage(obj) {
  let tmp = null != obj && typeof obj === "object";
  if (tmp) {
    const _Object = Safe.Safe.Object;
    tmp = null != _Object.getOwnPropertyDescriptor(obj, discordEmbeddedAppShim);
  }
  return tmp;
};
export const readNonce = function readNonce(arg0) {
  const _Object = Safe.Safe.Object;
  const iter = _Object.getOwnPropertyDescriptor(arg0, "nonce");
  value = undefined;
  if (iter != null) {
    value = iter.value;
  }
  let tmp2 = null;
  if (typeof value === "string") {
    tmp2 = value;
  }
  return tmp2;
};
export const generateNonce = function generateNonce() {
  const uint32Array = new Safe.Safe.Constructor.Uint32Array(2);
  const Crypto = Safe.Safe.Crypto;
  const randomValues = Crypto.getRandomValues(uint32Array);
  return "" + uint32Array[0] + "-" + uint32Array[1];
};
export const SILENT_CHILD_STATE = { audible: false };
export const ParentToChildEvent = { STATE_UPDATED: 0, [0]: "STATE_UPDATED" };
export const ChildToParentEvent = { STATE_UPDATED: 0, [0]: "STATE_UPDATED", DISCONNECTED: 1, [1]: "DISCONNECTED", CONNECTION_ACCEPTED: 2, [2]: "CONNECTION_ACCEPTED" };