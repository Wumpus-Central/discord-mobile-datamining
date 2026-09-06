// discord_app/modules/media_viewer/native/components/overlay/MediaModalOverlayAltText.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import openMediaModalOverlayAltTextSheetDefault from "openMediaModalOverlayAltTextSheet.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_4 = createStyles.createStyles((arg0) => {
  let obj = { container: null };
  obj = {
    backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE,
    marginVertical: nativeDefault.space.PX_8,
    marginHorizontal: nativeDefault.space.PX_8,
    marginRight: nativeDefault.space.PX_8 + arg0,
    paddingHorizontal: nativeDefault.space.PX_8,
    paddingVertical: nativeDefault.space.PX_4,
    borderRadius: nativeDefault.radii.sm,
    alignSelf: "flex-end",
  };
  obj.container = obj;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/overlay/MediaModalOverlayAltText.tsx",
);

export default noop.memo(function MediaModalOverlayAltTextButton(description) {
  let str;
  if (str == null) {
    str = "";
  }
  const ViewImageDescriptions = str(1935).ViewImageDescriptions;
  let tmp4 = null;
  if (ViewImageDescriptions.useSetting()) {
    tmp4 = null;
    if (0 !== str.length) {
      let obj = {
        style: tmp2.container,
        onPress() {
          if (str == null) {
            str = "";
          }
          openMediaModalOverlayAltTextSheetDefault({ description: str });
        },
        hitSlop: { top: 6, bottom: 6, left: 6, right: 6 },
        children: null,
      };
      obj = { variant: "text-xs/semibold", color: "text-overlay-light", children: null };
      const intl = tmp3(1114).intl;
      obj.children = intl.string(tmp3(1114).t.Q5VqrN);
      obj.children = jsx(tmp3(4556).Text, { variant: "text-xs/semibold", color: "text-overlay-light", children: null });
      tmp4 = jsx(tmp3(5123).PressableOpacity, {
        variant: "text-xs/semibold",
        color: "text-overlay-light",
        children: null,
      });
    }
  }
  return tmp4;
});
