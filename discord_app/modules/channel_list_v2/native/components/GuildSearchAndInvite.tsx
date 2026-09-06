// === Module 12297: GuildSearchAndInvite ===

// Module 12297 (GuildSearchAndInvite)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import useAlertStore from "useAlertStore" /* 4906 */;
import useStableCallbackDefault from "useStableCallback" /* 6964 */;
import IconButton from "IconButton" /* 8097 */;
import _modDef9786 from "module_9786" /* 9786 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9820 */;
import utils_InstantInviteUtils from "utils/InstantInviteUtils" /* 9823 */;
import _modDef10031 from "module_10031" /* 10031 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 12300 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 12338 */;
import useEventsButtonPropsDefault from "useEventsButtonProps" /* 12374 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import GuildStore from "GuildStore" /* 1979 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

require = fn;
function handleInviteDisabledPress() {
  const lazyResult = noop.lazy(() => require("asyncRequireImpl")(paths[11], paths.paths));
  useAlertStore.openAlert("invites-disabled", closure_1_12(lazyResult, {}));
}
function GuildSearchAndInvite(guildId) {
  guildId = guildId.guildId;
  const canInvite = guildId.canInvite;
  const invitesDisabled = guildId.invitesDisabled;
  const onInvitePress = guildId.onInvitePress;
  const onEventsPress = guildId.onEventsPress;
  const hasUnreadEvents = guildId.hasUnreadEvents;
  const useEventsButton = guildId.useEventsButton;
  const useButtonComponent = guildId.useButtonComponent;
  let tmp = closure_14(useButtonComponent);
  const badge = tmp;
  let obj = guildId(invitesDisabled[14]);
  closure_8 = obj.useNavigation();
  let obj1 = guildId(invitesDisabled[15]);
  closure_9 = obj1.useGuildSearchContext(guildId);
  const tmp5 = canInvite(invitesDisabled[16])(() => {
    const guild = GuildStore.getGuild(guildId);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants.HUB);
    }
    if (hasItem) {
      let directoryChannelIds = GuildChannelStore.getDirectoryChannelIds(guildId);
    } else {
      directoryChannelIds = [];
    }
    let channel = null;
    if (0 !== directoryChannelIds.length) {
      channel = ChannelStore.getChannel(directoryChannelIds[0]);
    }
    if (null != channel) {
      let obj = { channel };
      GuildDirectorySearchModalActionCreatorsDefault.open(obj);
    } else {
      obj = SearchPlatformUtilsDefault;
      const result = obj.navigateToSearchWithPrefetch(closure_8, closure_9);
    }
  });
  let obj2 = guildId(invitesDisabled[19]);
  const iOSPressEffects = obj2.useIOSPressEffects(4);
  let items = [canInvite, invitesDisabled, onInvitePress];
  ({ onPressIn, onPressOut, pressableStyles } = iOSPressEffects);
  const items1 = [useEventsButton, onEventsPress, hasUnreadEvents, tmp.badge];
  const memo = onInvitePress.useMemo(() => {
    let tmp = null;
    if (canInvite) {
      const obj = { variant: "secondary", size: "sm", icon: _modDef10031, onPress: onInvitePress, onPressDisabled: handleInviteDisabledPress, accessibilityLabel: null, disabled: null, maxFontSizeMultiplier: 2 };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.VINpSK);
      obj.disabled = invitesDisabled;
      tmp = closure_2_12(IconButton.IconButton, obj);
    }
    return tmp;
  }, items);
  obj = { style: tmp.container, children: null };
  if (useButtonComponent) {
    obj = { variant: "secondary", grow: true, shrink: true, size: "sm", icon: tmp4(tmp3[25]), onPress: tmp5, text: null, maxFontSizeMultiplier: 2 };
    let intl2 = tmp2(tmp3[22]).intl;
    obj.text = intl2.string(tmp2(tmp3[22]).t["5h0QOP"]);
    const items2 = [tmp11(tmp2(tmp3[24]).Button, obj), memo, tmp8];
    obj.children = items2;
    let tmp14 = obj;
  } else {
    obj1 = { style: null, children: null };
    const items3 = [tmp.search, pressableStyles];
    obj1.style = items3;
    obj2 = { onPress: tmp5, onPressIn, onPressOut };
    obj1.children = tmp11(tmp2(tmp3[27]).SearchButtonContent, obj2);
    const items4 = [tmp11(tmp4(tmp3[26]).View, obj1), ];
    let tmp11Result = null;
    if (canInvite) {
      const obj3 = { variant: "tertiary", icon: tmp4(tmp3[21]), onPress: onInvitePress, onPressDisabled: handleInviteDisabledPress, accessibilityLabel: null, disabled: null };
      let intl = tmp2(tmp3[22]).intl;
      obj3.accessibilityLabel = intl.string(tmp2(tmp3[22]).t.VINpSK);
      obj3.disabled = invitesDisabled;
      tmp11Result = tmp11(tmp2(tmp3[20]).IconButton, obj3);
    }
    items4[1] = tmp11Result;
    obj.children = items4;
    tmp14 = obj;
  }
  return closure_13(onEventsPress, tmp14);
}
const View = fn(17).View;
const SEARCH_BAR_MARGIN_BOTTOM = fn(10118).SEARCH_BAR_MARGIN_BOTTOM;
const Constants = fn(1074);
({ GuildFeatures: c10, InstantInviteSources: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4560);
let closure_14 = createStyles.createStyles((arg0) => {
  let obj = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: SEARCH_BAR_MARGIN_BOTTOM, flexDirection: "row", gap: null };
  let num = 10;
  if (arg0) {
    num = tmp(576).space.PX_12;
  }
  obj = { container: obj, search: { flex: 1 }, badge: null, gap: num };
  const size = { position: "absolute", right: 0, top: 0, width: 8, height: 8, borderRadius: tmp(576).radii.round, backgroundColor: tmp(576).colors.BACKGROUND_BRAND };
  obj.badge = size;
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/components/GuildSearchAndInvite.tsx");

export default noop.memo(function ConnectedGuildSearchAndInviteInner(guild) {
  guild = guild.guild;
  let flag = guild.useButtonComponent;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = guild.useEventsButton;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = guild(504);
  const items = [GuildChannelStore];
  const items1 = [guild];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channels = GuildChannelStore.getChannels(guild.id);
    return utils_InstantInviteUtils.shouldRenderInvite(channels, guild);
  }, items1);
  const tmp2 = useStableCallbackDefault(() => {
    const channelId = SelectedChannelStore.getChannelId(guild.id);
    const channels = GuildChannelStore.getChannels(guild.id);
    const result = instant_invite_InstantInviteUtils.handleOpenInviteActionsheet(guild, channelId, channels, constants2.GUILD_HEADER);
  });
  const shouldShowInvitesDisabledNotif = guild(12371).useShouldShowInvitesDisabledNotif(guild);
  const obj2 = guild(12371);
  const tmp5 = useEventsButtonPropsDefault(guild);
  obj = { guildId: guild.id, canInvite: stateFromStores, invitesDisabled: shouldShowInvitesDisabledNotif, onInvitePress: tmp2, onEventsPress: tmp5.handlePress, onEventsLongPress: tmp5.handleLongPress, hasUnreadEvents: tmp5.hasUnread, useEventsButton: null, useButtonComponent: null };
  if (flag2) {
    flag2 = tmp4;
  }
  obj.useEventsButton = flag2;
  obj.useButtonComponent = flag;
  return closure_12(GuildSearchAndInvite, obj);
});