// === Module 9935: useSharedMessageEmojiStyles ===

// Module 9935 (useSharedMessageEmojiStyles)
import nativeDefault from "native" /* 587 */;
import createStyles_mod from "createStyles" /* 4890 */;
import size_mod from "module_2" /* 2 */;

let size;
let createStyles = createStyles_mod;
const obj = { emojiContainer: { flexDirection: "row", alignItems: "center" }, emojiDescriptionWrapper: { flexDirection: "column", flex: 1 }, emojiWrapper: { marginLeft: -8, marginRight: 8 }, emojiIcon: size, divider: { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, marginLeft: 0, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 0.5 }, ctaButton: { marginTop: 16 } };
size = { width: 40, height: 40, marginRight: 12, borderRadius: nativeDefault.radii.sm, resizeMode: "contain" };
createStyles = createStyles.createStyles;
({ marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, marginLeft: 0, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 0.5 });
const styles = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/messages/native/emoji/useSharedMessageEmojiStyles.tsx");

export const useSharedMessageEmojiStyles = styles;