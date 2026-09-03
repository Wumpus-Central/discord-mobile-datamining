// discord_app/modules/hub/native/components/HubSidebar.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import BaseChannelSubtitle from "../../../guild_sidebar/native/BaseChannelItem.tsx";
import BaseChannelSubtitleDefault from "../../../guild_sidebar/native/BaseChannelItem.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../../stores/GuildChannelStore.tsx";
import closure_5 from "../../../../stores/SelectedChannelStore.tsx";
import { InstantInviteSources } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function HubItem(arg0) {
  ({ label, unreadCount } = arg0);
  ({ IconComponent, handleItemClick, active } = arg0);
  const ChannelModes = BaseChannelSubtitle.ChannelModes;
  if (active) {
    let DEFAULT = ChannelModes.SELECTED;
    let tmp5 = tmp2;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp5 = tmp2;
  }
  let obj = {
    style: callback2().container,
    accessibilityLabel: label,
    accessibilityRole: "menuitem",
    onPress: handleItemClick,
    disableHighlightOnPress: true,
    mode: DEFAULT,
    name: null,
    icon: null,
    channelInfo: null,
  };
  const tmp = callback2();
  obj[6] = callback(tmp5(12177).BaseChannelName, { name: label, mode: DEFAULT });
  obj[7] = callback(tmp5(12177).BaseChannelIcon, { mode: DEFAULT, IconComponent });
  let tmp6Result = null;
  if (null != unreadCount) {
    obj = { value: null };
    obj[0] = unreadCount;
    tmp6Result = tmp6(tmp5(1296).Badge, obj);
  }
  obj[8] = tmp6Result;
  return callback(BaseChannelSubtitleDefault, obj);
}
noopAll;
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null, row: null };
createCacheKey = {
  marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL,
  marginHorizontal: 8,
  borderRadius: ThemesDefault.radii.md,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/hub/native/components/HubSidebar.tsx");

export default function HubSidebar(guild) {
  guild = guild.guild;
  let stateFromStores;
  dependencyMap = undefined;
  let obj = guild(586);
  const items = [closure_4];
  const items1 = [guild.id];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getDefaultChannel(guild.id), items1);
  obj1 = guild(586);
  const items2 = [closure_4];
  dependencyMap = obj1.useStateFromStoresObject(items2, () => closure_1_4.getChannels(guild.id));
  let obj2 = guild(586);
  const items3 = [closure_5];
  const stateFromStores1 = obj2.useStateFromStores(items3, () => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = closure_1_5.getChannelId() === tmp.id;
    }
    return tmp2;
  });
  guild(16048);
  let tmp9Result = null;
  if (null != stateFromStores) {
    let row = null;
    if (guild.flashList) {
      row = tmp4.row;
    }
    obj = { style: null, children: null };
    obj[0] = row;
    obj = { guild: null };
    obj[0] = guild;
    const items4 = [callback(stateFromStores(16049), obj), , ,];
    obj1 = { active: null, IconComponent: null, label: null, handleItemClick: null, unreadCount: null };
    obj1[0] = stateFromStores1;
    obj1[1] = tmp(15435).CompassIcon;
    const intl = tmp(1233).intl;
    obj1[2] = intl.string(tmp(1233).t.K50GHd);
    obj1[3] = function handleItemClick() {
      guild(4489).transitionToChannel(stateFromStores.id);
    };
    obj1[4] = tmp7;
    items4[1] = callback(HubItem, obj1);
    obj2 = { IconComponent: null, label: null, handleItemClick: null };
    obj2[0] = tmp(12527).PlusMediumIcon;
    const intl2 = tmp(1233).intl;
    obj2[1] = intl2.string(tmp(1233).t.emRpdS);
    obj2[2] = function handleItemClick() {
      let obj = stateFromStores(12104);
      obj = { directoryGuildName: guild.name, directoryGuildId: guild.id, directoryChannelId: stateFromStores.id };
      return obj.open(obj);
    };
    items4[2] = callback(HubItem, obj2);
    const obj3 = { IconComponent: null, label: null, handleItemClick: null };
    obj3[0] = tmp(4415).UserPlusIcon;
    const intl3 = tmp(1233).intl;
    obj3[1] = intl3.string(tmp(1233).t.MJQOuJ);
    obj3[2] = function handleItemClick() {
      const result = guild(9935).handleOpenInviteActionsheet(
        guild,
        stateFromStores.id,
        dependencyMap,
        closure_1_6.GUILD_HEADER,
      );
    };
    items4[3] = callback(HubItem, obj3);
    obj[1] = items4;
    tmp9Result = closure_8(View, obj);
    const tmp10 = View;
    const tmp9 = closure_8;
  }
  return tmp9Result;
}
