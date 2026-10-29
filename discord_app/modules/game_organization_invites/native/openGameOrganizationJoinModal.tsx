// === Module 12996: openGameOrganizationJoinModal ===

// Module 12996 (openGameOrganizationJoinModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import useGameOrganizationCharacterEligibilityFetch2 from "useGameOrganizationCharacterEligibilityFetch" /* 12997 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11121 */;

require = fn;
const GameOrganizationInviteConstants = fn(11122);
({ GameOrganizationCharacterMode: closure_4, GameOrganizationInviteStates: hasOwnProperty } = GameOrganizationInviteConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinModal.tsx");

export default function openGameOrganizationJoinModal(code) {
  const invite = GameOrganizationInviteStore.getInvite(code);
  let state;
  if (invite != null) {
    state = invite.state;
  }
  let tmp3 = state === constants2.RESOLVED;
  if (tmp3) {
    tmp3 = invite.characterMode === constants.MULTI;
  }
  if (tmp3) {
    const useGameOrganizationCharacterEligibilityFetch = useGameOrganizationCharacterEligibilityFetch2.useGameOrganizationCharacterEligibilityFetch;
    const items = [code];
    const many = useGameOrganizationCharacterEligibilityFetch.fetchMany(items);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12999, dependencyMap.paths), { code });
  const obj2 = { code };
};