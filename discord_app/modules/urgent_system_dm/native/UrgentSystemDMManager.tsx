// discord_app/modules/urgent_system_dm/native/UrgentSystemDMManager.tsx
import intl3 from "../../../intl/index.native.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import UrgentSystemDMManagerBaseDefault from "../UrgentSystemDMManagerBase.tsx";
import navigateToSystemDMDefault from "../navigateToSystemDM.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const tmp2 = new UrgentSystemDMManagerBaseDefault(() => {
  let intl;
  let intl2;
  const obj = {
    title: intl.string(intl3.t.bAhz9l),
    body: intl2.string(intl3.t["7KjxW3"]),
    isDismissable: false,
    onConfirm: navigateToSystemDMDefault,
  };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = intl3.intl;
  intl2 = intl3.intl;
  return show(obj);
});
const result = size.fileFinishedImporting("modules/urgent_system_dm/native/UrgentSystemDMManager.tsx");

export default tmp2;
