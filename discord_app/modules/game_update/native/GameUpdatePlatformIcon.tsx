// discord_app/modules/game_update/native/GameUpdatePlatformIcon.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import MobilePhoneIcon from "../../../design/components/Icon/native/redesign/generated/MobilePhoneIcon.tsx";
import PlatformType from "../../../../discord_common/js/shared/shared-constants/PlatformType.tsx";
import XboxNeutralIcon from "../../../design/components/Icon/native/redesign/generated/XboxNeutralIcon.tsx";
import ScreenIcon from "../../../design/components/Icon/native/redesign/generated/ScreenIcon.tsx";
import PlaystationNeutralIcon from "../../../design/components/Icon/native/redesign/generated/PlaystationNeutralIcon.tsx";
import NintendoSwitchNeutralIcon from "../../../design/components/Icon/native/redesign/generated/NintendoSwitchNeutralIcon.tsx";
import AppleNeutralIcon from "../../../design/components/Icon/native/redesign/generated/AppleNeutralIcon.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

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