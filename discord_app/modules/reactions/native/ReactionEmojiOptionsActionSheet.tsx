// === Module 10098: ReactionEmojiOptionsActionSheet ===

// Module 10098 (ReactionEmojiOptionsActionSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import ToastUtils from "ToastUtils" /* 5711 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import ClipboardUtils from "ClipboardUtils" /* 7358 */;
import ReactionActionCreatorsAll from "ReactionActionCreators" /* 8405 */;
import EmojiActionCreators from "EmojiActionCreators" /* 10057 */;
import StarOutlineIcon from "StarOutlineIcon" /* 10061 */;
import StarIcon from "StarIcon" /* 10063 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import EmojiStore from "EmojiStore" /* 6796 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5045 */;

require = fn;
const View = fn(17).View;
const EmojiSourceDataTypes = fn(6958).EmojiSourceDataTypes;
const HelpdeskArticles = fn(1072).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5014);
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
  ({ reaction, canRemoveReactions, isEmojiPack } = channelId);
  if (isEmojiPack === undefined) {
    isEmojiPack = false;
  }
  let stateFromStores1;
  let isFavoriteEmoji;
  let emojiURL;
  let callback;
  const tmp = closure_13();
  const emoji = reaction.emoji;
  channelId(stateFromStores1[10]);
  if (!isEmojiPack) {
    const id = emoji.id;
  }
  if (!isEmojiPack) {
    isEmojiPack = tmp7 === EmojiSourceDataTypes.PACK;
  }
  const DeveloperMode = tmp3(tmp4[11]).DeveloperMode;
  let tidaWebformEnabled = DeveloperMode.useSetting();
  let obj = messageId(stateFromStores1[12]);
  const items = [SelectedGuildStore];
  const stateFromStores = channelId(stateFromStores1[13]).useStateFromStores(items, () => guildId.getGuildId());
  const tmp3Result = channelId(stateFromStores1[13]);
  const items1 = [EmojiStore];
  const items2 = [emoji.id];
  stateFromStores1 = channelId(stateFromStores1[13]).useStateFromStores(items1, () => {
    let customEmojiById = null;
    if (null != emoji.id) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
    }
    return customEmojiById;
  }, items2);
  const tmp3Result4 = channelId(stateFromStores1[13]);
  isFavoriteEmoji = channelId(stateFromStores1[14]).useIsFavoriteEmoji(stateFromStores, stateFromStores1);
  const tmp3Result5 = channelId(stateFromStores1[14]);
  const items3 = [callback];
  const stateFromStores2 = channelId(stateFromStores1[13]).useStateFromStores(items3, () => callback.useReducedMotion);
  const AnimateEmoji = tmp3(tmp4[11]).AnimateEmoji;
  emojiURL = undefined;
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
      animated = tmp14;
    }
    obj2.animated = animated;
    emojiURL = tmp9(tmp4[15]).getEmojiURL(obj2);
    const tmp9Result = tmp9(tmp4[15]);
  }
  callback = isFavoriteEmoji.useCallback(() => {
    messageId(stateFromStores1[16]).hideActionSheet();
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
  let obj3 = { children: null };
  let obj4 = { style: tmp.header, children: null };
  let obj5 = { style: tmp.reactionPill, children: null };
  const items8 = [closure_11(messageId(stateFromStores1[26]), { src: emojiURL, name: str, textEmojiStyle: tmp.emojiText, fastImageStyle: tmp.emoji }), closure_11(channelId(stateFromStores1[27]).Text, { variant: "text-lg/bold", color: "text-default", style: tmp.reactionText, children: reaction.burst_count > 0 ? reaction.burst_count : reaction.count })];
  obj5.children = items8;
  const items9 = [closure_12(emojiURL, obj5), ];
  const Text = tmp3(tmp4[27]).Text;
  const obj9 = { variant: "text-lg/semibold", color: "text-default", children: null };
  if (isEmojiPack) {
    let combined = str;
    if (tmp2) {
      const _HermesInternal2 = HermesInternal;
      combined = ":" + str + ":";
    }
    obj9.children = combined;
    items9[1] = closure_11(Text, obj9);
    obj4.children = items9;
    const items10 = [closure_12(tmp23, obj4), , ];
    const obj10 = { variant: "text-md/normal", color: "text-subtle", style: tmp.packDescription, children: null };
    const intl5 = tmp3(tmp4[19]).intl;
    const obj11 = { helpdeskArticle: tmp9(tmp4[29]).getArticleURL(HelpdeskArticles.NITRO_EMOJI_PACKS) };
    obj10.children = intl5.format(tmp9(tmp4[28])["/jdd/7"], obj11);
    items10[1] = closure_11(tmp3(tmp4[27]).Text, obj10);
    if (canRemoveReactions) {
      const obj12 = { hasIcons: false, children: null };
      const obj13 = { label: null, onPress: null };
      const obj14 = { variant: "text-md/semibold", color: "text-feedback-critical", children: null };
      const intl6 = tmp3(tmp4[19]).intl;
      obj14.children = intl6.string(tmp3(tmp4[19]).t["zx/e4P"]);
      obj13.label = closure_11(tmp3(tmp4[27]).Text, obj14);
      obj13.onPress = callback4;
      obj12.children = closure_11(tmp3(tmp4[31]).TableRow, obj13);
      canRemoveReactions = closure_11(tmp3(tmp4[30]).TableRowGroup, obj12);
    }
    items10[2] = canRemoveReactions;
    obj3.children = items10;
    let tmp32 = obj3;
    const tmp9Result2 = tmp9(tmp4[29]);
  } else {
    let combined1 = str;
    if (tmp2) {
      const _HermesInternal = HermesInternal;
      combined1 = ":" + str + ":";
    }
    obj9.children = combined1;
    items9[1] = closure_11(Text, obj9);
    obj4.children = items9;
    const items11 = [closure_12(tmp23, obj4), ];
    let tmp27 = tmp2;
    if (tmp2) {
      tmp27 = null != stateFromStores1;
    }
    if (!tmp27) {
      const items12 = [tmp27, , , ];
      let tmp24Result = tidaWebformEnabled;
      if (tidaWebformEnabled) {
        tmp24Result = tmp2;
      }
      if (tmp24Result) {
        const obj15 = { label: null, onPress: null };
        let intl2 = tmp3(tmp4[19]).intl;
        obj15.label = intl2.string(tmp3(tmp4[19]).t.Ap2oVy);
        obj15.onPress = callback2;
        tmp24Result = closure_11(tmp3(tmp4[31]).TableRow, obj15);
      }
      items12[1] = tmp24Result;
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
        const obj16 = { label: null, onPress: null };
        const intl3 = tmp3(tmp4[19]).intl;
        obj16.label = intl3.string(tmp3(tmp4[19]).t.cIoudn);
        obj16.onPress = callback3;
        tidaWebformEnabled = closure_11(tmp3(tmp4[31]).TableRow, obj16);
      }
      items12[2] = tidaWebformEnabled;
      let tmp24Result3 = canRemoveReactions;
      if (canRemoveReactions) {
        const obj17 = { label: null, onPress: null };
        const obj18 = { variant: "text-md/semibold", color: "text-feedback-critical", children: null };
        const intl4 = tmp3(tmp4[19]).intl;
        obj18.children = intl4.string(tmp3(tmp4[19]).t["zx/e4P"]);
        obj17.label = closure_11(tmp3(tmp4[27]).Text, obj18);
        obj17.onPress = callback4;
        tmp24Result3 = closure_11(tmp3(tmp4[31]).TableRow, obj17);
      }
      const obj19 = { hasIcons: false, children: null };
      items12[3] = tmp24Result3;
      obj19.children = items12;
      items11[1] = closure_12(tmp3(tmp4[30]).TableRowGroup, obj19);
      obj3.children = items11;
      tmp32 = obj3;
    } else {
      let intl = tmp3(tmp4[19]).intl;
      const string = intl.string;
      let t = tmp3(tmp4[19]).t;
      if (isFavoriteEmoji) {
        let stringResult = string(t.Ay49KA);
      } else {
        stringResult = string(t.nNsr67);
      }
      t = { label: stringResult, onPress: callback1 };
      closure_11(tmp3(tmp4[31]).TableRow, t);
    }
  }
  return closure_12(channelId(stateFromStores1[25]).ActionSheet, tmp32);
};