// === Module 9578: RequestToSpeakActionSheet ===

// Module 9578 (RequestToSpeakActionSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import useAudienceRequestToSpeakStateDefault from "useAudienceRequestToSpeakState" /* 5037 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 5579 */;
import TableSwitchRow from "TableSwitchRow" /* 6698 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 8074 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8084 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8086 */;
import useRequestToSpeakPermission from "useRequestToSpeakPermission" /* 9579 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;

const _modDef9584 = tmp8(9584);
require = fn;
const View = fn(17).View;
let closure_8 = fn(5571).REQUEST_TO_SPEAK_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = c.c(9);
  [tmp5, tmp6] = useRequestToSpeakPermission.useRequestToSpeakPermission(channel.channel.id);
  const require = tmp6;
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
    const tmp16 = options(tmp(6698).TableSwitchRow, obj3);
    cResult[5] = tmp5;
    cResult[6] = cResult[2];
    cResult[7] = tmp13;
    cResult[8] = tmp16;
    tmp14 = tmp16;
  }
  const tmp4 = _slicedToArray(useRequestToSpeakPermission.useRequestToSpeakPermission(channel.channel.id), 2);
}) : ((channel) => {
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
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
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
  const tmp12 = useAudienceRequestToSpeakStateDefault(stateFromStores, id) === channel(5037).RequestToSpeakStates.ON_STAGE;
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
        let MicrophoneArrowRightIcon = tmp(9580).GroupArrowDownIcon;
      } else {
        MicrophoneArrowRightIcon = tmp(9582).MicrophoneArrowRightIcon;
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
        let obj2 = { source: _modDef9584 };
        const tmp22 = closure_9(tmp(1188).Icon, obj2);
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
      const tmp25 = closure_9(tmp(5993).TableRow, obj3);
      cResult[10] = cResult[6];
      cResult[11] = tmp13;
      cResult[12] = tmp17;
      cResult[13] = tmp25;
      tmp23 = tmp25;
    }
  }
  class S {
    constructor() {
      tmp = closure_1;
      if (!closure_1) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[16]);
        tmp4 = channel;
        if (obj.shouldAgeVerifyToSpeakForCurrentUser(channel.id)) {
          tmp5 = closure_1;
          tmp6 = closure_2;
          obj2 = closure_1(closure_2[17]);
          obj1 = { entryPoint: null };
          tmp7 = closure_0;
          tmp8 = closure_2;
          obj1.entryPoint = closure_0(closure_2[18]).AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND;
          result = obj2.showAgeVerificationGetStartedModal(obj1);
          tmp10 = closure_1;
          tmp11 = closure_2;
          obj4 = closure_1(closure_2[19]);
          tmp12 = closure_8;
          hideActionSheetResult = obj4.hideActionSheet(closure_8);
          return;
        }
      }
      obj5 = closure_0(closure_2[20]);
      result1 = obj5.audienceAckRequestToSpeak(channel, tmp);
      obj6 = closure_1(closure_2[19]);
      hideActionSheetResult1 = obj6.hideActionSheet(closure_8);
      return;
    }
  }
  cResult[2] = channel;
  cResult[3] = tmp12;
  cResult[4] = S;
  tmp13 = S;
  const tmp9Result = useAudienceRequestToSpeakStateDefault(stateFromStores, id);
}) : ((channel) => {
  channel = channel.channel;
  importDefault = undefined;
  const items = [AuthenticationStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => id.getId());
  let id;
  let obj = channel(504);
  if (channel != null) {
    id = channel.id;
  }
  const tmp8 = useAudienceRequestToSpeakStateDefault(stateFromStores, id) === channel(5037).RequestToSpeakStates.ON_STAGE;
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
    let MicrophoneArrowRightIcon = tmp(9580).GroupArrowDownIcon;
  } else {
    MicrophoneArrowRightIcon = tmp(9582).MicrophoneArrowRightIcon;
  }
  let obj2 = {
    onPress() {
      if (!closure_1) {
        if (obj.shouldAgeVerifyToSpeakForCurrentUser(channel.id)) {
          const obj3 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
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
    trailing: null
  };
  const tmp5Result = useAudienceRequestToSpeakStateDefault(stateFromStores, id);
  obj2.trailing = closure_9(channel(1188).Icon, { source: _modDef9584 });
  return closure_9(channel(5993).TableRow, obj2);
});
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/RequestToSpeakActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(576).c(40);
  channelId = channelId.channelId;
  const analyticsLocations = channelId.analyticsLocations;
  const obj = channelId(576);
  const token = channelId(4580).useToken(first(587).modules.mobile.TABLE_ROW_PADDING);
  closure_11();
  if (cResult[0] !== analyticsLocations) {
    const items = [];
    items[HermesBuiltin.arraySpread(analyticsLocations, 0)] = tmp4(6681).REQUEST_TO_SPEAK;
    cResult[0] = analyticsLocations;
    cResult[1] = items;
    let tmp7 = items;
    const arraySpreadResult = HermesBuiltin.arraySpread(analyticsLocations, 0);
  } else {
    tmp7 = cResult[1];
  }
  const analyticsLocations2 = tmp4(6657)(tmp7).analyticsLocations;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[2] = items1;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] !== channelId) {
    const fn = function b() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[3] = channelId;
    cResult[4] = fn;
    let tmp13 = fn;
  } else {
    tmp13 = cResult[4];
  }
  const obj2 = channelId(4580);
  const stateFromStores = channelId(504).useStateFromStores(tmp11, tmp13);
  const tmpResult = channelId(504);
  const stageParticipantsCount = channelId(5588).useStageParticipantsCount(channelId, tmp(5582).StageChannelParticipantNamedIndex.ALL_REQUESTED_TO_SPEAK);
  const tmp16 = first1(noop.useState(0), 2);
  first = tmp16[0];
  dependencyMap = tmp16[1];
  const tmp18 = first1(noop.useState(0), 2);
  first1 = tmp18[0];
  noop = tmp18[1];
  if (cResult[5] !== first) {
    class P {
      constructor(arg0) {
        height = channelId.nativeEvent.layout.height;
        tmp = null != height;
        if (tmp) {
          tmp2 = closure_1;
          tmp = closure_1 !== height;
        }
        if (tmp) {
          tmp3 = closure_2;
          tmp4 = closure_2(height);
        }
        return;
      }
    }
    cResult[5] = first;
    cResult[6] = P;
  } else {
    class P {
      constructor(arg0) {
        height = channelId.nativeEvent.layout.height;
        tmp = null != height;
        if (tmp) {
          tmp2 = closure_1;
          tmp = closure_1 !== height;
        }
        if (tmp) {
          tmp3 = closure_2;
          tmp4 = closure_2(height);
        }
        return;
      }
    }
  }
  if (cResult[7] !== first1) {
    class U {
      constructor(arg0) {
        height = channelId.nativeEvent.layout.height;
        tmp = null != height;
        if (tmp) {
          tmp2 = closure_3;
          tmp = closure_3 !== height;
        }
        if (tmp) {
          tmp3 = closure_4;
          tmp4 = closure_4(height);
        }
        return;
      }
    }
    cResult[7] = first1;
    cResult[8] = U;
  } else {
    class U {
      constructor(arg0) {
        height = channelId.nativeEvent.layout.height;
        tmp = null != height;
        if (tmp) {
          tmp2 = closure_3;
          tmp = closure_3 !== height;
        }
        if (tmp) {
          tmp3 = closure_4;
          tmp4 = closure_4(height);
        }
        return;
      }
    }
  }
  if (null == stateFromStores) {
    class U {
      constructor(arg0) {
        height = channelId.nativeEvent.layout.height;
        tmp = null != height;
        if (tmp) {
          tmp2 = closure_3;
          tmp = closure_3 !== height;
        }
        if (tmp) {
          tmp3 = closure_4;
          tmp4 = closure_4(height);
        }
        return;
      }
    }
  } else {
    class U {
      constructor(arg0) {
        height = channelId.nativeEvent.layout.height;
        tmp = null != height;
        if (tmp) {
          tmp2 = closure_3;
          tmp = closure_3 !== height;
        }
        if (tmp) {
          tmp3 = closure_4;
          tmp4 = closure_4(height);
        }
        return;
      }
    }
    if (cResult[9] !== stateFromStores) {
      class U {
        constructor(arg0) {
          height = channelId.nativeEvent.layout.height;
          tmp = null != height;
          if (tmp) {
            tmp2 = closure_3;
            tmp = closure_3 !== height;
          }
          if (tmp) {
            tmp3 = closure_4;
            tmp4 = closure_4(height);
          }
          return;
        }
      }
      const obj3 = { hasIcons: true, children: null };
      const obj4 = { channel: stateFromStores };
      const items2 = [closure_9(closure_12, obj4), ];
      const obj5 = { channel: stateFromStores };
      items2[1] = closure_9(closure_13, obj5);
      obj3.children = items2;
      const tmp26 = closure_10(tmp(6074).TableRowGroup, obj3);
      cResult[9] = stateFromStores;
      cResult[10] = tmp26;
    } else {
      class U {
        constructor(arg0) {
          height = channelId.nativeEvent.layout.height;
          tmp = null != height;
          if (tmp) {
            tmp2 = closure_3;
            tmp = closure_3 !== height;
          }
          if (tmp) {
            tmp3 = closure_4;
            tmp4 = closure_4(height);
          }
          return;
        }
      }
    }
    if (cResult[11] !== token) {
      class U {
        constructor(arg0) {
          height = channelId.nativeEvent.layout.height;
          tmp = null != height;
          if (tmp) {
            tmp2 = closure_3;
            tmp = closure_3 !== height;
          }
          if (tmp) {
            tmp3 = closure_4;
            tmp4 = closure_4(height);
          }
          return;
        }
      }
      tmp28[0] = token;
      cResult[11] = token;
      cResult[12] = tmp28;
    } else {
      class U {
        constructor(arg0) {
          height = channelId.nativeEvent.layout.height;
          tmp = null != height;
          if (tmp) {
            tmp2 = closure_3;
            tmp = closure_3 !== height;
          }
          if (tmp) {
            tmp3 = closure_4;
            tmp4 = closure_4(height);
          }
          return;
        }
      }
    }
    if (cResult[13] !== stageParticipantsCount) {
      class U {
        constructor(arg0) {
          height = channelId.nativeEvent.layout.height;
          tmp = null != height;
          if (tmp) {
            tmp2 = closure_3;
            tmp = closure_3 !== height;
          }
          if (tmp) {
            tmp3 = closure_4;
            tmp4 = closure_4(height);
          }
          return;
        }
      }
      const obj6 = { numHands: null };
      const _HermesInternal = HermesInternal;
      obj6.numHands = "" + stageParticipantsCount;
      const formatResult = obj8.format(tmp(1126).t["5z7q5a"], obj6);
      cResult[13] = stageParticipantsCount;
      cResult[14] = formatResult;
    } else {
      class U {
        constructor(arg0) {
          height = channelId.nativeEvent.layout.height;
          tmp = null != height;
          if (tmp) {
            tmp2 = closure_3;
            tmp = closure_3 !== height;
          }
          if (tmp) {
            tmp3 = closure_4;
            tmp4 = closure_4(height);
          }
          return;
        }
      }
    }
    if (cResult[15] !== tmp29) {
      class U {
        constructor(arg0) {
          height = channelId.nativeEvent.layout.height;
          tmp = null != height;
          if (tmp) {
            tmp2 = closure_3;
            tmp = closure_3 !== height;
          }
          if (tmp) {
            tmp3 = closure_4;
            tmp4 = closure_4(height);
          }
          return;
        }
      }
      const obj7 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: tmp29 };
      const tmp32 = closure_9(tmp(4886).Text, obj7);
      cResult[15] = tmp29;
      cResult[16] = tmp32;
    } else {
      class U {
        constructor(arg0) {
          height = channelId.nativeEvent.layout.height;
          tmp = null != height;
          if (tmp) {
            tmp2 = closure_3;
            tmp = closure_3 !== height;
          }
          if (tmp) {
            tmp3 = closure_4;
            tmp4 = closure_4(height);
          }
          return;
        }
      }
    }
    if (cResult[17] === tmp31) {
      class U {
        constructor(arg0) {
          height = channelId.nativeEvent.layout.height;
          tmp = null != height;
          if (tmp) {
            tmp2 = closure_3;
            tmp = closure_3 !== height;
          }
          if (tmp) {
            tmp3 = closure_4;
            tmp4 = closure_4(height);
          }
          return;
        }
      }
      if (cResult[20] === P) {
        class U {
          constructor(arg0) {
            height = channelId.nativeEvent.layout.height;
            tmp = null != height;
            if (tmp) {
              tmp2 = closure_3;
              tmp = closure_3 !== height;
            }
            if (tmp) {
              tmp3 = closure_4;
              tmp4 = closure_4(height);
            }
            return;
          }
        }
      }
      const obj9 = { spacing: 8, onLayout: P, children: null };
      const items3 = [tmp22, tmp33];
      obj9.children = items3;
      const tmp39 = closure_10(tmp(5593).Stack, obj9);
      cResult[20] = P;
      cResult[21] = tmp33;
      cResult[22] = tmp22;
      cResult[23] = tmp39;
    }
    const obj10 = { style: tmp28, children: tmp31 };
    const tmp36 = closure_9(View, obj10);
    cResult[17] = tmp31;
    cResult[18] = tmp28;
    cResult[19] = tmp36;
  }
  const tmpResult2 = channelId(5588);
}) : ((channelId) => {
  channelId = channelId.channelId;
  let first;
  let first1;
  noop = undefined;
  const token = channelId(4580).useToken(first(587).modules.mobile.TABLE_ROW_PADDING);
  const obj = channelId(4580);
  const tmp3 = first;
  const items = [];
  const tmp5 = closure_11();
  const tmp6 = first(6657);
  items[HermesBuiltin.arraySpread(channelId.analyticsLocations, 0)] = first(6681).REQUEST_TO_SPEAK;
  const arraySpreadResult = HermesBuiltin.arraySpread(channelId.analyticsLocations, 0);
  const items1 = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const obj2 = channelId(504);
  const stageParticipantsCount = channelId(5588).useStageParticipantsCount(channelId, channelId(5582).StageChannelParticipantNamedIndex.ALL_REQUESTED_TO_SPEAK);
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
      onLayout(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          let tmp = null != height;
          if (tmp) {
            tmp = first1 !== height;
          }
          if (tmp) {
            closure_4(height);
          }
        },
      children: null
    };
    const obj7 = { spacing: 8, children: null };
    const obj8 = {
      spacing: 8,
      onLayout(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          let tmp = null != height;
          if (tmp) {
            tmp = first !== height;
          }
          if (tmp) {
            closure_2(height);
          }
        },
      children: null
    };
    const obj9 = { hasIcons: true, children: null };
    const obj10 = { channel: stateFromStores };
    const items2 = [closure_9(closure_12, obj10), ];
    const obj11 = { channel: stateFromStores };
    items2[1] = closure_9(closure_13, obj11);
    obj9.children = items2;
    const items3 = [closure_10(tmp(6074).TableRowGroup, obj9), ];
    const obj12 = { style: null, children: null };
    const obj13 = { paddingHorizontal: token };
    obj12.style = obj13;
    const obj14 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
    const intl = tmp(1126).intl;
    const obj15 = { numHands: null };
    const _HermesInternal = HermesInternal;
    obj15.numHands = "" + stageParticipantsCount;
    obj14.children = intl.format(tmp(1126).t["5z7q5a"], obj15);
    obj12.children = closure_9(tmp(4886).Text, obj14);
    items3[1] = closure_9(View, obj12);
    obj8.children = items3;
    const items4 = [closure_10(tmp(5593).Stack, obj8), ];
    const obj16 = { channel: stateFromStores, height: null };
    const _Math = Math;
    obj16.height = Math.max(first1 - first - 8, 0);
    items4[1] = closure_9(tmp3(9585), obj16);
    obj7.children = items4;
    obj6.children = closure_10(tmp(5593).Stack, obj7);
    obj5.children = closure_9(tmp(6112).BottomSheetScrollView, obj6);
    obj4.children = closure_9(tmp(6645).BottomSheet, obj5);
    tmp14 = closure_9(tmp(6657).AnalyticsLocationProvider, obj4);
    const tmp3Result = tmp3(9585);
  }
  return tmp14;
});