// === Module 18685: SearchMediaImage ===

// Module 18685 (SearchMediaImage)
import ObscureMediaModels from "ObscureMediaModels" /* 7462 */;
import ImageWarningIcon from "ImageWarningIcon" /* 8645 */;
import MediaSourceUtil from "MediaSourceUtil" /* 8831 */;
import CirclePlayIcon from "CirclePlayIcon" /* 9362 */;
import AttachmentPreview from "AttachmentPreview" /* 11092 */;
import MessageAttachmentUtils from "MessageAttachmentUtils" /* 13725 */;
import generated_SpoilerIcon from "generated/SpoilerIcon" /* 14473 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import SearchMessageStore from "SearchMessageStore" /* 6857 */;

require = fn;
function SearchMediaObscurityIcon(obscureReason) {
  obscureReason = obscureReason.obscureReason;
  const height = obscureReason.height;
  const width = obscureReason.width;
  const tmp = closure_13();
  const tmp2 = height;
  const tmp3 = width;
  const tmp4 = height(width[8])();
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
      return closure_2_10(generated_SpoilerIcon.SpoilerIcon, { size: "lg" });
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
      return closure_2_10(ImageWarningIcon.ImageWarningIcon, { size: "lg" });
    }
  }, items1);
  const obj2 = { blurTheme: str, style: null };
  const items2 = [closure_5.absoluteFill, memo];
  obj2.style = items2;
  const children = [closure_10(tmp2(tmp3[13]), obj2), ];
  let tmp9Result = null != memo1;
  if (tmp9Result) {
    const obj3 = { style: null, children: null };
    const items4 = [closure_5.absoluteFill, tmp.container];
    obj3.style = items4;
    obj3.children = memo1;
    tmp9Result = closure_10(closure_6, obj3);
  }
  children[1] = tmp9Result;
  return closure_12(closure_11, { children });
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const MessageAttachmentFlags = fn(1072).MessageAttachmentFlags;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5009);
let closure_13 = createStyles.createStyles({ container: { justifyContent: "center", alignItems: "center" }, sound: { justifyContent: "center", alignItems: "center" } });
let closure_15 = noop.memo(function SearchMediaImage(containerWidth) {
  ({ channelId: require, mediaUrl, mediaHeight, mediaWidth, containerStyle, renderFallback, obscureReason, containerHeight } = containerWidth);
  containerWidth = containerWidth.containerWidth;
  const scale = containerWidth.scale;
  const items = [containerHeight, containerWidth];
  ({ placeholder, placeholderVersion } = containerWidth);
  const memo = noop.useMemo(() => {
    const size = { height: containerHeight, width: containerWidth };
    return size;
  }, items);
  const items1 = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => ChannelStore.getChannel(require));
  const obj = require("initialize");
  const shouldDisplaySpoilerObscurity = require("computeGlobalSpoilerDisplay").useShouldDisplaySpoilerObscurity(stateFromStores);
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
        [tmp11, tmp12] = items3;
        const tmp10 = _slicedToArray(items3, 2);
        const obj3 = { src: mediaUrl, sourceWidth: mediaWidth, sourceHeight: mediaHeight, targetWidth: tmp11, targetHeight: tmp12, format: "png" };
        const srcWithWidthAndHeight = require("utils/ImageUtils").getSrcWithWidthAndHeight(obj3);
        const tmp2Result = require("utils/ImageUtils");
        const obscuredAlt = require("MessageAttachmentUtils").getObscuredAlt(tmp6);
        let tmp15 = null;
        if (null != tmp6) {
          let size = { obscureReason: tmp6, height: containerHeight, width: containerWidth };
          tmp15 = closure_10(SearchMediaObscurityIcon, size);
        }
        const tmp2Result4 = require("MessageAttachmentUtils");
        if (tmp2Result5.isAndroid()) {
          if (null != tmp6) {
            const obj4 = { style: containerStyle, children: null };
            const obj5 = { style: memo, children: null };
            const obj6 = { style: null, source: null, blurRadius: 10, resizeMode: "cover", accessibilityLabel: null };
            const items4 = [closure_5.absoluteFill, memo];
            obj6.style = items4;
            const obj7 = { uri: srcWithWidthAndHeight };
            obj6.source = obj7;
            obj6.accessibilityLabel = obscuredAlt;
            obj5.children = closure_10(containerHeight(tmp3[19]), obj6);
            const items5 = [closure_10(closure_6, obj5), tmp15];
            obj4.children = items5;
            return closure_12(closure_6, obj4);
          }
        }
        tmp2Result5 = require("PlatformUtils");
        let stringResult = obscuredAlt;
        if (tmp2Result6.isAndroid()) {
          const intl = require("util").intl;
          stringResult = intl.string(require("util").t.jes7FG);
        }
        const obj8 = { style: containerStyle, children: null };
        const obj9 = { style: memo, uri: srcWithWidthAndHeight, placeholder, placeholderVersion, alt: stringResult };
        const items6 = [closure_10(require("ImageWithPlaceholder").ImageWithPlaceholder, obj9), tmp15];
        obj8.children = items6;
        return closure_12(closure_6, obj8);
      }
    }
  }
  let tmp27 = null;
  if (null != renderFallback) {
    const obj10 = { children: renderFallback() };
    tmp27 = closure_10(closure_11, obj10);
  }
  return tmp27;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/list/SearchMediaImage.tsx");

export function SearchAttachmentMediaImage(attachment) {
  attachment = attachment.attachment;
  const channelId = attachment.channelId;
  const merged = Object.assign(attachment, Object.assign({ attachment: 0, channelId: 0, authorId: 0 }));
  dependencyMap = undefined;
  const enabledHarmTypesBitmaskForChannelAndAuthorId = attachment(11062).useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, attachment.authorId);
  const obj = attachment(11062);
  let num = attachment.flags;
  if (num == null) {
    num = 0;
  }
  let hasFlagResult = attachment(1397).hasFlag(num, MessageAttachmentFlags.IS_SPOILER);
  if (!hasFlagResult) {
    hasFlagResult = tmp2(6747).isChannelSpoilerGated(ChannelStore.getChannel(channelId));
    const tmp2Result = tmp2(6747);
  }
  dependencyMap = hasFlagResult;
  const items = [attachment, enabledHarmTypesBitmaskForChannelAndAuthorId, hasFlagResult];
  const memo = noop.useMemo(() => MessageAttachmentUtils.getObscureReasonForAttachment(attachment, enabledHarmTypesBitmaskForChannelAndAuthorId, c2), items);
  const obj2 = attachment(1397);
  const obj3 = {};
  const attachmentUrl = attachment(8831).getAttachmentUrl(attachment);
  const merged1 = Object.assign(merged);
  obj3.channelId = channelId;
  obj3.obscureReason = memo;
  obj3.mediaUrl = attachmentUrl;
  ({ height: obj5.mediaHeight, width: obj5.mediaWidth } = attachment);
  return closure_10(closure_15, obj3);
}
export function SearchEmbedMediaImage(embed) {
  embed = embed.embed;
  ({ sources: importDefault, messageId: dependencyMap, channelId } = embed);
  const merged = Object.assign(embed, Object.assign({ embed: 0, sources: 0, messageId: 0, channelId: 0, authorId: 0 }));
  closure_3 = embed(11062).useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, embed.authorId);
  const obj = embed(11062);
  const tmp2 = embed;
  closure_4 = embed(6747).useIsChannelSpoilerGated(ChannelStore.getChannel(channelId));
  const obj2 = embed(6747);
  const items = [SearchMessageStore];
  let video = embed.thumbnail;
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
  if (video == null) {
    video = embed.image;
  }
  if (video == null) {
    video = embed.video;
  }
  let embedUrl = null;
  if (null != video) {
    ({ proxyURL: obj5.proxyURL, url: obj5.url } = video);
    embedUrl = tmp2(8831).getEmbedUrl({ proxyURL: null, url: null });
    const obj4 = { proxyURL: null, url: null };
    let tmp2Result = tmp2(8831);
  }
  let height;
  if (video != null) {
    height = video.height;
  }
  let width;
  if (video != null) {
    width = video.width;
  }
  const obj6 = {};
  const merged1 = Object.assign(merged);
  obj6.channelId = channelId;
  obj6.obscureReason = stateFromStores;
  obj6.mediaUrl = embedUrl;
  obj6.mediaHeight = height;
  obj6.mediaWidth = width;
  return closure_10(closure_15, obj6);
}
export function SearchSoundMediaImage(height) {
  height = height.height;
  const width = height.width;
  const items = [height, width];
  const obj = { style: null, children: null };
  const items1 = [
    closure_13().sound,
    height.containerStyle,
    noop.useMemo(() => {
      const size = { height, width };
      return size;
    }, items)
  ];
  obj.style = items1;
  obj.children = closure_1_10(CirclePlayIcon.CirclePlayIcon, { size: "lg", color: "interactive-text-default" });
  return closure_1_10(timestampProducer, obj);
}
export function SearchFileMediaImage(height) {
  height = height.height;
  const width = height.width;
  ({ fileName, containerStyle } = height);
  const items = [height, width];
  const obj = { style: null, children: null };
  const items1 = [
    closure_13().sound,
    containerStyle,
    noop.useMemo(() => {
      const size = { height, width };
      return size;
    }, items)
  ];
  obj.style = items1;
  obj.children = closure_1_10(AttachmentPreview.AttachmentIcon, { fileName });
  return closure_1_10(timestampProducer, obj);
}
export function SearchComponentMediaImage(unfurledMediaItem) {
  unfurledMediaItem = unfurledMediaItem.unfurledMediaItem;
  const sources = unfurledMediaItem.sources;
  ({ channelId, isBot } = unfurledMediaItem);
  const merged = Object.assign(unfurledMediaItem, Object.assign({ unfurledMediaItem: 0, sources: 0, channelId: 0, authorId: 0, isBot: 0 }));
  const enabledHarmTypesBitmaskForChannelAndAuthorId = unfurledMediaItem(isBot[22]).useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, unfurledMediaItem.authorId);
  let obj = unfurledMediaItem(isBot[22]);
  const isChannelSpoilerGated = unfurledMediaItem(isBot[24]).useIsChannelSpoilerGated(ChannelStore.getChannel(channelId));
  const items = [unfurledMediaItem, enabledHarmTypesBitmaskForChannelAndAuthorId, sources, isBot, isChannelSpoilerGated];
  const obj4 = {};
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
  obj4.channelId = channelId;
  obj4.obscureReason = memo;
  ({ proxyUrl: obj3.mediaUrl, height: obj3.mediaHeight, width: obj3.mediaWidth } = unfurledMediaItem);
  return closure_10(closure_15, obj4);
}