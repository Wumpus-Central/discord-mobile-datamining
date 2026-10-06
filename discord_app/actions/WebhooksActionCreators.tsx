// === Module 17048: WebhooksActionCreators ===

// Module 17048 (WebhooksActionCreators)
import _modDef12 from "module_12" /* 12 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5714 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let c3;
let closure_4;
({ AbortCodes: c3, Endpoints: closure_4 } = Constants);
const length = ["Spidey Bot", "Captain Hook"];
let obj = {
  fetchForGuild(id) {
    let guildId;
    let obj4;
    _require = id;
    let obj = DispatcherDefault;
    let obj2 = { type: "WEBHOOKS_FETCHING", guildId: id };
    obj.dispatch(obj2);
    const HTTP = require("HTTPUtils").HTTP;
    const get = HTTP.get;
    const obj3 = { url: closure_4.GUILD_WEBHOOKS(id), oldFormErrors: true, rejectWithError: obj4.rejectWithMigratedError() };
    obj4 = require("HTTPUtils");
    const value = get(obj3);
    const nextPromise = value.then((body) => {
      body = body.body;
      const obj = DispatcherDefault;
      const obj2 = { type: "WEBHOOKS_UPDATE", guildId, webhooks: body };
      return obj.dispatch(obj2);
    });
    nextPromise.catch((error) => {
      const body = error.body;
      const obj = DispatcherDefault;
      const obj2 = { type: "WEBHOOKS_UPDATE", guildId, error: body.message };
      obj.dispatch(obj2);
    });
  },
  fetchForChannel(id, channelId) {
    let guildId;
    _require = id;
    importDefault = channelId;
    let obj = DispatcherDefault;
    let obj2 = { type: "WEBHOOKS_FETCHING", guildId: id, channelId };
    obj.dispatch(obj2);
    const HTTP = require("HTTPUtils").HTTP;
    const obj3 = { url: closure_4.CHANNEL_WEBHOOKS(channelId), oldFormErrors: true, rejectWithError: true };
    const value = HTTP.get(obj3);
    const nextPromise = value.then((body) => {
      body = body.body;
      const obj = DispatcherDefault;
      const obj2 = { type: "WEBHOOKS_UPDATE", guildId, channelId, webhooks: body };
      return obj.dispatch(obj2);
    });
    nextPromise.catch((error) => {
      const body = error.body;
      const obj = DispatcherDefault;
      const obj2 = { type: "WEBHOOKS_UPDATE", guildId, error: body.message };
      obj.dispatch(obj2);
    });
  },
  create(guildId, channelId, arg2) {
    let obj3;
    _require = guildId;
    let tmp = arg2;
    if (null == arg2) {
      let obj = _modDef12;
      tmp = length[obj.random(obj, 0, length.length - 1)];
    }
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_4.CHANNEL_WEBHOOKS(channelId), body: { name: tmp }, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
    const post = HTTP.post;
    obj3 = require("HTTPUtils");
    const postResult = post(request);
    const nextPromise = postResult.then((body) => {
      body = body.body;
      const obj = DispatcherDefault;
      const obj2 = { type: "WEBHOOK_CREATE", guildId, webhook: body };
      obj.dispatch(obj2);
      return body;
    });
    return nextPromise.catch((error) => {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      const body = error.body;
      const status = error.status;
      if (null != body) {
        if (body.code === constants.TOO_MANY_WEBHOOKS) {
          const obj2 = { title: intl3.string(guildId(dependencyMap[5]).t.cCqsca), body: intl4.string(guildId(dependencyMap[5]).t["w+QZoX"]) };
          const show2 = AlertActionCreatorsDefault.show;
          AlertActionCreatorsDefault;
          intl3 = guildId(dependencyMap[5]).intl;
          intl4 = guildId(dependencyMap[5]).intl;
          show2(obj2);
        }
        return null;
      }
      if (429 === status) {
        const obj = { title: intl.string(guildId(dependencyMap[5]).t.cCqsca), body: intl2.string(guildId(dependencyMap[5]).t["YBM+UW"]) };
        const show = AlertActionCreatorsDefault.show;
        AlertActionCreatorsDefault;
        intl = guildId(dependencyMap[5]).intl;
        intl2 = guildId(dependencyMap[5]).intl;
        show(obj);
      } else {
        const obj3 = { title: intl5.string(guildId(dependencyMap[5]).t.cCqsca), body: intl6.string(guildId(dependencyMap[5]).t["/4TwKf"]) };
        const show3 = AlertActionCreatorsDefault.show;
        AlertActionCreatorsDefault;
        intl5 = guildId(dependencyMap[5]).intl;
        intl6 = guildId(dependencyMap[5]).intl;
        show3(obj3);
      }
    });
  },
  delete: (guildId, webhookId) => {
    let obj2;
    _require = guildId;
    const HTTP = require("HTTPUtils").HTTP;
    let obj = { url: closure_4.WEBHOOK(webhookId), oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
    const del = HTTP.del;
    obj2 = require("HTTPUtils");
    const delResult = del(obj);
    return delResult.then(() => {
      const obj = DispatcherDefault;
      const obj2 = { type: "WEBHOOK_DELETE", guildId, webhookId };
      obj.dispatch(obj2);
    });
  },
  update(guildId, webhookId, body) {
    let obj2;
    _require = guildId;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_4.WEBHOOK(webhookId), body, oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
    const patch = HTTP.patch;
    obj2 = require("HTTPUtils");
    const patchResult = patch(request);
    return patchResult.then((body) => {
      body = body.body;
      const obj = DispatcherDefault;
      const obj2 = { type: "WEBHOOK_UPDATE", guildId, webhook: body };
      obj.dispatch(obj2);
      return body;
    });
  }
};
const result = size.fileFinishedImporting("actions/WebhooksActionCreators.tsx");

export default obj;