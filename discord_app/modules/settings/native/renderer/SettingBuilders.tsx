// === Module 11729: SettingBuilders ===

// Module 11729 (SettingBuilders)
import SettingRendererConstants from "SettingRendererConstants" /* 11730 */;
import size from "module_2" /* 2 */;

const NodeType = SettingRendererConstants.NodeType;
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingBuilders.tsx");

export const createToggle = function createToggle(arg0) {
  const merged = Object.assign(arg0);
  return { type: NodeType.TOGGLE };
};
export const createStatic = function createStatic(arg0) {
  const merged = Object.assign(arg0);
  return { type: NodeType.STATIC };
};
export const createRoute = function createRoute(arg0) {
  const merged = Object.assign(arg0);
  return { type: NodeType.ROUTE };
};
export const createPressable = function createPressable(arg0) {
  const merged = Object.assign(arg0);
  return { type: NodeType.PRESSABLE };
};
export const createVolumeSlider = function createVolumeSlider(arg0) {
  const merged = Object.assign(arg0);
  return { type: NodeType.VOLUME_SLIDER };
};
export const createSlider = function createSlider(arg0) {
  const merged = Object.assign(arg0);
  return { type: NodeType.SLIDER };
};
export const createGuildSelector = function createGuildSelector(arg0) {
  const merged = Object.assign(arg0);
  return { type: NodeType.GUILD_SELECTOR };
};
export const createRadio = function createRadio(arg0) {
  const merged = Object.assign(arg0);
  return { type: NodeType.RADIO };
};
export const createList = function createList(arg0) {
  const merged = Object.assign(arg0);
  return { type: NodeType.LIST };
};
export const createSegmentedControl = function createSegmentedControl(arg0) {
  const merged = Object.assign(arg0);
  return { type: NodeType.SEGMENTED_CONTROL };
};