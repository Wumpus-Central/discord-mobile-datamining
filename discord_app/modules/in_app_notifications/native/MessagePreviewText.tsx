// discord_app/modules/in_app_notifications/native/MessagePreviewText.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useMessageAuthor from "../../messages/useMessageAuthor.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import isForwardMessageDefault from "../../forwarding/isForwardMessage.tsx";
import InAppNotificationUtils from "InAppNotificationUtils.tsx";
import useTruncatedGradientColorsDefault from "hooks/useTruncatedGradientColors.tsx";
import ChannelRowPreview from "../../main_tabs_v2/native/shared_components/ChannelRowPreview.tsx";
import usePreviewableMedia from "hooks/usePreviewableMedia.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";

require = fn;
function NativeMessagePreviewContent(arg0) {
  ({ message, lineClamp, maxHeight } = arg0);
  const tmp = useTruncatedGradientColorsDefault();
  ({ gradientColors, gradientStyles } = tmp);
  return React6(View, {
    children: React6(ChannelRowPreview.NativeChannelRowPreview, {
      message,
      lineClamp,
      maxHeight,
      gradientStyles,
      gradientColors,
    }),
  });
}
class SystemMessageText {
  constructor(arg0) {
    tmp = closure_10();
    obj = closure_0(closure_2[11]);
    messagePreviewTextVariant = obj.getMessagePreviewTextVariant();
    obj = {
      variant: messagePreviewTextVariant,
      color: "text-subtle",
      style: tmp.italic,
      lineClamp: closure_7,
      children: global.text,
    };
    return jsx(closure_0(closure_2[12]).Text, obj);
  }
}
function EmbedMediaThumbnail(media) {
  media = media.media;
  const tmp = closure_11();
  let url = media.proxyURL;
  if (url == null) {
    url = media.url;
  }
  const result = media.width / media.height;
  let num = 1;
  if (Number.isFinite(result)) {
    num = 1;
    if (result > 0) {
      num = result;
    }
  }
  let obj = { style: null, children: null };
  const items = [tmp.embedMediaContainer, { aspectRatio: num }];
  obj.style = items;
  obj = { source: { uri: url }, style: tmp.embedMedia, resizeMode: "contain" };
  obj.children = React6(FastImageDefault, obj);
  return React6(View, obj);
}
function EmbedCard(embed) {
  embed = embed.embed;
  const tmp = closure_11();
  const provider = embed.provider;
  let name;
  if (provider != null) {
    name = provider.name;
  }
  const author = embed.author;
  let name1;
  if (author != null) {
    name1 = author.name;
  }
  ({ rawTitle, thumbnail } = embed);
  if (thumbnail == null) {
    thumbnail = embed.image;
  }
  let color;
  if (null != embed.color) {
    if ("#ffffff" !== str.toLowerCase()) {
      color = embed.color;
    }
    str = embed.color;
  }
  let obj = { style: tmp.embedContainer, children: null };
  let tmp7 = null != color;
  if (tmp7) {
    obj = { style: null };
    const items = [tmp.embedAccentBar];
    obj = { backgroundColor: color };
    items[1] = obj;
    obj.style = items;
    tmp7 = React6(tmp6, obj);
  }
  const items1 = [tmp7, ,];
  const obj1 = { style: tmp.embedTextContainer, children: null };
  let tmp9 = null != name;
  if (tmp9) {
    const obj2 = { variant: "text-xxs/normal", color: "text-subtle", lineClamp: 1, children: name };
    tmp9 = React6(Text_Text.Text, obj2);
  }
  const items2 = [tmp9, , ,];
  let tmp13 = null != name1;
  if (tmp13) {
    const obj3 = { variant: "text-xs/medium", color: "text-default", lineClamp: 1, children: name1 };
    tmp13 = React6(Text_Text.Text, obj3);
  }
  items2[1] = tmp13;
  let tmp18Result = null != rawTitle;
  if (tmp18Result) {
    let num2 = 1;
    if (null == name) {
      num2 = 1;
      if (null == name1) {
        num2 = 3;
      }
    }
    const obj4 = { variant: "text-xs/medium", color: "text-link", lineClamp: num2, children: rawTitle };
    tmp18Result = React6(Text_Text.Text, obj4);
  }
  items2[2] = tmp18Result;
  let tmp21 = null != embed.rawDescription;
  if (tmp21) {
    const obj5 = { variant: "text-xs/medium", color: "text-default", lineClamp: 3, children: embed.rawDescription };
    tmp21 = React6(Text_Text.Text, obj5);
  }
  items2[3] = tmp21;
  obj1.children = items2;
  items1[1] = React7(View, obj1);
  let tmp25 = null != thumbnail;
  if (tmp25) {
    const obj6 = { media: thumbnail };
    tmp25 = React6(EmbedMediaThumbnail, obj6);
  }
  items1[2] = tmp25;
  obj.children = items1;
  return React7(View, obj);
}
const View = fn(17).View;
const InAppNotificationConstants = fn(10095);
({ IN_APP_NOTIFICATION_MAX_HEIGHT: metroRequire, NOTIFICATION_PREVIEW_LINE_CLAMP: closure_7 } =
  InAppNotificationConstants);
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let PlatformUtils = fn(1116);
let createStyles = { italic: null };
createStyles = {
  fontStyle: "italic",
  fontFamily: PlatformUtils.isIOS() ? Fonts.PRIMARY_NORMAL_ITALIC : Fonts.PRIMARY_MEDIUM_ITALIC,
};
createStyles.italic = createStyles;
let closure_10 = createStyles.createStyles(createStyles);
fn(4560);
PlatformUtils = {
  embedContainer: {
    borderRadius: nativeDefault.radii.sm,
    paddingTop: nativeDefault.space.PX_8,
    paddingBottom: nativeDefault.space.PX_8,
    paddingRight: nativeDefault.space.PX_8,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
    flexDirection: "row",
    overflow: "hidden",
  },
  embedAccentBar: null,
  embedTextContainer: null,
  embedMediaContainer: null,
  embedMedia: null,
};
let obj2 = {
  borderRadius: nativeDefault.radii.sm,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_8,
  paddingRight: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  flexDirection: "row",
  overflow: "hidden",
};
PlatformUtils.embedAccentBar = {
  width: 4,
  marginTop: -nativeDefault.space.PX_8,
  marginBottom: -nativeDefault.space.PX_8,
  alignSelf: "stretch",
};
createStyles = {
  flex: 1,
  gap: nativeDefault.space.PX_4,
  paddingVertical: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_8,
};
PlatformUtils.embedTextContainer = createStyles;
let size = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", height: 60, width: "WireType" };
PlatformUtils.embedMediaContainer = size;
PlatformUtils.embedMedia = { width: "100%", height: "100%" };
let closure_11 = createStyles.createStyles(PlatformUtils);
size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_notifications/native/MessagePreviewText.tsx");

export default function MessagePreviewText(message) {
  message = message.message;
  ({ lineClamp, maxHeight, showMessageAuthor } = message);
  if (showMessageAuthor === undefined) {
    showMessageAuthor = false;
  }
  let obj = usePreviewableMedia;
  const previewableMedia = obj.usePreviewableMedia(message);
  let obj1 = useMessageAuthor;
  let tmp3 = null;
  if (showMessageAuthor) {
    tmp3 = message;
  }
  const nullableMessageAuthor = obj1.useNullableMessageAuthor(tmp3);
  let tmpResult = tmp(10139);
  const previewableMediaText = tmpResult.usePreviewableMediaText({ previewableMedia, author: nullableMessageAuthor });
  ({ text, secondaryText } = previewableMediaText);
  tmpResult = tmp(10140);
  const getInitialMessagePreview = tmpResult.useGetInitialMessagePreview({ message });
  const items = [message.embeds];
  const memo = noop.useMemo(() => {
    const embeds = message.embeds;
    return embeds.filter((image) => null != image.image || null != image.thumbnail);
  }, items);
  if (memo.length > 0) {
    const first = memo[0];
    if (first.type === tmp(1095).MessageEmbedTypes.GIFV) {
      if (null != text) {
        obj = { text };
        let tmp43 = React6(SystemMessageText, obj);
      }
      return tmp43;
    }
    obj = { children: null };
    obj1 = { message: getInitialMessagePreview, lineClamp, maxHeight };
    const items1 = [React6(NativeMessagePreviewContent, obj1)];
    const obj2 = { embed: first };
    items1[1] = React6(EmbedCard, obj2);
    obj.children = items1;
    tmp43 = React7(View, obj);
  } else if (isForwardMessageDefault(message)) {
    let tmp29 = previewableMedia.length > 0;
    if (tmp29) {
      tmp29 = previewableMedia[0].type === tmp(10131).PreviewableMediaTypes.GIF;
    }
    if (previewableMedia.length > 0) {
      if (null != nullableMessageAuthor) {
        const intl4 = tmp(1114).intl;
        const obj3 = { username: nullableMessageAuthor.nick };
        let formatResult = intl4.format(tmp(1114).t.sLDHDi, obj3);
      } else {
        const intl3 = tmp(1114).intl;
        formatResult = intl3.string(tmp(1114).t["9ddYKt"]);
      }
      const obj4 = { text: formatResult };
      return React6(SystemMessageText, obj4);
    }
    const obj5 = { message: getInitialMessagePreview, lineClamp, maxHeight };
    return React6(NativeMessagePreviewContent, obj5);
  } else if (message.content.length > 0) {
    if (null != nullableMessageAuthor) {
      const channel = ChannelStore.getChannel(message.channel_id);
      tmp(10094);
      if (null != channel) {
        const obj6 = {
          channel,
          message,
          color: "text-default",
          layout: tmp(7879).ChannelListLayoutTypes.COZY,
          variant: tmp24,
          muted: false,
          lineClamp,
        };
        return React6(tmp(10109).ChannelRowPreview, obj6);
      }
    }
    const obj7 = { message: getInitialMessagePreview, lineClamp, maxHeight };
    return React6(NativeMessagePreviewContent, obj7);
  } else {
    if (previewableMedia.length > 0) {
      if (null !== text) {
        const obj8 = { text };
        const items2 = [React6(SystemMessageText, obj8)];
        let tmp17Result = null !== secondaryText;
        if (tmp17Result) {
          const obj9 = {
            variant: "redesign/message-preview/medium",
            color: "text-link",
            lineClamp,
            children: secondaryText,
          };
          tmp17Result = React6(tmp(4556).Text, obj9);
        }
        const obj10 = { children: null };
        items2[1] = tmp17Result;
        obj10.children = items2;
        return React7(View, obj10);
      }
    }
    if (null != message.poll) {
      if (null != nullableMessageAuthor) {
        const intl2 = tmp(1114).intl;
        const obj11 = { username: nullableMessageAuthor.nick };
        let formatResult1 = intl2.format(tmp(1114).t["1wtRlq"], obj11);
      } else {
        const intl = tmp(1114).intl;
        formatResult1 = intl.string(tmp(1114).t.n3shVJ);
      }
      const obj12 = { children: null };
      const obj13 = { text: formatResult1 };
      const items3 = [React6(SystemMessageText, obj13)];
      const obj14 = {
        variant: "redesign/message-preview/medium",
        color: "text-default",
        lineClamp,
        children: message.poll.question.text,
      };
      items3[1] = React6(tmp(4556).Text, obj14);
      obj12.children = items3;
      return React7(View, obj12);
    } else {
      const obj15 = { message, lineClamp, maxHeight };
      return React6(NativeMessagePreviewContent, obj15);
    }
  }
}
export { SystemMessageText };
