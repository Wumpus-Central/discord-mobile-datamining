// === Module 6126: nativeKeysIn ===

// Module 6126 (nativeKeysIn)

export default function nativeKeysIn(arg0) {
  items = [];
  if (null != arg0) {
    const _Object = Object;
    for (const key10008 in Object(arg0)) {
      let arr = items.push(key10008);
      continue;
    }
  }
  return items;
};