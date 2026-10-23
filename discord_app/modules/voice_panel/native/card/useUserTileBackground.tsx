// === Module 18406: useUserTileBackground ===

// Module 18406 (useUserTileBackground)
import c from "c" /* 576 */;
import useProfileTileGradientDefault from "useProfileTileGradient" /* 8740 */;
import DominantColorUtils from "DominantColorUtils" /* 9418 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_panel/native/card/useUserTileBackground.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useUserTileBackground(arg0) {
  const cResult = c.c(7);
  ({ userId, guildId, location: _location, avatarURI } = arg0);
  DominantColorUtils;
  if (cResult[0] === guildId) {
    if (cResult[1] === _location) {
      if (cResult[2] === userId) {
        let tmp5 = cResult[3];
      }
      const tmp7 = useProfileTileGradientDefault(tmp5);
      let str = "transparent";
      if (null == tmp7) {
        str = tmp4;
      }
      if (cResult[4] === tmp7) {
        if (cResult[5] === str) {
          let tmp9 = cResult[6];
        }
        return tmp9;
      }
      const obj2 = { gradientStops: tmp7, backgroundColor: str };
      cResult[4] = tmp7;
      cResult[5] = str;
      cResult[6] = obj2;
      tmp9 = obj2;
    }
  }
  const obj3 = { userId, guildId, location: _location };
  cResult[0] = guildId;
  cResult[1] = _location;
  cResult[2] = userId;
  cResult[3] = obj3;
  tmp5 = obj3;
}) : (function useUserTileBackground(arg0) {
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
});