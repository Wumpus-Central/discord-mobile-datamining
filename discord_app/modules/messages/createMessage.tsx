import processMessage from "processMessage";
import { ReferencedMessageState } from "processMessage";
import createdAt from "createdAt";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";

let c10;
let c9;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
({ MessageStates: error, MessageTypes: metroImportAll, LOCAL_BOT_ID: c9, NON_USER_BOT_DISCRIMINATOR: c10, MessageFlags: unpackModuleId } = ME);
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/messages/createMessage.tsx");

export default function createMessage(tts) {
  let allowedMentions;
  let author;
  let boostingPrompt;
  let changelogId;
  let channelId;
  let content;
  let flags;
  let giftingPrompt;
  let mediaMention;
  let mentionGames;
  let messageReference;
  let nonce;
  let poll;
  let sharedCustomTheme;
  let state;
  let flag = tts.tts;
  ({ channelId, content } = tts);
  if (flag === undefined) {
    flag = false;
  }
  let DEFAULT = tts.type;
  if (DEFAULT === undefined) {
    DEFAULT = constants2.DEFAULT;
  }
  ({ messageReference, allowedMentions, author, nonce, state } = tts);
  const items = [];
  ({ flags, poll, sharedCustomTheme, changelogId, giftingPrompt, boostingPrompt, mediaMention, mentionGames } = tts);
  if (DEFAULT === constants2.REPLY) {
    importDefault(38)(null != messageReference, "Replies must have a message reference");
    if (null == allowedMentions) {
      messageByReference = messageByReference.getMessageByReference(messageReference);
      state = undefined;
      if (messageByReference != null) {
        state = messageByReference.state;
      }
      if (state === ReferencedMessageState.LOADED) {
        let obj = { id: null, username: null, avatar: null, discriminator: null, bot: null, global_name: null, primary_guild: null };
        ({ id: obj[0], username: obj[1], avatar: obj[2], discriminator: obj[3], bot: obj[4], globalName: obj[5], primaryGuild: obj[6] } = messageByReference.message.author);
        items.push(obj);
      }
    }
  }
  if (null == author) {
    author = currentUser.getCurrentUser();
  }
  let tmp8 = author;
  if (author instanceof createdAt) {
    obj = { id: null, username: null, avatar: null, discriminator: null, bot: null, global_name: null, primary_guild: null };
    ({ id: obj2[0], username: obj2[1], avatar: obj2[2], discriminator: obj2[3], bot: obj2[4], globalName: obj2[5], primaryGuild: obj2[6] } = author);
    tmp8 = obj;
  }
  importDefault(38)(null != tmp8, "createMessage: author cannot be undefined");
  if (nonce == null) {
    nonce = require(6043) /* snowflakeSequence */.createNonce();
    const obj3 = require(6043) /* snowflakeSequence */;
  }
  obj = { id: nonce, type: DEFAULT, content, channel_id: channelId, author: tmp8, attachments: [], embeds: [], pinned: false, mentions: items, mention_channels: [], mention_roles: [], mention_everyone: false, mention_games: mentionGames, timestamp: null, state: null, tts: null, message_reference: null, message_snapshots: null, flags: null, nonce: null, poll: null, shared_client_theme: null, changelog_id: null, gifting_prompt: null, boosting_prompt: null, media_mention: null };
  obj[13] = new Date().toISOString();
  if (state == null) {
    state = constants.SENDING;
  }
  obj[14] = state;
  obj[15] = flag;
  obj[16] = messageReference;
  obj[17] = [];
  obj[18] = flags;
  obj[19] = nonce;
  obj[20] = poll;
  obj[21] = sharedCustomTheme;
  obj[22] = changelogId;
  obj[23] = giftingPrompt;
  obj[24] = boostingPrompt;
  obj[25] = mediaMention;
  return obj;
};
export const userRecordToServer = function userRecordToServer(currentUser) {
  return { id: currentUser.id, username: currentUser.username, avatar: currentUser.avatar, discriminator: currentUser.discriminator, bot: currentUser.bot, global_name: currentUser.globalName, primary_guild: currentUser.primaryGuild };
};
export const createBotMessage = function createBotMessage(arg0) {
  let channelId;
  let content;
  let embeds;
  let loggingName;
  let messageId;
  ({ messageId, embeds } = arg0);
  ({ channelId, content, loggingName } = arg0);
  if (messageId == null) {
    let obj = require(6043) /* snowflakeSequence */;
    messageId = obj.createNonce();
  }
  obj = { id: messageId, type: constants2.DEFAULT, flags: constants3.EPHEMERAL, content, channel_id: channelId, author: obj, attachments: [], embeds: null, pinned: false, mentions: null, mention_channels: null, mention_roles: null, mention_everyone: false, timestamp: null, state: null, tts: false, loggingName: null };
  obj = { id: closure_9, username: "Clyde", discriminator: closure_10, avatar: "clyde", bot: true };
  if (embeds == null) {
    embeds = [];
  }
  obj[7] = embeds;
  obj[9] = [];
  obj[10] = [];
  obj[11] = [];
  obj[13] = new Date().toISOString();
  obj[14] = constants.SENT;
  obj[16] = loggingName;
  return obj;
};