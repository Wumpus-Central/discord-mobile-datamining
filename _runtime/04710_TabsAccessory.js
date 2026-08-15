// _runtime/04710_TabsAccessory.js
import "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { __INTERNAL_VIEW_CONFIG } from "metro/04711___INTERNAL_VIEW_CONFIG.js";


export default function TabsAccessory(style) {
  const obj = {};
  const merged = Object.assign(style);
  obj.collapsable = false;
  const items = [style.style, StyleSheet.absoluteFill];
  obj.style = items;
  return jsx(__INTERNAL_VIEW_CONFIG, {});
};