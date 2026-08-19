// discord_app/stores/WebhooksStore.tsx
import applyDefault from "../../_runtime/00012_apply.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";

function handleWebhookCreateUpdate(arg0) {
  ({ guildId, webhook } = arg0);
  if (null == dependencyMap[guildId]) {
    dependencyMap[guildId] = {};
  }
  dependencyMap[guildId][webhook.id] = webhook;
}
let closure_3 = {};
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
  return null != table["" + arg0 + ":" + str];
};
prototype["getWebhooksForGuild"] = function getWebhooksForGuild(id) {
  if (null == dependencyMap[id]) {
    dependencyMap[id] = {};
  }
  return applyDefault.values(dependencyMap[id]);
};
prototype["getWebhooksForChannel"] = function getWebhooksForChannel(id, arg1) {
  importDefault = arg1;
  if (null == dependencyMap[id]) {
    dependencyMap[id] = {};
  }
  const values = applyDefault(dependencyMap[id]).values();
  const tmpResult = applyDefault(dependencyMap[id]);
  return values.filter((item, index) => item.channel_id === closure_0).value();
};
Object.defineProperty(prototype, "error", {
  get: function error() {
    return closure_2;
  },
  set: undefined
});
WebhooksStore.displayName = "WebhooksStore";
const webhooksStore = new WebhooksStore(dispatcherDefault, {
  WEBHOOKS_UPDATE: function handleWebhooksUpdate(arg0) {
    ({ guildId, channelId } = arg0);
    ({ webhooks, error } = arg0);
    let obj;
    if (null != webhooks) {
      c2 = null;
      let items = [];
      if (null != channelId) {
        if (null == dependencyMap[guildId]) {
          dependencyMap[guildId] = {};
        }
        const tmp15 = channelId(obj[1]);
        const values = channelId(obj[1])(dependencyMap[guildId]).values();
        const tmp15Result = channelId(obj[1])(dependencyMap[guildId]);
        items = values.filter((item, index) => item.channel_id !== channelId).value();
        const iter = values.filter((item, index) => item.channel_id !== channelId);
      }
      obj = {};
      dependencyMap[guildId] = obj;
      const combined = items.concat(webhooks);
      const item = combined.forEach((item, index) => {
        obj[item.id] = item;
        return item;
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
        obj = channelId(obj[0]);
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
const result = require("obj132").fileFinishedImporting("stores/WebhooksStore.tsx");

export default webhooksStore;