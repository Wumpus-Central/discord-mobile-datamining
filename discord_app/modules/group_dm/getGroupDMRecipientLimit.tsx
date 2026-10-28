// === Module 11334: getGroupDMRecipientLimit ===

// Module 11334 (getGroupDMRecipientLimit)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1988 */;
import GroupDMNitroCapExperiment from "GroupDMNitroCapExperiment" /* 11336 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
let closure_3 = fn(11335).MAX_GROUP_DM_NITRO_PARTICIPANTS;
const Constants = fn(1084);
({ MAX_GROUP_DM_PARTICIPANTS: closure_4, MAX_GROUP_DM_STAFF_PARTICIPANTS: hasOwnProperty } = Constants);
const PremiumTypes = fn(1391).PremiumTypes;
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