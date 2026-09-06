// discord_app/modules/self_mod/inappropriate_conversation/updateDmSafetyAlertsSetting.tsx
import wrappers from "../../../../discord_common/js/packages/protos/google/protobuf/wrappers.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/updateDmSafetyAlertsSetting.tsx",
);

export const updateDmSafetyAlertsSetting = function updateDmSafetyAlertsSetting(value) {
  _require = value;
  const PreloadedUserSettingsActionCreators =
    require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  return PreloadedUserSettingsActionCreators.updateAsync(
    "privacy",
    async (arg0) => {
      const BoolValue = wrappers.BoolValue;
      arg0.inappropriateConversationWarnings = BoolValue.create({ value });
    },
    require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION,
  );
};
