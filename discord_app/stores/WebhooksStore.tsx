// === Module 16842: WebhooksStore ===

// Module 16842 (WebhooksStore)
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import WebhooksActionCreatorsDefault from "WebhooksActionCreators" /* 16843 */;

function handleWebhookCreateUpdate(arg0) {
  ({ guildId, webhook } = arg0);
  if (null == dependencyMap[guildId]) {
    tmp[guildId] = {};
  }
  dependencyMap[guildId][webhook.id] = webhook;
}
const dependencyMap = {};
let closure_4 = {};
const Store = initializeDefault.Store;
class WebhooksStore extends Store {
}
const prototype = WebhooksStore.prototype;
prototype["isFetching"] = function isFetching(arg0, arg1) {
  let str = arg1;
  if (null == arg1) {
    str = "guild";
  }
  return null != closure_4["" + arg0 + ":" + str];
};
prototype["getWebhooksForGuild"] = function getWebhooksForGuild(id) {
  if (null == dependencyMap[id]) {
    tmp[id] = {};
  }
  return _modDef12.values(dependencyMap[id]);
};
prototype["getWebhooksForChannel"] = function getWebhooksForChannel(id, arg1) {
  closure_0 = arg1;
  if (null == dependencyMap[id]) {
    tmp2[id] = {};
  }
  const values = _modDef12(dependencyMap[id]).values();
  const tmpResult = _modDef12(dependencyMap[id]);
  return values.filter((channel_id) => channel_id.channel_id === closure_0).value();
};
Object.defineProperty(prototype, "error", {
  get: function error() {
    return c2;
  },
  set: undefined
});
WebhooksStore.displayName = "WebhooksStore";
const webhooksStore = new WebhooksStore(DispatcherDefault, {
  WEBHOOKS_UPDATE: function handleWebhooksUpdate(arg0) {
    ({ guildId, channelId } = arg0);
    ({ webhooks, error } = arg0);
    let obj;
    if (null != webhooks) {
      c2 = null;
      let items = [];
      if (null != channelId) {
        if (null == dependencyMap[guildId]) {
          tmp16[guildId] = {};
        }
        const values = _modDef12(dependencyMap[guildId]).values();
        const tmp15Result = _modDef12(dependencyMap[guildId]);
        items = values.filter((channel_id) => channel_id.channel_id !== channelId).value();
        const iter = values.filter((channel_id) => channel_id.channel_id !== channelId);
      }
      obj = {};
      dependencyMap[guildId] = obj;
      const combined = items.concat(webhooks);
      const item = combined.forEach((id) => {
        obj[id.id] = id;
        return id;
      });
      let str4 = channelId;
      if (null == channelId) {
        str4 = "guild";
      }
      const _HermesInternal2 = HermesInternal;
      const combined1 = "" + guildId + ":" + str4;
      delete tmp2[tmp];
    } else if (null != error) {
      c2 = error;
      let str = channelId;
      if (null == channelId) {
        str = "guild";
      }
      const _HermesInternal = HermesInternal;
      const combined2 = "" + guildId + ":" + str;
      delete tmp4[tmp3];
    } else {
      let tmp5 = null != channelId;
      if (tmp5) {
        tmp5 = null != dependencyMap[guildId];
      }
      if (tmp5) {
        c2 = null;
        obj = WebhooksActionCreatorsDefault;
        const forChannel = obj.fetchForChannel(guildId, channelId);
      }
    }
  },
  WEBHOOKS_FETCHING: function handleWebhooksFetching(channelId) {
    let str = channelId.channelId;
    if (null == str) {
      str = "guild";
    }
    closure_4["" + channelId.guildId + ":" + str] = true;
  },
  WEBHOOK_CREATE: handleWebhookCreateUpdate,
  WEBHOOK_UPDATE: handleWebhookCreateUpdate,
  WEBHOOK_DELETE: function handleWebhookDelete(arg0) {
    ({ guildId, webhookId } = arg0);
    if (null == dependencyMap[guildId]) {
      dependencyMap[guildId] = {};
    }
    delete tmp[tmp2];
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/WebhooksStore.tsx");

export default webhooksStore;