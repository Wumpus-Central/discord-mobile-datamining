// discord_app/modules/reactions/native/ReactionEmojiOptionsActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import ReactionActionCreatorsAll from "../ReactionActionCreators.tsx";
import EmojiActionCreators from "../../../actions/EmojiActionCreators.tsx";
import StarOutlineIcon from "../../../design/components/Icon/native/redesign/generated/StarOutlineIcon.tsx";
import StarIcon from "../../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  header: { alignItems: "center", paddingTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_16 },
  reactionPill: null,
  emoji: null,
  emojiText: null,
  reactionText: null,
};
let obj3 = { alignItems: "center", paddingTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_16 };
obj2.reactionPill = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.xl,
  borderWidth: 4,
  borderColor: nativeDefault.colors.BORDER_STRONG,
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_8,
};
obj2.emoji = { width: 50, height: 50 };
obj2.emojiText = { fontSize: 24, lineHeight: 50, textAlign: "center" };
obj2.reactionText = { fontSize: 24, lineHeight: 50 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.xl,
  borderWidth: 4,
  borderColor: nativeDefault.colors.BORDER_STRONG,
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_8,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/reactions/native/ReactionEmojiOptionsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ReactionEmojiOptionsActionSheet(channelId) {
      const cResult = channelId(stateFromStores1[9]).c(70);
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      ({ reaction, canRemoveReactions } = channelId);
      closure_11();
      const emoji = reaction.emoji;
      const DeveloperMode = channelId(stateFromStores1[10]).DeveloperMode;
      const setting = DeveloperMode.useSetting();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { location: "ReactionEmojiOptionsActionSheet" };
        let obj3 = { autoTrackExposure: false };
        cResult[0] = obj2;
        cResult[1] = obj3;
        tmp6 = obj2;
        tmp7 = obj3;
      } else {
        [tmp6, tmp7] = cResult;
      }
      let obj = channelId(stateFromStores1[9]);
      const tidaWebformEnabled = messageId(stateFromStores1[11]).useExperiment(tmp6, tmp7).tidaWebformEnabled;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SelectedGuildStore];
        const fn = function f() {
          return guildId.getGuildId();
        };
        cResult[2] = items;
        cResult[3] = fn;
        let tmp9 = fn;
        let tmp8 = items;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      let obj4 = messageId(stateFromStores1[11]);
      const stateFromStores = channelId(stateFromStores1[12]).useStateFromStores(tmp8, tmp9);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [EmojiStore];
        cResult[4] = items1;
        let tmp12 = items1;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] !== emoji.id) {
        class O {
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
        cResult[5] = emoji.id;
        cResult[6] = O;
        cResult[7] = items2;
        let tmp15 = items2;
      } else {
        class O {
          constructor() {
            customEmojiById = null;
            if (null != emoji.id) {
              tmp3 = closure_7;
              customEmojiById = closure_7.getCustomEmojiById(tmp.id);
            }
            return customEmojiById;
          }
        }
        tmp15 = cResult[7];
      }
      const tmpResult = channelId(stateFromStores1[12]);
      stateFromStores1 = channelId(stateFromStores1[12]).useStateFromStores(tmp12, O, tmp15);
      const tmpResult4 = channelId(stateFromStores1[12]);
      const isFavoriteEmoji = channelId(stateFromStores1[13]).useIsFavoriteEmoji(stateFromStores, stateFromStores1);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
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
        const fn2 = function w() {
          return AccessibilityStore.useReducedMotion;
        };
        cResult[8] = items3;
        cResult[9] = fn2;
        let tmp19 = fn2;
        const tmp18 = items3;
      } else {
        class O {
          constructor() {
            customEmojiById = null;
            if (null != emoji.id) {
              tmp3 = closure_7;
              customEmojiById = closure_7.getCustomEmojiById(tmp.id);
            }
            return customEmojiById;
          }
        }
        tmp19 = cResult[9];
      }
      const tmpResult5 = channelId(stateFromStores1[13]);
      const stateFromStores2 = channelId(stateFromStores1[12]).useStateFromStores(tmp18, tmp19);
      const AnimateEmoji = tmp(tmp2[10]).AnimateEmoji;
      if (!stateFromStores2) {
        class O {
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
      if (cResult[10] === emoji.animated) {
        class O {
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
        class O {
          constructor() {
            customEmojiById = null;
            if (null != emoji.id) {
              tmp3 = closure_7;
              customEmojiById = closure_7.getCustomEmojiById(tmp.id);
            }
            return customEmojiById;
          }
        }
        let obj5 = { id: null, animated: null, size: 96 };
        ({ id: obj10.id, animated } = emoji);
        if (animated == null) {
          class O {
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
        if (animated) {
          class O {
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
        obj5.animated = animated;
        emojiURL = obj9.getEmojiURL(obj5);
      }
      cResult[10] = emoji.animated;
      cResult[11] = emoji.id;
      cResult[12] = !stateFromStores2;
      cResult[13] = emojiURL;
      const tmp21 = !stateFromStores2;
      const tmpResult6 = channelId(stateFromStores1[12]);
    }
  : function ReactionEmojiOptionsActionSheet(channelId) {
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      ({ reaction, canRemoveReactions } = channelId);
      let stateFromStores1;
      let callback;
      const tmp = closure_11();
      const emoji = reaction.emoji;
      const DeveloperMode = channelId(stateFromStores1[10]).DeveloperMode;
      let tidaWebformEnabled = DeveloperMode.useSetting();
      let obj = messageId(stateFromStores1[11]);
      const items = [SelectedGuildStore];
      const stateFromStores = channelId(stateFromStores1[12]).useStateFromStores(items, () => guildId.getGuildId());
      let obj2 = channelId(stateFromStores1[12]);
      const items1 = [EmojiStore];
      const items2 = [emoji.id];
      stateFromStores1 = channelId(stateFromStores1[12]).useStateFromStores(
        items1,
        () => {
          let customEmojiById = null;
          if (null != emoji.id) {
            customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
          }
          return customEmojiById;
        },
        items2,
      );
      let obj3 = channelId(stateFromStores1[12]);
      const isFavoriteEmoji = channelId(stateFromStores1[13]).useIsFavoriteEmoji(stateFromStores, stateFromStores1);
      let obj4 = channelId(stateFromStores1[13]);
      const items3 = [callback];
      const stateFromStores2 = channelId(stateFromStores1[12]).useStateFromStores(
        items3,
        () => callback.useReducedMotion,
      );
      const AnimateEmoji = channelId(stateFromStores1[10]).AnimateEmoji;
      let emojiURL;
      if (null != emoji.id) {
        const obj6 = { id: null, animated: null, size: 96 };
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
        obj6.animated = animated;
        emojiURL = tmp5(tmp4[14]).getEmojiURL(obj6);
        const tmp5Result = tmp5(tmp4[14]);
      }
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
            ToastActionCreatorsDefault.openMana("EMOJI_UNFAVORITED", obj2);
          } else {
            obj5.favoriteEmoji(stateFromStores1);
            const obj4 = { text: null, icon: null, iconColor: null };
            const intl = util.intl;
            obj4.text = intl.string(util.t.mE2e8A);
            obj4.icon = StarIcon.StarIcon;
            obj4.iconColor = nativeDefault.colors.ICON_FEEDBACK_WARNING;
            ToastActionCreatorsDefault.openMana("EMOJI_FAVORITED", obj4);
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
      let str = emoji.name;
      const callback4 = isFavoriteEmoji.useCallback(() => {
        ReactionActionCreatorsAll.removeEmojiReactions(channelId, messageId, emoji);
        callback();
      }, items7);
      if (str == null) {
        str = "";
      }
      const obj8 = { style: tmp.header, children: null };
      const obj9 = { style: tmp.reactionPill, children: null };
      const items8 = [
        closure_9(messageId(stateFromStores1[24]), {
          src: emojiURL,
          name: str,
          textEmojiStyle: tmp.emojiText,
          fastImageStyle: tmp.emoji,
        }),
        closure_9(channelId(stateFromStores1[25]).Text, {
          variant: "text-lg/bold",
          color: "text-default",
          style: tmp.reactionText,
          children: reaction.burst_count > 0 ? reaction.burst_count : reaction.count,
        }),
      ];
      obj9.children = items8;
      const items9 = [closure_10(emojiURL, obj9)];
      let combined = str;
      if (null != emoji.id) {
        const _HermesInternal = HermesInternal;
        combined = ":" + str + ":";
      }
      items9[1] = closure_9(channelId(stateFromStores1[25]).Text, {
        variant: "text-lg/semibold",
        color: "text-default",
        children: combined,
      });
      obj8.children = items9;
      const items10 = [closure_10(emojiURL, obj8)];
      let tmp23 = tmp2;
      if (null != emoji.id) {
        tmp23 = null != stateFromStores1;
      }
      if (!tmp23) {
        const items11 = [tmp23, , ,];
        let tmp20Result = tidaWebformEnabled;
        if (tidaWebformEnabled) {
          tmp20Result = tmp2;
        }
        if (tmp20Result) {
          const obj12 = { label: null, onPress: null };
          let intl2 = tmp3(tmp4[18]).intl;
          obj12.label = intl2.string(tmp3(tmp4[18]).t.Ap2oVy);
          obj12.onPress = callback2;
          tmp20Result = closure_9(tmp3(tmp4[26]).TableRow, obj12);
        }
        items11[1] = tmp20Result;
        if (tidaWebformEnabled) {
          tidaWebformEnabled = obj.useExperiment(
            { location: "ReactionEmojiOptionsActionSheet" },
            { autoTrackExposure: false },
          ).tidaWebformEnabled;
        }
        if (tidaWebformEnabled) {
          tidaWebformEnabled = tmp2;
        }
        if (tidaWebformEnabled) {
          tidaWebformEnabled = null != emojiURL;
        }
        if (tidaWebformEnabled) {
          const obj13 = { label: null, onPress: null };
          const intl3 = tmp3(tmp4[18]).intl;
          obj13.label = intl3.string(tmp3(tmp4[18]).t.cIoudn);
          obj13.onPress = callback3;
          tidaWebformEnabled = closure_9(tmp3(tmp4[26]).TableRow, obj13);
        }
        items11[2] = tidaWebformEnabled;
        if (canRemoveReactions) {
          const obj14 = { label: null, onPress: null };
          const obj15 = { variant: "text-md/semibold", color: "text-feedback-critical", children: null };
          const intl4 = tmp3(tmp4[18]).intl;
          obj15.children = intl4.string(tmp3(tmp4[18]).t["zx/e4P"]);
          obj14.label = closure_9(tmp3(tmp4[25]).Text, obj15);
          obj14.onPress = callback4;
          canRemoveReactions = closure_9(tmp3(tmp4[26]).TableRow, obj14);
        }
        const obj16 = { children: null };
        const obj17 = { hasIcons: false, children: null };
        items11[3] = canRemoveReactions;
        obj17.children = items11;
        items10[1] = closure_10(tmp3(tmp4[27]).TableRowGroup, obj17);
        obj16.children = items10;
        return closure_10(tmp3(tmp4[28]).ActionSheet, obj16);
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
        closure_9(tmp3(tmp4[26]).TableRow, t);
      }
      const obj10 = { src: emojiURL, name: str, textEmojiStyle: tmp.emojiText, fastImageStyle: tmp.emoji };
      const obj11 = {
        variant: "text-lg/bold",
        color: "text-default",
        style: tmp.reactionText,
        children: reaction.burst_count > 0 ? reaction.burst_count : reaction.count,
      };
      let obj5 = channelId(stateFromStores1[12]);
      const tmp12 = reaction.burst_count > 0 ? reaction.burst_count : reaction.count;
    };
