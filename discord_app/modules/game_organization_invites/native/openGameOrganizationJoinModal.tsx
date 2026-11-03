// discord_app/modules/game_organization_invites/native/openGameOrganizationJoinModal.tsx
import asyncRequireImpl from "../../../../_runtime/02123_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import useGameOrganizationCharacterEligibilityFetch2 from "../useGameOrganizationCharacterEligibilityFetch.tsx";
import GameOrganizationInviteStore from "../GameOrganizationInviteStore.tsx";

require = fn;
const GameOrganizationInviteConstants = fn(11501);
({ GameOrganizationCharacterMode: closure_4, GameOrganizationInviteStates: hasOwnProperty } =
  GameOrganizationInviteConstants);
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
    const useGameOrganizationCharacterEligibilityFetch =
      useGameOrganizationCharacterEligibilityFetch2.useGameOrganizationCharacterEligibilityFetch;
    items = [code];
    const many = useGameOrganizationCharacterEligibilityFetch.fetchMany(items);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13336, dependencyMap.paths), { code });
  const obj2 = { code };
}
