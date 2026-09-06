// === Module 4760: GuildRoomsExperiment ===

// Module 4760 (GuildRoomsExperiment)
import GuildMemberStore from "GuildMemberStore" /* 2021 */;

const require = fn;
fn(4474);
const createExperiment = { kind: "guild", id: "2026-06_guild_rooms", label: "Guild Rooms", defaultConfig: { enabled: false, interactionsEnabled: false, multipleRoomsEnabled: false, posturesEnabled: false }, treatments: null };
let items = [{ id: 1, label: "Enable Guild Rooms in this guild", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: false, posturesEnabled: true } }, { id: 2, label: "Enable Guild Rooms without Interactions", config: { enabled: true, interactionsEnabled: false, multipleRoomsEnabled: false, posturesEnabled: true } }, { id: 3, label: "Enable Guild Rooms with Room Variants", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: true, posturesEnabled: true } }, { id: 4, label: "Enable Guild Rooms without Postures", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: false, posturesEnabled: false } }, { id: 5, label: "Enable Guild Rooms with Room 2 Default and Selector", config: { enabled: true, interactionsEnabled: true, multipleRoomsEnabled: true, posturesEnabled: true } }];
createExperiment.treatments = items;
let closure_3 = createExperiment.createExperiment(createExperiment);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_rooms/GuildRoomsExperiment.tsx");

export const GUILD_ROOMS_EXPERIMENT_ID = "2026-06_guild_rooms";
export const getGuildRoomsConfig = function getGuildRoomsConfig(guildId, disable) {
  const obj = { autoTrackExposure: true };
  const merged = Object.assign(disable);
  let flag;
  if (disable != null) {
    flag = disable.disable;
  }
  if (flag == null) {
    flag = false;
  }
  if (!flag) {
    guildId = guildId.guildId;
    let tmp3 = null != guildId;
    if (tmp3) {
      tmp3 = !GuildMemberStore.isCurrentUserGuest(guildId);
    }
    flag = !tmp3;
  }
  obj.disable = flag;
  return closure_3.getCurrentConfig(guildId, obj);
};
export const useGuildRoomsExperiment = function useGuildRoomsExperiment(guildId, arg1) {
  _require = guildId;
  require("initialize");
  const items = [GuildMemberStore];
  const items1 = [guildId.guildId];
  const obj = { autoTrackExposure: true };
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null != guildId.guildId;
    if (tmp2) {
      tmp2 = !GuildMemberStore.isCurrentUserGuest(tmp.guildId);
    }
    return tmp2;
  }, items1);
  const merged = Object.assign(arg1);
  let flag;
  if (arg1 != null) {
    flag = arg1.disable;
  }
  if (flag == null) {
    flag = false;
  }
  if (!flag) {
    flag = !stateFromStores;
  }
  obj.disable = flag;
  return closure_3.useExperiment(guildId, obj);
};