// === Module 12548: GameUpdatePlatformIcon ===

// Module 12548 (GameUpdatePlatformIcon)
import noopAll from "noop" /* 19 */;
import PlatformType from "PlatformType" /* 8544 */;
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
    return jsx(tmp(12549).ScreenIcon, { size: null, color: null });
  } else if (tmp(8544).PlatformType.XBOX === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(8759).XboxNeutralIcon, { size: null, color: null });
  } else if (tmp(8544).PlatformType.PLAYSTATION === platform) {
    obj1 = { size: null, color: null };
    obj1[0] = size;
    obj1[1] = color;
    return jsx(tmp(12551).PlaystationNeutralIcon, { size: null, color: null });
  } else if (tmp(8544).PlatformType.NINTENDO === platform) {
    const obj2 = { size: null, color: null };
    obj2[0] = size;
    obj2[1] = color;
    return jsx(tmp(12553).NintendoSwitchNeutralIcon, { size: null, color: null });
  } else if (tmp(8544).PlatformType.ANDROID === platform) {
    const obj3 = { size: null, color: null };
    obj3[0] = size;
    obj3[1] = color;
    return jsx(tmp(7666).MobilePhoneIcon, { size: null, color: null });
  } else if (tmp(8544).PlatformType.IOS === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(12555).AppleNeutralIcon, { size: null, color: null });
  } else {
    return null;
  }
};