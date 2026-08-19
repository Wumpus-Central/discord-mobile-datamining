// discord_app/modules/app_launcher/native/onboarding/banner/AppLauncherGlobalSearchOnboardingBanner.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { DEFAULT_CONTENT_PADDING } from "../../AppLauncherNativeConstants.tsx";
import { ContentDismissActionType } from "../../../../dismissible_content/DismissibleContentConstants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
const createCacheKey = { height: 40, width: 40, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, borderRadius: ThemesDefault.radii.round, alignItems: "center", justifyContent: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 24, width: 24, tintColor: ThemesDefault.unsafe_rawColors.WHITE };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppLauncherGlobalSearchOnboardingBanner.tsx");

export default function GlobalSearchCoachmark(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const visible = markAsDismissed.visible;
  const windowDimensions = markAsDismissed.windowDimensions;
  dependencyMap = callback();
  const diff = windowDimensions.width - 2 * DEFAULT_CONTENT_PADDING;
  const items = [markAsDismissed, visible];
  const effect = React.useEffect(() => () => {
    if (closure_1) {
      const obj = { actionType: null };
      obj[0] = closure_1_6.USER_DISMISS;
      callback(obj);
    }
  }, items);
  let tmp3 = null;
  if (visible) {
    let obj = { renderImgComponent: null, title: null, description: null, onDismiss: null, targetMeasurements: null, surfaceMeasurements: null, position: "bottom" };
    obj[0] = function appsIcon() {
      const obj = { style: closure_2.appsIconImage, color: visible(closure_2[6]).colors.INTERACTIVE_TEXT_ACTIVE };
      obj[1] = jsx(markAsDismissed(closure_2[7]).AppsIcon, { style: closure_2.appsIconImage, color: visible(closure_2[6]).colors.INTERACTIVE_TEXT_ACTIVE });
      return <View style={closure_2.appsIconImage} color={visible(closure_2[6]).colors.INTERACTIVE_TEXT_ACTIVE} />;
    };
    const intl = markAsDismissed(1236).intl;
    obj[1] = intl.string(markAsDismissed(1236).t.bCPN5y);
    const intl2 = markAsDismissed(1236).intl;
    obj[2] = intl2.string(markAsDismissed(1236).t["0TBExc"]);
    obj[3] = function onDismiss() {
      markAsDismissed({ actionType: ContentDismissActionType.TAKE_ACTION });
    };
    obj = { x: 0, y: -40, width: null, height: 40 };
    obj[2] = diff;
    obj[4] = obj;
    obj = { x: -140, y: -40, width: null, height: null };
    obj[2] = diff;
    obj[3] = windowDimensions.height;
    obj[5] = obj;
    tmp3 = jsx(markAsDismissed(9316).Coachmark, { x: -140, y: -40, width: null, height: null });
  }
  return tmp3;
};