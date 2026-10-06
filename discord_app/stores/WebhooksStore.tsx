// === Module 17047: WebhooksStore ===

// Module 17047 (WebhooksStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import WebhooksActionCreatorsDefault from "WebhooksActionCreators" /* 17048 */;
import size from "module_2" /* 2 */;

let c2;

function handleWebhookCreateUpdate(arg0) {
  let guildId;
  let webhook;
  ({ guildId, webhook } = arg0);
  if (null == closure_3[guildId]) {
    closure_3[guildId] = {};
  }
  closure_3[guildId][webhook.id] = webhook;
}
const _false = {};
let closure_4 = {};
const Store = get_initializedDefault.Store;
class WebhooksStore extends Store {
  isFetching(arg0, arg1) {
    let str = arg1;
    if (null == arg1) {
      str = "guild";
    }
    return null != closure_4["" + arg0 + ":" + str];
  }
  getWebhooksForGuild(id) {
    const values = _modDef12.values;
    _modDef12;
    if (null == closure_3[id]) {
      closure_3[id] = {};
    }
    return values(closure_3[id]);
  }
  getWebhooksForChannel(id, arg1) {
    let closure_0 = arg1;
    const tmp = _modDef12;
    if (null == closure_3[id]) {
      closure_3[id] = {};
    }
    const tmpResult = tmp(closure_3[id]);
    const values = tmpResult.values();
    const iter = values.filter((channel_id) => channel_id.channel_id === closure_0);
    return iter.value();
  }
}
Object.defineProperty(WebhooksStore.prototype, "error", {
  get: function error() {
    return c2;
  },
  set: undefined
});
WebhooksStore.displayName = "WebhooksStore";
let obj = {
  WEBHOOKS_UPDATE: function handleWebhooksUpdate(arg0) {
    let channelId;
    let error;
    let guildId;
    let webhooks;
    ({ guildId, channelId } = arg0);
    ({ webhooks, error } = arg0);
    let obj2;
    if (null != webhooks) {
      c2 = null;
      let items = [];
      if (null != channelId) {
        const tmp10 = _modDef12;
        if (null == closure_3[guildId]) {
          closure_3[guildId] = {};
        }
        const tmp10Result = tmp10(closure_3[guildId]);
        const values = tmp10Result.values();
        const iter = values.filter((channel_id) => channel_id.channel_id !== channelId);
        items = iter.value();
      }
      obj2 = {};
      closure_3[guildId] = obj2;
      const combined = items.concat(webhooks);
      const item = combined.forEach((id) => {
        obj2[id.id] = id;
        return id;
      });
      let str4 = channelId;
      if (null == channelId) {
        str4 = "guild";
      }
      const _HermesInternal2 = HermesInternal;
      delete closure_4["" + guildId + ":" + str4];
    } else if (null != error) {
      c2 = error;
      let str = channelId;
      if (null == channelId) {
        str = "guild";
      }
      const _HermesInternal = HermesInternal;
      delete closure_4["" + guildId + ":" + str];
    } else {
      const tmp = null != channelId && null != closure_3[guildId];
      if (tmp) {
        c2 = null;
        const obj = WebhooksActionCreatorsDefault;
        const forChannel = obj.fetchForChannel(guildId, channelId);
      }
    }
  },
  WEBHOOKS_FETCHING: function handleWebhooksFetching(channelId) {
    let str = channelId.channelId;
    const guildId = channelId.guildId;
    if (null == str) {
      str = "guild";
    }
    closure_4["" + guildId + ":" + str] = true;
  },
  WEBHOOK_CREATE: handleWebhookCreateUpdate,
  WEBHOOK_UPDATE: handleWebhookCreateUpdate,
  WEBHOOK_DELETE: function handleWebhookDelete(guildId) {
    guildId = guildId.guildId;
    const webhookId = guildId.webhookId;
    if (null == closure_3[guildId]) {
      closure_3[guildId] = {};
    }
    delete closure_3[guildId][webhookId];
  }
};
const webhooksStore = new WebhooksStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/WebhooksStore.tsx");

export default webhooksStore;