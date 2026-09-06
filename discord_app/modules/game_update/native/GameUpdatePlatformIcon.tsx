// discord_app/modules/game_update/native/GameUpdatePlatformIcon.tsx
import PlatformType from "../../../../discord_common/js/shared/shared-constants/PlatformType.tsx";
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
    return jsx(tmp(8879).ScreenIcon, { size, color });
  } else if (tmp(8342).PlatformType.XBOX === platform) {
    obj = { size, color };
    return jsx(tmp(8708).XboxNeutralIcon, { size, color });
  } else if (tmp(8342).PlatformType.PLAYSTATION === platform) {
    const obj1 = { size, color };
    return jsx(tmp(8881).PlaystationNeutralIcon, { size, color });
  } else if (tmp(8342).PlatformType.NINTENDO === platform) {
    const obj2 = { size, color };
    return jsx(tmp(8883).NintendoSwitchNeutralIcon, { size, color });
  } else if (tmp(8342).PlatformType.ANDROID === platform) {
    const obj3 = { size, color };
    return jsx(tmp(6960).MobilePhoneIcon, { size, color });
  } else if (tmp(8342).PlatformType.IOS === platform) {
    obj = { size, color };
    return jsx(tmp(8442).AppleNeutralIcon, { size, color });
  } else {
    return null;
  }
};
