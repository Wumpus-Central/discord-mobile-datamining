// _runtime/04870_TabsAccessory.js
import noopDefault from "00019_noop.js";
import __INTERNAL_VIEW_CONFIGDefault from "metro/04871___INTERNAL_VIEW_CONFIG.js";
import { StyleSheet } from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";

noopDefault;

export default function TabsAccessory(style) {
  const obj = {};
  const merged = Object.assign(style);
  obj.collapsable = false;
  const items = [style.style, StyleSheet.absoluteFill];
  obj.style = items;
  return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
};