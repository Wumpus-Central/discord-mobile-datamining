// discord_app/modules/premium/powerups/native/GuildPowerupRollbackSheet.tsx
import set from "../../../../../_runtime/00002_set.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import PromoSheet from "../../../../design/components/Sheet/native/PromoSheet.native.tsx";

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupRollbackSheet.tsx");

export default function GuildPowerupRollbackSheet(arg0) {
  ({ header, body, ctaText, onCtaPress, onDismiss } = arg0);
  return jsx(PromoSheet.PromoSheet, {
    title: header,
    description: body,
    onDismiss,
    actions: jsx(Button.Button, { variant: "primary", text: ctaText, onPress: onCtaPress }),
  });
}
