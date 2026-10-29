// === Module 11575: transformMessage ===

// Module 11575 (transformMessage)
import GlobalUtils from "GlobalUtils" /* 1385 */;
import Server from "Server" /* 1998 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5743 */;
import useMessageAuthor from "useMessageAuthor" /* 6425 */;
import transformUserDefault from "transformUser" /* 9298 */;
import getRemoteIconURLDefault from "getRemoteIconURL" /* 11576 */;
import UserRecord from "UserRecord" /* 1403 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import RelationshipStore from "RelationshipStore" /* 4947 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
function recurseReplaceContentTree(type) {
  if ("customEmoji" === type.type) {
    type.type = "emoji";
  }
  if (tmp) {
    type.src = getRemoteIconURLDefault(type.src);
  }
  if (Array.isArray(type.content)) {
    const content = type.content;
    type.content = content.map(recurseReplaceContentTree);
  }
  return type;
}
function transformComponent(type) {
  type = type.type;
  if (Server.ComponentType.ACTION_ROW === type) {
    const obj13 = { type: null, components: null };
    ({ type: obj19.type, components: components3 } = type);
    let found;
    if (components3 != null) {
      const mapped = components3.map(transformComponent);
      found = mapped.filter(GlobalUtils.isNotNullish);
    }
    obj13.components = found;
    return obj13;
  } else if (Server.ComponentType.BUTTON === type) {
    const obj15 = { type: null, custom_id: null, disabled: null, style: null, label: null, url: null, emoji: null, sku_id: null };
    ({ type: obj17.type, customId: obj17.custom_id, disabled: obj17.disabled, style: obj17.style, label: obj17.label, url: obj17.url, emoji } = type);
    let tmp23;
    if (null != emoji) {
      ({ id: obj18.id, name: obj18.name, animated: obj18.animated } = emoji);
      tmp23 = { id: null, name: null, animated: null };
      const obj35 = { id: null, name: null, animated: null };
    }
    obj15.emoji = tmp23;
    obj15.sku_id = type.skuId;
    return obj15;
  } else if (Server.ComponentType.STRING_SELECT === type) {
    const obj36 = { type: type.type };
    const obj37 = { custom_id: null, disabled: null, required: null, placeholder: null, min_values: null, max_values: null };
    ({ customId: obj16.custom_id, disabled: obj16.disabled, required: obj16.required, placeholder: obj16.placeholder, minValues: obj16.min_values, maxValues: obj16.max_values } = type);
    const merged = Object.assign(obj37);
    const options = type.options;
    obj36.options = options.map((label) => {
      const obj = { label: label.label, value: label.value, default: label.default, description: label.description, emoji: null };
      const emoji = label.emoji;
      let tmp;
      if (null != emoji) {
        ({ id: obj2.id, name: obj2.name, animated: obj2.animated } = emoji);
        tmp = { id: null, name: null, animated: null };
        const obj3 = { id: null, name: null, animated: null };
      }
      obj.emoji = tmp;
      return obj;
    });
    return obj36;
  } else {
    if (Server.ComponentType.USER_SELECT !== type) {
      if (Server.ComponentType.ROLE_SELECT !== type) {
        if (Server.ComponentType.MENTIONABLE_SELECT !== type) {
          if (Server.ComponentType.CHANNEL_SELECT === type) {
            const obj38 = { type: type.type };
            const obj39 = { custom_id: null, disabled: null, required: null, placeholder: null, min_values: null, max_values: null };
            ({ customId: obj12.custom_id, disabled: obj12.disabled, required: obj12.required, placeholder: obj12.placeholder, minValues: obj12.min_values, maxValues: obj12.max_values } = type);
            const merged1 = Object.assign(obj39);
            ({ channelTypes: obj11.channel_types, defaultValues: obj11.default_values } = type);
            return obj38;
          } else if (Server.ComponentType.SECTION === type) {
            const obj40 = { type: null, components: null, accessory: null };
            ({ type: obj10.type, components: components2 } = type);
            let found1;
            if (components2 != null) {
              const mapped1 = components2.map(transformComponent);
              found1 = mapped1.filter(GlobalUtils.isNotNullish);
            }
            obj40.components = found1;
            obj40.accessory = transformComponent(type.accessory);
            return obj40;
          } else if (Server.ComponentType.TEXT_DISPLAY === type) {
            ({ type: obj9.type, content: obj9.content } = type);
            return { type: null, content: null };
          } else if (Server.ComponentType.THUMBNAIL === type) {
            const obj42 = { type: null, media: null, description: null, spoiler: null };
            ({ type: obj7.type, media } = type);
            const size = { url: null, proxy_url: null, loading_state: null, height: null, width: null, placeholder: null, placeholder_version: null, content_type: null, original_content_type: null, flags: null };
            ({ url: obj8.url, proxyUrl: obj8.proxy_url, loadingState: obj8.loading_state, height: obj8.height, width: obj8.width, placeholder: obj8.placeholder, placeholderVersion: obj8.placeholder_version, contentType: obj8.content_type, originalContentType: obj8.original_content_type, flags: obj8.flags } = media);
            obj42.media = size;
            ({ description: obj7.description, spoiler: spoiler2 } = type);
            if (spoiler2 == null) {
              spoiler2 = false;
            }
            obj42.spoiler = spoiler2;
            return obj42;
          } else if (Server.ComponentType.MEDIA_GALLERY === type) {
            const obj43 = { type: null, items: null };
            ({ type: obj6.type, items } = type);
            obj43.items = items.map((description) => {
              const obj = { media: null, description: description.description, spoiler: null };
              const media = description.media;
              obj.media = { url: media.url, proxy_url: media.proxyUrl, loading_state: media.loadingState, height: media.height, width: media.width, placeholder: media.placeholder, placeholder_version: media.placeholderVersion, content_type: media.contentType, original_content_type: media.originalContentType, flags: media.flags };
              let flag = description.spoiler;
              if (flag == null) {
                flag = false;
              }
              obj.spoiler = flag;
              return obj;
            });
            return obj43;
          } else if (Server.ComponentType.FILE === type) {
            const obj44 = { type: null, file: null, name: null, size: null, spoiler: null };
            ({ type: obj4.type, file } = type);
            const size1 = { url: null, proxy_url: null, loading_state: null, height: null, width: null, placeholder: null, placeholder_version: null, content_type: null, original_content_type: null, flags: null };
            ({ url: obj5.url, proxyUrl: obj5.proxy_url, loadingState: obj5.loading_state, height: obj5.height, width: obj5.width, placeholder: obj5.placeholder, placeholderVersion: obj5.placeholder_version, contentType: obj5.content_type, originalContentType: obj5.original_content_type, flags: obj5.flags } = file);
            obj44.file = size1;
            ({ name: obj4.name, size: obj4.size, spoiler } = type);
            if (spoiler == null) {
              spoiler = false;
            }
            obj44.spoiler = spoiler;
            return obj44;
          } else if (Server.ComponentType.SEPARATOR === type) {
            ({ type: obj3.type, divider: obj3.divider, spacing: obj3.spacing } = type);
            return { type: null, divider: null, spacing: null };
          } else if (Server.ComponentType.CONTENT_INVENTORY_ENTRY === type) {
            ({ type: obj2.type, contentInventoryEntry: obj2.content_inventory_entry } = type);
            return { type: null, content_inventory_entry: null };
          } else if (Server.ComponentType.CONTAINER === type) {
            let obj = { type: null, accent_color: null, spoiler: null, components: null };
            ({ type: obj.type, accentColor: obj.accent_color, spoiler: obj.spoiler, components } = type);
            let found2;
            if (components != null) {
              const mapped2 = components.map(transformComponent);
              found2 = mapped2.filter(GlobalUtils.isNotNullish);
            }
            obj.components = found2;
            return obj;
          } else {
            if (Server.ComponentType.TEXT_INPUT !== type) {
              if (Server.ComponentType.LABEL !== type) {
                if (Server.ComponentType.FILE_UPLOAD !== type) {
                  if (Server.ComponentType.RADIO_GROUP !== type) {
                    if (Server.ComponentType.CHECKBOX_GROUP !== type) {
                      if (Server.ComponentType.CHECKBOX !== type) {
                        const CHECKPOINT_CARD = Server.ComponentType.CHECKPOINT_CARD;
                      }
                    }
                  }
                }
              }
            }
            return null;
          }
        }
      }
    }
    const obj47 = { type: type.type };
    const obj48 = { custom_id: null, disabled: null, required: null, placeholder: null, min_values: null, max_values: null };
    ({ customId: obj14.custom_id, disabled: obj14.disabled, required: obj14.required, placeholder: obj14.placeholder, minValues: obj14.min_values, maxValues: obj14.max_values } = type);
    const merged2 = Object.assign(obj48);
    obj47.default_values = type.defaultValues;
    return obj47;
  }
}
function transformEmbed(type) {
  let tmp2 = type.type === MessageEmbedTypes.ARTICLE || type.type === tmp.IMAGE;
  if (tmp2) {
    tmp2 = null == type.images;
  }
  const tmp4 = tmp2 ? type.image : type.thumbnail;
  let image;
  if (!tmp2) {
    image = type.image;
  }
  const obj = { type: type.type, url: type.url, title: type.rawTitle, description: type.rawDescription, color: type.color, timestamp: null, flags: null, content_scan_version: null, fields: null, author: null, provider: null, thumbnail: null, image: null, video: null, footer: null, reference_id: null, components: null };
  const timestamp = type.timestamp;
  let toISOStringResult;
  if (timestamp != null) {
    toISOStringResult = timestamp.toISOString();
  }
  obj.timestamp = toISOStringResult;
  ({ flags: obj.flags, contentScanVersion: obj.content_scan_version, fields } = type);
  if (fields == null) {
    fields = [];
  }
  obj.fields = fields.map((name) => ({ name: name.rawName, value: name.rawValue, inline: name.inline }));
  const author = type.author;
  let tmp7;
  if (null != author) {
    ({ name: obj2.name, url: obj2.url, iconURL: obj2.icon_url, iconProxyURL: obj2.proxy_icon_url } = author);
    tmp7 = { name: null, url: null, icon_url: null, proxy_icon_url: null };
    const obj8 = { name: null, url: null, icon_url: null, proxy_icon_url: null };
  }
  obj.author = tmp7;
  obj.provider = type.provider;
  let tmp8;
  if (null != tmp4) {
    const size = { url: null, proxy_url: null, width: null, height: null, placeholder: null, placeholder_version: null, description: null, flags: null, content_type: null };
    ({ url: obj3.url, proxyURL: obj3.proxy_url, width: obj3.width, height: obj3.height, placeholder: obj3.placeholder, placeholderVersion: obj3.placeholder_version, description: obj3.description, flags: obj3.flags, contentType: obj3.content_type } = tmp4);
    tmp8 = size;
  }
  obj.thumbnail = tmp8;
  let tmp9;
  if (null != image) {
    const size1 = { url: null, proxy_url: null, width: null, height: null, placeholder: null, placeholder_version: null, description: null, flags: null, content_type: null };
    ({ url: obj4.url, proxyURL: obj4.proxy_url, width: obj4.width, height: obj4.height, placeholder: obj4.placeholder, placeholderVersion: obj4.placeholder_version, description: obj4.description, flags: obj4.flags, contentType: obj4.content_type } = image);
    tmp9 = size1;
  }
  obj.image = tmp9;
  const video = type.video;
  let tmp10;
  if (null != video) {
    const size2 = { url: null, proxy_url: null, width: null, height: null, placeholder: null, placeholder_version: null, description: null, flags: null, content_type: null };
    ({ url: obj5.url, proxyURL: obj5.proxy_url, width: obj5.width, height: obj5.height, placeholder: obj5.placeholder, placeholderVersion: obj5.placeholder_version, description: obj5.description, flags: obj5.flags, contentType: obj5.content_type } = video);
    tmp10 = size2;
  }
  obj.video = tmp10;
  const footer = type.footer;
  let tmp11;
  if (null != footer) {
    ({ text: obj6.text, iconURL: obj6.icon_url, iconProxyURL: obj6.proxy_icon_url } = footer);
    tmp11 = { text: null, icon_url: null, proxy_icon_url: null };
    const obj9 = { text: null, icon_url: null, proxy_icon_url: null };
  }
  obj.footer = tmp11;
  ({ referenceId: obj.reference_id, components } = type);
  let found;
  if (components != null) {
    const mapped = components.map(transformComponent);
    found = mapped.filter(GlobalUtils.isNotNullish);
  }
  obj.components = found;
  return obj;
}
function transformInteractionMetadata(triggering_interaction_metadata) {
  const obj = {};
  const merged = Object.assign(triggering_interaction_metadata);
  const tmp4 = transformUserDefault;
  obj.user = tmp4(new UserRecord(triggering_interaction_metadata.user));
  let tmp2ResultResult;
  if ("target_user" in triggering_interaction_metadata) {
    if (null != triggering_interaction_metadata.target_user) {
      const tmp52 = new UserRecord(triggering_interaction_metadata.target_user);
      tmp2ResultResult = transformUserDefault(tmp52);
      const tmp2Result = transformUserDefault;
    }
  }
  obj.target_user = tmp2ResultResult;
  let tmp14;
  if ("triggering_interaction_metadata" in triggering_interaction_metadata) {
    tmp14 = transformInteractionMetadata(triggering_interaction_metadata.triggering_interaction_metadata);
  }
  obj.triggering_interaction_metadata = tmp14;
  return obj;
}
const MessageEmbedTypes = fn(1084).MessageEmbedTypes;
let size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/transformMessage.tsx");

export function transformMessageRecord(id) {
  let obj = { id: id.id, channel_id: id.channel_id, guild_id: null, author: null, content: null, timestamp: null, edited_timestamp: null, tts: null, mention_everyone: null, mentions: null, mention_roles: null, mention_channels: null, attachments: null, embeds: null, components: null, reactions: null, nonce: null, pinned: null, webhook_id: null, type: null, activity: null, application: null, application_id: null, message_reference: null, flags: null, sticker_items: null, poll: null, interaction_metadata: null, role_subscription_data: null, blocked: null };
  const channel = ChannelStore.getChannel(id.channel_id);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj.guild_id = guild_id;
  obj.author = transformUserDefault(id.author);
  ({ content: obj.content, timestamp } = id);
  obj.timestamp = timestamp.toISOString();
  const editedTimestamp = id.editedTimestamp;
  let toISOStringResult;
  if (editedTimestamp != null) {
    toISOStringResult = editedTimestamp.toISOString();
  }
  if (toISOStringResult == null) {
    toISOStringResult = null;
  }
  obj.edited_timestamp = toISOStringResult;
  ({ tts: obj.tts, mentionEveryone: obj.mention_everyone, mentions } = id);
  const mapped = mentions.map((item) => user.getUser(item));
  let found = mapped.filter(GlobalUtils.isNotNullish);
  obj.mentions = found.map((item) => transformUserDefault(item));
  ({ mentionRoles: obj.mention_roles, mentionChannels: obj.mention_channels, attachments: obj.attachments, embeds } = id);
  obj.embeds = embeds.flatMap((images) => {
    images = images.images;
    if (images == null) {
      images = [];
    }
    const found = images.filter((item) => item !== images.image);
    const items = [closure_10(images), ...found.map((image) => transformEmbed({ id: images.id, type: constants.RICH, url: images.url, image }))];
    return items;
  });
  const components = id.components;
  let found1;
  if (components != null) {
    const mapped1 = components.map(transformComponent);
    found1 = mapped1.filter(GlobalUtils.isNotNullish);
  }
  obj.components = found1;
  const reactions1 = id.reactions;
  const found2 = reactions1.filter((count_details) => {
    count_details = count_details.count_details;
    let vote;
    if (count_details != null) {
      vote = count_details.vote;
    }
    return null == vote;
  });
  const mapped2 = found2.map((count) => {
    const obj = {};
    const merged = Object.assign(count);
    obj.count = count.count + count.burst_count;
    return obj;
  });
  obj.reactions = mapped2.map((emoji) => {
    const obj = {};
    const merged = Object.assign(emoji);
    const obj2 = {};
    const merged1 = Object.assign(emoji.emoji);
    let id = emoji.emoji.id;
    if (id == null) {
      id = null;
    }
    obj2.id = id;
    obj.emoji = obj2;
    return obj;
  });
  ({ nonce: obj.nonce, pinned: obj.pinned, webhookId: obj.webhook_id, type: obj.type, activity: obj.activity, application: obj.application, applicationId } = id);
  obj.application_id = applicationId;
  ({ messageReference: obj.message_reference, flags: obj.flags } = id);
  let stickerItems;
  if (id.stickerItems.length > 0) {
    stickerItems = id.stickerItems;
  }
  obj.sticker_items = stickerItems;
  ({ poll, reactions } = id);
  let tmp10;
  if (null != poll) {
    const found3 = reactions.filter((count_details) => {
      count_details = count_details.count_details;
      let vote;
      if (count_details != null) {
        vote = count_details.vote;
      }
      return null != vote;
    });
    const obj4 = { question: null, answers: null, expiry: null, allow_multiselect: null, layout_type: null, results: null };
    ({ question: obj3.question, answers: obj3.answers, expiry } = poll);
    obj4.expiry = expiry.toISOString();
    ({ allow_multiselect: obj3.allow_multiselect, layout_type: obj3.layout_type } = poll);
    if (null != poll.results) {
      const results = poll.results;
      let flag;
      if (results != null) {
        flag = results.is_finalized;
      }
      if (flag == null) {
        flag = false;
      }
      const obj5 = {
        is_finalized: flag,
        answer_counts: found3.map((emoji) => {
              const obj = { id: Number(emoji.emoji.id), count: null, me_voted: null };
              const count_details = emoji.count_details;
              let num;
              if (count_details != null) {
                num = count_details.vote;
              }
              if (num == null) {
                num = 0;
              }
              obj.count = num;
              let flag = emoji.me_vote;
              if (flag == null) {
                flag = false;
              }
              obj.me_voted = flag;
              return obj;
            })
      };
      const tmp11 = obj5;
    }
    obj4.results = tmp11;
    tmp10 = obj4;
  }
  obj.poll = tmp10;
  let tmp12;
  if (null != id.interactionMetadata) {
    const interactionMetadata = id.interactionMetadata;
    const obj6 = {};
    let merged = Object.assign(interactionMetadata);
    const tmp20 = new UserRecord(interactionMetadata.user);
    obj6.user = transformUserDefault(tmp20);
    let tmp3Result1Result;
    if ("target_user" in interactionMetadata) {
      if (null != interactionMetadata.target_user) {
        const tmp174 = new UserRecord(interactionMetadata.target_user);
        tmp3Result1Result = transformUserDefault(tmp174);
        const tmp3Result5 = transformUserDefault;
      }
    }
    obj6.target_user = tmp3Result1Result;
    let tmp28;
    if ("triggering_interaction_metadata" in interactionMetadata) {
      const triggering_interaction_metadata = interactionMetadata.triggering_interaction_metadata;
      const obj7 = {};
      const merged1 = Object.assign(triggering_interaction_metadata);
      const tmp175 = new UserRecord(triggering_interaction_metadata.user);
      obj7.user = transformUserDefault(tmp175);
      let tmp3Result3Result;
      if ("target_user" in triggering_interaction_metadata) {
        if (null != triggering_interaction_metadata.target_user) {
          const tmp176 = new UserRecord(triggering_interaction_metadata.target_user);
          tmp3Result3Result = transformUserDefault(tmp176);
          const tmp3Result7 = transformUserDefault;
        }
      }
      obj7.target_user = tmp3Result3Result;
      let tmp43;
      if ("triggering_interaction_metadata" in triggering_interaction_metadata) {
        tmp43 = transformInteractionMetadata(triggering_interaction_metadata.triggering_interaction_metadata);
      }
      obj7.triggering_interaction_metadata = tmp43;
      tmp28 = obj7;
      const tmp3Result6 = transformUserDefault;
    }
    obj6.triggering_interaction_metadata = tmp28;
    tmp12 = obj6;
    const tmp3Result = transformUserDefault;
  }
  obj.interaction_metadata = tmp12;
  ({ roleSubscriptionData: obj.role_subscription_data, blocked: obj.blocked, channel_id, content, author } = id);
  if (null != content) {
    const obj8 = { channelId: channel_id };
    const tmp3Result8 = MarkupUtilsDefault;
    let mapped3 = MarkupUtilsDefault.parseToAST(content, true, obj8).map(recurseReplaceContentTree);
    const parseToASTResult = MarkupUtilsDefault.parseToAST(content, true, obj8);
  } else {
    mapped3 = [];
  }
  if (null != channel_id) {
    const channel1 = ChannelStore.getChannel(channel_id);
  }
  let userAuthor;
  if (null != author) {
    userAuthor = useMessageAuthor.getUserAuthor(author, channel1);
    const tmp6Result = useMessageAuthor;
  }
  let tmp48;
  if (mapped3.length) {
    tmp48 = mapped3;
  }
  const obj9 = { content_parsed: tmp48, nick: null, author_color: null };
  let nick;
  if (userAuthor != null) {
    nick = userAuthor.nick;
  }
  obj9.nick = nick;
  let colorString;
  if (userAuthor != null) {
    colorString = userAuthor.colorString;
  }
  obj9.author_color = colorString;
  const merged2 = Object.assign(obj9);
  return obj;
}
export function transformServerMessage(message) {
  let tmp;
  if (null != message.author) {
    tmp = new UserRecord(message.author);
  }
  let obj = { id: message.id, channel_id: message.channel_id, guild_id: null, author: null, content: null, timestamp: null, edited_timestamp: null, tts: null, mention_everyone: null, mentions: null, mention_roles: null, mention_channels: null, attachments: null, embeds: null, components: null, reactions: null, nonce: null, pinned: null, webhook_id: null, type: null, activity: null, application: null, application_id: null, message_reference: null, flags: null, sticker_items: null, poll: null, interaction_metadata: null, role_subscription_data: null, blocked: null };
  let tmp5;
  if (null != message.channel_id) {
    const channel = ChannelStore.getChannel(message.channel_id);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    tmp5 = guild_id;
  }
  obj.guild_id = tmp5;
  let tmp9;
  if (null != tmp) {
    tmp9 = transformUserDefault(tmp);
  }
  obj.author = tmp9;
  ({ content: obj.content, timestamp: obj.timestamp, edited_timestamp: obj.edited_timestamp, tts: obj.tts, mention_everyone: obj.mention_everyone, mentions } = message);
  let mapped;
  if (mentions != null) {
    mapped = mentions.map((item) => {
      const tmp = transformUserDefault;
      return tmp(new UserRecord(item));
    });
  }
  obj.mentions = mapped;
  ({ mention_roles: obj.mention_roles, mention_channels: obj.mention_channels, attachments: obj.attachments, embeds: obj.embeds, components: obj.components } = message);
  let mapped1;
  if (null != message.reactions) {
    const reactions = message.reactions;
    mapped1 = reactions.map((emoji) => {
      const obj = {};
      const merged = Object.assign(emoji);
      const obj2 = {};
      const merged1 = Object.assign(emoji.emoji);
      let id = emoji.emoji.id;
      if (id == null) {
        id = null;
      }
      obj2.id = id;
      obj.emoji = obj2;
      return obj;
    });
  }
  obj.reactions = mapped1;
  ({ nonce: obj.nonce, pinned: obj.pinned, webhook_id: obj.webhook_id, type: obj.type, activity: obj.activity, application: obj.application, application_id: obj.application_id, message_reference: obj.message_reference, flags: obj.flags, sticker_items: obj.sticker_items, poll: obj.poll } = message);
  let tmp14;
  if (null != message.interaction_metadata) {
    const interaction_metadata = message.interaction_metadata;
    let obj2 = {};
    let merged = Object.assign(interaction_metadata);
    const tmp24 = new UserRecord(interaction_metadata.user);
    obj2.user = transformUserDefault(tmp24);
    let tmp18ResultResult;
    if ("target_user" in interaction_metadata) {
      if (null != interaction_metadata.target_user) {
        const tmp214 = new UserRecord(interaction_metadata.target_user);
        tmp18ResultResult = transformUserDefault(tmp214);
        const tmp18Result = transformUserDefault;
      }
    }
    obj2.target_user = tmp18ResultResult;
    let tmp32;
    if ("triggering_interaction_metadata" in interaction_metadata) {
      const triggering_interaction_metadata = interaction_metadata.triggering_interaction_metadata;
      const obj3 = {};
      let merged1 = Object.assign(triggering_interaction_metadata);
      const tmp215 = new UserRecord(triggering_interaction_metadata.user);
      obj3.user = transformUserDefault(tmp215);
      let tmp18Result2Result;
      if ("target_user" in triggering_interaction_metadata) {
        if (null != triggering_interaction_metadata.target_user) {
          const tmp216 = new UserRecord(triggering_interaction_metadata.target_user);
          tmp18Result2Result = transformUserDefault(tmp216);
          const tmp18Result4 = transformUserDefault;
        }
      }
      obj3.target_user = tmp18Result2Result;
      let tmp47;
      if ("triggering_interaction_metadata" in triggering_interaction_metadata) {
        tmp47 = transformInteractionMetadata(triggering_interaction_metadata.triggering_interaction_metadata);
      }
      obj3.triggering_interaction_metadata = tmp47;
      tmp32 = obj3;
      const tmp18Result3 = transformUserDefault;
    }
    obj2.triggering_interaction_metadata = tmp32;
    tmp14 = obj2;
  }
  obj.interaction_metadata = tmp14;
  obj.role_subscription_data = message.role_subscription_data;
  let isBlockedForMessageResult;
  if (null != tmp) {
    isBlockedForMessageResult = RelationshipStore.isBlockedForMessage(message);
  }
  obj.blocked = isBlockedForMessageResult;
  ({ channel_id, content } = message);
  if (null != content) {
    const obj5 = { channelId: channel_id };
    let mapped2 = MarkupUtilsDefault.parseToAST(content, true, obj5).map(recurseReplaceContentTree);
    const parseToASTResult = MarkupUtilsDefault.parseToAST(content, true, obj5);
  } else {
    mapped2 = [];
  }
  if (null != channel_id) {
    const channel1 = ChannelStore.getChannel(channel_id);
  }
  let userAuthor;
  if (null != tmp) {
    userAuthor = useMessageAuthor.getUserAuthor(tmp, channel1);
  }
  let tmp59;
  if (mapped2.length) {
    tmp59 = mapped2;
  }
  const obj7 = { content_parsed: tmp59, nick: null, author_color: null };
  let nick;
  if (userAuthor != null) {
    nick = userAuthor.nick;
  }
  obj7.nick = nick;
  let colorString;
  if (userAuthor != null) {
    colorString = userAuthor.colorString;
  }
  obj7.author_color = colorString;
  const merged2 = Object.assign(obj7);
  return obj;
}