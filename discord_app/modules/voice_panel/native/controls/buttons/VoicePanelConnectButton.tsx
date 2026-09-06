// === Module 17186: ConnectButton ===

// Module 17186 (ConnectButton)
import ThemesDefault from "Themes" /* 576 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "ensureGuildLoaded" /* 1957 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
createCacheKey = { connectButton: null, connectText: null };
createCacheKey = { backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_360, paddingLeft: ThemesDefault.space.PX_8, paddingRight: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelConnectButton.tsx");

export default function ConnectButton(props) {
  let _require;
  let channelId;
  let guildId;
  let canConnect;
  let isAtMaxCapacity;
  let isChannelContentGated;
  let isChannelSpoilerGated;
  const tmp = isChannelSpoilerGated();
  _require = tmp;
  let obj = canConnect;
  const context = canConnect.useContext(channelId(guildId[5]));
  channelId = context.channelId;
  guildId = context.guildId;
  const tmp5 = channelId(guildId[6])(channelId);
  canConnect = tmp5.canConnect;
  isAtMaxCapacity = tmp5.isAtMaxCapacity;
  const items = [isAtMaxCapacity];
  const stateFromStores = _require(guildId[7]).useStateFromStores(items, () => isAtMaxCapacity.getChannel(channelId));
  const obj2 = _require(guildId[7]);
  const tmp2 = channelId;
  isChannelContentGated = _require(guildId[8]).useIsChannelContentGated(stateFromStores);
  if (isChannelContentGated) {
    isChannelContentGated = null != guildId;
  }
  if (isChannelContentGated) {
    isChannelContentGated = null != channelId;
  }
  let obj3 = _require(guildId[8]);
  isChannelSpoilerGated = _require(guildId[9]).useIsChannelSpoilerGated(stateFromStores);
  if (isChannelSpoilerGated) {
    isChannelSpoilerGated = null != guildId;
  }
  if (isChannelSpoilerGated) {
    isChannelSpoilerGated = null != channelId;
  }
  const items1 = [canConnect, isAtMaxCapacity, channelId, isChannelContentGated, isChannelSpoilerGated, guildId];
  const callback = obj.useCallback(() => {
    if (canConnect) {
      if (!isAtMaxCapacity) {
        if (!isChannelContentGated) {
          if (!isChannelSpoilerGated) {
            let obj = channelId(guildId[10]);
            const voiceChannel = obj.selectVoiceChannel(channelId);
          }
        }
      }
    }
    if (canConnect) {
      if (isAtMaxCapacity) {
        obj = { channelId: null };
        obj[0] = channelId;
        lib(guildId[11]).openAlert(lib(guildId[13]).VOICE_PANEL_MAX_CAPACITY_KEY, isChannelContentGated(channelId(guildId[13]), obj));
        const obj7 = lib(guildId[11]);
      } else if (isChannelContentGated) {
        obj = { guildId: null, channelId: null };
        obj[0] = guildId;
        obj[1] = channelId;
        lib(guildId[11]).openAlert(lib(guildId[14]).VOICE_PANEL_NSFW_KEY, isChannelContentGated(channelId(guildId[14]), obj));
        const obj5 = lib(guildId[11]);
      } else if (isChannelSpoilerGated) {
        obj1 = { channelId: null };
        obj1[0] = channelId;
        lib(guildId[11]).openAlert(lib(guildId[15]).VOICE_PANEL_SPOILER_KEY, isChannelContentGated(channelId(guildId[15]), obj1));
        const obj3 = lib(guildId[11]);
      }
    } else {
      obj1 = lib(guildId[11]);
      obj1.openAlert(lib(guildId[12]).VOICE_PANEL_NO_JOIN_PERMS_KEY, isChannelContentGated(channelId(guildId[12]), {}));
    }
  }, items1);
  obj = { onPress: callback, props: props.props, accessibilityLabel: null, style: null, children: null };
  const tmp6Result = _require(guildId[9]);
  let intl = tmp6(tmp3[17]).intl;
  obj[2] = intl.string(_require(guildId[17]).t["96ANUN"]);
  obj[3] = tmp.connectButton;
  const items2 = [tmp.connectText];
  obj[4] = obj.useMemo(() => {
    const obj = { variant: "text-sm/semibold", color: "text-overlay-light", style: lib.connectText, children: null };
    const intl = lib(guildId[17]).intl;
    obj[3] = intl.string(lib(guildId[17]).t["96ANUN"]);
    return isChannelContentGated(lib(guildId[18]).Text, obj);
  }, items2);
  return isChannelContentGated(tmp2(guildId[16]), obj);
};