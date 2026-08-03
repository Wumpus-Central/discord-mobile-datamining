import keys from "keys";

const obj = keys.create(() => ({ buttonSize: "md", buttonScale: 8, enableLoadingState: false, iconPosition: "start", showIcon: false, showDisabled: false }));
const result = require("set").fileFinishedImporting("modules/user_settings/design_system/native/useDesignSystemSettingsState.tsx");

export default obj;