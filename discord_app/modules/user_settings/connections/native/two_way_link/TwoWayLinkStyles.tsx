// === Module 9226: TwoWayLinkStyles ===

// Module 9226 (TwoWayLinkStyles)
import nativeDefault from "native" /* 576 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

let obj = { container: null, navHeader: null, content: null, title: null, stepHeader: null, body: null, bodyContent: null, footerContainer: null, footerButton: null };
obj = { flex: 1, alignItems: "stretch", justifyContent: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.navHeader = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, shadowColor: "transparent" };
obj.content = { alignItems: "center", flex: 1, paddingTop: 24, paddingHorizontal: 16, maxWidth: 480, alignSelf: "center" };
obj.title = { textAlign: "center" };
obj.stepHeader = { textTransform: "uppercase" };
obj.body = { marginTop: 8, textAlign: "center" };
obj.bodyContent = { flexDirection: "column", gap: 24, padding: 16 };
const obj1 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, shadowColor: "transparent" };
obj.footerContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, borderTopWidth: 1, paddingTop: 24, paddingBottom: 18, paddingHorizontal: 12, width: "100%", flexShrink: 0 };
obj.footerButton = { marginBottom: 6 };
const styles = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkStyles.tsx");

export const useTwoWayLinkStyles = styles;