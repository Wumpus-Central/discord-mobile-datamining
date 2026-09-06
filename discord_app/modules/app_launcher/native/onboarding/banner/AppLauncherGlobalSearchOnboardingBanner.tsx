// discord_app/modules/app_launcher/native/onboarding/banner/AppLauncherGlobalSearchOnboardingBanner.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AppsIcon from "../../../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const DEFAULT_CONTENT_PADDING = fn(1482).DEFAULT_CONTENT_PADDING;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
fn(4560);
const createStyles = { appsIcon: null, appsIconImage: null };
let size = {
  height: 40,
  width: 40,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
};
createStyles.appsIcon = size;
let size1 = { height: 24, width: 24, tintColor: nativeDefault.unsafe_rawColors.WHITE };
createStyles.appsIconImage = size1;
let closure_8 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/onboarding/banner/AppLauncherGlobalSearchOnboardingBanner.tsx",
);

export default function GlobalSearchCoachmark(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const visible = markAsDismissed.visible;
  const windowDimensions = markAsDismissed.windowDimensions;
  dependencyMap = closure_8();
  const diff = windowDimensions.width - 2 * DEFAULT_CONTENT_PADDING;
  const items = [markAsDismissed, visible];
  const effect = noop.useEffect(
    () => () => {
      if (visible) {
        const obj = { actionType: constants.USER_DISMISS };
        markAsDismissed(obj);
      }
    },
    items,
  );
  let tmp3 = null;
  if (visible) {
    let obj = {
      renderImgComponent: function appsIcon() {
        let obj = { style: closure_2.appsIcon, children: null };
        obj = { style: closure_2.appsIconImage, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
        obj.children = jsx(AppsIcon.AppsIcon, {
          style: closure_2.appsIconImage,
          color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
        });
        return <View style={closure_2.appsIconImage} color={nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE} />;
      },
      title: null,
      description: null,
      onDismiss: null,
      targetMeasurements: null,
      surfaceMeasurements: null,
      position: "bottom",
    };
    const intl = markAsDismissed(1114).intl;
    obj.title = intl.string(markAsDismissed(1114).t.bCPN5y);
    const intl2 = markAsDismissed(1114).intl;
    obj.description = intl2.string(markAsDismissed(1114).t["0TBExc"]);
    obj.onDismiss = function onDismiss() {
      markAsDismissed({ actionType: ContentDismissActionType.TAKE_ACTION });
    };
    const size = { x: 0, y: -40, width: diff, height: 40 };
    obj.targetMeasurements = size;
    const size1 = { x: -140, y: -40, width: diff, height: windowDimensions.height };
    obj.surfaceMeasurements = size1;
    tmp3 = jsx(markAsDismissed(11135).Coachmark, {
      renderImgComponent: function appsIcon() {
        let obj = { style: closure_2.appsIcon, children: null };
        obj = { style: closure_2.appsIconImage, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
        obj.children = jsx(AppsIcon.AppsIcon, {
          style: closure_2.appsIconImage,
          color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
        });
        return <View style={closure_2.appsIconImage} color={nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE} />;
      },
      title: null,
      description: null,
      onDismiss: null,
      targetMeasurements: null,
      surfaceMeasurements: null,
      position: "bottom",
    });
  }
  return tmp3;
}
