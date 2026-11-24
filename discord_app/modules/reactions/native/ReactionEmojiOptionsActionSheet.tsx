// === Module 12096: ReactionEmojiOptionsActionSheet ===

// Module 12096 (ReactionEmojiOptionsActionSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import ToastUtils from "ToastUtils" /* 5598 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5599 */;
import ClipboardUtils from "ClipboardUtils" /* 7412 */;
import ReactionActionCreatorsAll from "ReactionActionCreators" /* 8950 */;
import EmojiActionCreators from "EmojiActionCreators" /* 9620 */;
import StarOutlineIcon from "StarOutlineIcon" /* 9624 */;
import StarIcon from "StarIcon" /* 9626 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4918 */;
import EmojiStore from "EmojiStore" /* 6757 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4950 */;

require = fn;
const View = fn(17).View;
const EmojiSourceDataTypes = fn(6927).EmojiSourceDataTypes;
const HelpdeskArticles = fn(1071).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4917);
let obj2 = { header: { alignItems: "center", paddingTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_16 }, reactionPill: null, emoji: null, emojiText: null, reactionText: null, packDescription: null };
let obj3 = { alignItems: "center", paddingTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_16 };
obj2.reactionPill = { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.xl, borderWidth: 4, borderColor: nativeDefault.colors.BORDER_STRONG, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj2.emoji = { width: 50, height: 50 };
obj2.emojiText = { fontSize: 24, lineHeight: 50, textAlign: "center" };
obj2.reactionText = { fontSize: 24, lineHeight: 50 };
let obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.xl, borderWidth: 4, borderColor: nativeDefault.colors.BORDER_STRONG, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj2.packDescription = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24 };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/reactions/native/ReactionEmojiOptionsActionSheet.tsx");

export default function ReactionEmojiOptionsActionSheet(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ reaction, canRemoveReactions } = channelId);
  let stateFromStores1;
  let callback;
  const tmp = closure_13();
  const emoji = reaction.emoji;
  const emojiId = emoji.id;
  const DeveloperMode = tmp3(tmp4[11]).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  let obj = channelId(stateFromStores1[10]);
  items = [SelectedGuildStore];
  const stateFromStores = channelId(stateFromStores1[12]).useStateFromStores(items, () => guildId.getGuildId());
  const tmp3Result = channelId(stateFromStores1[12]);
  const items1 = [EmojiStore];
  const items2 = [emoji.id];
  stateFromStores1 = channelId(stateFromStores1[12]).useStateFromStores(items1, () => {
    let customEmojiById = null;
    if (null != emoji.id) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
    }
    return customEmojiById;
  }, items2);
  const tmp3Result4 = channelId(stateFromStores1[12]);
  const isFavoriteEmoji = channelId(stateFromStores1[13]).useIsFavoriteEmoji(stateFromStores, stateFromStores1);
  const tmp3Result5 = channelId(stateFromStores1[13]);
  const items3 = [callback];
  const stateFromStores2 = channelId(stateFromStores1[12]).useStateFromStores(items3, () => callback.useReducedMotion);
  const AnimateEmoji = tmp3(tmp4[11]).AnimateEmoji;
  let emojiURL;
  if (null != emoji.id) {
    let obj2 = { id: null, animated: null, size: 96 };
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
    obj2.animated = animated;
    emojiURL = messageId(tmp4[14]).getEmojiURL(obj2);
    const obj6 = messageId(tmp4[14]);
  }
  const tmp13 = reaction.burst_count > 0 ? reaction.burst_count : reaction.count;
  callback = isFavoriteEmoji.useCallback(() => {
    messageId(stateFromStores1[15]).hideActionSheet();
  }, []);
  const items4 = [callback, stateFromStores1, isFavoriteEmoji];
  const items5 = [emoji.id, callback];
  const callback1 = isFavoriteEmoji.useCallback(() => {
    callback();
    if (null != stateFromStores1) {
      const obj5 = EmojiActionCreators;
      if (isFavoriteEmoji) {
        obj5.unfavoriteEmoji(stateFromStores1);
        const obj2 = { text: null, icon: null };
        const intl2 = util.intl;
        obj2.text = intl2.string(util.t.in1rga);
        obj2.icon = StarOutlineIcon.StarOutlineIcon;
        ToastActionCreatorsDefault.open("EMOJI_UNFAVORITED", obj2);
      } else {
        obj5.favoriteEmoji(stateFromStores1);
        const obj4 = { text: null, icon: null, iconColor: null };
        const intl = util.intl;
        obj4.text = intl.string(util.t.mE2e8A);
        obj4.icon = StarIcon.StarIcon;
        obj4.iconColor = nativeDefault.colors.ICON_FEEDBACK_WARNING;
        ToastActionCreatorsDefault.open("EMOJI_FAVORITED", obj4);
      }
    }
  }, items4);
  const items6 = [emojiURL, callback];
  const callback2 = isFavoriteEmoji.useCallback(() => {
    if (null != emoji.id) {
      ClipboardUtils.copy(tmp.id);
      const result = ToastUtils.presentCopiedToClipboard();
      callback();
    }
  }, items5);
  const items7 = [channelId, messageId, emoji, callback];
  const callback3 = isFavoriteEmoji.useCallback(() => {
    if (null != emojiURL) {
      ClipboardUtils.copy(tmp);
      const result = ToastUtils.presentCopiedToClipboard();
      callback();
    }
  }, items6);
  const callback4 = isFavoriteEmoji.useCallback(() => {
    ReactionActionCreatorsAll.removeEmojiReactions(channelId, messageId, emoji);
    callback();
  }, items7);
  let str = emoji.name;
  if (str == null) {
    str = "";
  }
  if (obj.useEmojiAndSource({ emojiId, skipKnownGuildEmojiFetch: true }).sourceType === EmojiSourceDataTypes.PACK) {
    let obj3 = { style: tmp.header, children: null };
    let obj4 = { style: tmp.reactionPill, children: null };
    let obj5 = { src: emojiURL, name: str, textEmojiStyle: null, fastImageStyle: null };
    ({ emojiText: obj18.textEmojiStyle, emoji: obj18.fastImageStyle } = tmp);
    const items8 = [closure_11(messageId(tmp4[25]), obj5), ];
    const obj8 = { variant: "body-lg/semibold", color: "text-default", style: tmp.reactionText, children: tmp13 };
    items8[1] = closure_11(tmp3(tmp4[26]).Text, obj8);
    obj4.children = items8;
    const items9 = [closure_12(emojiURL, obj4), ];
    let combined = str;
    if (tmp2) {
      const _HermesInternal2 = HermesInternal;
      combined = ":" + str + ":";
    }
    const obj9 = { variant: "body-lg/semibold", color: "text-default", children: combined };
    items9[1] = closure_11(tmp3(tmp4[26]).Text, obj9);
    obj3.children = items9;
    const items10 = [closure_12(emojiURL, obj3), , ];
    const obj10 = { variant: "body-md/normal", color: "text-subtle", style: tmp.packDescription, children: null };
    const intl5 = tmp3(tmp4[18]).intl;
    const obj11 = { helpdeskArticle: messageId(tmp4[28]).getArticleURL(HelpdeskArticles.NITRO_EMOJI_PACKS) };
    obj10.children = intl5.format(messageId(tmp4[27])["/jdd/7"], obj11);
    items10[1] = closure_11(tmp3(tmp4[26]).Text, obj10);
    if (canRemoveReactions) {
      const obj12 = { hasIcons: false, children: null };
      const obj13 = { label: null, onPress: null };
      const obj14 = { variant: "body-md/semibold", color: "text-feedback-critical", children: null };
      const intl6 = tmp3(tmp4[18]).intl;
      obj14.children = intl6.string(tmp3(tmp4[18]).t["zx/e4P"]);
      obj13.label = closure_11(tmp3(tmp4[26]).Text, obj14);
      obj13.onPress = callback4;
      obj12.children = closure_11(tmp3(tmp4[30]).TableRow, obj13);
      canRemoveReactions = closure_11(tmp3(tmp4[29]).TableRowGroup, obj12);
    }
    const obj15 = { children: null };
    items10[2] = canRemoveReactions;
    obj15.children = items10;
    let obj26 = obj15;
    const tmp29Result = messageId(tmp4[28]);
  } else {
    const obj16 = { style: tmp.header, children: null };
    const obj17 = { style: tmp.reactionPill, children: null };
    const obj19 = { src: emojiURL, name: str, textEmojiStyle: null, fastImageStyle: null };
    ({ emojiText: obj30.textEmojiStyle, emoji: obj30.fastImageStyle } = tmp);
    const items11 = [closure_11(messageId(tmp4[25]), obj19), ];
    const obj20 = { variant: "body-lg/semibold", color: "text-default", style: tmp.reactionText, children: tmp13 };
    items11[1] = closure_11(tmp3(tmp4[26]).Text, obj20);
    obj17.children = items11;
    const items12 = [closure_12(emojiURL, obj17), ];
    let combined1 = str;
    if (tmp2) {
      const _HermesInternal = HermesInternal;
      combined1 = ":" + str + ":";
    }
    const obj21 = { variant: "body-lg/semibold", color: "text-default", children: combined1 };
    items12[1] = closure_11(tmp3(tmp4[26]).Text, obj21);
    obj16.children = items12;
    const items13 = [closure_12(emojiURL, obj16), ];
    let tmp22 = tmp2;
    if (tmp2) {
      tmp22 = null != stateFromStores1;
    }
    if (!tmp22) {
      const items14 = [tmp22, , , ];
      let tmp34Result = setting;
      if (setting) {
        tmp34Result = tmp2;
      }
      if (tmp34Result) {
        const obj22 = { label: null, onPress: null };
        let intl2 = tmp3(tmp4[18]).intl;
        obj22.label = intl2.string(tmp3(tmp4[18]).t.Ap2oVy);
        obj22.onPress = callback2;
        tmp34Result = closure_11(tmp3(tmp4[30]).TableRow, obj22);
      }
      items14[1] = tmp34Result;
      if (setting) {
        setting = tmp2;
      }
      if (setting) {
        setting = null != emojiURL;
      }
      if (setting) {
        const obj23 = { label: null, onPress: null };
        const intl3 = tmp3(tmp4[18]).intl;
        obj23.label = intl3.string(tmp3(tmp4[18]).t.cIoudn);
        obj23.onPress = callback3;
        setting = closure_11(tmp3(tmp4[30]).TableRow, obj23);
      }
      items14[2] = setting;
      let tmp34Result3 = canRemoveReactions;
      if (canRemoveReactions) {
        const obj24 = { label: null, onPress: null };
        const obj25 = { variant: "body-md/semibold", color: "text-feedback-critical", children: null };
        const intl4 = tmp3(tmp4[18]).intl;
        obj25.children = intl4.string(tmp3(tmp4[18]).t["zx/e4P"]);
        obj24.label = closure_11(tmp3(tmp4[26]).Text, obj25);
        obj24.onPress = callback4;
        tmp34Result3 = closure_11(tmp3(tmp4[30]).TableRow, obj24);
      }
      obj26 = { children: null };
      const obj27 = { hasIcons: false, children: null };
      items14[3] = tmp34Result3;
      obj27.children = items14;
      items13[1] = closure_12(tmp3(tmp4[29]).TableRowGroup, obj27);
      obj26.children = items13;
    } else {
      let intl = tmp3(tmp4[18]).intl;
      const string = intl.string;
      let t = tmp3(tmp4[18]).t;
      if (isFavoriteEmoji) {
        let stringResult = string(t.Ay49KA);
      } else {
        stringResult = string(t.nNsr67);
      }
      t = { label: stringResult, onPress: callback1 };
      closure_11(tmp3(tmp4[30]).TableRow, t);
    }
  }
  return closure_12(channelId(stateFromStores1[24]).ActionSheet, obj26);
};