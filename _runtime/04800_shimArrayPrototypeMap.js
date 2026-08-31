// === Module 4800: shimArrayPrototypeMap ===

// Module 4800 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = _require(4735)();
  _require = tmp;
  _require(4754)(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};