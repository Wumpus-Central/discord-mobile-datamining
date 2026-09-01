// discord_app/modules/channel_list_v2/native/components/Divider.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

noopAll;
let closure_4 = createCacheKey.createStyles(() => {
  let obj = { divider: null };
  obj = {
    height: 1,
    backgroundColor: ThemesDefault.colors.BORDER_SUBTLE,
    marginTop: 8,
    marginBottom: 8,
    marginHorizontal: 16,
  };
  obj[0] = obj;
  return obj;
});
const result = require("set").fileFinishedImporting("modules/channel_list_v2/native/components/Divider.tsx");

export default function Divider() {
  return <View style={callback().divider} />;
}
export const DIVIDER_MARGIN_TOP = 8;
export const DIVIDER_MARGIN_BOTTOM = 8;
export const DIVIDER_HEIGHT = 17;
export const DIVIDER_MARGIN_HORIZONTAL = 16;
