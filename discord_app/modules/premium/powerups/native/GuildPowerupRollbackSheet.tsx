// === Module 12585: GuildPowerupRollbackSheet ===

// Module 12585 (GuildPowerupRollbackSheet)
import jsxProd from "jsxProd" /* 21 */;
import components_Button_Button from "components/Button/Button" /* 5025 */;
import PromoSheet from "PromoSheet" /* 10300 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupRollbackSheet.tsx");

export default function GuildPowerupRollbackSheet(arg0) {
  ({ header, body, ctaText, onCtaPress, onDismiss } = arg0);
  return jsx(PromoSheet.PromoSheet, { title: header, description: body, onDismiss, actions: jsx(components_Button_Button.Button, { variant: "primary", text: ctaText, onPress: onCtaPress }) });
};