// === Module 9007: GameUpdatePlatformIcon ===

// Module 9007 (GameUpdatePlatformIcon)
import MobilePhoneIcon from "MobilePhoneIcon" /* 7061 */;
import PlatformType from "PlatformType" /* 8460 */;
import AppleNeutralIcon from "AppleNeutralIcon" /* 8567 */;
import XboxNeutralIcon from "XboxNeutralIcon" /* 8831 */;
import ScreenIcon from "ScreenIcon" /* 9008 */;
import PlaystationNeutralIcon from "PlaystationNeutralIcon" /* 9010 */;
import NintendoSwitchNeutralIcon from "NintendoSwitchNeutralIcon" /* 9012 */;
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