// discord_app/modules/saved_messages/native/ForLaterCardHeader.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useChannelNameDefault from "../../channel/useChannelName.tsx";
import GuildIconDefault from "../../guild/native/GuildIcon.tsx";
import ChevronSmallRightIcon from "../../../design/components/Icon/native/redesign/generated/ChevronSmallRightIcon.tsx";
import GroupDMAvatarDefault from "../../group_dm/native/GroupDMAvatar.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = {
  cardHeader: { flexDirection: "row", alignItems: "center", gap: 8 },
  dmIcon: obj2,
  channelNameContainer: { flexDirection: "row", alignItems: "center", flexShrink: 1 },
  channelName: { flexShrink: 1 },
  channelTypeIcon: { marginRight: 4 },
  actionsContainer: { marginVertical: -4, marginLeft: "auto" },
};
obj2 = {
  padding: 6,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.sm,
};
let closure_7 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let actions;
      let channel;
      let items;
      let tmp11;
      let tmp5;
      let tmp6;
      const obj = react;
      const cResult = obj.c(14);
      ({ channel, actions } = arg0);
      const tmp4 = closure_7();
      if (cResult[0] !== channel) {
        const obj2 = { channel };
        const tmp9 = hasOwnProperty(closure_8, obj2);
        let tmp7Result = null;
        if (!channel.isPrivate()) {
          tmp7Result = hasOwnProperty(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "xxs" });
        }
        cResult[0] = channel;
        cResult[1] = tmp9;
        cResult[2] = tmp7Result;
        tmp6 = tmp7Result;
        tmp5 = tmp9;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      if (cResult[3] !== channel) {
        const obj3 = { channel };
        const tmp14 = hasOwnProperty(closure_9, obj3);
        cResult[3] = channel;
        cResult[4] = tmp14;
        tmp11 = tmp14;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] === actions) {
        let tmp15;
        if (cResult[6] === tmp4.actionsContainer) {
          tmp15 = cResult[7];
        }
        if (cResult[8] === tmp4.cardHeader) {
          if (cResult[9] === tmp5) {
            if (cResult[10] === tmp6) {
              if (cResult[11] === tmp11) {
                let tmp17;
                if (cResult[12] === tmp15) {
                  tmp17 = cResult[13];
                }
                return tmp17;
              }
            }
          }
        }
        const obj4 = { style: tmp4.cardHeader, children: items };
        items = [tmp5, tmp6, tmp11, tmp15];
        const tmp20 = metroRequire(View, obj4);
        cResult[8] = tmp4.cardHeader;
        cResult[9] = tmp5;
        cResult[10] = tmp6;
        cResult[11] = tmp11;
        cResult[12] = tmp15;
        cResult[13] = tmp20;
        tmp17 = tmp20;
      }
      const obj5 = { style: tmp4.actionsContainer, children: actions };
      const tmp16 = hasOwnProperty(View, obj5);
      cResult[5] = actions;
      cResult[6] = tmp4.actionsContainer;
      cResult[7] = tmp16;
      tmp15 = tmp16;
    }
  : (channel) => {
      let items;
      channel = channel.channel;
      const actions = channel.actions;
      const tmp = closure_7();
      const obj = { style: tmp.cardHeader, children: items };
      items = [hasOwnProperty(closure_8, { channel }), , ,];
      let tmp4Result = null;
      if (!channel.isPrivate()) {
        tmp4Result = hasOwnProperty(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "xxs" });
      }
      items[1] = tmp4Result;
      items[2] = hasOwnProperty(closure_9, { channel });
      const obj2 = { style: tmp.actionsContainer, children: actions };
      items[3] = hasOwnProperty(View, obj2);
      return metroRequire(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let first;
      let tmp13;
      let tmp7;
      const obj = channel(576);
      const cResult = obj.c(10);
      channel = channel.channel;
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.guild_id) {
        const fn = function h() {
          return GuildStore.getGuild(channel.guild_id);
        };
        cResult[1] = channel.guild_id;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = channel(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      if (null != stateFromStores) {
        let tmp22;
        if (cResult[3] !== stateFromStores) {
          const obj2 = { guild: stateFromStores, size: channel(5971).GuildIconSizes.XSMALL };
          const tmp25 = GuildIconDefault;
          const tmp26 = closure_5(tmp25, obj2);
          cResult[3] = stateFromStores;
          cResult[4] = tmp26;
          tmp22 = tmp26;
        } else {
          tmp22 = cResult[4];
        }
        tmp13 = tmp22;
      } else {
        let isGroupDMResult;
        if (channel != null) {
          isGroupDMResult = channel.isGroupDM();
        }
        if (isGroupDMResult) {
          let tmp17;
          if (cResult[5] !== channel) {
            const obj3 = { channel, size: channel(1188).AvatarSizes.XSMALL };
            const tmp20 = GroupDMAvatarDefault;
            const tmp21 = closure_5(tmp20, obj3);
            cResult[5] = channel;
            cResult[6] = tmp21;
            tmp17 = tmp21;
          } else {
            tmp17 = cResult[6];
          }
          tmp13 = tmp17;
        } else {
          let tmp10;
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp12 = closure_5(channel(5855).ChatIcon, { size: "xxs" });
            cResult[7] = tmp12;
            tmp10 = tmp12;
          } else {
            tmp10 = cResult[7];
          }
          if (cResult[8] !== tmp4.dmIcon) {
            const obj4 = { style: tmp4.dmIcon, children: tmp10 };
            const tmp16 = closure_5(View, obj4);
            cResult[8] = tmp4.dmIcon;
            cResult[9] = tmp16;
            tmp13 = tmp16;
          } else {
            tmp13 = cResult[9];
          }
        }
      }
      return tmp13;
    }
  : (channel) => {
      let tmp6Result;
      channel = channel.channel;
      const items = [GuildStore];
      const tmp = closure_7();
      const obj = channel(504);
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
      if (null != stateFromStores) {
        const obj2 = { guild: stateFromStores, size: channel(5971).GuildIconSizes.XSMALL };
        const tmp13 = GuildIconDefault;
        tmp6Result = closure_5(tmp13, obj2);
      } else {
        let isGroupDMResult;
        if (channel != null) {
          isGroupDMResult = channel.isGroupDM();
        }
        if (isGroupDMResult) {
          const obj3 = { channel, size: channel(1188).AvatarSizes.XSMALL };
          const tmp10 = GroupDMAvatarDefault;
          tmp6Result = closure_5(tmp10, obj3);
        } else {
          const obj4 = { style: tmp.dmIcon, children: closure_5(channel(5855).ChatIcon, { size: "xxs" }) };
          tmp6Result = closure_5(View, obj4);
        }
      }
      return tmp6Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let first;
      let items1;
      let tmp7;
      const obj = channel(576);
      const cResult = obj.c(23);
      channel = channel.channel;
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.guild_id) {
        const fn = function u() {
          return GuildStore.getGuild(channel.guild_id);
        };
        cResult[1] = channel.guild_id;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = channel(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      const tmp9 = useChannelNameDefault(channel, false);
      if (cResult[3] === channel) {
        let tmp10;
        if (cResult[4] === stateFromStores) {
          tmp10 = cResult[5];
        }
        if (cResult[6] === tmp10) {
          let tmp12;
          if (cResult[7] === channel) {
            tmp12 = cResult[8];
          }
          if (cResult[9] === channel) {
            let tmp15;
            if (cResult[10] === tmp9) {
              tmp15 = cResult[11];
            }
            if (cResult[12] === tmp10) {
              if (cResult[13] === tmp12) {
                let tmp17;
                if (cResult[14] === tmp4.channelTypeIcon) {
                  tmp17 = cResult[15];
                }
                if (cResult[16] === tmp15) {
                  let tmp20;
                  if (cResult[17] === tmp4.channelName) {
                    tmp20 = cResult[18];
                  }
                  if (cResult[19] === tmp4.channelNameContainer) {
                    if (cResult[20] === tmp17) {
                      let tmp23;
                      if (cResult[21] === tmp20) {
                        tmp23 = cResult[22];
                      }
                      return tmp23;
                    }
                  }
                  const obj2 = { style: tmp4.channelNameContainer, children: items1 };
                  items1 = [tmp17, tmp20];
                  const tmp26 = closure_6(View, obj2);
                  cResult[19] = tmp4.channelNameContainer;
                  cResult[20] = tmp17;
                  cResult[21] = tmp20;
                  cResult[22] = tmp26;
                  tmp23 = tmp26;
                }
                const obj3 = {
                  style: tmp4.channelName,
                  variant: "text-md/semibold",
                  color: "mobile-text-heading-primary",
                  lineClamp: 1,
                  children: tmp15,
                };
                const tmp22 = closure_5(channel(4886).Text, obj3);
                cResult[16] = tmp15;
                cResult[17] = tmp4.channelName;
                cResult[18] = tmp22;
                tmp20 = tmp22;
              }
            }
            let tmp18 = null;
            if (!tmp12) {
              const obj4 = { style: tmp4.channelTypeIcon, size: "xxs" };
              tmp18 = closure_5(tmp10, obj4);
            }
            cResult[12] = tmp10;
            cResult[13] = tmp12;
            cResult[14] = tmp4.channelTypeIcon;
            cResult[15] = tmp18;
            tmp17 = tmp18;
          }
          let formatToPlainStringResult = tmp9;
          if (channel.isDM()) {
            const intl = tmp(1126).intl;
            const obj5 = { username: tmp9 };
            formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t.smD7XV, obj5);
          }
          cResult[9] = channel;
          cResult[10] = tmp9;
          cResult[11] = formatToPlainStringResult;
          tmp15 = formatToPlainStringResult;
        }
        const isPrivateResult = channel.isPrivate() || null == tmp10;
        cResult[6] = tmp10;
        cResult[7] = channel;
        cResult[8] = isPrivateResult;
        tmp12 = isPrivateResult;
      }
      const tmpResult2 = channel(5812);
      const channelIconComponentWithGuild = tmpResult2.getChannelIconComponentWithGuild(channel, stateFromStores);
      cResult[3] = channel;
      cResult[4] = stateFromStores;
      cResult[5] = channelIconComponentWithGuild;
      tmp10 = channelIconComponentWithGuild;
    }
  : (channel) => {
      let items1;
      channel = channel.channel;
      const tmp = closure_7();
      const items = [GuildStore];
      const obj = channel(504);
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
      const tmp5 = useChannelNameDefault(channel, false);
      const obj2 = channel(5812);
      const channelIconComponentWithGuild = obj2.getChannelIconComponentWithGuild(channel, stateFromStores);
      let formatToPlainStringResult = tmp5;
      const isPrivateResult = channel.isPrivate() || null == channelIconComponentWithGuild;
      if (channel.isDM()) {
        const intl = tmp2(1126).intl;
        const obj3 = { username: tmp5 };
        formatToPlainStringResult = intl.formatToPlainString(tmp2(1126).t.smD7XV, obj3);
      }
      let tmp12 = null;
      const obj4 = { style: tmp.channelNameContainer, children: items1 };
      if (!isPrivateResult) {
        const obj5 = { style: tmp.channelTypeIcon, size: "xxs" };
        tmp12 = closure_5(channelIconComponentWithGuild, obj5);
      }
      items1 = [tmp12];
      const obj6 = {
        style: tmp.channelName,
        variant: "text-md/semibold",
        color: "mobile-text-heading-primary",
        lineClamp: 1,
        children: formatToPlainStringResult,
      };
      items1[1] = closure_5(channel(4886).Text, obj6);
      return closure_6(View, obj4);
    };
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterCardHeader.tsx");

export const ForLaterCardHeader = tmp3;
