// === Module 12502: useTruncatedGradientColors ===

// Module 12502 (useTruncatedGradientColors)
import react from "react" /* 19 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import useToken from "useToken" /* 4586 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useMemo = react.useMemo;
let closure_4 = createStyles.createStyles({ gradient: { height: 40 } });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp6;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(10);
  const tmp3 = closure_4();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT);
  if (cResult[0] !== token) {
    const obj3 = _modDef683(token);
    const alphaResult = obj3.alpha(0);
    const hexResult = alphaResult.hex();
    cResult[0] = token;
    cResult[1] = hexResult;
    tmp6 = hexResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== token) {
    const obj5 = _modDef683(token);
    const alphaResult1 = obj5.alpha(0.72);
    const hexResult1 = alphaResult1.hex();
    cResult[2] = token;
    cResult[3] = hexResult1;
    tmp8 = hexResult1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === tmp6) {
    let tmp10;
    if (cResult[5] === tmp8) {
      tmp10 = cResult[6];
    }
    if (cResult[7] === tmp10) {
      let tmp11;
      if (cResult[8] === tmp3.gradient) {
        tmp11 = cResult[9];
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
}) : (() => {
  let items;
  let token;
  const tmp = closure_4();
  let obj = token(4586);
  token = obj.useToken(nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT);
  const obj2 = {
    gradientColors: useMemo(() => {
      const items = [, ];
      const obj = _modDef683(token);
      const alphaResult = obj.alpha(0);
      items[0] = alphaResult.hex();
      const obj3 = _modDef683(token);
      const alphaResult1 = obj3.alpha(0.72);
      items[1] = alphaResult1.hex();
      return items;
    }, items),
    gradientStyles: tmp.gradient
  };
  items = [token];
  return obj2;
});
const result = size.fileFinishedImporting("modules/in_app_notifications/native/hooks/useTruncatedGradientColors.tsx");

export default tmp2;