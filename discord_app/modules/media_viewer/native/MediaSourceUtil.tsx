// === Module 8263: MediaSourceUtil ===

// Module 8263 (MediaSourceUtil)
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import util from "util" /* 1114 */;
import FlagUtils from "FlagUtils" /* 1384 */;
import utils_ImageUtilsDefault from "utils/ImageUtils" /* 1476 */;
import Server from "Server" /* 1894 */;
import MediaFormatTesters from "MediaFormatTesters" /* 4710 */;
import InteractionComponentUtils from "InteractionComponentUtils" /* 4785 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 7292 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 7297 */;
import renderMessageMarkupDefault from "renderMessageMarkup" /* 7888 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7946 */;
import transformMessageComponents from "transformMessageComponents" /* 8110 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 8126 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8265 */;
import NativePortalView from "NativePortalView" /* 8267 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

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
          let obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Attachment, media: found };
          const result = ObscuredMediaUtils.isMediaObscuredForHarmTypes(obj, enabledHarmTypesForMessage);
          const isVideoFileResult = MediaFormatTesters.isVideoFile(found.filename);
          if (null != found.proxy_url) {
            if ("" !== found.proxy_url) {
              let url = found.proxy_url;
            }
            obj = utils_ImageUtilsDefault;
            ({ width, height } = found);
            let str2;
            if (isVideoFileResult) {
              str2 = "png";
            }
            const mobileOptimizedSrc = obj.getMobileOptimizedSrc(url, width, height, str2);
            if (isVideoFileResult) {
              const size = { uri: mobileOptimizedSrc, messageId: message2.id, guildId: guildIdFromSearchContext, channelId: message2.channel_id, videoURI: url, filename: tmp(8264)(found), mediaIndex, width: null, height: null, sourceURI: null, contentType: null, description: null, accessoryType: "attachment", spoiler: null, flags: null, obscure: null, placeholder: null, contentScanVersion: null, mediaViewIndex: null, attachmentId: null, shareURI: null };
              ({ width: obj11.width, height: obj11.height } = found);
              size.sourceURI = url;
              ({ content_type: obj11.contentType, description: obj11.description } = found);
              let tmp43Result = tmp43(1384);
              let num3 = found.flags;
              if (num3 == null) {
                num3 = 0;
              }
              let hasFlagResult = tmp43Result.hasFlag(num3, constants.IS_SPOILER);
              if (!hasFlagResult) {
                tmp43Result = tmp43(7329);
                hasFlagResult = tmp43Result.isChannelSpoilerGated(ChannelStore.getChannel(message2.channel_id));
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
              const size1 = { uri: mobileOptimizedSrc, messageId: message2.id, guildId: guildIdFromSearchContext, channelId: message2.channel_id, filename: tmp(8264)(found), mediaIndex, width: null, height: null, sourceURI: null, contentType: null, description: null, accessoryType: "attachment", spoiler: null, flags: null, obscure: null, placeholder: null, contentScanVersion: null, mediaViewIndex: null, attachmentId: null, shareURI: null };
              ({ width: obj2.width, height: obj2.height, url: obj2.sourceURI, content_type: obj2.contentType, description: obj2.description } = found);
              let num = found.flags;
              if (num == null) {
                num = 0;
              }
              let hasFlagResult1 = tmp43(1384).hasFlag(num, constants.IS_SPOILER);
              if (!hasFlagResult1) {
                hasFlagResult1 = tmp43(7329).isChannelSpoilerGated(ChannelStore.getChannel(message2.channel_id));
                const tmp43Result2 = tmp43(7329);
              }
              size1.spoiler = hasFlagResult1;
              size1.flags = found.flags;
              size1.obscure = result;
              ({ placeholder: obj2.placeholder, content_scan_version: obj2.contentScanVersion } = found);
              size1.mediaViewIndex = mediaViewIndex;
              ({ id: obj2.attachmentId, url: obj2.shareURI } = found);
              obj = {};
              const merged = Object.assign(size1);
              obj.uri = url;
              const tmp11 = constants;
              const tmp43Result1 = tmp43(1384);
              const formatted = tmp(8264)(found).toLowerCase();
              const str3 = tmp(8264)(found);
              const endsWithResult = formatted.endsWith(".webp");
              const formatted1 = tmp(8264)(found).toLowerCase();
              const endsWithResult1 = formatted1.endsWith(".avif");
              const str5 = tmp(8264)(found);
              let num2 = found.flags;
              if (num2 == null) {
                num2 = 0;
              }
              if (tmp43Result3.hasFlag(num2, tmp11.IS_ANIMATED)) {
                const _URL2 = URL;
                const str10 = new URL(url);
                const searchParams2 = str10.searchParams;
                searchParams2.append("animated", "true");
                if (endsWithResult1) {
                  const searchParams3 = str10.searchParams;
                  searchParams3.append("format", "webp");
                }
                const items = [size1, ];
                const obj1 = {};
                const merged1 = Object.assign(obj);
                obj1.uri = str10.toString();
                items[1] = obj1;
                return items;
              }
              if (endsWithResult1) {
                const _URL = URL;
                const str7 = new URL(url);
                const searchParams = str7.searchParams;
                searchParams.append("format", "webp");
                const items1 = [size1, ];
                const obj2 = {};
                const merged2 = Object.assign(obj);
                obj2.uri = str7.toString();
                items1[1] = obj2;
                return items1;
              } else {
                let tmp19 = obj;
                if (url !== mobileOptimizedSrc) {
                  const items2 = [size1, obj];
                  tmp19 = items2;
                }
                return tmp19;
              }
              tmp43Result3 = tmp43(1384);
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
      ({ proxyURL: proxyURL2, url: url2 } = thumbnail);
      let str = url2;
      if (null != proxyURL2) {
        str = url2;
        if ("" !== proxyURL2) {
          const _URL2 = URL;
          const str44 = new URL(proxyURL2);
          const formatted = str44.pathname.toLowerCase();
          const endsWithResult = formatted.endsWith(".avif");
          const formatted1 = str44.pathname.toLowerCase();
          if (tmp6) {
            if (formatted1.endsWith(".webp")) {
              const searchParams5 = str44.searchParams;
              searchParams5.append("animated", "true");
              if (endsWithResult) {
                const searchParams6 = str44.searchParams;
                searchParams6.append("format", "webp");
              }
              str = str44.toString();
            } else {
              str = proxyURL2;
            }
          } else {
            str = proxyURL2;
            if (endsWithResult) {
              const searchParams4 = str44.searchParams;
              searchParams4.append("format", "webp");
              str = str44.toString();
            }
          }
        }
      }
      if (null != image.contentScanVersion) {
        let content_scan_version = image.contentScanVersion;
      } else if (null != image.content_scan_version) {
        content_scan_version = image.content_scan_version;
      }
      let obj = utils_ImageUtilsDefault;
      const mobileOptimizedSrc = obj.getMobileOptimizedSrc(str, thumbnail.width, thumbnail.height);
      obj = { contentMessage };
      const hasSpoilerEmbeds = renderMessageMarkupDefault(id, obj).hasSpoilerEmbeds;
      let obj2 = ObscuredMediaUtils;
      const enabledHarmTypesForMessage = obj2.getEnabledHarmTypesForMessage(id);
      obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: image };
      const result = ObscuredMediaUtils.isMediaObscuredForHarmTypes(obj, enabledHarmTypesForMessage);
      if ("title" in image) {
        let rawTitle = image.title;
      } else if ("rawTitle" in image) {
        rawTitle = image.rawTitle;
      }
      let tmp16Result = tmp16(4897);
      const obj1 = {};
      const merged = Object.assign(image);
      obj1.rawTitle = rawTitle;
      const isEmbedInlineResult = tmp16Result.isEmbedInline(obj1);
      tmp16Result = tmp16(4897);
      const provider = image.provider;
      let name;
      if (provider != null) {
        name = provider.name;
      }
      const video = image.video;
      url = undefined;
      if (video != null) {
        url = video.url;
      }
      let url3 = tmp16Result.getEffectiveVideoProvider(name, url);
      const tmp13 = importDefault;
      const result1 = renderer_EmbedUtils.shouldPlayVideoInline(url3);
      let tmp26 = result1;
      if (result1) {
        tmp26 = null != image.video;
      }
      if (null != undefined) {
        if (!result1) {
          const size = { uri: mobileOptimizedSrc, messageId: id.id, guildId: guildIdFromSearchContext, channelId: id.channel_id, mediaIndex, videoURI: undefined, embedURI: image.url, width: null, height: null, isGIFV: null, sourceURI: null, embedProviderName: null, accessoryType: "embed", noCarousel: null, spoiler: null, flags: null, contentScanVersion: null, contentType: null, obscure: null, thumbnail: null, shareURI: null };
          ({ width: obj10.width, height: obj10.height } = thumbnail);
          size.isGIFV = "gifv" === image.type;
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
          let tmp30;
          if (null != image.thumbnail) {
            const size1 = { width: image.thumbnail.width, height: image.thumbnail.height, uri: image.thumbnail.url };
            tmp30 = size1;
          }
          size.thumbnail = tmp30;
          size.shareURI = image.url;
          return size;
        }
      }
      if ("video" !== image.type) {
        const size2 = { uri: mobileOptimizedSrc, messageId: id.id, guildId: guildIdFromSearchContext, channelId: id.channel_id, mediaIndex, width: null, height: null, sourceURI: null, accessoryType: "embed", noCarousel: null, spoiler: null, flags: null, obscure: null, contentScanVersion: null, contentType: null, shareURI: null };
        ({ width: obj15.width, height: obj15.height, url: obj15.sourceURI } = thumbnail);
        size2.noCarousel = !isEmbedInlineResult;
        size2.spoiler = hasSpoilerEmbeds;
        size2.flags = image.flags;
        size2.obscure = result;
        size2.contentScanVersion = content_scan_version;
        if ("contentType" in thumbnail) {
          let contentType4 = thumbnail.contentType;
        } else if ("content_type" in thumbnail) {
          const content_type4 = thumbnail.content_type;
          contentType4 = content_type4;
        }
        size2.contentType = contentType4;
        size2.shareURI = thumbnail.url;
        obj2 = {};
        const merged1 = Object.assign(size2);
        obj2.uri = str;
        let tmp43 = obj2;
        if (str !== mobileOptimizedSrc) {
          const items = [size2, obj2];
          tmp43 = items;
        }
        return tmp43;
      }
      const items1 = [];
      if (null == image.thumbnail) {
        if (tmp26) {
          tmp26 = null != image.video;
        }
        if (!tmp26) {
          if (0 !== items1.length) {
            if (1 === items1.length) {
              let first = items1[0];
            } else if (2 === items1.length) {
              const items2 = [, ];
              [arr2[0], arr2[1]] = items1;
              first = items2;
            }
            return first;
          }
        } else {
          let size3 = { uri: mobileOptimizedSrc, guildId: guildIdFromSearchContext, spoiler: hasSpoilerEmbeds, flags: image.flags, obscure: result, contentScanVersion: content_scan_version, contentType: null, sourceURI: null, messageId: null, noCarousel: null, mediaIndex: null, accessoryType: "embed", width: null, height: null, channelId: null, embedURI: null, embedProviderName: null, disableDownload: true, shareURI: null };
          let str29 = image.video;
          if ("contentType" in str29) {
            let contentType3 = str29.contentType;
          } else if ("content_type" in str29) {
            const content_type3 = str29.content_type;
            contentType3 = content_type3;
          }
          size3.contentType = contentType3;
          size3.sourceURI = image.url;
          size3.messageId = id.id;
          size3.noCarousel = !isEmbedInlineResult;
          size3.mediaIndex = mediaIndex;
          size3.width = image.video.width;
          size3.height = image.video.height;
          size3.channelId = id.channel_id;
          ({ proxyURL: proxyURL3, url: url4 } = image.video);
          let str1 = url4;
          if (null != proxyURL3) {
            str29 = "";
            str1 = url4;
            if ("" !== proxyURL3) {
              const _URL4 = URL;
              const uRL = new URL(proxyURL3);
              url4 = uRL;
              const formatted2 = uRL.pathname.toLowerCase();
              str29 = formatted2.endsWith(".avif");
              const formatted3 = uRL.pathname.toLowerCase();
              let str34 = formatted3.endsWith(".webp");
              if (!tmp35) {
                str1 = proxyURL3;
                if (str29) {
                  const searchParams10 = url4.searchParams;
                  searchParams10.append("format", "webp");
                  str1 = url4.toString();
                }
              }
            }
            if (str34) {
              const searchParams11 = url4.searchParams;
              str34 = "true";
              proxyURL3 = searchParams11.append("animated", "true");
              if (str29) {
                const searchParams12 = url4.searchParams;
                proxyURL3 = "webp";
                searchParams12.append("format", "webp");
              }
              str29 = url4.toString;
              str1 = str29();
            } else {
              str1 = proxyURL3;
            }
          }
          size3.embedURI = str1;
          size3.embedProviderName = url3;
          url3 = image.url;
          size3.shareURI = url3;
          size3 = items1.push(size3);
        }
      } else {
        ({ proxyURL: proxyURL4, url: url5 } = image.thumbnail);
        let str2 = url5;
        if (null != proxyURL4) {
          str2 = url5;
          if ("" !== proxyURL4) {
            const _URL3 = URL;
            const str50 = new URL(proxyURL4);
            const formatted4 = str50.pathname.toLowerCase();
            const endsWithResult1 = formatted4.endsWith(".avif");
            const formatted5 = str50.pathname.toLowerCase();
            if (tmp55) {
              if (formatted5.endsWith(".webp")) {
                const searchParams8 = str50.searchParams;
                searchParams8.append("animated", "true");
                if (endsWithResult1) {
                  const searchParams9 = str50.searchParams;
                  searchParams9.append("format", "webp");
                }
                str2 = str50.toString();
              } else {
                str2 = proxyURL4;
              }
            } else {
              str2 = proxyURL4;
              if (endsWithResult1) {
                const searchParams7 = str50.searchParams;
                searchParams7.append("format", "webp");
                str2 = str50.toString();
              }
            }
          }
        }
        let size4 = { uri: tmp13(1476).getMobileOptimizedSrc(str2, image.thumbnail.width, image.thumbnail.height), guildId: guildIdFromSearchContext, spoiler: hasSpoilerEmbeds, flags: image.flags, obscure: result, contentScanVersion: content_scan_version, contentType: null, messageId: null, noCarousel: null, mediaIndex: null, accessoryType: "embed", channelId: null, sourceURI: null, width: null, height: null, shareURI: null };
        const thumbnail2 = image.thumbnail;
        if ("contentType" in thumbnail2) {
          let contentType2 = thumbnail2.contentType;
        } else if ("content_type" in thumbnail2) {
          const content_type2 = thumbnail2.content_type;
          contentType2 = content_type2;
        }
        size4.contentType = contentType2;
        size4.messageId = id.id;
        size4.noCarousel = !isEmbedInlineResult;
        size4.mediaIndex = mediaIndex;
        size4.channelId = id.channel_id;
        size4.sourceURI = image.thumbnail.url;
        size4.width = image.thumbnail.width;
        size4.height = image.thumbnail.height;
        size4.shareURI = image.thumbnail.url;
        size4 = items1.push(size4);
        const tmp13Result = tmp13(1476);
      }
      const tmp16Result1 = renderer_EmbedUtils;
    } else {
      ({ proxyURL, url } = image.video);
      let str3 = url;
      if (null != proxyURL) {
        let str6 = "";
        str3 = url;
        if ("" !== proxyURL) {
          const _URL = URL;
          const uRL1 = new URL(proxyURL);
          url = uRL1;
          const formatted6 = uRL1.pathname.toLowerCase();
          str6 = formatted6.endsWith(".avif");
          const formatted7 = uRL1.pathname.toLowerCase();
          str3 = formatted7.endsWith(".webp");
          if (!tmp) {
            str3 = proxyURL;
            if (str6) {
              const searchParams = url.searchParams;
              str = "webp";
              str2 = "format";
              searchParams.append("format", "webp");
              str3 = url.toString();
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
          str3 = str6();
        } else {
          str3 = proxyURL;
        }
      }
    }
  }
}
function toMediaSourceFromUnfurledMedia(id, guildId, media, description, spoiler) {
  let obj = transformMessageComponents;
  const unfurledMediaItemType = obj.getUnfurledMediaItemType(media);
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
    const tmp4 = unfurledMediaItemType === tmp(8126).MediaGalleryItemType.VIDEO;
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
    let tmpResult = tmp(7292);
    const enabledHarmTypesForMessage = tmpResult.getEnabledHarmTypesForMessage(id);
    tmpResult = tmp(7292);
    obj = { type: tmp(7297).ObscuredMediaTypes.GenericMedia, media };
    const size = { messageId: id.id, guildId, channelId: id.channel_id, uri: mobileOptimizedSrc, sourceURI: null, width: null, height: null, contentType: null, description: null, spoiler: null, obscure: null, contentScanVersion: null, accessoryType: "component", mediaIndex: 0, shareURI: null };
    ({ url: obj5.sourceURI, width: width2 } = media);
    const result = tmpResult.isMediaObscuredForHarmTypes(obj, enabledHarmTypesForMessage);
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
    obj = {};
    const merged = Object.assign(size);
    const proxyUrl = media.proxyUrl;
    if (tmp4) {
      obj.videoURI = proxyUrl;
      return obj;
    } else {
      obj.uri = proxyUrl;
      let tmp21 = obj;
      if (media.proxyUrl !== mobileOptimizedSrc) {
        const obj1 = {};
        const merged1 = Object.assign(size);
        const items = [obj1, obj];
        tmp21 = items;
      }
      return tmp21;
    }
  }
}
function handleDownloadError() {
  const obj = { title: null, body: null, isDismissable: true };
  const intl = util.intl;
  obj.title = intl.string(util.t.cV3alD);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.r4Zjzv);
  obj.show(obj);
}
const NativeModules = fn(17).NativeModules;
const Constants = fn(1074);
({ MessageAttachmentFlags: metroRequire, WEBP_RE_IOS: closure_7 } = Constants);
const re8 = /\.avif$/i;
const VideoSourceType = { PORTAL: 0, [0]: "PORTAL", TIKTOK_IFRAME: 1, [1]: "TIKTOK_IFRAME", WEB_FILE_IFRAME: 2, [2]: "WEB_FILE_IFRAME", DEFAULT: 3, [3]: "DEFAULT" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/MediaSourceUtil.tsx");

export const flattenSource = function flattenSource(arr, arg1) {
  if (!Array.isArray(arr)) {
    return arr;
  } else if (arg1) {
    let first = arr[arr.length - 1];
  } else {
    first = arr[0];
  }
};
export { isValidImageAttachment };
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
export const isValidImageEmbed = function isValidImageEmbed(image) {
  return null != image.image || null != image.thumbnail;
};
export const isValidVideoEmbed = function isValidVideoEmbed(video) {
  return null != video.video;
};
export const isThumbnailAttachment = function isThumbnailAttachment(flags) {
  let tmp = null != flags;
  if (tmp) {
    let hasFlagResult = null != flags.flags;
    if (hasFlagResult) {
      hasFlagResult = FlagUtils.hasFlag(flags.flags, constants.IS_THUMBNAIL);
    }
    tmp = hasFlagResult;
  }
  return tmp;
};
export const getAttachmentUrl = function getAttachmentUrl(proxy_url) {
  if (null != proxy_url.proxy_url) {
    if ("" !== proxy_url.proxy_url) {
      let url = proxy_url.proxy_url;
    }
    return url;
  }
  url = proxy_url.url;
};
export { extractMediaFromAttachment };
export const getEmbedUrl = function getEmbedUrl(size) {
  const proxyURL = size.proxyURL;
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
  return size.url;
};
export const getEmbedMedia = function getEmbedMedia(embed) {
  let thumbnail = embed.image;
  if (thumbnail == null) {
    thumbnail = embed.video;
  }
  if (thumbnail == null) {
    thumbnail = embed.thumbnail;
  }
  return thumbnail;
};
export { extractMediaFromEmbed };
export const extractMediaFromMessageComponents = function extractMediaFromMessageComponents(getContentMessage, contentMessage, getContentMessage) {
  if (0 === contentMessage.components.length) {
    return [];
  } else {
    let items = [];
    const items1 = [];
    HermesBuiltin.arraySpread(InteractionComponentUtils.flattenComponents(contentMessage.components).values(), 0);
    const iter = items1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      let type = nextResult.type;
      let tmp6 = require;
      if (Server.ComponentType.MEDIA_GALLERY === type) {
        items = tmp4.items;
        for (const item10029 of items) {
          let tmp12 = item10029;
          let tmp16 = toMediaSourceFromUnfurledMedia(arg0, arg2, item10029.media, item10029.description, item10029.spoiler);
          if (null != tmp16) {
            let obj = { sources: null, unfurledMediaItem: null };
            obj.sources = tmp17;
            obj.unfurledMediaItem = tmp12.media;
            let arr = items.push(obj);
          }
          continue;
        }
      } else if (tmp6(1894).ComponentType.THUMBNAIL === type) {
        let tmp35 = toMediaSourceFromUnfurledMedia(getContentMessage, getContentMessage, tmp4.media, tmp4.description, tmp4.spoiler);
        if (null != tmp35) {
          obj = { sources: null, unfurledMediaItem: null };
          obj.sources = tmp36;
          obj.unfurledMediaItem = tmp4.media;
          arr = items.push(obj);
        }
      }
      continue;
    }
    return items;
  }
};
export const extractMediaSourcesFromEmbed = function extractMediaSourcesFromEmbed(message2, message, images, index, guild_id) {
  importDefault = images;
  dependencyMap = index;
  const guildId = guild_id;
  const hasSpoilerEmbeds = renderMessageMarkupDefault(message2, { contentMessage: message }).hasSpoilerEmbeds;
  images = images.images;
  if (images == null) {
    let items = [images.image];
    images = items;
  }
  return images.map((width) => {
    ({ proxyURL, url } = width);
    let str = url;
    if (null != proxyURL) {
      str = url;
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
            str = str8.toString();
          } else {
            str = proxyURL;
          }
        } else {
          str = proxyURL;
          if (endsWithResult) {
            const searchParams = str8.searchParams;
            str = "webp";
            searchParams.append("format", "webp");
            str = str8.toString();
          }
        }
      }
    }
    let obj = utils_ImageUtilsDefault;
    const mobileOptimizedSrc = obj.getMobileOptimizedSrc(str, width.width, width.height);
    if (null != images.contentScanVersion) {
      let content_scan_version = tmp8.contentScanVersion;
    } else if (null != tmp8.content_scan_version) {
      content_scan_version = tmp8.content_scan_version;
    }
    const enabledHarmTypesForMessage = ObscuredMediaUtils.getEnabledHarmTypesForMessage(message2);
    obj = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: tmp8 };
    const tmp10 = ObscuredMediaUtils.getMediaObscuredReasonFromBitmask(obj, enabledHarmTypesForMessage).length > 0;
    const size = { uri: mobileOptimizedSrc, messageId: message2.id, guildId, channelId: message2.channel_id, mediaIndex, width: width.width, height: width.height, sourceURI: width.url, accessoryType: "embed", noCarousel: false, spoiler: hasSpoilerEmbeds, flags: tmp8.flags, obscure: tmp10, contentScanVersion: content_scan_version, contentType: width.contentType, shareURI: width.url };
    const items = [size, { uri: str, messageId: message2.id, guildId, channelId: message2.channel_id, mediaIndex, width: width.width, height: width.height, sourceURI: width.url, accessoryType: "embed", noCarousel: false, spoiler: hasSpoilerEmbeds, contentType: width.contentType, flags: images.flags, obscure: tmp10, contentScanVersion: content_scan_version, shareURI: width.url }];
    return items;
  });
};
export const extractMediaSourcesFromComponent = function extractMediaSourcesFromComponent(message2, components, guild_id, tmp10Result3, componentMediaIndex) {
  _require = message2;
  closure_1 = guild_id;
  let obj = require("InteractionComponentUtils");
  value = obj.flattenComponents(components).get(tmp10Result3);
  if (null == value) {
    return null;
  } else {
    const type = value.type;
    if (tmp(1894).ComponentType.MEDIA_GALLERY === type) {
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
      obj = { initialIndex: dependencyMap, sources: mapped.filter(tmp(1369).isNotNullish) };
      return obj;
    } else if (tmp(1894).ComponentType.THUMBNAIL === type) {
      const tmp7 = toMediaSourceFromUnfurledMedia(message2, guild_id, value.media, value.description, value.spoiler);
      let tmp8 = null;
      if (null != tmp7) {
        obj = { initialIndex: 0, sources: null };
        const items1 = [tmp7];
        obj.sources = items1;
        tmp8 = obj;
      }
      return tmp8;
    } else {
      return null;
    }
  }
  const flattenComponentsResult = obj.flattenComponents(components);
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
          let obj2 = FlagUtils;
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
          arr = items.push(tmp32);
        }
      }
    }
  }
  return items;
};
export const setMediaSourcePortal = function setMediaSourcePortal(items, portal) {
  let first = items;
  if (Array.isArray(items)) {
    first = items[0];
  }
  if (!tmp2) {
    const _Array = Array;
    if (Array.isArray(items)) {
      items[0].portal = portal;
    } else {
      items.portal = portal;
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
export const useSelectedMediaSource = function useSelectedMediaSource(syncer) {
  const tmp = useStateFromSharedValueDefault(syncer.index);
  closure_1 = tmp;
  const items = [syncer.sources, tmp];
  const items1 = [
    tmp,
    noop.useMemo(() => {
      if (closure_1 >= 0) {
        if (tmp < syncer.sources.length) {
          let tmp2 = null;
          if (null != syncer.sources[tmp]) {
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
};
export const downloadMediaAsset = function downloadMediaAsset(mediaUrl, VIDEO) {
  closure_0 = VIDEO;
  const MediaManager = NativeModules.MediaManager;
  return MediaManager.downloadMediaAsset(mediaUrl, VIDEO).then(() => {
    if (ConstantsIOS.MediaType.IMAGE === closure_0) {
      let tmp2Result = tmp2(4258);
      tmp2Result.presentImageSaved();
    } else if (tmp2(1093).MediaType.GIF === tmp) {
      tmp2Result = tmp2(4258);
      tmp2Result.presentGifSaved();
    } else if (tmp2(1093).MediaType.VIDEO === tmp) {
      tmp2(4258).presentVideoSaved();
      const tmp2Result1 = tmp2(4258);
    }
    const MediaViewerAnalytics = tmp2(8266).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMediaViewerDownloadButtonTapped();
  }, handleDownloadError);
};
export const downloadMediaAssetWithContentType = function downloadMediaAssetWithContentType(mediaUrl, VIDEO, contentType) {
  closure_0 = VIDEO;
  if (null != contentType) {
    const MediaManager2 = NativeModules.MediaManager;
    let result = MediaManager2.downloadMediaAssetWithContentType(mediaUrl, VIDEO, contentType);
  } else {
    const MediaManager = NativeModules.MediaManager;
    result = MediaManager.downloadMediaAsset(mediaUrl, VIDEO);
  }
  return result.then(() => {
    if (ConstantsIOS.MediaType.IMAGE === closure_0) {
      let tmp2Result = tmp2(4258);
      tmp2Result.presentImageSaved();
    } else if (tmp2(1093).MediaType.GIF === tmp) {
      tmp2Result = tmp2(4258);
      tmp2Result.presentGifSaved();
    } else if (tmp2(1093).MediaType.VIDEO === tmp) {
      tmp2(4258).presentVideoSaved();
      const tmp2Result1 = tmp2(4258);
    }
    const MediaViewerAnalytics = tmp2(8266).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMediaViewerDownloadButtonTapped();
  }, handleDownloadError);
};
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
          let obj = { videoId: match[1] };
        }
        obj = { videoId: match[1], start: null };
        const _Number = Number;
        match = Number(match[3]);
        obj.start = match;
      }
    }
  }
  return tmp;
};
export { VideoSourceType };
export const getVideoSourceType = function getVideoSourceType(source) {
  if (null != source.videoURI) {
    const obj = MediaFormatTesters;
    if (obj.isWebPlayerVideoUrl(source.videoURI)) {
      let PORTAL = obj.WEB_FILE_IFRAME;
    }
    return PORTAL;
  }
  if (null != source.portal) {
    if (!obj2.isPortalExpired(source.portal)) {
      PORTAL = obj.PORTAL;
    }
    obj2 = NativePortalView;
  }
  if (null == source.embedURI) {
    const DEFAULT = obj.DEFAULT;
  }
  const TIKTOK_IFRAME = obj.TIKTOK_IFRAME;
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
export const isAnimatedWebpSource = function isAnimatedWebpSource(sourceURI) {
  let result = null != sourceURI.sourceURI && null != sourceURI.uri;
  if (result) {
    result = MediaFormatTesters.urlMatchesFileExtension(sourceURI.sourceURI, React5);
  }
  if (result) {
    const _URL = URL;
    const uRL = new URL(sourceURI.uri);
    const searchParams = uRL.searchParams;
    result = "true" === searchParams.get("animated");
  }
  return result;
};
export const isAnimatedAvifSource = function isAnimatedAvifSource(sourceURI) {
  let result = null != sourceURI.sourceURI && null != sourceURI.uri;
  if (result) {
    result = MediaFormatTesters.urlMatchesFileExtension(sourceURI.sourceURI, re8);
  }
  if (result) {
    const _URL = URL;
    const uRL = new URL(sourceURI.uri);
    const searchParams = uRL.searchParams;
    result = "true" === searchParams.get("animated");
  }
  return result;
};
export const isGIFSource = function isGIFSource(sourceURI) {
  return MediaFormatTesters.urlMatchesFileExtension(sourceURI.sourceURI, ConstantsIOS.GIF_RE_IOS);
};
export const isAnimatedImageSource = function isAnimatedImageSource(source) {
  let result = MediaFormatTesters.urlMatchesFileExtension(source.sourceURI, ConstantsIOS.GIF_RE_IOS);
  if (!result) {
    let result1 = null != source.sourceURI && null != source.uri;
    if (result1) {
      let tmpResult = tmp(4710);
      result1 = tmpResult.urlMatchesFileExtension(source.sourceURI, React5);
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
      tmpResult = tmp(4710);
      result2 = tmpResult.urlMatchesFileExtension(source.sourceURI, re8);
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