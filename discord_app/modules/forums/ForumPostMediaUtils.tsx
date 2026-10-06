// === Module 7551: ForumPostMediaUtils ===

// Module 7551 (ForumPostMediaUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react2 from "react" /* 576 */;
import URLUtilsDefault from "URLUtils" /* 1371 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import UserSettings from "UserSettings" /* 2028 */;
import MediaFormatTesters from "MediaFormatTesters" /* 5046 */;
import InteractionComponentUtils from "InteractionComponentUtils" /* 5120 */;
import react from "react" /* 19 */;
import ThreadMessageStore from "ThreadMessageStore" /* 6819 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MessageStore from "MessageStore" /* 5116 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, components, embeds, type;

let c9;
let metroImportAll;
function isMediaAttachment(filename) {
  let height;
  let width;
  let flag = false;
  if (null != filename) {
    ({ height, width } = filename);
    filename = filename.filename;
    const obj = MediaFormatTesters;
    flag = obj.isImageFile(filename) && null != height && height > 0 && null != width && width > 0;
    const tmp3 = obj.isImageFile(filename) && null != height && height > 0 && null != width && width > 0;
  }
  if (!flag) {
    let tmp4 = null != filename;
    if (tmp4) {
      let isVideoFileResult = null != filename;
      if (isVideoFileResult) {
        const obj2 = MediaFormatTesters;
        isVideoFileResult = obj2.isVideoFile(filename.filename);
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
  let InlineAttachmentMedia;
  let constants2;
  let setting = InlineAttachmentMedia;
  if (InlineAttachmentMedia === undefined) {
    InlineAttachmentMedia = UserSettings.InlineAttachmentMedia;
    setting = InlineAttachmentMedia.getSetting();
  }
  if (setting) {
    let attachments1;
    const tmp4 = attachments;
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
      attachments1 = attachments;
    } else if (attachments != null) {
      attachments1 = attachments.attachments;
    }
    if (null != attachments) {
      let found1;
      if (null != attachments1) {
        const found = attachments1.filter(isMediaAttachment);
        const mapped = found.map((flags, mediaIndex) => {
          let hasFlag;
          let hasFlag2;
          let height;
          let num;
          let num2;
          let proxy_url;
          let width;
          ({ proxy_url, flags, width, height } = flags);
          if (null != width) {
            if (null != height) {
              const obj4 = require("MediaFormatTesters");
              const isVideoFileResult = obj4.isVideoFile(tmp3);
              let hasFlagResult = null != flags.flags;
              if (hasFlagResult) {
                const tmp14Result = require("FlagUtils");
                hasFlagResult = tmp14Result.hasFlag(flags.flags, constants.IS_THUMBNAIL);
              }
              let str1 = proxy_url;
              if (proxy_url == null) {
                str1 = tmp;
              }
              if (isVideoFileResult) {
                const obj2 = URLUtilsDefault;
                const str = obj2.toURLSafe(proxy_url);
                if (null == str) {
                  return null;
                } else {
                  const searchParams = str.searchParams;
                  searchParams.append("format", "webp");
                  str1 = str.toString();
                }
              }
              size = { type: constants2.ATTACHMENT, src: str1, width, height, spoiler: hasFlag(num, constants.IS_SPOILER), flags, contentScanVersion: tmp4, alt: tmp2, isVideo: isVideoFileResult, isThumbnail: hasFlagResult, attachmentId: flags.id, mediaIndex, srcIsAnimated: hasFlag2(num2, constants.IS_ANIMATED) };
              num = flags;
              hasFlag = require("FlagUtils").hasFlag;
              require("FlagUtils");
              if (flags == null) {
                num = 0;
              }
              num2 = flags.flags;
              hasFlag2 = require("FlagUtils").hasFlag;
              require("FlagUtils");
              if (num2 == null) {
                num2 = 0;
              }
              return size;
            }
          }
          return null;
        });
        found1 = mapped.filter(GlobalUtils.isNotNullish);
      }
      return found1;
    }
    found1 = [];
  } else {
    return [];
  }
}
({ MessageAttachmentFlags: metroImportAll, MessageEmbedMediaFlags: c9 } = Constants);
const ForumPostMediaTypes = { EMBED: "embed", ATTACHMENT: "attachment", COMPONENT: "component" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((attachments) => {
  const obj = react2;
  const cResult = obj.c(3);
  const InlineAttachmentMedia = UserSettings.InlineAttachmentMedia;
  const setting = InlineAttachmentMedia.useSetting();
  if (cResult[0] === setting) {
    let tmp3;
    if (cResult[1] === attachments) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const tmp4 = getForumPostMedia(attachments, setting);
  cResult[0] = setting;
  cResult[1] = attachments;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : ((attachments) => {
  const InlineAttachmentMedia = UserSettings.InlineAttachmentMedia;
  return getForumPostMedia(attachments, InlineAttachmentMedia.useSetting());
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((embeds, spoiler) => {
  _require = spoiler;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(7);
  const InlineEmbedMedia = require("UserSettings").InlineEmbedMedia;
  const setting = InlineEmbedMedia.useSetting();
  const RenderEmbeds = require("UserSettings").RenderEmbeds;
  if (null == embeds) {
    let first;
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [];
      cResult[0] = items;
      first = items;
    } else {
      first = cResult[0];
    }
    return first;
  } else {
    let embeds1;
    let tmp13;
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
      embeds1 = embeds;
    } else {
      embeds1 = embeds.embeds;
    }
    if (setting) {
      if (tmp5) {
        if (null != embeds1) {
          let tmp10;
          if (cResult[2] === embeds1) {
            let tmp9;
            if (cResult[3] === spoiler) {
              tmp9 = cResult[4];
            }
            return tmp9;
          }
          if (cResult[5] !== spoiler) {
            const fn = function p(image, mediaIndex) {
              let flags;
              let hasFlag;
              let height;
              let proxyURL;
              let tmp6;
              let url;
              let width;
              let thumbnail = image.image;
              if (thumbnail == null) {
                thumbnail = image.thumbnail;
              }
              const tmp = null == thumbnail && null != image.images;
              if (tmp) {
                thumbnail = image.images[0];
              }
              if (null != thumbnail) {
                if (null != thumbnail.url) {
                  let obj;
                  ({ proxyURL, url, flags } = thumbnail);
                  let isVideoUrlResult = null != proxyURL;
                  ({ height, width } = thumbnail);
                  if (isVideoUrlResult) {
                    obj = MediaFormatTesters;
                    isVideoUrlResult = obj.isVideoUrl(proxyURL);
                  }
                  size = { type: obj.EMBED, src: tmp6, height, width, spoiler, flags: null, contentScanVersion: null, isVideo: isVideoUrlResult, mediaIndex, srcIsAnimated: hasFlag(flags, constants.IS_ANIMATED) };
                  tmp6 = url;
                  if (null != proxyURL) {
                    tmp6 = url;
                    if ("" !== proxyURL) {
                      tmp6 = proxyURL;
                    }
                  }
                  ({ flags: obj2.flags, contentScanVersion: obj2.contentScanVersion } = image);
                  hasFlag = FlagUtils.hasFlag;
                  FlagUtils;
                  if (flags == null) {
                    flags = 0;
                  }
                  return size;
                }
              }
            };
            cResult[5] = spoiler;
            cResult[6] = fn;
            tmp10 = fn;
          } else {
            tmp10 = cResult[6];
          }
          const mapped = embeds1.map(tmp10);
          const found = mapped.filter(tmp(1375).isNotNullish);
          cResult[2] = embeds1;
          cResult[3] = spoiler;
          cResult[4] = found;
          tmp9 = found;
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [];
      cResult[1] = items1;
      tmp13 = items1;
    } else {
      tmp13 = cResult[1];
    }
    return tmp13;
  }
}) : ((embeds, spoiler) => {
  _require = spoiler;
  let tmp = _require;
  const InlineEmbedMedia = require("UserSettings").InlineEmbedMedia;
  const setting = InlineEmbedMedia.useSetting();
  const RenderEmbeds = require("UserSettings").RenderEmbeds;
  if (null == embeds) {
    return [];
  } else {
    let embeds1;
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
      embeds1 = embeds;
    } else {
      embeds1 = embeds.embeds;
    }
    if (setting) {
      if (tmp4) {
        let found;
        if (null != embeds1) {
          const mapped = embeds1.map((image, mediaIndex) => {
            let flags;
            let hasFlag;
            let height;
            let proxyURL;
            let tmp6;
            let url;
            let width;
            let thumbnail = image.image;
            if (thumbnail == null) {
              thumbnail = image.thumbnail;
            }
            const tmp = null == thumbnail && null != image.images;
            if (tmp) {
              thumbnail = image.images[0];
            }
            if (null != thumbnail) {
              if (null != thumbnail.url) {
                let obj;
                ({ proxyURL, url, flags } = thumbnail);
                let isVideoUrlResult = null != proxyURL;
                ({ height, width } = thumbnail);
                if (isVideoUrlResult) {
                  obj = MediaFormatTesters;
                  isVideoUrlResult = obj.isVideoUrl(proxyURL);
                }
                size = { type: obj.EMBED, src: tmp6, height, width, spoiler, flags: null, contentScanVersion: null, isVideo: isVideoUrlResult, mediaIndex, srcIsAnimated: hasFlag(flags, constants.IS_ANIMATED) };
                tmp6 = url;
                if (null != proxyURL) {
                  tmp6 = url;
                  if ("" !== proxyURL) {
                    tmp6 = proxyURL;
                  }
                }
                ({ flags: obj2.flags, contentScanVersion: obj2.contentScanVersion } = image);
                hasFlag = FlagUtils.hasFlag;
                FlagUtils;
                if (flags == null) {
                  flags = 0;
                }
                return size;
              }
            }
          });
          found = mapped.filter(tmp(1375).isNotNullish);
        }
        return found;
      }
    }
    found = [];
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((components) => {
  let tmp4;
  let obj = react2;
  const cResult = obj.c(4);
  const InlineEmbedMedia = UserSettings.InlineEmbedMedia;
  if (null == components) {
    let first;
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      let items = [];
      cResult[0] = items;
      first = items;
    } else {
      first = cResult[0];
    }
    return first;
  } else {
    let tmp6;
    components = components.components;
    if (tmp4) {
      if (null != components) {
        let tmp7;
        if (cResult[2] !== components) {
          const _Array = Array;
          let tmpResult = InteractionComponentUtils;
          const flattenComponentsResult = tmpResult.flattenComponents(components);
          const fromResult = from(flattenComponentsResult.values());
          const flatMapResult = fromResult.flatMap((type) => {
            let height;
            let media;
            let num;
            let spoiler;
            let tmpResult2;
            let version;
            type = type.type;
            if (require("Server").ComponentType.THUMBNAIL === type) {
              ({ media, spoiler } = type);
              let tmp4 = null;
              if (spoiler == null) {
                spoiler = false;
              }
              let tmpResult = require("MediaTypes");
              let unfurledMediaItemType = tmpResult.getUnfurledMediaItemType(media);
              let tmp6 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                size = { type: constants.COMPONENT, src: null, height, width: num, spoiler, contentScanVersion: version, flags: 0, srcIsAnimated: tmpResult2.hasFlag(media.flags, require("MediaTypes").UnfurledMediaItemFlags.IS_ANIMATED), isVideo: "VIDEO" === unfurledMediaItemType, mediaIndex: 0, srcUnfurledMediaItem: media };
                ({ proxyUrl: obj3.src, height } = media);
                if (height == null) {
                  height = 0;
                }
                num = media.width;
                if (num == null) {
                  num = 0;
                }
                let contentScanMetadata = media.contentScanMetadata;
                version = undefined;
                if (contentScanMetadata != null) {
                  version = contentScanMetadata.version;
                }
                tmp6 = size;
                tmpResult2 = require("FlagUtils");
              }
              return tmp6;
            } else if (require("Server").ComponentType.MEDIA_GALLERY === type) {
              const items = type.items;
              return items.map((item) => {
                let height;
                let media;
                let num;
                let spoiler;
                let tmpResult;
                let version;
                ({ media, spoiler } = item);
                if (spoiler == null) {
                  spoiler = false;
                }
                const obj = closure_1_0(closure_1_2[15]);
                const unfurledMediaItemType = obj.getUnfurledMediaItemType(media);
                let tmp4 = null;
                if ("INVALID" !== unfurledMediaItemType) {
                  size = { type: constants.COMPONENT, src: null, height, width: num, spoiler, contentScanVersion: version, flags: 0, srcIsAnimated: tmpResult.hasFlag(media.flags, closure_1_0(closure_1_2[15]).UnfurledMediaItemFlags.IS_ANIMATED), isVideo: "VIDEO" === unfurledMediaItemType, mediaIndex: 0, srcUnfurledMediaItem: media };
                  ({ proxyUrl: obj3.src, height } = media);
                  if (height == null) {
                    height = 0;
                  }
                  num = media.width;
                  if (num == null) {
                    num = 0;
                  }
                  const contentScanMetadata = media.contentScanMetadata;
                  version = undefined;
                  if (contentScanMetadata != null) {
                    version = contentScanMetadata.version;
                  }
                  tmp4 = size;
                  tmpResult = closure_1_0(closure_1_2[8]);
                }
                return tmp4;
              });
            } else {
              return null;
            }
          });
          const found = flatMapResult.filter(GlobalUtils.isNotNullish);
          cResult[2] = components;
          cResult[3] = found;
          tmp7 = found;
        } else {
          tmp7 = cResult[3];
        }
        tmp6 = tmp7;
      }
      return tmp6;
    }
    const _Symbol = Symbol;
    const str = "react.memo_cache_sentinel";
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [];
      let num = 1;
      cResult[1] = items1;
      tmp6 = items1;
    } else {
      tmp6 = cResult[1];
    }
  }
}) : ((components) => {
  const InlineEmbedMedia = UserSettings.InlineEmbedMedia;
  if (null == components) {
    return [];
  } else {
    components = components.components;
    if (tmp3) {
      let found;
      if (null != components) {
        let tmp4 = globalThis;
        const _Array = Array;
        let tmpResult = InteractionComponentUtils;
        const flattenComponentsResult = tmpResult.flattenComponents(components);
        const fromResult = from(flattenComponentsResult.values());
        const flatMapResult = fromResult.flatMap((type) => {
          let height;
          let media;
          let num;
          let spoiler;
          let tmpResult2;
          let version;
          type = type.type;
          if (require("Server").ComponentType.THUMBNAIL === type) {
            ({ media, spoiler } = type);
            let tmp4 = null;
            if (spoiler == null) {
              spoiler = false;
            }
            let tmpResult = require("MediaTypes");
            let unfurledMediaItemType = tmpResult.getUnfurledMediaItemType(media);
            let tmp6 = null;
            if ("INVALID" !== unfurledMediaItemType) {
              size = { type: constants.COMPONENT, src: null, height, width: num, spoiler, contentScanVersion: version, flags: 0, srcIsAnimated: tmpResult2.hasFlag(media.flags, require("MediaTypes").UnfurledMediaItemFlags.IS_ANIMATED), isVideo: "VIDEO" === unfurledMediaItemType, mediaIndex: 0, srcUnfurledMediaItem: media };
              ({ proxyUrl: obj3.src, height } = media);
              if (height == null) {
                height = 0;
              }
              num = media.width;
              if (num == null) {
                num = 0;
              }
              let contentScanMetadata = media.contentScanMetadata;
              version = undefined;
              if (contentScanMetadata != null) {
                version = contentScanMetadata.version;
              }
              tmp6 = size;
              tmpResult2 = require("FlagUtils");
            }
            return tmp6;
          } else if (require("Server").ComponentType.MEDIA_GALLERY === type) {
            const items = type.items;
            return items.map((item) => {
              let height;
              let media;
              let num;
              let spoiler;
              let tmpResult;
              let version;
              ({ media, spoiler } = item);
              if (spoiler == null) {
                spoiler = false;
              }
              const obj = closure_1_0(closure_1_2[15]);
              const unfurledMediaItemType = obj.getUnfurledMediaItemType(media);
              let tmp4 = null;
              if ("INVALID" !== unfurledMediaItemType) {
                size = { type: constants.COMPONENT, src: null, height, width: num, spoiler, contentScanVersion: version, flags: 0, srcIsAnimated: tmpResult.hasFlag(media.flags, closure_1_0(closure_1_2[15]).UnfurledMediaItemFlags.IS_ANIMATED), isVideo: "VIDEO" === unfurledMediaItemType, mediaIndex: 0, srcUnfurledMediaItem: media };
                ({ proxyUrl: obj3.src, height } = media);
                if (height == null) {
                  height = 0;
                }
                num = media.width;
                if (num == null) {
                  num = 0;
                }
                const contentScanMetadata = media.contentScanMetadata;
                version = undefined;
                if (contentScanMetadata != null) {
                  version = contentScanMetadata.version;
                }
                tmp4 = size;
                tmpResult = closure_1_0(closure_1_2[8]);
              }
              return tmp4;
            });
          } else {
            return null;
          }
        });
        found = flatMapResult.filter(GlobalUtils.isNotNullish);
      }
      return found;
    }
    found = [];
  }
});
let closure_15 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, isMediaChannel, arg2) => {
  let first;
  const obj = react2;
  const cResult = obj.c(7);
  const tmp3 = undefined !== arg2 && arg2;
  const tmp2Result = closure_16(arg0, tmp3);
  if (null != isMediaChannel) {
    first = tmp2Result;
    if (isMediaChannel.isMediaChannel()) {
      let tmp6;
      if (cResult[1] !== tmp2Result) {
        let tmp8;
        const _Symbol2 = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function h(isThumbnail) {
            return isThumbnail.isThumbnail;
          };
          cResult[3] = fn;
          tmp8 = fn;
        } else {
          tmp8 = cResult[3];
        }
        const found = tmp2Result.find(tmp8);
        cResult[1] = tmp2Result;
        cResult[2] = found;
        tmp6 = found;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[4] === tmp2Result) {
        let tmp10;
        if (cResult[5] === tmp6) {
          tmp10 = cResult[6];
        }
        first = tmp10;
      }
      let tmp11 = tmp2Result;
      if (null != tmp6) {
        const items = [tmp6];
        tmp11 = items;
      }
      cResult[4] = tmp2Result;
      cResult[5] = tmp6;
      cResult[6] = tmp11;
      tmp10 = tmp11;
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
}) : ((arg0, arg1) => {
  let closure_0 = arg1;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const tmp = closure_16(arg0, flag);
  let closure_1 = tmp;
  let items = [arg1, tmp];
  return react.useMemo(() => {
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
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  const obj = react2;
  const cResult = obj.c(4);
  const tmp2 = closure_13(arg0);
  const tmp3 = closure_14(arg0, arg1);
  const tmp4 = closure_15(arg0);
  if (cResult[0] === tmp4) {
    if (cResult[1] === tmp3) {
      let tmp5;
      if (cResult[2] === tmp2) {
        tmp5 = cResult[3];
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
}) : ((arg0, arg1) => {
  const items = [...closure_13(arg0), ...closure_14(arg0, arg1), ...closure_15(arg0)];
  return items;
});
let closure_16 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let first = closure_13(arg0)[0];
  const tmp = closure_13(arg0);
  const tmp2 = closure_14(arg0, arg1);
  const tmp3 = closure_15(arg0);
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
}) : ((arg0, arg1) => {
  let first = closure_13(arg0)[0];
  const tmp = closure_13(arg0);
  const tmp2 = closure_14(arg0, arg1);
  const tmp3 = closure_15(arg0);
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
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  const tmp = closure_13(arg0);
  const tmp2 = closure_14(arg0, arg1);
  const tmp3 = null == tmp[0] && null == closure_15(arg0)[0] && null != tmp2[0];
  return tmp3;
}) : ((arg0, arg1) => {
  const tmp = closure_13(arg0);
  const tmp2 = closure_14(arg0, arg1);
  const tmp3 = null == tmp[0] && null == closure_15(arg0)[0] && null != tmp2[0];
  return tmp3;
});
function isValidImageAttachment(filename) {
  let height;
  let width;
  if (null == filename) {
    return false;
  } else {
    ({ height, width } = filename);
    filename = filename.filename;
    const obj = MediaFormatTesters;
    const tmp3 = obj.isImageFile(filename) && null != height && height > 0 && null != width && width > 0;
    return tmp3;
  }
}
function isValidVideoAttachment(filename) {
  let tmp = null != filename;
  if (tmp) {
    let isVideoFileResult = null != filename;
    if (isVideoFileResult) {
      const obj = MediaFormatTesters;
      isVideoFileResult = obj.isVideoFile(filename.filename);
    }
    if (isVideoFileResult) {
      isVideoFileResult = null != filename.proxy_url;
    }
    tmp = isVideoFileResult;
  }
  return tmp;
}
let size = size_mod;
const result = size.fileFinishedImporting("modules/forums/ForumPostMediaUtils.tsx");

export const getEmbedColor = function getEmbedColor(firstResult, flag) {
  if (null != firstResult) {
    if (null != firstResult.embeds[0]) {
      let tmp;
      if (null == firstResult.embeds[0].color) {
        if (!flag) {
          tmp = firstResult.embeds[0].color;
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
export const useFirstMediaIsEmbed = tmp7;
export const shouldShowAddMediaToOriginalPostModal = function shouldShowAddMediaToOriginalPostModal(uploads, id) {
  const channel = ChannelStore.getChannel(id);
  if (null == channel) {
    let flag = false;
    return false;
  } else {
    const getMessage = MessageStore.getMessage;
    id = channel.id;
    let obj2 = SnowflakeUtilsDefault;
    const message = getMessage(id, obj2.castChannelIdAsMessageId(channel.id));
    let tmp8 = null != message;
    if (tmp8) {
      let tmp2 = uploads.length > 0 && null != uploads.find((isImage) => isImage.isImage || isImage.isVideo) && channel.isForumPost();
      if (tmp2) {
        const ownerId = channel.ownerId;
        const currentUser = UserStore.getCurrentUser();
        let id1;
        if (currentUser != null) {
          id1 = currentUser.id;
        }
        tmp2 = ownerId === id1;
      }
      if (tmp2) {
        tmp2 = 0 === ThreadMessageStore.getCount(channel.id);
      }
      if (tmp2) {
        let tmp7 = 0 === message.attachments.length;
        if (!tmp7) {
          const attachments = message.attachments;
          tmp7 = null == attachments.find((filename) => {
            let height;
            let width;
            let flag = false;
            if (null != filename) {
              ({ height, width } = filename);
              filename = filename.filename;
              const obj = require("MediaFormatTesters");
              flag = obj.isImageFile(filename) && null != height && height > 0 && null != width && width > 0;
              const tmp3 = obj.isImageFile(filename) && null != height && height > 0 && null != width && width > 0;
            }
            if (!flag) {
              let tmp4 = null != filename;
              if (tmp4) {
                let isVideoFileResult = null != filename;
                if (isVideoFileResult) {
                  const obj2 = require("MediaFormatTesters");
                  isVideoFileResult = obj2.isVideoFile(filename.filename);
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
    let containsGif;
    const obj = { containsVideo: containsVideo.containsVideo || isVideo.isVideo, containsGif };
    containsGif = containsVideo.containsGif;
    if (!containsGif) {
      const obj2 = require("MediaFormatTesters");
      containsGif = obj2.isAnimatedImageUrl(isVideo.src);
    }
    return obj;
  }, { containsVideo: false, containsGif: false });
};