// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivitySubtitle.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import Constants from "../../../../../Constants.tsx";
import intl2 from "../../../../../intl/index.native.tsx";
import useChannelNameDefault from "../../../../channel/useChannelName.tsx";
import isStreamingDefault from "../../../../activities/utils/isStreaming.tsx";
import getChannelA11yLabelDefault from "../../../../channel/getChannelA11yLabel.tsx";
import isListeningOnSpotifyDefault from "../../../../activities/utils/isListeningOnSpotify.tsx";
import HappeningNowCard from "HappeningNowCard.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

function getActivitySubtitle(activity, stream) {
  let tmp3;
  if (null != activity) {
    if (activity.type === ActivityTypes.CUSTOM_STATUS) {
      let trimmed = null;
      if (null != activity.state) {
        const str4 = activity.state;
        trimmed = str4.trim();
      }
      tmp3 = trimmed;
    }
    return tmp3;
  }
  if (null != stream) {
    if (null != activity) {
      let name3;
      if (activity.type === ActivityTypes.PLAYING) {
        name3 = activity.name;
      }
      tmp3 = name3;
    }
    const intl = intl2.intl;
    name3 = intl.string(intl2.t.eXan7B);
  } else {
    let name1;
    if (activity != null) {
      name1 = activity.name;
    }
    tmp3 = null;
    if (null != name1) {
      let name;
      if (isStreamingDefault(activity)) {
        if (null != activity.details) {
          let name2;
          if ("" !== activity.details) {
            name2 = activity.details;
          }
          name = name2;
        }
        name2 = activity.name;
      } else {
        if (isListeningOnSpotifyDefault(activity)) {
          if (null != activity.details) {
            if (null != activity.state) {
              const _HermesInternal = HermesInternal;
              name = "" + activity.details + " - " + activity.state;
            }
          }
        }
        name = activity.name;
      }
      tmp3 = name;
    }
  }
}
const View = react_native.View;
const ActivityTypes = Constants.ActivityTypes;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({
  cardDetails: { marginTop: 2, flexDirection: "row", alignItems: "center" },
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled();
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivitySubtitle.tsx",
);

export const HappeningNowVoiceCardSubtitle = function HappeningNowVoiceCardSubtitle(voiceState) {
  let channel;
  let tmp10Result;
  let voiceState2;
  if (closure_8) {
    let first;
    let tmp23;
    let tmp27;
    const obj5 = voiceState2(576);
    const cResult = obj5.c(11);
    voiceState = voiceState.voiceState;
    const tmp19 = closure_7();
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [ChannelStore];
      cResult[0] = items;
      first = items;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== voiceState.channelId) {
      const fn = function p() {
        return channel.getChannel(voiceState.channelId);
      };
      cResult[1] = voiceState.channelId;
      cResult[2] = fn;
      tmp23 = fn;
    } else {
      tmp23 = cResult[2];
    }
    const tmp15Result = voiceState2(504);
    const stateFromStores = tmp15Result.useStateFromStores(first, tmp23);
    const tmp26 = useChannelNameDefault(stateFromStores);
    if (cResult[3] !== stateFromStores) {
      let tmp29;
      if (null != stateFromStores) {
        const obj2 = { channel: stateFromStores };
        tmp29 = getChannelA11yLabelDefault(obj2);
      }
      cResult[3] = stateFromStores;
      cResult[4] = tmp29;
      tmp27 = tmp29;
    } else {
      tmp27 = cResult[4];
    }
    if (cResult[5] === tmp26) {
      let tmp30;
      if (cResult[6] === tmp27) {
        tmp30 = cResult[7];
      }
      if (cResult[8] === tmp19.cardDetails) {
        let tmp33;
        if (cResult[9] === tmp30) {
          tmp33 = cResult[10];
        }
        tmp10Result = tmp33;
      }
      const tmp36 = <View style={tmp19.cardDetails}>{tmp30}</View>;
      cResult[8] = tmp19.cardDetails;
      cResult[9] = tmp30;
      cResult[10] = tmp36;
      tmp33 = tmp36;
    }
    const tmp32 = jsx(voiceState2(15115).HappeningNowCardSubtitle, {
      lineClamp: 1,
      accessibilityLabel: tmp27,
      children: tmp26,
    });
    cResult[5] = tmp26;
    cResult[6] = tmp27;
    cResult[7] = tmp32;
    tmp30 = tmp32;
  } else {
    voiceState2 = voiceState.voiceState;
    const items1 = [ChannelStore];
    const tmp3 = closure_7();
    const obj = voiceState2(504);
    const stateFromStores1 = obj.useStateFromStores(items1, () => ChannelStore.getChannel(voiceState2.channelId));
    const tmp9 = useChannelNameDefault(stateFromStores1);
    const HappeningNowCardSubtitle = voiceState2(15115).HappeningNowCardSubtitle;
    if (null != stateFromStores1) {
      const obj7 = { channel: stateFromStores1 };
      const tmp13 = getChannelA11yLabelDefault(obj7);
    }
    tmp10Result = <View style={tmp3.cardDetails}>{null}</View>;
  }
  return tmp10Result;
};
export const HappeningNowActivityCardSubtitle = function HappeningNowActivityCardSubtitle(activity) {
  let stream;
  let tmp7;
  if (closure_10) {
    const obj2 = react2;
    const cResult = obj2.c(5);
    ({ activity, stream } = activity);
    if (cResult[0] === activity) {
      let tmp11;
      let tmp14;
      if (cResult[1] === stream) {
        tmp11 = cResult[2];
      }
      if (cResult[3] !== tmp11) {
        const tmp16 = jsx(HappeningNowCard.HappeningNowCardSubtitle, { lineClamp: 1, children: tmp11 });
        cResult[3] = tmp11;
        cResult[4] = tmp16;
        tmp14 = tmp16;
      } else {
        tmp14 = cResult[4];
      }
      tmp7 = tmp14;
    }
    const tmp13 = getActivitySubtitle(activity, stream);
    cResult[0] = activity;
    cResult[1] = stream;
    cResult[2] = tmp13;
    tmp11 = tmp13;
  } else {
    getActivitySubtitle(activity.activity, activity.stream);
    tmp7 = jsx(HappeningNowCard.HappeningNowCardSubtitle, {
      lineClamp: 1,
      children: getActivitySubtitle(activity.activity, activity.stream),
    });
  }
  return tmp7;
};
