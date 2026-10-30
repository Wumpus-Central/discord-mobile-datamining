// === Module 11359: UserProfileCustomStatusBubble ===

// Module 11359 (UserProfileCustomStatusBubble)
import nativeDefault from "native" /* 575 */;
import PlatformUtils2 from "PlatformUtils" /* 1376 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import UserSettings from "UserSettings" /* 4834 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import Text_Text from "Text/Text" /* 5619 */;
import FastImageDefault from "FastImage" /* 5712 */;
import EmojiDefault from "Emoji" /* 7294 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import inlineStyles from "inlineStyles" /* 8023 */;
import CustomStatusUtils from "CustomStatusUtils" /* 11360 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const inlineStylesDefault = inlineStyles;

require = fn;
function StatusBubbleConnector(arg0) {
  ({ backgroundColor, borderColor, style } = arg0);
  const size = { pointerEvents: "none", style, width: 20, height: 11, viewBox: "0 0 20 11", children: null };
  const items = [React7(inlineStyles.Path, { d: "M0 10 A10 10 0 0 1 20 10 L20 11 L0 11 Z", fill: backgroundColor }), React7(inlineStyles.Path, { d: "M0.5 10 A9.5 9.5 0 0 1 19.5 10", fill: "none", stroke: borderColor, strokeWidth: 1 })];
  size.children = items;
  return closure_1_10(inlineStylesDefault, size);
}
function EmojiImage(id) {
  ({ size, animated } = id);
  if (animated === undefined) {
    animated = false;
  }
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  const obj = { style: null, source: null, resizeMode: "contain" };
  const items = [{ height: size, width: size }, id.style];
  obj.style = items;
  const tmp3 = FastImageDefault;
  const obj3 = { id: id.emojiId, animated: null, size: null };
  const obj2 = AvatarUtilsDefault;
  const tmp4 = Boolean(animated) && setting;
  obj3.animated = tmp4;
  obj3.size = EMOJI_URL_BASE_SIZE;
  obj.source = { uri: obj2.getEmojiURL(obj3) };
  return React7(tmp3, obj);
}
function TextStatusContent(arg0) {
  ({ emoji, lineHeight, isPlaceholderText } = arg0);
  ({ text, textVariant, lineClamp, onTextLayout } = arg0);
  if (isPlaceholderText === undefined) {
    isPlaceholderText = false;
  }
  const obj = { paddingVertical: lineHeight / 10 };
  if (!isPlaceholderText) {
    const merged = Object.assign(tmp);
    const obj3 = { variant: textVariant, color: "text-default", lineClamp, onTextLayout, style: obj, children: null };
    let id;
    if (emoji != null) {
      id = emoji.id;
    }
    if (null != id) {
      const obj4 = { children: null };
      const obj5 = { children: null };
      const obj6 = { emojiId: emoji.id, size: 0.9 * lineHeight, animated: emoji.animated, style: null };
      const obj7 = { marginBottom: 0.1 * -lineHeight };
      obj6.style = obj7;
      obj5.children = React7(EmojiImage, obj6);
      const items = [React7(timestampProducer, obj5), ];
      const obj8 = { style: null };
      const obj9 = { width: 0.5 * lineHeight };
      obj8.style = obj9;
      items[1] = React7(timestampProducer, obj8);
      obj4.children = items;
      let tmp9Result = closure_1_10(closure_1_11, obj4);
    } else {
      let name;
      if (emoji != null) {
        name = emoji.name;
      }
      tmp9Result = null;
      if (null != name) {
        const obj10 = { children: null };
        const items1 = [emoji.name, ];
        const obj11 = { style: null };
        const obj12 = { width: 0.4 * lineHeight };
        obj11.style = obj12;
        items1[1] = React7(timestampProducer, obj11);
        obj10.children = items1;
        tmp9Result = closure_1_10(closure_1_11, obj10);
      }
    }
    const items2 = [tmp9Result, text, ];
    let tmp23 = null;
    if (isPlaceholderText) {
      tmp23 = str;
    }
    items2[2] = tmp23;
    obj3.children = items2;
    return closure_1_10(Text_Text.Text, obj3);
  } else {
    if (obj2.isAndroid()) {
      const obj13 = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
    } else {
      const obj14 = { fontStyle: "italic" };
    }
    obj2 = PlatformUtils2;
  }
}
function EmojiOnlyStatusContent(arg0) {
  ({ emoji, size } = arg0);
  const AnimateEmoji = UserSettings.AnimateEmoji;
  let id;
  const setting = AnimateEmoji.useSetting();
  if (emoji != null) {
    id = emoji.id;
  }
  let emojiURL;
  if (null != id) {
    const obj2 = { id: emoji.id, animated: null, size: null };
    let animated;
    if (emoji != null) {
      animated = emoji.animated;
    }
    const obj = AvatarUtilsDefault;
    obj2.animated = Boolean(animated) && setting;
    obj2.size = EMOJI_URL_BASE_SIZE;
    emojiURL = obj.getEmojiURL(obj2);
    const tmp9 = Boolean(animated) && setting;
  }
  const obj3 = { style: closure_19().container, children: null };
  const obj4 = { textEmojiStyle: { fontSize: size }, fastImageStyle: { width: size, height: size }, src: emojiURL, name: null };
  str = undefined;
  const tmp = closure_19();
  if (emoji != null) {
    str = emoji.name;
  }
  if (str == null) {
    str = "";
  }
  obj4.name = str;
  obj3.children = React7(EmojiDefault, obj4);
  return React7(timestampProducer, obj3);
}
get_ActivityIndicator = fn(17);
({ PixelRatio: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const EMOJI_URL_BASE_SIZE = fn(1387).EMOJI_URL_BASE_SIZE;
const Fonts = fn(1083).Fonts;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const PlatformUtils = fn(1376);
let str = "";
if (PlatformUtils.isAndroid()) {
  str = "\u00A0";
}
let createStyles = fn(5009);
let closure_13 = createStyles.createStyles((arg0) => {
  const obj = { container: { position: "relative" }, bubble: null, statusBubble: null, statusBubbleMeasureable: null, smallCircle: null, largeCircle: null, addStatusIconSpacer: null, statusBubbleLeftAligned: null };
  const colors = nativeDefault.colors;
  if (arg0) {
    let BACKGROUND_SURFACE_HIGH = colors.CUSTOM_STATUS_BUBBLE_BG;
    let tmp4 = importDefault;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp4 = importDefault;
  }
  const obj2 = { backgroundColor: BACKGROUND_SURFACE_HIGH, borderColor: null, borderWidth: 1 };
  const colors2 = tmp4(575).colors;
  obj2.borderColor = arg0 ? colors2.BORDER_MUTED : colors2.BORDER_SUBTLE;
  obj.bubble = obj2;
  const obj3 = { alignSelf: "flex-start", alignItems: "center", justifyContent: "center", borderRadius: tmp4(575).radii.lg };
  const merged = Object.assign(tmp4(575).shadows.SHADOW_LOW);
  obj3.top = -14;
  obj.statusBubble = obj3;
  obj.statusBubbleMeasureable = { position: "absolute", top: 0, left: 0, opacity: 0 };
  const size = { position: "absolute", top: -30, width: 12, height: 12, borderRadius: tmp4(575).radii.round };
  const merged1 = Object.assign(tmp4(575).shadows.SHADOW_LOW);
  obj.smallCircle = size;
  obj.largeCircle = { position: "absolute", top: -10, left: 12, width: 20, height: 11 };
  obj.addStatusIconSpacer = { width: 6 };
  obj.statusBubbleLeftAligned = { alignItems: "flex-start" };
  return obj;
});
let closure_15 = { textVariant: "text-md/normal", emojiOnlyEmojiSize: 32, textMinWidth: 42, statusBubblePaddingHorizontal: 12, statusBubblePaddingVertical: 7 };
let closure_16 = { [fn(7371).UserProfileThemeTypes.PREVIEW]: { textVariant: "text-sm/normal", emojiOnlyEmojiSize: 26, textMinWidth: 53, statusBubblePaddingHorizontal: 10, statusBubblePaddingVertical: 6 } };
createStyles = fn(5009);
let closure_19 = createStyles.createStyles(() => ({ container: { alignItems: "center" } }));
let size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileCustomStatusBubble.tsx");

export default function UserProfileCustomStatusBubble(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  importDefault = undefined;
  let textVariant;
  let emojiOnlyEmojiSize;
  let trackUserProfileAction;
  previewEmoji = undefined;
  closure_6 = undefined;
  let isPlaceholderText;
  let str4;
  closure_9 = undefined;
  closure_10 = undefined;
  ref = undefined;
  let scaledTextLineHeight;
  ({ customStatusActivity, themeType, hasCustomProfileTheme, editEnabled } = merged);
  const showFullStatus = merged.showFullStatus;
  _require = tmp3;
  ({ onPressTruncatedStatus, previewEmoji, previewText, placeholderText, prompt: c1 } = merged);
  ({ style, emojiOnlyStyle } = merged);
  const tmp4 = closure_13(hasCustomProfileTheme);
  const colors = require("native").colors;
  if (hasCustomProfileTheme) {
    let BACKGROUND_SURFACE_HIGH = colors.CUSTOM_STATUS_BUBBLE_BG;
    let tmp8 = tmp7;
    let tmp9 = tmp7;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp8 = tmp7;
    tmp9 = tmp7;
  }
  const token = require("useToken").useToken(BACKGROUND_SURFACE_HIGH);
  let obj = require("useToken");
  const colors2 = tmp9(tmp6[9]).colors;
  let tmp12;
  const token1 = require("useToken").useToken(hasCustomProfileTheme ? colors2.BORDER_MUTED : colors2.BORDER_SUBTLE);
  if (null != themeType) {
    tmp12 = closure_16[themeType];
  }
  if (tmp12 == null) {
    tmp12 = closure_15;
  }
  textVariant = tmp12.textVariant;
  emojiOnlyEmojiSize = tmp12.emojiOnlyEmojiSize;
  ({ statusBubblePaddingHorizontal, statusBubblePaddingVertical, textMinWidth } = tmp12);
  const tmp5Result = require("useToken");
  trackUserProfileAction = require("UserProfileAnalyticsContext").useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp5Result6 = require("UserProfileAnalyticsContext");
  if (undefined === previewText) {
    let state;
    if (customStatusActivity != null) {
      state = customStatusActivity.state;
    }
    previewText = state;
  }
  const gameMentionsAsPlainText = require("useGameMentionsAsPlainText").useGameMentionsAsPlainText(previewText);
  let tmp16 = null != gameMentionsAsPlainText;
  if (tmp16) {
    tmp16 = "" !== gameMentionsAsPlainText;
  }
  if (undefined === previewEmoji) {
    let emoji;
    if (customStatusActivity != null) {
      emoji = customStatusActivity.emoji;
    }
    previewEmoji = emoji;
  }
  let tmp19 = tmp18;
  if (null != previewEmoji) {
    tmp19 = !tmp16;
  }
  closure_6 = tmp19;
  let tmp20 = !tmp16;
  if (!tmp16) {
    tmp20 = !tmp18;
  }
  if (tmp20) {
    tmp20 = undefined !== placeholderText;
  }
  if (tmp20) {
    tmp20 = "" !== placeholderText;
  }
  isPlaceholderText = tmp20;
  str4 = gameMentionsAsPlainText;
  if (tmp20) {
    str4 = placeholderText;
  }
  let tmp21 = null != str4;
  if (tmp21) {
    tmp21 = "" !== str4;
  }
  closure_9 = tmp21;
  if (!tmp16) {
    tmp16 = tmp18;
  }
  if (!tmp16) {
    let tmp22 = !tmp2;
    if (!tmp2) {
      tmp22 = tmp20;
    }
    tmp16 = tmp22;
  }
  let tmp23 = !tmp16;
  if (!tmp16) {
    tmp23 = tmp2;
  }
  const tmp24 = emojiOnlyEmojiSize(trackUserProfileAction.useState(false), 2);
  closure_10 = tmp24[1];
  let num = 0;
  if (tmp21) {
    num = textMinWidth;
  }
  let obj2 = { minWidth: num, minHeight: null, paddingVertical: null, paddingHorizontal: null };
  let num2 = 0;
  if (tmp19) {
    num2 = emojiOnlyEmojiSize + 2 * statusBubblePaddingVertical;
  }
  obj2.minHeight = num2;
  if (tmp21) {
    let num3 = statusBubblePaddingVertical;
  } else {
    num3 = 0;
  }
  obj2.paddingVertical = num3;
  obj2.paddingHorizontal = statusBubblePaddingHorizontal;
  const rect = { top: statusBubblePaddingVertical, bottom: statusBubblePaddingVertical, left: statusBubblePaddingHorizontal, right: statusBubblePaddingHorizontal };
  ref = obj5.useRef(null);
  const imperativeHandle = obj5.useImperativeHandle(ref.ref, () => ref.current);
  const tmp5Result7 = require("useGameMentionsAsPlainText");
  scaledTextLineHeight = require("useScaledTextLineHeight").useScaledTextLineHeight(textVariant);
  if (!tmp16) {
    if (!tmp23) {
      return null;
    }
  }
  let name;
  if (previewEmoji != null) {
    name = previewEmoji.name;
  }
  let obj3 = { text: null };
  let items = [name, str4];
  const found = items.filter((item) => null != item);
  obj3.text = found.join(" ");
  const items1 = [style, ];
  let tmp31;
  if (tmp19) {
    tmp31 = emojiOnlyStyle;
  }
  const obj4 = { style: items1, children: null };
  items1[1] = tmp31;
  const obj6 = { style: null };
  const items2 = [, ];
  ({ bubble: arr3[0], smallCircle: arr3[1] } = tmp4);
  obj6.style = items2;
  const items3 = [closure_9(closure_6, obj6), , ];
  let tmp32Result;
  if (null != onPressTruncatedStatus) {
    if (!tmp3) {
      if (tmp21) {
        const obj7 = { style: null, children: null };
        const items4 = [, , , ];
        ({ bubble: arr5[0], statusBubble: arr5[1] } = tmp4);
        items4[2] = obj2;
        items4[3] = tmp4.statusBubbleMeasureable;
        obj7.style = items4;
        const obj8 = {
          text: str4,
          isPlaceholderText: tmp20,
          emoji: previewEmoji,
          textVariant,
          onTextLayout(nativeEvent) {
                  closure_10(nativeEvent.nativeEvent.lines.length > Math.ceil(2 * hasOwnProperty.getFontScale()));
                },
          lineHeight: scaledTextLineHeight
        };
        obj7.children = tmp32(TextStatusContent, obj8);
        tmp32Result = tmp32(tmp30, obj7);
      }
    }
  }
  items3[1] = tmp32Result;
  const items5 = [, , , ];
  ({ bubble: arr6[0], statusBubble: arr6[1] } = tmp4);
  items5[2] = obj2;
  let statusBubbleLeftAligned = !tmp19;
  if (!tmp19) {
    statusBubbleLeftAligned = tmp4.statusBubbleLeftAligned;
  }
  function handlePressAddOrEditStatus() {
    trackUserProfileAction({ action: "PRESS_EDIT_CUSTOM_STATUS" });
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj3 = { analyticsLocations: null, prompt: null };
    const items = [AnalyticsLocationDefault.USER_PROFILE_CUSTOM_STATUS_BUBBLE];
    obj3.analyticsLocations = items;
    obj3.prompt = _prompt;
    const result = CustomStatusUtils.openEditCustomStatusModal(obj3);
  }
  const obj9 = { style: items5, ref, children: null };
  items5[3] = statusBubbleLeftAligned;
  const items6 = [closure_9(StatusBubbleConnector, { style: tmp4.largeCircle, backgroundColor: token, borderColor: token1 }), ];
  if (tmp23) {
    let stringResult = placeholderText;
    if (!tmp20) {
      const intl3 = tmp5(tmp6[23]).intl;
      stringResult = intl3.string(tmp5(tmp6[23]).t.Vq4UmS);
    }
    const obj11 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, onPress: null, hitSlop: null, children: null };
    const intl4 = tmp5(tmp6[23]).intl;
    obj11.accessibilityLabel = intl4.string(tmp5(tmp6[23]).t["zrpF/b"]);
    let formatToPlainStringResult;
    if (tmp20) {
      const intl5 = tmp5(tmp6[23]).intl;
      const obj12 = { prompt: placeholderText };
      formatToPlainStringResult = intl5.formatToPlainString(tmp5(tmp6[23]).t.ioWOMP, obj12);
    }
    obj11.accessibilityHint = formatToPlainStringResult;
    obj11.onPress = handlePressAddOrEditStatus;
    obj11.hitSlop = rect;
    let str7 = "text-md/medium";
    if (tmp20) {
      str7 = "text-md/normal";
    }
    const obj13 = { variant: str7, color: "control-secondary-text-default", lineClamp: null, style: null, children: null };
    let _Math = Math;
    obj13.lineClamp = Math.ceil(2 * previewEmoji.getFontScale());
    const obj14 = { paddingVertical: scaledTextLineHeight / 10 };
    if (!tmp20) {
      const merged1 = Object.assign(tmp40);
      obj13.style = obj14;
      const obj15 = { color: tmp8(tmp6[9]).colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "xs", style: null };
      let tmp46;
      if (tmp5Result9.isAndroid()) {
        const obj16 = { marginBottom: 0.1 * -scaledTextLineHeight };
        tmp46 = obj16;
      }
      const obj17 = { children: null };
      obj15.style = tmp46;
      obj17.children = tmp32(tmp5(tmp6[25]).CirclePlusIcon, obj15);
      const items7 = [tmp32(tmp30, obj17), , , ];
      const obj18 = { style: tmp4.addStatusIconSpacer };
      items7[1] = tmp32(tmp30, obj18);
      items7[2] = stringResult;
      let tmp47 = null;
      if (tmp20) {
        tmp47 = scaledTextLineHeight;
      }
      items7[3] = tmp47;
      obj13.children = items7;
      obj11.children = tmp29(tmp5(tmp6[14]).Text, obj13);
      let tmp32Result2 = tmp32(tmp5(tmp6[24]).PressableOpacity, obj11);
      tmp5Result9 = tmp5(tmp6[7]);
    } else {
      if (tmp5Result10.isAndroid()) {
        const obj19 = { fontFamily: str4.PRIMARY_NORMAL_ITALIC };
      } else {
        const obj20 = { fontStyle: "italic" };
      }
      tmp5Result10 = tmp5(tmp6[7]);
    }
  } else {
    function renderStatusContent() {
      if (closure_9) {
        const obj2 = { text: str4, isPlaceholderText, emoji: previewEmoji, textVariant, lineClamp: null, lineHeight: null };
        let rounded;
        if (!closure_0) {
          const _Math = Math;
          rounded = Math.ceil(2 * hasOwnProperty.getFontScale());
        }
        obj2.lineClamp = rounded;
        obj2.lineHeight = scaledTextLineHeight;
        let tmp7Result = React7(TextStatusContent, obj2);
      } else if (closure_6) {
        const obj = { emoji: previewEmoji, size: emojiOnlyEmojiSize };
        tmp7Result = React7(EmojiOnlyStatusContent, obj);
      }
      return tmp7Result;
    }
    if (tmp2) {
      const obj21 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityValue: null, onPress: null, hitSlop: null, children: null };
      const intl2 = tmp5(tmp6[23]).intl;
      obj21.accessibilityLabel = intl2.string(tmp5(tmp6[23]).t.QdHxos);
      obj21.accessibilityValue = obj3;
      obj21.onPress = handlePressAddOrEditStatus;
      obj21.hitSlop = rect;
      obj21.children = renderStatusContent();
      tmp32Result2 = tmp32(tmp5(tmp6[24]).PressableOpacity, obj21);
    } else {
      if (null != onPressTruncatedStatus) {
        if (tmp24[0]) {
          if (!tmp20) {
            const intl = tmp5(tmp6[23]).intl;
            let str6;
            if (previewEmoji != null) {
              str6 = previewEmoji.name;
            }
            if (str6 == null) {
              str6 = "";
            }
            const obj22 = { emoji: str6, status: null };
            if (str4 == null) {
              str4 = "";
            }
            const obj23 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
            obj22.status = str4;
            obj23.accessibilityLabel = intl.formatToPlainString(tmp5(tmp6[23]).t.UpF5Qa, obj22);
            obj23.onPress = onPressTruncatedStatus;
            obj23.hitSlop = rect;
            obj23.children = renderStatusContent();
            tmp32Result2 = tmp32(tmp5(tmp6[24]).PressableOpacity, obj23);
          }
        }
      }
      tmp32Result2 = renderStatusContent();
    }
  }
  items6[1] = tmp32Result2;
  obj9.children = items6;
  items3[2] = closure_10(closure_6, obj9);
  obj4.children = items3;
  return closure_10(closure_6, obj4);
};