const result = require("set").fileFinishedImporting("modules/saved_messages/SavedMessagesTypes.tsx");

export const SavedMessageSortTypes = { ALL: "ALL", REMINDER: "REMINDER", BOOKMARK: "BOOKMARK" };
export const savedMessageDataToClient = function savedMessageDataToClient(save_data) {
  const obj = { channelId: save_data.channel_id, messageId: save_data.message_id, savedAt: null, authorSummary: null, channelSummary: null, messageSummary: null, guildId: null, authorId: null, notes: null, dueAt: null };
  obj[2] = new Date(save_data.saved_at);
  ({ author_summary: obj[3], channel_summary: obj[4], message_summary: obj[5] } = save_data);
  let guild_id;
  if (0 !== save_data.guild_id) {
    guild_id = save_data.guild_id;
  }
  obj[6] = guild_id;
  let author_id;
  if (0 !== save_data.author_id) {
    author_id = save_data.author_id;
  }
  obj[7] = author_id;
  obj[8] = save_data.notes;
  let date1;
  if (null != save_data.due_at) {
    const _Date = Date;
    date1 = new Date(save_data.due_at);
  }
  obj[9] = date1;
  return obj;
};
export const savedMessageCreateObjectToClient = function savedMessageCreateObjectToClient(body) {
  let messageRecord = null;
  if (null != body.message) {
    let obj = require(4475) /* createMinimalMessageRecord */;
    messageRecord = obj.createMessageRecord(body.message);
  }
  obj = { message: messageRecord, saveData: null };
  const save_data = body.save_data;
  obj = { channelId: save_data.channel_id, messageId: save_data.message_id, savedAt: null, authorSummary: null, channelSummary: null, messageSummary: null, guildId: null, authorId: null, notes: null, dueAt: null };
  obj[2] = new Date(save_data.saved_at);
  ({ author_summary: obj3[3], channel_summary: obj3[4], message_summary: obj3[5] } = save_data);
  let guild_id;
  if (0 !== save_data.guild_id) {
    guild_id = save_data.guild_id;
  }
  obj[6] = guild_id;
  let author_id;
  if (0 !== save_data.author_id) {
    author_id = save_data.author_id;
  }
  obj[7] = author_id;
  obj[8] = save_data.notes;
  let date1;
  if (null != save_data.due_at) {
    const _Date = Date;
    date1 = new Date(save_data.due_at);
  }
  obj[9] = date1;
  obj[1] = obj;
  return obj;
};
export const savedMessageDeleteObjectToClient = function savedMessageDeleteObjectToClient(channelId) {
  return { channelId: channelId.channel_id, messageId: channelId.message_id };
};