// === Module 8774: TwoWayLinkStyles ===

// Module 8774 (TwoWayLinkStyles)
import nativeDefault from "native" /* 587 */;
import createStyles_mod from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
const obj = { container: { flex: 1, alignItems: "stretch", justifyContent: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, navHeader: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, shadowColor: "transparent" }, content: { alignItems: "center", flex: 1, paddingTop: 24, paddingHorizontal: 16, maxWidth: 480, alignSelf: "center" }, title: { textAlign: "center" }, stepHeader: { textTransform: "uppercase" }, body: { marginTop: 8, textAlign: "center" }, bodyContent: { flexDirection: "column", gap: 24, padding: 16 }, footerContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, borderTopWidth: 1, paddingTop: 24, paddingBottom: 18, paddingHorizontal: 12, width: "100%", flexShrink: 0 }, footerButton: { marginBottom: 6 } };
({ flex: 1, alignItems: "stretch", justifyContent: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, shadowColor: "transparent" });
({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, borderTopWidth: 1, paddingTop: 24, paddingBottom: 18, paddingHorizontal: 12, width: "100%", flexShrink: 0 });
const styles = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkStyles.tsx");

export const useTwoWayLinkStyles = styles;