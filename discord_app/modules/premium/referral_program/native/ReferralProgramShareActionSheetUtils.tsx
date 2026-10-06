// === Module 13268: ReferralProgramShareActionSheetUtils ===

// Module 13268 (ReferralProgramShareActionSheetUtils)
import UserRowConstants from "UserRowConstants" /* 10605 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import size from "module_2" /* 2 */;

const UserRowModes = UserRowConstants.UserRowModes;
const result = size.fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramShareActionSheetUtils.tsx");

export const buildReferralUserRow = function buildReferralUserRow(selectedNotResendUsers) {
  let eligibleUsers;
  let resendUsers;
  let row;
  let selectedUserIds;
  ({ eligibleUsers, row, selectedUserIds, resendUsers } = selectedNotResendUsers);
  if (null != eligibleUsers[row]) {
    let tmp4 = selectedNotResendUsers.selectedNotResendUsers.length >= tmp;
    const hasItem = selectedUserIds.includes(tmp3.id);
    const obj = { type: RelationshipStore.getRelationshipType(eligibleUsers[row].id), user: eligibleUsers[row], onPress: tmp2, selected: hasItem, disabled: tmp4, mode: UserRowModes.TOGGLE, start: 0 === row, end: row === eligibleUsers.length - 1 };
    const hasItem1 = resendUsers.has(tmp3.id);
    if (tmp4) {
      tmp4 = !hasItem;
    }
    if (tmp4) {
      tmp4 = !hasItem1;
    }
    const element = { type: "user", props: obj };
    return element;
  }
};