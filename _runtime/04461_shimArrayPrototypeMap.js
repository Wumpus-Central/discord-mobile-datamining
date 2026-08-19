// === Module 4461: shimArrayPrototypeMap ===

// Module 4461 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = _require(4396)();
  _require = tmp;
  _require(4415)(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};