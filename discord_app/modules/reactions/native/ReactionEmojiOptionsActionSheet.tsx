// === Module 9955: ReactionEmojiOptionsActionSheet ===

// Module 9955 (ReactionEmojiOptionsActionSheet)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import ToastUtils from "ToastUtils" /* 5648 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5649 */;
import ClipboardUtils from "ClipboardUtils" /* 7269 */;
import ReactionActionCreatorsAll from "ReactionActionCreators" /* 8271 */;
import EmojiActionCreators from "EmojiActionCreators" /* 9913 */;
import StarOutlineIcon from "StarOutlineIcon" /* 9917 */;
import StarIcon from "StarIcon" /* 9919 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4970 */;
import EmojiStore from "EmojiStore" /* 6711 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4995 */;

require = fn;
const View = fn(17).View;
const EmojiSourceDataTypes = fn(6870).EmojiSourceDataTypes;
const HelpdeskArticles = fn(1087).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4969);
let obj2 = { header: { alignItems: "center", paddingTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_16 }, reactionPill: null, emoji: null, emojiText: null, reactionText: null, packDescription: null };
let obj3 = { alignItems: "center", paddingTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_16 };
obj2.reactionPill = { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.xl, borderWidth: 4, borderColor: nativeDefault.colors.BORDER_STRONG, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj2.emoji = { width: 50, height: 50 };
obj2.emojiText = { fontSize: 24, lineHeight: 50, textAlign: "center" };
obj2.reactionText = { fontSize: 24, lineHeight: 50 };
let obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.xl, borderWidth: 4, borderColor: nativeDefault.colors.BORDER_STRONG, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj2.packDescription = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24 };
let closure_13 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/reactions/native/ReactionEmojiOptionsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ReactionEmojiOptionsActionSheet(channelId) {
  const cResult = channelId(stateFromStores1[11]).c(101);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ reaction, canRemoveReactions, isEmojiPack } = channelId);
  let tmp4 = undefined !== isEmojiPack && isEmojiPack;
  closure_13();
  const emoji = reaction.emoji;
  let tmp6;
  if (!tmp4) {
    const id = emoji.id;
    tmp6 = id;
  }
  if (cResult[0] !== tmp6) {
    let obj2 = { emojiId: tmp6, skipKnownGuildEmojiFetch: true };
    cResult[0] = tmp6;
    cResult[1] = obj2;
  }
  channelId(stateFromStores1[12]);
  if (!tmp4) {
    tmp4 = tmp9 === EmojiSourceDataTypes.PACK;
  }
  const DeveloperMode = tmp(tmp2[13]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { location: "ReactionEmojiOptionsActionSheet" };
    let obj4 = { autoTrackExposure: false };
    cResult[2] = obj3;
    cResult[3] = obj4;
    let tmp13 = obj4;
    let tmp12 = obj3;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  let obj = channelId(stateFromStores1[11]);
  const tidaWebformEnabled = messageId(stateFromStores1[14]).useExperiment(tmp12, tmp13).tidaWebformEnabled;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    class F {
      constructor() {
        return closure_1_9.getGuildId();
      }
    }
    cResult[4] = items;
    cResult[5] = F;
    let tmp15 = F;
    let tmp14 = items;
  } else {
    tmp14 = cResult[4];
    tmp15 = cResult[5];
  }
  let obj5 = messageId(stateFromStores1[14]);
  const stateFromStores = channelId(stateFromStores1[15]).useStateFromStores(tmp14, tmp15);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [EmojiStore];
    class F {
      constructor() {
        return closure_1_9.getGuildId();
      }
    }
    cResult[6] = items1;
    let tmp18 = items1;
  } else {
    tmp18 = cResult[6];
  }
  if (cResult[7] !== emoji.id) {
    class K {
      constructor() {
        customEmojiById = null;
        if (null != emoji.id) {
          tmp3 = closure_7;
          customEmojiById = closure_7.getCustomEmojiById(tmp.id);
        }
        return customEmojiById;
      }
    }
    const items2 = [emoji.id];
    class F {
      constructor() {
        return closure_1_9.getGuildId();
      }
    }
    cResult[7] = emoji.id;
    cResult[8] = items2;
    cResult[9] = K;
    let tmp21 = K;
    const tmp20 = items2;
  } else {
    class K {
      constructor() {
        customEmojiById = null;
        if (null != emoji.id) {
          tmp3 = closure_7;
          customEmojiById = closure_7.getCustomEmojiById(tmp.id);
        }
        return customEmojiById;
      }
    }
    tmp21 = cResult[9];
  }
  const tmpResult5 = channelId(stateFromStores1[15]);
  stateFromStores1 = channelId(stateFromStores1[15]).useStateFromStores(tmp18, tmp21, tmp20);
  const tmpResult6 = channelId(stateFromStores1[15]);
  const isFavoriteEmoji = channelId(stateFromStores1[16]).useIsFavoriteEmoji(stateFromStores, stateFromStores1);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class K {
      constructor() {
        customEmojiById = null;
        if (null != emoji.id) {
          tmp3 = closure_7;
          customEmojiById = closure_7.getCustomEmojiById(tmp.id);
        }
        return customEmojiById;
      }
    }
    const items3 = [AccessibilityStore];
    class U {
      constructor() {
        return closure_6.useReducedMotion;
      }
    }
    cResult[10] = items3;
    cResult[11] = U;
    let tmp25 = U;
    const tmp24 = items3;
  } else {
    class K {
      constructor() {
        customEmojiById = null;
        if (null != emoji.id) {
          tmp3 = closure_7;
          customEmojiById = closure_7.getCustomEmojiById(tmp.id);
        }
        return customEmojiById;
      }
    }
    tmp25 = cResult[11];
  }
  const tmpResult7 = channelId(stateFromStores1[16]);
  const stateFromStores2 = channelId(stateFromStores1[15]).useStateFromStores(tmp24, tmp25);
  const AnimateEmoji = tmp(tmp2[13]).AnimateEmoji;
  if (!stateFromStores2) {
    class K {
      constructor() {
        customEmojiById = null;
        if (null != emoji.id) {
          tmp3 = closure_7;
          customEmojiById = closure_7.getCustomEmojiById(tmp.id);
        }
        return customEmojiById;
      }
    }
  }
  if (cResult[12] === emoji.animated) {
    class K {
      constructor() {
        customEmojiById = null;
        if (null != emoji.id) {
          tmp3 = closure_7;
          customEmojiById = closure_7.getCustomEmojiById(tmp.id);
        }
        return customEmojiById;
      }
    }
  }
  let emojiURL;
  if (null != emoji.id) {
    class K {
      constructor() {
        customEmojiById = null;
        if (null != emoji.id) {
          tmp3 = closure_7;
          customEmojiById = closure_7.getCustomEmojiById(tmp.id);
        }
        return customEmojiById;
      }
    }
    const obj6 = { id: emoji.id, animated: null, size: 96 };
    class U {
      constructor() {
        return closure_6.useReducedMotion;
      }
    }
    if (tmp29 == null) {
      class K {
        constructor() {
          customEmojiById = null;
          if (null != emoji.id) {
            tmp3 = closure_7;
            customEmojiById = closure_7.getCustomEmojiById(tmp.id);
          }
          return customEmojiById;
        }
      }
    }
    if (tmp29) {
      class K {
        constructor() {
          customEmojiById = null;
          if (null != emoji.id) {
            tmp3 = closure_7;
            customEmojiById = closure_7.getCustomEmojiById(tmp.id);
          }
          return customEmojiById;
        }
      }
    }
    obj6.animated = tmp29;
    emojiURL = obj10.getEmojiURL(obj6);
  }
  cResult[12] = emoji.animated;
  cResult[13] = emoji.id;
  cResult[14] = !stateFromStores2;
  cResult[15] = emojiURL;
  const tmp27 = !stateFromStores2;
  const tmpResult8 = channelId(stateFromStores1[15]);
}) : (function ReactionEmojiOptionsActionSheet(channelId) {
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
  channelId(stateFromStores1[12]);
  if (!isEmojiPack) {
    const id = emoji.id;
  }
  if (!isEmojiPack) {
    isEmojiPack = tmp7 === EmojiSourceDataTypes.PACK;
  }
  const DeveloperMode = tmp3(tmp4[13]).DeveloperMode;
  let tidaWebformEnabled = DeveloperMode.useSetting();
  let obj = messageId(stateFromStores1[14]);
  const items = [SelectedGuildStore];
  const stateFromStores = channelId(stateFromStores1[15]).useStateFromStores(items, () => guildId.getGuildId());
  const tmp3Result = channelId(stateFromStores1[15]);
  const items1 = [EmojiStore];
  const items2 = [emoji.id];
  stateFromStores1 = channelId(stateFromStores1[15]).useStateFromStores(items1, () => {
    let customEmojiById = null;
    if (null != emoji.id) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
    }
    return customEmojiById;
  }, items2);
  const tmp3Result4 = channelId(stateFromStores1[15]);
  isFavoriteEmoji = channelId(stateFromStores1[16]).useIsFavoriteEmoji(stateFromStores, stateFromStores1);
  const tmp3Result5 = channelId(stateFromStores1[16]);
  const items3 = [callback];
  const stateFromStores2 = channelId(stateFromStores1[15]).useStateFromStores(items3, () => callback.useReducedMotion);
  const AnimateEmoji = tmp3(tmp4[13]).AnimateEmoji;
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
    emojiURL = tmp9(tmp4[17]).getEmojiURL(obj2);
    const tmp9Result = tmp9(tmp4[17]);
  }
  callback = isFavoriteEmoji.useCallback(() => {
    messageId(stateFromStores1[18]).hideActionSheet();
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
  const items8 = [closure_11(messageId(stateFromStores1[27]), { src: emojiURL, name: str, textEmojiStyle: tmp.emojiText, fastImageStyle: tmp.emoji }), closure_11(channelId(stateFromStores1[28]).Text, { variant: "text-lg/bold", color: "text-default", style: tmp.reactionText, children: reaction.burst_count > 0 ? reaction.burst_count : reaction.count })];
  obj5.children = items8;
  const items9 = [closure_12(emojiURL, obj5), ];
  const Text = tmp3(tmp4[28]).Text;
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
    const intl5 = tmp3(tmp4[21]).intl;
    const obj11 = { helpdeskArticle: tmp9(tmp4[30]).getArticleURL(HelpdeskArticles.NITRO_EMOJI_PACKS) };
    obj10.children = intl5.format(tmp9(tmp4[29])["/jdd/7"], obj11);
    items10[1] = closure_11(tmp3(tmp4[28]).Text, obj10);
    if (canRemoveReactions) {
      const obj12 = { hasIcons: false, children: null };
      const obj13 = { label: null, onPress: null };
      const obj14 = { variant: "text-md/semibold", color: "text-feedback-critical", children: null };
      const intl6 = tmp3(tmp4[21]).intl;
      obj14.children = intl6.string(tmp3(tmp4[21]).t["zx/e4P"]);
      obj13.label = closure_11(tmp3(tmp4[28]).Text, obj14);
      obj13.onPress = callback4;
      obj12.children = closure_11(tmp3(tmp4[32]).TableRow, obj13);
      canRemoveReactions = closure_11(tmp3(tmp4[31]).TableRowGroup, obj12);
    }
    items10[2] = canRemoveReactions;
    obj3.children = items10;
    let tmp32 = obj3;
    const tmp9Result2 = tmp9(tmp4[30]);
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
        let intl2 = tmp3(tmp4[21]).intl;
        obj15.label = intl2.string(tmp3(tmp4[21]).t.Ap2oVy);
        obj15.onPress = callback2;
        tmp24Result = closure_11(tmp3(tmp4[32]).TableRow, obj15);
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
        const intl3 = tmp3(tmp4[21]).intl;
        obj16.label = intl3.string(tmp3(tmp4[21]).t.cIoudn);
        obj16.onPress = callback3;
        tidaWebformEnabled = closure_11(tmp3(tmp4[32]).TableRow, obj16);
      }
      items12[2] = tidaWebformEnabled;
      let tmp24Result3 = canRemoveReactions;
      if (canRemoveReactions) {
        const obj17 = { label: null, onPress: null };
        const obj18 = { variant: "text-md/semibold", color: "text-feedback-critical", children: null };
        const intl4 = tmp3(tmp4[21]).intl;
        obj18.children = intl4.string(tmp3(tmp4[21]).t["zx/e4P"]);
        obj17.label = closure_11(tmp3(tmp4[28]).Text, obj18);
        obj17.onPress = callback4;
        tmp24Result3 = closure_11(tmp3(tmp4[32]).TableRow, obj17);
      }
      const obj19 = { hasIcons: false, children: null };
      items12[3] = tmp24Result3;
      obj19.children = items12;
      items11[1] = closure_12(tmp3(tmp4[31]).TableRowGroup, obj19);
      obj3.children = items11;
      tmp32 = obj3;
    } else {
      let intl = tmp3(tmp4[21]).intl;
      const string = intl.string;
      let t = tmp3(tmp4[21]).t;
      if (isFavoriteEmoji) {
        let stringResult = string(t.Ay49KA);
      } else {
        stringResult = string(t.nNsr67);
      }
      t = { label: stringResult, onPress: callback1 };
      closure_11(tmp3(tmp4[32]).TableRow, t);
    }
  }
  return closure_12(channelId(stateFromStores1[33]).ActionSheet, tmp32);
});