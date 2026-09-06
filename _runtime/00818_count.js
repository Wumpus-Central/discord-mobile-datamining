// === Module 818: count ===

// Module 818 (count)
import _INTERNAL_captureSerializedMetric from "_INTERNAL_captureSerializedMetric" /* 750 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const count = function count(name, arg1) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 1;
  }
  const obj = { type: "counter", name, value: num, unit: null, attributes: null };
  let unit;
  if (unit != null) {
    unit = unit.unit;
  }
  obj.unit = unit;
  let attributes;
  if (unit != null) {
    attributes = unit.attributes;
  }
  obj.attributes = attributes;
  let scope;
  if (unit != null) {
    scope = unit.scope;
  }
  const result = obj._INTERNAL_captureMetric(obj, { scope });
};
export const distribution = function distribution(name, value, unit) {
  const obj = { type: "distribution", name, value, unit: null, attributes: null };
  unit = undefined;
  if (unit != null) {
    unit = unit.unit;
  }
  obj.unit = unit;
  let attributes;
  if (unit != null) {
    attributes = unit.attributes;
  }
  obj.attributes = attributes;
  let scope;
  if (unit != null) {
    scope = unit.scope;
  }
  const result = obj._INTERNAL_captureMetric(obj, { scope });
};
export const gauge = function gauge(name, value, unit) {
  const obj = { type: "gauge", name, value, unit: null, attributes: null };
  unit = undefined;
  if (unit != null) {
    unit = unit.unit;
  }
  obj.unit = unit;
  let attributes;
  if (unit != null) {
    attributes = unit.attributes;
  }
  obj.attributes = attributes;
  let scope;
  if (unit != null) {
    scope = unit.scope;
  }
  const result = obj._INTERNAL_captureMetric(obj, { scope });
};