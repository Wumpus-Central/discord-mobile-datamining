// === Module 8543: GameUpdatePlatformIcon ===

// Module 8543 (GameUpdatePlatformIcon)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import MobilePhoneIcon from "MobilePhoneIcon" /* 6448 */;
import PlatformType from "PlatformType" /* 8018 */;
import AppleNeutralIcon from "AppleNeutralIcon" /* 8125 */;
import XboxNeutralIcon from "XboxNeutralIcon" /* 8352 */;
import ScreenIcon from "ScreenIcon" /* 8544 */;
import PlaystationNeutralIcon from "PlaystationNeutralIcon" /* 8546 */;
import NintendoSwitchNeutralIcon from "NintendoSwitchNeutralIcon" /* 8548 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let color;
  let platform;
  const obj = react2;
  const cResult = obj.c(18);
  ({ platform, size, color } = arg0);
  let str = "xs";
  if (undefined !== size) {
    str = size;
  }
  if (PlatformType.PlatformType.DESKTOP === platform) {
    if (cResult[0] === color) {
      let tmp20;
      if (cResult[1] === str) {
        tmp20 = cResult[2];
      }
      return tmp20;
    }
    const tmp22 = jsx(ScreenIcon.ScreenIcon, { size: str, color });
    cResult[0] = color;
    cResult[1] = str;
    cResult[2] = tmp22;
    tmp20 = tmp22;
  } else if (PlatformType.PlatformType.XBOX === platform) {
    if (cResult[3] === color) {
      let tmp17;
      if (cResult[4] === str) {
        tmp17 = cResult[5];
      }
      return tmp17;
    }
    const tmp19 = jsx(XboxNeutralIcon.XboxNeutralIcon, { size: str, color });
    cResult[3] = color;
    cResult[4] = str;
    cResult[5] = tmp19;
    tmp17 = tmp19;
  } else if (PlatformType.PlatformType.PLAYSTATION === platform) {
    if (cResult[6] === color) {
      let tmp14;
      if (cResult[7] === str) {
        tmp14 = cResult[8];
      }
      return tmp14;
    }
    const tmp16 = jsx(PlaystationNeutralIcon.PlaystationNeutralIcon, { size: str, color });
    cResult[6] = color;
    cResult[7] = str;
    cResult[8] = tmp16;
    tmp14 = tmp16;
  } else if (PlatformType.PlatformType.NINTENDO === platform) {
    if (cResult[9] === color) {
      let tmp11;
      if (cResult[10] === str) {
        tmp11 = cResult[11];
      }
      return tmp11;
    }
    const tmp13 = jsx(NintendoSwitchNeutralIcon.NintendoSwitchNeutralIcon, { size: str, color });
    cResult[9] = color;
    cResult[10] = str;
    cResult[11] = tmp13;
    tmp11 = tmp13;
  } else if (PlatformType.PlatformType.ANDROID === platform) {
    if (cResult[12] === color) {
      let tmp8;
      if (cResult[13] === str) {
        tmp8 = cResult[14];
      }
      return tmp8;
    }
    const tmp10 = jsx(MobilePhoneIcon.MobilePhoneIcon, { size: str, color });
    cResult[12] = color;
    cResult[13] = str;
    cResult[14] = tmp10;
    tmp8 = tmp10;
  } else if (PlatformType.PlatformType.IOS === platform) {
    if (cResult[15] === color) {
      let tmp5;
      if (cResult[16] === str) {
        tmp5 = cResult[17];
      }
      return tmp5;
    }
    const tmp7 = jsx(AppleNeutralIcon.AppleNeutralIcon, { size: str, color });
    cResult[15] = color;
    cResult[16] = str;
    cResult[17] = tmp7;
    tmp5 = tmp7;
  } else {
    return null;
  }
}) : ((color) => {
  let platform;
  ({ platform, size } = color);
  if (size === undefined) {
    size = "xs";
  }
  color = color.color;
  if (PlatformType.PlatformType.DESKTOP === platform) {
    return jsx(ScreenIcon.ScreenIcon, { size, color });
  } else if (PlatformType.PlatformType.XBOX === platform) {
    return jsx(XboxNeutralIcon.XboxNeutralIcon, { size, color });
  } else if (PlatformType.PlatformType.PLAYSTATION === platform) {
    return jsx(PlaystationNeutralIcon.PlaystationNeutralIcon, { size, color });
  } else if (PlatformType.PlatformType.NINTENDO === platform) {
    return jsx(NintendoSwitchNeutralIcon.NintendoSwitchNeutralIcon, { size, color });
  } else if (PlatformType.PlatformType.ANDROID === platform) {
    return jsx(MobilePhoneIcon.MobilePhoneIcon, { size, color });
  } else if (PlatformType.PlatformType.IOS === platform) {
    return jsx(AppleNeutralIcon.AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/game_update/native/GameUpdatePlatformIcon.tsx");

export const GameUpdatePlatformIcon = tmp3;