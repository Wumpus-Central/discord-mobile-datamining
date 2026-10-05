// === Module 12756: MaskedLinkActionCreators ===

// Module 12756 (MaskedLinkActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/MaskedLinkActionCreators.tsx");

export const trustDomain = function trustDomain(url) {
  const obj = DispatcherDefault;
  const obj2 = { type: "MASKED_LINK_ADD_TRUSTED_DOMAIN", url };
  obj.dispatch(obj2);
};
export const trustProtocol = function trustProtocol(url) {
  const obj = DispatcherDefault;
  const obj2 = { type: "MASKED_LINK_ADD_TRUSTED_PROTOCOL", url };
  obj.dispatch(obj2);
};