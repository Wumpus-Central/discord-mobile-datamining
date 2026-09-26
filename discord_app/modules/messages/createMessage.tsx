// discord_app/modules/messages/createMessage.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import createNonce from "createNonce.tsx";
import ReferencedMessageStore from "../replies/ReferencedMessageStore.tsx";
import UserRecord from "../../records/UserRecord.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const ReferencedMessageState = fn(7013).ReferencedMessageState;
const Constants = fn(1074);
({
  MessageStates: closure_7,
  MessageTypes: closure_8,
  LOCAL_BOT_ID: closure_9,
  NON_USER_BOT_DISCRIMINATOR: c10,
  MessageFlags: closure_11,
} = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/createMessage.tsx");

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
    ({
      id: obj2.id,
      username: obj2.username,
      avatar: obj2.avatar,
      discriminator: obj2.discriminator,
      bot: obj2.bot,
      globalName: obj2.global_name,
      primaryGuild: obj2.primary_guild,
    } = author);
    tmp8 = {
      id: null,
      username: null,
      avatar: null,
      discriminator: null,
      bot: null,
      global_name: null,
      primary_guild: null,
    };
    const obj4 = {
      id: null,
      username: null,
      avatar: null,
      discriminator: null,
      bot: null,
      global_name: null,
      primary_guild: null,
    };
  }
  _modDef38(null != tmp8, "createMessage: author cannot be undefined");
  let nonce1 = nonce;
  if (nonce == null) {
    nonce1 = createNonce.createNonce();
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
    timestamp: new Date().toISOString(),
    state: null,
    tts: null,
    message_reference: null,
    message_snapshots: null,
    flags: null,
    nonce: null,
    poll: null,
    shared_client_theme: null,
    changelog_id: null,
    gifting_prompt: null,
    boosting_prompt: null,
    media_mention: null,
  };
  if (state == null) {
    state = constants.SENDING;
  }
  obj5.state = state;
  obj5.tts = flag;
  obj5.message_reference = messageReference;
  obj5.message_snapshots = [];
  obj5.flags = flags;
  obj5.nonce = nonce;
  obj5.poll = poll;
  obj5.shared_client_theme = sharedCustomTheme;
  obj5.changelog_id = changelogId;
  obj5.gifting_prompt = giftingPrompt;
  obj5.boosting_prompt = boostingPrompt;
  obj5.media_mention = mediaMention;
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
  ({ messageId, embeds } = arg0);
  ({ channelId, content, loggingName } = arg0);
  if (messageId == null) {
    messageId = createNonce.createNonce();
  }
  const obj2 = {
    id: messageId,
    type: constants2.DEFAULT,
    flags: constants3.EPHEMERAL,
    content,
    channel_id: channelId,
    author: { id, username: "Clyde", discriminator, avatar: "clyde", bot: true },
    attachments: [],
    embeds: null,
    pinned: false,
    mentions: null,
    mention_channels: null,
    mention_roles: null,
    mention_everyone: false,
    timestamp: null,
    state: null,
    tts: false,
    loggingName: null,
  };
  if (embeds == null) {
    embeds = [];
  }
  obj2.embeds = embeds;
  obj2.mentions = [];
  obj2.mention_channels = [];
  obj2.mention_roles = [];
  obj2.timestamp = new Date().toISOString();
  obj2.state = constants.SENT;
  obj2.loggingName = loggingName;
  return obj2;
};
