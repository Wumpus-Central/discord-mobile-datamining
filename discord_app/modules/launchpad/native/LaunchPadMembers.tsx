// discord_app/modules/launchpad/native/LaunchPadMembers.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import intl2 from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import GuildChannelUserListDefault from "../../main_tabs_v2/native/shared_components/user_list/GuildChannelUserList.tsx";
import PrivateChannelUserListDefault from "../../main_tabs_v2/native/shared_components/user_list/PrivateChannelUserList.tsx";
import ThreadChannelUserListDefault from "../../main_tabs_v2/native/shared_components/user_list/ThreadChannelUserList.tsx";
import react from "../../../../_runtime/00019_react.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let channel, currentlySelectedChannelId;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({
  wrapper: { minHeight: 16 },
  listStyle: { flex: 0 },
  emptyWrapper: { padding: 20 },
  emptyText: { textAlign: "center" },
});
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let emptyText;
        let emptyWrapper;
        let tmp5;
        let tmp6;
        const obj = react2;
        const cResult = obj.c(28);
        const tmp4 = closure_7();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [SelectedChannelStore, ChannelStore];
          const fn = function y() {
            currentlySelectedChannelId = currentlySelectedChannelId.getCurrentlySelectedChannelId();
            channel = channel.getChannel(currentlySelectedChannelId);
            if (null != currentlySelectedChannelId) {
              if (null != channel) {
                if (channel.isPrivate()) {
                  return { channelId: currentlySelectedChannelId, type: "private" };
                } else {
                  let obj3;
                  const guild_id = channel.guild_id;
                  if (channel.isThread()) {
                    obj3 = { channelId: currentlySelectedChannelId, guildId: guild_id, type: "thread" };
                    const obj2 = { channelId: currentlySelectedChannelId, guildId: guild_id, type: "thread" };
                  } else {
                    obj3 = { channelId: currentlySelectedChannelId, guildId: guild_id, type: "guild" };
                  }
                  return obj3;
                }
              }
            }
            return { channelId: "unicodeVersion", type: false };
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp5 = items;
          tmp6 = fn;
        } else {
          [tmp5, tmp6] = cResult;
        }
        const tmpResult = useStateFromStores;
        const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp5, tmp6);
        if ("private" === stateFromStoresObject.type) {
          if (cResult[2] === stateFromStoresObject.channelId) {
            let tmp35;
            if (cResult[3] === tmp4.listStyle) {
              tmp35 = cResult[4];
            }
            if (cResult[5] === tmp4.wrapper) {
              let tmp39;
              if (cResult[6] === tmp35) {
                tmp39 = cResult[7];
              }
              return tmp39;
            }
            const tmp42 = <View style={tmp4.wrapper}>{tmp35}</View>;
            cResult[5] = tmp4.wrapper;
            cResult[6] = tmp35;
            cResult[7] = tmp42;
            tmp39 = tmp42;
          }
          const tmp38 = jsx(
            PrivateChannelUserListDefault,
            {
              channelId: stateFromStoresObject.channelId,
              listStyleOverride: tmp4.listStyle,
              disableBottomSafeZone: true,
              insetEnd: 20,
            },
            stateFromStoresObject.channelId,
          );
          cResult[2] = stateFromStoresObject.channelId;
          cResult[3] = tmp4.listStyle;
          cResult[4] = tmp38;
          tmp35 = tmp38;
        } else if ("thread" === stateFromStoresObject.type) {
          if (cResult[8] === stateFromStoresObject.channelId) {
            if (cResult[9] === stateFromStoresObject.guildId) {
              let tmp27;
              if (cResult[10] === tmp4.listStyle) {
                tmp27 = cResult[11];
              }
              if (cResult[12] === tmp4.wrapper) {
                let tmp31;
                if (cResult[13] === tmp27) {
                  tmp31 = cResult[14];
                }
                return tmp31;
              }
              const tmp34 = <View style={tmp4.wrapper}>{tmp27}</View>;
              cResult[12] = tmp4.wrapper;
              cResult[13] = tmp27;
              cResult[14] = tmp34;
              tmp31 = tmp34;
            }
          }
          ({ channelId: obj7.channelId, guildId: obj7.guildId } = stateFromStoresObject);
          const tmp30 = jsx(
            ThreadChannelUserListDefault,
            {
              channelId: null,
              guildId: null,
              listStyleOverride: tmp4.listStyle,
              disableBottomSafeZone: true,
              insetEnd: 20,
            },
            stateFromStoresObject.channelId,
          );
          cResult[8] = stateFromStoresObject.channelId;
          cResult[9] = stateFromStoresObject.guildId;
          cResult[10] = tmp4.listStyle;
          cResult[11] = tmp30;
          tmp27 = tmp30;
        } else if ("guild" === stateFromStoresObject.type) {
          if (cResult[15] === stateFromStoresObject.channelId) {
            if (cResult[16] === stateFromStoresObject.guildId) {
              let tmp19;
              if (cResult[17] === tmp4.listStyle) {
                tmp19 = cResult[18];
              }
              if (cResult[19] === tmp4.wrapper) {
                let tmp23;
                if (cResult[20] === tmp19) {
                  tmp23 = cResult[21];
                }
                return tmp23;
              }
              const tmp26 = <View style={tmp4.wrapper}>{tmp19}</View>;
              cResult[19] = tmp4.wrapper;
              cResult[20] = tmp19;
              cResult[21] = tmp26;
              tmp23 = tmp26;
            }
          }
          ({ channelId: obj5.channelId, guildId: obj5.guildId } = stateFromStoresObject);
          const tmp22 = jsx(
            GuildChannelUserListDefault,
            {
              channelId: null,
              guildId: null,
              listStyleOverride: tmp4.listStyle,
              disableBottomSafeZone: true,
              insetEnd: 20,
            },
            stateFromStoresObject.channelId,
          );
          cResult[15] = stateFromStoresObject.channelId;
          cResult[16] = stateFromStoresObject.guildId;
          cResult[17] = tmp4.listStyle;
          cResult[18] = tmp22;
          tmp19 = tmp22;
        } else {
          let tmp10;
          let tmp12;
          const _Symbol = Symbol;
          ({ emptyWrapper, emptyText } = tmp4);
          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = intl2.intl;
            const stringResult = intl.string(intl2.t["+7wtJq"]);
            cResult[22] = stringResult;
            tmp10 = stringResult;
          } else {
            tmp10 = cResult[22];
          }
          if (cResult[23] !== tmp4.emptyText) {
            const tmp14 = jsx(Text_Text.Text, { style: emptyText, variant: "text-md/semibold", children: tmp10 });
            cResult[23] = tmp4.emptyText;
            cResult[24] = tmp14;
            tmp12 = tmp14;
          } else {
            tmp12 = cResult[24];
          }
          if (cResult[25] === tmp4.emptyWrapper) {
            let tmp15;
            if (cResult[26] === tmp12) {
              tmp15 = cResult[27];
            }
            return tmp15;
          }
          const tmp18 = <View style={emptyWrapper}>{tmp12}</View>;
          cResult[25] = tmp4.emptyWrapper;
          cResult[26] = tmp12;
          cResult[27] = tmp18;
          tmp15 = tmp18;
        }
      }
    : () => {
        let intl;
        let tmp8;
        const tmp = closure_7();
        const obj = useStateFromStores;
        const items = [SelectedChannelStore, ChannelStore];
        const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
          currentlySelectedChannelId = currentlySelectedChannelId.getCurrentlySelectedChannelId();
          channel = channel.getChannel(currentlySelectedChannelId);
          if (null != currentlySelectedChannelId) {
            if (null != channel) {
              if (channel.isPrivate()) {
                return { channelId: currentlySelectedChannelId, type: "private" };
              } else {
                let obj3;
                const guild_id = channel.guild_id;
                if (channel.isThread()) {
                  obj3 = { channelId: currentlySelectedChannelId, guildId: guild_id, type: "thread" };
                  const obj2 = { channelId: currentlySelectedChannelId, guildId: guild_id, type: "thread" };
                } else {
                  obj3 = { channelId: currentlySelectedChannelId, guildId: guild_id, type: "guild" };
                }
                return obj3;
              }
            }
          }
          return { channelId: "unicodeVersion", type: false };
        });
        if ("private" === stateFromStoresObject.type) {
          tmp8 = <View style={tmp.wrapper}>{null}</View>;
        } else if ("thread" === stateFromStoresObject.type) {
          ({ channelId: obj5.channelId, guildId: obj5.guildId } = stateFromStoresObject);
          tmp8 = <View style={tmp.wrapper}>{null}</View>;
        } else if ("guild" === stateFromStoresObject.type) {
          ({ channelId: obj3.channelId, guildId: obj3.guildId } = stateFromStoresObject);
          tmp8 = <View style={tmp.wrapper}>{null}</View>;
        } else {
          ({ style: tmp.emptyText, variant: "text-md/semibold", children: intl.string(intl2.t["+7wtJq"]) });
          const Text = Text_Text.Text;
          intl = intl2.intl;
          tmp8 = <View style={tmp.emptyWrapper}>{null}</View>;
        }
        return tmp8;
      },
);
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadMembers.tsx");

export default memoResult;
