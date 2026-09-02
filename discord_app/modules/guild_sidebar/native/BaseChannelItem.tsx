// === Module 12171: BaseChannelSubtitle ===

// Module 12171 (BaseChannelSubtitle)
import ThemesDefault from "Themes" /* 709 */;
import PlatformTypes from "PlatformTypes" /* 1235 */;
import Button from "Button" /* 1296 */;
import Text from "Text" /* 4474 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import hairlineWidth from "hairlineWidth" /* 10223 */;
import { UnreadSetting } from "ReadStateTypes" /* 4702 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
class BaseChannelSubtitle {
  constructor(arg0) {
    ({ mode, subtitle } = global);
    tmp = closure_11;
    if (mode !== closure_11.UNREAD_IMPORTANT) {
      if (mode !== tmp.RELEVANT) {
        if (mode !== tmp.SELECTED) {
          MUTED = tmp.MUTED;
          obj = { variant: null, color: "text-muted" };
          tmp2 = closure_5;
          obj[0] = closure_5;
        }
        tmp4Result = null;
        if (null != subtitle) {
          tmp5 = closure_0;
          tmp6 = closure_2;
          tmp4 = jsx;
          obj3 = require("PlatformTypes");
          isAndroidResult = obj3.isAndroid();
          tmp8 = !isAndroidResult;
          if (!isAndroidResult) {
            tmp8 = typeof subtitle === "string";
          }
          obj = { experimental_useNativeText: null, lineClamp: 1 };
          obj[0] = tmp8;
          tmp9 = obj;
          tmp10 = obj;
          merged = Object.assign(obj);
          obj.children = subtitle;
          tmp4Result = tmp4(require("Text").Text, obj);
        }
        return tmp4Result;
      }
    }
    obj1 = { variant: closure_5, color: "redesign-channel-name-text" };
    obj = obj1;
    return;
  }
}
({ CHANNEL_SUBTITLE_TEXT_VARIANT: c5, CHANNEL_TITLE_LINE_HEIGHT: closure_6 } = hairlineWidth);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles((arg0) => {
  let obj = { rowPaddingNoIcon: { paddingHorizontal: 6 }, rowSelected: null, unreadIndicator: null, channelIcon: null, redesignedChannelIcon: null, channelIconNormal: null, channelIconUnread: null, channelIconMuted: null, channel: null, channelNameContainer: null, channelName: null };
  obj = { borderRadius: ThemesDefault.modules.mobile.CHANNEL_ITEM_RADIUS, backgroundColor: ThemesDefault.colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED };
  obj[1] = obj;
  obj = { left: -ThemesDefault.space.PX_8 };
  obj[2] = obj;
  let num = 1;
  let num2 = 1;
  if (arg0 === createCacheKey.MUTED) {
    num2 = 0.5;
  }
  obj[3] = { width: 16, height: 16, marginRight: 8, opacity: num2 };
  let num3 = num;
  if (arg0 === createCacheKey.MUTED) {
    num3 = 0.5;
  }
  obj[4] = { marginRight: 8, opacity: num3 };
  obj[5] = { tintColor: ThemesDefault.colors.CHANNEL_ICON };
  obj1 = { tintColor: ThemesDefault.colors.CHANNEL_ICON };
  obj[6] = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
  const obj2 = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
  obj[7] = { tintColor: ThemesDefault.colors.ICON_MUTED };
  obj[8] = { paddingHorizontal: 8, paddingVertical: 8, flexDirection: "row", alignItems: "center", position: "relative" };
  obj[9] = { flex: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "center" };
  const obj4 = { flexGrow: 1, textAlign: "left", lineHeight: closure_6, opacity: null };
  if (arg0 === createCacheKey.MUTED) {
    num = 0.5;
  }
  obj4[3] = num;
  obj[10] = obj4;
  return obj;
});
createCacheKey = { SELECTED: "Selected", LOCKED: "Locked", MUTED: "Muted", RELEVANT: "Relevant", UNREAD_LESS_IMPORTANT: "UnreadLessImportant", UNREAD_IMPORTANT: "UnreadImportant", DEFAULT: "Default" };
const result = require("set").fileFinishedImporting("modules/guild_sidebar/native/BaseChannelItem.tsx");

export default function BaseChannelItem(mode) {
  mode = mode.mode;
  const hideIcon = mode.hideIcon;
  let flag = mode.disableHighlightOnPress;
  ({ icon, name } = mode);
  if (flag === undefined) {
    flag = false;
  }
  ({ unread, channelInfo, children } = mode);
  if (unread === undefined) {
    unread = false;
  }
  const merged = Object.assign(mode, Object.create(null));
  dependencyMap = undefined;
  const tmp2 = callback2(mode);
  dependencyMap = tmp2;
  let items = [hideIcon, mode, tmp2];
  let obj = {
    style: React.useMemo(() => {
      const items = [channel.channel, , ];
      let rowPaddingNoIcon = hideIcon;
      if (hideIcon) {
        rowPaddingNoIcon = tmp.rowPaddingNoIcon;
      }
      items[1] = rowPaddingNoIcon;
      items[2] = mode === closure_1_11.SELECTED && channel.rowSelected;
      return items;
    }, items),
    children: null
  };
  if (hideIcon) {
    const items1 = [tmp5, , , ];
    let tmp14 = !hideIcon;
    if (!hideIcon) {
      tmp14 = icon;
    }
    items1[1] = tmp14;
    items1[2] = name;
    items1[3] = channelInfo;
    obj[1] = items1;
    if (flag) {
      let AnimatedPressableHighlight = hideIcon(12172);
    } else {
      AnimatedPressableHighlight = mode(8998).AnimatedPressableHighlight;
    }
    obj = {};
    const merged1 = Object.assign(merged);
    const items2 = [tmp3(tmp4, obj), children];
    obj.children = items2;
    return tmp3(AnimatedPressableHighlight, obj);
  } else {
    obj = { style: null, unread: null, resolvedUnreadSetting: null };
    obj[0] = tmp2.unreadIndicator;
    obj[1] = unread;
    if (mode === createCacheKey.UNREAD_LESS_IMPORTANT) {
      let ALL_MESSAGES = UnreadSetting.ONLY_MENTIONS;
    } else {
      ALL_MESSAGES = UnreadSetting.ALL_MESSAGES;
    }
    obj[2] = ALL_MESSAGES;
    closure_8(hideIcon(10272), obj);
    const tmp6 = closure_8;
    const tmp9 = hideIcon(10272);
  }
};
export const ChannelModes = createCacheKey;
export { BaseChannelSubtitle };
export const BaseChannelIcon = function BaseChannelIcon(arg0) {
  ({ disableColor, mode, IconComponent, style } = arg0);
  ({ source, isChannelLive } = arg0);
  const tmp = callback2(mode);
  const items = [tmp.channelIcon];
  if (true === disableColor) {
    if (null != style) {
      items.push(style);
    }
    if (null != IconComponent) {
      let obj = { size: "sm", style: null, color: null };
      obj[1] = tmp.redesignedChannelIcon;
      let str = "status-positive";
      if (!isChannelLive) {
        let str2 = "icon-muted";
        if (!tmp2) {
          if (tmp3) {
            let str3 = "interactive-text-active";
          } else {
            str3 = "channel-icon";
          }
          str2 = str3;
        }
        str = str2;
      }
      obj[2] = str;
      let tmp12Result = callback(IconComponent, obj);
      const tmp12 = callback;
    } else {
      obj = { disableColor: null, size: null, style: null, source: null };
      obj[0] = disableColor;
      obj[1] = Button.Icon.Sizes.CUSTOM;
      obj[2] = items;
      obj[3] = source;
      tmp12Result = callback(Button.Icon, obj);
    }
    return tmp12Result;
  } else {
    if (tmp2) {
      let channelIconUnread = tmp.channelIconMuted;
    } else {
      if (!tmp3) {
        if (!tmp4) {
          channelIconUnread = tmp.channelIconNormal;
        }
      }
      channelIconUnread = tmp.channelIconUnread;
    }
    items.push(channelIconUnread);
  }
};
export const useChannelNameTextProps = function useChannelNameTextProps(channelMode) {
  if (channelMode !== createCacheKey.UNREAD_IMPORTANT) {
    return { variant: "text-md/semibold", color: "redesign-channel-name-text" };
  }
};
export const getChannelSubtitleTextProps = function getChannelSubtitleTextProps(channelMode) {
  if (channelMode !== createCacheKey.UNREAD_IMPORTANT) {
    if (channelMode !== tmp.RELEVANT) {
      if (channelMode !== tmp.SELECTED) {
        const MUTED = tmp.MUTED;
        let obj = { variant: null, color: "text-muted" };
        obj[0] = closure_5;
      }
      return obj;
    }
  }
  obj = { variant: closure_5, color: "redesign-channel-name-text" };
};
export const BaseChannelName = function BaseChannelName(mode) {
  mode = mode.mode;
  ({ name, subtitle, textStyle } = mode);
  const tmp = callback2(mode);
  let obj = { style: tmp.channelNameContainer, children: null };
  if (mode !== createCacheKey.UNREAD_IMPORTANT) {
    if (mode !== tmp6.RELEVANT) {
      if (mode === tmp6.UNREAD_LESS_IMPORTANT) {
        obj = { variant: "text-md/medium", color: "redesign-channel-name-muted-text" };
      } else if (mode === tmp6.MUTED) {
        obj = { variant: "text-md/medium", color: "text-muted" };
      } else {
        obj = mode === tmp6.SELECTED ? { variant: "text-md/medium", color: "redesign-channel-name-text" } : { variant: "text-md/medium", color: "redesign-channel-name-muted-text" };
      }
    }
    obj = { experimental_useNativeText: true };
    const merged = Object.assign(obj);
    obj.lineClamp = 1;
    const items = [tmp.channelName, textStyle];
    obj.style = items;
    obj.children = name;
    const items1 = [tmp4(tmp5, obj), ];
    obj1 = { mode: null, subtitle: null };
    obj1[0] = mode;
    obj1[1] = subtitle;
    items1[1] = tmp4(BaseChannelSubtitle, obj1);
    obj[1] = items1;
    return closure_9(View, obj);
  }
  obj = { variant: "text-md/semibold", color: "redesign-channel-name-text" };
};