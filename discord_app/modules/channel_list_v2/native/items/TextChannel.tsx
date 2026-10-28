// discord_app/modules/channel_list_v2/native/items/TextChannel.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import RoutingSourcesDefault from "../../../routing/RoutingSources.tsx";
import transitionToChannel from "../../../routing/transitionToChannel.tsx";
import useChannelRoleSubscriptionStatus from "../../../guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx";
import ChannelActionCreatorsDefault from "../../../../actions/ChannelActionCreators.tsx";
import openChannelLongPressActionSheet from "../../../channel/native/openChannelLongPressActionSheet.tsx";
import preloadChannelAppFrame from "../../../frames/preloadChannelAppFrame.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import GatedChannelStore from "../../../channel/GatedChannelStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";

require = fn;
const View = fn(17).View;
const RedesignChannelListConstants = fn(11992);
({ CHANNEL_MARGIN_VERTICAL: closure_11, CHANNEL_TITLE_LINE_HEIGHT: closure_12 } = RedesignChannelListConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5004);
let closure_15 = createStyles.createStyles((arg0, arg1) => {
  const obj = {
    container: {
      position: "relative",
      marginVertical,
      marginHorizontal: 8,
      borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS,
      flexGrow: 1,
    },
    selected: null,
    selectedBorder: null,
    row: null,
    rowWithSubtitle: null,
    appSoundIcon: null,
    channelLabel: null,
    channelLabelText: null,
  };
  const obj2 = {
    position: "relative",
    marginVertical,
    marginHorizontal: 8,
    borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS,
    flexGrow: 1,
  };
  obj.selected = { backgroundColor: nativeDefault.colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED };
  const rect = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: nativeDefault.modules.mobile.CHANNEL_ITEM_RADIUS,
  };
  obj.selectedBorder = rect;
  obj.row = { padding: 8, flexDirection: "row", alignItems: "center" };
  obj.rowWithSubtitle = { flexGrow: 1, paddingVertical: 6 };
  const obj3 = { backgroundColor: nativeDefault.colors.MOBILE_CHANNEL_ITEM_BACKGROUND_SELECTED };
  obj.appSoundIcon = { marginStart: nativeDefault.space.PX_4 };
  obj.channelLabel = { flexDirection: "column", flex: 1 };
  const obj5 = { textAlign: "left", flex: 1, lineHeight, opacity: null };
  let num = 1;
  if (arg0) {
    num = 1;
    if (!arg1) {
      num = 0.5;
    }
  }
  obj5.opacity = num;
  obj.channelLabelText = obj5;
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/TextChannel.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function TextChannel(channel) {
        const cResult = channel(id[17]).c(72);
        channel = channel.channel;
        ({ muted, selected, subtitle, isSuggestedSection } = channel);
        closure_15(muted, selected);
        id = channel.id;
        const guild_id = channel.guild_id;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [
            ChannelStore,
            GatedChannelStore,
            PermissionStore,
            ReadStateStore,
            UserGuildSettingsStore,
            EmbeddedActivitiesStore,
          ];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === channel) {
          if (cResult[2] === id) {
            let tmp12 = cResult[3];
            let tmp13 = cResult[4];
          }
          const stateFromStoresObject = tmp(tmp2[19]).useStateFromStoresObject(first, tmp12, tmp13);
          ({ hasUnread, mentionCount, isSubscriptionGated, needSubscriptionToAccess, resolvedUnreadSetting } =
            stateFromStoresObject);
          if (cResult[5] === id) {
            if (cResult[8] === id) {
              if (cResult[11] !== id) {
                class F {
                  constructor() {
                    obj = closure_0(closure_2[24]);
                    result = obj.openChannelLongPressActionSheet(id);
                    return;
                  }
                }
                class B {
                  constructor() {
                    tmp = closure_2;
                    obj = closure_0(closure_2[22]);
                    tmp3 = undefined;
                    tmp2 = id;
                    if (isSuggestedSection) {
                      obj1 = { source: null };
                      tmp4 = closure_1;
                      obj1.source = closure_1(tmp[23]).CHANNEL_LIST_SUGGESTED_SECTION;
                      tmp3 = obj1;
                    }
                    transitionToChannelResult = obj.transitionToChannel(tmp2, tmp3);
                    return;
                  }
                }
                cResult[12] = F;
              } else {
                class F {
                  constructor() {
                    obj = closure_0(closure_2[24]);
                    result = obj.openChannelLongPressActionSheet(id);
                    return;
                  }
                }
              }
              class B {
                constructor() {
                  tmp = closure_2;
                  obj = closure_0(closure_2[22]);
                  tmp3 = undefined;
                  tmp2 = id;
                  if (isSuggestedSection) {
                    obj1 = { source: null };
                    tmp4 = closure_1;
                    obj1.source = closure_1(tmp[23]).CHANNEL_LIST_SUGGESTED_SECTION;
                    tmp3 = obj1;
                  }
                  transitionToChannelResult = obj.transitionToChannel(tmp2, tmp3);
                  return;
                }
              }
              if (hasUnread) {
                class F {
                  constructor() {
                    obj = closure_0(closure_2[24]);
                    result = obj.openChannelLongPressActionSheet(id);
                    return;
                  }
                }
              }
              let obj2 = {
                muted,
                selected,
                unread: tmp18,
                resolvedUnreadSetting: null,
                mentionCount: null,
                locked: false,
                channel: null,
              };
              class G {
                constructor() {
                  obj = closure_1(closure_2[20]);
                  preloadResult = obj.preload(guild_id, id);
                  obj2 = closure_0(closure_2[21]);
                  result = obj2.preloadChannelAppFrame(id);
                  return;
                }
              }
              obj2.mentionCount = mentionCount;
              obj2.channel = channel;
              const channelMode = tmp(tmp2[25]).getChannelMode(obj2);
              const tmpResult4 = tmp(tmp2[25]);
              const isActivitiesInTextEnabled = tmp(tmp2[26]).useIsActivitiesInTextEnabled(id);
              const tmpResult5 = tmp(tmp2[26]);
              ({ runningLabel, userMuted } = isSuggestedSection(tmp2[27])(channel));
              if (userMuted) {
                class F {
                  constructor() {
                    obj = closure_0(closure_2[24]);
                    result = obj.openChannelLongPressActionSheet(id);
                    return;
                  }
                }
              } else {
                class F {
                  constructor() {
                    obj = closure_0(closure_2[24]);
                    result = obj.openChannelLongPressActionSheet(id);
                    return;
                  }
                }
                if (tmp23) {
                  class F {
                    constructor() {
                      obj = closure_0(closure_2[24]);
                      result = obj.openChannelLongPressActionSheet(id);
                      return;
                    }
                  }
                }
              }
              if (channel.isRulesChannel) {
                class F {
                  constructor() {
                    obj = closure_0(closure_2[24]);
                    result = obj.openChannelLongPressActionSheet(id);
                    return;
                  }
                }
                let BookCheckIcon = tmp(tmp2[13]).BookCheckIcon;
              } else {
                class F {
                  constructor() {
                    obj = closure_0(closure_2[24]);
                    result = obj.openChannelLongPressActionSheet(id);
                    return;
                  }
                }
                const channelIcon = obj6.getChannelIcon(channel, { isRulesChannel: false });
                class B {
                  constructor() {
                    tmp = closure_2;
                    obj = closure_0(closure_2[22]);
                    tmp3 = undefined;
                    tmp2 = id;
                    if (isSuggestedSection) {
                      obj1 = { source: null };
                      tmp4 = closure_1;
                      obj1.source = closure_1(tmp[23]).CHANNEL_LIST_SUGGESTED_SECTION;
                      tmp3 = obj1;
                    }
                    transitionToChannelResult = obj.transitionToChannel(tmp2, tmp3);
                    return;
                  }
                }
                BookCheckIcon = obj7.getChannelIconComponent(channel, { isRulesChannel: false });
              }
              const tmp22 = isSuggestedSection(tmp2[27])(channel);
              const tmp25 = null != runningLabel;
              const obj3 = { mode: channelMode, source: channelIcon, IconComponent: null, isChannelLive: null };
              class C {
                constructor() {
                  obj = closure_0(closure_2[18]);
                  channelRoleSubscriptionStatus = obj.getChannelRoleSubscriptionStatus(
                    id,
                    closure_7,
                    closure_6,
                    closure_8,
                  );
                  obj1 = {
                    hasUnread: closure_9.hasUnread(id),
                    mentionCount: closure_9.getMentionCount(id),
                    resolvedUnreadSetting: closure_10.resolveUnreadSetting(channel),
                    embeddedActivitiesCount: null,
                    isSubscriptionGated: null,
                    needSubscriptionToAccess: null,
                  };
                  ({ isSubscriptionGated, needSubscriptionToAccess } = channelRoleSubscriptionStatus);
                  tmp2 = channel;
                  num = 0;
                  if (null != channel) {
                    num = 0;
                    if (null != tmp2.id) {
                      str = "";
                      num = 0;
                      if ("" !== tmp2.id) {
                        tmp3 = closure_5;
                        embeddedActivitiesForChannel = closure_5.getEmbeddedActivitiesForChannel(tmp2.id);
                        num2 = undefined;
                        if (embeddedActivitiesForChannel != null) {
                          num2 = embeddedActivitiesForChannel.length;
                        }
                        if (num2 == null) {
                          num2 = 0;
                        }
                        num = num2;
                      }
                    }
                  }
                  obj1.embeddedActivitiesCount = num;
                  obj1.isSubscriptionGated = isSubscriptionGated;
                  obj1.needSubscriptionToAccess = needSubscriptionToAccess;
                  return obj1;
                }
              }
              obj3.isChannelLive = tmp25;
              tmp(tmp2[15]).BaseChannelIcon(obj3);
              isSuggestedSection(tmp2[30])(channel);
              if (isActivitiesInTextEnabled) {
                class F {
                  constructor() {
                    obj = closure_0(closure_2[24]);
                    result = obj.openChannelLongPressActionSheet(id);
                    return;
                  }
                }
              }
              if (cResult[13] === channel) {
                class F {
                  constructor() {
                    obj = closure_0(closure_2[24]);
                    result = obj.openChannelLongPressActionSheet(id);
                    return;
                  }
                }
              }
              const obj4 = {
                channel,
                unread: hasUnread,
                mentionCount,
                embeddedActivitiesCount: 0,
                isSubscriptionGated,
                needSubscriptionToAccess,
              };
              const tmp30 = isSuggestedSection(tmp2[31])(obj4);
              cResult[13] = channel;
              cResult[14] = hasUnread;
              cResult[15] = isSubscriptionGated;
              cResult[16] = mentionCount;
              cResult[17] = needSubscriptionToAccess;
              cResult[18] = 0;
              cResult[19] = tmp30;
              const tmpResult6 = tmp(tmp2[15]);
            }
            class B {
              constructor() {
                tmp = closure_2;
                obj = closure_0(closure_2[22]);
                tmp3 = undefined;
                tmp2 = id;
                if (isSuggestedSection) {
                  obj1 = { source: null };
                  tmp4 = closure_1;
                  obj1.source = closure_1(tmp[23]).CHANNEL_LIST_SUGGESTED_SECTION;
                  tmp3 = obj1;
                }
                transitionToChannelResult = obj.transitionToChannel(tmp2, tmp3);
                return;
              }
            }
            cResult[8] = id;
            cResult[9] = isSuggestedSection;
            cResult[10] = B;
            class G {
              constructor() {
                obj = closure_1(closure_2[20]);
                preloadResult = obj.preload(guild_id, id);
                obj2 = closure_0(closure_2[21]);
                result = obj2.preloadChannelAppFrame(id);
                return;
              }
            }
          }
          class G {
            constructor() {
              obj = closure_1(closure_2[20]);
              preloadResult = obj.preload(guild_id, id);
              obj2 = closure_0(closure_2[21]);
              result = obj2.preloadChannelAppFrame(id);
              return;
            }
          }
          cResult[5] = id;
          cResult[6] = guild_id;
          cResult[7] = G;
          const tmpResult = tmp(tmp2[19]);
        }
        class C {
          constructor() {
            obj = closure_0(closure_2[18]);
            channelRoleSubscriptionStatus = obj.getChannelRoleSubscriptionStatus(id, closure_7, closure_6, closure_8);
            obj1 = {
              hasUnread: closure_9.hasUnread(id),
              mentionCount: closure_9.getMentionCount(id),
              resolvedUnreadSetting: closure_10.resolveUnreadSetting(channel),
              embeddedActivitiesCount: null,
              isSubscriptionGated: null,
              needSubscriptionToAccess: null,
            };
            ({ isSubscriptionGated, needSubscriptionToAccess } = channelRoleSubscriptionStatus);
            tmp2 = channel;
            num = 0;
            if (null != channel) {
              num = 0;
              if (null != tmp2.id) {
                str = "";
                num = 0;
                if ("" !== tmp2.id) {
                  tmp3 = closure_5;
                  embeddedActivitiesForChannel = closure_5.getEmbeddedActivitiesForChannel(tmp2.id);
                  num2 = undefined;
                  if (embeddedActivitiesForChannel != null) {
                    num2 = embeddedActivitiesForChannel.length;
                  }
                  if (num2 == null) {
                    num2 = 0;
                  }
                  num = num2;
                }
              }
            }
            obj1.embeddedActivitiesCount = num;
            obj1.isSubscriptionGated = isSubscriptionGated;
            obj1.needSubscriptionToAccess = needSubscriptionToAccess;
            return obj1;
          }
        }
        const items1 = [channel, id];
        cResult[1] = channel;
        cResult[2] = id;
        cResult[3] = C;
        cResult[4] = items1;
        tmp13 = items1;
        tmp12 = C;
        let obj = channel(id[17]);
      }
    : function TextChannel(channel) {
        channel = channel.channel;
        ({ muted, selected, subtitle, isSuggestedSection } = channel);
        let appSoundIcon = closure_15(muted, selected);
        const id = channel.id;
        const guild_id = channel.guild_id;
        const items = [
          ChannelStore,
          GatedChannelStore,
          PermissionStore,
          ReadStateStore,
          UserGuildSettingsStore,
          EmbeddedActivitiesStore,
        ];
        const items1 = [channel, id];
        const stateFromStoresObject = channel(id[19]).useStateFromStoresObject(
          items,
          () => {
            const channelRoleSubscriptionStatus = useChannelRoleSubscriptionStatus.getChannelRoleSubscriptionStatus(
              id,
              ChannelStore,
              GatedChannelStore,
              PermissionStore,
            );
            const obj2 = {
              hasUnread: ReadStateStore.hasUnread(id),
              mentionCount: ReadStateStore.getMentionCount(id),
              resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel),
              embeddedActivitiesCount: null,
              isSubscriptionGated: null,
              needSubscriptionToAccess: null,
            };
            ({ isSubscriptionGated, needSubscriptionToAccess } = channelRoleSubscriptionStatus);
            let num = 0;
            if (null != channel) {
              num = 0;
              if (null != channel.id) {
                num = 0;
                if ("" !== channel.id) {
                  const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(
                    channel.id,
                  );
                  let num2;
                  if (embeddedActivitiesForChannel != null) {
                    num2 = embeddedActivitiesForChannel.length;
                  }
                  if (num2 == null) {
                    num2 = 0;
                  }
                  num = num2;
                }
              }
            }
            obj2.embeddedActivitiesCount = num;
            obj2.isSubscriptionGated = isSubscriptionGated;
            obj2.needSubscriptionToAccess = needSubscriptionToAccess;
            return obj2;
          },
          items1,
        );
        ({ hasUnread, mentionCount, isSubscriptionGated, needSubscriptionToAccess, resolvedUnreadSetting } =
          stateFromStoresObject);
        const items2 = [id, guild_id];
        const items3 = [id, isSuggestedSection];
        const callback = guild_id.useCallback(() => {
          ChannelActionCreatorsDefault.preload(guild_id, id);
          const result = preloadChannelAppFrame.preloadChannelAppFrame(id);
        }, items2);
        const items4 = [id];
        const callback1 = guild_id.useCallback(() => {
          let tmp3;
          if (isSuggestedSection) {
            const obj2 = { source: RoutingSourcesDefault.CHANNEL_LIST_SUGGESTED_SECTION };
            tmp3 = obj2;
          }
          transitionToChannel.transitionToChannel(id, tmp3);
        }, items3);
        let tmp7 = hasUnread;
        const callback2 = guild_id.useCallback(() => {
          const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(id);
        }, items4);
        if (hasUnread) {
          tmp7 = !muted;
        }
        let obj = channel(id[19]);
        const channelMode = channel(id[25]).getChannelMode({
          muted,
          selected,
          unread: tmp7,
          resolvedUnreadSetting,
          mentionCount,
          locked: false,
          channel,
        });
        const tmpResult = channel(id[25]);
        const isActivitiesInTextEnabled = channel(id[26]).useIsActivitiesInTextEnabled(id);
        const tmpResult8 = channel(id[26]);
        ({ runningLabel, userMuted } = isSuggestedSection(id[27])(channel));
        if (userMuted) {
          let WaveformSlashIcon = tmp(tmp2[28]).WaveformSlashIcon;
        } else {
          WaveformSlashIcon = null;
          if (tmp12) {
            WaveformSlashIcon = tmp(tmp2[29]).WaveformIcon;
          }
        }
        if (channel.isRulesChannel) {
          let channelIcon = isSuggestedSection(tmp2[12]);
          let BookCheckIcon = tmp(tmp2[13]).BookCheckIcon;
        } else {
          channelIcon = tmp(tmp2[14]).getChannelIcon(channel, { isRulesChannel: false });
          const tmpResult9 = tmp(tmp2[14]);
          BookCheckIcon = tmp(tmp2[14]).getChannelIconComponent(channel, { isRulesChannel: false });
          const tmpResult10 = tmp(tmp2[14]);
        }
        const tmp11 = isSuggestedSection(id[27])(channel);
        const tmp14 = null != runningLabel;
        const tmpResult11 = channel(id[15]);
        const BaseChannelIconResult = channel(id[15]).BaseChannelIcon({
          mode: channelMode,
          source: channelIcon,
          IconComponent: BookCheckIcon,
          isChannelLive: tmp14,
        });
        let obj2 = {
          channel,
          unread: hasUnread,
          mentionCount,
          embeddedActivitiesCount: null,
          isSubscriptionGated: null,
          needSubscriptionToAccess: null,
        };
        let num = 0;
        const tmp17 = isSuggestedSection(id[30])(channel);
        if (isActivitiesInTextEnabled) {
          num = stateFromStoresObject.embeddedActivitiesCount;
        }
        obj2.embeddedActivitiesCount = num;
        obj2.isSubscriptionGated = isSubscriptionGated;
        obj2.needSubscriptionToAccess = needSubscriptionToAccess;
        const tmp10Result1Result = isSuggestedSection(id[31])(obj2);
        const obj3 = { experimental_useNativeText: true, lineClamp: 1, style: appSoundIcon.channelLabelText };
        const tmp10Result3 = isSuggestedSection(id[31]);
        const merged = Object.assign(channel(id[15]).useChannelNameTextProps(channelMode));
        obj3.children = tmp17;
        const tmp22 = closure_13(channel(id[32]).Text, obj3);
        const tmpResult12 = channel(id[15]);
        const items5 = [closure_13(isSuggestedSection(id[33]), { unread: tmp7, resolvedUnreadSetting })];
        const obj4 = {
          onPressIn: callback,
          onPress: callback1,
          onLongPress: callback2,
          style: null,
          accessible: true,
          accessibilityRole: "button",
          accessibilityLabel: null,
          accessibilityState: null,
          children: null,
        };
        const items6 = [appSoundIcon.container];
        const tmp10Result4 = isSuggestedSection(id[37]);
        items6[1] = channelMode === channel(id[15]).ChannelModes.SELECTED && appSoundIcon.selected;
        obj4.style = items6;
        let combined = tmp10Result1Result;
        if (null != runningLabel) {
          const _HermesInternal = HermesInternal;
          combined = "" + tmp10Result1Result + ", " + runningLabel;
        }
        obj4.accessibilityLabel = combined;
        obj4.accessibilityState = { selected };
        let tmp20Result = channelMode === tmp(tmp2[15]).ChannelModes.SELECTED;
        if (tmp20Result) {
          const obj5 = { style: appSoundIcon.selectedBorder };
          tmp20Result = closure_13(View, obj5);
        }
        const items7 = [tmp20Result];
        const items8 = [appSoundIcon.row];
        const obj6 = { style: items8, children: null };
        items8[1] = null != subtitle && appSoundIcon.rowWithSubtitle;
        const items9 = [BaseChannelIconResult, , ,];
        let tmp23Result = tmp22;
        if (null != subtitle) {
          const obj7 = { style: appSoundIcon.channelLabel, children: null };
          const items10 = [tmp22];
          const obj8 = { experimental_useNativeText: true, lineClamp: 1 };
          const merged1 = Object.assign(tmp(tmp2[15]).getChannelSubtitleTextProps(channelMode));
          const tmpResult13 = tmp(tmp2[15]);
          obj8.children = tmp(tmp2[34]).getChannelSubtitleData(subtitle).subtitle;
          items10[1] = closure_13(tmp(tmp2[32]).Text, obj8);
          obj7.children = items10;
          tmp23Result = closure_14(View, obj7);
          const tmpResult14 = tmp(tmp2[34]);
        }
        items9[1] = tmp23Result;
        if (null == WaveformSlashIcon) {
          const obj9 = { children: null };
          items9[2] = null;
          const obj10 = {
            channel,
            isChannelSelected: selected,
            muted,
            isSubscriptionGated,
            needSubscriptionToAccess,
            enableActivities: isActivitiesInTextEnabled,
          };
          items9[3] = closure_13(isSuggestedSection(tmp2[35]), obj10);
          obj6.children = items9;
          items7[1] = closure_14(View, obj6);
          obj4.children = items7;
          items5[1] = closure_14(tmp(tmp2[36]).AnimatedPressableHighlight, obj4);
          obj9.children = items5;
          return closure_14(tmp10Result4, obj9);
        } else {
          isSuggestedSection(tmp2[11]).colors;
          const colors = { size: "xs", color: null, style: null };
          colors.color = userMuted ? colors.ICON_MUTED : colors.STATUS_POSITIVE;
          appSoundIcon = appSoundIcon.appSoundIcon;
          colors.style = appSoundIcon;
          closure_13(WaveformSlashIcon, colors);
          const tmp33 = userMuted ? colors.ICON_MUTED : colors.STATUS_POSITIVE;
        }
        const tmp25 = channelMode === channel(id[15]).ChannelModes.SELECTED && appSoundIcon.selected;
        const tmp31 = null != subtitle && appSoundIcon.rowWithSubtitle;
      },
);
