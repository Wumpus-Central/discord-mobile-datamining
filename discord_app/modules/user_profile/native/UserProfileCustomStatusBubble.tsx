// === Module 11112: UserProfileCustomStatusBubble ===

// Module 11112 (UserProfileCustomStatusBubble)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import UserSettings from "UserSettings" /* 1935 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import FastImageDefault from "FastImage" /* 5587 */;
import EmojiDefault from "Emoji" /* 7130 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import inlineStyles from "inlineStyles" /* 8453 */;
import CustomStatusUtils from "CustomStatusUtils" /* 11113 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

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
  let obj = { style: null, source: null, resizeMode: "contain" };
  const items = [{ height: size, width: size }, id.style];
  obj.style = items;
  const tmp3 = FastImageDefault;
  obj = { id: id.emojiId, animated: null, size: null };
  const obj2 = AvatarUtilsDefault;
  obj = { uri: obj2.getEmojiURL(obj), animated: Boolean(animated) && setting, size: EMOJI_URL_BASE_SIZE };
  obj.source = obj;
  return React7(tmp3, obj);
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
    obj = { variant: textVariant, color: "text-default", lineClamp, onTextLayout, style: null, children: null };
    obj.style = obj;
    let id;
    if (emoji != null) {
      id = emoji.id;
    }
    if (null != id) {
      obj = { children: null };
      let obj1 = { children: null };
      const obj2 = { emojiId: emoji.id, size: 0.9 * lineHeight, animated: emoji.animated, style: null };
      const obj3 = { marginBottom: 0.1 * -lineHeight };
      obj2.style = obj3;
      obj1.children = React7(EmojiImage, obj2);
      const items = [React7(timestampProducer, obj1), ];
      const obj4 = { style: null };
      const obj5 = { width: 0.5 * lineHeight };
      obj4.style = obj5;
      items[1] = React7(timestampProducer, obj4);
      obj.children = items;
      let tmp8Result = closure_1_10(closure_1_11, obj);
    } else {
      let name;
      if (emoji != null) {
        name = emoji.name;
      }
      tmp8Result = null;
      if (null != name) {
        const obj6 = { children: null };
        const items1 = [emoji.name, ];
        const obj7 = { style: null };
        const obj8 = { width: 0.4 * lineHeight };
        obj7.style = obj8;
        items1[1] = React7(timestampProducer, obj7);
        obj6.children = items1;
        tmp8Result = closure_1_10(closure_1_11, obj6);
      }
    }
    const items2 = [tmp8Result, text];
    obj.children = items2;
    return closure_1_10(Text_Text.Text, obj);
  } else {
    obj1 = PlatformUtils;
    if (obj1.isAndroid()) {
      const obj9 = { fontFamily: Fonts.PRIMARY_NORMAL_ITALIC };
    } else {
      const obj10 = { fontStyle: "italic" };
    }
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
    let obj = { id: emoji.id, animated: null, size: null };
    let animated;
    if (emoji != null) {
      animated = emoji.animated;
    }
    obj.animated = Boolean(animated) && setting;
    obj.size = EMOJI_URL_BASE_SIZE;
    emojiURL = obj.getEmojiURL(obj);
    const tmp9 = Boolean(animated) && setting;
  }
  obj = { style: closure_18().container, children: null };
  const obj1 = { textEmojiStyle: { fontSize: size }, fastImageStyle: { width: size, height: size }, src: emojiURL, name: null };
  let str;
  const tmp = closure_18();
  if (emoji != null) {
    str = emoji.name;
  }
  if (str == null) {
    str = "";
  }
  obj1.name = str;
  obj.children = React7(EmojiDefault, obj1);
  return React7(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ PixelRatio: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const EMOJI_URL_BASE_SIZE = fn(1374).EMOJI_URL_BASE_SIZE;
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
let createStyles = fn(4560);
let closure_12 = createStyles.createStyles((arg0) => {
  let obj = { container: { position: "relative" }, bubble: null, statusBubble: null, statusBubbleMeasureable: null, smallCircle: null, largeCircle: null, addStatusIconSpacer: null, statusBubbleLeftAligned: null };
  const colors = nativeDefault.colors;
  if (arg0) {
    let BACKGROUND_SURFACE_HIGH = colors.CUSTOM_STATUS_BUBBLE_BG;
    let tmp4 = importDefault;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp4 = importDefault;
  }
  obj = { backgroundColor: BACKGROUND_SURFACE_HIGH, borderColor: null, borderWidth: 1 };
  const colors2 = tmp4(576).colors;
  obj.borderColor = arg0 ? colors2.BORDER_MUTED : colors2.BORDER_SUBTLE;
  obj.bubble = obj;
  obj = { alignSelf: "flex-start", alignItems: "center", justifyContent: "center", borderRadius: tmp4(576).radii.lg };
  const merged = Object.assign(tmp4(576).shadows.SHADOW_LOW);
  obj.top = -14;
  obj.statusBubble = obj;
  obj.statusBubbleMeasureable = { position: "absolute", top: 0, left: 0, opacity: 0 };
  const size = { position: "absolute", top: -30, width: 12, height: 12, borderRadius: tmp4(576).radii.round };
  const merged1 = Object.assign(tmp4(576).shadows.SHADOW_LOW);
  obj.smallCircle = size;
  obj.largeCircle = { position: "absolute", top: -10, left: 12, width: 20, height: 11 };
  obj.addStatusIconSpacer = { width: 6 };
  obj.statusBubbleLeftAligned = { alignItems: "flex-start" };
  return obj;
});
let closure_14 = { textVariant: "text-md/normal", emojiOnlyEmojiSize: 32, textMinWidth: 42, statusBubblePaddingHorizontal: 12, statusBubblePaddingVertical: 7 };
let closure_15 = { [fn(7208).UserProfileThemeTypes.PREVIEW]: { textVariant: "text-sm/normal", emojiOnlyEmojiSize: 26, textMinWidth: 53, statusBubblePaddingHorizontal: 10, statusBubblePaddingVertical: 6 } };
createStyles = fn(4560);
let closure_18 = createStyles.createStyles(() => ({ container: { alignItems: "center" } }));
let size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileCustomStatusBubble.tsx");

export default noop.forwardRef((showFullStatus, arg1) => {
  ({ customStatusActivity, themeType, hasCustomProfileTheme, editEnabled } = showFullStatus);
  showFullStatus = showFullStatus.showFullStatus;
  _require = tmp2;
  ({ onPressTruncatedStatus, previewEmoji, previewText, placeholderText, prompt: importDefault } = showFullStatus);
  ({ style, emojiOnlyStyle } = showFullStatus);
  const tmp3 = scaledTextLineHeight(hasCustomProfileTheme);
  let obj = require("useToken");
  const colors = require("native").colors;
  if (hasCustomProfileTheme) {
    let BACKGROUND_SURFACE_HIGH = colors.CUSTOM_STATUS_BUBBLE_BG;
    let tmp7 = importDefault;
    let tmp8 = importDefault;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp7 = importDefault;
    tmp8 = importDefault;
  }
  const token = obj.useToken(BACKGROUND_SURFACE_HIGH);
  let tmp4Result = tmp4(tmp5[16]);
  const colors2 = tmp8(tmp5[8]).colors;
  let tmp11;
  const token1 = tmp4Result.useToken(hasCustomProfileTheme ? colors2.BORDER_MUTED : colors2.BORDER_SUBTLE);
  if (null != themeType) {
    tmp11 = closure_15[themeType];
  }
  if (tmp11 == null) {
    tmp11 = closure_14;
  }
  textVariant = tmp11.textVariant;
  const emojiOnlyEmojiSize = tmp11.emojiOnlyEmojiSize;
  ({ statusBubblePaddingHorizontal, statusBubblePaddingVertical, textMinWidth } = tmp11);
  tmp4Result = tmp4(tmp5[17]);
  const trackUserProfileAction = tmp4Result.useUserProfileAnalyticsContext().trackUserProfileAction;
  if (undefined === previewText) {
    let state;
    if (customStatusActivity != null) {
      state = customStatusActivity.state;
    }
    previewText = state;
  }
  const gameMentionsAsPlainText = require("useGameMentionsAsPlainText").useGameMentionsAsPlainText(previewText);
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
  const isPlaceholderText = tmp19;
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
  obj.minHeight = num2;
  if (tmp20) {
    let num3 = statusBubblePaddingVertical;
  } else {
    num3 = 0;
  }
  obj.paddingVertical = num3;
  obj.paddingHorizontal = statusBubblePaddingHorizontal;
  const rect = { top: statusBubblePaddingVertical, bottom: statusBubblePaddingVertical, left: statusBubblePaddingHorizontal, right: statusBubblePaddingHorizontal };
  const tmp4Result1 = require("useGameMentionsAsPlainText");
  const imperativeHandle = obj4.useImperativeHandle(arg1, () => ref.current);
  const ref = obj4.useRef(null);
  scaledTextLineHeight = require("useScaledTextLineHeight").useScaledTextLineHeight(textVariant);
  if (!tmp15) {
    if (!tmp22) {
      return null;
    }
  }
  let name;
  if (previewEmoji != null) {
    name = previewEmoji.name;
  }
  obj = { text: null };
  let items = [name, str4];
  const found = items.filter((item) => null != item);
  obj.text = found.join(" ");
  const items1 = [style, ];
  let tmp30;
  if (tmp18) {
    tmp30 = emojiOnlyStyle;
  }
  const obj1 = { style: items1, children: null };
  items1[1] = tmp30;
  const obj2 = { style: null };
  const items2 = [, ];
  ({ bubble: arr3[0], smallCircle: arr3[1] } = tmp3);
  obj2.style = items2;
  const items3 = [closure_9(closure_6, obj2), , ];
  let tmp31Result;
  if (null != onPressTruncatedStatus) {
    if (!tmp2) {
      if (tmp20) {
        const obj3 = { style: null, children: null };
        const items4 = [, , , ];
        ({ bubble: arr5[0], statusBubble: arr5[1] } = tmp3);
        items4[2] = obj;
        items4[3] = tmp3.statusBubbleMeasureable;
        obj3.style = items4;
        obj4 = {
          text: str4,
          isPlaceholderText: tmp19,
          emoji: previewEmoji,
          textVariant,
          onTextLayout(nativeEvent) {
                  closure_10(nativeEvent.nativeEvent.lines.length > Math.ceil(2 * hasOwnProperty.getFontScale()));
                },
          lineHeight: scaledTextLineHeight
        };
        obj3.children = tmp31(TextStatusContent, obj4);
        tmp31Result = tmp31(tmp29, obj3);
      }
    }
  }
  items3[1] = tmp31Result;
  const items5 = [, , , ];
  ({ bubble: arr6[0], statusBubble: arr6[1] } = tmp3);
  items5[2] = obj;
  let statusBubbleLeftAligned = !tmp18;
  if (!tmp18) {
    statusBubbleLeftAligned = tmp3.statusBubbleLeftAligned;
  }
  function handlePressAddOrEditStatus() {
    trackUserProfileAction({ action: "PRESS_EDIT_CUSTOM_STATUS" });
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    obj = { analyticsLocations: null, prompt: null };
    const items = [AnalyticsLocationDefault.USER_PROFILE_CUSTOM_STATUS_BUBBLE];
    obj.analyticsLocations = items;
    obj.prompt = _prompt;
    const result = CustomStatusUtils.openEditCustomStatusModal(obj);
  }
  const obj5 = { style: items5, ref, children: null };
  items5[3] = statusBubbleLeftAligned;
  const items6 = [closure_9(StatusBubbleConnector, { style: tmp3.largeCircle, backgroundColor: token, borderColor: token1 }), ];
  if (tmp22) {
    let stringResult = placeholderText;
    if (!tmp19) {
      const intl3 = tmp4(tmp5[23]).intl;
      stringResult = intl3.string(tmp4(tmp5[23]).t.Vq4UmS);
    }
    const obj7 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, onPress: null, hitSlop: null, children: null };
    const intl4 = tmp4(tmp5[23]).intl;
    obj7.accessibilityLabel = intl4.string(tmp4(tmp5[23]).t["zrpF/b"]);
    let formatToPlainStringResult;
    if (tmp19) {
      const intl5 = tmp4(tmp5[23]).intl;
      const obj8 = { prompt: placeholderText };
      formatToPlainStringResult = intl5.formatToPlainString(tmp4(tmp5[23]).t.ioWOMP, obj8);
    }
    obj7.accessibilityHint = formatToPlainStringResult;
    obj7.onPress = handlePressAddOrEditStatus;
    obj7.hitSlop = rect;
    let str7 = "text-md/medium";
    if (tmp19) {
      str7 = "text-md/normal";
    }
    const obj9 = { variant: str7, color: "control-secondary-text-default", lineClamp: null, style: null, children: null };
    let _Math = Math;
    obj9.lineClamp = Math.ceil(2 * previewEmoji.getFontScale());
    const obj10 = { paddingVertical: scaledTextLineHeight / 10 };
    if (!tmp19) {
      const merged = Object.assign(tmp19);
      obj9.style = obj10;
      const obj11 = { color: tmp7(tmp5[8]).colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "xs", style: null };
      let tmp44;
      if (tmp4Result3.isAndroid()) {
        const obj12 = { marginBottom: 0.1 * -scaledTextLineHeight };
        tmp44 = obj12;
      }
      const obj13 = { children: null };
      obj11.style = tmp44;
      obj13.children = tmp31(tmp4(tmp5[25]).CirclePlusIcon, obj11);
      const items7 = [tmp31(tmp29, obj13), , ];
      const obj14 = { style: tmp3.addStatusIconSpacer };
      items7[1] = tmp31(tmp29, obj14);
      items7[2] = stringResult;
      obj9.children = items7;
      obj7.children = tmp28(tmp4(tmp5[14]).Text, obj9);
      tmp31Result = tmp31(tmp4(tmp5[24]).PressableOpacity, obj7);
      tmp4Result3 = tmp4(tmp5[13]);
    } else {
      if (tmp4Result4.isAndroid()) {
        const obj15 = { fontFamily: str4.PRIMARY_NORMAL_ITALIC };
      } else {
        const obj16 = { fontStyle: "italic" };
      }
      tmp4Result4 = tmp4(tmp5[13]);
    }
  } else {
    function renderStatusContent() {
      if (closure_9) {
        let obj = { text: str4, isPlaceholderText, emoji: previewEmoji, textVariant, lineClamp: null, lineHeight: null };
        let rounded;
        if (!closure_0) {
          const _Math = Math;
          rounded = Math.ceil(2 * hasOwnProperty.getFontScale());
        }
        obj.lineClamp = rounded;
        obj.lineHeight = scaledTextLineHeight;
        let tmp7Result = React7(TextStatusContent, obj);
      } else if (closure_6) {
        obj = { emoji: previewEmoji, size: emojiOnlyEmojiSize };
        tmp7Result = React7(EmojiOnlyStatusContent, obj);
      }
      return tmp7Result;
    }
    if (tmp) {
      const obj17 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityValue: null, onPress: null, hitSlop: null, children: null };
      const intl2 = tmp4(tmp5[23]).intl;
      obj17.accessibilityLabel = intl2.string(tmp4(tmp5[23]).t.QdHxos);
      obj17.accessibilityValue = obj;
      obj17.onPress = handlePressAddOrEditStatus;
      obj17.hitSlop = rect;
      obj17.children = renderStatusContent();
      tmp31Result = tmp31(tmp4(tmp5[24]).PressableOpacity, obj17);
    } else {
      if (null != onPressTruncatedStatus) {
        if (tmp23[0]) {
          if (!tmp19) {
            const intl = tmp4(tmp5[23]).intl;
            let str6;
            if (previewEmoji != null) {
              str6 = previewEmoji.name;
            }
            if (str6 == null) {
              str6 = "";
            }
            const obj18 = { emoji: str6, status: null };
            if (str4 == null) {
              str4 = "";
            }
            const obj19 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, children: null };
            obj18.status = str4;
            obj19.accessibilityLabel = intl.formatToPlainString(tmp4(tmp5[23]).t.UpF5Qa, obj18);
            obj19.onPress = onPressTruncatedStatus;
            obj19.hitSlop = rect;
            obj19.children = renderStatusContent();
            tmp31Result = tmp31(tmp4(tmp5[24]).PressableOpacity, obj19);
          }
        }
      }
      tmp31Result = renderStatusContent();
    }
  }
  items6[1] = tmp31Result;
  obj5.children = items6;
  items3[2] = closure_10(closure_6, obj5);
  obj1.children = items3;
  return closure_10(closure_6, obj1);
});