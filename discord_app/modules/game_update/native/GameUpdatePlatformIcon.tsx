// === Module 12868: GameUpdatePlatformIcon ===

// Module 12868 (GameUpdatePlatformIcon)
import noopAll from "noop" /* 19 */;
import PlatformType from "PlatformType" /* 8632 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/game_update/native/GameUpdatePlatformIcon.tsx");

export const GameUpdatePlatformIcon = function GameUpdatePlatformIcon(color) {
  ({ platform, size } = color);
  if (size === undefined) {
    size = "xs";
  }
  color = color.color;
  if (PlatformType.PlatformType.DESKTOP === platform) {
    let obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(12869).ScreenIcon, { size: null, color: null });
  } else if (tmp(8632).PlatformType.XBOX === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(8853).XboxNeutralIcon, { size: null, color: null });
  } else if (tmp(8632).PlatformType.PLAYSTATION === platform) {
    obj1 = { size: null, color: null };
    obj1[0] = size;
    obj1[1] = color;
    return jsx(tmp(12871).PlaystationNeutralIcon, { size: null, color: null });
  } else if (tmp(8632).PlatformType.NINTENDO === platform) {
    const obj2 = { size: null, color: null };
    obj2[0] = size;
    obj2[1] = color;
    return jsx(tmp(12873).NintendoSwitchNeutralIcon, { size: null, color: null });
  } else if (tmp(8632).PlatformType.ANDROID === platform) {
    const obj3 = { size: null, color: null };
    obj3[0] = size;
    obj3[1] = color;
    return jsx(tmp(7745).MobilePhoneIcon, { size: null, color: null });
  } else if (tmp(8632).PlatformType.IOS === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(12875).AppleNeutralIcon, { size: null, color: null });
  } else {
    return null;
  }
};