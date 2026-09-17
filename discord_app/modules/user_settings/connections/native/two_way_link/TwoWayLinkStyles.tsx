// === Module 9380: TwoWayLinkStyles ===

// Module 9380 (TwoWayLinkStyles)
import nativeDefault from "native" /* 576 */;
import createStyles from "createStyles" /* 4640 */;
import size from "module_2" /* 2 */;

const obj = { container: { flex: 1, alignItems: "stretch", justifyContent: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, navHeader: null, content: null, title: null, stepHeader: null, body: null, bodyContent: null, footerContainer: null, footerButton: null };
const obj2 = { flex: 1, alignItems: "stretch", justifyContent: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.navHeader = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, shadowColor: "transparent" };
obj.content = { alignItems: "center", flex: 1, paddingTop: 24, paddingHorizontal: 16, maxWidth: 480, alignSelf: "center" };
obj.title = { textAlign: "center" };
obj.stepHeader = { textTransform: "uppercase" };
obj.body = { marginTop: 8, textAlign: "center" };
obj.bodyContent = { flexDirection: "column", gap: 24, padding: 16 };
const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, shadowColor: "transparent" };
obj.footerContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, borderTopWidth: 1, paddingTop: 24, paddingBottom: 18, paddingHorizontal: 12, width: "100%", flexShrink: 0 };
obj.footerButton = { marginBottom: 6 };
const styles = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkStyles.tsx");

export const useTwoWayLinkStyles = styles;