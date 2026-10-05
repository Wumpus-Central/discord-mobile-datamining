// _runtime/01466_isBuffer.js

export default function isBuffer(copy) {
  return (
    copy &&
    typeof copy === "object" &&
    typeof copy.copy === "function" &&
    typeof copy.fill === "function" &&
    typeof copy.readUInt8 === "function"
  );
}
