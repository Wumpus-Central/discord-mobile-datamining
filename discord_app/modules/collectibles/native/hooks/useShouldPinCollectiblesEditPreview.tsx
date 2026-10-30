// discord_app/modules/collectibles/native/hooks/useShouldPinCollectiblesEditPreview.tsx
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import NavigatorConstants from "../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useShouldPinCollectiblesEditPreview.tsx");

export function useShouldPinCollectiblesEditPreview() {
  ({ top, bottom } = useSafeAreaInsetsDefault());
  return useWindowDimensionsDefault().height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - top - bottom >= 618;
}
