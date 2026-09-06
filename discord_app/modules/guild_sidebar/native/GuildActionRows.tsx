// discord_app/modules/guild_sidebar/native/GuildActionRows.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../recent_channels/NewChannelsStore.tsx";
import closure_6 from "../../../stores/ReadStateStore.tsx";
import { CHANNELS_AND_ROLES_MODAL_KEY as closure_7 } from "../../guild_onboarding/native/GuildOnboardingConstants.tsx";
import { ReadStateTypes } from "../../read_states/ReadStateConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
createCacheKey = { container: null, channelInfoContainer: null };
createCacheKey = {
  marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL,
  marginHorizontal: 8,
  borderRadius: ThemesDefault.radii.md,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingStart: 4 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/guild_sidebar/native/GuildActionRows.tsx");

export const GuildRolesAndChannelsRow = function GuildRolesAndChannelsRow(guild) {
  guild = guild.guild;
  const selected = guild.selected;
  let id;
  const tmp = callback();
  const tmp4 = id(7335)(guild);
  id = guild.id;
  let obj = guild(4380);
  const result = obj.useIsDismissibleContentDismissed_UNSAFE(
    guild(1943).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX,
  );
  obj1 = guild(563);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () =>
    closure_1_6.hasUnread(guild.id, closure_1_8.GUILD_ONBOARDING_QUESTION),
  );
  const items1 = [closure_5];
  const items2 = [id];
  const stateFromStores1 = guild(563).useStateFromStores(
    items1,
    () => closure_1_5.getNewChannelIds(guild.id).size > guild(closure_1_2[14]).MAX_NEW_CHANNELS_TO_SHOW,
  );
  callback = React.useCallback(() => {
    let obj = id(closure_1_2[15]);
    obj = { guildId: id };
    obj.pushLazy(guild(closure_1_2[17])(closure_1_2[16], closure_1_2.paths), obj, closure_1_7);
  }, items2);
  let SELECTED = guild(12379).ChannelModes.DEFAULT;
  if (selected) {
    SELECTED = tmp5(12379).ChannelModes.SELECTED;
  }
  let tmp10 = !result;
  if (result) {
    tmp10 = stateFromStores;
  }
  if (!tmp10) {
    tmp10 = stateFromStores1;
  }
  let tmp11 = null;
  if (tmp10) {
    obj = { style: null, children: null };
    obj[0] = tmp.channelInfoContainer;
    obj[1] = jsx(tmp5(12291).NewBadge, {});
    tmp11 = <View style={null}>{null}</View>;
  }
  obj = {
    onPress: callback,
    style: tmp.container,
    accessible: true,
    accessibilityLabel: null,
    accessibilityState: null,
    mode: null,
    name: null,
    icon: null,
    channelInfo: null,
  };
  const obj3 = guild(563);
  const tmp2 = id;
  const intl = tmp5(1114).intl;
  const string = intl.string;
  const t = tmp5(1114).t;
  if (tmp4) {
    let stringResult = string(t.h9mGOP);
  } else {
    stringResult = string(t.et6wav);
  }
  obj[3] = stringResult;
  obj[4] = { selected };
  obj[5] = SELECTED;
  const intl2 = tmp5(1114).intl;
  const string2 = intl2.string;
  const t2 = tmp5(1114).t;
  if (tmp4) {
    let string2Result = string2(t2.h9mGOP);
  } else {
    string2Result = string2(t2.et6wav);
  }
  obj[6] = jsx(guild(12379).BaseChannelName, { name: string2Result, mode: SELECTED });
  obj1 = { mode: SELECTED, IconComponent: tmp5(13843).ChannelListMagnifyingGlassIcon };
  obj[7] = jsx(guild(12379).BaseChannelIcon, {
    mode: SELECTED,
    IconComponent: tmp5(13843).ChannelListMagnifyingGlassIcon,
  });
  obj[8] = tmp11;
  return jsx(id(12379), {
    onPress: callback,
    style: tmp.container,
    accessible: true,
    accessibilityLabel: null,
    accessibilityState: null,
    mode: null,
    name: null,
    icon: null,
    channelInfo: null,
  });
};
