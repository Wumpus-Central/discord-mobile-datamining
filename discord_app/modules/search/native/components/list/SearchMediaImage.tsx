// === Module 16665: SearchMediaImage ===

// Module 16665 (SearchMediaImage)
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import utils_ImageUtils from "utils/ImageUtils" /* 1476 */;
import ImageWarningIcon from "ImageWarningIcon" /* 5081 */;
import ObscureMediaModels from "ObscureMediaModels" /* 7296 */;
import MediaSourceUtil from "MediaSourceUtil" /* 8263 */;
import ImageWithPlaceholder from "ImageWithPlaceholder" /* 8755 */;
import CirclePlayIcon from "CirclePlayIcon" /* 10132 */;
import AttachmentPreview from "AttachmentPreview" /* 10196 */;
import generated_SpoilerIcon from "generated/SpoilerIcon" /* 11241 */;
import MessageAttachmentUtils from "MessageAttachmentUtils" /* 12012 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SearchMessageStore from "SearchMessageStore" /* 7281 */;

require = fn;
function SearchMediaObscurityIcon(obscureReason) {
  obscureReason = obscureReason.obscureReason;
  const height = obscureReason.height;
  const width = obscureReason.width;
  const tmp = closure_14();
  const tmp2 = height;
  const tmp3 = width;
  let obj = obscureReason(width[9]);
  let str = "light";
  if (obj.isThemeDark(tmp4)) {
    str = "dark";
  }
  const items = [height, width];
  const items1 = [obscureReason];
  const memo = noop.useMemo(() => {
    const size = { height, width };
    return size;
  }, items);
  const memo1 = noop.useMemo(() => {
    if (ObscureMediaModels.ObscureReason.SPOILER === obscureReason) {
      return closure_2_11(generated_SpoilerIcon.SpoilerIcon, { size: "lg" });
    } else {
      if (ObscureMediaModels.ObscureReason.EXPLICIT_CONTENT !== obscureReason) {
        if (ObscureMediaModels.ObscureReason.GORE_CONTENT !== obscureReason) {
          if (ObscureMediaModels.ObscureReason.SELF_HARM_CONTENT !== obscureReason) {
            if (ObscureMediaModels.ObscureReason.POTENTIAL_EXPLICIT_CONTENT === obscureReason) {
              return null;
            }
          }
        }
      }
      return closure_2_11(ImageWarningIcon.ImageWarningIcon, { size: "lg" });
    }
  }, items1);
  obj = { blurTheme: str, style: null };
  const items2 = [absoluteFill.absoluteFill, memo];
  obj.style = items2;
  const children = [closure_11(tmp2(tmp3[13]), obj), ];
  let tmp9Result = null != memo1;
  if (tmp9Result) {
    obj = { style: null, children: null };
    const items4 = [absoluteFill.absoluteFill, tmp.container];
    obj.style = items4;
    obj.children = memo1;
    tmp9Result = closure_11(closure_7, obj);
  }
  children[1] = tmp9Result;
  return closure_13(closure_12, { children });
}
get_ActivityIndicator = fn(17);
({ ImageBackground: hasOwnProperty, StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const MessageAttachmentFlags = fn(1074).MessageAttachmentFlags;
const jsxProd = fn(21);
({ jsx: closure_11, Fragment: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4560);
let closure_14 = createStyles.createStyles({ container: { justifyContent: "center", alignItems: "center" }, sound: { justifyContent: "center", alignItems: "center" } });
let closure_16 = noop.memo((containerWidth) => {
  ({ mediaUrl, mediaHeight, mediaWidth, containerStyle, renderFallback, obscureReason, containerHeight } = containerWidth);
  containerWidth = containerWidth.containerWidth;
  const scale = containerWidth.scale;
  const items = [containerHeight, containerWidth];
  ({ placeholder, placeholderVersion } = containerWidth);
  const memo = noop.useMemo(() => {
    const size = { height: containerHeight, width: containerWidth };
    return size;
  }, items);
  if (null != mediaUrl) {
    if (null != mediaHeight) {
      if (null != mediaWidth) {
        const result = containerHeight * scale;
        const result1 = containerWidth * scale;
        if (mediaWidth > mediaHeight) {
          const _Math2 = Math;
          const items1 = [Math.round(mediaWidth * (result1 / mediaHeight)), result1];
          let items2 = items1;
        } else {
          items2 = [result, ];
          const _Math = Math;
          items2[1] = Math.round(mediaHeight * (result / mediaWidth));
        }
        [tmp6, tmp7] = _slicedToArray(items2, 2);
        let obj = { src: mediaUrl, sourceWidth: mediaWidth, sourceHeight: mediaHeight, targetWidth: tmp6, targetHeight: tmp7, format: "png" };
        const srcWithWidthAndHeight = obj.getSrcWithWidthAndHeight(obj);
        let obj2 = MessageAttachmentUtils;
        const obscuredAlt = obj2.getObscuredAlt(obscureReason);
        let tmp12 = null;
        if (null != obscureReason) {
          let size = { obscureReason, height: containerHeight, width: containerWidth };
          tmp12 = closure_1_11(SearchMediaObscurityIcon, size);
        }
        let tmp8Result = PlatformUtils;
        if (tmp8Result.isAndroid()) {
          if (null != obscureReason) {
            obj = { style: containerStyle, children: null };
            const obj1 = { style: memo, source: null, blurRadius: 10, resizeMode: "cover", accessibilityLabel: null };
            obj2 = { uri: srcWithWidthAndHeight };
            obj1.source = obj2;
            obj1.accessibilityLabel = obscuredAlt;
            const items3 = [closure_1_11(hasOwnProperty, obj1), tmp12];
            obj.children = items3;
            return map1(React5, obj);
          }
        }
        tmp8Result = PlatformUtils;
        let stringResult = obscuredAlt;
        if (tmp8Result.isAndroid()) {
          const intl = util.intl;
          stringResult = intl.string(util.t.jes7FG);
        }
        const obj3 = { style: containerStyle, children: null };
        const obj4 = { style: memo, uri: srcWithWidthAndHeight, placeholder, placeholderVersion, alt: stringResult };
        const items4 = [closure_1_11(ImageWithPlaceholder.ImageWithPlaceholder, obj4), tmp12];
        obj3.children = items4;
        return map1(React5, obj3);
      }
    }
  }
  let tmp23 = null;
  if (null != renderFallback) {
    const obj5 = { children: renderFallback() };
    tmp23 = closure_1_11(closure_1_12, obj5);
  }
  return tmp23;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/list/SearchMediaImage.tsx");

export const SearchAttachmentMediaImage = function SearchAttachmentMediaImage(attachment) {
  attachment = attachment.attachment;
  const channelId = attachment.channelId;
  const merged = Object.assign(attachment, Object.assign({ attachment: 0, channelId: 0, authorId: 0 }));
  dependencyMap = undefined;
  let obj = attachment(10175);
  const enabledHarmTypesBitmaskForChannelAndAuthorId = obj.useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, attachment.authorId);
  let num = attachment.flags;
  if (num == null) {
    num = 0;
  }
  let hasFlagResult = attachment(1384).hasFlag(num, MessageAttachmentFlags.IS_SPOILER);
  if (!hasFlagResult) {
    let tmp2Result = tmp2(7329);
    hasFlagResult = tmp2Result.isChannelSpoilerGated(ChannelStore.getChannel(channelId));
  }
  dependencyMap = hasFlagResult;
  const items = [attachment, enabledHarmTypesBitmaskForChannelAndAuthorId, hasFlagResult];
  const memo = noop.useMemo(() => MessageAttachmentUtils.getObscureReasonForAttachment(attachment, enabledHarmTypesBitmaskForChannelAndAuthorId, c2), items);
  tmp2Result = tmp2(8263);
  obj = {};
  const attachmentUrl = tmp2Result.getAttachmentUrl(attachment);
  const merged1 = Object.assign(merged);
  obj.obscureReason = memo;
  obj.mediaUrl = attachmentUrl;
  ({ height: obj5.mediaHeight, width: obj5.mediaWidth } = attachment);
  return closure_11(closure_16, obj);
};
export const SearchEmbedMediaImage = function SearchEmbedMediaImage(embed) {
  embed = embed.embed;
  ({ sources: importDefault, messageId: dependencyMap, channelId } = embed);
  const merged = Object.assign(embed, Object.assign({ embed: 0, sources: 0, messageId: 0, channelId: 0, authorId: 0 }));
  let obj = embed(10175);
  closure_3 = obj.useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, embed.authorId);
  closure_4 = embed(7329).useIsChannelSpoilerGated(ChannelStore.getChannel(channelId));
  const obj2 = embed(7329);
  const tmp2 = embed;
  const items = [SearchMessageStore];
  const thumbnail = embed.thumbnail;
  const stateFromStores = embed(504).useStateFromStores(items, () => {
    const message = SearchMessageStore.getMessage(dependencyMap);
    if (null == message) {
      return null;
    } else {
      const flattenSourceResult = MediaSourceUtil.flattenSource(importDefault, false);
      let flag2;
      if (flattenSourceResult != null) {
        flag2 = flattenSourceResult.spoiler;
      }
      if (flag2 == null) {
        flag2 = false;
      }
      const tmp2Result = MessageAttachmentUtils;
      if (!flag2) {
        flag2 = closure_4;
      }
      return tmp2Result.getObscureReasonForEmbed(embed, message, flag2, closure_3);
    }
  });
  const obj3 = embed(504);
  const size = embed(8263).getEmbedMedia(embed);
  let embedUrl = null;
  if (null != size) {
    embedUrl = tmp2(8263).getEmbedUrl(size);
    let tmp2Result = tmp2(8263);
  }
  if (null != thumbnail) {
    embedUrl = thumbnail.url;
  }
  if (null != thumbnail) {
    let height = thumbnail.height;
  } else if (size != null) {
    height = size.height;
  }
  if (null != thumbnail) {
    let width = thumbnail.width;
  } else if (size != null) {
    width = size.width;
  }
  obj = {};
  const merged1 = Object.assign(merged);
  obj.obscureReason = stateFromStores;
  obj.mediaUrl = embedUrl;
  obj.mediaHeight = height;
  obj.mediaWidth = width;
  return closure_11(closure_16, obj);
};
export const SearchSoundMediaImage = function SearchSoundMediaImage(height) {
  height = height.height;
  const width = height.width;
  const items = [height, width];
  const obj = { style: null, children: null };
  const items1 = [
    closure_14().sound,
    height.containerStyle,
    noop.useMemo(() => {
      const size = { height, width };
      return size;
    }, items)
  ];
  obj.style = items1;
  obj.children = closure_1_11(CirclePlayIcon.CirclePlayIcon, { size: "lg", color: "interactive-text-default" });
  return closure_1_11(React5, obj);
};
export const SearchFileMediaImage = function SearchFileMediaImage(height) {
  height = height.height;
  const width = height.width;
  ({ fileName, containerStyle } = height);
  const items = [height, width];
  const obj = { style: null, children: null };
  const items1 = [
    closure_14().sound,
    containerStyle,
    noop.useMemo(() => {
      const size = { height, width };
      return size;
    }, items)
  ];
  obj.style = items1;
  obj.children = closure_1_11(AttachmentPreview.AttachmentIcon, { fileName });
  return closure_1_11(React5, obj);
};
export const SearchComponentMediaImage = function SearchComponentMediaImage(unfurledMediaItem) {
  unfurledMediaItem = unfurledMediaItem.unfurledMediaItem;
  const sources = unfurledMediaItem.sources;
  ({ channelId, isBot } = unfurledMediaItem);
  const merged = Object.assign(unfurledMediaItem, Object.assign({ unfurledMediaItem: 0, sources: 0, channelId: 0, authorId: 0, isBot: 0 }));
  let obj = unfurledMediaItem(isBot[19]);
  const enabledHarmTypesBitmaskForChannelAndAuthorId = obj.useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, unfurledMediaItem.authorId);
  const isChannelSpoilerGated = unfurledMediaItem(isBot[21]).useIsChannelSpoilerGated(ChannelStore.getChannel(channelId));
  const items = [unfurledMediaItem, enabledHarmTypesBitmaskForChannelAndAuthorId, sources, isBot, isChannelSpoilerGated];
  obj = {};
  const memo = isChannelSpoilerGated.useMemo(() => {
    const obj = MessageAttachmentUtils;
    const flattenSourceResult = MediaSourceUtil.flattenSource(sources);
    let spoiler;
    if (flattenSourceResult != null) {
      spoiler = flattenSourceResult.spoiler;
    }
    return obj.getObscureReasonForUnfurledMediaItem(unfurledMediaItem, enabledHarmTypesBitmaskForChannelAndAuthorId, spoiler || isChannelSpoilerGated, isBot);
  }, items);
  const merged1 = Object.assign(merged);
  obj.obscureReason = memo;
  ({ proxyUrl: obj3.mediaUrl, height: obj3.mediaHeight, width: obj3.mediaWidth } = unfurledMediaItem);
  return closure_11(closure_16, obj);
};