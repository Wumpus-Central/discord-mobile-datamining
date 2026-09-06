// === Module 1067: defaultButtonStyles ===

// Module 1067 (defaultButtonStyles)
function defaultButtonStyles(theme) {
  const triggerButton = { position: "absolute", bottom: 30, right: 30, backgroundColor: theme.background, padding: 15, borderRadius: 40, justifyContent: "center", alignItems: "center", elevation: 5, shadowColor: theme.border, shadowOffset: { width: 1, height: 2 }, shadowOpacity: 0.5, shadowRadius: 3, flexDirection: "row", borderWidth: 1, borderColor: theme.border };
  const triggerText = { color: theme.foreground, fontSize: 18 };
  return { triggerButton, triggerText, triggerIcon: { width: 24, height: 24, padding: 2, marginEnd: 6, tintColor: theme.sentryLogo } };
}
arg5.default = function _default(color) {
  const container = { flex: 1, padding: 20, backgroundColor: color.background };
  const title = { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "left", flex: 1, color: color.foreground };
  return { container, title, label: { marginBottom: 4, fontSize: 16, color: color.foreground }, input: { height: 50, borderColor: color.border, borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginBottom: 15, fontSize: 16, color: color.foreground }, textArea: { height: 100, textAlignVertical: "top", color: color.foreground }, screenshotButton: { backgroundColor: color.background, padding: 15, borderRadius: 5, alignItems: "center", flex: 1, borderWidth: 1, borderColor: color.border }, screenshotContainer: { flexDirection: "row", alignItems: "center", width: "100%", marginBottom: 20 }, screenshotThumbnail: { width: 50, height: 50, borderRadius: 5, marginRight: 10 }, screenshotText: { color: color.foreground, fontSize: 16 }, takeScreenshotButton: { backgroundColor: color.background, padding: 15, borderRadius: 5, alignItems: "center", borderWidth: 1, borderColor: color.border, marginTop: -10, marginBottom: 20 }, takeScreenshotText: { color: color.foreground, fontSize: 16 }, submitButton: { backgroundColor: color.accentBackground, paddingVertical: 15, borderRadius: 5, alignItems: "center", marginBottom: 10 }, submitText: { color: color.accentForeground, fontSize: 18 }, cancelButton: { backgroundColor: color.background, padding: 15, borderRadius: 5, alignItems: "center", borderWidth: 1, borderColor: color.border }, cancelText: { color: color.foreground, fontSize: 16 }, titleContainer: { flexDirection: "row", width: "100%" }, sentryLogo: { width: 40, height: 40, tintColor: color.sentryLogo } };
};
arg5.defaultButtonStyles = defaultButtonStyles;
arg5.defaultScreenshotButtonStyles = defaultButtonStyles;
arg5.modalWrapper = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
arg5.modalSheetContainer = (background) => ({ backgroundColor: background.background, borderTopLeftRadius: 16, borderTopRightRadius: 16, overflow: "hidden", alignSelf: "stretch", shadowColor: "#000", shadowOffset: { width: 0, height: -3 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 5, flex: 1 });
arg5.topSpacer = { height: 64 };