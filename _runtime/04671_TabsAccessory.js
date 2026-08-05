import { __INTERNAL_VIEW_CONFIG } from "metro/04672___INTERNAL_VIEW_CONFIG.js";
// _runtime/04671_TabsAccessory.js
import "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";


export default function TabsAccessory(style) {
  const obj = {};
  const merged = Object.assign(style);
  obj.collapsable = false;
  const items = [style.style, StyleSheet.absoluteFill];
  obj.style = items;
  return jsx(__INTERNAL_VIEW_CONFIG, {});
};