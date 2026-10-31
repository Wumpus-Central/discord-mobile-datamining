// === Module 19386: ageGateNavigationCallbacks ===

// Module 19386 (ageGateNavigationCallbacks)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AgeGateModalActionCreators from "AgeGateModalActionCreators" /* 6739 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6902 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5045 */;

require = fn;
const AgeGateConstants = fn(1097);
({ AgeGateAnalyticAction: closure_4, AgeGateSource: hasOwnProperty } = AgeGateConstants);
const AnalyticEvents = fn(1072).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/ageGateNavigationCallbacks.tsx");

export function generateOnBack(source) {
  if (constants2.NSFW_SERVER_INVITE !== source) {
    if (constants2.NSFW_SERVER_INVITE_EMBED !== source) {
      if (constants2.JOIN_LARGE_GUILD_UNDERAGE !== source) {
        if (constants2.ACCESS_LARGE_GUILD_UNDERAGE !== source) {
          if (constants2.LARGE_GUILD !== source) {
            if (constants2.NSFW_SERVER !== source) {
              if (constants2.NSFW_CHANNEL === source) {
                return () => {
                  const guildId = SelectedGuildStore.getGuildId();
                  if (null != guildId) {
                    GuildActionCreatorsDefault.nsfwReturnToSafety(guildId);
                  }
                  AgeGateModalActionCreators.closeAgeGateModal(closure_0);
                };
              } else if (constants2.NSFW_VOICE_CHANNEL === source) {
                return () => {
                  ModalActionCreatorsDefault.popAll();
                  AnalyticsUtilsDefault.track(AnalyticEvents.AGE_GATE_ACTION, { source, action: constants.AGE_GATE_CLOSE });
                };
              } else {
                return constants2.FAMILY_CENTER === source ? (() => {
                  AgeGateModalActionCreators.closeAgeGateModal(closure_0);
                }) : undefined;
              }
            }
          }
        }
      }
      return () => {
        const guildId = SelectedGuildStore.getGuildId();
        if (null != guildId) {
          GuildActionCreatorsDefault.nsfwReturnToSafety(guildId);
        }
        AgeGateModalActionCreators.closeAgeGateModal(closure_0);
        ModalActionCreatorsDefault.popAll();
      };
    }
  }
  return () => {
    AgeGateModalActionCreators.closeAgeGateModal(closure_0);
  };
}
export function onGateClose() {
  AgeGateModalActionCreators.closeAgeGateModal();
}
export function renderHeaderTitle() {
  return null;
}