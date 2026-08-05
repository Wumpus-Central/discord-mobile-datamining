// discord_app/modules/premium/powerups/native/GuildPowerupRollbackSheet.tsx
import { jsx } from "jsxProd";

const result = require("Button").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupRollbackSheet.tsx");

export default function GuildPowerupRollbackSheet(arg0) {
  let body;
  let ctaText;
  let header;
  let onCtaPress;
  let onDismiss;
  ({ header, body, ctaText, onCtaPress, onDismiss } = arg0);
  const obj = { title: header, description: body, onDismiss, actions: null };
  obj[3] = jsx(require("../../../../design/components/Button/native/Button.native.tsx") /* Button */.Button, { variant: "primary", text: ctaText, onPress: onCtaPress });
  return jsx(require("../../../../design/components/Sheet/native/PromoSheet.native.tsx") /* PromoSheet */.PromoSheet, { title: header, description: body, onDismiss, actions: null });
};