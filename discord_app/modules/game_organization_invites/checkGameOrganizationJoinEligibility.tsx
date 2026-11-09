// discord_app/modules/game_organization_invites/checkGameOrganizationJoinEligibility.tsx
import withGameOrganizationJoinFlowPendingDefault from "withGameOrganizationJoinFlowPending.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import GameOrganizationCharacterEligibilityStore from "GameOrganizationCharacterEligibilityStore.tsx";
import GameOrganizationInviteStore from "GameOrganizationInviteStore.tsx";

const require = fn;
let closure_10 = async function _checkGameOrganizationJoinEligibility(arg0) {
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
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c2 = 0;
          closure_1 = tmp2;
          closure_129_0 = closure_0;
          let channelId2;
          let characters;
          invite = invite.getInvite(closure_0);
          state = undefined;
          if (invite != null) {
            state = invite.state;
          }
          if (state === constants2.RESOLVED) {
            if (!invite.isJoinFlowPending(closure_0)) {
              if (invite.characterMode !== constants.MULTI) {
                c4 = 3;
                return { value: "eligible", done: true };
              } else {
                channelId2 = channelId.getChannelId();
                c3 = 1;
                c4 = 1;
                const obj4 = {
                  value: withGameOrganizationJoinFlowPendingDefault(closure_0, () => {
                    const useGameOrganizationCharacterEligibilityFetch = closure_0(
                      c2[6],
                    ).useGameOrganizationCharacterEligibilityFetch;
                    items = [closure_1_0];
                    return useGameOrganizationCharacterEligibilityFetch.fetchMany(items);
                  }),
                  done: false,
                };
                return obj4;
              }
            }
          }
          c4 = 3;
          return { value: "noop", done: true };
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      } else if (closure_130_4.getChannelId() !== channelId2) {
        c4 = 3;
        return { value: "noop", done: true };
      } else {
        characters = closure_130_5.getCharacters(closure_129_0);
        if (null == characters) {
          const ERROR = closure_130_8.ERROR;
        } else if (0 === characters.length) {
          const NO_CHARACTERS = closure_130_8.NO_CHARACTERS;
        }
        c4 = 3;
      }
    } catch (tmp24) {
      c4 = tmp;
      throw tmp24;
    }
  }
};
const GameOrganizationInviteConstants = fn(11504);
({
  GameOrganizationCharacterMode: metroImportDefault,
  GameOrganizationCantJoinReasons: closure_8,
  GameOrganizationInviteStates: closure_9,
} = GameOrganizationInviteConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/checkGameOrganizationJoinEligibility.tsx");

export default function checkGameOrganizationJoinEligibility() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
