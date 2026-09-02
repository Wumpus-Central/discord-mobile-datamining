// discord_app/modules/notifications/settings/NotifSettingsUtils.tsx
import b64ToProto from "../../user_settings/UserSettingsUtils.tsx";
import create from "../../../../discord_common/js/packages/protos/discord_protos/discord_notifications/v1/notification_settings.tsx";
import closure_2 from "NotifSettingsProtoStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/notifications/settings/NotifSettingsUtils.tsx");

export const b64ToDeclarativeSettingsProto = function b64ToDeclarativeSettingsProto(declarative_settings_proto) {
  return b64ToProto.b64ToProto(create.DeclarativeSettings, declarative_settings_proto);
};
export const useNotifSettingValue = function useNotifSettingValue(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const items1 = [arg0];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items,
    () => closure_1_2.getSetting(closure_0),
    items1,
  );
};
export const useNotifSettingToggleValue = function useNotifSettingToggleValue(GAMING_DEFAULT) {
  const _require = GAMING_DEFAULT;
  const items = [closure_2];
  const items1 = [GAMING_DEFAULT];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items,
    () => closure_1_2.getSetting(closure_0),
    items1,
  );
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.toggle;
  }
  if (flag == null) {
    flag = true;
  }
  return flag;
};
export const useNotifSettingRadioValue = function useNotifSettingRadioValue(arg0) {
  const _require = arg0;
  const items = [closure_2];
  const items1 = [arg0];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items,
    () => closure_1_2.getSetting(closure_0),
    items1,
  );
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.radio;
  }
  if (num == null) {
    num = 0;
  }
  return num;
};
