// discord_app/modules/game_update/native/GameUpdatePlatformIcon.tsx
import MobilePhoneIcon from "../../../design/components/Icon/native/redesign/generated/MobilePhoneIcon.tsx";
import PlatformType from "../../../../discord_common/js/shared/shared-constants/PlatformType.tsx";
import AppleNeutralIcon from "../../../design/components/Icon/native/redesign/generated/AppleNeutralIcon.tsx";
import XboxNeutralIcon from "../../../design/components/Icon/native/redesign/generated/XboxNeutralIcon.tsx";
import ScreenIcon from "../../../design/components/Icon/native/redesign/generated/ScreenIcon.tsx";
import PlaystationNeutralIcon from "../../../design/components/Icon/native/redesign/generated/PlaystationNeutralIcon.tsx";
import NintendoSwitchNeutralIcon from "../../../design/components/Icon/native/redesign/generated/NintendoSwitchNeutralIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
