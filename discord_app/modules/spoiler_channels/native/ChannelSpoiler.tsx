// discord_app/modules/spoiler_channels/native/ChannelSpoiler.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import useChannelNameDefault from "../../channel/useChannelName.tsx";
import ChannelRTCActionCreatorsDefault from "../../../actions/ChannelRTCActionCreators.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import GatedContentDefault from "../../../components_native/warnings/GatedContent.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../calls/ChannelRTCStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
const View = fn(17).View;
const VoicePanelControlsModes = fn(12271).VoicePanelControlsModes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
const createStyles = {
  subtitle: { textAlign: "center", lineHeight: 22 },
  subtitleContainer: { alignItems: "center" },
  divider: null,
  subtitleMeasure: null,
};
let size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 16 };
createStyles.divider = size;
createStyles.subtitleMeasure = { position: "absolute", opacity: 0, left: 0, right: 0 };
let closure_12 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/spoiler_channels/native/ChannelSpoiler.tsx");

export default function ChannelSpoiler(channelId) {
  _require = channelId;
  let obj = require("initialize");
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channelId.guildId));
  let obj1 = require("initialize");
  const items1 = [ChannelStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => ChannelStore.getChannel(channelId.channelId));
  const tmp4 = closure_12();
  let obj3 = noop;
  const tmp5 = setControlsMode(noop.useState(false), 2);
  importDefault = tmp5[1];
  let isVocalResult;
  if (stateFromStores1 != null) {
    isVocalResult = stateFromStores1.isVocal();
  }
  dependencyMap = isVocalResult;
  setControlsMode = obj3.useContext(tmp6(12272)).setControlsMode;
  const items2 = [, , ,];
  ({ guildId: arr3[0], channelId: arr3[1] } = channelId);
  items2[2] = setControlsMode;
  items2[3] = isVocalResult;
  const callback = obj3.useCallback(() => {
    if (isVocalResult) {
      if (ChannelRTCStore.getChatOpen(channelId.channelId)) {
        ChannelRTCActionCreatorsDefault.updateChatOpen(tmp2.channelId, false);
        let obj = { mode: VoicePanelControlsModes.FLOATING_DEFAULT };
        setControlsMode(obj);
      }
      tmp2 = channelId;
    }
    obj = GuildActionCreatorsDefault;
    obj.nsfwReturnToSafety(channelId.guildId);
  }, items2);
  const items3 = [channelId.channelId];
  const callback1 = obj3.useCallback((nativeEvent) => {
    closure_1(nativeEvent.nativeEvent.lines.length > 3);
  }, []);
  let channelIconComponent = null;
  const callback2 = obj3.useCallback(() => {
    let obj = RootNavigationRef;
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      obj = { channelId: channelId.channelId, expandTopic: true };
      rootNavigationRef.navigate("sidebar", obj);
    }
  }, items3);
  if (null != stateFromStores1) {
    channelIconComponent = tmp(5028).getChannelIconComponent(stateFromStores1);
    const tmpResult = tmp(5028);
  }
  if (null != channelIconComponent) {
    obj = { style: { flexDirection: "row", alignItems: "center", gap: 4, flexShrink: 1 }, children: null };
    const items4 = [closure_10(channelIconComponent, { size: "lg", color: "mobile-text-heading-primary" })];
    obj = {
      variant: "heading-xxl/bold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      style: { flexShrink: 1 },
      children: tmp7,
    };
    items4[1] = closure_10(tmp(4556).Text, obj);
    obj.children = items4;
    let stringResult = closure_11(View, obj);
  } else {
    const intl = tmp(1114).intl;
    stringResult = intl.string(tmp(1114).t["q38/ae"]);
  }
  let topic;
  if (stateFromStores1 != null) {
    topic = stateFromStores1.topic;
  }
  let tmp23Result = null;
  if (null != topic) {
    tmp23Result = null;
    if ("" !== str.trim()) {
      obj1 = { spacing: 4, style: tmp4.subtitleContainer, children: null };
      const obj2 = { style: tmp4.subtitleMeasure, pointerEvents: "none", children: null };
      obj3 = { variant: "text-md/medium", maxFontSizeMultiplier: 2, onTextLayout: callback1, children: null };
      let tmp6Result = tmp6(4550);
      const obj4 = { channelId: stateFromStores1.id };
      obj3.children = tmp6Result.parseTopic(stateFromStores1.topic, true, obj4);
      obj2.children = closure_10(tmp(4556).Text, obj3);
      const items5 = [closure_10(View, obj2), , ,];
      const obj5 = {
        color: "text-muted",
        variant: "text-md/medium",
        style: tmp4.subtitle,
        maxFontSizeMultiplier: 2,
        lineClamp: 3,
        children: null,
      };
      tmp6Result = tmp6(4550);
      const obj6 = { channelId: stateFromStores1.id };
      obj5.children = tmp6Result.parseTopic(stateFromStores1.topic, true, obj6);
      items5[1] = closure_10(tmp(4556).Text, obj5);
      let tmp24Result = null;
      if (tmp5[0]) {
        const obj7 = { onPress: callback2, accessibilityRole: "button", children: null };
        const obj8 = {
          variant: "text-sm/medium",
          color: "text-brand",
          style: { textDecorationLine: "underline" },
          children: null,
        };
        const intl2 = tmp(1114).intl;
        obj8.children = intl2.string(tmp(1114).t["/QvRak"]);
        obj7.children = tmp24(tmp(4556).Text, obj8);
        tmp24Result = tmp24(tmp(5123).PressableHighlight, obj7);
      }
      items5[2] = tmp24Result;
      const obj9 = { style: tmp4.divider };
      items5[3] = closure_10(View, obj9);
      obj1.children = items5;
      tmp23Result = closure_11(tmp(4973).Stack, obj1);
    }
    str = stateFromStores1.topic;
  }
  const obj10 = {
    modalType: null,
    onAgree: null,
    onDisagree: null,
    title: null,
    subtitle: null,
    description: null,
    agreement: null,
    disagreement: null,
    guildId: null,
    channelId: null,
  };
  const tmp20 = closure_10;
  tmp7 = useChannelNameDefault(stateFromStores1);
  obj10.modalType = require("AgeVerificationAnalyticsUtils").NsfwSpaceWarningModalType.SPOILER_CHANNEL;
  obj10.onAgree = function onAgree() {
    GuildActionCreatorsDefault.spoilerAgree(channelId.channelId);
  };
  obj10.onDisagree = callback;
  obj10.title = stringResult;
  obj10.subtitle = tmp23Result;
  const intl3 = tmp(1114).intl;
  obj10.description = intl3.string(require("util").t["08bm2Z"]);
  const intl4 = tmp(1114).intl;
  obj10.agreement = intl4.string(require("util").t.KmRwcW);
  const intl5 = tmp(1114).intl;
  obj10.disagreement = intl5.string(require("util").t["/g10LC"]);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  obj10.guildId = id;
  obj10.channelId = channelId.channelId;
  return tmp20(GatedContentDefault, obj10);
}
