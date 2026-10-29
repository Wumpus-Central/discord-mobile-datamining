// discord_app/modules/settings/native/renderer/SettingBuilders.tsx
import SettingRendererConstants from "SettingRendererConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const NodeType = SettingRendererConstants.NodeType;
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingBuilders.tsx");

export function createToggle(arg0) {
  const merged = Object.assign(arg0);
  return { type: NodeType.TOGGLE };
}
export function createStatic(arg0) {
  const merged = Object.assign(arg0);
  return { type: NodeType.STATIC };
}
export function createRoute(arg0) {
  const merged = Object.assign(arg0);
  return { type: NodeType.ROUTE };
}
export function createPressable(arg0) {
  const merged = Object.assign(arg0);
  return { type: NodeType.PRESSABLE };
}
export function createVolumeSlider(arg0) {
  const merged = Object.assign(arg0);
  return { type: NodeType.VOLUME_SLIDER };
}
export function createSlider(arg0) {
  const merged = Object.assign(arg0);
  return { type: NodeType.SLIDER };
}
export function createGuildSelector(arg0) {
  const merged = Object.assign(arg0);
  return { type: NodeType.GUILD_SELECTOR };
}
export function createRadio(arg0) {
  const merged = Object.assign(arg0);
  return { type: NodeType.RADIO };
}
export function createList(list) {
  const merged = Object.assign(list);
  return { type: NodeType.LIST };
}
export function createSegmentedControl(arg0) {
  const merged = Object.assign(arg0);
  return { type: NodeType.SEGMENTED_CONTROL };
}
