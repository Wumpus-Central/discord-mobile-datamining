// discord_app/modules/media_viewer/native/components/overlay/MediaModalOverlayAltText.tsx
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

const require = arg1;
let closure_4 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null };
  obj = { backgroundColor: importDefault(712).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE, marginVertical: importDefault(712).space.PX_8, marginHorizontal: importDefault(712).space.PX_8, marginRight: importDefault(712).space.PX_8 + arg0, paddingHorizontal: importDefault(712).space.PX_8, paddingVertical: importDefault(712).space.PX_4, borderRadius: importDefault(712).radii.sm, alignSelf: "flex-end" };
  obj[0] = obj;
  return obj;
});
const memoResult = require("noop").memo(function MediaModalOverlayAltTextButton(description) {
  let str = description.description;
  str = undefined;
  if (str == null) {
    str = "";
  }
  const ViewImageDescriptions = str(3866).ViewImageDescriptions;
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
        outer1_1(outer1_2[7])({ description: str });
      };
      obj[2] = { top: 6, bottom: 6, left: 6, right: 6 };
      obj = { variant: "text-xs/semibold", color: "text-overlay-light", children: null };
      const intl = tmp3(1236).intl;
      obj[2] = intl.string(tmp3(1236).t.Q5VqrN);
      obj[3] = jsx(tmp3(4189).Text, { variant: "text-xs/semibold", color: "text-overlay-light", children: null });
      tmp4 = jsx(tmp3(4721).PressableOpacity, { variant: "text-xs/semibold", color: "text-overlay-light", children: null });
    }
  }
  return tmp4;
});
const result = require("createCacheKey").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayAltText.tsx");

export default memoResult;