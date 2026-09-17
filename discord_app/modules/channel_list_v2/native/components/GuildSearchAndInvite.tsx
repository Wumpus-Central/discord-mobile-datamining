// === Module 12449: GuildSearchAndInvite ===

// Module 12449 (GuildSearchAndInvite)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useAlertStore from "useAlertStore" /* 4986 */;
import useStableCallbackDefault from "useStableCallback" /* 7076 */;
import IconButton from "IconButton" /* 8057 */;
import _modDef9937 from "module_9937" /* 9937 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9971 */;
import utils_InstantInviteUtils from "utils/InstantInviteUtils" /* 9974 */;
import _modDef10181 from "module_10181" /* 10181 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 12452 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 12490 */;
import useEventsButtonPropsDefault from "useEventsButtonProps" /* 12526 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildChannelStore from "GuildChannelStore" /* 2013 */;
import GuildStore from "GuildStore" /* 1980 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2012 */;

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
  closure_8 = guildId(invitesDisabled[14]).useNavigation();
  let obj = guildId(invitesDisabled[14]);
  closure_9 = guildId(invitesDisabled[15]).useGuildSearchContext(guildId);
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
      const obj3 = { channel };
      GuildDirectorySearchModalActionCreatorsDefault.open(obj3);
    } else {
      const result = SearchPlatformUtilsDefault.navigateToSearchWithPrefetch(closure_8, closure_9);
    }
  });
  let obj2 = guildId(invitesDisabled[15]);
  const iOSPressEffects = guildId(invitesDisabled[19]).useIOSPressEffects(4);
  let items = [canInvite, invitesDisabled, onInvitePress];
  ({ onPressIn, onPressOut, pressableStyles } = iOSPressEffects);
  const items1 = [useEventsButton, onEventsPress, hasUnreadEvents, tmp.badge];
  const memo = onInvitePress.useMemo(() => {
    let tmp = null;
    if (canInvite) {
      const obj = { variant: "secondary", size: "sm", icon: _modDef10181, onPress: onInvitePress, onPressDisabled: handleInviteDisabledPress, accessibilityLabel: null, disabled: null, maxFontSizeMultiplier: 2 };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.VINpSK);
      obj.disabled = invitesDisabled;
      tmp = closure_2_12(IconButton.IconButton, obj);
    }
    return tmp;
  }, items);
  const obj4 = { style: tmp.container, children: null };
  if (useButtonComponent) {
    const obj5 = { variant: "secondary", grow: true, shrink: true, size: "sm", icon: tmp4(tmp3[25]), onPress: tmp5, text: null, maxFontSizeMultiplier: 2 };
    let intl2 = tmp2(tmp3[22]).intl;
    obj5.text = intl2.string(tmp2(tmp3[22]).t["5h0QOP"]);
    const items2 = [closure_12(tmp2(tmp3[24]).Button, obj5), memo, tmp8];
    obj4.children = items2;
    let tmp14 = obj4;
  } else {
    const obj6 = { style: null, children: null };
    const items3 = [tmp.search, pressableStyles];
    obj6.style = items3;
    const obj7 = { onPress: tmp5, onPressIn, onPressOut };
    obj6.children = closure_12(tmp2(tmp3[27]).SearchButtonContent, obj7);
    const items4 = [closure_12(tmp4(tmp3[26]).View, obj6), ];
    let tmp11Result = null;
    if (canInvite) {
      const obj8 = { variant: "tertiary", icon: tmp4(tmp3[21]), onPress: onInvitePress, onPressDisabled: handleInviteDisabledPress, accessibilityLabel: null, disabled: null };
      let intl = tmp2(tmp3[22]).intl;
      obj8.accessibilityLabel = intl.string(tmp2(tmp3[22]).t.VINpSK);
      obj8.disabled = invitesDisabled;
      tmp11Result = closure_12(tmp2(tmp3[20]).IconButton, obj8);
    }
    items4[1] = tmp11Result;
    obj4.children = items4;
    tmp14 = obj4;
  }
  return closure_13(onEventsPress, tmp14);
}
const View = fn(17).View;
const SEARCH_BAR_MARGIN_BOTTOM = fn(10267).SEARCH_BAR_MARGIN_BOTTOM;
const Constants = fn(1074);
({ GuildFeatures: c10, InstantInviteSources: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4640);
let closure_14 = createStyles.createStyles((arg0) => {
  const obj = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: SEARCH_BAR_MARGIN_BOTTOM, flexDirection: "row", gap: null };
  let num = 10;
  if (arg0) {
    num = nativeDefault.space.PX_12;
  }
  const obj2 = { container: obj, search: { flex: 1 }, badge: null };
  obj.gap = num;
  const size = { position: "absolute", right: 0, top: 0, width: 8, height: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
  obj2.badge = size;
  return obj2;
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
  const items = [GuildChannelStore];
  const items1 = [guild];
  const stateFromStores = guild(504).useStateFromStores(items, () => {
    const channels = GuildChannelStore.getChannels(guild.id);
    return utils_InstantInviteUtils.shouldRenderInvite(channels, guild);
  }, items1);
  const obj = guild(504);
  const tmp2 = useStableCallbackDefault(() => {
    const channelId = SelectedChannelStore.getChannelId(guild.id);
    const channels = GuildChannelStore.getChannels(guild.id);
    const result = instant_invite_InstantInviteUtils.handleOpenInviteActionsheet(guild, channelId, channels, constants2.GUILD_HEADER);
  });
  const shouldShowInvitesDisabledNotif = guild(12523).useShouldShowInvitesDisabledNotif(guild);
  const obj2 = guild(12523);
  const tmp5 = useEventsButtonPropsDefault(guild);
  const obj3 = { guildId: guild.id, canInvite: stateFromStores, invitesDisabled: shouldShowInvitesDisabledNotif, onInvitePress: tmp2, onEventsPress: tmp5.handlePress, onEventsLongPress: tmp5.handleLongPress, hasUnreadEvents: tmp5.hasUnread, useEventsButton: null, useButtonComponent: null };
  if (flag2) {
    flag2 = tmp4;
  }
  obj3.useEventsButton = flag2;
  obj3.useButtonComponent = flag;
  return closure_12(GuildSearchAndInvite, obj3);
});