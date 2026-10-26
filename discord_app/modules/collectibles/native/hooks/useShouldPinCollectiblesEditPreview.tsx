// === Module 14493: useShouldPinCollectiblesEditPreview ===

// Module 14493 (useShouldPinCollectiblesEditPreview)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1499 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import NavigatorConstants from "NavigatorConstants" /* 5268 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useShouldPinCollectiblesEditPreview.tsx");

export const useShouldPinCollectiblesEditPreview = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldPinCollectiblesEditPreview() {
  ({ top, bottom } = useSafeAreaInsetsDefault());
  return useWindowDimensionsDefault().height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - top - bottom >= 618;
}) : (function useShouldPinCollectiblesEditPreview() {
  ({ top, bottom } = useSafeAreaInsetsDefault());
  return useWindowDimensionsDefault().height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - top - bottom >= 618;
});