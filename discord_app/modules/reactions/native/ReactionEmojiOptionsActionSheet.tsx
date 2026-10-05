// discord_app/modules/reactions/native/ReactionEmojiOptionsActionSheet.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../intl/index.native.tsx";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import DesignSystemsNotificationComponentsExperiment from "../../design/DesignSystemsNotificationComponentsExperiment.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import ReactionActionCreatorsAll from "../ReactionActionCreators.tsx";
import EmojiActionCreators from "../../../actions/EmojiActionCreators.tsx";
import StarIcon from "../../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import StarOutlineIcon2 from "../../../design/components/Icon/native/redesign/generated/StarOutlineIcon.tsx";
import react from "../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let channelId;

let c10;
let c9;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  header: obj2,
  reactionPill: obj3,
  emoji: { width: 50, height: 50 },
  emojiText: { fontSize: 24, lineHeight: 50, textAlign: "center" },
  reactionText: { fontSize: 24, lineHeight: 50 },
  starIcon: { height: 24, width: 24 },
  starIconSelected: obj4,
  starIconUnselected: obj5,
};
obj2 = { alignItems: "center", paddingTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = {
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
obj4 = { tintColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
obj5 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_11 = createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let canRemoveReactions;
      let emoji;
      let guildId;
      let reaction;
      let tmp12;
      let tmp15;
      let tmp18;
      let tmp19;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      let useReducedMotion;
      const tmp = channelId;
      let obj = channelId(emoji[9]);
      const cResult = obj.c(75);
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      ({ reaction, canRemoveReactions } = channelId);
      const starIcon = closure_11();
      emoji = reaction.emoji;
      closure_11();
      const DeveloperMode = channelId(emoji[10]).DeveloperMode;
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
      let obj4 = messageId(tmp2[11]);
      const tidaWebformEnabled = obj4.useExperiment(tmp6, tmp7).tidaWebformEnabled;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SelectedGuildStore];
        const fn = function y() {
          return guildId.getGuildId();
        };
        cResult[2] = items;
        cResult[3] = fn;
        tmp9 = fn;
        tmp8 = items;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = tmp(emoji[12]);
      const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [EmojiStore];
        cResult[4] = items1;
        tmp12 = items1;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] !== emoji.id) {
        class O {
          constructor() {
            let customEmojiById = null;
            if (null != emoji.id) {
              customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
            }
            return customEmojiById;
          }
        }
        const items2 = [emoji.id];
        cResult[5] = emoji.id;
        cResult[6] = O;
        cResult[7] = items2;
        tmp15 = items2;
      } else {
        class O {
          constructor() {
            let customEmojiById = null;
            if (null != emoji.id) {
              customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
            }
            return customEmojiById;
          }
        }
        tmp15 = cResult[7];
      }
      const tmpResult4 = tmp(emoji[12]);
      const stateFromStores1 = tmpResult4.useStateFromStores(tmp12, O, tmp15);
      const tmpResult5 = tmp(emoji[13]);
      const isFavoriteEmoji = tmpResult5.useIsFavoriteEmoji(stateFromStores, stateFromStores1);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class O {
          constructor() {
            let customEmojiById = null;
            if (null != emoji.id) {
              customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
            }
            return customEmojiById;
          }
        }
        const items3 = [AccessibilityStore];
        class N {
          constructor() {
            return useReducedMotion.useReducedMotion;
          }
        }
        cResult[8] = items3;
        cResult[9] = N;
        tmp19 = N;
        tmp18 = items3;
      } else {
        class O {
          constructor() {
            let customEmojiById = null;
            if (null != emoji.id) {
              customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
            }
            return customEmojiById;
          }
        }
        tmp19 = cResult[9];
      }
      const tmpResult6 = tmp(emoji[12]);
      const stateFromStores2 = tmpResult6.useStateFromStores(tmp18, tmp19);
      const AnimateEmoji = tmp(tmp2[10]).AnimateEmoji;
      const tmp21 = !stateFromStores2 && AnimateEmoji.useSetting();
      if (cResult[10] === emoji.animated) {
        class O {
          constructor() {
            let customEmojiById = null;
            if (null != emoji.id) {
              customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
            }
            return customEmojiById;
          }
        }
      }
      let emojiURL;
      if (null != emoji.id) {
        class O {
          constructor() {
            let customEmojiById = null;
            if (null != emoji.id) {
              customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
            }
            return customEmojiById;
          }
        }
        let obj5 = { id: emoji.id, animated: tmp24, size: 96 };
        class N {
          constructor() {
            return useReducedMotion.useReducedMotion;
          }
        }
        const getEmojiURL = tmp23.getEmojiURL;
        if (tmp24 == null) {
          class O {
            constructor() {
              let customEmojiById = null;
              if (null != emoji.id) {
                customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
              }
              return customEmojiById;
            }
          }
        }
        if (tmp24) {
          class O {
            constructor() {
              let customEmojiById = null;
              if (null != emoji.id) {
                customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
              }
              return customEmojiById;
            }
          }
        }
        emojiURL = getEmojiURL(obj5);
      }
      cResult[10] = emoji.animated;
      cResult[11] = emoji.id;
      cResult[12] = tmp21;
      cResult[13] = emojiURL;
    }
  : (channelId) => {
      let Text2;
      let animated;
      let canRemoveReactions;
      let intl2;
      let intl3;
      let intl4;
      let items10;
      let items9;
      let obj16;
      let reaction;
      channelId = channelId.channelId;
      const messageId = channelId.messageId;
      ({ reaction, canRemoveReactions } = channelId);
      let emojiURL;
      let callback;
      let callback1;
      const tmp = closure_11();
      const starIcon = tmp;
      const emoji = reaction.emoji;
      const DeveloperMode = channelId(emoji[10]).DeveloperMode;
      let setting = DeveloperMode.useSetting();
      let obj = messageId(emoji[11]);
      const tidaWebformEnabled = obj.useExperiment(
        { location: "ReactionEmojiOptionsActionSheet" },
        { autoTrackExposure: false },
      ).tidaWebformEnabled;
      let obj2 = channelId(emoji[12]);
      const items = [callback1];
      const stateFromStores = obj2.useStateFromStores(items, () => callback1.getGuildId());
      let obj3 = channelId(emoji[12]);
      const items1 = [callback];
      const items2 = [emoji.id];
      const stateFromStores1 = obj3.useStateFromStores(
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
      let obj4 = channelId(emoji[13]);
      const isFavoriteEmoji = obj4.useIsFavoriteEmoji(stateFromStores, stateFromStores1);
      let obj5 = channelId(emoji[12]);
      const items3 = [emojiURL];
      const stateFromStores2 = obj5.useStateFromStores(items3, () => emojiURL.useReducedMotion);
      const AnimateEmoji = channelId(emoji[10]).AnimateEmoji;
      emojiURL = undefined;
      if (null != emoji.id) {
        let obj7 = { id: null, animated, size: 96 };
        ({ id: obj6.id, animated } = emoji);
        const getEmojiURL = tmp6(emoji[14]).getEmojiURL;
        messageId(emoji[14]);
        if (animated == null) {
          animated = false;
        }
        if (animated) {
          animated = !stateFromStores2;
        }
        if (animated) {
          animated = tmp11;
        }
        emojiURL = getEmojiURL(obj7);
      }
      const tmp14 = reaction.burst_count > 0 ? reaction.burst_count : reaction.count;
      callback = stateFromStores1.useCallback(() => {
        const obj = messageId(emoji[15]);
        obj.hideActionSheet();
      }, []);
      const items4 = [tmp];
      callback1 = stateFromStores1.useCallback((arg0) => {
        let StarOutlineIcon;
        let style;
        const obj = {};
        const merged = Object.assign(starIcon.starIcon);
        if (arg0) {
          const merged1 = Object.assign(starIcon.starIconSelected);
          style = obj;
        } else {
          const merged2 = Object.assign(starIcon.starIconUnselected);
          style = obj;
        }
        if (arg0) {
          StarOutlineIcon = StarIcon.StarIcon;
        } else {
          StarOutlineIcon = StarOutlineIcon2.StarOutlineIcon;
        }
        return React4(StarOutlineIcon, { style });
      }, items4);
      const items5 = [callback, stateFromStores1, isFavoriteEmoji, callback1];
      const items6 = [emoji.id, callback];
      const callback2 = stateFromStores1.useCallback(() => {
        let intl;
        let intl2;
        callback();
        if (null != stateFromStores1) {
          function content() {
            let stringResult;
            const obj = { style: { marginLeft: 8, marginTop: 2 }, variant: "text-md/bold", children: stringResult };
            const Text = channelId(emoji[18]).Text;
            const intl = channelId(emoji[19]).intl;
            const string = intl.string;
            const t = channelId(emoji[19]).t;
            if (isFavoriteEmoji) {
              stringResult = string(t.in1rga);
            } else {
              stringResult = string(t.mE2e8A);
            }
            return closure_2_9(Text, obj);
          }
          const obj7 = DesignSystemsNotificationComponentsExperiment;
          const designSystemsNotificationComponents = obj7.getDesignSystemsNotificationComponents(
            "ReactionEmojiOptionsActionSheet",
          );
          const obj8 = EmojiActionCreators;
          if (isFavoriteEmoji) {
            obj8.unfavoriteEmoji(stateFromStores1);
            const obj4 = ToastActionCreatorsDefault;
            if (designSystemsNotificationComponents) {
              const openMana2 = obj4.openMana;
              const obj2 = { text: intl2.string(intl5.t.in1rga), icon: StarOutlineIcon2.StarOutlineIcon };
              intl2 = intl5.intl;
              openMana2("EMOJI_UNFAVORITED", obj2);
            } else {
              const obj3 = {
                key: "EMOJI_UNFAVORITED",
                icon() {
                  return callback1(false);
                },
                content,
              };
              obj4.open(obj3);
            }
          } else {
            obj8.favoriteEmoji(stateFromStores1);
            let obj = ToastActionCreatorsDefault;
            if (designSystemsNotificationComponents) {
              const openMana = obj.openMana;
              const obj5 = {
                text: intl.string(intl5.t.mE2e8A),
                icon: StarIcon.StarIcon,
                iconColor: nativeDefault.colors.ICON_FEEDBACK_WARNING,
              };
              intl = intl5.intl;
              openMana("EMOJI_FAVORITED", obj5);
            } else {
              const obj6 = {
                key: "EMOJI_FAVORITED",
                icon() {
                  return callback1(true);
                },
                content,
              };
              obj.open(obj6);
            }
          }
        }
      }, items5);
      const items7 = [emojiURL, callback];
      const callback3 = stateFromStores1.useCallback(() => {
        if (null != emoji.id) {
          const obj = ClipboardUtils;
          obj.copy(tmp.id);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
          callback();
        }
      }, items6);
      const items8 = [channelId, messageId, emoji, callback];
      const callback4 = stateFromStores1.useCallback(() => {
        if (null != emojiURL) {
          const obj = ClipboardUtils;
          obj.copy(tmp);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
          callback();
        }
      }, items7);
      let str = emoji.name;
      const callback5 = stateFromStores1.useCallback(() => {
        const obj = ReactionActionCreatorsAll;
        obj.removeEmojiReactions(channelId, messageId, emoji);
        callback();
      }, items8);
      if (str == null) {
        str = "";
      }
      let obj8 = { style: tmp.header, children: items10 };
      const obj9 = { style: tmp.reactionPill, children: items9 };
      const ActionSheet = tmp3(tmp4[29]).ActionSheet;
      items9 = [,];
      const obj10 = { src: emojiURL, name: str, textEmojiStyle: tmp.emojiText, fastImageStyle: tmp.emoji };
      items9[0] = closure_9(messageId(emoji[26]), obj10);
      const obj11 = { variant: "text-lg/bold", color: "text-default", style: tmp.reactionText, children: tmp14 };
      items9[1] = closure_9(channelId(emoji[18]).Text, obj11);
      items10 = [closure_10(isFavoriteEmoji, obj9)];
      let combined = str;
      let Text = tmp3(tmp4[18]).Text;
      const tmp22 = isFavoriteEmoji;
      if (null != emoji.id) {
        const _HermesInternal = HermesInternal;
        combined = ":" + str + ":";
      }
      items10[1] = closure_9(Text, { variant: "text-lg/semibold", color: "text-default", children: combined });
      const items11 = [closure_10(tmp22, obj8)];
      let tmp23Result = tmp2;
      const TableRowGroup = tmp3(tmp4[28]).TableRowGroup;
      if (null != emoji.id) {
        tmp23Result = null != stateFromStores1;
      }
      if (tmp23Result) {
        let stringResult;
        const TableRow = tmp3(tmp4[27]).TableRow;
        let intl = tmp3(tmp4[19]).intl;
        let string = intl.string;
        let t = tmp3(tmp4[19]).t;
        if (isFavoriteEmoji) {
          stringResult = string(t.Ay49KA);
        } else {
          stringResult = string(t.nNsr67);
        }
        const obj12 = { label: stringResult, onPress: callback2 };
        tmp23Result = closure_9(TableRow, obj12);
      }
      const items12 = [tmp23Result, , ,];
      let tmp23Result2 = setting && tmp2;
      if (tmp23Result2) {
        const obj13 = { label: intl2.string(channelId(emoji[19]).t.Ap2oVy), onPress: callback3 };
        const TableRow2 = tmp3(tmp4[27]).TableRow;
        intl2 = tmp3(tmp4[19]).intl;
        tmp23Result2 = closure_9(TableRow2, obj13);
      }
      items12[1] = tmp23Result2;
      if (setting) {
        setting = tidaWebformEnabled;
      }
      if (setting) {
        setting = tmp2;
      }
      if (setting) {
        setting = null != emojiURL;
      }
      if (setting) {
        const obj14 = { label: intl3.string(channelId(emoji[19]).t.cIoudn), onPress: callback4 };
        const TableRow3 = tmp3(tmp4[27]).TableRow;
        intl3 = tmp3(tmp4[19]).intl;
        setting = closure_9(TableRow3, obj14);
      }
      items12[2] = setting;
      if (canRemoveReactions) {
        const obj15 = { label: closure_9(Text2, obj16), onPress: callback5 };
        const TableRow4 = tmp3(tmp4[27]).TableRow;
        obj16 = {
          variant: "text-md/semibold",
          color: "text-feedback-critical",
          children: intl4.string(channelId(emoji[19]).t["zx/e4P"]),
        };
        Text2 = tmp3(tmp4[18]).Text;
        intl4 = tmp3(tmp4[19]).intl;
        canRemoveReactions = closure_9(TableRow4, obj15);
      }
      const obj27 = { children: items11 };
      items12[3] = canRemoveReactions;
      items11[1] = closure_10(TableRowGroup, { hasIcons: false, children: items12 });
      return closure_10(ActionSheet, obj27);
    };
let result = size.fileFinishedImporting("modules/reactions/native/ReactionEmojiOptionsActionSheet.tsx");

export default tmp4;
