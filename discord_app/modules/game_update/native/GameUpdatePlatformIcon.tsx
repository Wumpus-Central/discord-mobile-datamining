// discord_app/modules/game_update/native/GameUpdatePlatformIcon.tsx
import "noop";
import { jsx } from "jsxProd";

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
  if (require(8181) /* PlatformType */.PlatformType.DESKTOP === platform) {
    let obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(11940).ScreenIcon, { size: null, color: null });
  } else if (tmp(8181).PlatformType.XBOX === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(8519).XboxNeutralIcon, { size: null, color: null });
  } else if (tmp(8181).PlatformType.PLAYSTATION === platform) {
    const obj1 = { size: null, color: null };
    obj1[0] = size;
    obj1[1] = color;
    return jsx(tmp(11942).PlaystationNeutralIcon, { size: null, color: null });
  } else if (tmp(8181).PlatformType.NINTENDO === platform) {
    const obj2 = { size: null, color: null };
    obj2[0] = size;
    obj2[1] = color;
    return jsx(tmp(11944).NintendoSwitchNeutralIcon, { size: null, color: null });
  } else if (tmp(8181).PlatformType.ANDROID === platform) {
    const obj3 = { size: null, color: null };
    obj3[0] = size;
    obj3[1] = color;
    return jsx(tmp(9217).MobilePhoneIcon, { size: null, color: null });
  } else if (tmp(8181).PlatformType.IOS === platform) {
    obj = { size: null, color: null };
    obj[0] = size;
    obj[1] = color;
    return jsx(tmp(11946).AppleNeutralIcon, { size: null, color: null });
  } else {
    return null;
  }
};