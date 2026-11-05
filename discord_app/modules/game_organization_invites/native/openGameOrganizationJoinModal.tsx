// discord_app/modules/game_organization_invites/native/openGameOrganizationJoinModal.tsx
import withGameOrganizationJoinFlowPendingDefault from "../withGameOrganizationJoinFlowPending.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import GameOrganizationCharacterEligibilityStore from "../GameOrganizationCharacterEligibilityStore.tsx";
import GameOrganizationInviteStore from "../GameOrganizationInviteStore.tsx";

const require = fn;
let closure_10 = async function _openGameOrganizationJoinModal(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === num3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp2;
          c1 = 0;
          let tmp43 = closure_0;
          closure_129_0 = closure_0;
          let channelId2;
          let characters;
          invite = invite.getInvite(closure_0);
          state = undefined;
          if (invite != null) {
            state = invite.state;
          }
          if (state === constants2.RESOLVED) {
            channelId2 = channelId.getChannelId();
            c4 = num3;
            const obj5 = {
              value: withGameOrganizationJoinFlowPendingDefault(tmp43, () => {
                const useGameOrganizationCharacterEligibilityFetch = closure_0(
                  closure_2[6],
                ).useGameOrganizationCharacterEligibilityFetch;
                items = [closure_1_0];
                return useGameOrganizationCharacterEligibilityFetch.fetchMany(items);
              }),
              done: false,
            };
            return obj5;
          }
          c4 = 3;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else if (closure_130_4.getChannelId() !== channelId2) {
        c4 = 3;
        return { value: "HermesInternal", done: null };
      } else {
        tmp43 = closure_130_5;
        characters = closure_130_5.getCharacters(closure_129_0);
        if (null == characters) {
          closure_130_1(closure_130_2[7])(closure_129_0, closure_130_7.ERROR);
          c4 = 3;
          const obj7 = { value: undefined, done: true };
          return obj7;
        } else if (0 === characters.length) {
          closure_130_1(closure_130_2[7])(closure_129_0, closure_130_7.NO_CHARACTERS);
          c4 = 3;
          const obj = { value: undefined, done: true };
          return obj;
        }
      }
      const obj8 = { code: closure_129_0 };
      closure_130_1(closure_130_2[8]).pushLazy(
        closure_130_0(closure_130_2[10])(closure_130_2[9], closure_130_2.paths),
        obj8,
      );
      const obj4 = closure_130_1(closure_130_2[8]);
    } catch (tmp32) {
      c4 = tmp;
      throw tmp32;
    }
  }
};
const GameOrganizationInviteConstants = fn(11560);
({
  GameOrganizationCantJoinReasons: metroImportDefault,
  GameOrganizationCharacterMode: closure_8,
  GameOrganizationInviteStates: closure_9,
} = GameOrganizationInviteConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinModal.tsx");

export default function openGameOrganizationJoinModal() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
