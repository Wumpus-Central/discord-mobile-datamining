// discord_app/modules/group_dm/getGroupDMRecipientLimit.tsx
import isPremiumAtLeast from "../../utils/PremiumTypeUtils.tsx";
import closure_2 from "../../stores/UserStore.tsx";
import { MAX_GROUP_DM_NITRO_PARTICIPANTS as closure_3 } from "GroupDMConstants.tsx";
import ME from "../../Constants.tsx";
import { PremiumTypes } from "../premium/PremiumConstants.tsx";

require = arg1;
({ MAX_GROUP_DM_PARTICIPANTS: c4, MAX_GROUP_DM_STAFF_PARTICIPANTS: c5 } = ME);
const result = require("set").fileFinishedImporting("modules/group_dm/getGroupDMRecipientLimit.tsx");

export default function getGroupDMRecipientLimit() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.useNitroCapExperiment;
  if (flag === undefined) {
    flag = false;
  }
  currentUser = currentUser.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  if (isStaffResult) {
    let tmp5 = closure_5;
  } else {
    if (flag) {
      if (obj3.isPremium(currentUser, PremiumTypes.TIER_2)) {
        if (tmp2Result.getGroupDMNitroCapConfig("getGroupDMRecipientLimit").enabled) {
          tmp5 = closure_3;
        }
        tmp2Result = tmp2(16337);
      }
      obj3 = isPremiumAtLeast;
      tmp2 = require;
    }
    tmp5 = closure_4;
  }
  return tmp5;
};