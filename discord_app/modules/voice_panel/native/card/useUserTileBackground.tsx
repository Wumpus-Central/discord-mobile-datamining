// === Module 19055: useUserTileBackground ===

// Module 19055 (useUserTileBackground)
import useProfileTileGradientDefault from "useProfileTileGradient" /* 8816 */;
import DominantColorUtils from "DominantColorUtils" /* 9500 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_panel/native/card/useUserTileBackground.tsx");

export default function useUserTileBackground(arg0) {
  ({ userId, guildId, avatarURI, location: _location } = arg0);
  const dominantColorFromImage = DominantColorUtils.useDominantColorFromImage(avatarURI);
  const tmp2 = useProfileTileGradientDefault({ userId, guildId, location: _location });
  const obj2 = { gradientStops: tmp2, backgroundColor: null };
  let str = "transparent";
  if (null == tmp2) {
    str = dominantColorFromImage;
  }
  obj2.backgroundColor = str;
  return obj2;
};