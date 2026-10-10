// === Module 9095: GameUpdatePlatformIcon ===

// Module 9095 (GameUpdatePlatformIcon)
import c from "c" /* 576 */;
import MobilePhoneIcon from "MobilePhoneIcon" /* 6641 */;
import AppleNeutralIcon from "AppleNeutralIcon" /* 7555 */;
import PlatformType from "PlatformType" /* 8460 */;
import XboxNeutralIcon from "XboxNeutralIcon" /* 8911 */;
import ScreenIcon from "ScreenIcon" /* 9096 */;
import PlaystationNeutralIcon from "PlaystationNeutralIcon" /* 9098 */;
import NintendoSwitchNeutralIcon from "NintendoSwitchNeutralIcon" /* 9100 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_update/native/GameUpdatePlatformIcon.tsx");

export const GameUpdatePlatformIcon = ReactCompilerGating.isReactCompilerEnabled() ? (function GameUpdatePlatformIcon(arg0) {
  const cResult = c.c(18);
  ({ platform, size, color } = arg0);
  let str = "xs";
  if (undefined !== size) {
    str = size;
  }
  if (PlatformType.PlatformType.DESKTOP === platform) {
    if (cResult[0] === color) {
      if (cResult[1] === str) {
        let tmp20 = cResult[2];
      }
      return tmp20;
    }
    const obj2 = { size: str, color };
    const tmp22 = jsx(ScreenIcon.ScreenIcon, { size: str, color });
    cResult[0] = color;
    cResult[1] = str;
    cResult[2] = tmp22;
    tmp20 = tmp22;
  } else if (PlatformType.PlatformType.XBOX === platform) {
    if (cResult[3] === color) {
      if (cResult[4] === str) {
        let tmp17 = cResult[5];
      }
      return tmp17;
    }
    const obj3 = { size: str, color };
    const tmp19 = jsx(XboxNeutralIcon.XboxNeutralIcon, { size: str, color });
    cResult[3] = color;
    cResult[4] = str;
    cResult[5] = tmp19;
    tmp17 = tmp19;
  } else if (PlatformType.PlatformType.PLAYSTATION === platform) {
    if (cResult[6] === color) {
      if (cResult[7] === str) {
        let tmp14 = cResult[8];
      }
      return tmp14;
    }
    const obj4 = { size: str, color };
    const tmp16 = jsx(PlaystationNeutralIcon.PlaystationNeutralIcon, { size: str, color });
    cResult[6] = color;
    cResult[7] = str;
    cResult[8] = tmp16;
    tmp14 = tmp16;
  } else if (PlatformType.PlatformType.NINTENDO === platform) {
    if (cResult[9] === color) {
      if (cResult[10] === str) {
        let tmp11 = cResult[11];
      }
      return tmp11;
    }
    const obj5 = { size: str, color };
    const tmp13 = jsx(NintendoSwitchNeutralIcon.NintendoSwitchNeutralIcon, { size: str, color });
    cResult[9] = color;
    cResult[10] = str;
    cResult[11] = tmp13;
    tmp11 = tmp13;
  } else if (PlatformType.PlatformType.ANDROID === platform) {
    if (cResult[12] === color) {
      if (cResult[13] === str) {
        let tmp8 = cResult[14];
      }
      return tmp8;
    }
    const obj6 = { size: str, color };
    const tmp10 = jsx(MobilePhoneIcon.MobilePhoneIcon, { size: str, color });
    cResult[12] = color;
    cResult[13] = str;
    cResult[14] = tmp10;
    tmp8 = tmp10;
  } else if (PlatformType.PlatformType.IOS === platform) {
    if (cResult[15] === color) {
      if (cResult[16] === str) {
        let tmp5 = cResult[17];
      }
      return tmp5;
    }
    const obj7 = { size: str, color };
    const tmp7 = jsx(AppleNeutralIcon.AppleNeutralIcon, { size: str, color });
    cResult[15] = color;
    cResult[16] = str;
    cResult[17] = tmp7;
    tmp5 = tmp7;
  } else {
    return null;
  }
}) : (function GameUpdatePlatformIcon(color) {
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
});