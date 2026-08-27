// === Module 17141: ? ===

// Module 17141
import set from "set" /* 2 */;
import sendRequest from "sendRequest" /* 530 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("actions/ChangeVanityURLActionCreators.tsx");

export default {
  openModal(id, vanityURLCode) {
    let obj = dispatcherDefault;
    obj = { type: "CHANGE_VANITY_URL_MODAL_OPEN", guildId: id, code: vanityURLCode };
    obj.dispatch(obj);
  },
  closeModal() {
    dispatcherDefault.dispatch({ type: "CHANGE_VANITY_URL_MODAL_CLOSE" });
  },
  removeVanityURL(id) {
    const HTTP = sendRequest.HTTP;
    const obj = { url: Endpoints.GUILD_VANITY_URL(id), body: { code: null }, oldFormErrors: true, rejectWithError: true };
    return HTTP.patch({ url: Endpoints.GUILD_VANITY_URL(id), body: { code: null }, oldFormErrors: true, rejectWithError: true }).then(() => {
      callback(table[1]).dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: null, uses: 0 });
    });
  },
  changeVanityURL(id, vanityURLCode) {
    const self = this;
    let obj = dispatcherDefault;
    obj.dispatch({ type: "CHANGE_VANITY_URL_MODAL_SUBMIT" });
    const HTTP = self(530).HTTP;
    obj = { url: Endpoints.GUILD_VANITY_URL(id), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { code: vanityURLCode };
    return HTTP.patch(obj).then((body) => {
      ({ code, uses } = body.body);
      closure_1_1(closure_1_2[1]).dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses });
      self.closeModal();
    }, (body) => {
      let obj = callback(table[1]);
      obj = { type: "CHANGE_VANITY_URL_MODAL_SUBMIT_FAILURE", error: body.body, hasError: true };
      obj.dispatch(obj);
      return body;
    });
  },
  setVanityURL(id, code) {
    const HTTP = sendRequest.HTTP;
    obj = { url: Endpoints.GUILD_VANITY_URL(id), body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { code };
    obj[3] = sendRequest.rejectWithMigratedError();
    const obj3 = sendRequest;
    return HTTP.patch(obj).then((body) => {
      ({ code, uses } = body.body);
      callback(709).dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses });
    }, (body) => {
      let obj = callback(709);
      obj = { type: "CHANGE_VANITY_URL_MODAL_SUBMIT_FAILURE", error: body.body, hasError: true };
      obj.dispatch(obj);
      return body;
    });
  }
};