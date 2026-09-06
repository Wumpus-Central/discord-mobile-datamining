// discord_app/actions/ChangeVanityURLActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/ChangeVanityURLActionCreators.tsx");

export default {
  openModal(id, vanityURLCode) {
    const obj = { type: "CHANGE_VANITY_URL_MODAL_OPEN", guildId: id, code: vanityURLCode };
    obj.dispatch(obj);
  },
  closeModal() {
    DispatcherDefault.dispatch({ type: "CHANGE_VANITY_URL_MODAL_CLOSE" });
  },
  removeVanityURL(id) {
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: Endpoints.GUILD_VANITY_URL(id),
      body: { code: null },
      oldFormErrors: true,
      rejectWithError: true,
    };
    return HTTP.patch(request).then(() => {
      DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: null, uses: 0 });
    });
  },
  changeVanityURL(id, vanityURLCode) {
    const self = this;
    let obj = DispatcherDefault;
    obj.dispatch({ type: "CHANGE_VANITY_URL_MODAL_SUBMIT" });
    const HTTP = self(1272).HTTP;
    const request = { url: Endpoints.GUILD_VANITY_URL(id), body: null, oldFormErrors: true, rejectWithError: true };
    obj = { code: vanityURLCode };
    request.body = obj;
    return HTTP.patch(request).then(
      (body) => {
        ({ code, uses } = body.body);
        DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses });
        self.closeModal();
      },
      (body) => {
        const obj = { type: "CHANGE_VANITY_URL_MODAL_SUBMIT_FAILURE", error: body.body, hasError: true };
        obj.dispatch(obj);
        return body;
      },
    );
  },
  setVanityURL(id, code) {
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: Endpoints.GUILD_VANITY_URL(id),
      body: { code },
      oldFormErrors: true,
      rejectWithError: HTTPUtils.rejectWithMigratedError(),
    };
    let obj = { code };
    return HTTP.patch(request).then(
      (body) => {
        ({ code, uses } = body.body);
        DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses });
      },
      (body) => {
        const obj = { type: "CHANGE_VANITY_URL_MODAL_SUBMIT_FAILURE", error: body.body, hasError: true };
        obj.dispatch(obj);
        return body;
      },
    );
  },
};
