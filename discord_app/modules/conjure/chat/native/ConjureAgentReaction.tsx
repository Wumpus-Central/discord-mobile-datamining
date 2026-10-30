// === Module 12611: ConjureAgentReaction ===

// Module 12611 (ConjureAgentReaction)
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import UserSettings from "UserSettings" /* 4834 */;
import EmojiDefault from "Emoji" /* 7294 */;
import conjureAgentReaction from "conjureAgentReaction" /* 10835 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj2 = { pill: { alignSelf: "flex-start", alignItems: "center", justifyContent: "center", marginTop: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_6, paddingVertical: 2, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE }, emoji: { width: 18, height: 18 } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureAgentReaction.tsx");

export default function ConjureAgentReaction(reaction) {
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
};