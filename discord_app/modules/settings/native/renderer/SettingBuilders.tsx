// === Module 11068: createToggle ===

// Module 11068 (createToggle)
import set from "set" /* 2 */;
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "GUILD_SELECT_ALL_SERVERS_OPTION_ID" /* 11069 */;

const NodeType = GUILD_SELECT_ALL_SERVERS_OPTION_ID.NodeType;
const result = set.fileFinishedImporting("modules/settings/native/renderer/SettingBuilders.tsx");

export const createToggle = function createToggle(createToggle) {
  const merged = Object.assign(createToggle);
  return { type: NodeType.TOGGLE };
};
export const createStatic = function createStatic(createToggle) {
  const merged = Object.assign(createToggle);
  return { type: NodeType.STATIC };
};
export const createRoute = function createRoute(createToggle) {
  const merged = Object.assign(createToggle);
  return { type: NodeType.ROUTE };
};
export const createPressable = function createPressable(createToggle) {
  const merged = Object.assign(createToggle);
  return { type: NodeType.PRESSABLE };
};
export const createVolumeSlider = function createVolumeSlider(createToggle) {
  const merged = Object.assign(createToggle);
  return { type: NodeType.VOLUME_SLIDER };
};
export const createSlider = function createSlider(createToggle) {
  const merged = Object.assign(createToggle);
  return { type: NodeType.SLIDER };
};
export const createGuildSelector = function createGuildSelector(createToggle) {
  const merged = Object.assign(createToggle);
  return { type: NodeType.GUILD_SELECTOR };
};
export const createRadio = function createRadio(createToggle) {
  const merged = Object.assign(createToggle);
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