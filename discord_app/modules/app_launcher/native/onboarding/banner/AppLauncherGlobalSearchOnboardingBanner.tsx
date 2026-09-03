// discord_app/modules/app_launcher/native/onboarding/banner/AppLauncherGlobalSearchOnboardingBanner.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { DEFAULT_CONTENT_PADDING } from "../../AppLauncherNativeConstants.tsx";
import { ContentDismissActionType } from "../../../../dismissible_content/DismissibleContentConstants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
createCacheKey = { appsIcon: null, appsIconImage: null };
createCacheKey = {
  height: 40,
  width: 40,
  backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND,
  borderRadius: ThemesDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 24, width: 24, tintColor: ThemesDefault.unsafe_rawColors.WHITE };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const obj1 = { height: 24, width: 24, tintColor: ThemesDefault.unsafe_rawColors.WHITE };
const result = require("set").fileFinishedImporting(
  "modules/app_launcher/native/onboarding/banner/AppLauncherGlobalSearchOnboardingBanner.tsx",
);

export default function GlobalSearchCoachmark(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const visible = markAsDismissed.visible;
  const windowDimensions = markAsDismissed.windowDimensions;
  dependencyMap = undefined;
  dependencyMap = callback();
  const diff = windowDimensions.width - 2 * DEFAULT_CONTENT_PADDING;
  const items = [markAsDismissed, visible];
  const effect = React.useEffect(
    () => () => {
      if (closure_1) {
        const obj = { actionType: null };
        obj[0] = closure_1_6.USER_DISMISS;
        callback(obj);
      }
    },
    items,
  );
  let tmp3 = null;
  if (visible) {
    let obj = {
      renderImgComponent: null,
      title: null,
      description: null,
      onDismiss: null,
      targetMeasurements: null,
      surfaceMeasurements: null,
      position: "bottom",
    };
    obj[0] = function appsIcon() {
      let obj = { style: closure_2.appsIcon, children: null };
      obj = { style: closure_2.appsIconImage, color: visible(closure_2[6]).colors.INTERACTIVE_TEXT_ACTIVE };
      obj[1] = closure_1_7(markAsDismissed(closure_2[7]).AppsIcon, obj);
      return closure_1_7(closure_1_4, obj);
    };
    const intl = markAsDismissed(1233).intl;
    obj[1] = intl.string(markAsDismissed(1233).t.bCPN5y);
    const intl2 = markAsDismissed(1233).intl;
    obj[2] = intl2.string(markAsDismissed(1233).t["0TBExc"]);
    obj[3] = function onDismiss() {
      markAsDismissed({ actionType: closure_1_6.TAKE_ACTION });
    };
    obj = { x: 0, y: -40, width: null, height: 40 };
    obj[2] = diff;
    obj[4] = obj;
    obj = { x: -140, y: -40, width: null, height: null };
    obj[2] = diff;
    obj[3] = windowDimensions.height;
    obj[5] = obj;
    tmp3 = jsx(markAsDismissed(9000).Coachmark, { x: -140, y: -40, width: null, height: null });
  }
  return tmp3;
}
