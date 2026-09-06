// discord_app/modules/guild_sidebar/native/InvitesDisabledAlertModal.tsx
import util from "../../../intl/index.native.tsx";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/InvitesDisabledAlertModal.tsx");

export default function InvitesDisabledAlertModal() {
  let obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.LpUfEt);
  const intl2 = util.intl;
  obj.content = intl2.string(util.t.QRXqzO);
  obj = { children: null };
  obj = { text: null };
  const intl3 = util.intl;
  obj.text = intl3.string(util.t.BddRzS);
  obj.children = jsx(AlertModal.AlertActionButton, { text: null }, "okay");
  obj.actions = jsx(AlertModal.AlertActions, { text: null });
  return jsx(AlertModal.AlertModal, { text: null });
}
