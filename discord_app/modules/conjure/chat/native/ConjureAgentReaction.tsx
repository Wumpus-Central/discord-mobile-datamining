// === Module 12322: ConjureAgentReaction ===

// Module 12322 (ConjureAgentReaction)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import UserSettings from "UserSettings" /* 4797 */;
import EmojiDefault from "Emoji" /* 7212 */;
import conjureAgentReaction from "conjureAgentReaction" /* 10680 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4969);
let obj2 = { pill: { alignSelf: "flex-start", alignItems: "center", justifyContent: "center", marginTop: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_6, paddingVertical: 2, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE }, emoji: { width: 18, height: 18 } };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { alignSelf: "flex-start", alignItems: "center", justifyContent: "center", marginTop: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_6, paddingVertical: 2, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureAgentReaction.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAgentReaction(reaction) {
  const cResult = c.c(13);
  reaction = reaction.reaction;
  const tmp4 = closure_5();
  const AnimateEmoji = UserSettings.AnimateEmoji;
  let setting = AnimateEmoji.useSetting();
  if (setting) {
    setting = true === reaction.animated;
  }
  if (cResult[0] === setting) {
    if (cResult[1] === reaction.emojiId) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] !== reaction) {
      const conjureAgentReactionLabel = conjureAgentReaction.getConjureAgentReactionLabel(reaction);
      cResult[3] = reaction;
      cResult[4] = conjureAgentReactionLabel;
      let tmp9 = conjureAgentReactionLabel;
      const tmpResult = conjureAgentReaction;
    } else {
      tmp9 = cResult[4];
    }
    if (cResult[5] === reaction.emoji) {
      if (cResult[6] === tmp6) {
        if (cResult[7] === tmp4.emoji) {
          let tmp11 = cResult[8];
        }
        if (cResult[9] === tmp4.pill) {
          if (cResult[10] === tmp9) {
            if (cResult[11] === tmp11) {
              let tmp15 = cResult[12];
            }
            return tmp15;
          }
        }
        const obj3 = { style: tmp4.pill, accessible: true, accessibilityRole: "image", accessibilityLabel: tmp9, children: tmp11 };
        const tmp18 = <View style={tmp4.pill} accessible accessibilityRole="image" accessibilityLabel={tmp9}>{tmp11}</View>;
        cResult[9] = tmp4.pill;
        cResult[10] = tmp9;
        cResult[11] = tmp11;
        cResult[12] = tmp18;
        tmp15 = tmp18;
      }
    }
    const obj4 = { src: tmp6, name: reaction.emoji, fastImageStyle: tmp4.emoji };
    const tmp14 = jsx(EmojiDefault, { src: tmp6, name: reaction.emoji, fastImageStyle: tmp4.emoji });
    cResult[5] = reaction.emoji;
    cResult[6] = tmp6;
    cResult[7] = tmp4.emoji;
    cResult[8] = tmp14;
    tmp11 = tmp14;
  }
  let emojiURL;
  if (null != reaction.emojiId) {
    const obj5 = { id: reaction.emojiId, animated: setting, size: 18 };
    emojiURL = AvatarUtilsDefault.getEmojiURL(obj5);
  }
  cResult[0] = setting;
  cResult[1] = reaction.emojiId;
  cResult[2] = emojiURL;
  tmp6 = emojiURL;
}) : (function ConjureAgentReaction(reaction) {
  reaction = reaction.reaction;
  const tmp = closure_5();
  const AnimateEmoji = UserSettings.AnimateEmoji;
  let setting = AnimateEmoji.useSetting();
  if (setting) {
    setting = true === reaction.animated;
  }
  let emojiURL;
  if (null != reaction.emojiId) {
    const obj2 = { id: reaction.emojiId, animated: setting, size: 18 };
    emojiURL = AvatarUtilsDefault.getEmojiURL(obj2);
  }
  const obj3 = { style: tmp.pill, accessible: true, accessibilityRole: "image", accessibilityLabel: conjureAgentReaction.getConjureAgentReactionLabel(reaction), children: jsx(EmojiDefault, { src: emojiURL, name: reaction.emoji, fastImageStyle: tmp.emoji }) };
  return <View style={tmp.pill} accessible accessibilityRole="image" accessibilityLabel={conjureAgentReaction.getConjureAgentReactionLabel(reaction)}>{jsx(EmojiDefault, { src: emojiURL, name: reaction.emoji, fastImageStyle: tmp.emoji })}</View>;
});