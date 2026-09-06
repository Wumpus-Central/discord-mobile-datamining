// === Module 8878: GameUpdatePlatformIcon ===

// Module 8878 (GameUpdatePlatformIcon)
import MobilePhoneIcon from "MobilePhoneIcon" /* 6960 */;
import PlatformType from "PlatformType" /* 8342 */;
import AppleNeutralIcon from "AppleNeutralIcon" /* 8442 */;
import XboxNeutralIcon from "XboxNeutralIcon" /* 8708 */;
import ScreenIcon from "ScreenIcon" /* 8879 */;
import PlaystationNeutralIcon from "PlaystationNeutralIcon" /* 8881 */;
import NintendoSwitchNeutralIcon from "NintendoSwitchNeutralIcon" /* 8883 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_update/native/GameUpdatePlatformIcon.tsx");

export const GameUpdatePlatformIcon = function GameUpdatePlatformIcon(color) {
  ({ platform, size } = color);
  if (size === undefined) {
    size = "xs";
  }
  color = color.color;
  if (PlatformType.PlatformType.DESKTOP === platform) {
    let obj = { size, color };
    return jsx(ScreenIcon.ScreenIcon, { size, color });
  } else if (PlatformType.PlatformType.XBOX === platform) {
    obj = { size, color };
    return jsx(XboxNeutralIcon.XboxNeutralIcon, { size, color });
  } else if (PlatformType.PlatformType.PLAYSTATION === platform) {
    const obj1 = { size, color };
    return jsx(PlaystationNeutralIcon.PlaystationNeutralIcon, { size, color });
  } else if (PlatformType.PlatformType.NINTENDO === platform) {
    const obj2 = { size, color };
    return jsx(NintendoSwitchNeutralIcon.NintendoSwitchNeutralIcon, { size, color });
  } else if (PlatformType.PlatformType.ANDROID === platform) {
    const obj3 = { size, color };
    return jsx(MobilePhoneIcon.MobilePhoneIcon, { size, color });
  } else if (PlatformType.PlatformType.IOS === platform) {
    obj = { size, color };
    return jsx(AppleNeutralIcon.AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};