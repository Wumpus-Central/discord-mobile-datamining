// discord_app/modules/user_profile/native/UserProfileCustomStatusBubble.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import set from "../../../utils/PlatformUtils.tsx";
import getAvatarURLDefault from "../../../utils/AvatarUtils.tsx";
import explicitContentFromProto from "../../user_settings/UserSettings.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import inlineStyles from "../../../../_runtime/08254_inlineStyles.js";
import inlineStylesDefault from "../../../../_runtime/08254_inlineStyles.js";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { EMOJI_URL_BASE_SIZE } from "../../emojis/EmojiConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function StatusBubbleConnector(arg0) {
  ({ backgroundColor, borderColor, style } = arg0);
  const obj = { pointerEvents: "none", style, width: 20, height: 11, viewBox: "0 0 20 11", children: null };
  const items = [
    callback(inlineStyles.Path, { d: "M0 10 A10 10 0 0 1 20 10 L20 11 L0 11 Z", fill: backgroundColor }),
    callback(inlineStyles.Path, {
      d: "M0.5 10 A9.5 9.5 0 0 1 19.5 10",
      fill: "none",
      stroke: borderColor,
      strokeWidth: 1,
    }),
  ];
  obj[5] = items;
  return callback2(inlineStylesDefault, obj);
}
function EmojiImage(id) {
  ({ size, animated } = id);
  if (animated === undefined) {
    animated = false;
  }
  const AnimateEmoji = explicitContentFromProto.AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  let obj = { style: items, source: null, resizeMode: "contain" };
  items = [{ height: size, width: size }, id.style];
  const tmp2 = closure_8;
  const tmp3 = preloadDefault;
  obj = { id: id.emojiId, animated: null, size: null };
  const obj2 = getAvatarURLDefault;
  obj = { uri: obj2.getEmojiURL(obj) };
  obj[1] = Boolean(animated) && setting;
  obj[2] = EMOJI_URL_BASE_SIZE;
  obj[1] = obj;
  return tmp2(tmp3, obj);
}
function TextStatusContent(arg0) {
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
      obj1 = { children: null };
      const obj2 = { emojiId: null, size: null, animated: null, style: null };
      obj2[0] = emoji.id;
      obj2[1] = 0.9 * lineHeight;
      obj2[2] = emoji.animated;
      const obj3 = { marginBottom: null };
      obj3[0] = 0.1 * -lineHeight;
      obj2[3] = obj3;
      obj1[0] = callback(EmojiImage, obj2);
      const items = [callback(closure_6, obj1)];
      const obj4 = { style: null };
      const obj5 = { width: null };
      obj5[0] = 0.5 * lineHeight;
      obj4[0] = obj5;
      items[1] = callback(closure_6, obj4);
      obj[0] = items;
      let tmp7Result = tmp7(closure_10, obj);
    } else {
      let name;
      if (emoji != null) {
        name = emoji.name;
      }
      tmp7Result = null;
      if (null != name) {
        const obj6 = { children: null };
        const items1 = [emoji.name];
        const obj7 = { style: null };
        const obj8 = { width: null };
        obj8[0] = 0.4 * lineHeight;
        obj7[0] = obj8;
        items1[1] = callback(closure_6, obj7);
        obj6[0] = items1;
        tmp7Result = tmp7(closure_10, obj6);
      }
    }
    const items2 = [tmp7Result, text];
    obj[5] = items2;
    return closure_9(Text.Text, obj);
  } else {
    obj1 = set;
    obj1.isAndroid() ? { fontFamily: "ggsans-NormalItalic, NotoSans-NormalItalic" } : { fontStyle: "italic" };
  }
}
function EmojiOnlyStatusContent(arg0) {
  ({ emoji, size } = arg0);
  const AnimateEmoji = explicitContentFromProto.AnimateEmoji;
  let id;
  const setting = AnimateEmoji.useSetting();
  if (emoji != null) {
    id = emoji.id;
  }
  let emojiURL;
  if (null != id) {
    let obj = getAvatarURLDefault;
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
  obj = { style: callback3().container, children: null };
  obj1 = {
    textEmojiStyle: { fontSize: size },
    fastImageStyle: { width: size, height: size },
    src: emojiURL,
    name: null,
  };
  let str;
  const tmp = callback3();
  const tmp12 = closure_6;
  if (emoji != null) {
    str = emoji.name;
  }
  if (str == null) {
    str = "";
  }
  obj1[3] = str;
  obj[1] = closure_8(EmojiDefault, obj1);
  return closure_8(tmp12, obj);
}
let c4 = importAllResult;
({ PixelRatio: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9, Fragment: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles((arg0) => {
  let obj = {
    container: { position: "relative" },
    bubble: null,
    statusBubble: null,
    statusBubbleMeasureable: null,
    smallCircle: null,
    largeCircle: null,
    addStatusIconSpacer: null,
    statusBubbleLeftAligned: null,
  };
  const colors = ThemesDefault.colors;
  if (arg0) {
    let BACKGROUND_SURFACE_HIGH = colors.CUSTOM_STATUS_BUBBLE_BG;
    let tmp4 = tmp;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp4 = tmp;
  }
  obj = { backgroundColor: BACKGROUND_SURFACE_HIGH, borderColor: null, borderWidth: 1 };
  const colors2 = tmp4(709).colors;
  obj[1] = arg0 ? colors2.BORDER_MUTED : colors2.BORDER_SUBTLE;
  obj[1] = obj;
  obj = { alignSelf: "flex-start", alignItems: "center", justifyContent: "center", borderRadius: tmp4(709).radii.lg };
  const merged = Object.assign(tmp4(709).shadows.SHADOW_LOW);
  obj.top = -14;
  obj[2] = obj;
  obj[3] = { position: "absolute", top: 0, left: 0, opacity: 0 };
  const merged1 = Object.assign(tmp4(709).shadows.SHADOW_LOW);
  obj[4] = { position: "absolute", top: -30, width: 12, height: 12, borderRadius: tmp4(709).radii.round };
  obj[5] = { position: "absolute", top: -10, left: 12, width: 20, height: 11 };
  obj[6] = { width: 6 };
  obj[7] = { alignItems: "flex-start" };
  return obj;
});
let closure_13 = {
  textVariant: "text-md/normal",
  emojiOnlyEmojiSize: 32,
  textMinWidth: 42,
  statusBubblePaddingHorizontal: 12,
  statusBubblePaddingVertical: 7,
};
let closure_14 = {
  [arg1(6010).UserProfileThemeTypes.PREVIEW]: {
    textVariant: "text-sm/normal",
    emojiOnlyEmojiSize: 26,
    textMinWidth: 53,
    statusBubblePaddingHorizontal: 10,
    statusBubblePaddingVertical: 6,
  },
};
let closure_17 = createCacheKey.createStyles(() => ({ container: { alignItems: "center" } }));
const forwardRefResult = importAllResult.forwardRef((showFullStatus, ref) => {
  ({ customStatusActivity, themeType, hasCustomProfileTheme, editEnabled } = showFullStatus);
  showFullStatus = showFullStatus.showFullStatus;
  const _require = tmp2;
  ({ onPressTruncatedStatus, previewEmoji, previewText, placeholderText, prompt: importDefault } = showFullStatus);
  ({ style, emojiOnlyStyle } = showFullStatus);
  const tmp3 = ref(hasCustomProfileTheme);
  let obj = _require(textVariant[15]);
  const colors = importDefault(textVariant[7]).colors;
  if (hasCustomProfileTheme) {
    let BACKGROUND_SURFACE_HIGH = colors.CUSTOM_STATUS_BUBBLE_BG;
    let tmp7 = tmp6;
    let tmp8 = tmp6;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp7 = tmp6;
    tmp8 = tmp6;
  }
  const token = obj.useToken(BACKGROUND_SURFACE_HIGH);
  let tmp4Result = tmp4(tmp5[15]);
  const colors2 = tmp8(tmp5[7]).colors;
  let tmp11;
  const token1 = tmp4Result.useToken(hasCustomProfileTheme ? colors2.BORDER_MUTED : colors2.BORDER_SUBTLE);
  if (null != themeType) {
    tmp11 = table[themeType];
  }
  if (tmp11 == null) {
    tmp11 = closure_13;
  }
  textVariant = tmp11.textVariant;
  const emojiOnlyEmojiSize = tmp11.emojiOnlyEmojiSize;
  ({ statusBubblePaddingHorizontal, statusBubblePaddingVertical, textMinWidth } = tmp11);
  tmp4Result = tmp4(tmp5[16]);
  const trackUserProfileAction = tmp4Result.useUserProfileAnalyticsContext().trackUserProfileAction;
  if (undefined === previewText) {
    let state;
    if (customStatusActivity != null) {
      state = customStatusActivity.state;
    }
    previewText = state;
  }
  const gameMentionsAsPlainText = _require(textVariant[17]).useGameMentionsAsPlainText(previewText);
  let tmp15 = null != gameMentionsAsPlainText;
  if (tmp15) {
    tmp15 = "" !== gameMentionsAsPlainText;
  }
  if (undefined === previewEmoji) {
    let emoji;
    if (customStatusActivity != null) {
      emoji = customStatusActivity.emoji;
    }
    previewEmoji = emoji;
  }
  let tmp18 = tmp17;
  if (null != previewEmoji) {
    tmp18 = !tmp15;
  }
  closure_6 = tmp18;
  let tmp19 = !tmp15;
  if (!tmp15) {
    tmp19 = !tmp17;
  }
  if (tmp19) {
    tmp19 = undefined !== placeholderText;
  }
  if (tmp19) {
    tmp19 = "" !== placeholderText;
  }
  closure_7 = tmp19;
  let str4 = gameMentionsAsPlainText;
  if (tmp19) {
    str4 = placeholderText;
  }
  let tmp20 = null != str4;
  if (tmp20) {
    tmp20 = "" !== str4;
  }
  closure_9 = tmp20;
  if (!tmp15) {
    tmp15 = tmp17;
  }
  if (!tmp15) {
    let tmp21 = !tmp;
    if (!tmp) {
      tmp21 = tmp19;
    }
    tmp15 = tmp21;
  }
  let tmp22 = !tmp15;
  if (!tmp15) {
    tmp22 = tmp;
  }
  let obj4 = trackUserProfileAction;
  const tmp23 = emojiOnlyEmojiSize(trackUserProfileAction.useState(false), 2);
  closure_10 = tmp23[1];
  let num = 0;
  if (tmp20) {
    num = textMinWidth;
  }
  obj = { minWidth: num, minHeight: null, paddingVertical: null, paddingHorizontal: null };
  let num2 = 0;
  if (tmp18) {
    num2 = emojiOnlyEmojiSize + 2 * statusBubblePaddingVertical;
  }
  obj[1] = num2;
  if (tmp20) {
    let num3 = statusBubblePaddingVertical;
  } else {
    num3 = 0;
  }
  obj[2] = num3;
  obj[3] = statusBubblePaddingHorizontal;
  obj = {
    top: statusBubblePaddingVertical,
    bottom: statusBubblePaddingVertical,
    left: statusBubblePaddingHorizontal,
    right: statusBubblePaddingHorizontal,
  };
  ref = obj4.useRef(null);
  const imperativeHandle = obj4.useImperativeHandle(ref, () => ref.current);
  const tmp4Result1 = _require(textVariant[17]);
  const scaledTextLineHeight = _require(textVariant[18]).useScaledTextLineHeight(textVariant);
  if (!tmp15) {
    if (!tmp22) {
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
  const items1 = [style];
  let tmp30;
  if (tmp18) {
    tmp30 = emojiOnlyStyle;
  }
  const obj2 = { style: items1, children: null };
  items1[1] = tmp30;
  const items2 = [,];
  ({ bubble: arr3[0], smallCircle: arr3[1] } = tmp3);
  const items3 = [str4(closure_6, { style: items2 }), ,];
  let tmp31Result;
  if (null != onPressTruncatedStatus) {
    if (!tmp2) {
      if (tmp20) {
        const obj3 = { style: null, children: null };
        const items4 = [, , ,];
        ({ bubble: arr5[0], statusBubble: arr5[1] } = tmp3);
        items4[2] = obj;
        items4[3] = tmp3.statusBubbleMeasureable;
        obj3[0] = items4;
        obj4 = {
          text: null,
          isPlaceholderText: null,
          emoji: null,
          textVariant: null,
          onTextLayout: null,
          lineHeight: null,
        };
        obj4[0] = str4;
        obj4[1] = tmp19;
        obj4[2] = previewEmoji;
        obj4[3] = textVariant;
        obj4[4] = function onTextLayout(nativeEvent) {
          callback2(nativeEvent.nativeEvent.lines.length > Math.ceil(2 * previewEmoji.getFontScale()));
        };
        obj4[5] = scaledTextLineHeight;
        obj3[1] = tmp31(TextStatusContent, obj4);
        tmp31Result = tmp31(tmp29, obj3);
      }
    }
  }
  items3[1] = tmp31Result;
  const items5 = [, , ,];
  ({ bubble: arr6[0], statusBubble: arr6[1] } = tmp3);
  items5[2] = obj;
  let statusBubbleLeftAligned = !tmp18;
  if (!tmp18) {
    statusBubbleLeftAligned = tmp3.statusBubbleLeftAligned;
  }
  function handlePressAddOrEditStatus() {
    trackUserProfileAction({ action: "PRESS_EDIT_CUSTOM_STATUS" });
    let obj = closure_1_1(textVariant[19]);
    obj.hideActionSheet();
    obj = { analyticsLocations: null, prompt: null };
    const items = [closure_1_1(textVariant[21]).USER_PROFILE_CUSTOM_STATUS_BUBBLE];
    obj[0] = items;
    obj[1] = closure_1;
    const result = callback(textVariant[20]).openEditCustomStatusModal(obj);
  }
  const obj5 = { style: items5, ref, children: null };
  items5[3] = statusBubbleLeftAligned;
  const items6 = [str4(scaledTextLineHeight, { style: tmp3.largeCircle, backgroundColor: token, borderColor: token1 })];
  if (tmp22) {
    let stringResult = placeholderText;
    if (!tmp19) {
      const intl3 = tmp4(tmp5[22]).intl;
      stringResult = intl3.string(tmp4(tmp5[22]).t.Vq4UmS);
    }
    const obj7 = {
      accessibilityRole: "button",
      accessibilityLabel: null,
      accessibilityHint: null,
      onPress: null,
      hitSlop: null,
      children: null,
    };
    const intl4 = tmp4(tmp5[22]).intl;
    obj7[1] = intl4.string(tmp4(tmp5[22]).t["zrpF/b"]);
    let formatToPlainStringResult;
    if (tmp19) {
      const intl5 = tmp4(tmp5[22]).intl;
      const obj8 = { prompt: null };
      obj8[0] = placeholderText;
      formatToPlainStringResult = intl5.formatToPlainString(tmp4(tmp5[22]).t.ioWOMP, obj8);
    }
    obj7[2] = formatToPlainStringResult;
    obj7[3] = handlePressAddOrEditStatus;
    obj7[4] = obj;
    let str7 = "text-md/medium";
    if (tmp19) {
      str7 = "text-md/normal";
    }
    const obj9 = {
      variant: null,
      color: "control-secondary-text-default",
      lineClamp: null,
      style: null,
      children: null,
    };
    obj9[0] = str7;
    let _Math = Math;
    obj9[2] = Math.ceil(2 * previewEmoji.getFontScale());
    const obj10 = { paddingVertical: null };
    obj10[0] = scaledTextLineHeight / 10;
    if (!tmp19) {
      const merged = Object.assign(tmp19);
      obj9[3] = obj10;
      const obj11 = { color: null, size: "xs", style: null };
      obj11[0] = tmp7(tmp5[7]).colors.CONTROL_SECONDARY_TEXT_DEFAULT;
      let tmp43;
      if (tmp4Result3.isAndroid()) {
        const obj12 = { marginBottom: null };
        obj12[0] = 0.1 * -scaledTextLineHeight;
        tmp43 = obj12;
      }
      const obj13 = { children: null };
      obj11[2] = tmp43;
      obj13[0] = tmp31(tmp4(tmp5[24]).CirclePlusIcon, obj11);
      const items7 = [tmp31(tmp29, obj13), ,];
      const obj14 = { style: null };
      obj14[0] = tmp3.addStatusIconSpacer;
      items7[1] = tmp31(tmp29, obj14);
      items7[2] = stringResult;
      obj9[4] = items7;
      obj7[5] = tmp28(tmp4(tmp5[13]).Text, obj9);
      tmp31Result = tmp31(tmp4(tmp5[23]).PressableOpacity, obj7);
      tmp4Result3 = tmp4(tmp5[12]);
    } else {
      tmp4(tmp5[12]).isAndroid()
        ? { fontFamily: "ggsans-NormalItalic, NotoSans-NormalItalic" }
        : { fontStyle: "italic" };
      const tmp4Result4 = tmp4(tmp5[12]);
    }
  } else {
    function renderStatusContent() {
      if (closure_9) {
        let obj = {
          text: null,
          isPlaceholderText: null,
          emoji: null,
          textVariant: null,
          lineClamp: null,
          lineHeight: null,
        };
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
        let tmp7Result = str4(closure_1_16, obj);
        const tmp7 = str4;
        const tmp8 = closure_1_16;
      } else if (closure_6) {
        obj = { emoji: null, size: null };
        obj[0] = previewEmoji;
        obj[1] = emojiOnlyEmojiSize;
        tmp7Result = str4(closure_1_18, obj);
      }
      return tmp7Result;
    }
    if (tmp) {
      const obj15 = {
        accessibilityRole: "button",
        accessibilityLabel: null,
        accessibilityValue: null,
        onPress: null,
        hitSlop: null,
        children: null,
      };
      const intl2 = tmp4(tmp5[22]).intl;
      obj15[1] = intl2.string(tmp4(tmp5[22]).t.QdHxos);
      obj15[2] = obj1;
      obj15[3] = handlePressAddOrEditStatus;
      obj15[4] = obj;
      obj15[5] = renderStatusContent();
      tmp31Result = tmp31(tmp4(tmp5[23]).PressableOpacity, obj15);
    } else {
      if (null != onPressTruncatedStatus) {
        if (tmp23[0]) {
          if (!tmp19) {
            const intl = tmp4(tmp5[22]).intl;
            let str6;
            if (previewEmoji != null) {
              str6 = previewEmoji.name;
            }
            if (str6 == null) {
              str6 = "";
            }
            const obj16 = { emoji: null, status: null };
            obj16[0] = str6;
            if (str4 == null) {
              str4 = "";
            }
            const obj17 = {
              accessibilityRole: "button",
              accessibilityLabel: null,
              onPress: null,
              hitSlop: null,
              children: null,
            };
            obj16[1] = str4;
            obj17[1] = intl.formatToPlainString(tmp4(tmp5[22]).t.UpF5Qa, obj16);
            obj17[2] = onPressTruncatedStatus;
            obj17[3] = obj;
            obj17[4] = renderStatusContent();
            tmp31Result = tmp31(tmp4(tmp5[23]).PressableOpacity, obj17);
          }
        }
      }
      tmp31Result = renderStatusContent();
    }
  }
  items6[1] = tmp31Result;
  obj5[2] = items6;
  items3[2] = closure_9(closure_6, obj5);
  obj2[1] = items3;
  return closure_9(closure_6, obj2);
});
let result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileCustomStatusBubble.tsx");

export default forwardRefResult;
