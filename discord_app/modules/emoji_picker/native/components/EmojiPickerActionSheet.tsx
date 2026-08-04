// discord_app/modules/emoji_picker/native/components/EmojiPickerActionSheet.tsx
import Background from "Background";
import ACTION_SHEET_HEIGHT_HALF from "ACTION_SHEET_HEIGHT_HALF";
import { View } from "QUICK_SWITCHER";
import mergeGuildAvatar from "mergeGuildAvatar";
import { EmojiPickerSource } from "IMAGE_SIZE";
import { EXPRESSION_FOOTER_HEIGHT } from "ME";
import { EmojiIntention } from "set";
import jsxProd from "DoubleTapReminderContent";
import createCacheKey from "createCacheKey";

let c10;
let unpackModuleId;
const require = arg1;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
createCacheKey = { header: { flexDirection: "column" }, searchContainer: null, content: null, background: null, headerText: null, headerSpacer: null, burstReaction: null };
createCacheKey = { display: "flex", flexDirection: "row", marginBottom: -require("Themes").space.PX_16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingHorizontal: require("Themes").space.PX_8, backgroundColor: require("Themes").colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
let obj1 = { paddingHorizontal: require("Themes").space.PX_8, backgroundColor: require("Themes").colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
createCacheKey[3] = { backgroundColor: require("Themes").colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
let obj2 = { backgroundColor: require("Themes").colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
createCacheKey[4] = { flexDirection: "column", alignItems: "center", marginBottom: require("Themes").space.PX_16 };
let obj3 = { flexDirection: "column", alignItems: "center", marginBottom: require("Themes").space.PX_16 };
createCacheKey[5] = { marginTop: require("Themes").space.PX_8 };
let obj4 = { marginTop: require("Themes").space.PX_8 };
createCacheKey[6] = { borderColor: require("Themes").colors.BACKGROUND_BRAND };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj5 = { borderColor: require("Themes").colors.BACKGROUND_BRAND };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerActionSheet.tsx");

export default function EmojiPickerActionSheet(onClose) {
  let analyticsObject;
  let c5;
  let channel;
  let guildId;
  let messageId;
  let onPressEmoji;
  let tmp5;
  onClose = onClose.onClose;
  ({ channel, guildId, onPressEmoji } = onClose);
  const pickerIntention = onClose.pickerIntention;
  let flag = onClose.autoFocus;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = onClose.startExpanded;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const source = onClose.source;
  let React;
  c5 = undefined;
  let c6;
  let bottom2;
  let handleTextChange;
  let EmojiIntention;
  let callback;
  let memo1;
  ({ analyticsObject, messageId } = onClose);
  let tmp = createCacheKey();
  React = tmp;
  let obj = React;
  [tmp5, c5] = source(React.useState(onClose(pickerIntention[10]).ReactionTypes.NORMAL), 2);
  const tmp6 = tmp5 === onClose(pickerIntention[10]).ReactionTypes.BURST;
  c6 = tmp6;
  const ref = React.useRef(null);
  let obj1 = onClose(pickerIntention[11]);
  const sharedValue = obj1.useSharedValue(0);
  let obj2 = onClose(pickerIntention[12]);
  const emojiCategories = obj2.useEmojiCategories(pickerIntention, channel, guildId);
  let bottom = onPressEmoji(pickerIntention[13])().insets.bottom;
  bottom2 = onPressEmoji(pickerIntention[14])().bottom;
  let obj3 = onClose(pickerIntention[15]);
  if (obj3.isAndroid()) {
    bottom = bottom2;
  }
  const sum = bottom + handleTextChange;
  const sum1 = sum + tmp10(tmp3[9]).space.PX_16;
  let tmp10Result = tmp10(tmp3[16]);
  const tmp14 = onPressEmoji(pickerIntention[18])(channel, sharedValue, pickerIntention);
  handleTextChange = tmp14.handleTextChange;
  let items = [onClose];
  let items1 = [onPressEmoji, tmp6, pickerIntention, source];
  callback = obj.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
  }, items);
  let items2 = [tmp6, bottom2];
  const callback1 = obj.useCallback((emoji) => {
    if (onPressEmoji != null) {
      tmp(emoji, c6);
    }
    onPressEmoji(pickerIntention[19]).hideActionSheet(onClose(pickerIntention[20]).EMOJI_PICKER_ACTION_SHEET_KEY);
    let tmp7 = pickerIntention !== closure_9.REACTION;
    if (!tmp7) {
      tmp7 = source === bottom2.NOTIFICATION;
    }
    if (!tmp7) {
      tmp7 = c6;
    }
    if (!tmp7) {
      const result = onClose(pickerIntention[21]).maybeShowDoubleTapReminderToast(emoji);
      const tmp5Result = onClose(pickerIntention[21]);
    }
  }, items1);
  const memo = obj.useMemo(() => {
    let num = 0;
    if (c6) {
      num = 2;
    }
    const obj = { marginLeft: num, marginRight: null, paddingLeft: null, paddingRight: null, paddingBottom: null };
    let num2 = 0;
    if (c6) {
      num2 = 2;
    }
    obj[1] = num2;
    let num3 = 2;
    let num4 = 2;
    if (c6) {
      num4 = 0;
    }
    obj[2] = num4;
    if (c6) {
      num3 = 0;
    }
    obj[3] = num3;
    obj[4] = bottom2;
    return obj;
  }, items2);
  EmojiIntention = obj.useRef(null);
  callback = obj.useRef(flag);
  const callback2 = obj.useCallback(() => {
    if (ref.current) {
      const current = closure_9.current;
      if (current != null) {
        current.focus();
      }
      tmp.current = false;
    }
  }, []);
  const items3 = [pickerIntention, tmp];
  const callback3 = obj.useCallback(() => {
    const current = closure_9.current;
    if (current != null) {
      current.setText("");
    }
  }, []);
  memo1 = obj.useMemo(() => {
    let tmp = null;
    if (pickerIntention === closure_9.DEFAULT_REACT_EMOJI) {
      let obj = { style: null, children: null };
      obj[0] = _undefined.headerText;
      obj = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
      const intl = onClose(pickerIntention[23]).intl;
      obj[2] = intl.string(onClose(pickerIntention[23]).t.wHTk2C);
      const items = [ref(onClose(pickerIntention[22]).Text, obj), ];
      obj = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl2 = onClose(pickerIntention[23]).intl;
      obj[2] = intl2.string(onClose(pickerIntention[23]).t.VrWSNn);
      items[1] = ref(onClose(pickerIntention[22]).Text, obj);
      obj[1] = items;
      tmp = memo1(c5, obj);
    }
    return tmp;
  }, items3);
  const items4 = [tmp, handleTextChange, tmp6, pickerIntention, memo1, source];
  const memo2 = obj.useMemo(() => {
    let obj = { style: _undefined.header, children: null };
    const items = [memo1, ];
    const items1 = [_undefined.searchContainer, ];
    let headerSpacer = null;
    if (null === memo1) {
      headerSpacer = _undefined.headerSpacer;
    }
    obj = { style: items1, children: null };
    items1[1] = headerSpacer;
    obj = { ref: closure_9, size: "md", isRound: true, onChange: handleTextChange, placeholder: null };
    obj[4] = onClose(pickerIntention[12]).getSearchPlaceholder(pickerIntention, c6);
    const items2 = [ref(onClose(pickerIntention[24]).SearchField, obj), ];
    let tmp4Result = pickerIntention === closure_9.REACTION;
    if (tmp4Result) {
      tmp4Result = source !== bottom2.NOTIFICATION;
    }
    if (tmp4Result) {
      const obj1 = { onPress: null, isActive: null };
      obj1[0] = function onPress() {
        if (obj.isPremium(outer1_6.getCurrentUser())) {
          const result = tmp(tmp2[29]).triggerHapticFeedback(outer1_1(tmp2[30]).IMPACT_LIGHT);
          const ReactionTypes = tmp(tmp2[10]).ReactionTypes;
          closure_5(mergeGuildAvatar ? ReactionTypes.NORMAL : ReactionTypes.BURST);
        } else {
          return outer1_1(tmp2[19]).openLazy(tmp(tmp2[28])(tmp2[27], tmp2.paths), "SuperReactionUpsellActionSheet");
        }
        obj = outer1_0(outer1_2[26]);
      };
      obj1[1] = c6;
      tmp4Result = ref(onPressEmoji(pickerIntention[25]), obj1);
    }
    items2[1] = tmp4Result;
    obj[1] = items2;
    items[1] = memo1(c5, obj);
    obj[1] = items;
    return memo1(c5, obj);
  }, items4);
  if (tmp6) {
    const items5 = [tmp.burstReaction.borderColor, tmp10(tmp3[9]).unsafe_rawColors.TRANSPARENT];
    let items6 = items5;
  } else {
    items6 = [tmp10(tmp3[9]).unsafe_rawColors.TRANSPARENT, tmp10(tmp3[9]).unsafe_rawColors.TRANSPARENT];
  }
  let tmp2Result = tmp2(tmp3[11]);
  const sharedValue1 = tmp2Result.useSharedValue(-1);
  const ref1 = obj.useRef(null);
  obj = { value: tmp10Result(tmp10(tmp3[17]).EMOJI_PICKER).analyticsLocations, children: null };
  tmp2Result = tmp2(tmp3[15]);
  let isIOSResult = tmp2Result.isIOS();
  if (isIOSResult) {
    obj = { portalHostName: null, animatedSheetIndex: null, followSystemKeyboard: true };
    obj[0] = EmojiPickerActionSheet;
    obj[1] = sharedValue1;
    isIOSResult = callback(tmp10(tmp3[31]), obj);
  }
  const items7 = [isIOSResult, ];
  obj1 = { backgroundStyles: tmp.background, ref: ref1, scrollable: true, header: memo2, footer: null, startExpanded: null, onDismiss: null, animatedIndex: null, onExpand: null, borderGradient: null, contentStyles: null, children: null };
  const tmp4 = source(React.useState(onClose(pickerIntention[10]).ReactionTypes.NORMAL), 2);
  let tmp28;
  if (tmp2Result1.isAndroid()) {
    obj2 = { name: null };
    obj2[0] = EmojiPickerActionSheet;
    tmp28 = callback(tmp2(tmp3[33]).PortalHost, obj2);
  }
  obj1[4] = tmp28;
  obj1[5] = flag2;
  obj1[6] = callback;
  obj1[7] = sharedValue1;
  obj1[8] = callback2;
  obj1[9] = items6;
  const items8 = [tmp.content, { marginBottom: sum }];
  obj1[10] = items8;
  obj3 = { bottomSheetIndex: sharedValue1, onPressEmoji: callback1, onLongPressEmoji: null, emojiPickerListRef: null, categories: null, categoryIndexActive: null, emojis: null, emojiPickerIntention: null, channel: null, guildId: null, searchQueryRef: null, insetBottom: null, analyticsObject: null, messageId: null };
  tmp10Result = tmp10(tmp3[34]);
  obj3[2] = onClose(pickerIntention[35]).openEmojiActionSheet;
  obj3[3] = ref;
  obj3[4] = emojiCategories;
  obj3[5] = sharedValue;
  obj3[6] = tmp14.searchResults;
  obj3[7] = pickerIntention;
  obj3[8] = channel;
  obj3[9] = guildId;
  obj3[10] = tmp14.searchQueryRef;
  obj3[11] = sum1;
  obj3[12] = analyticsObject;
  obj3[13] = messageId;
  const items9 = [callback(tmp10Result, obj3), ];
  const obj4 = { bottomSheetRef: ref1, bottomSheetIndex: sharedValue1, style: memo, categories: emojiCategories, categoryIndexActive: sharedValue, emojiPickerListRef: ref, portalHostName: EmojiPickerActionSheet, renderAhead: null, isSearching: null, onClearSearch: null };
  tmp2Result1 = onClose(pickerIntention[15]);
  const tmp31 = callback;
  const tmp10Result1 = onPressEmoji(pickerIntention[36]);
  let str;
  if (tmp2Result2.isIOS()) {
    if (pickerIntention === EmojiIntention.STATUS) {
      str = "full";
    }
  }
  obj4[7] = str;
  obj4[8] = null != tmp14.searchResults;
  obj4[9] = callback3;
  items9[1] = tmp31(tmp10Result1, obj4);
  obj1[11] = items9;
  items7[1] = memo1(onClose(pickerIntention[32]).BottomSheet, obj1);
  obj[1] = items7;
  return memo1(onClose(pickerIntention[16]).AnalyticsLocationProvider, obj);
};