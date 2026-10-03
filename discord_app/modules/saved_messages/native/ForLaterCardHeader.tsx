// discord_app/modules/saved_messages/native/ForLaterCardHeader.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useChannelNameDefault from "../../channel/useChannelName.tsx";
import GuildIconDefault from "../../guild/native/GuildIcon.tsx";
import ChevronSmallRightIcon from "../../../design/components/Icon/native/redesign/generated/ChevronSmallRightIcon.tsx";
import GroupDMAvatarDefault from "../../group_dm/native/GroupDMAvatar.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import "ReactCompilerGating";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = {
  cardHeader: { flexDirection: "row", alignItems: "center", gap: 8 },
  dmIcon: {
    padding: 6,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    borderRadius: nativeDefault.radii.sm,
  },
  channelNameContainer: { flexDirection: "row", alignItems: "center", flexShrink: 1 },
  channelName: { flexShrink: 1 },
  channelTypeIcon: { marginRight: 4 },
  actionsContainer: { marginVertical: -4, marginLeft: "auto" },
};
let closure_7 = createStyles.createStyles(obj);
let obj2 = {
  padding: 6,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.sm,
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let XSMALL = dependencyMap;
      const cResult = channel(576).c(10);
      channel = channel.channel;
      const tmp3 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.guild_id) {
        const fn = function h() {
          return GuildStore.getGuild(channel.guild_id);
        };
        cResult[1] = channel.guild_id;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = channel(576);
      const stateFromStores = channel(504).useStateFromStores(first, tmp6);
      if (null != stateFromStores) {
        if (cResult[3] !== stateFromStores) {
          const obj2 = { guild: stateFromStores, size: null };
          XSMALL = tmp(5971).GuildIconSizes.XSMALL;
          obj2.size = XSMALL;
          const tmp26 = closure_5(GuildIconDefault, obj2);
          cResult[3] = stateFromStores;
          cResult[4] = tmp26;
        }
      } else {
        let isGroupDMResult;
        if (channel != null) {
          isGroupDMResult = channel.isGroupDM();
        }
        if (isGroupDMResult) {
          if (cResult[5] !== channel) {
            const obj3 = { channel, size: tmp(1188).AvatarSizes.XSMALL };
            const tmp20 = closure_5(GroupDMAvatarDefault, obj3);
            cResult[5] = channel;
            cResult[6] = tmp20;
          }
        } else {
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp11 = closure_5(tmp(5855).ChatIcon, { size: "xxs" });
            cResult[7] = tmp11;
            let tmp9 = tmp11;
          } else {
            tmp9 = cResult[7];
          }
          if (cResult[8] !== tmp3.dmIcon) {
            const obj4 = { style: tmp3.dmIcon, children: tmp9 };
            const tmp15 = closure_5(View, obj4);
            cResult[8] = tmp3.dmIcon;
            cResult[9] = tmp15;
            let tmp12 = tmp15;
          } else {
            tmp12 = cResult[9];
          }
          return tmp12;
        }
      }
      const tmpResult = channel(504);
    }
  : (channel) => {
      channel = channel.channel;
      const tmp = closure_7();
      const items = [GuildStore];
      const stateFromStores = channel(504).useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
      if (null != stateFromStores) {
        const obj2 = { guild: stateFromStores, size: tmp2(5971).GuildIconSizes.XSMALL };
        let tmp6Result = closure_5(GuildIconDefault, obj2);
      } else {
        let isGroupDMResult;
        if (channel != null) {
          isGroupDMResult = channel.isGroupDM();
        }
        if (isGroupDMResult) {
          const obj3 = { channel, size: tmp2(1188).AvatarSizes.XSMALL };
          tmp6Result = closure_5(GroupDMAvatarDefault, obj3);
        } else {
          const obj4 = { style: tmp.dmIcon, children: closure_5(tmp2(5855).ChatIcon, { size: "xxs" }) };
          tmp6Result = closure_5(View, obj4);
        }
      }
      return tmp6Result;
    };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      const cResult = channel(576).c(23);
      channel = channel.channel;
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.guild_id) {
        const fn = function u() {
          return GuildStore.getGuild(channel.guild_id);
        };
        cResult[1] = channel.guild_id;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = channel(576);
      const stateFromStores = channel(504).useStateFromStores(first, tmp7);
      const tmp9 = useChannelNameDefault(channel, false);
      if (cResult[3] === channel) {
        if (cResult[4] === stateFromStores) {
          let tmp10 = cResult[5];
        }
        if (cResult[6] === tmp10) {
          if (cResult[7] === channel) {
            let tmp12 = cResult[8];
          }
          if (cResult[9] === channel) {
            if (cResult[10] === tmp9) {
              let tmp15 = cResult[11];
            }
            if (cResult[12] === tmp10) {
              if (cResult[13] === tmp12) {
                if (cResult[14] === tmp4.channelTypeIcon) {
                  let tmp17 = cResult[15];
                }
                if (cResult[16] === tmp15) {
                  if (cResult[17] === tmp4.channelName) {
                    let tmp20 = cResult[18];
                  }
                  if (cResult[19] === tmp4.channelNameContainer) {
                    if (cResult[20] === tmp17) {
                      if (cResult[21] === tmp20) {
                        let tmp23 = cResult[22];
                      }
                      return tmp23;
                    }
                  }
                  const obj2 = { style: tmp4.channelNameContainer, children: null };
                  const items1 = [tmp17, tmp20];
                  obj2.children = items1;
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
                const tmp22 = closure_5(tmp(4886).Text, obj3);
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
        let isPrivateResult = channel.isPrivate();
        if (!isPrivateResult) {
          isPrivateResult = null == tmp10;
        }
        cResult[6] = tmp10;
        cResult[7] = channel;
        cResult[8] = isPrivateResult;
        tmp12 = isPrivateResult;
      }
      const tmpResult = channel(504);
      const channelIconComponentWithGuild = channel(5812).getChannelIconComponentWithGuild(channel, stateFromStores);
      cResult[3] = channel;
      cResult[4] = stateFromStores;
      cResult[5] = channelIconComponentWithGuild;
      tmp10 = channelIconComponentWithGuild;
      const tmpResult2 = channel(5812);
    }
  : (channel) => {
      channel = channel.channel;
      const tmp = closure_7();
      const items = [GuildStore];
      const stateFromStores = channel(504).useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
      const tmp5 = useChannelNameDefault(channel, false);
      const obj = channel(504);
      const channelIconComponentWithGuild = channel(5812).getChannelIconComponentWithGuild(channel, stateFromStores);
      let isPrivateResult = channel.isPrivate();
      if (!isPrivateResult) {
        isPrivateResult = null == channelIconComponentWithGuild;
      }
      let formatToPlainStringResult = tmp5;
      if (channel.isDM()) {
        const intl = tmp2(1126).intl;
        const obj3 = { username: tmp5 };
        formatToPlainStringResult = intl.formatToPlainString(tmp2(1126).t.smD7XV, obj3);
      }
      const obj4 = { style: tmp.channelNameContainer, children: null };
      let tmp12 = null;
      if (!isPrivateResult) {
        const obj5 = { style: tmp.channelTypeIcon, size: "xxs" };
        tmp12 = closure_5(channelIconComponentWithGuild, obj5);
      }
      const items1 = [
        tmp12,
        closure_5(channel(4886).Text, {
          style: tmp.channelName,
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          lineClamp: 1,
          children: formatToPlainStringResult,
        }),
      ];
      obj4.children = items1;
      return closure_6(View, obj4);
    };
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterCardHeader.tsx");

export const ForLaterCardHeader = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(14);
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
        let tmp6 = tmp7Result;
        let tmp5 = tmp9;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      if (cResult[3] !== channel) {
        const obj3 = { channel };
        const tmp14 = hasOwnProperty(closure_9, obj3);
        cResult[3] = channel;
        cResult[4] = tmp14;
        let tmp11 = tmp14;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] === actions) {
        if (cResult[6] === tmp4.actionsContainer) {
          let tmp15 = cResult[7];
        }
        if (cResult[8] === tmp4.cardHeader) {
          if (cResult[9] === tmp5) {
            if (cResult[10] === tmp6) {
              if (cResult[11] === tmp11) {
                if (cResult[12] === tmp15) {
                  let tmp17 = cResult[13];
                }
                return tmp17;
              }
            }
          }
        }
        const obj4 = { style: tmp4.cardHeader, children: null };
        const items = [tmp5, tmp6, tmp11, tmp15];
        obj4.children = items;
        const tmp20 = timestampProducer(View, obj4);
        cResult[8] = tmp4.cardHeader;
        cResult[9] = tmp5;
        cResult[10] = tmp6;
        cResult[11] = tmp11;
        cResult[12] = tmp15;
        cResult[13] = tmp20;
        tmp17 = tmp20;
      }
      const tmp16 = hasOwnProperty(View, { style: tmp4.actionsContainer, children: actions });
      cResult[5] = actions;
      cResult[6] = tmp4.actionsContainer;
      cResult[7] = tmp16;
      tmp15 = tmp16;
      const obj5 = { style: tmp4.actionsContainer, children: actions };
    }
  : (channel) => {
      channel = channel.channel;
      const tmp = closure_7();
      const obj = { style: tmp.cardHeader, children: null };
      const items = [hasOwnProperty(closure_8, { channel }), , ,];
      let tmp4Result = null;
      if (!channel.isPrivate()) {
        tmp4Result = hasOwnProperty(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "xxs" });
      }
      items[1] = tmp4Result;
      items[2] = hasOwnProperty(closure_9, { channel });
      items[3] = hasOwnProperty(View, { style: tmp.actionsContainer, children: channel.actions });
      obj.children = items;
      return timestampProducer(View, obj);
    };
