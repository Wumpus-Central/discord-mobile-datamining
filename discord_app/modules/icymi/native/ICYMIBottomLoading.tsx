// discord_app/modules/icymi/native/ICYMIBottomLoading.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

get_ActivityIndicator = fn(17);
({ View: c2, ActivityIndicator: c3 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles(() => {
  let obj = { container: null };
  obj = {
    paddingTop: nativeDefault.space.PX_8,
    paddingBottom: nativeDefault.space.PX_24,
    alignItems: "center",
    justifyContent: "center",
  };
  obj.container = obj;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/ICYMIBottomLoading.tsx");

export const ICYMIBottomLoading = function ICYMIBottomLoading() {
  return (
    <React2 style={closure_5().container}>
      <React3 size="small" />
    </React2>
  );
};
