// === Module 19329: WebhooksStore ===

// Module 19329 (WebhooksStore)
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import WebhooksActionCreatorsDefault from "WebhooksActionCreators" /* 19330 */;

function handleWebhookCreateUpdate(arg0) {
  ({ guildId, webhook } = arg0);
  if (null == dependencyMap[guildId]) {
    dependencyMap[guildId] = {};
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
    dependencyMap[id] = {};
  }
  return applyDefault.values(dependencyMap[id]);
};
prototype["getWebhooksForChannel"] = function getWebhooksForChannel(id, arg1) {
  closure_0 = arg1;
  if (null == dependencyMap[id]) {
    dependencyMap[id] = {};
  }
  const values = applyDefault(dependencyMap[id]).values();
  const tmpResult = applyDefault(dependencyMap[id]);
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
    let obj2;
    if (null != webhooks) {
      c2 = null;
      items = [];
      if (null != channelId) {
        if (null == dependencyMap[guildId]) {
          dependencyMap[guildId] = {};
        }
        const values = applyDefault(dependencyMap[guildId]).values();
        const tmp15Result = applyDefault(dependencyMap[guildId]);
        items = values.filter((channel_id) => channel_id.channel_id !== channelId).value();
        const iter = values.filter((channel_id) => channel_id.channel_id !== channelId);
      }
      obj2 = {};
      dependencyMap[guildId] = obj2;
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
        const forChannel = WebhooksActionCreatorsDefault.fetchForChannel(guildId, channelId);
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