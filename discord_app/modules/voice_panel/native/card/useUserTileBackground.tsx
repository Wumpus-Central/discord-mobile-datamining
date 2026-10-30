// discord_app/modules/voice_panel/native/card/useUserTileBackground.tsx
import useProfileTileGradientDefault from "../../../calls/native/useProfileTileGradient.tsx";
import DominantColorUtils from "DominantColorUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
}
