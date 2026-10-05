// discord_app/modules/user_profile/utils/getActivityPlatformDisplayName.tsx
import Constants from "../../../Constants.tsx";
import intl4 from "../../../intl/index.native.tsx";
import isOnMetaHorizonDefault from "../../activities/utils/isOnMetaHorizon.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/user_profile/utils/getActivityPlatformDisplayName.tsx");

export default function getActivityPlatformDisplayName(type, arg1) {
  type = type.type;
  if (PlatformTypes.XBOX === type) {
    const intl3 = intl4.intl;
    return intl3.string(intl4.t.Nfvo72);
  } else if (PlatformTypes.PLAYSTATION === type) {
    const intl2 = intl4.intl;
    return intl2.string(intl4.t.fFl4jo);
  } else if (PlatformTypes.META_QUEST_OR_HORIZON === type) {
    let stringResult;
    const tmp5 = isOnMetaHorizonDefault(arg1);
    const intl = intl4.intl;
    const string = intl.string;
    const t = intl4.t;
    if (tmp5) {
      stringResult = string(t.BrHQaq);
    } else {
      stringResult = string(t.p6vL0e);
    }
    return stringResult;
  } else {
    return type.name;
  }
}
