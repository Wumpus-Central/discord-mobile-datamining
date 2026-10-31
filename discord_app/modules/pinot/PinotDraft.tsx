// === Module 11336: PinotDraft ===

// Module 11336 (PinotDraft)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/pinot/PinotDraft.tsx");

export function draftFromFeature(enabled) {
  const obj = { enabled: enabled.enabled, includedChannelIds: null };
  const channels = enabled.channels;
  const found = channels.filter((included) => included.included);
  obj.includedChannelIds = new Set(found.map((channelId) => channelId.channelId));
  return obj;
}
export function isDraftDirty(enabled, enabled2) {
  closure_0 = enabled2;
  let someResult = enabled.enabled !== enabled2.enabled;
  if (!someResult) {
    const channels = enabled.channels;
    someResult = channels.some((eligible) => {
      eligible = eligible.eligible;
      if (eligible) {
        const includedChannelIds = tmp.includedChannelIds;
        eligible = eligible.included !== includedChannelIds.has(eligible.channelId);
      }
      return eligible;
    });
  }
  return someResult;
}
export function patchBodyForDraft(enabled, enabled2) {
  let obj = {};
  if (enabled.enabled !== enabled2.enabled) {
    obj.enabled = enabled2.enabled;
  }
  const channels = enabled.channels;
  const found = channels.filter((eligible) => {
    eligible = eligible.eligible;
    if (eligible) {
      const includedChannelIds = tmp.includedChannelIds;
      eligible = eligible.included !== includedChannelIds.has(eligible.channelId);
    }
    return eligible;
  });
  const mapped = found.map((channelId) => {
    const obj = { channel_id: channelId.channelId, included: null };
    const includedChannelIds = enabled2.includedChannelIds;
    obj.included = includedChannelIds.has(channelId.channelId);
    return obj;
  });
  if (mapped.length > 0) {
    obj.channels = mapped;
  }
  return obj;
}
export function eligibleChannelIds(channels) {
  channels = channels.channels;
  const found = channels.filter((eligible) => eligible.eligible);
  return found.map((channelId) => channelId.channelId);
}