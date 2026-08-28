// === Module 4798: shimArrayPrototypeMap ===

// Module 4798 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = _require(4733)();
  _require = tmp;
  _require(4752)(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};