// === Module 10331: useSharedMessageEmojiStyles ===

// Module 10331 (useSharedMessageEmojiStyles)
import nativeDefault from "native" /* 576 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

let obj = { emojiContainer: { flexDirection: "row", alignItems: "center" }, emojiDescriptionWrapper: { flexDirection: "column", flex: 1 }, emojiWrapper: { marginLeft: -8, marginRight: 8 }, emojiIcon: null, divider: null, ctaButton: null };
let size = { width: 40, height: 40, marginRight: 12, borderRadius: nativeDefault.radii.sm, resizeMode: "contain" };
obj.emojiIcon = size;
obj = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, marginLeft: 0, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 0.5 };
obj.divider = obj;
obj.ctaButton = { marginTop: 16 };
const styles = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/messages/native/emoji/useSharedMessageEmojiStyles.tsx");

export const useSharedMessageEmojiStyles = styles;