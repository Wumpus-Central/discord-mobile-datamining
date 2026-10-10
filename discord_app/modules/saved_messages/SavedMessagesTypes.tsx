// === Module 9681: SavedMessagesTypes ===

// Module 9681 (SavedMessagesTypes)
import MessageRecordUtils from "MessageRecordUtils" /* 5434 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/SavedMessagesTypes.tsx");

export const SavedMessageSortTypes = { ALL: "ALL", REMINDER: "REMINDER", BOOKMARK: "BOOKMARK" };
export const BookmarksFetchState = { LOADING: "LOADING", LOADED_HAS_MORE: "LOADED_HAS_MORE", LOADED_FINISHED: "LOADED_FINISHED", FAILED: "FAILED" };
export const savedMessageDataToClient = function savedMessageDataToClient(channelId) {
  const obj = { channelId: channelId.channel_id, messageId: channelId.message_id, savedAt: new Date(channelId.saved_at), authorSummary: null, channelSummary: null, messageSummary: null, guildId: null, authorId: null, notes: null, dueAt: null };
  ({ author_summary: obj.authorSummary, channel_summary: obj.channelSummary, message_summary: obj.messageSummary } = channelId);
  let guild_id;
  if (0 !== channelId.guild_id) {
    guild_id = channelId.guild_id;
  }
  obj.guildId = guild_id;
  let author_id;
  if (0 !== channelId.author_id) {
    author_id = channelId.author_id;
  }
  obj.authorId = author_id;
  obj.notes = channelId.notes;
  let date1;
  if (null != channelId.due_at) {
    const _Date = Date;
    date1 = new Date(channelId.due_at);
  }
  obj.dueAt = date1;
  return obj;
};
export const savedMessageCreateObjectToClient = function savedMessageCreateObjectToClient(body) {
  let messageRecord = null;
  if (null != body.message) {
    messageRecord = MessageRecordUtils.createMessageRecord(body.message);
  }
  const obj2 = { message: messageRecord, saveData: null };
  const save_data = body.save_data;
  const obj5 = { channelId: save_data.channel_id, messageId: save_data.message_id, savedAt: new Date(save_data.saved_at), authorSummary: null, channelSummary: null, messageSummary: null, guildId: null, authorId: null, notes: null, dueAt: null };
  ({ author_summary: obj3.authorSummary, channel_summary: obj3.channelSummary, message_summary: obj3.messageSummary } = save_data);
  let guild_id;
  if (0 !== save_data.guild_id) {
    guild_id = save_data.guild_id;
  }
  obj5.guildId = guild_id;
  let author_id;
  if (0 !== save_data.author_id) {
    author_id = save_data.author_id;
  }
  obj5.authorId = author_id;
  obj5.notes = save_data.notes;
  let date1;
  if (null != save_data.due_at) {
    const _Date = Date;
    date1 = new Date(save_data.due_at);
  }
  obj5.dueAt = date1;
  obj2.saveData = obj5;
  return obj2;
};
export const savedMessageDeleteObjectToClient = function savedMessageDeleteObjectToClient(channelId) {
  return { channelId: channelId.channel_id, messageId: channelId.message_id };
};