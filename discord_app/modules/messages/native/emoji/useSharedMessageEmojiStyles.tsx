// === Module 9402: styles ===

// Module 9402 (styles)
import obj132 from "obj132" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const obj = { width: 40, height: 40, marginRight: 12, borderRadius: ThemesDefault.radii.sm, resizeMode: "contain" };
obj[3] = obj;
obj[4] = { marginTop: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_16, marginLeft: 0, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, height: 0.5 };
obj[5] = { marginTop: 16 };
const styles = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/messages/native/emoji/useSharedMessageEmojiStyles.tsx");

export const useSharedMessageEmojiStyles = styles;