// _runtime/metro/01743__.js

export function toArrayBuffer(__getBytesResult) {
  const buffer = __getBytesResult.buffer;
  return buffer.slice(__getBytesResult.byteOffset, __getBytesResult.byteOffset + __getBytesResult.byteLength);
}
