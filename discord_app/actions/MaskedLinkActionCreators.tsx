// discord_app/actions/MaskedLinkActionCreators.tsx
import { dispatcher } from "../Dispatcher.tsx";
const result = require("set").fileFinishedImporting("actions/MaskedLinkActionCreators.tsx");

export const trustDomain = function trustDomain(url) {
  let obj = dispatcher;
  obj = { type: "MASKED_LINK_ADD_TRUSTED_DOMAIN", url };
  obj.dispatch(obj);
};
export const trustProtocol = function trustProtocol(url) {
  let obj = dispatcher;
  obj = { type: "MASKED_LINK_ADD_TRUSTED_PROTOCOL", url };
  obj.dispatch(obj);
};