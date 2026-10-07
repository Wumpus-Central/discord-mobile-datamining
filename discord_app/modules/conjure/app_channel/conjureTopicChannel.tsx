// === Module 2059: conjureTopicChannel ===

// Module 2059 (conjureTopicChannel)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
let c1 = "vibegrations_application_id=";
const re2 = /^\d{17,20}$/;
const result = size.fileFinishedImporting("modules/conjure/app_channel/conjureTopicChannel.tsx");

export const conjureAppIdFromTopic = function conjureAppIdFromTopic(topic_) {
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
export const conjureTopicForApp = function conjureTopicForApp(arg0) {
  return "" + c1 + arg0;
};
export const normalizeConjureTopicChannel = function normalizeConjureTopicChannel(arg0) {
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
export const normalizeConjureTopicChannelRecord = function normalizeConjureTopicChannelRecord(arg0) {
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
export const isConjureLegacyTopicChannel = function isConjureLegacyTopicChannel(type, topic_) {
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