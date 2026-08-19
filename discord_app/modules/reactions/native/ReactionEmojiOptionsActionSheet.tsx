// discord_app/modules/reactions/native/ReactionEmojiOptionsActionSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../a11y/AccessibilityStore.tsx";
import getEmojiToGroupId from "../../emojis/EmojiStore.tsx";
import handleConnectionOpen from "../../../stores/SelectedGuildStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ jsx: c9, jsxs: c10 } = jsxProd);
const createCacheKey = { alignItems: "center", paddingTop: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: ThemesDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, borderRadius: ThemesDefault.radii.xl, borderWidth: 4, borderColor: ThemesDefault.colors.BORDER_STRONG, paddingVertical: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_8 };
createCacheKey[2] = { width: 50, height: 50 };
createCacheKey[3] = { fontSize: 24, lineHeight: 50, textAlign: "center" };
createCacheKey[4] = { fontSize: 24, lineHeight: 50 };
createCacheKey[5] = { height: 24, width: 24 };
createCacheKey[6] = { tintColor: ThemesDefault.colors.ICON_FEEDBACK_WARNING };
createCacheKey[7] = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/reactions/native/ReactionEmojiOptionsActionSheet.tsx");

export default function ReactionEmojiOptionsActionSheet(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ reaction, canRemoveReactions } = channelId);
  let emojiURL;
  let callback;
  let callback1;
  const tmp = callback3();
  closure_2 = tmp;
  const emoji = reaction.emoji;
  const DeveloperMode = channelId(emoji[8]).DeveloperMode;
  let tidaWebformEnabled = DeveloperMode.useSetting();
  let obj = messageId(emoji[9]);
  obj1 = channelId(emoji[10]);
  const items = [callback1];
  const stateFromStores = obj1.useStateFromStores(items, () => callback1.getGuildId());
  let obj2 = channelId(emoji[10]);
  const items1 = [callback];
  const items2 = [emoji.id];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let customEmojiById = null;
    if (null != emoji.id) {
      customEmojiById = callback.getCustomEmojiById(tmp.id);
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
    ({ id: obj7[0], animated } = emoji);
    if (animated == null) {
      animated = false;
    }
    if (animated) {
      animated = !stateFromStores2;
    }
    if (animated) {
      animated = tmp10;
    }
    obj[1] = animated;
    emojiURL = tmp5(tmp4[12]).getEmojiURL(obj);
    const tmp5Result = tmp5(tmp4[12]);
  }
  callback = stateFromStores1.useCallback(() => {
    messageId(emoji[13]).hideActionSheet();
  }, []);
  const items4 = [tmp];
  callback1 = stateFromStores1.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(lib.starIcon);
    if (arg0) {
      const merged1 = Object.assign(lib.starIconSelected);
      let style = obj;
    } else {
      const merged2 = Object.assign(lib.starIconUnselected);
      style = obj;
    }
    if (arg0) {
      let StarOutlineIcon = channelId(emoji[14]).StarIcon;
    } else {
      StarOutlineIcon = channelId(emoji[15]).StarOutlineIcon;
    }
    return closure_1_9(StarOutlineIcon, { style });
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
        if (closure_5) {
          let stringResult = string(t.in1rga);
        } else {
          stringResult = string(t.mE2e8A);
        }
        obj[2] = stringResult;
        return closure_1_9(channelId(emoji[16]).Text, obj);
      }
      const obj5 = channelId(emoji[18]);
      if (isFavoriteEmoji) {
        obj5.unfavoriteEmoji(stateFromStores1);
        let obj = { key: "EMOJI_UNFAVORITED", icon: null, content: null };
        obj[1] = function icon() {
          return callback(false);
        };
        obj[2] = content;
        messageId(emoji[19]).open(obj);
        const obj3 = messageId(emoji[19]);
      } else {
        obj5.favoriteEmoji(stateFromStores1);
        messageId(emoji[19]);
        obj = { key: "EMOJI_FAVORITED", icon: null, content: null };
        obj[1] = function icon() {
          return callback(true);
        };
        obj[2] = content;
        obj.open(obj);
      }
    }
  }, items5);
  const items7 = [emojiURL, callback];
  callback3 = stateFromStores1.useCallback(() => {
    if (null != emoji.id) {
      channelId(emoji[20]).copy(tmp.id);
      const obj = channelId(emoji[20]);
      const result = channelId(emoji[21]).presentCopiedToClipboard();
      callback();
      const obj2 = channelId(emoji[21]);
    }
  }, items6);
  const items8 = [channelId, messageId, emoji, callback];
  const callback4 = stateFromStores1.useCallback(() => {
    if (null != emojiURL) {
      channelId(emoji[20]).copy(tmp);
      const obj = channelId(emoji[20]);
      const result = channelId(emoji[21]).presentCopiedToClipboard();
      callback();
      const obj2 = channelId(emoji[21]);
    }
  }, items7);
  let str = emoji.name;
  const callback5 = stateFromStores1.useCallback(() => {
    lib(emoji[22]).removeEmojiReactions(channelId, messageId, emoji);
    callback();
  }, items8);
  if (str == null) {
    str = "";
  }
  obj = { style: tmp.header, children: null };
  obj1 = { style: tmp.reactionPill, children: null };
  obj2 = { src: emojiURL, name: str, textEmojiStyle: tmp.emojiText, fastImageStyle: tmp.emoji };
  const items9 = [callback(messageId(emoji[24]), obj2), ];
  obj3 = { variant: "text-lg/bold", color: "text-default", style: tmp.reactionText, children: reaction.burst_count > 0 ? reaction.burst_count : reaction.count };
  items9[1] = callback(channelId(emoji[16]).Text, obj3);
  obj1[1] = items9;
  const items10 = [callback2(isFavoriteEmoji, obj1), ];
  let combined = str;
  if (null != emoji.id) {
    const _HermesInternal = HermesInternal;
    combined = ":" + str + ":";
  }
  items10[1] = callback(channelId(emoji[16]).Text, { variant: "text-lg/semibold", color: "text-default", children: combined });
  obj[1] = items10;
  const items11 = [callback2(isFavoriteEmoji, obj), ];
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
      obj4[0] = intl2.string(tmp3(tmp4[17]).t.Ap2oVy);
      obj4[1] = callback3;
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
      obj5[0] = intl3.string(tmp3(tmp4[17]).t.cIoudn);
      obj5[1] = callback4;
      tidaWebformEnabled = tmp21(tmp3(tmp4[26]).TableRow, obj5);
    }
    items12[2] = tidaWebformEnabled;
    if (canRemoveReactions) {
      const obj6 = { label: null, onPress: null };
      const obj7 = { variant: "text-md/semibold", color: "text-feedback-critical", children: null };
      const intl4 = tmp3(tmp4[17]).intl;
      obj7[2] = intl4.string(tmp3(tmp4[17]).t["zx/e4P"]);
      obj6[0] = tmp21(tmp3(tmp4[16]).Text, obj7);
      obj6[1] = callback5;
      canRemoveReactions = tmp21(tmp3(tmp4[26]).TableRow, obj6);
    }
    const obj8 = { children: null };
    const obj9 = { hasIcons: false, children: null };
    items12[3] = canRemoveReactions;
    obj9[1] = items12;
    items11[1] = tmp19(tmp3(tmp4[25]).TableRowGroup, obj9);
    obj8[0] = items11;
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
    t = { label: null, onPress: null };
    t[0] = stringResult;
    t[1] = callback2;
    tmp21Result = tmp21(tmp3(tmp4[26]).TableRow, t);
  }
};