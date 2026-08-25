// === Module 10572: styles ===

// Module 10572 (styles)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import createCacheKey from "createCacheKey" /* 4380 */;

let obj = { container: null, navHeader: null, content: null, title: null, stepHeader: null, body: null, bodyContent: null, footerContainer: null, footerButton: null };
obj = { flex: 1, alignItems: "stretch", justifyContent: "flex-start", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[0] = obj;
obj[1] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE, shadowColor: "transparent" };
obj[2] = { alignItems: "center", flex: 1, paddingTop: 24, paddingHorizontal: 16, maxWidth: 480, alignSelf: "center" };
obj[3] = { textAlign: "center" };
obj[4] = { textTransform: "uppercase" };
obj[5] = { marginTop: 8, textAlign: "center" };
obj[6] = { flexDirection: "column", gap: 24, padding: 16 };
const obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE, shadowColor: "transparent" };
obj[7] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE, borderTopWidth: 1, paddingTop: 24, paddingBottom: 18, paddingHorizontal: 12, width: "100%", flexShrink: 0 };
obj[8] = { marginBottom: 6 };
const styles = createCacheKey.createStyles(obj);
const obj2 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE, borderTopWidth: 1, paddingTop: 24, paddingBottom: 18, paddingHorizontal: 12, width: "100%", flexShrink: 0 };
const result = set.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkStyles.tsx");

export const useTwoWayLinkStyles = styles;