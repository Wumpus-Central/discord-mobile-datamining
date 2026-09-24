// discord_app/modules/search/native/components/list/SearchMediaImage.tsx
import ImageWarningIcon from "../../../../../design/components/Icon/native/redesign/generated/ImageWarningIcon.tsx";
import ObscureMediaModels from "../../../../explicit_media_redaction/ObscureMediaModels.tsx";
import MediaSourceUtil from "../../../../media_viewer/native/MediaSourceUtil.tsx";
import CirclePlayIcon from "../../../../../design/components/Icon/native/redesign/generated/CirclePlayIcon.tsx";
import AttachmentPreview from "../../../../media/native/AttachmentPreview.tsx";
import generated_SpoilerIcon from "../../../../../design/components/Icon/native/redesign/generated/SpoilerIcon.tsx";
import MessageAttachmentUtils from "../../../../messages/MessageAttachmentUtils.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import SearchMessageStore from "../../../SearchMessageStore.tsx";

require = fn;
function SearchMediaObscurityIcon(obscureReason) {
  obscureReason = obscureReason.obscureReason;
  const height = obscureReason.height;
  const width = obscureReason.width;
  const tmp = closure_14();
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
  const obj2 = { blurTheme: str, style: null };
  const items2 = [absoluteFill.absoluteFill, memo];
  obj2.style = items2;
  const children = [closure_11(tmp2(tmp3[13]), obj2)];
  let tmp9Result = null != memo1;
  if (tmp9Result) {
    const obj3 = { style: null, children: null };
    const items4 = [absoluteFill.absoluteFill, tmp.container];
    obj3.style = items4;
    obj3.children = memo1;
    tmp9Result = closure_11(closure_7, obj3);
  }
  children[1] = tmp9Result;
  return closure_13(closure_12, { children });
}
get_ActivityIndicator = fn(17);
({ ImageBackground: hasOwnProperty, StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const MessageAttachmentFlags = fn(1074).MessageAttachmentFlags;
const jsxProd = fn(21);
({ jsx: closure_11, Fragment: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4829);
let closure_14 = createStyles.createStyles({
  container: { justifyContent: "center", alignItems: "center" },
  sound: { justifyContent: "center", alignItems: "center" },
});
let closure_16 = noop.memo((containerWidth) => {
  ({
    channelId: require,
    mediaUrl,
    mediaHeight,
    mediaWidth,
    containerStyle,
    renderFallback,
    obscureReason,
    containerHeight,
  } = containerWidth);
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
  const shouldDisplaySpoilerObscurity =
    require("computeGlobalSpoilerDisplay").useShouldDisplaySpoilerObscurity(stateFromStores);
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
          items3 = [result];
          const _Math = Math;
          items3[1] = Math.round(mediaHeight * (result / mediaWidth));
        }
        [tmp11, tmp12] = items3;
        const tmp10 = _slicedToArray(items3, 2);
        const obj3 = {
          src: mediaUrl,
          sourceWidth: mediaWidth,
          sourceHeight: mediaHeight,
          targetWidth: tmp11,
          targetHeight: tmp12,
          format: "png",
        };
        const srcWithWidthAndHeight = require("utils/ImageUtils").getSrcWithWidthAndHeight(obj3);
        const tmp2Result = require("utils/ImageUtils");
        const obscuredAlt = require("MessageAttachmentUtils").getObscuredAlt(tmp6);
        let tmp15 = null;
        if (null != tmp6) {
          let size = { obscureReason: tmp6, height: containerHeight, width: containerWidth };
          tmp15 = closure_11(SearchMediaObscurityIcon, size);
        }
        const tmp2Result4 = require("MessageAttachmentUtils");
        if (tmp2Result5.isAndroid()) {
          if (null != tmp6) {
            const obj4 = { style: containerStyle, children: null };
            const obj5 = { style: memo, source: null, blurRadius: 10, resizeMode: "cover", accessibilityLabel: null };
            const obj6 = { uri: srcWithWidthAndHeight };
            obj5.source = obj6;
            obj5.accessibilityLabel = obscuredAlt;
            const items4 = [closure_11(closure_5, obj5), tmp15];
            obj4.children = items4;
            return closure_13(closure_7, obj4);
          }
        }
        tmp2Result5 = require("PlatformUtils");
        let stringResult = obscuredAlt;
        if (tmp2Result6.isAndroid()) {
          const intl = require("util").intl;
          stringResult = intl.string(require("util").t.jes7FG);
        }
        const obj7 = { style: containerStyle, children: null };
        const obj8 = { style: memo, uri: srcWithWidthAndHeight, placeholder, placeholderVersion, alt: stringResult };
        const items5 = [closure_11(require("ImageWithPlaceholder").ImageWithPlaceholder, obj8), tmp15];
        obj7.children = items5;
        return closure_13(closure_7, obj7);
      }
    }
  }
  let tmp26 = null;
  if (null != renderFallback) {
    const obj9 = { children: renderFallback() };
    tmp26 = closure_11(closure_12, obj9);
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
  const enabledHarmTypesBitmaskForChannelAndAuthorId = attachment(
    10522,
  ).useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, attachment.authorId);
  const obj = attachment(10522);
  let num = attachment.flags;
  if (num == null) {
    num = 0;
  }
  let hasFlagResult = attachment(1385).hasFlag(num, MessageAttachmentFlags.IS_SPOILER);
  if (!hasFlagResult) {
    hasFlagResult = tmp2(7659).isChannelSpoilerGated(ChannelStore.getChannel(channelId));
    const tmp2Result = tmp2(7659);
  }
  dependencyMap = hasFlagResult;
  const items = [attachment, enabledHarmTypesBitmaskForChannelAndAuthorId, hasFlagResult];
  const memo = noop.useMemo(
    () =>
      MessageAttachmentUtils.getObscureReasonForAttachment(
        attachment,
        enabledHarmTypesBitmaskForChannelAndAuthorId,
        c2,
      ),
    items,
  );
  const obj2 = attachment(1385);
  const obj3 = {};
  const attachmentUrl = attachment(8615).getAttachmentUrl(attachment);
  const merged1 = Object.assign(merged);
  obj3.channelId = channelId;
  obj3.obscureReason = memo;
  obj3.mediaUrl = attachmentUrl;
  ({ height: obj5.mediaHeight, width: obj5.mediaWidth } = attachment);
  return closure_11(closure_16, obj3);
};
export const SearchEmbedMediaImage = function SearchEmbedMediaImage(embed) {
  embed = embed.embed;
  ({ sources: importDefault, messageId: dependencyMap, channelId } = embed);
  const merged = Object.assign(embed, Object.assign({ embed: 0, sources: 0, messageId: 0, channelId: 0, authorId: 0 }));
  closure_3 = embed(10522).useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, embed.authorId);
  const obj = embed(10522);
  const tmp2 = embed;
  closure_4 = embed(7659).useIsChannelSpoilerGated(ChannelStore.getChannel(channelId));
  const obj2 = embed(7659);
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
  const size = embed(8615).getEmbedMedia(embed);
  let embedUrl = null;
  if (null != size) {
    embedUrl = tmp2(8615).getEmbedUrl(size);
    let tmp2Result = tmp2(8615);
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
  const obj5 = {};
  const merged1 = Object.assign(merged);
  obj5.channelId = channelId;
  obj5.obscureReason = stateFromStores;
  obj5.mediaUrl = embedUrl;
  obj5.mediaHeight = height;
  obj5.mediaWidth = width;
  return closure_11(closure_16, obj5);
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
    }, items),
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
    }, items),
  ];
  obj.style = items1;
  obj.children = closure_1_11(AttachmentPreview.AttachmentIcon, { fileName });
  return closure_1_11(React5, obj);
};
export const SearchComponentMediaImage = function SearchComponentMediaImage(unfurledMediaItem) {
  unfurledMediaItem = unfurledMediaItem.unfurledMediaItem;
  const sources = unfurledMediaItem.sources;
  ({ channelId, isBot } = unfurledMediaItem);
  const merged = Object.assign(
    unfurledMediaItem,
    Object.assign({ unfurledMediaItem: 0, sources: 0, channelId: 0, authorId: 0, isBot: 0 }),
  );
  const enabledHarmTypesBitmaskForChannelAndAuthorId = unfurledMediaItem(
    isBot[21],
  ).useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, unfurledMediaItem.authorId);
  let obj = unfurledMediaItem(isBot[21]);
  const isChannelSpoilerGated = unfurledMediaItem(isBot[23]).useIsChannelSpoilerGated(
    ChannelStore.getChannel(channelId),
  );
  const items = [
    unfurledMediaItem,
    enabledHarmTypesBitmaskForChannelAndAuthorId,
    sources,
    isBot,
    isChannelSpoilerGated,
  ];
  const obj4 = {};
  const memo = isChannelSpoilerGated.useMemo(() => {
    const obj = MessageAttachmentUtils;
    const flattenSourceResult = MediaSourceUtil.flattenSource(sources);
    let spoiler;
    if (flattenSourceResult != null) {
      spoiler = flattenSourceResult.spoiler;
    }
    return obj.getObscureReasonForUnfurledMediaItem(
      unfurledMediaItem,
      enabledHarmTypesBitmaskForChannelAndAuthorId,
      spoiler || isChannelSpoilerGated,
      isBot,
    );
  }, items);
  const merged1 = Object.assign(merged);
  obj4.channelId = channelId;
  obj4.obscureReason = memo;
  ({ proxyUrl: obj3.mediaUrl, height: obj3.mediaHeight, width: obj3.mediaWidth } = unfurledMediaItem);
  return closure_11(closure_16, obj4);
};
