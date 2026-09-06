// === Module 16843: WebhooksActionCreators ===

// Module 16843 (WebhooksActionCreators)
import _modDef12 from "module_12" /* 12 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ AbortCodes: c3, Endpoints: closure_4 } = Constants);
const result = size.fileFinishedImporting("actions/WebhooksActionCreators.tsx");

export default {
  fetchForGuild(id) {
    _require = id;
    let obj = { type: "WEBHOOKS_FETCHING", guildId: id };
    obj.dispatch(obj);
    const HTTP = require("HTTPUtils").HTTP;
    obj = { url: closure_4.GUILD_WEBHOOKS(id), oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    value = HTTP.get(obj);
    const obj4 = require("HTTPUtils");
    value.then((body) => {
      const obj = { type: "WEBHOOKS_UPDATE", guildId, webhooks: body.body };
      return obj.dispatch(obj);
    }).catch((error) => {
      const obj = { type: "WEBHOOKS_UPDATE", guildId, error: error.body.message };
      obj.dispatch(obj);
    });
  },
  fetchForChannel(guildId, channelId) {
    _require = guildId;
    importDefault = channelId;
    let obj = { type: "WEBHOOKS_FETCHING", guildId, channelId };
    obj.dispatch(obj);
    const HTTP = require("HTTPUtils").HTTP;
    obj = { url: closure_4.CHANNEL_WEBHOOKS(channelId), oldFormErrors: true, rejectWithError: true };
    value = HTTP.get(obj);
    value.then((body) => {
      const obj = { type: "WEBHOOKS_UPDATE", guildId, channelId, webhooks: body.body };
      return obj.dispatch(obj);
    }).catch((error) => {
      const obj = { type: "WEBHOOKS_UPDATE", guildId, error: error.body.message };
      obj.dispatch(obj);
    });
  },
  create(guildId, channelId, arg2) {
    _require = guildId;
    let tmp = arg2;
    if (null == arg2) {
      let obj = _modDef12;
      tmp = length[obj.random(obj, 0, length.length - 1)];
    }
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_4.CHANNEL_WEBHOOKS(channelId), body: { name: tmp }, oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    let obj3 = require("HTTPUtils");
    const postResult = HTTP.post(request);
    return HTTP.post(request).then((body) => {
      body = body.body;
      const obj = { type: "WEBHOOK_CREATE", guildId, webhook: body };
      obj.dispatch(obj);
      return body;
    }).catch((error) => {
      const body = error.body;
      if (null != body) {
        if (body.code === constants.TOO_MANY_WEBHOOKS) {
          let obj = { title: null, body: null };
          const intl3 = guildId(1114).intl;
          obj.title = intl3.string(guildId(1114).t.cCqsca);
          const intl4 = guildId(1114).intl;
          obj.body = intl4.string(guildId(1114).t["w+QZoX"]);
          AlertActionCreatorsDefault.show(obj);
        }
        return null;
      }
      if (429 === error.status) {
        obj = { title: null, body: null };
        const intl = guildId(1114).intl;
        obj.title = intl.string(guildId(1114).t.cCqsca);
        const intl2 = guildId(1114).intl;
        obj.body = intl2.string(guildId(1114).t["YBM+UW"]);
        obj.show(obj);
      } else {
        const obj1 = { title: null, body: null };
        const intl5 = guildId(1114).intl;
        obj1.title = intl5.string(guildId(1114).t.cCqsca);
        const intl6 = guildId(1114).intl;
        obj1.body = intl6.string(guildId(1114).t["/4TwKf"]);
        AlertActionCreatorsDefault.show(obj1);
      }
    });
  },
  delete(guildId, webhookId) {
    _require = guildId;
    const HTTP = require("HTTPUtils").HTTP;
    let obj = { url: closure_4.WEBHOOK(webhookId), oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    const obj2 = require("HTTPUtils");
    return HTTP.del(obj).then(() => {
      const obj = { type: "WEBHOOK_DELETE", guildId, webhookId };
      obj.dispatch(obj);
    });
  },
  update(guildId, webhookId, body) {
    _require = guildId;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_4.WEBHOOK(webhookId), body, oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    const obj2 = require("HTTPUtils");
    return HTTP.patch(request).then((body) => {
      body = body.body;
      const obj = { type: "WEBHOOK_UPDATE", guildId, webhook: body };
      obj.dispatch(obj);
      return body;
    });
  }
};