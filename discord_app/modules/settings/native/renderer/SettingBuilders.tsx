// === Module 11142: SettingBuilders ===

// Module 11142 (SettingBuilders)
import SettingRendererConstants from "SettingRendererConstants" /* 11143 */;
import size from "module_2" /* 2 */;

const NodeType = SettingRendererConstants.NodeType;
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingBuilders.tsx");

export const createToggle = function createToggle(arg0) {
  const obj = { type: NodeType.TOGGLE };
  const merged = Object.assign(arg0);
  return obj;
};
export const createStatic = function createStatic(arg0) {
  const obj = { type: NodeType.STATIC };
  const merged = Object.assign(arg0);
  return obj;
};
export const createRoute = function createRoute(arg0) {
  const obj = { type: NodeType.ROUTE };
  const merged = Object.assign(arg0);
  return obj;
};
export const createPressable = function createPressable(arg0) {
  const obj = { type: NodeType.PRESSABLE };
  const merged = Object.assign(arg0);
  return obj;
};
export const createVolumeSlider = function createVolumeSlider(arg0) {
  const obj = { type: NodeType.VOLUME_SLIDER };
  const merged = Object.assign(arg0);
  return obj;
};
export const createSlider = function createSlider(arg0) {
  const obj = { type: NodeType.SLIDER };
  const merged = Object.assign(arg0);
  return obj;
};
export const createGuildSelector = function createGuildSelector(arg0) {
  const obj = { type: NodeType.GUILD_SELECTOR };
  const merged = Object.assign(arg0);
  return obj;
};
export const createRadio = function createRadio(arg0) {
  const obj = { type: NodeType.RADIO };
  const merged = Object.assign(arg0);
  return obj;
};
export const createList = function createList(arg0) {
  const obj = { type: NodeType.LIST };
  const merged = Object.assign(arg0);
  return obj;
};
export const createSegmentedControl = function createSegmentedControl(arg0) {
  const obj = { type: NodeType.SEGMENTED_CONTROL };
  const merged = Object.assign(arg0);
  return obj;
};