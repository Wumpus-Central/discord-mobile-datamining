// discord_app/modules/clips/ClipsDefaultSettingsUtils.tsx
import ClipsConstants from "ClipsConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

({ CLIPS_DEFAULT_SETTINGS_VERSION: closure_0, ClipsEnabledSettingsSource } = ClipsConstants);
const constants = ClipsConstants.ClipsHardwareClassification;
const result = size.fileFinishedImporting("modules/clips/ClipsDefaultSettingsUtils.tsx");

export const INITIAL_CLIPS_DEFAULT_SETTINGS_STATE = {
  clipsEnabledSource: ClipsEnabledSettingsSource.UNSET,
  version: 0,
  enableAutoclipping: null,
};
export function applyClipsDefaultSettingsDecision(arg0) {
  ({ defaultState, clipsEnabled, decision, previousHardwareClassification } = arg0);
  const clipsEnabled2 = decision.clipsEnabled;
  const DEFAULT = ClipsEnabledSettingsSource.DEFAULT;
  if (defaultState.clipsEnabledSource === ClipsEnabledSettingsSource.USER) {
    let USER = ClipsEnabledSettingsSource.USER;
    let tmp2 = clipsEnabled;
  } else {
    USER = DEFAULT;
    tmp2 = clipsEnabled2;
    if (defaultState.clipsEnabledSource === ClipsEnabledSettingsSource.UNSET) {
      USER = DEFAULT;
      tmp2 = clipsEnabled2;
      if (null != previousHardwareClassification) {
        if (clipsEnabled !== (previousHardwareClassification === constants.MEETS_AUTO_ENABLE)) {
          USER = ClipsEnabledSettingsSource.USER;
          tmp2 = clipsEnabled;
        } else {
          let clipsEnabled3 = clipsEnabled;
          if (clipsEnabled) {
            clipsEnabled3 = decision.clipsEnabled;
          }
          tmp2 = clipsEnabled3;
          USER = DEFAULT;
        }
      }
    }
  }
  const obj = {
    clipsEnabled: tmp2,
    defaultState: { clipsEnabledSource: USER, version, enableAutoclipping: decision.enableAutoclipping },
  };
  return obj;
}
