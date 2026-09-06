// === Module 8283: ? ===

// Module 8283
import get_ActivityIndicator from "module_17" /* 17 */;

const StyleSheet = get_ActivityIndicator.StyleSheet;
const obj = { stepNumber: { marginTop: 20, alignItems: "center", position: "absolute" }, sliderMainContainer: { zIndex: 1, width: "100%" }, defaultSlideriOS: { height: 40 }, defaultSlider: {}, stepsIndicator: null, trackMarkContainer: null, thumbImageContainer: null, thumbImage: null, stepIndicatorElement: null, defaultIndicatorMarked: null, defaultIndicatorIdle: null };
let num = 0;
if ("ios" === get_ActivityIndicator.Platform.OS) {
  num = 10;
}
obj.stepsIndicator = { flex: 1, flexDirection: "row", justifyContent: "space-between", top: num, zIndex: 2 };
obj.trackMarkContainer = { alignItems: "center", alignContent: "center", alignSelf: "center", justifyContent: "center", position: "absolute", zIndex: 3 };
obj.thumbImageContainer = { position: "absolute", zIndex: 3, justifyContent: "center", alignItems: "center", alignContent: "center" };
obj.thumbImage = { alignContent: "center", alignItems: "center", position: "absolute" };
obj.stepIndicatorElement = { alignItems: "center", alignContent: "center" };
obj.defaultIndicatorMarked = { height: 20, width: 5, backgroundColor: "#CCCCCC" };
obj.defaultIndicatorIdle = { height: 10, width: 2, backgroundColor: "#C0C0C0" };

export const styles = StyleSheet.create(obj);