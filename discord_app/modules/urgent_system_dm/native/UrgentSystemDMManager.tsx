// discord_app/modules/urgent_system_dm/native/UrgentSystemDMManager.tsx
const require = arg1;
const tmp2 = new require("maybeShowUrgentMessageModal")(() => {
  let obj = require("../../../actions/native/AlertActionCreators.tsx");
  obj = { title: null, body: null, isDismissable: false, onConfirm: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.bAhz9l);
  const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[1] = intl2.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["7KjxW3"]);
  obj[3] = require("../navigateToSystemDM.tsx");
  return obj.show(obj);
});
const result = require("getSystemLocale").fileFinishedImporting("modules/urgent_system_dm/native/UrgentSystemDMManager.tsx");

export default tmp2;