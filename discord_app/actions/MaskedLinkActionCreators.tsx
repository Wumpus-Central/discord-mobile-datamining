// === Module 12919: MaskedLinkActionCreators ===

// Module 12919 (MaskedLinkActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/MaskedLinkActionCreators.tsx");

export const trustDomain = function trustDomain(url) {
  DispatcherDefault.dispatch({ type: "MASKED_LINK_ADD_TRUSTED_DOMAIN", url });
};
export const trustProtocol = function trustProtocol(url) {
  DispatcherDefault.dispatch({ type: "MASKED_LINK_ADD_TRUSTED_PROTOCOL", url });
};