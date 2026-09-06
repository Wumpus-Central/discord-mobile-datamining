// discord_app/modules/main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import useFontScale from "../../../../screen/native/useFontScale.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/useScaledRowHeight.tsx",
);

export default function useScaledRowHeight() {
  const fontScale = useFontScale.useFontScale();
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const token1 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  return token + Math.max(fontScale * token1 - token1, 0);
}
export const useScaledRowHeightData = function useScaledRowHeightData() {
  let obj = useFontScale;
  const fontScale = obj.useFontScale();
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const token1 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_CONTENT_HEIGHT);
  const result = fontScale * token1;
  obj = { rowHeight: token + Math.max(result - token1, 0), rowContentHeight: result };
  return obj;
};
