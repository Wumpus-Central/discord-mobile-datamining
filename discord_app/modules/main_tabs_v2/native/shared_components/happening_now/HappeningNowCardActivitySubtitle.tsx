// === Module 16303: HappeningNowCardActivitySubtitle ===

// Module 16303 (HappeningNowCardActivitySubtitle)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import useChannelNameDefault from "useChannelName" /* 5417 */;
import isStreamingDefault from "isStreaming" /* 8360 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 8626 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10238 */;
import HappeningNowCard from "HappeningNowCard" /* 15392 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2063 */;

require = fn;
function getActivitySubtitle(activity, stream) {
  if (null != activity) {
    if (activity.type === ActivityTypes.CUSTOM_STATUS) {
      let trimmed = null;
      if (null != activity.state) {
        trimmed = activity.state.trim();
      }
      let tmp3 = trimmed;
    }
    return tmp3;
  }
  if (null != stream) {
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
}
const View = fn(17).View;
const ActivityTypes = fn(1085).ActivityTypes;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_7 = createStyles.createStyles({ cardDetails: { marginTop: 2, flexDirection: "row", alignItems: "center" } });
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivitySubtitle.tsx");

export const HappeningNowVoiceCardSubtitle = function HappeningNowVoiceCardSubtitle(voiceState) {
  if (closure_8) {
    const cResult = voiceState(576).c(11);
    voiceState = voiceState.voiceState;
    closure_129_0 = voiceState;
    let cardDetails = closure_7();
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [ChannelStore];
      cResult[0] = items;
      let first = items;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== voiceState.channelId) {
      const fn = function p() {
        return ChannelStore.getChannel(voiceState.channelId);
      };
      cResult[1] = voiceState.channelId;
      cResult[2] = fn;
      let tmp20 = fn;
    } else {
      tmp20 = cResult[2];
    }
    const obj5 = voiceState(576);
    const stateFromStores = voiceState(504).useStateFromStores(first, tmp20);
    const tmp23 = useChannelNameDefault(stateFromStores);
    if (cResult[3] !== stateFromStores) {
      let tmp26;
      if (null != stateFromStores) {
        const obj2 = { channel: stateFromStores };
        tmp26 = getChannelA11yLabelDefault(obj2);
      }
      cResult[3] = stateFromStores;
      cResult[4] = tmp26;
      let tmp24 = tmp26;
    } else {
      tmp24 = cResult[4];
    }
    if (cResult[5] === tmp23) {
      if (cResult[6] === tmp24) {
        let tmp27 = cResult[7];
      }
      if (cResult[8] === cardDetails.cardDetails) {
      }
      const obj3 = { style: cardDetails.cardDetails, children: tmp27 };
      const tmp33 = <View style={cardDetails.cardDetails}>{tmp27}</View>;
      cardDetails = cardDetails.cardDetails;
      cResult[8] = cardDetails;
      cResult[9] = tmp27;
      cResult[10] = tmp33;
    }
    const obj4 = { lineClamp: 1, accessibilityLabel: tmp24, children: tmp23 };
    const tmp29 = jsx(voiceState(15392).HappeningNowCardSubtitle, { lineClamp: 1, accessibilityLabel: tmp24, children: tmp23 });
    cResult[5] = tmp23;
    cResult[6] = tmp24;
    cResult[7] = tmp29;
    tmp27 = tmp29;
    const tmp13Result = voiceState(504);
  } else {
    voiceState = voiceState.voiceState;
    const tmp2 = closure_7();
    const items1 = [ChannelStore];
    const stateFromStores1 = voiceState(504).useStateFromStores(items1, () => ChannelStore.getChannel(voiceState.channelId));
    const obj6 = { style: tmp2.cardDetails, children: null };
    const obj = voiceState(504);
    let tmp12;
    if (null != stateFromStores1) {
      const obj7 = { channel: stateFromStores1 };
      tmp12 = getChannelA11yLabelDefault(obj7);
    }
    const obj8 = { lineClamp: 1, accessibilityLabel: tmp12, children: useChannelNameDefault(stateFromStores1) };
    obj6.children = jsx(voiceState(15392).HappeningNowCardSubtitle, { lineClamp: 1, accessibilityLabel: tmp12, children: useChannelNameDefault(stateFromStores1) });
    return <View style={tmp2.cardDetails}>{null}</View>;
  }
};
export const HappeningNowActivityCardSubtitle = function HappeningNowActivityCardSubtitle(activity) {
  if (closure_10) {
    let HappeningNowCardSubtitle = require;
    let tmp6 = dependencyMap;
    const cResult = c.c(5);
    ({ activity, stream } = activity);
    if (cResult[0] === activity) {
      if (cResult[1] === stream) {
        let tmp8 = cResult[2];
      }
      if (cResult[3] !== tmp8) {
        HappeningNowCardSubtitle = HappeningNowCardSubtitle(15392).HappeningNowCardSubtitle;
        const obj3 = { lineClamp: 1, children: tmp8 };
        tmp6 = <HappeningNowCardSubtitle lineClamp={1}>{tmp8}</HappeningNowCardSubtitle>;
        cResult[3] = tmp8;
        cResult[4] = tmp6;
      }
    }
    const tmp10 = getActivitySubtitle(activity, stream);
    cResult[0] = activity;
    cResult[1] = stream;
    cResult[2] = tmp10;
    tmp8 = tmp10;
  } else {
    const obj = { lineClamp: 1, children: getActivitySubtitle(activity.activity, activity.stream) };
    return jsx(HappeningNowCard.HappeningNowCardSubtitle, { lineClamp: 1, children: getActivitySubtitle(activity.activity, activity.stream) });
  }
};