// discord_app/modules/hub/HubUtils.native.tsx
import HubEmailConnectionModalActionCreatorsDefault from "native/components/HubEmailConnectionModalActionCreators.tsx";
import InviteStore from "../../stores/InviteStore.tsx";
import apply from "../../../_runtime/metro/00012__.js";

let closure_3 = apply.throttle(
  (code) => {
    const invite = InviteStore.getInvite(code.code);
    HubEmailConnectionModalActionCreatorsDefault.open({ invite });
  },
  1000,
  { trailing: false },
);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/HubUtils.native.tsx");

export default {
  onOpenHubInvite(invite) {
    closure_3(invite);
  },
};
