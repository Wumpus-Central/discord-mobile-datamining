// === Module 16017: View ===

// Module 16017 (View)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 16018 */;
import obj132 from "obj132" /* 500 */;

let View = get_ActivityIndicator.View;
if (obj132.isAndroid()) {
  View = __INTERNAL_VIEW_CONFIGDefault;
}
const result = obj132.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewTarget.tsx");

export default View;