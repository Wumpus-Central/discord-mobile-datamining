// discord_app/modules/age_gate/native/components/AgeAssuranceGateModal.tsx
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import AgeGateModalActionCreators from "../../AgeGateModalActionCreators.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import ageGateNavigationCallbacks from "ageGateNavigationCallbacks.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

require = fn;
const AgeGateSource = fn(1098).AgeGateSource;
let closure_6 = fn(19328).ExistingUserAgeGateScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/AgeAssuranceGateModal.tsx");

export default function AgeAssuranceGateModal(source) {
  source = source.source;
  const channelId = source.channelId;
  let stateFromStores;
  noop = undefined;
  const items = [ChannelStore];
  const items1 = [channelId];
  stateFromStores = source(stateFromStores[10]).useStateFromStores(
    items,
    () => ChannelStore.getChannel(channelId),
    items1,
  );
  let tmp4 = null;
  if (source === AgeGateSource.NSFW_VOICE_CHANNEL) {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    tmp4 = null;
    if (null != guild_id) {
      tmp4 = stateFromStores;
    }
  }
  stateFromStores = tmp4;
  const tmp6 = channelId(stateFromStores[11])(tmp4);
  noop = tmp6;
  let obj = source(stateFromStores[10]);
  const items2 = [source];
  const watchAgeVerificationStatusChange = source(stateFromStores[12]).useWatchAgeVerificationStatusChange(
    noop.useCallback(() => {
      AgeGateModalActionCreators.closeAgeGateModal(source);
    }, items2),
  );
  let obj2 = { screens: null, initialRouteName: null, headerBackTitle: null };
  const items3 = [source, tmp4, tmp6];
  obj2.screens = noop.useMemo(() => {
    let renderHeaderTitle = closure_3;
    let guild_id = stateFromStores;
    let onReturnToSafety = ageGateNavigationCallbacks.generateOnBack(source);
    if (onReturnToSafety == null) {
      onReturnToSafety = () => {};
    }
    let obj2 = {};
    const obj3 = { fullscreen: true, headerLeft: null, impressionName: null, headerTitle: null, render: null };
    obj3.headerLeft = NavigatorHeader.getHeaderBackButton(onReturnToSafety);
    obj3.impressionName = discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_GATE_VERIFY;
    obj3.headerTitle = ageGateNavigationCallbacks.renderHeaderTitle;
    obj3.render = function render() {
      return jsx(channelId(stateFromStores[8]), { source });
    };
    obj2[closure_6.Pawtect] = obj3;
    const obj4 = { fullscreen: true, headerLeft: null, headerTitle: null, impressionName: null, render: null };
    const tmpResult = NavigatorHeader;
    obj4.headerLeft = NavigatorHeader.getHeaderBackButton(onReturnToSafety);
    if (renderHeaderTitle == null) {
      renderHeaderTitle = ageGateNavigationCallbacks.renderHeaderTitle;
    }
    obj4.headerTitle = renderHeaderTitle;
    obj4.impressionName = discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_GATE_VERIFY;
    obj4.render = function render() {
      guild_id = undefined;
      if (guild_id != null) {
        guild_id = guild_id.guild_id;
      }
      if (null == guild_id) {
        const obj2 = { source };
        let tmp7 = jsx(channelId(stateFromStores[8]), { source });
      } else {
        const obj = { guildId: null, channelId: null, onReturnToSafety: null, returnToSafety: false };
        ({ guild_id: obj.guildId, id: obj.channelId } = guild_id);
        obj.onReturnToSafety = onReturnToSafety;
        tmp7 = jsx(channelId(stateFromStores[9]), {
          guildId: null,
          channelId: null,
          onReturnToSafety: null,
          returnToSafety: false,
        });
      }
      return tmp7;
    };
    obj2[closure_6.NSFWVoiceChannel] = obj4;
    return obj2;
  }, items3);
  if (null != tmp4) {
    let Pawtect = closure_6.NSFWVoiceChannel;
  } else {
    Pawtect = closure_6.Pawtect;
  }
  obj2.initialRouteName = Pawtect;
  const intl = tmp(tmp2[15]).intl;
  obj2.headerBackTitle = intl.string(source(stateFromStores[15]).t["13/7kX"]);
  return jsx(source(stateFromStores[14]).Navigator, { screens: null, initialRouteName: null, headerBackTitle: null });
}
