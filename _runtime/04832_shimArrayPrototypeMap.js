// === Module 4832: shimArrayPrototypeMap ===

// Module 4832 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = _require(4767)();
  _require = tmp;
  _require(4786)(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};