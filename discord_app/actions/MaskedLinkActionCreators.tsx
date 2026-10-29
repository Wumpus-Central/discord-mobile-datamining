// discord_app/actions/MaskedLinkActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("actions/MaskedLinkActionCreators.tsx");

export function trustDomain(url) {
  DispatcherDefault.dispatch({ type: "MASKED_LINK_ADD_TRUSTED_DOMAIN", url });
}
export function trustProtocol(url) {
  DispatcherDefault.dispatch({ type: "MASKED_LINK_ADD_TRUSTED_PROTOCOL", url });
}
