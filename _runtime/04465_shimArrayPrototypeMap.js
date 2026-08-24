// === Module 4465: shimArrayPrototypeMap ===

// Module 4465 (shimArrayPrototypeMap)

export default function shimArrayPrototypeMap() {
  const tmp = _require(4400)();
  _require = tmp;
  _require(4419)(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};