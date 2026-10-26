// discord_common/js/packages/rpc-schema/definitions.tsx
import ChannelTypes from "../../shared/shared-constants/ChannelTypes.tsx";
import Constants2 from "../../shared/activities/Constants.tsx";
import EmbeddedSurfaceType from "../../shared/shared-constants/EmbeddedSurfaceType.tsx";
import OAuth2Scopes from "../../shared/shared-constants/OAuth2Scopes.tsx";
import StatusDisplayTypes from "../../shared/shared-constants/StatusDisplayTypes.tsx";
import ActivityPlatform from "../../shared/constants/ActivityPlatform.tsx";
import SKUTypes from "../../shared/shared-constants/SKUTypes.tsx";
import helpers from "helpers.tsx";
import contextMenuIcons from "contextMenuIcons.tsx";
import Constants from "../../shared/Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function joiEnum(number, OrientationLockState, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.nullable;
  if (flag === undefined) {
    flag = false;
  }
  const values = Object.values(obj[OrientationLockState].values);
  const found = values.filter((item) => typeof item === "number");
  if (found.length > 0) {
    const numberResult = number.number();
    const valid2 = numberResult.valid;
    const items = [];
    HermesBuiltin.arraySpread(found, 0);
    let applyResult = HermesBuiltin.apply(items, numberResult);
  } else {
    const stringResult = number.string();
    const valid = stringResult.valid;
    const items1 = [];
    HermesBuiltin.arraySpread(values, 0);
    applyResult = HermesBuiltin.apply(items1, stringResult);
  }
  if (flag) {
    const obj2 = { className: null };
    const _HermesInternal = HermesInternal;
    obj2.className = "" + OrientationLockState + " | null";
    let metaResult = applyResult.allow(null).meta(obj2);
    const allowResult = applyResult.allow(null);
  } else {
    const obj3 = { className: OrientationLockState };
    metaResult = applyResult.meta(obj3);
  }
  return metaResult;
}
function Channel(string) {
  const obj = {
    id: null,
    type: null,
    guild_id: null,
    name: null,
    topic: null,
    bitrate: null,
    user_limit: null,
    position: null,
    voice_states: null,
    messages: null,
  };
  const stringResult = string.string();
  obj.id = string.string().required().meta({ className: "ChannelId" });
  const requiredResult = string.string().required();
  obj.type = joiEnum(string, "ChannelTypes").required();
  const obj4 = joiEnum(string, "ChannelTypes");
  const stringResult1 = string.string();
  const allowResult = string.string().allow(null);
  obj.guild_id = string.string().allow(null).optional().meta({ className: "GuildId" });
  const optionalResult = string.string().allow(null).optional();
  const stringResult2 = string.string();
  obj.name = string.string().allow(null).optional();
  const allowResult1 = string.string().allow(null);
  const stringResult3 = string.string();
  obj.topic = string.string().allow(null).optional();
  const allowResult2 = string.string().allow(null);
  const numberResult = string.number();
  obj.bitrate = string.number().allow(null).optional();
  const allowResult3 = string.number().allow(null);
  const numberResult1 = string.number();
  obj.user_limit = string.number().allow(null).optional();
  const allowResult4 = string.number().allow(null);
  const numberResult2 = string.number();
  obj.position = string.number().allow(null).optional();
  const allowResult5 = string.number().allow(null);
  const obj2 = { mute: null, nick: null, user: null, voice_state: null, volume: null };
  const arrayResult = string.array();
  obj2.mute = string.boolean().required();
  const booleanResult = string.boolean();
  obj2.nick = string.string().required();
  const stringResult4 = string.string();
  obj2.user = User(string).required();
  const obj3 = { mute: null, deaf: null, self_mute: null, self_deaf: null, suppress: null };
  const obj22 = User(string);
  obj3.mute = string.boolean().required();
  const booleanResult1 = string.boolean();
  obj3.deaf = string.boolean().required();
  const booleanResult2 = string.boolean();
  obj3.self_mute = string.boolean().required();
  const booleanResult3 = string.boolean();
  obj3.self_deaf = string.boolean().required();
  const booleanResult4 = string.boolean();
  obj3.suppress = string.boolean().required();
  const booleanResult5 = string.boolean();
  obj2.voice_state = string.object(obj3).required();
  const objectResult = string.object(obj3);
  obj2.volume = string.number().required();
  const numberResult3 = string.number();
  obj.voice_states = arrayResult.items(string.object(obj2)).required();
  const itemsResult = arrayResult.items(string.object(obj2));
  const arrayResult2 = string.array();
  obj.messages = string.array().items(Message(string)).required();
  return string.object(obj);
}
function InteractionMetadata(string) {
  const obj = {
    id: string.string().required(),
    type: null,
    user: null,
    authorizing_integration_owners: null,
    original_response_message_id: null,
    target_user: null,
    target_message_id: null,
    interacted_message_id: null,
  };
  const stringResult = string.string();
  obj.type = string.number().required();
  const numberResult = string.number();
  obj.user = User(string).optional();
  const obj2 = { 0: null, 1: null };
  const obj4 = User(string);
  const stringResult1 = string.string();
  obj2[0] = string.string().optional().description("ID of the guild the app is installed to");
  const optionalResult = string.string().optional();
  const stringResult2 = string.string();
  obj2[1] = string.string().optional().description("ID of the user the app is installed to");
  const optionalResult1 = string.string().optional();
  obj.authorizing_integration_owners = string.object(obj2).required();
  const objectResult = string.object(obj2);
  obj.original_response_message_id = string.string().optional();
  const stringResult3 = string.string();
  obj.target_user = User(string).optional();
  const obj12 = User(string);
  obj.target_message_id = string.string().optional();
  const stringResult4 = string.string();
  obj.interacted_message_id = string.string().optional();
  return string.object(obj);
}
class Message {
  constructor(arg0) {
    obj = {
      id: null,
      channel_id: null,
      guild_id: null,
      author: null,
      member: null,
      content: null,
      timestamp: null,
      edited_timestamp: null,
      tts: null,
      mention_everyone: null,
      mentions: null,
      mention_roles: null,
      mention_channels: null,
      attachments: null,
      embeds: null,
      components: null,
      reactions: null,
      nonce: null,
      pinned: null,
      webhook_id: null,
      type: null,
      activity: null,
      application: null,
      message_reference: null,
      flags: null,
      application_id: null,
      sticker_items: null,
      poll: null,
      interaction_metadata: null,
      role_subscription_data: null,
      blocked: null,
      nick: null,
      author_color: null,
    };
    stringResult = global.string();
    obj.id = stringResult.required();
    stringResult1 = global.string();
    obj.channel_id = stringResult1.required();
    stringResult2 = global.string();
    allowResult = stringResult2.allow(null);
    obj.guild_id = allowResult.optional();
    obj6 = User(global);
    allowResult1 = obj6.allow(null);
    obj.author = allowResult1.optional();
    obj1 = { nick: null, roles: null, joined_at: null, deaf: null, mute: null };
    stringResult3 = global.string();
    allowResult2 = stringResult3.allow(null);
    obj1.nick = allowResult2.optional();
    arrayResult = global.array();
    itemsResult = arrayResult.items(global.string());
    obj1.roles = itemsResult.required();
    stringResult4 = global.string();
    obj1.joined_at = stringResult4.required();
    booleanResult = global.boolean();
    obj1.deaf = booleanResult.required();
    booleanResult1 = global.boolean();
    obj1.mute = booleanResult1.required();
    objectResult = global.object(obj1);
    allowResult3 = objectResult.allow(null);
    obj.member = allowResult3.optional();
    stringResult5 = global.string();
    allowResult4 = stringResult5.allow("");
    obj.content = allowResult4.required();
    stringResult6 = global.string();
    obj.timestamp = stringResult6.required();
    stringResult7 = global.string();
    allowResult5 = stringResult7.allow(null);
    obj.edited_timestamp = allowResult5.optional();
    booleanResult2 = global.boolean();
    obj.tts = booleanResult2.required();
    booleanResult3 = global.boolean();
    obj.mention_everyone = booleanResult3.required();
    arrayResult1 = global.array();
    itemsResult1 = arrayResult1.items(User(global));
    obj.mentions = itemsResult1.required();
    arrayResult2 = global.array();
    itemsResult2 = arrayResult2.items(global.string());
    obj.mention_roles = itemsResult2.required();
    arrayResult3 = global.array();
    obj245 = { id: null, guild_id: null, type: null, name: null };
    stringResult8 = global.string();
    obj245.id = stringResult8.required();
    stringResult9 = global.string();
    obj245.guild_id = stringResult9.required();
    numberResult = global.number();
    obj245.type = numberResult.required();
    stringResult10 = global.string();
    obj245.name = stringResult10.required();
    itemsResult3 = arrayResult3.items(global.object(obj245));
    obj.mention_channels = itemsResult3.optional();
    arrayResult4 = global.array();
    size = { id: null, filename: null, size: null, url: null, proxy_url: null, height: null, width: null };
    stringResult11 = global.string();
    size.id = stringResult11.required();
    stringResult12 = global.string();
    size.filename = stringResult12.required();
    numberResult1 = global.number();
    size.size = numberResult1.required();
    stringResult13 = global.string();
    size.url = stringResult13.required();
    stringResult14 = global.string();
    size.proxy_url = stringResult14.required();
    numberResult2 = global.number();
    allowResult6 = numberResult2.allow(null);
    size.height = allowResult6.optional();
    numberResult3 = global.number();
    allowResult7 = numberResult3.allow(null);
    size.width = allowResult7.optional();
    itemsResult4 = arrayResult4.items(global.object(size));
    obj.attachments = itemsResult4.required();
    arrayResult5 = global.array();
    obj246 = {
      title: null,
      type: null,
      description: null,
      url: null,
      timestamp: null,
      color: null,
      footer: null,
      image: null,
      thumbnail: null,
      video: null,
      provider: null,
      author: null,
      fields: null,
    };
    stringResult15 = global.string();
    allowResult8 = stringResult15.allow(null);
    obj246.title = allowResult8.optional();
    stringResult16 = global.string();
    allowResult9 = stringResult16.allow(null);
    obj246.type = allowResult9.optional();
    stringResult17 = global.string();
    allowResult10 = stringResult17.allow(null);
    obj246.description = allowResult10.optional();
    stringResult18 = global.string();
    allowResult11 = stringResult18.allow(null);
    obj246.url = allowResult11.optional();
    stringResult19 = global.string();
    allowResult12 = stringResult19.allow(null);
    obj246.timestamp = allowResult12.optional();
    numberResult4 = global.number();
    allowResult13 = numberResult4.allow(null);
    obj246.color = allowResult13.optional();
    obj247 = { text: null, icon_url: null, proxy_icon_url: null };
    stringResult20 = global.string();
    obj247.text = stringResult20.required();
    stringResult21 = global.string();
    allowResult14 = stringResult21.allow(null);
    obj247.icon_url = allowResult14.optional();
    stringResult22 = global.string();
    allowResult15 = stringResult22.allow(null);
    obj247.proxy_icon_url = allowResult15.optional();
    objectResult1 = global.object(obj247);
    allowResult16 = objectResult1.allow(null);
    obj246.footer = allowResult16.optional();
    size1 = { url: null, proxy_url: null, height: null, width: null };
    stringResult23 = global.string();
    allowResult17 = stringResult23.allow(null);
    size1.url = allowResult17.optional();
    stringResult24 = global.string();
    allowResult18 = stringResult24.allow(null);
    size1.proxy_url = allowResult18.optional();
    numberResult5 = global.number();
    allowResult19 = numberResult5.allow(null);
    size1.height = allowResult19.optional();
    numberResult6 = global.number();
    allowResult20 = numberResult6.allow(null);
    size1.width = allowResult20.optional();
    objectResult2 = global.object(size1);
    allowResult21 = objectResult2.allow(null);
    obj246.image = allowResult21.optional();
    size2 = { url: null, proxy_url: null, height: null, width: null };
    stringResult25 = global.string();
    allowResult22 = stringResult25.allow(null);
    size2.url = allowResult22.optional();
    stringResult26 = global.string();
    allowResult23 = stringResult26.allow(null);
    size2.proxy_url = allowResult23.optional();
    numberResult7 = global.number();
    allowResult24 = numberResult7.allow(null);
    size2.height = allowResult24.optional();
    numberResult8 = global.number();
    allowResult25 = numberResult8.allow(null);
    size2.width = allowResult25.optional();
    objectResult3 = global.object(size2);
    allowResult26 = objectResult3.allow(null);
    obj246.thumbnail = allowResult26.optional();
    size3 = { url: null, proxy_url: null, height: null, width: null };
    stringResult27 = global.string();
    allowResult27 = stringResult27.allow(null);
    size3.url = allowResult27.optional();
    stringResult28 = global.string();
    allowResult28 = stringResult28.allow(null);
    size3.proxy_url = allowResult28.optional();
    numberResult9 = global.number();
    allowResult29 = numberResult9.allow(null);
    size3.height = allowResult29.optional();
    numberResult10 = global.number();
    allowResult30 = numberResult10.allow(null);
    size3.width = allowResult30.optional();
    objectResult4 = global.object(size3);
    allowResult31 = objectResult4.allow(null);
    obj246.video = allowResult31.optional();
    obj248 = { name: null, url: null };
    stringResult29 = global.string();
    allowResult32 = stringResult29.allow(null);
    obj248.name = allowResult32.optional();
    stringResult30 = global.string();
    allowResult33 = stringResult30.allow(null);
    obj248.url = allowResult33.optional();
    objectResult5 = global.object(obj248);
    allowResult34 = objectResult5.allow(null);
    obj246.provider = allowResult34.optional();
    obj249 = { name: null, url: null, icon_url: null, proxy_icon_url: null };
    stringResult31 = global.string();
    allowResult35 = stringResult31.allow(null);
    obj249.name = allowResult35.optional();
    stringResult32 = global.string();
    allowResult36 = stringResult32.allow(null);
    obj249.url = allowResult36.optional();
    stringResult33 = global.string();
    allowResult37 = stringResult33.allow(null);
    obj249.icon_url = allowResult37.optional();
    stringResult34 = global.string();
    allowResult38 = stringResult34.allow(null);
    obj249.proxy_icon_url = allowResult38.optional();
    objectResult6 = global.object(obj249);
    allowResult39 = objectResult6.allow(null);
    obj246.author = allowResult39.optional();
    arrayResult6 = global.array();
    obj250 = { name: null, value: null, inline: null };
    stringResult35 = global.string();
    obj250.name = stringResult35.required();
    stringResult36 = global.string();
    obj250.value = stringResult36.required();
    booleanResult4 = global.boolean();
    allowResult40 = booleanResult4.allow(null);
    obj250.inline = allowResult40.optional();
    itemsResult5 = arrayResult6.items(global.object(obj250));
    allowResult41 = itemsResult5.allow(null);
    obj246.fields = allowResult41.optional();
    itemsResult6 = arrayResult5.items(global.object(obj246));
    obj.embeds = itemsResult6.required();
    arrayResult7 = global.array();
    obj251 = { type: null };
    numberResult11 = global.number();
    obj251.type = numberResult11.required();
    objectResult7 = global.object(obj251);
    itemsResult7 = arrayResult7.items(objectResult7.unknown(true));
    obj.components = itemsResult7.optional();
    arrayResult8 = global.array();
    obj252 = { count: null, me: null, emoji: null };
    numberResult12 = global.number();
    obj252.count = numberResult12.required();
    booleanResult5 = global.boolean();
    obj252.me = booleanResult5.required();
    obj253 = { id: null, name: null, animated: null };
    stringResult37 = global.string();
    allowResult42 = stringResult37.allow(null);
    obj253.id = allowResult42.required();
    stringResult38 = global.string();
    allowResult43 = stringResult38.allow(null);
    obj253.name = allowResult43.required();
    booleanResult6 = global.boolean();
    allowResult44 = booleanResult6.allow(null);
    obj253.animated = allowResult44.optional();
    objectResult8 = global.object(obj253);
    obj252.emoji = objectResult8.required();
    itemsResult8 = arrayResult8.items(global.object(obj252));
    allowResult45 = itemsResult8.allow(null);
    obj.reactions = allowResult45.optional();
    alternativesResult = global.alternatives();
    stringResult39 = global.string();
    numberResult13 = global.number();
    tryResult = alternativesResult.try(stringResult39, numberResult13, global.valid(null));
    obj.nonce = tryResult.optional();
    booleanResult7 = global.boolean();
    obj.pinned = booleanResult7.required();
    stringResult40 = global.string();
    allowResult46 = stringResult40.allow(null);
    obj.webhook_id = allowResult46.optional();
    numberResult14 = global.number();
    obj.type = numberResult14.required();
    obj254 = { type: null, party_id: null };
    numberResult15 = global.number();
    obj254.type = numberResult15.required();
    stringResult41 = global.string();
    allowResult47 = stringResult41.allow(null);
    obj254.party_id = allowResult47.optional();
    objectResult9 = global.object(obj254);
    allowResult48 = objectResult9.allow(null);
    obj.activity = allowResult48.optional();
    obj255 = { id: null, cover_image: null, description: null, icon: null, name: null };
    stringResult42 = global.string();
    obj255.id = stringResult42.required();
    stringResult43 = global.string();
    allowResult49 = stringResult43.allow(null);
    obj255.cover_image = allowResult49.optional();
    stringResult44 = global.string();
    obj255.description = stringResult44.required();
    stringResult45 = global.string();
    allowResult50 = stringResult45.allow(null);
    obj255.icon = allowResult50.optional();
    stringResult46 = global.string();
    obj255.name = stringResult46.required();
    objectResult10 = global.object(obj255);
    allowResult51 = objectResult10.allow(null);
    obj.application = allowResult51.optional();
    obj256 = { message_id: null, channel_id: null, guild_id: null };
    stringResult47 = global.string();
    allowResult52 = stringResult47.allow(null);
    obj256.message_id = allowResult52.optional();
    stringResult48 = global.string();
    allowResult53 = stringResult48.allow(null);
    obj256.channel_id = allowResult53.optional();
    stringResult49 = global.string();
    allowResult54 = stringResult49.allow(null);
    obj256.guild_id = allowResult54.optional();
    objectResult11 = global.object(obj256);
    allowResult55 = objectResult11.allow(null);
    obj.message_reference = allowResult55.optional();
    numberResult16 = global.number();
    allowResult56 = numberResult16.allow(null);
    obj.flags = allowResult56.optional();
    stringResult50 = global.string();
    obj.application_id = stringResult50.optional();
    arrayResult9 = global.array();
    obj257 = { id: null, name: null, format_type: null };
    stringResult51 = global.string();
    obj257.id = stringResult51.required();
    stringResult52 = global.string();
    obj257.name = stringResult52.required();
    numberResult17 = global.number();
    obj257.format_type = numberResult17.required();
    itemsResult9 = arrayResult9.items(global.object(obj257));
    obj.sticker_items = itemsResult9.optional();
    obj258 = { question: null, answers: null, expiry: null, allow_multiselect: null, layout_type: null, results: null };
    obj259 = { text: null, emoji: null };
    ({ object, object: object2 } = global);
    stringResult53 = global.string();
    obj259.text = stringResult53.optional();
    obj260 = { id: null, name: null, animated: null };
    stringResult54 = global.string();
    allowResult57 = stringResult54.allow(null);
    obj260.id = allowResult57.optional();
    stringResult55 = global.string();
    allowResult58 = stringResult55.allow(null);
    obj260.name = allowResult58.optional();
    booleanResult8 = global.boolean();
    allowResult59 = booleanResult8.allow(null);
    obj260.animated = allowResult59.optional();
    objectResult12 = global.object(obj260);
    obj259.emoji = objectResult12.optional();
    object2Result = object2(obj259);
    obj258.question = object2Result.required();
    arrayResult10 = global.array();
    obj261 = { answer_id: null, poll_media: null };
    numberResult18 = global.number();
    obj261.answer_id = numberResult18.required();
    obj262 = { text: null, emoji: null };
    stringResult56 = global.string();
    obj262.text = stringResult56.optional();
    obj263 = { id: null, name: null, animated: null };
    stringResult57 = global.string();
    allowResult60 = stringResult57.allow(null);
    obj263.id = allowResult60.optional();
    stringResult58 = global.string();
    allowResult61 = stringResult58.allow(null);
    obj263.name = allowResult61.optional();
    booleanResult9 = global.boolean();
    allowResult62 = booleanResult9.allow(null);
    obj263.animated = allowResult62.optional();
    objectResult13 = global.object(obj263);
    obj262.emoji = objectResult13.optional();
    objectResult14 = global.object(obj262);
    obj261.poll_media = objectResult14.required();
    itemsResult10 = arrayResult10.items(global.object(obj261));
    obj258.answers = itemsResult10.required();
    stringResult59 = global.string();
    obj258.expiry = stringResult59.required();
    booleanResult10 = global.boolean();
    obj258.allow_multiselect = booleanResult10.required();
    numberResult19 = global.number();
    obj258.layout_type = numberResult19.required();
    obj264 = { is_finalized: null, answer_counts: null };
    booleanResult11 = global.boolean();
    obj264.is_finalized = booleanResult11.required();
    arrayResult11 = global.array();
    obj265 = { id: null, count: null, me_voted: null };
    numberResult20 = global.number();
    obj265.id = numberResult20.required();
    numberResult21 = global.number();
    obj265.count = numberResult21.required();
    booleanResult12 = global.boolean();
    obj265.me_voted = booleanResult12.required();
    itemsResult11 = arrayResult11.items(global.object(obj265));
    obj264.answer_counts = itemsResult11.required();
    objectResult15 = global.object(obj264);
    obj258.results = objectResult15.optional();
    objectResult16 = object(obj258);
    obj.poll = objectResult16.optional();
    obj229 = InteractionMetadata(global);
    obj266 = { triggering_interaction_metadata: null };
    obj231 = InteractionMetadata(global);
    obj266.triggering_interaction_metadata = obj231.optional();
    keys = obj229.keys(obj266);
    obj.interaction_metadata = keys.optional();
    obj267 = { role_subscription_listing_id: null, tier_name: null, total_months_subscribed: null, is_renewal: null };
    stringResult60 = global.string();
    obj267.role_subscription_listing_id = stringResult60.required();
    stringResult61 = global.string();
    obj267.tier_name = stringResult61.required();
    numberResult22 = global.number();
    obj267.total_months_subscribed = numberResult22.required();
    booleanResult13 = global.boolean();
    obj267.is_renewal = booleanResult13.required();
    objectResult17 = global.object(obj267);
    obj.role_subscription_data = objectResult17.optional();
    booleanResult14 = global.boolean();
    obj.blocked = booleanResult14.optional();
    stringResult62 = global.string();
    allowResult63 = stringResult62.allow(null);
    obj.nick = allowResult63.optional();
    stringResult63 = global.string();
    allowResult64 = stringResult63.allow(null);
    obj.author_color = allowResult64.optional();
    objectResult18 = global.object(obj);
    return objectResult18.meta({ className: "Message" });
  }
}
class GuildMember {
  constructor(arg0) {
    obj = {
      user_id: null,
      guild_id: null,
      nick: null,
      avatar: null,
      avatar_decoration_data: null,
      banner: null,
      roles: null,
      joined_at: null,
      premium_since: null,
      communication_disabled_until: null,
      pending: null,
      flags: null,
    };
    stringResult = global.string();
    requiredResult = stringResult.required();
    obj.user_id = requiredResult.meta({ className: "UserId" });
    stringResult1 = global.string();
    requiredResult1 = stringResult1.required();
    obj.guild_id = requiredResult1.meta({ className: "GuildId" });
    stringResult2 = global.string();
    allowResult = stringResult2.allow(null);
    obj.nick = allowResult.required();
    stringResult3 = global.string();
    allowResult1 = stringResult3.allow(null);
    obj.avatar = allowResult1.required();
    obj1 = { asset: null, sku_id: null, expires_at: null };
    stringResult4 = global.string();
    obj1.asset = stringResult4.required();
    stringResult5 = global.string();
    optionalResult = stringResult5.optional();
    obj1.sku_id = optionalResult.meta({ className: "SkuId" });
    numberResult = global.number();
    obj1.expires_at = numberResult.allow(null);
    objectResult = global.object(obj1);
    descriptionResult = objectResult.description("Details about avatar decoration");
    metaResult = descriptionResult.meta({ className: "AvatarDecoration" });
    allowResult2 = metaResult.allow(null);
    obj.avatar_decoration_data = allowResult2.required();
    stringResult6 = global.string();
    allowResult3 = stringResult6.allow(null);
    obj.banner = allowResult3.required();
    arrayResult = global.array();
    stringResult7 = global.string();
    itemsResult = arrayResult.items(stringResult7.meta({ className: "GuildRoleId" }));
    obj.roles = itemsResult.required();
    stringResult8 = global.string();
    allowResult4 = stringResult8.allow(null);
    obj.joined_at = allowResult4.required();
    stringResult9 = global.string();
    allowResult5 = stringResult9.allow(null);
    obj.premium_since = allowResult5.required();
    stringResult10 = global.string();
    allowResult6 = stringResult10.allow(null);
    obj.communication_disabled_until = allowResult6.required();
    booleanResult = global.boolean();
    obj.pending = booleanResult.required();
    numberResult1 = global.number();
    obj.flags = numberResult1.required();
    objectResult1 = global.object(obj);
    return objectResult1.meta({ className: "GuildMember" });
  }
}
class Role {
  constructor(arg0) {
    obj = {
      id: null,
      name: null,
      color: null,
      colors: null,
      hoist: null,
      position: null,
      permissions: null,
      managed: null,
      mentionable: null,
      icon: null,
      unicode_emoji: null,
      tags: null,
      flags: null,
    };
    stringResult = global.string();
    requiredResult = stringResult.required();
    obj.id = requiredResult.meta({ className: "GuildRoleId" });
    stringResult1 = global.string();
    obj.name = stringResult1.required();
    numberResult = global.number();
    obj.color = numberResult.required();
    obj1 = { primary_color: null, secondary_color: null, tertiary_color: null };
    numberResult1 = global.number();
    obj1.primary_color = numberResult1.required();
    numberResult2 = global.number();
    allowResult = numberResult2.allow(null);
    optionalResult = allowResult.optional();
    obj1.secondary_color = optionalResult.required();
    numberResult3 = global.number();
    allowResult1 = numberResult3.allow(null);
    optionalResult1 = allowResult1.optional();
    obj1.tertiary_color = optionalResult1.required();
    objectResult = global.object(obj1);
    obj.colors = objectResult.required();
    booleanResult = global.boolean();
    obj.hoist = booleanResult.required();
    numberResult4 = global.number();
    obj.position = numberResult4.required();
    stringResult2 = global.string();
    regexResult = stringResult2.regex(/^\d+$/);
    metaResult = regexResult.meta({ format: "bigint", className: "SerializedBigFlag" });
    obj.permissions = metaResult.required();
    booleanResult1 = global.boolean();
    obj.managed = booleanResult1.required();
    booleanResult2 = global.boolean();
    obj.mentionable = booleanResult2.required();
    stringResult3 = global.string();
    allowResult2 = stringResult3.allow(null);
    obj.icon = allowResult2.required();
    stringResult4 = global.string();
    allowResult3 = stringResult4.allow(null);
    obj.unicode_emoji = allowResult3.required();
    obj36 = {
      bot_id: null,
      integration_id: null,
      premium_subscriber: null,
      subscription_listing_id: null,
      available_for_purchase: null,
      guild_connections: null,
    };
    stringResult5 = global.string();
    obj36.bot_id = stringResult5.optional();
    stringResult6 = global.string();
    obj36.integration_id = stringResult6.optional();
    validResult = global.valid(null);
    obj36.premium_subscriber = validResult.optional();
    stringResult7 = global.string();
    obj36.subscription_listing_id = stringResult7.optional();
    validResult1 = global.valid(null);
    obj36.available_for_purchase = validResult1.optional();
    validResult2 = global.valid(null);
    obj36.guild_connections = validResult2.optional();
    objectResult1 = global.object(obj36);
    obj.tags = objectResult1.required();
    numberResult5 = global.number();
    obj.flags = numberResult5.required();
    objectResult2 = global.object(obj);
    return objectResult2.meta({ className: "Role" });
  }
}
class Sku {
  constructor(arg0) {
    obj = { id: null, name: null, type: null, price: null, application_id: null, flags: null, release_date: null };
    stringResult = global.string();
    obj.id = stringResult.required();
    stringResult1 = global.string();
    obj.name = stringResult1.required();
    obj4 = joiEnum(global, "SKUTypes");
    obj.type = obj4.required();
    obj1 = { amount: null, currency: null };
    numberResult = global.number();
    obj1.amount = numberResult.required();
    stringResult2 = global.string();
    obj1.currency = stringResult2.required();
    objectResult = global.object(obj1);
    obj.price = objectResult.required();
    stringResult3 = global.string();
    obj.application_id = stringResult3.required();
    numberResult1 = global.number();
    obj.flags = numberResult1.required();
    stringResult4 = global.string();
    allowResult = stringResult4.allow(null);
    obj.release_date = allowResult.required();
    objectResult1 = global.object(obj);
    return objectResult1.meta({ className: "Sku" });
  }
}
function RPCEntitlement(string) {
  const obj = {
    id: string.string().required(),
    sku_id: null,
    application_id: null,
    user_id: null,
    gift_code_flags: null,
    type: null,
    gifter_user_id: null,
    branches: null,
    starts_at: null,
    ends_at: null,
    parent_id: null,
    consumed: null,
    deleted: null,
    gift_code_batch_id: null,
  };
  const stringResult = string.string();
  obj.sku_id = string.string().required();
  const stringResult1 = string.string();
  obj.application_id = string.string().required();
  const stringResult2 = string.string();
  obj.user_id = string.string().required();
  const stringResult3 = string.string();
  obj.gift_code_flags = string.number().required();
  const numberResult = string.number();
  obj.type = joiEnum(string, "EntitlementTypes").required();
  const obj7 = joiEnum(string, "EntitlementTypes");
  const stringResult4 = string.string();
  obj.gifter_user_id = string.string().allow(null).optional();
  const allowResult = string.string().allow(null);
  const arrayResult = string.array();
  const itemsResult = string.array().items(string.string());
  obj.branches = string.array().items(string.string()).allow(null).optional();
  const allowResult1 = string.array().items(string.string()).allow(null);
  const stringResult5 = string.string();
  obj.starts_at = string.string().allow(null).optional();
  const allowResult2 = string.string().allow(null);
  const stringResult6 = string.string();
  obj.ends_at = string.string().allow(null).optional();
  const allowResult3 = string.string().allow(null);
  const stringResult7 = string.string();
  obj.parent_id = string.string().allow(null).optional();
  const allowResult4 = string.string().allow(null);
  const booleanResult = string.boolean();
  obj.consumed = string.boolean().allow(null).optional();
  const allowResult5 = string.boolean().allow(null);
  const booleanResult1 = string.boolean();
  obj.deleted = string.boolean().allow(null).optional();
  const allowResult6 = string.boolean().allow(null);
  const stringResult8 = string.string();
  obj.gift_code_batch_id = string.string().allow(null).optional();
  return string.object(obj);
}
function VoiceCapabilities(boolean) {
  const obj = {
    available: boolean.boolean().required(),
    connected: null,
    participant_updates: null,
    binary_speaking: null,
    spatial: null,
  };
  const booleanResult = boolean.boolean();
  obj.connected = boolean.boolean().required();
  const booleanResult1 = boolean.boolean();
  obj.participant_updates = boolean.boolean().required();
  const booleanResult2 = boolean.boolean();
  obj.binary_speaking = boolean.boolean().required();
  const obj2 = {
    available: null,
    source_positioning: null,
    source_gain: null,
    source_spatial_blend: null,
    listener_pose: null,
    room_size: null,
    reflections: null,
    acoustics: null,
    max_sources: null,
    max_updates_per_second: null,
  };
  const booleanResult3 = boolean.boolean();
  obj2.available = boolean.boolean().required();
  const booleanResult4 = boolean.boolean();
  obj2.source_positioning = boolean.boolean().required();
  const booleanResult5 = boolean.boolean();
  obj2.source_gain = boolean.boolean().required();
  const booleanResult6 = boolean.boolean();
  obj2.source_spatial_blend = boolean.boolean().required();
  const booleanResult7 = boolean.boolean();
  obj2.listener_pose = boolean.boolean().required();
  const booleanResult8 = boolean.boolean();
  obj2.room_size = boolean.boolean().required();
  const booleanResult9 = boolean.boolean();
  obj2.reflections = boolean.boolean().required();
  const booleanResult10 = boolean.boolean();
  obj2.acoustics = boolean.boolean().required();
  const booleanResult11 = boolean.boolean();
  const numberResult = boolean.number();
  obj2.max_sources = boolean.number().integer().required();
  const integerResult = boolean.number().integer();
  const numberResult1 = boolean.number();
  obj2.max_updates_per_second = boolean.number().integer().required();
  const integerResult1 = boolean.number().integer();
  obj.spatial = boolean.object(obj2).required();
  return boolean.object(obj);
}
function Activity(string) {
  const obj = {
    session_id: string.string().optional(),
    type: null,
    name: null,
    url: null,
    application_id: null,
    status_display_type: null,
    state: null,
    state_url: null,
    details: null,
    details_url: null,
    emoji: null,
    assets: null,
    timestamps: null,
    party: null,
    secrets: null,
    sync_id: null,
    created_at: null,
    instance: null,
    flags: null,
    metadata: null,
    platform: null,
    supported_platforms: null,
    buttons: null,
  };
  const stringResult = string.string();
  obj.type = string.number().optional();
  const numberResult = string.number();
  obj.name = string.string().required();
  const stringResult1 = string.string();
  const stringResult2 = string.string();
  obj.url = string.string().allow(null).optional();
  const allowResult = string.string().allow(null);
  obj.application_id = string.string().optional();
  const stringResult3 = string.string();
  obj.status_display_type = string.number().optional();
  const numberResult1 = string.number();
  obj.state = string.string().optional();
  const stringResult4 = string.string();
  obj.state_url = string.string().optional();
  const stringResult5 = string.string();
  obj.details = string.string().optional();
  const stringResult6 = string.string();
  obj.details_url = string.string().optional();
  const obj2 = { name: null, id: null, animated: null };
  const stringResult7 = string.string();
  obj2.name = string.string().required();
  const stringResult8 = string.string();
  const stringResult9 = string.string();
  obj2.id = string.string().allow(null).optional();
  const allowResult1 = string.string().allow(null);
  const boolResult = string.bool();
  obj2.animated = string.bool().optional().allow(null);
  const optionalResult = string.bool().optional();
  const objectResult = string.object(obj2);
  obj.emoji = string.object(obj2).allow(null).optional();
  const obj3 = {
    large_image: null,
    large_text: null,
    large_url: null,
    small_image: null,
    small_text: null,
    small_url: null,
  };
  const allowResult2 = string.object(obj2).allow(null);
  obj3.large_image = string.string().optional();
  const stringResult10 = string.string();
  obj3.large_text = string.string().optional();
  const stringResult11 = string.string();
  obj3.large_url = string.string().optional();
  const stringResult12 = string.string();
  obj3.small_image = string.string().optional();
  const stringResult13 = string.string();
  obj3.small_text = string.string().optional();
  const stringResult14 = string.string();
  obj3.small_url = string.string().optional();
  const stringResult15 = string.string();
  obj.assets = string.object(obj3).optional();
  const obj4 = { start: null, end: null };
  const objectResult6 = string.object(obj3);
  obj4.start = string.number().optional();
  const numberResult2 = string.number();
  obj4.end = string.number().optional();
  const numberResult3 = string.number();
  obj.timestamps = string.object(obj4).optional();
  const obj5 = { id: null, size: null, privacy: null };
  const objectResult7 = string.object(obj4);
  obj5.id = string.string().optional();
  const stringResult16 = string.string();
  const arrayResult = string.array();
  const itemsResult = string.array().items(string.number());
  obj5.size = string.array().items(string.number()).length(2).optional();
  const lengthResult = string.array().items(string.number()).length(2);
  obj5.privacy = string.number().optional();
  const numberResult4 = string.number();
  obj.party = string.object(obj5).optional();
  const obj6 = { match: null, join: null };
  const objectResult8 = string.object(obj5);
  obj6.match = string.string().optional();
  const stringResult17 = string.string();
  obj6.join = string.string().optional();
  const stringResult18 = string.string();
  obj.secrets = string.object(obj6).optional();
  const objectResult9 = string.object(obj6);
  obj.sync_id = string.string().optional();
  const stringResult19 = string.string();
  obj.created_at = string.number().optional();
  const numberResult5 = string.number();
  obj.instance = string.bool().optional();
  const boolResult1 = string.bool();
  obj.flags = string.number().optional();
  const obj7 = { button_urls: null };
  const numberResult6 = string.number();
  obj7.button_urls = string.array().items(string.string());
  const arrayResult4 = string.array();
  obj.metadata = string.object(obj7).optional();
  const objectResult10 = string.object(obj7);
  obj.platform = string.string().optional();
  const stringResult20 = string.string();
  const arrayResult5 = string.array();
  obj.supported_platforms = string.array().items(string.string()).optional();
  const itemsResult1 = string.array().items(string.string());
  const arrayResult6 = string.array();
  obj.buttons = string.array().items(string.string()).optional();
  return string.object(obj);
}
class User {
  constructor(arg0) {
    obj = {
      id: null,
      username: null,
      global_name: null,
      discriminator: null,
      avatar: null,
      flags: null,
      public_flags: null,
      bot: null,
      avatar_decoration_data: null,
    };
    stringResult = global.string();
    requiredResult = stringResult.required();
    descriptionResult = requiredResult.description("User ID");
    obj.id = descriptionResult.meta({ className: "UserId" });
    stringResult1 = global.string();
    obj.username = stringResult1.required();
    stringResult2 = global.string();
    allowResult = stringResult2.allow(null);
    obj.global_name = allowResult.description("Global Discord name. Not unique.");
    stringResult3 = global.string();
    requiredResult1 = stringResult3.required();
    obj.discriminator = requiredResult1.description("Global name discriminator. Will be 0 if a unique username");
    stringResult4 = global.string();
    allowResult1 = stringResult4.allow(null);
    obj.avatar = allowResult1.description("User Avatar ID");
    numberResult = global.number();
    requiredResult2 = numberResult.required();
    obj.flags = requiredResult2.description("Public user flags. Deprecated: use public_flags.");
    numberResult1 = global.number();
    obj.public_flags = numberResult1.description("Public user flags");
    boolResult = global.bool();
    requiredResult3 = boolResult.required();
    obj.bot = requiredResult3.description("If a bot user.");
    obj1 = { asset: null, sku_id: null, expires_at: null };
    stringResult5 = global.string();
    obj1.asset = stringResult5.required();
    stringResult6 = global.string();
    optionalResult = stringResult6.optional();
    obj1.sku_id = optionalResult.meta({ className: "SkuId" });
    numberResult2 = global.number();
    obj1.expires_at = numberResult2.allow(null);
    objectResult = global.object(obj1);
    descriptionResult1 = objectResult.description("Details about avatar decoration");
    metaResult = descriptionResult1.meta({ className: "AvatarDecoration" });
    obj.avatar_decoration_data = metaResult.allow(null);
    objectResult1 = global.object(obj);
    descriptionResult2 = objectResult1.description("Discord User");
    return descriptionResult2.meta({ className: "User" });
  }
}
function ContextMenuItem(string, arg1) {
  const obj = {
    id: null,
    type: null,
    label: null,
    subtext: null,
    icon: null,
    color: null,
    disabled: null,
    checked: null,
    group: null,
  };
  const stringResult = string.string();
  obj.id = string.string().max(64).required();
  const maxResult = string.string().max(64);
  obj.type = string.string().valid("item", "checkbox", "radio");
  const stringResult1 = string.string();
  const stringResult2 = string.string();
  obj.label = string.string().max(100).required();
  const maxResult1 = string.string().max(100);
  obj.subtext = string.string().max(100);
  const stringResult3 = string.string();
  const items = [...contextMenuIcons.CONTEXT_MENU_ICON_NAMES];
  const stringResult4 = string.string();
  obj.icon = string.string().valid.apply(items).meta({ className: "ContextMenuIconName" });
  const applyResult = string.string().valid.apply(items);
  obj.color = string.string().valid("default", "brand", "danger", "premium", "success");
  obj.disabled = string.boolean();
  obj.checked = string.boolean();
  const stringResult5 = string.string();
  obj.group = string.string().max(64);
  const stringResult6 = string.string();
  const obj2 = { type: null };
  const alternativesResult = string.alternatives();
  const stringResult7 = string.string();
  obj2.type = string.string().valid("separator").required();
  let tmp3 = obj;
  const validResult = string.string().valid("separator");
  if (arg1) {
    const obj3 = {};
    const merged = Object.assign(obj);
    const arrayResult = string.array();
    obj3.items = string.array().max(30).items(ContextMenuItem(string, false));
    tmp3 = obj3;
    const maxResult2 = string.array().max(30);
  }
  return alternativesResult.try(string.object(obj2), string.object(tmp3));
}
class EmbeddedSurface {
  constructor(arg0) {
    alternativesResult = global.alternatives();
    obj1 = { type: null, channel_id: null, guild_id: null };
    numberResult = global.number();
    validResult = numberResult.valid(closure_0(closure_1[4]).EmbeddedSurfaceType.MAIN);
    requiredResult = validResult.required();
    obj1.type = requiredResult.meta({ className: "EmbeddedSurfaceType.MAIN" });
    stringResult = global.string();
    optionalResult = stringResult.optional();
    obj1.channel_id = optionalResult.meta({ className: "ChannelId" });
    stringResult1 = global.string();
    optionalResult1 = stringResult1.optional();
    obj1.guild_id = optionalResult1.meta({ className: "GuildId" });
    objectResult = global.object(obj1);
    obj39 = { type: null, channel_id: null, guild_id: null };
    numberResult1 = global.number();
    validResult1 = numberResult1.valid(closure_0(closure_1[4]).EmbeddedSurfaceType.APP_CHANNEL);
    requiredResult1 = validResult1.required();
    obj39.type = requiredResult1.meta({ className: "EmbeddedSurfaceType.APP_CHANNEL" });
    stringResult2 = global.string();
    requiredResult2 = stringResult2.required();
    obj39.channel_id = requiredResult2.meta({ className: "ChannelId" });
    stringResult3 = global.string();
    optionalResult2 = stringResult3.optional();
    obj39.guild_id = optionalResult2.meta({ className: "GuildId" });
    obj40 = { type: null, channel_id: null, guild_id: null };
    objectResult1 = global.object(obj39);
    numberResult2 = global.number();
    validResult2 = numberResult2.valid(closure_0(closure_1[4]).EmbeddedSurfaceType.VOICE_CHANNEL);
    requiredResult3 = validResult2.required();
    obj40.type = requiredResult3.meta({ className: "EmbeddedSurfaceType.VOICE_CHANNEL" });
    stringResult4 = global.string();
    requiredResult4 = stringResult4.required();
    obj40.channel_id = requiredResult4.meta({ className: "ChannelId" });
    stringResult5 = global.string();
    optionalResult3 = stringResult5.optional();
    obj40.guild_id = optionalResult3.meta({ className: "GuildId" });
    obj41 = { type: null, channel_id: null, guild_id: null };
    objectResult2 = global.object(obj40);
    numberResult3 = global.number();
    validResult3 = numberResult3.valid(closure_0(closure_1[4]).EmbeddedSurfaceType.INTERACTION_MODAL);
    requiredResult5 = validResult3.required();
    obj41.type = requiredResult5.meta({ className: "EmbeddedSurfaceType.INTERACTION_MODAL" });
    stringResult6 = global.string();
    requiredResult6 = stringResult6.required();
    obj41.channel_id = requiredResult6.meta({ className: "ChannelId" });
    stringResult7 = global.string();
    optionalResult4 = stringResult7.optional();
    obj41.guild_id = optionalResult4.meta({ className: "GuildId" });
    obj42 = { type: null };
    objectResult3 = global.object(obj41);
    numberResult4 = global.number();
    validResult4 = numberResult4.valid(closure_0(closure_1[4]).EmbeddedSurfaceType.OVERLAY);
    requiredResult7 = validResult4.required();
    obj42.type = requiredResult7.meta({ className: "EmbeddedSurfaceType.OVERLAY" });
    tryResult = alternativesResult.try(objectResult, objectResult1, objectResult2, objectResult3, global.object(obj42));
    return tryResult.meta({ className: "EmbeddedSurface" });
  }
}
({
  ActivityPartyPrivacy: c2,
  ActivityTypes: c3,
  ActivityGamePlatforms,
  EntitlementTypes,
  InviteTargetTypes,
} = Constants);
const RPCEnums = {
  ActivityGamePlatforms: { values: ActivityGamePlatforms, from: "@discordapp/common/Constants" },
  ActivityPlatform: {
    values: ActivityPlatform.ActivityPlatform,
    from: "@discordapp/common/constants/ActivityPlatform",
  },
  ChannelTypes: null,
  EmbeddedSurfaceType: null,
  EntitlementTypes: null,
  InviteTargetTypes: null,
  OAuth2Scopes: null,
  OrientationLockState: null,
  SKUTypes: null,
};
let obj2 = { values: ActivityPlatform.ActivityPlatform, from: "@discordapp/common/constants/ActivityPlatform" };
RPCEnums.ChannelTypes = { values: ChannelTypes.ChannelTypes, from: "@discordapp/common/shared-constants/ChannelTypes" };
let obj3 = { values: ChannelTypes.ChannelTypes, from: "@discordapp/common/shared-constants/ChannelTypes" };
RPCEnums.EmbeddedSurfaceType = {
  values: EmbeddedSurfaceType.EmbeddedSurfaceType,
  from: "@discordapp/common/shared-constants/EmbeddedSurfaceType",
};
RPCEnums.EntitlementTypes = { values: EntitlementTypes, from: "@discordapp/common/Constants" };
RPCEnums.InviteTargetTypes = { values: InviteTargetTypes, from: "@discordapp/common/Constants" };
let obj4 = {
  values: EmbeddedSurfaceType.EmbeddedSurfaceType,
  from: "@discordapp/common/shared-constants/EmbeddedSurfaceType",
};
RPCEnums.OAuth2Scopes = { values: OAuth2Scopes.OAuth2Scopes, from: "@discordapp/common/shared-constants/OAuth2Scopes" };
RPCEnums.OrientationLockState = {
  values: Constants2.OrientationLockState,
  from: "@discordapp/common/activities/Constants",
};
let obj5 = { values: OAuth2Scopes.OAuth2Scopes, from: "@discordapp/common/shared-constants/OAuth2Scopes" };
RPCEnums.SKUTypes = { values: SKUTypes.SKUTypes, from: "@discordapp/common/shared-constants/SKUTypes" };
let obj7 = {
  request(string) {
    const obj = { session_id: string.string().required() };
    return obj;
  },
  response(boolean) {
    const obj = { success: boolean.boolean().required() };
    return obj;
  },
};
let obj8 = {
  request(string) {
    const obj = { session_id: string.string().required(), fit: null };
    const stringResult = string.string();
    const stringResult1 = string.string();
    obj.fit = string.string().valid("contain", "cover").required();
    return obj;
  },
  response(boolean) {
    const obj = { success: boolean.boolean().required() };
    return obj;
  },
};
let obj9 = {
  request(string) {
    const obj = { owner_user_id: string.string().required(), transport_nonce: null, fit: null };
    const stringResult = string.string();
    const stringResult1 = string.string();
    obj.transport_nonce = string.string().max(128).required();
    const maxResult = string.string().max(128);
    const stringResult2 = string.string();
    obj.fit = string.string().valid("contain", "cover").optional();
    return obj;
  },
  response(string) {
    const obj = {
      session_id: string.string().required(),
      owner_user_id: null,
      channel_id: null,
      transport: null,
      viewer_url: null,
    };
    const stringResult = string.string();
    obj.owner_user_id = string.string().required();
    const stringResult1 = string.string();
    obj.channel_id = string.string().required();
    const stringResult2 = string.string();
    const stringResult3 = string.string();
    obj.transport = string.string().valid("iframe").required();
    const validResult = string.string().valid("iframe");
    const stringResult4 = string.string();
    obj.viewer_url = string.string().max(1024).required();
    return obj;
  },
};
let obj10 = {
  embeddedAppSDK: true,
  request: "Array",
  response(string) {
    const obj = { image_url: string.string().required() };
    return obj;
  },
};
let obj11 = {
  embeddedAppSDK: true,
  response: "Array",
  request(string) {
    const obj = { mediaUrl: null };
    const stringResult = string.string();
    obj.mediaUrl = string.string().required().max(1024);
    return obj;
  },
};
let obj13 = {
  embeddedAppSDK: true,
  request: "Array",
  response(array) {
    const obj = { participants: null };
    const arrayResult = array.array();
    const obj2 = { nickname: null };
    const obj3 = User(array);
    obj2.nickname = array.string().description("Server nickname. Not unique.");
    const keys = obj3.keys(obj2);
    const stringResult = array.string();
    const metaResult = keys.meta({ className: "ActivityParticipant" });
    obj.participants = arrayResult.items(keys.meta({ className: "ActivityParticipant" }).required()).required();
    return obj;
  },
};
let obj15 = {
  request: "Array",
  response(boolean) {
    return VoiceCapabilities(boolean);
  },
};
let obj17 = {
  request: "Array",
  response(string) {
    const obj = { session_id: string.string().required(), channel_id: null, capabilities: null, participants: null };
    const stringResult = string.string();
    obj.channel_id = string.string().required();
    const stringResult1 = string.string();
    obj.capabilities = VoiceCapabilities(string).required();
    const obj4 = VoiceCapabilities(string);
    const obj2 = {
      user_id: null,
      username: null,
      global_name: null,
      avatar: null,
      mute: null,
      deaf: null,
      self_mute: null,
      self_deaf: null,
    };
    const arrayResult = string.array();
    obj2.user_id = string.string().required();
    const stringResult2 = string.string();
    obj2.username = string.string().required();
    const stringResult3 = string.string();
    const stringResult4 = string.string();
    obj2.global_name = string.string().allow(null).required();
    const allowResult = string.string().allow(null);
    const stringResult5 = string.string();
    obj2.avatar = string.string().allow(null).required();
    const allowResult1 = string.string().allow(null);
    obj2.mute = string.boolean().required();
    const booleanResult = string.boolean();
    obj2.deaf = string.boolean().required();
    const booleanResult1 = string.boolean();
    obj2.self_mute = string.boolean().required();
    const booleanResult2 = string.boolean();
    obj2.self_deaf = string.boolean().required();
    const booleanResult3 = string.boolean();
    const objectResult = string.object(obj2);
    obj.participants = arrayResult.items(string.object(obj2).required()).required();
    return obj;
  },
};
let obj20 = {
  request: "Array",
  response(boolean) {
    const obj = { available: boolean.boolean().required(), transport: null, requires_existing_watch: null };
    const booleanResult = boolean.boolean();
    const stringResult = boolean.string();
    obj.transport = boolean.string().valid("iframe").required();
    const validResult = boolean.string().valid("iframe");
    obj.requires_existing_watch = boolean.boolean().required();
    return obj;
  },
};
let obj21 = {
  request: "Array",
  response(boolean) {
    const obj = { available: boolean.boolean().required(), transport: null };
    const booleanResult = boolean.boolean();
    const stringResult = boolean.string();
    obj.transport = boolean.string().valid("iframe").required();
    return obj;
  },
};
const obj31 = {
  request: "Array",
  response(boolean) {
    const obj = { hidden: boolean.boolean().required() };
    return obj;
  },
};
const obj34 = {
  request: "Array",
  response(array) {
    const obj = { permissions: null };
    const arrayResult = array.array();
    const obj2 = { permission: null, state: null };
    const requiredResult = array.array().required();
    const stringResult = array.string();
    obj2.permission = array.string().valid("screen_capture", "connect_user_to_voice").required();
    const validResult = array.string().valid("screen_capture", "connect_user_to_voice");
    const stringResult1 = array.string();
    obj2.state = array.string().valid("granted", "denied", "prompt", "unsupported").required();
    obj.permissions = requiredResult.items(array.object(obj2));
    return obj;
  },
};
const obj37 = {
  embeddedAppSDK: true,
  request: "Array",
  response(array) {
    const obj = { relationships: null };
    const arrayResult = array.array();
    const obj2 = { type: null, user: null, presence: null };
    const requiredResult = array.array().required();
    obj2.type = array.number().required();
    const numberResult = array.number();
    obj2.user = User(array).required();
    const obj3 = { status: null, activity: null };
    const obj6 = User(array);
    obj3.status = array.string().required();
    const stringResult = array.string();
    obj3.activity = Activity(array).allow(null);
    obj2.presence = array.object(obj3);
    obj.relationships = requiredResult.items(array.object(obj2));
    return obj;
  },
};
const obj39 = {
  embeddedAppSDK: true,
  request: "Array",
  response(string) {
    const obj = { surface: EmbeddedSurface(string).required(), launch: null, platform: null };
    const obj3 = { custom_id: null, referrer_id: null, interaction_id: null };
    const obj2 = EmbeddedSurface(string);
    obj3.custom_id = string.string().optional();
    const stringResult = string.string();
    obj3.referrer_id = string.string().optional();
    const stringResult1 = string.string();
    obj3.interaction_id = string.string().optional();
    const stringResult2 = string.string();
    obj.launch = string.object(obj3).required();
    const objectResult = string.object(obj3);
    obj.platform = joiEnum(string, "ActivityPlatform").required();
    return obj;
  },
};
const obj41 = {
  embeddedAppSDK: true,
  request: "Array",
  response(arg0) {
    return User(arg0).allow(null);
  },
};
const obj44 = {
  embeddedAppSDK: true,
  request: "Array",
  response(string) {
    const obj = { quest_id: string.string().required(), enrolled_at: null, completed_at: null, external_cta_url: null };
    const stringResult = string.string();
    const stringResult1 = string.string();
    obj.enrolled_at = string.string().allow(null).optional();
    const allowResult = string.string().allow(null);
    const stringResult2 = string.string();
    obj.completed_at = string.string().allow(null).optional();
    const allowResult1 = string.string().allow(null);
    obj.external_cta_url = string.string().required();
    return obj;
  },
};
const obj45 = {
  embeddedAppSDK: true,
  request: "Array",
  response(string) {
    const obj = { ticket: string.string().required() };
    return obj;
  },
};
const obj50 = {
  embeddedAppSDK: true,
  request: "Array",
  response(boolean) {
    const obj = { enabled: boolean.boolean().required() };
    return obj;
  },
};
const obj51 = {
  embeddedAppSDK: true,
  request: "Array",
  response(boolean) {
    const obj = { iosKeyboardResizesView: boolean.boolean().optional() };
    return obj;
  },
};
const obj52 = {
  embeddedAppSDK: true,
  request: "Array",
  response(string) {
    const obj = { locale: string.string().required() };
    return obj;
  },
};
const obj56 = {
  embeddedAppSDK: true,
  request: "Array",
  response(string) {
    const obj = { permissions: null };
    const stringResult = string.string();
    const regexResult = string.string().regex(/^\d+$/);
    obj.permissions = string
      .string()
      .regex(/^\d+$/)
      .meta({ format: "bigint", className: "SerializedBigFlag" })
      .required();
    return obj;
  },
};
const obj57 = {
  embeddedAppSDK: true,
  request: "Array",
  response(array) {
    const obj = { skus: null };
    const arrayResult = array.array();
    obj.skus = array.array().items(Sku(array)).required();
    return obj;
  },
};
const obj58 = {
  embeddedAppSDK: true,
  request: "Array",
  response(array) {
    const obj = { entitlements: null };
    const arrayResult = array.array();
    obj.entitlements = array.array().items(RPCEntitlement(array)).required();
    return obj;
  },
};
const obj62 = {
  request: "Array",
  response(arg0) {
    return Channel(arg0).allow(null);
  },
};
const obj67 = {
  request: "Array",
  response(array) {
    const obj = { guilds: null };
    const obj2 = { id: null, name: null, icon_url: null };
    const arrayResult = array.array();
    const stringResult = array.string();
    obj2.id = array.string().required().meta({ className: "GuildId" });
    const requiredResult = array.string().required();
    obj2.name = array.string().required();
    const stringResult1 = array.string();
    const stringResult2 = array.string();
    obj2.icon_url = array.string().allow(null).required();
    const allowResult = array.string().allow(null);
    obj.guilds = arrayResult.items(array.object(obj2)).required();
    return obj;
  },
};
let items = [
  EmbeddedSurface,
  function AvatarDecoration(string) {
    const obj = { asset: string.string().required(), sku_id: null, expires_at: null };
    const stringResult = string.string();
    const stringResult1 = string.string();
    obj.sku_id = string.string().optional().meta({ className: "SkuId" });
    const optionalResult = string.string().optional();
    obj.expires_at = string.number().allow(null);
    const numberResult = string.number();
    const objectResult = string.object(obj);
    return string.object(obj).description("Details about avatar decoration").meta({ className: "AvatarDecoration" });
  },
  User,
  function ActivityParticipant(string) {
    const obj2 = { nickname: null };
    const obj = User(string);
    obj2.nickname = string.string().description("Server nickname. Not unique.");
    const keys = obj.keys(obj2);
    return keys.meta({ className: "ActivityParticipant" });
  },
  Message,
  GuildMember,
  Role,
  Sku,
];
const result = size.fileFinishedImporting("../discord_common/js/packages/rpc-schema/definitions.tsx");

export { RPCEnums };
export const RPCCommandSchemas = {
  [helpers.RPCCommand.INITIATE_IMAGE_UPLOAD]: obj10,
  [helpers.RPCCommand.OPEN_SHARE_MOMENT_DIALOG]: obj11,
  [helpers.RPCCommand.AUTHENTICATE]: {
    embeddedAppSDK: true,
    request(string) {
      const obj = { access_token: null };
      const stringResult = string.string();
      obj.access_token = string.string().allow(null).optional();
      return obj;
    },
    response(string) {
      const obj = {
        access_token: string.string().required(),
        user: null,
        scopes: null,
        expires: null,
        application: null,
      };
      const obj2 = {
        username: null,
        discriminator: null,
        id: null,
        avatar: null,
        public_flags: null,
        global_name: null,
      };
      const stringResult = string.string();
      obj2.username = string.string().required();
      const stringResult1 = string.string();
      obj2.discriminator = string.string().required();
      const stringResult2 = string.string();
      obj2.id = string.string().required();
      const stringResult3 = string.string();
      obj2.avatar = string.string().allow(null);
      const stringResult4 = string.string();
      obj2.public_flags = string.number().required();
      const numberResult = string.number();
      obj2.global_name = string.string().allow(null);
      const stringResult5 = string.string();
      obj.user = string.object(obj2).required();
      const objectResult = string.object(obj2);
      const arrayResult = string.array();
      obj.scopes = string.array().items(joiEnum(string, "OAuth2Scopes")).required();
      const itemsResult = string.array().items(joiEnum(string, "OAuth2Scopes"));
      obj.expires = string.string().required();
      const obj3 = { description: null, icon: null, id: null, rpc_origins: null, name: null };
      const stringResult6 = string.string();
      obj3.description = string.string().required();
      const stringResult7 = string.string();
      obj3.icon = string.string().allow(null);
      const stringResult8 = string.string();
      obj3.id = string.string().required();
      const stringResult9 = string.string();
      const arrayResult2 = string.array();
      obj3.rpc_origins = string.array().items(string.string()).optional();
      const itemsResult1 = string.array().items(string.string());
      obj3.name = string.string().required();
      const stringResult10 = string.string();
      obj.application = string.object(obj3).required();
      return obj;
    },
  },
  [helpers.RPCCommand.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: obj13,
  [helpers.RPCCommand.RELAUNCH_FRAME]: {
    request(string) {
      const obj = { build: null };
      const stringResult = string.string();
      obj.build = string.string().max(64).required();
      return obj;
    },
    response(boolean) {
      const obj = { relaunched: boolean.boolean().required() };
      return obj;
    },
  },
  [helpers.RPCCommand.GET_VOICE_CAPABILITIES]: obj15,
  [helpers.RPCCommand.GET_VOICE_SESSION_PARTICIPANTS]: {
    request(string) {
      const obj = { session_id: string.string().required() };
      return obj;
    },
    response(array) {
      const obj = { participants: null };
      const obj2 = {
        user_id: null,
        username: null,
        global_name: null,
        avatar: null,
        mute: null,
        deaf: null,
        self_mute: null,
        self_deaf: null,
      };
      const arrayResult = array.array();
      obj2.user_id = array.string().required();
      const stringResult = array.string();
      obj2.username = array.string().required();
      const stringResult1 = array.string();
      const stringResult2 = array.string();
      obj2.global_name = array.string().allow(null).required();
      const allowResult = array.string().allow(null);
      const stringResult3 = array.string();
      obj2.avatar = array.string().allow(null).required();
      const allowResult1 = array.string().allow(null);
      obj2.mute = array.boolean().required();
      const booleanResult = array.boolean();
      obj2.deaf = array.boolean().required();
      const booleanResult1 = array.boolean();
      obj2.self_mute = array.boolean().required();
      const booleanResult2 = array.boolean();
      obj2.self_deaf = array.boolean().required();
      const booleanResult3 = array.boolean();
      const objectResult = array.object(obj2);
      obj.participants = arrayResult.items(array.object(obj2).required()).required();
      return obj;
    },
  },
  [helpers.RPCCommand.START_VOICE_SESSION]: obj17,
  [helpers.RPCCommand.UPDATE_VOICE_SPATIAL]: {
    request(string) {
      const obj = { session_id: string.string().required(), listener: null, sources: null };
      const obj2 = { position: null, forward: null };
      const point = { x: null, y: null, z: null };
      ({ object, object: object2 } = string);
      const stringResult = string.string();
      const numberResult = string.number();
      const minResult = string.number().min(-100000);
      point.x = string.number().min(-100000).max(100000).required();
      const maxResult = string.number().min(-100000).max(100000);
      const numberResult1 = string.number();
      const minResult1 = string.number().min(-100000);
      point.y = string.number().min(-100000).max(100000).required();
      const maxResult1 = string.number().min(-100000).max(100000);
      const numberResult2 = string.number();
      const minResult2 = string.number().min(-100000);
      point.z = string.number().min(-100000).max(100000).required();
      const maxResult2 = string.number().min(-100000).max(100000);
      obj2.position = object2(point).required();
      const point1 = { x: null, y: null, z: null };
      const object2Result = object2(point);
      const numberResult3 = string.number();
      const minResult3 = string.number().min(-100000);
      point1.x = string.number().min(-100000).max(100000).required();
      const maxResult3 = string.number().min(-100000).max(100000);
      const numberResult4 = string.number();
      const minResult4 = string.number().min(-100000);
      point1.y = string.number().min(-100000).max(100000).required();
      const maxResult4 = string.number().min(-100000).max(100000);
      const numberResult5 = string.number();
      const minResult5 = string.number().min(-100000);
      point1.z = string.number().min(-100000).max(100000).required();
      const maxResult5 = string.number().min(-100000).max(100000);
      obj2.forward = string.object(point1).required();
      const objectResult = string.object(point1);
      obj.listener = object(obj2).required();
      const objectResult4 = object(obj2);
      const arrayResult = string.array();
      const obj3 = { user_id: null, position: null, gain: null };
      const maxResult6 = string.array().max(50);
      obj3.user_id = string.string().required();
      const point2 = { x: null, y: null, z: null };
      const stringResult1 = string.string();
      const numberResult6 = string.number();
      const minResult6 = string.number().min(-100000);
      point2.x = string.number().min(-100000).max(100000).required();
      const maxResult7 = string.number().min(-100000).max(100000);
      const numberResult7 = string.number();
      const minResult7 = string.number().min(-100000);
      point2.y = string.number().min(-100000).max(100000).required();
      const maxResult8 = string.number().min(-100000).max(100000);
      const numberResult8 = string.number();
      const minResult8 = string.number().min(-100000);
      point2.z = string.number().min(-100000).max(100000).required();
      const maxResult9 = string.number().min(-100000).max(100000);
      obj3.position = string.object(point2).required();
      const objectResult5 = string.object(point2);
      const numberResult9 = string.number();
      const minResult9 = string.number().min(0);
      obj3.gain = string.number().min(0).max(1).optional();
      const maxResult10 = string.number().min(0).max(1);
      const objectResult6 = string.object(obj3);
      obj.sources = maxResult6.items(string.object(obj3).required()).required();
      return obj;
    },
    response(boolean) {
      const obj = { success: boolean.boolean().required() };
      return obj;
    },
  },
  [helpers.RPCCommand.SET_VOICE_SPATIAL_ACOUSTICS]: {
    request(string) {
      const obj = { session_id: string.string().required(), acoustics: null };
      const obj2 = { binaural: null, distance_attenuation: null, air_absorption: null, reflections: null };
      const obj3 = { spatial_blend: null, bilinear_interpolation: null, hrtf_volume: null, hrtf_normalization: null };
      ({ object, object: object2 } = string);
      const stringResult = string.string();
      const numberResult = string.number();
      const minResult = string.number().min(0);
      obj3.spatial_blend = string.number().min(0).max(1).optional();
      const maxResult = string.number().min(0).max(1);
      obj3.bilinear_interpolation = string.boolean().optional();
      const booleanResult = string.boolean();
      const numberResult1 = string.number();
      const minResult1 = string.number().min(0);
      obj3.hrtf_volume = string.number().min(0).max(2).optional();
      const maxResult1 = string.number().min(0).max(2);
      obj3.hrtf_normalization = string.boolean().optional();
      const booleanResult1 = string.boolean();
      obj2.binaural = object2(obj3).optional();
      const obj4 = { enabled: null, min_distance: null };
      const object2Result = object2(obj3);
      obj4.enabled = string.boolean().optional();
      const booleanResult2 = string.boolean();
      const numberResult2 = string.number();
      const minResult2 = string.number().min(0.1);
      obj4.min_distance = string.number().min(0.1).max(100).optional();
      const maxResult2 = string.number().min(0.1).max(100);
      obj2.distance_attenuation = string.object(obj4).optional();
      const obj5 = { enabled: null, coefficients: null };
      const objectResult = string.object(obj4);
      obj5.enabled = string.boolean().optional();
      const obj6 = { low: null, mid: null, high: null };
      const booleanResult3 = string.boolean();
      const numberResult3 = string.number();
      const minResult3 = string.number().min(0);
      obj6.low = string.number().min(0).max(1).required();
      const maxResult3 = string.number().min(0).max(1);
      const numberResult4 = string.number();
      const minResult4 = string.number().min(0);
      obj6.mid = string.number().min(0).max(1).required();
      const maxResult4 = string.number().min(0).max(1);
      const numberResult5 = string.number();
      const minResult5 = string.number().min(0);
      obj6.high = string.number().min(0).max(1).required();
      const maxResult5 = string.number().min(0).max(1);
      obj5.coefficients = string.object(obj6).optional();
      const objectResult6 = string.object(obj6);
      obj2.air_absorption = string.object(obj5).optional();
      const obj7 = {
        enabled: null,
        duration_seconds: null,
        num_rays: null,
        num_bounces: null,
        irradiance_min_distance: null,
        binaural_decode: null,
        mix_level: null,
        room: null,
      };
      const objectResult7 = string.object(obj5);
      obj7.enabled = string.boolean().optional();
      const booleanResult4 = string.boolean();
      const numberResult6 = string.number();
      const minResult6 = string.number().min(0.1);
      obj7.duration_seconds = string.number().min(0.1).max(2).optional();
      const maxResult6 = string.number().min(0.1).max(2);
      const numberResult7 = string.number();
      const integerResult = string.number().integer();
      const minResult7 = string.number().integer().min(64);
      obj7.num_rays = string.number().integer().min(64).max(4096).optional();
      const maxResult7 = string.number().integer().min(64).max(4096);
      const numberResult8 = string.number();
      const integerResult1 = string.number().integer();
      const minResult8 = string.number().integer().min(1);
      obj7.num_bounces = string.number().integer().min(1).max(64).optional();
      const maxResult8 = string.number().integer().min(1).max(64);
      const numberResult9 = string.number();
      const minResult9 = string.number().min(0.1);
      obj7.irradiance_min_distance = string.number().min(0.1).max(10).optional();
      const maxResult9 = string.number().min(0.1).max(10);
      obj7.binaural_decode = string.boolean().optional();
      const booleanResult5 = string.boolean();
      const numberResult10 = string.number();
      const minResult10 = string.number().min(0);
      obj7.mix_level = string.number().min(0).max(2).optional();
      const obj8 = { min_corner: null, max_corner: null, floor: null, ceiling: null, walls: null };
      const point = { x: null, y: null, z: null };
      ({ object: object3, object: object4 } = string);
      const maxResult10 = string.number().min(0).max(2);
      const numberResult11 = string.number();
      const minResult11 = string.number().min(-1000);
      point.x = string.number().min(-1000).max(1000).required();
      const maxResult11 = string.number().min(-1000).max(1000);
      const numberResult12 = string.number();
      const minResult12 = string.number().min(-1000);
      point.y = string.number().min(-1000).max(1000).required();
      const maxResult12 = string.number().min(-1000).max(1000);
      const numberResult13 = string.number();
      const minResult13 = string.number().min(-1000);
      point.z = string.number().min(-1000).max(1000).required();
      const maxResult13 = string.number().min(-1000).max(1000);
      obj8.min_corner = object4(point).optional();
      const point1 = { x: null, y: null, z: null };
      const object4Result = object4(point);
      const numberResult14 = string.number();
      const minResult14 = string.number().min(-1000);
      point1.x = string.number().min(-1000).max(1000).required();
      const maxResult14 = string.number().min(-1000).max(1000);
      const numberResult15 = string.number();
      const minResult15 = string.number().min(-1000);
      point1.y = string.number().min(-1000).max(1000).required();
      const maxResult15 = string.number().min(-1000).max(1000);
      const numberResult16 = string.number();
      const minResult16 = string.number().min(-1000);
      point1.z = string.number().min(-1000).max(1000).required();
      const maxResult16 = string.number().min(-1000).max(1000);
      obj8.max_corner = string.object(point1).optional();
      const obj9 = { absorption: null, scattering: null };
      const obj10 = { low: null, mid: null, high: null };
      ({ object: object5, object: object6 } = string);
      const objectResult8 = string.object(point1);
      const numberResult17 = string.number();
      const minResult17 = string.number().min(0);
      obj10.low = string.number().min(0).max(1).required();
      const maxResult17 = string.number().min(0).max(1);
      const numberResult18 = string.number();
      const minResult18 = string.number().min(0);
      obj10.mid = string.number().min(0).max(1).required();
      const maxResult18 = string.number().min(0).max(1);
      const numberResult19 = string.number();
      const minResult19 = string.number().min(0);
      obj10.high = string.number().min(0).max(1).required();
      const maxResult19 = string.number().min(0).max(1);
      obj9.absorption = object6(obj10).required();
      const object6Result = object6(obj10);
      const numberResult20 = string.number();
      const minResult20 = string.number().min(0);
      obj9.scattering = string.number().min(0).max(1).required();
      const maxResult20 = string.number().min(0).max(1);
      obj8.floor = object5(obj9).optional();
      const obj11 = { absorption: null, scattering: null };
      const obj12 = { low: null, mid: null, high: null };
      ({ object: object7, object: object8 } = string);
      const object5Result = object5(obj9);
      const numberResult21 = string.number();
      const minResult21 = string.number().min(0);
      obj12.low = string.number().min(0).max(1).required();
      const maxResult21 = string.number().min(0).max(1);
      const numberResult22 = string.number();
      const minResult22 = string.number().min(0);
      obj12.mid = string.number().min(0).max(1).required();
      const maxResult22 = string.number().min(0).max(1);
      const numberResult23 = string.number();
      const minResult23 = string.number().min(0);
      obj12.high = string.number().min(0).max(1).required();
      const maxResult23 = string.number().min(0).max(1);
      obj11.absorption = object8(obj12).required();
      const object8Result = object8(obj12);
      const numberResult24 = string.number();
      const minResult24 = string.number().min(0);
      obj11.scattering = string.number().min(0).max(1).required();
      const maxResult24 = string.number().min(0).max(1);
      obj8.ceiling = object7(obj11).optional();
      const obj13 = { absorption: null, scattering: null };
      const obj14 = { low: null, mid: null, high: null };
      ({ object: object9, object: object10 } = string);
      const object7Result = object7(obj11);
      const numberResult25 = string.number();
      const minResult25 = string.number().min(0);
      obj14.low = string.number().min(0).max(1).required();
      const maxResult25 = string.number().min(0).max(1);
      const numberResult26 = string.number();
      const minResult26 = string.number().min(0);
      obj14.mid = string.number().min(0).max(1).required();
      const maxResult26 = string.number().min(0).max(1);
      const numberResult27 = string.number();
      const minResult27 = string.number().min(0);
      obj14.high = string.number().min(0).max(1).required();
      const maxResult27 = string.number().min(0).max(1);
      obj13.absorption = object10(obj14).required();
      const object10Result = object10(obj14);
      const numberResult28 = string.number();
      const minResult28 = string.number().min(0);
      obj13.scattering = string.number().min(0).max(1).required();
      const maxResult28 = string.number().min(0).max(1);
      obj8.walls = object9(obj13).optional();
      const object9Result = object9(obj13);
      obj7.room = object3(obj8).optional();
      const object3Result = object3(obj8);
      obj2.reflections = string.object(obj7).optional();
      const objectResult9 = string.object(obj7);
      obj.acoustics = object(obj2).required();
      return obj;
    },
    response(boolean) {
      const obj = { success: boolean.boolean().required() };
      return obj;
    },
  },
  [helpers.RPCCommand.ENABLE_VOICE_SPATIAL]: obj7,
  [helpers.RPCCommand.DISABLE_VOICE_SPATIAL]: obj7,
  [helpers.RPCCommand.STOP_VOICE_SESSION]: obj7,
  [helpers.RPCCommand.GET_APPLICATION_STREAMING_VIEW_CAPABILITIES]: obj20,
  [helpers.RPCCommand.START_APPLICATION_STREAMING_VIEW]: obj9,
  [helpers.RPCCommand.SUSPEND_APPLICATION_STREAMING_VIEW]: obj7,
  [helpers.RPCCommand.RESUME_APPLICATION_STREAMING_VIEW]: obj7,
  [helpers.RPCCommand.SET_APPLICATION_STREAMING_VIEW_FIT]: obj8,
  [helpers.RPCCommand.WATCH_APPLICATION_STREAMING_VIEW_ON_DISCORD]: obj7,
  [helpers.RPCCommand.STOP_APPLICATION_STREAMING_VIEW]: obj7,
  [helpers.RPCCommand.GET_CAMERA_VIEW_CAPABILITIES]: obj21,
  [helpers.RPCCommand.START_CAMERA_VIEW]: obj9,
  [helpers.RPCCommand.SUSPEND_CAMERA_VIEW]: obj7,
  [helpers.RPCCommand.RESUME_CAMERA_VIEW]: obj7,
  [helpers.RPCCommand.SET_CAMERA_VIEW_FIT]: obj8,
  [helpers.RPCCommand.STOP_CAMERA_VIEW]: obj7,
  [helpers.RPCCommand.SHARE_INTERACTION]: {
    request(string) {
      const obj = {
        command: string.string().required(),
        options: null,
        content: null,
        require_launch_channel: null,
        preview_image: null,
        components: null,
        pid: null,
      };
      const stringResult = string.string();
      const obj2 = { name: null, value: null };
      const arrayResult = string.array();
      obj2.name = string.string().required();
      const stringResult1 = string.string();
      obj2.value = string.string().required();
      obj.options = arrayResult.items(string.object(obj2));
      const stringResult2 = string.string();
      obj.content = string.string().max(2000);
      obj.require_launch_channel = string.boolean();
      const size = { height: null, url: null, width: null };
      const stringResult3 = string.string();
      size.height = string.number().required();
      const numberResult = string.number();
      size.url = string.string().required();
      const stringResult4 = string.string();
      size.width = string.number().required();
      obj.preview_image = string.object(size);
      const numberResult1 = string.number();
      const obj3 = { type: null, components: null };
      const arrayResult3 = string.array();
      const numberResult2 = string.number();
      obj3.type = string.number().valid(1).required();
      const validResult = string.number().valid(1);
      const arrayResult4 = string.array();
      const obj4 = { type: null, style: null, label: null, custom_id: null };
      const maxResult = string.array().max(5);
      const numberResult3 = string.number();
      obj4.type = string.number().valid(2).required();
      const validResult2 = string.number().valid(2);
      const numberResult4 = string.number();
      const minResult = string.number().min(1);
      obj4.style = string.number().min(1).max(5).required();
      const maxResult1 = string.number().min(1).max(5);
      const stringResult5 = string.string();
      obj4.label = string.string().max(80).description("Text that appears on the button");
      const maxResult2 = string.string().max(80);
      const stringResult6 = string.string();
      obj4.custom_id = string
        .string()
        .max(100)
        .description("Developer-defined identifier for the button; max 100 characters");
      obj3.components = maxResult.items(string.object(obj4));
      obj.components = arrayResult3.items(string.object(obj3));
      obj.pid = string.number();
      return obj;
    },
    response(boolean) {
      const obj = { success: boolean.boolean().required() };
      return obj;
    },
  },
  [helpers.RPCCommand.SHARE_LINK]: {
    embeddedAppSDK: true,
    request(string) {
      const obj = { custom_id: string.string().max(64), message: null, link_id: null };
      const stringResult = string.string();
      const stringResult1 = string.string();
      obj.message = string.string().max(1000).required();
      const maxResult = string.string().max(1000);
      obj.link_id = string.string().max(64);
      return obj;
    },
    response(boolean) {
      const obj = { success: boolean.boolean().required(), didCopyLink: null, didSendMessage: null };
      const booleanResult = boolean.boolean();
      obj.didCopyLink = boolean.boolean().required();
      const booleanResult1 = boolean.boolean();
      obj.didSendMessage = boolean.boolean().required();
      return obj;
    },
  },
  [helpers.RPCCommand.SHARE_CONTENT]: {
    request(string) {
      const obj = {
        content: null,
        link: null,
        custom_id: null,
        link_id: null,
        image_url: null,
        attachments: null,
        preview_title: null,
        preview_subtitle: null,
      };
      const stringResult = string.string();
      obj.content = string.string().max(1000).required();
      const maxResult = string.string().max(1000);
      obj.link = string.string().max(1024);
      const stringResult1 = string.string();
      obj.custom_id = string.string().max(64);
      const stringResult2 = string.string();
      obj.link_id = string.string().max(64);
      const stringResult3 = string.string();
      obj.image_url = string.string().max(1024);
      const stringResult4 = string.string();
      const arrayResult = string.array();
      const obj2 = { data: null, filename: null, content_type: null };
      const maxResult1 = string.array().max(10);
      const stringResult5 = string.string();
      obj2.data = string.string().max(14000000).required();
      const maxResult2 = string.string().max(14000000);
      const stringResult6 = string.string();
      obj2.filename = string.string().max(64).required();
      const maxResult3 = string.string().max(64);
      const stringResult7 = string.string();
      obj2.content_type = string
        .string()
        .valid("image/png", "image/jpeg", "image/gif", "image/webp", "video/mp4", "video/webm")
        .required();
      obj.attachments = maxResult1.items(string.object(obj2));
      const validResult = string
        .string()
        .valid("image/png", "image/jpeg", "image/gif", "image/webp", "video/mp4", "video/webm");
      obj.preview_title = string.string().max(100);
      const stringResult8 = string.string();
      obj.preview_subtitle = string.string().max(100);
      return obj;
    },
    response(boolean) {
      const obj = { success: boolean.boolean().required(), didCopyLink: null, didSendMessage: null };
      const booleanResult = boolean.boolean();
      obj.didCopyLink = boolean.boolean().required();
      const booleanResult1 = boolean.boolean();
      obj.didSendMessage = boolean.boolean().required();
      return obj;
    },
  },
  [helpers.RPCCommand.OPEN_CONTEXT_MENU]: {
    request(string) {
      const point = { type: null, id: null, channel_id: null, url: null, items: null, x: null, y: null };
      const stringResult = string.string();
      point.type = string.string().valid("user", "channel", "message", "image", "custom").required();
      const validResult = string.string().valid("user", "channel", "message", "image", "custom");
      point.id = string.string().max(64);
      const stringResult1 = string.string();
      point.channel_id = string.string().max(64);
      const stringResult2 = string.string();
      point.url = string.string().max(1024);
      const stringResult3 = string.string();
      const arrayResult = string.array();
      const minResult = string.array().min(1);
      point.items = string.array().min(1).max(30).items(ContextMenuItem(string, true));
      const maxResult = string.array().min(1).max(30);
      const numberResult = string.number();
      const minResult1 = string.number().min(0);
      point.x = string.number().min(0).max(65535).required();
      const maxResult1 = string.number().min(0).max(65535);
      const numberResult1 = string.number();
      const minResult2 = string.number().min(0);
      point.y = string.number().min(0).max(65535).required();
      return point;
    },
    response(boolean) {
      const obj = { opened: boolean.boolean().required(), selected_id: null };
      const booleanResult = boolean.boolean();
      obj.selected_id = boolean.string().allow(null);
      return obj;
    },
  },
  [helpers.RPCCommand.OPEN_USER_POPOUT]: {
    request(string) {
      const point = { user_id: null, x: null, y: null };
      const stringResult = string.string();
      point.user_id = string.string().max(64).required();
      const maxResult = string.string().max(64);
      const numberResult = string.number();
      const minResult = string.number().min(0);
      point.x = string.number().min(0).max(65535).required();
      const maxResult1 = string.number().min(0).max(65535);
      const numberResult1 = string.number();
      const minResult1 = string.number().min(0);
      point.y = string.number().min(0).max(65535).required();
      return point;
    },
    response(boolean) {
      const obj = { opened: boolean.boolean().required() };
      return obj;
    },
  },
  [helpers.RPCCommand.OPEN_MEDIA_VIEWER]: {
    request(array) {
      const obj = { items: null, starting_index: null };
      const size = { url: null, type: null, width: null, height: null, alt: null };
      const arrayResult = array.array();
      const stringResult = array.string();
      size.url = array.string().max(1024).required();
      const maxResult = array.string().max(1024);
      size.type = array.string().valid("image", "video");
      const stringResult1 = array.string();
      const numberResult = array.number();
      size.width = array.number().min(1).max(16384);
      const minResult = array.number().min(1);
      const numberResult1 = array.number();
      size.height = array.number().min(1).max(16384);
      const minResult1 = array.number().min(1);
      size.alt = array.string().max(1024);
      const stringResult2 = array.string();
      const itemsResult = arrayResult.items(array.object(size));
      const minResult2 = arrayResult.items(array.object(size)).min(1);
      obj.items = arrayResult.items(array.object(size)).min(1).max(50).required();
      const maxResult1 = arrayResult.items(array.object(size)).min(1).max(50);
      const numberResult2 = array.number();
      obj.starting_index = array.number().min(0).max(49);
      return obj;
    },
    response(boolean) {
      const obj = { opened: boolean.boolean().required() };
      return obj;
    },
  },
  [helpers.RPCCommand.OPEN_USER_PROFILE]: {
    request(string) {
      const obj = { user_id: null };
      const stringResult = string.string();
      obj.user_id = string.string().max(64).required();
      return obj;
    },
    response(boolean) {
      const obj = { opened: boolean.boolean().required() };
      return obj;
    },
  },
  [helpers.RPCCommand.OPEN_GAME_PROFILE]: {
    request(string) {
      const obj = { game_id: string.string().max(64), application_id: null };
      const stringResult = string.string();
      obj.application_id = string.string().max(64);
      return obj;
    },
    response(boolean) {
      const obj = { opened: boolean.boolean().required() };
      return obj;
    },
  },
  [helpers.RPCCommand.SHOW_TOOLTIP]: {
    request(string) {
      const point = { text: null, shortcut: null, x: null, y: null, position: null, align: null };
      const stringResult = string.string();
      point.text = string.string().max(200).required();
      const maxResult = string.string().max(200);
      point.shortcut = string.string().max(32);
      const stringResult1 = string.string();
      const numberResult = string.number();
      const minResult = string.number().min(0);
      point.x = string.number().min(0).max(65535).required();
      const maxResult1 = string.number().min(0).max(65535);
      const numberResult1 = string.number();
      const minResult1 = string.number().min(0);
      point.y = string.number().min(0).max(65535).required();
      const maxResult2 = string.number().min(0).max(65535);
      point.position = string.string().valid("top", "bottom", "left", "right");
      const stringResult2 = string.string();
      point.align = string.string().valid("top", "center", "bottom", "left", "right");
      return point;
    },
    response(boolean) {
      const obj = { shown: boolean.boolean().required() };
      return obj;
    },
  },
  [helpers.RPCCommand.HIDE_TOOLTIP]: obj31,
  [helpers.RPCCommand.SHOW_TOAST]: {
    request(string) {
      const obj = { message: null, type: null };
      const stringResult = string.string();
      obj.message = string.string().max(200).required();
      const maxResult = string.string().max(200);
      const stringResult1 = string.string();
      obj.type = string.string().valid("message", "success", "failure").required();
      return obj;
    },
    response(boolean) {
      const obj = { shown: boolean.boolean().required() };
      return obj;
    },
  },
  [helpers.RPCCommand.SHOW_CONFIRM_MODAL]: {
    request(string) {
      const obj = { type: null, title: null, body: null, confirm_text: null, cancel_text: null };
      const stringResult = string.string();
      obj.type = string.string().valid("alert", "confirm").required();
      const validResult = string.string().valid("alert", "confirm");
      const stringResult1 = string.string();
      obj.title = string.string().max(100).required();
      const maxResult = string.string().max(100);
      obj.body = string.string().max(1000);
      const stringResult2 = string.string();
      const stringResult3 = string.string();
      obj.confirm_text = string.string().max(32).required();
      const maxResult1 = string.string().max(32);
      obj.cancel_text = string.string().max(32);
      return obj;
    },
    response(boolean) {
      return { confirmed: boolean.boolean(), acknowledged: boolean.boolean() };
    },
  },
  [helpers.RPCCommand.GET_DEVICE_PERMISSIONS]: obj34,
  [helpers.RPCCommand.REQUEST_DEVICE_PERMISSIONS]: {
    request(array) {
      const obj = { permissions: null };
      const arrayResult = array.array();
      const minResult = array.array().min(1);
      const uniqueResult = array.array().min(1).unique();
      const requiredResult = array.array().min(1).unique().required();
      const stringResult = array.string();
      obj.permissions = requiredResult.items(
        array.string().valid("screen_capture", "connect_user_to_voice").required(),
      );
      return obj;
    },
    response(array) {
      const obj = { permissions: null };
      const arrayResult = array.array();
      const obj2 = { permission: null, state: null };
      const requiredResult = array.array().required();
      const stringResult = array.string();
      obj2.permission = array.string().valid("screen_capture", "connect_user_to_voice").required();
      const validResult = array.string().valid("screen_capture", "connect_user_to_voice");
      const stringResult1 = array.string();
      obj2.state = array.string().valid("granted", "denied", "prompt", "unsupported").required();
      obj.permissions = requiredResult.items(array.object(obj2));
      return obj;
    },
  },
  [helpers.RPCCommand.CAPTURE_SCREEN]: {
    request(number) {
      const obj = { max_width: null, max_height: null };
      const numberResult = number.number();
      const integerResult = number.number().integer();
      const minResult = number.number().integer().min(1);
      obj.max_width = number.number().integer().min(1).max(1920).optional();
      const maxResult = number.number().integer().min(1).max(1920);
      const numberResult1 = number.number();
      const integerResult1 = number.number().integer();
      const minResult1 = number.number().integer().min(1);
      obj.max_height = number.number().integer().min(1).max(1920).optional();
      return obj;
    },
    response(string) {
      const size = { status: null, image: null, width: null, height: null };
      const stringResult = string.string();
      size.status = string
        .string()
        .valid(
          "ok",
          "permission_required",
          "permission_denied",
          "unsupported",
          "no_game",
          "game_not_focused",
          "timeout",
          "capture_failed",
          "busy",
        )
        .required();
      const validResult = string
        .string()
        .valid(
          "ok",
          "permission_required",
          "permission_denied",
          "unsupported",
          "no_game",
          "game_not_focused",
          "timeout",
          "capture_failed",
          "busy",
        );
      size.image = string.string().optional();
      const stringResult1 = string.string();
      const numberResult = string.number();
      size.width = string.number().integer().optional();
      const integerResult = string.number().integer();
      const numberResult1 = string.number();
      size.height = string.number().integer().optional();
      return size;
    },
  },
  [helpers.RPCCommand.GET_RELATIONSHIPS]: obj37,
  [helpers.RPCCommand.INVITE_USER_EMBEDDED]: {
    embeddedAppSDK: true,
    request(string) {
      const obj = { user_id: string.string().required(), content: null };
      const stringResult = string.string();
      const stringResult1 = string.string();
      obj.content = string.string().min(0).max(1024);
      return obj;
    },
    response: "Reflect",
  },
  [helpers.RPCCommand.GET_CONTEXT]: obj39,
  [helpers.RPCCommand.GET_USER]: {
    embeddedAppSDK: true,
    request(string) {
      const obj = { id: null };
      const stringResult = string.string();
      obj.id = string.string().max(64).required();
      return obj;
    },
    response(arg0) {
      return User(arg0).allow(null);
    },
  },
  [helpers.RPCCommand.GET_CURRENT_USER]: obj41,
  [helpers.RPCCommand.GET_QUEST_ENROLLMENT_STATUS]: {
    embeddedAppSDK: true,
    request(string) {
      const obj = { quest_id: null };
      const stringResult = string.string();
      obj.quest_id = string.string().required().meta({ className: "QuestId" });
      return obj;
    },
    response(string) {
      const obj = { quest_id: string.string().required(), is_enrolled: null, enrolled_at: null };
      const stringResult = string.string();
      obj.is_enrolled = string.boolean().required();
      const booleanResult = string.boolean();
      const stringResult1 = string.string();
      obj.enrolled_at = string.string().allow(null).optional();
      return obj;
    },
  },
  [helpers.RPCCommand.QUEST_START_TIMER]: {
    embeddedAppSDK: true,
    request(string) {
      const obj = { quest_id: null };
      const stringResult = string.string();
      obj.quest_id = string.string().required().meta({ className: "QuestId" });
      return obj;
    },
    response(boolean) {
      const obj = { success: boolean.boolean().required() };
      return obj;
    },
  },
  [helpers.RPCCommand.GET_QUEST]: obj44,
  [helpers.RPCCommand.REQUEST_PROXY_TICKET_REFRESH]: obj45,
  [helpers.RPCCommand.SET_RUNS_IN_BACKGROUND]: {
    request(boolean) {
      const obj = { enabled: boolean.boolean().required() };
      return obj;
    },
    response(boolean) {
      const obj = { enabled: boolean.boolean().required() };
      return obj;
    },
  },
  [helpers.RPCCommand.SET_FRAME_RELAUNCH_DEEP_LINK]: {
    request(string) {
      const obj = { hash: null };
      const stringResult = string.string();
      const maxResult = string.string().max(512);
      obj.hash = string.string().max(512).allow("").required();
      return obj;
    },
    response(string) {
      const obj = { hash: null };
      const stringResult = string.string();
      obj.hash = string.string().allow("").required();
      return obj;
    },
  },
  [helpers.RPCCommand.SET_AUDIO_SESSION_TYPE]: {
    request(string) {
      const obj = { type: null };
      const stringResult = string.string();
      obj.type = string
        .string()
        .valid("auto", "playback", "transient", "transient-solo", "ambient", "play-and-record")
        .required();
      return obj;
    },
    response(boolean) {
      const obj = { success: boolean.boolean().required() };
      return obj;
    },
  },
  [helpers.RPCCommand.CAPTURE_LOG]: {
    embeddedAppSDK: true,
    request(string) {
      const obj = { level: null, message: null };
      const stringResult = string.string();
      obj.level = string.string().max(10).required();
      const maxResult = string.string().max(10);
      const stringResult1 = string.string();
      obj.message = string.string().max(1000).required();
      return obj;
    },
    response: "Reflect",
  },
  [helpers.RPCCommand.ENCOURAGE_HW_ACCELERATION]: obj50,
  [helpers.RPCCommand.GET_PLATFORM_BEHAVIORS]: obj51,
  [helpers.RPCCommand.USER_SETTINGS_GET_LOCALE]: obj52,
  [helpers.RPCCommand.SET_ORIENTATION_LOCK_STATE]: {
    embeddedAppSDK: true,
    request(number) {
      const obj = {
        lock_state: joiEnum(number, "OrientationLockState").required(),
        picture_in_picture_lock_state: null,
        grid_lock_state: null,
      };
      const obj2 = joiEnum(number, "OrientationLockState");
      obj.picture_in_picture_lock_state = joiEnum(number, "OrientationLockState", { nullable: true }).optional();
      const obj3 = joiEnum(number, "OrientationLockState", { nullable: true });
      obj.grid_lock_state = joiEnum(number, "OrientationLockState", { nullable: true }).optional();
      return obj;
    },
    response: "Reflect",
  },
  [helpers.RPCCommand.SET_CONFIG]: {
    embeddedAppSDK: true,
    request(boolean) {
      const obj = { use_interactive_pip: boolean.boolean().required() };
      return obj;
    },
    response(boolean) {
      const obj = { use_interactive_pip: boolean.boolean().required() };
      return obj;
    },
  },
  [helpers.RPCCommand.OPEN_INVITE_DIALOG]: { embeddedAppSDK: true, request: "context", response: "add" },
  [helpers.RPCCommand.OPEN_EXTERNAL_LINK]: {
    embeddedAppSDK: true,
    request(string) {
      const obj = { url: null };
      const stringResult = string.string();
      obj.url = string.string().max(8000).required();
      return obj;
    },
    response(boolean) {
      const obj = { opened: null };
      const booleanResult = boolean.boolean();
      obj.opened = boolean.boolean().allow(null).required();
      const allowResult = boolean.boolean().allow(null);
      return boolean.object(obj).default({ opened: null });
    },
  },
  [helpers.RPCCommand.GET_CHANNEL_PERMISSIONS]: obj56,
  [helpers.RPCCommand.GET_SKUS_EMBEDDED]: obj57,
  [helpers.RPCCommand.GET_ENTITLEMENTS_EMBEDDED]: obj58,
  [helpers.RPCCommand.START_PURCHASE]: {
    embeddedAppSDK: true,
    request(string) {
      const obj = { sku_id: null, pid: null };
      const stringResult = string.string();
      obj.sku_id = string.string().required().meta({ className: "SkuId" });
      const requiredResult = string.string().required();
      obj.pid = string.number().min(0);
      return obj;
    },
    response(array) {
      const arrayResult = array.array();
      return array.array().items(RPCEntitlement(array)).allow(null);
    },
  },
  [helpers.RPCCommand.GET_CHANNEL]: {
    embeddedAppSDK: true,
    request(string) {
      const obj = { channel_id: null };
      const stringResult = string.string();
      obj.channel_id = string.string().required().meta({ className: "ChannelId" });
      return obj;
    },
    response(arg0) {
      return Channel(arg0);
    },
  },
  [helpers.RPCCommand.GET_CHANNELS]: {
    embeddedAppSDK: true,
    request(string) {
      const obj = { guild_id: null };
      const stringResult = string.string();
      const allowResult = string.string().allow("", null);
      obj.guild_id = string.string().allow("", null).optional().meta({ className: "GuildId" });
      return obj;
    },
    response(array) {
      const obj = { channels: null };
      const obj2 = { id: null, name: null, type: null };
      const arrayResult = array.array();
      const stringResult = array.string();
      obj2.id = array.string().required().meta({ className: "ChannelId" });
      const requiredResult = array.string().required();
      const stringResult1 = array.string();
      obj2.name = array.string().allow("").required();
      const allowResult = array.string().allow("");
      obj2.type = joiEnum(array, "ChannelTypes").required();
      const obj8 = joiEnum(array, "ChannelTypes");
      obj.channels = arrayResult.items(array.object(obj2)).required();
      return obj;
    },
  },
  [helpers.RPCCommand.GET_SELECTED_VOICE_CHANNEL]: obj62,
  [helpers.RPCCommand.SELECT_VOICE_CHANNEL]: {
    request(string) {
      const obj = { channel_id: null, timeout: null, force: null, navigate: null };
      const stringResult = string.string();
      const allowResult = string.string().allow(null);
      obj.channel_id = string.string().allow(null).optional().meta({ className: "ChannelId" });
      const optionalResult = string.string().allow(null).optional();
      const numberResult = string.number();
      const minResult = string.number().min(0);
      obj.timeout = string.number().min(0).max(60).optional();
      const maxResult = string.number().min(0).max(60);
      obj.force = string.boolean().optional();
      const booleanResult = string.boolean();
      obj.navigate = string.boolean().optional();
      return obj;
    },
    response(arg0) {
      return Channel(arg0).allow(null);
    },
  },
  [helpers.RPCCommand.SELECT_TEXT_CHANNEL]: {
    request(string) {
      const obj = { channel_id: null, timeout: null };
      const stringResult = string.string();
      const allowResult = string.string().allow(null);
      obj.channel_id = string.string().allow(null).optional().meta({ className: "ChannelId" });
      const optionalResult = string.string().allow(null).optional();
      const numberResult = string.number();
      const minResult = string.number().min(0);
      obj.timeout = string.number().min(0).max(60).optional();
      return obj;
    },
    response(arg0) {
      return Channel(arg0).allow(null);
    },
  },
  [helpers.RPCCommand.CREATE_CHANNEL_INVITE]: {
    request(string) {
      const obj = {
        channel_id: null,
        max_age: null,
        max_uses: null,
        temporary: null,
        unique: null,
        target_type: null,
        target_user_id: null,
        target_application_id: null,
      };
      const stringResult = string.string();
      obj.channel_id = string.string().required().meta({ className: "ChannelId" });
      const requiredResult = string.string().required();
      obj.max_age = string.number().optional();
      const numberResult = string.number();
      obj.max_uses = string.number().optional();
      const numberResult1 = string.number();
      obj.temporary = string.boolean().optional();
      const booleanResult = string.boolean();
      obj.unique = string.boolean().optional();
      const booleanResult1 = string.boolean();
      obj.target_type = joiEnum(string, "InviteTargetTypes", { nullable: true }).optional();
      const obj8 = joiEnum(string, "InviteTargetTypes", { nullable: true });
      const stringResult1 = string.string();
      const allowResult = string.string().allow(null);
      obj.target_user_id = string.string().allow(null).optional().meta({ className: "UserId" });
      const optionalResult = string.string().allow(null).optional();
      const stringResult2 = string.string();
      obj.target_application_id = string.string().allow(null).optional();
      return obj;
    },
    response(string) {
      const obj = {
        code: string.string().required(),
        type: null,
        channel: null,
        guild: null,
        expires_at: null,
        max_age: null,
        max_uses: null,
        uses: null,
        temporary: null,
      };
      const stringResult = string.string();
      obj.type = string.number().optional();
      const obj2 = { id: null, name: null, type: null };
      const numberResult = string.number();
      const stringResult1 = string.string();
      obj2.id = string.string().required().meta({ className: "ChannelId" });
      const requiredResult = string.string().required();
      obj2.name = string.string().required();
      const stringResult2 = string.string();
      obj2.type = string.number().required();
      const numberResult1 = string.number();
      obj.channel = string.object(obj2).optional();
      const obj3 = { id: null, name: null, icon: null };
      const objectResult = string.object(obj2);
      const stringResult3 = string.string();
      obj3.id = string.string().required().meta({ className: "GuildId" });
      const requiredResult1 = string.string().required();
      obj3.name = string.string().required();
      const stringResult4 = string.string();
      const stringResult5 = string.string();
      obj3.icon = string.string().allow(null).required();
      const allowResult = string.string().allow(null);
      obj.guild = string.object(obj3).optional();
      const objectResult2 = string.object(obj3);
      const stringResult6 = string.string();
      obj.expires_at = string.string().allow(null).optional();
      const allowResult1 = string.string().allow(null);
      obj.max_age = string.number().optional();
      const numberResult2 = string.number();
      obj.max_uses = string.number().optional();
      const numberResult3 = string.number();
      obj.uses = string.number().optional();
      const numberResult4 = string.number();
      obj.temporary = string.boolean().optional();
      return obj;
    },
  },
  [helpers.RPCCommand.GET_GUILD]: {
    embeddedAppSDK: true,
    request(string) {
      const obj = { guild_id: null, timeout: null };
      const stringResult = string.string();
      obj.guild_id = string.string().required().meta({ className: "GuildId" });
      const requiredResult = string.string().required();
      const numberResult = string.number();
      const minResult = string.number().min(0);
      obj.timeout = string.number().min(0).max(60).optional();
      return obj;
    },
    response(string) {
      const obj = { id: null, name: null, icon_url: null, vanity_url_code: null };
      const stringResult = string.string();
      obj.id = string.string().required().meta({ className: "GuildId" });
      const requiredResult = string.string().required();
      obj.name = string.string().required();
      const stringResult1 = string.string();
      const stringResult2 = string.string();
      obj.icon_url = string.string().allow(null).required();
      const allowResult = string.string().allow(null);
      const stringResult3 = string.string();
      obj.vanity_url_code = string.string().allow(null).optional();
      return obj;
    },
  },
  [helpers.RPCCommand.GET_GUILDS]: obj67,
  [helpers.RPCCommand.GET_ROLES]: {
    embeddedAppSDK: true,
    request(string) {
      const obj = { guild_id: null };
      const stringResult = string.string();
      obj.guild_id = string.string().required().meta({ className: "GuildId" });
      return obj;
    },
    response(array) {
      const obj = { roles: null };
      const arrayResult = array.array();
      obj.roles = array.array().items(Role(array)).required();
      return obj;
    },
  },
  [helpers.RPCCommand.GET_CURRENT_USER_GUILD_MEMBER]: {
    embeddedAppSDK: true,
    request(string) {
      const obj = { guild_id: null };
      const stringResult = string.string();
      obj.guild_id = string.string().required().meta({ className: "GuildId" });
      return obj;
    },
    response(string) {
      return GuildMember(string).allow(null);
    },
  },
  [helpers.RPCCommand.GET_GUILD_MEMBER]: {
    embeddedAppSDK: true,
    request(string) {
      const obj = { guild_id: null, user_id: null };
      const stringResult = string.string();
      obj.guild_id = string.string().required().meta({ className: "GuildId" });
      const requiredResult = string.string().required();
      const stringResult1 = string.string();
      obj.user_id = string.string().required().meta({ className: "UserId" });
      return obj;
    },
    response(string) {
      return GuildMember(string).allow(null);
    },
  },
  [helpers.RPCCommand.AUTHORIZE]: {
    embeddedAppSDK: true,
    request(string) {
      const obj = {
        client_id: null,
        scope: null,
        scopes: null,
        response_type: null,
        code_challenge: null,
        code_challenge_method: null,
        state: null,
        prompt: null,
        nonce: null,
      };
      const stringResult = string.string();
      obj.client_id = string.string().allow("").optional();
      const allowResult = string.string().allow("");
      const alternativesResult = string.alternatives();
      const stringResult1 = string.string();
      const allowResult1 = string.string().allow("");
      const arrayResult = string.array();
      const stringResult2 = string.string();
      obj.scope = alternativesResult.try(allowResult1, arrayResult.items(string.string().allow(""))).optional();
      const tryResult = alternativesResult.try(allowResult1, arrayResult.items(string.string().allow("")));
      const alternativesResult1 = string.alternatives();
      const stringResult3 = string.string();
      const allowResult2 = string.string().allow("");
      const arrayResult2 = string.array();
      const stringResult4 = string.string();
      obj.scopes = alternativesResult1.try(allowResult2, arrayResult2.items(string.string().allow(""))).optional();
      const tryResult1 = alternativesResult1.try(allowResult2, arrayResult2.items(string.string().allow("")));
      const stringResult5 = string.string();
      obj.response_type = string.string().allow("").optional();
      const allowResult3 = string.string().allow("");
      const stringResult6 = string.string();
      obj.code_challenge = string.string().allow("").optional();
      const allowResult4 = string.string().allow("");
      const stringResult7 = string.string();
      obj.code_challenge_method = string.string().allow("").optional();
      const allowResult5 = string.string().allow("");
      const stringResult8 = string.string();
      obj.state = string.string().allow("").optional();
      const allowResult6 = string.string().allow("");
      const stringResult9 = string.string();
      obj.prompt = string.string().allow("").optional();
      const allowResult7 = string.string().allow("");
      const stringResult10 = string.string();
      obj.nonce = string.string().allow("").optional();
      return obj;
    },
    response(string) {
      const obj = { code: string.string().required() };
      return obj;
    },
  },
  [helpers.RPCCommand.SET_ACTIVITY]: {
    embeddedAppSDK: true,
    request(number) {
      const obj = { pid: number.number().min(0), activity: null };
      const obj2 = {
        name: null,
        state: null,
        state_url: null,
        details: null,
        details_url: null,
        timestamps: null,
        assets: null,
        party: null,
        secrets: null,
        buttons: null,
        instance: null,
        supported_platforms: null,
        type: null,
        status_display_type: null,
      };
      const numberResult = number.number();
      const stringResult = number.string();
      obj2.name = number.string().min(1).max(128);
      const minResult = number.string().min(1);
      const stringResult1 = number.string();
      obj2.state = number.string().min(2).max(128);
      const minResult1 = number.string().min(2);
      const stringResult2 = number.string();
      const uriResult = number.string().uri();
      obj2.state_url = number.string().uri().min(1).max(256);
      const minResult2 = number.string().uri().min(1);
      const stringResult3 = number.string();
      obj2.details = number.string().min(2).max(128);
      const minResult3 = number.string().min(2);
      const stringResult4 = number.string();
      const uriResult1 = number.string().uri();
      obj2.details_url = number.string().uri().min(1).max(256);
      const obj3 = { start: null, end: null };
      const minResult4 = number.string().uri().min(1);
      obj3.start = number.number().min(1);
      const numberResult1 = number.number();
      obj3.end = number.number().min(1);
      const numberResult2 = number.number();
      obj2.timestamps = number.object(obj3).unknown(true);
      const obj4 = {
        large_image: null,
        large_text: null,
        large_url: null,
        small_image: null,
        small_text: null,
        small_url: null,
        invite_cover_image: null,
      };
      const objectResult = number.object(obj3);
      const stringResult5 = number.string();
      obj4.large_image = number.string().min(1).max(300);
      const minResult5 = number.string().min(1);
      const stringResult6 = number.string();
      obj4.large_text = number.string().min(2).max(128);
      const minResult6 = number.string().min(2);
      const stringResult7 = number.string();
      const uriResult2 = number.string().uri();
      obj4.large_url = number.string().uri().min(1).max(256);
      const minResult7 = number.string().uri().min(1);
      const stringResult8 = number.string();
      obj4.small_image = number.string().min(1).max(300);
      const minResult8 = number.string().min(1);
      const stringResult9 = number.string();
      obj4.small_text = number.string().min(2).max(128);
      const minResult9 = number.string().min(2);
      const stringResult10 = number.string();
      const uriResult3 = number.string().uri();
      obj4.small_url = number.string().uri().min(1).max(256);
      const minResult10 = number.string().uri().min(1);
      const stringResult11 = number.string();
      obj4.invite_cover_image = number.string().min(1).max(300);
      const minResult11 = number.string().min(1);
      obj2.assets = number.object(obj4).unknown(true);
      const obj5 = { id: null, size: null, privacy: null };
      const objectResult6 = number.object(obj4);
      const stringResult12 = number.string();
      obj5.id = number.string().min(2).max(128);
      const minResult12 = number.string().min(2);
      const arrayResult = number.array();
      const numberResult3 = number.number();
      obj5.size = arrayResult.items(number.number().min(0)).length(2);
      const itemsResult = arrayResult.items(number.number().min(0));
      const numberResult4 = number.number();
      obj5.privacy = number.number().default(constants.PRIVATE).valid(constants.PRIVATE, constants.PUBLIC);
      const defaultResult = number.number().default(constants.PRIVATE);
      obj2.party = number.object(obj5).unknown(true);
      const obj6 = { match: null, join: null, spectate: null };
      const objectResult7 = number.object(obj5);
      const stringResult13 = number.string();
      obj6.match = number.string().min(2).max(128);
      const minResult13 = number.string().min(2);
      const stringResult14 = number.string();
      obj6.join = number.string().min(2).max(128);
      const minResult14 = number.string().min(2);
      const stringResult15 = number.string();
      obj6.spectate = number.string().min(2).max(128);
      const minResult15 = number.string().min(2);
      obj2.secrets = number.object(obj6).unknown(true);
      const objectResult8 = number.object(obj6);
      const obj7 = { label: null, url: null };
      const arrayResult3 = number.array();
      const stringResult16 = number.string();
      const minResult16 = number.string().min(1);
      obj7.label = number.string().min(1).max(32).required();
      const maxResult = number.string().min(1).max(32);
      const stringResult17 = number.string();
      const uriResult4 = number.string().uri();
      const minResult17 = number.string().uri().min(1);
      obj7.url = number.string().uri().min(1).max(512).required();
      const maxResult1 = number.string().uri().min(1).max(512);
      const objectResult9 = number.object(obj7);
      const itemsResult1 = arrayResult3.items(number.object(obj7).unknown(true));
      obj2.buttons = arrayResult3.items(number.object(obj7).unknown(true)).min(1).max(2);
      obj2.instance = number.boolean();
      const minResult18 = arrayResult3.items(number.object(obj7).unknown(true)).min(1);
      const arrayResult4 = number.array();
      const itemsResult2 = number.array().items(joiEnum(number, "ActivityGamePlatforms"));
      obj2.supported_platforms = number.array().items(joiEnum(number, "ActivityGamePlatforms")).min(1).max(10);
      const minResult19 = number.array().items(joiEnum(number, "ActivityGamePlatforms")).min(1);
      const numberResult5 = number.number();
      obj2.type = number
        .number()
        .default(constants2.PLAYING)
        .valid(constants2.PLAYING, constants2.LISTENING, constants2.WATCHING, constants2.COMPETING);
      const defaultResult1 = number.number().default(constants2.PLAYING);
      const numberResult6 = number.number();
      obj2.status_display_type = number
        .number()
        .optional()
        .valid(
          StatusDisplayTypes.StatusDisplayTypes.NAME,
          StatusDisplayTypes.StatusDisplayTypes.STATE,
          StatusDisplayTypes.StatusDisplayTypes.DETAILS,
        );
      const optionalResult = number.number().optional();
      const objectResult10 = number.object(obj2);
      obj.activity = number.object(obj2).unknown(true).allow(null);
      return obj;
    },
    response(number) {
      const obj2 = { type: null };
      const obj = Activity(number);
      obj2.type = number.number().required();
      const keys = obj.keys(obj2);
      return keys.allow(null);
    },
  },
};
export const RPCNamedSchemas = items;
