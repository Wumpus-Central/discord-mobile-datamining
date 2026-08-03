// === Module 15067: HappeningNowCardUnifiedVC ===

// Module 15067 (HappeningNowCardUnifiedVC)
import "noop";
import participantFromServer from "participantFromServer";
import reset from "reset";
import upsertRelationship from "upsertRelationship";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("reset").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUnifiedVC.tsx");

export default function HappeningNowCardUnifiedVC(arg0) {
  let activity;
  let cardKey;
  let fullwidth;
  let guildId;
  let index;
  let panelVariant;
  let stream;
  let userId;
  let voiceState;
  ({ guildId, index, voiceState, fullwidth, panelVariant } = arg0);
  ({ userId, cardKey } = arg0);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  const channelId = voiceState.channelId;
  let obj = channelId(647);
  const items = [participantFromServer, reset, upsertRelationship];
  const items1 = [channelId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    if (null == channelId) {
      return {};
    } else {
      const allApplicationStreamsForChannel = outer1_4.getAllApplicationStreamsForChannel(tmp);
      if (allApplicationStreamsForChannel.length > 0) {
        const found = allApplicationStreamsForChannel.find((ownerId) => friend.isFriend(ownerId.ownerId));
        if (null != found) {
          let obj = { stream: null };
          obj[0] = found;
          return obj;
        }
      }
      const embeddedActivitiesForChannel = outer1_3.getEmbeddedActivitiesForChannel(tmp);
      const tmp7 = outer1_1(outer1_2[9])(embeddedActivitiesForChannel);
      if (null != tmp7) {
        obj = { activity: null };
        obj[0] = tmp7;
      } else if (tmp9) {
        const obj1 = { stream: null };
        obj1[0] = allApplicationStreamsForChannel[0];
        obj = obj1;
      } else {
        obj = {};
      }
      return obj;
    }
  }, items1);
  ({ stream, activity } = stateFromStoresObject);
  if (null != stream) {
    obj = { index: null, userId: null, guildId: null, stream: null, fullwidth: null, panelVariant: null };
    obj[0] = index;
    obj[1] = stream.ownerId;
    obj[2] = guildId;
    obj[3] = stream;
    obj[4] = fullwidth;
    obj[5] = panelVariant;
    let tmp5 = jsx(importDefault(15068), { index: null, userId: null, guildId: null, stream: null, fullwidth: null, panelVariant: null });
  } else if (null != activity) {
    obj = { index: null, voiceState: null, fullwidth: null, guildId: null, activity: null, userId: null, cardKey: null, panelVariant: null };
    obj[0] = index;
    obj[1] = voiceState;
    obj[2] = fullwidth;
    obj[3] = guildId;
    obj[4] = activity;
    obj[5] = userId;
    obj[6] = cardKey;
    obj[7] = panelVariant;
    tmp5 = jsx(importDefault(15080), { index: null, voiceState: null, fullwidth: null, guildId: null, activity: null, userId: null, cardKey: null, panelVariant: null });
  } else {
    let obj1 = { index: null, voiceState: null, fullwidth: null, guildId: null, panelVariant: null };
    obj1[0] = index;
    obj1[1] = voiceState;
    obj1[2] = fullwidth;
    obj1[3] = guildId;
    obj1[4] = panelVariant;
    tmp5 = jsx(importDefault(15081), { index: null, voiceState: null, fullwidth: null, guildId: null, panelVariant: null });
  }
  return tmp5;
};
export const useCallActivityData = function useCallActivityData(channel_id) {
  const _require = channel_id;
  const items = [participantFromServer, reset, upsertRelationship];
  const items1 = [channel_id];
  return _require(647).useStateFromStoresObject(items, () => {
    if (null == channelId) {
      return {};
    } else {
      const allApplicationStreamsForChannel = outer1_4.getAllApplicationStreamsForChannel(tmp);
      if (allApplicationStreamsForChannel.length > 0) {
        const found = allApplicationStreamsForChannel.find((ownerId) => friend.isFriend(ownerId.ownerId));
        if (null != found) {
          let obj = { stream: null };
          obj[0] = found;
          return obj;
        }
      }
      const embeddedActivitiesForChannel = outer1_3.getEmbeddedActivitiesForChannel(tmp);
      const tmp7 = outer1_1(outer1_2[9])(embeddedActivitiesForChannel);
      if (null != tmp7) {
        obj = { activity: null };
        obj[0] = tmp7;
      } else if (tmp9) {
        const obj1 = { stream: null };
        obj1[0] = allApplicationStreamsForChannel[0];
        obj = obj1;
      } else {
        obj = {};
      }
      return obj;
    }
  }, items1);
};