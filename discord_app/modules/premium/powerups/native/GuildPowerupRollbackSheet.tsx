// === Module 12205: GuildPowerupRollbackSheet ===

// Module 12205 (GuildPowerupRollbackSheet)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import components_Button_Button from "components/Button/Button" /* 5376 */;
import PromoSheet from "PromoSheet" /* 10290 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupRollbackSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupRollbackSheet(arg0) {
  const cResult = c.c(8);
  ({ header, body, ctaText, onCtaPress, onDismiss } = arg0);
  if (cResult[0] === ctaText) {
    if (cResult[1] === onCtaPress) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === body) {
      if (cResult[4] === header) {
        if (cResult[5] === onDismiss) {
          if (cResult[6] === tmp4) {
            let tmp7 = cResult[7];
          }
          return tmp7;
        }
      }
    }
    const obj2 = { title: header, description: body, onDismiss, actions: tmp4 };
    const tmp9 = jsx(PromoSheet.PromoSheet, { title: header, description: body, onDismiss, actions: tmp4 });
    cResult[3] = body;
    cResult[4] = header;
    cResult[5] = onDismiss;
    cResult[6] = tmp4;
    cResult[7] = tmp9;
    tmp7 = tmp9;
  }
  let tmp5;
  if (null != ctaText) {
    const obj3 = { variant: "primary", text: ctaText, onPress: onCtaPress };
    tmp5 = jsx(components_Button_Button.Button, { variant: "primary", text: ctaText, onPress: onCtaPress });
  }
  cResult[0] = ctaText;
  cResult[1] = onCtaPress;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function GuildPowerupRollbackSheet(ctaText) {
  ctaText = ctaText.ctaText;
  ({ header, body, onCtaPress, onDismiss } = ctaText);
  const obj = { title: header, description: body, onDismiss, actions: null };
  let tmpResult;
  if (null != ctaText) {
    const obj2 = { variant: "primary", text: ctaText, onPress: onCtaPress };
    tmpResult = jsx(components_Button_Button.Button, { variant: "primary", text: ctaText, onPress: onCtaPress });
  }
  obj.actions = tmpResult;
  return jsx(PromoSheet.PromoSheet, { title: header, description: body, onDismiss, actions: null });
});