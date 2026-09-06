// discord_app/modules/urgent_system_dm/native/UrgentSystemDMManager.tsx
import util from "../../../intl/index.native.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import UrgentSystemDMManagerBaseDefault from "../UrgentSystemDMManagerBase.tsx";
import navigateToSystemDMDefault from "../navigateToSystemDM.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/urgent_system_dm/native/UrgentSystemDMManager.tsx");

export default new UrgentSystemDMManagerBaseDefault(() => {
  const obj = { title: null, body: null, isDismissable: false, onConfirm: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.bAhz9l);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t["7KjxW3"]);
  obj.onConfirm = navigateToSystemDMDefault;
  return obj.show(obj);
});
