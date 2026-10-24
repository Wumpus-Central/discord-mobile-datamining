// === Module 8757: MediaSourceUtil ===

// Module 8757 (MediaSourceUtil)
import c from "c" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1107 */;
import util from "util" /* 1128 */;
import FlagUtils from "FlagUtils" /* 1405 */;
import NativeMediaManagerModuleDefault from "NativeMediaManagerModule" /* 1447 */;
import utils_ImageUtilsDefault from "utils/ImageUtils" /* 1498 */;
import Server from "Server" /* 2000 */;
import ToastUtils from "ToastUtils" /* 5662 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5909 */;
import MediaFormatTesters from "MediaFormatTesters" /* 5999 */;
import InteractionComponentUtils from "InteractionComponentUtils" /* 6014 */;
import EmbedUtils from "EmbedUtils" /* 6486 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6682 */;
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 7389 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 7395 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8277 */;
import renderMessageMarkupDefault from "renderMessageMarkup" /* 8482 */;
import transformMessageComponents from "transformMessageComponents" /* 8593 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 8609 */;
import MediaViewerAnalyticsManager from "MediaViewerAnalyticsManager" /* 8753 */;
import getDisplayFilenameDefault from "getDisplayFilename" /* 8758 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8759 */;
import MediaModalPortal from "MediaModalPortal" /* 8760 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4823 */;

const require = globalThis.__r;

require = fn;
function isValidImageAttachment(filename) {
  if (null == filename) {
    return false;
  } else {
    ({ height, width } = filename);
    let tmp = MediaFormatTesters.isImageFile(filename.filename) && null != height;
    if (tmp) {
      tmp = height > 0;
    }
    if (tmp) {
      tmp = null != width;
    }
    if (tmp) {
      tmp = width > 0;
    }
    if (tmp) {
      let tmp2 = null != filename;
      if (tmp2) {
        let hasFlagResult = null != filename.flags;
        if (hasFlagResult) {
          hasFlagResult = FlagUtils.hasFlag(filename.flags, constants.IS_THUMBNAIL);
          const tmp5Result = FlagUtils;
        }
        tmp2 = hasFlagResult;
      }
      tmp = !tmp2;
    }
    return tmp;
  }
}
function extractMediaFromAttachment(found, message2, mediaIndex, guildIdFromSearchContext, mediaViewIndex) {
  if (null != found.width) {
    if (found.width > 0) {
      if (null != found.height) {
        if (found.height > 0) {
          const enabledHarmTypesForMessage = ObscuredMediaUtils.getEnabledHarmTypesForMessage(message2);
          const obj3 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: found };
          const result = ObscuredMediaUtils.isMediaObscuredForHarmTypes(obj3, enabledHarmTypesForMessage);
          const isVideoFileResult = MediaFormatTesters.isVideoFile(found.filename);
          if (null != found.proxy_url) {
            if ("" !== found.proxy_url) {
              let url = found.proxy_url;
            }
            const obj = utils_ImageUtilsDefault;
            ({ width, height } = found);
            let str2;
            if (isVideoFileResult) {
              str2 = "png";
            }
            const mobileOptimizedSrc = obj.getMobileOptimizedSrc(url, width, height, str2);
            if (isVideoFileResult) {
              const size = { uri: mobileOptimizedSrc, messageId: message2.id, guildId: guildIdFromSearchContext, channelId: message2.channel_id, videoURI: url, filename: getDisplayFilenameDefault(found), mediaIndex, width: null, height: null, sourceURI: null, contentType: null, description: null, accessoryType: "attachment", spoiler: null, flags: null, obscure: null, placeholder: null, contentScanVersion: null, mediaViewIndex: null, attachmentId: null, shareURI: null };
              ({ width: obj11.width, height: obj11.height } = found);
              size.sourceURI = url;
              ({ content_type: obj11.contentType, description: obj11.description } = found);
              let num3 = found.flags;
              if (num3 == null) {
                num3 = 0;
              }
              let hasFlagResult = FlagUtils.hasFlag(num3, constants.IS_SPOILER);
              if (!hasFlagResult) {
                hasFlagResult = SpoilerChannelUtils.isChannelSpoilerGated(ChannelStore.getChannel(message2.channel_id));
                const tmp43Result5 = SpoilerChannelUtils;
              }
              size.spoiler = hasFlagResult;
              size.flags = found.flags;
              size.obscure = result;
              ({ placeholder: obj11.placeholder, content_scan_version: obj11.contentScanVersion } = found);
              size.mediaViewIndex = mediaViewIndex;
              size.attachmentId = found.id;
              size.shareURI = url;
              return size;
            } else {
              const size1 = { uri: mobileOptimizedSrc, messageId: message2.id, guildId: guildIdFromSearchContext, channelId: message2.channel_id, filename: getDisplayFilenameDefault(found), mediaIndex, width: null, height: null, sourceURI: null, contentType: null, description: null, accessoryType: "attachment", spoiler: null, flags: null, obscure: null, placeholder: null, contentScanVersion: null, mediaViewIndex: null, attachmentId: null, shareURI: null };
              ({ width: obj2.width, height: obj2.height, url: obj2.sourceURI, content_type: obj2.contentType, description: obj2.description } = found);
              let num = found.flags;
              if (num == null) {
                num = 0;
              }
              let hasFlagResult1 = FlagUtils.hasFlag(num, constants.IS_SPOILER);
              if (!hasFlagResult1) {
                hasFlagResult1 = SpoilerChannelUtils.isChannelSpoilerGated(ChannelStore.getChannel(message2.channel_id));
                const tmp43Result7 = SpoilerChannelUtils;
              }
              size1.spoiler = hasFlagResult1;
              size1.flags = found.flags;
              size1.obscure = result;
              ({ placeholder: obj2.placeholder, content_scan_version: obj2.contentScanVersion } = found);
              size1.mediaViewIndex = mediaViewIndex;
              ({ id: obj2.attachmentId, url: obj2.shareURI } = found);
              const obj4 = {};
              const merged = Object.assign(size1);
              obj4.uri = url;
              const tmp43Result6 = FlagUtils;
              const formatted = getDisplayFilenameDefault(found).toLowerCase();
              formatted.endsWith(".webp");
              const str3 = getDisplayFilenameDefault(found);
              const formatted1 = getDisplayFilenameDefault(found).toLowerCase();
              const endsWithResult1 = formatted1.endsWith(".avif");
              const str5 = getDisplayFilenameDefault(found);
              let num2 = found.flags;
              if (num2 == null) {
                num2 = 0;
              }
              if (tmp43Result8.hasFlag(num2, constants.IS_ANIMATED)) {
                const _URL2 = URL;
                const str10 = new URL(url);
                const searchParams2 = str10.searchParams;
                searchParams2.append("animated", "true");
                if (endsWithResult1) {
                  const searchParams3 = str10.searchParams;
                  searchParams3.append("format", "webp");
                }
                const items = [size1, ];
                const obj5 = {};
                const merged1 = Object.assign(obj4);
                obj5.uri = str10.toString();
                items[1] = obj5;
                return items;
              }
              if (endsWithResult1) {
                const _URL = URL;
                const str7 = new URL(url);
                const searchParams = str7.searchParams;
                searchParams.append("format", "webp");
                const items1 = [size1, ];
                const obj6 = {};
                const merged2 = Object.assign(obj4);
                obj6.uri = str7.toString();
                items1[1] = obj6;
                return items1;
              } else {
                let tmp19 = obj4;
                if (url !== mobileOptimizedSrc) {
                  const items2 = [size1, obj4];
                  tmp19 = items2;
                }
                return tmp19;
              }
              tmp43Result8 = FlagUtils;
            }
          }
          url = found.url;
        }
      }
    }
  }
}
function extractMediaFromEmbed(image, id, contentMessage, mediaIndex, guildIdFromSearchContext) {
  let thumbnail = image.image;
  if (thumbnail == null) {
    thumbnail = image.video;
  }
  if (thumbnail == null) {
    thumbnail = image.thumbnail;
  }
  if (null != thumbnail) {
    if (null == image.video) {
      let str7 = image.type;
      ({ proxyURL: proxyURL2, url: url2 } = thumbnail);
      let str1 = url2;
      if (null != proxyURL2) {
        str1 = url2;
        if ("" !== proxyURL2) {
          const _URL2 = URL;
          const str42 = new URL(proxyURL2);
          const formatted = str42.pathname.toLowerCase();
          const endsWithResult = formatted.endsWith(".avif");
          const formatted1 = str42.pathname.toLowerCase();
          if (tmp6) {
            if (formatted1.endsWith(".webp")) {
              const searchParams5 = str42.searchParams;
              searchParams5.append("animated", "true");
              if (endsWithResult) {
                const searchParams6 = str42.searchParams;
                searchParams6.append("format", "webp");
              }
              str1 = str42.toString();
            } else {
              str1 = proxyURL2;
            }
          } else {
            str1 = proxyURL2;
            if (endsWithResult) {
              const searchParams4 = str42.searchParams;
              searchParams4.append("format", "webp");
              str1 = str42.toString();
            }
          }
        }
      }
      if (null != image.contentScanVersion) {
        let content_scan_version = image.contentScanVersion;
      } else if (null != image.content_scan_version) {
        content_scan_version = image.content_scan_version;
      }
      const mobileOptimizedSrc = utils_ImageUtilsDefault.getMobileOptimizedSrc(str1, thumbnail.width, thumbnail.height);
      obj2 = { contentMessage };
      const hasSpoilerEmbeds = renderMessageMarkupDefault(id, obj2).hasSpoilerEmbeds;
      const enabledHarmTypesForMessage = ObscuredMediaUtils.getEnabledHarmTypesForMessage(id);
      const obj5 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: image };
      const result = ObscuredMediaUtils.isMediaObscuredForHarmTypes(obj5, enabledHarmTypesForMessage);
      if ("title" in image) {
        let rawTitle = image.title;
      } else if ("rawTitle" in image) {
        rawTitle = image.rawTitle;
      }
      const obj6 = {};
      const merged = Object.assign(image);
      obj6.rawTitle = rawTitle;
      const isEmbedInlineResult = EmbedUtils.isEmbedInline(obj6);
      const tmp16Result = EmbedUtils;
      const provider = image.provider;
      let name;
      if (provider != null) {
        name = provider.name;
      }
      const video = image.video;
      let url1;
      if (video != null) {
        url1 = video.url;
      }
      let url3 = EmbedUtils.getEffectiveVideoProvider(name, url1);
      const tmp16Result3 = EmbedUtils;
      let isWebviewVideoResult = renderer_EmbedUtils.isWebviewVideo(image);
      if (null != undefined) {
        if (!isWebviewVideoResult) {
          const size = { uri: mobileOptimizedSrc, messageId: id.id, guildId: guildIdFromSearchContext, channelId: id.channel_id, mediaIndex, videoURI: undefined, embedURI: image.url, width: null, height: null, isGIFV: null, sourceURI: null, embedProviderName: null, accessoryType: "embed", noCarousel: null, spoiler: null, flags: null, contentScanVersion: null, contentType: null, obscure: null, thumbnail: null, shareURI: null };
          ({ width: obj10.width, height: obj10.height } = thumbnail);
          size.isGIFV = "gifv" === str7;
          size.sourceURI = thumbnail.url;
          const provider2 = image.provider;
          let name1;
          if (provider2 != null) {
            name1 = provider2.name;
          }
          size.embedProviderName = name1;
          size.noCarousel = !isEmbedInlineResult;
          size.spoiler = hasSpoilerEmbeds;
          size.flags = image.flags;
          size.contentScanVersion = content_scan_version;
          if ("contentType" in thumbnail) {
            let contentType = thumbnail.contentType;
          } else if ("content_type" in thumbnail) {
            const content_type = thumbnail.content_type;
            contentType = content_type;
          }
          size.contentType = contentType;
          size.obscure = result;
          let tmp29;
          if (null != image.thumbnail) {
            const size1 = { width: image.thumbnail.width, height: image.thumbnail.height, uri: image.thumbnail.url };
            tmp29 = size1;
          }
          size.thumbnail = tmp29;
          size.shareURI = image.url;
          return size;
        }
      }
      if ("video" !== image.type) {
        const obj7 = { embed: image, media: thumbnail, message: id, embedIndex: mediaIndex, guildId: guildIdFromSearchContext, spoiler: hasSpoilerEmbeds, obscure: result, noCarousel: !isEmbedInlineResult };
        return getEmbedImageMediaSources(obj7);
      }
      const items = [];
      if (null == image.thumbnail) {
        if (isWebviewVideoResult) {
          isWebviewVideoResult = null != image.video;
        }
        if (!isWebviewVideoResult) {
          if (0 !== items.length) {
            if (1 === items.length) {
              let first = items[0];
            } else if (2 === items.length) {
              const items1 = [, ];
              [arr2[0], arr2[1]] = items;
              first = items1;
            }
            return first;
          }
        } else {
          let size2 = { uri: mobileOptimizedSrc, guildId: guildIdFromSearchContext, spoiler: hasSpoilerEmbeds, flags: image.flags, obscure: result, contentScanVersion: content_scan_version, contentType: null, sourceURI: null, messageId: null, noCarousel: null, mediaIndex: null, accessoryType: "embed", width: null, height: null, channelId: null, embedURI: null, embedProviderName: null, disableDownload: true, shareURI: null };
          let str30 = image.video;
          if ("contentType" in str30) {
            let contentType3 = str30.contentType;
          } else if ("content_type" in str30) {
            const content_type3 = str30.content_type;
            contentType3 = content_type3;
          }
          size2.contentType = contentType3;
          size2.sourceURI = image.url;
          size2.messageId = id.id;
          size2.noCarousel = !isEmbedInlineResult;
          size2.mediaIndex = mediaIndex;
          size2.width = image.video.width;
          size2.height = image.video.height;
          size2.channelId = id.channel_id;
          ({ proxyURL: proxyURL3, url: url4 } = image.video);
          let str57 = url4;
          if (null != proxyURL3) {
            str30 = "";
            str57 = url4;
            if ("" !== proxyURL3) {
              const _URL4 = URL;
              const uRL = new URL(proxyURL3);
              url4 = uRL;
              const formatted2 = uRL.pathname.toLowerCase();
              str30 = formatted2.endsWith(".avif");
              const formatted3 = uRL.pathname.toLowerCase();
              str7 = formatted3.endsWith(".webp");
              if (!tmp34) {
                str57 = proxyURL3;
                if (str30) {
                  const searchParams10 = url4.searchParams;
                  searchParams10.append("format", "webp");
                  str57 = url4.toString();
                }
              }
            }
            if (str7) {
              const searchParams11 = url4.searchParams;
              str7 = "true";
              proxyURL3 = searchParams11.append("animated", "true");
              if (str30) {
                const searchParams12 = url4.searchParams;
                proxyURL3 = "webp";
                searchParams12.append("format", "webp");
              }
              str30 = url4.toString;
              str57 = str30();
            } else {
              str57 = proxyURL3;
            }
          }
          size2.embedURI = str57;
          size2.embedProviderName = url3;
          url3 = image.url;
          size2.shareURI = url3;
          size2 = items.push(size2);
        }
      } else {
        ({ proxyURL: proxyURL4, url: url5 } = image.thumbnail);
        let str58 = url5;
        if (null != proxyURL4) {
          str58 = url5;
          if ("" !== proxyURL4) {
            const _URL3 = URL;
            const str48 = new URL(proxyURL4);
            const formatted4 = str48.pathname.toLowerCase();
            const endsWithResult1 = formatted4.endsWith(".avif");
            const formatted5 = str48.pathname.toLowerCase();
            if (tmp51) {
              if (formatted5.endsWith(".webp")) {
                const searchParams8 = str48.searchParams;
                searchParams8.append("animated", "true");
                if (endsWithResult1) {
                  const searchParams9 = str48.searchParams;
                  searchParams9.append("format", "webp");
                }
                str58 = str48.toString();
              } else {
                str58 = proxyURL4;
              }
            } else {
              str58 = proxyURL4;
              if (endsWithResult1) {
                const searchParams7 = str48.searchParams;
                searchParams7.append("format", "webp");
                str58 = str48.toString();
              }
            }
          }
        }
        let size3 = { uri: utils_ImageUtilsDefault.getMobileOptimizedSrc(str58, image.thumbnail.width, image.thumbnail.height), guildId: guildIdFromSearchContext, spoiler: hasSpoilerEmbeds, flags: image.flags, obscure: result, contentScanVersion: content_scan_version, contentType: null, messageId: null, noCarousel: null, mediaIndex: null, accessoryType: "embed", channelId: null, sourceURI: null, width: null, height: null, shareURI: null };
        const thumbnail2 = image.thumbnail;
        if ("contentType" in thumbnail2) {
          let contentType2 = thumbnail2.contentType;
        } else if ("content_type" in thumbnail2) {
          const content_type2 = thumbnail2.content_type;
          contentType2 = content_type2;
        }
        size3.contentType = contentType2;
        size3.messageId = id.id;
        size3.noCarousel = !isEmbedInlineResult;
        size3.mediaIndex = mediaIndex;
        size3.channelId = id.channel_id;
        size3.sourceURI = image.thumbnail.url;
        size3.width = image.thumbnail.width;
        size3.height = image.thumbnail.height;
        size3.shareURI = image.thumbnail.url;
        size3 = items.push(size3);
        const tmp13Result = utils_ImageUtilsDefault;
      }
      const tmp16Result4 = renderer_EmbedUtils;
    } else {
      ({ proxyURL, url } = image.video);
      if (null != proxyURL) {
        let str6 = "";
        if ("" !== proxyURL) {
          const _URL = URL;
          const uRL1 = new URL(proxyURL);
          url = uRL1;
          const formatted6 = uRL1.pathname.toLowerCase();
          str6 = formatted6.endsWith(".avif");
          const formatted7 = uRL1.pathname.toLowerCase();
          let str3 = formatted7.endsWith(".webp");
          if (!tmp) {
            if (str6) {
              const searchParams = url.searchParams;
              searchParams.append("format", "webp");
              let str59 = url.toString();
            }
          }
        }
        if (str3) {
          const searchParams2 = url.searchParams;
          str3 = "true";
          proxyURL = searchParams2.append("animated", "true");
          if (str6) {
            const searchParams3 = url.searchParams;
            proxyURL = "webp";
            searchParams3.append("format", "webp");
          }
          str6 = url.toString;
          str59 = str6();
        }
      }
    }
  }
}
function getEmbedImageMediaSources(arg0) {
  ({ embed, media, message } = arg0);
  ({ proxyURL, url } = media);
  let str1 = url;
  ({ embedIndex, guildId, spoiler, obscure, noCarousel } = arg0);
  if (null != proxyURL) {
    str1 = url;
    if ("" !== proxyURL) {
      const _URL = URL;
      const str9 = new URL(proxyURL);
      const formatted = str9.pathname.toLowerCase();
      const endsWithResult = formatted.endsWith(".avif");
      const formatted1 = str9.pathname.toLowerCase();
      if (tmp) {
        if (formatted1.endsWith(".webp")) {
          const searchParams2 = str9.searchParams;
          searchParams2.append("animated", "true");
          if (endsWithResult) {
            const searchParams3 = str9.searchParams;
            searchParams3.append("format", "webp");
          }
          str1 = str9.toString();
        } else {
          str1 = proxyURL;
        }
      } else {
        str1 = proxyURL;
        if (endsWithResult) {
          const searchParams = str9.searchParams;
          searchParams.append("format", "webp");
          str1 = str9.toString();
        }
      }
    }
  }
  const mobileOptimizedSrc = utils_ImageUtilsDefault.getMobileOptimizedSrc(str1, media.width, media.height);
  const size = { uri: mobileOptimizedSrc, messageId: message.id, guildId, channelId: message.channel_id, mediaIndex: embedIndex, width: media.width, height: media.height, sourceURI: media.url, accessoryType: "embed", noCarousel, spoiler, flags: embed.flags, obscure, contentScanVersion: null, contentType: null, shareURI: null };
  if (null != embed.contentScanVersion) {
    let content_scan_version = embed.contentScanVersion;
  } else if (null != embed.content_scan_version) {
    content_scan_version = embed.content_scan_version;
  }
  size.contentScanVersion = content_scan_version;
  if ("contentType" in media) {
    let contentType = media.contentType;
  } else if ("content_type" in media) {
    const content_type = media.content_type;
    contentType = content_type;
  }
  size.contentType = contentType;
  size.shareURI = media.url;
  obj2 = {};
  const merged = Object.assign(size);
  obj2.uri = str1;
  let tmp8 = obj2;
  if (str1 !== mobileOptimizedSrc) {
    const items = [size, obj2];
    tmp8 = items;
  }
  return tmp8;
}
function toMediaSourceFromUnfurledMedia(id, guildId, media, description, spoiler) {
  const unfurledMediaItemType = transformMessageComponents.getUnfurledMediaItemType(media);
  if (unfurledMediaItemType === RowGeneratorTypes.MediaGalleryItemType.VISUAL_PLACEHOLDER) {
    return null;
  } else {
    const obj8 = utils_ImageUtilsDefault;
    ({ proxyUrl: proxyUrl2, width } = media);
    if (width == null) {
      width = 0;
    }
    let num = media.height;
    if (num == null) {
      num = 0;
    }
    const tmp4 = unfurledMediaItemType === RowGeneratorTypes.MediaGalleryItemType.VIDEO;
    let str;
    if (tmp4) {
      str = "png";
    }
    const mobileOptimizedSrc = obj8.getMobileOptimizedSrc(proxyUrl2, width, num, str);
    const contentScanMetadata = media.contentScanMetadata;
    let version;
    if (contentScanMetadata != null) {
      version = contentScanMetadata.version;
    }
    const enabledHarmTypesForMessage = ObscuredMediaUtils.getEnabledHarmTypesForMessage(id);
    const tmpResult = ObscuredMediaUtils;
    obj2 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.GenericMedia, media };
    const size = { messageId: id.id, guildId, channelId: id.channel_id, uri: mobileOptimizedSrc, sourceURI: null, width: null, height: null, contentType: null, description: null, spoiler: null, obscure: null, contentScanVersion: null, accessoryType: "component", mediaIndex: 0, shareURI: null };
    ({ url: obj5.sourceURI, width: width2 } = media);
    const result = ObscuredMediaUtils.isMediaObscuredForHarmTypes(obj2, enabledHarmTypesForMessage);
    if (width2 == null) {
      width2 = 0;
    }
    size.width = width2;
    let num2 = media.height;
    if (num2 == null) {
      num2 = 0;
    }
    size.height = num2;
    size.contentType = media.contentType;
    size.description = description;
    size.spoiler = spoiler;
    size.obscure = result;
    size.contentScanVersion = version;
    size.shareURI = media.url;
    const obj3 = {};
    const merged = Object.assign(size);
    const proxyUrl = media.proxyUrl;
    if (tmp4) {
      obj3.videoURI = proxyUrl;
      return obj3;
    } else {
      obj3.uri = proxyUrl;
      let tmp21 = obj3;
      if (media.proxyUrl !== mobileOptimizedSrc) {
        const obj4 = {};
        const merged1 = Object.assign(size);
        const items = [obj4, obj3];
        tmp21 = items;
      }
      return tmp21;
    }
    const tmpResult2 = ObscuredMediaUtils;
  }
}
function handleDownloadError() {
  obj2 = { title: null, body: null, isDismissable: true };
  const intl = util.intl;
  obj2.title = intl.string(util.t.cV3alD);
  const intl2 = util.intl;
  obj2.body = intl2.string(util.t.r4Zjzv);
  actions_AlertActionCreatorsDefault.show(obj2);
}
const Constants = fn(1087);
({ MessageAttachmentFlags: hasOwnProperty, WEBP_RE_IOS: metroRequire } = Constants);
const re7 = /\.avif$/i;
const ReactCompilerGating = fn(558);
let obj2 = { PORTAL: 0, [0]: "PORTAL", TIKTOK_IFRAME: 1, [1]: "TIKTOK_IFRAME", WEB_FILE_IFRAME: 2, [2]: "WEB_FILE_IFRAME", DEFAULT: 3, [3]: "DEFAULT" };
function flattenSource(sources, arg1) {
  if (!Array.isArray(sources)) {
    return sources;
  } else if (arg1) {
    let first = sources[sources.length - 1];
  } else {
    first = sources[0];
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
function isValidImageEmbed(image) {
  return null != image.image || null != image.thumbnail;
}
function isValidVideoEmbed(video) {
  return null != video.video;
}
function isThumbnailAttachment(flags) {
  let tmp = null != flags;
  if (tmp) {
    let hasFlagResult = null != flags.flags;
    if (hasFlagResult) {
      hasFlagResult = FlagUtils.hasFlag(flags.flags, constants.IS_THUMBNAIL);
    }
    tmp = hasFlagResult;
  }
  return tmp;
}
function getAttachmentUrl(proxy_url) {
  if (null != proxy_url.proxy_url) {
    if ("" !== proxy_url.proxy_url) {
      let url = proxy_url.proxy_url;
    }
    return url;
  }
  url = proxy_url.url;
}
function getEmbedUrl(embedMedia) {
  const proxyURL = embedMedia.proxyURL;
  if (null != proxyURL) {
    if ("" !== proxyURL) {
      const _URL = URL;
      const str2 = new URL(proxyURL);
      const formatted = str2.pathname.toLowerCase();
      const endsWithResult = formatted.endsWith(".avif");
      const formatted1 = str2.pathname.toLowerCase();
      if (tmp) {
        const searchParams2 = str2.searchParams;
        searchParams2.append("animated", "true");
        if (endsWithResult) {
          const searchParams3 = str2.searchParams;
          searchParams3.append("format", "webp");
        }
        return str2.toString();
      } else if (endsWithResult) {
        const searchParams = str2.searchParams;
        searchParams.append("format", "webp");
        return str2.toString();
      }
      return proxyURL;
    }
  }
  return embedMedia.url;
}
function getEmbedMedia(embed) {
  let thumbnail = embed.image;
  if (thumbnail == null) {
    thumbnail = embed.video;
  }
  if (thumbnail == null) {
    thumbnail = embed.thumbnail;
  }
  return thumbnail;
}
function downloadMediaAssetWithContentType(mediaUrl, VIDEO, contentType) {
  closure_0 = VIDEO;
  if (null != contentType) {
    let result = NativeMediaManagerModuleDefault.downloadMediaAssetWithContentType(mediaUrl, VIDEO, contentType);
  } else {
    result = NativeMediaManagerModuleDefault.downloadMediaAsset(mediaUrl, VIDEO);
  }
  return result.then(() => {
    if (ConstantsIOS.MediaType.IMAGE === closure_0) {
      ToastUtils.presentImageSaved();
      const tmp2Result = ToastUtils;
    } else if (ConstantsIOS.MediaType.GIF === closure_0) {
      ToastUtils.presentGifSaved();
      const tmp2Result3 = ToastUtils;
    } else if (ConstantsIOS.MediaType.VIDEO === closure_0) {
      ToastUtils.presentVideoSaved();
      const tmp2Result4 = ToastUtils;
    }
    const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMediaViewerDownloadButtonTapped();
  }, handleDownloadError);
}
function isAnimatedWebpSource(sourceURI) {
  let result = null != sourceURI.sourceURI && null != sourceURI.uri;
  if (result) {
    result = MediaFormatTesters.urlMatchesFileExtension(sourceURI.sourceURI, timestampProducer);
  }
  if (result) {
    const _URL = URL;
    const uRL = new URL(sourceURI.uri);
    const searchParams = uRL.searchParams;
    result = "true" === searchParams.get("animated");
  }
  return result;
}
function isAnimatedAvifSource(sourceURI) {
  let result = null != sourceURI.sourceURI && null != sourceURI.uri;
  if (result) {
    result = MediaFormatTesters.urlMatchesFileExtension(sourceURI.sourceURI, re7);
  }
  if (result) {
    const _URL = URL;
    const uRL = new URL(sourceURI.uri);
    const searchParams = uRL.searchParams;
    result = "true" === searchParams.get("animated");
  }
  return result;
}
function isGIFSource(sourceURI) {
  return MediaFormatTesters.urlMatchesFileExtension(sourceURI.sourceURI, ConstantsIOS.GIF_RE_IOS);
}
let size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/MediaSourceUtil.tsx");

export { flattenSource };
export { isValidImageAttachment };
export { isValidVideoAttachment };
export { isValidImageEmbed };
export { isValidVideoEmbed };
export { isThumbnailAttachment };
export { getAttachmentUrl };
export { extractMediaFromAttachment };
export { getEmbedUrl };
export { getEmbedMedia };
export { extractMediaFromEmbed };
export const extractThumbnailMediaFromEmbed = function extractThumbnailMediaFromEmbed(thumbnail, message2, message1, embedIndex, guild_id) {
  thumbnail = thumbnail.thumbnail;
  if (null != thumbnail) {
    const obj = { embed: thumbnail, media: thumbnail, message: message2, embedIndex, guildId: guild_id, spoiler: null, obscure: null, noCarousel: true };
    obj2 = { contentMessage: message1 };
    obj.spoiler = renderMessageMarkupDefault(message2, obj2).hasSpoilerEmbeds;
    const obj4 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: thumbnail };
    const obj3 = ObscuredMediaUtils;
    obj.obscure = obj3.isMediaObscuredForHarmTypes(obj4, ObscuredMediaUtils.getEnabledHarmTypesForMessage(message2));
    return getEmbedImageMediaSources(obj);
  }
};
export const extractMediaFromMessageComponents = function extractMediaFromMessageComponents(getContentMessage, contentMessage, getContentMessage) {
  if (0 === contentMessage.components.length) {
    return [];
  } else {
    const items1 = [];
    const items2 = [];
    HermesBuiltin.arraySpread(InteractionComponentUtils.flattenComponents(contentMessage.components).values(), 0);
    const iter = items2[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      let type = nextResult.type;
      if (Server.ComponentType.MEDIA_GALLERY === type) {
        let items = tmp4.items;
        for (const item10029 of items) {
          let tmp16 = toMediaSourceFromUnfurledMedia(arg0, arg2, item10029.media, item10029.description, item10029.spoiler);
          if (null != tmp16) {
            let obj = { sources: null, unfurledMediaItem: null };
            obj.sources = tmp17;
            obj.unfurledMediaItem = item10029.media;
            let arr = items1.push(obj);
          }
          continue;
        }
      } else if (Server.ComponentType.THUMBNAIL === type) {
        let tmp35 = toMediaSourceFromUnfurledMedia(getContentMessage, getContentMessage, tmp4.media, tmp4.description, tmp4.spoiler);
        if (null != tmp35) {
          let obj3 = { sources: null, unfurledMediaItem: null };
          obj3.sources = tmp36;
          obj3.unfurledMediaItem = tmp4.media;
          let arr2 = items1.push(obj3);
        }
      }
      continue;
    }
    return items1;
  }
};
export const extractMediaSourcesFromEmbed = function extractMediaSourcesFromEmbed(message2, message1, images, index, guild_id) {
  importDefault = images;
  dependencyMap = index;
  const guildId = guild_id;
  const hasSpoilerEmbeds = renderMessageMarkupDefault(message2, { contentMessage: message1 }).hasSpoilerEmbeds;
  images = images.images;
  if (images == null) {
    let items = [images.image];
    images = items;
  }
  return images.map((width) => {
    ({ proxyURL, url } = width);
    let str1 = url;
    if (null != proxyURL) {
      str1 = url;
      if ("" !== proxyURL) {
        const _URL = URL;
        const str8 = new URL(proxyURL);
        const formatted = str8.pathname.toLowerCase();
        const endsWithResult = formatted.endsWith(".avif");
        const formatted1 = str8.pathname.toLowerCase();
        if (tmp) {
          if (formatted1.endsWith(".webp")) {
            const searchParams2 = str8.searchParams;
            searchParams2.append("animated", "true");
            if (endsWithResult) {
              const searchParams3 = str8.searchParams;
              searchParams3.append("format", "webp");
            }
            str1 = str8.toString();
          } else {
            str1 = proxyURL;
          }
        } else {
          str1 = proxyURL;
          if (endsWithResult) {
            const searchParams = str8.searchParams;
            searchParams.append("format", "webp");
            str1 = str8.toString();
          }
        }
      }
    }
    const mobileOptimizedSrc = utils_ImageUtilsDefault.getMobileOptimizedSrc(str1, width.width, width.height);
    if (null != images.contentScanVersion) {
      let content_scan_version = images.contentScanVersion;
    } else if (null != images.content_scan_version) {
      content_scan_version = images.content_scan_version;
    }
    const enabledHarmTypesForMessage = ObscuredMediaUtils.getEnabledHarmTypesForMessage(message2);
    const obj3 = ObscuredMediaUtils;
    const tmp10 = obj3.getMediaObscuredReasonFromBitmask({ type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: images }, enabledHarmTypesForMessage).length > 0;
    const size = { uri: mobileOptimizedSrc, messageId: message2.id, guildId, channelId: message2.channel_id, mediaIndex, width: width.width, height: width.height, sourceURI: width.url, accessoryType: "embed", noCarousel: false, spoiler: hasSpoilerEmbeds, flags: images.flags, obscure: tmp10, contentScanVersion: content_scan_version, contentType: width.contentType, shareURI: width.url };
    const items = [size, { uri: str1, messageId: message2.id, guildId, channelId: message2.channel_id, mediaIndex, width: width.width, height: width.height, sourceURI: width.url, accessoryType: "embed", noCarousel: false, spoiler: hasSpoilerEmbeds, contentType: width.contentType, flags: images.flags, obscure: tmp10, contentScanVersion: content_scan_version, shareURI: width.url }];
    return items;
  });
};
export const extractMediaSourcesFromComponent = function extractMediaSourcesFromComponent(message2, components, guild_id, tmp10Result14, componentMediaIndex) {
  _require = message2;
  closure_1 = guild_id;
  const obj = require("InteractionComponentUtils");
  value = require("InteractionComponentUtils").flattenComponents(components).get(tmp10Result14);
  if (null == value) {
    return null;
  } else {
    const type = value.type;
    if (tmp(2000).ComponentType.MEDIA_GALLERY === type) {
      let num2 = 0;
      if (null != componentMediaIndex) {
        num2 = 0;
        if (componentMediaIndex <= value.items.length) {
          num2 = componentMediaIndex;
        }
      }
      dependencyMap = num2;
      const items = value.items;
      const mapped = items.map((media, index) => {
        let tmp = toMediaSourceFromUnfurledMedia(closure_0, closure_1, media.media, media.description, media.spoiler);
        if (null == tmp) {
          tmp = null;
          if (index < closure_2) {
            closure_2 = closure_2 - 1;
            tmp = null;
          }
        }
        return tmp;
      });
      obj2 = { initialIndex: dependencyMap, sources: mapped.filter(tmp(1388).isNotNullish) };
      return obj2;
    } else if (tmp(2000).ComponentType.THUMBNAIL === type) {
      const tmp7 = toMediaSourceFromUnfurledMedia(message2, guild_id, value.media, value.description, value.spoiler);
      let tmp8 = null;
      if (null != tmp7) {
        const obj3 = { initialIndex: 0, sources: null };
        const items1 = [tmp7];
        obj3.sources = items1;
        tmp8 = obj3;
      }
      return tmp8;
    } else {
      return null;
    }
  }
  const flattenComponentsResult = require("InteractionComponentUtils").flattenComponents(components);
};
export const extractMediaSourcesFromMessage = function extractMediaSourcesFromMessage(message, message2, guild_id, GRAVITY_VALID_EMBED_TYPES) {
  const items = [];
  let num = 0;
  let num2 = 0;
  if (0 < message2.attachments.length) {
    do {
      let tmp = message2.attachments[num];
      if (isValidImageAttachment(tmp)) {
        let tmp15 = extractMediaFromAttachment(tmp, message, tmp3, guild_id, tmp4);
        if (null != tmp15) {
          let arr = items.push(tmp15);
        }
      } else {
        let tmp5 = null != tmp;
        if (tmp5) {
          let isVideoFileResult = null != tmp;
          if (isVideoFileResult) {
            let obj = MediaFormatTesters;
            isVideoFileResult = obj.isVideoFile(tmp.filename);
          }
          if (isVideoFileResult) {
            isVideoFileResult = null != tmp.proxy_url;
          }
          tmp5 = isVideoFileResult;
        }
      }
      let tmp17 = null != tmp;
      if (tmp17) {
        let hasFlagResult = null != tmp.flags;
        if (hasFlagResult) {
          obj2 = FlagUtils;
          hasFlagResult = obj2.hasFlag(tmp.flags, constants.IS_THUMBNAIL);
        }
        tmp17 = hasFlagResult;
      }
      let sum = num2;
      if (!tmp17) {
        sum = num2 + 1;
      }
      num = num + 1;
      num2 = sum;
    } while (num < message2.attachments.length);
  }
  for (let num3 = 0; num3 < message2.embeds.length; num3 = num3 + 1) {
    let tmp23 = message2.embeds[num3];
    if (null == GRAVITY_VALID_EMBED_TYPES) {
      let tmp25 = null != tmp23.image || null != tmp23.thumbnail;
      if (tmp25) {
        let tmp32 = extractMediaFromEmbed(tmp23, message, message2, tmp24, guild_id);
        if (null != tmp32) {
          let arr3 = items.push(tmp32);
        }
      }
    }
  }
  return items;
};
export const setMediaSourcePortal = function setMediaSourcePortal(items1, portal) {
  let first = items1;
  if (Array.isArray(items1)) {
    first = items1[0];
  }
  if (!tmp2) {
    const _Array = Array;
    if (Array.isArray(items1)) {
      items1[0].portal = portal;
    } else {
      items1.portal = portal;
    }
  }
};
export const getSelectedMediaSource = function getSelectedMediaSource(mediaViewerSyncer) {
  const index = mediaViewerSyncer.index;
  value = index.get();
  if (value >= 0) {
    if (value < mediaViewerSyncer.sources.length) {
      let tmp2 = null;
      if (null != mediaViewerSyncer.sources[value]) {
        const _Array = Array;
        let tmp4 = arr;
        if (Array.isArray(arr)) {
          tmp4 = arr[arr.length - 1];
        }
        tmp2 = tmp4;
      }
      return tmp2;
    }
  }
  return null;
};
export const useSelectedMediaSource = ReactCompilerGating.isReactCompilerEnabled() ? (function useSelectedMediaSource(index) {
  const cResult = c.c(3);
  const tmp2 = useStateFromSharedValueDefault(index.index);
  let tmp3 = null;
  if (tmp2 >= 0) {
    tmp3 = null;
    if (tmp2 < index.sources.length) {
      let tmp4 = null;
      if (null != index.sources[tmp2]) {
        const _Array = Array;
        let tmp6 = arr;
        if (Array.isArray(arr)) {
          tmp6 = arr[arr.length - 1];
        }
        tmp4 = tmp6;
      }
      tmp3 = tmp4;
    }
  }
  if (cResult[0] === tmp2) {
    if (cResult[1] === tmp3) {
      let tmp7 = cResult[2];
    }
    return tmp7;
  }
  const items = [tmp2, tmp3];
  cResult[0] = tmp2;
  cResult[1] = tmp3;
  cResult[2] = items;
  tmp7 = items;
}) : (function useSelectedMediaSource(index) {
  const tmp = useStateFromSharedValueDefault(index.index);
  closure_1 = tmp;
  const items = [index.sources, tmp];
  const items1 = [
    tmp,
    noop.useMemo(() => {
      if (closure_1 >= 0) {
        if (closure_1 < index.sources.length) {
          let tmp2 = null;
          if (null != index.sources[closure_1]) {
            const _Array = Array;
            let tmp4 = arr;
            if (Array.isArray(arr)) {
              tmp4 = arr[arr.length - 1];
            }
            tmp2 = tmp4;
          }
          return tmp2;
        }
      }
      return null;
    }, items)
  ];
  return items1;
});
export const downloadMediaAsset = function downloadMediaAsset(mediaUrl, VIDEO) {
  closure_0 = VIDEO;
  return NativeMediaManagerModuleDefault.downloadMediaAsset(mediaUrl, VIDEO).then(() => {
    if (ConstantsIOS.MediaType.IMAGE === closure_0) {
      ToastUtils.presentImageSaved();
      const tmp2Result = ToastUtils;
    } else if (ConstantsIOS.MediaType.GIF === closure_0) {
      ToastUtils.presentGifSaved();
      const tmp2Result3 = ToastUtils;
    } else if (ConstantsIOS.MediaType.VIDEO === closure_0) {
      ToastUtils.presentVideoSaved();
      const tmp2Result4 = ToastUtils;
    }
    const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMediaViewerDownloadButtonTapped();
  }, handleDownloadError);
};
export { downloadMediaAssetWithContentType };
export const getYoutubeClipVideoIdFromURI = function getYoutubeClipVideoIdFromURI(uri) {
  const match = uri.match(/^https:\/\/www\.youtube\.com\/embed\/([A-Za-z0-9_-]*)(\?clip=([A-Za-z0-9_-]+)(&clipt=([A-Za-z0-9_-]+)))?$/);
  if (null != match) {
    if (6 === match.length) {
      let tmp4 = null;
      if (null != match[1]) {
        tmp4 = null;
        if (null != tmp2) {
          tmp4 = null;
          if (null != tmp3) {
            const obj = { videoId: tmp, clip: tmp2, clipt: tmp3 };
            tmp4 = obj;
          }
        }
      }
      return tmp4;
    }
  }
  return null;
};
export const getYoutubeVideoIdFromURI = function getYoutubeVideoIdFromURI(uri) {
  let match = uri.match(/^https:\/\/www\.youtube\.com\/embed\/([A-Za-z0-9_-]*)(\?start=([0-9]+))?$/);
  let tmp = null;
  if (null != match) {
    tmp = null;
    if (null != match[1]) {
      tmp = null;
      if (11 === match[1].length) {
        if (4 !== match.length) {
          const obj = { videoId: match[1] };
        }
        obj2 = { videoId: match[1], start: null };
        const _Number = Number;
        match = Number(match[3]);
        obj2.start = match;
      }
    }
  }
  return tmp;
};
export const VideoSourceType = obj2;
export const getVideoSourceType = function getVideoSourceType(source) {
  if (null != source.videoURI) {
    if (obj.isWebPlayerVideoUrl(source.videoURI)) {
      let PORTAL = obj2.WEB_FILE_IFRAME;
    }
    return PORTAL;
  }
  if (null != source.portal) {
    obj2 = MediaModalPortal;
    if (!obj2.isPortalExpired(source.portal)) {
      PORTAL = obj2.PORTAL;
    }
  }
  if (null == source.embedURI) {
    const DEFAULT = obj2.DEFAULT;
  }
  const TIKTOK_IFRAME = obj2.TIKTOK_IFRAME;
};
export const supportOverlayVideoControls = function supportOverlayVideoControls(videoURI) {
  let tmp = null != videoURI.videoURI;
  if (tmp) {
    tmp = true !== videoURI.isGIFV;
  }
  if (!tmp) {
    let tmp2 = null != videoURI.embedURI;
    if (tmp2) {
      tmp2 = "TikTok" === videoURI.embedProviderName;
    }
    tmp = tmp2;
  }
  return tmp;
};
export { isAnimatedWebpSource };
export { isAnimatedAvifSource };
export { isGIFSource };
export const isAnimatedImageSource = function isAnimatedImageSource(source) {
  let result = MediaFormatTesters.urlMatchesFileExtension(source.sourceURI, ConstantsIOS.GIF_RE_IOS);
  if (!result) {
    let result1 = null != source.sourceURI && null != source.uri;
    if (result1) {
      result1 = MediaFormatTesters.urlMatchesFileExtension(source.sourceURI, timestampProducer);
      const tmpResult = MediaFormatTesters;
    }
    if (result1) {
      const _URL = URL;
      const uRL = new URL(source.uri);
      const searchParams = uRL.searchParams;
      result1 = "true" === searchParams.get("animated");
    }
    result = result1;
  }
  if (!result) {
    let result2 = null != source.sourceURI && null != source.uri;
    if (result2) {
      result2 = MediaFormatTesters.urlMatchesFileExtension(source.sourceURI, re7);
      const tmpResult2 = MediaFormatTesters;
    }
    if (result2) {
      const _URL2 = URL;
      const uRL1 = new URL(source.uri);
      const searchParams2 = uRL1.searchParams;
      result2 = "true" === searchParams2.get("animated");
    }
    result = result2;
  }
  return result;
};