// === Module 11781: handleInviteDisabledPress ===

// Module 11781 (handleInviteDisabledPress)
import ThemesDefault from "Themes" /* 712 */;
import useAlertStore from "useAlertStore" /* 4811 */;
import setDefault from "set" /* 7670 */;
import useEventsButtonPropsDefault from "useEventsButtonProps" /* 11860 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "comparator" /* 1982 */;
import closure_7 from "createGuildRecordFromRust" /* 1910 */;
import closure_8 from "handleConnectionOpen" /* 1981 */;
import { SEARCH_BAR_MARGIN_BOTTOM } from "hairlineWidth" /* 10121 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
function handleInviteDisabledPress() {
  const lazyResult = importAllResult.lazy(() => callback(paths[12])(paths[11], paths.paths));
  useAlertStore.openAlert("invites-disabled", callback(lazyResult, {}));
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
  closure_7 = undefined;
  closure_8 = undefined;
  closure_9 = undefined;
  let tmp = callback2(useButtonComponent);
  closure_7 = tmp;
  let obj = guildId(invitesDisabled[14]);
  closure_8 = obj.useNavigation();
  obj1 = guildId(invitesDisabled[15]);
  closure_9 = obj1.useGuildSearchContext(guildId);
  const tmp5 = canInvite(invitesDisabled[16])(() => {
    guild = guild.getGuild(guildId);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(closure_1_10.HUB);
    }
    if (hasItem) {
      let directoryChannelIds = useEventsButton.getDirectoryChannelIds(guildId);
    } else {
      directoryChannelIds = [];
    }
    let channel = null;
    if (0 !== directoryChannelIds.length) {
      channel = hasUnreadEvents.getChannel(directoryChannelIds[0]);
    }
    if (null != channel) {
      let obj = { channel: null };
      obj[0] = channel;
      canInvite(invitesDisabled[17]).open(obj);
      const obj2 = canInvite(invitesDisabled[17]);
    } else {
      obj = canInvite(invitesDisabled[18]);
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
      const obj = { variant: "secondary", size: "sm", icon: null, onPress: null, onPressDisabled: null, accessibilityLabel: null, disabled: null, maxFontSizeMultiplier: 2 };
      obj[2] = canInvite(invitesDisabled[21]);
      obj[3] = onInvitePress;
      obj[4] = closure_1_15;
      const intl = guildId(invitesDisabled[22]).intl;
      obj[5] = intl.string(guildId(invitesDisabled[22]).t.VINpSK);
      obj[6] = invitesDisabled;
      tmp = closure_1_12(guildId(invitesDisabled[20]).IconButton, obj);
    }
    return tmp;
  }, items);
  obj = { style: tmp.container, children: null };
  if (useButtonComponent) {
    obj = { variant: "secondary", grow: true, shrink: true, size: "sm", icon: null, onPress: null, text: null, maxFontSizeMultiplier: 2 };
    obj[4] = tmp4(tmp3[25]);
    obj[5] = tmp5;
    let intl2 = tmp2(tmp3[22]).intl;
    obj[6] = intl2.string(tmp2(tmp3[22]).t["5h0QOP"]);
    const items2 = [tmp11(tmp2(tmp3[24]).Button, obj), memo, tmp8];
    obj[1] = items2;
    let tmp14 = obj;
  } else {
    obj1 = { style: null, children: null };
    const items3 = [tmp.search, pressableStyles];
    obj1[0] = items3;
    obj2 = { onPress: null, onPressIn: null, onPressOut: null };
    obj2[0] = tmp5;
    obj2[1] = onPressIn;
    obj2[2] = onPressOut;
    obj1[1] = tmp11(tmp2(tmp3[27]).SearchButtonContent, obj2);
    const items4 = [tmp11(tmp4(tmp3[26]).View, obj1), ];
    let tmp11Result = null;
    if (canInvite) {
      const obj3 = { variant: "tertiary", icon: null, onPress: null, onPressDisabled: null, accessibilityLabel: null, disabled: null };
      obj3[1] = tmp4(tmp3[21]);
      obj3[2] = onInvitePress;
      obj3[3] = handleInviteDisabledPress;
      let intl = tmp2(tmp3[22]).intl;
      obj3[4] = intl.string(tmp2(tmp3[22]).t.VINpSK);
      obj3[5] = invitesDisabled;
      tmp11Result = tmp11(tmp2(tmp3[20]).IconButton, obj3);
    }
    items4[1] = tmp11Result;
    obj[1] = items4;
    tmp14 = obj;
  }
  return closure_13(onEventsPress, tmp14);
}
let c3 = importAllResult;
({ GuildFeatures: c10, InstantInviteSources: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = createCacheKey.createStyles((arg0) => {
  let obj = { paddingHorizontal: ThemesDefault.space.PX_16, marginBottom: SEARCH_BAR_MARGIN_BOTTOM, flexDirection: "row", gap: null };
  let num = 10;
  if (arg0) {
    num = tmp(712).space.PX_12;
  }
  obj = { container: obj, search: { flex: 1 }, badge: null };
  obj[3] = num;
  obj = { position: "absolute", right: 0, top: 0, width: 8, height: 8, borderRadius: tmp(712).radii.round, backgroundColor: tmp(712).colors.BACKGROUND_BRAND };
  obj[2] = obj;
  return obj;
});
const memoResult = importAllResult.memo(function ConnectedGuildSearchAndInviteInner(guild) {
  guild = guild.guild;
  let flag = guild.useButtonComponent;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = guild.useEventsButton;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = guild(589);
  const items = [closure_6];
  const items1 = [guild];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channels = closure_1_6.getChannels(guild.id);
    return guild(closure_1_2[29]).shouldRenderInvite(channels, guild);
  }, items1);
  const tmp2 = setDefault(() => {
    const channelId = closure_1_8.getChannelId(guild.id);
    const channels = closure_1_6.getChannels(guild.id);
    const result = guild(closure_1_2[30]).handleOpenInviteActionsheet(guild, channelId, channels, closure_1_11.GUILD_HEADER);
  });
  const shouldShowInvitesDisabledNotif = guild(11857).useShouldShowInvitesDisabledNotif(guild);
  const obj2 = guild(11857);
  const tmp5 = useEventsButtonPropsDefault(guild);
  obj = { guildId: guild.id, canInvite: stateFromStores, invitesDisabled: shouldShowInvitesDisabledNotif, onInvitePress: tmp2, onEventsPress: tmp5.handlePress, onEventsLongPress: tmp5.handleLongPress, hasUnreadEvents: tmp5.hasUnread, useEventsButton: null, useButtonComponent: null };
  if (flag2) {
    flag2 = tmp4;
  }
  obj[7] = flag2;
  obj[8] = flag;
  return closure_12(GuildSearchAndInvite, obj);
});
let result = require("set").fileFinishedImporting("modules/channel_list_v2/native/components/GuildSearchAndInvite.tsx");

export default memoResult;