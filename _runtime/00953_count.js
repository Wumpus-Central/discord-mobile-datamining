// _runtime/00953_count.js
import _INTERNAL_captureSerializedMetric from "00885__INTERNAL_captureSerializedMetric.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.count = function count(name, arg1, unit) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 1;
  }
  const obj = { type: "counter", name, value: num, unit: null, attributes: null };
  unit = undefined;
  if (unit != null) {
    unit = unit.unit;
  }
  obj[3] = unit;
  let attributes;
  if (unit != null) {
    attributes = unit.attributes;
  }
  obj[4] = attributes;
  let scope;
  if (unit != null) {
    scope = unit.scope;
  }
  const result = obj._INTERNAL_captureMetric(obj, { scope });
};
arg5.distribution = function distribution(name, value, unit) {
  const obj = { type: "distribution", name, value, unit: null, attributes: null };
  unit = undefined;
  if (unit != null) {
    unit = unit.unit;
  }
  obj[3] = unit;
  let attributes;
  if (unit != null) {
    attributes = unit.attributes;
  }
  obj[4] = attributes;
  let scope;
  if (unit != null) {
    scope = unit.scope;
  }
  const result = obj._INTERNAL_captureMetric(obj, { scope });
};
arg5.gauge = function gauge(name, value, unit) {
  const obj = { type: "gauge", name, value, unit: null, attributes: null };
  unit = undefined;
  if (unit != null) {
    unit = unit.unit;
  }
  obj[3] = unit;
  let attributes;
  if (unit != null) {
    attributes = unit.attributes;
  }
  obj[4] = attributes;
  let scope;
  if (unit != null) {
    scope = unit.scope;
  }
  const result = obj._INTERNAL_captureMetric(obj, { scope });
};