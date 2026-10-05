// discord_app/stores/ChangeVanityURLModalStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

const FormStates = Constants.FormStates;
const _false = {};
let CLOSED = FormStates.CLOSED;
const hasOwnProperty = null;
const Store = get_initializedDefault.Store;
class ChangeVanityURLModalStore extends Store {
  isOpen() {
    return CLOSED !== FormStates.CLOSED;
  }
  getProps() {
    return { submitting: CLOSED === FormStates.SUBMITTING, errorDetails, errors, guildId, code };
  }
}
const prototype = ChangeVanityURLModalStore.prototype;
ChangeVanityURLModalStore.displayName = "ChangeVanityURLModalStore";
const obj = {
  CHANGE_VANITY_URL_MODAL_OPEN: function handleOpen(arg0) {
    let c0;
    let c1;
    CLOSED = FormStates.OPEN;
    ({ guildId: c0, code: c1 } = arg0);
    let c5 = null;
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
    let c0 = null;
    let c1 = null;
    let c5 = null;
  },
};
const changeVanityURLModalStore = new ChangeVanityURLModalStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/ChangeVanityURLModalStore.tsx");

export default changeVanityURLModalStore;
