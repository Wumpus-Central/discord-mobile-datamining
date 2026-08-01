// === Module 4325: cloneArrayBuffer ===

// Module 4325 (cloneArrayBuffer)

export default function cloneArrayBuffer(byteLength) {
  const constructor = new byteLength.constructor(byteLength.byteLength);
  const obj = new require(788)(constructor);
  const result = obj.set(new require(788)(byteLength));
  return constructor;
};