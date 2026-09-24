// === Module 16506: HappeningNowCardActivitySubtitle ===

// Module 16506 (HappeningNowCardActivitySubtitle)
import util from "util" /* 1115 */;
import useChannelNameDefault from "useChannelName" /* 4982 */;
import isStreamingDefault from "isStreaming" /* 8607 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 9951 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 11241 */;
import HappeningNowCard from "HappeningNowCard" /* 15646 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2044 */;

require = fn;
const View = fn(17).View;
const ActivityTypes = fn(1074).ActivityTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_7 = createStyles.createStyles({ cardDetails: { marginTop: 2, flexDirection: "row", alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivitySubtitle.tsx");

export const HappeningNowVoiceCardSubtitle = function HappeningNowVoiceCardSubtitle(voiceState) {
  voiceState = voiceState.voiceState;
  const tmp = closure_7();
  const items = [ChannelStore];
  const stateFromStores = voiceState(504).useStateFromStores(items, () => ChannelStore.getChannel(voiceState.channelId));
  const obj2 = { style: tmp.cardDetails, children: null };
  const obj = voiceState(504);
  let tmp8;
  if (null != stateFromStores) {
    const obj3 = { channel: stateFromStores };
    tmp8 = getChannelA11yLabelDefault(obj3);
  }
  obj2.children = jsx(voiceState(15646).HappeningNowCardSubtitle, { lineClamp: 1, accessibilityLabel: tmp8, children: useChannelNameDefault(stateFromStores) });
  return <View style={tmp.cardDetails}>{null}</View>;
};
export const HappeningNowActivityCardSubtitle = function HappeningNowActivityCardSubtitle(activity) {
  activity = activity.activity;
  if (null != activity) {
    if (activity.type === ActivityTypes.CUSTOM_STATUS) {
      let trimmed = null;
      if (null != activity.state) {
        trimmed = activity.state.trim();
      }
      let tmp3 = trimmed;
    }
    const obj = { lineClamp: 1, children: tmp3 };
    return jsx(HappeningNowCard.HappeningNowCardSubtitle, { lineClamp: 1, children: tmp3 });
  }
  if (null != activity.stream) {
    if (null != activity) {
      if (activity.type === ActivityTypes.PLAYING) {
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
    tmp3 = null;
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
};