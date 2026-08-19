// discord_app/modules/media_viewer/native/MediaSourceUtil.tsx
import keys from "../../../ConstantsIOS.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import hasFlag from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import getSrcWithWidthAndHeightDefault from "../../../utils/native/ImageUtils.tsx";
import PermissionOverwriteType from "../../../flow/Server.tsx";
import _modDef4656 from "../../../actions/native/AlertActionCreators.tsx";
import flattenComponents from "../../interaction_components/InteractionComponentUtils.tsx";
import urlMatchesFileExtension from "../../messages/MediaFormatTesters.tsx";
import getEffectiveVideoProvider from "../../../utils/EmbedUtils.tsx";
import getEligibleHarmTypesConfigsForContext from "../../explicit_media_redaction/ObscuredMediaUtils.tsx";
import ContentHarmTypeChannel from "../../explicit_media_redaction/ExplicitMediaRedactionModels.tsx";
import isChannelSpoilerGated from "../../spoiler_channels/SpoilerChannelUtils.tsx";
import frozen from "../../messages/native/renderer/EmbedUtils.tsx";
import getInitialParserStateDefault from "../../messages/renderMessageMarkup.tsx";
import transformToRowGeneratedComponent from "../../messages/native/renderer/transformMessageComponents.tsx";
import MediaGalleryItemType from "../../messages/native/renderer/RowGeneratorTypes.tsx";
import getDisplayFilenameDefault from "../../messages/getDisplayFilename.tsx";
import mapDefault from "../../reanimated/native/useStateFromSharedValue.tsx";
import MediaPlayerManager from "../../../components_native/common/NativePortalView.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { NativeModules } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import ME from "../../../Constants.tsx";
import { flattenComponents } from "../../interaction_components/InteractionComponentUtils.tsx";

require = fn;
function isValidImageAttachment(filename) {
  if (null == filename) {
    return false;
  } else {
    ({ height, width } = filename);
    let tmp = urlMatchesFileExtension.isImageFile(filename.filename) && null != height;
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
          hasFlagResult = hasFlag.hasFlag(filename.flags, constants.IS_THUMBNAIL);
          const tmp5Result = hasFlag;
        }
        tmp2 = hasFlagResult;
      }
      tmp = !tmp2;
    }
    return tmp;
  }
}
function extractMediaFromAttachment(found, closure_0, index, closure_02, arg4) {
  if (null != found.width) {
    if (found.width > 0) {
      if (null != found.height) {
        if (found.height > 0) {
          const enabledHarmTypesForMessage = getEligibleHarmTypesConfigsForContext.getEnabledHarmTypesForMessage(_require);
          obj = { type: null, media: null };
          obj[0] = ContentHarmTypeChannel.ObscuredMediaTypes.Attachment;
          obj[1] = found;
          const result = getEligibleHarmTypesConfigsForContext.isMediaObscuredForHarmTypes(obj, enabledHarmTypesForMessage);
          const isVideoFileResult = urlMatchesFileExtension.isVideoFile(found.filename);
          if (null != found.proxy_url) {
            if ("" !== found.proxy_url) {
              let url = found.proxy_url;
            }
            obj = getSrcWithWidthAndHeightDefault;
            ({ width, height } = found);
            let str2;
            if (isVideoFileResult) {
              str2 = "png";
            }
            const mobileOptimizedSrc = obj.getMobileOptimizedSrc(url, width, height, str2);
            if (isVideoFileResult) {
              obj = { uri: null, messageId: null, guildId: null, channelId: null, videoURI: null, filename: null, mediaIndex: null, width: null, height: null, sourceURI: null, contentType: null, description: null, accessoryType: "attachment", spoiler: null, flags: null, obscure: null, placeholder: null, contentScanVersion: null, mediaViewIndex: null, attachmentId: null, shareURI: null };
              obj[0] = mobileOptimizedSrc;
              obj[1] = _require.id;
              obj[2] = closure_02;
              obj[3] = _require.channel_id;
              obj[4] = url;
              obj[5] = getDisplayFilenameDefault(found);
              obj[6] = index;
              ({ width: obj11[7], height: obj11[8] } = found);
              obj[9] = url;
              ({ content_type: obj11[10], description: obj11[11] } = found);
              let tmp43Result = hasFlag;
              let num3 = found.flags;
              if (num3 == null) {
                num3 = 0;
              }
              let hasFlagResult = tmp43Result.hasFlag(num3, constants.IS_SPOILER);
              if (!hasFlagResult) {
                tmp43Result = isChannelSpoilerGated;
                hasFlagResult = tmp43Result.isChannelSpoilerGated(store.getChannel(_require.channel_id));
              }
              obj[13] = hasFlagResult;
              obj[14] = found.flags;
              obj[15] = result;
              ({ placeholder: obj11[16], content_scan_version: obj11[17] } = found);
              obj[18] = arg4;
              obj[19] = found.id;
              obj[20] = url;
              return obj;
            } else {
              obj1 = { uri: null, messageId: null, guildId: null, channelId: null, filename: null, mediaIndex: null, width: null, height: null, sourceURI: null, contentType: null, description: null, accessoryType: "attachment", spoiler: null, flags: null, obscure: null, placeholder: null, contentScanVersion: null, mediaViewIndex: null, attachmentId: null, shareURI: null };
              obj1[0] = mobileOptimizedSrc;
              obj1[1] = _require.id;
              obj1[2] = closure_02;
              obj1[3] = _require.channel_id;
              obj1[4] = getDisplayFilenameDefault(found);
              obj1[5] = index;
              ({ width: obj2[6], height: obj2[7], url: obj2[8], content_type: obj2[9], description: obj2[10] } = found);
              let num = found.flags;
              if (num == null) {
                num = 0;
              }
              let hasFlagResult1 = hasFlag.hasFlag(num, constants.IS_SPOILER);
              if (!hasFlagResult1) {
                hasFlagResult1 = isChannelSpoilerGated.isChannelSpoilerGated(store.getChannel(_require.channel_id));
                const tmp43Result2 = isChannelSpoilerGated;
              }
              obj1[12] = hasFlagResult1;
              obj1[13] = found.flags;
              obj1[14] = result;
              ({ placeholder: obj2[15], content_scan_version: obj2[16] } = found);
              obj1[17] = arg4;
              ({ id: obj2[18], url: obj2[19] } = found);
              const obj2 = {};
              const merged = Object.assign(obj1);
              obj2.uri = url;
              const tmp43Result1 = hasFlag;
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
              if (tmp43Result3.hasFlag(num2, constants.IS_ANIMATED)) {
                const _URL2 = URL;
                const str10 = new URL(url);
                const searchParams2 = str10.searchParams;
                searchParams2.append("animated", "true");
                if (endsWithResult1) {
                  const searchParams3 = str10.searchParams;
                  searchParams3.append("format", "webp");
                }
                const items = [obj1, ];
                const obj3 = {};
                const merged1 = Object.assign(obj2);
                obj3.uri = str10.toString();
                items[1] = obj3;
                return items;
              }
              if (endsWithResult1) {
                const _URL = URL;
                const str7 = new URL(url);
                const searchParams = str7.searchParams;
                searchParams.append("format", "webp");
                const items1 = [obj1, ];
                const obj4 = {};
                const merged2 = Object.assign(obj2);
                obj4.uri = str7.toString();
                items1[1] = obj4;
                return items1;
              } else {
                let tmp19 = obj2;
                if (url !== mobileOptimizedSrc) {
                  const items2 = [obj1, obj2];
                  tmp19 = items2;
                }
                return tmp19;
              }
              tmp43Result3 = hasFlag;
            }
          }
          url = found.url;
        }
      }
    }
  }
}
function extractMediaFromEmbed(image, closure_0, contentMessage, index, closure_02) {
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
      obj = getSrcWithWidthAndHeightDefault;
      const mobileOptimizedSrc = obj.getMobileOptimizedSrc(str, thumbnail.width, thumbnail.height);
      obj = { contentMessage: null };
      obj[0] = contentMessage;
      const hasSpoilerEmbeds = getInitialParserStateDefault(_require, obj).hasSpoilerEmbeds;
      let obj2 = getEligibleHarmTypesConfigsForContext;
      const enabledHarmTypesForMessage = obj2.getEnabledHarmTypesForMessage(_require);
      let obj3 = getEligibleHarmTypesConfigsForContext;
      obj = { type: null, media: null };
      obj[0] = ContentHarmTypeChannel.ObscuredMediaTypes.Embed;
      obj[1] = image;
      const result = obj3.isMediaObscuredForHarmTypes(obj, enabledHarmTypesForMessage);
      if ("title" in image) {
        let rawTitle = image.title;
      } else if ("rawTitle" in image) {
        rawTitle = image.rawTitle;
      }
      let tmp16Result = getEffectiveVideoProvider;
      obj1 = {};
      const merged = Object.assign(image);
      obj1.rawTitle = rawTitle;
      const isEmbedInlineResult = tmp16Result.isEmbedInline(obj1);
      tmp16Result = getEffectiveVideoProvider;
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
      const result1 = frozen.shouldPlayVideoInline(url3);
      let tmp26 = result1;
      if (result1) {
        tmp26 = null != image.video;
      }
      if (null != undefined) {
        if (!result1) {
          obj2 = { uri: null, messageId: null, guildId: null, channelId: null, mediaIndex: null, videoURI: null, embedURI: null, width: null, height: null, isGIFV: null, sourceURI: null, embedProviderName: null, accessoryType: "embed", noCarousel: null, spoiler: null, flags: null, contentScanVersion: null, contentType: null, obscure: null, thumbnail: null, shareURI: null };
          obj2[0] = mobileOptimizedSrc;
          obj2[1] = _require.id;
          obj2[2] = closure_02;
          obj2[3] = _require.channel_id;
          obj2[4] = index;
          obj2[5] = undefined;
          obj2[6] = image.url;
          ({ width: obj10[7], height: obj10[8] } = thumbnail);
          obj2[9] = "gifv" === image.type;
          obj2[10] = thumbnail.url;
          const provider2 = image.provider;
          let name1;
          if (provider2 != null) {
            name1 = provider2.name;
          }
          obj2[11] = name1;
          obj2[13] = !isEmbedInlineResult;
          obj2[14] = hasSpoilerEmbeds;
          obj2[15] = image.flags;
          obj2[16] = content_scan_version;
          if ("contentType" in thumbnail) {
            let contentType = thumbnail.contentType;
          } else if ("content_type" in thumbnail) {
            const content_type = thumbnail.content_type;
            contentType = content_type;
          }
          obj2[17] = contentType;
          obj2[18] = result;
          let tmp30;
          if (null != image.thumbnail) {
            obj3 = { width: null, height: null, uri: null };
            obj3[0] = image.thumbnail.width;
            obj3[1] = image.thumbnail.height;
            obj3[2] = image.thumbnail.url;
            tmp30 = obj3;
          }
          obj2[19] = tmp30;
          obj2[20] = image.url;
          return obj2;
        }
      }
      if ("video" !== image.type) {
        const obj4 = { uri: null, messageId: null, guildId: null, channelId: null, mediaIndex: null, width: null, height: null, sourceURI: null, accessoryType: "embed", noCarousel: null, spoiler: null, flags: null, obscure: null, contentScanVersion: null, contentType: null, shareURI: null };
        obj4[0] = mobileOptimizedSrc;
        obj4[1] = _require.id;
        obj4[2] = closure_02;
        obj4[3] = _require.channel_id;
        obj4[4] = index;
        ({ width: obj15[5], height: obj15[6], url: obj15[7] } = thumbnail);
        obj4[9] = !isEmbedInlineResult;
        obj4[10] = hasSpoilerEmbeds;
        obj4[11] = image.flags;
        obj4[12] = result;
        obj4[13] = content_scan_version;
        if ("contentType" in thumbnail) {
          let contentType4 = thumbnail.contentType;
        } else if ("content_type" in thumbnail) {
          const content_type4 = thumbnail.content_type;
          contentType4 = content_type4;
        }
        obj4[14] = contentType4;
        obj4[15] = thumbnail.url;
        const obj5 = {};
        const merged1 = Object.assign(obj4);
        obj5.uri = str;
        let tmp43 = obj5;
        if (str !== mobileOptimizedSrc) {
          const items = [obj4, obj5];
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
          let obj6 = { uri: null, guildId: null, spoiler: null, flags: null, obscure: null, contentScanVersion: null, contentType: null, sourceURI: null, messageId: null, noCarousel: null, mediaIndex: null, accessoryType: "embed", width: null, height: null, channelId: null, embedURI: null, embedProviderName: null, disableDownload: true, shareURI: null };
          obj6[0] = mobileOptimizedSrc;
          obj6[1] = closure_02;
          obj6[2] = hasSpoilerEmbeds;
          obj6[3] = image.flags;
          obj6[4] = result;
          obj6[5] = content_scan_version;
          let str29 = image.video;
          if ("contentType" in str29) {
            let contentType3 = str29.contentType;
          } else if ("content_type" in str29) {
            const content_type3 = str29.content_type;
            contentType3 = content_type3;
          }
          obj6[6] = contentType3;
          obj6[7] = image.url;
          obj6[8] = _require.id;
          obj6[9] = !isEmbedInlineResult;
          obj6[10] = index;
          obj6[12] = image.video.width;
          obj6[13] = image.video.height;
          obj6[14] = _require.channel_id;
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
          obj6[15] = str1;
          obj6[16] = url3;
          url3 = image.url;
          obj6[18] = url3;
          obj6 = items1.push(obj6);
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
        let obj7 = { uri: null, guildId: null, spoiler: null, flags: null, obscure: null, contentScanVersion: null, contentType: null, messageId: null, noCarousel: null, mediaIndex: null, accessoryType: "embed", channelId: null, sourceURI: null, width: null, height: null, shareURI: null };
        obj7[0] = getSrcWithWidthAndHeightDefault.getMobileOptimizedSrc(str2, image.thumbnail.width, image.thumbnail.height);
        obj7[1] = closure_02;
        obj7[2] = hasSpoilerEmbeds;
        obj7[3] = image.flags;
        obj7[4] = result;
        obj7[5] = content_scan_version;
        const thumbnail2 = image.thumbnail;
        if ("contentType" in thumbnail2) {
          let contentType2 = thumbnail2.contentType;
        } else if ("content_type" in thumbnail2) {
          const content_type2 = thumbnail2.content_type;
          contentType2 = content_type2;
        }
        obj7[6] = contentType2;
        obj7[7] = _require.id;
        obj7[8] = !isEmbedInlineResult;
        obj7[9] = index;
        obj7[11] = _require.channel_id;
        obj7[12] = image.thumbnail.url;
        obj7[13] = image.thumbnail.width;
        obj7[14] = image.thumbnail.height;
        obj7[15] = image.thumbnail.url;
        obj7 = items1.push(obj7);
        const tmp13Result = getSrcWithWidthAndHeightDefault;
      }
      const tmp16Result1 = frozen;
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
function toMediaSourceFromUnfurledMedia(id, guild_id, media, description, spoiler) {
  obj = transformToRowGeneratedComponent;
  const unfurledMediaItemType = obj.getUnfurledMediaItemType(media);
  if (unfurledMediaItemType === MediaGalleryItemType.MediaGalleryItemType.VISUAL_PLACEHOLDER) {
    return null;
  } else {
    const obj8 = getSrcWithWidthAndHeightDefault;
    ({ proxyUrl: proxyUrl2, width } = media);
    if (width == null) {
      width = 0;
    }
    let num = media.height;
    if (num == null) {
      num = 0;
    }
    const tmp4 = unfurledMediaItemType === MediaGalleryItemType.MediaGalleryItemType.VIDEO;
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
    let tmpResult = getEligibleHarmTypesConfigsForContext;
    const enabledHarmTypesForMessage = tmpResult.getEnabledHarmTypesForMessage(id);
    tmpResult = getEligibleHarmTypesConfigsForContext;
    obj = { type: null, media: null };
    obj[0] = ContentHarmTypeChannel.ObscuredMediaTypes.GenericMedia;
    obj[1] = media;
    obj = { messageId: null, guildId: null, channelId: null, uri: null, sourceURI: null, width: null, height: null, contentType: null, description: null, spoiler: null, obscure: null, contentScanVersion: null, accessoryType: "component", mediaIndex: 0, shareURI: null };
    obj[0] = id.id;
    obj[1] = guild_id;
    obj[2] = id.channel_id;
    obj[3] = mobileOptimizedSrc;
    ({ url: obj5[4], width: width2 } = media);
    const result = tmpResult.isMediaObscuredForHarmTypes(obj, enabledHarmTypesForMessage);
    if (width2 == null) {
      width2 = 0;
    }
    obj[5] = width2;
    let num2 = media.height;
    if (num2 == null) {
      num2 = 0;
    }
    obj[6] = num2;
    obj[7] = media.contentType;
    obj[8] = description;
    obj[9] = spoiler;
    obj[10] = result;
    obj[11] = version;
    obj[14] = media.url;
    obj1 = {};
    const merged = Object.assign(obj);
    const proxyUrl = media.proxyUrl;
    if (tmp4) {
      obj1.videoURI = proxyUrl;
      return obj1;
    } else {
      obj1.uri = proxyUrl;
      let tmp21 = obj1;
      if (media.proxyUrl !== mobileOptimizedSrc) {
        const obj2 = {};
        const merged1 = Object.assign(obj);
        const items = [obj2, obj1];
        tmp21 = items;
      }
      return tmp21;
    }
  }
}
function handleDownloadError() {
  obj = { title: null, body: null, isDismissable: true };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.cV3alD);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.r4Zjzv);
  obj.show(obj);
}
({ MessageAttachmentFlags: closure_6, WEBP_RE_IOS: error } = ME);
const re8 = /\.avif$/i;
let obj = { PORTAL: 0, [0]: "PORTAL", TIKTOK_IFRAME: 1, [1]: "TIKTOK_IFRAME", WEB_FILE_IFRAME: 2, [2]: "WEB_FILE_IFRAME", DEFAULT: 3, [3]: "DEFAULT" };
let result = require("obj132").fileFinishedImporting("modules/media_viewer/native/MediaSourceUtil.tsx");

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
      isVideoFileResult = urlMatchesFileExtension.isVideoFile(filename.filename);
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
      hasFlagResult = hasFlag.hasFlag(flags.flags, constants.IS_THUMBNAIL);
    }
    tmp = hasFlagResult;
  }
  return tmp;
};
export const getAttachmentUrl = function getAttachmentUrl(attachment) {
  if (null != attachment.proxy_url) {
    if ("" !== attachment.proxy_url) {
      let url = attachment.proxy_url;
    }
    return url;
  }
  url = attachment.url;
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
export const extractMediaFromMessageComponents = function extractMediaFromMessageComponents(item, contentMessage, closure_0) {
  if (0 === contentMessage.components.length) {
    return [];
  } else {
    let items = [];
    const items1 = [];
    HermesBuiltin.arraySpread(flattenComponents.flattenComponents(contentMessage.components).values(), 0);
    const iter = items1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      let type = nextResult.type;
      if (PermissionOverwriteType.ComponentType.MEDIA_GALLERY === type) {
        items = tmp4.items;
        for (const item10029 of items) {
          let tmp16 = toMediaSourceFromUnfurledMedia(arg0, arg2, item10029.media, item10029.description, item10029.spoiler);
          if (null != tmp16) {
            obj = { sources: null, unfurledMediaItem: null };
            obj[0] = tmp17;
            obj[1] = item10029.media;
            let arr = items.push(obj);
          }
          continue;
        }
      } else if (PermissionOverwriteType.ComponentType.THUMBNAIL === type) {
        let tmp35 = toMediaSourceFromUnfurledMedia(item, closure_0, tmp4.media, tmp4.description, tmp4.spoiler);
        if (null != tmp35) {
          obj = { sources: null, unfurledMediaItem: null };
          obj[0] = tmp36;
          obj[1] = tmp4.media;
          arr = items.push(obj);
        }
      }
      continue;
    }
    return items;
  }
};
export const extractMediaSourcesFromEmbed = function extractMediaSourcesFromEmbed(message2, message, images, index, guild_id) {
  closure_0 = message2;
  importDefault = images;
  dependencyMap = index;
  closure_3 = guild_id;
  const hasSpoilerEmbeds = getInitialParserStateDefault(message2, { contentMessage: message }).hasSpoilerEmbeds;
  images = images.images;
  if (images == null) {
    let items = [images.image];
    images = items;
  }
  return images.map((item, index) => {
    ({ proxyURL, url } = item);
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
            searchParams.append("format", "webp");
            str = str8.toString();
          }
        }
      }
    }
    obj = images(index[8]);
    const mobileOptimizedSrc = obj.getMobileOptimizedSrc(str, item.width, item.height);
    if (null != images.contentScanVersion) {
      let content_scan_version = images.contentScanVersion;
    } else if (null != images.content_scan_version) {
      content_scan_version = images.content_scan_version;
    }
    const enabledHarmTypesForMessage = message2(index[6]).getEnabledHarmTypesForMessage(message2);
    const obj2 = message2(index[6]);
    obj = { type: message2(index[7]).ObscuredMediaTypes.Embed, media: images };
    const tmp10 = message2(index[6]).getMediaObscuredReasonFromBitmask(obj, enabledHarmTypesForMessage).length > 0;
    obj = { uri: mobileOptimizedSrc, messageId: message2.id, guildId: closure_3, channelId: message2.channel_id, mediaIndex: index, width: item.width, height: item.height, sourceURI: item.url, accessoryType: "embed", noCarousel: false, spoiler: hasSpoilerEmbeds, flags: images.flags, obscure: tmp10, contentScanVersion: content_scan_version, contentType: item.contentType, shareURI: item.url };
    const items = [obj, { uri: str, messageId: message2.id, guildId: closure_3, channelId: message2.channel_id, mediaIndex: index, width: item.width, height: item.height, sourceURI: item.url, accessoryType: "embed", noCarousel: false, spoiler: hasSpoilerEmbeds, contentType: item.contentType, flags: images.flags, obscure: tmp10, contentScanVersion: content_scan_version, shareURI: item.url }];
    return items;
  });
};
export const extractMediaSourcesFromComponent = function extractMediaSourcesFromComponent(message2, components, guild_id, tmp10Result3, componentMediaIndex) {
  const _require = message2;
  closure_1 = guild_id;
  obj = flattenComponents;
  const value = obj.flattenComponents(components).get(tmp10Result3);
  if (null == value) {
    return null;
  } else {
    const type = value.type;
    if (tmp(1954).ComponentType.MEDIA_GALLERY === type) {
      let num2 = 0;
      if (null != componentMediaIndex) {
        num2 = 0;
        if (componentMediaIndex <= value.items.length) {
          num2 = componentMediaIndex;
        }
      }
      const items = value.items;
      const mapped = items.map((item, index) => {
        let tmp = toMediaSourceFromUnfurledMedia(closure_0, closure_1, item.media, item.description, item.spoiler);
        if (null == tmp) {
          tmp = null;
          if (index < closure_2) {
            closure_2 = closure_2 - 1;
            tmp = null;
          }
        }
        return tmp;
      });
      obj = { initialIndex: null, sources: null };
      obj[0] = num2;
      obj[1] = mapped.filter(tmp(1370).isNotNullish);
      return obj;
    } else if (tmp(1954).ComponentType.THUMBNAIL === type) {
      const tmp7 = toMediaSourceFromUnfurledMedia(message2, guild_id, value.media, value.description, value.spoiler);
      let tmp8 = null;
      if (null != tmp7) {
        obj = { initialIndex: 0, sources: null };
        const items1 = [tmp7];
        obj[1] = items1;
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
            obj = urlMatchesFileExtension;
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
          let obj2 = hasFlag;
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
  const value = index.get();
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
  closure_0 = syncer;
  const tmp = mapDefault(syncer.index);
  importDefault = tmp;
  const items = [syncer.sources, tmp];
  const items1 = [
    tmp,
    React.useMemo(() => {
      if (closure_1 >= 0) {
        if (closure_1 < syncer.sources.length) {
          let tmp2 = null;
          if (null != syncer.sources[closure_1]) {
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
  return MediaManager.downloadMediaAsset(mediaUrl, VIDEO).then((result) => {
    if (VIDEO(dependencyMap[20]).MediaType.IMAGE === VIDEO) {
      let tmp2Result = VIDEO(dependencyMap[21]);
      tmp2Result.presentImageSaved();
    } else if (VIDEO(dependencyMap[20]).MediaType.GIF === VIDEO) {
      tmp2Result = VIDEO(dependencyMap[21]);
      tmp2Result.presentGifSaved();
    } else if (VIDEO(dependencyMap[20]).MediaType.VIDEO === VIDEO) {
      VIDEO(dependencyMap[21]).presentVideoSaved();
      const tmp2Result1 = VIDEO(dependencyMap[21]);
    }
    const MediaViewerAnalytics = VIDEO(dependencyMap[22]).MediaViewerAnalytics;
    result = MediaViewerAnalytics.trackMediaViewerDownloadButtonTapped();
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
  return result.then((result) => {
    if (VIDEO(dependencyMap[20]).MediaType.IMAGE === VIDEO) {
      let tmp2Result = VIDEO(dependencyMap[21]);
      tmp2Result.presentImageSaved();
    } else if (VIDEO(dependencyMap[20]).MediaType.GIF === VIDEO) {
      tmp2Result = VIDEO(dependencyMap[21]);
      tmp2Result.presentGifSaved();
    } else if (VIDEO(dependencyMap[20]).MediaType.VIDEO === VIDEO) {
      VIDEO(dependencyMap[21]).presentVideoSaved();
      const tmp2Result1 = VIDEO(dependencyMap[21]);
    }
    const MediaViewerAnalytics = VIDEO(dependencyMap[22]).MediaViewerAnalytics;
    result = MediaViewerAnalytics.trackMediaViewerDownloadButtonTapped();
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
            obj = { videoId: null, clip: null, clipt: null };
            obj[0] = tmp;
            obj[1] = tmp2;
            obj[2] = tmp3;
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
          obj = { videoId: null };
          obj[0] = match[1];
        }
        obj = { videoId: null, start: null };
        obj[0] = match[1];
        const _Number = Number;
        match = Number(match[3]);
        obj[1] = match;
      }
    }
  }
  return tmp;
};
export const VideoSourceType = obj;
export const getVideoSourceType = function getVideoSourceType(source) {
  if (null != source.videoURI) {
    obj = urlMatchesFileExtension;
    if (obj.isWebPlayerVideoUrl(source.videoURI)) {
      let PORTAL = obj.WEB_FILE_IFRAME;
    }
    return PORTAL;
  }
  if (null != source.portal) {
    if (!obj2.isPortalExpired(source.portal)) {
      PORTAL = obj.PORTAL;
    }
    obj2 = MediaPlayerManager;
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
    result = urlMatchesFileExtension.urlMatchesFileExtension(sourceURI.sourceURI, closure_7);
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
    result = urlMatchesFileExtension.urlMatchesFileExtension(sourceURI.sourceURI, closure_8);
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
  return urlMatchesFileExtension.urlMatchesFileExtension(sourceURI.sourceURI, keys.GIF_RE_IOS);
};
export const isAnimatedImageSource = function isAnimatedImageSource(source) {
  let result = urlMatchesFileExtension.urlMatchesFileExtension(source.sourceURI, keys.GIF_RE_IOS);
  if (!result) {
    let result1 = null != source.sourceURI && null != source.uri;
    if (result1) {
      let tmpResult = urlMatchesFileExtension;
      result1 = tmpResult.urlMatchesFileExtension(source.sourceURI, closure_7);
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
      tmpResult = urlMatchesFileExtension;
      result2 = tmpResult.urlMatchesFileExtension(source.sourceURI, closure_8);
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