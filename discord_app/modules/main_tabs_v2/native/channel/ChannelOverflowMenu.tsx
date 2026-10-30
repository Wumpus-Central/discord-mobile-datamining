// === Module 14502: ChannelOverflowMenu ===

// Module 14502 (ChannelOverflowMenu)
import util from "util" /* 1114 */;
import MoreHorizontalIcon from "MoreHorizontalIcon" /* 9736 */;
import ContextMenu from "ContextMenu" /* 9853 */;
import IconActionButtonDefault from "IconActionButton" /* 14503 */;
import useAppChannelOverflowMenuItemsDefault from "useAppChannelOverflowMenuItems" /* 14504 */;
import noop from "module_19" /* 19 */;

require = fn;
function ChannelOverflowMenuButton(items) {
  return jsx(ContextMenu.ContextMenu, {
    items: items.items,
    children(onPress) {
      onPress = onPress.onPress;
      const merged = Object.assign(onPress, Object.assign({ onPress: 0 }));
      const obj = {};
      const merged1 = Object.assign(merged);
      obj.onPress = function onPress(arg0) {
        let tmpResult;
        if (onPress != null) {
          tmpResult = tmp(arg0);
        }
        return tmpResult;
      };
      obj.noMargin = true;
      obj.IconComponent = MoreHorizontalIcon.MoreHorizontalIcon;
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.PdRCRg);
      return jsx(IconActionButtonDefault, {});
    }
  });
}
function AppChannelOverflowMenu(channel) {
  return <ChannelOverflowMenuButton items={useAppChannelOverflowMenuItemsDefault(channel.channel)} />;
}
const ChannelTypes = fn(1072).ChannelTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelOverflowMenu.tsx");

export default function ChannelOverflowMenu(channel) {
  channel = channel.channel;
  let tmp = null;
  if (channel.type === ChannelTypes.GUILD_APP) {
    const obj = { channel };
    tmp = <AppChannelOverflowMenu channel={channel} />;
  }
  return tmp;
};
export function useHasChannelOverflowMenu(channel, screenIndex) {
  let tmp = channel.type === ChannelTypes.GUILD_APP;
  if (tmp) {
    tmp = null != channel.application_id;
  }
  if (tmp) {
    tmp = "channel-secondary-view-chat" !== screenIndex;
  }
  let tmp4 = null;
  if (tmp) {
    tmp4 = channel;
  }
  if (tmp) {
    tmp = !obj.useIsConjureChannelCandidate(tmp4, "ChannelOverflowMenu");
  }
  return tmp;
}