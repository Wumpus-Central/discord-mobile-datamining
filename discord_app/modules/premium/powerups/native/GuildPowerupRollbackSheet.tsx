// discord_app/modules/premium/powerups/native/GuildPowerupRollbackSheet.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import PromoSheet from "../../../../design/components/Sheet/native/PromoSheet.native.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupRollbackSheet.tsx");

export default function GuildPowerupRollbackSheet(arg0) {
  ({ header, body, ctaText, onCtaPress, onDismiss } = arg0);
  return jsx(PromoSheet.PromoSheet, {
    title: header,
    description: body,
    onDismiss,
    actions: jsx(components_Button_Button.Button, { variant: "primary", text: ctaText, onPress: onCtaPress }),
  });
}
