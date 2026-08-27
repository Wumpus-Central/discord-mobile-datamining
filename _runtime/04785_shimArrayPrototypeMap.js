// === Module 4785: shimArrayPrototypeMap ===

// Module 4785 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = _require(4720)();
  _require = tmp;
  _require(4739)(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};