// discord_app/modules/main_tabs_v2/native/shared_components/user_list/useUserRowWithSubLabelHeight.tsx
import c from "../../../../../../_runtime/00576_c.js";
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
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/useUserRowWithSubLabelHeight.tsx",
);

export { getUserRowWithSubLabelHeight };
export const useUserRowWithSubLabelHeight = ReactCompilerGating.isReactCompilerEnabled()
  ? function useUserRowWithSubLabelHeight(arg0) {
      const cResult = c.c(6);
      let num = 1;
      if (undefined !== arg0) {
        num = arg0;
      }
      const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
      const tmpResult = useToken;
      const token1 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
      const tmpResult4 = useToken;
      const scaledTextLineHeight = useScaledTextLineHeight.useScaledTextLineHeight("text-md/semibold");
      const tmpResult5 = useScaledTextLineHeight;
      const fontScale = useFontScale.useFontScale();
      const result = ActionStatusSubLabel.ACTION_STATUS_SUB_LABEL_LINE_HEIGHT * fontScale;
      if (cResult[0] === scaledTextLineHeight) {
        if (cResult[1] === token) {
          if (cResult[2] === token1) {
            if (cResult[3] === result) {
              if (cResult[4] === num) {
                let tmp10 = cResult[5];
              }
              return tmp10;
            }
          }
        }
      }
      const tmpResult6 = useFontScale;
      const tmp4ResultResult = roundToNearestPixelDefault(
        Math.max(token, 2 * token1 + scaledTextLineHeight + num * result),
      );
      cResult[0] = scaledTextLineHeight;
      cResult[1] = token;
      cResult[2] = token1;
      cResult[3] = result;
      cResult[4] = num;
      cResult[5] = tmp4ResultResult;
      tmp10 = tmp4ResultResult;
      const tmp4Result = roundToNearestPixelDefault;
    }
  : function useUserRowWithSubLabelHeight() {
      let num = arg0;
      if (arg0 === undefined) {
        num = 1;
      }
      const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
      const token1 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
      const scaledTextLineHeight = useScaledTextLineHeight.useScaledTextLineHeight("text-md/semibold");
      const fontScale = useFontScale.useFontScale();
      return roundToNearestPixelDefault(
        Math.max(
          token,
          2 * token1 +
            scaledTextLineHeight +
            num * (ActionStatusSubLabel.ACTION_STATUS_SUB_LABEL_LINE_HEIGHT * fontScale),
        ),
      );
    };
