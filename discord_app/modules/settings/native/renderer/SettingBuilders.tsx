// === Module 11468: SettingBuilders ===

// Module 11468 (SettingBuilders)
import SettingRendererConstants from "SettingRendererConstants" /* 11469 */;
import size from "module_2" /* 2 */;

const NodeType = SettingRendererConstants.NodeType;
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingBuilders.tsx");

export const createToggle = function createToggle(SettingBuilders) {
  const merged = Object.assign(SettingBuilders);
  return { type: NodeType.TOGGLE };
};
export const createStatic = function createStatic(SettingBuilders) {
  const merged = Object.assign(SettingBuilders);
  return { type: NodeType.STATIC };
};
export const createRoute = function createRoute(SettingBuilders) {
  const merged = Object.assign(SettingBuilders);
  return { type: NodeType.ROUTE };
};
export const createPressable = function createPressable(SettingBuilders) {
  const merged = Object.assign(SettingBuilders);
  return { type: NodeType.PRESSABLE };
};
export const createVolumeSlider = function createVolumeSlider(SettingBuilders) {
  const merged = Object.assign(SettingBuilders);
  return { type: NodeType.VOLUME_SLIDER };
};
export const createSlider = function createSlider(SettingBuilders) {
  const merged = Object.assign(SettingBuilders);
  return { type: NodeType.SLIDER };
};
export const createGuildSelector = function createGuildSelector(SettingBuilders) {
  const merged = Object.assign(SettingBuilders);
  return { type: NodeType.GUILD_SELECTOR };
};
export const createRadio = function createRadio(SettingBuilders) {
  const merged = Object.assign(SettingBuilders);
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