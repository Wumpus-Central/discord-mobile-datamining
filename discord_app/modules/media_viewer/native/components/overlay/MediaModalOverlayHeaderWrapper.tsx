// discord_app/modules/media_viewer/native/components/overlay/MediaModalOverlayHeaderWrapper.tsx
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import NavigatorConstants from "../../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles((paddingTop, arg1, arg2) => {
  let obj = { bar: null };
  obj = {
    flexDirection: "row",
    alignItems: "center",
    height: NavigatorConstants.NAV_BAR_HEIGHT + paddingTop,
    paddingTop,
    paddingLeft: arg1 + 6,
    paddingRight: arg2 + 6,
  };
  obj.bar = obj;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/overlay/MediaModalOverlayHeaderWrapper.tsx",
);

export const MediaModalOverlayHeaderWrapper = function MediaModalOverlayHeaderWrapper(arg0) {
  ({ children, style } = arg0);
  const rect = useSafeAreaInsetsDefault();
  const obj = { style: null, pointerEvents: "box-none", children: null };
  const items = [closure_5(rect.top, rect.left, rect.right).bar, style];
  obj.style = items;
  obj.children = children;
  return (
    <View style={null} pointerEvents="box-none">
      {null}
    </View>
  );
};
