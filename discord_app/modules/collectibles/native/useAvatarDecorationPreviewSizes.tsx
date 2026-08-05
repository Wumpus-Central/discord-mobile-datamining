// discord_app/modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx
let result = require("set").fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = function useAvatarDecorationPreviewSizes() {
  const size = require("../../screen/useWindowDimensions.native.tsx")();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * require("AvatarDecorationSampleV2.tsx") /* AvatarDecorationSampleV2 */.avatarPlaceholderSizeRatio };
};