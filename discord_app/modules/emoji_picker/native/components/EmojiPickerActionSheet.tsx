// === Module 11283: EmojiPickerActionSheet ===

// Module 11283 (EmojiPickerActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import Text_Text from "Text/Text" /* 4636 */;
import SearchField from "SearchField" /* 7164 */;
import EmojiPickerUtils from "EmojiPickerUtils" /* 10432 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 11282 */;
import DoubleTapReminderToast from "DoubleTapReminderToast" /* 11284 */;
import BurstReactionToggleDefault from "BurstReactionToggle" /* 11286 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const View = fn(17).View;
const EmojiPickerSource = fn(10437).EmojiPickerSource;
const EXPRESSION_FOOTER_HEIGHT = fn(1074).EXPRESSION_FOOTER_HEIGHT;
let EmojiIntention = fn(1375).EmojiIntention;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
const createStyles = fn(4640);
let obj2 = { header: { flexDirection: "column" }, searchContainer: { display: "flex", flexDirection: "row", marginBottom: -nativeDefault.space.PX_16 }, content: null, background: null, headerText: null, headerSpacer: null, burstReaction: null };
let obj3 = { display: "flex", flexDirection: "row", marginBottom: -nativeDefault.space.PX_16 };
obj2.content = { paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
obj2.background = { backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
let obj5 = { backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
obj2.headerText = { flexDirection: "column", alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
let obj6 = { flexDirection: "column", alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.headerSpacer = { marginTop: nativeDefault.space.PX_8 };
let obj7 = { marginTop: nativeDefault.space.PX_8 };
obj2.burstReaction = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerActionSheet.tsx");

export default function EmojiPickerActionSheet(onClose) {
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
  const bypassPremiumEmojiEntitlement = onClose.bypassPremiumEmojiEntitlement;
  c5 = undefined;
  let handleTextChange;
  EmojiIntention = undefined;
  let ref2;
  let memo1;
  ({ analyticsObject, messageId } = onClose);
  let tmp = closure_13();
  noop = tmp;
  [tmp5, c5] = source(noop.useState(onClose(pickerIntention[10]).ReactionTypes.NORMAL), 2);
  const tmp6 = tmp5 === onClose(pickerIntention[10]).ReactionTypes.BURST;
  closure_6 = tmp6;
  const ref = noop.useRef(null);
  const tmp4 = source(noop.useState(onClose(pickerIntention[10]).ReactionTypes.NORMAL), 2);
  const sharedValue = onClose(pickerIntention[11]).useSharedValue(0);
  let obj2 = onClose(pickerIntention[11]);
  const emojiCategories = onClose(pickerIntention[12]).useEmojiCategories(pickerIntention, channel, guildId, false, bypassPremiumEmojiEntitlement);
  let bottom = onPressEmoji(pickerIntention[13])().insets.bottom;
  const bottom2 = onPressEmoji(pickerIntention[14])().bottom;
  let obj3 = onClose(pickerIntention[12]);
  if (obj4.isAndroid()) {
    bottom = bottom2;
  }
  const sum = bottom + handleTextChange;
  const sum1 = sum + onPressEmoji(tmp3[9]).space.PX_16;
  obj4 = onClose(pickerIntention[15]);
  const tmp14 = onPressEmoji(pickerIntention[18])(channel, sharedValue, pickerIntention, bypassPremiumEmojiEntitlement);
  handleTextChange = tmp14.handleTextChange;
  let items = [onClose];
  let items1 = [onPressEmoji, tmp6, pickerIntention, source];
  const callback = obj.useCallback(() => {
    if (onClose != null) {
      tmp();
    }
  }, items);
  let items2 = [tmp6, bottom2];
  const callback1 = obj.useCallback((emoji) => {
    if (onPressEmoji != null) {
      tmp(emoji, closure_6);
    }
    ActionSheetActionCreatorsDefault.hideActionSheet(openEmojiPickerActionSheet.EMOJI_PICKER_ACTION_SHEET_KEY);
    let tmp7 = pickerIntention !== EmojiIntention.REACTION;
    if (!tmp7) {
      tmp7 = source === EmojiPickerSource.NOTIFICATION;
    }
    if (!tmp7) {
      tmp7 = closure_6;
    }
    if (!tmp7) {
      const result = DoubleTapReminderToast.maybeShowDoubleTapReminderToast(emoji);
      const tmp5Result = DoubleTapReminderToast;
    }
  }, items1);
  const memo = obj.useMemo(() => {
    let num = 0;
    if (closure_6) {
      num = 2;
    }
    const obj = { marginLeft: num, marginRight: null, paddingLeft: null, paddingRight: null, paddingBottom: null };
    let num2 = 0;
    if (closure_6) {
      num2 = 2;
    }
    obj.marginRight = num2;
    let num3 = 2;
    let num4 = 2;
    if (closure_6) {
      num4 = 0;
    }
    obj.paddingLeft = num4;
    if (closure_6) {
      num3 = 0;
    }
    obj.paddingRight = num3;
    obj.paddingBottom = bottom2;
    return obj;
  }, items2);
  EmojiIntention = obj.useRef(null);
  ref2 = obj.useRef(flag);
  const callback2 = obj.useCallback(() => {
    if (ref2.current) {
      const current = ref.current;
      if (current != null) {
        current.focus();
      }
      tmp.current = false;
    }
  }, []);
  const items3 = [pickerIntention, tmp];
  const callback3 = obj.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.setText("");
    }
  }, []);
  memo1 = obj.useMemo(() => {
    let tmp = null;
    if (pickerIntention === EmojiIntention.DEFAULT_REACT_EMOJI) {
      const obj = { style: closure_4.headerText, children: null };
      const obj2 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
      const intl = util.intl;
      obj2.children = intl.string(util.t.wHTk2C);
      const items = [closure_2_10(Text_Text.Text, obj2), ];
      const obj3 = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl2 = util.intl;
      obj3.children = intl2.string(util.t.VrWSNn);
      items[1] = closure_2_10(Text_Text.Text, obj3);
      obj.children = items;
      tmp = closure_2_11(View, obj);
    }
    return tmp;
  }, items3);
  const items4 = [tmp, handleTextChange, tmp6, pickerIntention, memo1, source];
  const memo2 = obj.useMemo(() => {
    let obj = { style: closure_4.header, children: null };
    const items = [memo1, ];
    const items1 = [closure_4.searchContainer, ];
    let headerSpacer = null;
    if (null === memo1) {
      headerSpacer = closure_4.headerSpacer;
    }
    const obj2 = { style: items1, children: null };
    items1[1] = headerSpacer;
    const obj3 = { ref, size: "md", round: true, onChange: handleTextChange, placeholder: EmojiPickerUtils.getSearchPlaceholder(pickerIntention, currentUser) };
    const items2 = [closure_2_10(SearchField.SearchField, obj3), ];
    let tmp4Result = pickerIntention === EmojiIntention.REACTION;
    if (tmp4Result) {
      tmp4Result = source !== EmojiPickerSource.NOTIFICATION;
    }
    if (tmp4Result) {
      const obj5 = {
        onPress() {
            if (obj.isPremium(currentUser.getCurrentUser())) {
              const result = onClose(pickerIntention[29]).triggerHapticFeedback(onPressEmoji(pickerIntention[30]).IMPACT_LIGHT);
              const ReactionTypes = onClose(pickerIntention[10]).ReactionTypes;
              closure_1_5(closure_1_6 ? ReactionTypes.NORMAL : ReactionTypes.BURST);
              const tmpResult = onClose(pickerIntention[29]);
            } else {
              return onPressEmoji(pickerIntention[19]).openLazy(onClose(pickerIntention[28])(pickerIntention[27], pickerIntention.paths), "SuperReactionUpsellActionSheet");
            }
            obj = onClose(pickerIntention[26]);
          },
        isActive: currentUser
      };
      tmp4Result = closure_2_10(BurstReactionToggleDefault, obj5);
    }
    items2[1] = tmp4Result;
    obj2.children = items2;
    items[1] = closure_2_11(View, obj2);
    obj.children = items;
    return closure_2_11(View, obj);
  }, items4);
  if (tmp6) {
    const items5 = [tmp.burstReaction.borderColor, onPressEmoji(tmp3[9]).unsafe_rawColors.TRANSPARENT];
    let items6 = items5;
  } else {
    items6 = [onPressEmoji(tmp3[9]).unsafe_rawColors.TRANSPARENT, onPressEmoji(tmp3[9]).unsafe_rawColors.TRANSPARENT];
  }
  const tmp10Result = onPressEmoji(pickerIntention[16]);
  const sharedValue1 = onClose(pickerIntention[11]).useSharedValue(-1);
  const ref1 = noop.useRef(null);
  let obj5 = { value: tmp10Result(onPressEmoji(pickerIntention[17]).EMOJI_PICKER).analyticsLocations, children: null };
  const tmp2Result = onClose(pickerIntention[11]);
  let isIOSResult = onClose(pickerIntention[15]).isIOS();
  if (isIOSResult) {
    const obj6 = { portalHostName: EmojiPickerActionSheet, animatedSheetIndex: sharedValue1, followSystemKeyboard: true };
    isIOSResult = ref2(onPressEmoji(tmp3[31]), obj6);
  }
  const items7 = [isIOSResult, ];
  const obj7 = { backgroundStyles: tmp.background, ref: ref1, scrollable: true, header: memo2, footer: null, startExpanded: null, onDismiss: null, animatedIndex: null, onExpand: null, borderGradient: null, contentStyles: null, children: null };
  const tmp2Result4 = onClose(pickerIntention[15]);
  let tmp28;
  if (tmp2Result5.isAndroid()) {
    const obj8 = { name: EmojiPickerActionSheet };
    tmp28 = ref2(tmp2(tmp3[33]).PortalHost, obj8);
  }
  obj7.footer = tmp28;
  obj7.startExpanded = flag2;
  obj7.onDismiss = callback;
  obj7.animatedIndex = sharedValue1;
  obj7.onExpand = callback2;
  obj7.borderGradient = items6;
  const items8 = [tmp.content, { marginBottom: sum }];
  obj7.contentStyles = items8;
  const obj9 = { bottomSheetIndex: sharedValue1, onPressEmoji: callback1, onLongPressEmoji: null, emojiPickerListRef: null, categories: null, categoryIndexActive: null, emojis: null, emojiPickerIntention: null, channel: null, guildId: null, searchQueryRef: null, insetBottom: null, analyticsObject: null, messageId: null, bypassPremiumEmojiEntitlement: null };
  tmp2Result5 = onClose(pickerIntention[15]);
  const tmp31 = ref2;
  obj9.onLongPressEmoji = onClose(pickerIntention[35]).openEmojiActionSheet;
  obj9.emojiPickerListRef = ref;
  obj9.categories = emojiCategories;
  obj9.categoryIndexActive = sharedValue;
  obj9.emojis = tmp14.searchResults;
  obj9.emojiPickerIntention = pickerIntention;
  obj9.channel = channel;
  obj9.guildId = guildId;
  obj9.searchQueryRef = tmp14.searchQueryRef;
  obj9.insetBottom = sum1;
  obj9.analyticsObject = analyticsObject;
  obj9.messageId = messageId;
  obj9.bypassPremiumEmojiEntitlement = bypassPremiumEmojiEntitlement;
  const items9 = [ref2(onPressEmoji(pickerIntention[34]), obj9), ];
  const obj10 = { bottomSheetRef: ref1, bottomSheetIndex: sharedValue1, style: memo, categories: emojiCategories, categoryIndexActive: sharedValue, emojiPickerListRef: ref, portalHostName: EmojiPickerActionSheet, renderAhead: null, isSearching: null, onClearSearch: null };
  const tmp10Result3 = onPressEmoji(pickerIntention[34]);
  const tmp10Result4 = onPressEmoji(pickerIntention[36]);
  let str;
  if (tmp2Result6.isIOS()) {
    if (pickerIntention === EmojiIntention.STATUS) {
      str = "full";
    }
  }
  obj10.renderAhead = str;
  obj10.isSearching = null != tmp14.searchResults;
  obj10.onClearSearch = callback3;
  items9[1] = tmp31(tmp10Result4, obj10);
  obj7.children = items9;
  items7[1] = memo1(onClose(pickerIntention[32]).BottomSheet, obj7);
  obj5.children = items7;
  return memo1(onClose(pickerIntention[16]).AnalyticsLocationProvider, obj5);
};