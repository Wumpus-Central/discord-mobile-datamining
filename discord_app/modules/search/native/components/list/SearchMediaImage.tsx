// === Module 16214: SearchMediaObscurityIcon ===

// Module 16214 (SearchMediaObscurityIcon)
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "ensureGuildLoaded" /* 1387 */;
import closure_9 from "handleReaction" /* 6096 */;
import { MessageAttachmentFlags } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
function SearchMediaObscurityIcon(obscureReason) {
  obscureReason = obscureReason.obscureReason;
  const height = obscureReason.height;
  const width = obscureReason.width;
  const tmp = callback4();
  const tmp2 = height;
  const tmp3 = width;
  let obj = obscureReason(width[9]);
  let str = "light";
  if (obj.isThemeDark(tmp4)) {
    str = "dark";
  }
  const items = [height, width];
  const items1 = [obscureReason];
  const memo = importAllResult.useMemo(() => ({ height, width }), items);
  const memo1 = importAllResult.useMemo(() => {
    if (obscureReason(width[10]).ObscureReason.SPOILER === obscureReason) {
      return closure_1_11(tmp2(tmp3[11]).SpoilerIcon, { size: "lg" });
    } else {
      if (tmp2(tmp3[10]).ObscureReason.EXPLICIT_CONTENT !== tmp) {
        if (tmp2(tmp3[10]).ObscureReason.GORE_CONTENT !== tmp) {
          if (tmp2(tmp3[10]).ObscureReason.SELF_HARM_CONTENT !== tmp) {
            if (tmp2(tmp3[10]).ObscureReason.POTENTIAL_EXPLICIT_CONTENT === tmp) {
              return null;
            }
          }
        }
      }
      return closure_1_11(tmp2(tmp3[12]).ImageWarningIcon, { size: "lg" });
    }
  }, items1);
  const items2 = [absoluteFill.absoluteFill, memo];
  const children = [callback2(tmp2(tmp3[13]), { blurTheme: str, style: items2 }), ];
  let tmp9Result = null != memo1;
  if (tmp9Result) {
    obj = { style: null, children: null };
    const items4 = [absoluteFill.absoluteFill, tmp.container];
    obj[0] = items4;
    obj[1] = memo1;
    tmp9Result = callback2(closure_7, obj);
  }
  children[1] = tmp9Result;
  return closure_13(closure_12, { children });
}
let c4 = importAllResult;
({ ImageBackground: c5, StyleSheet: closure_6, View: error } = get_ActivityIndicator);
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = createCacheKey.createStyles({ container: { justifyContent: "center", alignItems: "center" }, sound: { justifyContent: "center", alignItems: "center" } });
let closure_16 = importAllResult.memo((containerWidth) => {
  ({ mediaUrl, mediaHeight, mediaWidth, containerStyle, renderFallback, obscureReason, containerHeight } = containerWidth);
  containerWidth = containerWidth.containerWidth;
  const scale = containerWidth.scale;
  const items = [containerHeight, containerWidth];
  ({ placeholder, placeholderVersion } = containerWidth);
  const memo = importAllResult.useMemo(() => ({ height: containerHeight, width: containerWidth }), items);
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
        [tmp6, tmp7] = callback(items2, 2);
        let obj = containerHeight(1492);
        obj = { src: null, sourceWidth: null, sourceHeight: null, targetWidth: null, targetHeight: null, format: "png" };
        obj[0] = mediaUrl;
        obj[1] = mediaWidth;
        obj[2] = mediaHeight;
        obj[3] = tmp6;
        obj[4] = tmp7;
        const srcWithWidthAndHeight = obj.getSrcWithWidthAndHeight(obj);
        let obj2 = containerHeight(11551);
        const obscuredAlt = obj2.getObscuredAlt(obscureReason);
        let tmp12 = null;
        if (null != obscureReason) {
          obj = { obscureReason: null, height: null, width: null };
          obj[0] = obscureReason;
          obj[1] = containerHeight;
          obj[2] = containerWidth;
          tmp12 = callback2(SearchMediaObscurityIcon, obj);
        }
        let tmp8Result = tmp8(500);
        if (tmp8Result.isAndroid()) {
          if (null != obscureReason) {
            obj1 = { style: null, children: null };
            obj1[0] = containerStyle;
            obj2 = { style: null, source: null, blurRadius: 10, resizeMode: "cover", accessibilityLabel: null };
            obj2[0] = memo;
            const obj3 = { uri: null };
            obj3[0] = srcWithWidthAndHeight;
            obj2[1] = obj3;
            obj2[4] = obscuredAlt;
            const items3 = [callback2(closure_5, obj2), tmp12];
            obj1[1] = items3;
            return callback3(closure_7, obj1);
          }
        }
        tmp8Result = tmp8(500);
        let stringResult = obscuredAlt;
        if (tmp8Result.isAndroid()) {
          const intl = tmp8(1236).intl;
          stringResult = intl.string(tmp8(1236).t.jes7FG);
        }
        const obj4 = { style: null, children: null };
        obj4[0] = containerStyle;
        const obj5 = { style: null, uri: null, placeholder: null, placeholderVersion: null, alt: null };
        obj5[0] = memo;
        obj5[1] = srcWithWidthAndHeight;
        obj5[2] = placeholder;
        obj5[3] = placeholderVersion;
        obj5[4] = stringResult;
        const items4 = [callback2(containerHeight(8843).ImageWithPlaceholder, obj5), tmp12];
        obj4[1] = items4;
        return callback3(closure_7, obj4);
      }
    }
  }
  let tmp23 = null;
  if (null != renderFallback) {
    const obj6 = { children: null };
    obj6[0] = renderFallback();
    tmp23 = callback2(closure_12, obj6);
  }
  return tmp23;
});
let result = require("set").fileFinishedImporting("modules/search/native/components/list/SearchMediaImage.tsx");

export const SearchAttachmentMediaImage = function SearchAttachmentMediaImage(attachment) {
  attachment = attachment.attachment;
  const channelId = attachment.channelId;
  const merged = Object.assign(attachment, Object.create(null));
  let enabledHarmTypesBitmaskForChannelAndAuthorId;
  dependencyMap = undefined;
  let obj = attachment(10221);
  enabledHarmTypesBitmaskForChannelAndAuthorId = obj.useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, attachment.authorId);
  let num = attachment.flags;
  if (num == null) {
    num = 0;
  }
  let hasFlagResult = attachment(1399).hasFlag(num, MessageAttachmentFlags.IS_SPOILER);
  if (!hasFlagResult) {
    let tmp2Result = tmp2(6142);
    hasFlagResult = tmp2Result.isChannelSpoilerGated(store.getChannel(channelId));
  }
  dependencyMap = hasFlagResult;
  const items = [attachment, enabledHarmTypesBitmaskForChannelAndAuthorId, hasFlagResult];
  const memo = importAllResult.useMemo(() => attachment(_undefined[15]).getObscureReasonForAttachment(attachment, enabledHarmTypesBitmaskForChannelAndAuthorId, _undefined), items);
  tmp2Result = tmp2(8536);
  obj = {};
  const attachmentUrl = tmp2Result.getAttachmentUrl(attachment);
  const merged1 = Object.assign(merged);
  obj.obscureReason = memo;
  obj.mediaUrl = attachmentUrl;
  ({ height: obj5.mediaHeight, width: obj5.mediaWidth } = attachment);
  return callback2(closure_16, obj);
};
export const SearchEmbedMediaImage = function SearchEmbedMediaImage(embed) {
  embed = embed.embed;
  ({ sources: importDefault, messageId: dependencyMap, channelId } = embed);
  const merged = Object.assign(embed, Object.create(null));
  closure_3 = undefined;
  closure_4 = undefined;
  let obj = embed(10221);
  closure_3 = obj.useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, embed.authorId);
  closure_4 = embed(6142).useIsChannelSpoilerGated(store.getChannel(channelId));
  const obj2 = embed(6142);
  const tmp2 = embed;
  const items = [closure_9];
  const thumbnail = embed.thumbnail;
  const stateFromStores = embed(589).useStateFromStores(items, () => {
    const message = closure_1_9.getMessage(closure_2);
    if (null == message) {
      return null;
    } else {
      const flattenSourceResult = embed(closure_1_2[22]).flattenSource(closure_1, false);
      let flag2;
      if (flattenSourceResult != null) {
        flag2 = flattenSourceResult.spoiler;
      }
      if (flag2 == null) {
        flag2 = false;
      }
      const tmp2Result = embed(closure_1_2[15]);
      if (!flag2) {
        flag2 = closure_4;
      }
      return tmp2Result.getObscureReasonForEmbed(embed, message, flag2, closure_3);
    }
  });
  const obj3 = embed(589);
  const size = embed(8536).getEmbedMedia(embed);
  let embedUrl = null;
  if (null != size) {
    embedUrl = tmp2(8536).getEmbedUrl(size);
    let tmp2Result = tmp2(8536);
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
  return callback2(closure_16, obj);
};
export const SearchSoundMediaImage = function SearchSoundMediaImage(height) {
  height = height.height;
  const width = height.width;
  const items = [height, width];
  const obj = { style: null, children: null };
  const items1 = [callback4().sound, height.containerStyle, importAllResult.useMemo(() => ({ height, width }), items)];
  obj[0] = items1;
  obj[1] = callback2(height(10174).CirclePlayIcon, { size: "lg", color: "interactive-text-default" });
  return callback2(closure_7, obj);
};
export const SearchFileMediaImage = function SearchFileMediaImage(height) {
  height = height.height;
  const width = height.width;
  ({ fileName, containerStyle } = height);
  const items = [height, width];
  const obj = { style: null, children: null };
  const items1 = [callback4().sound, containerStyle, importAllResult.useMemo(() => ({ height, width }), items)];
  obj[0] = items1;
  obj[1] = callback2(height(10240).AttachmentIcon, { fileName });
  return callback2(closure_7, obj);
};
export const SearchComponentMediaImage = function SearchComponentMediaImage(unfurledMediaItem) {
  unfurledMediaItem = unfurledMediaItem.unfurledMediaItem;
  const sources = unfurledMediaItem.sources;
  ({ channelId, isBot } = unfurledMediaItem);
  const merged = Object.assign(unfurledMediaItem, Object.create(null));
  let enabledHarmTypesBitmaskForChannelAndAuthorId;
  let isChannelSpoilerGated;
  let obj = unfurledMediaItem(isBot[19]);
  enabledHarmTypesBitmaskForChannelAndAuthorId = obj.useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, unfurledMediaItem.authorId);
  isChannelSpoilerGated = unfurledMediaItem(isBot[21]).useIsChannelSpoilerGated(store.getChannel(channelId));
  const items = [unfurledMediaItem, enabledHarmTypesBitmaskForChannelAndAuthorId, sources, isBot, isChannelSpoilerGated];
  obj = {};
  const memo = isChannelSpoilerGated.useMemo(() => {
    const obj = unfurledMediaItem(isBot[15]);
    const tmp = unfurledMediaItem;
    const tmp2 = enabledHarmTypesBitmaskForChannelAndAuthorId;
    const flattenSourceResult = unfurledMediaItem(isBot[22]).flattenSource(sources);
    let spoiler;
    if (flattenSourceResult != null) {
      spoiler = flattenSourceResult.spoiler;
    }
    return obj.getObscureReasonForUnfurledMediaItem(tmp, tmp2, spoiler || isChannelSpoilerGated, isBot);
  }, items);
  const merged1 = Object.assign(merged);
  obj.obscureReason = memo;
  ({ proxyUrl: obj3.mediaUrl, height: obj3.mediaHeight, width: obj3.mediaWidth } = unfurledMediaItem);
  return callback2(closure_16, obj);
};