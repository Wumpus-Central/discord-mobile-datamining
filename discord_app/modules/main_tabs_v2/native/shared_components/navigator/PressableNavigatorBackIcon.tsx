// discord_app/modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorBackIcon.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import _modDef7512 from "../../../../../../_runtime/metro/07512__.js";
import MaskedBadgeDefault from "../MaskedBadge.tsx";
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import GuildReadStateStore from "../../../../../stores/GuildReadStateStore.tsx";
import SelectedChannelStore from "../../../../../stores/SelectedChannelStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_3 = ["navigation", "onPress", "badgeCutoutColor"];
get_ActivityIndicator = fn(17);
({ View: metroRequire, Image: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4896);
let closure_13 = createStyles.createStyles(() => {
  const obj = { maskWrapper: null, maskStroke: null, actionButtonPressable: null, actionButtonIcon: null };
  const rect = {
    position: "absolute",
    minWidth: native.BADGE_SIZE,
    height: native.BADGE_SIZE,
    top: 10,
    left: 8,
    flexShrink: 0,
    flexGrow: 1,
    zIndex: 100,
  };
  obj.maskWrapper = rect;
  obj.maskStroke = { backgroundColor: nativeDefault.colors.PANEL_BG };
  obj.actionButtonPressable = { padding: 8, zIndex: 100, borderRadius: 20 };
  const obj2 = { backgroundColor: nativeDefault.colors.PANEL_BG };
  obj.actionButtonIcon = { tintColor: nativeDefault.colors.ICON_SUBTLE };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorBackIcon.tsx",
);

export const PressableNavigatorBackIcon = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (navigation, ref) => {
        const cResult = require("c").c(31);
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
          let tmp7 = tmp10;
          let tmp4 = badgeCutoutColor;
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
              return (
                totalMentionCount - obj.getHighImportanceMentionCountForChannel(guild_id, currentlySelectedChannelId)
              );
            }
            obj = totalMentionCount;
          };
          cResult[5] = items;
          cResult[6] = fn;
          let tmp13 = fn;
          let tmp12 = items;
        } else {
          tmp12 = cResult[5];
          tmp13 = cResult[6];
        }
        let obj = require("c");
        const stateFromStores = require("initialize").useStateFromStores(tmp12, tmp13);
        if (stateFromStores >= 10) {
          if (stateFromStores < 100) {
            const _Symbol2 = Symbol;
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              const obj2 = { minWidth: tmp(1188).BADGE_SIZE + 8 };
              cResult[7] = obj2;
            }
          } else {
            const _Symbol = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              const obj3 = { minWidth: tmp(1188).BADGE_SIZE + 12 };
              cResult[8] = obj3;
            }
          }
        }
        const tmpResult = require("initialize");
        let backgroundColor = require("useToken").useToken(tmp4);
        const tmpResult3 = require("useToken");
        if (backgroundColor == null) {
          backgroundColor = tmpResult4.useGradientValue(tmp(4702).GradientPercentage.START);
        }
        if (backgroundColor == null) {
          backgroundColor = tmp11.maskStroke.backgroundColor;
        }
        if (cResult[9] === tmp5) {
          if (cResult[10] === tmp6) {
            let tmp22 = cResult[11];
          }
          if (cResult[12] !== stateFromStores) {
            if (stateFromStores > 0) {
              const intl2 = tmp(1126).intl;
              const obj4 = { mentionCount: stateFromStores };
              let formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t.vxFYaM, obj4);
            } else {
              const intl = tmp(1126).intl;
              formatToPlainStringResult = intl.string(tmp(1126).t["13/7kX"]);
            }
            cResult[12] = stateFromStores;
            cResult[13] = formatToPlainStringResult;
          } else {
            if (cResult[14] !== tmp11.actionButtonIcon.tintColor) {
              const obj5 = { source: _modDef7512, style: null };
              const obj6 = { tintColor: tmp11.actionButtonIcon.tintColor };
              obj5.style = obj6;
              const tmp30 = closure_11(closure_7, obj5);
              cResult[14] = tmp11.actionButtonIcon.tintColor;
              cResult[15] = tmp30;
              let tmp26 = tmp30;
            } else {
              tmp26 = cResult[15];
            }
            if (cResult[16] === stateFromStores) {
              if (cResult[17] === backgroundColor) {
                if (cResult[18] === tmp11.maskWrapper) {
                  if (cResult[19] === tmp18) {
                    let tmp31 = cResult[20];
                  }
                  if (cResult[21] === tmp26) {
                    if (cResult[22] === tmp31) {
                      let tmp36 = cResult[23];
                    }
                    if (cResult[24] === tmp22) {
                      if (cResult[25] === tmp7) {
                        if (cResult[26] === ref) {
                          if (cResult[27] === tmp11.actionButtonPressable) {
                            if (cResult[28] === tmp23) {
                              if (cResult[29] === tmp36) {
                                let tmp41 = cResult[30];
                              }
                              return tmp41;
                            }
                          }
                        }
                      }
                    }
                    const obj7 = { children: null };
                    const obj8 = { ref };
                    const merged = Object.assign(tmp7);
                    obj8.accessibilityRole = "button";
                    obj8.accessibilityLabel = tmp23;
                    obj8.onPress = tmp22;
                    obj8.style = tmp11.actionButtonPressable;
                    obj8.children = tmp36;
                    obj7.children = closure_11(tmp(5916).PressableOpacity, obj8);
                    const tmp48 = closure_11(PressableNavigatorButtonWrapperDefault, obj7);
                    cResult[24] = tmp22;
                    cResult[25] = tmp7;
                    cResult[26] = ref;
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
                    cResult[28] = tmp23;
                    cResult[29] = tmp36;
                    cResult[30] = tmp48;
                    tmp41 = tmp48;
                  }
                  const obj9 = { children: null };
                  const items1 = [tmp26, tmp31];
                  obj9.children = items1;
                  const tmp39 = closure_12(closure_6, obj9);
                  cResult[21] = tmp26;
                  cResult[22] = tmp31;
                  cResult[23] = tmp39;
                  tmp36 = tmp39;
                }
              }
            }
            let tmp32 = null;
            if (stateFromStores > 0) {
              const obj10 = { style: tmp11.maskWrapper, children: null };
              const obj11 = { value: stateFromStores, maxValue: 99, backgroundColor, unread: false, style: tmp18 };
              obj10.children = closure_11(MaskedBadgeDefault, obj11);
              tmp32 = closure_11(closure_6, obj10);
            }
            cResult[16] = stateFromStores;
            cResult[17] = backgroundColor;
            cResult[18] = tmp11.maskWrapper;
            cResult[19] = tmp18;
            cResult[20] = tmp32;
            tmp31 = tmp32;
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
        cResult[9] = tmp5;
        cResult[10] = tmp6;
        cResult[11] = W;
        tmp22 = W;
        tmpResult4 = require("client_themes/ClientThemesUtils");
      }
    : (navigation, ref) => {
        navigation = navigation.navigation;
        const onPress = navigation.onPress;
        const merged = Object.assign(navigation, Object.assign({ navigation: 0, onPress: 0, badgeCutoutColor: 0 }));
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
            return (
              totalMentionCount - obj.getHighImportanceMentionCountForChannel(guild_id, currentlySelectedChannelId)
            );
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
        const token = navigation(stateFromStores[13]).useToken(navigation.badgeCutoutColor);
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
        const items3 = [
          closure_11(closure_7, {
            source: onPress(stateFromStores[16]),
            style: { tintColor: tmp2.actionButtonIcon.tintColor },
          }),
        ];
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
      },
);
