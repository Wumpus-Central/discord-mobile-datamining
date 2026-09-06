// discord_app/modules/saved_messages/SavedMessagesTypes.tsx
import MessageRecordUtils from "../messages/MessageRecordUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/saved_messages/SavedMessagesTypes.tsx");

export const SavedMessageSortTypes = { ALL: "ALL", REMINDER: "REMINDER", BOOKMARK: "BOOKMARK" };
export const savedMessageDataToClient = function savedMessageDataToClient(save_data) {
  const obj = {
    channelId: save_data.channel_id,
    messageId: save_data.message_id,
    savedAt: new Date(save_data.saved_at),
    authorSummary: null,
    channelSummary: null,
    messageSummary: null,
    guildId: null,
    authorId: null,
    notes: null,
    dueAt: null,
  };
  ({
    author_summary: obj.authorSummary,
    channel_summary: obj.channelSummary,
    message_summary: obj.messageSummary,
  } = save_data);
  let guild_id;
  if (0 !== save_data.guild_id) {
    guild_id = save_data.guild_id;
  }
  obj.guildId = guild_id;
  let author_id;
  if (0 !== save_data.author_id) {
    author_id = save_data.author_id;
  }
  obj.authorId = author_id;
  obj.notes = save_data.notes;
  let date1;
  if (null != save_data.due_at) {
    const _Date = Date;
    date1 = new Date(save_data.due_at);
  }
  obj.dueAt = date1;
  return obj;
};
export const savedMessageCreateObjectToClient = function savedMessageCreateObjectToClient(body) {
  let messageRecord = null;
  if (null != body.message) {
    let obj = MessageRecordUtils;
    messageRecord = obj.createMessageRecord(body.message);
  }
  obj = { message: messageRecord, saveData: null };
  const save_data = body.save_data;
  obj = {
    channelId: save_data.channel_id,
    messageId: save_data.message_id,
    savedAt: new Date(save_data.saved_at),
    authorSummary: null,
    channelSummary: null,
    messageSummary: null,
    guildId: null,
    authorId: null,
    notes: null,
    dueAt: null,
  };
  ({
    author_summary: obj3.authorSummary,
    channel_summary: obj3.channelSummary,
    message_summary: obj3.messageSummary,
  } = save_data);
  let guild_id;
  if (0 !== save_data.guild_id) {
    guild_id = save_data.guild_id;
  }
  obj.guildId = guild_id;
  let author_id;
  if (0 !== save_data.author_id) {
    author_id = save_data.author_id;
  }
  obj.authorId = author_id;
  obj.notes = save_data.notes;
  let date1;
  if (null != save_data.due_at) {
    const _Date = Date;
    date1 = new Date(save_data.due_at);
  }
  obj.dueAt = date1;
  obj.saveData = obj;
  return obj;
};
export const savedMessageDeleteObjectToClient = function savedMessageDeleteObjectToClient(channelId) {
  return { channelId: channelId.channel_id, messageId: channelId.message_id };
};
