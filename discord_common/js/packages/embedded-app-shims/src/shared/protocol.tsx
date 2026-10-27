// discord_common/js/packages/embedded-app-shims/src/shared/protocol.tsx
import Safe2 from "safe/index.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const discordEmbeddedAppShim = "discordEmbeddedAppShim";
const result = size.fileFinishedImporting("../discord_common/js/packages/embedded-app-shims/src/shared/protocol.tsx");

export const SHIM_MESSAGE_KEY = "discordEmbeddedAppShim";
export const isShimWindowMessage = function isShimWindowMessage(obj) {
  let tmp = null != obj && typeof obj === "object";
  if (tmp) {
    const _Object = Safe2.Safe.Object;
    tmp = null != _Object.getOwnPropertyDescriptor(obj, discordEmbeddedAppShim);
  }
  return tmp;
};
export const readNonce = function readNonce(arg0) {
  const _Object = Safe2.Safe.Object;
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
  const uint32Array = new Safe2.Safe.Constructor.Uint32Array(2);
  const Crypto = Safe2.Safe.Crypto;
  const randomValues = Crypto.getRandomValues(uint32Array);
  return "" + uint32Array[0] + "-" + uint32Array[1];
};
export const SILENT_CHILD_STATE = { audible: false };
export const mergeChildStates = function mergeChildStates(arg0) {
  const obj = { audible: null };
  const Safe = Safe2.Safe;
  obj.audible = Safe.Array(arg0).some((audible) => audible.audible);
  return obj;
};
export const isSameChildState = function isSameChildState(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const Safe = Safe2.Safe;
  const _Object = Safe2.Safe.Object;
  return Safe.Array(_Object.keys(arg0)).every((item) => closure_0[item] === closure_1[item]);
};
export const ParentToChildEvent = { STATE_UPDATED: 0, [0]: "STATE_UPDATED" };
export const ChildToParentEvent = {
  STATE_UPDATED: 0,
  [0]: "STATE_UPDATED",
  DISCONNECTED: 1,
  [1]: "DISCONNECTED",
  CONNECTION_ACCEPTED: 2,
  [2]: "CONNECTION_ACCEPTED",
};
