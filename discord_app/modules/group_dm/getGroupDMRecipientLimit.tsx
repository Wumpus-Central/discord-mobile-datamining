// discord_app/modules/group_dm/getGroupDMRecipientLimit.tsx
import PremiumConstants from "../premium/PremiumConstants.tsx";
import PremiumTypeUtils from "../../utils/PremiumTypeUtils.tsx";
import GroupDMConstants from "GroupDMConstants.tsx";
import GroupDMNitroCapExperiment from "GroupDMNitroCapExperiment.tsx";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let closure_3 = GroupDMConstants.MAX_GROUP_DM_NITRO_PARTICIPANTS;
({ MAX_GROUP_DM_PARTICIPANTS: closure_4, MAX_GROUP_DM_STAFF_PARTICIPANTS: hasOwnProperty } = Constants);
const PremiumTypes = PremiumConstants.PremiumTypes;
const result = size.fileFinishedImporting("modules/group_dm/getGroupDMRecipientLimit.tsx");

export default function getGroupDMRecipientLimit() {
  let tmp5;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.useNitroCapExperiment;
  if (flag === undefined) {
    flag = false;
  }
  const currentUser = UserStore.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  if (isStaffResult) {
    tmp5 = hasOwnProperty;
  } else {
    if (flag) {
      const obj3 = PremiumTypeUtils;
      if (obj3.isPremium(currentUser, PremiumTypes.TIER_2)) {
        const tmp2Result = GroupDMNitroCapExperiment;
        if (tmp2Result.getGroupDMNitroCapConfig("getGroupDMRecipientLimit").enabled) {
          tmp5 = closure_3;
        }
      }
    }
    tmp5 = React3;
  }
  return tmp5;
}
