// === Module 4879: shimArrayPrototypeMap ===

// Module 4879 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = _require(4814)();
  _require = tmp;
  _require(4833)(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};