// discord_app/modules/user_profile/native/UserProfileCustomStatusBubble.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "QUICK_SWITCHER";
import get_ActivityIndicator from "ACTION_SHEET_HEIGHT_HALF";
import { EMOJI_URL_BASE_SIZE } from "set";
import jsxProd from "PressableBase";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { preload } from "../../../components_native/common/FastImage.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getAvatarURL } from "../../../utils/AvatarUtils.tsx";
import { set } from "../../../utils/PlatformUtils.tsx";
import { Emoji } from "../../emojis/native/Emoji.tsx";
import { explicitContentFromProto } from "../../user_settings/UserSettings.tsx";

let c10;
let c5;
let c9;
let closure_6;
let metroImportAll;
let require = arg1;
function EmojiImage(id) {
  let animated;
  let size;
  ({ size, animated } = id);
  if (animated === undefined) {
    animated = false;
  }
  const AnimateEmoji = explicitContentFromProto /* explicitContentFromProto */.AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  let obj = { style: items, source: null, resizeMode: "contain" };
  items = [{ height: size, width: size }, id.style];
  const tmp2 = closure_8;
  const tmp3 = preload;
  obj = { id: id.emojiId, animated: null, size: null };
  const obj2 = getAvatarURL;
  obj = { uri: obj2.getEmojiURL(obj) };
  obj[1] = Boolean(animated) && setting;
  obj[2] = EMOJI_URL_BASE_SIZE;
  obj[1] = obj;
  return tmp2(tmp3, obj);
}
function TextStatusContent(arg0) {
  let emoji;
  let isPlaceholderText;
  let lineClamp;
  let lineHeight;
  let onTextLayout;
  let text;
  let textVariant;
  ({ emoji, lineHeight, isPlaceholderText } = arg0);
  ({ text, textVariant, lineClamp, onTextLayout } = arg0);
  if (isPlaceholderText === undefined) {
    isPlaceholderText = false;
  }
  let obj = { paddingVertical: lineHeight / 10 };
  if (!isPlaceholderText) {
    const merged = Object.assign(isPlaceholderText);
    obj = { variant: null, color: "text-default", lineClamp: null, onTextLayout: null, style: null, children: null };
    obj[0] = textVariant;
    obj[2] = lineClamp;
    obj[3] = onTextLayout;
    obj[4] = obj;
    let id;
    if (emoji != null) {
      id = emoji.id;
    }
    if (null != id) {
      obj = { children: null };
      let obj1 = { children: null };
      const obj2 = { emojiId: null, size: null, animated: null, style: null };
      obj2[0] = emoji.id;
      obj2[1] = 0.9 * lineHeight;
      obj2[2] = emoji.animated;
      const obj3 = { marginBottom: null };
      obj3[0] = 0.1 * -lineHeight;
      obj2[3] = obj3;
      obj1[0] = callback(EmojiImage, obj2);
      const items = [callback(closure_6, obj1), ];
      const obj4 = { style: null };
      const obj5 = { width: null };
      obj5[0] = 0.5 * lineHeight;
      obj4[0] = obj5;
      items[1] = callback(closure_6, obj4);
      obj[0] = items;
      let tmp7Result = tmp7(closure_9, obj);
    } else {
      let name;
      if (emoji != null) {
        name = emoji.name;
      }
      tmp7Result = null;
      if (null != name) {
        const obj6 = { children: null };
        const items1 = [emoji.name, ];
        const obj7 = { style: null };
        const obj8 = { width: null };
        obj8[0] = 0.4 * lineHeight;
        obj7[0] = obj8;
        items1[1] = callback(closure_6, obj7);
        obj6[0] = items1;
        tmp7Result = tmp7(closure_9, obj6);
      }
    }
    const items2 = [tmp7Result, text];
    obj[5] = items2;
    return closure_10(Text /* Text */.Text, obj);
  } else {
    obj1 = set /* set */;
    obj1.isAndroid() ? { fontFamily: "ggsans-NormalItalic, NotoSans-NormalItalic" } : { fontStyle: "italic" };
  }
}
function EmojiOnlyStatusContent(arg0) {
  let emoji;
  let size;
  ({ emoji, size } = arg0);
  const AnimateEmoji = explicitContentFromProto /* explicitContentFromProto */.AnimateEmoji;
  let id;
  const setting = AnimateEmoji.useSetting();
  if (emoji != null) {
    id = emoji.id;
  }
  let emojiURL;
  if (null != id) {
    let obj = getAvatarURL;
    obj = { id: null, animated: null, size: null };
    obj[0] = emoji.id;
    let animated;
    if (emoji != null) {
      animated = emoji.animated;
    }
    obj[1] = Boolean(animated) && setting;
    obj[2] = EMOJI_URL_BASE_SIZE;
    emojiURL = obj.getEmojiURL(obj);
    const tmp9 = Boolean(animated) && setting;
  }
  obj = { style: callback2().container, children: null };
  const obj1 = { textEmojiStyle: { fontSize: size }, fastImageStyle: { width: size, height: size }, src: emojiURL, name: null };
  let str;
  const tmp = callback2();
  const tmp12 = closure_6;
  if (emoji != null) {
    str = emoji.name;
  }
  if (str == null) {
    str = "";
  }
  obj1[3] = str;
  obj[1] = closure_8(Emoji, obj1);
  return closure_8(tmp12, obj);
}
let c4 = importAllResult;
({ PixelRatio: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles((arg0) => {
  let obj = { container: { position: "relative" }, bubble: null, statusBubble: null, statusBubbleMeasureable: null, smallCircle: null, largeCircle: null, largeCircleInner: null, addStatusIconSpacer: null, statusBubbleLeftAligned: null };
  const colors = Themes.colors;
  if (arg0) {
    let BACKGROUND_SURFACE_HIGH = colors.CUSTOM_STATUS_BUBBLE_BG;
    let tmp4 = tmp;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp4 = tmp;
  }
  obj = { backgroundColor: BACKGROUND_SURFACE_HIGH, borderColor: null, borderWidth: 1 };
  const colors2 = tmp4(712).colors;
  obj[1] = arg0 ? colors2.BORDER_MUTED : colors2.BORDER_SUBTLE;
  obj[1] = obj;
  obj = { alignSelf: "flex-start", alignItems: "center", justifyContent: "center", borderRadius: tmp4(712).radii.lg };
  const merged = Object.assign(tmp4(712).shadows.SHADOW_LOW);
  obj.top = -14;
  obj[2] = obj;
  obj[3] = { position: "absolute", top: 0, left: 0, opacity: 0 };
  const merged1 = Object.assign(tmp4(712).shadows.SHADOW_LOW);
  obj[4] = { position: "absolute", top: -30, width: 12, height: 12, borderRadius: tmp4(712).radii.round };
  const obj1 = { position: "absolute", top: -30, width: 12, height: 12, borderRadius: tmp4(712).radii.round };
  const merged2 = Object.assign(tmp4(712).shadows.SHADOW_LOW);
  obj[5] = { position: "absolute", top: -8, left: 12, width: 20, height: 20, borderRadius: tmp4(712).radii.round };
  const obj2 = { position: "absolute", top: -8, left: 12, width: 20, height: 20, borderRadius: tmp4(712).radii.round };
  obj[6] = { position: "absolute", top: -7.5, left: 13, width: 16, height: 16, borderWidth: 0, borderTopLeftRadius: tmp4(712).radii.round, borderTopRightRadius: tmp4(712).radii.round };
  obj[7] = { width: 6 };
  obj[8] = { alignItems: "flex-start" };
  return obj;
});
let closure_12 = { textVariant: "text-md/normal", emojiOnlyEmojiSize: 32, textMinWidth: 42, statusBubblePaddingHorizontal: 12, statusBubblePaddingVertical: 7 };
let closure_13 = { [arg1(5658).UserProfileThemeTypes.PREVIEW]: { textVariant: "text-sm/normal", emojiOnlyEmojiSize: 26, textMinWidth: 53, statusBubblePaddingHorizontal: 10, statusBubblePaddingVertical: 6 } };
let closure_16 = createCacheKey.createStyles(() => ({ container: { alignItems: "center" } }));
const forwardRefResult = importAllResult.forwardRef((showFullStatus, ref) => {
  let customStatusActivity;
  let editEnabled;
  let emojiOnlyStyle;
  let importDefault;
  let onPressTruncatedStatus;
  let placeholderText;
  let previewEmoji;
  let previewText;
  let statusBubblePaddingHorizontal;
  let statusBubblePaddingVertical;
  let style;
  let themeType;
  ({ customStatusActivity, themeType, editEnabled } = showFullStatus);
  let tmp = undefined !== editEnabled;
  if (tmp) {
    tmp = editEnabled;
  }
  showFullStatus = showFullStatus.showFullStatus;
  const require = tmp2;
  ({ onPressTruncatedStatus, previewEmoji, previewText, placeholderText, prompt: importDefault } = showFullStatus);
  ({ style, emojiOnlyStyle } = showFullStatus);
  const tmp3 = ref(showFullStatus.hasCustomProfileTheme);
  let tmp4;
  if (null != themeType) {
    tmp4 = table[themeType];
  }
  if (tmp4 == null) {
    tmp4 = scaledTextLineHeight;
  }
  const textVariant = tmp4.textVariant;
  const emojiOnlyEmojiSize = tmp4.emojiOnlyEmojiSize;
  ({ statusBubblePaddingHorizontal, statusBubblePaddingVertical } = tmp4);
  let obj = require(textVariant[14]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = require(textVariant[15]);
  if (undefined === previewText) {
    let state;
    if (customStatusActivity != null) {
      state = customStatusActivity.state;
    }
    previewText = state;
  }
  const gameMentionsAsPlainText = obj1.useGameMentionsAsPlainText(previewText);
  let tmp10 = null != gameMentionsAsPlainText;
  if (tmp10) {
    tmp10 = "" !== gameMentionsAsPlainText;
  }
  if (undefined === previewEmoji) {
    let emoji;
    if (customStatusActivity != null) {
      emoji = customStatusActivity.emoji;
    }
    previewEmoji = emoji;
  }
  let tmp13 = tmp12;
  if (null != previewEmoji) {
    tmp13 = !tmp10;
  }
  let closure_6 = tmp13;
  let tmp14 = !tmp10;
  if (!tmp10) {
    tmp14 = !tmp12;
  }
  if (tmp14) {
    tmp14 = undefined !== placeholderText;
  }
  if (tmp14) {
    tmp14 = "" !== placeholderText;
  }
  const EMOJI_URL_BASE_SIZE = tmp14;
  let str4 = gameMentionsAsPlainText;
  if (tmp14) {
    str4 = placeholderText;
  }
  let tmp15 = null != str4;
  if (tmp15) {
    tmp15 = "" !== str4;
  }
  let closure_9 = tmp15;
  if (!tmp10) {
    tmp10 = tmp12;
  }
  if (!tmp10) {
    let tmp16 = !tmp;
    if (!tmp) {
      tmp16 = tmp14;
    }
    tmp10 = tmp16;
  }
  let tmp17 = !tmp10;
  if (!tmp10) {
    tmp17 = tmp;
  }
  let obj2 = trackUserProfileAction;
  const tmp18 = emojiOnlyEmojiSize(trackUserProfileAction.useState(false), 2);
  let closure_10 = tmp18[1];
  let num = 0;
  if (tmp15) {
    num = tmp4.textMinWidth;
  }
  obj = { minWidth: num, minHeight: null, paddingVertical: null, paddingHorizontal: null };
  let num2 = 0;
  if (tmp13) {
    num2 = emojiOnlyEmojiSize + 2 * statusBubblePaddingVertical;
  }
  obj[1] = num2;
  if (tmp15) {
    let num3 = statusBubblePaddingVertical;
  } else {
    num3 = 0;
  }
  obj[2] = num3;
  obj[3] = statusBubblePaddingHorizontal;
  obj = { top: statusBubblePaddingVertical, bottom: statusBubblePaddingVertical, left: statusBubblePaddingHorizontal, right: statusBubblePaddingHorizontal };
  ref = obj2.useRef(null);
  const imperativeHandle = obj2.useImperativeHandle(ref, () => ref.current);
  let tmp6Result = tmp6(tmp7[16]);
  scaledTextLineHeight = tmp6Result.useScaledTextLineHeight(textVariant);
  if (!tmp10) {
    if (!tmp17) {
      return null;
    }
  }
  let name;
  if (previewEmoji != null) {
    name = previewEmoji.name;
  }
  obj1 = { text: null };
  let items = [name, str4];
  const found = items.filter((arg0) => null != arg0);
  obj1[0] = found.join(" ");
  const items1 = [style, ];
  let tmp25;
  if (tmp13) {
    tmp25 = emojiOnlyStyle;
  }
  obj2 = { style: items1, children: null };
  items1[1] = tmp25;
  const items2 = [, ];
  ({ bubble: arr3[0], smallCircle: arr3[1] } = tmp3);
  const items3 = [str4(closure_6, { style: items2 }), , , ];
  const items4 = [, ];
  ({ bubble: arr5[0], largeCircle: arr5[1] } = tmp3);
  items3[1] = str4(closure_6, { style: items4 });
  let tmp26Result;
  if (null != onPressTruncatedStatus) {
    if (!tmp2) {
      if (tmp15) {
        const obj3 = { style: null, children: null };
        const items5 = [, , , ];
        ({ bubble: arr6[0], statusBubble: arr6[1] } = tmp3);
        items5[2] = obj;
        items5[3] = tmp3.statusBubbleMeasureable;
        obj3[0] = items5;
        const obj4 = { text: null, isPlaceholderText: null, emoji: null, textVariant: null, onTextLayout: null, lineHeight: null };
        obj4[0] = str4;
        obj4[1] = tmp14;
        obj4[2] = previewEmoji;
        obj4[3] = textVariant;
        obj4[4] = function onTextLayout(nativeEvent) {
          callback(nativeEvent.nativeEvent.lines.length > Math.ceil(2 * previewEmoji.getFontScale()));
        };
        obj4[5] = scaledTextLineHeight;
        obj3[1] = tmp26(TextStatusContent, obj4);
        tmp26Result = tmp26(tmp24, obj3);
      }
    }
  }
  items3[2] = tmp26Result;
  const items6 = [, , , ];
  ({ bubble: arr7[0], statusBubble: arr7[1] } = tmp3);
  items6[2] = obj;
  let statusBubbleLeftAligned = !tmp13;
  if (!tmp13) {
    statusBubbleLeftAligned = tmp3.statusBubbleLeftAligned;
  }
  function handlePressAddOrEditStatus() {
    trackUserProfileAction({ action: "PRESS_EDIT_CUSTOM_STATUS" });
    let obj = outer1_1(textVariant[17]);
    obj.hideActionSheet();
    obj = { analyticsLocations: null, prompt: null };
    const items = [outer1_1(textVariant[19]).USER_PROFILE_CUSTOM_STATUS_BUBBLE];
    obj[0] = items;
    obj[1] = closure_1;
    const result = tmp2(textVariant[18]).openEditCustomStatusModal(obj);
  }
  const obj5 = { style: items6, ref, children: null };
  items6[3] = statusBubbleLeftAligned;
  const items7 = [, ];
  ({ bubble: arr8[0], largeCircleInner: arr8[1] } = tmp3);
  const items8 = [str4(closure_6, { style: items7 }), ];
  if (tmp17) {
    let stringResult = placeholderText;
    if (!tmp14) {
      const intl3 = tmp6(tmp7[20]).intl;
      stringResult = intl3.string(tmp6(tmp7[20]).t.Vq4UmS);
    }
    const obj6 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, onPress: null, hitSlop: null, children: null };
    const intl4 = tmp6(tmp7[20]).intl;
    obj6[1] = intl4.string(tmp6(tmp7[20]).t["zrpF/b"]);
    let formatToPlainStringResult;
    if (tmp14) {
      const intl5 = tmp6(tmp7[20]).intl;
      const obj7 = { prompt: null };
      obj7[0] = placeholderText;
      formatToPlainStringResult = intl5.formatToPlainString(tmp6(tmp7[20]).t.ioWOMP, obj7);
    }
    obj6[2] = formatToPlainStringResult;
    obj6[3] = handlePressAddOrEditStatus;
    obj6[4] = obj;
    let str7 = "text-md/medium";
    if (tmp14) {
      str7 = "text-md/normal";
    }
    const obj8 = { variant: null, color: "control-secondary-text-default", lineClamp: null, style: null, children: null };
    obj8[0] = str7;
    let _Math = Math;
    obj8[2] = Math.ceil(2 * previewEmoji.getFontScale());
    const obj9 = { paddingVertical: null };
    obj9[0] = scaledTextLineHeight / 10;
    if (!tmp14) {
      const merged = Object.assign(tmp14);
      obj8[3] = obj9;
      const obj10 = { color: null, size: "xs", style: null };
      obj10[0] = importDefault(tmp7[7]).colors.CONTROL_SECONDARY_TEXT_DEFAULT;
      tmp6Result = tmp6(tmp7[11]);
      let tmp39;
      if (tmp6Result.isAndroid()) {
        const obj11 = { marginBottom: null };
        obj11[0] = 0.1 * -scaledTextLineHeight;
        tmp39 = obj11;
      }
      const obj12 = { children: null };
      obj10[2] = tmp39;
      obj12[0] = tmp26(tmp6(tmp7[22]).CirclePlusIcon, obj10);
      const items9 = [tmp26(tmp24, obj12), , ];
      const obj13 = { style: null };
      obj13[0] = tmp3.addStatusIconSpacer;
      items9[1] = tmp26(tmp24, obj13);
      items9[2] = stringResult;
      obj8[4] = items9;
      obj6[5] = tmp23(tmp6(tmp7[12]).Text, obj8);
      tmp26Result = tmp26(tmp6(tmp7[21]).PressableOpacity, obj6);
    } else {
      tmp6(tmp7[11]).isAndroid() ? { fontFamily: "ggsans-NormalItalic, NotoSans-NormalItalic" } : { fontStyle: "italic" };
      const tmp6Result1 = tmp6(tmp7[11]);
    }
  } else {
    function renderStatusContent() {
      if (closure_9) {
        let obj = { text: null, isPlaceholderText: null, emoji: null, textVariant: null, lineClamp: null, lineHeight: null };
        obj[0] = str4;
        obj[1] = closure_7;
        obj[2] = previewEmoji;
        obj[3] = textVariant;
        let rounded;
        if (!closure_0) {
          const _Math = Math;
          rounded = Math.ceil(2 * previewEmoji.getFontScale());
        }
        obj[4] = rounded;
        obj[5] = scaledTextLineHeight;
        let tmp7Result = str4(outer1_15, obj);
        const tmp7 = str4;
        const tmp8 = outer1_15;
      } else if (closure_6) {
        obj = { emoji: null, size: null };
        obj[0] = previewEmoji;
        obj[1] = emojiOnlyEmojiSize;
        tmp7Result = str4(outer1_17, obj);
      }
      return tmp7Result;
    }
    if (tmp) {
      const obj14 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityValue: null, onPress: null, hitSlop: null, children: null };
      const intl2 = tmp6(tmp7[20]).intl;
      obj14[1] = intl2.string(tmp6(tmp7[20]).t.QdHxos);
      obj14[2] = obj1;
      obj14[3] = handlePressAddOrEditStatus;
      obj14[4] = obj;
      obj14[5] = renderStatusContent();
      tmp26Result = tmp26(tmp6(tmp7[21]).PressableOpacity, obj14);
    } else {
      if (null != onPressTruncatedStatus) {
        if (tmp18[0]) {
          if (!tmp14) {
            const intl = tmp6(tmp7[20]).intl;
            let str6;
            if (previewEmoji != null) {
              str6 = previewEmoji.name;
            }
            if (str6 == null) {
              str6 = "";
            }
            const obj15 = { emoji: null, status: null };
            obj15[0] = str6;
            if (str4 == null) {
              str4 = "";
            }
            const obj16 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
            obj15[1] = str4;
            obj16[1] = intl.formatToPlainString(tmp6(tmp7[20]).t.UpF5Qa, obj15);
            obj16[2] = onPressTruncatedStatus;
            obj16[3] = obj;
            obj16[4] = renderStatusContent();
            tmp26Result = tmp26(tmp6(tmp7[21]).PressableOpacity, obj16);
          }
        }
      }
      tmp26Result = renderStatusContent();
    }
  }
  items8[1] = tmp26Result;
  obj5[2] = items8;
  items3[3] = closure_10(closure_6, obj5);
  obj2[1] = items3;
  return closure_10(closure_6, obj2);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileCustomStatusBubble.tsx");

export default forwardRefResult;