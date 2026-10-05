// === Module 11214: getGroupDMRecipientLimit ===

// Module 11214 (getGroupDMRecipientLimit)
import PremiumConstants from "PremiumConstants" /* 1379 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1976 */;
import GroupDMConstants from "GroupDMConstants" /* 11215 */;
import GroupDMNitroCapExperiment from "GroupDMNitroCapExperiment" /* 11216 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

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
};