// === Module 11136: handleSharedClientThemeViewed ===

// Module 11136 (handleSharedClientThemeViewed)
import obj132 from "obj132" /* 2 */;
import encodeProperties from "encodeProperties" /* 503 */;
import trackImpression from "trackImpression" /* 9177 */;

const result = obj132.fileFinishedImporting("modules/client_themes/native/chat/sharedClientThemeViewed.tsx");

export const handleSharedClientThemeViewed = function handleSharedClientThemeViewed() {
  const obj = { type: encodeProperties.ImpressionTypes.VIEW, name: encodeProperties.ImpressionNames.CUSTOM_THEME_SHARE, properties: {} };
  obj.trackImpression(obj);
};