// discord_app/modules/hub/HubUtils.native.tsx
import HubEmailConnectionModalActionCreatorsDefault from "native/components/HubEmailConnectionModalActionCreators.tsx";
import InviteStore from "../../stores/InviteStore.tsx";
import 00012__ from "../../../_runtime/metro/00012__.js";
import size from "../../../_runtime/metro/00002__.js";

let closure_3 = module_12.throttle((code) => {
  const invite = InviteStore.getInvite(code.code);
  const open = HubEmailConnectionModalActionCreatorsDefault.open;
  HubEmailConnectionModalActionCreatorsDefault;
  open({ invite });
}, 1000, { trailing: false });
const obj = {
  onOpenHubInvite(invite) {
    closure_3(invite);
  }
};
const result = size.fileFinishedImporting("modules/hub/HubUtils.native.tsx");

export default obj;