// === Module 9505: SidebarVisibilityMethodStore ===

// Module 9505 (SidebarVisibilityMethodStore)
import obj132 from "obj132" /* 2 */;
import keys from "keys" /* 644 */;

let obj = keys.create(() => ({}));
const result = obj132.fileFinishedImporting("modules/guild_sidebar/SidebarVisibilityMethodStore.tsx");

export const SidebarVisibilityMethodStore = obj;
export const setGetVisibleGuildIds = function setGetVisibleGuildIds(getVisibleGuildIds) {
  obj = { getVisibleGuildIds };
  obj.setState(obj);
};
export const getVisibleGuildIdsMethod = function getVisibleGuildIdsMethod() {
  return obj.getState().getVisibleGuildIds;
};
export const setGetVisibleChannelIds = function setGetVisibleChannelIds(getVisibleChannelIds) {
  obj = { getVisibleChannelIds };
  obj.setState(obj);
};
export const getVisibleChannelIdsMethod = function getVisibleChannelIdsMethod() {
  return obj.getState().getVisibleChannelIds;
};