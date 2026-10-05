// discord_app/modules/messages/createMessage.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import ReferencedMessageStore2 from "../replies/ReferencedMessageStore.tsx";
import createNonce from "createNonce.tsx";
import UserRecord from "../../records/UserRecord.tsx";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ReferencedMessageStore = ReferencedMessageStore2;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
const ReferencedMessageState = ReferencedMessageStore2.ReferencedMessageState;
({
  MessageStates: metroImportDefault,
  MessageTypes: metroImportAll,
  LOCAL_BOT_ID: c9,
  NON_USER_BOT_DISCRIMINATOR: c10,
  MessageFlags: unpackModuleId,
} = Constants);
const result = size.fileFinishedImporting("modules/messages/createMessage.tsx");

export default function createMessage(tts) {
  let allowedMentions;
  let author;
  let boostingPrompt;
  let changelogId;
  let channelId;
  let content;
  let date;
  let flags;
  let giftingPrompt;
  let mediaMention;
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
    DEFAULT = metroImportAll.DEFAULT;
  }
  ({ messageReference, allowedMentions, author, nonce, state } = tts);
  const items = [];
  ({ flags, poll, sharedCustomTheme, changelogId, giftingPrompt, boostingPrompt, mediaMention } = tts);
  if (DEFAULT === metroImportAll.REPLY) {
    _modDef38(null != messageReference, "Replies must have a message reference");
    if (null == allowedMentions) {
      const messageByReference = ReferencedMessageStore.getMessageByReference(messageReference);
      let state1;
      if (messageByReference != null) {
        state1 = messageByReference.state;
      }
      if (state1 === ReferencedMessageState.LOADED) {
        const obj = {
          id: null,
          username: null,
          avatar: null,
          discriminator: null,
          bot: null,
          global_name: null,
          primary_guild: null,
        };
        ({
          id: obj.id,
          username: obj.username,
          avatar: obj.avatar,
          discriminator: obj.discriminator,
          bot: obj.bot,
          globalName: obj.global_name,
          primaryGuild: obj.primary_guild,
        } = messageByReference.message.author);
        items.push(obj);
      }
    }
  }
  if (null == author) {
    author = UserStore.getCurrentUser();
  }
  let tmp8 = author;
  if (author instanceof UserRecord) {
    const obj4 = {
      id: null,
      username: null,
      avatar: null,
      discriminator: null,
      bot: null,
      global_name: null,
      primary_guild: null,
    };
    ({
      id: obj2.id,
      username: obj2.username,
      avatar: obj2.avatar,
      discriminator: obj2.discriminator,
      bot: obj2.bot,
      globalName: obj2.global_name,
      primaryGuild: obj2.primary_guild,
    } = author);
    tmp8 = obj4;
  }
  _modDef38(null != tmp8, "createMessage: author cannot be undefined");
  let nonce1 = nonce;
  if (nonce == null) {
    const obj3 = createNonce;
    nonce1 = obj3.createNonce();
  }
  const obj5 = {
    id: nonce1,
    type: DEFAULT,
    content,
    channel_id: channelId,
    author: tmp8,
    attachments: [],
    embeds: [],
    pinned: false,
    mentions: items,
    mention_channels: [],
    mention_roles: [],
    mention_everyone: false,
    timestamp: date.toISOString(),
    state,
    tts: flag,
    message_reference: messageReference,
    message_snapshots: [],
    flags,
    nonce,
    poll,
    shared_client_theme: sharedCustomTheme,
    changelog_id: changelogId,
    gifting_prompt: giftingPrompt,
    boosting_prompt: boostingPrompt,
    media_mention: mediaMention,
  };
  date = new Date();
  if (state == null) {
    state = metroImportDefault.SENDING;
  }
  return obj5;
}
export const userRecordToServer = function userRecordToServer(currentUser) {
  return {
    id: currentUser.id,
    username: currentUser.username,
    avatar: currentUser.avatar,
    discriminator: currentUser.discriminator,
    bot: currentUser.bot,
    global_name: currentUser.globalName,
    primary_guild: currentUser.primaryGuild,
  };
};
export const createBotMessage = function createBotMessage(arg0) {
  let channelId;
  let content;
  let date;
  let embeds;
  let loggingName;
  let messageId;
  let obj3;
  ({ messageId, embeds } = arg0);
  ({ channelId, content, loggingName } = arg0);
  if (messageId == null) {
    const obj = createNonce;
    messageId = obj.createNonce();
  }
  const obj2 = {
    id: messageId,
    type: metroImportAll.DEFAULT,
    flags: unpackModuleId.EPHEMERAL,
    content,
    channel_id: channelId,
    author: obj3,
    attachments: [],
    embeds,
    pinned: false,
    mentions: [],
    mention_channels: [],
    mention_roles: [],
    mention_everyone: false,
    timestamp: date.toISOString(),
    state: metroImportDefault.SENT,
    tts: false,
    loggingName,
  };
  obj3 = { id, username: "Clyde", discriminator, avatar: "clyde", bot: true };
  if (embeds == null) {
    embeds = [];
  }
  date = new Date();
  return obj2;
};
