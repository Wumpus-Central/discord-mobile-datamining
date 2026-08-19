// === Module 11684: GuildPowerupRollbackSheet ===

// Module 11684 (GuildPowerupRollbackSheet)
import obj132 from "obj132" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import Button from "Button" /* 4745 */;
import PromoSheet from "PromoSheet" /* 8017 */;

const jsx = jsxProd.jsx;
const result = obj132.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupRollbackSheet.tsx");

export default function GuildPowerupRollbackSheet(arg0) {
  ({ header, body, ctaText, onCtaPress, onDismiss } = arg0);
  return jsx(PromoSheet.PromoSheet, { title: header, description: body, onDismiss, actions: jsx(Button.Button, { variant: "primary", text: ctaText, onPress: onCtaPress }) });
};