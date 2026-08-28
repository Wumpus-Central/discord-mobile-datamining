// === Module 15598: HappeningNowVoiceCardSubtitle ===

// Module 15598 (HappeningNowVoiceCardSubtitle)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import computeChannelNameDefault from "computeChannelName" /* 4640 */;
import _isStreamingDefault from "_isStreaming" /* 8054 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 9364 */;
import HAPPENING_NOW_CARD_MARGIN_RIGHT from "HAPPENING_NOW_CARD_MARGIN_RIGHT" /* 14824 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import { ActivityTypes } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
noopAll;
let closure_7 = createCacheKey.createStyles({ cardDetails: { marginTop: 2, flexDirection: "row", alignItems: "center" } });
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivitySubtitle.tsx");

export const HappeningNowVoiceCardSubtitle = function HappeningNowVoiceCardSubtitle(voiceState) {
  voiceState = voiceState.voiceState;
  let obj = voiceState(589);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getChannel(voiceState.channelId));
  obj = { style: callback().cardDetails, children: null };
  const tmp = callback();
  const tmp4 = importDefault;
  let tmp8;
  if (null != stateFromStores) {
    obj = { channel: null };
    obj[0] = stateFromStores;
    tmp8 = getChannelA11yLabelDefault(obj);
  }
  obj[1] = jsx(voiceState(14824).HappeningNowCardSubtitle, { lineClamp: 1, accessibilityLabel: tmp8, children: computeChannelNameDefault(stateFromStores) });
  return <View style={callback().cardDetails}>{null}</View>;
};
export const HappeningNowActivityCardSubtitle = function HappeningNowActivityCardSubtitle(activity) {
  activity = activity.activity;
  if (null != activity) {
    if (activity.type === ActivityTypes.CUSTOM_STATUS) {
      let trimmed = null;
      if (null != activity.state) {
        trimmed = activity.state.trim();
        const str4 = activity.state;
      }
      let tmp3 = trimmed;
    }
    const obj = { lineClamp: 1, children: null };
    obj[1] = tmp3;
    return jsx(HAPPENING_NOW_CARD_MARGIN_RIGHT.HappeningNowCardSubtitle, { lineClamp: 1, children: null });
  }
  if (null != activity.stream) {
    if (null != activity) {
      if (activity.type === ActivityTypes.PLAYING) {
        let name3 = activity.name;
      }
    }
    const intl = getSystemLocale.intl;
    name3 = intl.string(getSystemLocale.t.eXan7B);
  } else {
    let name;
    if (activity != null) {
      name = activity.name;
    }
    tmp3 = null;
    if (null != name) {
      if (!_isStreamingDefault(activity)) {
        if (tmp4(9195)(activity)) {
          if (null != activity.details) {
            if (null != activity.state) {
              const _HermesInternal = HermesInternal;
              name = "" + activity.details + " - " + activity.state;
            }
          }
        }
        name = activity.name;
      }
      if (null == activity.details) {
        const name2 = activity.name;
      }
      const details = activity.details;
      tmp4 = importDefault;
    }
  }
};