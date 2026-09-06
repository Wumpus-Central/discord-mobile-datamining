// === Module 11195: SidebarVisibilityMethodStore ===

// Module 11195 (SidebarVisibilityMethodStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const SidebarVisibilityMethodStore = module_560.create(() => ({}));
const result = size.fileFinishedImporting("modules/guild_sidebar/SidebarVisibilityMethodStore.tsx");

export { SidebarVisibilityMethodStore };
export const setGetVisibleGuildIds = function setGetVisibleGuildIds(getVisibleGuildIds) {
  const obj = { getVisibleGuildIds };
  obj.setState(obj);
};
export const getVisibleGuildIdsMethod = function getVisibleGuildIdsMethod() {
  return obj.getState().getVisibleGuildIds;
};
export const setGetVisibleChannelIds = function setGetVisibleChannelIds(getVisibleChannelIds) {
  const obj = { getVisibleChannelIds };
  obj.setState(obj);
};
export const getVisibleChannelIdsMethod = function getVisibleChannelIdsMethod() {
  return obj.getState().getVisibleChannelIds;
};