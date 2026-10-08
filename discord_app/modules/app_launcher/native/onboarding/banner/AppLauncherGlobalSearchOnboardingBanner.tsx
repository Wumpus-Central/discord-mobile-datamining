// === Module 11820: AppLauncherGlobalSearchOnboardingBanner ===

// Module 11820 (AppLauncherGlobalSearchOnboardingBanner)
import nativeDefault from "native" /* 587 */;
import AppsIcon from "AppsIcon" /* 8209 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const DEFAULT_CONTENT_PADDING = fn(1501).DEFAULT_CONTENT_PADDING;
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { appsIcon: null, appsIconImage: null };
let size = { height: 40, width: 40, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center" };
obj2.appsIcon = size;
let size1 = { height: 24, width: 24, tintColor: nativeDefault.unsafe_rawColors.WHITE };
obj2.appsIconImage = size1;
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppLauncherGlobalSearchOnboardingBanner.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GlobalSearchCoachmark(markAsDismissed) {
  let Coachmark = markAsDismissed;
  let tmp = dependencyMap;
  const cResult = markAsDismissed(576).c(21);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const visible = markAsDismissed.visible;
  const windowDimensions = markAsDismissed.windowDimensions;
  const tmp3 = closure_8();
  dependencyMap = tmp3;
  const diff = windowDimensions.width - 2 * DEFAULT_CONTENT_PADDING;
  if (cResult[0] === markAsDismissed) {
    if (cResult[1] === visible) {
      let tmp5 = cResult[2];
      let tmp6 = cResult[3];
    }
    const effect = noop.useEffect(tmp5, tmp6);
    if (cResult[4] === tmp3.appsIcon) {
      if (cResult[5] === tmp3.appsIconImage) {
        let tmp9 = cResult[6];
      }
      if (!visible) {
        return null;
      } else {
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = Coachmark(1126).intl;
          const stringResult = intl.string(Coachmark(1126).t.bCPN5y);
          const intl2 = Coachmark(1126).intl;
          const stringResult1 = intl2.string(Coachmark(1126).t["0TBExc"]);
          cResult[7] = stringResult;
          cResult[8] = stringResult1;
          let tmp13 = stringResult1;
          let tmp12 = stringResult;
        } else {
          tmp12 = cResult[7];
          tmp13 = cResult[8];
        }
        if (cResult[9] !== markAsDismissed) {
          const fn2 = function w() {
            markAsDismissed({ actionType: ContentDismissActionType.TAKE_ACTION });
          };
          cResult[9] = markAsDismissed;
          cResult[10] = fn2;
          let tmp16 = fn2;
        } else {
          tmp16 = cResult[10];
        }
        if (cResult[11] !== diff) {
          const size = { x: 0, y: -40, width: diff, height: 40 };
          cResult[11] = diff;
          cResult[12] = size;
          let tmp17 = size;
        } else {
          tmp17 = cResult[12];
        }
        if (cResult[13] === diff) {
          if (cResult[14] === windowDimensions.height) {
            let tmp18 = cResult[15];
          }
          if (cResult[16] === tmp9) {
            if (cResult[17] === tmp16) {
              if (cResult[18] === tmp17) {
              }
            }
          }
          Coachmark = Coachmark(9384).Coachmark;
          const obj2 = { renderImgComponent: tmp9, title: tmp12, description: tmp13, onDismiss: tmp16, targetMeasurements: tmp17, surfaceMeasurements: tmp18, position: "bottom" };
          tmp = <Coachmark renderImgComponent={tmp9} title={tmp12} description={tmp13} onDismiss={tmp16} targetMeasurements={tmp17} surfaceMeasurements={tmp18} position="bottom" />;
          cResult[16] = tmp9;
          cResult[17] = tmp16;
          cResult[18] = tmp17;
          cResult[19] = tmp18;
          cResult[20] = tmp;
        }
        const size1 = { x: -140, y: -40, width: diff, height: windowDimensions.height };
        cResult[13] = diff;
        cResult[14] = windowDimensions.height;
        cResult[15] = size1;
        tmp18 = size1;
      }
    }
    function appsIcon() {
      const obj = { style: closure_2.appsIcon, children: jsx(AppsIcon.AppsIcon, { style: closure_2.appsIconImage, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE }) };
      return <View style={closure_2.appsIcon}>{jsx(AppsIcon.AppsIcon, { style: closure_2.appsIconImage, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE })}</View>;
    }
    cResult[4] = tmp3.appsIcon;
    cResult[5] = tmp3.appsIconImage;
    cResult[6] = appsIcon;
    tmp9 = appsIcon;
  }
  const fn = function h() {
    return () => {
      if (visible) {
        const obj = { actionType: constants.USER_DISMISS };
        markAsDismissed(obj);
      }
    };
  };
  const items = [markAsDismissed, visible];
  cResult[0] = markAsDismissed;
  cResult[1] = visible;
  cResult[2] = fn;
  cResult[3] = items;
  tmp6 = items;
  tmp5 = fn;
  let obj = markAsDismissed(576);
}) : (function GlobalSearchCoachmark(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const visible = markAsDismissed.visible;
  const windowDimensions = markAsDismissed.windowDimensions;
  dependencyMap = closure_8();
  const diff = windowDimensions.width - 2 * DEFAULT_CONTENT_PADDING;
  const items = [markAsDismissed, visible];
  const effect = noop.useEffect(() => () => {
    if (visible) {
      const obj = { actionType: constants.USER_DISMISS };
      markAsDismissed(obj);
    }
  }, items);
  let tmp3 = null;
  if (visible) {
    let obj = {
      renderImgComponent: function appsIcon() {
          const obj = { style: closure_2.appsIcon, children: jsx(AppsIcon.AppsIcon, { style: closure_2.appsIconImage, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE }) };
          return <View style={closure_2.appsIcon}>{jsx(AppsIcon.AppsIcon, { style: closure_2.appsIconImage, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE })}</View>;
        },
      title: null,
      description: null,
      onDismiss: null,
      targetMeasurements: null,
      surfaceMeasurements: null,
      position: "bottom"
    };
    const intl = markAsDismissed(1126).intl;
    obj.title = intl.string(markAsDismissed(1126).t.bCPN5y);
    const intl2 = markAsDismissed(1126).intl;
    obj.description = intl2.string(markAsDismissed(1126).t["0TBExc"]);
    obj.onDismiss = function onDismiss() {
      markAsDismissed({ actionType: ContentDismissActionType.TAKE_ACTION });
    };
    const size = { x: 0, y: -40, width: diff, height: 40 };
    obj.targetMeasurements = size;
    const size1 = { x: -140, y: -40, width: diff, height: windowDimensions.height };
    obj.surfaceMeasurements = size1;
    tmp3 = jsx(markAsDismissed(9384).Coachmark, {
      renderImgComponent: function appsIcon() {
          const obj = { style: closure_2.appsIcon, children: jsx(AppsIcon.AppsIcon, { style: closure_2.appsIconImage, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE }) };
          return <View style={closure_2.appsIcon}>{jsx(AppsIcon.AppsIcon, { style: closure_2.appsIconImage, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE })}</View>;
        },
      title: null,
      description: null,
      onDismiss: null,
      targetMeasurements: null,
      surfaceMeasurements: null,
      position: "bottom"
    });
  }
  return tmp3;
});