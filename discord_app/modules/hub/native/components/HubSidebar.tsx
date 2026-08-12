// discord_app/modules/hub/native/components/HubSidebar.tsx
import "UserPlusIcon";
import { View } from "PlusMediumIcon";
import comparator from "comparator";
import handleConnectionOpen from "handleConnectionOpen";
import { InstantInviteSources } from "ME";
import jsxProd from "set";
import createCacheKey from "createCacheKey";
import { BaseChannelSubtitle } from "../../../guild_sidebar/native/BaseChannelItem.tsx";

let error;
let metroImportAll;
const require = arg1;
function HubItem(arg0) {
  let IconComponent;
  let active;
  let handleItemClick;
  let label;
  let unreadCount;
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
  let obj = { style: createCacheKey().container, accessibilityLabel: label, accessibilityRole: "menuitem", onPress: handleItemClick, disableHighlightOnPress: true, mode: DEFAULT, name: null, icon: null, channelInfo: null };
  const tmp = createCacheKey();
  obj[6] = callback(tmp5(11813).BaseChannelName, { name: label, mode: DEFAULT });
  obj[7] = callback(tmp5(11813).BaseChannelIcon, { mode: DEFAULT, IconComponent });
  let tmp6Result = null;
  if (null != unreadCount) {
    obj = { value: null };
    obj[0] = unreadCount;
    tmp6Result = tmp6(tmp5(1297).Badge, obj);
  }
  obj[8] = tmp6Result;
  return callback(BaseChannelSubtitle, obj);
}
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: null, row: null };
createCacheKey = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("Themes").radii.md };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("comparator").fileFinishedImporting("modules/hub/native/components/HubSidebar.tsx");

export default function HubSidebar(guild) {
  guild = guild.guild;
  let stateFromStores;
  let dependencyMap;
  let obj = guild(589);
  const items = [comparator];
  const items1 = [guild.id];
  stateFromStores = obj.useStateFromStores(items, () => outer1_4.getDefaultChannel(guild.id), items1);
  let obj1 = guild(589);
  const items2 = [comparator];
  dependencyMap = obj1.useStateFromStoresObject(items2, () => outer1_4.getChannels(guild.id));
  let obj2 = guild(589);
  const items3 = [handleConnectionOpen];
  const stateFromStores1 = obj2.useStateFromStores(items3, () => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = outer1_5.getChannelId() === tmp.id;
    }
    return tmp2;
  });
  guild(15408);
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
    const items4 = [callback(stateFromStores(15409), obj), , , ];
    obj1 = { active: null, IconComponent: null, label: null, handleItemClick: null, unreadCount: null };
    obj1[0] = stateFromStores1;
    obj1[1] = tmp(13928).CompassIcon;
    const intl = tmp(1236).intl;
    obj1[2] = intl.string(tmp(1236).t.K50GHd);
    obj1[3] = function handleItemClick() {
      guild(4352).transitionToChannel(stateFromStores.id);
    };
    obj1[4] = tmp7;
    items4[1] = callback(HubItem, obj1);
    obj2 = { IconComponent: null, label: null, handleItemClick: null };
    obj2[0] = tmp(12168).PlusMediumIcon;
    const intl2 = tmp(1236).intl;
    obj2[1] = intl2.string(tmp(1236).t.emRpdS);
    obj2[2] = function handleItemClick() {
      let obj = stateFromStores(11740);
      obj = { directoryGuildName: guild.name, directoryGuildId: guild.id, directoryChannelId: stateFromStores.id };
      return obj.open(obj);
    };
    items4[2] = callback(HubItem, obj2);
    const obj3 = { IconComponent: null, label: null, handleItemClick: null };
    obj3[0] = tmp(4282).UserPlusIcon;
    const intl3 = tmp(1236).intl;
    obj3[1] = intl3.string(tmp(1236).t.MJQOuJ);
    obj3[2] = function handleItemClick() {
      const result = guild(9110).handleOpenInviteActionsheet(guild, stateFromStores.id, dependencyMap, outer1_6.GUILD_HEADER);
    };
    items4[3] = callback(HubItem, obj3);
    obj[1] = items4;
    tmp9Result = closure_8(View, obj);
    const tmp10 = View;
    const tmp9 = closure_8;
  }
  return tmp9Result;
};