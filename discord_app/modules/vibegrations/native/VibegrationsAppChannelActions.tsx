// === Module 13565: VibegrationsAppChannelActions ===

// Module 13565 (VibegrationsAppChannelActions)
import VibegrationsUtils from "VibegrationsUtils" /* 5276 */;
import restartVibegrationsAppFramesDefault from "restartVibegrationsAppFrames" /* 13191 */;
import VibegrationsAppChannelActionCreators from "VibegrationsAppChannelActionCreators" /* 13570 */;
import noop from "module_19" /* 19 */;
import VibegrationsAppChannelsStore from "VibegrationsAppChannelsStore" /* 13566 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4757);
let closure_7 = createStyles.createStyles({ actionWrapper: { flexShrink: 0, flexDirection: "row", alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsAppChannelActions.tsx");

export default function VibegrationsAppChannelActions(channel) {
  channel = channel.channel;
  let tmp = closure_7();
  const items = [VibegrationsAppChannelsStore];
  const items1 = [channel.id];
  const stateFromStores = channel(504).useStateFromStores(items, () => VibegrationsAppChannelsStore.isChatOpen(channel.id), items1);
  const obj = channel(504);
  ({ mentionCount, badge } = stateFromStores(13567)(channel.id));
  stateFromStores(13568)(channel, stateFromStores);
  let tmp8 = null;
  if (!stateFromStores) {
    tmp8 = badge;
  }
  const intl = tmp2(1115).intl;
  const tmp5Result = stateFromStores(3678);
  const items2 = [intl.string(stateFromStores ? tmp5Result.jLMpUv : tmp5Result.aWVf4j)];
  if ("mention" === tmp8) {
    const intl2 = tmp2(1115).intl;
    const obj2 = { mentionCount };
    items2.push(intl2.formatToPlainString(tmp2(1115).t["3l1GOx"], obj2));
  } else if ("unread" === tmp8) {
    const intl4 = tmp2(1115).intl;
    items2.push(intl4.string(tmp2(1115).t.x5zAGZ));
  }
  const obj3 = { style: tmp.actionWrapper, children: null };
  let tmp14 = null;
  if (!stateFromStores) {
    const obj4 = {
      source: null,
      IconComponent: tmp2(10443).RetryIcon,
      onPress() {
          const tmp = restartVibegrationsAppFramesDefault;
          return tmp(VibegrationsUtils.vibegrationsAppIdFromTopic(channel.topic));
        },
      accessibilityLabel: null
    };
    const intl3 = tmp2(1115).intl;
    obj4.accessibilityLabel = intl3.string(tmp5(3678).xKexN1);
    tmp14 = closure_5(tmp5(13569), obj4);
    const tmp5Result3 = tmp5(13569);
  }
  const items3 = [tmp14, ];
  const tmp6 = stateFromStores(13567)(channel.id);
  if (stateFromStores) {
    let ChatIcon = tmp2(5280).AppsIcon;
  } else {
    ChatIcon = tmp2(5291).ChatIcon;
  }
  const obj5 = {
    noMargin: true,
    source: null,
    IconComponent: ChatIcon,
    onPress() {
      return VibegrationsAppChannelActionCreators.setAppChannelChatOpen(channel.id, !stateFromStores);
    },
    accessibilityLabel: items2.join(", "),
    badge: null != tmp8,
    badgePosition: "right",
    buttonText: null
  };
  let StringResult;
  if ("mention" === tmp8) {
    const _String = String;
    StringResult = String(mentionCount);
  }
  obj5.buttonText = StringResult;
  items3[1] = closure_5(stateFromStores(13569), obj5);
  obj3.children = items3;
  return closure_6(View, obj3);
};