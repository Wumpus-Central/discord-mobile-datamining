// === Module 16632: WebhooksActionCreators ===

// Module 16632 (WebhooksActionCreators)
import _modDef12 from "module_12" /* 12 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5196 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ AbortCodes: c3, Endpoints: closure_4 } = Constants);
const result = size.fileFinishedImporting("actions/WebhooksActionCreators.tsx");

export default {
  fetchForGuild(id) {
    _require = id;
    DispatcherDefault.dispatch({ type: "WEBHOOKS_FETCHING", guildId: id });
    const HTTP = require("HTTPUtils").HTTP;
    const obj3 = { url: closure_4.GUILD_WEBHOOKS(id), oldFormErrors: true, rejectWithError: null };
    const obj2 = { type: "WEBHOOKS_FETCHING", guildId: id };
    obj3.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
    value = HTTP.get(obj3);
    const obj4 = require("HTTPUtils");
    value.then((body) => DispatcherDefault.dispatch({ type: "WEBHOOKS_UPDATE", guildId, webhooks: body.body })).catch((error) => {
      DispatcherDefault.dispatch({ type: "WEBHOOKS_UPDATE", guildId, error: error.body.message });
    });
  },
  fetchForChannel(guildId, channelId) {
    _require = guildId;
    importDefault = channelId;
    DispatcherDefault.dispatch({ type: "WEBHOOKS_FETCHING", guildId, channelId });
    const HTTP = require("HTTPUtils").HTTP;
    const obj2 = { type: "WEBHOOKS_FETCHING", guildId, channelId };
    value = HTTP.get({ url: closure_4.CHANNEL_WEBHOOKS(channelId), oldFormErrors: true, rejectWithError: true });
    const obj3 = { url: closure_4.CHANNEL_WEBHOOKS(channelId), oldFormErrors: true, rejectWithError: true };
    value.then((body) => DispatcherDefault.dispatch({ type: "WEBHOOKS_UPDATE", guildId, channelId, webhooks: body.body })).catch((error) => {
      DispatcherDefault.dispatch({ type: "WEBHOOKS_UPDATE", guildId, error: error.body.message });
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
      DispatcherDefault.dispatch({ type: "WEBHOOK_CREATE", guildId, webhook: body });
      return body;
    }).catch((error) => {
      const body = error.body;
      if (null != body) {
        if (body.code === constants.TOO_MANY_WEBHOOKS) {
          const obj2 = { title: null, body: null };
          const intl3 = guildId(1115).intl;
          obj2.title = intl3.string(guildId(1115).t.cCqsca);
          const intl4 = guildId(1115).intl;
          obj2.body = intl4.string(guildId(1115).t["w+QZoX"]);
          AlertActionCreatorsDefault.show(obj2);
        }
        return null;
      }
      if (429 === error.status) {
        const obj4 = { title: null, body: null };
        const intl = guildId(1115).intl;
        obj4.title = intl.string(guildId(1115).t.cCqsca);
        const intl2 = guildId(1115).intl;
        obj4.body = intl2.string(guildId(1115).t["YBM+UW"]);
        AlertActionCreatorsDefault.show(obj4);
      } else {
        const obj6 = { title: null, body: null };
        const intl5 = guildId(1115).intl;
        obj6.title = intl5.string(guildId(1115).t.cCqsca);
        const intl6 = guildId(1115).intl;
        obj6.body = intl6.string(guildId(1115).t["/4TwKf"]);
        AlertActionCreatorsDefault.show(obj6);
      }
    });
  },
  delete(guildId, webhookId) {
    _require = guildId;
    const HTTP = require("HTTPUtils").HTTP;
    const obj = { url: closure_4.WEBHOOK(webhookId), oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    const obj2 = require("HTTPUtils");
    return HTTP.del(obj).then(() => {
      DispatcherDefault.dispatch({ type: "WEBHOOK_DELETE", guildId, webhookId });
    });
  },
  update(guildId, webhookId, body) {
    _require = guildId;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_4.WEBHOOK(webhookId), body, oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    const obj2 = require("HTTPUtils");
    return HTTP.patch(request).then((body) => {
      body = body.body;
      DispatcherDefault.dispatch({ type: "WEBHOOK_UPDATE", guildId, webhook: body });
      return body;
    });
  }
};