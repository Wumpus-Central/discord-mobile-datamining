// === Module 12525: MediaModalOverlayAltText ===

// Module 12525 (MediaModalOverlayAltText)
import nativeDefault from "native" /* 576 */;
import openMediaModalOverlayAltTextSheetDefault from "openMediaModalOverlayAltTextSheet" /* 11029 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let closure_4 = createStyles.createStyles((arg0) => {
  const obj = { container: { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE, marginVertical: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_8, marginRight: nativeDefault.space.PX_8 + arg0, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, alignSelf: "flex-end" } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayAltText.tsx");

export default noop.memo(function MediaModalOverlayAltTextButton(description) {
  let str;
  if (str == null) {
    str = "";
  }
  const ViewImageDescriptions = str(2021).ViewImageDescriptions;
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
      const intl = tmp3(1115).intl;
      obj2.children = intl.string(tmp3(1115).t.Q5VqrN);
      obj.children = jsx(tmp3(4832).Text, { variant: "text-xs/semibold", color: "text-overlay-light", children: null });
      tmp4 = jsx(tmp3(5435).PressableOpacity, {
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
});