// === Module 17643: ChangeVanityURLModalStore ===

// Module 17643 (ChangeVanityURLModalStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const FormStates = Constants.FormStates;
const errors = {};
let CLOSED = FormStates.CLOSED;
let c5 = null;
const Store = initializeDefault.Store;
class ChangeVanityURLModalStore extends Store {
}
const prototype = ChangeVanityURLModalStore.prototype;
prototype["isOpen"] = function isOpen() {
  return CLOSED !== FormStates.CLOSED;
};
prototype["getProps"] = function getProps() {
  return { submitting: CLOSED === FormStates.SUBMITTING, errorDetails, errors, guildId, code };
};
ChangeVanityURLModalStore.displayName = "ChangeVanityURLModalStore";
const changeVanityURLModalStore = new ChangeVanityURLModalStore(DispatcherDefault, {
  CHANGE_VANITY_URL_MODAL_OPEN: function handleOpen(arg0) {
    CLOSED = FormStates.OPEN;
    ({ guildId: c0, code: c1 } = arg0);
    c5 = null;
  },
  CHANGE_VANITY_URL_MODAL_SUBMIT: function handleSubmit() {
    CLOSED = FormStates.SUBMITTING;
  },
  CHANGE_VANITY_URL_MODAL_SUBMIT_FAILURE: function handleSubmitFailure(error) {
    CLOSED = FormStates.OPEN;
    error = error.error;
  },
  CHANGE_VANITY_URL_MODAL_CLOSE: function handleClose() {
    CLOSED = FormStates.CLOSED;
    c0 = null;
    c1 = null;
    c5 = null;
  }
});
const result = size.fileFinishedImporting("stores/ChangeVanityURLModalStore.tsx");

export default changeVanityURLModalStore;