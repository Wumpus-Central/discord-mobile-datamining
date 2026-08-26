// _runtime/08212_styles.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

const StyleSheet = get_ActivityIndicator.StyleSheet;
const obj = { stepNumber: { marginTop: 20, alignItems: "center", position: "absolute" }, sliderMainContainer: { zIndex: 1, width: "100%" }, defaultSlideriOS: { height: 40 }, defaultSlider: {}, stepsIndicator: null, trackMarkContainer: null, thumbImageContainer: null, thumbImage: null, stepIndicatorElement: null, defaultIndicatorMarked: null, defaultIndicatorIdle: null };
let num = 0;
if ("ios" === get_ActivityIndicator.Platform.OS) {
  num = 10;
}
obj[4] = { flex: 1, flexDirection: "row", justifyContent: "space-between", top: num, zIndex: 2 };
obj[5] = { alignItems: "center", alignContent: "center", alignSelf: "center", justifyContent: "center", position: "absolute", zIndex: 3 };
obj[6] = { position: "absolute", zIndex: 3, justifyContent: "center", alignItems: "center", alignContent: "center" };
obj[7] = { alignContent: "center", alignItems: "center", position: "absolute" };
obj[8] = { alignItems: "center", alignContent: "center" };
obj[9] = { height: 20, width: 5, backgroundColor: "#CCCCCC" };
obj[10] = { height: 10, width: 2, backgroundColor: "#C0C0C0" };

export const styles = StyleSheet.create(obj);