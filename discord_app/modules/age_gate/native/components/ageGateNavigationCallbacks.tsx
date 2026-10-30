// discord_app/modules/age_gate/native/components/ageGateNavigationCallbacks.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import AgeGateModalActionCreators from "../../AgeGateModalActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import GuildActionCreatorsDefault from "../../../../actions/GuildActionCreators.tsx";
import SelectedGuildStore from "../../../../stores/SelectedGuildStore.tsx";

require = fn;
const AgeGateConstants = fn(1098);
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
                  AnalyticsUtilsDefault.track(AnalyticEvents.AGE_GATE_ACTION, {
                    source,
                    action: constants.AGE_GATE_CLOSE,
                  });
                };
              } else {
                return constants2.FAMILY_CENTER === source
                  ? () => {
                      AgeGateModalActionCreators.closeAgeGateModal(closure_0);
                    }
                  : undefined;
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
