// discord_app/modules/main_tabs_v2/native/shared_components/user_list/ChannelRow.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4467 from "../../../../../../_runtime/metro/04467__.js";
import DateUtils from "../../../../../utils/DateUtils.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import useChannelName from "../../../../channel/useChannelName.tsx";
import TextIcon2 from "../../../../../design/components/Icon/native/redesign/generated/TextIcon.tsx";
import ForumIcon from "../../../../../design/components/Icon/native/redesign/generated/ForumIcon.tsx";
import openChannelLongPressActionSheet from "../../../../channel/native/openChannelLongPressActionSheet.tsx";
import GuildIconWithChannelType from "../../../../guild/native/GuildIconWithChannelType.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import ReadStateStore from "../../../../../stores/ReadStateStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

const require = globalThis.__r;
const useChannelNameDefault = useChannelName;

require = fn;
let closure_3 = ["channel", "mode", "selected", "disabled", "onPress", "onLongPress", "trailing", "subLabel", "label"];
const View = fn(17).View;
const UserRowModes = fn(10605).UserRowModes;
const ReadStateTypes = fn(5078).ReadStateTypes;
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4896);
let obj = {
  guildIcon: { flexShrink: 0, flexGrow: 0 },
  subLabel: { display: "flex", flexDirection: "row", alignItems: "center" },
  subLabelIcon: { width: 12, height: 12, marginRight: 2 },
  subLabelSeparator: { marginHorizontal: nativeDefault.space.PX_4 },
  threadName: { flexShrink: 1 },
};
let closure_17 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { marginHorizontal: nativeDefault.space.PX_4 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/ChannelRow.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        const cResult = require("c").c(58);
        if (cResult[0] !== channel) {
          channel = channel.channel;
          _require = channel;
          ({ mode, selected, disabled, onPress } = channel);
          dependencyMap = onPress;
          const onLongPress = channel.onLongPress;
          importDefault = onLongPress;
          ({ trailing, subLabel } = channel);
          closure_3 = subLabel;
          const label = channel.label;
          const tmp15 = _objectWithoutProperties(channel, closure_3);
          cResult[0] = channel;
          cResult[1] = channel;
          cResult[2] = label;
          cResult[3] = onLongPress;
          cResult[4] = onPress;
          cResult[5] = tmp15;
          cResult[6] = subLabel;
          cResult[7] = mode;
          cResult[8] = selected;
          cResult[9] = disabled;
          cResult[10] = trailing;
          class V {
            constructor() {
              if (closure_2 != null) {
                tmp2 = closure_0;
                tmpResult = tmp(closure_0);
              }
              return;
            }
          }
          let NONE = mode;
          const tmp6 = onLongPress;
        } else {
          _require = cResult[1];
          importDefault = cResult[3];
          dependencyMap = cResult[4];
          closure_3 = cResult[6];
          NONE = cResult[7];
        }
        if (undefined === NONE) {
          NONE = UserRowModes.NONE;
        }
        const tmp17 = closure_17();
        _objectWithoutProperties = tmp17;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [GuildStore];
          cResult[11] = items;
          let tmp18 = items;
        } else {
          tmp18 = cResult[11];
        }
        if (cResult[12] !== tmp4.guild_id) {
          class R {
            constructor() {
              return closure_8.getGuild(closure_0.guild_id);
            }
          }
          cResult[12] = tmp4.guild_id;
          cResult[13] = R;
        } else {
          class R {
            constructor() {
              return closure_8.getGuild(closure_0.guild_id);
            }
          }
        }
        let obj = require("c");
        const stateFromStores = require("initialize").useStateFromStores(tmp18, R);
        useChannelNameDefault(tmp4);
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class R {
            constructor() {
              return closure_8.getGuild(closure_0.guild_id);
            }
          }
          let items1 = [stateFromStores2, UserStore, RelationshipStore];
          cResult[14] = items1;
          const tmp23 = items1;
        } else {
          class R {
            constructor() {
              return closure_8.getGuild(closure_0.guild_id);
            }
          }
        }
        if (cResult[15] !== tmp4.parent_id) {
          class R {
            constructor() {
              return closure_8.getGuild(closure_0.guild_id);
            }
          }
          cResult[15] = tmp4.parent_id;
          cResult[16] = tmp27;
        } else {
          class R {
            constructor() {
              return closure_8.getGuild(closure_0.guild_id);
            }
          }
        }
        const tmpResult = require("initialize");
        const stateFromStores1 = require("initialize").useStateFromStores(tmp23, tmp27);
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          class R {
            constructor() {
              return closure_8.getGuild(closure_0.guild_id);
            }
          }
          const items2 = [ReadStateStore];
          cResult[17] = items2;
          const tmp29 = items2;
        } else {
          class R {
            constructor() {
              return closure_8.getGuild(closure_0.guild_id);
            }
          }
        }
        if (cResult[18] !== tmp4.id) {
          class B {
            constructor() {
              return closure_9.lastMessageTimestamp(closure_0.id, ReadStateTypes.CHANNEL);
            }
          }
          cResult[18] = tmp4.id;
          cResult[19] = B;
        } else {
          class B {
            constructor() {
              return closure_9.lastMessageTimestamp(closure_0.id, ReadStateTypes.CHANNEL);
            }
          }
        }
        const tmpResult3 = require("initialize");
        stateFromStores2 = require("initialize").useStateFromStores(tmp29, B);
        if (cResult[20] === tmp4) {
          class B {
            constructor() {
              return closure_9.lastMessageTimestamp(closure_0.id, ReadStateTypes.CHANNEL);
            }
          }
          if (cResult[23] === tmp4) {
            class B {
              constructor() {
                return closure_9.lastMessageTimestamp(closure_0.id, ReadStateTypes.CHANNEL);
              }
            }
            if (cResult[26] === tmp4) {
              class B {
                constructor() {
                  return closure_9.lastMessageTimestamp(closure_0.id, ReadStateTypes.CHANNEL);
                }
              }
            }
            class J {
              constructor() {
                if (null == closure_1) {
                  tmp4 = closure_0;
                  tmp5 = closure_2;
                  obj = closure_0(closure_2[17]);
                  tmp6 = closure_0;
                  result = obj.openChannelLongPressActionSheet(closure_0.id);
                } else {
                  tmp2 = closure_0;
                  tmpResult = tmp(closure_0);
                }
                return;
              }
            }
            if (null != stateFromStores) {
              class B {
                constructor() {
                  return closure_9.lastMessageTimestamp(closure_0.id, ReadStateTypes.CHANNEL);
                }
              }
              let obj2 = { "aria-label": "", style: null, guild: null, channel: null, size: null };
              class J {
                constructor() {
                  if (null == closure_1) {
                    tmp4 = closure_0;
                    tmp5 = closure_2;
                    obj = closure_0(closure_2[17]);
                    tmp6 = closure_0;
                    result = obj.openChannelLongPressActionSheet(closure_0.id);
                  } else {
                    tmp2 = closure_0;
                    tmpResult = tmp(closure_0);
                  }
                  return;
                }
              }
              obj2.guild = stateFromStores;
              obj2.channel = tmp4;
              obj2.size = tmp(10751).GuildIconWithChannelTypeSizes.SMALL_32;
              const tmp34 = closure_14(tmp(10751).GuildIconWithChannelType, obj2);
            }
            cResult[26] = tmp4;
            cResult[27] = stateFromStores;
            cResult[28] = tmp17.guildIcon;
            cResult[29] = tmp34;
          }
          class J {
            constructor() {
              if (null == closure_1) {
                tmp4 = closure_0;
                tmp5 = closure_2;
                obj = closure_0(closure_2[17]);
                tmp6 = closure_0;
                result = obj.openChannelLongPressActionSheet(closure_0.id);
              } else {
                tmp2 = closure_0;
                tmpResult = tmp(closure_0);
              }
              return;
            }
          }
          cResult[23] = tmp4;
          cResult[24] = tmp6;
          cResult[25] = J;
        }
        class V {
          constructor() {
            if (closure_2 != null) {
              tmp2 = closure_0;
              tmpResult = tmp(closure_0);
            }
            return;
          }
        }
        cResult[20] = tmp4;
        cResult[21] = onPress;
        cResult[22] = V;
        const tmpResult4 = require("initialize");
      }
    : (channel) => {
        channel = channel.channel;
        let NONE = channel.mode;
        if (NONE === undefined) {
          NONE = UserRowModes.NONE;
        }
        let flag = channel.selected;
        if (flag === undefined) {
          flag = false;
        }
        let flag2 = channel.disabled;
        if (flag2 === undefined) {
          flag2 = false;
        }
        const onPress = channel.onPress;
        const onLongPress = channel.onLongPress;
        const trailing = channel.trailing;
        const subLabel = channel.subLabel;
        const label = channel.label;
        const merged = Object.assign(
          channel,
          Object.assign({
            channel: 0,
            mode: 0,
            selected: 0,
            disabled: 0,
            onPress: 0,
            onLongPress: 0,
            trailing: 0,
            subLabel: 0,
            label: 0,
          }),
        );
        let stateFromStores;
        let stateFromStores1;
        let stateFromStores2;
        let tmp3 = closure_17();
        closure_7 = tmp3;
        let items = [stateFromStores];
        stateFromStores = channel(onPress[15]).useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
        const tmp7 = flag2(onPress[16])(channel);
        closure_9 = tmp7;
        let obj = channel(onPress[15]);
        let items1 = [closure_7, stateFromStores2, stateFromStores1];
        stateFromStores1 = channel(onPress[15]).useStateFromStores(items1, () => {
          channel = ChannelStore.getChannel(channel.parent_id);
          let channelName = null;
          if (null != channel) {
            const obj = useChannelName;
            channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, false);
          }
          return channelName;
        });
        let obj2 = channel(onPress[15]);
        const items2 = [closure_9];
        stateFromStores2 = channel(onPress[15]).useStateFromStores(items2, () =>
          ReadStateStore.lastMessageTimestamp(channel.id, ReadStateTypes.CHANNEL),
        );
        const items3 = [channel, onPress];
        const items4 = [channel, onLongPress];
        const callback = subLabel.useCallback(() => {
          if (onPress != null) {
            tmp(channel);
          }
        }, items3);
        const items5 = [channel, stateFromStores, tmp3.guildIcon];
        const callback1 = subLabel.useCallback(() => {
          if (null == onLongPress) {
            const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
          } else {
            tmp(channel);
          }
        }, items4);
        const items6 = [tmp7, label];
        const memo = subLabel.useMemo(() => {
          let tmp2 = null;
          if (null != stateFromStores) {
            const obj = {
              "aria-label": "",
              style: closure_7.guildIcon,
              guild: tmp,
              channel,
              size: GuildIconWithChannelType.GuildIconWithChannelTypeSizes.SMALL_32,
            };
            tmp2 = state(GuildIconWithChannelType.GuildIconWithChannelType, obj);
          }
          return tmp2;
        }, items5);
        const items7 = [channel, , , , , , , ,];
        let name;
        const memo1 = subLabel.useMemo(() => {
          let tmp = label;
          if (undefined === label) {
            tmp = closure_9;
          }
          return tmp;
        }, items6);
        if (stateFromStores != null) {
          name = stateFromStores.name;
        }
        items7[1] = name;
        items7[2] = stateFromStores2;
        items7[3] = stateFromStores1;
        ({ subLabel: arr8[4], subLabelIcon: arr8[5], subLabelSeparator: arr8[6], threadName: arr8[7] } = tmp3);
        items7[8] = subLabel;
        const items8 = [trailing, flag2];
        const memo2 = subLabel.useMemo(() => {
          if (undefined !== subLabel) {
            return subLabel;
          } else {
            if (!channel.isThread()) {
              if (!channel.isForumPost()) {
                let name;
                if (stateFromStores != null) {
                  name = stateFromStores.name;
                }
                return name;
              }
            }
            if (channel.isForumPost()) {
              let TextIcon = ForumIcon.ForumIcon;
            } else {
              TextIcon = TextIcon2.TextIcon;
            }
            const obj = { style: closure_7.subLabel, children: null };
            const obj2 = { color: nativeDefault.colors.TEXT_SUBTLE, style: closure_7.subLabelIcon };
            const items = [state(TextIcon, obj2), ,];
            const obj3 = {
              style: closure_7.threadName,
              variant: "text-xs/medium",
              color: "text-subtle",
              lineClamp: 1,
              ellipsizeMode: "tail",
              children: stateFromStores1,
            };
            items[1] = state(Text_Text.Text, obj3);
            let tmp5Result = null;
            if (null != stateFromStores2) {
              const obj4 = { children: null };
              const obj5 = {
                style: closure_7.subLabelSeparator,
                variant: "text-xs/medium",
                color: "text-subtle",
                children: "\u2022",
              };
              const items1 = [state(Text_Text.Text, obj5)];
              const obj6 = {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: DateUtils.calendarFormatCompact(_modDef4467(tmp14)),
              };
              items1[1] = state(Text_Text.Text, obj6);
              obj4.children = items1;
              tmp5Result = value2(closure_2_15, obj4);
            }
            items[2] = tmp5Result;
            obj.children = items;
            return value2(View, obj);
          }
        }, items7);
        const memo3 = subLabel.useMemo(() => {
          let tmp = trailing;
          if (null == trailing) {
            let tmp3;
            if (flag2) {
              tmp3 = null;
            }
            tmp = tmp3;
          }
          return tmp;
        }, items8);
        let obj5 = {};
        let obj3 = channel(onPress[15]);
        const merged1 = Object.assign(merged);
        obj5.disabled = flag2;
        obj5.icon = memo;
        obj5.onPress = callback;
        obj5.onLongPress = callback1;
        obj5.label = closure_14(channel(onPress[21]).Text, {
          lineClamp: 1,
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: memo1,
        });
        obj5.subLabel = memo2;
        if (NONE === UserRowModes.TOGGLE) {
          let obj6 = {};
          const merged2 = Object.assign(obj5);
          obj6.height = "100%";
          obj6.checked = flag;
          let tmp17Result = closure_14(tmp4(tmp5[24]).TableCheckboxRow, obj6);
        } else {
          let obj7 = {};
          const merged3 = Object.assign(obj5);
          obj7.height = "100%";
          obj7.trailing = memo3;
          tmp17Result = closure_14(tmp4(tmp5[25]).TableRow, obj7);
        }
        return tmp17Result;
      },
);
