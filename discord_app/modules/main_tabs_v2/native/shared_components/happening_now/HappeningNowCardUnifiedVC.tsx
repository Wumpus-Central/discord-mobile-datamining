// === Module 15399: HappeningNowCardUnifiedVC ===

// Module 15399 (HappeningNowCardUnifiedVC)
import noopAll from "noop" /* 19 */;
import IconOrPreviewDefault from "IconOrPreview" /* 15400 */;
import HappeningNowCardEmbeddedActivityDefault from "HappeningNowCardEmbeddedActivity" /* 15412 */;
import formatVoiceActivityTitleDefault from "formatVoiceActivityTitle" /* 15413 */;
import closure_3 from "participantFromServer" /* 1390 */;
import closure_4 from "reset" /* 4658 */;
import closure_5 from "markAllUserIdListsStale" /* 4033 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUnifiedVC.tsx");

export default function HappeningNowCardUnifiedVC(arg0) {
  ({ guildId, index, voiceState, fullwidth, panelVariant } = arg0);
  ({ userId, cardKey } = arg0);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  const channelId = voiceState.channelId;
  let obj = channelId(647);
  const items = [closure_3, closure_4, closure_5];
  const items1 = [channelId];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    if (null == channelId) {
      return {};
    } else {
      const allApplicationStreamsForChannel = closure_1_4.getAllApplicationStreamsForChannel(tmp);
      if (allApplicationStreamsForChannel.length > 0) {
        const found = allApplicationStreamsForChannel.find((ownerId) => friend.isFriend(ownerId.ownerId));
        if (null != found) {
          let obj = { stream: null };
          obj[0] = found;
          return obj;
        }
      }
      const embeddedActivitiesForChannel = closure_1_3.getEmbeddedActivitiesForChannel(tmp);
      const tmp7 = closure_1_1(closure_1_2[9])(embeddedActivitiesForChannel);
      if (null != tmp7) {
        obj = { activity: null };
        obj[0] = tmp7;
      } else if (tmp9) {
        obj1 = { stream: null };
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
    let tmp5 = jsx(IconOrPreviewDefault, { index: null, userId: null, guildId: null, stream: null, fullwidth: null, panelVariant: null });
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
    tmp5 = jsx(HappeningNowCardEmbeddedActivityDefault, { index: null, voiceState: null, fullwidth: null, guildId: null, activity: null, userId: null, cardKey: null, panelVariant: null });
  } else {
    obj1 = { index: null, voiceState: null, fullwidth: null, guildId: null, panelVariant: null };
    obj1[0] = index;
    obj1[1] = voiceState;
    obj1[2] = fullwidth;
    obj1[3] = guildId;
    obj1[4] = panelVariant;
    tmp5 = jsx(formatVoiceActivityTitleDefault, { index: null, voiceState: null, fullwidth: null, guildId: null, panelVariant: null });
  }
  return tmp5;
};
export const useCallActivityData = function useCallActivityData(channel_id) {
  const _require = channel_id;
  const items = [closure_3, closure_4, closure_5];
  const items1 = [channel_id];
  return _require(647).useStateFromStoresObject(items, () => {
    if (null == channelId) {
      return {};
    } else {
      const allApplicationStreamsForChannel = closure_1_4.getAllApplicationStreamsForChannel(tmp);
      if (allApplicationStreamsForChannel.length > 0) {
        const found = allApplicationStreamsForChannel.find((ownerId) => friend.isFriend(ownerId.ownerId));
        if (null != found) {
          let obj = { stream: null };
          obj[0] = found;
          return obj;
        }
      }
      const embeddedActivitiesForChannel = closure_1_3.getEmbeddedActivitiesForChannel(tmp);
      const tmp7 = closure_1_1(closure_1_2[9])(embeddedActivitiesForChannel);
      if (null != tmp7) {
        obj = { activity: null };
        obj[0] = tmp7;
      } else if (tmp9) {
        obj1 = { stream: null };
        obj1[0] = allApplicationStreamsForChannel[0];
        obj = obj1;
      } else {
        obj = {};
      }
      return obj;
    }
  }, items1);
};