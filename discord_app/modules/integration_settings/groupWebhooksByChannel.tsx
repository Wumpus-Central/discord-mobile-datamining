// === Module 20093: groupWebhooksByChannel ===

// Module 20093 (groupWebhooksByChannel)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/integration_settings/groupWebhooksByChannel.tsx");

export default function groupWebhooksByChannel(arg0, fn) {
  const obj = {};
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp3 = obj[nextResult.channel_id];
    if (null == tmp3) {
      let tmp9 = fn(tmp2.channel_id);
      if (null != tmp9) {
        let obj2 = { channel: null, webhooks: null };
        obj2.channel = tmp10;
        items = [tmp2];
        obj2.webhooks = items;
        obj[tmp2.channel_id] = obj2;
      }
    } else {
      let webhooks = tmp4.webhooks;
      let arr = webhooks.push(tmp2);
    }
    continue;
  }
  const values = Object.values(obj);
  return values.sort((channel, channel2) => {
    const name = channel.channel.name;
    return name.localeCompare(channel2.channel.name);
  });
};