// discord_app/modules/media_viewer/native/components/overlay/MediaModalOverlayAltText.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import openMediaModalOverlayAltTextSheetDefault from "openMediaModalOverlayAltTextSheet.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles((arg0) => {
  const obj = {
    container: {
      backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE,
      marginVertical: nativeDefault.space.PX_8,
      marginHorizontal: nativeDefault.space.PX_8,
      marginRight: nativeDefault.space.PX_8 + arg0,
      paddingHorizontal: nativeDefault.space.PX_8,
      paddingVertical: nativeDefault.space.PX_4,
      borderRadius: nativeDefault.radii.sm,
      alignSelf: "flex-end",
    },
  };
  ({
    backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE,
    marginVertical: nativeDefault.space.PX_8,
    marginHorizontal: nativeDefault.space.PX_8,
    marginRight: nativeDefault.space.PX_8 + arg0,
    paddingHorizontal: nativeDefault.space.PX_8,
    paddingVertical: nativeDefault.space.PX_4,
    borderRadius: nativeDefault.radii.sm,
    alignSelf: "flex-end",
  });
  return obj;
});
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (description) => {
        let str;
        let tmp = str;
        const obj = str(576);
        const cResult = obj.c(7);
        str = description.description;
        const tmp4 = closure_4(useSafeAreaInsetsDefault().right);
        if (str == null) {
          str = "";
        }
        const ViewImageDescriptions = tmp(2028).ViewImageDescriptions;
        let tmp5 = null;
        if (ViewImageDescriptions.useSetting()) {
          tmp5 = null;
          if (0 !== str.length) {
            let tmp6;
            let tmp8;
            let tmp9;
            if (cResult[0] !== str) {
              const fn = function l() {
                const tmp = openMediaModalOverlayAltTextSheetDefault;
                tmp({ description: str });
              };
              cResult[0] = str;
              cResult[1] = fn;
              tmp6 = fn;
            } else {
              tmp6 = cResult[1];
            }
            const _Symbol = Symbol;
            if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
              const rect = { top: 6, bottom: 6, left: 6, right: 6 };
              cResult[2] = rect;
              tmp8 = rect;
            } else {
              tmp8 = cResult[2];
            }
            const _Symbol2 = Symbol;
            if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
              const Text = tmp(4886).Text;
              const intl = tmp(1126).intl;
              const tmp11 = (
                <Text variant="text-xs/semibold" color="text-overlay-light">
                  {intl.string(tmp(1126).t.Q5VqrN)}
                </Text>
              );
              cResult[3] = tmp11;
              tmp9 = tmp11;
            } else {
              tmp9 = cResult[3];
            }
            if (cResult[4] === tmp4.container) {
              let tmp12;
              if (cResult[5] === tmp6) {
                tmp12 = cResult[6];
              }
              tmp5 = tmp12;
            }
            const tmp14 = jsx(tmp(5909).PressableOpacity, {
              style: tmp4.container,
              onPress: tmp6,
              hitSlop: tmp8,
              children: tmp9,
            });
            cResult[4] = tmp4.container;
            cResult[5] = tmp6;
            cResult[6] = tmp14;
            tmp12 = tmp14;
          }
        }
        return tmp5;
      }
    : (description) => {
        let intl;
        let str;
        const tmp2 = closure_4(useSafeAreaInsetsDefault().right);
        if (str == null) {
          str = "";
        }
        const ViewImageDescriptions = str(2028).ViewImageDescriptions;
        let tmp4 = null;
        if (ViewImageDescriptions.useSetting()) {
          tmp4 = null;
          if (0 !== str.length) {
            const PressableOpacity = tmp3(5909).PressableOpacity;
            ({ variant: "text-xs/semibold", color: "text-overlay-light", children: intl.string(str(1126).t.Q5VqrN) });
            const Text = tmp3(4886).Text;
            intl = tmp3(1126).intl;
            tmp4 = (
              <PressableOpacity
                style={tmp2.container}
                onPress={function onPress() {
                  const tmp = openMediaModalOverlayAltTextSheetDefault;
                  tmp({ description: str });
                }}
                hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
              >
                {null}
              </PressableOpacity>
            );
          }
        }
        return tmp4;
      },
);
const result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/overlay/MediaModalOverlayAltText.tsx",
);

export default memoResult;
