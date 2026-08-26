// discord_app/modules/game_update/native/GameUpdatePlatformIcon.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import PlatformType from "../../../../discord_common/js/shared/shared-constants/PlatformType.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/game_update/native/GameUpdatePlatformIcon.tsx");

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
    return jsx(tmp(12461).ScreenIcon, { size: null, color: null });
  } else if (tmp(9120).PlatformType.XBOX === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(9521).XboxNeutralIcon, { size: null, color: null });
  } else if (tmp(9120).PlatformType.PLAYSTATION === platform) {
    obj1 = { size: null, color: null };
    obj1[0] = size;
    obj1[1] = color;
    return jsx(tmp(12463).PlaystationNeutralIcon, { size: null, color: null });
  } else if (tmp(9120).PlatformType.NINTENDO === platform) {
    const obj2 = { size: null, color: null };
    obj2[0] = size;
    obj2[1] = color;
    return jsx(tmp(12465).NintendoSwitchNeutralIcon, { size: null, color: null });
  } else if (tmp(9120).PlatformType.ANDROID === platform) {
    const obj3 = { size: null, color: null };
    obj3[0] = size;
    obj3[1] = color;
    return jsx(tmp(8049).MobilePhoneIcon, { size: null, color: null });
  } else if (tmp(9120).PlatformType.IOS === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(12467).AppleNeutralIcon, { size: null, color: null });
  } else {
    return null;
  }
};