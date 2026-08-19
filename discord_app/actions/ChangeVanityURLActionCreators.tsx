// === Module 16865: ? ===

// Module 16865
import obj132 from "obj132" /* 2 */;
import sendRequest from "sendRequest" /* 530 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const Endpoints = ME.Endpoints;
const result = obj132.fileFinishedImporting("actions/ChangeVanityURLActionCreators.tsx");

export default {
  openModal(id, vanityURLCode) {
    const obj = { type: "CHANGE_VANITY_URL_MODAL_OPEN", guildId: id, code: vanityURLCode };
    obj.dispatch(obj);
  },
  closeModal() {
    dispatcherDefault.dispatch({ type: "CHANGE_VANITY_URL_MODAL_CLOSE" });
  },
  removeVanityURL(id) {
    const HTTP = sendRequest.HTTP;
    const obj = { url: Endpoints.GUILD_VANITY_URL(id), body: { code: null }, oldFormErrors: true, rejectWithError: true };
    return HTTP.patch({ url: Endpoints.GUILD_VANITY_URL(id), body: { code: null }, oldFormErrors: true, rejectWithError: true }).then((result) => {
      callback(table[1]).dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: null, uses: 0 });
    });
  },
  changeVanityURL(id, vanityURLCode) {
    const self = this;
    let obj = dispatcherDefault;
    obj.dispatch({ type: "CHANGE_VANITY_URL_MODAL_SUBMIT" });
    const HTTP = self(530).HTTP;
    { url: Endpoints.GUILD_VANITY_URL(id), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { code: vanityURLCode };
    return HTTP.patch(obj).then((result) => {
      ({ code, uses } = result.body);
      dispatcherDefault.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses });
      self.closeModal();
    }, (body) => {
      callback(table[1]);
      const obj = { type: "CHANGE_VANITY_URL_MODAL_SUBMIT_FAILURE", error: body.body, hasError: true };
      obj.dispatch(obj);
      return body;
    });
  },
  setVanityURL(id, code) {
    const HTTP = sendRequest.HTTP;
    { url: Endpoints.GUILD_VANITY_URL(id), body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { code };
    obj[3] = sendRequest.rejectWithMigratedError();
    return HTTP.patch(obj).then((result) => {
      ({ code, uses } = result.body);
      callback(709).dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses });
    }, (body) => {
      callback(709);
      const obj = { type: "CHANGE_VANITY_URL_MODAL_SUBMIT_FAILURE", error: body.body, hasError: true };
      obj.dispatch(obj);
      return body;
    });
  }
};