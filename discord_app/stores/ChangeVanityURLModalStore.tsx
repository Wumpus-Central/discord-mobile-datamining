// === Module 16572: FormStates ===

// Module 16572 (FormStates)
import { FormStates } from "ME";
import { Store } from "initialize";

let closure_3 = {};
let CLOSED = FormStates.CLOSED;
let c5 = null;
class ChangeVanityURLModalStore extends Store {
}
const prototype = ChangeVanityURLModalStore.prototype;
prototype["isOpen"] = function isOpen() {
  return CLOSED !== FormStates.CLOSED;
};
prototype["getProps"] = function getProps() {
  return { submitting: CLOSED === FormStates.SUBMITTING, errorDetails: c5, errors: closure_3, guildId: closure_0, code: closure_1 };
};
ChangeVanityURLModalStore.displayName = "ChangeVanityURLModalStore";
const changeVanityURLModalStore = new ChangeVanityURLModalStore(require("dispatcher"), {
  CHANGE_VANITY_URL_MODAL_OPEN: function handleOpen(arg0) {
    let closure_0;
    let closure_1;
    const OPEN = FormStates.OPEN;
    ({ guildId: closure_0, code: closure_1 } = arg0);
    let c5 = null;
  },
  CHANGE_VANITY_URL_MODAL_SUBMIT: function handleSubmit() {
    const SUBMITTING = FormStates.SUBMITTING;
  },
  CHANGE_VANITY_URL_MODAL_SUBMIT_FAILURE: function handleSubmitFailure(error) {
    const OPEN = FormStates.OPEN;
    error = error.error;
  },
  CHANGE_VANITY_URL_MODAL_CLOSE: function handleClose() {
    const CLOSED = FormStates.CLOSED;
    let c0 = null;
    let c1 = null;
    let c5 = null;
  }
});
const result = require("dispatcher").fileFinishedImporting("stores/ChangeVanityURLModalStore.tsx");

export default changeVanityURLModalStore;