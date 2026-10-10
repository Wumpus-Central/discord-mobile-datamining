// === Module 13059: MediaModalOverlayAltText ===

// Module 13059 (MediaModalOverlayAltText)
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import openMediaModalOverlayAltTextSheetDefault from "openMediaModalOverlayAltTextSheet" /* 10687 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_4 = createStyles.createStyles((arg0) => {
  const obj = { container: { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE, marginVertical: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_8, marginRight: nativeDefault.space.PX_8 + arg0, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, alignSelf: "flex-end" } };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayAltText.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaModalOverlayAltTextButton(description) {
  let PressableOpacity = str;
  let tmp = dependencyMap;
  const cResult = str(576).c(7);
  str = description.description;
  let container = closure_4(useSafeAreaInsetsDefault().right);
  if (str == null) {
    str = "";
  }
  const ViewImageDescriptions = PressableOpacity(2041).ViewImageDescriptions;
  let tmp3 = null;
  if (ViewImageDescriptions.useSetting()) {
    tmp3 = null;
    if (0 !== str.length) {
      if (cResult[0] !== str) {
        const fn = function l() {
          if (str == null) {
            str = "";
          }
          openMediaModalOverlayAltTextSheetDefault({ description: str });
        };
        cResult[0] = str;
        cResult[1] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      const _Symbol = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const rect = { top: 6, bottom: 6, left: 6, right: 6 };
        cResult[2] = rect;
        let tmp6 = rect;
      } else {
        tmp6 = cResult[2];
      }
      const _Symbol2 = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "text-xs/semibold", color: "text-overlay-light", children: null };
        const intl = PressableOpacity(1126).intl;
        obj2.children = intl.string(PressableOpacity(1126).t.Q5VqrN);
        const tmp9 = jsx(PressableOpacity(5088).Text, { variant: "text-xs/semibold", color: "text-overlay-light", children: null });
        cResult[3] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] === container.container) {
      }
      PressableOpacity = PressableOpacity(6184).PressableOpacity;
      const obj3 = { style: container.container, onPress: tmp4, hitSlop: tmp6, children: tmp7 };
      tmp = <PressableOpacity style={container.container} onPress={tmp4} hitSlop={tmp6}>{tmp7}</PressableOpacity>;
      container = container.container;
      cResult[4] = container;
      cResult[5] = tmp4;
      cResult[6] = tmp;
    }
  }
  return tmp3;
}) : (function MediaModalOverlayAltTextButton(description) {
  let str;
  if (str == null) {
    str = "";
  }
  const ViewImageDescriptions = str(2041).ViewImageDescriptions;
  let tmp4 = null;
  if (ViewImageDescriptions.useSetting()) {
    tmp4 = null;
    if (0 !== str.length) {
      const obj = {
        style: tmp2.container,
        onPress() {
              if (str == null) {
                str = "";
              }
              openMediaModalOverlayAltTextSheetDefault({ description: str });
            },
        hitSlop: { top: 6, bottom: 6, left: 6, right: 6 },
        children: null
      };
      const obj2 = { variant: "text-xs/semibold", color: "text-overlay-light", children: null };
      const intl = tmp3(1126).intl;
      obj2.children = intl.string(tmp3(1126).t.Q5VqrN);
      obj.children = jsx(tmp3(5088).Text, { variant: "text-xs/semibold", color: "text-overlay-light", children: null });
      tmp4 = jsx(tmp3(6184).PressableOpacity, {
        style: tmp2.container,
        onPress() {
              if (str == null) {
                str = "";
              }
              openMediaModalOverlayAltTextSheetDefault({ description: str });
            },
        hitSlop: { top: 6, bottom: 6, left: 6, right: 6 },
        children: null
      });
    }
  }
  return tmp4;
}));