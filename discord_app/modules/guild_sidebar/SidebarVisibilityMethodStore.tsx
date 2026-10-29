// === Module 9638: SidebarVisibilityMethodStore ===

// Module 9638 (SidebarVisibilityMethodStore)
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const SidebarVisibilityMethodStore = module_570.create(() => ({}));
const result = size.fileFinishedImporting("modules/guild_sidebar/SidebarVisibilityMethodStore.tsx");

export { SidebarVisibilityMethodStore };
export function setGetVisibleGuildIds(getVisibleGuildIds) {
  const obj = { getVisibleGuildIds };
  obj.setState(obj);
}
export function getVisibleGuildIdsMethod() {
  return obj.getState().getVisibleGuildIds;
}
export function setGetVisibleChannelIds(getVisibleChannelIds) {
  const obj = { getVisibleChannelIds };
  obj.setState(obj);
}
export function getVisibleChannelIdsMethod() {
  return obj.getState().getVisibleChannelIds;
}