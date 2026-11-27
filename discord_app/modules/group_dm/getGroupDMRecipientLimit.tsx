// === Module 12108: getGroupDMRecipientLimit ===

// Module 12108 (getGroupDMRecipientLimit)
import PremiumTypeUtils from "PremiumTypeUtils" /* 2109 */;
import GroupDMNitroCapExperiment from "GroupDMNitroCapExperiment" /* 12110 */;
import UserStore from "UserStore" /* 1387 */;

require = fn;
let closure_3 = fn(12109).MAX_GROUP_DM_NITRO_PARTICIPANTS;
const Constants = fn(1071);
({ MAX_GROUP_DM_PARTICIPANTS: closure_4, MAX_GROUP_DM_STAFF_PARTICIPANTS: hasOwnProperty } = Constants);
const PremiumTypes = fn(1389).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/getGroupDMRecipientLimit.tsx");

export default function getGroupDMRecipientLimit() {
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
    let tmp5 = hasOwnProperty;
  } else {
    if (flag) {
      if (obj3.isPremium(currentUser, PremiumTypes.TIER_2)) {
        if (tmp2Result.getGroupDMNitroCapConfig("getGroupDMRecipientLimit").enabled) {
          tmp5 = closure_3;
        }
        tmp2Result = GroupDMNitroCapExperiment;
      }
      obj3 = PremiumTypeUtils;
    }
    tmp5 = React4;
  }
  return tmp5;
};