// === Module 7495: SavedMessagesTypes ===

// Module 7495 (SavedMessagesTypes)
import MessageRecordUtils from "MessageRecordUtils" /* 5112 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/SavedMessagesTypes.tsx");

export const SavedMessageSortTypes = { ALL: "ALL", REMINDER: "REMINDER", BOOKMARK: "BOOKMARK" };
export const savedMessageDataToClient = function savedMessageDataToClient(save_data) {
  let author_id;
  let date1;
  let guild_id;
  const obj = { channelId: save_data.channel_id, messageId: save_data.message_id, savedAt: new Date(save_data.saved_at), authorSummary: null, channelSummary: null, messageSummary: null, guildId: guild_id, authorId: author_id, notes: save_data.notes, dueAt: date1 };
  ({ author_summary: obj.authorSummary, channel_summary: obj.channelSummary, message_summary: obj.messageSummary } = save_data);
  guild_id = undefined;
  new Date(save_data.saved_at);
  if (0 !== save_data.guild_id) {
    guild_id = save_data.guild_id;
  }
  author_id = undefined;
  if (0 !== save_data.author_id) {
    author_id = save_data.author_id;
  }
  date1 = undefined;
  if (null != save_data.due_at) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date1 = new Date(save_data.due_at);
  }
  return obj;
};
export const savedMessageCreateObjectToClient = function savedMessageCreateObjectToClient(body) {
  let author_id;
  let date1;
  let guild_id;
  let obj5;
  let messageRecord = null;
  if (null != body.message) {
    const obj = MessageRecordUtils;
    messageRecord = obj.createMessageRecord(body.message);
  }
  const save_data = body.save_data;
  const obj2 = { message: messageRecord, saveData: obj5 };
  ({ author_summary: obj3.authorSummary, channel_summary: obj3.channelSummary, message_summary: obj3.messageSummary } = save_data);
  obj5 = { channelId: save_data.channel_id, messageId: save_data.message_id, savedAt: new Date(save_data.saved_at), authorSummary: null, channelSummary: null, messageSummary: null, guildId: guild_id, authorId: author_id, notes: save_data.notes, dueAt: date1 };
  guild_id = undefined;
  new Date(save_data.saved_at);
  if (0 !== save_data.guild_id) {
    guild_id = save_data.guild_id;
  }
  author_id = undefined;
  if (0 !== save_data.author_id) {
    author_id = save_data.author_id;
  }
  date1 = undefined;
  if (null != save_data.due_at) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date1 = new Date(save_data.due_at);
  }
  return obj2;
};
export const savedMessageDeleteObjectToClient = function savedMessageDeleteObjectToClient(channelId) {
  return { channelId: channelId.channel_id, messageId: channelId.message_id };
};