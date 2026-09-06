// === Module 13451: ReferralProgramShareActionSheetUtils ===

// Module 13451 (ReferralProgramShareActionSheetUtils)
import RelationshipStore from "RelationshipStore" /* 4209 */;

const UserRowModes = fn(10860).UserRowModes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramShareActionSheetUtils.tsx");

export const buildReferralUserRow = function buildReferralUserRow(selectedNotResendUsers) {
  ({ eligibleUsers, row, selectedUserIds, resendUsers } = selectedNotResendUsers);
  if (null != eligibleUsers[row]) {
    let tmp4 = selectedNotResendUsers.selectedNotResendUsers.length >= tmp;
    const hasItem = selectedUserIds.includes(tmp3.id);
    const obj = { type: null, user: null, onPress: null, selected: null, disabled: null, mode: null, start: null, end: null };
    const hasItem1 = resendUsers.has(tmp3.id);
    obj.type = RelationshipStore.getRelationshipType(tmp3.id);
    obj.user = tmp3;
    obj.onPress = tmp2;
    obj.selected = hasItem;
    if (tmp4) {
      tmp4 = !hasItem;
    }
    if (tmp4) {
      tmp4 = !hasItem1;
    }
    const element = { type: "user", props: null };
    obj.disabled = tmp4;
    obj.mode = UserRowModes.TOGGLE;
    obj.start = 0 === row;
    obj.end = row === eligibleUsers.length - 1;
    element.props = obj;
    return element;
  }
};