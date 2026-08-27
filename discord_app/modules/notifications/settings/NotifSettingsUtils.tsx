// discord_app/modules/notifications/settings/NotifSettingsUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import b64ToProto from "../../user_settings/UserSettingsUtils.tsx";
import create from "../../../../discord_common/js/packages/protos/discord_protos/discord_notifications/v1/notification_settings.tsx";

const result = set.fileFinishedImporting("modules/notifications/settings/NotifSettingsUtils.tsx");

export const b64ToDeclarativeSettingsProto = function b64ToDeclarativeSettingsProto(declarative_settings_proto) {
  return b64ToProto.b64ToProto(create.DeclarativeSettings, declarative_settings_proto);
};