// === Module 12014: GameUpdatePlatformIcon ===

// Module 12014 (GameUpdatePlatformIcon)
import noopAll from "noop" /* 19 */;
import MobilePhoneIcon from "MobilePhoneIcon" /* 8597 */;
import PlatformType from "PlatformType" /* 9049 */;
import XboxNeutralIcon from "XboxNeutralIcon" /* 9123 */;
import ScreenIcon from "ScreenIcon" /* 12015 */;
import PlaystationNeutralIcon from "PlaystationNeutralIcon" /* 12017 */;
import NintendoSwitchNeutralIcon from "NintendoSwitchNeutralIcon" /* 12019 */;
import AppleNeutralIcon from "AppleNeutralIcon" /* 12021 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/game_update/native/GameUpdatePlatformIcon.tsx");

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
    return jsx(ScreenIcon.ScreenIcon, { size: null, color: null });
  } else if (PlatformType.PlatformType.XBOX === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(XboxNeutralIcon.XboxNeutralIcon, { size: null, color: null });
  } else if (PlatformType.PlatformType.PLAYSTATION === platform) {
    obj1 = { size: null, color: null };
    obj1[0] = size;
    obj1[1] = color;
    return jsx(PlaystationNeutralIcon.PlaystationNeutralIcon, { size: null, color: null });
  } else if (PlatformType.PlatformType.NINTENDO === platform) {
    const obj2 = { size: null, color: null };
    obj2[0] = size;
    obj2[1] = color;
    return jsx(NintendoSwitchNeutralIcon.NintendoSwitchNeutralIcon, { size: null, color: null });
  } else if (PlatformType.PlatformType.ANDROID === platform) {
    const obj3 = { size: null, color: null };
    obj3[0] = size;
    obj3[1] = color;
    return jsx(MobilePhoneIcon.MobilePhoneIcon, { size: null, color: null });
  } else if (PlatformType.PlatformType.IOS === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(AppleNeutralIcon.AppleNeutralIcon, { size: null, color: null });
  } else {
    return null;
  }
};