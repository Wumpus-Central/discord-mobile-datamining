// discord_app/modules/guild_sidebar/SidebarVisibilityMethodStore.tsx
import 00560__ from "../../../_runtime/metro/00560__.js";
import size from "../../../_runtime/metro/00002__.js";

const SidebarVisibilityMethodStore = module_560.create(() => ({}));
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