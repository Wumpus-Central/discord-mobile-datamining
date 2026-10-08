// === Module 9234: PressableNavigatorBackIcon ===

// Module 9234 (PressableNavigatorBackIcon)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import _modDef9235 from "module_9235" /* 9235 */;
import MaskedBadgeDefault from "MaskedBadge" /* 9236 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 9238 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import GuildReadStateStore from "GuildReadStateStore" /* 6082 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["navigation", "onPress", "badgeCutoutColor", "ref"];
get_ActivityIndicator = fn(17);
({ View: metroRequire, Image: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5090);
let closure_13 = createStyles.createStyles(() => {
  const obj = { maskWrapper: null, maskStroke: null, actionButtonPressable: null, actionButtonIcon: null };
  const rect = { position: "absolute", minWidth: native.BADGE_SIZE, height: native.BADGE_SIZE, top: 10, left: 8, flexShrink: 0, flexGrow: 1, zIndex: 100 };
  obj.maskWrapper = rect;
  obj.maskStroke = { backgroundColor: nativeDefault.colors.PANEL_BG };
  obj.actionButtonPressable = { padding: 8, zIndex: 100, borderRadius: 20 };
  const obj2 = { backgroundColor: nativeDefault.colors.PANEL_BG };
  obj.actionButtonIcon = { tintColor: nativeDefault.colors.ICON_SUBTLE };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorBackIcon.tsx");

export const PressableNavigatorBackIcon = ReactCompilerGating.isReactCompilerEnabled() ? (function PressableNavigatorBackIcon(navigation) {
  const cResult = require("c").c(32);
  if (cResult[0] !== navigation) {
    navigation = navigation.navigation;
    _require = navigation;
    const onPress = navigation.onPress;
    importDefault = onPress;
    ({ badgeCutoutColor, ref } = navigation);
    const tmp11 = _objectWithoutProperties(navigation, closure_3);
    cResult[0] = navigation;
    cResult[1] = badgeCutoutColor;
    cResult[2] = navigation;
    cResult[3] = onPress;
    cResult[4] = tmp11;
    cResult[5] = ref;
    let tmp8 = ref;
    let tmp7 = tmp11;
    let tmp4 = badgeCutoutColor;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
    importDefault = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  const tmp12 = closure_13();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildReadStateStore, SelectedChannelStore, ChannelStore];
    const fn = function p() {
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
      obj = totalMentionCount;
    };
    cResult[6] = items;
    cResult[7] = fn;
    let tmp14 = fn;
    let tmp13 = items;
  } else {
    tmp13 = cResult[6];
    tmp14 = cResult[7];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp13, tmp14);
  if (stateFromStores >= 10) {
    if (stateFromStores < 100) {
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { minWidth: tmp(1200).BADGE_SIZE + 8 };
        cResult[8] = obj2;
      }
    } else {
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { minWidth: tmp(1200).BADGE_SIZE + 12 };
        cResult[9] = obj3;
      }
    }
  }
  const tmpResult = require("initialize");
  let backgroundColor = require("useToken").useToken(tmp4);
  const tmpResult3 = require("useToken");
  if (backgroundColor == null) {
    backgroundColor = tmpResult4.useGradientValue(tmp(4896).GradientPercentage.START);
  }
  if (backgroundColor == null) {
    backgroundColor = tmp12.maskStroke.backgroundColor;
  }
  if (cResult[10] === tmp5) {
    if (cResult[11] === tmp6) {
      let tmp23 = cResult[12];
    }
    if (cResult[13] !== stateFromStores) {
      if (stateFromStores > 0) {
        const intl2 = tmp(1126).intl;
        const obj4 = { mentionCount: stateFromStores };
        let formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t.vxFYaM, obj4);
      } else {
        const intl = tmp(1126).intl;
        formatToPlainStringResult = intl.string(tmp(1126).t["13/7kX"]);
      }
      cResult[13] = stateFromStores;
      cResult[14] = formatToPlainStringResult;
    } else {
      if (cResult[15] !== tmp12.actionButtonIcon.tintColor) {
        const obj5 = { source: _modDef9235, style: null };
        const obj6 = { tintColor: tmp12.actionButtonIcon.tintColor };
        obj5.style = obj6;
        const tmp31 = closure_11(closure_7, obj5);
        cResult[15] = tmp12.actionButtonIcon.tintColor;
        cResult[16] = tmp31;
        let tmp27 = tmp31;
      } else {
        tmp27 = cResult[16];
      }
      if (cResult[17] === stateFromStores) {
        if (cResult[18] === backgroundColor) {
          if (cResult[19] === tmp12.maskWrapper) {
            if (cResult[20] === tmp19) {
              let tmp32 = cResult[21];
            }
            if (cResult[22] === tmp27) {
              if (cResult[23] === tmp32) {
                let tmp37 = cResult[24];
              }
              if (cResult[25] === tmp23) {
                if (cResult[26] === tmp7) {
                  if (cResult[27] === tmp8) {
                    if (cResult[28] === tmp12.actionButtonPressable) {
                      if (cResult[29] === tmp24) {
                        if (cResult[30] === tmp37) {
                          let tmp41 = cResult[31];
                        }
                        return tmp41;
                      }
                    }
                  }
                }
              }
              const obj7 = { children: null };
              const obj8 = { ref: tmp8 };
              const merged = Object.assign(tmp7);
              obj8.accessibilityRole = "button";
              obj8.accessibilityLabel = tmp24;
              obj8.onPress = tmp23;
              obj8.style = tmp12.actionButtonPressable;
              obj8.children = tmp37;
              obj7.children = closure_11(tmp(6189).PressableOpacity, obj8);
              const tmp48 = closure_11(PressableNavigatorButtonWrapperDefault, obj7);
              cResult[25] = tmp23;
              cResult[26] = tmp7;
              cResult[27] = tmp8;
              cResult[28] = tmp12.actionButtonPressable;
              class W {
                constructor() {
                  if (null == closure_1) {
                    obj = closure_0;
                    if (closure_0 != null) {
                      goBackResult = obj.goBack();
                    }
                  } else {
                    tmpResult = tmp();
                  }
                  return;
                }
              }
              cResult[29] = tmp24;
              cResult[30] = tmp37;
              cResult[31] = tmp48;
              tmp41 = tmp48;
            }
            const obj9 = { children: null };
            const items1 = [tmp27, tmp32];
            obj9.children = items1;
            const tmp40 = closure_12(closure_6, obj9);
            cResult[22] = tmp27;
            cResult[23] = tmp32;
            cResult[24] = tmp40;
            tmp37 = tmp40;
          }
        }
      }
      let tmp33 = null;
      if (stateFromStores > 0) {
        const obj10 = { style: tmp12.maskWrapper, children: null };
        const obj11 = { value: stateFromStores, maxValue: 99, backgroundColor, unread: false, style: tmp19 };
        obj10.children = closure_11(MaskedBadgeDefault, obj11);
        tmp33 = closure_11(closure_6, obj10);
      }
      cResult[17] = stateFromStores;
      cResult[18] = backgroundColor;
      cResult[19] = tmp12.maskWrapper;
      cResult[20] = tmp19;
      cResult[21] = tmp33;
      tmp32 = tmp33;
    }
  }
  class W {
    constructor() {
      if (null == closure_1) {
        obj = closure_0;
        if (closure_0 != null) {
          goBackResult = obj.goBack();
        }
      } else {
        tmpResult = tmp();
      }
      return;
    }
  }
  cResult[10] = tmp5;
  cResult[11] = tmp6;
  cResult[12] = W;
  tmp23 = W;
  tmpResult4 = require("client_themes/ClientThemesUtils");
}) : (function PressableNavigatorBackIcon(navigation) {
  navigation = navigation.navigation;
  const onPress = navigation.onPress;
  ({ badgeCutoutColor, ref } = navigation);
  const merged = Object.assign(navigation, Object.assign({ navigation: 0, onPress: 0, badgeCutoutColor: 0, ref: 0 }));
  let stateFromStores;
  const tmp2 = closure_13();
  const items = [GuildReadStateStore, SelectedChannelStore, ChannelStore];
  stateFromStores = navigation(stateFromStores[12]).useStateFromStores(items, () => {
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
    obj = totalMentionCount;
  });
  const items1 = [stateFromStores];
  const memo = noop.useMemo(() => {
    if (stateFromStores >= 10) {
      if (tmp < 100) {
        const obj2 = { minWidth: native.BADGE_SIZE + 8 };
        let obj = obj2;
      } else {
        obj = { minWidth: native.BADGE_SIZE + 12 };
      }
      return obj;
    }
  }, items1);
  let obj = navigation(stateFromStores[12]);
  const token = navigation(stateFromStores[13]).useToken(badgeCutoutColor);
  const obj3 = navigation(stateFromStores[13]);
  let backgroundColor = token;
  if (token == null) {
    backgroundColor = obj4.useGradientValue(navigation(stateFromStores[14]).GradientPercentage.START);
  }
  if (backgroundColor == null) {
    backgroundColor = tmp2.maskStroke.backgroundColor;
  }
  const items2 = [navigation, onPress];
  const callback = noop.useCallback(() => {
    if (null == onPress) {
      if (navigation != null) {
        navigation.goBack();
      }
    } else {
      tmp();
    }
  }, items2);
  obj4 = navigation(stateFromStores[14]);
  const obj5 = { ref };
  const merged1 = Object.assign(merged);
  obj5.accessibilityRole = "button";
  if (stateFromStores > 0) {
    const intl2 = tmp3(tmp4[15]).intl;
    const obj6 = { mentionCount: stateFromStores };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp3(tmp4[15]).t.vxFYaM, obj6);
  } else {
    const intl = tmp3(tmp4[15]).intl;
    formatToPlainStringResult = intl.string(tmp3(tmp4[15]).t["13/7kX"]);
  }
  obj5.accessibilityLabel = formatToPlainStringResult;
  obj5.onPress = callback;
  obj5.style = tmp2.actionButtonPressable;
  const tmp11 = onPress(stateFromStores[18]);
  const items3 = [closure_11(closure_7, { source: onPress(stateFromStores[16]), style: { tintColor: tmp2.actionButtonIcon.tintColor } }), ];
  let tmp9Result = null;
  if (stateFromStores > 0) {
    const obj8 = { style: tmp2.maskWrapper, children: null };
    const obj9 = { value: stateFromStores, maxValue: 99, backgroundColor, unread: false, style: memo };
    obj8.children = closure_11(tmp10(tmp4[17]), obj9);
    tmp9Result = closure_11(closure_6, obj8);
  }
  const obj10 = { children: null };
  items3[1] = tmp9Result;
  obj5.children = closure_12(closure_6, { children: items3 });
  obj10.children = closure_11(navigation(stateFromStores[19]).PressableOpacity, obj5);
  return closure_11(tmp11, obj10);
});