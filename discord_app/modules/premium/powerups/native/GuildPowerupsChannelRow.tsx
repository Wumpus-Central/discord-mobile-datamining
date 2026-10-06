// discord_app/modules/premium/powerups/native/GuildPowerupsChannelRow.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import CircleErrorIcon2 from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import LayerContext from "../../../../design/components/Layers/native/LayerContext.native.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import RedesignChannelListConstants from "../../../channel_list_v2/native/RedesignChannelListConstants.tsx";
import openGuildPowerupsModalDefault from "utils/openGuildPowerupsModal.tsx";
import GuildPowerupsNotification from "../constants/GuildPowerupsNotification.tsx";
import useGuildPowerupsCoachmarkDefault from "hooks/useGuildPowerupsCoachmark.tsx";
import SidebarCoachmarkOverlay from "../../../main_tabs_v2/native/panels/SidebarCoachmarkOverlay.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (indicator) => {
      const obj = react2;
      const cResult = obj.c(3);
      indicator = indicator.indicator;
      if (null == indicator) {
        return null;
      } else {
        const type = indicator.type;
        if (GuildPowerupsNotification.GuildPowerupNotificationIndicatorType.WARNING === type) {
          let first;
          const _Symbol = Symbol;
          if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { color: nativeDefault.colors.STATUS_WARNING, size: "sm" };
            const CircleErrorIcon = CircleErrorIcon2.CircleErrorIcon;
            const tmp11 = hasOwnProperty(CircleErrorIcon, obj2);
            cResult[0] = tmp11;
            first = tmp11;
          } else {
            first = cResult[0];
          }
          return first;
        } else if (GuildPowerupsNotification.GuildPowerupNotificationIndicatorType.UNREAD === type) {
          let tmp4;
          if (cResult[1] !== indicator.count) {
            const obj3 = { value: indicator.count, isMentionLowImportance: true };
            const tmp6 = hasOwnProperty(native.Badge, obj3);
            cResult[1] = indicator.count;
            cResult[2] = tmp6;
            tmp4 = tmp6;
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
          const CircleErrorIcon = CircleErrorIcon2.CircleErrorIcon;
          return hasOwnProperty(CircleErrorIcon, obj2);
        } else if (GuildPowerupsNotification.GuildPowerupNotificationIndicatorType.UNREAD === type) {
          const obj = { value: indicator.count, isMentionLowImportance: true };
          return hasOwnProperty(native.Badge, obj);
        } else {
          return null;
        }
      }
    };
let obj = { container: obj2 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let closure_8 = createStyles.createStyles(obj);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let guildId;
      let popout;
      let targetRef;
      ({ targetRef, guildId, popout } = arg0);
      useGuildPowerupsCoachmarkDefault(targetRef, guildId, popout);
      return null;
    }
  : (arg0) => {
      let guildId;
      let popout;
      let targetRef;
      ({ targetRef, guildId, popout } = arg0);
      useGuildPowerupsCoachmarkDefault(targetRef, guildId, popout);
      return null;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let guildId;
      let popout;
      let targetRef;
      const obj = react2;
      const cResult = obj.c(7);
      ({ targetRef, guildId, popout } = arg0);
      const context = react.useContext(SidebarCoachmarkOverlay.SidebarCoachmarkOverlayContext);
      if (cResult[0] === guildId) {
        if (cResult[1] === popout) {
          let tmp5;
          if (cResult[2] === targetRef) {
            tmp5 = cResult[3];
          }
          if (cResult[4] === tmp5) {
            let tmp7;
            if (cResult[5] === context) {
              tmp7 = cResult[6];
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
      let guildId;
      let popout;
      let targetRef;
      ({ targetRef, guildId, popout } = arg0);
      const context = react.useContext(SidebarCoachmarkOverlay.SidebarCoachmarkOverlayContext);
      const tmp5 = hasOwnProperty(closure_9, { targetRef, guildId, popout });
      let tmp4Result = tmp5;
      if (null != context) {
        const obj = { value: context, children: tmp5 };
        tmp4Result = hasOwnProperty(LayerContext.LayerContext.Provider, obj);
      }
      return tmp4Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let dismissNewBadgeIfShown;
      let items;
      let obj6;
      let showNewBadgeOnRow;
      let obj = guildId(576);
      const cResult = obj.c(26);
      guildId = guildId.guildId;
      const tmp4 = closure_8();
      const ref = react.useRef(null);
      const tmp7 = dismissNewBadgeIfShown(12165)(guildId);
      let indicator;
      const tmp8 = dismissNewBadgeIfShown(12182);
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
      ({ showNewBadgeOnRow, dismissNewBadgeIfShown } = tmp8(guildId, tmp10));
      let showUnread;
      tmp8(guildId, tmp10);
      if (tmp7 != null) {
        showUnread = tmp7.showUnread;
      }
      const ChannelModes = tmp(12031).ChannelModes;
      const tmp15 = true === showUnread ? ChannelModes.UNREAD_IMPORTANT : ChannelModes.DEFAULT;
      if (cResult[0] === dismissNewBadgeIfShown) {
        let tmp16;
        if (cResult[1] === guildId) {
          tmp16 = cResult[2];
        }
        let popout1;
        if (tmp7 != null) {
          popout1 = tmp7.popout;
        }
        if (cResult[3] === guildId) {
          let tmp18;
          let tmp24;
          let tmp23;
          let tmp26;
          let tmp29;
          let tmp28;
          let tmp36Result;
          if (cResult[4] === popout1) {
            tmp18 = cResult[5];
          }
          const _Symbol = Symbol;
          const container = tmp4.container;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(dismissNewBadgeIfShown(2553).yv3DJJ);
            const obj2 = { selected: false };
            cResult[6] = stringResult;
            cResult[7] = obj2;
            tmp24 = obj2;
            tmp23 = stringResult;
          } else {
            tmp23 = cResult[6];
            tmp24 = cResult[7];
          }
          const _Symbol2 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult1 = intl2.string(dismissNewBadgeIfShown(2553).yv3DJJ);
            cResult[8] = stringResult1;
            tmp26 = stringResult1;
          } else {
            tmp26 = cResult[8];
          }
          if (cResult[9] !== tmp15) {
            const obj3 = { name: tmp26, mode: tmp15 };
            const tmp31 = closure_5(guildId(12031).BaseChannelName, obj3);
            const obj4 = { mode: tmp15, IconComponent: guildId(16188).BoostTier2Icon };
            const BaseChannelIcon = tmp(12031).BaseChannelIcon;
            const tmp32 = closure_5(BaseChannelIcon, obj4);
            cResult[9] = tmp15;
            cResult[10] = tmp31;
            cResult[11] = tmp32;
            tmp29 = tmp32;
            tmp28 = tmp31;
          } else {
            tmp28 = cResult[10];
            tmp29 = cResult[11];
          }
          let indicator1;
          const tmp33 = cResult[12];
          if (tmp7 != null) {
            indicator1 = tmp7.indicator;
          }
          if (tmp33 === indicator1) {
            let tmp35;
            if (cResult[13] === showNewBadgeOnRow) {
              tmp35 = cResult[14];
            }
            if (cResult[15] === tmp16) {
              if (cResult[16] === tmp15) {
                if ((cResult[17] === true) === showUnread) {
                  if (cResult[18] === tmp4.container) {
                    if (cResult[19] === tmp35) {
                      if (cResult[20] === tmp28) {
                        let tmp41;
                        if (cResult[21] === tmp29) {
                          tmp41 = cResult[22];
                        }
                        if (cResult[23] === tmp41) {
                          let tmp44;
                          if (cResult[24] === tmp18) {
                            tmp44 = cResult[25];
                          }
                          return tmp44;
                        }
                        const obj5 = { zIndex: 1, children: closure_6(View, obj6) };
                        obj6 = { ref, collapsable: false, children: items };
                        items = [tmp18, tmp41];
                        const LayerScope = tmp(6658).LayerScope;
                        const tmp48 = closure_5(LayerScope, obj5);
                        cResult[23] = tmp41;
                        cResult[24] = tmp18;
                        cResult[25] = tmp48;
                        tmp44 = tmp48;
                      }
                    }
                  }
                }
              }
            }
            const obj7 = {
              onPress: tmp16,
              style: container,
              accessible: true,
              mode: tmp15,
              unread: true === showUnread,
              accessibilityLabel: tmp23,
              accessibilityState: tmp24,
              name: tmp28,
              icon: tmp29,
              channelInfo: tmp35,
            };
            const tmp43 = closure_5(dismissNewBadgeIfShown(12031), obj7);
            cResult[15] = tmp16;
            cResult[16] = tmp15;
            cResult[17] = true === showUnread;
            cResult[18] = tmp4.container;
            cResult[19] = tmp35;
            cResult[20] = tmp28;
            cResult[21] = tmp29;
            cResult[22] = tmp43;
            tmp41 = tmp43;
          }
          if (showNewBadgeOnRow) {
            tmp36Result = closure_5(tmp(11933).NewBadge, {});
          } else {
            let indicator2;
            if (tmp7 != null) {
              indicator2 = tmp7.indicator;
            }
            const obj8 = { indicator: indicator2 };
            tmp36Result = closure_5(closure_7, obj8);
          }
          let indicator3;
          if (tmp7 != null) {
            indicator3 = tmp7.indicator;
          }
          cResult[12] = indicator3;
          cResult[13] = showNewBadgeOnRow;
          cResult[14] = tmp36Result;
          tmp35 = tmp36Result;
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
        const tmp2 = openGuildPowerupsModalDefault;
        tmp2(obj);
      };
      cResult[0] = dismissNewBadgeIfShown;
      cResult[1] = guildId;
      cResult[2] = fn;
      tmp16 = fn;
    }
  : (guildId) => {
      let BaseChannelIcon;
      let BaseChannelName;
      let DEFAULT;
      let intl;
      let intl2;
      let items1;
      let obj5;
      let obj6;
      let popout1;
      let tmp14;
      let tmp16Result;
      guildId = guildId.guildId;
      let dismissNewBadgeIfShown;
      const tmp = closure_8();
      const ref = react.useRef(null);
      const tmp5 = dismissNewBadgeIfShown(12165)(guildId);
      let indicator;
      const tmp6 = dismissNewBadgeIfShown(12182);
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
      const tmp6Result = tmp6(guildId, tmp8);
      dismissNewBadgeIfShown = tmp6Result.dismissNewBadgeIfShown;
      let showUnread;
      const showNewBadgeOnRow = tmp6Result.showNewBadgeOnRow;
      if (tmp5 != null) {
        showUnread = tmp5.showUnread;
      }
      const ChannelModes = guildId(12031).ChannelModes;
      if (true === showUnread) {
        DEFAULT = ChannelModes.UNREAD_IMPORTANT;
        tmp14 = tmp13;
      } else {
        DEFAULT = ChannelModes.DEFAULT;
        tmp14 = tmp13;
      }
      const items = [guildId, dismissNewBadgeIfShown];
      const callback = react.useCallback(() => {
        dismissNewBadgeIfShown();
        const obj = { guildId, analyticsLocation: AnalyticsLocationDefault.GUILD_POWERUPS_CHANNEL_LIST_ROW };
        const tmp2 = openGuildPowerupsModalDefault;
        tmp2(obj);
      }, items);
      const obj3 = { targetRef: ref, guildId, popout: popout1 };
      popout1 = undefined;
      const obj2 = { ref, collapsable: false, children: items1 };
      const LayerScope = tmp14(6658).LayerScope;
      if (tmp5 != null) {
        popout1 = tmp5.popout;
      }
      items1 = [closure_5(closure_10, obj3)];
      const obj4 = {
        onPress: callback,
        style: tmp.container,
        accessible: true,
        mode: DEFAULT,
        unread: true === showUnread,
        accessibilityLabel: intl.string(dismissNewBadgeIfShown(2553).yv3DJJ),
        accessibilityState: { selected: false },
        name: closure_5(BaseChannelName, obj5),
        icon: closure_5(BaseChannelIcon, obj6),
        channelInfo: tmp16Result,
      };
      const tmp3Result = dismissNewBadgeIfShown(12031);
      intl = tmp14(1126).intl;
      obj5 = { name: intl2.string(dismissNewBadgeIfShown(2553).yv3DJJ), mode: DEFAULT };
      BaseChannelName = tmp14(12031).BaseChannelName;
      intl2 = tmp14(1126).intl;
      obj6 = { mode: DEFAULT, IconComponent: tmp14(16188).BoostTier2Icon };
      BaseChannelIcon = tmp14(12031).BaseChannelIcon;
      if (showNewBadgeOnRow) {
        tmp16Result = closure_5(tmp14(11933).NewBadge, {});
      } else {
        let indicator1;
        if (tmp5 != null) {
          indicator1 = tmp5.indicator;
        }
        const obj7 = { indicator: indicator1 };
        tmp16Result = closure_5(closure_7, obj7);
      }
      const obj8 = { zIndex: 1, children: closure_6(View, obj2) };
      items1[1] = closure_5(tmp3Result, obj4);
      return closure_5(LayerScope, obj8);
    };
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsChannelRow.tsx");

export default tmp3;
