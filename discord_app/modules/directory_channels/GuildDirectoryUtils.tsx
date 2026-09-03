// === Module 12100: guildDirectoryEntryFromServer ===

// Module 12100 (guildDirectoryEntryFromServer)
import set2 from "set" /* 2 */;
import applyDefault from "apply" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import DirectoryEntryTypes2 from "DirectoryEntryTypes" /* 12101 */;

const DirectoryEntryTypes = DirectoryEntryTypes2.DirectoryEntryTypes;
const result = set2.fileFinishedImporting("modules/directory_channels/GuildDirectoryUtils.tsx");

export const guildDirectoryEntryFromServer = function guildDirectoryEntryFromServer(entry) {
  if (entry.type === DirectoryEntryTypes.GUILD) {
    const obj = { channelId: null, guildId: null, type: null, authorId: null, createdAt: null, description: null, primaryCategoryId: null, name: null, icon: null, splash: null, features: null, approximateMemberCount: null, approximatePresenceCount: null, featurableInDirectory: null };
    ({ directory_channel_id: obj[0], entity_id: obj[1], type: obj[2], author_id: obj[3], created_at: obj[4], description: obj[5], primary_category_id: obj[6], guild } = entry);
    let name;
    if (guild != null) {
      name = guild.name;
    }
    obj[7] = name;
    const guild2 = entry.guild;
    let icon;
    if (guild2 != null) {
      icon = guild2.icon;
    }
    obj[8] = icon;
    const guild3 = entry.guild;
    let splash;
    if (guild3 != null) {
      splash = guild3.splash;
    }
    obj[9] = splash;
    const guild4 = entry.guild;
    let features;
    if (guild4 != null) {
      features = guild4.features;
    }
    const set = new Set(features);
    obj[10] = set;
    const guild5 = entry.guild;
    let prop;
    if (guild5 != null) {
      prop = guild5.approximate_member_count;
    }
    obj[11] = prop;
    const guild6 = entry.guild;
    let prop1;
    if (guild6 != null) {
      prop1 = guild6.approximate_presence_count;
    }
    obj[12] = prop1;
    const guild7 = entry.guild;
    let prop2;
    if (guild7 != null) {
      prop2 = guild7.featurable_in_directory;
    }
    obj[13] = prop2;
    return obj;
  } else {
    const type = entry.type;
    _modDef38(false, "Directory entries must be connected to a guild!");
  }
};
export const MAX_CATEGORY_SERVERS = 5;
export const orderByTotalMemberCount = function orderByTotalMemberCount(found) {
  const items = [(approximateMemberCount) => approximateMemberCount.approximateMemberCount];
  return applyDefault.orderBy(found, items, ["desc"]);
};
export const orderByDateAdded = function orderByDateAdded(reactions) {
  const items = [(createdAt) => createdAt.createdAt];
  return applyDefault.orderBy(reactions, items, ["desc"]);
};
export const rankByDateAdded = function rankByDateAdded(arr) {
  const found = arr.filter((featurableInDirectory) => featurableInDirectory.featurableInDirectory);
  const items = [(createdAt) => createdAt.createdAt];
  const obj = applyDefault;
  return applyDefault.orderBy(found, items, ["desc"]).slice(0, 5);
};
export const rankGuildEntries = function rankGuildEntries(arr) {
  const items = [(approximateMemberCount) => approximateMemberCount.approximateMemberCount];
  return applyDefault.orderBy(arr, items, ["desc"]);
};