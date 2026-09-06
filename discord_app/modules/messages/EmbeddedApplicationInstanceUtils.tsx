// discord_app/modules/messages/EmbeddedApplicationInstanceUtils.tsx
import util from "../../intl/index.native.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
function getJoinOrStartButtonState(channel) {
  ({ embeddedActivity, joinability, currentEmbeddedActivity } = channel);
  let obj = { disabled: false, isJoinAction: !tmp, text: null, tooltip: "Array" };
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (null == embeddedActivity) {
    let stringResult = string(t.RscU7I);
    let tmp6 = tmp2;
  } else {
    stringResult = string(t.sqe0hj);
    tmp6 = tmp2;
  }
  obj.text = stringResult;
  const result = tmp6(9546).isActivitiesInTextEnabled(channel.channel);
  if (null != embeddedActivity) {
    if (null != currentEmbeddedActivity) {
      if (embeddedActivity.launchId === currentEmbeddedActivity.launchId) {
        obj = {};
        const merged = Object.assign(obj);
        obj.disabled = true;
        const intl10 = tmp6(1114).intl;
        obj.text = intl10.string(tmp6(1114).t.DPfdsq);
        obj.tooltip = undefined;
        return obj;
      }
    }
  }
  if (null == embeddedActivity) {
    obj = {};
    const merged1 = Object.assign(obj);
    obj.disabled = !result;
    let stringResult1;
    if (!result) {
      const intl9 = tmp6(1114).intl;
      stringResult1 = intl9.string(tmp6(1114).t.f41E1g);
    }
    obj.tooltip = stringResult1;
    return obj;
  } else {
    if (null != joinability) {
      if (joinability !== tmp6(9531).EmbeddedActivityJoinability.CAN_JOIN) {
        if (tmp6(9531).EmbeddedActivityJoinability.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION === joinability) {
          const intl8 = tmp6(1114).intl;
          let stringResult2 = intl8.string(tmp6(1114).t.hHGrWz);
        } else if (tmp6(9531).EmbeddedActivityJoinability.ACTIVITY_AGE_GATED === joinability) {
          const intl7 = tmp6(1114).intl;
          stringResult2 = intl7.string(tmp6(1114).t["4WuFRE"]);
        } else if (tmp6(9531).EmbeddedActivityJoinability.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS === joinability) {
          const intl6 = tmp6(1114).intl;
          stringResult2 = intl6.string(tmp6(1114).t.uGDCcw);
        } else if (tmp6(9531).EmbeddedActivityJoinability.ACTIVITY_NOT_SUPPORTED_ON_OS === joinability) {
          const intl5 = tmp6(1114).intl;
          stringResult2 = intl5.string(tmp6(1114).t.UXoQTp);
        } else if (tmp6(9531).EmbeddedActivityJoinability.CHANNEL_FULL === joinability) {
          const intl4 = tmp6(1114).intl;
          stringResult2 = intl4.string(tmp6(1114).t.rZfiNq);
        } else if (tmp6(9531).EmbeddedActivityJoinability.NO_CHANNEL_CONNECT_PERMISSION === joinability) {
          const intl3 = tmp6(1114).intl;
          stringResult2 = intl3.string(tmp6(1114).t.w5SAps);
        } else {
          const intl2 = tmp6(1114).intl;
          stringResult2 = intl2.string(tmp6(1114).t.Etp6uI);
        }
        const obj1 = {};
        const merged2 = Object.assign(obj);
        obj1.disabled = true;
        obj1.tooltip = stringResult2;
        return obj1;
      }
    }
    return obj;
  }
  const tmp6Result = tmp6(9546);
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/EmbeddedApplicationInstanceUtils.tsx");

export const EmbedStates = { ACTIVE: 0, [0]: "ACTIVE", ENDED: 1, [1]: "ENDED" };
export const useJoinOrStartButtonState = function useJoinOrStartButtonState(embeddedActivity) {
  embeddedActivity = embeddedActivity.embeddedActivity;
  const joinability = embeddedActivity.joinability;
  const currentEmbeddedActivity = embeddedActivity.currentEmbeddedActivity;
  const channel = embeddedActivity.channel;
  const items = [embeddedActivity, joinability, currentEmbeddedActivity, channel];
  return currentEmbeddedActivity.useMemo(
    () => getJoinOrStartButtonState({ embeddedActivity, joinability, currentEmbeddedActivity, channel }),
    items,
  );
};
export { getJoinOrStartButtonState };
