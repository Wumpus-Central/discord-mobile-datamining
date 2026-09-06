// === Module 12304: GuildDirectoryUtils ===

// Module 12304 (GuildDirectoryUtils)
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import GuildDirectoryConstants from "GuildDirectoryConstants" /* 12305 */;
import size from "module_2" /* 2 */;

const DirectoryEntryTypes = GuildDirectoryConstants.DirectoryEntryTypes;
const result = size.fileFinishedImporting("modules/directory_channels/GuildDirectoryUtils.tsx");

export const guildDirectoryEntryFromServer = function guildDirectoryEntryFromServer(entry) {
  if (entry.type === DirectoryEntryTypes.GUILD) {
    const obj = { channelId: null, guildId: null, type: null, authorId: null, createdAt: null, description: null, primaryCategoryId: null, name: null, icon: null, splash: null, features: null, approximateMemberCount: null, approximatePresenceCount: null, featurableInDirectory: null };
    ({ directory_channel_id: obj.channelId, entity_id: obj.guildId, type: obj.type, author_id: obj.authorId, created_at: obj.createdAt, description: obj.description, primary_category_id: obj.primaryCategoryId, guild } = entry);
    let name;
    if (guild != null) {
      name = guild.name;
    }
    obj.name = name;
    const guild2 = entry.guild;
    let icon;
    if (guild2 != null) {
      icon = guild2.icon;
    }
    obj.icon = icon;
    const guild3 = entry.guild;
    let splash;
    if (guild3 != null) {
      splash = guild3.splash;
    }
    obj.splash = splash;
    const guild4 = entry.guild;
    let features;
    if (guild4 != null) {
      features = guild4.features;
    }
    const set = new Set(features);
    obj.features = set;
    const guild5 = entry.guild;
    let prop;
    if (guild5 != null) {
      prop = guild5.approximate_member_count;
    }
    obj.approximateMemberCount = prop;
    const guild6 = entry.guild;
    let prop1;
    if (guild6 != null) {
      prop1 = guild6.approximate_presence_count;
    }
    obj.approximatePresenceCount = prop1;
    const guild7 = entry.guild;
    let prop2;
    if (guild7 != null) {
      prop2 = guild7.featurable_in_directory;
    }
    obj.featurableInDirectory = prop2;
    return obj;
  } else {
    const type = entry.type;
    _modDef38(false, "Directory entries must be connected to a guild!");
  }
};
export const MAX_CATEGORY_SERVERS = 5;
export const orderByTotalMemberCount = function orderByTotalMemberCount(found) {
  const items = [(approximateMemberCount) => approximateMemberCount.approximateMemberCount];
  return _modDef12.orderBy(found, items, ["desc"]);
};
export const orderByDateAdded = function orderByDateAdded(reactions) {
  const items = [(createdAt) => createdAt.createdAt];
  return _modDef12.orderBy(reactions, items, ["desc"]);
};
export const rankByDateAdded = function rankByDateAdded(arr) {
  const found = arr.filter((featurableInDirectory) => featurableInDirectory.featurableInDirectory);
  const items = [(createdAt) => createdAt.createdAt];
  return _modDef12.orderBy(found, items, ["desc"]).slice(0, 5);
};
export const rankGuildEntries = function rankGuildEntries(arr) {
  const items = [(approximateMemberCount) => approximateMemberCount.approximateMemberCount];
  return _modDef12.orderBy(arr, items, ["desc"]);
};