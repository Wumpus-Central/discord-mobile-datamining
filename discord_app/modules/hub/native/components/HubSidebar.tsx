// === Module 15473: HubItem ===

// Module 15473 (HubItem)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import BaseChannelSubtitle from "BaseChannelSubtitle" /* 11553 */;
import BaseChannelSubtitleDefault from "BaseChannelSubtitle" /* 11553 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "comparator" /* 1980 */;
import closure_5 from "handleConnectionOpen" /* 1979 */;
import { InstantInviteSources } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

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
  let obj = { style: callback2().container, accessibilityLabel: label, accessibilityRole: "menuitem", onPress: handleItemClick, disableHighlightOnPress: true, mode: DEFAULT, name: null, icon: null, channelInfo: null };
  const tmp = callback2();
  obj[6] = callback(tmp5(11553).BaseChannelName, { name: label, mode: DEFAULT });
  obj[7] = callback(tmp5(11553).BaseChannelIcon, { mode: DEFAULT, IconComponent });
  let tmp6Result = null;
  if (null != unreadCount) {
    obj = { value: null };
    obj[0] = unreadCount;
    tmp6Result = tmp6(tmp5(1297).Badge, obj);
  }
  obj[8] = tmp6Result;
  return callback(BaseChannelSubtitleDefault, obj);
}
noopAll;
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null, row: null };
createCacheKey = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: ThemesDefault.radii.md };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/hub/native/components/HubSidebar.tsx");

export default function HubSidebar(guild) {
  guild = guild.guild;
  let stateFromStores;
  dependencyMap = undefined;
  let obj = guild(589);
  const items = [closure_4];
  const items1 = [guild.id];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getDefaultChannel(guild.id), items1);
  obj1 = guild(589);
  const items2 = [closure_4];
  dependencyMap = obj1.useStateFromStoresObject(items2, () => closure_1_4.getChannels(guild.id));
  let obj2 = guild(589);
  const items3 = [closure_5];
  const stateFromStores1 = obj2.useStateFromStores(items3, () => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = closure_1_5.getChannelId() === tmp.id;
    }
    return tmp2;
  });
  guild(15474);
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
    const items4 = [callback(stateFromStores(15475), obj), , , ];
    obj1 = { active: null, IconComponent: null, label: null, handleItemClick: null, unreadCount: null };
    obj1[0] = stateFromStores1;
    obj1[1] = tmp(13967).CompassIcon;
    const intl = tmp(1236).intl;
    obj1[2] = intl.string(tmp(1236).t.K50GHd);
    obj1[3] = function handleItemClick() {
      guild(4768).transitionToChannel(stateFromStores.id);
    };
    obj1[4] = tmp7;
    items4[1] = callback(HubItem, obj1);
    obj2 = { IconComponent: null, label: null, handleItemClick: null };
    obj2[0] = tmp(11932).PlusMediumIcon;
    const intl2 = tmp(1236).intl;
    obj2[1] = intl2.string(tmp(1236).t.emRpdS);
    obj2[2] = function handleItemClick() {
      let obj = stateFromStores(11475);
      obj = { directoryGuildName: guild.name, directoryGuildId: guild.id, directoryChannelId: stateFromStores.id };
      return obj.open(obj);
    };
    items4[2] = callback(HubItem, obj2);
    const obj3 = { IconComponent: null, label: null, handleItemClick: null };
    obj3[0] = tmp(4312).UserPlusIcon;
    const intl3 = tmp(1236).intl;
    obj3[1] = intl3.string(tmp(1236).t.MJQOuJ);
    obj3[2] = function handleItemClick() {
      const result = guild(8918).handleOpenInviteActionsheet(guild, stateFromStores.id, dependencyMap, closure_1_6.GUILD_HEADER);
    };
    items4[3] = callback(HubItem, obj3);
    obj[1] = items4;
    tmp9Result = closure_8(View, obj);
    const tmp10 = View;
    const tmp9 = closure_8;
  }
  return tmp9Result;
};