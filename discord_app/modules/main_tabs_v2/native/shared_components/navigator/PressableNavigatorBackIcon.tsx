// === Module 7511: PressableNavigatorBackIcon ===

// Module 7511 (PressableNavigatorBackIcon)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import AssetRegistryDefault from "AssetRegistry" /* 7512 */;
import MaskedBadgeDefault from "MaskedBadge" /* 7513 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 7515 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7134 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, channel, currentlySelectedChannelId, importDefault, navigation, totalMentionCount;

let closure_12;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let closure_3 = ["navigation", "onPress", "badgeCutoutColor"];
({ View: metroRequire, Image: metroImportDefault } = react_native);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles(() => {
  let rect;
  const obj = { maskWrapper: rect, maskStroke: { backgroundColor: nativeDefault.colors.PANEL_BG }, actionButtonPressable: { padding: 8, zIndex: 100, borderRadius: 20 }, actionButtonIcon: { tintColor: nativeDefault.colors.ICON_SUBTLE } };
  rect = { position: "absolute", minWidth: native.BADGE_SIZE, height: native.BADGE_SIZE, top: 10, left: 8, flexShrink: 0, flexGrow: 1, zIndex: 100 };
  ({ backgroundColor: nativeDefault.colors.PANEL_BG });
  ({ tintColor: nativeDefault.colors.ICON_SUBTLE });
  return obj;
});
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((navigation, ref) => {
  let PressableOpacity;
  let closure_1;
  let items1;
  let obj11;
  let obj6;
  let obj8;
  let tmp12;
  let tmp13;
  let tmp18;
  let tmp4;
  let tmp7;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(31);
  if (cResult[0] !== navigation) {
    navigation = navigation.navigation;
    _require = navigation;
    const onPress = navigation.onPress;
    importDefault = onPress;
    const badgeCutoutColor = navigation.badgeCutoutColor;
    const tmp10 = _objectWithoutProperties(navigation, closure_3);
    cResult[0] = navigation;
    cResult[1] = badgeCutoutColor;
    cResult[2] = navigation;
    cResult[3] = onPress;
    cResult[4] = tmp10;
    tmp7 = tmp10;
    tmp4 = badgeCutoutColor;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
    importDefault = cResult[3];
    tmp7 = cResult[4];
  }
  const tmp11 = closure_13();
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildReadStateStore, SelectedChannelStore, ChannelStore];
    const fn = function f() {
      const obj = totalMentionCount;
      totalMentionCount = totalMentionCount.getTotalMentionCount();
      currentlySelectedChannelId = currentlySelectedChannelId.getCurrentlySelectedChannelId();
      if (null == currentlySelectedChannelId) {
        return totalMentionCount;
      } else {
        channel = channel.getChannel(currentlySelectedChannelId);
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        if (guild_id == null) {
          guild_id = null;
        }
        return totalMentionCount - obj.getHighImportanceMentionCountForChannel(guild_id, currentlySelectedChannelId);
      }
    };
    cResult[5] = items;
    cResult[6] = fn;
    tmp13 = fn;
    tmp12 = items;
  } else {
    tmp12 = cResult[5];
    tmp13 = cResult[6];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp12, tmp13);
  if (stateFromStores >= 10) {
    if (stateFromStores < 100) {
      let tmp20;
      const _Symbol2 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { minWidth: tmp(1188).BADGE_SIZE + 8 };
        cResult[7] = obj2;
        tmp20 = obj2;
      } else {
        tmp20 = cResult[7];
      }
      tmp18 = tmp20;
    } else {
      let tmp19;
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { minWidth: tmp(1188).BADGE_SIZE + 12 };
        cResult[8] = obj3;
        tmp19 = obj3;
      } else {
        tmp19 = cResult[8];
      }
      tmp18 = tmp19;
    }
  }
  const tmpResult3 = tmp(4586);
  let backgroundColor = tmpResult3.useToken(tmp4);
  const useGradientValue = tmp(4702).useGradientValue;
  tmp(4702);
  if (backgroundColor == null) {
    backgroundColor = useGradientValue(tmp(4702).GradientPercentage.START);
  }
  if (backgroundColor == null) {
    backgroundColor = tmp11.maskStroke.backgroundColor;
  }
  if (cResult[9] === tmp5) {
    let tmp22;
    let tmp23;
    let tmp25;
    if (cResult[10] === tmp6) {
      tmp22 = cResult[11];
    }
    if (cResult[12] !== stateFromStores) {
      let formatToPlainStringResult;
      if (stateFromStores > 0) {
        const intl2 = tmp(1126).intl;
        const obj4 = { mentionCount: stateFromStores };
        formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t.vxFYaM, obj4);
      } else {
        const intl = tmp(1126).intl;
        formatToPlainStringResult = intl.string(tmp(1126).t["13/7kX"]);
      }
      cResult[12] = stateFromStores;
      cResult[13] = formatToPlainStringResult;
      tmp23 = formatToPlainStringResult;
    } else {
      tmp23 = cResult[13];
    }
    if (cResult[14] !== tmp11.actionButtonIcon.tintColor) {
      const obj5 = { source: AssetRegistryDefault, style: obj6 };
      obj6 = { tintColor: tmp11.actionButtonIcon.tintColor };
      const tmp29 = closure_11(closure_7, obj5);
      cResult[14] = tmp11.actionButtonIcon.tintColor;
      cResult[15] = tmp29;
      tmp25 = tmp29;
    } else {
      tmp25 = cResult[15];
    }
    if (cResult[16] === stateFromStores) {
      if (cResult[17] === backgroundColor) {
        if (cResult[18] === tmp11.maskWrapper) {
          let tmp30;
          if (cResult[19] === tmp18) {
            tmp30 = cResult[20];
          }
          if (cResult[21] === tmp25) {
            let tmp35;
            if (cResult[22] === tmp30) {
              tmp35 = cResult[23];
            }
            if (cResult[24] === tmp22) {
              if (cResult[25] === tmp7) {
                if (cResult[26] === ref) {
                  if (cResult[27] === tmp11.actionButtonPressable) {
                    if (cResult[28] === tmp23) {
                      let tmp40;
                      if (cResult[29] === tmp35) {
                        tmp40 = cResult[30];
                      }
                      return tmp40;
                    }
                  }
                }
              }
            }
            const obj7 = { children: closure_11(PressableOpacity, obj8) };
            obj8 = { ref, accessibilityRole: "button", accessibilityLabel: tmp23, onPress: tmp22, style: tmp11.actionButtonPressable, children: tmp35 };
            const tmp43 = PressableNavigatorButtonWrapperDefault;
            PressableOpacity = tmp(5916).PressableOpacity;
            const merged = Object.assign(tmp7);
            const tmp47 = closure_11(tmp43, obj7);
            cResult[24] = tmp22;
            cResult[25] = tmp7;
            cResult[26] = ref;
            class W {
              constructor() {
                if (null == closure_1) {
                  if (navigation != null) {
                    navigation.goBack();
                  }
                } else {
                  tmp();
                }
              }
            }
            cResult[28] = tmp23;
            cResult[29] = tmp35;
            cResult[30] = tmp47;
            tmp40 = tmp47;
          }
          const obj9 = { children: items1 };
          items1 = [tmp25, tmp30];
          const tmp38 = closure_12(closure_6, obj9);
          cResult[21] = tmp25;
          cResult[22] = tmp30;
          cResult[23] = tmp38;
          tmp35 = tmp38;
        }
      }
    }
    let tmp31 = null;
    if (stateFromStores > 0) {
      const obj10 = { style: tmp11.maskWrapper, children: closure_11(MaskedBadgeDefault, obj11) };
      obj11 = { value: stateFromStores, maxValue: 99, backgroundColor, unread: false, style: tmp18 };
      tmp31 = closure_11(closure_6, obj10);
    }
    cResult[16] = stateFromStores;
    cResult[17] = backgroundColor;
    cResult[18] = tmp11.maskWrapper;
    cResult[19] = tmp18;
    cResult[20] = tmp31;
    tmp30 = tmp31;
  }
  class W {
    constructor() {
      if (null == closure_1) {
        if (navigation != null) {
          navigation.goBack();
        }
      } else {
        tmp();
      }
    }
  }
  cResult[9] = tmp5;
  cResult[10] = tmp6;
  cResult[11] = W;
  tmp22 = W;
}) : ((navigation, ref) => {
  let formatToPlainStringResult;
  let items3;
  let obj8;
  navigation = navigation.navigation;
  const onPress = navigation.onPress;
  const badgeCutoutColor = navigation.badgeCutoutColor;
  const merged = Object.assign(navigation, Object.assign({ navigation: 0, onPress: 0, badgeCutoutColor: 0 }));
  let stateFromStores;
  const tmp2 = closure_13();
  let obj = navigation(stateFromStores[12]);
  const items = [GuildReadStateStore, SelectedChannelStore, ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    const obj = totalMentionCount;
    totalMentionCount = totalMentionCount.getTotalMentionCount();
    currentlySelectedChannelId = currentlySelectedChannelId.getCurrentlySelectedChannelId();
    if (null == currentlySelectedChannelId) {
      return totalMentionCount;
    } else {
      channel = channel.getChannel(currentlySelectedChannelId);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      if (guild_id == null) {
        guild_id = null;
      }
      return totalMentionCount - obj.getHighImportanceMentionCountForChannel(guild_id, currentlySelectedChannelId);
    }
  });
  const items1 = [stateFromStores];
  const memo = react.useMemo(() => {
    if (stateFromStores >= 10) {
      let obj;
      if (tmp < 100) {
        obj = { minWidth: native.BADGE_SIZE + 8 };
        const obj2 = { minWidth: native.BADGE_SIZE + 8 };
      } else {
        obj = { minWidth: native.BADGE_SIZE + 12 };
      }
      return obj;
    }
  }, items1);
  const obj3 = navigation(stateFromStores[13]);
  const token = obj3.useToken(badgeCutoutColor);
  const useGradientValue = navigation(stateFromStores[14]).useGradientValue;
  let backgroundColor = token;
  navigation(stateFromStores[14]);
  if (token == null) {
    backgroundColor = useGradientValue(navigation(stateFromStores[14]).GradientPercentage.START);
  }
  if (backgroundColor == null) {
    backgroundColor = tmp2.maskStroke.backgroundColor;
  }
  const items2 = [navigation, onPress];
  const callback = react.useCallback(() => {
    if (null == onPress) {
      if (navigation != null) {
        navigation.goBack();
      }
    } else {
      tmp();
    }
  }, items2);
  const obj4 = { ref, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult, onPress: callback, style: tmp2.actionButtonPressable, children: closure_12(closure_6, { children: items3 }) };
  const tmp12 = onPress(stateFromStores[18]);
  const PressableOpacity = tmp3(tmp4[19]).PressableOpacity;
  const merged1 = Object.assign(merged);
  if (stateFromStores > 0) {
    const intl2 = tmp3(tmp4[15]).intl;
    const obj5 = { mentionCount: stateFromStores };
    formatToPlainStringResult = intl2.formatToPlainString(tmp3(tmp4[15]).t.vxFYaM, obj5);
  } else {
    const intl = tmp3(tmp4[15]).intl;
    formatToPlainStringResult = intl.string(tmp3(tmp4[15]).t["13/7kX"]);
  }
  items3 = [, ];
  const obj6 = { source: onPress(stateFromStores[16]), style: { tintColor: tmp2.actionButtonIcon.tintColor } };
  items3[0] = closure_11(closure_7, obj6);
  let tmp10Result = null;
  if (stateFromStores > 0) {
    const obj7 = { style: tmp2.maskWrapper, children: closure_11(onPress(stateFromStores[17]), obj8) };
    obj8 = { value: stateFromStores, maxValue: 99, backgroundColor, unread: false, style: memo };
    tmp10Result = closure_11(closure_6, obj7);
  }
  items3[1] = tmp10Result;
  const obj9 = { children: closure_11(PressableOpacity, obj4) };
  return closure_11(tmp12, obj9);
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorBackIcon.tsx");

export const PressableNavigatorBackIcon = forwardRefResult;