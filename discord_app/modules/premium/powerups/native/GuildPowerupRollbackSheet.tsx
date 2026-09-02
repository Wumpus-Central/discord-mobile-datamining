// === Module 12303: GuildPowerupRollbackSheet ===

// Module 12303 (GuildPowerupRollbackSheet)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import Button from "Button" /* 4928 */;
import PromoSheet from "PromoSheet" /* 10335 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupRollbackSheet.tsx");

export default function GuildPowerupRollbackSheet(arg0) {
  ({ header, body, ctaText, onCtaPress, onDismiss } = arg0);
  return jsx(PromoSheet.PromoSheet, { title: header, description: body, onDismiss, actions: jsx(Button.Button, { variant: "primary", text: ctaText, onPress: onCtaPress }) });
};