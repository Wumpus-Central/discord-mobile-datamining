// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivitySubtitle.tsx
import util from "../../../../../intl/index.native.tsx";
import useChannelNameDefault from "../../../../channel/useChannelName.tsx";
import isStreamingDefault from "../../../../activities/utils/isStreaming.tsx";
import HappeningNowCard from "HappeningNowCard.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

const getChannelA11yLabelDefault = tmp4(9770);
require = fn;
const View = fn(17).View;
const ActivityTypes = fn(1074).ActivityTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({
  cardDetails: { marginTop: 2, flexDirection: "row", alignItems: "center" },
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivitySubtitle.tsx",
);

export const HappeningNowVoiceCardSubtitle = function HappeningNowVoiceCardSubtitle(voiceState) {
  voiceState = voiceState.voiceState;
  let obj = voiceState(504);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(voiceState.channelId));
  obj = { style: closure_7().cardDetails, children: null };
  const tmp = closure_7();
  let tmp8;
  if (null != stateFromStores) {
    obj = { channel: stateFromStores };
    tmp8 = getChannelA11yLabelDefault(obj);
  }
  obj.children = jsx(voiceState(15295).HappeningNowCardSubtitle, {
    lineClamp: 1,
    accessibilityLabel: tmp8,
    children: useChannelNameDefault(stateFromStores),
  });
  return <View style={closure_7().cardDetails}>{null}</View>;
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
    let name;
    if (activity != null) {
      name = activity.name;
    }
    tmp3 = null;
    if (null != name) {
      if (!isStreamingDefault(activity)) {
        if (tmp4(10891)(activity)) {
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
