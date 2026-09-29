// === Module 8511: GameUpdatePlatformIcon ===

// Module 8511 (GameUpdatePlatformIcon)
import MobilePhoneIcon from "MobilePhoneIcon" /* 6545 */;
import PlatformType from "PlatformType" /* 7955 */;
import AppleNeutralIcon from "AppleNeutralIcon" /* 8065 */;
import XboxNeutralIcon from "XboxNeutralIcon" /* 8326 */;
import ScreenIcon from "ScreenIcon" /* 8512 */;
import PlaystationNeutralIcon from "PlaystationNeutralIcon" /* 8514 */;
import NintendoSwitchNeutralIcon from "NintendoSwitchNeutralIcon" /* 8516 */;
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