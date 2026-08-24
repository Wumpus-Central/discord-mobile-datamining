// === Module 16157: ? ===

// Module 16157
import set from "set" /* 2 */;
import applyDefault from "apply" /* 12 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import ME from "ME" /* 676 */;

({ AbortCodes: c3, Endpoints: c4 } = ME);
let closure_5 = ["Spidey Bot", "Captain Hook"];
const result = set.fileFinishedImporting("actions/WebhooksActionCreators.tsx");

export default {
  fetchForGuild(guildId) {
    const _require = guildId;
    let obj = dispatcherDefault;
    obj = { type: "WEBHOOKS_FETCHING", guildId };
    obj.dispatch(obj);
    const HTTP = _require(530).HTTP;
    obj = { url: closure_4.GUILD_WEBHOOKS(guildId), oldFormErrors: true, rejectWithError: _require(530).rejectWithMigratedError() };
    const value = HTTP.get(obj);
    const obj4 = _require(530);
    value.then((body) => {
      let obj = closure_1_1(closure_1_2[1]);
      obj = { type: "WEBHOOKS_UPDATE", guildId: closure_0, webhooks: body.body };
      return obj.dispatch(obj);
    }).catch((body) => {
      let obj = closure_1_1(closure_1_2[1]);
      obj = { type: "WEBHOOKS_UPDATE", guildId: closure_0, error: body.body.message };
      obj.dispatch(obj);
    });
  },
  fetchForChannel(guildId, channelId) {
    const _require = guildId;
    importDefault = channelId;
    let obj = dispatcherDefault;
    obj = { type: "WEBHOOKS_FETCHING", guildId, channelId };
    obj.dispatch(obj);
    const HTTP = _require(530).HTTP;
    obj = { url: closure_4.CHANNEL_WEBHOOKS(channelId), oldFormErrors: true, rejectWithError: true };
    const value = HTTP.get(obj);
    value.then((body) => {
      let obj = channelId(closure_1_2[1]);
      obj = { type: "WEBHOOKS_UPDATE", guildId: closure_0, channelId, webhooks: body.body };
      return obj.dispatch(obj);
    }).catch((body) => {
      let obj = channelId(closure_1_2[1]);
      obj = { type: "WEBHOOKS_UPDATE", guildId: closure_0, error: body.body.message };
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
    const HTTP = _require(530).HTTP;
    obj = { url: closure_4.CHANNEL_WEBHOOKS(channelId), body: { name: tmp }, oldFormErrors: true, rejectWithError: _require(530).rejectWithMigratedError() };
    let obj3 = _require(530);
    const postResult = HTTP.post(obj);
    return HTTP.post(obj).then((body) => {
      body = body.body;
      let obj = closure_1_1(closure_1_2[1]);
      obj = { type: "WEBHOOK_CREATE", guildId: closure_0, webhook: body };
      obj.dispatch(obj);
      return body;
    }).catch((body) => {
      body = body.body;
      if (null != body) {
        if (body.code === constants.TOO_MANY_WEBHOOKS) {
          let obj = { title: null, body: null };
          const intl3 = callback(1236).intl;
          obj[0] = intl3.string(callback(1236).t.cCqsca);
          const intl4 = callback(1236).intl;
          obj[1] = intl4.string(callback(1236).t["w+QZoX"]);
          callback2(4832).show(obj);
          const obj3 = callback2(4832);
        }
        return null;
      }
      if (429 === body.status) {
        obj = callback2(4832);
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
        callback2(4832).show(obj1);
        const obj5 = callback2(4832);
      }
    });
  },
  delete(arg0, arg1) {
    const _require = arg0;
    closure_1 = arg1;
    const HTTP = _require(530).HTTP;
    let obj = { url: closure_4.WEBHOOK(arg1), oldFormErrors: true, rejectWithError: _require(530).rejectWithMigratedError() };
    const obj2 = _require(530);
    return HTTP.del(obj).then(() => {
      let obj = callback(closure_1_2[1]);
      obj = { type: "WEBHOOK_DELETE", guildId: closure_0, webhookId: callback };
      obj.dispatch(obj);
    });
  },
  update(arg0, arg1, body) {
    const _require = arg0;
    const HTTP = _require(530).HTTP;
    let obj = { url: closure_4.WEBHOOK(arg1), body, oldFormErrors: true, rejectWithError: _require(530).rejectWithMigratedError() };
    const obj2 = _require(530);
    return HTTP.patch(obj).then((body) => {
      body = body.body;
      let obj = closure_1_1(closure_1_2[1]);
      obj = { type: "WEBHOOK_UPDATE", guildId: closure_0, webhook: body };
      obj.dispatch(obj);
      return body;
    });
  }
};