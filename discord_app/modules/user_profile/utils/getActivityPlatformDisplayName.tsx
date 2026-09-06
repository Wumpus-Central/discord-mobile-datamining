// discord_app/modules/user_profile/utils/getActivityPlatformDisplayName.tsx
import Constants from "../../../Constants.tsx";
import util from "../../../intl/index.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/user_profile/utils/getActivityPlatformDisplayName.tsx");

export default function getActivityPlatformDisplayName(type, arg1) {
  type = type.type;
  if (PlatformTypes.XBOX === type) {
    const intl3 = util.intl;
    return intl3.string(util.t.Nfvo72);
  } else if (tmp.PLAYSTATION === type) {
    const intl2 = util.intl;
    return intl2.string(util.t.fFl4jo);
  } else if (tmp.META_QUEST_OR_HORIZON === type) {
    const intl = util.intl;
    const string = intl.string;
    const t = util.t;
    if (tmp5) {
      let stringResult = string(t.BrHQaq);
    } else {
      stringResult = string(t.p6vL0e);
    }
    return stringResult;
  } else {
    return type.name;
  }
}
