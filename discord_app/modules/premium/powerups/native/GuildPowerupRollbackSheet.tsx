// === Module 12855: GuildPowerupRollbackSheet ===

// Module 12855 (GuildPowerupRollbackSheet)
import jsxProd from "jsxProd" /* 21 */;
import components_Button_Button from "components/Button/Button" /* 5271 */;
import PromoSheet from "PromoSheet" /* 10573 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupRollbackSheet.tsx");

export default function GuildPowerupRollbackSheet(ctaText) {
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
};