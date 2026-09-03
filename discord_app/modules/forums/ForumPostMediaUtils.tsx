// discord_app/modules/forums/ForumPostMediaUtils.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import isDiscordFrontendDevelopment from "../../utils/GlobalUtils.tsx";
import explicitContentFromProto from "../user_settings/UserSettings.tsx";
import urlMatchesFileExtension from "../messages/MediaFormatTesters.tsx";
import closure_3 from "../../../_runtime/00019_noop.js";
import closure_4 from "../threads/ThreadMessageStore.tsx";
import closure_5 from "../../stores/ChannelStore.tsx";
import closure_6 from "../../stores/MessageStore.tsx";
import closure_7 from "../../stores/UserStore.tsx";
import ME from "../../Constants.tsx";

require = arg1;
function isMediaAttachment(filename) {
  let flag = false;
  if (null != filename) {
    ({ height, width } = filename);
    let tmp3 = urlMatchesFileExtension.isImageFile(filename.filename) && null != height;
    if (tmp3) {
      tmp3 = height > 0;
    }
    if (tmp3) {
      tmp3 = null != width;
    }
    if (tmp3) {
      tmp3 = width > 0;
    }
    flag = tmp3;
    obj = urlMatchesFileExtension;
  }
  if (!flag) {
    let tmp4 = null != filename;
    if (tmp4) {
      let isVideoFileResult = null != filename;
      if (isVideoFileResult) {
        isVideoFileResult = urlMatchesFileExtension.isVideoFile(filename.filename);
        const obj2 = urlMatchesFileExtension;
      }
      if (isVideoFileResult) {
        isVideoFileResult = null != filename.proxy_url;
      }
      tmp4 = isVideoFileResult;
    }
    flag = tmp4;
  }
  return flag;
}
function getForumPostMedia(attachments, InlineAttachmentMedia) {
  let setting = InlineAttachmentMedia;
  if (InlineAttachmentMedia === undefined) {
    InlineAttachmentMedia = explicitContentFromProto.InlineAttachmentMedia;
    setting = InlineAttachmentMedia.getSetting();
  }
  if (setting) {
    let moderatorReport;
    if (attachments != null) {
      const first = attachments.messageSnapshots[0];
      if (first != null) {
        moderatorReport = first.moderatorReport;
      }
    }
    if (null != moderatorReport) {
      attachments = undefined;
      if (attachments != null) {
        const first1 = attachments.messageSnapshots[0];
        if (first1 != null) {
          attachments = first1.message.attachments;
        }
      }
      let attachments1 = attachments;
    } else if (attachments != null) {
      attachments1 = attachments.attachments;
    }
    if (null != attachments) {
      if (null != attachments1) {
        const found = attachments1.filter(isMediaAttachment);
        const mapped = found.map((flags) => {
          ({ proxy_url, flags, width, height } = flags);
          if (null != width) {
            if (null != height) {
              const isVideoFileResult = callback(table[6]).isVideoFile(tmp3);
              let hasFlagResult = null != flags.flags;
              if (hasFlagResult) {
                let tmp12Result = tmp12(tmp13[8]);
                hasFlagResult = tmp12Result.hasFlag(flags.flags, constants.IS_THUMBNAIL);
              }
              let str = proxy_url;
              if (proxy_url == null) {
                str = tmp;
              }
              if (isVideoFileResult) {
                str = callback2(tmp13[9]).toURLSafe(proxy_url);
                if (null == str) {
                  return null;
                } else {
                  const searchParams = str.searchParams;
                  searchParams.append("format", "webp");
                  str = str.toString();
                }
                const obj2 = callback2(tmp13[9]);
              }
              obj = {
                type: null,
                src: null,
                width: null,
                height: null,
                spoiler: null,
                flags: null,
                contentScanVersion: null,
                alt: null,
                isVideo: null,
                isThumbnail: null,
                attachmentId: null,
                mediaIndex: null,
                srcIsAnimated: null,
              };
              obj[0] = constants2.ATTACHMENT;
              obj[1] = str;
              obj[2] = width;
              obj[3] = height;
              tmp12Result = tmp12(tmp13[8]);
              let num = flags;
              if (flags == null) {
                num = 0;
              }
              obj[4] = tmp12Result.hasFlag(num, constants.IS_SPOILER);
              obj[5] = flags;
              obj[6] = tmp4;
              obj[7] = tmp2;
              obj[8] = isVideoFileResult;
              obj[9] = hasFlagResult;
              obj[10] = flags.id;
              obj[11] = arg1;
              const obj6 = callback(table[6]);
              const tmp11 = constants;
              let num2 = flags.flags;
              if (num2 == null) {
                num2 = 0;
              }
              obj[12] = callback(table[8]).hasFlag(num2, tmp11.IS_ANIMATED);
              return obj;
            }
          }
          return null;
        });
        let found1 = mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
      }
      return found1;
    }
    found1 = [];
  } else {
    return [];
  }
}
function useForumPostEmbeds(embeds, flag) {
  const _require = flag;
  const InlineEmbedMedia = require("../user_settings/UserSettings.tsx").InlineEmbedMedia;
  const setting = InlineEmbedMedia.useSetting();
  const RenderEmbeds = require("../user_settings/UserSettings.tsx").RenderEmbeds;
  if (null == embeds) {
    return [];
  } else {
    const first = embeds.messageSnapshots[0];
    let moderatorReport;
    if (first != null) {
      moderatorReport = first.moderatorReport;
    }
    if (null != moderatorReport) {
      const first1 = embeds.messageSnapshots[0];
      embeds = undefined;
      if (first1 != null) {
        embeds = first1.message.embeds;
      }
      let embeds1 = embeds;
    } else {
      embeds1 = embeds.embeds;
    }
    if (setting) {
      if (tmp4) {
        if (null != embeds1) {
          const mapped = embeds1.map((image) => {
            let thumbnail = image.image;
            if (thumbnail == null) {
              thumbnail = image.thumbnail;
            }
            if (tmp) {
              thumbnail = image.images[0];
            }
            if (null != thumbnail) {
              if (null != thumbnail.url) {
                ({ proxyURL, url, flags } = thumbnail);
                let isVideoUrlResult = null != proxyURL;
                ({ height, width } = thumbnail);
                if (isVideoUrlResult) {
                  obj = callback(closure_1_2[6]);
                  isVideoUrlResult = obj.isVideoUrl(proxyURL);
                }
                obj = {
                  type: null,
                  src: null,
                  height: null,
                  width: null,
                  spoiler: null,
                  flags: null,
                  contentScanVersion: null,
                  isVideo: null,
                  mediaIndex: null,
                  srcIsAnimated: null,
                };
                obj[0] = closure_1_11.EMBED;
                let tmp6 = url;
                if (null != proxyURL) {
                  tmp6 = url;
                  if ("" !== proxyURL) {
                    tmp6 = proxyURL;
                  }
                }
                obj[1] = tmp6;
                obj[2] = height;
                obj[3] = width;
                obj[4] = callback;
                ({ flags: obj2[5], contentScanVersion: obj2[6] } = image);
                obj[7] = isVideoUrlResult;
                obj[8] = arg1;
                if (flags == null) {
                  flags = 0;
                }
                obj[9] = callback(closure_1_2[8]).hasFlag(flags, closure_1_9.IS_ANIMATED);
                return obj;
              }
            }
          });
          let found = mapped.filter(require("../../utils/GlobalUtils.tsx").isNotNullish);
        }
        return found;
      }
    }
    found = [];
  }
}
function useForumPostMediaProperties(firstResult, flag) {
  const InlineAttachmentMedia = explicitContentFromProto.InlineAttachmentMedia;
  const items = [
    ...getForumPostMedia(firstResult, InlineAttachmentMedia.useSetting()),
    ...useForumPostEmbeds(firstResult, flag),
  ];
  const InlineEmbedMedia = explicitContentFromProto.InlineEmbedMedia;
  if (null == firstResult) {
    let items1 = [];
  } else {
    const components = firstResult.components;
    if (tmp4) {
      if (null != components) {
        const _Array = Array;
        const tmpResult = tmp(4740);
        const flattenComponentsResult = tmp(4740).flattenComponents(components);
        const arr = Array.from(tmp(4740).flattenComponents(components).values());
        items1 = Array.from(tmp(4740).flattenComponents(components).values())
          .flatMap((type) => {
            type = type.type;
            if (callback(table[12]).ComponentType.THUMBNAIL === type) {
              ({ media, spoiler } = type);
              if (spoiler == null) {
                spoiler = false;
              }
              let tmpResult = tmp(tmp2[13]);
              let unfurledMediaItemType = tmpResult.getUnfurledMediaItemType(media);
              let tmp6 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                obj = {
                  type: null,
                  src: null,
                  height: null,
                  width: null,
                  spoiler: null,
                  contentScanVersion: null,
                  flags: 0,
                  srcIsAnimated: null,
                  isVideo: null,
                  mediaIndex: 0,
                  srcUnfurledMediaItem: null,
                };
                obj[0] = constants.COMPONENT;
                ({ proxyUrl: obj3[1], height } = media);
                if (height == null) {
                  height = 0;
                }
                obj[2] = height;
                let num = media.width;
                if (num == null) {
                  num = 0;
                }
                obj[3] = num;
                obj[4] = spoiler;
                let contentScanMetadata = media.contentScanMetadata;
                let version;
                if (contentScanMetadata != null) {
                  version = contentScanMetadata.version;
                }
                obj[5] = version;
                tmpResult = tmp(tmp2[8]);
                obj[7] = tmpResult.hasFlag(media.flags, tmp(tmp2[13]).UnfurledMediaItemFlags.IS_ANIMATED);
                obj[8] = "VIDEO" === unfurledMediaItemType;
                obj[10] = media;
                tmp6 = obj;
              }
              return tmp6;
            } else if (tmp(tmp2[12]).ComponentType.MEDIA_GALLERY === type) {
              const items = type.items;
              return items.map((arg0) => {
                ({ media, spoiler } = arg0);
                if (spoiler == null) {
                  spoiler = false;
                }
                obj = callback(table[13]);
                const unfurledMediaItemType = obj.getUnfurledMediaItemType(media);
                let tmp4 = null;
                if ("INVALID" !== unfurledMediaItemType) {
                  obj = {
                    type: null,
                    src: null,
                    height: null,
                    width: null,
                    spoiler: null,
                    contentScanVersion: null,
                    flags: 0,
                    srcIsAnimated: null,
                    isVideo: null,
                    mediaIndex: 0,
                    srcUnfurledMediaItem: null,
                  };
                  obj[0] = constants.COMPONENT;
                  ({ proxyUrl: obj3[1], height } = media);
                  if (height == null) {
                    height = 0;
                  }
                  obj[2] = height;
                  let num = media.width;
                  if (num == null) {
                    num = 0;
                  }
                  obj[3] = num;
                  obj[4] = spoiler;
                  const contentScanMetadata = media.contentScanMetadata;
                  let version;
                  if (contentScanMetadata != null) {
                    version = contentScanMetadata.version;
                  }
                  obj[5] = version;
                  obj[7] = tmp(tmp2[8]).hasFlag(media.flags, tmp(tmp2[13]).UnfurledMediaItemFlags.IS_ANIMATED);
                  obj[8] = "VIDEO" === unfurledMediaItemType;
                  obj[10] = media;
                  tmp4 = obj;
                  const tmpResult = tmp(tmp2[8]);
                }
                return tmp4;
              });
            } else {
              return null;
            }
          })
          .filter(tmp(1470).isNotNullish);
        const flatMapResult = Array.from(tmp(4740).flattenComponents(components).values()).flatMap((type) => {
          type = type.type;
          if (callback(table[12]).ComponentType.THUMBNAIL === type) {
            ({ media, spoiler } = type);
            if (spoiler == null) {
              spoiler = false;
            }
            let tmpResult = tmp(tmp2[13]);
            let unfurledMediaItemType = tmpResult.getUnfurledMediaItemType(media);
            let tmp6 = null;
            if ("INVALID" !== unfurledMediaItemType) {
              obj = {
                type: null,
                src: null,
                height: null,
                width: null,
                spoiler: null,
                contentScanVersion: null,
                flags: 0,
                srcIsAnimated: null,
                isVideo: null,
                mediaIndex: 0,
                srcUnfurledMediaItem: null,
              };
              obj[0] = constants.COMPONENT;
              ({ proxyUrl: obj3[1], height } = media);
              if (height == null) {
                height = 0;
              }
              obj[2] = height;
              let num = media.width;
              if (num == null) {
                num = 0;
              }
              obj[3] = num;
              obj[4] = spoiler;
              let contentScanMetadata = media.contentScanMetadata;
              let version;
              if (contentScanMetadata != null) {
                version = contentScanMetadata.version;
              }
              obj[5] = version;
              tmpResult = tmp(tmp2[8]);
              obj[7] = tmpResult.hasFlag(media.flags, tmp(tmp2[13]).UnfurledMediaItemFlags.IS_ANIMATED);
              obj[8] = "VIDEO" === unfurledMediaItemType;
              obj[10] = media;
              tmp6 = obj;
            }
            return tmp6;
          } else if (tmp(tmp2[12]).ComponentType.MEDIA_GALLERY === type) {
            const items = type.items;
            return items.map((arg0) => {
              ({ media, spoiler } = arg0);
              if (spoiler == null) {
                spoiler = false;
              }
              obj = callback(table[13]);
              const unfurledMediaItemType = obj.getUnfurledMediaItemType(media);
              let tmp4 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                obj = {
                  type: null,
                  src: null,
                  height: null,
                  width: null,
                  spoiler: null,
                  contentScanVersion: null,
                  flags: 0,
                  srcIsAnimated: null,
                  isVideo: null,
                  mediaIndex: 0,
                  srcUnfurledMediaItem: null,
                };
                obj[0] = constants.COMPONENT;
                ({ proxyUrl: obj3[1], height } = media);
                if (height == null) {
                  height = 0;
                }
                obj[2] = height;
                let num = media.width;
                if (num == null) {
                  num = 0;
                }
                obj[3] = num;
                obj[4] = spoiler;
                const contentScanMetadata = media.contentScanMetadata;
                let version;
                if (contentScanMetadata != null) {
                  version = contentScanMetadata.version;
                }
                obj[5] = version;
                obj[7] = tmp(tmp2[8]).hasFlag(media.flags, tmp(tmp2[13]).UnfurledMediaItemFlags.IS_ANIMATED);
                obj[8] = "VIDEO" === unfurledMediaItemType;
                obj[10] = media;
                tmp4 = obj;
                const tmpResult = tmp(tmp2[8]);
              }
              return tmp4;
            });
          } else {
            return null;
          }
        });
      }
    }
    items1 = [];
  }
  HermesBuiltin.arraySpread(items1, tmp3);
  return items;
}
({ MessageAttachmentFlags: closure_8, MessageEmbedMediaFlags: c9 } = ME);
let obj = { EMBED: "embed", ATTACHMENT: "attachment", COMPONENT: "component" };
const result = require("set").fileFinishedImporting("modules/forums/ForumPostMediaUtils.tsx");

export const getEmbedColor = function getEmbedColor(firstResult, flag) {
  if (null != firstResult) {
    if (null != firstResult.embeds[0]) {
      if (null == firstResult.embeds[0].color) {
        if (!flag) {
          const tmp = str;
        }
      }
      return tmp;
    }
  }
};
export const isValidImageAttachment = function isValidImageAttachment(filename) {
  if (null == filename) {
    return false;
  } else {
    ({ height, width } = filename);
    let tmp3 = urlMatchesFileExtension.isImageFile(filename.filename) && null != height;
    if (tmp3) {
      tmp3 = height > 0;
    }
    if (tmp3) {
      tmp3 = null != width;
    }
    if (tmp3) {
      tmp3 = width > 0;
    }
    return tmp3;
  }
};
export const isValidVideoAttachment = function isValidVideoAttachment(filename) {
  let tmp = null != filename;
  if (tmp) {
    let isVideoFileResult = null != filename;
    if (isVideoFileResult) {
      isVideoFileResult = urlMatchesFileExtension.isVideoFile(filename.filename);
      obj = urlMatchesFileExtension;
    }
    if (isVideoFileResult) {
      isVideoFileResult = null != filename.proxy_url;
    }
    tmp = isVideoFileResult;
  }
  return tmp;
};
export { isMediaAttachment };
export const ForumPostMediaTypes = obj;
export { getForumPostMedia };
export const useForumPostComponentsMedia = function useForumPostComponentsMedia(components) {
  const InlineEmbedMedia = explicitContentFromProto.InlineEmbedMedia;
  if (null == components) {
    return [];
  } else {
    components = components.components;
    if (tmp3) {
      if (null != components) {
        const _Array = Array;
        const tmpResult = tmp(4740);
        const flattenComponentsResult = tmp(4740).flattenComponents(components);
        const arr = Array.from(tmp(4740).flattenComponents(components).values());
        let found = Array.from(tmp(4740).flattenComponents(components).values())
          .flatMap((type) => {
            type = type.type;
            if (callback(table[12]).ComponentType.THUMBNAIL === type) {
              ({ media, spoiler } = type);
              if (spoiler == null) {
                spoiler = false;
              }
              let tmpResult = tmp(tmp2[13]);
              let unfurledMediaItemType = tmpResult.getUnfurledMediaItemType(media);
              let tmp6 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                obj = {
                  type: null,
                  src: null,
                  height: null,
                  width: null,
                  spoiler: null,
                  contentScanVersion: null,
                  flags: 0,
                  srcIsAnimated: null,
                  isVideo: null,
                  mediaIndex: 0,
                  srcUnfurledMediaItem: null,
                };
                obj[0] = constants.COMPONENT;
                ({ proxyUrl: obj3[1], height } = media);
                if (height == null) {
                  height = 0;
                }
                obj[2] = height;
                let num = media.width;
                if (num == null) {
                  num = 0;
                }
                obj[3] = num;
                obj[4] = spoiler;
                let contentScanMetadata = media.contentScanMetadata;
                let version;
                if (contentScanMetadata != null) {
                  version = contentScanMetadata.version;
                }
                obj[5] = version;
                tmpResult = tmp(tmp2[8]);
                obj[7] = tmpResult.hasFlag(media.flags, tmp(tmp2[13]).UnfurledMediaItemFlags.IS_ANIMATED);
                obj[8] = "VIDEO" === unfurledMediaItemType;
                obj[10] = media;
                tmp6 = obj;
              }
              return tmp6;
            } else if (tmp(tmp2[12]).ComponentType.MEDIA_GALLERY === type) {
              const items = type.items;
              return items.map((arg0) => {
                ({ media, spoiler } = arg0);
                if (spoiler == null) {
                  spoiler = false;
                }
                obj = callback(table[13]);
                const unfurledMediaItemType = obj.getUnfurledMediaItemType(media);
                let tmp4 = null;
                if ("INVALID" !== unfurledMediaItemType) {
                  obj = {
                    type: null,
                    src: null,
                    height: null,
                    width: null,
                    spoiler: null,
                    contentScanVersion: null,
                    flags: 0,
                    srcIsAnimated: null,
                    isVideo: null,
                    mediaIndex: 0,
                    srcUnfurledMediaItem: null,
                  };
                  obj[0] = constants.COMPONENT;
                  ({ proxyUrl: obj3[1], height } = media);
                  if (height == null) {
                    height = 0;
                  }
                  obj[2] = height;
                  let num = media.width;
                  if (num == null) {
                    num = 0;
                  }
                  obj[3] = num;
                  obj[4] = spoiler;
                  const contentScanMetadata = media.contentScanMetadata;
                  let version;
                  if (contentScanMetadata != null) {
                    version = contentScanMetadata.version;
                  }
                  obj[5] = version;
                  obj[7] = tmp(tmp2[8]).hasFlag(media.flags, tmp(tmp2[13]).UnfurledMediaItemFlags.IS_ANIMATED);
                  obj[8] = "VIDEO" === unfurledMediaItemType;
                  obj[10] = media;
                  tmp4 = obj;
                  const tmpResult = tmp(tmp2[8]);
                }
                return tmp4;
              });
            } else {
              return null;
            }
          })
          .filter(tmp(1470).isNotNullish);
        const flatMapResult = Array.from(tmp(4740).flattenComponents(components).values()).flatMap((type) => {
          type = type.type;
          if (callback(table[12]).ComponentType.THUMBNAIL === type) {
            ({ media, spoiler } = type);
            if (spoiler == null) {
              spoiler = false;
            }
            let tmpResult = tmp(tmp2[13]);
            let unfurledMediaItemType = tmpResult.getUnfurledMediaItemType(media);
            let tmp6 = null;
            if ("INVALID" !== unfurledMediaItemType) {
              obj = {
                type: null,
                src: null,
                height: null,
                width: null,
                spoiler: null,
                contentScanVersion: null,
                flags: 0,
                srcIsAnimated: null,
                isVideo: null,
                mediaIndex: 0,
                srcUnfurledMediaItem: null,
              };
              obj[0] = constants.COMPONENT;
              ({ proxyUrl: obj3[1], height } = media);
              if (height == null) {
                height = 0;
              }
              obj[2] = height;
              let num = media.width;
              if (num == null) {
                num = 0;
              }
              obj[3] = num;
              obj[4] = spoiler;
              let contentScanMetadata = media.contentScanMetadata;
              let version;
              if (contentScanMetadata != null) {
                version = contentScanMetadata.version;
              }
              obj[5] = version;
              tmpResult = tmp(tmp2[8]);
              obj[7] = tmpResult.hasFlag(media.flags, tmp(tmp2[13]).UnfurledMediaItemFlags.IS_ANIMATED);
              obj[8] = "VIDEO" === unfurledMediaItemType;
              obj[10] = media;
              tmp6 = obj;
            }
            return tmp6;
          } else if (tmp(tmp2[12]).ComponentType.MEDIA_GALLERY === type) {
            const items = type.items;
            return items.map((arg0) => {
              ({ media, spoiler } = arg0);
              if (spoiler == null) {
                spoiler = false;
              }
              obj = callback(table[13]);
              const unfurledMediaItemType = obj.getUnfurledMediaItemType(media);
              let tmp4 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                obj = {
                  type: null,
                  src: null,
                  height: null,
                  width: null,
                  spoiler: null,
                  contentScanVersion: null,
                  flags: 0,
                  srcIsAnimated: null,
                  isVideo: null,
                  mediaIndex: 0,
                  srcUnfurledMediaItem: null,
                };
                obj[0] = constants.COMPONENT;
                ({ proxyUrl: obj3[1], height } = media);
                if (height == null) {
                  height = 0;
                }
                obj[2] = height;
                let num = media.width;
                if (num == null) {
                  num = 0;
                }
                obj[3] = num;
                obj[4] = spoiler;
                const contentScanMetadata = media.contentScanMetadata;
                let version;
                if (contentScanMetadata != null) {
                  version = contentScanMetadata.version;
                }
                obj[5] = version;
                obj[7] = tmp(tmp2[8]).hasFlag(media.flags, tmp(tmp2[13]).UnfurledMediaItemFlags.IS_ANIMATED);
                obj[8] = "VIDEO" === unfurledMediaItemType;
                obj[10] = media;
                tmp4 = obj;
                const tmpResult = tmp(tmp2[8]);
              }
              return tmp4;
            });
          } else {
            return null;
          }
        });
      }
      return found;
    }
    found = [];
  }
};
export const useForumPostMediaThumbnail = function useForumPostMediaThumbnail(
  firstMessage,
  stateFromStores1,
  hasSpoilerEmbeds,
) {
  closure_0 = stateFromStores1;
  let flag = hasSpoilerEmbeds;
  if (hasSpoilerEmbeds === undefined) {
    flag = false;
  }
  closure_1 = undefined;
  const tmp = useForumPostMediaProperties(firstMessage, flag);
  closure_1 = tmp;
  let items = [stateFromStores1, tmp];
  return React.useMemo(() => {
    if (null == closure_0) {
      return [];
    } else {
      let arr = closure_1;
      if (obj.isMediaChannel()) {
        const found = arr.find((isThumbnail) => isThumbnail.isThumbnail);
        if (null != found) {
          const items = [found];
          arr = items;
        }
        return arr;
      } else {
        return arr;
      }
    }
    obj = closure_0;
  }, items);
};
export { useForumPostMediaProperties };
export const useFindFirstMediaProperties = function useFindFirstMediaProperties(firstMessage, hasSpoilerEmbeds) {
  const InlineAttachmentMedia = explicitContentFromProto.InlineAttachmentMedia;
  const tmp3 = getForumPostMedia(firstMessage, InlineAttachmentMedia.useSetting());
  const InlineEmbedMedia = explicitContentFromProto.InlineEmbedMedia;
  if (null == firstMessage) {
    let items = [];
  } else {
    const components = firstMessage.components;
    if (tmp5) {
      if (null != components) {
        const _Array = Array;
        const tmpResult = tmp(4740);
        const flattenComponentsResult = tmp(4740).flattenComponents(components);
        const arr = Array.from(tmp(4740).flattenComponents(components).values());
        items = Array.from(tmp(4740).flattenComponents(components).values())
          .flatMap((type) => {
            type = type.type;
            if (callback(table[12]).ComponentType.THUMBNAIL === type) {
              ({ media, spoiler } = type);
              if (spoiler == null) {
                spoiler = false;
              }
              let tmpResult = tmp(tmp2[13]);
              let unfurledMediaItemType = tmpResult.getUnfurledMediaItemType(media);
              let tmp6 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                obj = {
                  type: null,
                  src: null,
                  height: null,
                  width: null,
                  spoiler: null,
                  contentScanVersion: null,
                  flags: 0,
                  srcIsAnimated: null,
                  isVideo: null,
                  mediaIndex: 0,
                  srcUnfurledMediaItem: null,
                };
                obj[0] = constants.COMPONENT;
                ({ proxyUrl: obj3[1], height } = media);
                if (height == null) {
                  height = 0;
                }
                obj[2] = height;
                let num = media.width;
                if (num == null) {
                  num = 0;
                }
                obj[3] = num;
                obj[4] = spoiler;
                let contentScanMetadata = media.contentScanMetadata;
                let version;
                if (contentScanMetadata != null) {
                  version = contentScanMetadata.version;
                }
                obj[5] = version;
                tmpResult = tmp(tmp2[8]);
                obj[7] = tmpResult.hasFlag(media.flags, tmp(tmp2[13]).UnfurledMediaItemFlags.IS_ANIMATED);
                obj[8] = "VIDEO" === unfurledMediaItemType;
                obj[10] = media;
                tmp6 = obj;
              }
              return tmp6;
            } else if (tmp(tmp2[12]).ComponentType.MEDIA_GALLERY === type) {
              const items = type.items;
              return items.map((arg0) => {
                ({ media, spoiler } = arg0);
                if (spoiler == null) {
                  spoiler = false;
                }
                obj = callback(table[13]);
                const unfurledMediaItemType = obj.getUnfurledMediaItemType(media);
                let tmp4 = null;
                if ("INVALID" !== unfurledMediaItemType) {
                  obj = {
                    type: null,
                    src: null,
                    height: null,
                    width: null,
                    spoiler: null,
                    contentScanVersion: null,
                    flags: 0,
                    srcIsAnimated: null,
                    isVideo: null,
                    mediaIndex: 0,
                    srcUnfurledMediaItem: null,
                  };
                  obj[0] = constants.COMPONENT;
                  ({ proxyUrl: obj3[1], height } = media);
                  if (height == null) {
                    height = 0;
                  }
                  obj[2] = height;
                  let num = media.width;
                  if (num == null) {
                    num = 0;
                  }
                  obj[3] = num;
                  obj[4] = spoiler;
                  const contentScanMetadata = media.contentScanMetadata;
                  let version;
                  if (contentScanMetadata != null) {
                    version = contentScanMetadata.version;
                  }
                  obj[5] = version;
                  obj[7] = tmp(tmp2[8]).hasFlag(media.flags, tmp(tmp2[13]).UnfurledMediaItemFlags.IS_ANIMATED);
                  obj[8] = "VIDEO" === unfurledMediaItemType;
                  obj[10] = media;
                  tmp4 = obj;
                  const tmpResult = tmp(tmp2[8]);
                }
                return tmp4;
              });
            } else {
              return null;
            }
          })
          .filter(tmp(1470).isNotNullish);
        const flatMapResult = Array.from(tmp(4740).flattenComponents(components).values()).flatMap((type) => {
          type = type.type;
          if (callback(table[12]).ComponentType.THUMBNAIL === type) {
            ({ media, spoiler } = type);
            if (spoiler == null) {
              spoiler = false;
            }
            let tmpResult = tmp(tmp2[13]);
            let unfurledMediaItemType = tmpResult.getUnfurledMediaItemType(media);
            let tmp6 = null;
            if ("INVALID" !== unfurledMediaItemType) {
              obj = {
                type: null,
                src: null,
                height: null,
                width: null,
                spoiler: null,
                contentScanVersion: null,
                flags: 0,
                srcIsAnimated: null,
                isVideo: null,
                mediaIndex: 0,
                srcUnfurledMediaItem: null,
              };
              obj[0] = constants.COMPONENT;
              ({ proxyUrl: obj3[1], height } = media);
              if (height == null) {
                height = 0;
              }
              obj[2] = height;
              let num = media.width;
              if (num == null) {
                num = 0;
              }
              obj[3] = num;
              obj[4] = spoiler;
              let contentScanMetadata = media.contentScanMetadata;
              let version;
              if (contentScanMetadata != null) {
                version = contentScanMetadata.version;
              }
              obj[5] = version;
              tmpResult = tmp(tmp2[8]);
              obj[7] = tmpResult.hasFlag(media.flags, tmp(tmp2[13]).UnfurledMediaItemFlags.IS_ANIMATED);
              obj[8] = "VIDEO" === unfurledMediaItemType;
              obj[10] = media;
              tmp6 = obj;
            }
            return tmp6;
          } else if (tmp(tmp2[12]).ComponentType.MEDIA_GALLERY === type) {
            const items = type.items;
            return items.map((arg0) => {
              ({ media, spoiler } = arg0);
              if (spoiler == null) {
                spoiler = false;
              }
              obj = callback(table[13]);
              const unfurledMediaItemType = obj.getUnfurledMediaItemType(media);
              let tmp4 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                obj = {
                  type: null,
                  src: null,
                  height: null,
                  width: null,
                  spoiler: null,
                  contentScanVersion: null,
                  flags: 0,
                  srcIsAnimated: null,
                  isVideo: null,
                  mediaIndex: 0,
                  srcUnfurledMediaItem: null,
                };
                obj[0] = constants.COMPONENT;
                ({ proxyUrl: obj3[1], height } = media);
                if (height == null) {
                  height = 0;
                }
                obj[2] = height;
                let num = media.width;
                if (num == null) {
                  num = 0;
                }
                obj[3] = num;
                obj[4] = spoiler;
                const contentScanMetadata = media.contentScanMetadata;
                let version;
                if (contentScanMetadata != null) {
                  version = contentScanMetadata.version;
                }
                obj[5] = version;
                obj[7] = tmp(tmp2[8]).hasFlag(media.flags, tmp(tmp2[13]).UnfurledMediaItemFlags.IS_ANIMATED);
                obj[8] = "VIDEO" === unfurledMediaItemType;
                obj[10] = media;
                tmp4 = obj;
                const tmpResult = tmp(tmp2[8]);
              }
              return tmp4;
            });
          } else {
            return null;
          }
        });
      }
    }
    items = [];
  }
  let first = tmp3[0];
  if (first == null) {
    first = tmp4[0];
  }
  if (first == null) {
    first = items[0];
  }
  if (first == null) {
    first = null;
  }
  return first;
};
export const useFirstMediaIsEmbed = function useFirstMediaIsEmbed(firstMessage, hasSpoilerEmbeds) {
  const InlineAttachmentMedia = explicitContentFromProto.InlineAttachmentMedia;
  const tmp3 = getForumPostMedia(firstMessage, InlineAttachmentMedia.useSetting());
  const InlineEmbedMedia = explicitContentFromProto.InlineEmbedMedia;
  if (null == firstMessage) {
    let items = [];
  } else {
    const components = firstMessage.components;
    if (tmp5) {
      if (null != components) {
        const _Array = Array;
        let tmpResult = tmp(4740);
        const flattenComponentsResult = tmp(4740).flattenComponents(components);
        const arr = Array.from(tmp(4740).flattenComponents(components).values());
        items = Array.from(tmp(4740).flattenComponents(components).values())
          .flatMap((type) => {
            type = type.type;
            if (callback(table[12]).ComponentType.THUMBNAIL === type) {
              ({ media, spoiler } = type);
              if (spoiler == null) {
                spoiler = false;
              }
              let tmpResult = tmp(tmp2[13]);
              let unfurledMediaItemType = tmpResult.getUnfurledMediaItemType(media);
              let tmp6 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                obj = {
                  type: null,
                  src: null,
                  height: null,
                  width: null,
                  spoiler: null,
                  contentScanVersion: null,
                  flags: 0,
                  srcIsAnimated: null,
                  isVideo: null,
                  mediaIndex: 0,
                  srcUnfurledMediaItem: null,
                };
                obj[0] = constants.COMPONENT;
                ({ proxyUrl: obj3[1], height } = media);
                if (height == null) {
                  height = 0;
                }
                obj[2] = height;
                let num = media.width;
                if (num == null) {
                  num = 0;
                }
                obj[3] = num;
                obj[4] = spoiler;
                let contentScanMetadata = media.contentScanMetadata;
                let version;
                if (contentScanMetadata != null) {
                  version = contentScanMetadata.version;
                }
                obj[5] = version;
                tmpResult = tmp(tmp2[8]);
                obj[7] = tmpResult.hasFlag(media.flags, tmp(tmp2[13]).UnfurledMediaItemFlags.IS_ANIMATED);
                obj[8] = "VIDEO" === unfurledMediaItemType;
                obj[10] = media;
                tmp6 = obj;
              }
              return tmp6;
            } else if (tmp(tmp2[12]).ComponentType.MEDIA_GALLERY === type) {
              const items = type.items;
              return items.map((arg0) => {
                ({ media, spoiler } = arg0);
                if (spoiler == null) {
                  spoiler = false;
                }
                obj = callback(table[13]);
                const unfurledMediaItemType = obj.getUnfurledMediaItemType(media);
                let tmp4 = null;
                if ("INVALID" !== unfurledMediaItemType) {
                  obj = {
                    type: null,
                    src: null,
                    height: null,
                    width: null,
                    spoiler: null,
                    contentScanVersion: null,
                    flags: 0,
                    srcIsAnimated: null,
                    isVideo: null,
                    mediaIndex: 0,
                    srcUnfurledMediaItem: null,
                  };
                  obj[0] = constants.COMPONENT;
                  ({ proxyUrl: obj3[1], height } = media);
                  if (height == null) {
                    height = 0;
                  }
                  obj[2] = height;
                  let num = media.width;
                  if (num == null) {
                    num = 0;
                  }
                  obj[3] = num;
                  obj[4] = spoiler;
                  const contentScanMetadata = media.contentScanMetadata;
                  let version;
                  if (contentScanMetadata != null) {
                    version = contentScanMetadata.version;
                  }
                  obj[5] = version;
                  obj[7] = tmp(tmp2[8]).hasFlag(media.flags, tmp(tmp2[13]).UnfurledMediaItemFlags.IS_ANIMATED);
                  obj[8] = "VIDEO" === unfurledMediaItemType;
                  obj[10] = media;
                  tmp4 = obj;
                  const tmpResult = tmp(tmp2[8]);
                }
                return tmp4;
              });
            } else {
              return null;
            }
          })
          .filter(tmp(1470).isNotNullish);
        const flatMapResult = Array.from(tmp(4740).flattenComponents(components).values()).flatMap((type) => {
          type = type.type;
          if (callback(table[12]).ComponentType.THUMBNAIL === type) {
            ({ media, spoiler } = type);
            if (spoiler == null) {
              spoiler = false;
            }
            let tmpResult = tmp(tmp2[13]);
            let unfurledMediaItemType = tmpResult.getUnfurledMediaItemType(media);
            let tmp6 = null;
            if ("INVALID" !== unfurledMediaItemType) {
              obj = {
                type: null,
                src: null,
                height: null,
                width: null,
                spoiler: null,
                contentScanVersion: null,
                flags: 0,
                srcIsAnimated: null,
                isVideo: null,
                mediaIndex: 0,
                srcUnfurledMediaItem: null,
              };
              obj[0] = constants.COMPONENT;
              ({ proxyUrl: obj3[1], height } = media);
              if (height == null) {
                height = 0;
              }
              obj[2] = height;
              let num = media.width;
              if (num == null) {
                num = 0;
              }
              obj[3] = num;
              obj[4] = spoiler;
              let contentScanMetadata = media.contentScanMetadata;
              let version;
              if (contentScanMetadata != null) {
                version = contentScanMetadata.version;
              }
              obj[5] = version;
              tmpResult = tmp(tmp2[8]);
              obj[7] = tmpResult.hasFlag(media.flags, tmp(tmp2[13]).UnfurledMediaItemFlags.IS_ANIMATED);
              obj[8] = "VIDEO" === unfurledMediaItemType;
              obj[10] = media;
              tmp6 = obj;
            }
            return tmp6;
          } else if (tmp(tmp2[12]).ComponentType.MEDIA_GALLERY === type) {
            const items = type.items;
            return items.map((arg0) => {
              ({ media, spoiler } = arg0);
              if (spoiler == null) {
                spoiler = false;
              }
              obj = callback(table[13]);
              const unfurledMediaItemType = obj.getUnfurledMediaItemType(media);
              let tmp4 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                obj = {
                  type: null,
                  src: null,
                  height: null,
                  width: null,
                  spoiler: null,
                  contentScanVersion: null,
                  flags: 0,
                  srcIsAnimated: null,
                  isVideo: null,
                  mediaIndex: 0,
                  srcUnfurledMediaItem: null,
                };
                obj[0] = constants.COMPONENT;
                ({ proxyUrl: obj3[1], height } = media);
                if (height == null) {
                  height = 0;
                }
                obj[2] = height;
                let num = media.width;
                if (num == null) {
                  num = 0;
                }
                obj[3] = num;
                obj[4] = spoiler;
                const contentScanMetadata = media.contentScanMetadata;
                let version;
                if (contentScanMetadata != null) {
                  version = contentScanMetadata.version;
                }
                obj[5] = version;
                obj[7] = tmp(tmp2[8]).hasFlag(media.flags, tmp(tmp2[13]).UnfurledMediaItemFlags.IS_ANIMATED);
                obj[8] = "VIDEO" === unfurledMediaItemType;
                obj[10] = media;
                tmp4 = obj;
                const tmpResult = tmp(tmp2[8]);
              }
              return tmp4;
            });
          } else {
            return null;
          }
        });
      }
    }
    items = [];
  }
  let tmp4 = useForumPostEmbeds(firstMessage, hasSpoilerEmbeds);
  return null == tmp3[0] && null == items[0] && null != useForumPostEmbeds(firstMessage, hasSpoilerEmbeds)[0];
};
export const shouldShowAddMediaToOriginalPostModal = function shouldShowAddMediaToOriginalPostModal(uploads, id) {
  channel = channel.getChannel(id);
  if (null == channel) {
    return false;
  } else {
    message = message.getMessage(channel.id, DISCORD_EPOCHDefault.castChannelIdAsMessageId(channel.id));
    let tmp8 = null != message;
    if (tmp8) {
      let tmp2 =
        uploads.length > 0 &&
        null != uploads.find((isImage) => isImage.isImage || isImage.isVideo) &&
        channel.isForumPost();
      if (tmp2) {
        currentUser = currentUser.getCurrentUser();
        id = undefined;
        if (currentUser != null) {
          id = currentUser.id;
        }
        tmp2 = channel.ownerId === id;
      }
      if (tmp2) {
        tmp2 = 0 === count.getCount(channel.id);
      }
      if (tmp2) {
        let tmp7 = 0 === message.attachments.length;
        if (!tmp7) {
          const attachments = message.attachments;
          tmp7 =
            null ==
            attachments.find((filename) => {
              let flag = false;
              if (null != filename) {
                ({ height, width } = filename);
                let tmp3 = callback(4671).isImageFile(filename.filename) && null != height;
                if (tmp3) {
                  tmp3 = height > 0;
                }
                if (tmp3) {
                  tmp3 = null != width;
                }
                if (tmp3) {
                  tmp3 = width > 0;
                }
                flag = tmp3;
                obj = callback(4671);
              }
              if (!flag) {
                let tmp4 = null != filename;
                if (tmp4) {
                  let isVideoFileResult = null != filename;
                  if (isVideoFileResult) {
                    isVideoFileResult = callback(4671).isVideoFile(filename.filename);
                    const obj2 = callback(4671);
                  }
                  if (isVideoFileResult) {
                    isVideoFileResult = null != filename.proxy_url;
                  }
                  tmp4 = isVideoFileResult;
                }
                flag = tmp4;
              }
              return flag;
            });
        }
        tmp2 = tmp7;
      }
      tmp8 = tmp2;
    }
    return tmp8;
  }
};
export const messageContainsGifOrVideo = function messageContainsGifOrVideo(media) {
  return media.reduce(
    (containsVideo, isVideo) => {
      obj = { containsVideo: containsVideo.containsVideo || isVideo.isVideo, containsGif: null };
      let containsGif = containsVideo.containsGif;
      if (!containsGif) {
        containsGif = callback(table[6]).isAnimatedImageUrl(isVideo.src);
        const obj2 = callback(table[6]);
      }
      obj[1] = containsGif;
      return obj;
    },
    { containsVideo: false, containsGif: false },
  );
};
