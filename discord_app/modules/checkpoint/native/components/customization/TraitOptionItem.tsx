// discord_app/modules/checkpoint/native/components/customization/TraitOptionItem.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useA11yRolesNative from "../../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import LinearGradientDefault from "../../../../../../_runtime/05388_LinearGradient.js";
import CheckpointTraitRarity from "../../../../../../discord_common/js/shared/shared-constants/CheckpointTraitRarity.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import _modDef6247 from "../../../../../../_runtime/metro/06247__.js";
import inlineStyles from "../../../../../../_runtime/07559_inlineStyles.js";
import NitroWheelIcon from "../../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import CheckpointCustomizationUtils from "../../../CheckpointCustomizationUtils.tsx";
import get_ActivityIndicator from "../../../../../../_runtime/metro/00017__.js";
import CheckpointConstants from "../../../CheckpointConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const inlineStylesDefault = inlineStyles;

({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
({
  CHECKPOINT_DARK_CYAN: hasOwnProperty,
  CHECKPOINT_NITRO_GRADIENT_COLORS: metroRequire,
  CHECKPOINT_PRIMARY: closure_7,
  CHECKPOINT_RARITY_COLORS: closure_8,
  TRAIT_OPTION_HEIGHT,
} = CheckpointConstants);
const TRAIT_OPTION_WIDTH = CheckpointConstants.TRAIT_OPTION_WIDTH;
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const checkpointTraitGradient = "checkpointTraitGradient";
let c14 = 0.04;
const PX_32 = nativeDefault.space.PX_32;
const PX_4 = nativeDefault.space.PX_4;
const start = { x: 0.5, y: 0 };
const end = { x: 0.5, y: 1 };
let obj = {
  assetItem: { width: TRAIT_OPTION_WIDTH, height: TRAIT_OPTION_HEIGHT, alignItems: "center", justifyContent: "center" },
  assetItemLocked: { opacity: 0.4 },
  assetShape: { position: "absolute", top: 0, left: 0 },
  rarityIndicator: { position: "absolute", top: PX_4, left: PX_4 },
  cornerFlag: { width: 0, height: 0, borderTopWidth: 12, borderRightWidth: 12, borderRightColor: "transparent" },
  cornerNitroIcon: { width: 12, height: 12 },
  cornerNitroIconGradient: { width: 12, height: 12 },
  assetImageLocked: null,
  assetImage: { width: TRAIT_OPTION_WIDTH, height: TRAIT_OPTION_HEIGHT },
};
let obj2 = { filter: null };
let items = [{ grayscale: 1 }];
obj2.filter = items;
obj.assetImageLocked = obj2;
let closure_18 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RarityIndicator(rarity) {
      const cResult = c.c(15);
      rarity = rarity.rarity;
      const tmp4 = closure_18();
      if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO) {
        if (cResult[0] === tmp4.cornerNitroIcon) {
          if (cResult[1] === tmp4.rarityIndicator) {
            let tmp11 = cResult[2];
          }
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp15 = closure_1_11(NitroWheelIcon.NitroWheelIcon, { size: "xxs" });
            cResult[3] = tmp15;
            let tmp13 = tmp15;
          } else {
            tmp13 = cResult[3];
          }
          if (cResult[4] !== tmp4.cornerNitroIconGradient) {
            const obj2 = { colors, start, end, style: tmp4.cornerNitroIconGradient };
            const tmp22 = closure_1_11(LinearGradientDefault, obj2);
            cResult[4] = tmp4.cornerNitroIconGradient;
            cResult[5] = tmp22;
            let tmp16 = tmp22;
          } else {
            tmp16 = cResult[5];
          }
          if (cResult[6] === tmp11) {
            if (cResult[7] === tmp16) {
              let tmp23 = cResult[8];
            }
            return tmp23;
          }
          const obj3 = { style: tmp11, maskElement: tmp13, pointerEvents: "none", children: tmp16 };
          const tmp26 = closure_1_11(_modDef6247, obj3);
          cResult[6] = tmp11;
          cResult[7] = tmp16;
          cResult[8] = tmp26;
          tmp23 = tmp26;
        }
        const items = [,];
        ({ rarityIndicator: arr2[0], cornerNitroIcon: arr2[1] } = tmp4);
        cResult[0] = tmp4.cornerNitroIcon;
        cResult[1] = tmp4.rarityIndicator;
        cResult[2] = items;
        tmp11 = items;
      } else {
        let tmp5 = dependencyMap[rarity];
        if (tmp5 == null) {
          tmp5 = React5;
        }
        if (cResult[9] !== tmp5) {
          const obj4 = { borderTopColor: tmp5 };
          cResult[9] = tmp5;
          cResult[10] = obj4;
          let tmp6 = obj4;
        } else {
          tmp6 = cResult[10];
        }
        if (cResult[11] === tmp4.cornerFlag) {
          if (cResult[12] === tmp4.rarityIndicator) {
            if (cResult[13] === tmp6) {
              let tmp7 = cResult[14];
            }
            return tmp7;
          }
        }
        const obj5 = { style: null };
        const items1 = [, ,];
        ({ rarityIndicator: arr[0], cornerFlag: arr[1] } = tmp4);
        items1[2] = tmp6;
        obj5.style = items1;
        const tmp10 = closure_1_11(React4, obj5);
        cResult[11] = tmp4.cornerFlag;
        cResult[12] = tmp4.rarityIndicator;
        cResult[13] = tmp6;
        cResult[14] = tmp10;
        tmp7 = tmp10;
      }
    }
  : function RarityIndicator(rarity) {
      rarity = rarity.rarity;
      const tmp = closure_18();
      if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO) {
        const obj2 = { style: null, maskElement: null, pointerEvents: "none", children: null };
        const items = [,];
        ({ rarityIndicator: arr2[0], cornerNitroIcon: arr2[1] } = tmp);
        obj2.style = items;
        obj2.maskElement = closure_1_11(NitroWheelIcon.NitroWheelIcon, { size: "xxs" });
        const obj3 = { colors, start, end, style: tmp.cornerNitroIconGradient };
        obj2.children = closure_1_11(LinearGradientDefault, obj3);
        let tmp4Result = closure_1_11(_modDef6247, obj2);
      } else {
        const items1 = [, ,];
        ({ rarityIndicator: arr[0], cornerFlag: arr[1] } = tmp);
        let tmp7 = dependencyMap[rarity];
        if (tmp7 == null) {
          tmp7 = React5;
        }
        const obj = { style: null };
        const obj4 = { borderTopColor: tmp7 };
        items1[2] = obj4;
        obj.style = items1;
        tmp4Result = closure_1_11(React4, obj);
      }
      return tmp4Result;
    };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function TraitOptionImage(traitOption) {
      const cResult = c.c(10);
      traitOption = traitOption.traitOption;
      const tmp4 = closure_18();
      if (obj2.isNoneOption(traitOption)) {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const size = { width: PX_32, height: PX_32, pointerEvents: "none", children: null };
          const obj3 = { x1: "0", y1: "0", x2: PX_32, y2: PX_32, stroke, strokeWidth: 1, strokeLinecap: "round" };
          size.children = closure_1_11(inlineStyles.Line, obj3);
          const tmp21 = closure_1_11(inlineStylesDefault, size);
          cResult[0] = tmp21;
          let first = tmp21;
        } else {
          first = cResult[0];
        }
        return first;
      } else {
        if (cResult[1] !== traitOption.asset) {
          const obj4 = { uri: traitOption.asset };
          cResult[1] = traitOption.asset;
          cResult[2] = obj4;
          let tmp5 = obj4;
        } else {
          tmp5 = cResult[2];
        }
        if (cResult[3] === tmp4.assetImage) {
          if (cResult[4] === tmp5) {
            let tmp6 = cResult[5];
          }
          if (cResult[6] === tmp6) {
            if (cResult[7] === tmp4.assetImageLocked) {
              if (cResult[8] === traitOption.locked) {
                let tmp10 = cResult[9];
              }
              return tmp10;
            }
          }
          let tmp11 = tmp6;
          if (true === traitOption.locked) {
            const obj5 = { style: tmp4.assetImageLocked, children: tmp6 };
            tmp11 = closure_1_11(React4, obj5);
          }
          cResult[6] = tmp6;
          cResult[7] = tmp4.assetImageLocked;
          cResult[8] = traitOption.locked;
          cResult[9] = tmp11;
          tmp10 = tmp11;
        }
        const obj6 = { source: tmp5, style: tmp4.assetImage, resizeMode: "contain" };
        const tmp9 = closure_1_11(FastImageDefault, obj6);
        cResult[3] = tmp4.assetImage;
        cResult[4] = tmp5;
        cResult[5] = tmp9;
        tmp6 = tmp9;
      }
      obj2 = CheckpointCustomizationUtils;
    }
  : function TraitOptionImage(traitOption) {
      traitOption = traitOption.traitOption;
      const tmp = closure_18();
      if (obj.isNoneOption(traitOption)) {
        const size = { width: PX_32, height: PX_32, pointerEvents: "none", children: null };
        const obj2 = { x1: "0", y1: "0", x2: PX_32, y2: PX_32, stroke, strokeWidth: 1, strokeLinecap: "round" };
        size.children = closure_1_11(inlineStyles.Line, obj2);
        return closure_1_11(inlineStylesDefault, size);
      } else {
        const obj3 = { source: null, style: null, resizeMode: "contain" };
        const obj4 = { uri: traitOption.asset };
        obj3.source = obj4;
        obj3.style = tmp.assetImage;
        const tmp4Result = closure_1_11(FastImageDefault, obj3);
        let tmp4Result2 = tmp4Result;
        if (true === traitOption.locked) {
          const obj5 = { style: tmp.assetImageLocked, children: tmp4Result };
          tmp4Result2 = closure_1_11(React4, obj5);
        }
        return tmp4Result2;
      }
      obj = CheckpointCustomizationUtils;
    };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AssetShape(arg0) {
      const cResult = c.c(12);
      ({ isNoneOption, isSelected } = arg0);
      const tmp4 = closure_18();
      if (cResult[0] !== isNoneOption) {
        let tmp6 = !isNoneOption;
        if (!isNoneOption) {
          const obj2 = { children: null };
          const obj3 = { id: checkpointTraitGradient, x1: "0", y1: "1", x2: "0", y2: "0", children: null };
          const obj4 = { offset: "0", stopColor, stopOpacity };
          const items = [closure_1_11(inlineStyles.Stop, obj4)];
          const obj5 = { offset: "1", stopColor, stopOpacity };
          items[1] = closure_1_11(inlineStyles.Stop, obj5);
          obj3.children = items;
          obj2.children = __initData(inlineStyles.LinearGradient, obj3);
          tmp6 = closure_1_11(inlineStyles.Defs, obj2);
        }
        cResult[0] = isNoneOption;
        cResult[1] = tmp6;
        let tmp5 = tmp6;
      } else {
        tmp5 = cResult[1];
      }
      const tmp13 = isSelected ? stopColor : stopColor;
      let num3 = 1;
      if (isSelected) {
        num3 = CheckpointCustomizationUtils.TRAIT_OPTION_STROKE_WIDTH;
      }
      if (cResult[2] === tmp13) {
        if (cResult[3] === num3) {
          let tmp14 = cResult[4];
        }
        if (cResult[5] !== isNoneOption) {
          let tmp17 = !isNoneOption;
          if (!isNoneOption) {
            const obj6 = { points: CheckpointCustomizationUtils.TRAIT_OPTION_SHAPE_POINTS, fill: null };
            const _HermesInternal = HermesInternal;
            obj6.fill = "url(#" + checkpointTraitGradient + ")";
            tmp17 = closure_1_11(inlineStyles.Polygon, obj6);
          }
          cResult[5] = isNoneOption;
          cResult[6] = tmp17;
          let tmp16 = tmp17;
        } else {
          tmp16 = cResult[6];
        }
        if (cResult[7] === tmp4.assetShape) {
          if (cResult[8] === tmp5) {
            if (cResult[9] === tmp14) {
              if (cResult[10] === tmp16) {
                let tmp21 = cResult[11];
              }
              return tmp21;
            }
          }
        }
        const size = {
          width: TRAIT_OPTION_WIDTH,
          height: TRAIT_OPTION_HEIGHT,
          style: tmp4.assetShape,
          pointerEvents: "none",
          children: null,
        };
        const items1 = [tmp5, tmp14, tmp16];
        size.children = items1;
        const tmp26 = __initData(inlineStylesDefault, size);
        cResult[7] = tmp4.assetShape;
        cResult[8] = tmp5;
        cResult[9] = tmp14;
        cResult[10] = tmp16;
        cResult[11] = tmp26;
        tmp21 = tmp26;
      }
      const tmp15 = closure_1_11(inlineStyles.Polygon, {
        points: CheckpointCustomizationUtils.TRAIT_OPTION_SHAPE_POINTS,
        fill: "transparent",
        stroke: tmp13,
        strokeWidth: num3,
      });
      cResult[2] = tmp13;
      cResult[3] = num3;
      cResult[4] = tmp15;
      tmp14 = tmp15;
      const obj7 = {
        points: CheckpointCustomizationUtils.TRAIT_OPTION_SHAPE_POINTS,
        fill: "transparent",
        stroke: tmp13,
        strokeWidth: num3,
      };
    }
  : function AssetShape(arg0) {
      ({ isNoneOption, isSelected } = arg0);
      const size = {
        width: TRAIT_OPTION_WIDTH,
        height: TRAIT_OPTION_HEIGHT,
        style: closure_18().assetShape,
        pointerEvents: "none",
        children: null,
      };
      let tmp5 = !isNoneOption;
      const tmp = closure_18();
      if (!isNoneOption) {
        const obj = { children: null };
        const obj2 = { id: checkpointTraitGradient, x1: "0", y1: "1", x2: "0", y2: "0", children: null };
        const obj3 = { offset: "0", stopColor, stopOpacity };
        const items = [closure_1_11(inlineStyles.Stop, obj3)];
        const obj4 = { offset: "1", stopColor, stopOpacity };
        items[1] = closure_1_11(inlineStyles.Stop, obj4);
        obj2.children = items;
        obj.children = __initData(inlineStyles.LinearGradient, obj2);
        tmp5 = closure_1_11(inlineStyles.Defs, obj);
      }
      const items1 = [tmp5, ,];
      const obj5 = {
        points: CheckpointCustomizationUtils.TRAIT_OPTION_SHAPE_POINTS,
        fill: "transparent",
        stroke: isSelected ? stopColor : stopColor,
        strokeWidth: null,
      };
      let num = 1;
      if (isSelected) {
        num = CheckpointCustomizationUtils.TRAIT_OPTION_STROKE_WIDTH;
      }
      obj5.strokeWidth = num;
      items1[1] = closure_1_11(inlineStyles.Polygon, obj5);
      let tmp12Result = !isNoneOption;
      if (!isNoneOption) {
        const obj6 = { points: CheckpointCustomizationUtils.TRAIT_OPTION_SHAPE_POINTS, fill: null };
        const _HermesInternal = HermesInternal;
        obj6.fill = "url(#" + checkpointTraitGradient + ")";
        tmp12Result = closure_1_11(inlineStyles.Polygon, obj6);
      }
      items1[2] = tmp12Result;
      size.children = items1;
      return __initData(inlineStylesDefault, size);
    };
let ReactCompilerGating = ReactCompilerGating_mod;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitOptionItem.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function TraitOptionItem(arg0) {
      const cResult = c.c(26);
      ({ traitOption, accessibilityLabel, isSelected, showSelectedBorder, onPress, hideCornerFlag, disabled } = arg0);
      const tmp7 = closure_18();
      if (cResult[0] === (undefined !== disabled && disabled)) {
        if (cResult[1] === isSelected) {
          let tmp8 = cResult[2];
        }
        const radioA11yNative = useA11yRolesNative.useRadioA11yNative(tmp8);
        ({ accessibilityRole, accessibilityState } = radioA11yNative);
        if (cResult[3] === tmp7.assetItem) {
          if (cResult[4] === tmp10) {
            let tmp11 = cResult[5];
          }
          if (cResult[6] !== traitOption) {
            const isNoneOptionResult = CheckpointCustomizationUtils.isNoneOption(traitOption);
            cResult[6] = traitOption;
            cResult[7] = isNoneOptionResult;
            let tmp12 = isNoneOptionResult;
            const tmpResult2 = CheckpointCustomizationUtils;
          } else {
            tmp12 = cResult[7];
          }
          if (cResult[8] === tmp4) {
            if (cResult[9] === tmp12) {
              let tmp14 = cResult[10];
            }
            if (cResult[11] === tmp5) {
              if (cResult[12] === traitOption.rarity) {
                let tmp18 = cResult[13];
              }
              if (cResult[14] !== traitOption) {
                const obj2 = { traitOption };
                const tmp26 = closure_1_11(closure_20, obj2);
                cResult[14] = traitOption;
                cResult[15] = tmp26;
                let tmp23 = tmp26;
              } else {
                tmp23 = cResult[15];
              }
              if (cResult[16] === accessibilityLabel) {
                if (cResult[17] === accessibilityRole) {
                  if (cResult[18] === accessibilityState) {
                    if (cResult[19] === tmp6) {
                      if (cResult[20] === onPress) {
                        if (cResult[21] === tmp23) {
                          if (cResult[22] === tmp11) {
                            if (cResult[23] === tmp14) {
                              if (cResult[24] === tmp18) {
                                let tmp27 = cResult[25];
                              }
                              return tmp27;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj3 = {
                onPress,
                disabled: tmp6,
                style: tmp11,
                accessibilityRole,
                accessibilityLabel,
                accessibilityState,
                children: null,
              };
              const items = [tmp14, tmp18, tmp23];
              obj3.children = items;
              const tmp30 = __initData(React3, obj3);
              cResult[16] = accessibilityLabel;
              cResult[17] = accessibilityRole;
              cResult[18] = accessibilityState;
              cResult[19] = tmp6;
              cResult[20] = onPress;
              cResult[21] = tmp23;
              cResult[22] = tmp11;
              cResult[23] = tmp14;
              cResult[24] = tmp18;
              cResult[25] = tmp30;
              tmp27 = tmp30;
            }
            let tmp19 = !tmp5;
            if (!tmp5) {
              tmp19 = null != traitOption.rarity;
            }
            if (tmp19) {
              const obj4 = { rarity: traitOption.rarity };
              tmp19 = closure_1_11(closure_19, obj4);
            }
            cResult[11] = tmp5;
            cResult[12] = traitOption.rarity;
            cResult[13] = tmp19;
            tmp18 = tmp19;
          }
          const obj5 = { isNoneOption: tmp12, isSelected: tmp4 };
          const tmp17 = closure_1_11(closure_21, obj5);
          cResult[8] = tmp4;
          cResult[9] = tmp12;
          cResult[10] = tmp17;
          tmp14 = tmp17;
        }
        const items1 = [tmp7.assetItem, (traitOption.locked || tmp6) && tmp7.assetItemLocked];
        cResult[3] = tmp7.assetItem;
        cResult[4] = (traitOption.locked || tmp6) && tmp7.assetItemLocked;
        cResult[5] = items1;
        tmp11 = items1;
        const tmpResult = useA11yRolesNative;
      }
      const obj6 = { selected: isSelected, disabled: undefined !== disabled && disabled };
      cResult[0] = undefined !== disabled && disabled;
      cResult[1] = isSelected;
      cResult[2] = obj6;
      tmp8 = obj6;
    }
  : function TraitOptionItem(disabled) {
      ({ traitOption, showSelectedBorder } = disabled);
      ({ accessibilityLabel, isSelected } = disabled);
      if (showSelectedBorder === undefined) {
        showSelectedBorder = false;
      }
      ({ hideCornerFlag, onPress } = disabled);
      if (hideCornerFlag === undefined) {
        hideCornerFlag = false;
      }
      let flag = disabled.disabled;
      if (flag === undefined) {
        flag = false;
      }
      const tmp = closure_18();
      const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected: isSelected, disabled: flag });
      const obj2 = {
        onPress,
        disabled: flag,
        style: null,
        accessibilityRole: null,
        accessibilityLabel: null,
        accessibilityState: null,
        children: null,
      };
      const items = [tmp.assetItem];
      let assetItemLocked = traitOption.locked;
      ({ accessibilityRole, accessibilityState } = radioA11yNative);
      if (!assetItemLocked) {
        assetItemLocked = flag;
      }
      if (assetItemLocked) {
        assetItemLocked = tmp.assetItemLocked;
      }
      items[1] = assetItemLocked;
      obj2.style = items;
      obj2.accessibilityRole = accessibilityRole;
      obj2.accessibilityLabel = accessibilityLabel;
      obj2.accessibilityState = accessibilityState;
      const obj3 = { isNoneOption: null, isSelected: null };
      obj3.isNoneOption = CheckpointCustomizationUtils.isNoneOption(traitOption);
      obj3.isSelected = showSelectedBorder;
      const items1 = [closure_1_11(closure_21, obj3), ,];
      let tmp7Result = !hideCornerFlag;
      if (!hideCornerFlag) {
        tmp7Result = null != traitOption.rarity;
      }
      if (tmp7Result) {
        const obj4 = { rarity: traitOption.rarity };
        tmp7Result = closure_1_11(closure_19, obj4);
      }
      items1[1] = tmp7Result;
      items1[2] = closure_1_11(closure_20, { traitOption });
      obj2.children = items1;
      return __initData(React3, obj2);
    };
