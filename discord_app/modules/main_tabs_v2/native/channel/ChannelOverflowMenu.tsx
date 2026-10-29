// discord_app/modules/main_tabs_v2/native/channel/ChannelOverflowMenu.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import MoreHorizontalIcon from "../../../../design/components/Icon/native/redesign/generated/MoreHorizontalIcon.tsx";
import ContextMenu from "../../../../design/components/ContextMenu/native/ContextMenu.native.tsx";
import IconActionButtonDefault from "../shared_components/IconActionButton.tsx";
import useAppChannelOverflowMenuItemsDefault from "../../../app_channels/native/useAppChannelOverflowMenuItems.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["onPress"];
const ChannelTypes = fn(1084).ChannelTypes;
const jsx = fn(21).jsx;
fn(558);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelOverflowMenuButton(items) {
      const cResult = c.c(3);
      items = items.items;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o(onPress) {
          onPress = onPress.onPress;
          const obj = {};
          const tmp = _objectWithoutProperties(onPress, closure_1_3);
          const merged = Object.assign(tmp);
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
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== items) {
        const obj2 = { items, children: first };
        const tmp7 = jsx(ContextMenu.ContextMenu, { items, children: first });
        cResult[1] = items;
        cResult[2] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[2];
      }
      return tmp5;
    }
  : function ChannelOverflowMenuButton(items) {
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
        },
      });
    };
ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AppChannelOverflowMenu(channel) {
      const cResult = c.c(2);
      const tmp2 = useAppChannelOverflowMenuItemsDefault(channel.channel);
      if (cResult[0] !== tmp2) {
        const obj2 = { items: tmp2 };
        const tmp6 = <closure_7 items={tmp2} />;
        cResult[0] = tmp2;
        cResult[1] = tmp6;
        let tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : function AppChannelOverflowMenu(channel) {
      return <closure_7 items={useAppChannelOverflowMenuItemsDefault(channel.channel)} />;
    };
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useHasChannelOverflowMenu(type, arg1) {
      const cResult = c.c(3);
      if (cResult[0] === type) {
        if (cResult[1] === arg1) {
          let tmp4 = cResult[2];
        }
        let tmp8 = null;
        if (tmp4) {
          tmp8 = type;
        }
        if (tmp4) {
          tmp4 = !tmpResult.useIsConjureChannelCandidate(tmp8, "ChannelOverflowMenu");
        }
        return tmp4;
      }
      let tmp5 = type.type === ChannelTypes.GUILD_APP;
      if (tmp5) {
        let tmp7 = null != type.application_id;
        if (tmp7) {
          tmp7 = "channel-secondary-view-chat" !== arg1;
        }
        tmp5 = tmp7;
      }
      cResult[0] = type;
      cResult[1] = arg1;
      cResult[2] = tmp5;
      tmp4 = tmp5;
    }
  : function useHasChannelOverflowMenu(type, arg1) {
      let tmp = type.type === ChannelTypes.GUILD_APP;
      if (tmp) {
        let tmp3 = null != type.application_id;
        if (tmp3) {
          tmp3 = "channel-secondary-view-chat" !== arg1;
        }
        tmp = tmp3;
      }
      let tmp5 = null;
      if (tmp) {
        tmp5 = type;
      }
      if (tmp) {
        tmp = !obj.useIsConjureChannelCandidate(tmp5, "ChannelOverflowMenu");
      }
      return tmp;
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelOverflowMenu.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelOverflowMenu(channel) {
      const cResult = c.c(2);
      channel = channel.channel;
      if (channel.type !== ChannelTypes.GUILD_APP) {
        return null;
      } else if (cResult[0] !== channel) {
        const obj2 = { channel };
        const tmp5 = <closure_8 channel={channel} />;
        cResult[0] = channel;
        cResult[1] = tmp5;
      }
    }
  : function ChannelOverflowMenu(channel) {
      channel = channel.channel;
      let tmp = null;
      if (channel.type === ChannelTypes.GUILD_APP) {
        const obj = { channel };
        tmp = <closure_8 channel={channel} />;
      }
      return tmp;
    };
export const useHasChannelOverflowMenu = tmp3;
