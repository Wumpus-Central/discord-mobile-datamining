// discord_app/modules/explicit_media_redaction/ObscuredMediaUtils.tsx
import create from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import hasFlag from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import ContentHarmType from "HarmTypeConfiguration.tsx";
import ContentHarmTypeChannel from "ExplicitMediaRedactionModels.tsx";
import isForwardMessage from "../forwarding/isForwardMessage.tsx";
import isForwardMessageDefault from "../forwarding/isForwardMessage.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import getUserAgnosticState from "../devtools/dev_settings/DevSettingsStore.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import reinjectEphemerals from "../../stores/MessageStore.tsx";
import markAllUserIdListsStale from "../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import getFpMessageInfo from "ExplicitMediaStore.tsx";

require = fn;
function getEligibleHarmTypesConfigsForContext() {
  const values = Object.values(ContentHarmType.CONTENT_SCAN_TYPE_REGISTRY);
  return values.filter((item, index) => {
    let tmp = null == item.isEligible;
    if (!tmp) {
      const isEligible = item.isEligible;
      let isEligibleResult;
      if (isEligible != null) {
        isEligibleResult = isEligible();
      }
      tmp = isEligibleResult;
    }
    return tmp;
  });
}
function getEnabledHarmTypesForMessage(message) {
  const channelId = getChannelIdAndAuthorIdFromMessage(message).channelId;
  if (null != channelId) {
    if (null != message) {
      let NONE = getEnabledHarmTypesForChannelAndAuthorId(channelId, tmp2);
    }
    return NONE;
  }
  NONE = ContentHarmType.ContentHarmTypeBitMask.NONE;
  const tmp = getChannelIdAndAuthorIdFromMessage(message);
}
function getEnabledHarmTypesForChannelAndAuthorId(channelId, id) {
  const currentUser = authStore.getCurrentUser();
  if (null != currentUser) {
    if (id !== currentUser.id) {
      const items = [closure_5, closure_7];
      const tmp10 = getChannelTypeById(channelId, id, items);
      if (null == tmp10) {
        let NONE = require("HarmTypeConfiguration.tsx").ContentHarmTypeBitMask.NONE;
      } else {
        _require = tmp10;
        const _Object = Object;
        const values = Object.values(require("HarmTypeConfiguration.tsx").CONTENT_SCAN_TYPE_REGISTRY);
        const found = values.filter((item, index) => {
          let tmp = null == item.isEligible;
          if (!tmp) {
            const isEligible = item.isEligible;
            let isEligibleResult;
            if (isEligible != null) {
              isEligibleResult = isEligible();
            }
            tmp = isEligibleResult;
          }
          return tmp;
        });
        if (null == tmp10) {
          NONE = tmp12(5020).ContentHarmTypeBitMask.NONE;
        } else {
          const mapped = found.map((item, index) => {
            const tmp = item.getUserSettingsWithDefaults()[GUILD];
            let hasItem = null != tmp;
            if (hasItem) {
              const items = [GUILD(dependencyMap[13]).ExplicitContentRedaction.BLOCK, GUILD(dependencyMap[13]).ExplicitContentRedaction.BLUR];
              hasItem = items.includes(tmp);
            }
            let harmType = null;
            if (hasItem) {
              harmType = item.harmType;
            }
            return harmType;
          });
          NONE = contentHarmTypesToFlags(mapped.filter(tmp12(1370).isNotNullish));
        }
      }
      return NONE;
    }
  }
  return require("HarmTypeConfiguration.tsx").ContentHarmTypeBitMask.NONE;
}
function messageHasObscurableMediaForBitmask(firstMessage, EXPLICIT) {
  const _require = EXPLICIT;
  if (EXPLICIT !== require("HarmTypeConfiguration.tsx").ContentHarmTypeBitMask.NONE) {
    if (null != firstMessage) {
      const attachments = firstMessage.attachments;
      let someResult;
      if (attachments != null) {
        someResult = attachments.some((item, index) => {
          const obj = { type: EXPLICIT(dependencyMap[9]).ObscuredMediaTypes.Attachment, media: item };
          if (obj === EXPLICIT(dependencyMap[7]).ContentHarmTypeBitMask.NONE) {
            let items = [];
          } else {
            const arr = getHarmTypeFromBitmask(obj);
            if (0 === arr.length) {
              items = [];
            } else {
              const found = arr.filter((item, index) => closure_1_16(item, obj));
              items = found.map((item, index) => obj(table[7]).CONTENT_SCAN_TYPE_REGISTRY[item].obscureReason);
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
          someResult1 = embeds.some((item, index) => {
            const obj = { type: EXPLICIT(dependencyMap[9]).ObscuredMediaTypes.Embed, media: item };
            if (obj === EXPLICIT(dependencyMap[7]).ContentHarmTypeBitMask.NONE) {
              let items = [];
            } else {
              const arr = getHarmTypeFromBitmask(obj);
              if (0 === arr.length) {
                items = [];
              } else {
                const found = arr.filter((item, index) => closure_1_16(item, obj));
                items = found.map((item, index) => obj(table[7]).CONTENT_SCAN_TYPE_REGISTRY[item].obscureReason);
              }
            }
            return items.length > 0;
          });
        }
        if (someResult1) {
          return true;
        } else {
          if ("messageSnapshots" in firstMessage) {
            let messageSnapshots = firstMessage.messageSnapshots;
          } else {
            messageSnapshots = null;
            if ("message_snapshots" in firstMessage) {
              messageSnapshots = firstMessage.message_snapshots;
            }
          }
          if (null != messageSnapshots) {
            if (0 !== messageSnapshots.length) {
              for (const item10026 of messageSnapshots) {
                if (messageHasObscurableMediaForBitmask(item10026.message, arg1)) {
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
  let obj = components;
  if (!Array.isArray(components)) {
    const items = [components];
    obj = items;
  }
  return obj.flatMap((item, index) => {
    const type = item.type;
    if (callback(1954).ComponentType.MEDIA_GALLERY === type) {
      const items = item.items;
      return items.map((item, index) => item.media);
    } else if (callback(1954).ComponentType.THUMBNAIL === type) {
      return item.media;
    } else if (callback(1954).ComponentType.FILE === type) {
      return item.file;
    } else {
      if (callback(1954).ComponentType.SECTION !== type) {
        if (callback(1954).ComponentType.ACTION_ROW !== type) {
          if (callback(1954).ComponentType.CONTAINER !== type) {
            return [];
          }
        }
      }
      const components = item.components;
      return components.flatMap(closure_14);
    }
  }).map((item, index) => {
    let toUnfurledMediaItemResult = item;
    if ("proxy_url" in item) {
      toUnfurledMediaItemResult = callback(4810).toUnfurledMediaItem(item);
      const obj = callback(4810);
    }
    return toUnfurledMediaItemResult;
  });
}
function isMediaScanPending(type, enabledContentHarmTypeFlags) {
  if (enabledContentHarmTypeFlags === media(5020).ContentHarmTypeBitMask.NONE) {
    return false;
  } else if (store.get("explicit_media_redaction_ignore_pending_scan")) {
    return false;
  } else {
    const arr = getHarmTypeFromBitmask(enabledContentHarmTypeFlags);
    if (0 === arr.length) {
      return false;
    } else {
      type = type.type;
      if (tmp(5022).ObscuredMediaTypes.Embed === type) {
        const media3 = type.media;
        media = media3;
        let flag3 = false;
        if (0 !== arr.length) {
          let tmp31 = null;
          flag3 = false;
          if (null != media3) {
            flag3 = false;
            if (0 !== arr.filter((item, index) => !isMediaFlaggedForHarmType(item, { type: media(dependencyMap[9]).ObscuredMediaTypes.Embed, media })).length) {
              if ("video" in media3) {
                if (tmp31 != media3.video) {
                  const video = media3.video;
                  let width;
                  if (video != tmp31) {
                    width = video.width;
                  }
                  if (0 === width) {
                    const video2 = media3.video;
                    let height;
                    if (video2 != tmp31) {
                      height = video2.height;
                    }
                    flag3 = false;
                  }
                }
              }
              if ("thumbnail" in media3) {
                if (tmp31 != media3.thumbnail) {
                  const thumbnail = media3.thumbnail;
                  let width1;
                  if (thumbnail != tmp31) {
                    width1 = thumbnail.width;
                  }
                  if (0 === width1) {
                    const thumbnail2 = media3.thumbnail;
                    let height1;
                    if (thumbnail2 != tmp31) {
                      height1 = thumbnail2.height;
                    }
                    flag3 = false;
                  }
                }
              }
              if ("image" in media3) {
                if (tmp31 != media3.image) {
                  const image = media3.image;
                  let width2;
                  if (image != tmp31) {
                    width2 = image.width;
                  }
                  if (0 === width2) {
                    const image2 = media3.image;
                    let height2;
                    if (image2 != tmp31) {
                      height2 = image2.height;
                    }
                    flag3 = false;
                  }
                }
              }
              if (!("images" in media3)) {
                if (tmp31 != media3.content_scan_version) {
                  let content_scan_version = media3.content_scan_version;
                } else if (tmp31 != media3.contentScanVersion) {
                  content_scan_version = media3.contentScanVersion;
                } else {
                  content_scan_version = null;
                  if (tmp31 != media3.contentScanVersion) {
                    content_scan_version = media3.contentScanVersion;
                  }
                }
                if (-1 === content_scan_version) {
                  flag3 = tmp29;
                } else {
                  if (!arr.includes(tmp(5020).ContentHarmType.GORE)) {
                  }
                  tmp31 = tmp31 == content_scan_version || content_scan_version < tmp28;
                }
              } else {
                const images = media3.images;
                if (images != tmp31) {
                  images.some((item, index) => {
                    let tmp = null != item;
                    if (tmp) {
                      tmp = 0 === item.width;
                    }
                    if (tmp) {
                      tmp = 0 === item.height;
                    }
                    return tmp;
                  });
                }
                flag3 = false;
              }
            }
          }
        }
        return flag3;
      } else if (tmp(5022).ObscuredMediaTypes.Attachment === type) {
        const media2 = type.media;
        media = media2;
        let tmp11 = 0 !== arr.length;
        if (tmp11) {
          let tmp12 = 0 !== arr.filter((item, index) => !isMediaFlaggedForHarmType(item, { type: media(dependencyMap[9]).ObscuredMediaTypes.Attachment, media })).length;
          if (tmp12) {
            let contentScanVersion = media2.content_scan_version;
            let tmp13 = null;
            if (contentScanVersion == null) {
              contentScanVersion = media2.contentScanVersion;
            }
            if (-1 === contentScanVersion) {
              tmp12 = tmp16;
            } else {
              if (!arr.includes(tmp(5020).ContentHarmType.GORE)) {
              }
              tmp13 = tmp13 == contentScanVersion || contentScanVersion < tmp15;
            }
          }
          tmp11 = tmp12;
        }
        return tmp11;
      } else if (tmp(5022).ObscuredMediaTypes.GenericMedia === type) {
        media = type.media;
        let flag2 = false;
        if (0 !== arr.length) {
          flag2 = false;
          if (0 !== arr.filter((item, index) => !isMediaFlaggedForHarmType(item, { type: media(dependencyMap[9]).ObscuredMediaTypes.GenericMedia, media })).length) {
            const contentScanMetadata = media.contentScanMetadata;
            let tmp9 = null;
            let version;
            if (contentScanMetadata != null) {
              version = contentScanMetadata.version;
            }
            if (-1 === version) {
              flag2 = tmp7;
            } else {
              if (!arr.includes(tmp(5020).ContentHarmType.GORE)) {
              }
              tmp9 = tmp9 == version || version < tmp6;
            }
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
    const tmp5 = ContentHarmType.CONTENT_SCAN_TYPE_REGISTRY[EXPLICIT];
    if (null != tmp5.devSettingKey) {
      if (store.get(tmp5.devSettingKey)) {
        return true;
      }
    }
    type = type.type;
    if (ContentHarmTypeChannel.ObscuredMediaTypes.Embed === type) {
      let tmp3Result = hasFlag;
      let num3 = type.media.flags;
      if (num3 == null) {
        num3 = 0;
      }
      return tmp3Result.hasFlag(num3, tmp5.embedFlag);
    } else if (ContentHarmTypeChannel.ObscuredMediaTypes.Attachment === type) {
      tmp3Result = hasFlag;
      let num2 = type.media.flags;
      if (num2 == null) {
        num2 = 0;
      }
      return tmp3Result.hasFlag(num2, tmp5.attachmentFlag);
    } else if (ContentHarmTypeChannel.ObscuredMediaTypes.GenericMedia === type) {
      const contentScanMetadata = type.media.contentScanMetadata;
      let num;
      if (contentScanMetadata != null) {
        num = contentScanMetadata.flags;
      }
      if (num == null) {
        num = 0;
      }
      return hasFlag.hasFlag(num, tmp5.genericMediaFlag);
    } else {
      return false;
    }
  }
}
function contentHarmTypesToFlags(memo) {
  let NONE = ContentHarmType.ContentHarmTypeBitMask.NONE;
  const iter = memo[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if (ContentHarmType.ContentHarmType.EXPLICIT === nextResult) {
      NONE = NONE | ContentHarmType.ContentHarmTypeBitMask.EXPLICIT;
    } else if (ContentHarmType.ContentHarmType.GORE === nextResult) {
      NONE = NONE | ContentHarmType.ContentHarmTypeBitMask.GORE;
    } else if (ContentHarmType.ContentHarmType.SELF_HARM === nextResult) {
      NONE = NONE | ContentHarmType.ContentHarmTypeBitMask.SELF_HARM;
    }
    continue;
  }
  return NONE;
}
function getHarmTypeFromBitmask(enabledHarmTypesForMessage) {
  if (enabledHarmTypesForMessage === ContentHarmType.ContentHarmTypeBitMask.NONE) {
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
function getChannelTypeById(closure_0, closure_1, items) {
  let tmp = items;
  if (items === undefined) {
    items = [closure_9, ];
    items[1] = globalThis.p;
    tmp = items;
  }
  [obj, obj2] = callback(tmp, 2);
  const channel = obj.getChannel(closure_0);
  const currentUser = authStore.getCurrentUser();
  let tmp6 = null;
  if (null != currentUser) {
    tmp6 = null;
    if (closure_1 !== currentUser.id) {
      tmp6 = null;
      if (null != channel) {
        if (!channel.isDM()) {
          if (!channel.isGroupDM()) {
            const GUILD = ContentHarmTypeChannel.ContentHarmTypeChannel.GUILD;
          }
        }
        if (null == closure_1) {
          const NON_FRIEND_DM = ContentHarmTypeChannel.ContentHarmTypeChannel.NON_FRIEND_DM;
        } else {
          const friendIDs = obj2.getFriendIDs();
        }
        const FRIEND_DM = ContentHarmTypeChannel.ContentHarmTypeChannel.FRIEND_DM;
      }
    }
  }
  return tmp6;
}
function getChannelIdAndAuthorIdFromMessage(message) {
  if (null == message) {
    return { channelId: null, authorId: null };
  } else {
    let channel_id = null;
    if ("channel_id" in message) {
      channel_id = message.channel_id;
    }
    if ("messageReference" in message) {
      const items = [message.messageReference, isForwardMessageDefault(message)];
      let items2 = items;
    } else if ("message_reference" in message) {
      const items1 = [message.message_reference, ];
      let obj = isForwardMessage;
      items1[1] = obj.isForwardServerMessage(message);
      items2 = items1;
    } else {
      items2 = [];
    }
    const tmp7 = callback(items2, 2);
    const first = tmp7[0];
    if (null != first) {
      if (tmp7[1]) {
        if (null == first.message_id) {
          obj = { channelId: null, authorId: null };
          obj[0] = channel_id;
          return obj;
        } else {
          message = message.getMessage(first.channel_id, first.message_id);
          let author_id = null;
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
      obj = { channelId: null, authorId: null };
      obj[0] = channel_id;
      obj[1] = author_id;
      return obj;
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
const result = require("obj132").fileFinishedImporting("modules/explicit_media_redaction/ObscuredMediaUtils.tsx");
function hasUnscannedMedia(message, enabledHarmTypesForMessage) {
  let tmp = enabledHarmTypesForMessage;
  if (enabledHarmTypesForMessage == null) {
    tmp = getEnabledHarmTypesForMessage(message);
  }
  const _require = tmp;
  if (tmp === require("HarmTypeConfiguration.tsx").ContentHarmTypeBitMask.NONE) {
    return false;
  } else {
    const attachments = message.attachments;
    let someResult;
    if (attachments != null) {
      someResult = attachments.some((item, index) => isMediaScanPending({ type: callback(dependencyMap[9]).ObscuredMediaTypes.Attachment, media: item }, callback));
    }
    if (someResult) {
      return true;
    } else {
      const embeds = message.embeds;
      let someResult1;
      if (embeds != null) {
        someResult1 = embeds.some((item, index) => isMediaScanPending({ type: callback(dependencyMap[9]).ObscuredMediaTypes.Embed, media: item }, callback));
      }
      if (someResult1) {
        return true;
      } else {
        if (null != message.components) {
          if (obj.some((item, index) => isMediaScanPending({ type: callback(dependencyMap[9]).ObscuredMediaTypes.GenericMedia, media: item }, callback))) {
            return true;
          }
          obj = findComponentMedia(message.components);
        }
        if ("messageSnapshots" in message) {
          let messageSnapshots = message.messageSnapshots;
        } else {
          messageSnapshots = null;
          if ("message_snapshots" in message) {
            messageSnapshots = message.message_snapshots;
          }
        }
        if (null != messageSnapshots) {
          if (0 !== messageSnapshots.length) {
            for (const item10037 of messageSnapshots) {
              if (hasUnscannedMedia(item10037.message, tmp)) {
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

export { getEligibleHarmTypesConfigsForContext };
export { getEnabledHarmTypesForMessage };
export { getEnabledHarmTypesForChannelAndAuthorId };
export const getEnabledHarmTypesBitmaskForChannelType = function getEnabledHarmTypesBitmaskForChannelType(GUILD) {
  const _require = GUILD;
  const values = Object.values(require("HarmTypeConfiguration.tsx").CONTENT_SCAN_TYPE_REGISTRY);
  const found = values.filter((item, index) => {
    let tmp = null == item.isEligible;
    if (!tmp) {
      const isEligible = item.isEligible;
      let isEligibleResult;
      if (isEligible != null) {
        isEligibleResult = isEligible();
      }
      tmp = isEligibleResult;
    }
    return tmp;
  });
  if (null == GUILD) {
    let NONE = tmp(5020).ContentHarmTypeBitMask.NONE;
  } else {
    const mapped = found.map((item, index) => {
      const tmp = item.getUserSettingsWithDefaults()[GUILD];
      let hasItem = null != tmp;
      if (hasItem) {
        const items = [GUILD(dependencyMap[13]).ExplicitContentRedaction.BLOCK, GUILD(dependencyMap[13]).ExplicitContentRedaction.BLUR];
        hasItem = items.includes(tmp);
      }
      let harmType = null;
      if (hasItem) {
        harmType = item.harmType;
      }
      return harmType;
    });
    NONE = contentHarmTypesToFlags(mapped.filter(tmp(1370).isNotNullish));
  }
  return NONE;
};
export const messageHasObscurableMedia = function messageHasObscurableMedia(message) {
  const channelId = getChannelIdAndAuthorIdFromMessage(message).channelId;
  if (null != channelId) {
    if (null != message) {
      let NONE = getEnabledHarmTypesForChannelAndAuthorId(channelId, tmp3);
    }
    return messageHasObscurableMediaForBitmask(message, NONE);
  }
  NONE = ContentHarmType.ContentHarmTypeBitMask.NONE;
  const tmp2 = getChannelIdAndAuthorIdFromMessage(message);
};
export { messageHasObscurableMediaForBitmask };
export { hasUnscannedMedia };
export const isEligibleForScanning = function isEligibleForScanning(components) {
  let tmp = null == components.components;
  if (!tmp) {
    components = components.components;
    const _Array = Array;
    let obj = components;
    if (!Array.isArray(components)) {
      let items = [components];
      obj = items;
    }
    const mapped = obj.flatMap((item, index) => {
      const type = item.type;
      if (callback(1954).ComponentType.MEDIA_GALLERY === type) {
        const items = item.items;
        return items.map((item, index) => item.media);
      } else if (callback(1954).ComponentType.THUMBNAIL === type) {
        return item.media;
      } else if (callback(1954).ComponentType.FILE === type) {
        return item.file;
      } else {
        if (callback(1954).ComponentType.SECTION !== type) {
          if (callback(1954).ComponentType.ACTION_ROW !== type) {
            if (callback(1954).ComponentType.CONTAINER !== type) {
              return [];
            }
          }
        }
        const components = item.components;
        return components.flatMap(closure_14);
      }
    }).map((item, index) => {
      let toUnfurledMediaItemResult = item;
      if ("proxy_url" in item) {
        toUnfurledMediaItemResult = callback(4810).toUnfurledMediaItem(item);
        const obj = callback(4810);
      }
      return toUnfurledMediaItemResult;
    });
    tmp = !mapped.some((item, index) => item.loadingState === callback(1954).UnfurledMediaLoadingState.LOADING);
    const flatMapResult = obj.flatMap((item, index) => {
      const type = item.type;
      if (callback(1954).ComponentType.MEDIA_GALLERY === type) {
        const items = item.items;
        return items.map((item, index) => item.media);
      } else if (callback(1954).ComponentType.THUMBNAIL === type) {
        return item.media;
      } else if (callback(1954).ComponentType.FILE === type) {
        return item.file;
      } else {
        if (callback(1954).ComponentType.SECTION !== type) {
          if (callback(1954).ComponentType.ACTION_ROW !== type) {
            if (callback(1954).ComponentType.CONTAINER !== type) {
              return [];
            }
          }
        }
        const components = item.components;
        return components.flatMap(closure_14);
      }
    });
  }
  return tmp;
};
export const getUnscannedMediaIds = function getUnscannedMediaIds(message) {
  const channelId = getChannelIdAndAuthorIdFromMessage(message).channelId;
  if (null != channelId) {
    if (null != message) {
      let NONE = getEnabledHarmTypesForChannelAndAuthorId(channelId, tmp2);
    }
    if (NONE === NONE(5020).ContentHarmTypeBitMask.NONE) {
      let obj = { attachmentIds: null, embedIds: null };
      obj[0] = [];
      obj[1] = [];
      return obj;
    } else {
      const attachments = message.attachments;
      let found;
      if (attachments != null) {
        found = attachments.filter((item, index) => isMediaScanPending({ type: NONE(dependencyMap[9]).ObscuredMediaTypes.Attachment, media: item }, NONE));
      }
      const embeds = message.embeds;
      let found1;
      if (embeds != null) {
        found1 = embeds.filter((item, index) => isMediaScanPending({ type: NONE(dependencyMap[9]).ObscuredMediaTypes.Embed, media: item }, NONE));
      }
      let found2;
      if (found != null) {
        const mapped = found.map((item, index) => item.id);
        const _Boolean = Boolean;
        found2 = mapped.filter(Boolean);
      }
      if (found2 == null) {
        found2 = [];
      }
      obj = { attachmentIds: null, embedIds: null };
      obj[0] = found2;
      let found3;
      if (found1 != null) {
        const mapped1 = found1.map((item, index) => "embed_" + index);
        const _Boolean2 = Boolean;
        found3 = mapped1.filter(Boolean);
      }
      if (found3 == null) {
        found3 = [];
      }
      obj[1] = found3;
      return obj;
    }
  }
  NONE = NONE(5020).ContentHarmTypeBitMask.NONE;
  const tmp = getChannelIdAndAuthorIdFromMessage(message);
};
export const getMediaObscuredReasonFromBitmask = function getMediaObscuredReasonFromBitmask(arg0, enabledContentHarmTypeFlags) {
  const _require = arg0;
  if (enabledContentHarmTypeFlags === require("HarmTypeConfiguration.tsx").ContentHarmTypeBitMask.NONE) {
    return [];
  } else {
    const arr = getHarmTypeFromBitmask(enabledContentHarmTypeFlags);
    if (0 === arr.length) {
      let items = [];
    } else {
      const found = arr.filter((item, index) => closure_1_16(item, obj));
      items = found.map((item, index) => obj(table[7]).CONTENT_SCAN_TYPE_REGISTRY[item].obscureReason);
    }
    return items;
  }
};
export const isMediaObscuredForHarmTypes = function isMediaObscuredForHarmTypes(arg0, enabledHarmTypesForMessage) {
  const _require = arg0;
  if (enabledHarmTypesForMessage === require("HarmTypeConfiguration.tsx").ContentHarmTypeBitMask.NONE) {
    return false;
  } else {
    const arr = getHarmTypeFromBitmask(enabledHarmTypesForMessage);
    return 0 !== arr.length && arr.filter((item, index) => isMediaFlaggedForHarmType(item, closure_0)).length > 0;
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
    const items = [create.ExplicitContentRedaction.BLOCK, create.ExplicitContentRedaction.BLUR];
    hasItem = items.includes(arg0);
  }
  return hasItem;
};
export { getChannelIdAndAuthorIdFromMessage };