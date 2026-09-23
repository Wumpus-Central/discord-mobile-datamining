// discord_app/modules/guild_sidebar/native/BaseChannelItem.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import utils_PlatformUtils from "../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
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
          obj.variant = closure_5;
        }
        tmp4Result = null;
        if (null != subtitle) {
          tmp5 = closure_0;
          tmp6 = closure_2;
          tmp4 = jsx;
          obj3 = closure_0(closure_2[8]);
          isAndroidResult = obj3.isAndroid();
          tmp8 = !isAndroidResult;
          if (!isAndroidResult) {
            tmp8 = typeof subtitle === "string";
          }
          obj1 = { experimental_useNativeText: null, lineClamp: 1 };
          obj1.experimental_useNativeText = tmp8;
          tmp9 = obj1;
          tmp10 = obj;
          merged = Object.assign(obj);
          obj1.children = subtitle;
          tmp4Result = tmp4(closure_0(closure_2[7]).Text, obj1);
        }
        return tmp4Result;
      }
    }
    obj5 = { variant: closure_5, color: "redesign-channel-name-text" };
    obj = obj5;
    return;
  }
}
const View = fn(17).View;
const RedesignChannelListConstants = fn(10459);
({ CHANNEL_SUBTITLE_TEXT_VARIANT: hasOwnProperty, CHANNEL_TITLE_LINE_HEIGHT: metroRequire } =
  RedesignChannelListConstants);
const UnreadSetting = fn(5009).UnreadSetting;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4827);
let closure_10 = createStyles.createStyles((arg0) => {
  const obj = {
    rowPaddingNoIcon: { paddingHorizontal: 6 },
    rowSelected: null,
    unreadIndicator: null,
    channelIcon: null,
    redesignedChannelIcon: null,
    channelIconNormal: null,
    channelIconUnread: null,
    channelIconMuted: null,
    channel: null,
    channelNameContainer: null,
    channelName: null,
  };
  obj2 = {
    borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS,
    backgroundColor: nativeDefault.colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED,
  };
  obj.rowSelected = obj2;
  obj.unreadIndicator = { left: -nativeDefault.space.PX_8 };
  let num = 1;
  let num2 = 1;
  if (arg0 === obj2.MUTED) {
    num2 = 0.5;
  }
  obj.channelIcon = { width: 16, height: 16, marginRight: 8, opacity: num2 };
  let num3 = num;
  if (arg0 === obj2.MUTED) {
    num3 = 0.5;
  }
  obj.redesignedChannelIcon = { marginRight: 8, opacity: num3 };
  const obj3 = { left: -nativeDefault.space.PX_8 };
  obj.channelIconNormal = { tintColor: nativeDefault.colors.CHANNEL_ICON };
  const obj4 = { tintColor: nativeDefault.colors.CHANNEL_ICON };
  obj.channelIconUnread = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
  const obj5 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
  obj.channelIconMuted = { tintColor: nativeDefault.colors.ICON_MUTED };
  obj.channel = {
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  };
  obj.channelNameContainer = { flex: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "center" };
  const obj7 = { flexGrow: 1, textAlign: "left", lineHeight, opacity: null };
  if (arg0 === obj2.MUTED) {
    num = 0.5;
  }
  obj7.opacity = num;
  obj.channelName = obj7;
  return obj;
});
let obj2 = {
  SELECTED: "Selected",
  LOCKED: "Locked",
  MUTED: "Muted",
  RELEVANT: "Relevant",
  UNREAD_LESS_IMPORTANT: "UnreadLessImportant",
  UNREAD_IMPORTANT: "UnreadImportant",
  DEFAULT: "Default",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/BaseChannelItem.tsx");

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
  const merged = Object.assign(
    mode,
    Object.assign({
      icon: 0,
      name: 0,
      mode: 0,
      hideIcon: 0,
      disableHighlightOnPress: 0,
      channelInfo: 0,
      children: 0,
      unread: 0,
    }),
  );
  const tmp2 = closure_10(mode);
  dependencyMap = tmp2;
  let items = [hideIcon, mode, tmp2];
  const obj = {
    style: noop.useMemo(() => {
      const items = [channel.channel, ,];
      let rowPaddingNoIcon = hideIcon;
      if (hideIcon) {
        rowPaddingNoIcon = channel.rowPaddingNoIcon;
      }
      items[1] = rowPaddingNoIcon;
      items[2] = mode === obj2.SELECTED && channel.rowSelected;
      return items;
    }, items),
    children: null,
  };
  if (hideIcon) {
    const items1 = [tmp5, , ,];
    let tmp14 = !hideIcon;
    if (!hideIcon) {
      tmp14 = icon;
    }
    items1[1] = tmp14;
    items1[2] = name;
    items1[3] = channelInfo;
    obj.children = items1;
    if (flag) {
      let AnimatedPressableHighlight = hideIcon(12720);
    } else {
      AnimatedPressableHighlight = mode(9260).AnimatedPressableHighlight;
    }
    obj2 = {};
    const merged1 = Object.assign(merged);
    const items2 = [closure_9(tmp4, obj), children];
    obj2.children = items2;
    return closure_9(AnimatedPressableHighlight, obj2);
  } else {
    const obj3 = { style: tmp2.unreadIndicator, unread, resolvedUnreadSetting: null };
    if (mode === obj2.UNREAD_LESS_IMPORTANT) {
      let ALL_MESSAGES = UnreadSetting.ONLY_MENTIONS;
    } else {
      ALL_MESSAGES = UnreadSetting.ALL_MESSAGES;
    }
    obj3.resolvedUnreadSetting = ALL_MESSAGES;
    closure_8(hideIcon(10507), obj3);
    const tmp9 = hideIcon(10507);
  }
}
export const ChannelModes = obj2;
export { BaseChannelSubtitle };
export const BaseChannelIcon = function BaseChannelIcon(arg0) {
  ({ disableColor, mode, IconComponent, style } = arg0);
  ({ source, isChannelLive } = arg0);
  const tmp = closure_10(mode);
  const items = [tmp.channelIcon];
  if (true === disableColor) {
    if (null != style) {
      items.push(style);
    }
    if (null != IconComponent) {
      obj2 = { size: "sm", style: tmp.redesignedChannelIcon, color: null };
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
      obj2.color = str;
      let tmp12Result = React6(IconComponent, obj2);
    } else {
      const obj = { disableColor, size: native.Icon.Sizes.CUSTOM, style: items, source };
      tmp12Result = React6(native.Icon, obj);
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
  tmp4 = mode === obj2.SELECTED;
};
export const useChannelNameTextProps = function useChannelNameTextProps(channelMode) {
  if (channelMode !== obj2.UNREAD_IMPORTANT) {
    return { variant: "text-md/semibold", color: "redesign-channel-name-text" };
  }
};
export const getChannelSubtitleTextProps = function getChannelSubtitleTextProps(channelMode) {
  if (channelMode !== obj2.UNREAD_IMPORTANT) {
    if (channelMode !== tmp.RELEVANT) {
      if (channelMode !== tmp.SELECTED) {
        const MUTED = tmp.MUTED;
        let obj = { variant, color: "text-muted" };
      }
      return obj;
    }
  }
  obj2 = { variant, color: "redesign-channel-name-text" };
  obj = obj2;
};
export const BaseChannelName = function BaseChannelName(mode) {
  mode = mode.mode;
  ({ name, subtitle, textStyle } = mode);
  const tmp = closure_10(mode);
  const obj = { style: tmp.channelNameContainer, children: null };
  if (mode !== obj2.UNREAD_IMPORTANT) {
    if (mode !== tmp6.RELEVANT) {
      if (mode === tmp6.UNREAD_LESS_IMPORTANT) {
        obj2 = { variant: "text-md/medium", color: "redesign-channel-name-muted-text" };
      } else if (mode === tmp6.MUTED) {
        obj2 = { variant: "text-md/medium", color: "text-muted" };
      } else {
        obj2 =
          mode === tmp6.SELECTED
            ? { variant: "text-md/medium", color: "redesign-channel-name-text" }
            : { variant: "text-md/medium", color: "redesign-channel-name-muted-text" };
      }
    }
    const obj3 = { experimental_useNativeText: true };
    const merged = Object.assign(obj2);
    obj3.lineClamp = 1;
    const items = [tmp.channelName, textStyle];
    obj3.style = items;
    obj3.children = name;
    const items1 = [React6(tmp5, obj3)];
    const obj4 = { mode, subtitle };
    items1[1] = React6(BaseChannelSubtitle, obj4);
    obj.children = items1;
    return React7(View, obj);
  }
  obj2 = { variant: "text-md/semibold", color: "redesign-channel-name-text" };
};
