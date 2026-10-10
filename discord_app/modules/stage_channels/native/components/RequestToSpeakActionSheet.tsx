// discord_app/modules/stage_channels/native/components/RequestToSpeakActionSheet.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import useAudienceRequestToSpeakStateDefault from "../../useAudienceRequestToSpeakState.tsx";
import AgeVerificationAnalyticsUtils from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import useStageSpeakingForCurrentUser from "../../useStageSpeakingForCurrentUser.tsx";
import TableSwitchRow from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import StageChannelActionCreators from "../../StageChannelActionCreators.tsx";
import AgeVerificationActionCreatorsDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import useRequestToSpeakPermission from "../../useRequestToSpeakPermission.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

const _modDef11000 = tmp8(11000);
require = fn;
const View = fn(17).View;
let closure_8 = fn(5892).REQUEST_TO_SPEAK_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RequestToSpeakRow(channel) {
      const cResult = c.c(9);
      [tmp5, tmp6] = useRequestToSpeakPermission.useRequestToSpeakPermission(channel.channel.id);
      require = tmp6;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.TYZgzW);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp5) {
        const intl2 = tmp(1126).intl;
        const string = intl2.string;
        let t = tmp(1126).t;
        if (tmp5) {
          t = t["JcFI/U"];
          let stringResult1 = string(t);
        } else {
          stringResult1 = string(t.laPwJQ);
        }
        cResult[1] = tmp5;
        cResult[2] = stringResult1;
      } else {
        if (cResult[3] !== tmp6) {
          const fn = function c(arg0) {
            return tmp6(arg0);
          };
          cResult[3] = tmp6;
          cResult[4] = fn;
          let tmp13 = fn;
        } else {
          tmp13 = cResult[4];
        }
        if (cResult[5] === tmp5) {
          if (cResult[6] === tmp9) {
            if (cResult[7] === tmp13) {
              let tmp14 = cResult[8];
            }
            return tmp14;
          }
        }
        const obj3 = { label: first, subLabel: cResult[2], value: tmp5, onValueChange: tmp13 };
        const tmp16 = options(tmp(6895).TableSwitchRow, obj3);
        cResult[5] = tmp5;
        cResult[6] = cResult[2];
        cResult[7] = tmp13;
        cResult[8] = tmp16;
        tmp14 = tmp16;
      }
      const tmp4 = _slicedToArray(useRequestToSpeakPermission.useRequestToSpeakPermission(channel.channel.id), 2);
    }
  : function RequestToSpeakRow(channel) {
      c0 = undefined;
      [tmp2, c0] = useRequestToSpeakPermission.useRequestToSpeakPermission(channel.channel.id);
      const obj2 = { label: null, subLabel: null, value: null, onValueChange: null };
      const intl = util.intl;
      obj2.label = intl.string(util.t.TYZgzW);
      const intl2 = util.intl;
      const string = intl2.string;
      const t = util.t;
      if (tmp2) {
        let stringResult = string(t["JcFI/U"]);
      } else {
        stringResult = string(t.laPwJQ);
      }
      obj2.subLabel = stringResult;
      obj2.value = tmp2;
      obj2.onValueChange = function onValueChange(arg0) {
        return _undefined(arg0);
      };
      return options(TableSwitchRow.TableSwitchRow, obj2);
    };
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ManageSelfSpeakerRow(channel) {
      const cResult = channel(576).c(14);
      channel = channel.channel;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore];
        const fn = function o() {
          return id.getId();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let obj = channel(576);
      const stateFromStores = channel(504).useStateFromStores(tmp4, tmp5);
      let id;
      const tmpResult = channel(504);
      if (channel != null) {
        id = channel.id;
      }
      const tmp12 =
        useAudienceRequestToSpeakStateDefault(stateFromStores, id) === channel(5416).RequestToSpeakStates.ON_STAGE;
      importDefault = tmp12;
      if (cResult[2] === channel) {
        if (cResult[3] === tmp12) {
          let tmp13 = cResult[4];
        }
        if (cResult[5] !== tmp12) {
          const intl = tmp(1126).intl;
          const string = intl.string;
          let ezLpY6 = tmp(1126).t;
          if (tmp12) {
            ezLpY6 = ezLpY6.ezLpY6;
            let stringResult = string(ezLpY6);
          } else {
            stringResult = string(ezLpY6["8Joh+p"]);
          }
          cResult[5] = tmp12;
          cResult[6] = stringResult;
        } else {
          if (tmp12) {
            let MicrophoneArrowRightIcon = tmp(10996).GroupArrowDownIcon;
          } else {
            MicrophoneArrowRightIcon = tmp(10998).MicrophoneArrowRightIcon;
          }
          if (cResult[7] !== MicrophoneArrowRightIcon) {
            const tmp19 = closure_9(MicrophoneArrowRightIcon, {});
            cResult[7] = MicrophoneArrowRightIcon;
            cResult[8] = tmp19;
            let tmp17 = tmp19;
          } else {
            tmp17 = cResult[8];
          }
          const _Symbol = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            let obj2 = { source: _modDef11000 };
            const tmp22 = closure_9(tmp(1200).Icon, obj2);
            cResult[9] = tmp22;
            let tmp20 = tmp22;
          } else {
            tmp20 = cResult[9];
          }
          if (cResult[10] === cResult[6]) {
            if (cResult[11] === tmp13) {
              if (cResult[12] === tmp17) {
                let tmp23 = cResult[13];
              }
              return tmp23;
            }
          }
          let obj3 = { onPress: tmp13, icon: tmp17, label: cResult[6], trailing: tmp20 };
          const tmp25 = closure_9(tmp(6179).TableRow, obj3);
          cResult[10] = cResult[6];
          cResult[11] = tmp13;
          cResult[12] = tmp17;
          cResult[13] = tmp25;
          tmp23 = tmp25;
        }
      }
      function handleSetSelfSpeaker() {
        if (!closure_1) {
          if (obj.shouldAgeVerifyToSpeakForCurrentUser(channel.id)) {
            const obj3 = {
              entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND,
            };
            const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj3);
            ActionSheetActionCreatorsDefault.hideActionSheet(closure_8);
          }
          obj = useStageSpeakingForCurrentUser;
        }
        const result1 = StageChannelActionCreators.audienceAckRequestToSpeak(channel, closure_1);
        ActionSheetActionCreatorsDefault.hideActionSheet(closure_8);
      }
      cResult[2] = channel;
      cResult[3] = tmp12;
      cResult[4] = handleSetSelfSpeaker;
      tmp13 = handleSetSelfSpeaker;
      const tmp9Result = useAudienceRequestToSpeakStateDefault(stateFromStores, id);
    }
  : function ManageSelfSpeakerRow(channel) {
      channel = channel.channel;
      importDefault = undefined;
      const items = [AuthenticationStore];
      const stateFromStores = channel(504).useStateFromStores(items, () => id.getId());
      let id;
      let obj = channel(504);
      if (channel != null) {
        id = channel.id;
      }
      const tmp8 =
        useAudienceRequestToSpeakStateDefault(stateFromStores, id) === channel(5416).RequestToSpeakStates.ON_STAGE;
      importDefault = tmp8;
      const intl = tmp(1126).intl;
      const string = intl.string;
      const t = tmp(1126).t;
      if (tmp8) {
        let stringResult = string(t.ezLpY6);
      } else {
        stringResult = string(t["8Joh+p"]);
      }
      if (tmp8) {
        let MicrophoneArrowRightIcon = tmp(10996).GroupArrowDownIcon;
      } else {
        MicrophoneArrowRightIcon = tmp(10998).MicrophoneArrowRightIcon;
      }
      let obj2 = {
        onPress: function handleSetSelfSpeaker() {
          if (!closure_1) {
            if (obj.shouldAgeVerifyToSpeakForCurrentUser(channel.id)) {
              const obj3 = {
                entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND,
              };
              const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj3);
              ActionSheetActionCreatorsDefault.hideActionSheet(closure_8);
            }
            obj = useStageSpeakingForCurrentUser;
          }
          const result1 = StageChannelActionCreators.audienceAckRequestToSpeak(channel, closure_1);
          ActionSheetActionCreatorsDefault.hideActionSheet(closure_8);
        },
        icon: closure_9(MicrophoneArrowRightIcon, {}),
        label: stringResult,
        trailing: null,
      };
      const tmp5Result = useAudienceRequestToSpeakStateDefault(stateFromStores, id);
      obj2.trailing = closure_9(channel(1200).Icon, { source: _modDef11000 });
      return closure_9(channel(6179).TableRow, obj2);
    };
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/RequestToSpeakActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function RequestToSpeakActionSheet(channelId) {
      const cResult = channelId(576).c(40);
      channelId = channelId.channelId;
      const analyticsLocations = channelId.analyticsLocations;
      const obj = channelId(576);
      const token = channelId(4818).useToken(first(587).modules.mobile.TABLE_ROW_PADDING);
      const tmp6 = closure_11();
      if (cResult[0] !== analyticsLocations) {
        const items = [];
        items[HermesBuiltin.arraySpread(analyticsLocations, 0)] = tmp4(6878).REQUEST_TO_SPEAK;
        cResult[0] = analyticsLocations;
        cResult[1] = items;
        let tmp7 = items;
        const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
      } else {
        tmp7 = cResult[1];
      }
      const analyticsLocations2 = tmp4(6851)(tmp7).analyticsLocations;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelStore];
        cResult[2] = items1;
        let tmp11 = items1;
      } else {
        tmp11 = cResult[2];
      }
      if (cResult[3] !== channelId) {
        const fn = function f() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[3] = channelId;
        cResult[4] = fn;
        let tmp13 = fn;
      } else {
        tmp13 = cResult[4];
      }
      const obj2 = channelId(4818);
      const stateFromStores = channelId(504).useStateFromStores(tmp11, tmp13);
      const tmpResult = channelId(504);
      const stageParticipantsCount = channelId(5956).useStageParticipantsCount(
        channelId,
        tmp(5950).StageChannelParticipantNamedIndex.ALL_REQUESTED_TO_SPEAK,
      );
      const tmp16 = first1(noop.useState(0), 2);
      first = tmp16[0];
      dependencyMap = tmp16[1];
      const tmp18 = first1(noop.useState(0), 2);
      first1 = tmp18[0];
      noop = tmp18[1];
      if (cResult[5] !== first) {
        function handleHeaderLayout(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          let tmp = null != height;
          if (tmp) {
            tmp = first !== height;
          }
          if (tmp) {
            closure_2(height);
          }
        }
        cResult[5] = first;
        cResult[6] = handleHeaderLayout;
        let tmp21 = handleHeaderLayout;
      } else {
        tmp21 = cResult[6];
      }
      if (cResult[7] !== first1) {
        function handleScrollLayout(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          let tmp = null != height;
          if (tmp) {
            tmp = first1 !== height;
          }
          if (tmp) {
            closure_4(height);
          }
        }
        cResult[7] = first1;
        cResult[8] = handleScrollLayout;
        let tmp22 = handleScrollLayout;
      } else {
        tmp22 = cResult[8];
      }
      if (null == stateFromStores) {
        return null;
      } else {
        if (cResult[9] !== stateFromStores) {
          const obj3 = { hasIcons: true, children: null };
          const obj4 = { channel: stateFromStores };
          const items2 = [closure_9(closure_12, obj4)];
          const obj5 = { channel: stateFromStores };
          items2[1] = closure_9(closure_13, obj5);
          obj3.children = items2;
          const tmp28 = closure_10(tmp(6264).TableRowGroup, obj3);
          cResult[9] = stateFromStores;
          cResult[10] = tmp28;
          let tmp23 = tmp28;
        } else {
          tmp23 = cResult[10];
        }
        if (cResult[11] !== token) {
          const obj6 = { paddingHorizontal: token };
          cResult[11] = token;
          cResult[12] = obj6;
          let tmp29 = obj6;
        } else {
          tmp29 = cResult[12];
        }
        if (cResult[13] !== stageParticipantsCount) {
          const intl = tmp(1126).intl;
          const obj7 = { numHands: null };
          const _HermesInternal = HermesInternal;
          obj7.numHands = "" + stageParticipantsCount;
          const formatResult = intl.format(tmp(1126).t["5z7q5a"], obj7);
          cResult[13] = stageParticipantsCount;
          cResult[14] = formatResult;
          let tmp30 = formatResult;
        } else {
          tmp30 = cResult[14];
        }
        if (cResult[15] !== tmp30) {
          const obj8 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: tmp30 };
          const tmp34 = closure_9(tmp(5088).Text, obj8);
          cResult[15] = tmp30;
          cResult[16] = tmp34;
          let tmp32 = tmp34;
        } else {
          tmp32 = cResult[16];
        }
        if (cResult[17] === tmp32) {
          if (cResult[18] === tmp29) {
            let tmp35 = cResult[19];
          }
          if (cResult[20] === tmp21) {
            if (cResult[21] === tmp35) {
              if (cResult[22] === tmp23) {
                let tmp39 = cResult[23];
              }
              const _Math = Math;
              const bound = Math.max(first1 - first - 8, 0);
              if (cResult[24] === stateFromStores) {
                if (cResult[25] === bound) {
                  let tmp43 = cResult[26];
                }
                if (cResult[27] === tmp39) {
                  if (cResult[28] === tmp43) {
                    let tmp46 = cResult[29];
                  }
                  if (cResult[30] === tmp22) {
                    if (cResult[31] === tmp6.container) {
                      if (cResult[32] === tmp46) {
                        let tmp49 = cResult[33];
                      }
                      if (cResult[34] === tmp20) {
                        if (cResult[35] === tmp49) {
                          let tmp52 = cResult[36];
                        }
                        if (cResult[37] === analyticsLocations2) {
                          if (cResult[38] === tmp52) {
                            let tmp55 = cResult[39];
                          }
                          return tmp55;
                        }
                        const obj9 = { value: analyticsLocations2, children: tmp52 };
                        const tmp57 = closure_9(tmp(6851).AnalyticsLocationProvider, obj9);
                        cResult[37] = analyticsLocations2;
                        cResult[38] = tmp52;
                        cResult[39] = tmp57;
                        tmp55 = tmp57;
                      }
                      const obj10 = { scrollable: true, startExpanded: tmp20, children: tmp49 };
                      const tmp54 = closure_9(tmp(6839).BottomSheet, obj10);
                      cResult[34] = tmp20;
                      cResult[35] = tmp49;
                      cResult[36] = tmp54;
                      tmp52 = tmp54;
                    }
                  }
                  const obj11 = { style: tmp6.container, onLayout: tmp22, children: tmp46 };
                  const tmp51 = closure_9(tmp(6306).BottomSheetScrollView, obj11);
                  cResult[30] = tmp22;
                  cResult[31] = tmp6.container;
                  cResult[32] = tmp46;
                  cResult[33] = tmp51;
                  tmp49 = tmp51;
                }
                const obj12 = { spacing: 8, children: null };
                const items3 = [tmp39, tmp43];
                obj12.children = items3;
                const tmp48 = closure_10(tmp(5377).Stack, obj12);
                cResult[27] = tmp39;
                cResult[28] = tmp43;
                cResult[29] = tmp48;
                tmp46 = tmp48;
              }
              const obj13 = { channel: stateFromStores, height: bound };
              const tmp45 = closure_9(tmp4(11001), obj13);
              cResult[24] = stateFromStores;
              cResult[25] = bound;
              cResult[26] = tmp45;
              tmp43 = tmp45;
            }
          }
          const obj14 = { spacing: 8, onLayout: tmp21, children: null };
          const items4 = [tmp23, tmp35];
          obj14.children = items4;
          const tmp41 = closure_10(tmp(5377).Stack, obj14);
          cResult[20] = tmp21;
          cResult[21] = tmp35;
          cResult[22] = tmp23;
          cResult[23] = tmp41;
          tmp39 = tmp41;
        }
        const obj15 = { style: tmp29, children: tmp32 };
        const tmp38 = closure_9(View, obj15);
        cResult[17] = tmp32;
        cResult[18] = tmp29;
        cResult[19] = tmp38;
        tmp35 = tmp38;
      }
      const tmpResult2 = channelId(5956);
    }
  : function RequestToSpeakActionSheet(channelId) {
      channelId = channelId.channelId;
      let first;
      let first1;
      noop = undefined;
      const token = channelId(4818).useToken(first(587).modules.mobile.TABLE_ROW_PADDING);
      const obj = channelId(4818);
      const tmp3 = first;
      const items = [];
      const tmp5 = closure_11();
      const tmp6 = first(6851);
      items[HermesBuiltin.arraySpread(channelId.analyticsLocations, 0)] = first(6878).REQUEST_TO_SPEAK;
      const arraySpreadResult = HermesBuiltin.arraySpread(channelId.analyticsLocations, 0);
      const items1 = [ChannelStore];
      const stateFromStores = channelId(504).useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
      const obj2 = channelId(504);
      const stageParticipantsCount = channelId(5956).useStageParticipantsCount(
        channelId,
        channelId(5950).StageChannelParticipantNamedIndex.ALL_REQUESTED_TO_SPEAK,
      );
      const tmp10 = first1(noop.useState(0), 2);
      first = tmp10[0];
      dependencyMap = tmp10[1];
      const tmp12 = first1(noop.useState(0), 2);
      first1 = tmp12[0];
      noop = tmp12[1];
      let tmp14 = null;
      if (null != stateFromStores) {
        const obj4 = { value: tmp6(items).analyticsLocations, children: null };
        const obj5 = { scrollable: true, startExpanded: stageParticipantsCount >= 5, children: null };
        const obj6 = {
          style: tmp5.container,
          onLayout: function handleScrollLayout(nativeEvent) {
            const height = nativeEvent.nativeEvent.layout.height;
            let tmp = null != height;
            if (tmp) {
              tmp = first1 !== height;
            }
            if (tmp) {
              closure_4(height);
            }
          },
          children: null,
        };
        const obj7 = { spacing: 8, children: null };
        const obj8 = {
          spacing: 8,
          onLayout: function handleHeaderLayout(nativeEvent) {
            const height = nativeEvent.nativeEvent.layout.height;
            let tmp = null != height;
            if (tmp) {
              tmp = first !== height;
            }
            if (tmp) {
              closure_2(height);
            }
          },
          children: null,
        };
        const obj9 = { hasIcons: true, children: null };
        const obj10 = { channel: stateFromStores };
        const items2 = [closure_9(closure_12, obj10)];
        const obj11 = { channel: stateFromStores };
        items2[1] = closure_9(closure_13, obj11);
        obj9.children = items2;
        const items3 = [closure_10(tmp(6264).TableRowGroup, obj9)];
        const obj12 = { style: null, children: null };
        const obj13 = { paddingHorizontal: token };
        obj12.style = obj13;
        const obj14 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
        const intl = tmp(1126).intl;
        const obj15 = { numHands: null };
        const _HermesInternal = HermesInternal;
        obj15.numHands = "" + stageParticipantsCount;
        obj14.children = intl.format(tmp(1126).t["5z7q5a"], obj15);
        obj12.children = closure_9(tmp(5088).Text, obj14);
        items3[1] = closure_9(View, obj12);
        obj8.children = items3;
        const items4 = [closure_10(tmp(5377).Stack, obj8)];
        const obj16 = { channel: stateFromStores, height: null };
        const _Math = Math;
        obj16.height = Math.max(first1 - first - 8, 0);
        items4[1] = closure_9(tmp3(11001), obj16);
        obj7.children = items4;
        obj6.children = closure_10(tmp(5377).Stack, obj7);
        obj5.children = closure_9(tmp(6306).BottomSheetScrollView, obj6);
        obj4.children = closure_9(tmp(6839).BottomSheet, obj5);
        tmp14 = closure_9(tmp(6851).AnalyticsLocationProvider, obj4);
        const tmp3Result = tmp3(11001);
      }
      return tmp14;
    };
