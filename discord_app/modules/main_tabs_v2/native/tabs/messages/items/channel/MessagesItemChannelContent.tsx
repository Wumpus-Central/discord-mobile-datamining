// discord_app/modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelContent.tsx
import SnowflakeUtilsDefault from "../../../../../../../utils/SnowflakeUtils.tsx";
import react_native from "../../../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../../../design/void/native.tsx";
import _modDef4467 from "../../../../../../../../_runtime/metro/04467__.js";
import useThemeDefault from "../../../../../../../hooks/useTheme.tsx";
import useChannelNameDefault from "../../../../../../channel/useChannelName.tsx";
import ReadStateConstants from "../../../../../../read_states/ReadStateConstants.tsx";
import AssetRegistryDefault from "../../../../../../../../_runtime/06464_AssetRegistry.js";
import isChangelogChannelDefault from "../../../../../../changelog/utils/isChangelogChannel.tsx";
import AssetRegistryDefault2 from "../../../../../../../../_runtime/07600_AssetRegistry.js";
import BotTagDefault from "../../../../../../applications/native/BotTag.tsx";
import GuildTagDefault from "../../../../../../guild_tag/native/GuildTag.tsx";
import ActivityStatusDefault from "../../../../../../activity_status/native/ActivityStatus.tsx";
import UsernameWithEffectsDefault from "../../../../../../display_name_styles/native/UsernameWithEffects.tsx";
import AssetRegistryDefault3 from "../../../../../../../../_runtime/10706_AssetRegistry.js";
import AssetRegistryDefault4 from "../../../../../../../../_runtime/11078_AssetRegistry.js";
import useMessagePreviewsDefault from "../../../../../useMessagePreviews.tsx";
import usePrivateChannelWaveDefault from "../../../../../../channel/usePrivateChannelWave.native.tsx";
import MessagesItemChannelWaveDefault from "MessagesItemChannelWave.tsx";
import react from "../../../../../../../../_runtime/00019_react.js";
import ReadStateStore from "../../../../../../../stores/ReadStateStore.tsx";
import Fragment from "../../../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../../_runtime/metro/00002__.js";

let channel;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  content: { flex: 1 },
  channelIcon: { alignSelf: "center" },
  channelNameAndAccessories: { flexDirection: "row", alignItems: "center", width: "100%" },
  channelIcons: { flexDirection: "row", alignItems: "center" },
  channelAccessoriesContainer: obj2,
  channelAccessories: obj3,
  channelNameAndBadge: obj4,
  botTag: obj5,
  contentPadded: obj6,
};
obj2 = { flexDirection: "row", justifyContent: "flex-end", marginLeft: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = {
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  borderRadius: nativeDefault.radii.xs,
  paddingHorizontal: nativeDefault.space.PX_4,
  paddingVertical: 1,
};
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, flex: 1, minWidth: 0 };
obj5 = { marginRight: nativeDefault.space.PX_4 };
obj6 = { paddingRight: nativeDefault.space.PX_40 };
let closure_9 = createStyles(obj);
createStyles = createStyles_mod;
let closure_10 = createStyles.createStyles((arg0, arg1, arg2) => {
  let MOBILE_TEXT_HEADING_PRIMARY;
  let tmp6;
  const tmp = arg2;
  if (tmp) {
    MOBILE_TEXT_HEADING_PRIMARY = nativeDefault.colors.TEXT_MUTED;
    tmp6 = importDefault;
  } else {
    const tmp2 = arg0;
    if (!tmp2) {
      const tmp3 = arg1;
      if (!tmp3) {
        MOBILE_TEXT_HEADING_PRIMARY = nativeDefault.colors.MESSAGES_ITEM_CHANNEL_TEXT_DEFAULT;
        tmp6 = importDefault;
      }
    }
    MOBILE_TEXT_HEADING_PRIMARY = nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
    tmp6 = importDefault;
  }
  const obj = {
    channelText: { color: MOBILE_TEXT_HEADING_PRIMARY },
    channelName: { flexShrink: 1 },
    timestamp: { color: tmp6(587).colors.TEXT_SUBTLE },
  };
  ({ color: tmp6(587).colors.TEXT_SUBTLE });
  return obj;
});
createStyles = createStyles_mod;
let closure_11 = createStyles.createStyles((arg0) => {
  let colors;
  let colors2;
  let colors3;
  const obj = {
    channelIcon: { marginRight: nativeDefault.space.PX_4 },
    channelMutedIcon: { tintColor: arg0 ? colors.ICON_SUBTLE : colors.ICON_MUTED },
    channelFavoriteIcon: { tintColor: arg0 ? colors2.ICON_SUBTLE : colors2.ICON_MUTED },
    channelIgnoredIcon: { tintColor: arg0 ? colors3.ICON_SUBTLE : colors3.ICON_MUTED },
  };
  ({ marginRight: nativeDefault.space.PX_4 });
  colors = nativeDefault.colors;
  colors2 = nativeDefault.colors;
  colors3 = nativeDefault.colors;
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (selected) => {
      let blocked;
      let favorite;
      let ignored;
      let items;
      let items1;
      let items2;
      let items3;
      let muted;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(12);
      ({ muted, favorite, ignored, blocked } = selected);
      const tmp4 = closure_11(selected.selected);
      if (blocked) {
        if (cResult[0] === tmp4.channelIcon) {
          let tmp18;
          if (cResult[1] === tmp4.channelMutedIcon) {
            tmp18 = cResult[2];
          }
          tmp5 = tmp18;
        }
        const obj2 = { source: AssetRegistryDefault2, size: native.Icon.Sizes.EXTRA_SMALL, style: items };
        const Icon4 = native.Icon;
        items = [,];
        ({ channelIcon: arr4[0], channelMutedIcon: arr4[1] } = tmp4);
        const tmp21 = metroRequire(Icon4, obj2);
        cResult[0] = tmp4.channelIcon;
        cResult[1] = tmp4.channelMutedIcon;
        cResult[2] = tmp21;
        tmp18 = tmp21;
      } else if (ignored) {
        if (cResult[3] === tmp4.channelIcon) {
          let tmp14;
          if (cResult[4] === tmp4.channelIgnoredIcon) {
            tmp14 = cResult[5];
          }
          tmp5 = tmp14;
        }
        const obj3 = { source: AssetRegistryDefault, size: native.Icon.Sizes.EXTRA_SMALL, style: items1 };
        const Icon3 = native.Icon;
        items1 = [,];
        ({ channelIcon: arr3[0], channelIgnoredIcon: arr3[1] } = tmp4);
        const tmp17 = metroRequire(Icon3, obj3);
        cResult[3] = tmp4.channelIcon;
        cResult[4] = tmp4.channelIgnoredIcon;
        cResult[5] = tmp17;
        tmp14 = tmp17;
      } else if (muted) {
        if (cResult[6] === tmp4.channelIcon) {
          let tmp10;
          if (cResult[7] === tmp4.channelMutedIcon) {
            tmp10 = cResult[8];
          }
          tmp5 = tmp10;
        }
        const obj4 = { source: AssetRegistryDefault4, size: native.Icon.Sizes.EXTRA_SMALL, style: items2 };
        const Icon2 = native.Icon;
        items2 = [,];
        ({ channelIcon: arr2[0], channelMutedIcon: arr2[1] } = tmp4);
        const tmp13 = metroRequire(Icon2, obj4);
        cResult[6] = tmp4.channelIcon;
        cResult[7] = tmp4.channelMutedIcon;
        cResult[8] = tmp13;
        tmp10 = tmp13;
      } else {
        tmp5 = null;
        if (favorite) {
          if (cResult[9] === tmp4.channelFavoriteIcon) {
            let tmp6;
            if (cResult[10] === tmp4.channelIcon) {
              tmp6 = cResult[11];
            }
            tmp5 = tmp6;
          }
          const obj5 = { source: AssetRegistryDefault3, size: native.Icon.Sizes.EXTRA_SMALL, style: items3 };
          const Icon = native.Icon;
          items3 = [,];
          ({ channelIcon: arr[0], channelFavoriteIcon: arr[1] } = tmp4);
          const tmp9 = metroRequire(Icon, obj5);
          cResult[9] = tmp4.channelFavoriteIcon;
          cResult[10] = tmp4.channelIcon;
          cResult[11] = tmp9;
          tmp6 = tmp9;
        }
      }
      return tmp5;
    }
  : (selected) => {
      let blocked;
      let favorite;
      let ignored;
      let items;
      let items1;
      let items2;
      let items3;
      let muted;
      let tmp2;
      ({ muted, favorite, ignored, blocked } = selected);
      const tmp = closure_11(selected.selected);
      if (blocked) {
        const obj2 = { source: AssetRegistryDefault2, size: native.Icon.Sizes.EXTRA_SMALL, style: items };
        const Icon4 = native.Icon;
        items = [,];
        ({ channelIcon: arr4[0], channelMutedIcon: arr4[1] } = tmp);
        tmp2 = metroRequire(Icon4, obj2);
      } else if (ignored) {
        const obj3 = { source: AssetRegistryDefault, size: native.Icon.Sizes.EXTRA_SMALL, style: items1 };
        const Icon3 = native.Icon;
        items1 = [,];
        ({ channelIcon: arr3[0], channelIgnoredIcon: arr3[1] } = tmp);
        tmp2 = metroRequire(Icon3, obj3);
      } else if (muted) {
        const obj4 = { source: AssetRegistryDefault4, size: native.Icon.Sizes.EXTRA_SMALL, style: items2 };
        const Icon2 = native.Icon;
        items2 = [,];
        ({ channelIcon: arr2[0], channelMutedIcon: arr2[1] } = tmp);
        tmp2 = metroRequire(Icon2, obj4);
      } else {
        tmp2 = null;
        if (favorite) {
          const obj = { source: AssetRegistryDefault3, size: native.Icon.Sizes.EXTRA_SMALL, style: items3 };
          const Icon = native.Icon;
          items3 = [,];
          ({ channelIcon: arr[0], channelFavoriteIcon: arr[1] } = tmp);
          tmp2 = metroRequire(Icon, obj);
        }
      }
      return tmp2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let blocked;
        let channelSelected;
        let favorite;
        let hasActivity;
        let hasNameplate;
        let hasUnreadMessages;
        let ignored;
        let muted;
        let tmp13;
        const obj = channel(576);
        const cResult = obj.c(104);
        channel = channel.channel;
        ({ channelSelected, favorite, muted, ignored, blocked, hasActivity, hasUnreadMessages, hasNameplate } =
          channel);
        const resolvedUnreadSetting = channel.resolvedUnreadSetting;
        const tmp5 = useThemeDefault();
        if (cResult[0] !== tmp5) {
          const tmpResult = channel(4593);
          cResult[0] = tmp5;
          cResult[1] = tmpResult.isThemeLight(tmp5);
          const isThemeLightResult = tmpResult.isThemeLight(tmp5);
        }
        const tmp10 = (muted || ignored || blocked) && !channelSelected;
        const tmp8 = hasUnreadMessages && resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES;
        closure_9();
        closure_10(channelSelected, tmp8, tmp10);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ReadStateStore];
          cResult[2] = items;
          tmp13 = items;
        } else {
          tmp13 = cResult[2];
        }
        if (cResult[3] !== channel.id) {
          class D {
            constructor() {
              return closure_4.lastMessageId(channel.id);
            }
          }
          cResult[3] = channel.id;
          cResult[4] = D;
        } else {
          class D {
            constructor() {
              return closure_4.lastMessageId(channel.id);
            }
          }
        }
        const tmpResult2 = channel(504);
        const stateFromStores = tmpResult2.useStateFromStores(tmp13, D);
        if (cResult[5] !== hasUnreadMessages) {
          class D {
            constructor() {
              return closure_4.lastMessageId(channel.id);
            }
          }
          tmp18[0] = hasUnreadMessages;
          cResult[5] = hasUnreadMessages;
          cResult[6] = tmp18;
        } else {
          class D {
            constructor() {
              return closure_4.lastMessageId(channel.id);
            }
          }
        }
        const tmp19 = useMessagePreviewsDefault(channel, tmp18);
        if (cResult[7] === channel.id) {
          class D {
            constructor() {
              return closure_4.lastMessageId(channel.id);
            }
          }
        }
        let tmp20 = null != tmp19;
        if (tmp20) {
          class D {
            constructor() {
              return closure_4.lastMessageId(channel.id);
            }
          }
          tmp20 = obj4.diff(tmp19.timestamp, "hours") < 1 || !hasActivity || hasUnreadMessages;
          obj4.diff(tmp19.timestamp, "hours") < 1 || !hasActivity || hasUnreadMessages;
        }
        if (tmp20) {
          class D {
            constructor() {
              return closure_4.lastMessageId(channel.id);
            }
          }
        }
        cResult[7] = channel.id;
        cResult[8] = hasActivity;
        cResult[9] = hasUnreadMessages;
        cResult[10] = tmp19;
        cResult[11] = tmp20;
      }
    : (channel) => {
        let EffectDisplayType;
        let blocked;
        let channelSelected;
        let favorite;
        let guild_id;
        let hasActivity;
        let hasNameplate;
        let hasUnreadMessages;
        let ignored;
        let intl;
        let items1;
        let items6;
        let items7;
        let muted;
        let obj15;
        let obj17;
        let resolvedUnreadSetting;
        let str7;
        let tmp22Result7;
        let tmpResult4;
        channel = channel.channel;
        ({ channelSelected, muted, ignored, blocked, hasUnreadMessages, hasNameplate } = channel);
        ({ favorite, hasActivity, resolvedUnreadSetting } = channel);
        let tmp5 = hasUnreadMessages;
        const obj = channel(4593);
        const isThemeLightResult = obj.isThemeLight(useThemeDefault());
        if (hasUnreadMessages) {
          tmp5 = resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES;
        }
        const tmp8 = closure_9();
        const tmp9 = closure_10(channelSelected, tmp5, (muted || ignored || blocked) && !channelSelected);
        const items = [ReadStateStore];
        const tmpResult = channel(504);
        const stateFromStores = tmpResult.useStateFromStores(items, () => ReadStateStore.lastMessageId(channel.id));
        const tmp11 = useMessagePreviewsDefault(channel, { unread: hasUnreadMessages });
        let tmp12 = null != tmp11;
        if (tmp12) {
          const obj3 = _modDef4467();
          tmp12 = obj3.diff(tmp11.timestamp, "hours") < 1 || !hasActivity || hasUnreadMessages;
          obj3.diff(tmp11.timestamp, "hours") < 1 || !hasActivity || hasUnreadMessages;
        }
        if (tmp12) {
          tmp12 = !isChangelogChannelDefault(channel.id);
        }
        const useRelativeTimestamp = channel(16002).useRelativeTimestamp;
        channel(16002);
        let id = stateFromStores;
        const extractTimestamp = SnowflakeUtilsDefault.extractTimestamp;
        SnowflakeUtilsDefault;
        if (stateFromStores == null) {
          id = channel.id;
        }
        const obj2 = { timestamp: extractTimestamp(id) };
        const relativeTimestamp = useRelativeTimestamp(obj2);
        const tmp17 =
          channel.isPrivate() &&
          !channel.isMultiUserDM() &&
          null != channel.recipients &&
          channel.recipients.length > 0;
        const tmp18 = useChannelNameDefault(channel);
        const tmp19 = usePrivateChannelWaveDefault(channel, stateFromStores);
        const waveShouldShow = tmp19.waveShouldShow;
        const obj4 = {
          variant: tmpResult4.useToken(nativeDefault.modules.mobile.MESSAGES_ITEM_CHANNEL_NAME_TEXT_STYLE),
          style: items1,
          lineClamp: 1,
          ellipsizeMode: "tail",
        };
        const wavePressed = tmp19.wavePressed;
        items1 = [,];
        ({ channelText: arr2[0], channelName: arr2[1] } = tmp9);
        const obj5 = { style: tmp8.content, children: null };
        const obj6 = { style: tmp8.channelNameAndAccessories, children: null };
        const obj7 = { style: tmp8.channelNameAndBadge, children: null };
        tmpResult4 = channel(4586);
        if (channel.isDM()) {
          if (null != channel.recipients) {
            let tmp25Result;
            let tmp22;
            if (channel.recipients.length > 0) {
              const obj8 = {
                userId: channel.recipients[0],
                userName: tmp18,
                effectDisplayType: channelSelected ? EffectDisplayType.STATIC : EffectDisplayType.PLAIN,
              };
              const tmp3Result4 = UsernameWithEffectsDefault;
              EffectDisplayType = tmp(10647).EffectDisplayType;
              const merged = Object.assign(obj4);
              tmp25Result = closure_6(tmp3Result4, obj8);
              tmp22 = closure_6;
            }
            const items2 = [tmp25Result, ,];
            let tmp22Result = null;
            if (tmp17) {
              const obj9 = { userId: channel.recipients[0], disabledTooltip: true };
              tmp22Result = tmp22(GuildTagDefault, obj9);
            }
            items2[1] = tmp22Result;
            let tmp22Result5 = null;
            if (channel.isSystemDM()) {
              const obj10 = { style: tmp8.botTag, type: BotTagDefault.Types.SYSTEM_DM, verified: true };
              const tmp3Result5 = BotTagDefault;
              tmp22Result5 = tmp22(tmp3Result5, obj10);
            }
            items2[2] = tmp22Result5;
            obj7.children = items2;
            const items3 = [closure_7(View, obj7)];
            const items4 = [tmp8.channelAccessoriesContainer];
            let num4 = 0;
            if (hasNameplate) {
              num4 = 0;
              if (!waveShouldShow) {
                num4 = 40;
              }
            }
            const obj12 = { minWidth: num4 };
            items4[1] = obj12;
            const items5 = [tmp8.channelAccessories, ,];
            let obj13;
            const obj11 = { style: items4, children: closure_7(View, obj15) };
            if (waveShouldShow) {
              obj13 = { paddingVertical: 0 };
            }
            items5[1] = obj13;
            let tmp33;
            if (hasNameplate) {
              let combined;
              if (isThemeLightResult) {
                let num6 = 0.3;
                if (channelSelected) {
                  num6 = 0.6;
                }
                const _HermesInternal2 = HermesInternal;
                combined = "rgba(255, 255, 255, " + num6 + ")";
              } else {
                let num5 = 0.25;
                if (channelSelected) {
                  num5 = 0.7;
                }
                const _HermesInternal = HermesInternal;
                combined = "rgba(0, 0, 0, " + num5 + ")";
              }
              tmp33 = { backgroundColor: combined };
              const obj14 = { backgroundColor: combined };
            }
            obj15 = { style: items5, children: items6 };
            items5[2] = tmp33;
            const obj16 = { style: tmp8.channelIcons, children: tmp22(closure_12, obj17) };
            obj17 = { muted, favorite, ignored, blocked, selected: channelSelected };
            items6 = [tmp22(View, obj16)];
            let tmp22Result6 = !waveShouldShow;
            if (tmp22Result6) {
              const obj18 = { style: items7, variant: "text-xs/medium", lineClamp: 1, children: relativeTimestamp };
              items7 = [,];
              ({ channelText: arr8[0], timestamp: arr8[1] } = tmp9);
              tmp22Result6 = tmp22(tmp(4892).Text, obj18);
            }
            items6[1] = tmp22Result6;
            items3[1] = tmp22(View, obj11);
            obj6.children = items3;
            const items8 = [closure_7(View, obj6)];
            let contentPadded;
            if (hasNameplate) {
              if (!waveShouldShow) {
                contentPadded = tmp8.contentPadded;
              }
            }
            const obj19 = { style: contentPadded, children: tmp22Result7 };
            if (tmp12) {
              let str6 = "text-muted";
              const obj20 = {
                message: tmp11,
                channel,
                color: str7,
                layout: channel(7525).ChannelListLayoutTypes.COZY_DRAWER_SMOL,
                muted,
              };
              str7 = "text-muted";
              const ChannelRowPreview = tmp(12503).ChannelRowPreview;
              if (!((muted || ignored || blocked) && !channelSelected)) {
                if (channelSelected) {
                  str6 = "mobile-text-heading-primary";
                }
                str7 = str6;
              }
              tmp22Result7 = tmp22(ChannelRowPreview, obj20);
            } else if (channel.isDM()) {
              const obj21 = { textStyle: tmp9.channelText, userId: channel.getRecipientId(), guildId: guild_id };
              guild_id = undefined;
              const tmp3Result6 = ActivityStatusDefault;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              tmp22Result7 = tmp22(tmp3Result6, obj21);
            } else {
              tmp22Result7 = null;
              if (isChangelogChannelDefault(channel.id)) {
                const obj22 = {
                  variant: "text-xs/medium",
                  style: tmp9.channelText,
                  lineClamp: 1,
                  children: intl.string(channel(1126).t.FL5T01),
                };
                const Text2 = tmp(4892).Text;
                intl = tmp(1126).intl;
                tmp22Result7 = tmp22(Text2, obj22);
              }
            }
            items8[1] = tmp22(View, obj19);
            obj5.children = items8;
            const items9 = [closure_7(View, obj5)];
            let tmp22Result8 = null;
            if (waveShouldShow) {
              const obj23 = { wavePressed, hasNameplate };
              tmp22Result8 = tmp22(MessagesItemChannelWaveDefault, obj23);
            }
            const obj24 = { children: items9 };
            items9[1] = tmp22Result8;
            return closure_7(closure_8, obj24);
          }
        }
        tmp22 = closure_6;
        const obj25 = { children: tmp18 };
        const Text = tmp(4892).Text;
        const merged1 = Object.assign(obj4);
        tmp25Result = closure_6(Text, obj25);
      },
);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelContent.tsx",
);

export default memoResult;
