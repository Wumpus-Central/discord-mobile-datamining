// _runtime/00829_count.js
import _INTERNAL_captureMetric2 from "00761__INTERNAL_captureMetric.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const count = function count(name, arg1) {
  let attributes;
  let unit;
  let num = arg1;
  if (arg1 === undefined) {
    num = 1;
  }
  const obj = { type: "counter", name, value: num, unit, attributes };
  unit = undefined;
  const _INTERNAL_captureMetric = _INTERNAL_captureMetric2._INTERNAL_captureMetric;
  _INTERNAL_captureMetric2;
  if (unit != null) {
    unit = unit.unit;
  }
  attributes = undefined;
  if (unit != null) {
    attributes = unit.attributes;
  }
  let scope;
  if (unit != null) {
    scope = unit.scope;
  }
  const result = _INTERNAL_captureMetric(obj, { scope });
};
export const distribution = function distribution(name, value, unit) {
  let attributes;
  const obj = { type: "distribution", name, value, unit, attributes };
  unit = undefined;
  const _INTERNAL_captureMetric = _INTERNAL_captureMetric2._INTERNAL_captureMetric;
  _INTERNAL_captureMetric2;
  if (unit != null) {
    unit = unit.unit;
  }
  attributes = undefined;
  if (unit != null) {
    attributes = unit.attributes;
  }
  let scope;
  if (unit != null) {
    scope = unit.scope;
  }
  const result = _INTERNAL_captureMetric(obj, { scope });
};
export const gauge = function gauge(name, value, unit) {
  let attributes;
  const obj = { type: "gauge", name, value, unit, attributes };
  unit = undefined;
  const _INTERNAL_captureMetric = _INTERNAL_captureMetric2._INTERNAL_captureMetric;
  _INTERNAL_captureMetric2;
  if (unit != null) {
    unit = unit.unit;
  }
  attributes = undefined;
  if (unit != null) {
    attributes = unit.attributes;
  }
  let scope;
  if (unit != null) {
    scope = unit.scope;
  }
  const result = _INTERNAL_captureMetric(obj, { scope });
};
