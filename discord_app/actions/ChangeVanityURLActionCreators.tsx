// discord_app/actions/ChangeVanityURLActionCreators.tsx
import { Endpoints } from "ME";

const result = require("sendRequest").fileFinishedImporting("actions/ChangeVanityURLActionCreators.tsx");

export default {
  openModal(id, vanityURLCode) {
    let obj = require("../Dispatcher.tsx");
    obj = { type: "CHANGE_VANITY_URL_MODAL_OPEN", guildId: id, code: vanityURLCode };
    obj.dispatch(obj);
  },
  closeModal() {
    require("../Dispatcher.tsx").dispatch({ type: "CHANGE_VANITY_URL_MODAL_CLOSE" });
  },
  removeVanityURL(id) {
    const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.HTTP;
    const obj = { url: Endpoints.GUILD_VANITY_URL(id), body: { code: null }, oldFormErrors: true, rejectWithError: true };
    return HTTP.patch({ url: Endpoints.GUILD_VANITY_URL(id), body: { code: null }, oldFormErrors: true, rejectWithError: true }).then(() => {
      callback(table[1]).dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: null, uses: 0 });
    });
  },
  changeVanityURL(id, vanityURLCode) {
    const self = this;
    let obj = require("../Dispatcher.tsx");
    obj.dispatch({ type: "CHANGE_VANITY_URL_MODAL_SUBMIT" });
    const HTTP = self(530).HTTP;
    obj = { url: Endpoints.GUILD_VANITY_URL(id), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { code: vanityURLCode };
    return HTTP.patch(obj).then((body) => {
      let code;
      let uses;
      ({ code, uses } = body.body);
      outer1_1(outer1_2[1]).dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses });
      self.closeModal();
    }, (body) => {
      let obj = callback(table[1]);
      obj = { type: "CHANGE_VANITY_URL_MODAL_SUBMIT_FAILURE", error: body.body, hasError: true };
      obj.dispatch(obj);
      return body;
    });
  },
  setVanityURL(id, code) {
    const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.HTTP;
    obj = { url: Endpoints.GUILD_VANITY_URL(id), body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { code };
    obj[3] = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.rejectWithMigratedError();
    const obj3 = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */;
    return HTTP.patch(obj).then((body) => {
      let code;
      let uses;
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