// _runtime/05829_styles.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

const StyleSheet = get_ActivityIndicator.StyleSheet;

export const styles = StyleSheet.create({
  container: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 9999, pointerEvents: "box-none" },
});
