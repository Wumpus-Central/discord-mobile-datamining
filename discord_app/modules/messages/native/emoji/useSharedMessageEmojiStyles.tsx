// === Module 9422: styles ===

// Module 9422 (styles)
import createCacheKey from "createCacheKey";

let obj = { emojiContainer: { flexDirection: "row", alignItems: "center" }, emojiDescriptionWrapper: { flexDirection: "column", flex: 1 }, emojiWrapper: { marginLeft: -8, marginRight: 8 }, emojiIcon: null, divider: null, ctaButton: null };
obj = { width: 40, height: 40, marginRight: 12, borderRadius: require("Themes").radii.sm, resizeMode: "contain" };
obj[3] = obj;
obj[4] = { marginTop: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_16, marginLeft: 0, backgroundColor: require("Themes").colors.BORDER_SUBTLE, height: 0.5 };
obj[5] = { marginTop: 16 };
const styles = createCacheKey.createStyles(obj);
const obj1 = { marginTop: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_16, marginLeft: 0, backgroundColor: require("Themes").colors.BORDER_SUBTLE, height: 0.5 };
const result = require("set").fileFinishedImporting("modules/messages/native/emoji/useSharedMessageEmojiStyles.tsx");

export const useSharedMessageEmojiStyles = styles;