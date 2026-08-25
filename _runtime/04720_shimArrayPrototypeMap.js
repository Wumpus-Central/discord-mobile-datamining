// === Module 4720: shimArrayPrototypeMap ===

// Module 4720 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = _require(4655)();
  _require = tmp;
  _require(4674)(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};