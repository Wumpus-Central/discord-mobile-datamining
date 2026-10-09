// discord_app/modules/checkpoint/native/components/customization/RarityBadge.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import CheckpointTraitRarity from "../../../../../../discord_common/js/shared/shared-constants/CheckpointTraitRarity.tsx";
import inlineStyles from "../../../../../../_runtime/07559_inlineStyles.js";
import NitroWheelIcon from "../../../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import CheckpointCustomizationUtils from "../../../CheckpointCustomizationUtils.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const inlineStylesDefault = inlineStyles;

require = fn;
const View = fn(17).View;
const CheckpointConstants = fn(5434);
({
  CHECKPOINT_NITRO_GRADIENT_COLORS: metroRequire,
  CHECKPOINT_NITRO_BADGE_GRADIENT_ID: closure_7,
  CHECKPOINT_RARITY_COLORS: closure_8,
  CHECKPOINT_RARITY_LABEL_MESSAGES: closure_9,
} = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5091);
const obj2 = {
  badge: {
    paddingVertical: nativeDefault.space.PX_4,
    paddingHorizontal: nativeDefault.space.PX_8,
    justifyContent: "center",
  },
  badgeShape: { position: "absolute", top: 0, left: 0 },
  badgeContent: null,
  badgeLabel: null,
  badgeHidden: null,
};
let obj3 = {
  paddingVertical: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_8,
  justifyContent: "center",
};
obj2.badgeContent = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.badgeLabel = { color: nativeDefault.colors.BLACK, textTransform: "uppercase" };
obj2.badgeHidden = { opacity: 0 };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { color: nativeDefault.colors.BLACK, textTransform: "uppercase" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/RarityBadge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function RarityBadge(rarity) {
      const cResult = c.c(24);
      rarity = rarity.rarity;
      const tmp4 = closure_12();
      [size, require] = noop.useState(null);
      let badgeHidden = null == size;
      if (badgeHidden) {
        badgeHidden = tmp4.badgeHidden;
      }
      if (cResult[0] === tmp4.badge) {
        if (cResult[1] === badgeHidden) {
          let tmp6 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function f(nativeEvent) {
            ({ width: closure_0, height: closure_1 } = nativeEvent.nativeEvent.layout);
            require((arg0) => {
              let size = arg0;
              let width;
              if (arg0 != null) {
                width = size.width;
              }
              if (width !== closure_1_0) {
                const size1 = { width: tmp2, height };
                size = size1;
              } else {
                height = undefined;
                if (size != null) {
                  height = size.height;
                }
              }
              return size;
            });
          };
          cResult[3] = fn;
          let tmp8 = fn;
        } else {
          tmp8 = cResult[3];
        }
        const tmp9 = rarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO;
        if (cResult[4] === tmp9) {
          if (cResult[5] === rarity) {
            if (cResult[6] === size) {
              if (cResult[7] === tmp4.badgeShape) {
                let tmp10 = cResult[8];
              }
              ({ badgeContent, badgeLabel } = tmp4);
              if (cResult[9] !== rarity) {
                const intl = util.intl;
                const stringResult = intl.string(dependencyMap3[rarity]);
                cResult[9] = rarity;
                cResult[10] = stringResult;
                let tmp21 = stringResult;
              } else {
                tmp21 = cResult[10];
              }
              if (cResult[11] === tmp4.badgeLabel) {
                if (cResult[12] === tmp21) {
                  let tmp24 = cResult[13];
                }
                if (cResult[14] !== tmp9) {
                  let tmp28 = tmp9;
                  if (tmp9) {
                    const obj3 = { size: "xxs", color: nativeDefault.colors.BLACK };
                    tmp28 = collapsed(NitroWheelIcon.NitroWheelIcon, obj3);
                  }
                  cResult[14] = tmp9;
                  cResult[15] = tmp28;
                  let tmp27 = tmp28;
                } else {
                  tmp27 = cResult[15];
                }
                if (cResult[16] === tmp4.badgeContent) {
                  if (cResult[17] === tmp24) {
                    if (cResult[18] === tmp27) {
                      let tmp31 = cResult[19];
                    }
                    if (cResult[20] === tmp31) {
                      if (cResult[21] === tmp6) {
                        if (cResult[22] === tmp10) {
                          let tmp35 = cResult[23];
                        }
                        return tmp35;
                      }
                    }
                    const obj4 = { style: tmp6, onLayout: tmp8, children: null };
                    const items = [tmp10, tmp31];
                    obj4.children = items;
                    const tmp38 = closure_1_11(View, obj4);
                    cResult[20] = tmp31;
                    cResult[21] = tmp6;
                    cResult[22] = tmp10;
                    cResult[23] = tmp38;
                    tmp35 = tmp38;
                  }
                }
                const obj5 = { style: badgeContent, children: null };
                const items1 = [tmp24, tmp27];
                obj5.children = items1;
                const tmp34 = closure_1_11(View, obj5);
                cResult[16] = tmp4.badgeContent;
                cResult[17] = tmp24;
                cResult[18] = tmp27;
                cResult[19] = tmp34;
                tmp31 = tmp34;
              }
              const obj6 = { variant: "experimental/mono-md/bold", style: badgeLabel, children: tmp21 };
              const tmp26 = collapsed(Text_Text.Text, obj6);
              cResult[11] = tmp4.badgeLabel;
              cResult[12] = tmp21;
              cResult[13] = tmp26;
              tmp24 = tmp26;
            }
          }
        }
        let tmp12Result = null != size;
        if (tmp12Result) {
          let size1 = { width: null, height: null, style: null, pointerEvents: "none", children: null };
          ({ width: obj2.width, height: obj2.height } = size);
          size1.style = tmp4.badgeShape;
          let tmp15 = tmp9;
          if (tmp9) {
            const obj7 = { children: null };
            const obj8 = { id, x1: "0", y1: "0", x2: "1", y2: "0", children: null };
            const obj9 = { offset: "0", stopColor: 32 };
            const items2 = [collapsed(inlineStyles.Stop, obj9)];
            const obj10 = { offset: "1", stopColor: 19 };
            items2[1] = collapsed(inlineStyles.Stop, obj10);
            obj8.children = items2;
            obj7.children = closure_1_11(inlineStyles.LinearGradient, obj8);
            tmp15 = collapsed(inlineStyles.Defs, obj7);
          }
          const items3 = [tmp15];
          const obj11 = { points: null, fill: null };
          const tmp14 = inlineStylesDefault;
          obj11.points = CheckpointCustomizationUtils.getChamferedRectPoints(size.width, size.height, 6);
          obj11.fill = dependencyMap2[rarity];
          items3[1] = collapsed(inlineStyles.Polygon, obj11);
          size1.children = items3;
          tmp12Result = closure_1_11(tmp14, size1);
          const tmpResult = CheckpointCustomizationUtils;
        }
        cResult[4] = tmp9;
        cResult[5] = rarity;
        cResult[6] = size;
        cResult[7] = tmp4.badgeShape;
        cResult[8] = tmp12Result;
        tmp10 = tmp12Result;
      }
      const items4 = [tmp4.badge, badgeHidden];
      cResult[0] = tmp4.badge;
      cResult[1] = badgeHidden;
      cResult[2] = items4;
      tmp6 = items4;
      const tmp5 = _slicedToArray(noop.useState(null), 2);
    }
  : function RarityBadge(rarity) {
      rarity = rarity.rarity;
      c0 = undefined;
      const tmp = closure_12();
      [size, c0] = noop.useState(null);
      const items = [tmp.badge];
      let badgeHidden = null == size;
      if (badgeHidden) {
        badgeHidden = tmp.badgeHidden;
      }
      let tmp17Result = rarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO;
      const obj = {
        style: items,
        onLayout(nativeEvent) {
          ({ width: c0, height: closure_1 } = nativeEvent.nativeEvent.layout);
          _undefined((arg0) => {
            let size = arg0;
            let width;
            if (arg0 != null) {
              width = size.width;
            }
            if (width !== _undefined) {
              const size1 = { width: tmp2, height };
              size = size1;
            } else {
              height = undefined;
              if (size != null) {
                height = size.height;
              }
            }
            return size;
          });
        },
        children: null,
      };
      items[1] = badgeHidden;
      let tmp5Result = null != size;
      if (tmp5Result) {
        let size1 = { width: null, height: null, style: null, pointerEvents: "none", children: null };
        ({ width: obj2.width, height: obj2.height } = size);
        size1.style = tmp.badgeShape;
        let tmp11 = tmp17Result;
        if (tmp17Result) {
          const obj3 = { children: null };
          const obj4 = { id, x1: "0", y1: "0", x2: "1", y2: "0", children: null };
          const obj5 = { offset: "0", stopColor: 32 };
          const items1 = [collapsed(inlineStyles.Stop, obj5)];
          const obj6 = { offset: "1", stopColor: 19 };
          items1[1] = collapsed(inlineStyles.Stop, obj6);
          obj4.children = items1;
          obj3.children = closure_1_11(inlineStyles.LinearGradient, obj4);
          tmp11 = collapsed(inlineStyles.Defs, obj3);
        }
        const items2 = [tmp11];
        const obj7 = { points: null, fill: null };
        const tmp10 = inlineStylesDefault;
        obj7.points = CheckpointCustomizationUtils.getChamferedRectPoints(size.width, size.height, 6);
        obj7.fill = dependencyMap2[rarity];
        items2[1] = collapsed(inlineStyles.Polygon, obj7);
        size1.children = items2;
        tmp5Result = closure_1_11(tmp10, size1);
        const tmp3Result = CheckpointCustomizationUtils;
      }
      const items3 = [tmp5Result];
      const obj8 = { style: tmp.badgeContent, children: null };
      const obj9 = { variant: "experimental/mono-md/bold", style: tmp.badgeLabel, children: null };
      const intl = util.intl;
      obj9.children = intl.string(dependencyMap3[rarity]);
      const items4 = [collapsed(Text_Text.Text, obj9)];
      if (tmp17Result) {
        const obj10 = { size: "xxs", color: nativeDefault.colors.BLACK };
        tmp17Result = collapsed(NitroWheelIcon.NitroWheelIcon, obj10);
      }
      items4[1] = tmp17Result;
      obj8.children = items4;
      items3[1] = closure_1_11(View, obj8);
      obj.children = items3;
      return closure_1_11(View, obj);
    };
