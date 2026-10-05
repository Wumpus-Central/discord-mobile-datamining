// === Module 6795: ObscuredMediaUtils ===

// Module 6795 (ObscuredMediaUtils)
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import HarmTypeConfiguration from "HarmTypeConfiguration" /* 6798 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 6800 */;
import isForwardMessage from "isForwardMessage" /* 6805 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import DevSettingsStore from "DevSettingsStore" /* 4889 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MessageStore from "MessageStore" /* 5110 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 6796 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const isForwardMessageDefault = isForwardMessage;
let _require;

const f93285 = (isEligible) => {
  let tmp = null == isEligible.isEligible;
  if (!tmp) {
    isEligible = isEligible.isEligible;
    let isEligibleResult;
    if (isEligible != null) {
      isEligibleResult = isEligible();
    }
    tmp = isEligibleResult;
  }
  return tmp;
};
const f93286 = (harmType) => {
  const tmp = harmType.getUserSettingsWithDefaults()[GUILD];
  let hasItem = null != tmp;
  if (hasItem) {
    const items = [preloaded_user_settings.ExplicitContentRedaction.BLOCK, preloaded_user_settings.ExplicitContentRedaction.BLUR];
    hasItem = items.includes(tmp);
  }
  harmType = null;
  if (hasItem) {
    harmType = harmType.harmType;
  }
  return harmType;
};
const f93292 = (item) => EXPLICIT(closure_1_2[7]).CONTENT_SCAN_TYPE_REGISTRY[item].obscureReason;
function getEligibleHarmTypesConfigsForContext() {
  const values = Object.values(HarmTypeConfiguration.CONTENT_SCAN_TYPE_REGISTRY);
  return values.filter(f93285);
}
function getEnabledHarmTypesForMessage(message) {
  const channelId = getChannelIdAndAuthorIdFromMessage(message).channelId;
  getChannelIdAndAuthorIdFromMessage(message);
  if (null != channelId) {
    let NONE;
    if (null != message) {
      NONE = getEnabledHarmTypesForChannelAndAuthorId(channelId, tmp2);
    }
    return NONE;
  }
  NONE = HarmTypeConfiguration.ContentHarmTypeBitMask.NONE;
}
function getEnabledHarmTypesForChannelAndAuthorId(channelId, id) {
  let closure_0;
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    if (id !== currentUser.id) {
      let NONE;
      const items = [ChannelStore, RelationshipStore];
      const tmp10 = getChannelTypeById(channelId, id, items);
      if (null == tmp10) {
        NONE = require("HarmTypeConfiguration").ContentHarmTypeBitMask.NONE;
      } else {
        _require = tmp10;
        const _Object = Object;
        const values = Object.values(require("HarmTypeConfiguration").CONTENT_SCAN_TYPE_REGISTRY);
        const found = values.filter(f93285);
        if (null == tmp10) {
          NONE = tmp12(6798).ContentHarmTypeBitMask.NONE;
        } else {
          const mapped = found.map(f93286);
          NONE = contentHarmTypesToFlags(mapped.filter(tmp12(1375).isNotNullish));
        }
      }
      return NONE;
    }
  }
  return require("HarmTypeConfiguration").ContentHarmTypeBitMask.NONE;
}
function messageHasObscurableMediaForBitmask(firstMessage, EXPLICIT) {
  _require = EXPLICIT;
  if (EXPLICIT !== require("HarmTypeConfiguration").ContentHarmTypeBitMask.NONE) {
    if (null != firstMessage) {
      const attachments = firstMessage.attachments;
      let someResult;
      if (attachments != null) {
        someResult = attachments.some((media) => {
          let items;
          ({ type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media });
          if (EXPLICIT === HarmTypeConfiguration.ContentHarmTypeBitMask.NONE) {
            items = [];
          } else {
            const arr = getHarmTypeFromBitmask(EXPLICIT);
            if (0 === arr.length) {
              items = [];
            } else {
              const found = arr.filter((item) => closure_2_17(item, obj));
              items = found.map(f93292);
            }
          }
          return items.length > 0;
        });
      }
      if (someResult) {
        return true;
      } else {
        const embeds = firstMessage.embeds;
        let someResult1;
        if (embeds != null) {
          someResult1 = embeds.some((media) => {
            let items;
            const obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media };
            if (EXPLICIT === HarmTypeConfiguration.ContentHarmTypeBitMask.NONE) {
              items = [];
            } else {
              const arr = getHarmTypeFromBitmask(EXPLICIT);
              if (0 === arr.length) {
                items = [];
              } else {
                const found = arr.filter((item) => closure_2_17(item, obj));
                items = found.map(f93292);
              }
            }
            return items.length > 0;
          });
        }
        if (someResult1) {
          return true;
        } else {
          let messageSnapshots;
          if ("messageSnapshots" in firstMessage) {
            messageSnapshots = firstMessage.messageSnapshots;
          } else {
            messageSnapshots = null;
            if ("message_snapshots" in firstMessage) {
              messageSnapshots = firstMessage.message_snapshots;
            }
          }
          if (null != messageSnapshots) {
            if (0 !== messageSnapshots.length) {
              for (const item10026 of messageSnapshots) {
                if (messageHasObscurableMediaForBitmask(item10026.message, EXPLICIT)) {
                  obj.return();
                  let flag = true;
                  return true;
                }
              }
              return false;
            }
          }
          return false;
        }
      }
    }
  }
  return false;
}
function findComponentMedia(components) {
  const f93289 = (type) => {
    type = type.type;
    if (require("Server").ComponentType.MEDIA_GALLERY === type) {
      const items = type.items;
      return items.map((media) => media.media);
    } else if (require("Server").ComponentType.THUMBNAIL === type) {
      return type.media;
    } else if (require("Server").ComponentType.FILE === type) {
      return type.file;
    } else if (require("Server").ComponentType.SECTION === type) {
      const components2 = type.components;
      const items1 = [];
      const accessory = type.accessory;
      const _Array = Array;
      let obj = accessory;
      const arraySpreadResult = HermesBuiltin.arraySpread(items1, components2.flatMap(findComponentMedia), 0);
      if (!Array.isArray(accessory)) {
        const items2 = [accessory];
        obj = items2;
      }
      const flatMapResult = obj.flatMap(f93289);
      HermesBuiltin.arraySpread(items1, flatMapResult.map(f93290), arraySpreadResult);
      return items1;
    } else {
      if (require("Server").ComponentType.ACTION_ROW !== type) {
        if (require("Server").ComponentType.CONTAINER !== type) {
          return [];
        }
      }
      const components = type.components;
      return components.flatMap(findComponentMedia);
    }
  };
  const f93290 = (item) => {
    let toUnfurledMediaItemResult = item;
    if ("proxy_url" in item) {
      const obj = closure_1_0(closure_1_2[11]);
      toUnfurledMediaItemResult = obj.toUnfurledMediaItem(item);
    }
    return toUnfurledMediaItemResult;
  };
  let obj = components;
  if (!Array.isArray(components)) {
    let items = [components];
    obj = items;
  }
  let flatMapResult = obj.flatMap(f93289);
  return flatMapResult.map(f93290);
}
function findMessageComponentMedia(components) {
  const items = [];
  if (null != components.components) {
    const push = items.push;
    const items1 = [];
    HermesBuiltin.arraySpread(items1, findComponentMedia(components.components), 0);
    HermesBuiltin.apply(push, items1, items);
  }
  if (null != components.embeds) {
    const embeds = components.embeds;
    for (const item10023 of embeds) {
      if (null != item10023.components) {
        let push2 = items.push;
        let items2 = [];
        let arraySpreadResult2 = HermesBuiltin.arraySpread(items2, findComponentMedia(tmp11.components), 0);
        let applyResult1 = HermesBuiltin.apply(push2, items2, items);
      }
      continue;
    }
  }
  return items;
}
function isMediaScanPending(type, NONE) {
  let media;
  const tmp = media;
  if (NONE === media(6798).ContentHarmTypeBitMask.NONE) {
    return false;
  } else if (DevSettingsStore.get("explicit_media_redaction_ignore_pending_scan")) {
    return false;
  } else {
    const arr = getHarmTypeFromBitmask(NONE);
    if (0 === arr.length) {
      return false;
    } else {
      type = type.type;
      if (tmp(6800).ObscuredMediaTypes.Embed === type) {
        const media3 = type.media;
        let flag3 = false;
        if (0 !== arr.length) {
          flag3 = false;
          if (null != media3) {
            flag3 = false;
            if (0 !== arr.filter((item) => {
              const obj = { type: media(dependencyMap[9]).ObscuredMediaTypes.Embed, media: media3 };
              return !isMediaFlaggedForHarmType(item, obj);
            }).length) {
              if ("video" in media3) {
                if (null != media3.video) {
                  const video = media3.video;
                  let width;
                  if (video != null) {
                    width = video.width;
                  }
                  if (0 === width) {
                    const video2 = media3.video;
                    let height;
                    if (video2 != null) {
                      height = video2.height;
                    }
                    flag3 = false;
                  }
                }
              }
              if ("thumbnail" in media3) {
                if (null != media3.thumbnail) {
                  const thumbnail = media3.thumbnail;
                  let width1;
                  if (thumbnail != null) {
                    width1 = thumbnail.width;
                  }
                  if (0 === width1) {
                    const thumbnail2 = media3.thumbnail;
                    let height1;
                    if (thumbnail2 != null) {
                      height1 = thumbnail2.height;
                    }
                    flag3 = false;
                  }
                }
              }
              if ("image" in media3) {
                if (null != media3.image) {
                  const image = media3.image;
                  let width2;
                  if (image != null) {
                    width2 = image.width;
                  }
                  if (0 === width2) {
                    const image2 = media3.image;
                    let height2;
                    if (image2 != null) {
                      height2 = image2.height;
                    }
                    flag3 = false;
                  }
                }
              }
              if (!("images" in media3)) {
                let content_scan_version;
                if (null != media3.content_scan_version) {
                  content_scan_version = media3.content_scan_version;
                } else if (null != media3.contentScanVersion) {
                  content_scan_version = media3.contentScanVersion;
                } else {
                  content_scan_version = null;
                  if (null != media3.contentScanVersion) {
                    content_scan_version = media3.contentScanVersion;
                  }
                }
                let tmp28 = -1 !== content_scan_version;
                if (tmp28) {
                  if (!arr.includes(tmp(6798).ContentHarmType.GORE)) {
                    let tmp29;
                    if (!arr.includes(tmp(6798).ContentHarmType.SELF_HARM)) {
                      tmp29 = null == content_scan_version;
                    }
                    tmp28 = tmp29;
                  }
                  tmp29 = null == content_scan_version || content_scan_version < tmp27;
                }
                flag3 = tmp28;
              } else {
                const images = media3.images;
                if (images != null) {
                  images.some((width) => null != width && 0 === width.width && 0 === width.height);
                }
                flag3 = false;
              }
            }
          }
        }
        return flag3;
      } else if (tmp(6800).ObscuredMediaTypes.Attachment === type) {
        const media2 = type.media;
        let tmp10 = 0 !== arr.length;
        if (tmp10) {
          let tmp11 = 0 !== arr.filter((item) => {
            const obj = { type: media(dependencyMap[9]).ObscuredMediaTypes.Attachment, media: media2 };
            return !isMediaFlaggedForHarmType(item, obj);
          }).length;
          if (tmp11) {
            let contentScanVersion = media2.content_scan_version;
            if (contentScanVersion == null) {
              contentScanVersion = media2.contentScanVersion;
            }
            let tmp15 = -1 !== contentScanVersion;
            if (tmp15) {
              if (!arr.includes(tmp(6798).ContentHarmType.GORE)) {
                let tmp16;
                if (!arr.includes(tmp(6798).ContentHarmType.SELF_HARM)) {
                  tmp16 = null == contentScanVersion;
                }
                tmp15 = tmp16;
              }
              tmp16 = null == contentScanVersion || contentScanVersion < tmp14;
            }
            tmp11 = tmp15;
          }
          tmp10 = tmp11;
        }
        return tmp10;
      } else if (tmp(6800).ObscuredMediaTypes.GenericMedia === type) {
        media = type.media;
        let flag2 = false;
        if (0 !== arr.length) {
          flag2 = false;
          if (0 !== arr.filter((item) => {
            const obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media };
            return !isMediaFlaggedForHarmType(item, obj);
          }).length) {
            const contentScanMetadata = media.contentScanMetadata;
            let version;
            if (contentScanMetadata != null) {
              version = contentScanMetadata.version;
            }
            let tmp7 = -1 !== version;
            if (tmp7) {
              if (!arr.includes(tmp(6798).ContentHarmType.GORE)) {
                let tmp8;
                if (!arr.includes(tmp(6798).ContentHarmType.SELF_HARM)) {
                  tmp8 = null == version;
                }
                tmp7 = tmp8;
              }
              tmp8 = null == version || version < tmp6;
            }
            flag2 = tmp7;
          }
        }
        return flag2;
      } else {
        return false;
      }
    }
  }
}
function isMediaFlaggedForHarmType(EXPLICIT, type) {
  if (null == EXPLICIT) {
    return false;
  } else {
    const tmp8 = HarmTypeConfiguration.CONTENT_SCAN_TYPE_REGISTRY[EXPLICIT];
    if (null != tmp8.devSettingKey) {
      if (DevSettingsStore.get(tmp8.devSettingKey)) {
        return true;
      }
    }
    type = type.type;
    if (ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed === type) {
      let num3 = type.media.flags;
      const hasFlag3 = FlagUtils.hasFlag;
      FlagUtils;
      if (num3 == null) {
        num3 = 0;
      }
      return hasFlag3(num3, tmp8.embedFlag);
    } else if (ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment === type) {
      let num2 = type.media.flags;
      const hasFlag2 = FlagUtils.hasFlag;
      FlagUtils;
      if (num2 == null) {
        num2 = 0;
      }
      return hasFlag2(num2, tmp8.attachmentFlag);
    } else if (ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia === type) {
      const contentScanMetadata = type.media.contentScanMetadata;
      let num;
      const hasFlag = FlagUtils.hasFlag;
      FlagUtils;
      if (contentScanMetadata != null) {
        num = contentScanMetadata.flags;
      }
      if (num == null) {
        num = 0;
      }
      return hasFlag(num, tmp8.genericMediaFlag);
    } else {
      return false;
    }
  }
}
function contentHarmTypesToFlags(arr6) {
  let NONE = HarmTypeConfiguration.ContentHarmTypeBitMask.NONE;
  const iter = arr6[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if (HarmTypeConfiguration.ContentHarmType.EXPLICIT === nextResult) {
      NONE = NONE | HarmTypeConfiguration.ContentHarmTypeBitMask.EXPLICIT;
    } else if (HarmTypeConfiguration.ContentHarmType.GORE === nextResult) {
      NONE = NONE | HarmTypeConfiguration.ContentHarmTypeBitMask.GORE;
    } else if (HarmTypeConfiguration.ContentHarmType.SELF_HARM === nextResult) {
      NONE = NONE | HarmTypeConfiguration.ContentHarmTypeBitMask.SELF_HARM;
    }
    continue;
  }
  return NONE;
}
function getHarmTypeFromBitmask(enabledHarmTypesForMessage) {
  if (enabledHarmTypesForMessage === HarmTypeConfiguration.ContentHarmTypeBitMask.NONE) {
    return [];
  } else {
    const items = [];
    const tmp2 = getEligibleHarmTypesConfigsForContext();
    const iter = tmp2[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if ((enabledHarmTypesForMessage & nextResult.bitmask) > 0) {
        let arr = items.push(tmp7.harmType);
      }
      continue;
    }
    return items;
  }
}
function getChannelTypeById(channelId, id) {
  let items;
  let obj;
  let obj2;
  let tmp = items;
  if (items === undefined) {
    items = [ExplicitMediaStore, ];
    items[1] = globalThis.p;
    tmp = items;
  }
  [obj, obj2] = tmp;
  _slicedToArray(tmp, 2);
  const channel = obj.getChannel(channelId);
  const currentUser = UserStore.getCurrentUser();
  let tmp6 = null;
  if (null != currentUser) {
    tmp6 = null;
    if (id !== currentUser.id) {
      tmp6 = null;
      if (null != channel) {
        let GUILD;
        if (!channel.isDM()) {
          if (!channel.isGroupDM()) {
            GUILD = ExplicitMediaRedactionModels.ContentHarmTypeChannel.GUILD;
          }
          tmp6 = GUILD;
        }
        if (null != id) {
          let NON_FRIEND_DM;
          const friendIDs = obj2.getFriendIDs();
          if (friendIDs.includes(id)) {
            NON_FRIEND_DM = ExplicitMediaRedactionModels.ContentHarmTypeChannel.FRIEND_DM;
          }
          GUILD = NON_FRIEND_DM;
        }
        NON_FRIEND_DM = ExplicitMediaRedactionModels.ContentHarmTypeChannel.NON_FRIEND_DM;
      }
    }
  }
  return tmp6;
}
function getChannelIdAndAuthorIdFromMessage(message) {
  if (null == message) {
    return { channelId: null, authorId: null };
  } else {
    let items2;
    let author_id;
    let channel_id = null;
    if ("channel_id" in message) {
      channel_id = message.channel_id;
    }
    if ("messageReference" in message) {
      const items = [message.messageReference, isForwardMessageDefault(message)];
      items2 = items;
    } else if ("message_reference" in message) {
      const items1 = [message.message_reference, ];
      const obj = isForwardMessage;
      items1[1] = obj.isForwardServerMessage(message);
      items2 = items1;
    } else {
      items2 = [];
    }
    const tmp7 = _slicedToArray(items2, 2);
    const first = tmp7[0];
    if (null != first) {
      if (tmp7[1]) {
        if (null == first.message_id) {
          return { channelId: channel_id, authorId: null };
        } else {
          message = MessageStore.getMessage(first.channel_id, first.message_id);
          author_id = null;
          if (null != message) {
            const author2 = message.author;
            let id;
            if (author2 != null) {
              id = author2.id;
            }
            author_id = id;
          }
        }
      }
      return { channelId: channel_id, authorId: author_id };
    }
    if ("author" in message) {
      const author = message.author;
      let id1;
      if (author != null) {
        id1 = author.id;
      }
      author_id = id1;
    } else {
      author_id = null;
      if ("author_id" in message) {
        author_id = message.author_id;
      }
    }
  }
}
const result = size.fileFinishedImporting("modules/explicit_media_redaction/ObscuredMediaUtils.tsx");
function hasUnscannedMedia(message, enabledHarmTypesForMessage) {
  let closure_0;
  let tmp = enabledHarmTypesForMessage;
  if (enabledHarmTypesForMessage == null) {
    tmp = getEnabledHarmTypesForMessage(message);
  }
  _require = tmp;
  if (tmp === require("HarmTypeConfiguration").ContentHarmTypeBitMask.NONE) {
    return false;
  } else {
    const attachments = message.attachments;
    let someResult;
    if (attachments != null) {
      someResult = attachments.some((media) => {
        const obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media };
        return isMediaScanPending(obj, closure_0);
      });
    }
    if (someResult) {
      return true;
    } else {
      const embeds = message.embeds;
      let someResult1;
      if (embeds != null) {
        someResult1 = embeds.some((media) => {
          const obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media };
          return isMediaScanPending(obj, closure_0);
        });
      }
      if (someResult1) {
        return true;
      } else {
        let obj = findMessageComponentMedia(message);
        if (obj.some((media) => {
          const obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media };
          return isMediaScanPending(obj, closure_0);
        })) {
          return true;
        } else {
          let messageSnapshots;
          if ("messageSnapshots" in message) {
            messageSnapshots = message.messageSnapshots;
          } else {
            messageSnapshots = null;
            if ("message_snapshots" in message) {
              messageSnapshots = message.message_snapshots;
            }
          }
          if (null != messageSnapshots) {
            if (0 !== messageSnapshots.length) {
              for (const item10035 of messageSnapshots) {
                if (hasUnscannedMedia(item10035.message, tmp)) {
                  obj2.return();
                  let flag = true;
                  return true;
                }
              }
              return false;
            }
          }
          return false;
        }
      }
    }
  }
}

export { getEligibleHarmTypesConfigsForContext };
export { getEnabledHarmTypesForMessage };
export { getEnabledHarmTypesForChannelAndAuthorId };
export const getEnabledHarmTypesBitmaskForChannelType = function getEnabledHarmTypesBitmaskForChannelType(GUILD) {
  let NONE;
  _require = GUILD;
  let tmp = _require;
  const values = Object.values(require("HarmTypeConfiguration").CONTENT_SCAN_TYPE_REGISTRY);
  const found = values.filter(f93285);
  if (null == GUILD) {
    NONE = tmp(6798).ContentHarmTypeBitMask.NONE;
  } else {
    const mapped = found.map(f93286);
    NONE = contentHarmTypesToFlags(mapped.filter(tmp(1375).isNotNullish));
  }
  return NONE;
};
export const messageHasObscurableMedia = function messageHasObscurableMedia(message) {
  const channelId = getChannelIdAndAuthorIdFromMessage(message).channelId;
  getChannelIdAndAuthorIdFromMessage(message);
  if (null != channelId) {
    let NONE;
    if (null != message) {
      NONE = getEnabledHarmTypesForChannelAndAuthorId(channelId, tmp3);
    }
    return messageHasObscurableMediaForBitmask(message, NONE);
  }
  NONE = HarmTypeConfiguration.ContentHarmTypeBitMask.NONE;
};
export { messageHasObscurableMediaForBitmask };
export const failOverComponentMedia = function failOverComponentMedia(components) {
  const tmp = findComponentMedia(components);
  const iter = tmp[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let contentScanMetadata = nextResult.contentScanMetadata;
    let num;
    if (contentScanMetadata != null) {
      num = contentScanMetadata.flags;
    }
    if (num == null) {
      num = 0;
    }
    let obj = { version: -1, flags: num };
    nextResult.contentScanMetadata = obj;
    continue;
  }
};
export { hasUnscannedMedia };
export const isEligibleForScanning = function isEligibleForScanning(components) {
  const obj = findMessageComponentMedia(components);
  return !obj.some((loadingState) => loadingState.loadingState === require("Server").UnfurledMediaLoadingState.LOADING);
};
export const getUnscannedMediaIds = function getUnscannedMediaIds(message) {
  let NONE;
  let found3;
  const channelId = getChannelIdAndAuthorIdFromMessage(message).channelId;
  getChannelIdAndAuthorIdFromMessage(message);
  if (null != channelId) {
    if (null != message) {
      NONE = getEnabledHarmTypesForChannelAndAuthorId(channelId, tmp2);
    }
    if (NONE === NONE(6798).ContentHarmTypeBitMask.NONE) {
      return { attachmentIds: [], embedIds: [] };
    } else {
      const attachments = message.attachments;
      let found;
      if (attachments != null) {
        found = attachments.filter((media) => {
          const obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media };
          return isMediaScanPending(obj, NONE);
        });
      }
      const embeds = message.embeds;
      let found1;
      if (embeds != null) {
        found1 = embeds.filter((media) => {
          const obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media };
          return isMediaScanPending(obj, NONE);
        });
      }
      let found2;
      if (found != null) {
        const mapped = found.map((id) => id.id);
        const _Boolean = Boolean;
        found2 = mapped.filter(Boolean);
      }
      if (found2 == null) {
        found2 = [];
      }
      let obj = { attachmentIds: found2, embedIds: found3 };
      found3 = undefined;
      if (found1 != null) {
        const mapped1 = found1.map((item, index) => "embed_" + index);
        const _Boolean2 = Boolean;
        found3 = mapped1.filter(Boolean);
      }
      if (found3 == null) {
        found3 = [];
      }
      return obj;
    }
  }
  NONE = NONE(6798).ContentHarmTypeBitMask.NONE;
};
export const getMediaObscuredReasonFromBitmask = function getMediaObscuredReasonFromBitmask(arg0, enabledContentHarmTypeFlags) {
  let closure_0;
  _require = arg0;
  if (enabledContentHarmTypeFlags === require("HarmTypeConfiguration").ContentHarmTypeBitMask.NONE) {
    return [];
  } else {
    let items;
    const arr = getHarmTypeFromBitmask(enabledContentHarmTypeFlags);
    if (0 === arr.length) {
      items = [];
    } else {
      const found = arr.filter((item) => closure_2_17(item, obj));
      items = found.map(f93292);
    }
    return items;
  }
};
export const isMediaObscuredForHarmTypes = function isMediaObscuredForHarmTypes(arg0, enabledHarmTypesForMessage) {
  let closure_0;
  _require = arg0;
  if (enabledHarmTypesForMessage === require("HarmTypeConfiguration").ContentHarmTypeBitMask.NONE) {
    return false;
  } else {
    const arr = getHarmTypeFromBitmask(enabledHarmTypesForMessage);
    const tmp2 = 0 !== arr.length && arr.filter((item) => isMediaFlaggedForHarmType(item, closure_0)).length > 0;
    return tmp2;
  }
};
export { isMediaScanPending };
export { isMediaFlaggedForHarmType };
export { contentHarmTypesToFlags };
export { getHarmTypeFromBitmask };
export { getChannelTypeById };
export const shouldRedactForSettingValue = function shouldRedactForSettingValue(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    const items = [preloaded_user_settings.ExplicitContentRedaction.BLOCK, preloaded_user_settings.ExplicitContentRedaction.BLUR];
    hasItem = items.includes(arg0);
  }
  return hasItem;
};
export { getChannelIdAndAuthorIdFromMessage };