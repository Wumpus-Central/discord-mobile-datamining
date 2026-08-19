// discord_app/actions/WebhooksActionCreators.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import applyDefault from "../../_runtime/00012_apply.js";
import dispatcherDefault from "../Dispatcher.tsx";
import ME from "../Constants.tsx";
import { sendRequest } from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";

({ AbortCodes: c3, Endpoints: c4 } = ME);
let closure_5 = ["Spidey Bot", "Captain Hook"];
const result = obj132.fileFinishedImporting("actions/WebhooksActionCreators.tsx");

export default {
  fetchForGuild(id) {
    const _require = id;
    let obj = { type: "WEBHOOKS_FETCHING", guildId: id };
    obj.dispatch(obj);
    const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
    obj = { url: closure_4.GUILD_WEBHOOKS(id), oldFormErrors: true, rejectWithError: require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").rejectWithMigratedError() };
    const value = HTTP.get(obj);
    const obj4 = sendRequest;
    value.then((result) => {
      const obj = { type: "WEBHOOKS_UPDATE", guildId: closure_0, webhooks: result.body };
      return obj.dispatch(obj);
    }).catch((error) => {
      const obj = { type: "WEBHOOKS_UPDATE", guildId: closure_0, error: error.body.message };
      obj.dispatch(obj);
    });
  },
  fetchForChannel(guildId, channelId) {
    const _require = guildId;
    importDefault = channelId;
    let obj = { type: "WEBHOOKS_FETCHING", guildId, channelId };
    obj.dispatch(obj);
    const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
    obj = { url: closure_4.CHANNEL_WEBHOOKS(channelId), oldFormErrors: true, rejectWithError: true };
    const value = HTTP.get(obj);
    value.then((result) => {
      channelId(dependencyMap[1]);
      const obj = { type: "WEBHOOKS_UPDATE", guildId: closure_0, channelId, webhooks: result.body };
      return obj.dispatch(obj);
    }).catch((error) => {
      channelId(dependencyMap[1]);
      const obj = { type: "WEBHOOKS_UPDATE", guildId: closure_0, error: error.body.message };
      obj.dispatch(obj);
    });
  },
  create(arg0, channelId) {
    const _require = arg0;
    let tmp = arg2;
    if (null == arg2) {
      let obj = applyDefault;
      tmp = length[obj.random(obj, 0, length.length - 1)];
    }
    const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
    obj = { url: closure_4.CHANNEL_WEBHOOKS(channelId), body: { name: tmp }, oldFormErrors: true, rejectWithError: require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").rejectWithMigratedError() };
    let obj3 = sendRequest;
    const postResult = HTTP.post(obj);
    return HTTP.post(obj).then((result) => {
      const body = result.body;
      const obj = { type: "WEBHOOK_CREATE", guildId: closure_0, webhook: body };
      obj.dispatch(obj);
      return body;
    }).catch((error) => {
      const body = error.body;
      if (null != body) {
        if (body.code === constants.TOO_MANY_WEBHOOKS) {
          let obj = { title: null, body: null };
          const intl3 = callback(1236).intl;
          obj[0] = intl3.string(callback(1236).t.cCqsca);
          const intl4 = callback(1236).intl;
          obj[1] = intl4.string(callback(1236).t["w+QZoX"]);
          callback2(4827).show(obj);
          const obj3 = callback2(4827);
        }
        return null;
      }
      if (429 === error.status) {
        callback2(4827);
        obj = { title: null, body: null };
        const intl = callback(1236).intl;
        obj[0] = intl.string(callback(1236).t.cCqsca);
        const intl2 = callback(1236).intl;
        obj[1] = intl2.string(callback(1236).t["YBM+UW"]);
        obj.show(obj);
      } else {
        obj1 = { title: null, body: null };
        const intl5 = callback(1236).intl;
        obj1[0] = intl5.string(callback(1236).t.cCqsca);
        const intl6 = callback(1236).intl;
        obj1[1] = intl6.string(callback(1236).t["/4TwKf"]);
        callback2(4827).show(obj1);
        const obj5 = callback2(4827);
      }
    });
  },
  delete(arg0, arg1) {
    const _require = arg0;
    closure_1 = arg1;
    const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
    let obj = { url: closure_4.WEBHOOK(arg1), oldFormErrors: true, rejectWithError: require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").rejectWithMigratedError() };
    const obj2 = sendRequest;
    return HTTP.del(obj).then((result) => {
      callback(dependencyMap[1]);
      const obj = { type: "WEBHOOK_DELETE", guildId: closure_0, webhookId: callback };
      obj.dispatch(obj);
    });
  },
  update(arg0, arg1, body) {
    const _require = arg0;
    const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
    let obj = { url: closure_4.WEBHOOK(arg1), body, oldFormErrors: true, rejectWithError: require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").rejectWithMigratedError() };
    const obj2 = sendRequest;
    return HTTP.patch(obj).then((result) => {
      const body = result.body;
      const obj = { type: "WEBHOOK_UPDATE", guildId: closure_0, webhook: body };
      obj.dispatch(obj);
      return body;
    });
  }
};