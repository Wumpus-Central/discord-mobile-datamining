// === Module 7752: createMessage ===

// Module 7752 (createMessage)
import _modDef38 from "module_38" /* 38 */;
import snowflakeSequence from "snowflakeSequence" /* 7753 */;
import closure_3 from "processMessage" /* 7595 */;
import { ReferencedMessageState } from "processMessage" /* 7595 */;
import closure_5 from "createdAt" /* 1385 */;
import closure_6 from "mergeGuildAvatar" /* 1371 */;
import ME from "ME" /* 1074 */;

require = arg1;
({ MessageStates: error, MessageTypes: closure_8, LOCAL_BOT_ID: c9, NON_USER_BOT_DISCRIMINATOR: c10, MessageFlags: unpackModuleId } = ME);
const result = require("set").fileFinishedImporting("modules/messages/createMessage.tsx");

export default function createMessage(tts) {
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
  ({ flags, poll, sharedCustomTheme, changelogId, giftingPrompt, boostingPrompt, mediaMention } = tts);
  if (DEFAULT === constants2.REPLY) {
    _modDef38(null != messageReference, "Replies must have a message reference");
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
  if (author instanceof closure_5) {
    obj = { id: null, username: null, avatar: null, discriminator: null, bot: null, global_name: null, primary_guild: null };
    ({ id: obj2[0], username: obj2[1], avatar: obj2[2], discriminator: obj2[3], bot: obj2[4], globalName: obj2[5], primaryGuild: obj2[6] } = author);
    tmp8 = obj;
  }
  _modDef38(null != tmp8, "createMessage: author cannot be undefined");
  if (nonce == null) {
    nonce = snowflakeSequence.createNonce();
    const obj3 = snowflakeSequence;
  }
  obj = { id: nonce, type: DEFAULT, content, channel_id: channelId, author: tmp8, attachments: [], embeds: [], pinned: false, mentions: items, mention_channels: [], mention_roles: [], mention_everyone: false, timestamp: new Date().toISOString(), state: null, tts: null, message_reference: null, message_snapshots: null, flags: null, nonce: null, poll: null, shared_client_theme: null, changelog_id: null, gifting_prompt: null, boosting_prompt: null, media_mention: null };
  if (state == null) {
    state = constants.SENDING;
  }
  obj[13] = state;
  obj[14] = flag;
  obj[15] = messageReference;
  obj[16] = [];
  obj[17] = flags;
  obj[18] = nonce;
  obj[19] = poll;
  obj[20] = sharedCustomTheme;
  obj[21] = changelogId;
  obj[22] = giftingPrompt;
  obj[23] = boostingPrompt;
  obj[24] = mediaMention;
  return obj;
};
export const userRecordToServer = function userRecordToServer(currentUser) {
  return { id: currentUser.id, username: currentUser.username, avatar: currentUser.avatar, discriminator: currentUser.discriminator, bot: currentUser.bot, global_name: currentUser.globalName, primary_guild: currentUser.primaryGuild };
};
export const createBotMessage = function createBotMessage(arg0) {
  ({ messageId, embeds } = arg0);
  ({ channelId, content, loggingName } = arg0);
  if (messageId == null) {
    let obj = snowflakeSequence;
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