// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivitySubtitle.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import computeChannelNameDefault from "../../../../channel/useChannelName.tsx";
import _isStreamingDefault from "../../../../activities/utils/isStreaming.tsx";
import getChannelA11yLabelDefault from "../../../../channel/getChannelA11yLabel.tsx";
import HAPPENING_NOW_CARD_MARGIN_RIGHT from "HappeningNowCard.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../../../stores/ChannelStore.tsx";
import { ActivityTypes } from "../../../../../Constants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

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
  obj[1] = jsx(voiceState(14709).HappeningNowCardSubtitle, { lineClamp: 1, accessibilityLabel: tmp8, children: computeChannelNameDefault(stateFromStores) });
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
        if (tmp4(7299)(activity)) {
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