// discord_app/modules/in_app_notifications/native/hooks/useTruncatedGradientColors.tsx
import _mod19 from "../../../../../_runtime/metro/00019__.js";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../_runtime/metro/00683__.js";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const useMemo = _mod19.useMemo;
let closure_4 = createStyles.createStyles({ gradient: { height: 40 } });
const result = size.fileFinishedImporting("modules/in_app_notifications/native/hooks/useTruncatedGradientColors.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useTruncatedGradientColors() {
      const cResult = c.c(10);
      const tmp3 = closure_4();
      const token = useToken.useToken(nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT);
      if (cResult[0] !== token) {
        const obj3 = _modDef683(token);
        const hexResult = _modDef683(token).alpha(0).hex();
        cResult[0] = token;
        cResult[1] = hexResult;
        let tmp6 = hexResult;
        const alphaResult = _modDef683(token).alpha(0);
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== token) {
        const obj5 = _modDef683(token);
        const hexResult1 = _modDef683(token).alpha(0.72).hex();
        cResult[2] = token;
        cResult[3] = hexResult1;
        let tmp8 = hexResult1;
        const alphaResult1 = _modDef683(token).alpha(0.72);
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === tmp6) {
        if (cResult[5] === tmp8) {
          let tmp10 = cResult[6];
        }
        if (cResult[7] === tmp10) {
          if (cResult[8] === tmp3.gradient) {
            let tmp11 = cResult[9];
          }
          return tmp11;
        }
        const obj4 = { gradientColors: tmp10, gradientStyles: tmp3.gradient };
        cResult[7] = tmp10;
        cResult[8] = tmp3.gradient;
        cResult[9] = obj4;
        tmp11 = obj4;
      }
      const items = [tmp6, tmp8];
      cResult[4] = tmp6;
      cResult[5] = tmp8;
      cResult[6] = items;
      tmp10 = items;
    }
  : function useTruncatedGradientColors() {
      const tmp = closure_4();
      token = token(4779).useToken(nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT);
      const obj2 = { gradientColors: null, gradientStyles: tmp.gradient };
      let items = [token];
      obj2.gradientColors = useMemo(() => {
        const obj = _modDef683(token);
        const items = [_modDef683(token).alpha(0).hex()];
        const alphaResult = _modDef683(token).alpha(0);
        const obj3 = _modDef683(token);
        items[1] = _modDef683(token).alpha(0.72).hex();
        return items;
      }, items);
      return obj2;
    };
