// _runtime/metro/08302__.js
import _mod17 from "00017__.js";

const StyleSheet = _mod17.StyleSheet;

export default StyleSheet.create({
  container: { flex: 1, overflow: "hidden" },
  loadingOrErrorView: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  loadingProgressBar: { height: 20 },
  errorText: { fontSize: 14, textAlign: "center", marginBottom: 2 },
  errorTextTitle: { fontSize: 15, fontWeight: "500", marginBottom: 10 },
  webView: { backgroundColor: "#ffffff" },
});
