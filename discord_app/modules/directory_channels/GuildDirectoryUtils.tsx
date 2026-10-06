// === Module 11946: GuildDirectoryUtils ===

// Module 11946 (GuildDirectoryUtils)
import _modDef12 from "module_12" /* 12 */;
import _modDef38 from "module_38" /* 38 */;
import GuildDirectoryConstants from "GuildDirectoryConstants" /* 11947 */;
import size from "module_2" /* 2 */;

const f109946 = (approximateMemberCount) => approximateMemberCount.approximateMemberCount;
const f109947 = (createdAt) => createdAt.createdAt;
const DirectoryEntryTypes = GuildDirectoryConstants.DirectoryEntryTypes;
const result = size.fileFinishedImporting("modules/directory_channels/GuildDirectoryUtils.tsx");

export const guildDirectoryEntryFromServer = function guildDirectoryEntryFromServer(entry) {
  let _Set1;
  let guild;
  let icon;
  let name;
  let prop;
  let prop1;
  let prop2;
  let splash;
  if (entry.type === DirectoryEntryTypes.GUILD) {
    const obj = { channelId: null, guildId: null, type: null, authorId: null, createdAt: null, description: null, primaryCategoryId: null, name, icon, splash, features: _Set1, approximateMemberCount: prop, approximatePresenceCount: prop1, featurableInDirectory: prop2 };
    ({ directory_channel_id: obj.channelId, entity_id: obj.guildId, type: obj.type, author_id: obj.authorId, created_at: obj.createdAt, description: obj.description, primary_category_id: obj.primaryCategoryId, guild } = entry);
    name = undefined;
    if (guild != null) {
      name = guild.name;
    }
    const guild2 = entry.guild;
    icon = undefined;
    if (guild2 != null) {
      icon = guild2.icon;
    }
    const guild3 = entry.guild;
    splash = undefined;
    if (guild3 != null) {
      splash = guild3.splash;
    }
    const guild4 = entry.guild;
    let features;
    const _Set = Set;
    if (guild4 != null) {
      features = guild4.features;
    }
    const self = this;
    const self2 = this;
    _Set1 = new _Set(features);
    const guild5 = entry.guild;
    prop = undefined;
    if (guild5 != null) {
      prop = guild5.approximate_member_count;
    }
    const guild6 = entry.guild;
    prop1 = undefined;
    if (guild6 != null) {
      prop1 = guild6.approximate_presence_count;
    }
    const guild7 = entry.guild;
    prop2 = undefined;
    if (guild7 != null) {
      prop2 = guild7.featurable_in_directory;
    }
    return obj;
  } else {
    const type = entry.type;
    _modDef38(false, "Directory entries must be connected to a guild!");
  }
};
export const MAX_CATEGORY_SERVERS = 5;
export const orderByTotalMemberCount = function orderByTotalMemberCount(found) {
  const items = [f109946];
  const obj = _modDef12;
  return obj.orderBy(found, items, ["desc"]);
};
export const orderByDateAdded = function orderByDateAdded(items) {
  items = [f109947];
  const obj = _modDef12;
  return obj.orderBy(items, items, ["desc"]);
};
export const rankByDateAdded = function rankByDateAdded(arr) {
  const found = arr.filter((featurableInDirectory) => featurableInDirectory.featurableInDirectory);
  const items = [f109947];
  const obj = _modDef12;
  const orderByResult = obj.orderBy(found, items, ["desc"]);
  return orderByResult.slice(0, 5);
};
export const rankGuildEntries = function rankGuildEntries(arr) {
  const items = [f109946];
  const obj = _modDef12;
  return obj.orderBy(arr, items, ["desc"]);
};