// discord_app/modules/channel_list_v2/native/components/Divider.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_4 = createStyles.createStyles(() => {
  let obj = { divider: null };
  obj = {
    height: 1,
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
    marginTop: 8,
    marginBottom: 8,
    marginHorizontal: 16,
  };
  obj.divider = obj;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/Divider.tsx");

export default function Divider() {
  return <View style={closure_4().divider} />;
}
export const DIVIDER_MARGIN_TOP = 8;
export const DIVIDER_MARGIN_BOTTOM = 8;
export const DIVIDER_HEIGHT = 17;
export const DIVIDER_MARGIN_HORIZONTAL = 16;
