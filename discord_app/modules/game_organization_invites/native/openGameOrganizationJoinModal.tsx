// === Module 13416: openGameOrganizationJoinModal ===

// Module 13416 (openGameOrganizationJoinModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import useGameOrganizationCharacterEligibilityFetch2 from "useGameOrganizationCharacterEligibilityFetch" /* 13417 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11550 */;

require = fn;
const GameOrganizationInviteConstants = fn(11551);
({ GameOrganizationCharacterMode: closure_4, GameOrganizationInviteStates: hasOwnProperty } = GameOrganizationInviteConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinModal.tsx");

export default function openGameOrganizationJoinModal(code) {
  const invite = GameOrganizationInviteStore.getInvite(code);
  state = undefined;
  if (invite != null) {
    state = invite.state;
  }
  let tmp3 = state === constants2.RESOLVED;
  if (tmp3) {
    tmp3 = invite.characterMode === constants.MULTI;
  }
  if (tmp3) {
    const useGameOrganizationCharacterEligibilityFetch = useGameOrganizationCharacterEligibilityFetch2.useGameOrganizationCharacterEligibilityFetch;
    items = [code];
    const many = useGameOrganizationCharacterEligibilityFetch.fetchMany(items);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13419, dependencyMap.paths), { code });
  const obj2 = { code };
};