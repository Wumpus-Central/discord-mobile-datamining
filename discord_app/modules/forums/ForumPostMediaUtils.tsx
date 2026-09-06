// discord_app/modules/forums/ForumPostMediaUtils.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import URLUtilsDefault from "../../utils/URLUtils.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import MediaFormatTesters from "../messages/MediaFormatTesters.tsx";
import InteractionComponentUtils from "../interaction_components/InteractionComponentUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import ThreadMessageStore from "../threads/ThreadMessageStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
function isMediaAttachment(filename) {
  let flag = false;
  if (null != filename) {
    ({ height, width } = filename);
    let tmp3 = MediaFormatTesters.isImageFile(filename.filename) && null != height;
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
  }
  if (!flag) {
    let tmp4 = null != filename;
    if (tmp4) {
      let isVideoFileResult = null != filename;
      if (isVideoFileResult) {
        isVideoFileResult = MediaFormatTesters.isVideoFile(filename.filename);
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
function getForumPostMedia(attachments) {
  let setting = InlineAttachmentMedia;
  if (InlineAttachmentMedia === undefined) {
    InlineAttachmentMedia = UserSettings.InlineAttachmentMedia;
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
        const mapped = found.map((flags, mediaIndex) => {
          ({ proxy_url, flags, width, height } = flags);
          if (null != width) {
            if (null != height) {
              const isVideoFileResult = require("MediaFormatTesters").isVideoFile(tmp3);
              let hasFlagResult = null != flags.flags;
              if (hasFlagResult) {
                let tmp12Result = require("FlagUtils");
                hasFlagResult = tmp12Result.hasFlag(flags.flags, constants.IS_THUMBNAIL);
              }
              let str = proxy_url;
              if (proxy_url == null) {
                str = tmp;
              }
              if (isVideoFileResult) {
                str = URLUtilsDefault.toURLSafe(proxy_url);
                if (null == str) {
                  return null;
                } else {
                  const searchParams = str.searchParams;
                  searchParams.append("format", "webp");
                  str = str.toString();
                }
              }
              const size = {
                type: constants2.ATTACHMENT,
                src: str,
                width,
                height,
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
              tmp12Result = require("FlagUtils");
              let num = flags;
              if (flags == null) {
                num = 0;
              }
              size.spoiler = tmp12Result.hasFlag(num, constants.IS_SPOILER);
              size.flags = flags;
              size.contentScanVersion = tmp4;
              size.alt = tmp2;
              size.isVideo = isVideoFileResult;
              size.isThumbnail = hasFlagResult;
              size.attachmentId = flags.id;
              size.mediaIndex = mediaIndex;
              const obj6 = require("MediaFormatTesters");
              let num2 = flags.flags;
              if (num2 == null) {
                num2 = 0;
              }
              size.srcIsAnimated = require("FlagUtils").hasFlag(num2, constants.IS_ANIMATED);
              return size;
            }
          }
          return null;
        });
        let found1 = mapped.filter(GlobalUtils.isNotNullish);
      }
      return found1;
    }
    found1 = [];
  } else {
    return [];
  }
}
function useForumPostEmbeds(embeds, flag) {
  _require = flag;
  const InlineEmbedMedia = require("UserSettings").InlineEmbedMedia;
  const setting = InlineEmbedMedia.useSetting();
  const RenderEmbeds = require("UserSettings").RenderEmbeds;
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
          const mapped = embeds1.map((image, mediaIndex) => {
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
                  const obj = MediaFormatTesters;
                  isVideoUrlResult = obj.isVideoUrl(proxyURL);
                }
                const size = {
                  type: obj.EMBED,
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
                let tmp6 = url;
                if (null != proxyURL) {
                  tmp6 = url;
                  if ("" !== proxyURL) {
                    tmp6 = proxyURL;
                  }
                }
                size.src = tmp6;
                size.height = height;
                size.width = width;
                size.spoiler = spoiler;
                ({ flags: obj2.flags, contentScanVersion: obj2.contentScanVersion } = image);
                size.isVideo = isVideoUrlResult;
                size.mediaIndex = mediaIndex;
                if (flags == null) {
                  flags = 0;
                }
                size.srcIsAnimated = FlagUtils.hasFlag(flags, constants.IS_ANIMATED);
                return size;
              }
            }
            tmp = null == thumbnail && null != image.images;
          });
          let found = mapped.filter(tmp(1369).isNotNullish);
        }
        return found;
      }
    }
    found = [];
  }
  tmp = _require;
}
function useForumPostMediaProperties(firstResult, flag) {
  const InlineAttachmentMedia = UserSettings.InlineAttachmentMedia;
  const items = [
    ...getForumPostMedia(firstResult, InlineAttachmentMedia.useSetting()),
    ...useForumPostEmbeds(firstResult, flag),
  ];
  const InlineEmbedMedia = UserSettings.InlineEmbedMedia;
  if (null == firstResult) {
    let items1 = [];
  } else {
    const components = firstResult.components;
    if (tmp4) {
      if (null != components) {
        const _Array = Array;
        const tmpResult = InteractionComponentUtils;
        const flattenComponentsResult = InteractionComponentUtils.flattenComponents(components);
        const arr = Array.from(InteractionComponentUtils.flattenComponents(components).values());
        items1 = Array.from(InteractionComponentUtils.flattenComponents(components).values())
          .flatMap((type) => {
            type = type.type;
            if (require("Server").ComponentType.THUMBNAIL === type) {
              ({ media, spoiler } = type);
              if (spoiler == null) {
                spoiler = false;
              }
              let tmpResult = require("MediaTypes");
              let unfurledMediaItemType = tmpResult.getUnfurledMediaItemType(media);
              let tmp6 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                let size = {
                  type: constants.COMPONENT,
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
                ({ proxyUrl: obj3.src, height } = media);
                if (height == null) {
                  height = 0;
                }
                size.height = height;
                let num = media.width;
                if (num == null) {
                  num = 0;
                }
                size.width = num;
                size.spoiler = spoiler;
                let contentScanMetadata = media.contentScanMetadata;
                let version;
                if (contentScanMetadata != null) {
                  version = contentScanMetadata.version;
                }
                size.contentScanVersion = version;
                tmpResult = require("FlagUtils");
                size.srcIsAnimated = tmpResult.hasFlag(
                  media.flags,
                  require("MediaTypes").UnfurledMediaItemFlags.IS_ANIMATED,
                );
                size.isVideo = "VIDEO" === unfurledMediaItemType;
                size.srcUnfurledMediaItem = media;
                tmp6 = size;
              }
              return tmp6;
            } else if (require("Server").ComponentType.MEDIA_GALLERY === type) {
              const items = type.items;
              return items.map((item) => {
                ({ media, spoiler } = item);
                if (spoiler == null) {
                  spoiler = false;
                }
                const unfurledMediaItemType = closure_1_0(dependencyMap[13]).getUnfurledMediaItemType(media);
                let tmp4 = null;
                if ("INVALID" !== unfurledMediaItemType) {
                  const size = {
                    type: constants.COMPONENT,
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
                  ({ proxyUrl: obj3.src, height } = media);
                  if (height == null) {
                    height = 0;
                  }
                  size.height = height;
                  let num = media.width;
                  if (num == null) {
                    num = 0;
                  }
                  size.width = num;
                  size.spoiler = spoiler;
                  const contentScanMetadata = media.contentScanMetadata;
                  let version;
                  if (contentScanMetadata != null) {
                    version = contentScanMetadata.version;
                  }
                  size.contentScanVersion = version;
                  size.srcIsAnimated = closure_1_0(dependencyMap[8]).hasFlag(
                    media.flags,
                    closure_1_0(dependencyMap[13]).UnfurledMediaItemFlags.IS_ANIMATED,
                  );
                  size.isVideo = "VIDEO" === unfurledMediaItemType;
                  size.srcUnfurledMediaItem = media;
                  tmp4 = size;
                  const tmpResult = closure_1_0(dependencyMap[8]);
                }
                return tmp4;
              });
            } else {
              return null;
            }
          })
          .filter(GlobalUtils.isNotNullish);
        const flatMapResult = Array.from(InteractionComponentUtils.flattenComponents(components).values()).flatMap(
          (type) => {
            type = type.type;
            if (require("Server").ComponentType.THUMBNAIL === type) {
              ({ media, spoiler } = type);
              if (spoiler == null) {
                spoiler = false;
              }
              let tmpResult = require("MediaTypes");
              let unfurledMediaItemType = tmpResult.getUnfurledMediaItemType(media);
              let tmp6 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                let size = {
                  type: constants.COMPONENT,
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
                ({ proxyUrl: obj3.src, height } = media);
                if (height == null) {
                  height = 0;
                }
                size.height = height;
                let num = media.width;
                if (num == null) {
                  num = 0;
                }
                size.width = num;
                size.spoiler = spoiler;
                let contentScanMetadata = media.contentScanMetadata;
                let version;
                if (contentScanMetadata != null) {
                  version = contentScanMetadata.version;
                }
                size.contentScanVersion = version;
                tmpResult = require("FlagUtils");
                size.srcIsAnimated = tmpResult.hasFlag(
                  media.flags,
                  require("MediaTypes").UnfurledMediaItemFlags.IS_ANIMATED,
                );
                size.isVideo = "VIDEO" === unfurledMediaItemType;
                size.srcUnfurledMediaItem = media;
                tmp6 = size;
              }
              return tmp6;
            } else if (require("Server").ComponentType.MEDIA_GALLERY === type) {
              const items = type.items;
              return items.map((item) => {
                ({ media, spoiler } = item);
                if (spoiler == null) {
                  spoiler = false;
                }
                const unfurledMediaItemType = closure_1_0(dependencyMap[13]).getUnfurledMediaItemType(media);
                let tmp4 = null;
                if ("INVALID" !== unfurledMediaItemType) {
                  const size = {
                    type: constants.COMPONENT,
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
                  ({ proxyUrl: obj3.src, height } = media);
                  if (height == null) {
                    height = 0;
                  }
                  size.height = height;
                  let num = media.width;
                  if (num == null) {
                    num = 0;
                  }
                  size.width = num;
                  size.spoiler = spoiler;
                  const contentScanMetadata = media.contentScanMetadata;
                  let version;
                  if (contentScanMetadata != null) {
                    version = contentScanMetadata.version;
                  }
                  size.contentScanVersion = version;
                  size.srcIsAnimated = closure_1_0(dependencyMap[8]).hasFlag(
                    media.flags,
                    closure_1_0(dependencyMap[13]).UnfurledMediaItemFlags.IS_ANIMATED,
                  );
                  size.isVideo = "VIDEO" === unfurledMediaItemType;
                  size.srcUnfurledMediaItem = media;
                  tmp4 = size;
                  const tmpResult = closure_1_0(dependencyMap[8]);
                }
                return tmp4;
              });
            } else {
              return null;
            }
          },
        );
      }
    }
    items1 = [];
  }
  HermesBuiltin.arraySpread(items1, tmp3);
  return items;
}
const Constants = fn(1074);
({ MessageAttachmentFlags: closure_8, MessageEmbedMediaFlags: closure_9 } = Constants);
const ForumPostMediaTypes = { EMBED: "embed", ATTACHMENT: "attachment", COMPONENT: "component" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/forums/ForumPostMediaUtils.tsx");

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
    let tmp3 = MediaFormatTesters.isImageFile(filename.filename) && null != height;
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
      isVideoFileResult = MediaFormatTesters.isVideoFile(filename.filename);
    }
    if (isVideoFileResult) {
      isVideoFileResult = null != filename.proxy_url;
    }
    tmp = isVideoFileResult;
  }
  return tmp;
};
export { isMediaAttachment };
export { ForumPostMediaTypes };
export { getForumPostMedia };
export const useForumPostComponentsMedia = function useForumPostComponentsMedia(components) {
  const InlineEmbedMedia = UserSettings.InlineEmbedMedia;
  if (null == components) {
    return [];
  } else {
    components = components.components;
    if (tmp3) {
      if (null != components) {
        const _Array = Array;
        const tmpResult = InteractionComponentUtils;
        const flattenComponentsResult = InteractionComponentUtils.flattenComponents(components);
        const arr = Array.from(InteractionComponentUtils.flattenComponents(components).values());
        let found = Array.from(InteractionComponentUtils.flattenComponents(components).values())
          .flatMap((type) => {
            type = type.type;
            if (require("Server").ComponentType.THUMBNAIL === type) {
              ({ media, spoiler } = type);
              if (spoiler == null) {
                spoiler = false;
              }
              let tmpResult = require("MediaTypes");
              let unfurledMediaItemType = tmpResult.getUnfurledMediaItemType(media);
              let tmp6 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                let size = {
                  type: constants.COMPONENT,
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
                ({ proxyUrl: obj3.src, height } = media);
                if (height == null) {
                  height = 0;
                }
                size.height = height;
                let num = media.width;
                if (num == null) {
                  num = 0;
                }
                size.width = num;
                size.spoiler = spoiler;
                let contentScanMetadata = media.contentScanMetadata;
                let version;
                if (contentScanMetadata != null) {
                  version = contentScanMetadata.version;
                }
                size.contentScanVersion = version;
                tmpResult = require("FlagUtils");
                size.srcIsAnimated = tmpResult.hasFlag(
                  media.flags,
                  require("MediaTypes").UnfurledMediaItemFlags.IS_ANIMATED,
                );
                size.isVideo = "VIDEO" === unfurledMediaItemType;
                size.srcUnfurledMediaItem = media;
                tmp6 = size;
              }
              return tmp6;
            } else if (require("Server").ComponentType.MEDIA_GALLERY === type) {
              const items = type.items;
              return items.map((item) => {
                ({ media, spoiler } = item);
                if (spoiler == null) {
                  spoiler = false;
                }
                const unfurledMediaItemType = closure_1_0(dependencyMap[13]).getUnfurledMediaItemType(media);
                let tmp4 = null;
                if ("INVALID" !== unfurledMediaItemType) {
                  const size = {
                    type: constants.COMPONENT,
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
                  ({ proxyUrl: obj3.src, height } = media);
                  if (height == null) {
                    height = 0;
                  }
                  size.height = height;
                  let num = media.width;
                  if (num == null) {
                    num = 0;
                  }
                  size.width = num;
                  size.spoiler = spoiler;
                  const contentScanMetadata = media.contentScanMetadata;
                  let version;
                  if (contentScanMetadata != null) {
                    version = contentScanMetadata.version;
                  }
                  size.contentScanVersion = version;
                  size.srcIsAnimated = closure_1_0(dependencyMap[8]).hasFlag(
                    media.flags,
                    closure_1_0(dependencyMap[13]).UnfurledMediaItemFlags.IS_ANIMATED,
                  );
                  size.isVideo = "VIDEO" === unfurledMediaItemType;
                  size.srcUnfurledMediaItem = media;
                  tmp4 = size;
                  const tmpResult = closure_1_0(dependencyMap[8]);
                }
                return tmp4;
              });
            } else {
              return null;
            }
          })
          .filter(GlobalUtils.isNotNullish);
        const flatMapResult = Array.from(InteractionComponentUtils.flattenComponents(components).values()).flatMap(
          (type) => {
            type = type.type;
            if (require("Server").ComponentType.THUMBNAIL === type) {
              ({ media, spoiler } = type);
              if (spoiler == null) {
                spoiler = false;
              }
              let tmpResult = require("MediaTypes");
              let unfurledMediaItemType = tmpResult.getUnfurledMediaItemType(media);
              let tmp6 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                let size = {
                  type: constants.COMPONENT,
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
                ({ proxyUrl: obj3.src, height } = media);
                if (height == null) {
                  height = 0;
                }
                size.height = height;
                let num = media.width;
                if (num == null) {
                  num = 0;
                }
                size.width = num;
                size.spoiler = spoiler;
                let contentScanMetadata = media.contentScanMetadata;
                let version;
                if (contentScanMetadata != null) {
                  version = contentScanMetadata.version;
                }
                size.contentScanVersion = version;
                tmpResult = require("FlagUtils");
                size.srcIsAnimated = tmpResult.hasFlag(
                  media.flags,
                  require("MediaTypes").UnfurledMediaItemFlags.IS_ANIMATED,
                );
                size.isVideo = "VIDEO" === unfurledMediaItemType;
                size.srcUnfurledMediaItem = media;
                tmp6 = size;
              }
              return tmp6;
            } else if (require("Server").ComponentType.MEDIA_GALLERY === type) {
              const items = type.items;
              return items.map((item) => {
                ({ media, spoiler } = item);
                if (spoiler == null) {
                  spoiler = false;
                }
                const unfurledMediaItemType = closure_1_0(dependencyMap[13]).getUnfurledMediaItemType(media);
                let tmp4 = null;
                if ("INVALID" !== unfurledMediaItemType) {
                  const size = {
                    type: constants.COMPONENT,
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
                  ({ proxyUrl: obj3.src, height } = media);
                  if (height == null) {
                    height = 0;
                  }
                  size.height = height;
                  let num = media.width;
                  if (num == null) {
                    num = 0;
                  }
                  size.width = num;
                  size.spoiler = spoiler;
                  const contentScanMetadata = media.contentScanMetadata;
                  let version;
                  if (contentScanMetadata != null) {
                    version = contentScanMetadata.version;
                  }
                  size.contentScanVersion = version;
                  size.srcIsAnimated = closure_1_0(dependencyMap[8]).hasFlag(
                    media.flags,
                    closure_1_0(dependencyMap[13]).UnfurledMediaItemFlags.IS_ANIMATED,
                  );
                  size.isVideo = "VIDEO" === unfurledMediaItemType;
                  size.srcUnfurledMediaItem = media;
                  tmp4 = size;
                  const tmpResult = closure_1_0(dependencyMap[8]);
                }
                return tmp4;
              });
            } else {
              return null;
            }
          },
        );
      }
      return found;
    }
    found = [];
  }
};
export const useForumPostMediaThumbnail = function useForumPostMediaThumbnail(firstMessage, stateFromStores1) {
  let flag = hasSpoilerEmbeds;
  if (hasSpoilerEmbeds === undefined) {
    flag = false;
  }
  const tmp = useForumPostMediaProperties(firstMessage, flag);
  closure_1 = tmp;
  let items = [stateFromStores1, tmp];
  return noop.useMemo(() => {
    if (null == stateFromStores1) {
      return [];
    } else {
      let arr = closure_1;
      if (stateFromStores1.isMediaChannel()) {
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
  }, items);
};
export { useForumPostMediaProperties };
export const useFindFirstMediaProperties = function useFindFirstMediaProperties(firstMessage, hasSpoilerEmbeds) {
  const InlineAttachmentMedia = UserSettings.InlineAttachmentMedia;
  const tmp3 = getForumPostMedia(firstMessage, InlineAttachmentMedia.useSetting());
  const InlineEmbedMedia = UserSettings.InlineEmbedMedia;
  if (null == firstMessage) {
    let items = [];
  } else {
    const components = firstMessage.components;
    if (tmp5) {
      if (null != components) {
        const _Array = Array;
        const tmpResult = InteractionComponentUtils;
        const flattenComponentsResult = InteractionComponentUtils.flattenComponents(components);
        const arr = Array.from(InteractionComponentUtils.flattenComponents(components).values());
        items = Array.from(InteractionComponentUtils.flattenComponents(components).values())
          .flatMap((type) => {
            type = type.type;
            if (require("Server").ComponentType.THUMBNAIL === type) {
              ({ media, spoiler } = type);
              if (spoiler == null) {
                spoiler = false;
              }
              let tmpResult = require("MediaTypes");
              let unfurledMediaItemType = tmpResult.getUnfurledMediaItemType(media);
              let tmp6 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                let size = {
                  type: constants.COMPONENT,
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
                ({ proxyUrl: obj3.src, height } = media);
                if (height == null) {
                  height = 0;
                }
                size.height = height;
                let num = media.width;
                if (num == null) {
                  num = 0;
                }
                size.width = num;
                size.spoiler = spoiler;
                let contentScanMetadata = media.contentScanMetadata;
                let version;
                if (contentScanMetadata != null) {
                  version = contentScanMetadata.version;
                }
                size.contentScanVersion = version;
                tmpResult = require("FlagUtils");
                size.srcIsAnimated = tmpResult.hasFlag(
                  media.flags,
                  require("MediaTypes").UnfurledMediaItemFlags.IS_ANIMATED,
                );
                size.isVideo = "VIDEO" === unfurledMediaItemType;
                size.srcUnfurledMediaItem = media;
                tmp6 = size;
              }
              return tmp6;
            } else if (require("Server").ComponentType.MEDIA_GALLERY === type) {
              const items = type.items;
              return items.map((item) => {
                ({ media, spoiler } = item);
                if (spoiler == null) {
                  spoiler = false;
                }
                const unfurledMediaItemType = closure_1_0(dependencyMap[13]).getUnfurledMediaItemType(media);
                let tmp4 = null;
                if ("INVALID" !== unfurledMediaItemType) {
                  const size = {
                    type: constants.COMPONENT,
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
                  ({ proxyUrl: obj3.src, height } = media);
                  if (height == null) {
                    height = 0;
                  }
                  size.height = height;
                  let num = media.width;
                  if (num == null) {
                    num = 0;
                  }
                  size.width = num;
                  size.spoiler = spoiler;
                  const contentScanMetadata = media.contentScanMetadata;
                  let version;
                  if (contentScanMetadata != null) {
                    version = contentScanMetadata.version;
                  }
                  size.contentScanVersion = version;
                  size.srcIsAnimated = closure_1_0(dependencyMap[8]).hasFlag(
                    media.flags,
                    closure_1_0(dependencyMap[13]).UnfurledMediaItemFlags.IS_ANIMATED,
                  );
                  size.isVideo = "VIDEO" === unfurledMediaItemType;
                  size.srcUnfurledMediaItem = media;
                  tmp4 = size;
                  const tmpResult = closure_1_0(dependencyMap[8]);
                }
                return tmp4;
              });
            } else {
              return null;
            }
          })
          .filter(GlobalUtils.isNotNullish);
        const flatMapResult = Array.from(InteractionComponentUtils.flattenComponents(components).values()).flatMap(
          (type) => {
            type = type.type;
            if (require("Server").ComponentType.THUMBNAIL === type) {
              ({ media, spoiler } = type);
              if (spoiler == null) {
                spoiler = false;
              }
              let tmpResult = require("MediaTypes");
              let unfurledMediaItemType = tmpResult.getUnfurledMediaItemType(media);
              let tmp6 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                let size = {
                  type: constants.COMPONENT,
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
                ({ proxyUrl: obj3.src, height } = media);
                if (height == null) {
                  height = 0;
                }
                size.height = height;
                let num = media.width;
                if (num == null) {
                  num = 0;
                }
                size.width = num;
                size.spoiler = spoiler;
                let contentScanMetadata = media.contentScanMetadata;
                let version;
                if (contentScanMetadata != null) {
                  version = contentScanMetadata.version;
                }
                size.contentScanVersion = version;
                tmpResult = require("FlagUtils");
                size.srcIsAnimated = tmpResult.hasFlag(
                  media.flags,
                  require("MediaTypes").UnfurledMediaItemFlags.IS_ANIMATED,
                );
                size.isVideo = "VIDEO" === unfurledMediaItemType;
                size.srcUnfurledMediaItem = media;
                tmp6 = size;
              }
              return tmp6;
            } else if (require("Server").ComponentType.MEDIA_GALLERY === type) {
              const items = type.items;
              return items.map((item) => {
                ({ media, spoiler } = item);
                if (spoiler == null) {
                  spoiler = false;
                }
                const unfurledMediaItemType = closure_1_0(dependencyMap[13]).getUnfurledMediaItemType(media);
                let tmp4 = null;
                if ("INVALID" !== unfurledMediaItemType) {
                  const size = {
                    type: constants.COMPONENT,
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
                  ({ proxyUrl: obj3.src, height } = media);
                  if (height == null) {
                    height = 0;
                  }
                  size.height = height;
                  let num = media.width;
                  if (num == null) {
                    num = 0;
                  }
                  size.width = num;
                  size.spoiler = spoiler;
                  const contentScanMetadata = media.contentScanMetadata;
                  let version;
                  if (contentScanMetadata != null) {
                    version = contentScanMetadata.version;
                  }
                  size.contentScanVersion = version;
                  size.srcIsAnimated = closure_1_0(dependencyMap[8]).hasFlag(
                    media.flags,
                    closure_1_0(dependencyMap[13]).UnfurledMediaItemFlags.IS_ANIMATED,
                  );
                  size.isVideo = "VIDEO" === unfurledMediaItemType;
                  size.srcUnfurledMediaItem = media;
                  tmp4 = size;
                  const tmpResult = closure_1_0(dependencyMap[8]);
                }
                return tmp4;
              });
            } else {
              return null;
            }
          },
        );
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
  const InlineAttachmentMedia = UserSettings.InlineAttachmentMedia;
  const tmp3 = getForumPostMedia(firstMessage, InlineAttachmentMedia.useSetting());
  const InlineEmbedMedia = UserSettings.InlineEmbedMedia;
  if (null == firstMessage) {
    let items = [];
  } else {
    const components = firstMessage.components;
    if (tmp5) {
      if (null != components) {
        const _Array = Array;
        let tmpResult = InteractionComponentUtils;
        const flattenComponentsResult = InteractionComponentUtils.flattenComponents(components);
        const arr = Array.from(InteractionComponentUtils.flattenComponents(components).values());
        items = Array.from(InteractionComponentUtils.flattenComponents(components).values())
          .flatMap((type) => {
            type = type.type;
            if (require("Server").ComponentType.THUMBNAIL === type) {
              ({ media, spoiler } = type);
              if (spoiler == null) {
                spoiler = false;
              }
              let tmpResult = require("MediaTypes");
              let unfurledMediaItemType = tmpResult.getUnfurledMediaItemType(media);
              let tmp6 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                let size = {
                  type: constants.COMPONENT,
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
                ({ proxyUrl: obj3.src, height } = media);
                if (height == null) {
                  height = 0;
                }
                size.height = height;
                let num = media.width;
                if (num == null) {
                  num = 0;
                }
                size.width = num;
                size.spoiler = spoiler;
                let contentScanMetadata = media.contentScanMetadata;
                let version;
                if (contentScanMetadata != null) {
                  version = contentScanMetadata.version;
                }
                size.contentScanVersion = version;
                tmpResult = require("FlagUtils");
                size.srcIsAnimated = tmpResult.hasFlag(
                  media.flags,
                  require("MediaTypes").UnfurledMediaItemFlags.IS_ANIMATED,
                );
                size.isVideo = "VIDEO" === unfurledMediaItemType;
                size.srcUnfurledMediaItem = media;
                tmp6 = size;
              }
              return tmp6;
            } else if (require("Server").ComponentType.MEDIA_GALLERY === type) {
              const items = type.items;
              return items.map((item) => {
                ({ media, spoiler } = item);
                if (spoiler == null) {
                  spoiler = false;
                }
                const unfurledMediaItemType = closure_1_0(dependencyMap[13]).getUnfurledMediaItemType(media);
                let tmp4 = null;
                if ("INVALID" !== unfurledMediaItemType) {
                  const size = {
                    type: constants.COMPONENT,
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
                  ({ proxyUrl: obj3.src, height } = media);
                  if (height == null) {
                    height = 0;
                  }
                  size.height = height;
                  let num = media.width;
                  if (num == null) {
                    num = 0;
                  }
                  size.width = num;
                  size.spoiler = spoiler;
                  const contentScanMetadata = media.contentScanMetadata;
                  let version;
                  if (contentScanMetadata != null) {
                    version = contentScanMetadata.version;
                  }
                  size.contentScanVersion = version;
                  size.srcIsAnimated = closure_1_0(dependencyMap[8]).hasFlag(
                    media.flags,
                    closure_1_0(dependencyMap[13]).UnfurledMediaItemFlags.IS_ANIMATED,
                  );
                  size.isVideo = "VIDEO" === unfurledMediaItemType;
                  size.srcUnfurledMediaItem = media;
                  tmp4 = size;
                  const tmpResult = closure_1_0(dependencyMap[8]);
                }
                return tmp4;
              });
            } else {
              return null;
            }
          })
          .filter(GlobalUtils.isNotNullish);
        const flatMapResult = Array.from(InteractionComponentUtils.flattenComponents(components).values()).flatMap(
          (type) => {
            type = type.type;
            if (require("Server").ComponentType.THUMBNAIL === type) {
              ({ media, spoiler } = type);
              if (spoiler == null) {
                spoiler = false;
              }
              let tmpResult = require("MediaTypes");
              let unfurledMediaItemType = tmpResult.getUnfurledMediaItemType(media);
              let tmp6 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                let size = {
                  type: constants.COMPONENT,
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
                ({ proxyUrl: obj3.src, height } = media);
                if (height == null) {
                  height = 0;
                }
                size.height = height;
                let num = media.width;
                if (num == null) {
                  num = 0;
                }
                size.width = num;
                size.spoiler = spoiler;
                let contentScanMetadata = media.contentScanMetadata;
                let version;
                if (contentScanMetadata != null) {
                  version = contentScanMetadata.version;
                }
                size.contentScanVersion = version;
                tmpResult = require("FlagUtils");
                size.srcIsAnimated = tmpResult.hasFlag(
                  media.flags,
                  require("MediaTypes").UnfurledMediaItemFlags.IS_ANIMATED,
                );
                size.isVideo = "VIDEO" === unfurledMediaItemType;
                size.srcUnfurledMediaItem = media;
                tmp6 = size;
              }
              return tmp6;
            } else if (require("Server").ComponentType.MEDIA_GALLERY === type) {
              const items = type.items;
              return items.map((item) => {
                ({ media, spoiler } = item);
                if (spoiler == null) {
                  spoiler = false;
                }
                const unfurledMediaItemType = closure_1_0(dependencyMap[13]).getUnfurledMediaItemType(media);
                let tmp4 = null;
                if ("INVALID" !== unfurledMediaItemType) {
                  const size = {
                    type: constants.COMPONENT,
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
                  ({ proxyUrl: obj3.src, height } = media);
                  if (height == null) {
                    height = 0;
                  }
                  size.height = height;
                  let num = media.width;
                  if (num == null) {
                    num = 0;
                  }
                  size.width = num;
                  size.spoiler = spoiler;
                  const contentScanMetadata = media.contentScanMetadata;
                  let version;
                  if (contentScanMetadata != null) {
                    version = contentScanMetadata.version;
                  }
                  size.contentScanVersion = version;
                  size.srcIsAnimated = closure_1_0(dependencyMap[8]).hasFlag(
                    media.flags,
                    closure_1_0(dependencyMap[13]).UnfurledMediaItemFlags.IS_ANIMATED,
                  );
                  size.isVideo = "VIDEO" === unfurledMediaItemType;
                  size.srcUnfurledMediaItem = media;
                  tmp4 = size;
                  const tmpResult = closure_1_0(dependencyMap[8]);
                }
                return tmp4;
              });
            } else {
              return null;
            }
          },
        );
      }
    }
    items = [];
  }
  let tmp4 = useForumPostEmbeds(firstMessage, hasSpoilerEmbeds);
  return null == tmp3[0] && null == items[0] && null != useForumPostEmbeds(firstMessage, hasSpoilerEmbeds)[0];
};
export const shouldShowAddMediaToOriginalPostModal = function shouldShowAddMediaToOriginalPostModal(uploads, id) {
  const channel = ChannelStore.getChannel(id);
  if (null == channel) {
    return false;
  } else {
    const message = MessageStore.getMessage(channel.id, SnowflakeUtilsDefault.castChannelIdAsMessageId(channel.id));
    let tmp8 = null != message;
    if (tmp8) {
      let tmp2 =
        uploads.length > 0 &&
        null != uploads.find((isImage) => isImage.isImage || isImage.isVideo) &&
        channel.isForumPost();
      if (tmp2) {
        const currentUser = UserStore.getCurrentUser();
        id = undefined;
        if (currentUser != null) {
          id = currentUser.id;
        }
        tmp2 = channel.ownerId === id;
      }
      if (tmp2) {
        tmp2 = 0 === ThreadMessageStore.getCount(channel.id);
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
                let tmp3 = require("MediaFormatTesters").isImageFile(filename.filename) && null != height;
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
                const obj = require("MediaFormatTesters");
              }
              if (!flag) {
                let tmp4 = null != filename;
                if (tmp4) {
                  let isVideoFileResult = null != filename;
                  if (isVideoFileResult) {
                    isVideoFileResult = require("MediaFormatTesters").isVideoFile(filename.filename);
                    const obj2 = require("MediaFormatTesters");
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
      const obj = { containsVideo: containsVideo.containsVideo || isVideo.isVideo, containsGif: null };
      let containsGif = containsVideo.containsGif;
      if (!containsGif) {
        containsGif = require("MediaFormatTesters").isAnimatedImageUrl(isVideo.src);
        const obj2 = require("MediaFormatTesters");
      }
      obj.containsGif = containsGif;
      return obj;
    },
    { containsVideo: false, containsGif: false },
  );
};
