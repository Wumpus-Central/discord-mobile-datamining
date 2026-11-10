// === Module 18505: HappeningNowCardActivitySubtitle ===

// Module 18505 (HappeningNowCardActivitySubtitle)
import util from "util" /* 1113 */;
import useChannelNameDefault from "useChannelName" /* 5778 */;
import ActivityTypes from "ActivityTypes" /* 5893 */;
import isStreamingDefault from "isStreaming" /* 8911 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 9171 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10890 */;
import HappeningNowCard from "HappeningNowCard" /* 17636 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4991 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5142);
let closure_6 = createStyles.createStyles({ cardDetails: { marginTop: 2, flexDirection: "row", alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivitySubtitle.tsx");

export function HappeningNowVoiceCardSubtitle(voiceState) {
  voiceState = voiceState.voiceState;
  const tmp = closure_6();
  items = [ChannelStore];
  const stateFromStores = voiceState(504).useStateFromStores(items, () => ChannelStore.getChannel(voiceState.channelId));
  const obj2 = { style: tmp.cardDetails, children: null };
  const obj = voiceState(504);
  let tmp8;
  if (null != stateFromStores) {
    const obj3 = { channel: stateFromStores };
    tmp8 = getChannelA11yLabelDefault(obj3);
  }
  obj2.children = jsx(voiceState(17636).HappeningNowCardSubtitle, { lineClamp: 1, accessibilityLabel: tmp8, children: useChannelNameDefault(stateFromStores) });
  return <View style={tmp.cardDetails}>{null}</View>;
}
export function HappeningNowActivityCardSubtitle(activity) {
  activity = activity.activity;
  if (null != activity) {
    if (activity.type === ActivityTypes.ActivityTypes.CUSTOM_STATUS) {
      let trimmed = null;
      if (null != activity.state) {
        trimmed = activity.state.trim();
      }
      let tmp4 = trimmed;
    }
    const obj = { lineClamp: 1, children: tmp4 };
    return jsx(HappeningNowCard.HappeningNowCardSubtitle, { lineClamp: 1, children: tmp4 });
  }
  if (null != activity.stream) {
    if (null != activity) {
      if (activity.type === ActivityTypes.ActivityTypes.PLAYING) {
        let name3 = activity.name;
      }
    }
    const intl = util.intl;
    name3 = intl.string(util.t.eXan7B);
  } else {
    let name1;
    if (activity != null) {
      name1 = activity.name;
    }
    tmp4 = null;
    if (null != name1) {
      if (!isStreamingDefault(activity)) {
        if (isListeningOnSpotifyDefault(activity)) {
          if (null != activity.details) {
            if (null != activity.state) {
              const _HermesInternal = HermesInternal;
              let name = "" + activity.details + " - " + activity.state;
            }
          }
        }
        name = activity.name;
      }
      if (null == activity.details) {
        const name2 = activity.name;
      }
      const details = activity.details;
    }
  }
}