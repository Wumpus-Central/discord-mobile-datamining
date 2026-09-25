// === Module 12146: ChannelSpoiler ===

// Module 12146 (ChannelSpoiler)
import nativeDefault from "native" /* 576 */;
import RootNavigationRef from "RootNavigationRef" /* 4689 */;
import useChannelNameDefault from "useChannelName" /* 4982 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5030 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5827 */;
import GatedContentDefault from "GatedContent" /* 12145 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4845 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import GuildStore from "GuildStore" /* 2066 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const VoicePanelControlsModes = fn(11739).VoicePanelControlsModes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { subtitle: { textAlign: "center", lineHeight: 22 }, subtitleContainer: { alignItems: "center" }, divider: null, subtitleMeasure: null };
let size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 16 };
obj2.divider = size;
obj2.subtitleMeasure = { position: "absolute", opacity: 0, left: 0, right: 0 };
let closure_12 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/spoiler_channels/native/ChannelSpoiler.tsx");

export default function ChannelSpoiler(channelId) {
  _require = channelId;
  const items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(channelId.guildId));
  let obj = require("initialize");
  const items1 = [ChannelStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => ChannelStore.getChannel(channelId.channelId));
  const tmp4 = closure_12();
  const tmp5 = setControlsMode(noop.useState(false), 2);
  importDefault = tmp5[1];
  let isVocalResult;
  let obj2 = require("initialize");
  if (stateFromStores1 != null) {
    isVocalResult = stateFromStores1.isVocal();
  }
  dependencyMap = isVocalResult;
  setControlsMode = noop.useContext(tmp6(11740)).setControlsMode;
  const items2 = [, , , ];
  ({ guildId: arr3[0], channelId: arr3[1] } = channelId);
  items2[2] = setControlsMode;
  items2[3] = isVocalResult;
  const callback = noop.useCallback(() => {
    if (isVocalResult) {
      if (ChannelRTCStore.getChatOpen(channelId.channelId)) {
        ChannelRTCActionCreatorsDefault.updateChatOpen(channelId.channelId, false);
        const obj3 = { mode: VoicePanelControlsModes.FLOATING_DEFAULT };
        setControlsMode(obj3);
      }
    }
    GuildActionCreatorsDefault.nsfwReturnToSafety(channelId.guildId);
  }, items2);
  const items3 = [channelId.channelId];
  const callback1 = noop.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.lines.length > 3);
  }, []);
  let channelIconComponent = null;
  const callback2 = noop.useCallback(() => {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    if (rootNavigationRef != null) {
      const obj2 = { channelId: channelId.channelId, expandTopic: true };
      rootNavigationRef.navigate("sidebar", obj2);
    }
  }, items3);
  if (null != stateFromStores1) {
    channelIconComponent = tmp(5328).getChannelIconComponent(stateFromStores1);
    const tmpResult = tmp(5328);
  }
  if (null != channelIconComponent) {
    let obj3 = { style: { flexDirection: "row", alignItems: "center", gap: 4, flexShrink: 1 }, children: null };
    const items4 = [closure_10(channelIconComponent, { size: "lg", color: "mobile-text-heading-primary" }), ];
    const obj5 = { variant: "heading-xxl/bold", color: "mobile-text-heading-primary", lineClamp: 1, style: { flexShrink: 1 }, children: tmp7 };
    items4[1] = closure_10(tmp(4825).Text, obj5);
    obj3.children = items4;
    let stringResult = closure_11(View, obj3);
  } else {
    const intl = tmp(1115).intl;
    stringResult = intl.string(tmp(1115).t["q38/ae"]);
  }
  let topic;
  if (stateFromStores1 != null) {
    topic = stateFromStores1.topic;
  }
  let tmp23Result = null;
  if (null != topic) {
    tmp23Result = null;
    if ("" !== str.trim()) {
      const obj6 = { spacing: 4, style: tmp4.subtitleContainer, children: null };
      const obj7 = { style: tmp4.subtitleMeasure, pointerEvents: "none", children: null };
      const obj8 = { variant: "text-md/medium", maxFontSizeMultiplier: 2, onTextLayout: callback1, children: null };
      const obj9 = { channelId: stateFromStores1.id };
      obj8.children = tmp6(4819).parseTopic(stateFromStores1.topic, true, obj9);
      obj7.children = closure_10(tmp(4825).Text, obj8);
      const items5 = [closure_10(View, obj7), , , ];
      const obj10 = { color: "text-muted", variant: "text-md/medium", style: tmp4.subtitle, maxFontSizeMultiplier: 2, lineClamp: 3, children: null };
      const tmp6Result = tmp6(4819);
      const obj11 = { channelId: stateFromStores1.id };
      obj10.children = tmp6(4819).parseTopic(stateFromStores1.topic, true, obj11);
      items5[1] = closure_10(tmp(4825).Text, obj10);
      let tmp24Result = null;
      if (tmp5[0]) {
        const obj12 = { onPress: callback2, accessibilityRole: "button", children: null };
        const obj13 = { variant: "text-sm/medium", color: "text-brand", style: { textDecorationLine: "underline" }, children: null };
        const intl2 = tmp(1115).intl;
        obj13.children = intl2.string(tmp(1115).t["/QvRak"]);
        obj12.children = closure_10(tmp(4825).Text, obj13);
        tmp24Result = closure_10(tmp(5428).PressableHighlight, obj12);
      }
      items5[2] = tmp24Result;
      const obj14 = { style: tmp4.divider };
      items5[3] = closure_10(View, obj14);
      obj6.children = items5;
      tmp23Result = closure_11(tmp(5272).Stack, obj6);
      const tmp6Result3 = tmp6(4819);
    }
    str = stateFromStores1.topic;
  }
  const obj15 = { modalType: null, onAgree: null, onDisagree: null, title: null, subtitle: null, description: null, agreement: null, disagreement: null, guildId: null, channelId: null };
  tmp7 = useChannelNameDefault(stateFromStores1);
  obj15.modalType = require("AgeVerificationAnalyticsUtils").NsfwSpaceWarningModalType.SPOILER_CHANNEL;
  obj15.onAgree = function onAgree() {
    GuildActionCreatorsDefault.spoilerAgree(channelId.channelId);
  };
  obj15.onDisagree = callback;
  obj15.title = stringResult;
  obj15.subtitle = tmp23Result;
  const intl3 = tmp(1115).intl;
  obj15.description = intl3.string(require("util").t["08bm2Z"]);
  const intl4 = tmp(1115).intl;
  obj15.agreement = intl4.string(require("util").t.KmRwcW);
  const intl5 = tmp(1115).intl;
  obj15.disagreement = intl5.string(require("util").t["/g10LC"]);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  obj15.guildId = id;
  obj15.channelId = channelId.channelId;
  return closure_10(GatedContentDefault, obj15);
};