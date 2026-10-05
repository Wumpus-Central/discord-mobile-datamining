// discord_app/modules/stage_channels/native/components/StageSettingsActionSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import StageChannelPermissions from "../../StageChannelPermissions.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import StageChannelsConstants from "../../StageChannelsConstants.tsx";
import StageChannelActionCreatorExtras from "../../StageChannelActionCreatorExtras.native.tsx";
import ReportModals from "../../../in_app_reports/ReportModals.tsx";
import ChannelSettingsActionCreatorsDefault from "../../../../actions/ChannelSettingsActionCreators.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import StageInstanceStore from "../../StageInstanceStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let channelId;

let c10;
let closure_12;
let map1;
let obj2;
let obj3;
let unpackModuleId;
const View = react_native.View;
const STAGE_SETTINGS_SHEET_KEY = StageChannelsConstants.STAGE_SETTINGS_SHEET_KEY;
({ ChannelSettingsSections: c10, UserSettingsSections: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { marginTop: 8 }, icon: obj2, warning: obj3 };
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.unsafe_rawColors.RED_400 };
let closure_14 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let Icon;
      let first;
      let obj3;
      let stateFromStores;
      let tmp14;
      let tmp16;
      let tmp19;
      let tmp23;
      let tmp7;
      let tmp9;
      const tmp = channelId;
      let obj = channelId(stateFromStores[13]);
      const cResult = obj.c(59);
      channelId = channelId.channelId;
      const onOpenRTCDebugOverlay = channelId.onOpenRTCDebugOverlay;
      const tmp4 = closure_14();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function f() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(tmp2[14]);
      stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [PermissionStore];
        cResult[3] = items1;
        tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== stateFromStores) {
        class R {
          constructor() {
            return PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, stateFromStores);
          }
        }
        cResult[4] = stateFromStores;
        cResult[5] = R;
      } else {
        class R {
          constructor() {
            return PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, stateFromStores);
          }
        }
      }
      const tmpResult5 = tmp(stateFromStores[14]);
      const stateFromStores1 = tmpResult5.useStateFromStores(tmp9, R);
      const tmpResult6 = tmp(stateFromStores[16]);
      const isStageSpeakingDisabledForCurrentUser = tmpResult6.useIsStageSpeakingDisabledForCurrentUser();
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            return PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, stateFromStores);
          }
        }
        const items2 = [ChannelRTCStore];
        cResult[6] = items2;
        tmp14 = items2;
      } else {
        class R {
          constructor() {
            return PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, stateFromStores);
          }
        }
      }
      if (cResult[7] !== channelId) {
        class R {
          constructor() {
            return PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, stateFromStores);
          }
        }
        const items3 = [channelId];
        cResult[7] = channelId;
        cResult[8] = tmp17;
        cResult[9] = items3;
        tmp16 = items3;
      } else {
        class R {
          constructor() {
            return PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, stateFromStores);
          }
        }
        tmp16 = cResult[9];
      }
      const tmpResult7 = tmp(stateFromStores[14]);
      const stateFromStores2 = tmpResult7.useStateFromStores(tmp14, tmp17, tmp16);
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            return PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, stateFromStores);
          }
        }
        const items4 = [StageInstanceStore];
        cResult[10] = items4;
        tmp19 = items4;
      } else {
        class R {
          constructor() {
            return PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, stateFromStores);
          }
        }
      }
      if (cResult[11] !== channelId) {
        class D {
          constructor() {
            return StageInstanceStore.getStageInstanceByChannel(channelId);
          }
        }
        cResult[11] = channelId;
        cResult[12] = D;
      } else {
        class D {
          constructor() {
            return StageInstanceStore.getStageInstanceByChannel(channelId);
          }
        }
      }
      const tmpResult8 = tmp(stateFromStores[14]);
      const stateFromStores3 = tmpResult8.useStateFromStores(tmp19, D);
      if (cResult[13] !== stateFromStores) {
        class D {
          constructor() {
            return StageInstanceStore.getStageInstanceByChannel(channelId);
          }
        }
        const items5 = [stateFromStores];
        cResult[13] = stateFromStores;
        cResult[14] = tmp24;
        cResult[15] = items5;
        tmp23 = items5;
      } else {
        class D {
          constructor() {
            return StageInstanceStore.getStageInstanceByChannel(channelId);
          }
        }
        tmp23 = cResult[15];
      }
      const effect = react.useEffect(tmp24, tmp23);
      if (null == stateFromStores) {
        class D {
          constructor() {
            return StageInstanceStore.getStageInstanceByChannel(channelId);
          }
        }
      } else {
        class D {
          constructor() {
            return StageInstanceStore.getStageInstanceByChannel(channelId);
          }
        }
        const _Symbol = Symbol;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          class B {
            constructor() {
              const obj = channelId(stateFromStores[18]);
              const obj2 = { screen: constants.VOICE };
              obj.openUserSettings(obj2);
              const obj3 = onOpenRTCDebugOverlay(stateFromStores[11]);
              obj3.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
            }
          }
          cResult[18] = B;
        } else {
          class B {
            constructor() {
              const obj = channelId(stateFromStores[18]);
              const obj2 = { screen: constants.VOICE };
              obj.openUserSettings(obj2);
              const obj3 = onOpenRTCDebugOverlay(stateFromStores[11]);
              obj3.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
            }
          }
        }
        if (cResult[19] !== stateFromStores) {
          class V {
            constructor() {
              if (null != stateFromStores) {
                const obj = ReportModals;
                const result = obj.showReportModalForStageChannel(tmp);
                const obj2 = ActionSheetActionCreatorsDefault;
                obj2.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
              }
            }
          }
          cResult[19] = stateFromStores;
          cResult[20] = V;
        } else {
          class V {
            constructor() {
              if (null != stateFromStores) {
                const obj = ReportModals;
                const result = obj.showReportModalForStageChannel(tmp);
                const obj2 = ActionSheetActionCreatorsDefault;
                obj2.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
              }
            }
          }
        }
        if (cResult[21] !== stateFromStores) {
          class H {
            constructor() {
              if (null != stateFromStores) {
                const obj = ChannelSettingsActionCreatorsDefault;
                obj.setSection(constants.NOTIFICATIONS);
                const obj2 = ChannelSettingsActionCreatorsDefault;
                obj2.open(tmp.id);
                const obj3 = ActionSheetActionCreatorsDefault;
                obj3.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
              }
            }
          }
          cResult[21] = stateFromStores;
          cResult[22] = H;
        } else {
          class H {
            constructor() {
              if (null != stateFromStores) {
                const obj = ChannelSettingsActionCreatorsDefault;
                obj.setSection(constants.NOTIFICATIONS);
                const obj2 = ChannelSettingsActionCreatorsDefault;
                obj2.open(tmp.id);
                const obj3 = ActionSheetActionCreatorsDefault;
                obj3.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
              }
            }
          }
        }
        if (cResult[23] !== onOpenRTCDebugOverlay) {
          class Y {
            constructor() {
              if (onOpenRTCDebugOverlay != null) {
                tmp();
              }
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
            }
          }
          cResult[23] = onOpenRTCDebugOverlay;
          cResult[24] = Y;
        } else {
          class Y {
            constructor() {
              if (onOpenRTCDebugOverlay != null) {
                tmp();
              }
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
            }
          }
        }
        if (cResult[25] === stateFromStores1) {
          class Y {
            constructor() {
              if (onOpenRTCDebugOverlay != null) {
                tmp();
              }
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
            }
          }
        }
        let tmp33Result = null;
        if (stateFromStores1) {
          class Y {
            constructor() {
              if (onOpenRTCDebugOverlay != null) {
                tmp();
              }
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
            }
          }
          if (null == stateFromStores2) {
            class Y {
              constructor() {
                if (onOpenRTCDebugOverlay != null) {
                  tmp();
                }
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
              }
            }
            if (!isStageSpeakingDisabledForCurrentUser) {
              let stringResult;
              class Y {
                constructor() {
                  if (onOpenRTCDebugOverlay != null) {
                    tmp();
                  }
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
                }
              }
              const FormRow = tmp(tmp2[21]).FormRow;
              if (null != stateFromStores3) {
                class Y {
                  constructor() {
                    if (onOpenRTCDebugOverlay != null) {
                      tmp();
                    }
                    const obj = ActionSheetActionCreatorsDefault;
                    obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
                  }
                }
                stringResult = obj8.string(tmp(tmp2[22]).t["5BKP4y"]);
              } else {
                class Y {
                  constructor() {
                    if (onOpenRTCDebugOverlay != null) {
                      tmp();
                    }
                    const obj = ActionSheetActionCreatorsDefault;
                    obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
                  }
                }
                stringResult = obj7.string(tmp(tmp2[22]).t.s8mM8A);
              }
              let obj2 = { label: stringResult, leading: tmp33(Icon, obj3), onPress: tmp26 };
              obj3 = { source: onOpenRTCDebugOverlay(stateFromStores[24]), color: tmp4.icon.color };
              Icon = tmp(tmp2[23]).Icon;
              tmp33Result = tmp33(FormRow, obj2);
            }
          }
        }
        cResult[25] = stateFromStores1;
        cResult[26] = tmp26;
        cResult[27] = stateFromStores2;
        cResult[28] = isStageSpeakingDisabledForCurrentUser;
        cResult[29] = stateFromStores3;
        cResult[30] = tmp4.icon.color;
        cResult[31] = tmp33Result;
      }
    }
  : (channelId) => {
      let FormLabel;
      let Icon;
      let Icon2;
      let Icon3;
      let Icon4;
      let Icon5;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let items6;
      let obj10;
      let obj12;
      let obj14;
      let obj17;
      let obj18;
      let obj8;
      channelId = channelId.channelId;
      const onOpenRTCDebugOverlay = channelId.onOpenRTCDebugOverlay;
      let stateFromStores;
      const tmp = closure_14();
      let obj = channelId(stateFromStores[14]);
      const items = [ChannelStore];
      stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
      let obj2 = channelId(stateFromStores[14]);
      const items1 = [PermissionStore];
      const stateFromStores1 = obj2.useStateFromStores(items1, () =>
        PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, stateFromStores),
      );
      let obj3 = channelId(stateFromStores[16]);
      const isStageSpeakingDisabledForCurrentUser = obj3.useIsStageSpeakingDisabledForCurrentUser();
      const items2 = [ChannelRTCStore];
      const items3 = [channelId];
      const obj4 = channelId(stateFromStores[14]);
      const stateFromStores2 = obj4.useStateFromStores(
        items2,
        () => ChannelRTCStore.getSelectedParticipant(channelId),
        items3,
      );
      const items4 = [StageInstanceStore];
      const items5 = [stateFromStores];
      const obj5 = channelId(stateFromStores[14]);
      const stateFromStores3 = obj5.useStateFromStores(items4, () =>
        StageInstanceStore.getStageInstanceByChannel(channelId),
      );
      const effect = react.useEffect(() => {
        if (null == stateFromStores) {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
        }
      }, items5);
      let tmp11Result4 = null;
      if (null != stateFromStores) {
        let tmp11Result = null;
        const obj6 = { style: tmp.container, children: items6 };
        const ActionSheet = tmp2(tmp3[29]).ActionSheet;
        if (stateFromStores1) {
          tmp11Result = null;
          if (null == stateFromStores2) {
            tmp11Result = null;
            if (!isStageSpeakingDisabledForCurrentUser) {
              let stringResult;
              const FormRow = tmp2(tmp3[21]).FormRow;
              if (null != stateFromStores3) {
                const intl2 = tmp2(tmp3[22]).intl;
                stringResult = intl2.string(tmp2(tmp3[22]).t["5BKP4y"]);
              } else {
                const intl = tmp2(tmp3[22]).intl;
                stringResult = intl.string(tmp2(tmp3[22]).t.s8mM8A);
              }
              const obj7 = {
                label: stringResult,
                leading: closure_12(Icon, obj8),
                onPress() {
                  if (null != stateFromStores) {
                    const obj = StageChannelActionCreatorExtras;
                    const result = obj.openStageChannelSettings(tmp);
                    const obj2 = ActionSheetActionCreatorsDefault;
                    obj2.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
                  }
                },
              };
              obj8 = { source: onOpenRTCDebugOverlay(stateFromStores[24]), color: tmp.icon.color };
              Icon = tmp2(tmp3[23]).Icon;
              tmp11Result = closure_12(FormRow, obj7);
            }
          }
        }
        items6 = [tmp11Result, , , ,];
        const obj9 = {
          label: intl3.string(channelId(stateFromStores[22]).t.dsXapM),
          leading: closure_12(Icon2, obj10),
          onPress() {
            const obj = channelId(stateFromStores[18]);
            const obj2 = { screen: constants.VOICE };
            obj.openUserSettings(obj2);
            const obj3 = onOpenRTCDebugOverlay(stateFromStores[11]);
            obj3.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
          },
        };
        const FormRow2 = tmp2(tmp3[21]).FormRow;
        intl3 = tmp2(tmp3[22]).intl;
        obj10 = { source: onOpenRTCDebugOverlay(stateFromStores[25]), color: tmp.icon.color };
        Icon2 = tmp2(tmp3[23]).Icon;
        items6[1] = closure_12(FormRow2, obj9);
        const obj11 = {
          label: intl4.string(channelId(stateFromStores[22]).t.h850Ss),
          leading: closure_12(Icon3, obj12),
          onPress() {
            if (null != stateFromStores) {
              const obj = ChannelSettingsActionCreatorsDefault;
              obj.setSection(constants.NOTIFICATIONS);
              const obj2 = ChannelSettingsActionCreatorsDefault;
              obj2.open(tmp.id);
              const obj3 = ActionSheetActionCreatorsDefault;
              obj3.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
            }
          },
        };
        const FormRow3 = tmp2(tmp3[21]).FormRow;
        intl4 = tmp2(tmp3[22]).intl;
        obj12 = { source: onOpenRTCDebugOverlay(stateFromStores[26]), color: tmp.icon.color };
        Icon3 = tmp2(tmp3[23]).Icon;
        items6[2] = closure_12(FormRow3, obj11);
        let tmp11Result3 = null != onOpenRTCDebugOverlay;
        if (tmp11Result3) {
          const obj13 = {
            label: intl5.string(channelId(stateFromStores[22]).t.X8bCMe),
            leading: closure_12(Icon4, obj14),
            onPress() {
              if (onOpenRTCDebugOverlay != null) {
                tmp();
              }
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
            },
          };
          const FormRow4 = tmp2(tmp3[21]).FormRow;
          intl5 = tmp2(tmp3[22]).intl;
          obj14 = { source: onOpenRTCDebugOverlay(stateFromStores[27]), color: tmp.icon.color };
          Icon4 = tmp2(tmp3[23]).Icon;
          tmp11Result3 = closure_12(FormRow4, obj13);
        }
        items6[3] = tmp11Result3;
        const obj15 = { keyboardShouldPersistTaps: "always", children: closure_13(View, obj6) };
        const obj16 = {
          label: closure_12(FormLabel, obj17),
          leading: closure_12(Icon5, obj18),
          onPress() {
            if (null != stateFromStores) {
              const obj = ReportModals;
              const result = obj.showReportModalForStageChannel(tmp);
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideActionSheet(STAGE_SETTINGS_SHEET_KEY);
            }
          },
        };
        const FormRow5 = tmp2(tmp3[21]).FormRow;
        obj17 = { text: intl6.string(channelId(stateFromStores[22]).t["+78Pfm"]), style: tmp.warning };
        FormLabel = tmp2(tmp3[21]).FormLabel;
        intl6 = tmp2(tmp3[22]).intl;
        obj18 = {
          color: onOpenRTCDebugOverlay(stateFromStores[10]).unsafe_rawColors.RED_400,
          source: onOpenRTCDebugOverlay(stateFromStores[28]),
        };
        Icon5 = tmp2(tmp3[23]).Icon;
        items6[4] = closure_12(FormRow5, obj16);
        tmp11Result4 = closure_12(ActionSheet, obj15);
      }
      return tmp11Result4;
    };
let result = size.fileFinishedImporting("modules/stage_channels/native/components/StageSettingsActionSheet.tsx");

export default tmp5;
