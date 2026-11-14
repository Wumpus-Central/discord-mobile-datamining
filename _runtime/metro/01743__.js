// === Module 1743: ? ===

// Module 1743

export function toArrayBuffer(__getBytesResult) {
  const buffer = __getBytesResult.buffer;
  return buffer.slice(__getBytesResult.byteOffset, __getBytesResult.byteOffset + __getBytesResult.byteLength);
}