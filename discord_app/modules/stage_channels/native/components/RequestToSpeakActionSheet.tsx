// === Module 9578: RequestToSpeakActionSheet ===

// Module 9578 (RequestToSpeakActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import useAudienceRequestToSpeakStateDefault from "useAudienceRequestToSpeakState" /* 5037 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5571 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 5579 */;
import TableSwitchRow2 from "TableSwitchRow" /* 6698 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 8074 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8084 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8086 */;
import useRequestToSpeakPermission from "useRequestToSpeakPermission" /* 9579 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, channel, channelId, dependencyMap, importDefault;

let c10;
let c9;
let obj2;
let tmp8;
const AssetRegistryDefault = tmp8(9584);
let react = react_mod;
const View = react_native.View;
let closure_8 = StageChannelsConstants.REQUEST_TO_SPEAK_SHEET_KEY;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { container: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_11 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let first;
  let tmp11;
  let tmp5;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(9);
  channel = channel.channel;
  const obj2 = useRequestToSpeakPermission;
  [tmp5, tmp6] = obj2.useRequestToSpeakPermission(channel.id);
  let closure_0 = tmp6;
  _slicedToArray(obj2.useRequestToSpeakPermission(channel.id), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl3.intl;
    const stringResult = intl.string(intl3.t.TYZgzW);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp5) {
    let stringResult1;
    const intl2 = intl3.intl;
    const string = intl2.string;
    const t = intl3.t;
    if (tmp5) {
      stringResult1 = string(t["JcFI/U"]);
    } else {
      stringResult1 = string(t.laPwJQ);
    }
    cResult[1] = tmp5;
    cResult[2] = stringResult1;
    tmp9 = stringResult1;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== tmp6) {
    const fn = function c(arg0) {
      return tmp6(arg0);
    };
    cResult[3] = tmp6;
    cResult[4] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === tmp5) {
    if (cResult[6] === tmp9) {
      let tmp12;
      if (cResult[7] === tmp11) {
        tmp12 = cResult[8];
      }
      return tmp12;
    }
  }
  const tmp13 = React4(TableSwitchRow2.TableSwitchRow, { label: first, subLabel: tmp9, value: tmp5, onValueChange: tmp11 });
  cResult[5] = tmp5;
  cResult[6] = tmp9;
  cResult[7] = tmp11;
  cResult[8] = tmp13;
  tmp12 = tmp13;
}) : ((channel) => {
  let c0;
  let intl;
  let stringResult;
  let tmp2;
  c0 = undefined;
  channel = channel.channel;
  const obj = useRequestToSpeakPermission;
  [tmp2, c0] = obj.useRequestToSpeakPermission(channel.id);
  const obj2 = {
    label: intl.string(intl3.t.TYZgzW),
    subLabel: stringResult,
    value: tmp2,
    onValueChange(arg0) {
      return _undefined(arg0);
    }
  };
  _slicedToArray(obj.useRequestToSpeakPermission(channel.id), 2);
  const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
  intl = intl3.intl;
  const intl2 = intl3.intl;
  const string = intl2.string;
  const t = intl3.t;
  if (tmp2) {
    stringResult = string(t["JcFI/U"]);
  } else {
    stringResult = string(t.laPwJQ);
  }
  return React4(TableSwitchRow, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let closure_1;
  let tmp4;
  let tmp5;
  let obj = channel(576);
  const cResult = obj.c(14);
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
  const tmpResult = channel(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  let id;
  const tmp9 = useAudienceRequestToSpeakStateDefault;
  if (channel != null) {
    id = channel.id;
  }
  const tmp9Result = tmp9(stateFromStores, id);
  const tmp12 = tmp9Result === channel(5037).RequestToSpeakStates.ON_STAGE;
  importDefault = tmp12;
  if (cResult[2] === channel) {
    let tmp13;
    let tmp14;
    let MicrophoneArrowRightIcon;
    let tmp16;
    let tmp19;
    if (cResult[3] === tmp12) {
      tmp13 = cResult[4];
    }
    if (cResult[5] !== tmp12) {
      let stringResult;
      const intl = tmp(1126).intl;
      const string = intl.string;
      const t = tmp(1126).t;
      if (tmp12) {
        stringResult = string(t.ezLpY6);
      } else {
        stringResult = string(t["8Joh+p"]);
      }
      cResult[5] = tmp12;
      cResult[6] = stringResult;
      tmp14 = stringResult;
    } else {
      tmp14 = cResult[6];
    }
    if (tmp12) {
      MicrophoneArrowRightIcon = tmp(9580).GroupArrowDownIcon;
    } else {
      MicrophoneArrowRightIcon = tmp(9582).MicrophoneArrowRightIcon;
    }
    if (cResult[7] !== MicrophoneArrowRightIcon) {
      const tmp18 = closure_9(MicrophoneArrowRightIcon, {});
      cResult[7] = MicrophoneArrowRightIcon;
      cResult[8] = tmp18;
      tmp16 = tmp18;
    } else {
      tmp16 = cResult[8];
    }
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      let obj2 = { source: AssetRegistryDefault };
      const Icon = tmp(1188).Icon;
      const tmp21 = closure_9(Icon, obj2);
      cResult[9] = tmp21;
      tmp19 = tmp21;
    } else {
      tmp19 = cResult[9];
    }
    if (cResult[10] === tmp14) {
      if (cResult[11] === tmp13) {
        let tmp22;
        if (cResult[12] === tmp16) {
          tmp22 = cResult[13];
        }
        return tmp22;
      }
    }
    let obj3 = { onPress: tmp13, icon: tmp16, label: tmp14, trailing: tmp19 };
    const tmp24 = closure_9(channel(5993).TableRow, obj3);
    cResult[10] = tmp14;
    cResult[11] = tmp13;
    cResult[12] = tmp16;
    cResult[13] = tmp24;
    tmp22 = tmp24;
  }
  class S {
    constructor() {
      if (!closure_1) {
        const obj = useStageSpeakingForCurrentUser;
        if (obj.shouldAgeVerifyToSpeakForCurrentUser(channel.id)) {
          const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
          const showAgeVerificationGetStartedModal = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
          AgeVerificationActionCreatorsDefault;
          const result = showAgeVerificationGetStartedModal(obj2);
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet(closure_8);
        }
      }
      const obj4 = StageChannelActionCreators;
      const result1 = obj4.audienceAckRequestToSpeak(channel, closure_1);
      const obj5 = ActionSheetActionCreatorsDefault;
      obj5.hideActionSheet(closure_8);
    }
  }
  cResult[2] = channel;
  cResult[3] = tmp12;
  cResult[4] = S;
  tmp13 = S;
}) : ((channel) => {
  let Icon;
  let MicrophoneArrowRightIcon;
  let closure_1;
  let obj3;
  let stringResult;
  channel = channel.channel;
  importDefault = undefined;
  let obj = channel(504);
  const items = [AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  let id;
  const tmp5 = useAudienceRequestToSpeakStateDefault;
  if (channel != null) {
    id = channel.id;
  }
  const tmp5Result = tmp5(stateFromStores, id);
  const tmp8 = tmp5Result === channel(5037).RequestToSpeakStates.ON_STAGE;
  importDefault = tmp8;
  const intl = tmp(1126).intl;
  const string = intl.string;
  const t = tmp(1126).t;
  if (tmp8) {
    stringResult = string(t.ezLpY6);
  } else {
    stringResult = string(t["8Joh+p"]);
  }
  if (tmp8) {
    MicrophoneArrowRightIcon = tmp(9580).GroupArrowDownIcon;
  } else {
    MicrophoneArrowRightIcon = tmp(9582).MicrophoneArrowRightIcon;
  }
  let obj2 = {
    onPress() {
      if (!closure_1) {
        const obj = useStageSpeakingForCurrentUser;
        if (obj.shouldAgeVerifyToSpeakForCurrentUser(channel.id)) {
          const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_RAISE_HAND };
          const showAgeVerificationGetStartedModal = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal;
          AgeVerificationActionCreatorsDefault;
          const result = showAgeVerificationGetStartedModal(obj2);
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet(closure_8);
        }
      }
      const obj4 = StageChannelActionCreators;
      const result1 = obj4.audienceAckRequestToSpeak(channel, closure_1);
      const obj5 = ActionSheetActionCreatorsDefault;
      obj5.hideActionSheet(closure_8);
    },
    icon: closure_9(MicrophoneArrowRightIcon, {}),
    label: stringResult,
    trailing: closure_9(Icon, obj3)
  };
  const TableRow = tmp(5993).TableRow;
  obj3 = { source: AssetRegistryDefault };
  Icon = tmp(1188).Icon;
  return closure_9(TableRow, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let closure_2;
  let closure_4;
  let first;
  let first1;
  let items2;
  let items3;
  let tmp12;
  let tmp14;
  let tmp8;
  const obj = channelId(576);
  const cResult = obj.c(40);
  channelId = channelId.channelId;
  const analyticsLocations = channelId.analyticsLocations;
  const obj2 = channelId(4580);
  const token = obj2.useToken(first(587).modules.mobile.TABLE_ROW_PADDING);
  closure_11();
  if (cResult[0] !== analyticsLocations) {
    const items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(items, analyticsLocations, 0);
    items[arraySpreadResult] = first(6681).REQUEST_TO_SPEAK;
    cResult[0] = analyticsLocations;
    cResult[1] = items;
    tmp8 = items;
  } else {
    tmp8 = cResult[1];
  }
  const analyticsLocations2 = tmp5(6657)(tmp8).analyticsLocations;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[2] = items1;
    tmp12 = items1;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] !== channelId) {
    const fn = function b() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[3] = channelId;
    cResult[4] = fn;
    tmp14 = fn;
  } else {
    tmp14 = cResult[4];
  }
  const tmp2Result = channelId(504);
  const stateFromStores = tmp2Result.useStateFromStores(tmp12, tmp14);
  const tmp2Result2 = channelId(5588);
  const stageParticipantsCount = tmp2Result2.useStageParticipantsCount(channelId, tmp2(5582).StageChannelParticipantNamedIndex.ALL_REQUESTED_TO_SPEAK);
  const tmp17 = first1(react.useState(0), 2);
  first = tmp17[0];
  dependencyMap = tmp17[1];
  const tmp19 = first1(react.useState(0), 2);
  first1 = tmp19[0];
  react = tmp19[1];
  if (cResult[5] !== first) {
    class P {
      constructor(nativeEvent) {
        const height = nativeEvent.nativeEvent.layout.height;
        const tmp = null != height && first !== height;
        if (tmp) {
          closure_2(height);
        }
      }
    }
    cResult[5] = first;
    cResult[6] = P;
  } else {
    class P {
      constructor(nativeEvent) {
        const height = nativeEvent.nativeEvent.layout.height;
        const tmp = null != height && first !== height;
        if (tmp) {
          closure_2(height);
        }
      }
    }
  }
  if (cResult[7] !== first1) {
    class U {
      constructor(nativeEvent) {
        const height = nativeEvent.nativeEvent.layout.height;
        const tmp = null != height && first1 !== height;
        if (tmp) {
          closure_4(height);
        }
      }
    }
    cResult[7] = first1;
    cResult[8] = U;
  } else {
    class U {
      constructor(nativeEvent) {
        const height = nativeEvent.nativeEvent.layout.height;
        const tmp = null != height && first1 !== height;
        if (tmp) {
          closure_4(height);
        }
      }
    }
  }
  if (null == stateFromStores) {
    class U {
      constructor(nativeEvent) {
        const height = nativeEvent.nativeEvent.layout.height;
        const tmp = null != height && first1 !== height;
        if (tmp) {
          closure_4(height);
        }
      }
    }
  } else {
    class U {
      constructor(nativeEvent) {
        const height = nativeEvent.nativeEvent.layout.height;
        const tmp = null != height && first1 !== height;
        if (tmp) {
          closure_4(height);
        }
      }
    }
    if (cResult[9] !== stateFromStores) {
      class U {
        constructor(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          const tmp = null != height && first1 !== height;
          if (tmp) {
            closure_4(height);
          }
        }
      }
      const obj3 = { hasIcons: true, children: items2 };
      const obj4 = { channel: stateFromStores };
      const TableRowGroup = tmp2(6074).TableRowGroup;
      items2 = [closure_9(closure_12, obj4), ];
      const obj5 = { channel: stateFromStores };
      items2[1] = closure_9(closure_13, obj5);
      cResult[9] = stateFromStores;
      cResult[10] = closure_10(TableRowGroup, obj3);
      const tmp27 = closure_10(TableRowGroup, obj3);
    } else {
      class U {
        constructor(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          const tmp = null != height && first1 !== height;
          if (tmp) {
            closure_4(height);
          }
        }
      }
    }
    if (cResult[11] !== token) {
      class U {
        constructor(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          const tmp = null != height && first1 !== height;
          if (tmp) {
            closure_4(height);
          }
        }
      }
      tmp29[0] = token;
      cResult[11] = token;
      cResult[12] = tmp29;
    } else {
      class U {
        constructor(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          const tmp = null != height && first1 !== height;
          if (tmp) {
            closure_4(height);
          }
        }
      }
    }
    if (cResult[13] !== stageParticipantsCount) {
      class U {
        constructor(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          const tmp = null != height && first1 !== height;
          if (tmp) {
            closure_4(height);
          }
        }
      }
      const format = tmp31.format;
      const _HermesInternal = HermesInternal;
      const obj6 = { numHands: "" + stageParticipantsCount };
      const v5z7q5a = tmp2(1126).t["5z7q5a"];
      cResult[13] = stageParticipantsCount;
      cResult[14] = format(v5z7q5a, obj6);
      const formatResult = format(v5z7q5a, obj6);
    } else {
      class U {
        constructor(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          const tmp = null != height && first1 !== height;
          if (tmp) {
            closure_4(height);
          }
        }
      }
    }
    if (cResult[15] !== tmp30) {
      class U {
        constructor(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          const tmp = null != height && first1 !== height;
          if (tmp) {
            closure_4(height);
          }
        }
      }
      const obj7 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: tmp30 };
      cResult[15] = tmp30;
      cResult[16] = closure_9(channelId(4886).Text, obj7);
      const tmp35 = closure_9(channelId(4886).Text, obj7);
    } else {
      class U {
        constructor(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          const tmp = null != height && first1 !== height;
          if (tmp) {
            closure_4(height);
          }
        }
      }
    }
    if (cResult[17] === tmp34) {
      class U {
        constructor(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          const tmp = null != height && first1 !== height;
          if (tmp) {
            closure_4(height);
          }
        }
      }
      if (cResult[20] === P) {
        class U {
          constructor(nativeEvent) {
            const height = nativeEvent.nativeEvent.layout.height;
            const tmp = null != height && first1 !== height;
            if (tmp) {
              closure_4(height);
            }
          }
        }
      }
      const obj8 = { spacing: 8, onLayout: P, children: items3 };
      items3 = [tmp23, tmp36];
      cResult[20] = P;
      cResult[21] = tmp36;
      cResult[22] = tmp23;
      cResult[23] = closure_10(channelId(5593).Stack, obj8);
      const tmp42 = closure_10(channelId(5593).Stack, obj8);
    }
    const obj9 = { style: tmp29, children: tmp34 };
    cResult[17] = tmp34;
    cResult[18] = tmp29;
    cResult[19] = closure_9(View, obj9);
    const tmp39 = closure_9(View, obj9);
  }
}) : ((channelId) => {
  let BottomSheetScrollView;
  let Stack;
  let Text;
  let closure_2;
  let closure_4;
  let format;
  let items2;
  let items3;
  let items4;
  let obj13;
  let obj14;
  let obj15;
  let obj5;
  let obj6;
  let obj7;
  let v5z7q5a;
  channelId = channelId.channelId;
  let first;
  let first1;
  react = undefined;
  const analyticsLocations = channelId.analyticsLocations;
  const obj = channelId(4580);
  const token = obj.useToken(first(587).modules.mobile.TABLE_ROW_PADDING);
  const items = [];
  const tmp6 = closure_11();
  const tmp7 = first(6657);
  const arraySpreadResult = HermesBuiltin.arraySpread(items, analyticsLocations, 0);
  items[arraySpreadResult] = first(6681).REQUEST_TO_SPEAK;
  const analyticsLocations2 = tmp7(items).analyticsLocations;
  const items1 = [ChannelStore];
  const obj2 = channelId(504);
  const stateFromStores = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const obj3 = channelId(5588);
  const stageParticipantsCount = obj3.useStageParticipantsCount(channelId, channelId(5582).StageChannelParticipantNamedIndex.ALL_REQUESTED_TO_SPEAK);
  const tmp11 = first1(react.useState(0), 2);
  const tmp4 = first;
  first = tmp11[0];
  dependencyMap = tmp11[1];
  const tmp13 = first1(react.useState(0), 2);
  first1 = tmp13[0];
  react = tmp13[1];
  let tmp15 = null;
  if (null != stateFromStores) {
    const obj4 = { value: analyticsLocations2, children: closure_9(BottomSheet, obj5) };
    const AnalyticsLocationProvider = tmp2(6657).AnalyticsLocationProvider;
    obj5 = { scrollable: true, startExpanded: stageParticipantsCount >= 5, children: closure_9(BottomSheetScrollView, obj6) };
    BottomSheet = tmp2(6645).BottomSheet;
    obj6 = {
      style: tmp6.container,
      onLayout(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          const tmp = null != height && first1 !== height;
          if (tmp) {
            closure_4(height);
          }
        },
      children: closure_10(Stack, obj7)
    };
    BottomSheetScrollView = tmp2(6112).BottomSheetScrollView;
    obj7 = { spacing: 8, children: items4 };
    Stack = tmp2(5593).Stack;
    const obj8 = {
      spacing: 8,
      onLayout(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          const tmp = null != height && first !== height;
          if (tmp) {
            closure_2(height);
          }
        },
      children: items3
    };
    const Stack2 = tmp2(5593).Stack;
    const obj10 = { channel: stateFromStores };
    const obj9 = { hasIcons: true, children: items2 };
    const TableRowGroup = tmp2(6074).TableRowGroup;
    items2 = [closure_9(closure_12, obj10), ];
    const obj11 = { channel: stateFromStores };
    items2[1] = closure_9(closure_13, obj11);
    items3 = [closure_10(TableRowGroup, obj9), ];
    const obj12 = { style: obj13, children: closure_9(Text, obj14) };
    obj13 = { paddingHorizontal: token };
    obj14 = { accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: format(v5z7q5a, obj15) };
    Text = tmp2(4886).Text;
    const intl = tmp2(1126).intl;
    format = intl.format;
    const _HermesInternal = HermesInternal;
    obj15 = { numHands: "" + stageParticipantsCount };
    v5z7q5a = tmp2(1126).t["5z7q5a"];
    items3[1] = closure_9(View, obj12);
    items4 = [closure_10(Stack2, obj8), ];
    const _Math = Math;
    const obj16 = { channel: stateFromStores, height: Math.max(first1 - first - 8, 0) };
    const tmp4Result = tmp4(9585);
    items4[1] = closure_9(tmp4Result, obj16);
    tmp15 = closure_9(AnalyticsLocationProvider, obj4);
  }
  return tmp15;
});
let result = size.fileFinishedImporting("modules/stage_channels/native/components/RequestToSpeakActionSheet.tsx");

export default tmp3;