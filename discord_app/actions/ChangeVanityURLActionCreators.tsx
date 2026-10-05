// === Module 17815: ChangeVanityURLActionCreators ===

// Module 17815 (ChangeVanityURLActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
let obj = {
  openModal(id, vanityURLCode) {
    const obj = DispatcherDefault;
    const obj2 = { type: "CHANGE_VANITY_URL_MODAL_OPEN", guildId: id, code: vanityURLCode };
    obj.dispatch(obj2);
  },
  closeModal() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "CHANGE_VANITY_URL_MODAL_CLOSE" });
  },
  removeVanityURL(id) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.GUILD_VANITY_URL(id), body: { code: null }, oldFormErrors: true, rejectWithError: true };
    const patchResult = HTTP.patch(request);
    return patchResult.then(() => {
      const obj = DispatcherDefault;
      obj.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: null, uses: 0 });
    });
  },
  changeVanityURL(id, vanityURLCode) {
    let obj2;
    const self = this;
    let obj = DispatcherDefault;
    obj.dispatch({ type: "CHANGE_VANITY_URL_MODAL_SUBMIT" });
    const HTTP = self(1282).HTTP;
    const request = { url: Endpoints.GUILD_VANITY_URL(id), body: obj2, oldFormErrors: true, rejectWithError: true };
    obj2 = { code: vanityURLCode };
    const patchResult = HTTP.patch(request);
    return patchResult.then((body) => {
      let code;
      let uses;
      ({ code, uses } = body.body);
      const obj = DispatcherDefault;
      obj.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses });
      self.closeModal();
    }, (body) => {
      const obj = DispatcherDefault;
      const obj2 = { type: "CHANGE_VANITY_URL_MODAL_SUBMIT_FAILURE", error: body.body, hasError: true };
      obj.dispatch(obj2);
      return body;
    });
  },
  setVanityURL(id, code) {
    let obj;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.GUILD_VANITY_URL(id), body: obj, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
    const patch = HTTP.patch;
    obj = { code };
    obj3 = HTTPUtils;
    const patchResult = patch(request);
    return patchResult.then((body) => {
      let code;
      let uses;
      ({ code, uses } = body.body);
      const obj = DispatcherDefault;
      obj.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses });
    }, (body) => {
      const obj = DispatcherDefault;
      const obj2 = { type: "CHANGE_VANITY_URL_MODAL_SUBMIT_FAILURE", error: body.body, hasError: true };
      obj.dispatch(obj2);
      return body;
    });
  }
};
const result = size.fileFinishedImporting("actions/ChangeVanityURLActionCreators.tsx");

export default obj;