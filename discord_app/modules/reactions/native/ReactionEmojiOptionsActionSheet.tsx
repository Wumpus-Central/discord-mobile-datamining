// === Module 11261: ReactionEmojiOptionsActionSheet ===

// Module 11261 (ReactionEmojiOptionsActionSheet)
import nativeDefault from "native" /* 576 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import ReactionActionCreatorsAll from "ReactionActionCreators" /* 7764 */;
import EmojiActionCreators from "EmojiActionCreators" /* 10336 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import EmojiStore from "EmojiStore" /* 5459 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { header: null, reactionPill: null, emoji: null, emojiText: null, reactionText: null, starIcon: null, starIconSelected: null, starIconUnselected: null };
createStyles = { alignItems: "center", paddingTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_16 };
createStyles.header = createStyles;
createStyles.reactionPill = { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.xl, borderWidth: 4, borderColor: nativeDefault.colors.BORDER_STRONG, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
createStyles.emoji = { width: 50, height: 50 };
createStyles.emojiText = { fontSize: 24, lineHeight: 50, textAlign: "center" };
createStyles.reactionText = { fontSize: 24, lineHeight: 50 };
createStyles.starIcon = { height: 24, width: 24 };
let obj1 = { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.xl, borderWidth: 4, borderColor: nativeDefault.colors.BORDER_STRONG, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
createStyles.starIconSelected = { tintColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
let obj2 = { tintColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
createStyles.starIconUnselected = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/reactions/native/ReactionEmojiOptionsActionSheet.tsx");

export default function ReactionEmojiOptionsActionSheet(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ reaction, canRemoveReactions } = channelId);
  let emojiURL;
  let callback;
  let callback1;
  const tmp = closure_11();
  const starIcon = tmp;
  const emoji = reaction.emoji;
  const DeveloperMode = channelId(emoji[8]).DeveloperMode;
  let tidaWebformEnabled = DeveloperMode.useSetting();
  let obj = messageId(emoji[9]);
  let obj1 = channelId(emoji[10]);
  const items = [callback1];
  const stateFromStores = obj1.useStateFromStores(items, () => callback1.getGuildId());
  let obj2 = channelId(emoji[10]);
  const items1 = [callback];
  const items2 = [emoji.id];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let customEmojiById = null;
    if (null != emoji.id) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
    }
    return customEmojiById;
  }, items2);
  let obj3 = channelId(emoji[11]);
  const isFavoriteEmoji = obj3.useIsFavoriteEmoji(stateFromStores, stateFromStores1);
  let obj4 = channelId(emoji[10]);
  const items3 = [emojiURL];
  const stateFromStores2 = obj4.useStateFromStores(items3, () => emojiURL.useReducedMotion);
  const AnimateEmoji = channelId(emoji[8]).AnimateEmoji;
  emojiURL = undefined;
  if (null != emoji.id) {
    obj = { id: null, animated: null, size: 96 };
    ({ id: obj7.id, animated } = emoji);
    if (animated == null) {
      animated = false;
    }
    if (animated) {
      animated = !stateFromStores2;
    }
    if (animated) {
      animated = tmp10;
    }
    obj.animated = animated;
    emojiURL = tmp5(tmp4[12]).getEmojiURL(obj);
    const tmp5Result = tmp5(tmp4[12]);
  }
  callback = stateFromStores1.useCallback(() => {
    messageId(emoji[13]).hideActionSheet();
  }, []);
  const items4 = [tmp];
  callback1 = stateFromStores1.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(starIcon.starIcon);
    if (arg0) {
      const merged1 = Object.assign(tmp.starIconSelected);
      let style = obj;
    } else {
      const merged2 = Object.assign(tmp.starIconUnselected);
      style = obj;
    }
    if (arg0) {
      let StarOutlineIcon = tmp9(10235).StarIcon;
    } else {
      StarOutlineIcon = tmp9(10241).StarOutlineIcon;
    }
    return React7(StarOutlineIcon, { style });
  }, items4);
  const items5 = [callback, stateFromStores1, isFavoriteEmoji, callback1];
  const items6 = [emoji.id, callback];
  const callback2 = stateFromStores1.useCallback(() => {
    callback();
    if (null != stateFromStores1) {
      function content() {
        const obj = { style: { marginLeft: 8, marginTop: 2 }, variant: "text-md/bold", children: null };
        const intl = channelId(emoji[17]).intl;
        const string = intl.string;
        const t = channelId(emoji[17]).t;
        if (isFavoriteEmoji) {
          let stringResult = string(t.in1rga);
        } else {
          stringResult = string(t.mE2e8A);
        }
        obj.children = stringResult;
        return closure_2_9(channelId(emoji[16]).Text, obj);
      }
      const obj5 = EmojiActionCreators;
      if (isFavoriteEmoji) {
        obj5.unfavoriteEmoji(tmp2);
        let obj = {
          key: "EMOJI_UNFAVORITED",
          icon() {
                return callback1(false);
              },
          content
        };
        ToastActionCreatorsDefault.open(obj);
      } else {
        obj5.favoriteEmoji(tmp2);
        obj = {
          key: "EMOJI_FAVORITED",
          icon() {
                return callback1(true);
              },
          content
        };
        obj.open(obj);
      }
    }
  }, items5);
  const items7 = [emojiURL, callback];
  const callback3 = stateFromStores1.useCallback(() => {
    if (null != emoji.id) {
      ClipboardUtils.copy(tmp.id);
      const result = ToastUtils.presentCopiedToClipboard();
      callback();
    }
  }, items6);
  const items8 = [channelId, messageId, emoji, callback];
  const callback4 = stateFromStores1.useCallback(() => {
    if (null != emojiURL) {
      ClipboardUtils.copy(tmp);
      const result = ToastUtils.presentCopiedToClipboard();
      callback();
    }
  }, items7);
  let str = emoji.name;
  const callback5 = stateFromStores1.useCallback(() => {
    ReactionActionCreatorsAll.removeEmojiReactions(channelId, messageId, emoji);
    callback();
  }, items8);
  if (str == null) {
    str = "";
  }
  obj = { style: tmp.header, children: null };
  obj1 = { style: tmp.reactionPill, children: null };
  obj2 = { src: emojiURL, name: str, textEmojiStyle: tmp.emojiText, fastImageStyle: tmp.emoji };
  const items9 = [closure_9(messageId(emoji[24]), obj2), ];
  obj3 = { variant: "text-lg/bold", color: "text-default", style: tmp.reactionText, children: reaction.burst_count > 0 ? reaction.burst_count : reaction.count };
  items9[1] = closure_9(channelId(emoji[16]).Text, obj3);
  obj1.children = items9;
  const items10 = [closure_10(isFavoriteEmoji, obj1), ];
  let combined = str;
  if (null != emoji.id) {
    const _HermesInternal = HermesInternal;
    combined = ":" + str + ":";
  }
  items10[1] = closure_9(channelId(emoji[16]).Text, { variant: "text-lg/semibold", color: "text-default", children: combined });
  obj.children = items10;
  const items11 = [closure_10(isFavoriteEmoji, obj), ];
  let tmp24 = tmp2;
  if (null != emoji.id) {
    tmp24 = null != stateFromStores1;
  }
  if (!tmp24) {
    const items12 = [tmp24, , , ];
    let tmp21Result = tidaWebformEnabled;
    if (tidaWebformEnabled) {
      tmp21Result = tmp2;
    }
    if (tmp21Result) {
      obj4 = { label: null, onPress: null };
      const intl2 = tmp3(tmp4[17]).intl;
      obj4.label = intl2.string(tmp3(tmp4[17]).t.Ap2oVy);
      obj4.onPress = callback3;
      tmp21Result = tmp21(tmp3(tmp4[26]).TableRow, obj4);
    }
    items12[1] = tmp21Result;
    if (tidaWebformEnabled) {
      tidaWebformEnabled = obj.useExperiment({ location: "ReactionEmojiOptionsActionSheet" }, { autoTrackExposure: false }).tidaWebformEnabled;
    }
    if (tidaWebformEnabled) {
      tidaWebformEnabled = tmp2;
    }
    if (tidaWebformEnabled) {
      tidaWebformEnabled = null != emojiURL;
    }
    if (tidaWebformEnabled) {
      let obj5 = { label: null, onPress: null };
      const intl3 = tmp3(tmp4[17]).intl;
      obj5.label = intl3.string(tmp3(tmp4[17]).t.cIoudn);
      obj5.onPress = callback4;
      tidaWebformEnabled = tmp21(tmp3(tmp4[26]).TableRow, obj5);
    }
    items12[2] = tidaWebformEnabled;
    if (canRemoveReactions) {
      const obj6 = { label: null, onPress: null };
      const obj7 = { variant: "text-md/semibold", color: "text-feedback-critical", children: null };
      const intl4 = tmp3(tmp4[17]).intl;
      obj7.children = intl4.string(tmp3(tmp4[17]).t["zx/e4P"]);
      obj6.label = tmp21(tmp3(tmp4[16]).Text, obj7);
      obj6.onPress = callback5;
      canRemoveReactions = tmp21(tmp3(tmp4[26]).TableRow, obj6);
    }
    const obj8 = { children: null };
    const obj9 = { hasIcons: false, children: null };
    items12[3] = canRemoveReactions;
    obj9.children = items12;
    items11[1] = tmp19(tmp3(tmp4[25]).TableRowGroup, obj9);
    obj8.children = items11;
    return tmp19(tmp3(tmp4[23]).ActionSheet, obj8);
  } else {
    let intl = tmp3(tmp4[17]).intl;
    let string = intl.string;
    let t = tmp3(tmp4[17]).t;
    if (isFavoriteEmoji) {
      let stringResult = string(t.Ay49KA);
    } else {
      stringResult = string(t.nNsr67);
    }
    t = { label: stringResult, onPress: callback2 };
    tmp21Result = tmp21(tmp3(tmp4[26]).TableRow, t);
  }
};