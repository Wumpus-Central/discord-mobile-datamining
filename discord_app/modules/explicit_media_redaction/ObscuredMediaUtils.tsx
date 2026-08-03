import _slicedToArray from "_slicedToArray";
import getUserAgnosticState from "getUserAgnosticState";
import ensureGuildLoaded from "ensureGuildLoaded";
import reinjectEphemerals from "reinjectEphemerals";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import getFpMessageInfo from "getFpMessageInfo";

let require = arg1;
function getEligibleHarmTypesConfigsForContext() {
  const values = Object.values(require(5792) /* ContentHarmType */.CONTENT_SCAN_TYPE_REGISTRY);
  return values.filter((isEligible) => {
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
  NONE = require(5792) /* ContentHarmType */.ContentHarmTypeBitMask.NONE;
}
function getEnabledHarmTypesForChannelAndAuthorId(channelId, id) {
  const currentUser = authStore.getCurrentUser();
  if (null != currentUser) {
    if (id !== currentUser.id) {
      const items = [ensureGuildLoaded, upsertRelationship];
      const tmp10 = getChannelTypeById(channelId, id, items);
      if (null == tmp10) {
        let NONE = require(5792) /* ContentHarmType */.ContentHarmTypeBitMask.NONE;
      } else {
        require = tmp10;
        const _Object = Object;
        const values = Object.values(require(5792) /* ContentHarmType */.CONTENT_SCAN_TYPE_REGISTRY);
        const found = values.filter((isEligible) => {
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
        });
        if (null == tmp10) {
          NONE = tmp12(5792).ContentHarmTypeBitMask.NONE;
        } else {
          const mapped = found.map((harmType) => {
            const tmp = harmType.getUserSettingsWithDefaults()[GUILD];
            let hasItem = null != tmp;
            if (hasItem) {
              const items = [GUILD(outer1_2[13]).ExplicitContentRedaction.BLOCK, GUILD(outer1_2[13]).ExplicitContentRedaction.BLUR];
              hasItem = items.includes(tmp);
            }
            harmType = null;
            if (hasItem) {
              harmType = harmType.harmType;
            }
            return harmType;
          });
          NONE = contentHarmTypesToFlags(mapped.filter(tmp12(1351).isNotNullish));
        }
      }
      return NONE;
    }
  }
  return require(5792) /* ContentHarmType */.ContentHarmTypeBitMask.NONE;
}
function messageHasObscurableMediaForBitmask(firstMessage, EXPLICIT) {
  const _require = EXPLICIT;
  if (EXPLICIT !== _require(5792).ContentHarmTypeBitMask.NONE) {
    if (null != firstMessage) {
      const attachments = firstMessage.attachments;
      let someResult;
      if (attachments != null) {
        someResult = attachments.some((media) => {
          const obj = { type: EXPLICIT(outer1_2[9]).ObscuredMediaTypes.Attachment, media };
          if (obj === EXPLICIT(outer1_2[7]).ContentHarmTypeBitMask.NONE) {
            let items = [];
          } else {
            const arr = outer1_18(obj);
            if (0 === arr.length) {
              items = [];
            } else {
              const found = arr.filter((arg0) => outer1_16(arg0, obj));
              items = found.map((arg0) => obj(table[7]).CONTENT_SCAN_TYPE_REGISTRY[arg0].obscureReason);
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
            const obj = { type: EXPLICIT(outer1_2[9]).ObscuredMediaTypes.Embed, media };
            if (obj === EXPLICIT(outer1_2[7]).ContentHarmTypeBitMask.NONE) {
              let items = [];
            } else {
              const arr = outer1_18(obj);
              if (0 === arr.length) {
                items = [];
              } else {
                const found = arr.filter((arg0) => outer1_16(arg0, obj));
                items = found.map((arg0) => obj(table[7]).CONTENT_SCAN_TYPE_REGISTRY[arg0].obscureReason);
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
                let tmp6 = messageHasObscurableMediaForBitmask;
                if (messageHasObscurableMediaForBitmask(item10026.message, arg1)) {
                  let tmp7 = obj;
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
  return obj.flatMap((type) => {
    type = type.type;
    if (callback(1906).ComponentType.MEDIA_GALLERY === type) {
      const items = type.items;
      return items.map((media) => media.media);
    } else if (tmp(1906).ComponentType.THUMBNAIL === type) {
      return type.media;
    } else if (tmp(1906).ComponentType.FILE === type) {
      return type.file;
    } else {
      if (tmp(1906).ComponentType.SECTION !== type) {
        if (tmp(1906).ComponentType.ACTION_ROW !== type) {
          if (tmp(1906).ComponentType.CONTAINER !== type) {
            return [];
          }
        }
      }
      const components = type.components;
      return components.flatMap(closure_14);
    }
  }).map((media) => {
    let toUnfurledMediaItemResult = media;
    if ("proxy_url" in media) {
      toUnfurledMediaItemResult = callback(4482).toUnfurledMediaItem(media);
      const obj = callback(4482);
    }
    return toUnfurledMediaItemResult;
  });
}
function isMediaScanPending(type, enabledContentHarmTypeFlags) {
  if (enabledContentHarmTypeFlags === media(5792).ContentHarmTypeBitMask.NONE) {
    return false;
  } else if (store.get("explicit_media_redaction_ignore_pending_scan")) {
    return false;
  } else {
    const arr = getHarmTypeFromBitmask(enabledContentHarmTypeFlags);
    if (0 === arr.length) {
      return false;
    } else {
      type = type.type;
      if (tmp(5794).ObscuredMediaTypes.Embed === type) {
        const media3 = type.media;
        media = media3;
        let flag3 = false;
        if (0 !== arr.length) {
          let tmp31 = null;
          flag3 = false;
          if (null != media3) {
            flag3 = false;
            if (0 !== arr.filter((arg0) => !outer1_16(arg0, { type: media(outer1_2[9]).ObscuredMediaTypes.Embed, media })).length) {
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
                  if (!arr.includes(tmp(5792).ContentHarmType.GORE)) {
                    if (!arr.includes(tmp(5792).ContentHarmType.SELF_HARM)) {
                      let tmp30 = tmp31 == content_scan_version;
                    }
                  }
                  tmp31 = tmp31 == content_scan_version || content_scan_version < tmp28;
                  tmp30 = tmp31;
                }
              } else {
                const images = media3.images;
                let someResult;
                if (images != tmp31) {
                  someResult = images.some((width) => {
                    let tmp = null != width;
                    if (tmp) {
                      tmp = 0 === width.width;
                    }
                    if (tmp) {
                      tmp = 0 === width.height;
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
      } else if (tmp(5794).ObscuredMediaTypes.Attachment === type) {
        const media2 = type.media;
        media = media2;
        let tmp11 = 0 !== arr.length;
        if (tmp11) {
          let tmp12 = 0 !== arr.filter((arg0) => !outer1_16(arg0, { type: media(outer1_2[9]).ObscuredMediaTypes.Attachment, media })).length;
          if (tmp12) {
            let contentScanVersion = media2.content_scan_version;
            let tmp13 = null;
            if (contentScanVersion == null) {
              contentScanVersion = media2.contentScanVersion;
            }
            if (-1 === contentScanVersion) {
              tmp12 = tmp16;
            } else {
              if (!arr.includes(tmp(5792).ContentHarmType.GORE)) {
                if (!arr.includes(tmp(5792).ContentHarmType.SELF_HARM)) {
                  let tmp17 = tmp13 == contentScanVersion;
                }
              }
              tmp13 = tmp13 == contentScanVersion || contentScanVersion < tmp15;
              tmp17 = tmp13;
            }
          }
          tmp11 = tmp12;
        }
        return tmp11;
      } else if (tmp(5794).ObscuredMediaTypes.GenericMedia === type) {
        media = type.media;
        let flag2 = false;
        if (0 !== arr.length) {
          flag2 = false;
          if (0 !== arr.filter((arg0) => !outer1_16(arg0, { type: media(outer1_2[9]).ObscuredMediaTypes.GenericMedia, media })).length) {
            const contentScanMetadata = media.contentScanMetadata;
            let tmp9 = null;
            let version;
            if (contentScanMetadata != null) {
              version = contentScanMetadata.version;
            }
            if (-1 === version) {
              flag2 = tmp7;
            } else {
              if (!arr.includes(tmp(5792).ContentHarmType.GORE)) {
                if (!arr.includes(tmp(5792).ContentHarmType.SELF_HARM)) {
                  let tmp8 = tmp9 == version;
                }
              }
              tmp9 = tmp9 == version || version < tmp6;
              tmp8 = tmp9;
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
    const tmp5 = require(5792) /* ContentHarmType */.CONTENT_SCAN_TYPE_REGISTRY[EXPLICIT];
    if (null != tmp5.devSettingKey) {
      if (store.get(tmp5.devSettingKey)) {
        return true;
      }
    }
    type = type.type;
    if (require(5794) /* ContentHarmTypeChannel */.ObscuredMediaTypes.Embed === type) {
      let tmp3Result = tmp3(1384);
      let num3 = type.media.flags;
      if (num3 == null) {
        num3 = 0;
      }
      return tmp3Result.hasFlag(num3, tmp5.embedFlag);
    } else if (tmp3(5794).ObscuredMediaTypes.Attachment === type) {
      tmp3Result = tmp3(1384);
      let num2 = type.media.flags;
      if (num2 == null) {
        num2 = 0;
      }
      return tmp3Result.hasFlag(num2, tmp5.attachmentFlag);
    } else if (tmp3(5794).ObscuredMediaTypes.GenericMedia === type) {
      const contentScanMetadata = type.media.contentScanMetadata;
      let num;
      if (contentScanMetadata != null) {
        num = contentScanMetadata.flags;
      }
      if (num == null) {
        num = 0;
      }
      return tmp3(1384).hasFlag(num, tmp5.genericMediaFlag);
    } else {
      return false;
    }
  }
}
function contentHarmTypesToFlags(mapped) {
  let NONE = require(5792) /* ContentHarmType */.ContentHarmTypeBitMask.NONE;
  const iter = mapped[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = require;
    let tmp3 = require;
    let tmp4 = dependencyMap;
    let tmp5 = dependencyMap;
    if (require(5792) /* ContentHarmType */.ContentHarmType.EXPLICIT === nextResult) {
      let tmp14 = NONE;
      let tmp15 = tmp2;
      let tmp16 = tmp4;
      NONE = NONE | tmp3(5792).ContentHarmTypeBitMask.EXPLICIT;
    } else {
      let tmp17 = tmp2;
      let tmp18 = tmp4;
      if (tmp3(5792).ContentHarmType.GORE === nextResult) {
        let tmp11 = NONE;
        let tmp12 = tmp2;
        let tmp13 = tmp4;
        NONE = NONE | tmp3(5792).ContentHarmTypeBitMask.GORE;
      } else {
        let tmp6 = tmp2;
        let tmp7 = tmp4;
        if (tmp3(5792).ContentHarmType.SELF_HARM === nextResult) {
          let tmp8 = NONE;
          let tmp9 = tmp2;
          let tmp10 = tmp4;
          NONE = NONE | tmp3(5792).ContentHarmTypeBitMask.SELF_HARM;
        }
      }
    }
    continue;
  }
  return NONE;
}
function getHarmTypeFromBitmask(enabledHarmTypesForMessage) {
  if (enabledHarmTypesForMessage === require(5792) /* ContentHarmType */.ContentHarmTypeBitMask.NONE) {
    return [];
  } else {
    const items = [];
    const tmp2 = getEligibleHarmTypesConfigsForContext();
    const iter = tmp2[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if ((enabledHarmTypesForMessage & nextResult.bitmask) > 0) {
        let tmp8 = nextResult;
        let arr = items.push(tmp7.harmType);
      }
      continue;
    }
    return items;
  }
}
function getChannelTypeById(closure_0, closure_1, items) {
  let obj;
  let obj2;
  let tmp = items;
  if (items === undefined) {
    items = [getFpMessageInfo, ];
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
            const GUILD = require(5794) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.GUILD;
          }
        }
        if (null == closure_1) {
          const NON_FRIEND_DM = require(5794) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.NON_FRIEND_DM;
        } else {
          const friendIDs = obj2.getFriendIDs();
        }
        const FRIEND_DM = require(5794) /* ContentHarmTypeChannel */.ContentHarmTypeChannel.FRIEND_DM;
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
      const items = [message.messageReference, importDefault(5798)(message)];
      let items2 = items;
    } else if ("message_reference" in message) {
      const items1 = [message.message_reference, ];
      let obj = require(5798) /* isForwardMessage */;
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
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/explicit_media_redaction/ObscuredMediaUtils.tsx");
function hasUnscannedMedia(message, arg1) {
  let tmp = arg1;
  if (arg1 == null) {
    tmp = getEnabledHarmTypesForMessage(message);
  }
  const require = tmp;
  if (tmp === require(5792) /* ContentHarmType */.ContentHarmTypeBitMask.NONE) {
    return false;
  } else {
    const attachments = message.attachments;
    let someResult;
    if (attachments != null) {
      someResult = attachments.some((media) => outer1_15({ type: tmp(outer1_2[9]).ObscuredMediaTypes.Attachment, media }, tmp));
    }
    if (someResult) {
      return true;
    } else {
      const embeds = message.embeds;
      let someResult1;
      if (embeds != null) {
        someResult1 = embeds.some((media) => outer1_15({ type: tmp(outer1_2[9]).ObscuredMediaTypes.Embed, media }, tmp));
      }
      if (someResult1) {
        return true;
      } else {
        if (null != message.components) {
          if (obj.some((media) => outer1_15({ type: tmp(outer1_2[9]).ObscuredMediaTypes.GenericMedia, media }, tmp))) {
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
              let tmp9 = hasUnscannedMedia;
              if (hasUnscannedMedia(item10037.message, tmp)) {
                let tmp10 = obj2;
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
  const values = Object.values(_require(5792).CONTENT_SCAN_TYPE_REGISTRY);
  const found = values.filter((isEligible) => {
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
  });
  if (null == GUILD) {
    let NONE = tmp(5792).ContentHarmTypeBitMask.NONE;
  } else {
    const mapped = found.map((harmType) => {
      const tmp = harmType.getUserSettingsWithDefaults()[GUILD];
      let hasItem = null != tmp;
      if (hasItem) {
        const items = [GUILD(outer1_2[13]).ExplicitContentRedaction.BLOCK, GUILD(outer1_2[13]).ExplicitContentRedaction.BLUR];
        hasItem = items.includes(tmp);
      }
      harmType = null;
      if (hasItem) {
        harmType = harmType.harmType;
      }
      return harmType;
    });
    NONE = contentHarmTypesToFlags(mapped.filter(tmp(1351).isNotNullish));
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
  NONE = require(5792) /* ContentHarmType */.ContentHarmTypeBitMask.NONE;
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
    const mapped = obj.flatMap((type) => {
      type = type.type;
      if (callback(1906).ComponentType.MEDIA_GALLERY === type) {
        const items = type.items;
        return items.map((media) => media.media);
      } else if (tmp(1906).ComponentType.THUMBNAIL === type) {
        return type.media;
      } else if (tmp(1906).ComponentType.FILE === type) {
        return type.file;
      } else {
        if (tmp(1906).ComponentType.SECTION !== type) {
          if (tmp(1906).ComponentType.ACTION_ROW !== type) {
            if (tmp(1906).ComponentType.CONTAINER !== type) {
              return [];
            }
          }
        }
        const components = type.components;
        return components.flatMap(closure_14);
      }
    }).map((media) => {
      let toUnfurledMediaItemResult = media;
      if ("proxy_url" in media) {
        toUnfurledMediaItemResult = callback(4482).toUnfurledMediaItem(media);
        const obj = callback(4482);
      }
      return toUnfurledMediaItemResult;
    });
    tmp = !mapped.some((loadingState) => loadingState.loadingState === callback(1906).UnfurledMediaLoadingState.LOADING);
    const flatMapResult = obj.flatMap((type) => {
      type = type.type;
      if (callback(1906).ComponentType.MEDIA_GALLERY === type) {
        const items = type.items;
        return items.map((media) => media.media);
      } else if (tmp(1906).ComponentType.THUMBNAIL === type) {
        return type.media;
      } else if (tmp(1906).ComponentType.FILE === type) {
        return type.file;
      } else {
        if (tmp(1906).ComponentType.SECTION !== type) {
          if (tmp(1906).ComponentType.ACTION_ROW !== type) {
            if (tmp(1906).ComponentType.CONTAINER !== type) {
              return [];
            }
          }
        }
        const components = type.components;
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
    if (NONE === NONE(5792).ContentHarmTypeBitMask.NONE) {
      let obj = { attachmentIds: null, embedIds: null };
      obj[0] = [];
      obj[1] = [];
      return obj;
    } else {
      const attachments = message.attachments;
      let found;
      if (attachments != null) {
        found = attachments.filter((media) => outer1_15({ type: NONE(outer1_2[9]).ObscuredMediaTypes.Attachment, media }, NONE));
      }
      const embeds = message.embeds;
      let found1;
      if (embeds != null) {
        found1 = embeds.filter((media) => outer1_15({ type: NONE(outer1_2[9]).ObscuredMediaTypes.Embed, media }, NONE));
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
      obj = { attachmentIds: null, embedIds: null };
      obj[0] = found2;
      let found3;
      if (found1 != null) {
        const mapped1 = found1.map((arg0, arg1) => "embed_" + arg1);
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
  NONE = NONE(5792).ContentHarmTypeBitMask.NONE;
};
export const getMediaObscuredReasonFromBitmask = function getMediaObscuredReasonFromBitmask(arg0, enabledContentHarmTypeFlags) {
  const _require = arg0;
  if (enabledContentHarmTypeFlags === _require(5792).ContentHarmTypeBitMask.NONE) {
    return [];
  } else {
    const arr = getHarmTypeFromBitmask(enabledContentHarmTypeFlags);
    if (0 === arr.length) {
      let items = [];
    } else {
      const found = arr.filter((arg0) => outer1_16(arg0, obj));
      items = found.map((arg0) => obj(table[7]).CONTENT_SCAN_TYPE_REGISTRY[arg0].obscureReason);
    }
    return items;
  }
};
export const isMediaObscuredForHarmTypes = function isMediaObscuredForHarmTypes(arg0, enabledHarmTypesForMessage) {
  const _require = arg0;
  if (enabledHarmTypesForMessage === _require(5792).ContentHarmTypeBitMask.NONE) {
    return false;
  } else {
    const arr = getHarmTypeFromBitmask(enabledHarmTypesForMessage);
    return 0 !== arr.length && arr.filter((arg0) => outer1_16(arg0, closure_0)).length > 0;
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
    const items = [require(1306) /* create */.ExplicitContentRedaction.BLOCK, require(1306) /* create */.ExplicitContentRedaction.BLUR];
    hasItem = items.includes(arg0);
  }
  return hasItem;
};
export { getChannelIdAndAuthorIdFromMessage };