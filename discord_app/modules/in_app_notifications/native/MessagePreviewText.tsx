// discord_app/modules/in_app_notifications/native/MessagePreviewText.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import isForwardMessageDefault from "../../forwarding/isForwardMessage.tsx";
import isReactionMilestoneNotification from "InAppNotificationUtils.tsx";
import useTruncatedGradientColorsDefault from "hooks/useTruncatedGradientColors.tsx";
import PreviewIcon from "../../main_tabs_v2/native/shared_components/ChannelRowPreview.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../stores/ChannelStore.tsx";
import set from "InAppNotificationConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import PlatformTypes from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";

require = arg1;
function NativeMessagePreviewContent(arg0) {
  ({ message, lineClamp, maxHeight } = arg0);
  const tmp = useTruncatedGradientColorsDefault();
  ({ gradientColors, gradientStyles } = tmp);
  return callback(View, { children: callback(PreviewIcon.NativeChannelRowPreview, { message, lineClamp, maxHeight, gradientStyles, gradientColors }) });
}
class SystemMessageText {
  constructor(arg0) {
    tmp = closure_10();
    obj = require("isReactionMilestoneNotification");
    messagePreviewTextVariant = obj.getMessagePreviewTextVariant();
    obj = { variant: messagePreviewTextVariant, color: "text-subtle", style: tmp.italic, lineClamp: closure_7, children: global.text };
    return jsx(require("Text").Text, obj);
  }
}
function EmbedMediaThumbnail(media) {
  media = media.media;
  const tmp = callback4();
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
  obj = { style: items, children: callback(preloadDefault, obj) };
  items = [tmp.embedMediaContainer, { aspectRatio: num }];
  obj = { source: { uri: url }, style: tmp.embedMedia, resizeMode: "contain" };
  return callback(View, obj);
}
function EmbedCard(embed) {
  embed = embed.embed;
  const tmp = callback4();
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
    const items = [tmp.embedAccentBar, ];
    obj = { backgroundColor: null };
    obj[0] = color;
    items[1] = obj;
    obj[0] = items;
    tmp7 = callback(tmp6, obj);
  }
  const items1 = [tmp7, , ];
  obj1 = { style: tmp.embedTextContainer, children: null };
  let tmp9 = null != name;
  if (tmp9) {
    const obj2 = { variant: "text-xxs/normal", color: "text-subtle", lineClamp: 1, children: null };
    obj2[3] = name;
    tmp9 = callback(Text.Text, obj2);
  }
  const items2 = [tmp9, , , ];
  let tmp13 = null != name1;
  if (tmp13) {
    const obj3 = { variant: "text-xs/medium", color: "text-default", lineClamp: 1, children: null };
    obj3[3] = name1;
    tmp13 = callback(Text.Text, obj3);
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
    const obj4 = { variant: "text-xs/medium", color: "text-link", lineClamp: null, children: null };
    obj4[2] = num2;
    obj4[3] = rawTitle;
    tmp18Result = callback(Text.Text, obj4);
    const tmp18 = callback;
  }
  items2[2] = tmp18Result;
  let tmp21 = null != embed.rawDescription;
  if (tmp21) {
    const obj5 = { variant: "text-xs/medium", color: "text-default", lineClamp: 3, children: null };
    obj5[3] = embed.rawDescription;
    tmp21 = callback(Text.Text, obj5);
  }
  items2[3] = tmp21;
  obj1[1] = items2;
  items1[1] = closure_9(View, obj1);
  let tmp25 = null != thumbnail;
  if (tmp25) {
    const obj6 = { media: null };
    obj6[0] = thumbnail;
    tmp25 = callback(EmbedMediaThumbnail, obj6);
  }
  items1[2] = tmp25;
  obj[1] = items1;
  return closure_9(View, obj);
}
({ IN_APP_NOTIFICATION_MAX_HEIGHT: closure_6, NOTIFICATION_PREVIEW_LINE_CLAMP: error } = set);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let str = "ggsans-MediumItalic, NotoSans-MediumItalic";
if (PlatformTypes.isIOS()) {
  str = "ggsans-NormalItalic, NotoSans-NormalItalic";
}
let closure_10 = createCacheKey.createStyles({ italic: { fontStyle: "italic", fontFamily: str } });
createCacheKey = { embedContainer: null, embedAccentBar: null, embedTextContainer: null, embedMediaContainer: null, embedMedia: null };
createCacheKey = { borderRadius: ThemesDefault.radii.sm, paddingTop: ThemesDefault.space.PX_8, paddingBottom: ThemesDefault.space.PX_8, paddingRight: ThemesDefault.space.PX_8, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, flexDirection: "row", overflow: "hidden" };
createCacheKey[0] = createCacheKey;
PlatformTypes = { width: 4, marginTop: -ThemesDefault.space.PX_8, marginBottom: -ThemesDefault.space.PX_8, alignSelf: "stretch" };
createCacheKey[1] = PlatformTypes;
createCacheKey = { flex: 1, gap: ThemesDefault.space.PX_4, paddingVertical: ThemesDefault.space.PX_4, paddingHorizontal: ThemesDefault.space.PX_8 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { borderRadius: ThemesDefault.radii.xs, overflow: "hidden", height: 60, width: "call" };
createCacheKey[4] = { width: "100%", height: "100%" };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let result = set.fileFinishedImporting("modules/in_app_notifications/native/MessagePreviewText.tsx");

export default function MessagePreviewText(message) {
  message = message.message;
  ({ lineClamp, maxHeight, showMessageAuthor } = message);
  if (showMessageAuthor === undefined) {
    showMessageAuthor = false;
  }
  let obj = message(10028);
  const previewableMedia = obj.usePreviewableMedia(message);
  obj1 = message(4698);
  let tmp3 = null;
  if (showMessageAuthor) {
    tmp3 = message;
  }
  const nullableMessageAuthor = obj1.useNullableMessageAuthor(tmp3);
  let tmpResult = tmp(10036);
  const previewableMediaText = tmpResult.usePreviewableMediaText({ previewableMedia, author: nullableMessageAuthor });
  ({ text, secondaryText } = previewableMediaText);
  tmpResult = tmp(10037);
  const getInitialMessagePreview = tmpResult.useGetInitialMessagePreview({ message });
  const items = [message.embeds];
  const memo = React.useMemo(() => {
    const embeds = message.embeds;
    return embeds.filter((image) => null != image.image || null != image.thumbnail);
  }, items);
  if (memo.length > 0) {
    const first = memo[0];
    if (first.type === tmp(693).MessageEmbedTypes.GIFV) {
      if (null != text) {
        obj = { text: null };
        obj[0] = text;
        let tmp43 = callback(SystemMessageText, obj);
      }
      return tmp43;
    }
    obj = { children: null };
    obj1 = { message: null, lineClamp: null, maxHeight: null };
    obj1[0] = getInitialMessagePreview;
    obj1[1] = closure_7;
    obj1[2] = closure_6;
    const items1 = [callback(NativeMessagePreviewContent, obj1), ];
    const obj2 = { embed: null };
    obj2[0] = first;
    items1[1] = callback(EmbedCard, obj2);
    obj[0] = items1;
    tmp43 = callback2(View, obj);
  } else if (isForwardMessageDefault(message)) {
    let tmp29 = previewableMedia.length > 0;
    if (tmp29) {
      tmp29 = previewableMedia[0].type === tmp(10028).PreviewableMediaTypes.GIF;
    }
    if (previewableMedia.length > 0) {
      if (null != nullableMessageAuthor) {
        const intl4 = tmp(1236).intl;
        const obj3 = { username: null };
        obj3[0] = nullableMessageAuthor.nick;
        let formatResult = intl4.format(tmp(1236).t.sLDHDi, obj3);
      } else {
        const intl3 = tmp(1236).intl;
        formatResult = intl3.string(tmp(1236).t["9ddYKt"]);
      }
      const obj4 = { text: null };
      obj4[0] = formatResult;
      return callback(SystemMessageText, obj4);
    }
    const obj5 = { message: null, lineClamp: null, maxHeight: null };
    obj5[0] = getInitialMessagePreview;
    obj5[1] = lineClamp;
    obj5[2] = maxHeight;
    return callback(NativeMessagePreviewContent, obj5);
  } else if (message.content.length > 0) {
    if (null != nullableMessageAuthor) {
      channel = channel.getChannel(message.channel_id);
      tmp(9991);
      if (null != channel) {
        const obj6 = { channel: null, message: null, color: "text-default", layout: null, variant: null, muted: false, lineClamp: null };
        obj6[0] = channel;
        obj6[1] = message;
        obj6[3] = tmp(4139).ChannelListLayoutTypes.COZY;
        obj6[4] = tmp24;
        obj6[6] = lineClamp;
        return callback(tmp(10012).ChannelRowPreview, obj6);
      }
    }
    const obj7 = { message: null, lineClamp: null, maxHeight: null };
    obj7[0] = getInitialMessagePreview;
    obj7[1] = lineClamp;
    obj7[2] = maxHeight;
    return callback(NativeMessagePreviewContent, obj7);
  } else {
    if (previewableMedia.length > 0) {
      if (null !== text) {
        const obj8 = { text: null };
        obj8[0] = text;
        const items2 = [callback(SystemMessageText, obj8), ];
        let tmp17Result = null !== secondaryText;
        if (tmp17Result) {
          const obj9 = { variant: "redesign/message-preview/medium", color: "text-link", lineClamp: null, children: null };
          obj9[2] = closure_7;
          obj9[3] = secondaryText;
          tmp17Result = callback(tmp(4440).Text, obj9);
        }
        const obj10 = { children: null };
        items2[1] = tmp17Result;
        obj10[0] = items2;
        return callback2(View, obj10);
      }
    }
    if (null != message.poll) {
      if (null != nullableMessageAuthor) {
        const intl2 = tmp(1236).intl;
        const obj11 = { username: null };
        obj11[0] = nullableMessageAuthor.nick;
        let formatResult1 = intl2.format(tmp(1236).t["1wtRlq"], obj11);
      } else {
        const intl = tmp(1236).intl;
        formatResult1 = intl.string(tmp(1236).t.n3shVJ);
      }
      const obj12 = { children: null };
      const obj13 = { text: null };
      obj13[0] = formatResult1;
      const items3 = [callback(SystemMessageText, obj13), ];
      const obj14 = { variant: "redesign/message-preview/medium", color: "text-default", lineClamp: null, children: null };
      obj14[2] = closure_7;
      obj14[3] = message.poll.question.text;
      items3[1] = callback(tmp(4440).Text, obj14);
      obj12[0] = items3;
      return callback2(View, obj12);
    } else {
      const obj15 = { message: null, lineClamp: null, maxHeight: null };
      obj15[0] = message;
      obj15[1] = lineClamp;
      obj15[2] = maxHeight;
      return callback(NativeMessagePreviewContent, obj15);
    }
  }
};
export { SystemMessageText };