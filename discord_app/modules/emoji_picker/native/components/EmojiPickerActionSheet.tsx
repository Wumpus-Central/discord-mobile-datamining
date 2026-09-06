// discord_app/modules/emoji_picker/native/components/EmojiPickerActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import SearchField from "../../../../design/components/TextField/native/SearchField.native.tsx";
import EmojiPickerUtils from "../../EmojiPickerUtils.tsx";
import openEmojiPickerActionSheet from "../openEmojiPickerActionSheet.tsx";
import DoubleTapReminderToast from "../../../double_tap_to_react/native/DoubleTapReminderToast.tsx";
import BurstReactionToggleDefault from "../../../reactions/native/BurstReactionToggle.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const EmojiPickerSource = fn(10290).EmojiPickerSource;
const EXPRESSION_FOOTER_HEIGHT = fn(1074).EXPRESSION_FOOTER_HEIGHT;
let EmojiIntention = fn(1374).EmojiIntention;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const EmojiPickerActionSheet = "EmojiPickerActionSheet";
fn(4560);
let createStyles = {
  header: { flexDirection: "column" },
  searchContainer: null,
  content: null,
  background: null,
  headerText: null,
  headerSpacer: null,
  burstReaction: null,
};
createStyles = { display: "flex", flexDirection: "row", marginBottom: -nativeDefault.space.PX_16 };
createStyles.searchContainer = createStyles;
createStyles.content = {
  paddingHorizontal: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT,
};
let obj1 = {
  paddingHorizontal: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT,
};
createStyles.background = { backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
let obj2 = { backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
createStyles.headerText = { flexDirection: "column", alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
let obj3 = { flexDirection: "column", alignItems: "center", marginBottom: nativeDefault.space.PX_16 };
createStyles.headerSpacer = { marginTop: nativeDefault.space.PX_8 };
let obj4 = { marginTop: nativeDefault.space.PX_8 };
createStyles.burstReaction = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_13 = createStyles.createStyles(createStyles);
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
  let obj = noop;
  [tmp5, c5] = source(noop.useState(onClose(pickerIntention[10]).ReactionTypes.NORMAL), 2);
  const tmp6 = tmp5 === onClose(pickerIntention[10]).ReactionTypes.BURST;
  closure_6 = tmp6;
  const ref = noop.useRef(null);
  let obj1 = onClose(pickerIntention[11]);
  const sharedValue = obj1.useSharedValue(0);
  let obj2 = onClose(pickerIntention[12]);
  const emojiCategories = obj2.useEmojiCategories(
    pickerIntention,
    channel,
    guildId,
    false,
    bypassPremiumEmojiEntitlement,
  );
  let bottom = onPressEmoji(pickerIntention[13])().insets.bottom;
  const bottom2 = onPressEmoji(pickerIntention[14])().bottom;
  let obj3 = onClose(pickerIntention[15]);
  if (obj3.isAndroid()) {
    bottom = bottom2;
  }
  const sum = bottom + handleTextChange;
  const sum1 = sum + onPressEmoji(tmp3[9]).space.PX_16;
  let tmp10Result = onPressEmoji(tmp3[16]);
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
      let obj = { style: closure_4.headerText, children: null };
      obj = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
      const intl = util.intl;
      obj.children = intl.string(util.t.wHTk2C);
      const items = [closure_2_10(Text_Text.Text, obj)];
      obj = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl2 = util.intl;
      obj.children = intl2.string(util.t.VrWSNn);
      items[1] = closure_2_10(Text_Text.Text, obj);
      obj.children = items;
      tmp = closure_2_11(View, obj);
    }
    return tmp;
  }, items3);
  const items4 = [tmp, handleTextChange, tmp6, pickerIntention, memo1, source];
  const memo2 = obj.useMemo(() => {
    let obj = { style: closure_4.header, children: null };
    const items = [memo1];
    const items1 = [closure_4.searchContainer];
    let headerSpacer = null;
    if (null === memo1) {
      headerSpacer = closure_4.headerSpacer;
    }
    obj = { style: items1, children: null };
    items1[1] = headerSpacer;
    obj = {
      ref,
      size: "md",
      isRound: true,
      onChange: handleTextChange,
      placeholder: EmojiPickerUtils.getSearchPlaceholder(pickerIntention, currentUser),
    };
    const items2 = [closure_2_10(SearchField.SearchField, obj)];
    let tmp4Result = pickerIntention === EmojiIntention.REACTION;
    if (tmp4Result) {
      tmp4Result = source !== EmojiPickerSource.NOTIFICATION;
    }
    if (tmp4Result) {
      const obj1 = {
        onPress() {
          if (obj.isPremium(currentUser.getCurrentUser())) {
            const result = onClose(pickerIntention[29]).triggerHapticFeedback(
              onPressEmoji(pickerIntention[30]).IMPACT_LIGHT,
            );
            const ReactionTypes = onClose(pickerIntention[10]).ReactionTypes;
            closure_1_5(closure_1_6 ? ReactionTypes.NORMAL : ReactionTypes.BURST);
            const tmpResult = onClose(pickerIntention[29]);
          } else {
            return onPressEmoji(pickerIntention[19]).openLazy(
              onClose(pickerIntention[28])(pickerIntention[27], pickerIntention.paths),
              "SuperReactionUpsellActionSheet",
            );
          }
          obj = onClose(pickerIntention[26]);
        },
        isActive: currentUser,
      };
      tmp4Result = closure_2_10(BurstReactionToggleDefault, obj1);
    }
    items2[1] = tmp4Result;
    obj.children = items2;
    items[1] = closure_2_11(View, obj);
    obj.children = items;
    return closure_2_11(View, obj);
  }, items4);
  if (tmp6) {
    const items5 = [tmp.burstReaction.borderColor, onPressEmoji(tmp3[9]).unsafe_rawColors.TRANSPARENT];
    let items6 = items5;
  } else {
    items6 = [onPressEmoji(tmp3[9]).unsafe_rawColors.TRANSPARENT, onPressEmoji(tmp3[9]).unsafe_rawColors.TRANSPARENT];
  }
  let tmp2Result = tmp2(tmp3[11]);
  const sharedValue1 = tmp2Result.useSharedValue(-1);
  const ref1 = obj.useRef(null);
  obj = { value: tmp10Result(onPressEmoji(tmp3[17]).EMOJI_PICKER).analyticsLocations, children: null };
  tmp2Result = tmp2(tmp3[15]);
  let isIOSResult = tmp2Result.isIOS();
  if (isIOSResult) {
    obj = { portalHostName: EmojiPickerActionSheet, animatedSheetIndex: sharedValue1, followSystemKeyboard: true };
    isIOSResult = ref2(onPressEmoji(tmp3[31]), obj);
  }
  const items7 = [isIOSResult];
  obj1 = {
    backgroundStyles: tmp.background,
    ref: ref1,
    scrollable: true,
    header: memo2,
    footer: null,
    startExpanded: null,
    onDismiss: null,
    animatedIndex: null,
    onExpand: null,
    borderGradient: null,
    contentStyles: null,
    children: null,
  };
  const tmp4 = source(noop.useState(onClose(pickerIntention[10]).ReactionTypes.NORMAL), 2);
  let tmp28;
  if (tmp2Result1.isAndroid()) {
    obj2 = { name: EmojiPickerActionSheet };
    tmp28 = ref2(tmp2(tmp3[33]).PortalHost, obj2);
  }
  obj1.footer = tmp28;
  obj1.startExpanded = flag2;
  obj1.onDismiss = callback;
  obj1.animatedIndex = sharedValue1;
  obj1.onExpand = callback2;
  obj1.borderGradient = items6;
  const items8 = [tmp.content, { marginBottom: sum }];
  obj1.contentStyles = items8;
  obj3 = {
    bottomSheetIndex: sharedValue1,
    onPressEmoji: callback1,
    onLongPressEmoji: null,
    emojiPickerListRef: null,
    categories: null,
    categoryIndexActive: null,
    emojis: null,
    emojiPickerIntention: null,
    channel: null,
    guildId: null,
    searchQueryRef: null,
    insetBottom: null,
    analyticsObject: null,
    messageId: null,
    bypassPremiumEmojiEntitlement: null,
  };
  tmp10Result = onPressEmoji(tmp3[34]);
  obj3.onLongPressEmoji = onClose(pickerIntention[35]).openEmojiActionSheet;
  obj3.emojiPickerListRef = ref;
  obj3.categories = emojiCategories;
  obj3.categoryIndexActive = sharedValue;
  obj3.emojis = tmp14.searchResults;
  obj3.emojiPickerIntention = pickerIntention;
  obj3.channel = channel;
  obj3.guildId = guildId;
  obj3.searchQueryRef = tmp14.searchQueryRef;
  obj3.insetBottom = sum1;
  obj3.analyticsObject = analyticsObject;
  obj3.messageId = messageId;
  obj3.bypassPremiumEmojiEntitlement = bypassPremiumEmojiEntitlement;
  const items9 = [ref2(tmp10Result, obj3)];
  const obj4 = {
    bottomSheetRef: ref1,
    bottomSheetIndex: sharedValue1,
    style: memo,
    categories: emojiCategories,
    categoryIndexActive: sharedValue,
    emojiPickerListRef: ref,
    portalHostName: EmojiPickerActionSheet,
    renderAhead: null,
    isSearching: null,
    onClearSearch: null,
  };
  tmp2Result1 = onClose(pickerIntention[15]);
  const tmp31 = ref2;
  const tmp10Result1 = onPressEmoji(pickerIntention[36]);
  let str;
  if (tmp2Result2.isIOS()) {
    if (pickerIntention === EmojiIntention.STATUS) {
      str = "full";
    }
  }
  obj4.renderAhead = str;
  obj4.isSearching = null != tmp14.searchResults;
  obj4.onClearSearch = callback3;
  items9[1] = tmp31(tmp10Result1, obj4);
  obj1.children = items9;
  items7[1] = memo1(onClose(pickerIntention[32]).BottomSheet, obj1);
  obj.children = items7;
  return memo1(onClose(pickerIntention[16]).AnalyticsLocationProvider, obj);
}
