// === Module 8454: ForumPostMediaUtils ===

// Module 8454 (ForumPostMediaUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import c from "c" /* 576 */;
import URLUtilsDefault from "URLUtils" /* 1383 */;
import GlobalUtils from "GlobalUtils" /* 1387 */;
import FlagUtils from "FlagUtils" /* 1402 */;
import UserSettings from "UserSettings" /* 2040 */;
import MediaFormatTesters from "MediaFormatTesters" /* 5415 */;
import InteractionComponentUtils from "InteractionComponentUtils" /* 5432 */;
import noop from "module_19" /* 19 */;
import ThreadMessageStore from "ThreadMessageStore" /* 6992 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import MessageStore from "MessageStore" /* 5428 */;
import UserStore from "UserStore" /* 1389 */;

const require = globalThis.__r;

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
                hasFlagResult = require("FlagUtils").hasFlag(flags.flags, constants.IS_THUMBNAIL);
                const tmp12Result = require("FlagUtils");
              }
              let str1 = proxy_url;
              if (proxy_url == null) {
                str1 = tmp;
              }
              if (isVideoFileResult) {
                const str = URLUtilsDefault.toURLSafe(proxy_url);
                if (null == str) {
                  return null;
                } else {
                  const searchParams = str.searchParams;
                  searchParams.append("format", "webp");
                  str1 = str.toString();
                }
              }
              const size = { type: constants2.ATTACHMENT, src: str1, width, height, spoiler: null, flags: null, contentScanVersion: null, alt: null, isVideo: null, isThumbnail: null, attachmentId: null, mediaIndex: null, srcIsAnimated: null };
              const obj6 = require("MediaFormatTesters");
              let num = flags;
              if (flags == null) {
                num = 0;
              }
              size.spoiler = require("FlagUtils").hasFlag(num, constants.IS_SPOILER);
              size.flags = flags;
              size.contentScanVersion = tmp4;
              size.alt = tmp2;
              size.isVideo = isVideoFileResult;
              size.isThumbnail = hasFlagResult;
              size.attachmentId = flags.id;
              size.mediaIndex = mediaIndex;
              const tmp12Result3 = require("FlagUtils");
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
const Constants = fn(1085);
({ MessageAttachmentFlags: closure_8, MessageEmbedMediaFlags: closure_9 } = Constants);
const ForumPostMediaTypes = { EMBED: "embed", ATTACHMENT: "attachment", COMPONENT: "component" };
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function useForumPostMedia(attachments) {
  const cResult = c.c(3);
  const InlineAttachmentMedia = UserSettings.InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  if (cResult[0] === setting) {
    if (cResult[1] === attachments) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  const tmp4 = getForumPostMedia(attachments, setting);
  cResult[0] = setting;
  cResult[1] = attachments;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : (function useForumPostMedia(attachments) {
  const InlineAttachmentMedia = UserSettings.InlineAttachmentMedia;
  return getForumPostMedia(attachments, InlineAttachmentMedia.useSetting());
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function useForumPostEmbeds(embeds, spoiler) {
  _require = spoiler;
  let found = dependencyMap;
  const cResult = require("c").c(7);
  const InlineEmbedMedia = require("UserSettings").InlineEmbedMedia;
  const setting = InlineEmbedMedia.useSetting();
  const RenderEmbeds = require("UserSettings").RenderEmbeds;
  if (null == embeds) {
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [];
      cResult[0] = items;
      let first = items;
    } else {
      first = cResult[0];
    }
    return first;
  } else {
    const first1 = embeds.messageSnapshots[0];
    let moderatorReport;
    if (first1 != null) {
      moderatorReport = first1.moderatorReport;
    }
    if (null != moderatorReport) {
      const first2 = embeds.messageSnapshots[0];
      embeds = undefined;
      if (first2 != null) {
        embeds = first2.message.embeds;
      }
      let embeds1 = embeds;
    } else {
      embeds1 = embeds.embeds;
    }
    if (setting) {
      if (tmp5) {
        if (null != embeds1) {
          if (cResult[2] === embeds1) {
            if (cResult[3] === spoiler) {
              return cResult[4];
            }
          }
          if (cResult[5] !== spoiler) {
            const fn = function p(image, mediaIndex) {
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
                  const size = { type: obj.EMBED, src: null, height: null, width: null, spoiler: null, flags: null, contentScanVersion: null, isVideo: null, mediaIndex: null, srcIsAnimated: null };
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
            };
            cResult[5] = spoiler;
            cResult[6] = fn;
            let tmp9 = fn;
          } else {
            tmp9 = cResult[6];
          }
          const mapped = embeds1.map(tmp9);
          found = mapped.filter(tmp(1387).isNotNullish);
          cResult[2] = embeds1;
          cResult[3] = spoiler;
          cResult[4] = found;
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [];
      cResult[1] = items1;
      let tmp12 = items1;
    } else {
      tmp12 = cResult[1];
    }
    return tmp12;
  }
  let obj = require("c");
  tmp = _require;
}) : (function useForumPostEmbeds(embeds, spoiler) {
  _require = spoiler;
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
                const size = { type: obj.EMBED, src: null, height: null, width: null, spoiler: null, flags: null, contentScanVersion: null, isVideo: null, mediaIndex: null, srcIsAnimated: null };
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
          let found = mapped.filter(tmp(1387).isNotNullish);
        }
        return found;
      }
    }
    found = [];
  }
  tmp = _require;
});
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useForumPostComponentsMedia(components) {
  let found = dependencyMap;
  const cResult = c.c(4);
  const InlineEmbedMedia = UserSettings.InlineEmbedMedia;
  if (null == components) {
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      let items = [];
      cResult[0] = items;
      let first = items;
    } else {
      first = cResult[0];
    }
    return first;
  } else {
    components = components.components;
    if (tmp4) {
      if (null != components) {
        if (cResult[2] !== components) {
          const _Array = Array;
          let tmpResult = InteractionComponentUtils;
          const flattenComponentsResult = InteractionComponentUtils.flattenComponents(components);
          const arr = Array.from(InteractionComponentUtils.flattenComponents(components).values());
          found = Array.from(InteractionComponentUtils.flattenComponents(components).values()).flatMap((type) => {
            type = type.type;
            if (require("Server").ComponentType.THUMBNAIL === type) {
              ({ media, spoiler } = type);
              if (spoiler == null) {
                spoiler = false;
              }
              let unfurledMediaItemType = require("MediaTypes").getUnfurledMediaItemType(media);
              let tmp6 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                let size = { type: constants.COMPONENT, src: null, height: null, width: null, spoiler: null, contentScanVersion: null, flags: 0, srcIsAnimated: null, isVideo: null, mediaIndex: 0, srcUnfurledMediaItem: null };
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
                size.srcIsAnimated = require("FlagUtils").hasFlag(media.flags, require("MediaTypes").UnfurledMediaItemFlags.IS_ANIMATED);
                size.isVideo = "VIDEO" === unfurledMediaItemType;
                size.srcUnfurledMediaItem = media;
                tmp6 = size;
                const tmpResult2 = require("FlagUtils");
              }
              return tmp6;
            } else if (require("Server").ComponentType.MEDIA_GALLERY === type) {
              const items = type.items;
              return items.map((item) => {
                ({ media, spoiler } = item);
                if (spoiler == null) {
                  spoiler = false;
                }
                const unfurledMediaItemType = closure_1_0(dependencyMap[15]).getUnfurledMediaItemType(media);
                let tmp4 = null;
                if ("INVALID" !== unfurledMediaItemType) {
                  const size = { type: constants.COMPONENT, src: null, height: null, width: null, spoiler: null, contentScanVersion: null, flags: 0, srcIsAnimated: null, isVideo: null, mediaIndex: 0, srcUnfurledMediaItem: null };
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
                  size.srcIsAnimated = closure_1_0(dependencyMap[8]).hasFlag(media.flags, closure_1_0(dependencyMap[15]).UnfurledMediaItemFlags.IS_ANIMATED);
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
          }).filter(GlobalUtils.isNotNullish);
          cResult[2] = components;
          cResult[3] = found;
          const flatMapResult = Array.from(InteractionComponentUtils.flattenComponents(components).values()).flatMap((type) => {
            type = type.type;
            if (require("Server").ComponentType.THUMBNAIL === type) {
              ({ media, spoiler } = type);
              if (spoiler == null) {
                spoiler = false;
              }
              let unfurledMediaItemType = require("MediaTypes").getUnfurledMediaItemType(media);
              let tmp6 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                let size = { type: constants.COMPONENT, src: null, height: null, width: null, spoiler: null, contentScanVersion: null, flags: 0, srcIsAnimated: null, isVideo: null, mediaIndex: 0, srcUnfurledMediaItem: null };
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
                size.srcIsAnimated = require("FlagUtils").hasFlag(media.flags, require("MediaTypes").UnfurledMediaItemFlags.IS_ANIMATED);
                size.isVideo = "VIDEO" === unfurledMediaItemType;
                size.srcUnfurledMediaItem = media;
                tmp6 = size;
                const tmpResult2 = require("FlagUtils");
              }
              return tmp6;
            } else if (require("Server").ComponentType.MEDIA_GALLERY === type) {
              const items = type.items;
              return items.map((item) => {
                ({ media, spoiler } = item);
                if (spoiler == null) {
                  spoiler = false;
                }
                const unfurledMediaItemType = closure_1_0(dependencyMap[15]).getUnfurledMediaItemType(media);
                let tmp4 = null;
                if ("INVALID" !== unfurledMediaItemType) {
                  const size = { type: constants.COMPONENT, src: null, height: null, width: null, spoiler: null, contentScanVersion: null, flags: 0, srcIsAnimated: null, isVideo: null, mediaIndex: 0, srcUnfurledMediaItem: null };
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
                  size.srcIsAnimated = closure_1_0(dependencyMap[8]).hasFlag(media.flags, closure_1_0(dependencyMap[15]).UnfurledMediaItemFlags.IS_ANIMATED);
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
          });
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [];
      cResult[1] = items1;
      let tmp6 = items1;
    } else {
      tmp6 = cResult[1];
    }
    return tmp6;
  }
}) : (function useForumPostComponentsMedia(components) {
  const InlineEmbedMedia = UserSettings.InlineEmbedMedia;
  if (null == components) {
    return [];
  } else {
    components = components.components;
    if (tmp3) {
      if (null != components) {
        const _Array = Array;
        let tmpResult = InteractionComponentUtils;
        const flattenComponentsResult = InteractionComponentUtils.flattenComponents(components);
        const arr = Array.from(InteractionComponentUtils.flattenComponents(components).values());
        let found = Array.from(InteractionComponentUtils.flattenComponents(components).values()).flatMap((type) => {
          type = type.type;
          if (require("Server").ComponentType.THUMBNAIL === type) {
            ({ media, spoiler } = type);
            if (spoiler == null) {
              spoiler = false;
            }
            let unfurledMediaItemType = require("MediaTypes").getUnfurledMediaItemType(media);
            let tmp6 = null;
            if ("INVALID" !== unfurledMediaItemType) {
              let size = { type: constants.COMPONENT, src: null, height: null, width: null, spoiler: null, contentScanVersion: null, flags: 0, srcIsAnimated: null, isVideo: null, mediaIndex: 0, srcUnfurledMediaItem: null };
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
              size.srcIsAnimated = require("FlagUtils").hasFlag(media.flags, require("MediaTypes").UnfurledMediaItemFlags.IS_ANIMATED);
              size.isVideo = "VIDEO" === unfurledMediaItemType;
              size.srcUnfurledMediaItem = media;
              tmp6 = size;
              const tmpResult2 = require("FlagUtils");
            }
            return tmp6;
          } else if (require("Server").ComponentType.MEDIA_GALLERY === type) {
            const items = type.items;
            return items.map((item) => {
              ({ media, spoiler } = item);
              if (spoiler == null) {
                spoiler = false;
              }
              const unfurledMediaItemType = closure_1_0(dependencyMap[15]).getUnfurledMediaItemType(media);
              let tmp4 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                const size = { type: constants.COMPONENT, src: null, height: null, width: null, spoiler: null, contentScanVersion: null, flags: 0, srcIsAnimated: null, isVideo: null, mediaIndex: 0, srcUnfurledMediaItem: null };
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
                size.srcIsAnimated = closure_1_0(dependencyMap[8]).hasFlag(media.flags, closure_1_0(dependencyMap[15]).UnfurledMediaItemFlags.IS_ANIMATED);
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
        }).filter(GlobalUtils.isNotNullish);
        const flatMapResult = Array.from(InteractionComponentUtils.flattenComponents(components).values()).flatMap((type) => {
          type = type.type;
          if (require("Server").ComponentType.THUMBNAIL === type) {
            ({ media, spoiler } = type);
            if (spoiler == null) {
              spoiler = false;
            }
            let unfurledMediaItemType = require("MediaTypes").getUnfurledMediaItemType(media);
            let tmp6 = null;
            if ("INVALID" !== unfurledMediaItemType) {
              let size = { type: constants.COMPONENT, src: null, height: null, width: null, spoiler: null, contentScanVersion: null, flags: 0, srcIsAnimated: null, isVideo: null, mediaIndex: 0, srcUnfurledMediaItem: null };
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
              size.srcIsAnimated = require("FlagUtils").hasFlag(media.flags, require("MediaTypes").UnfurledMediaItemFlags.IS_ANIMATED);
              size.isVideo = "VIDEO" === unfurledMediaItemType;
              size.srcUnfurledMediaItem = media;
              tmp6 = size;
              const tmpResult2 = require("FlagUtils");
            }
            return tmp6;
          } else if (require("Server").ComponentType.MEDIA_GALLERY === type) {
            const items = type.items;
            return items.map((item) => {
              ({ media, spoiler } = item);
              if (spoiler == null) {
                spoiler = false;
              }
              const unfurledMediaItemType = closure_1_0(dependencyMap[15]).getUnfurledMediaItemType(media);
              let tmp4 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                const size = { type: constants.COMPONENT, src: null, height: null, width: null, spoiler: null, contentScanVersion: null, flags: 0, srcIsAnimated: null, isVideo: null, mediaIndex: 0, srcUnfurledMediaItem: null };
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
                size.srcIsAnimated = closure_1_0(dependencyMap[8]).hasFlag(media.flags, closure_1_0(dependencyMap[15]).UnfurledMediaItemFlags.IS_ANIMATED);
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
        });
      }
      return found;
    }
    found = [];
  }
});
let closure_15 = tmp3;
fn(558);
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useForumPostMediaProperties(arg0, arg1) {
  const cResult = c.c(4);
  const tmp2 = closure_13(arg0);
  const tmp3 = closure_14(arg0, arg1);
  const tmp4 = closure_15(arg0);
  if (cResult[0] === tmp4) {
    if (cResult[1] === tmp3) {
      if (cResult[2] === tmp2) {
        let tmp5 = cResult[3];
      }
      return tmp5;
    }
  }
  const items = [...tmp4];
  cResult[0] = tmp4;
  cResult[1] = tmp3;
  cResult[2] = tmp2;
  cResult[3] = items;
  tmp5 = items;
}) : (function useForumPostMediaProperties(arg0, arg1) {
  const items = [...closure_13(arg0), ...closure_14(arg0, arg1), ...closure_15(arg0)];
  return items;
});
let closure_16 = tmp5;
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useForumPostMediaThumbnail(arg0, isMediaChannel, arg2) {
  const cResult = c.c(7);
  let tmp3 = undefined !== arg2;
  if (tmp3) {
    tmp3 = arg2;
  }
  const tmp2Result = closure_16(arg0, tmp3);
  if (null != isMediaChannel) {
    let first = tmp2Result;
    if (isMediaChannel.isMediaChannel()) {
      if (cResult[1] !== tmp2Result) {
        const _Symbol2 = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function h(isThumbnail) {
            return isThumbnail.isThumbnail;
          };
          cResult[3] = fn;
          let tmp8 = fn;
        } else {
          tmp8 = cResult[3];
        }
        const found = tmp2Result.find(tmp8);
        cResult[1] = tmp2Result;
        cResult[2] = found;
      } else {
        if (cResult[4] === tmp2Result) {
        }
        let tmp12 = tmp2Result;
        if (null != cResult[2]) {
          const items = [tmp6];
          tmp12 = items;
        }
        cResult[4] = tmp2Result;
        cResult[5] = cResult[2];
        cResult[6] = tmp12;
      }
    }
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [];
      cResult[0] = items1;
      first = items1;
    } else {
      first = cResult[0];
    }
  }
  return first;
}) : (function useForumPostMediaThumbnail(arg0, arg1) {
  const mediaChannel = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const tmp = closure_16(arg0, flag);
  closure_1 = tmp;
  let items = [arg1, tmp];
  return noop.useMemo(() => {
    if (null == mediaChannel) {
      return [];
    } else {
      let arr = closure_1;
      if (mediaChannel.isMediaChannel()) {
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
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFindFirstMediaProperties(arg0, arg1) {
  const tmp = closure_13(arg0);
  let first = tmp[0];
  const tmp2 = closure_14(arg0, arg1);
  if (first == null) {
    first = tmp2[0];
  }
  if (first == null) {
    first = tmp3[0];
  }
  if (first == null) {
    first = null;
  }
  return first;
}) : (function useFindFirstMediaProperties(arg0, arg1) {
  const tmp = closure_13(arg0);
  let first = tmp[0];
  const tmp2 = closure_14(arg0, arg1);
  if (first == null) {
    first = tmp2[0];
  }
  if (first == null) {
    first = tmp3[0];
  }
  if (first == null) {
    first = null;
  }
  return first;
});
function isValidImageAttachment(filename) {
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
}
function isValidVideoAttachment(filename) {
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
}
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
export { isValidImageAttachment };
export { isValidVideoAttachment };
export { isMediaAttachment };
export { ForumPostMediaTypes };
export { getForumPostMedia };
export const useForumPostComponentsMedia = tmp3;
export const useForumPostMediaThumbnail = tmp4;
export const useForumPostMediaProperties = tmp5;
export const useFindFirstMediaProperties = tmp6;
export const useFirstMediaIsEmbed = ReactCompilerGating.isReactCompilerEnabled() ? (function useFirstMediaIsEmbed(arg0, arg1) {
  const tmp = closure_13(arg0);
  const tmp2 = closure_14(arg0, arg1);
  return null == tmp[0] && null == closure_15(arg0)[0] && null != closure_14(arg0, arg1)[0];
}) : (function useFirstMediaIsEmbed(arg0, arg1) {
  const tmp = closure_13(arg0);
  const tmp2 = closure_14(arg0, arg1);
  return null == tmp[0] && null == closure_15(arg0)[0] && null != closure_14(arg0, arg1)[0];
});
export const shouldShowAddMediaToOriginalPostModal = function shouldShowAddMediaToOriginalPostModal(uploads, id) {
  const channel = ChannelStore.getChannel(id);
  if (null == channel) {
    return false;
  } else {
    const message = MessageStore.getMessage(channel.id, SnowflakeUtilsDefault.castChannelIdAsMessageId(channel.id));
    let tmp8 = null != message;
    if (tmp8) {
      let tmp2 = uploads.length > 0 && null != uploads.find((isImage) => isImage.isImage || isImage.isVideo) && channel.isForumPost();
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
          tmp7 = null == attachments.find((filename) => {
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
  return media.reduce((containsVideo, isVideo) => {
    const obj = { containsVideo: containsVideo.containsVideo || isVideo.isVideo, containsGif: null };
    let containsGif = containsVideo.containsGif;
    if (!containsGif) {
      containsGif = require("MediaFormatTesters").isAnimatedImageUrl(isVideo.src);
      const obj2 = require("MediaFormatTesters");
    }
    obj.containsGif = containsGif;
    return obj;
  }, { containsVideo: false, containsGif: false });
};