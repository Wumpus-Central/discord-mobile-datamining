// discord_app/modules/app_launcher/native/onboarding/banner/AppLauncherGlobalSearchOnboardingBanner.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AppLauncherNativeConstants from "../../AppLauncherNativeConstants.tsx";
import DismissibleContentConstants from "../../../../dismissible_content/DismissibleContentConstants.tsx";
import AppsIcon2 from "../../../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

let dependencyMap, markAsDismissed;

let size;
let size1;
const View = react_native.View;
const DEFAULT_CONTENT_PADDING = AppLauncherNativeConstants.DEFAULT_CONTENT_PADDING;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { appsIcon: size, appsIconImage: size1 };
size = {
  height: 40,
  width: 40,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
};
createStyles = createStyles.createStyles;
size1 = { height: 24, width: 24, tintColor: nativeDefault.unsafe_rawColors.WHITE };
let closure_8 = createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (markAsDismissed) => {
      let appsIconImage;
      let obj = markAsDismissed(576);
      const cResult = obj.c(21);
      markAsDismissed = markAsDismissed.markAsDismissed;
      const visible = markAsDismissed.visible;
      const windowDimensions = markAsDismissed.windowDimensions;
      const tmp4 = closure_8();
      dependencyMap = tmp4;
      const diff = windowDimensions.width - 2 * DEFAULT_CONTENT_PADDING;
      if (cResult[0] === markAsDismissed) {
        let tmp6;
        let tmp7;
        if (cResult[1] === visible) {
          tmp6 = cResult[2];
          tmp7 = cResult[3];
        }
        const effect = react.useEffect(tmp6, tmp7);
        if (cResult[4] === tmp4.appsIcon) {
          let tmp10;
          if (cResult[5] === tmp4.appsIconImage) {
            tmp10 = cResult[6];
          }
          let tmp11 = null;
          if (visible) {
            let tmp14;
            let tmp13;
            let tmp17;
            let tmp18;
            const _Symbol = Symbol;
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1126).intl;
              const stringResult = intl.string(markAsDismissed(1126).t.bCPN5y);
              const intl2 = tmp(1126).intl;
              const stringResult1 = intl2.string(markAsDismissed(1126).t["0TBExc"]);
              cResult[7] = stringResult;
              cResult[8] = stringResult1;
              tmp14 = stringResult1;
              tmp13 = stringResult;
            } else {
              tmp13 = cResult[7];
              tmp14 = cResult[8];
            }
            if (cResult[9] !== markAsDismissed) {
              const fn3 = function w() {
                const obj = { actionType: ContentDismissActionType.TAKE_ACTION };
                markAsDismissed(obj);
              };
              cResult[9] = markAsDismissed;
              cResult[10] = fn3;
              tmp17 = fn3;
            } else {
              tmp17 = cResult[10];
            }
            if (cResult[11] !== diff) {
              size = { x: 0, y: -40, width: diff, height: 40 };
              cResult[11] = diff;
              cResult[12] = size;
              tmp18 = size;
            } else {
              tmp18 = cResult[12];
            }
            if (cResult[13] === diff) {
              let tmp19;
              if (cResult[14] === windowDimensions.height) {
                tmp19 = cResult[15];
              }
              if (cResult[16] === tmp10) {
                if (cResult[17] === tmp17) {
                  if (cResult[18] === tmp18) {
                    let tmp20;
                    if (cResult[19] === tmp19) {
                      tmp20 = cResult[20];
                    }
                    tmp11 = tmp20;
                  }
                }
              }
              const tmp22 = jsx(markAsDismissed(9890).Coachmark, {
                renderImgComponent: tmp10,
                title: tmp13,
                description: tmp14,
                onDismiss: tmp17,
                targetMeasurements: tmp18,
                surfaceMeasurements: tmp19,
                position: "bottom",
              });
              cResult[16] = tmp10;
              cResult[17] = tmp17;
              cResult[18] = tmp18;
              cResult[19] = tmp19;
              cResult[20] = tmp22;
              tmp20 = tmp22;
            }
            const size1 = { x: -140, y: -40, width: diff, height: windowDimensions.height };
            cResult[13] = diff;
            cResult[14] = windowDimensions.height;
            cResult[15] = size1;
            tmp19 = size1;
          }
          return tmp11;
        }
        const fn2 = function u() {
          ({ style: appsIconImage.appsIconImage, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE });
          const AppsIcon = AppsIcon2.AppsIcon;
          return <View style={closure_2.appsIcon}>{null}</View>;
        };
        cResult[4] = tmp4.appsIcon;
        cResult[5] = tmp4.appsIconImage;
        cResult[6] = fn2;
        tmp10 = fn2;
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
      tmp7 = items;
      tmp6 = fn;
    }
  : (markAsDismissed) => {
      let appsIconImage;
      markAsDismissed = markAsDismissed.markAsDismissed;
      const visible = markAsDismissed.visible;
      const windowDimensions = markAsDismissed.windowDimensions;
      dependencyMap = closure_8();
      const diff = windowDimensions.width - 2 * DEFAULT_CONTENT_PADDING;
      const items = [markAsDismissed, visible];
      const effect = react.useEffect(
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
        const Coachmark = markAsDismissed(9890).Coachmark;
        const intl = markAsDismissed(1126).intl;
        const intl2 = markAsDismissed(1126).intl;
        size = { x: 0, y: -40, width: diff, height: 40 };
        const size1 = { x: -140, y: -40, width: diff, height: windowDimensions.height };
        tmp3 = (
          <Coachmark
            renderImgComponent={function appsIcon() {
              ({ style: appsIconImage.appsIconImage, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE });
              const AppsIcon = AppsIcon2.AppsIcon;
              return <View style={closure_2.appsIcon}>{null}</View>;
            }}
            title={intl.string(markAsDismissed(1126).t.bCPN5y)}
            description={intl2.string(markAsDismissed(1126).t["0TBExc"])}
            onDismiss={function onDismiss() {
              const obj = { actionType: ContentDismissActionType.TAKE_ACTION };
              markAsDismissed(obj);
            }}
            targetMeasurements={size}
            surfaceMeasurements={size1}
            position="bottom"
          />
        );
      }
      return tmp3;
    };
size = size_mod;
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/onboarding/banner/AppLauncherGlobalSearchOnboardingBanner.tsx",
);

export default tmp3;
