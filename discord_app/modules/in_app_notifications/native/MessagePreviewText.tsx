// === Module 10362: MessagePreviewText ===

// Module 10362 (MessagePreviewText)
import nativeDefault from "native" /* 576 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 1096 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4752 */;
import useMessageAuthor from "useMessageAuthor" /* 4988 */;
import FastImageDefault from "FastImage" /* 5799 */;
import isForwardMessageDefault from "isForwardMessage" /* 7542 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 8122 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 10350 */;
import useTruncatedGradientColorsDefault from "useTruncatedGradientColors" /* 10363 */;
import ChannelRowPreview from "ChannelRowPreview" /* 10364 */;
import usePreviewableMedia from "usePreviewableMedia" /* 10386 */;
import usePreviewableMediaText from "usePreviewableMediaText" /* 10391 */;
import useGetInitialMessagePreview from "useGetInitialMessagePreview" /* 10392 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2041 */;

require = fn;
function NativeMessagePreviewContent(arg0) {
  ({ message, lineClamp, maxHeight } = arg0);
  const tmp = useTruncatedGradientColorsDefault();
  ({ gradientColors, gradientStyles } = tmp);
  return React6(View, { children: React6(ChannelRowPreview.NativeChannelRowPreview, { message, lineClamp, maxHeight, gradientStyles, gradientColors }) });
}
class SystemMessageText {
  constructor(arg0) {
    tmp = closure_10();
    obj = closure_0(closure_2[11]);
    messagePreviewTextVariant = obj.getMessagePreviewTextVariant();
    obj1 = { variant: messagePreviewTextVariant, color: "text-subtle", style: tmp.italic, lineClamp: closure_7, children: global.text };
    return jsx(closure_0(closure_2[12]).Text, obj1);
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
  const obj = { style: null, children: React6(FastImageDefault, { source: { uri: url }, style: tmp.embedMedia, resizeMode: "contain" }) };
  const items = [tmp.embedMediaContainer, { aspectRatio: num }];
  obj.style = items;
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
  const obj = { style: tmp.embedContainer, children: null };
  let tmp7 = null != color;
  if (tmp7) {
    const obj2 = { style: null };
    const items = [tmp.embedAccentBar, ];
    const obj3 = { backgroundColor: color };
    items[1] = obj3;
    obj2.style = items;
    tmp7 = React6(View, obj2);
  }
  const items1 = [tmp7, , ];
  const obj4 = { style: tmp.embedTextContainer, children: null };
  let tmp9 = null != name;
  if (tmp9) {
    const obj5 = { variant: "text-xxs/normal", color: "text-subtle", lineClamp: 1, children: name };
    tmp9 = React6(Text_Text.Text, obj5);
  }
  const items2 = [tmp9, , , ];
  let tmp13 = null != name1;
  if (tmp13) {
    const obj6 = { variant: "text-xs/medium", color: "text-default", lineClamp: 1, children: name1 };
    tmp13 = React6(Text_Text.Text, obj6);
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
    const obj7 = { variant: "text-xs/medium", color: "text-link", lineClamp: num2, children: rawTitle };
    tmp18Result = React6(Text_Text.Text, obj7);
  }
  items2[2] = tmp18Result;
  let tmp21 = null != embed.rawDescription;
  if (tmp21) {
    const obj8 = { variant: "text-xs/medium", color: "text-default", lineClamp: 3, children: embed.rawDescription };
    tmp21 = React6(Text_Text.Text, obj8);
  }
  items2[3] = tmp21;
  obj4.children = items2;
  items1[1] = React7(View, obj4);
  let tmp25 = null != thumbnail;
  if (tmp25) {
    const obj9 = { media: thumbnail };
    tmp25 = React6(EmbedMediaThumbnail, obj9);
  }
  items1[2] = tmp25;
  obj.children = items1;
  return React7(View, obj);
}
const View = fn(17).View;
const InAppNotificationConstants = fn(10351);
({ IN_APP_NOTIFICATION_MAX_HEIGHT: metroRequire, NOTIFICATION_PREVIEW_LINE_CLAMP: closure_7 } = InAppNotificationConstants);
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let createStyles = fn(4756);
const PlatformUtils = fn(1365);
let obj3 = { italic: { fontStyle: "italic", fontFamily: PlatformUtils.isIOS() ? Fonts.PRIMARY_NORMAL_ITALIC : Fonts.PRIMARY_MEDIUM_ITALIC } };
let closure_10 = createStyles.createStyles(obj3);
createStyles = fn(4756);
let obj6 = { embedContainer: null, embedAccentBar: null, embedTextContainer: null, embedMediaContainer: null, embedMedia: null };
let obj4 = { fontStyle: "italic", fontFamily: PlatformUtils.isIOS() ? Fonts.PRIMARY_NORMAL_ITALIC : Fonts.PRIMARY_MEDIUM_ITALIC };
obj6.embedContainer = { borderRadius: nativeDefault.radii.sm, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, flexDirection: "row", overflow: "hidden" };
let obj7 = { borderRadius: nativeDefault.radii.sm, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, flexDirection: "row", overflow: "hidden" };
obj6.embedAccentBar = { width: 4, marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_8, alignSelf: "stretch" };
let obj8 = { width: 4, marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_8, alignSelf: "stretch" };
obj6.embedTextContainer = { flex: 1, gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8 };
let size = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", height: 60, width: "WireType" };
obj6.embedMediaContainer = size;
obj6.embedMedia = { width: "100%", height: "100%" };
let closure_11 = createStyles.createStyles(obj6);
size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_notifications/native/MessagePreviewText.tsx");

export default function MessagePreviewText(message) {
  message = message.message;
  ({ lineClamp, maxHeight, showMessageAuthor } = message);
  if (showMessageAuthor === undefined) {
    showMessageAuthor = false;
  }
  const previewableMedia = usePreviewableMedia.usePreviewableMedia(message);
  let tmp3 = null;
  if (showMessageAuthor) {
    tmp3 = message;
  }
  const nullableMessageAuthor = useMessageAuthor.useNullableMessageAuthor(tmp3);
  const previewableMediaText = usePreviewableMediaText.usePreviewableMediaText({ previewableMedia, author: nullableMessageAuthor });
  ({ text, secondaryText } = previewableMediaText);
  const tmpResult = usePreviewableMediaText;
  const getInitialMessagePreview = useGetInitialMessagePreview.useGetInitialMessagePreview({ message });
  const items = [message.embeds];
  const memo = noop.useMemo(() => {
    const embeds = message.embeds;
    return embeds.filter((image) => null != image.image || null != image.thumbnail);
  }, items);
  if (memo.length > 0) {
    const first = memo[0];
    if (first.type === MessageEmbedTypes.MessageEmbedTypes.GIFV) {
      if (null != text) {
        const obj3 = { text };
        let tmp43 = React6(SystemMessageText, obj3);
      }
      return tmp43;
    }
    const obj4 = { children: null };
    const obj5 = { message: getInitialMessagePreview, lineClamp, maxHeight };
    const items1 = [React6(NativeMessagePreviewContent, obj5), ];
    const obj6 = { embed: first };
    items1[1] = React6(EmbedCard, obj6);
    obj4.children = items1;
    tmp43 = React7(View, obj4);
  } else if (isForwardMessageDefault(message)) {
    let tmp29 = previewableMedia.length > 0;
    if (tmp29) {
      tmp29 = previewableMedia[0].type === usePreviewableMedia.PreviewableMediaTypes.GIF;
    }
    if (previewableMedia.length > 0) {
      if (null != nullableMessageAuthor) {
        const intl4 = util.intl;
        const obj7 = { username: nullableMessageAuthor.nick };
        let formatResult = intl4.format(util.t.sLDHDi, obj7);
      } else {
        const intl3 = util.intl;
        formatResult = intl3.string(util.t["9ddYKt"]);
      }
      const obj8 = { text: formatResult };
      return React6(SystemMessageText, obj8);
    }
    const obj9 = { message: getInitialMessagePreview, lineClamp, maxHeight };
    return React6(NativeMessagePreviewContent, obj9);
  } else if (message.content.length > 0) {
    if (null != nullableMessageAuthor) {
      const channel = ChannelStore.getChannel(message.channel_id);
      InAppNotificationUtils;
      if (null != channel) {
        const obj10 = { channel, message, color: "text-default", layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY, variant: tmp24, muted: false, lineClamp };
        return React6(ChannelRowPreview.ChannelRowPreview, obj10);
      }
    }
    const obj11 = { message: getInitialMessagePreview, lineClamp, maxHeight };
    return React6(NativeMessagePreviewContent, obj11);
  } else {
    if (previewableMedia.length > 0) {
      if (null !== text) {
        const obj12 = { text };
        const items2 = [React6(SystemMessageText, obj12), ];
        let tmp17Result = null !== secondaryText;
        if (tmp17Result) {
          const obj13 = { variant: "redesign/message-preview/medium", color: "text-link", lineClamp, children: secondaryText };
          tmp17Result = React6(Text_Text.Text, obj13);
        }
        const obj14 = { children: null };
        items2[1] = tmp17Result;
        obj14.children = items2;
        return React7(View, obj14);
      }
    }
    if (null != message.poll) {
      if (null != nullableMessageAuthor) {
        const intl2 = util.intl;
        const obj15 = { username: nullableMessageAuthor.nick };
        let formatResult1 = intl2.format(util.t["1wtRlq"], obj15);
      } else {
        const intl = util.intl;
        formatResult1 = intl.string(util.t.n3shVJ);
      }
      const obj16 = { children: null };
      const obj17 = { text: formatResult1 };
      const items3 = [React6(SystemMessageText, obj17), ];
      const obj18 = { variant: "redesign/message-preview/medium", color: "text-default", lineClamp, children: message.poll.question.text };
      items3[1] = React6(Text_Text.Text, obj18);
      obj16.children = items3;
      return React7(View, obj16);
    } else {
      const obj19 = { message, lineClamp, maxHeight };
      return React6(NativeMessagePreviewContent, obj19);
    }
  }
  const tmpResult3 = useGetInitialMessagePreview;
};
export { SystemMessageText };