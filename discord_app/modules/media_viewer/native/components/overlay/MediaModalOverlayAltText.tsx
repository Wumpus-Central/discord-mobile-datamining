// discord_app/modules/media_viewer/native/components/overlay/MediaModalOverlayAltText.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

const require = arg1;
let closure_4 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null };
  obj = { backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE, marginVertical: ThemesDefault.space.PX_8, marginHorizontal: ThemesDefault.space.PX_8, marginRight: ThemesDefault.space.PX_8 + arg0, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_4, borderRadius: ThemesDefault.radii.sm, alignSelf: "flex-end" };
  obj[0] = obj;
  return obj;
});
const memoResult = importAllResult.memo(function MediaModalOverlayAltTextButton(description) {
  let str = description.description;
  str = undefined;
  if (str == null) {
    str = "";
  }
  const ViewImageDescriptions = str(4136).ViewImageDescriptions;
  let tmp4 = null;
  if (ViewImageDescriptions.useSetting()) {
    tmp4 = null;
    if (0 !== str.length) {
      let obj = { style: null, onPress: null, hitSlop: null, children: null };
      obj[0] = tmp2.container;
      obj[1] = function onPress() {
        if (str == null) {
          str = "";
        }
        closure_1_1(closure_1_2[7])({ description: str });
      };
      obj[2] = { top: 6, bottom: 6, left: 6, right: 6 };
      obj = { variant: "text-xs/semibold", color: "text-overlay-light", children: null };
      const intl = tmp3(1236).intl;
      obj[2] = intl.string(tmp3(1236).t.Q5VqrN);
      obj[3] = jsx(tmp3(4444).Text, { variant: "text-xs/semibold", color: "text-overlay-light", children: null });
      tmp4 = jsx(tmp3(5036).PressableOpacity, { variant: "text-xs/semibold", color: "text-overlay-light", children: null });
    }
  }
  return tmp4;
});
const result = require("set").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayAltText.tsx");

export default memoResult;