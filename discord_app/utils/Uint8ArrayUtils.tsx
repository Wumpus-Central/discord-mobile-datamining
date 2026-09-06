// === Module 1942: Uint8ArrayUtils ===

// Module 1942 (Uint8ArrayUtils)
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("utils/Uint8ArrayUtils.tsx");

export const hasBit = function hasBit(dismissedContents, CHANNEL_NOTICE_INVITE) {
  let tmp = 0 !== dismissedContents.length;
  if (tmp) {
    const _Math = Math;
    tmp = dismissedContents[Math.floor(Math, CHANNEL_NOTICE_INVITE / 8)] & 1 << CHANNEL_NOTICE_INVITE % 8;
  }
  return tmp;
};
export const addBit = function addBit(dismissedContents, CHANNEL_NOTICE_INVITE) {
  const rounded = Math.floor(CHANNEL_NOTICE_INVITE / 8);
  let tmp2 = dismissedContents;
  if (dismissedContents.length <= rounded) {
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(rounded + 1);
    const result = uint8Array.set(dismissedContents, 0);
    tmp2 = uint8Array;
  }
  tmp2[rounded] = tmp2[rounded] | 1 << CHANNEL_NOTICE_INVITE % 8;
  return tmp2;
};
export const removeBit = function removeBit(dismissedContents, arg1) {
  let tmp = 0 !== dismissedContents.length;
  if (tmp) {
    const _Math = Math;
    tmp = dismissedContents[Math.floor(Math, arg1 / 8)] & 1 << arg1 % 8;
  }
  if (tmp) {
    const _Math2 = Math;
    const rounded = Math.floor(arg1 / 8);
    dismissedContents[rounded] = dismissedContents[rounded] & ~1 << arg1 % 8;
  }
  return dismissedContents;
};
export const isUint8Array = function isUint8Array(arg0) {
  return arg0 instanceof Uint8Array;
};
export const isSerializedUint8Array = function isSerializedUint8Array(__tag__) {
  let tmp = null != __tag__ && typeof __tag__ === "object";
  if (tmp) {
    tmp = "uint8array" === __tag__.__tag__;
  }
  return tmp;
};