// === Module 9160: GameUpdatePlatformIcon ===

// Module 9160 (GameUpdatePlatformIcon)
import MobilePhoneIcon from "MobilePhoneIcon" /* 7203 */;
import PlatformType from "PlatformType" /* 8613 */;
import AppleNeutralIcon from "AppleNeutralIcon" /* 8721 */;
import XboxNeutralIcon from "XboxNeutralIcon" /* 8979 */;
import ScreenIcon from "ScreenIcon" /* 9161 */;
import PlaystationNeutralIcon from "PlaystationNeutralIcon" /* 9163 */;
import NintendoSwitchNeutralIcon from "NintendoSwitchNeutralIcon" /* 9165 */;
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
    const obj2 = { size, color };
    return jsx(ScreenIcon.ScreenIcon, { size, color });
  } else if (PlatformType.PlatformType.XBOX === platform) {
    const obj3 = { size, color };
    return jsx(XboxNeutralIcon.XboxNeutralIcon, { size, color });
  } else if (PlatformType.PlatformType.PLAYSTATION === platform) {
    const obj4 = { size, color };
    return jsx(PlaystationNeutralIcon.PlaystationNeutralIcon, { size, color });
  } else if (PlatformType.PlatformType.NINTENDO === platform) {
    const obj5 = { size, color };
    return jsx(NintendoSwitchNeutralIcon.NintendoSwitchNeutralIcon, { size, color });
  } else if (PlatformType.PlatformType.ANDROID === platform) {
    const obj6 = { size, color };
    return jsx(MobilePhoneIcon.MobilePhoneIcon, { size, color });
  } else if (PlatformType.PlatformType.IOS === platform) {
    const obj = { size, color };
    return jsx(AppleNeutralIcon.AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};