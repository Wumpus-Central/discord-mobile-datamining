// === Module 16777: SearchMediaImage ===

// Module 16777 (SearchMediaImage)
import ImageWarningIcon from "ImageWarningIcon" /* 5162 */;
import ObscureMediaModels from "ObscureMediaModels" /* 7399 */;
import MediaSourceUtil from "MediaSourceUtil" /* 8383 */;
import CirclePlayIcon from "CirclePlayIcon" /* 10260 */;
import AttachmentPreview from "AttachmentPreview" /* 10324 */;
import generated_SpoilerIcon from "generated/SpoilerIcon" /* 11374 */;
import MessageAttachmentUtils from "MessageAttachmentUtils" /* 12141 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SearchMessageStore from "SearchMessageStore" /* 7384 */;

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
const createStyles = fn(4636);
let closure_14 = createStyles.createStyles({ container: { justifyContent: "center", alignItems: "center" }, sound: { justifyContent: "center", alignItems: "center" } });
let closure_16 = noop.memo((containerWidth) => {
  ({ channelId: require, mediaUrl, mediaHeight, mediaWidth, containerStyle, renderFallback, obscureReason, containerHeight } = containerWidth);
  containerWidth = containerWidth.containerWidth;
  const scale = containerWidth.scale;
  const items = [containerHeight, containerWidth];
  ({ placeholder, placeholderVersion } = containerWidth);
  const memo = noop.useMemo(() => {
    const size = { height: containerHeight, width: containerWidth };
    return size;
  }, items);
  let obj = require("initialize");
  const items1 = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items1, () => ChannelStore.getChannel(require));
  let obj1 = require("computeGlobalSpoilerDisplay");
  const shouldDisplaySpoilerObscurity = obj1.useShouldDisplaySpoilerObscurity(stateFromStores);
  if (obscureReason !== require("ObscureMediaModels").ObscureReason.SPOILER) {
    let tmp6 = obscureReason;
  } else {
    tmp6 = null;
  }
  if (null != mediaUrl) {
    if (null != mediaHeight) {
      if (null != mediaWidth) {
        const result = containerHeight * scale;
        const result1 = containerWidth * scale;
        if (mediaWidth > mediaHeight) {
          const _Math2 = Math;
          const items2 = [Math.round(mediaWidth * (result1 / mediaHeight)), result1];
          let items3 = items2;
        } else {
          items3 = [result, ];
          const _Math = Math;
          items3[1] = Math.round(mediaHeight * (result / mediaWidth));
        }
        [tmp11, tmp12] = _slicedToArray(items3, 2);
        let tmp2Result = require("utils/ImageUtils");
        obj = { src: mediaUrl, sourceWidth: mediaWidth, sourceHeight: mediaHeight, targetWidth: tmp11, targetHeight: tmp12, format: "png" };
        const srcWithWidthAndHeight = tmp2Result.getSrcWithWidthAndHeight(obj);
        tmp2Result = require("MessageAttachmentUtils");
        const obscuredAlt = tmp2Result.getObscuredAlt(tmp6);
        let tmp15 = null;
        if (null != tmp6) {
          let size = { obscureReason: tmp6, height: containerHeight, width: containerWidth };
          tmp15 = closure_11(SearchMediaObscurityIcon, size);
        }
        const tmp10 = _slicedToArray(items3, 2);
        if (tmp2Result1.isAndroid()) {
          if (null != tmp6) {
            obj = { style: containerStyle, children: null };
            obj1 = { style: memo, source: null, blurRadius: 10, resizeMode: "cover", accessibilityLabel: null };
            const obj2 = { uri: srcWithWidthAndHeight };
            obj1.source = obj2;
            obj1.accessibilityLabel = obscuredAlt;
            const items4 = [closure_11(closure_5, obj1), tmp15];
            obj.children = items4;
            return closure_13(closure_7, obj);
          }
        }
        tmp2Result1 = require("PlatformUtils");
        let stringResult = obscuredAlt;
        if (tmp2Result2.isAndroid()) {
          const intl = require("util").intl;
          stringResult = intl.string(require("util").t.jes7FG);
        }
        const obj3 = { style: containerStyle, children: null };
        const obj4 = { style: memo, uri: srcWithWidthAndHeight, placeholder, placeholderVersion, alt: stringResult };
        const items5 = [closure_11(require("ImageWithPlaceholder").ImageWithPlaceholder, obj4), tmp15];
        obj3.children = items5;
        return closure_13(closure_7, obj3);
      }
    }
  }
  let tmp26 = null;
  if (null != renderFallback) {
    const obj5 = { children: renderFallback() };
    tmp26 = closure_11(closure_12, obj5);
  }
  return tmp26;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/list/SearchMediaImage.tsx");

export const SearchAttachmentMediaImage = function SearchAttachmentMediaImage(attachment) {
  attachment = attachment.attachment;
  const channelId = attachment.channelId;
  const merged = Object.assign(attachment, Object.assign({ attachment: 0, channelId: 0, authorId: 0 }));
  dependencyMap = undefined;
  let obj = attachment(10303);
  const enabledHarmTypesBitmaskForChannelAndAuthorId = obj.useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, attachment.authorId);
  let num = attachment.flags;
  if (num == null) {
    num = 0;
  }
  let hasFlagResult = attachment(1384).hasFlag(num, MessageAttachmentFlags.IS_SPOILER);
  if (!hasFlagResult) {
    let tmp2Result = tmp2(7432);
    hasFlagResult = tmp2Result.isChannelSpoilerGated(ChannelStore.getChannel(channelId));
  }
  dependencyMap = hasFlagResult;
  const items = [attachment, enabledHarmTypesBitmaskForChannelAndAuthorId, hasFlagResult];
  const memo = noop.useMemo(() => MessageAttachmentUtils.getObscureReasonForAttachment(attachment, enabledHarmTypesBitmaskForChannelAndAuthorId, c2), items);
  tmp2Result = tmp2(8383);
  obj = {};
  const attachmentUrl = tmp2Result.getAttachmentUrl(attachment);
  const merged1 = Object.assign(merged);
  obj.channelId = channelId;
  obj.obscureReason = memo;
  obj.mediaUrl = attachmentUrl;
  ({ height: obj5.mediaHeight, width: obj5.mediaWidth } = attachment);
  return closure_11(closure_16, obj);
};
export const SearchEmbedMediaImage = function SearchEmbedMediaImage(embed) {
  embed = embed.embed;
  ({ sources: importDefault, messageId: dependencyMap, channelId } = embed);
  const merged = Object.assign(embed, Object.assign({ embed: 0, sources: 0, messageId: 0, channelId: 0, authorId: 0 }));
  let obj = embed(10303);
  closure_3 = obj.useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, embed.authorId);
  closure_4 = embed(7432).useIsChannelSpoilerGated(ChannelStore.getChannel(channelId));
  const obj2 = embed(7432);
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
  const size = embed(8383).getEmbedMedia(embed);
  let embedUrl = null;
  if (null != size) {
    embedUrl = tmp2(8383).getEmbedUrl(size);
    let tmp2Result = tmp2(8383);
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
  obj.channelId = channelId;
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
  let obj = unfurledMediaItem(isBot[21]);
  const enabledHarmTypesBitmaskForChannelAndAuthorId = obj.useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, unfurledMediaItem.authorId);
  const isChannelSpoilerGated = unfurledMediaItem(isBot[23]).useIsChannelSpoilerGated(ChannelStore.getChannel(channelId));
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
  obj.channelId = channelId;
  obj.obscureReason = memo;
  ({ proxyUrl: obj3.mediaUrl, height: obj3.mediaHeight, width: obj3.mediaWidth } = unfurledMediaItem);
  return closure_11(closure_16, obj);
};