// === Module 13332: b64ToDeclarativeSettingsProto ===

// Module 13332 (b64ToDeclarativeSettingsProto)
import set from "set" /* 2 */;
import b64ToProto from "b64ToProto" /* 1342 */;
import create from "create" /* 13333 */;

const result = set.fileFinishedImporting("modules/notifications/settings/NotifSettingsUtils.tsx");

export const b64ToDeclarativeSettingsProto = function b64ToDeclarativeSettingsProto(declarative_settings_proto) {
  return b64ToProto.b64ToProto(create.DeclarativeSettings, declarative_settings_proto);
};