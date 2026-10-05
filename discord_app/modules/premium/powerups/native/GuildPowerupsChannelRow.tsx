// discord_app/modules/premium/powerups/native/GuildPowerupsChannelRow.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import CircleErrorIcon from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import LayerContext from "../../../../design/components/Layers/native/LayerContext.native.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import openGuildPowerupsModalDefault from "utils/openGuildPowerupsModal.tsx";
import GuildPowerupsNotification from "../constants/GuildPowerupsNotification.tsx";
import useGuildPowerupsCoachmarkDefault from "hooks/useGuildPowerupsCoachmark.tsx";
import SidebarCoachmarkOverlay from "../../../main_tabs_v2/native/panels/SidebarCoachmarkOverlay.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (indicator) => {
      const cResult = c.c(3);
      indicator = indicator.indicator;
      if (null == indicator) {
        return null;
      } else {
        const type = indicator.type;
        if (GuildPowerupsNotification.GuildPowerupNotificationIndicatorType.WARNING === type) {
          const _Symbol = Symbol;
          if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { color: nativeDefault.colors.STATUS_WARNING, size: "sm" };
            const tmp11 = hasOwnProperty(CircleErrorIcon.CircleErrorIcon, obj2);
            cResult[0] = tmp11;
            let first = tmp11;
          } else {
            first = cResult[0];
          }
          return first;
        } else if (GuildPowerupsNotification.GuildPowerupNotificationIndicatorType.UNREAD === type) {
          if (cResult[1] !== indicator.count) {
            const obj3 = { value: indicator.count, isMentionLowImportance: true };
            const tmp6 = hasOwnProperty(native.Badge, obj3);
            cResult[1] = indicator.count;
            cResult[2] = tmp6;
            let tmp4 = tmp6;
          } else {
            tmp4 = cResult[2];
          }
          return tmp4;
        } else {
          return null;
        }
      }
    }
  : (indicator) => {
      indicator = indicator.indicator;
      if (null == indicator) {
        return null;
      } else {
        const type = indicator.type;
        if (GuildPowerupsNotification.GuildPowerupNotificationIndicatorType.WARNING === type) {
          const obj2 = { color: nativeDefault.colors.STATUS_WARNING, size: "sm" };
          return hasOwnProperty(CircleErrorIcon.CircleErrorIcon, obj2);
        } else if (GuildPowerupsNotification.GuildPowerupNotificationIndicatorType.UNREAD === type) {
          const obj = { value: indicator.count, isMentionLowImportance: true };
          return hasOwnProperty(native.Badge, obj);
        } else {
          return null;
        }
      }
    };
const createStyles = fn(4890);
let obj3 = {
  container: {
    marginVertical: fn(11697).CHANNEL_MARGIN_VERTICAL,
    marginHorizontal: 8,
    borderRadius: nativeDefault.radii.md,
  },
};
let closure_8 = createStyles.createStyles(obj3);
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      ({ targetRef, guildId, popout } = arg0);
      useGuildPowerupsCoachmarkDefault(targetRef, guildId, popout);
      return null;
    }
  : (arg0) => {
      ({ targetRef, guildId, popout } = arg0);
      useGuildPowerupsCoachmarkDefault(targetRef, guildId, popout);
      return null;
    };
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(7);
      ({ targetRef, guildId, popout } = arg0);
      const context = noop.useContext(SidebarCoachmarkOverlay.SidebarCoachmarkOverlayContext);
      if (cResult[0] === guildId) {
        if (cResult[1] === popout) {
          if (cResult[2] === targetRef) {
            let tmp5 = cResult[3];
          }
          if (cResult[4] === tmp5) {
            if (cResult[5] === context) {
              let tmp7 = cResult[6];
            }
            return tmp7;
          }
          let tmp9 = tmp5;
          if (null != context) {
            const obj2 = { value: context, children: tmp5 };
            tmp9 = hasOwnProperty(LayerContext.LayerContext.Provider, obj2);
          }
          cResult[4] = tmp5;
          cResult[5] = context;
          cResult[6] = tmp9;
          tmp7 = tmp9;
        }
      }
      const tmp6 = hasOwnProperty(closure_9, { targetRef, guildId, popout });
      cResult[0] = guildId;
      cResult[1] = popout;
      cResult[2] = targetRef;
      cResult[3] = tmp6;
      tmp5 = tmp6;
    }
  : (arg0) => {
      ({ targetRef, guildId, popout } = arg0);
      const context = noop.useContext(SidebarCoachmarkOverlay.SidebarCoachmarkOverlayContext);
      const tmp5 = hasOwnProperty(closure_9, { targetRef, guildId, popout });
      let tmp4Result = tmp5;
      if (null != context) {
        const obj = { value: context, children: tmp5 };
        tmp4Result = hasOwnProperty(LayerContext.LayerContext.Provider, obj);
      }
      return tmp4Result;
    };
ReactCompilerGating = fn(558);
let obj4 = {
  marginVertical: fn(11697).CHANNEL_MARGIN_VERTICAL,
  marginHorizontal: 8,
  borderRadius: nativeDefault.radii.md,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsChannelRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      const cResult = guildId(576).c(26);
      guildId = guildId.guildId;
      const tmp4 = closure_8();
      const ref = noop.useRef(null);
      const tmp7 = dismissNewBadgeIfShown(12150)(guildId);
      let indicator;
      let obj = guildId(576);
      if (tmp7 != null) {
        indicator = tmp7.indicator;
      }
      let tmp10 = null != indicator;
      if (!tmp10) {
        let popout;
        if (tmp7 != null) {
          popout = tmp7.popout;
        }
        tmp10 = null != popout;
      }
      const tmp8 = dismissNewBadgeIfShown(12167);
      ({ showNewBadgeOnRow, dismissNewBadgeIfShown } = dismissNewBadgeIfShown(12167)(guildId, tmp10));
      let showUnread;
      if (tmp7 != null) {
        showUnread = tmp7.showUnread;
      }
      const ChannelModes = tmp(12016).ChannelModes;
      const tmp15 = true === showUnread ? ChannelModes.UNREAD_IMPORTANT : ChannelModes.DEFAULT;
      if (cResult[0] === dismissNewBadgeIfShown) {
        if (cResult[1] === guildId) {
          let tmp16 = cResult[2];
        }
        let popout1;
        if (tmp7 != null) {
          popout1 = tmp7.popout;
        }
        if (cResult[3] === guildId) {
          if (cResult[4] === popout1) {
            let tmp18 = cResult[5];
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(dismissNewBadgeIfShown(2525).yv3DJJ);
            const obj2 = { selected: false };
            cResult[6] = stringResult;
            cResult[7] = obj2;
            let tmp24 = obj2;
            let tmp23 = stringResult;
          } else {
            tmp23 = cResult[6];
            tmp24 = cResult[7];
          }
          const _Symbol2 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult1 = intl2.string(dismissNewBadgeIfShown(2525).yv3DJJ);
            cResult[8] = stringResult1;
            let tmp26 = stringResult1;
          } else {
            tmp26 = cResult[8];
          }
          if (cResult[9] !== tmp15) {
            const obj3 = { name: tmp26, mode: tmp15 };
            const tmp31 = closure_5(tmp(12016).BaseChannelName, obj3);
            const obj4 = { mode: tmp15, IconComponent: tmp(16149).BoostTier2Icon };
            const tmp32 = closure_5(tmp(12016).BaseChannelIcon, obj4);
            cResult[9] = tmp15;
            cResult[10] = tmp31;
            cResult[11] = tmp32;
            let tmp29 = tmp32;
            let tmp28 = tmp31;
          } else {
            tmp28 = cResult[10];
            tmp29 = cResult[11];
          }
          let indicator1;
          if (tmp7 != null) {
            indicator1 = tmp7.indicator;
          }
          if (cResult[12] === indicator1) {
            if (cResult[13] === showNewBadgeOnRow) {
              let tmp34 = cResult[14];
            }
            if (cResult[15] === tmp16) {
              if (cResult[16] === tmp15) {
                if (cResult[17] === tmp14) {
                  if (cResult[18] === tmp4.container) {
                    if (cResult[19] === tmp34) {
                      if (cResult[20] === tmp28) {
                        if (cResult[21] === tmp29) {
                          let tmp40 = cResult[22];
                        }
                        if (cResult[23] === tmp40) {
                          if (cResult[24] === tmp18) {
                            let tmp43 = cResult[25];
                          }
                          return tmp43;
                        }
                        const obj5 = { zIndex: 1, children: null };
                        const obj6 = { ref, collapsable: false, children: null };
                        const items = [tmp18, tmp40];
                        obj6.children = items;
                        obj5.children = closure_6(View, obj6);
                        const tmp47 = closure_5(tmp(6651).LayerScope, obj5);
                        cResult[23] = tmp40;
                        cResult[24] = tmp18;
                        cResult[25] = tmp47;
                        tmp43 = tmp47;
                      }
                    }
                  }
                }
              }
            }
            const obj7 = {
              onPress: tmp16,
              style: tmp4.container,
              accessible: true,
              mode: tmp15,
              unread: tmp14,
              accessibilityLabel: tmp23,
              accessibilityState: tmp24,
              name: tmp28,
              icon: tmp29,
              channelInfo: tmp34,
            };
            const tmp42 = closure_5(dismissNewBadgeIfShown(12016), obj7);
            cResult[15] = tmp16;
            cResult[16] = tmp15;
            cResult[17] = tmp14;
            cResult[18] = tmp4.container;
            cResult[19] = tmp34;
            cResult[20] = tmp28;
            cResult[21] = tmp29;
            cResult[22] = tmp42;
            tmp40 = tmp42;
          }
          if (showNewBadgeOnRow) {
            let tmp35Result = closure_5(tmp(11919).NewBadge, {});
          } else {
            let indicator2;
            if (tmp7 != null) {
              indicator2 = tmp7.indicator;
            }
            const obj8 = { indicator: indicator2 };
            tmp35Result = closure_5(closure_7, obj8);
          }
          let indicator3;
          if (tmp7 != null) {
            indicator3 = tmp7.indicator;
          }
          cResult[12] = indicator3;
          cResult[13] = showNewBadgeOnRow;
          cResult[14] = tmp35Result;
          tmp34 = tmp35Result;
        }
        const obj9 = { targetRef: ref, guildId, popout: popout1 };
        const tmp21 = closure_5(closure_10, obj9);
        cResult[3] = guildId;
        cResult[4] = popout1;
        cResult[5] = tmp21;
        tmp18 = tmp21;
      }
      const fn = function l() {
        dismissNewBadgeIfShown();
        const obj = { guildId, analyticsLocation: AnalyticsLocationDefault.GUILD_POWERUPS_CHANNEL_LIST_ROW };
        openGuildPowerupsModalDefault(obj);
      };
      cResult[0] = dismissNewBadgeIfShown;
      cResult[1] = guildId;
      cResult[2] = fn;
      tmp16 = fn;
      const tmp8Result = dismissNewBadgeIfShown(12167)(guildId, tmp10);
    }
  : (guildId) => {
      guildId = guildId.guildId;
      let dismissNewBadgeIfShown;
      const ref = noop.useRef(null);
      const tmp5 = dismissNewBadgeIfShown(12150)(guildId);
      let indicator;
      const tmp = closure_8();
      if (tmp5 != null) {
        indicator = tmp5.indicator;
      }
      let tmp8 = null != indicator;
      if (!tmp8) {
        let popout;
        if (tmp5 != null) {
          popout = tmp5.popout;
        }
        tmp8 = null != popout;
      }
      const tmp6Result = dismissNewBadgeIfShown(12167)(guildId, tmp8);
      dismissNewBadgeIfShown = tmp6Result.dismissNewBadgeIfShown;
      let showUnread;
      if (tmp5 != null) {
        showUnread = tmp5.showUnread;
      }
      const ChannelModes = guildId(12016).ChannelModes;
      if (true === showUnread) {
        let DEFAULT = ChannelModes.UNREAD_IMPORTANT;
        let tmp14 = tmp13;
      } else {
        DEFAULT = ChannelModes.DEFAULT;
        tmp14 = tmp13;
      }
      const items = [guildId, dismissNewBadgeIfShown];
      const callback = noop.useCallback(() => {
        dismissNewBadgeIfShown();
        const obj = { guildId, analyticsLocation: AnalyticsLocationDefault.GUILD_POWERUPS_CHANNEL_LIST_ROW };
        openGuildPowerupsModalDefault(obj);
      }, items);
      const obj2 = { ref, collapsable: false, children: null };
      const obj3 = { targetRef: ref, guildId, popout: null };
      let popout1;
      if (tmp5 != null) {
        popout1 = tmp5.popout;
      }
      obj3.popout = popout1;
      const items1 = [closure_5(closure_10, obj3)];
      const obj4 = {
        onPress: callback,
        style: tmp.container,
        accessible: true,
        mode: DEFAULT,
        unread: true === showUnread,
        accessibilityLabel: null,
        accessibilityState: null,
        name: null,
        icon: null,
        channelInfo: null,
      };
      const tmp6 = dismissNewBadgeIfShown(12167);
      const intl = tmp14(1126).intl;
      obj4.accessibilityLabel = intl.string(dismissNewBadgeIfShown(2525).yv3DJJ);
      obj4.accessibilityState = { selected: false };
      const obj5 = { name: null, mode: null };
      const intl2 = tmp14(1126).intl;
      obj5.name = intl2.string(dismissNewBadgeIfShown(2525).yv3DJJ);
      obj5.mode = DEFAULT;
      obj4.name = closure_5(tmp14(12016).BaseChannelName, obj5);
      const tmp3Result = dismissNewBadgeIfShown(12016);
      obj4.icon = closure_5(tmp14(12016).BaseChannelIcon, {
        mode: DEFAULT,
        IconComponent: tmp14(16149).BoostTier2Icon,
      });
      if (tmp6Result.showNewBadgeOnRow) {
        let tmp16Result = closure_5(tmp14(11919).NewBadge, {});
      } else {
        let indicator1;
        if (tmp5 != null) {
          indicator1 = tmp5.indicator;
        }
        const obj7 = { indicator: indicator1 };
        tmp16Result = closure_5(closure_7, obj7);
      }
      const obj8 = { zIndex: 1, children: null };
      obj4.channelInfo = tmp16Result;
      items1[1] = closure_5(tmp3Result, obj4);
      obj2.children = items1;
      obj8.children = closure_6(View, obj2);
      return closure_5(tmp14(6651).LayerScope, obj8);
    };
