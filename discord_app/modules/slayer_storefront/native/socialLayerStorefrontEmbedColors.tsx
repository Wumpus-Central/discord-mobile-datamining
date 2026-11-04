// discord_app/modules/slayer_storefront/native/socialLayerStorefrontEmbedColors.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const nativeStyleProperties = createStyles.createNativeStyleProperties({
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  overlayTextColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT,
});
const result = size.fileFinishedImporting("modules/slayer_storefront/native/socialLayerStorefrontEmbedColors.tsx");

export const getSocialLayerStorefrontEmbedColors = nativeStyleProperties;
