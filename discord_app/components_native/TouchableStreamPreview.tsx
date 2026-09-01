// discord_app/components_native/TouchableStreamPreview.tsx
import ThemesDefault from "../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../modules/game_console/GameConsoleStore.tsx";
import closure_6 from "../stores/ApplicationStreamingStore.tsx";
import closure_7 from "../stores/AuthenticationStore.tsx";
import closure_8 from "../stores/ChannelStore.tsx";
import closure_9 from "../stores/GuildStore.tsx";
import closure_10 from "../stores/PermissionStore.tsx";
import closure_11 from "../stores/VoiceStateStore.tsx";
import { Permissions } from "../Constants.tsx";
import { jsx } from "../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../design/components/Styles/native/createStyles.tsx";
import hexToRgba from "../utils/ColorUtils.tsx";
import { initialize } from "../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
function StreamPreviewContainer(disableTransition) {
  disableTransition = disableTransition.disableTransition;
  const onPress = disableTransition.onPress;
  const stream = disableTransition.stream;
  const channel = disableTransition.channel;
  const tmp = callback();
  let obj = disableTransition(stream[14]);
  obj1 = disableTransition(stream[15]);
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => null != remoteSessionId.getRemoteSessionId());
  let obj2 = disableTransition(stream[15]);
  const items1 = [closure_10];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => !closure_1_10.can(closure_1_12.CONNECT, channel));
  const isChannelFullResult = obj.isChannelFull(channel, closure_11, closure_9);
  const items2 = [closure_11];
  let stateFromStores2 = disableTransition(stream[15]).useStateFromStores(items2, () =>
    closure_1_11.isInChannel(channel.id),
  );
  const obj4 = disableTransition(stream[15]);
  const items3 = [closure_6, closure_7];
  const items4 = [channel.id, stream.ownerId];
  const stateFromStores3 = disableTransition(stream[15]).useStateFromStores(
    items3,
    () => {
      let isSelfStreamHiddenResult = stream.ownerId === closure_1_7.getId();
      if (isSelfStreamHiddenResult) {
        isSelfStreamHiddenResult = closure_1_6.isSelfStreamHidden(channel.id);
      }
      return isSelfStreamHiddenResult;
    },
    items4,
  );
  const intl = disableTransition(stream[16]).intl;
  let stringResult = intl.string(disableTransition(stream[16]).t["7Xq/nV"]);
  if (stateFromStores) {
    const intl4 = tmp2(tmp3[16]).intl;
    let stringResult1 = intl4.string(tmp2(tmp3[16]).t.gcnYT2);
    let flag = true;
  } else {
    if (!stateFromStores2) {
      stateFromStores2 = stateFromStores3;
    }
    flag = false;
    stringResult1 = stringResult;
    if (!stateFromStores2) {
      if (isChannelFullResult) {
        const intl3 = tmp2(tmp3[16]).intl;
        stringResult = intl3.string(tmp2(tmp3[16]).t.rZfiNq);
        let flag2 = true;
      } else {
        flag2 = false;
        if (stateFromStores1) {
          const intl2 = tmp2(tmp3[16]).intl;
          stringResult = intl2.string(tmp2(tmp3[16]).t.TVBCKZ);
          flag2 = true;
        }
      }
      flag = flag2;
      stringResult1 = stringResult;
    }
  }
  const items5 = [stream, disableTransition, onPress];
  callback = channel.useCallback(() => {
    const voiceChannel = onPress(stream[17]).selectVoiceChannel(stream.channelId);
    const obj = onPress(stream[17]);
    const tmp5 = disableTransition;
    disableTransition(stream[18]).watchStream(stream);
    if (disableTransition) {
      let tmpResult = tmp(tmp2[20]);
      const result = tmpResult.rebuildRTCActiveChannels();
    } else {
      tmp(tmp2[19])(tmp3);
    }
    tmpResult = tmp(tmp2[20]);
    const obj2 = disableTransition(stream[18]);
    const participant = tmpResult.selectParticipant(tmp3.channelId, tmp5(stream[21]).encodeStreamKey(tmp3));
    if (onPress != null) {
      onPress();
    }
  }, items5);
  onPress(stream[22])(() => {
    if (channel.isGuildStageVoice()) {
      disableTransition(stream[18]).watchStream(stream, { noFocus: true });
      const obj = disableTransition(stream[18]);
    }
  });
  obj = { stream, ctaText: stringResult1, style: items6, onPress: callback, disabled: flag, children: null };
  items6 = [tmp.touchable, disableTransition.style];
  obj = { style: tmp.ctaWrapper, children: null };
  obj1 = { style: tmp.ctaBackground, children: null };
  const obj5 = disableTransition(stream[15]);
  obj2 = { style: tmp.ctaText, variant: "text-md/semibold", color: "text-overlay-light", children: stringResult1 };
  obj1[1] = jsx(disableTransition(stream[24]).Text, {
    style: tmp.ctaText,
    variant: "text-md/semibold",
    color: "text-overlay-light",
    children: stringResult1,
  });
  obj[1] = <closure_4 style={tmp.ctaBackground}>{null}</closure_4>;
  obj[5] = <closure_4 style={tmp.ctaWrapper}>{null}</closure_4>;
  return jsx(onPress(stream[23]), { style: tmp.ctaWrapper, children: null });
}
({ View: c4, StyleSheet } = get_ActivityIndicator);
createCacheKey = {
  touchable: { borderRadius: 5, overflow: "hidden" },
  ctaWrapper: null,
  ctaBackground: null,
  ctaText: null,
};
createCacheKey = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.alignItems = "center";
createCacheKey.justifyContent = "center";
createCacheKey.backgroundColor = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.PRIMARY_700, 0.7);
createCacheKey[1] = createCacheKey;
createCacheKey[2] = {
  height: 40,
  paddingHorizontal: 16,
  borderRadius: 20,
  backgroundColor: ThemesDefault.unsafe_rawColors.PRIMARY_500,
  justifyContent: "center",
  alignItems: "center",
};
createCacheKey[3] = { lineHeight: 20 };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let obj1 = {
  height: 40,
  paddingHorizontal: 16,
  borderRadius: 20,
  backgroundColor: ThemesDefault.unsafe_rawColors.PRIMARY_500,
  justifyContent: "center",
  alignItems: "center",
};
let result = require("set").fileFinishedImporting("components_native/TouchableStreamPreview.tsx");

export default function VoiceChannelSettingsStreamPreview(arg0) {
  const _require = arg0;
  let obj = initialize;
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () =>
    closure_1_6.getStreamForUser(closure_0.userId, closure_0.guildId),
  );
  const items1 = [closure_8];
  const stateFromStores1 = require("../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items1, () => {
    let channel = null;
    if (null != stateFromStores) {
      channel = closure_1_8.getChannel(tmp.channelId);
    }
    return channel;
  });
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = null;
    if (null != stateFromStores1) {
      obj = {};
      const merged = Object.assign(arg0);
      obj.stream = stateFromStores;
      obj.channel = stateFromStores1;
      tmp3 = <StreamPreviewContainer />;
    }
  }
  return tmp3;
}
