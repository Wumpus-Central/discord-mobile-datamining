// discord_app/modules/icymi/native/custom_scores/ICYMIContentSettingControl.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import ICYMIUtils from "../../ICYMIUtils.tsx";
import SegmentedControlState from "../../../../design/components/SegmentedControl/native/SegmentedControlState.native.tsx";
import SegmentedControl from "../../../../design/components/SegmentedControl/native/SegmentedControl.native.tsx";
import AssetRegistryDefault from "../../../../../_runtime/16444_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../_runtime/16445_AssetRegistry.js";
import AssetRegistryDefault3 from "../../../../../_runtime/16446_AssetRegistry.js";
import NativeICYMIActionCreatorsDefault from "../NativeICYMIActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";
import ICYMIStore from "../../ICYMIStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let channel, guild, importDefault, onValueUpdated;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { customScoreWrapper: obj2, warningText: obj3, icon: size, iconSelected: obj4, muted: obj5 };
obj2 = { marginVertical: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_12 };
size = { width: 24, height: 24, tintColor: nativeDefault.colors.TEXT_MUTED };
obj4 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj5 = { marginTop: nativeDefault.space.PX_16 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onValueUpdated) => {
      let Icon;
      let Icon2;
      let Icon3;
      let first;
      let items1;
      let items2;
      let items3;
      let obj4;
      let obj6;
      let obj8;
      let tmp6;
      const obj = onValueUpdated(576);
      const cResult = obj.c(32);
      onValueUpdated = onValueUpdated.onValueUpdated;
      const initialValue = onValueUpdated.initialValue;
      const tmp4 = closure_10();
      [tmp6, importDefault] = react.useState(initialValue);
      _slicedToArray(react.useState(initialValue), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(onValueUpdated(1126).t.rdt65I);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      let iconSelected = null;
      if (tmp6 === onValueUpdated(8038).ICYMICustomScore.LESS) {
        iconSelected = tmp4.iconSelected;
      }
      if (cResult[1] === tmp4.icon) {
        let tmp10;
        let tmp11;
        if (cResult[2] === iconSelected) {
          tmp10 = cResult[3];
        }
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(onValueUpdated(1126).t.SnrG00);
          cResult[4] = stringResult1;
          tmp11 = stringResult1;
        } else {
          tmp11 = cResult[4];
        }
        let iconSelected1 = null;
        if (tmp6 === onValueUpdated(8038).ICYMICustomScore.DEFAULT) {
          iconSelected1 = tmp4.iconSelected;
        }
        if (cResult[5] === tmp4.icon) {
          let tmp14;
          let tmp17;
          if (cResult[6] === iconSelected1) {
            tmp14 = cResult[7];
          }
          const _Symbol2 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1126).intl;
            const stringResult2 = intl3.string(onValueUpdated(1126).t.Rxe3jF);
            cResult[8] = stringResult2;
            tmp17 = stringResult2;
          } else {
            tmp17 = cResult[8];
          }
          let iconSelected2 = null;
          if (tmp6 === onValueUpdated(8038).ICYMICustomScore.MORE) {
            iconSelected2 = tmp4.iconSelected;
          }
          if (cResult[9] === tmp4.icon) {
            let tmp20;
            if (cResult[10] === iconSelected2) {
              tmp20 = cResult[11];
            }
            if (cResult[12] === tmp10) {
              if (cResult[13] === tmp14) {
                let tmp23;
                if (cResult[14] === tmp20) {
                  tmp23 = cResult[15];
                }
                if (cResult[16] !== onValueUpdated) {
                  class V {
                    constructor(arg0) {
                      tmp = closure_0;
                      tmp2 = closure_2;
                      MORE = closure_0(closure_2[8]).ICYMICustomScore.DEFAULT;
                      if (0 === onValueUpdated) {
                        MORE = tmp(tmp2[8]).ICYMICustomScore.LESS;
                      } else {
                        num = 2;
                        if (2 === onValueUpdated) {
                          MORE = tmp(tmp2[8]).ICYMICustomScore.MORE;
                        }
                      }
                      tmp3 = closure_1(MORE);
                      tmp4 = onValueUpdated(MORE);
                      return;
                    }
                  }
                  cResult[16] = onValueUpdated;
                  cResult[17] = V;
                } else {
                  class V {
                    constructor(arg0) {
                      tmp = closure_0;
                      tmp2 = closure_2;
                      MORE = closure_0(closure_2[8]).ICYMICustomScore.DEFAULT;
                      if (0 === onValueUpdated) {
                        MORE = tmp(tmp2[8]).ICYMICustomScore.LESS;
                      } else {
                        num = 2;
                        if (2 === onValueUpdated) {
                          MORE = tmp(tmp2[8]).ICYMICustomScore.MORE;
                        }
                      }
                      tmp3 = closure_1(MORE);
                      tmp4 = onValueUpdated(MORE);
                      return;
                    }
                  }
                }
                if (cResult[18] !== tmp6) {
                  class V {
                    constructor(arg0) {
                      tmp = closure_0;
                      tmp2 = closure_2;
                      MORE = closure_0(closure_2[8]).ICYMICustomScore.DEFAULT;
                      if (0 === onValueUpdated) {
                        MORE = tmp(tmp2[8]).ICYMICustomScore.LESS;
                      } else {
                        num = 2;
                        if (2 === onValueUpdated) {
                          MORE = tmp(tmp2[8]).ICYMICustomScore.MORE;
                        }
                      }
                      tmp3 = closure_1(MORE);
                      tmp4 = onValueUpdated(MORE);
                      return;
                    }
                  }
                  if (onValueUpdated(8038).ICYMICustomScore.LESS !== tmp6) {
                    class V {
                      constructor(arg0) {
                        tmp = closure_0;
                        tmp2 = closure_2;
                        MORE = closure_0(closure_2[8]).ICYMICustomScore.DEFAULT;
                        if (0 === onValueUpdated) {
                          MORE = tmp(tmp2[8]).ICYMICustomScore.LESS;
                        } else {
                          num = 2;
                          if (2 === onValueUpdated) {
                            MORE = tmp(tmp2[8]).ICYMICustomScore.MORE;
                          }
                        }
                        tmp3 = closure_1(MORE);
                        tmp4 = onValueUpdated(MORE);
                        return;
                      }
                    }
                    if (onValueUpdated(8038).ICYMICustomScore.MORE === tmp6) {
                      class V {
                        constructor(arg0) {
                          tmp = closure_0;
                          tmp2 = closure_2;
                          MORE = closure_0(closure_2[8]).ICYMICustomScore.DEFAULT;
                          if (0 === onValueUpdated) {
                            MORE = tmp(tmp2[8]).ICYMICustomScore.LESS;
                          } else {
                            num = 2;
                            if (2 === onValueUpdated) {
                              MORE = tmp(tmp2[8]).ICYMICustomScore.MORE;
                            }
                          }
                          tmp3 = closure_1(MORE);
                          tmp4 = onValueUpdated(MORE);
                          return;
                        }
                      }
                    }
                  }
                  cResult[18] = tmp6;
                  cResult[19] = tmp26;
                } else {
                  class V {
                    constructor(arg0) {
                      tmp = closure_0;
                      tmp2 = closure_2;
                      MORE = closure_0(closure_2[8]).ICYMICustomScore.DEFAULT;
                      if (0 === onValueUpdated) {
                        MORE = tmp(tmp2[8]).ICYMICustomScore.LESS;
                      } else {
                        num = 2;
                        if (2 === onValueUpdated) {
                          MORE = tmp(tmp2[8]).ICYMICustomScore.MORE;
                        }
                      }
                      tmp3 = closure_1(MORE);
                      tmp4 = onValueUpdated(MORE);
                      return;
                    }
                  }
                }
                if (cResult[20] === tmp23) {
                  class V {
                    constructor(arg0) {
                      tmp = closure_0;
                      tmp2 = closure_2;
                      MORE = closure_0(closure_2[8]).ICYMICustomScore.DEFAULT;
                      if (0 === onValueUpdated) {
                        MORE = tmp(tmp2[8]).ICYMICustomScore.LESS;
                      } else {
                        num = 2;
                        if (2 === onValueUpdated) {
                          MORE = tmp(tmp2[8]).ICYMICustomScore.MORE;
                        }
                      }
                      tmp3 = closure_1(MORE);
                      tmp4 = onValueUpdated(MORE);
                      return;
                    }
                  }
                }
                const obj2 = { pageWidth: 0, onSetActiveIndex: V, items: tmp23, defaultIndex: tmp26 };
                cResult[20] = tmp23;
                cResult[21] = V;
                cResult[22] = tmp26;
                cResult[23] = obj2;
              }
            }
            const items = [tmp10, tmp14, tmp20];
            cResult[12] = tmp10;
            cResult[13] = tmp14;
            cResult[14] = tmp20;
            cResult[15] = items;
            tmp23 = items;
          }
          const obj3 = { label: tmp17, id: "1", icon: closure_8(Icon3, obj4), page: null };
          obj4 = { source: AssetRegistryDefault3, style: items1 };
          Icon3 = tmp(1188).Icon;
          items1 = [tmp4.icon, iconSelected2];
          cResult[9] = tmp4.icon;
          cResult[10] = iconSelected2;
          cResult[11] = obj3;
          tmp20 = obj3;
        }
        const obj5 = { label: tmp11, id: "0", icon: closure_8(Icon2, obj6), page: null };
        obj6 = { source: AssetRegistryDefault2, style: items2 };
        Icon2 = tmp(1188).Icon;
        items2 = [tmp4.icon, iconSelected1];
        cResult[5] = tmp4.icon;
        cResult[6] = iconSelected1;
        cResult[7] = obj5;
        tmp14 = obj5;
      }
      const obj7 = { label: first, id: "-1", icon: closure_8(Icon, obj8), page: null };
      obj8 = { source: AssetRegistryDefault, style: items3 };
      Icon = tmp(1188).Icon;
      items3 = [tmp4.icon, iconSelected];
      cResult[1] = tmp4.icon;
      cResult[2] = iconSelected;
      cResult[3] = obj7;
      tmp10 = obj7;
    }
  : (initialValue) => {
      let Icon;
      let Icon2;
      let Icon3;
      let _undefined;
      let c1;
      let disabled;
      let intl;
      let intl2;
      let intl3;
      let items;
      let items2;
      let items3;
      let num;
      let obj2;
      let obj4;
      let obj6;
      let require;
      let str;
      let tmp3;
      ({ onValueUpdated: require, disabled } = initialValue);
      importDefault = undefined;
      initialValue = initialValue.initialValue;
      const tmp = closure_10();
      [tmp3, c1] = react.useState(initialValue);
      const obj = { label: intl.string(intl5.t.rdt65I), id: "-1", icon: closure_8(Icon, obj2), page: null };
      _slicedToArray(react.useState(initialValue), 2);
      intl = intl5.intl;
      obj2 = { source: AssetRegistryDefault, style: items };
      Icon = native.Icon;
      items = [tmp.icon];
      let iconSelected = null;
      if (tmp3 === ICYMIUtils.ICYMICustomScore.LESS) {
        iconSelected = tmp.iconSelected;
      }
      items[1] = iconSelected;
      const items1 = [obj, ,];
      const obj3 = { label: intl2.string(intl5.t.SnrG00), id: "0", icon: closure_8(Icon2, obj4), page: null };
      intl2 = intl5.intl;
      obj4 = { source: AssetRegistryDefault2, style: items2 };
      Icon2 = native.Icon;
      items2 = [tmp.icon];
      let iconSelected1 = null;
      if (tmp3 === ICYMIUtils.ICYMICustomScore.DEFAULT) {
        iconSelected1 = tmp.iconSelected;
      }
      items2[1] = iconSelected1;
      items1[1] = obj3;
      const obj5 = { label: intl3.string(intl5.t.Rxe3jF), id: "1", icon: closure_8(Icon3, obj6), page: null };
      intl3 = intl5.intl;
      obj6 = { source: AssetRegistryDefault3, style: items3 };
      Icon3 = native.Icon;
      items3 = [tmp.icon];
      let iconSelected2 = null;
      if (tmp3 === ICYMIUtils.ICYMICustomScore.MORE) {
        iconSelected2 = tmp.iconSelected;
      }
      items3[1] = iconSelected2;
      items1[2] = obj5;
      const obj7 = {
        pageWidth: 0,
        onSetActiveIndex(arg0) {
          let MORE = ICYMIUtils.ICYMICustomScore.DEFAULT;
          if (0 === arg0) {
            MORE = ICYMIUtils.ICYMICustomScore.LESS;
          } else if (2 === arg0) {
            MORE = ICYMIUtils.ICYMICustomScore.MORE;
          }
          _undefined(MORE);
          _require(MORE);
        },
        items: items1,
        defaultIndex: num,
      };
      const useSegmentedControlState = SegmentedControlState.useSegmentedControlState;
      num = 0;
      SegmentedControlState;
      if (ICYMIUtils.ICYMICustomScore.LESS !== tmp3) {
        num = 1;
        if (ICYMIUtils.ICYMICustomScore.MORE === tmp3) {
          num = 2;
        }
      }
      let obj8 = null;
      const segmentedControlState = useSegmentedControlState(obj7);
      if (disabled) {
        obj8 = { opacity: 0.7 };
      }
      const obj9 = {
        style: obj8,
        pointerEvents: str,
        children: closure_8(SegmentedControl.SegmentedControl, {
          variant: "experimental_Large",
          state: segmentedControlState,
        }),
      };
      str = "auto";
      if (disabled) {
        str = "none";
      }
      return closure_8(View, obj9);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let closure_1;
      let first;
      let id;
      let intl;
      let items1;
      let obj10;
      let tmp10;
      let tmp6;
      let tmp8;
      const tmp = id;
      let obj = id(576);
      const cResult = obj.c(35);
      guild = guild.guild;
      id = guild.id;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ICYMIStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id) {
        const fn = function l() {
          return ICYMIStore.getCustomGuildScore(id);
        };
        cResult[1] = id;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] !== stateFromStores) {
        const tmpResult2 = tmp(8038);
        const numberToCustomScoreResult = tmpResult2.numberToCustomScore(stateFromStores);
        cResult[3] = stateFromStores;
        cResult[4] = numberToCustomScoreResult;
        tmp8 = numberToCustomScoreResult;
      } else {
        tmp8 = cResult[4];
      }
      importDefault = tmp8;
      const MUTED = tmp(8038).ICYMICustomScore.MUTED;
      if (cResult[5] !== id) {
        const fn2 = function v(arg0) {
          let customScoreToNumberResult;
          const obj = { guildId: id, guildScore: customScoreToNumberResult };
          const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
          NativeICYMIActionCreatorsDefault;
          const customScoreToNumber = ICYMIUtils.customScoreToNumber;
          ICYMIUtils;
          const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
          const tmp3 = arg0;
          if (tmp3) {
            customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
          } else {
            customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
          }
          customScoreGuild(obj);
        };
        cResult[5] = id;
        cResult[6] = fn2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] === tmp8) {
        let tmp11;
        let tmp14;
        let tmp17;
        let tmp19;
        if (cResult[8] === id) {
          tmp11 = cResult[9];
        }
        const tmp13 = closure_10();
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { variant: "text-sm/semibold", color: "text-default", children: intl.string(tmp(1126).t.Clq6km) };
          const Text = tmp(4892).Text;
          intl = tmp(1126).intl;
          const tmp16 = closure_8(Text, obj2);
          cResult[10] = tmp16;
          tmp14 = tmp16;
        } else {
          tmp14 = cResult[10];
        }
        if (cResult[11] !== guild.name) {
          const intl2 = tmp(1126).intl;
          const obj3 = { guildName: guild.name };
          const formatResult = intl2.format(tmp(1126).t["0DhU2P"], obj3);
          cResult[11] = guild.name;
          cResult[12] = formatResult;
          tmp17 = formatResult;
        } else {
          tmp17 = cResult[12];
        }
        if (cResult[13] !== tmp17) {
          const obj4 = { variant: "text-xs/normal", color: "text-default", children: tmp17 };
          const tmp21 = closure_8(tmp(4892).Text, obj4);
          cResult[13] = tmp17;
          cResult[14] = tmp21;
          tmp19 = tmp21;
        } else {
          tmp19 = cResult[14];
        }
        if (cResult[15] === tmp8) {
          if ((cResult[16] === tmp8) === MUTED) {
            if (cResult[17] === tmp11) {
              let tmp23;
              let tmp29;
              if (cResult[18] === tmp13.customScoreWrapper) {
                tmp23 = cResult[19];
              }
              const _Symbol2 = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                const intl3 = tmp(1126).intl;
                const stringResult = intl3.string(tmp(1126).t.oujX73);
                cResult[20] = stringResult;
                tmp29 = stringResult;
              } else {
                tmp29 = cResult[20];
              }
              if (cResult[21] === tmp10) {
                let tmp32;
                if ((cResult[22] === tmp8) !== MUTED) {
                  tmp32 = cResult[23];
                }
                if (cResult[24] === (tmp8 === MUTED && tmp13.muted)) {
                  let tmp35;
                  let tmp39;
                  let tmp41;
                  if (cResult[25] === tmp32) {
                    tmp35 = cResult[26];
                  }
                  const _Symbol3 = Symbol;
                  const warningText = tmp13.warningText;
                  if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl4 = tmp(1126).intl;
                    const stringResult1 = intl4.string(tmp(1126).t.vRVs07);
                    cResult[27] = stringResult1;
                    tmp39 = stringResult1;
                  } else {
                    tmp39 = cResult[27];
                  }
                  if (cResult[28] !== tmp13.warningText) {
                    const obj5 = {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      style: warningText,
                      children: tmp39,
                    };
                    const tmp43 = closure_8(tmp(4892).Text, obj5);
                    cResult[28] = tmp13.warningText;
                    cResult[29] = tmp43;
                    tmp41 = tmp43;
                  } else {
                    tmp41 = cResult[29];
                  }
                  if (cResult[30] === tmp35) {
                    if (cResult[31] === tmp41) {
                      if (cResult[32] === tmp19) {
                        let tmp44;
                        if (cResult[33] === tmp23) {
                          tmp44 = cResult[34];
                        }
                        return tmp44;
                      }
                    }
                  }
                  const obj6 = { children: items1 };
                  items1 = [tmp14, tmp19, tmp23, tmp35, tmp41];
                  const tmp47 = closure_9(View, obj6);
                  cResult[30] = tmp35;
                  cResult[31] = tmp41;
                  class E {
                    constructor(DEFAULT) {
                      let obj2;
                      if (closure_1 !== DEFAULT) {
                        const obj = { guildId: id, guildScore: obj2.customScoreToNumber(DEFAULT) };
                        const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
                        NativeICYMIActionCreatorsDefault;
                        obj2 = ICYMIUtils;
                        customScoreGuild(obj);
                      }
                    }
                  }
                  cResult[33] = tmp23;
                  cResult[34] = tmp47;
                  tmp44 = tmp47;
                }
                const obj7 = { style: tmp8 === MUTED && tmp13.muted, children: tmp32 };
                const tmp38 = closure_8(View, obj7);
                cResult[24] = tmp8 === MUTED && tmp13.muted;
                cResult[25] = tmp32;
                cResult[26] = tmp38;
                tmp35 = tmp38;
              }
              const obj8 = { value: tmp8 !== MUTED, onValueChange: tmp10, label: tmp29, start: true, end: true };
              const tmp34 = closure_8(tmp(6705).TableSwitchRow, obj8);
              cResult[21] = tmp10;
              cResult[22] = tmp8 !== MUTED;
              cResult[23] = tmp34;
              tmp32 = tmp34;
            }
          }
        }
        let tmp24 = null;
        if (tmp8 !== MUTED) {
          const obj9 = { style: tmp13.customScoreWrapper, children: closure_8(closure_11, obj10) };
          obj10 = { initialValue: tmp8, onValueUpdated: tmp11 };
          tmp24 = closure_8(View, obj9);
        }
        cResult[15] = tmp8;
        cResult[16] = tmp8 === MUTED;
        cResult[17] = tmp11;
        cResult[18] = tmp13.customScoreWrapper;
        cResult[19] = tmp24;
        tmp23 = tmp24;
      }
      class E {
        constructor(DEFAULT) {
          let obj2;
          if (closure_1 !== DEFAULT) {
            const obj = { guildId: id, guildScore: obj2.customScoreToNumber(DEFAULT) };
            const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
            NativeICYMIActionCreatorsDefault;
            obj2 = ICYMIUtils;
            customScoreGuild(obj);
          }
        }
      }
      cResult[7] = tmp8;
      cResult[8] = id;
      cResult[9] = E;
      tmp11 = E;
    }
  : (guild) => {
      let TableSwitchRow;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let obj10;
      let obj5;
      let obj7;
      guild = guild.guild;
      const id = guild.id;
      const tmp = id;
      let obj = id(504);
      const items = [ICYMIStore];
      const stateFromStores = obj.useStateFromStores(items, () => ICYMIStore.getCustomGuildScore(id));
      let obj2 = id(8038);
      const numberToCustomScoreResult = obj2.numberToCustomScore(stateFromStores);
      let c1 = numberToCustomScoreResult;
      const tmp5 = numberToCustomScoreResult === id(8038).ICYMICustomScore.MUTED;
      const items1 = [id];
      const items2 = [numberToCustomScoreResult, id];
      const callback = react.useCallback((arg0) => {
        let customScoreToNumberResult;
        const obj = { guildId: id, guildScore: customScoreToNumberResult };
        const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
        NativeICYMIActionCreatorsDefault;
        const customScoreToNumber = ICYMIUtils.customScoreToNumber;
        ICYMIUtils;
        const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
        const tmp3 = arg0;
        if (tmp3) {
          customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
        } else {
          customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
        }
        customScoreGuild(obj);
      }, items1);
      const callback1 = react.useCallback((DEFAULT) => {
        let obj2;
        if (c1 !== DEFAULT) {
          const obj = { guildId: id, guildScore: obj2.customScoreToNumber(DEFAULT) };
          const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
          NativeICYMIActionCreatorsDefault;
          obj2 = ICYMIUtils;
          customScoreGuild(obj);
        }
      }, items2);
      const tmp8 = closure_10();
      const obj3 = { variant: "text-sm/semibold", color: "text-default", children: intl.string(id(1126).t.Clq6km) };
      const Text = id(4892).Text;
      intl = id(1126).intl;
      const items3 = [closure_8(Text, obj3), , , ,];
      const obj4 = {
        variant: "text-xs/normal",
        color: "text-default",
        children: intl2.format(id(1126).t["0DhU2P"], obj5),
      };
      const Text2 = id(4892).Text;
      intl2 = id(1126).intl;
      obj5 = { guildName: guild.name };
      items3[1] = closure_8(Text2, obj4);
      let tmp11Result = null;
      if (!tmp5) {
        const obj6 = { style: tmp8.customScoreWrapper, children: closure_8(closure_11, obj7) };
        obj7 = { initialValue: numberToCustomScoreResult, onValueUpdated: callback1 };
        tmp11Result = closure_8(View, obj6);
      }
      items3[2] = tmp11Result;
      const obj8 = { children: items3 };
      const obj9 = { style: tmp5 && tmp8.muted, children: closure_8(TableSwitchRow, obj10) };
      obj10 = {
        value: !tmp5,
        onValueChange: callback,
        label: intl3.string(tmp(1126).t.oujX73),
        start: true,
        end: true,
      };
      TableSwitchRow = tmp(6705).TableSwitchRow;
      intl3 = tmp(1126).intl;
      items3[3] = closure_8(View, obj9);
      const obj11 = {
        variant: "text-xs/normal",
        color: "text-muted",
        style: tmp8.warningText,
        children: intl4.string(tmp(1126).t.vRVs07),
      };
      const Text3 = tmp(4892).Text;
      intl4 = tmp(1126).intl;
      items3[4] = closure_8(Text3, obj11);
      return closure_9(View, obj8);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let first;
      let id;
      let intl;
      let stateFromStores;
      const tmp = id;
      const tmp2 = stateFromStores;
      let obj = id(stateFromStores[10]);
      const cResult = obj.c(43);
      channel = channel.channel;
      id = channel.guild.id;
      const id2 = channel.id;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ICYMIStore, UserGuildSettingsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === id2) {
        let tmp7;
        let tmp11;
        let tmp13;
        let tmp15;
        if (cResult[2] === id) {
          tmp7 = cResult[3];
        }
        const tmpResult = tmp(tmp2[18]);
        stateFromStores = tmpResult.useStateFromStores(first, tmp7);
        const tmp10 = id2(tmp2[22])(channel, true);
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [ICYMIStore];
          cResult[4] = items1;
          tmp11 = items1;
        } else {
          tmp11 = cResult[4];
        }
        if (cResult[5] !== id) {
          const fn2 = function p() {
            return ICYMIStore.getCustomGuildScore(id);
          };
          cResult[5] = id;
          cResult[6] = fn2;
          tmp13 = fn2;
        } else {
          tmp13 = cResult[6];
        }
        const tmpResult3 = tmp(tmp2[18]);
        const stateFromStores1 = tmpResult3.useStateFromStores(tmp11, tmp13);
        if (cResult[7] !== stateFromStores1) {
          const tmpResult4 = tmp(tmp2[8]);
          const numberToCustomScoreResult = tmpResult4.numberToCustomScore(stateFromStores1);
          cResult[7] = stateFromStores1;
          cResult[8] = numberToCustomScoreResult;
          tmp15 = numberToCustomScoreResult;
        } else {
          tmp15 = cResult[8];
        }
        const MUTED = tmp(tmp2[8]).ICYMICustomScore.MUTED;
        if (cResult[9] === id2) {
          if (cResult[10] === stateFromStores) {
            let tmp18;
            if (cResult[11] === id) {
              tmp18 = cResult[12];
            }
            if (cResult[13] === id2) {
              let tmp19;
              let tmp22;
              let tmp26;
              let tmp29;
              if (cResult[14] === id) {
                tmp19 = cResult[15];
              }
              class N {
                constructor(arg0) {
                  let customScoreToNumberResult;
                  let items;
                  const obj = { guildId: id, channelScores: items };
                  const obj2 = { channelId: id2, score: customScoreToNumberResult };
                  const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
                  NativeICYMIActionCreatorsDefault;
                  const customScoreToNumber = ICYMIUtils.customScoreToNumber;
                  ICYMIUtils;
                  const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
                  const tmp3 = arg0;
                  if (tmp3) {
                    customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
                  } else {
                    customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
                  }
                  items = [obj2];
                  customScoreGuild(obj);
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                let obj2 = {
                  variant: "text-sm/semibold",
                  color: "text-default",
                  children: intl.string(tmp(tmp2[11]).t["0jRosn"]),
                };
                class N {
                  constructor(arg0) {
                    let customScoreToNumberResult;
                    let items;
                    const obj = { guildId: id, channelScores: items };
                    const obj2 = { channelId: id2, score: customScoreToNumberResult };
                    const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
                    NativeICYMIActionCreatorsDefault;
                    const customScoreToNumber = ICYMIUtils.customScoreToNumber;
                    ICYMIUtils;
                    const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
                    const tmp3 = arg0;
                    if (tmp3) {
                      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
                    } else {
                      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
                    }
                    items = [obj2];
                    customScoreGuild(obj);
                  }
                }
                intl = tmp(tmp2[11]).intl;
                const tmp25 = closure_8(tmp24, obj2);
                cResult[16] = tmp25;
                tmp22 = tmp25;
              } else {
                tmp22 = cResult[16];
              }
              if (cResult[17] !== tmp10) {
                const intl2 = tmp(tmp2[11]).intl;
                const format = intl2.format;
                class N {
                  constructor(arg0) {
                    let customScoreToNumberResult;
                    let items;
                    const obj = { guildId: id, channelScores: items };
                    const obj2 = { channelId: id2, score: customScoreToNumberResult };
                    const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
                    NativeICYMIActionCreatorsDefault;
                    const customScoreToNumber = ICYMIUtils.customScoreToNumber;
                    ICYMIUtils;
                    const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
                    const tmp3 = arg0;
                    if (tmp3) {
                      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
                    } else {
                      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
                    }
                    items = [obj2];
                    customScoreGuild(obj);
                  }
                }
                tmp27[0] = tmp10;
                const formatResult = format(tmp(tmp2[11]).t.KzkF1j, tmp27);
                cResult[17] = tmp10;
                cResult[18] = formatResult;
                tmp26 = formatResult;
              } else {
                tmp26 = cResult[18];
              }
              if (cResult[19] !== tmp26) {
                let obj3 = { variant: "text-xs/normal", color: "text-default", children: null };
                class N {
                  constructor(arg0) {
                    let customScoreToNumberResult;
                    let items;
                    const obj = { guildId: id, channelScores: items };
                    const obj2 = { channelId: id2, score: customScoreToNumberResult };
                    const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
                    NativeICYMIActionCreatorsDefault;
                    const customScoreToNumber = ICYMIUtils.customScoreToNumber;
                    ICYMIUtils;
                    const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
                    const tmp3 = arg0;
                    if (tmp3) {
                      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
                    } else {
                      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
                    }
                    items = [obj2];
                    customScoreGuild(obj);
                  }
                }
                const tmp31 = closure_8(tmp(tmp2[20]).Text, obj3);
                cResult[19] = tmp26;
                cResult[20] = tmp31;
                tmp29 = tmp31;
              } else {
                tmp29 = cResult[20];
              }
              if ((cResult[21] === stateFromStores) === tmp17) {
                if (cResult[22] === stateFromStores) {
                  if ((cResult[23] === tmp15) === MUTED) {
                    if (cResult[24] === tmp18) {
                      let tmp34;
                      let tmp41;
                      if (cResult[25] === tmp21.customScoreWrapper) {
                        tmp34 = cResult[26];
                      }
                      class N {
                        constructor(arg0) {
                          let customScoreToNumberResult;
                          let items;
                          const obj = { guildId: id, channelScores: items };
                          const obj2 = { channelId: id2, score: customScoreToNumberResult };
                          const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
                          NativeICYMIActionCreatorsDefault;
                          const customScoreToNumber = ICYMIUtils.customScoreToNumber;
                          ICYMIUtils;
                          const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
                          const tmp3 = arg0;
                          if (tmp3) {
                            customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
                          } else {
                            customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
                          }
                          items = [obj2];
                          customScoreGuild(obj);
                        }
                      }
                      if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                        const string = tmp(tmp2[11]).intl.string;
                        class N {
                          constructor(arg0) {
                            let customScoreToNumberResult;
                            let items;
                            const obj = { guildId: id, channelScores: items };
                            const obj2 = { channelId: id2, score: customScoreToNumberResult };
                            const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
                            NativeICYMIActionCreatorsDefault;
                            const customScoreToNumber = ICYMIUtils.customScoreToNumber;
                            ICYMIUtils;
                            const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
                            const tmp3 = arg0;
                            if (tmp3) {
                              customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
                            } else {
                              customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
                            }
                            items = [obj2];
                            customScoreGuild(obj);
                          }
                        }
                        cResult[27] = tmp42;
                        tmp41 = tmp42;
                      } else {
                        tmp41 = cResult[27];
                      }
                      if ((cResult[28] === tmp15) === MUTED) {
                        if (cResult[29] === tmp19) {
                          let tmp44;
                          if ((cResult[30] === stateFromStores) !== tmp17) {
                            tmp44 = cResult[31];
                          }
                          if (cResult[32] === (stateFromStores === tmp17 && tmp21.muted)) {
                            let tmp47;
                            let tmp50;
                            let tmp52;
                            if (cResult[33] === tmp44) {
                              tmp47 = cResult[34];
                            }
                            const _Symbol3 = Symbol;
                            class N {
                              constructor(arg0) {
                                let customScoreToNumberResult;
                                let items;
                                const obj = { guildId: id, channelScores: items };
                                const obj2 = { channelId: id2, score: customScoreToNumberResult };
                                const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
                                NativeICYMIActionCreatorsDefault;
                                const customScoreToNumber = ICYMIUtils.customScoreToNumber;
                                ICYMIUtils;
                                const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
                                const tmp3 = arg0;
                                if (tmp3) {
                                  customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
                                } else {
                                  customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
                                }
                                items = [obj2];
                                customScoreGuild(obj);
                              }
                            }
                            if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                              const string2 = tmp(tmp2[11]).intl.string;
                              class N {
                                constructor(arg0) {
                                  let customScoreToNumberResult;
                                  let items;
                                  const obj = { guildId: id, channelScores: items };
                                  const obj2 = { channelId: id2, score: customScoreToNumberResult };
                                  const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
                                  NativeICYMIActionCreatorsDefault;
                                  const customScoreToNumber = ICYMIUtils.customScoreToNumber;
                                  ICYMIUtils;
                                  const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
                                  const tmp3 = arg0;
                                  if (tmp3) {
                                    customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
                                  } else {
                                    customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
                                  }
                                  items = [obj2];
                                  customScoreGuild(obj);
                                }
                              }
                              cResult[35] = tmp51;
                              tmp50 = tmp51;
                            } else {
                              tmp50 = cResult[35];
                            }
                            if (cResult[36] !== tmp21.warningText) {
                              const obj4 = {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                style: null,
                                children: tmp50,
                              };
                              class N {
                                constructor(arg0) {
                                  let customScoreToNumberResult;
                                  let items;
                                  const obj = { guildId: id, channelScores: items };
                                  const obj2 = { channelId: id2, score: customScoreToNumberResult };
                                  const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
                                  NativeICYMIActionCreatorsDefault;
                                  const customScoreToNumber = ICYMIUtils.customScoreToNumber;
                                  ICYMIUtils;
                                  const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
                                  const tmp3 = arg0;
                                  if (tmp3) {
                                    customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
                                  } else {
                                    customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
                                  }
                                  items = [obj2];
                                  customScoreGuild(obj);
                                }
                              }
                              const tmp54 = closure_8(tmp(tmp2[20]).Text, obj4);
                              cResult[36] = tmp21.warningText;
                              cResult[37] = tmp54;
                              tmp52 = tmp54;
                            } else {
                              tmp52 = cResult[37];
                            }
                            if (cResult[38] === tmp29) {
                              if (cResult[39] === tmp34) {
                                if (cResult[40] === tmp47) {
                                  let tmp55;
                                  if (cResult[41] === tmp52) {
                                    tmp55 = cResult[42];
                                  }
                                  return tmp55;
                                }
                              }
                            }
                            const items2 = [, , , ,];
                            const obj5 = { children: null };
                            items2[0] = tmp22;
                            items2[1] = tmp29;
                            items2[2] = tmp34;
                            items2[3] = tmp47;
                            items2[4] = tmp52;
                            class Y {
                              constructor(DEFAULT) {
                                let items;
                                let obj3;
                                if (stateFromStores !== DEFAULT) {
                                  const obj = { guildId: id, channelScores: items };
                                  const obj2 = { channelId: id2, score: obj3.customScoreToNumber(DEFAULT) };
                                  const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
                                  NativeICYMIActionCreatorsDefault;
                                  items = [obj2];
                                  obj3 = ICYMIUtils;
                                  customScoreGuild(obj);
                                }
                              }
                            }
                            const tmp58 = closure_9(View, obj5);
                            cResult[38] = tmp29;
                            cResult[39] = tmp34;
                            cResult[40] = tmp47;
                            cResult[41] = tmp52;
                            cResult[42] = tmp58;
                            tmp55 = tmp58;
                          }
                          class N {
                            constructor(arg0) {
                              let customScoreToNumberResult;
                              let items;
                              const obj = { guildId: id, channelScores: items };
                              const obj2 = { channelId: id2, score: customScoreToNumberResult };
                              const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
                              NativeICYMIActionCreatorsDefault;
                              const customScoreToNumber = ICYMIUtils.customScoreToNumber;
                              ICYMIUtils;
                              const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
                              const tmp3 = arg0;
                              if (tmp3) {
                                customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
                              } else {
                                customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
                              }
                              items = [obj2];
                              customScoreGuild(obj);
                            }
                          }
                          const obj6 = { style: stateFromStores === tmp17 && tmp21.muted, children: tmp44 };
                          const tmp49 = closure_8(View, obj6);
                          cResult[32] = stateFromStores === tmp17 && tmp21.muted;
                          cResult[33] = tmp44;
                          cResult[34] = tmp49;
                          tmp47 = tmp49;
                        }
                      }
                      const obj7 = {
                        value: stateFromStores !== tmp17,
                        onValueChange: tmp19,
                        label: tmp41,
                        disabled: tmp15 === MUTED,
                        start: true,
                        end: true,
                      };
                      const tmp46 = closure_8(tmp(tmp2[21]).TableSwitchRow, obj7);
                      cResult[28] = tmp15 === MUTED;
                      class Y {
                        constructor(DEFAULT) {
                          let items;
                          let obj3;
                          if (stateFromStores !== DEFAULT) {
                            const obj = { guildId: id, channelScores: items };
                            const obj2 = { channelId: id2, score: obj3.customScoreToNumber(DEFAULT) };
                            const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
                            NativeICYMIActionCreatorsDefault;
                            items = [obj2];
                            obj3 = ICYMIUtils;
                            customScoreGuild(obj);
                          }
                        }
                      }
                      cResult[29] = tmp19;
                      cResult[30] = stateFromStores !== tmp17;
                      cResult[31] = tmp46;
                      tmp44 = tmp46;
                    }
                  }
                }
              }
              let tmp35 = null;
              if (stateFromStores !== tmp17) {
                class N {
                  constructor(arg0) {
                    let customScoreToNumberResult;
                    let items;
                    const obj = { guildId: id, channelScores: items };
                    const obj2 = { channelId: id2, score: customScoreToNumberResult };
                    const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
                    NativeICYMIActionCreatorsDefault;
                    const customScoreToNumber = ICYMIUtils.customScoreToNumber;
                    ICYMIUtils;
                    const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
                    const tmp3 = arg0;
                    if (tmp3) {
                      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
                    } else {
                      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
                    }
                    items = [obj2];
                    customScoreGuild(obj);
                  }
                }
                tmp38[0] = tmp21.customScoreWrapper;
                const obj8 = { disabled: tmp15 === MUTED, initialValue: stateFromStores, onValueUpdated: tmp18 };
                tmp38[1] = closure_8(closure_11, obj8);
                tmp35 = closure_8(View, tmp38);
              }
              cResult[21] = stateFromStores === tmp17;
              class Y {
                constructor(DEFAULT) {
                  let items;
                  let obj3;
                  if (stateFromStores !== DEFAULT) {
                    const obj = { guildId: id, channelScores: items };
                    const obj2 = { channelId: id2, score: obj3.customScoreToNumber(DEFAULT) };
                    const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
                    NativeICYMIActionCreatorsDefault;
                    items = [obj2];
                    obj3 = ICYMIUtils;
                    customScoreGuild(obj);
                  }
                }
              }
              cResult[23] = tmp15 === MUTED;
              cResult[24] = tmp18;
              cResult[25] = tmp21.customScoreWrapper;
              cResult[26] = tmp35;
              tmp34 = tmp35;
            }
            class N {
              constructor(arg0) {
                let customScoreToNumberResult;
                let items;
                const obj = { guildId: id, channelScores: items };
                const obj2 = { channelId: id2, score: customScoreToNumberResult };
                const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
                NativeICYMIActionCreatorsDefault;
                const customScoreToNumber = ICYMIUtils.customScoreToNumber;
                ICYMIUtils;
                const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
                const tmp3 = arg0;
                if (tmp3) {
                  customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
                } else {
                  customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
                }
                items = [obj2];
                customScoreGuild(obj);
              }
            }
            cResult[13] = id2;
            cResult[14] = id;
            cResult[15] = N;
            tmp19 = N;
          }
        }
        class Y {
          constructor(DEFAULT) {
            let items;
            let obj3;
            if (stateFromStores !== DEFAULT) {
              const obj = { guildId: id, channelScores: items };
              const obj2 = { channelId: id2, score: obj3.customScoreToNumber(DEFAULT) };
              const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
              NativeICYMIActionCreatorsDefault;
              items = [obj2];
              obj3 = ICYMIUtils;
              customScoreGuild(obj);
            }
          }
        }
        cResult[9] = id2;
        cResult[10] = stateFromStores;
        cResult[11] = id;
        cResult[12] = Y;
        tmp18 = Y;
      }
      const fn = function u() {
        let customChannelScore = ICYMIStore.getCustomChannelScore(id, id2);
        if (customChannelScore === ICYMIUtils.ICYMICustomScore.UNKNOWN) {
          const isChannelMutedResult = UserGuildSettingsStore.isChannelMuted(id, id2);
          const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
          customChannelScore = isChannelMutedResult ? ICYMICustomScore.MUTED : ICYMICustomScore.DEFAULT;
        }
        return customChannelScore;
      };
      cResult[1] = id2;
      cResult[2] = id;
      cResult[3] = fn;
      tmp7 = fn;
    }
  : (channel) => {
      let TableSwitchRow;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let obj10;
      let obj7;
      channel = channel.channel;
      let stateFromStores;
      const id = channel.guild.id;
      const id2 = channel.id;
      const tmp = id;
      const tmp2 = stateFromStores;
      let obj = id(stateFromStores[18]);
      let items = [ICYMIStore, UserGuildSettingsStore];
      stateFromStores = obj.useStateFromStores(items, () => {
        let customChannelScore = ICYMIStore.getCustomChannelScore(id, id2);
        if (customChannelScore === ICYMIUtils.ICYMICustomScore.UNKNOWN) {
          const isChannelMutedResult = UserGuildSettingsStore.isChannelMuted(id, id2);
          const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
          customChannelScore = isChannelMutedResult ? ICYMICustomScore.MUTED : ICYMICustomScore.DEFAULT;
        }
        return customChannelScore;
      });
      const tmp4 = id2(stateFromStores[22])(channel, true);
      let obj2 = id(stateFromStores[18]);
      const items1 = [ICYMIStore];
      const stateFromStores1 = obj2.useStateFromStores(items1, () => ICYMIStore.getCustomGuildScore(id));
      let obj3 = id(stateFromStores[8]);
      const numberToCustomScoreResult = obj3.numberToCustomScore(stateFromStores1);
      const tmp7 = numberToCustomScoreResult === id(stateFromStores[8]).ICYMICustomScore.MUTED;
      const tmp8 = stateFromStores === id(stateFromStores[8]).ICYMICustomScore.MUTED;
      const items2 = [stateFromStores, id, id2];
      const items3 = [id2, id];
      const callback = react.useCallback((DEFAULT) => {
        let items;
        let obj3;
        if (stateFromStores !== DEFAULT) {
          const obj = { guildId: id, channelScores: items };
          const obj2 = { channelId: id2, score: obj3.customScoreToNumber(DEFAULT) };
          const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
          NativeICYMIActionCreatorsDefault;
          items = [obj2];
          obj3 = ICYMIUtils;
          customScoreGuild(obj);
        }
      }, items2);
      const callback1 = react.useCallback((arg0) => {
        let customScoreToNumberResult;
        let items;
        const obj = { guildId: id, channelScores: items };
        const obj2 = { channelId: id2, score: customScoreToNumberResult };
        const customScoreGuild = NativeICYMIActionCreatorsDefault.customScoreGuild;
        NativeICYMIActionCreatorsDefault;
        const customScoreToNumber = ICYMIUtils.customScoreToNumber;
        ICYMIUtils;
        const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
        const tmp3 = arg0;
        if (tmp3) {
          customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
        } else {
          customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
        }
        items = [obj2];
        customScoreGuild(obj);
      }, items3);
      const tmp11 = closure_10();
      const obj4 = {
        variant: "text-sm/semibold",
        color: "text-default",
        children: intl.string(id(stateFromStores[11]).t["0jRosn"]),
      };
      const Text = id(stateFromStores[20]).Text;
      intl = id(stateFromStores[11]).intl;
      const items4 = [closure_8(Text, obj4), , , ,];
      const obj5 = {
        variant: "text-xs/normal",
        color: "text-default",
        children: intl2.format(id(stateFromStores[11]).t.KzkF1j, { channelName: tmp4 }),
      };
      const Text2 = id(stateFromStores[20]).Text;
      intl2 = id(stateFromStores[11]).intl;
      items4[1] = closure_8(Text2, obj5);
      let tmp14Result = null;
      if (!tmp8) {
        const obj6 = { style: tmp11.customScoreWrapper, children: closure_8(closure_11, obj7) };
        obj7 = { disabled: tmp7, initialValue: stateFromStores, onValueUpdated: callback };
        tmp14Result = closure_8(View, obj6);
      }
      items4[2] = tmp14Result;
      const obj8 = { children: items4 };
      const obj9 = { style: tmp8 && tmp11.muted, children: closure_8(TableSwitchRow, obj10) };
      obj10 = {
        value: !tmp8,
        onValueChange: callback1,
        label: intl3.string(tmp(tmp2[11]).t.W2aJRS),
        disabled: tmp7,
        start: true,
        end: true,
      };
      TableSwitchRow = tmp(tmp2[21]).TableSwitchRow;
      intl3 = tmp(tmp2[11]).intl;
      items4[3] = closure_8(View, obj9);
      const obj11 = {
        variant: "text-xs/normal",
        color: "text-muted",
        style: tmp11.warningText,
        children: intl4.string(tmp(tmp2[11]).t["5lP6Ax"]),
      };
      const Text3 = tmp(tmp2[20]).Text;
      intl4 = tmp(tmp2[11]).intl;
      items4[4] = closure_8(Text3, obj11);
      return closure_9(View, obj8);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/icymi/native/custom_scores/ICYMIContentSettingControl.tsx");

export const GuildScoreSettings = tmp4;
export const ChannelScoreSettings = tmp5;
