// discord_app/modules/game_update/native/GameUpdatePlatformIcon.tsx
import "noop";
import { jsx } from "jsxProd";
import { PlatformType } from "../../../../discord_common/js/shared/shared-constants/PlatformType.tsx";

const require = arg1;
const result = require("PlatformType").fileFinishedImporting("modules/game_update/native/GameUpdatePlatformIcon.tsx");

export const GameUpdatePlatformIcon = function GameUpdatePlatformIcon(color) {
  let platform;
  let size;
  ({ platform, size } = color);
  if (size === undefined) {
    size = "xs";
  }
  color = color.color;
  if (PlatformType.PlatformType.DESKTOP === platform) {
    let obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(12098).ScreenIcon, { size: null, color: null });
  } else if (tmp(8828).PlatformType.XBOX === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(9223).XboxNeutralIcon, { size: null, color: null });
  } else if (tmp(8828).PlatformType.PLAYSTATION === platform) {
    const obj1 = { size: null, color: null };
    obj1[0] = size;
    obj1[1] = color;
    return jsx(tmp(12100).PlaystationNeutralIcon, { size: null, color: null });
  } else if (tmp(8828).PlatformType.NINTENDO === platform) {
    const obj2 = { size: null, color: null };
    obj2[0] = size;
    obj2[1] = color;
    return jsx(tmp(12102).NintendoSwitchNeutralIcon, { size: null, color: null });
  } else if (tmp(8828).PlatformType.ANDROID === platform) {
    const obj3 = { size: null, color: null };
    obj3[0] = size;
    obj3[1] = color;
    return jsx(tmp(8410).MobilePhoneIcon, { size: null, color: null });
  } else if (tmp(8828).PlatformType.IOS === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(12104).AppleNeutralIcon, { size: null, color: null });
  } else {
    return null;
  }
};