// === Module 8311: StageSettingsActionSheet ===

// Module 8311 (StageSettingsActionSheet)
import nativeDefault from "native" /* 587 */;
import StageChannelPermissions from "StageChannelPermissions" /* 2060 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import StageChannelActionCreatorExtras from "StageChannelActionCreatorExtras" /* 8103 */;
import ReportModals from "ReportModals" /* 8312 */;
import ChannelSettingsActionCreatorsDefault from "ChannelSettingsActionCreators" /* 10075 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4912 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import StageInstanceStore from "StageInstanceStore" /* 2056 */;

require = fn;
const View = fn(17).View;
const STAGE_SETTINGS_SHEET_KEY = fn(5578).STAGE_SETTINGS_SHEET_KEY;
const Constants = fn(1085);
({ ChannelSettingsSections: c10, UserSettingsSections: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { marginTop: 8 }, icon: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }, warning: null };
let obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.warning = { color: nativeDefault.unsafe_rawColors.RED_400 };
let closure_14 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { color: nativeDefault.unsafe_rawColors.RED_400 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/StageSettingsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(stateFromStores[13]).c(59);
  channelId = channelId.channelId;
  const onOpenRTCDebugOverlay = channelId.onOpenRTCDebugOverlay;
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function f() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = channelId(stateFromStores[13]);
  stateFromStores = channelId(stateFromStores[14]).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    class R {
      constructor() {
        return closure_7.can(closure_0(closure_2[15]).MODERATE_STAGE_CHANNEL_PERMISSIONS, closure_2);
      }
    }
    cResult[4] = stateFromStores;
    cResult[5] = R;
  } else {
    class R {
      constructor() {
        return closure_7.can(closure_0(closure_2[15]).MODERATE_STAGE_CHANNEL_PERMISSIONS, closure_2);
      }
    }
  }
  const tmpResult = channelId(stateFromStores[14]);
  const stateFromStores1 = channelId(stateFromStores[14]).useStateFromStores(tmp9, R);
  const tmpResult5 = channelId(stateFromStores[14]);
  const isStageSpeakingDisabledForCurrentUser = channelId(stateFromStores[16]).useIsStageSpeakingDisabledForCurrentUser();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        return closure_7.can(closure_0(closure_2[15]).MODERATE_STAGE_CHANNEL_PERMISSIONS, closure_2);
      }
    }
    const items2 = [ChannelRTCStore];
    cResult[6] = items2;
    const tmp14 = items2;
  } else {
    class R {
      constructor() {
        return closure_7.can(closure_0(closure_2[15]).MODERATE_STAGE_CHANNEL_PERMISSIONS, closure_2);
      }
    }
  }
  if (cResult[7] !== channelId) {
    class R {
      constructor() {
        return closure_7.can(closure_0(closure_2[15]).MODERATE_STAGE_CHANNEL_PERMISSIONS, closure_2);
      }
    }
    const items3 = [channelId];
    cResult[7] = channelId;
    cResult[8] = tmp17;
    cResult[9] = items3;
    let tmp16 = items3;
  } else {
    class R {
      constructor() {
        return closure_7.can(closure_0(closure_2[15]).MODERATE_STAGE_CHANNEL_PERMISSIONS, closure_2);
      }
    }
    tmp16 = cResult[9];
  }
  const tmpResult6 = channelId(stateFromStores[16]);
  const stateFromStores2 = channelId(stateFromStores[14]).useStateFromStores(tmp14, tmp17, tmp16);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        return closure_7.can(closure_0(closure_2[15]).MODERATE_STAGE_CHANNEL_PERMISSIONS, closure_2);
      }
    }
    const items4 = [StageInstanceStore];
    cResult[10] = items4;
    const tmp19 = items4;
  } else {
    class R {
      constructor() {
        return closure_7.can(closure_0(closure_2[15]).MODERATE_STAGE_CHANNEL_PERMISSIONS, closure_2);
      }
    }
  }
  if (cResult[11] !== channelId) {
    class D {
      constructor() {
        return closure_8.getStageInstanceByChannel(channelId);
      }
    }
    cResult[11] = channelId;
    cResult[12] = D;
  } else {
    class D {
      constructor() {
        return closure_8.getStageInstanceByChannel(channelId);
      }
    }
  }
  const tmpResult7 = channelId(stateFromStores[14]);
  const stateFromStores3 = channelId(stateFromStores[14]).useStateFromStores(tmp19, D);
  if (cResult[13] !== stateFromStores) {
    class D {
      constructor() {
        return closure_8.getStageInstanceByChannel(channelId);
      }
    }
    const items5 = [stateFromStores];
    cResult[13] = stateFromStores;
    cResult[14] = tmp24;
    cResult[15] = items5;
    let tmp23 = items5;
  } else {
    class D {
      constructor() {
        return closure_8.getStageInstanceByChannel(channelId);
      }
    }
    tmp23 = cResult[15];
  }
  const effect = noop.useEffect(tmp24, tmp23);
  if (null == stateFromStores) {
    class D {
      constructor() {
        return closure_8.getStageInstanceByChannel(channelId);
      }
    }
  } else {
    class D {
      constructor() {
        return closure_8.getStageInstanceByChannel(channelId);
      }
    }
    const _Symbol = Symbol;
    if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor() {
          obj = channelId(closure_2[18]);
          obj1 = { screen: closure_1_11.VOICE };
          openUserSettingsResult = obj.openUserSettings(obj1);
          obj3 = onOpenRTCDebugOverlay(closure_2[11]);
          hideActionSheetResult = obj3.hideActionSheet(closure_1_9);
          return;
        }
      }
      cResult[18] = B;
    } else {
      class B {
        constructor() {
          obj = channelId(closure_2[18]);
          obj1 = { screen: closure_1_11.VOICE };
          openUserSettingsResult = obj.openUserSettings(obj1);
          obj3 = onOpenRTCDebugOverlay(closure_2[11]);
          hideActionSheetResult = obj3.hideActionSheet(closure_1_9);
          return;
        }
      }
    }
    if (cResult[19] !== stateFromStores) {
      class V {
        constructor() {
          if (null != closure_2) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[19]);
            result = obj.showReportModalForStageChannel(tmp);
            tmp5 = closure_1;
            obj2 = closure_1(closure_2[11]);
            tmp6 = STAGE_SETTINGS_SHEET_KEY;
            hideActionSheetResult = obj2.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
          }
          return;
        }
      }
      cResult[19] = stateFromStores;
      cResult[20] = V;
    } else {
      class V {
        constructor() {
          if (null != closure_2) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[19]);
            result = obj.showReportModalForStageChannel(tmp);
            tmp5 = closure_1;
            obj2 = closure_1(closure_2[11]);
            tmp6 = STAGE_SETTINGS_SHEET_KEY;
            hideActionSheetResult = obj2.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
          }
          return;
        }
      }
    }
    if (cResult[21] !== stateFromStores) {
      class H {
        constructor() {
          if (null != closure_2) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[20]);
            tmp4 = ChannelSettingsSections;
            setSectionResult = obj.setSection(ChannelSettingsSections.NOTIFICATIONS);
            obj2 = closure_1(closure_2[20]);
            openResult = obj2.open(tmp.id);
            obj3 = closure_1(closure_2[11]);
            tmp7 = STAGE_SETTINGS_SHEET_KEY;
            hideActionSheetResult = obj3.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
          }
          return;
        }
      }
      cResult[21] = stateFromStores;
      cResult[22] = H;
    } else {
      class H {
        constructor() {
          if (null != closure_2) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[20]);
            tmp4 = ChannelSettingsSections;
            setSectionResult = obj.setSection(ChannelSettingsSections.NOTIFICATIONS);
            obj2 = closure_1(closure_2[20]);
            openResult = obj2.open(tmp.id);
            obj3 = closure_1(closure_2[11]);
            tmp7 = STAGE_SETTINGS_SHEET_KEY;
            hideActionSheetResult = obj3.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
          }
          return;
        }
      }
    }
    if (cResult[23] !== onOpenRTCDebugOverlay) {
      class Y {
        constructor() {
          if (onOpenRTCDebugOverlay != null) {
            tmpResult = tmp();
          }
          obj = closure_1(closure_2[11]);
          hideActionSheetResult = obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
          return;
        }
      }
      cResult[23] = onOpenRTCDebugOverlay;
      cResult[24] = Y;
    } else {
      class Y {
        constructor() {
          if (onOpenRTCDebugOverlay != null) {
            tmpResult = tmp();
          }
          obj = closure_1(closure_2[11]);
          hideActionSheetResult = obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
          return;
        }
      }
    }
    if (cResult[25] === stateFromStores1) {
      class Y {
        constructor() {
          if (onOpenRTCDebugOverlay != null) {
            tmpResult = tmp();
          }
          obj = closure_1(closure_2[11]);
          hideActionSheetResult = obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
          return;
        }
      }
    }
    if (stateFromStores1) {
      class Y {
        constructor() {
          if (onOpenRTCDebugOverlay != null) {
            tmpResult = tmp();
          }
          obj = closure_1(closure_2[11]);
          hideActionSheetResult = obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
          return;
        }
      }
      if (null == stateFromStores2) {
        class Y {
          constructor() {
            if (onOpenRTCDebugOverlay != null) {
              tmpResult = tmp();
            }
            obj = closure_1(closure_2[11]);
            hideActionSheetResult = obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
            return;
          }
        }
        if (!isStageSpeakingDisabledForCurrentUser) {
          class Y {
            constructor() {
              if (onOpenRTCDebugOverlay != null) {
                tmpResult = tmp();
              }
              obj = closure_1(closure_2[11]);
              hideActionSheetResult = obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
              return;
            }
          }
          if (null != stateFromStores3) {
            class Y {
              constructor() {
                if (onOpenRTCDebugOverlay != null) {
                  tmpResult = tmp();
                }
                obj = closure_1(closure_2[11]);
                hideActionSheetResult = obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
                return;
              }
            }
            let stringResult = obj8.string(tmp(tmp2[22]).t["5BKP4y"]);
          } else {
            class Y {
              constructor() {
                if (onOpenRTCDebugOverlay != null) {
                  tmpResult = tmp();
                }
                obj = closure_1(closure_2[11]);
                hideActionSheetResult = obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
                return;
              }
            }
            stringResult = obj7.string(tmp(tmp2[22]).t.s8mM8A);
          }
          let obj2 = { label: stringResult, leading: null, onPress: null };
          let obj3 = { source: onOpenRTCDebugOverlay(tmp2[24]), color: tmp4.icon.color };
          obj2.leading = tmp33(tmp(tmp2[23]).Icon, obj3);
          obj2.onPress = tmp26;
          tmp33(tmp(tmp2[21]).FormRow, obj2);
        }
      }
    }
    cResult[25] = stateFromStores1;
    cResult[26] = tmp26;
    cResult[27] = stateFromStores2;
    cResult[28] = isStageSpeakingDisabledForCurrentUser;
    cResult[29] = stateFromStores3;
    cResult[30] = tmp4.icon.color;
    cResult[31] = null;
  }
  const tmpResult8 = channelId(stateFromStores[14]);
}) : ((channelId) => {
  channelId = channelId.channelId;
  const onOpenRTCDebugOverlay = channelId.onOpenRTCDebugOverlay;
  let stateFromStores;
  const tmp = closure_14();
  const items = [ChannelStore];
  stateFromStores = channelId(stateFromStores[14]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj = channelId(stateFromStores[14]);
  const items1 = [PermissionStore];
  const stateFromStores1 = channelId(stateFromStores[14]).useStateFromStores(items1, () => PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, stateFromStores));
  let obj2 = channelId(stateFromStores[14]);
  const isStageSpeakingDisabledForCurrentUser = channelId(stateFromStores[16]).useIsStageSpeakingDisabledForCurrentUser();
  let obj3 = channelId(stateFromStores[16]);
  const items2 = [ChannelRTCStore];
  const items3 = [channelId];
  const stateFromStores2 = channelId(stateFromStores[14]).useStateFromStores(items2, () => ChannelRTCStore.getSelectedParticipant(channelId), items3);
  const obj4 = channelId(stateFromStores[14]);
  const items4 = [StageInstanceStore];
  const items5 = [stateFromStores];
  const stateFromStores3 = channelId(stateFromStores[14]).useStateFromStores(items4, () => StageInstanceStore.getStageInstanceByChannel(channelId));
  const effect = noop.useEffect(() => {
    if (null == stateFromStores) {
      ActionSheetActionCreatorsDefault.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
    }
  }, items5);
  let tmp11Result4 = null;
  if (null != stateFromStores) {
    const obj6 = { style: tmp.container, children: null };
    let tmp14 = null;
    if (stateFromStores1) {
      tmp14 = null;
      if (null == stateFromStores2) {
        tmp14 = null;
        if (!isStageSpeakingDisabledForCurrentUser) {
          if (null != stateFromStores3) {
            const intl2 = tmp2(tmp3[22]).intl;
            let stringResult = intl2.string(tmp2(tmp3[22]).t["5BKP4y"]);
          } else {
            const intl = tmp2(tmp3[22]).intl;
            stringResult = intl.string(tmp2(tmp3[22]).t.s8mM8A);
          }
          const obj7 = { label: stringResult, leading: null, onPress: null };
          const obj8 = { source: onOpenRTCDebugOverlay(tmp3[24]), color: tmp.icon.color };
          obj7.leading = closure_12(tmp2(tmp3[23]).Icon, obj8);
          obj7.onPress = function onPress() {
            if (null != stateFromStores) {
              const result = StageChannelActionCreatorExtras.openStageChannelSettings(tmp);
              ActionSheetActionCreatorsDefault.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
            }
          };
          closure_12(tmp2(tmp3[21]).FormRow, obj7);
        }
      }
    }
    const items6 = [tmp14, , , , ];
    const obj9 = { label: null, leading: null, onPress: null };
    const intl3 = tmp2(tmp3[22]).intl;
    obj9.label = intl3.string(tmp2(tmp3[22]).t.dsXapM);
    const obj10 = { source: onOpenRTCDebugOverlay(tmp3[25]), color: tmp.icon.color };
    obj9.leading = closure_12(tmp2(tmp3[23]).Icon, obj10);
    obj9.onPress = function onPress() {
      channelId(stateFromStores[18]).openUserSettings({ screen: constants.VOICE });
      const obj = channelId(stateFromStores[18]);
      const obj2 = { screen: constants.VOICE };
      onOpenRTCDebugOverlay(stateFromStores[11]).hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
    };
    items6[1] = closure_12(tmp2(tmp3[21]).FormRow, obj9);
    const obj11 = { label: null, leading: null, onPress: null };
    const intl4 = tmp2(tmp3[22]).intl;
    obj11.label = intl4.string(tmp2(tmp3[22]).t.h850Ss);
    const obj12 = { source: onOpenRTCDebugOverlay(tmp3[26]), color: tmp.icon.color };
    obj11.leading = closure_12(tmp2(tmp3[23]).Icon, obj12);
    obj11.onPress = function onPress() {
      if (null != stateFromStores) {
        ChannelSettingsActionCreatorsDefault.setSection(constants.NOTIFICATIONS);
        ChannelSettingsActionCreatorsDefault.open(tmp.id);
        ActionSheetActionCreatorsDefault.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
      }
    };
    items6[2] = closure_12(tmp2(tmp3[21]).FormRow, obj11);
    let tmp11Result3 = null != onOpenRTCDebugOverlay;
    if (tmp11Result3) {
      const obj13 = { label: null, leading: null, onPress: null };
      const intl5 = tmp2(tmp3[22]).intl;
      obj13.label = intl5.string(tmp2(tmp3[22]).t.X8bCMe);
      const obj14 = { source: tmp18(tmp3[27]), color: tmp.icon.color };
      obj13.leading = closure_12(tmp2(tmp3[23]).Icon, obj14);
      obj13.onPress = function onPress() {
        if (onOpenRTCDebugOverlay != null) {
          tmp();
        }
        ActionSheetActionCreatorsDefault.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
      };
      tmp11Result3 = closure_12(tmp2(tmp3[21]).FormRow, obj13);
    }
    const obj15 = { keyboardShouldPersistTaps: "always", children: null };
    items6[3] = tmp11Result3;
    const obj16 = { label: null, leading: null, onPress: null };
    const obj17 = { text: null, style: null };
    const intl6 = tmp2(tmp3[22]).intl;
    obj17.text = intl6.string(tmp2(tmp3[22]).t["+78Pfm"]);
    obj17.style = tmp.warning;
    obj16.label = closure_12(tmp2(tmp3[21]).FormLabel, obj17);
    const obj18 = { color: onOpenRTCDebugOverlay(tmp3[10]).unsafe_rawColors.RED_400, source: onOpenRTCDebugOverlay(tmp3[28]) };
    obj16.leading = closure_12(tmp2(tmp3[23]).Icon, obj18);
    obj16.onPress = function onPress() {
      if (null != stateFromStores) {
        const result = ReportModals.showReportModalForStageChannel(tmp);
        ActionSheetActionCreatorsDefault.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
      }
    };
    items6[4] = closure_12(tmp2(tmp3[21]).FormRow, obj16);
    obj6.children = items6;
    obj15.children = closure_13(View, obj6);
    tmp11Result4 = closure_12(tmp2(tmp3[29]).ActionSheet, obj15);
  }
  return tmp11Result4;
});