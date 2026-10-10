// discord_app/modules/icymi/native/custom_scores/ICYMIContentSettingControl.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import ICYMIUtils from "../../ICYMIUtils.tsx";
import SegmentedControlState from "../../../../design/components/SegmentedControl/native/SegmentedControlState.native.tsx";
import SegmentedControl from "../../../../design/components/SegmentedControl/native/SegmentedControl.native.tsx";
import _modDef16900 from "../../../../../_runtime/metro/16900__.js";
import _modDef16901 from "../../../../../_runtime/metro/16901__.js";
import _modDef16902 from "../../../../../_runtime/metro/16902__.js";
import NativeICYMIActionCreatorsDefault from "../NativeICYMIActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";
import ICYMIStore from "../../ICYMIStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  customScoreWrapper: { marginVertical: nativeDefault.space.PX_16 },
  warningText: null,
  icon: null,
  iconSelected: null,
  muted: null,
};
let obj3 = { marginVertical: nativeDefault.space.PX_16 };
obj2.warningText = { marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_12 };
let size = { width: 24, height: 24, tintColor: nativeDefault.colors.TEXT_MUTED };
obj2.icon = size;
let obj4 = { marginTop: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_12 };
obj2.iconSelected = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let obj5 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj2.muted = { marginTop: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ContentSettingsControl(onValueUpdated) {
      const cResult = onValueUpdated(576).c(32);
      onValueUpdated = onValueUpdated.onValueUpdated;
      const tmp4 = closure_10();
      const obj = onValueUpdated(576);
      [tmp6, importDefault] = noop.useState(onValueUpdated.initialValue);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.rdt65I);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      let iconSelected = null;
      if (tmp6 === onValueUpdated(8470).ICYMICustomScore.LESS) {
        iconSelected = tmp4.iconSelected;
      }
      if (cResult[1] === tmp4.icon) {
        if (cResult[2] === iconSelected) {
          let tmp10 = cResult[3];
        }
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(tmp(1126).t.SnrG00);
          cResult[4] = stringResult1;
          let tmp11 = stringResult1;
        } else {
          tmp11 = cResult[4];
        }
        let iconSelected1 = null;
        if (tmp6 === tmp(8470).ICYMICustomScore.DEFAULT) {
          iconSelected1 = tmp4.iconSelected;
        }
        if (cResult[5] === tmp4.icon) {
          if (cResult[6] === iconSelected1) {
            let tmp14 = cResult[7];
          }
          const _Symbol2 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1126).intl;
            const stringResult2 = intl3.string(tmp(1126).t.Rxe3jF);
            cResult[8] = stringResult2;
            let tmp17 = stringResult2;
          } else {
            tmp17 = cResult[8];
          }
          let iconSelected2 = null;
          if (tmp6 === tmp(8470).ICYMICustomScore.MORE) {
            iconSelected2 = tmp4.iconSelected;
          }
          if (cResult[9] === tmp4.icon) {
            if (cResult[10] === iconSelected2) {
              let tmp20 = cResult[11];
            }
            if (cResult[12] === tmp10) {
              if (cResult[13] === tmp14) {
                if (cResult[14] === tmp20) {
                  let tmp23 = cResult[15];
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
                  if (tmp(8470).ICYMICustomScore.LESS !== tmp6) {
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
                    if (tmp(8470).ICYMICustomScore.MORE === tmp6) {
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
          const obj3 = { label: tmp17, id: "1", icon: null, page: null };
          const obj4 = { source: _modDef16902, style: null };
          const items1 = [tmp4.icon, iconSelected2];
          obj4.style = items1;
          obj3.icon = closure_8(tmp(1200).Icon, obj4);
          cResult[9] = tmp4.icon;
          cResult[10] = iconSelected2;
          cResult[11] = obj3;
          tmp20 = obj3;
        }
        const obj5 = { label: tmp11, id: "0", icon: null, page: null };
        const obj6 = { source: _modDef16901, style: null };
        const items2 = [tmp4.icon, iconSelected1];
        obj6.style = items2;
        obj5.icon = closure_8(tmp(1200).Icon, obj6);
        cResult[5] = tmp4.icon;
        cResult[6] = iconSelected1;
        cResult[7] = obj5;
        tmp14 = obj5;
      }
      const obj7 = { label: first, id: "-1", icon: null, page: null };
      const obj8 = { source: _modDef16900, style: null };
      const items3 = [tmp4.icon, iconSelected];
      obj8.style = items3;
      obj7.icon = closure_8(onValueUpdated(1200).Icon, obj8);
      cResult[1] = tmp4.icon;
      cResult[2] = iconSelected;
      cResult[3] = obj7;
      tmp10 = obj7;
      const tmp5 = _slicedToArray(noop.useState(onValueUpdated.initialValue), 2);
    }
  : function ContentSettingsControl(initialValue) {
      ({ onValueUpdated: require, disabled } = initialValue);
      importDefault = undefined;
      const tmp = closure_10();
      [tmp3, c1] = noop.useState(initialValue.initialValue);
      const obj = { label: null, id: "-1", icon: null, page: null };
      const intl = util.intl;
      obj.label = intl.string(util.t.rdt65I);
      const obj2 = { source: _modDef16900, style: null };
      const items = [tmp.icon];
      let iconSelected = null;
      if (tmp3 === ICYMIUtils.ICYMICustomScore.LESS) {
        iconSelected = tmp.iconSelected;
      }
      items[1] = iconSelected;
      obj2.style = items;
      obj.icon = closure_8(native.Icon, obj2);
      const items1 = [obj, ,];
      const obj3 = { label: null, id: "0", icon: null, page: null };
      const intl2 = util.intl;
      obj3.label = intl2.string(util.t.SnrG00);
      const obj4 = { source: _modDef16901, style: null };
      const items2 = [tmp.icon];
      let iconSelected1 = null;
      if (tmp3 === ICYMIUtils.ICYMICustomScore.DEFAULT) {
        iconSelected1 = tmp.iconSelected;
      }
      items2[1] = iconSelected1;
      obj4.style = items2;
      obj3.icon = closure_8(native.Icon, obj4);
      items1[1] = obj3;
      const obj5 = { label: null, id: "1", icon: null, page: null };
      const intl3 = util.intl;
      obj5.label = intl3.string(util.t.Rxe3jF);
      const obj6 = { source: _modDef16902, style: null };
      const items3 = [tmp.icon];
      let iconSelected2 = null;
      if (tmp3 === ICYMIUtils.ICYMICustomScore.MORE) {
        iconSelected2 = tmp.iconSelected;
      }
      items3[1] = iconSelected2;
      obj6.style = items3;
      obj5.icon = closure_8(native.Icon, obj6);
      items1[2] = obj5;
      const tmp2 = _slicedToArray(noop.useState(initialValue.initialValue), 2);
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
        defaultIndex: null,
      };
      let num = 0;
      if (ICYMIUtils.ICYMICustomScore.LESS !== tmp3) {
        num = 1;
        if (ICYMIUtils.ICYMICustomScore.MORE === tmp3) {
          num = 2;
        }
      }
      obj7.defaultIndex = num;
      let obj8 = null;
      const segmentedControlState = SegmentedControlState.useSegmentedControlState(obj7);
      if (disabled) {
        obj8 = { opacity: 0.7 };
      }
      const obj9 = { style: obj8, pointerEvents: null, children: null };
      let str = "auto";
      if (disabled) {
        str = "none";
      }
      obj9.pointerEvents = str;
      obj9.children = closure_8(SegmentedControl.SegmentedControl, {
        variant: "experimental_Large",
        state: segmentedControlState,
      });
      return closure_8(View, obj9);
    };
fn(558);
let obj6 = { marginTop: nativeDefault.space.PX_16 };
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildScoreSettings(guild) {
      const cResult = id(576).c(35);
      guild = guild.guild;
      id = guild.id;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ICYMIStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id) {
        const fn = function l() {
          return ICYMIStore.getCustomGuildScore(id);
        };
        cResult[1] = id;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let obj = id(576);
      const stateFromStores = id(504).useStateFromStores(first, tmp6);
      if (cResult[3] !== stateFromStores) {
        const numberToCustomScoreResult = tmp(8470).numberToCustomScore(stateFromStores);
        cResult[3] = stateFromStores;
        cResult[4] = numberToCustomScoreResult;
        let tmp8 = numberToCustomScoreResult;
        const tmpResult2 = tmp(8470);
      } else {
        tmp8 = cResult[4];
      }
      importDefault = tmp8;
      if (cResult[5] !== id) {
        const fn2 = function v(arg0) {
          const obj2 = { guildId: id, guildScore: null };
          const obj = NativeICYMIActionCreatorsDefault;
          const customScoreToNumber = ICYMIUtils.customScoreToNumber;
          const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
          if (arg0) {
            let customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
          } else {
            customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
          }
          obj2.guildScore = customScoreToNumberResult;
          obj.customScoreGuild(obj2);
        };
        cResult[5] = id;
        cResult[6] = fn2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] === tmp8) {
        if (cResult[8] === id) {
          let tmp11 = cResult[9];
        }
        const tmp13 = closure_10();
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { variant: "text-sm/semibold", color: "text-default", children: null };
          const intl = tmp(1126).intl;
          obj2.children = intl.string(tmp(1126).t.Clq6km);
          const tmp16 = closure_8(tmp(5088).Text, obj2);
          cResult[10] = tmp16;
          let tmp14 = tmp16;
        } else {
          tmp14 = cResult[10];
        }
        if (cResult[11] !== guild.name) {
          const intl2 = tmp(1126).intl;
          let obj3 = { guildName: guild.name };
          const formatResult = intl2.format(tmp(1126).t["0DhU2P"], obj3);
          cResult[11] = guild.name;
          cResult[12] = formatResult;
          let tmp17 = formatResult;
        } else {
          tmp17 = cResult[12];
        }
        if (cResult[13] !== tmp17) {
          const obj4 = { variant: "text-xs/normal", color: "text-default", children: tmp17 };
          const tmp21 = closure_8(tmp(5088).Text, obj4);
          cResult[13] = tmp17;
          cResult[14] = tmp21;
          let tmp19 = tmp21;
        } else {
          tmp19 = cResult[14];
        }
        const tmp22 = tmp8 === tmp(8470).ICYMICustomScore.MUTED;
        if (cResult[15] === tmp8) {
          if (cResult[16] === tmp22) {
            if (cResult[17] === tmp11) {
              if (cResult[18] === tmp13.customScoreWrapper) {
                let tmp23 = cResult[19];
              }
              let muted = tmp22;
              if (tmp22) {
                muted = tmp13.muted;
              }
              const _Symbol2 = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                const intl3 = tmp(1126).intl;
                const stringResult = intl3.string(tmp(1126).t.oujX73);
                cResult[20] = stringResult;
                let tmp28 = stringResult;
              } else {
                tmp28 = cResult[20];
              }
              if (cResult[21] === tmp10) {
                if (cResult[22] === tmp30) {
                  let tmp31 = cResult[23];
                }
                if (cResult[24] === muted) {
                  if (cResult[25] === tmp31) {
                    let tmp34 = cResult[26];
                  }
                  const _Symbol3 = Symbol;
                  if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl4 = tmp(1126).intl;
                    const stringResult1 = intl4.string(tmp(1126).t.vRVs07);
                    cResult[27] = stringResult1;
                    let tmp38 = stringResult1;
                  } else {
                    tmp38 = cResult[27];
                  }
                  if (cResult[28] !== tmp13.warningText) {
                    const obj5 = {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      style: tmp13.warningText,
                      children: tmp38,
                    };
                    const tmp42 = closure_8(tmp(5088).Text, obj5);
                    cResult[28] = tmp13.warningText;
                    cResult[29] = tmp42;
                    let tmp40 = tmp42;
                  } else {
                    tmp40 = cResult[29];
                  }
                  if (cResult[30] === tmp34) {
                    if (cResult[31] === tmp40) {
                      if (cResult[32] === tmp19) {
                        if (cResult[33] === tmp23) {
                          let tmp43 = cResult[34];
                        }
                        return tmp43;
                      }
                    }
                  }
                  const obj6 = { children: null };
                  const items1 = [tmp14, tmp19, tmp23, tmp34, tmp40];
                  obj6.children = items1;
                  const tmp46 = closure_9(View, obj6);
                  cResult[30] = tmp34;
                  cResult[31] = tmp40;
                  class E {
                    constructor(arg0) {
                      if (closure_1 !== guild) {
                        tmp = closure_1;
                        tmp2 = closure_2;
                        obj = closure_1(closure_2[19]);
                        obj1 = { guildId: null, guildScore: null };
                        tmp3 = id;
                        obj1.guildId = id;
                        tmp4 = closure_0;
                        obj3 = closure_0(closure_2[8]);
                        obj1.guildScore = obj3.customScoreToNumber(guild);
                        customScoreGuildResult = obj.customScoreGuild(obj1);
                      }
                      return;
                    }
                  }
                  cResult[33] = tmp23;
                  cResult[34] = tmp46;
                  tmp43 = tmp46;
                }
                const obj7 = { style: muted, children: tmp31 };
                const tmp37 = closure_8(View, obj7);
                cResult[24] = muted;
                cResult[25] = tmp31;
                cResult[26] = tmp37;
                tmp34 = tmp37;
              }
              const obj8 = { value: !tmp22, onValueChange: tmp10, label: tmp28, start: true, end: true };
              const tmp33 = closure_8(tmp(6895).TableSwitchRow, obj8);
              cResult[21] = tmp10;
              cResult[22] = !tmp22;
              cResult[23] = tmp33;
              tmp31 = tmp33;
            }
          }
        }
        let tmp24 = null;
        if (!tmp22) {
          const obj9 = { style: tmp13.customScoreWrapper, children: null };
          const obj10 = { initialValue: tmp8, onValueUpdated: tmp11 };
          obj9.children = closure_8(closure_11, obj10);
          tmp24 = closure_8(View, obj9);
        }
        cResult[15] = tmp8;
        cResult[16] = tmp22;
        cResult[17] = tmp11;
        cResult[18] = tmp13.customScoreWrapper;
        cResult[19] = tmp24;
        tmp23 = tmp24;
      }
      class E {
        constructor(arg0) {
          if (closure_1 !== guild) {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[19]);
            obj1 = { guildId: null, guildScore: null };
            tmp3 = id;
            obj1.guildId = id;
            tmp4 = closure_0;
            obj3 = closure_0(closure_2[8]);
            obj1.guildScore = obj3.customScoreToNumber(guild);
            customScoreGuildResult = obj.customScoreGuild(obj1);
          }
          return;
        }
      }
      cResult[7] = tmp8;
      cResult[8] = id;
      cResult[9] = E;
      tmp11 = E;
      const tmpResult = id(504);
    }
  : function GuildScoreSettings(guild) {
      guild = guild.guild;
      const id = guild.id;
      const items = [ICYMIStore];
      const stateFromStores = id(504).useStateFromStores(items, () => ICYMIStore.getCustomGuildScore(id));
      let obj = id(504);
      const numberToCustomScoreResult = id(8470).numberToCustomScore(stateFromStores);
      c1 = numberToCustomScoreResult;
      const tmp5 = numberToCustomScoreResult === id(8470).ICYMICustomScore.MUTED;
      const items1 = [id];
      const items2 = [numberToCustomScoreResult, id];
      const callback = noop.useCallback((arg0) => {
        const obj2 = { guildId: id, guildScore: null };
        const obj = NativeICYMIActionCreatorsDefault;
        const customScoreToNumber = ICYMIUtils.customScoreToNumber;
        const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
        if (arg0) {
          let customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
        } else {
          customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
        }
        obj2.guildScore = customScoreToNumberResult;
        obj.customScoreGuild(obj2);
      }, items1);
      const callback1 = noop.useCallback((DEFAULT) => {
        if (c1 !== DEFAULT) {
          const obj2 = { guildId: id, guildScore: null };
          const obj = NativeICYMIActionCreatorsDefault;
          obj2.guildScore = ICYMIUtils.customScoreToNumber(DEFAULT);
          obj.customScoreGuild(obj2);
        }
      }, items2);
      const tmp8 = closure_10();
      let obj3 = { variant: "text-sm/semibold", color: "text-default", children: null };
      const intl = id(1126).intl;
      obj3.children = intl.string(id(1126).t.Clq6km);
      const items3 = [closure_8(id(5088).Text, obj3), , , ,];
      const obj4 = { variant: "text-xs/normal", color: "text-default", children: null };
      const intl2 = id(1126).intl;
      obj4.children = intl2.format(id(1126).t["0DhU2P"], { guildName: guild.name });
      items3[1] = closure_8(id(5088).Text, obj4);
      let tmp11Result = null;
      if (!tmp5) {
        const obj6 = { style: tmp8.customScoreWrapper, children: null };
        const obj7 = { initialValue: numberToCustomScoreResult, onValueUpdated: callback1 };
        obj6.children = closure_8(closure_11, obj7);
        tmp11Result = closure_8(View, obj6);
      }
      items3[2] = tmp11Result;
      let muted = tmp5;
      if (tmp5) {
        muted = tmp8.muted;
      }
      const obj8 = { children: null };
      const obj9 = { style: muted, children: null };
      const obj10 = { value: !tmp5, onValueChange: callback, label: null, start: true, end: true };
      const intl3 = tmp(1126).intl;
      obj10.label = intl3.string(id(1126).t.oujX73);
      obj9.children = closure_8(id(6895).TableSwitchRow, obj10);
      items3[3] = closure_8(View, obj9);
      const obj11 = { variant: "text-xs/normal", color: "text-muted", style: tmp8.warningText, children: null };
      const intl4 = tmp(1126).intl;
      obj11.children = intl4.string(id(1126).t.vRVs07);
      items3[4] = closure_8(id(5088).Text, obj11);
      obj8.children = items3;
      return closure_9(View, obj8);
    };
size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/custom_scores/ICYMIContentSettingControl.tsx");

export const GuildScoreSettings = tmp3;
export const ChannelScoreSettings = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelScoreSettings(channel) {
      const cResult = id(stateFromStores[10]).c(43);
      channel = channel.channel;
      id = channel.guild.id;
      const id2 = channel.id;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ICYMIStore, UserGuildSettingsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === id2) {
        if (cResult[2] === id) {
          let tmp7 = cResult[3];
        }
        stateFromStores = tmp(tmp2[18]).useStateFromStores(first, tmp7);
        const tmp10 = id2(tmp2[22])(channel, true);
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [ICYMIStore];
          cResult[4] = items1;
          let tmp11 = items1;
        } else {
          tmp11 = cResult[4];
        }
        if (cResult[5] !== id) {
          const fn2 = function p() {
            return ICYMIStore.getCustomGuildScore(id);
          };
          cResult[5] = id;
          cResult[6] = fn2;
          let tmp13 = fn2;
        } else {
          tmp13 = cResult[6];
        }
        const tmpResult = tmp(tmp2[18]);
        const stateFromStores1 = tmp(tmp2[18]).useStateFromStores(tmp11, tmp13);
        if (cResult[7] !== stateFromStores1) {
          const numberToCustomScoreResult = tmp(tmp2[8]).numberToCustomScore(stateFromStores1);
          cResult[7] = stateFromStores1;
          cResult[8] = numberToCustomScoreResult;
          let tmp15 = numberToCustomScoreResult;
          const tmpResult4 = tmp(tmp2[8]);
        } else {
          tmp15 = cResult[8];
        }
        if (cResult[9] === id2) {
          if (cResult[10] === stateFromStores) {
            if (cResult[11] === id) {
              let tmp18 = cResult[12];
            }
            if (cResult[13] === id2) {
              if (cResult[14] === id) {
                let tmp19 = cResult[15];
              }
              class N {
                constructor(arg0) {
                  obj = closure_1(closure_2[19]);
                  obj1 = { guildId: id, channelScores: null };
                  obj4 = { channelId: id, score: null };
                  tmp = closure_0(closure_2[8]);
                  customScoreToNumber = tmp.customScoreToNumber;
                  ICYMICustomScore = closure_0(closure_2[8]).ICYMICustomScore;
                  if (channel) {
                    customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
                  } else {
                    customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
                  }
                  obj4.score = customScoreToNumberResult;
                  items = [];
                  items[0] = obj4;
                  obj1.channelScores = items;
                  customScoreGuildResult = obj.customScoreGuild(obj1);
                  return;
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                let obj2 = { variant: "text-sm/semibold", color: "text-default", children: null };
                class N {
                  constructor(arg0) {
                    obj = closure_1(closure_2[19]);
                    obj1 = { guildId: id, channelScores: null };
                    obj4 = { channelId: id, score: null };
                    tmp = closure_0(closure_2[8]);
                    customScoreToNumber = tmp.customScoreToNumber;
                    ICYMICustomScore = closure_0(closure_2[8]).ICYMICustomScore;
                    if (channel) {
                      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
                    } else {
                      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
                    }
                    obj4.score = customScoreToNumberResult;
                    items = [];
                    items[0] = obj4;
                    obj1.channelScores = items;
                    customScoreGuildResult = obj.customScoreGuild(obj1);
                    return;
                  }
                }
                const intl = tmp(tmp2[11]).intl;
                obj2.children = intl.string(tmp(tmp2[11]).t["0jRosn"]);
                const tmp25 = closure_8(tmp24, obj2);
                cResult[16] = tmp25;
                let tmp22 = tmp25;
              } else {
                tmp22 = cResult[16];
              }
              if (cResult[17] !== tmp10) {
                const intl2 = tmp(tmp2[11]).intl;
                class N {
                  constructor(arg0) {
                    obj = closure_1(closure_2[19]);
                    obj1 = { guildId: id, channelScores: null };
                    obj4 = { channelId: id, score: null };
                    tmp = closure_0(closure_2[8]);
                    customScoreToNumber = tmp.customScoreToNumber;
                    ICYMICustomScore = closure_0(closure_2[8]).ICYMICustomScore;
                    if (channel) {
                      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
                    } else {
                      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
                    }
                    obj4.score = customScoreToNumberResult;
                    items = [];
                    items[0] = obj4;
                    obj1.channelScores = items;
                    customScoreGuildResult = obj.customScoreGuild(obj1);
                    return;
                  }
                }
                tmp27[0] = tmp10;
                const formatResult = intl2.format(tmp(tmp2[11]).t.KzkF1j, tmp27);
                cResult[17] = tmp10;
                cResult[18] = formatResult;
                let tmp26 = formatResult;
              } else {
                tmp26 = cResult[18];
              }
              if (cResult[19] !== tmp26) {
                class N {
                  constructor(arg0) {
                    obj = closure_1(closure_2[19]);
                    obj1 = { guildId: id, channelScores: null };
                    obj4 = { channelId: id, score: null };
                    tmp = closure_0(closure_2[8]);
                    customScoreToNumber = tmp.customScoreToNumber;
                    ICYMICustomScore = closure_0(closure_2[8]).ICYMICustomScore;
                    if (channel) {
                      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
                    } else {
                      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
                    }
                    obj4.score = customScoreToNumberResult;
                    items = [];
                    items[0] = obj4;
                    obj1.channelScores = items;
                    customScoreGuildResult = obj.customScoreGuild(obj1);
                    return;
                  }
                }
                const tmp31 = closure_8(tmp(tmp2[20]).Text, {
                  variant: "text-xs/normal",
                  color: "text-default",
                  children: null,
                });
                cResult[19] = tmp26;
                cResult[20] = tmp31;
                let tmp29 = tmp31;
                let obj3 = { variant: "text-xs/normal", color: "text-default", children: null };
              } else {
                tmp29 = cResult[20];
              }
              const tmp32 = tmp15 === tmp(tmp2[8]).ICYMICustomScore.MUTED;
              if ((cResult[21] === stateFromStores) === tmp17) {
                if (cResult[22] === stateFromStores) {
                  if (cResult[23] === tmp32) {
                    if (cResult[24] === tmp18) {
                      if (cResult[25] === tmp21.customScoreWrapper) {
                        let tmp34 = cResult[26];
                      }
                      class N {
                        constructor(arg0) {
                          obj = closure_1(closure_2[19]);
                          obj1 = { guildId: id, channelScores: null };
                          obj4 = { channelId: id, score: null };
                          tmp = closure_0(closure_2[8]);
                          customScoreToNumber = tmp.customScoreToNumber;
                          ICYMICustomScore = closure_0(closure_2[8]).ICYMICustomScore;
                          if (channel) {
                            customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
                          } else {
                            customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
                          }
                          obj4.score = customScoreToNumberResult;
                          items = [];
                          items[0] = obj4;
                          obj1.channelScores = items;
                          customScoreGuildResult = obj.customScoreGuild(obj1);
                          return;
                        }
                      }
                      const _Symbol3 = Symbol;
                      if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                        const string = tmp(tmp2[11]).intl.string;
                        class N {
                          constructor(arg0) {
                            obj = closure_1(closure_2[19]);
                            obj1 = { guildId: id, channelScores: null };
                            obj4 = { channelId: id, score: null };
                            tmp = closure_0(closure_2[8]);
                            customScoreToNumber = tmp.customScoreToNumber;
                            ICYMICustomScore = closure_0(closure_2[8]).ICYMICustomScore;
                            if (channel) {
                              customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
                            } else {
                              customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
                            }
                            obj4.score = customScoreToNumberResult;
                            items = [];
                            items[0] = obj4;
                            obj1.channelScores = items;
                            customScoreGuildResult = obj.customScoreGuild(obj1);
                            return;
                          }
                        }
                        cResult[27] = tmp42;
                        let tmp41 = tmp42;
                      } else {
                        tmp41 = cResult[27];
                      }
                      if (cResult[28] === tmp32) {
                        if (cResult[29] === tmp19) {
                          if (cResult[30] === tmp43) {
                            let tmp44 = cResult[31];
                          }
                          if (cResult[32] === tmp40) {
                            if (cResult[33] === tmp44) {
                              let tmp47 = cResult[34];
                            }
                            const _Symbol4 = Symbol;
                            class N {
                              constructor(arg0) {
                                obj = closure_1(closure_2[19]);
                                obj1 = { guildId: id, channelScores: null };
                                obj4 = { channelId: id, score: null };
                                tmp = closure_0(closure_2[8]);
                                customScoreToNumber = tmp.customScoreToNumber;
                                ICYMICustomScore = closure_0(closure_2[8]).ICYMICustomScore;
                                if (channel) {
                                  customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
                                } else {
                                  customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
                                }
                                obj4.score = customScoreToNumberResult;
                                items = [];
                                items[0] = obj4;
                                obj1.channelScores = items;
                                customScoreGuildResult = obj.customScoreGuild(obj1);
                                return;
                              }
                            }
                            if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                              const string2 = tmp(tmp2[11]).intl.string;
                              class N {
                                constructor(arg0) {
                                  obj = closure_1(closure_2[19]);
                                  obj1 = { guildId: id, channelScores: null };
                                  obj4 = { channelId: id, score: null };
                                  tmp = closure_0(closure_2[8]);
                                  customScoreToNumber = tmp.customScoreToNumber;
                                  ICYMICustomScore = closure_0(closure_2[8]).ICYMICustomScore;
                                  if (channel) {
                                    customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
                                  } else {
                                    customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
                                  }
                                  obj4.score = customScoreToNumberResult;
                                  items = [];
                                  items[0] = obj4;
                                  obj1.channelScores = items;
                                  customScoreGuildResult = obj.customScoreGuild(obj1);
                                  return;
                                }
                              }
                              cResult[35] = tmp51;
                              let tmp50 = tmp51;
                            } else {
                              tmp50 = cResult[35];
                            }
                            if (cResult[36] !== tmp21.warningText) {
                              let obj4 = {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                style: null,
                                children: null,
                              };
                              class N {
                                constructor(arg0) {
                                  obj = closure_1(closure_2[19]);
                                  obj1 = { guildId: id, channelScores: null };
                                  obj4 = { channelId: id, score: null };
                                  tmp = closure_0(closure_2[8]);
                                  customScoreToNumber = tmp.customScoreToNumber;
                                  ICYMICustomScore = closure_0(closure_2[8]).ICYMICustomScore;
                                  if (channel) {
                                    customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
                                  } else {
                                    customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
                                  }
                                  obj4.score = customScoreToNumberResult;
                                  items = [];
                                  items[0] = obj4;
                                  obj1.channelScores = items;
                                  customScoreGuildResult = obj.customScoreGuild(obj1);
                                  return;
                                }
                              }
                              obj4.children = tmp50;
                              const tmp54 = closure_8(tmp(tmp2[20]).Text, obj4);
                              cResult[36] = tmp21.warningText;
                              cResult[37] = tmp54;
                              let tmp52 = tmp54;
                            } else {
                              tmp52 = cResult[37];
                            }
                            if (cResult[38] === tmp29) {
                              if (cResult[39] === tmp34) {
                                if (cResult[40] === tmp47) {
                                  if (cResult[41] === tmp52) {
                                    let tmp55 = cResult[42];
                                  }
                                  return tmp55;
                                }
                              }
                            }
                            const items2 = [tmp22, tmp29, tmp34, tmp47, tmp52];
                            class Y {
                              constructor(arg0) {
                                if (closure_2 !== channel) {
                                  tmp = closure_1;
                                  tmp2 = closure_2;
                                  obj = closure_1(closure_2[19]);
                                  obj1 = { guildId: null, channelScores: null };
                                  tmp3 = id;
                                  obj1.guildId = id;
                                  obj5 = { channelId: null, score: null };
                                  tmp4 = id;
                                  obj5.channelId = id;
                                  tmp5 = closure_0;
                                  obj4 = closure_0(closure_2[8]);
                                  obj5.score = obj4.customScoreToNumber(channel);
                                  items = [];
                                  items[0] = obj5;
                                  obj1.channelScores = items;
                                  customScoreGuildResult = obj.customScoreGuild(obj1);
                                }
                                return;
                              }
                            }
                            const tmp58 = closure_9(View, { children: null });
                            cResult[38] = tmp29;
                            cResult[39] = tmp34;
                            cResult[40] = tmp47;
                            cResult[41] = tmp52;
                            cResult[42] = tmp58;
                            tmp55 = tmp58;
                            const obj5 = { children: null };
                          }
                          class N {
                            constructor(arg0) {
                              obj = closure_1(closure_2[19]);
                              obj1 = { guildId: id, channelScores: null };
                              obj4 = { channelId: id, score: null };
                              tmp = closure_0(closure_2[8]);
                              customScoreToNumber = tmp.customScoreToNumber;
                              ICYMICustomScore = closure_0(closure_2[8]).ICYMICustomScore;
                              if (channel) {
                                customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
                              } else {
                                customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
                              }
                              obj4.score = customScoreToNumberResult;
                              items = [];
                              items[0] = obj4;
                              obj1.channelScores = items;
                              customScoreGuildResult = obj.customScoreGuild(obj1);
                              return;
                            }
                          }
                          const obj6 = { style: tmp40, children: tmp44 };
                          const tmp49 = closure_8(View, obj6);
                          cResult[32] = tmp40;
                          cResult[33] = tmp44;
                          cResult[34] = tmp49;
                          tmp47 = tmp49;
                        }
                      }
                      const obj7 = {
                        value: !tmp33,
                        onValueChange: tmp19,
                        label: tmp41,
                        disabled: tmp32,
                        start: true,
                        end: true,
                      };
                      const tmp46 = closure_8(tmp(tmp2[21]).TableSwitchRow, obj7);
                      class Y {
                        constructor(arg0) {
                          if (closure_2 !== channel) {
                            tmp = closure_1;
                            tmp2 = closure_2;
                            obj = closure_1(closure_2[19]);
                            obj1 = { guildId: null, channelScores: null };
                            tmp3 = id;
                            obj1.guildId = id;
                            obj5 = { channelId: null, score: null };
                            tmp4 = id;
                            obj5.channelId = id;
                            tmp5 = closure_0;
                            obj4 = closure_0(closure_2[8]);
                            obj5.score = obj4.customScoreToNumber(channel);
                            items = [];
                            items[0] = obj5;
                            obj1.channelScores = items;
                            customScoreGuildResult = obj.customScoreGuild(obj1);
                          }
                          return;
                        }
                      }
                      cResult[29] = tmp19;
                      cResult[30] = !tmp33;
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
                    obj = closure_1(closure_2[19]);
                    obj1 = { guildId: id, channelScores: null };
                    obj4 = { channelId: id, score: null };
                    tmp = closure_0(closure_2[8]);
                    customScoreToNumber = tmp.customScoreToNumber;
                    ICYMICustomScore = closure_0(closure_2[8]).ICYMICustomScore;
                    if (channel) {
                      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
                    } else {
                      customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
                    }
                    obj4.score = customScoreToNumberResult;
                    items = [];
                    items[0] = obj4;
                    obj1.channelScores = items;
                    customScoreGuildResult = obj.customScoreGuild(obj1);
                    return;
                  }
                }
                tmp38[0] = tmp21.customScoreWrapper;
                const obj8 = { disabled: tmp32, initialValue: stateFromStores, onValueUpdated: tmp18 };
                tmp38[1] = closure_8(closure_11, obj8);
                tmp35 = closure_8(View, tmp38);
              }
              cResult[21] = stateFromStores === tmp17;
              class Y {
                constructor(arg0) {
                  if (closure_2 !== channel) {
                    tmp = closure_1;
                    tmp2 = closure_2;
                    obj = closure_1(closure_2[19]);
                    obj1 = { guildId: null, channelScores: null };
                    tmp3 = id;
                    obj1.guildId = id;
                    obj5 = { channelId: null, score: null };
                    tmp4 = id;
                    obj5.channelId = id;
                    tmp5 = closure_0;
                    obj4 = closure_0(closure_2[8]);
                    obj5.score = obj4.customScoreToNumber(channel);
                    items = [];
                    items[0] = obj5;
                    obj1.channelScores = items;
                    customScoreGuildResult = obj.customScoreGuild(obj1);
                  }
                  return;
                }
              }
              cResult[23] = tmp32;
              cResult[24] = tmp18;
              cResult[25] = tmp21.customScoreWrapper;
              cResult[26] = tmp35;
              tmp34 = tmp35;
            }
            class N {
              constructor(arg0) {
                obj = closure_1(closure_2[19]);
                obj1 = { guildId: id, channelScores: null };
                obj4 = { channelId: id, score: null };
                tmp = closure_0(closure_2[8]);
                customScoreToNumber = tmp.customScoreToNumber;
                ICYMICustomScore = closure_0(closure_2[8]).ICYMICustomScore;
                if (channel) {
                  customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
                } else {
                  customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
                }
                obj4.score = customScoreToNumberResult;
                items = [];
                items[0] = obj4;
                obj1.channelScores = items;
                customScoreGuildResult = obj.customScoreGuild(obj1);
                return;
              }
            }
            cResult[13] = id2;
            cResult[14] = id;
            cResult[15] = N;
            tmp19 = N;
          }
        }
        class Y {
          constructor(arg0) {
            if (closure_2 !== channel) {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[19]);
              obj1 = { guildId: null, channelScores: null };
              tmp3 = id;
              obj1.guildId = id;
              obj5 = { channelId: null, score: null };
              tmp4 = id;
              obj5.channelId = id;
              tmp5 = closure_0;
              obj4 = closure_0(closure_2[8]);
              obj5.score = obj4.customScoreToNumber(channel);
              items = [];
              items[0] = obj5;
              obj1.channelScores = items;
              customScoreGuildResult = obj.customScoreGuild(obj1);
            }
            return;
          }
        }
        cResult[9] = id2;
        cResult[10] = stateFromStores;
        cResult[11] = id;
        cResult[12] = Y;
        tmp18 = Y;
        const tmpResult3 = tmp(tmp2[18]);
      }
      const fn = function u() {
        const customChannelScore = ICYMIStore.getCustomChannelScore(id, id2);
        if (customChannelScore !== ICYMIUtils.ICYMICustomScore.UNKNOWN) {
          return customChannelScore;
        } else {
          const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
          const isChannelMutedResult = UserGuildSettingsStore.isChannelMuted(id, id2);
        }
      };
      cResult[1] = id2;
      cResult[2] = id;
      cResult[3] = fn;
      tmp7 = fn;
      let obj = id(stateFromStores[10]);
    }
  : function ChannelScoreSettings(channel) {
      channel = channel.channel;
      let stateFromStores;
      const id = channel.guild.id;
      const id2 = channel.id;
      let items = [ICYMIStore, UserGuildSettingsStore];
      stateFromStores = id(stateFromStores[18]).useStateFromStores(items, () => {
        const customChannelScore = ICYMIStore.getCustomChannelScore(id, id2);
        if (customChannelScore !== ICYMIUtils.ICYMICustomScore.UNKNOWN) {
          return customChannelScore;
        } else {
          const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
          const isChannelMutedResult = UserGuildSettingsStore.isChannelMuted(id, id2);
        }
      });
      let obj = id(stateFromStores[18]);
      const tmp4 = id2(stateFromStores[22])(channel, true);
      const items1 = [ICYMIStore];
      const stateFromStores1 = id(stateFromStores[18]).useStateFromStores(items1, () =>
        ICYMIStore.getCustomGuildScore(id),
      );
      let obj2 = id(stateFromStores[18]);
      let obj3 = id(stateFromStores[8]);
      const tmp7 =
        id(stateFromStores[8]).numberToCustomScore(stateFromStores1) === id(stateFromStores[8]).ICYMICustomScore.MUTED;
      const tmp8 = stateFromStores === id(stateFromStores[8]).ICYMICustomScore.MUTED;
      const items2 = [stateFromStores, id, id2];
      const items3 = [id2, id];
      const callback = noop.useCallback((DEFAULT) => {
        if (stateFromStores !== DEFAULT) {
          const obj2 = { guildId: id, channelScores: null };
          const obj3 = { channelId: id2, score: null };
          const obj = NativeICYMIActionCreatorsDefault;
          obj3.score = ICYMIUtils.customScoreToNumber(DEFAULT);
          const items = [obj3];
          obj2.channelScores = items;
          obj.customScoreGuild(obj2);
        }
      }, items2);
      const callback1 = noop.useCallback((arg0) => {
        const obj2 = { guildId: id, channelScores: null };
        const obj3 = { channelId: id2, score: null };
        const obj = NativeICYMIActionCreatorsDefault;
        const customScoreToNumber = ICYMIUtils.customScoreToNumber;
        const ICYMICustomScore = ICYMIUtils.ICYMICustomScore;
        if (arg0) {
          let customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.DEFAULT);
        } else {
          customScoreToNumberResult = customScoreToNumber(ICYMICustomScore.MUTED);
        }
        obj3.score = customScoreToNumberResult;
        const items = [obj3];
        obj2.channelScores = items;
        obj.customScoreGuild(obj2);
      }, items3);
      const tmp11 = closure_10();
      let obj4 = { variant: "text-sm/semibold", color: "text-default", children: null };
      const intl = id(stateFromStores[11]).intl;
      obj4.children = intl.string(id(stateFromStores[11]).t["0jRosn"]);
      const items4 = [closure_8(id(stateFromStores[20]).Text, obj4), , , ,];
      const obj5 = { variant: "text-xs/normal", color: "text-default", children: null };
      const intl2 = id(stateFromStores[11]).intl;
      obj5.children = intl2.format(id(stateFromStores[11]).t.KzkF1j, { channelName: tmp4 });
      items4[1] = closure_8(id(stateFromStores[20]).Text, obj5);
      let tmp14Result = null;
      if (!tmp8) {
        const obj6 = { style: tmp11.customScoreWrapper, children: null };
        const obj7 = { disabled: tmp7, initialValue: stateFromStores, onValueUpdated: callback };
        obj6.children = closure_8(closure_11, obj7);
        tmp14Result = closure_8(View, obj6);
      }
      items4[2] = tmp14Result;
      let muted = tmp8;
      if (tmp8) {
        muted = tmp11.muted;
      }
      const obj8 = { children: null };
      const obj9 = { style: muted, children: null };
      const obj10 = { value: !tmp8, onValueChange: callback1, label: null, disabled: null, start: true, end: true };
      const intl3 = tmp(tmp2[11]).intl;
      obj10.label = intl3.string(id(stateFromStores[11]).t.W2aJRS);
      obj10.disabled = tmp7;
      obj9.children = closure_8(id(stateFromStores[21]).TableSwitchRow, obj10);
      items4[3] = closure_8(View, obj9);
      const obj11 = { variant: "text-xs/normal", color: "text-muted", style: tmp11.warningText, children: null };
      const intl4 = tmp(tmp2[11]).intl;
      obj11.children = intl4.string(id(stateFromStores[11]).t["5lP6Ax"]);
      items4[4] = closure_8(id(stateFromStores[20]).Text, obj11);
      obj8.children = items4;
      return closure_9(View, obj8);
    };
