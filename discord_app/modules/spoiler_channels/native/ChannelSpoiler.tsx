// discord_app/modules/spoiler_channels/native/ChannelSpoiler.tsx
import _slicedToArray from "_slicedToArray";
import Stack from "Stack";
import { View } from "Text";
import getParticipants from "getParticipants";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { VoicePanelControlsModes } from "VoicePanelControlsModes";
import jsxProd from "PressableBase";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { GatedContent } from "../../../components_native/warnings/GatedContent.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { AgeVerificationModalEntryPoint } from "../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import { computeChannelName } from "../../channel/useChannelName.tsx";

let c10;
let unpackModuleId;
const require = arg1;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { subtitle: { textAlign: "center", lineHeight: 22 }, subtitleContainer: { alignItems: "center" }, divider: null, subtitleMeasure: null };
createCacheKey = { height: 1, width: "100%", backgroundColor: require("Themes").colors.BORDER_SUBTLE, marginVertical: 16 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { position: "absolute", opacity: 0, left: 0, right: 0 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/spoiler_channels/native/ChannelSpoiler.tsx");

export default function ChannelSpoiler(channelId) {
  const _require = channelId;
  let obj = _initialize;
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getGuild(channelId.guildId));
  let obj1 = _initialize;
  const items1 = [ensureGuildLoaded];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_7.getChannel(channelId.channelId));
  const tmp4 = createCacheKey();
  let obj3 = React;
  const tmp5 = setControlsMode(React.useState(false), 2);
  const importDefault = tmp5[1];
  let isVocalResult;
  if (stateFromStores1 != null) {
    isVocalResult = stateFromStores1.isVocal();
  }
  const dependencyMap = isVocalResult;
  setControlsMode = obj3.useContext(tmp6(11557)).setControlsMode;
  const items2 = [, , , ];
  ({ guildId: arr3[0], channelId: arr3[1] } = channelId);
  items2[2] = setControlsMode;
  items2[3] = isVocalResult;
  const callback = obj3.useCallback(() => {
    if (closure_2) {
      if (outer1_6.getChatOpen(channelId.channelId)) {
        callback(isVocalResult[13]).updateChatOpen(tmp2.channelId, false);
        let obj = { mode: null };
        obj[0] = outer1_9.FLOATING_DEFAULT;
        setControlsMode(obj);
      }
      tmp2 = channelId;
    }
    obj = callback(isVocalResult[14]);
    obj.nsfwReturnToSafety(channelId.guildId);
  }, items2);
  const items3 = [channelId.channelId];
  const callback1 = obj3.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.lines.length > 3);
  }, []);
  let channelIconComponent = null;
  const callback2 = obj3.useCallback(() => {
    let obj = channelId(isVocalResult[15]);
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      obj = { channelId: null, expandTopic: true };
      obj[0] = channelId.channelId;
      rootNavigationRef.navigate("sidebar", obj);
    }
  }, items3);
  if (null != stateFromStores1) {
    channelIconComponent = tmp(4745).getChannelIconComponent(stateFromStores1);
    const tmpResult = tmp(4745);
  }
  if (null != channelIconComponent) {
    obj = { style: null, children: null };
    obj[0] = { flexDirection: "row", alignItems: "center", gap: 4, flexShrink: 1 };
    const items4 = [callback(channelIconComponent, { size: "lg", color: "mobile-text-heading-primary" }), ];
    obj = { variant: "heading-xxl/bold", color: "mobile-text-heading-primary", lineClamp: 1, style: null, children: null };
    obj[3] = { flexShrink: 1 };
    obj[4] = tmp7;
    items4[1] = callback(tmp(4281).Text, obj);
    obj[1] = items4;
    let stringResult = callback2(View, obj);
  } else {
    const intl = tmp(1236).intl;
    stringResult = intl.string(tmp(1236).t["q38/ae"]);
  }
  let topic;
  if (stateFromStores1 != null) {
    topic = stateFromStores1.topic;
  }
  let tmp23Result = null;
  if (null != topic) {
    tmp23Result = null;
    if ("" !== str.trim()) {
      obj1 = { spacing: 4, style: null, children: null };
      obj1[1] = tmp4.subtitleContainer;
      const obj2 = { style: null, pointerEvents: "none", children: null };
      obj2[0] = tmp4.subtitleMeasure;
      obj3 = { variant: "text-md/medium", maxFontSizeMultiplier: 2, onTextLayout: null, children: null };
      obj3[2] = callback1;
      let tmp6Result = tmp6(4275);
      const obj4 = { channelId: null };
      obj4[0] = stateFromStores1.id;
      obj3[3] = tmp6Result.parseTopic(stateFromStores1.topic, true, obj4);
      obj2[2] = callback(tmp(4281).Text, obj3);
      const items5 = [callback(View, obj2), , , ];
      const obj5 = { color: "text-muted", variant: "text-md/medium", style: null, maxFontSizeMultiplier: 2, lineClamp: 3, children: null };
      obj5[2] = tmp4.subtitle;
      tmp6Result = tmp6(4275);
      const obj6 = { channelId: null };
      obj6[0] = stateFromStores1.id;
      obj5[5] = tmp6Result.parseTopic(stateFromStores1.topic, true, obj6);
      items5[1] = callback(tmp(4281).Text, obj5);
      let tmp24Result = null;
      if (tmp5[0]) {
        const obj7 = { onPress: null, accessibilityRole: "button", children: null };
        obj7[0] = callback2;
        const obj8 = { variant: "text-sm/medium", color: "text-brand", style: null, children: null };
        obj8[2] = { textDecorationLine: "underline" };
        const intl2 = tmp(1236).intl;
        obj8[3] = intl2.string(tmp(1236).t["/QvRak"]);
        obj7[2] = tmp24(tmp(4281).Text, obj8);
        tmp24Result = tmp24(tmp(4812).PressableHighlight, obj7);
      }
      items5[2] = tmp24Result;
      const obj9 = { style: null };
      obj9[0] = tmp4.divider;
      items5[3] = callback(View, obj9);
      obj1[2] = items5;
      tmp23Result = callback2(tmp(4693).Stack, obj1);
      const tmp23 = callback2;
      const tmp25 = View;
    }
    str = stateFromStores1.topic;
  }
  const obj10 = { modalType: null, onAgree: null, onDisagree: null, title: null, subtitle: null, description: null, agreement: null, disagreement: null, guildId: null, channelId: null };
  const tmp20 = callback;
  tmp7 = computeChannelName(stateFromStores1);
  obj10[0] = _AgeVerificationModalEntryPoint.NsfwSpaceWarningModalType.SPOILER_CHANNEL;
  obj10[1] = function onAgree() {
    callback(isVocalResult[14]).spoilerAgree(channelId.channelId);
  };
  obj10[2] = callback;
  obj10[3] = stringResult;
  obj10[4] = tmp23Result;
  const intl3 = tmp(1236).intl;
  obj10[5] = intl3.string(_getSystemLocale.t["08bm2Z"]);
  const intl4 = tmp(1236).intl;
  obj10[6] = intl4.string(_getSystemLocale.t.KmRwcW);
  const intl5 = tmp(1236).intl;
  obj10[7] = intl5.string(_getSystemLocale.t["/g10LC"]);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  obj10[8] = id;
  obj10[9] = channelId.channelId;
  return tmp20(GatedContent, obj10);
};