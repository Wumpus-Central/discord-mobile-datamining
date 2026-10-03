// discord_app/modules/vibegrations/lib/vibegrationsTopicChannel.tsx
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ChannelTypes = Constants.ChannelTypes;
let c1 = "vibegrations_application_id=";
const re2 = /^\d{17,20}$/;
const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsTopicChannel.tsx");

export const vibegrationsAppIdFromTopic = function vibegrationsAppIdFromTopic(topic_) {
  if (null != topic_) {
    if (topic_.startsWith(c1)) {
      const substr = topic_.slice(28);
      let tmp4 = null;
      if (re2.test(substr)) {
        tmp4 = substr;
      }
      return tmp4;
    }
  }
  return null;
};
export const vibegrationsTopicForApp = function vibegrationsTopicForApp(arg0) {
  return "" + c1 + arg0;
};
export const normalizeVibegrationsTopicChannel = function normalizeVibegrationsTopicChannel(arg0) {
  ({ type, topic } = arg0);
  if (type == null) {
    type = ChannelTypes.GUILD_TEXT;
  }
  let tmp3 = null;
  if (type === ChannelTypes.GUILD_TEXT) {
    let tmp4 = null;
    if (null != topic) {
      tmp4 = null;
      if (topic.startsWith(c1)) {
        const substr = topic.slice(28);
        let tmp8 = null;
        if (re2.test(substr)) {
          tmp8 = substr;
        }
        tmp4 = tmp8;
      }
    }
    tmp3 = tmp4;
  }
  let tmp9 = arg0;
  if (null != tmp3) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.type = ChannelTypes.GUILD_APP;
    obj.application_id = tmp3;
    tmp9 = obj;
  }
  return tmp9;
};
export const normalizeVibegrationsTopicChannelRecord = function normalizeVibegrationsTopicChannelRecord(arg0) {
  ({ type, topic_ } = arg0);
  if (type == null) {
    type = ChannelTypes.GUILD_TEXT;
  }
  let tmp3 = null;
  if (type === ChannelTypes.GUILD_TEXT) {
    let tmp4 = null;
    if (null != topic_) {
      tmp4 = null;
      if (topic_.startsWith(c1)) {
        const substr = topic_.slice(28);
        let tmp8 = null;
        if (re2.test(substr)) {
          tmp8 = substr;
        }
        tmp4 = tmp8;
      }
    }
    tmp3 = tmp4;
  }
  let tmp9 = arg0;
  if (null != tmp3) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.type = ChannelTypes.GUILD_APP;
    obj.application_id = tmp3;
    tmp9 = obj;
  }
  return tmp9;
};
export const isVibegrationsLegacyTopicChannel = function isVibegrationsLegacyTopicChannel(type, topic_) {
  let tmp = type === ChannelTypes.GUILD_APP;
  if (tmp) {
    let tmp4 = null;
    if (null != topic_) {
      tmp4 = null;
      if (topic_.startsWith(c1)) {
        const substr = topic_.slice(28);
        let tmp8 = null;
        if (re2.test(substr)) {
          tmp8 = substr;
        }
        tmp4 = tmp8;
      }
    }
    tmp = null != tmp4;
  }
  return tmp;
};
