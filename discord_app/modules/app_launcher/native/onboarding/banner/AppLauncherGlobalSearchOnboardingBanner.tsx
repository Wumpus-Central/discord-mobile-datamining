// discord_app/modules/app_launcher/native/onboarding/banner/AppLauncherGlobalSearchOnboardingBanner.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import { DEFAULT_CONTENT_PADDING } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { appsIcon: null, appsIconImage: null };
createCacheKey = { height: 40, width: 40, backgroundColor: require("Themes").colors.BACKGROUND_BRAND, borderRadius: require("Themes").radii.round, alignItems: "center", justifyContent: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 24, width: 24, tintColor: require("Themes").unsafe_rawColors.WHITE };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { height: 24, width: 24, tintColor: require("Themes").unsafe_rawColors.WHITE };
const result = require("APP_LAUNCHER_BUILT_IN_SECTION_ICON").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppLauncherGlobalSearchOnboardingBanner.tsx");

export default function GlobalSearchCoachmark(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const visible = markAsDismissed.visible;
  const windowDimensions = markAsDismissed.windowDimensions;
  let dependencyMap;
  dependencyMap = createCacheKey();
  const diff = windowDimensions.width - 2 * DEFAULT_CONTENT_PADDING;
  const items = [markAsDismissed, visible];
  const effect = React.useEffect(() => () => {
    if (closure_1) {
      const obj = { actionType: null };
      obj[0] = outer1_6.USER_DISMISS;
      callback(obj);
    }
  }, items);
  let tmp3 = null;
  if (visible) {
    let obj = { renderImgComponent: null, title: null, description: null, onDismiss: null, targetMeasurements: null, surfaceMeasurements: null, position: "bottom" };
    obj[0] = function appsIcon() {
      let obj = { style: closure_2.appsIcon, children: null };
      obj = { style: closure_2.appsIconImage, color: null };
      obj[1] = visible(closure_2[6]).colors.INTERACTIVE_TEXT_ACTIVE;
      obj[1] = outer1_7(markAsDismissed(closure_2[7]).AppsIcon, obj);
      return outer1_7(outer1_4, obj);
    };
    const intl = markAsDismissed(1236).intl;
    obj[1] = intl.string(markAsDismissed(1236).t.bCPN5y);
    const intl2 = markAsDismissed(1236).intl;
    obj[2] = intl2.string(markAsDismissed(1236).t["0TBExc"]);
    obj[3] = function onDismiss() {
      markAsDismissed({ actionType: outer1_6.TAKE_ACTION });
    };
    obj = { x: 0, y: -40, width: null, height: 40 };
    obj[2] = diff;
    obj[4] = obj;
    obj = { x: -140, y: -40, width: null, height: null };
    obj[2] = diff;
    obj[3] = windowDimensions.height;
    obj[5] = obj;
    tmp3 = jsx(markAsDismissed(8707).Coachmark, { x: -140, y: -40, width: null, height: null });
  }
  return tmp3;
};