// discord_app/stores/ChangeVanityURLModalStore.tsx
import set from "../../_runtime/00002_set.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import ME from "../Constants.tsx";
import dispatcherDefault from "../Dispatcher.tsx";

const FormStates = ME.FormStates;
let closure_3 = {};
let CLOSED = FormStates.CLOSED;
let c5 = null;
const Store = initializeDefault.Store;
class ChangeVanityURLModalStore extends Store {}
const prototype = ChangeVanityURLModalStore.prototype;
prototype["isOpen"] = function isOpen() {
  return CLOSED !== FormStates.CLOSED;
};
prototype["getProps"] = function getProps() {
  return {
    submitting: CLOSED === FormStates.SUBMITTING,
    errorDetails: c5,
    errors: closure_3,
    guildId: closure_0,
    code: closure_1,
  };
};
ChangeVanityURLModalStore.displayName = "ChangeVanityURLModalStore";
const changeVanityURLModalStore = new ChangeVanityURLModalStore(dispatcherDefault, {
  CHANGE_VANITY_URL_MODAL_OPEN: function handleOpen(arg0) {
    const OPEN = FormStates.OPEN;
    ({ guildId: closure_0, code: closure_1 } = arg0);
    c5 = null;
  },
  CHANGE_VANITY_URL_MODAL_SUBMIT: function handleSubmit() {
    const SUBMITTING = FormStates.SUBMITTING;
  },
  CHANGE_VANITY_URL_MODAL_SUBMIT_FAILURE: function handleSubmitFailure(error) {
    const OPEN = FormStates.OPEN;
    error = error.error;
  },
  CHANGE_VANITY_URL_MODAL_CLOSE: function handleClose() {
    CLOSED = FormStates.CLOSED;
    c0 = null;
    c1 = null;
    c5 = null;
  },
});
const result = set.fileFinishedImporting("stores/ChangeVanityURLModalStore.tsx");

export default changeVanityURLModalStore;
