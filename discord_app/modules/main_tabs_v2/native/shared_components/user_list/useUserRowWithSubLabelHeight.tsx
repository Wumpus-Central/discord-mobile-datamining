// discord_app/modules/main_tabs_v2/native/shared_components/user_list/useUserRowWithSubLabelHeight.tsx
import react from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import useFontScale from "../../../../screen/native/useFontScale.tsx";
import useScaledTextLineHeight from "../../../../screen/native/useScaledTextLineHeight.android.tsx";
import roundToNearestPixelDefault from "../../../../voice_panel/native/utils/roundToNearestPixel.tsx";
import ActionStatusSubLabel from "../../friends/components/ActionStatusSubLabel.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

function getUserRowWithSubLabelHeight(rowHeight) {
  return Math.max(
    rowHeight.rowHeight,
    2 * rowHeight.rowPadding + rowHeight.labelLineHeight + rowHeight.subLabelLines * rowHeight.subLabelLineHeight,
  );
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const obj = react;
      const cResult = obj.c(6);
      let num = 1;
      if (undefined !== arg0) {
        num = arg0;
      }
      const tmpResult = useToken;
      const token = tmpResult.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
      const tmpResult4 = useToken;
      const token1 = tmpResult4.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
      const tmpResult5 = useScaledTextLineHeight;
      const scaledTextLineHeight = tmpResult5.useScaledTextLineHeight("text-md/semibold");
      const tmpResult6 = useFontScale;
      const fontScale = tmpResult6.useFontScale();
      const result = ActionStatusSubLabel.ACTION_STATUS_SUB_LABEL_LINE_HEIGHT * fontScale;
      if (cResult[0] === scaledTextLineHeight) {
        if (cResult[1] === token) {
          if (cResult[2] === token1) {
            if (cResult[3] === result) {
              let tmp10;
              if (cResult[4] === num) {
                tmp10 = cResult[5];
              }
              return tmp10;
            }
          }
        }
      }
      const tmp4Result = roundToNearestPixelDefault;
      const tmp4ResultResult = tmp4Result(Math.max(token, 2 * token1 + scaledTextLineHeight + num * result));
      cResult[0] = scaledTextLineHeight;
      cResult[1] = token;
      cResult[2] = token1;
      cResult[3] = result;
      cResult[4] = num;
      cResult[5] = tmp4ResultResult;
      tmp10 = tmp4ResultResult;
    }
  : () => {
      let num = arg0;
      if (arg0 === undefined) {
        num = 1;
      }
      const obj = useToken;
      const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
      const obj2 = useToken;
      const token1 = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
      const obj3 = useScaledTextLineHeight;
      const scaledTextLineHeight = obj3.useScaledTextLineHeight("text-md/semibold");
      const obj4 = useFontScale;
      const fontScale = obj4.useFontScale();
      const tmp5 = roundToNearestPixelDefault;
      return tmp5(
        Math.max(
          token,
          2 * token1 +
            scaledTextLineHeight +
            num * (ActionStatusSubLabel.ACTION_STATUS_SUB_LABEL_LINE_HEIGHT * fontScale),
        ),
      );
    };
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/useUserRowWithSubLabelHeight.tsx",
);

export { getUserRowWithSubLabelHeight };
export const useUserRowWithSubLabelHeight = tmp2;
