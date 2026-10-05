// discord_app/modules/premium/gifting/native/views/promotions/GiftingSKUCardsGrid.tsx
import _modDef12 from "../../../../../../../_runtime/metro/00012__.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../../../../screen/useWindowDimensions.native.tsx";
import NameplateRecord from "../../../../../collectibles/records/NameplateRecord.tsx";
import react_native from "../../../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import AvatarDecorationRecord from "../../../../../collectibles/records/AvatarDecorationRecord.tsx";
import useCurrentUser from "../../../../../collectibles/hooks/useCurrentUser.tsx";
import useFetchCollectiblesProduct from "../../../../../collectibles/hooks/useFetchCollectiblesProduct.tsx";
import react_mod from "../../../../../../../_runtime/00019_react.js";
import react_native2 from "../../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let rewardSkuId;

let StyleSheet;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let react = react_mod;
({ View: closure_4, StyleSheet } = react_native2);
const isAvatarDecorationRecord = AvatarDecorationRecord.isAvatarDecorationRecord;
const isNameplateRecord = NameplateRecord.isNameplateRecord;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 100;
let c10 = 150;
const PX_12 = nativeDefault.space.PX_12;
let closure_12 = 2 * nativeDefault.space.PX_24;
let createStyles = createStyles_mod;
let obj = {
  card: obj2,
  previewContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 100,
    overflow: "hidden",
  },
  preview: obj3,
  selected: obj4,
  claimed: { opacity: 0.4 },
  checkmark: { position: "absolute", opacity: 1, fontWeight: "bold" },
  textContainer: obj5,
};
obj2 = {
  width: 150,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_16,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
createStyles = createStyles.createStyles;
obj3 = { display: "flex", justifyContent: "center", alignItems: "center" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj5 = { alignSelf: "stretch", paddingHorizontal: nativeDefault.space.PX_16, alignItems: "flex-start" };
let closure_13 = createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (rewardSkuId) => {
        let accessibilityRole;
        let accessibilityState;
        let claimed;
        let onSelect;
        let tmp5;
        const obj = react2;
        const cResult = obj.c(46);
        rewardSkuId = rewardSkuId.rewardSkuId;
        ({ claimed, onSelect } = rewardSkuId);
        const isSelected = rewardSkuId.isSelected;
        const tmp4 = closure_13();
        const obj2 = useCurrentUser;
        const currentUser = obj2.useCurrentUser();
        if (cResult[0] !== isSelected) {
          const obj3 = { selected: isSelected };
          cResult[0] = isSelected;
          cResult[1] = obj3;
          tmp5 = obj3;
        } else {
          tmp5 = cResult[1];
        }
        const tmpResult = react_native;
        const radioA11yNative = tmpResult.useRadioA11yNative(tmp5);
        ({ accessibilityRole, accessibilityState } = radioA11yNative);
        const tmpResult2 = useFetchCollectiblesProduct;
        const product = tmpResult2.useFetchCollectiblesProduct(rewardSkuId).product;
        if (cResult[2] === currentUser) {
          if (null == product) {
            return null;
          } else {
            const first = product.items[0];
            if (cResult[5] === tmp4.card) {
              if (cResult[8] === onSelect) {
                class M {
                  constructor() {
                    return onSelect(rewardSkuId);
                  }
                }
                const items = [tmp4.preview, claimed && tmp4.claimed];
                cResult[11] = tmp4.preview;
                cResult[12] = claimed && tmp4.claimed;
                cResult[13] = items;
              }
              class M {
                constructor() {
                  return onSelect(rewardSkuId);
                }
              }
              cResult[8] = onSelect;
              cResult[9] = rewardSkuId;
              cResult[10] = M;
            }
            const items1 = [tmp4.card, isSelected && tmp4.selected];
            cResult[5] = tmp4.card;
            cResult[6] = isSelected && tmp4.selected;
            cResult[7] = items1;
          }
        }
        let avatarSource;
        if (isSelected) {
          class M {
            constructor() {
              return onSelect(rewardSkuId);
            }
          }
          avatarSource = currentUser.getAvatarSource(null, true, c9);
        }
        cResult[2] = currentUser;
        cResult[3] = isSelected;
        cResult[4] = avatarSource;
      }
    : (rewardSkuId) => {
        let accessibilityRole;
        let accessibilityState;
        let claimed;
        let isSelected;
        let items3;
        let items4;
        let items5;
        let tmp8Result;
        rewardSkuId = rewardSkuId.rewardSkuId;
        ({ claimed, onSelect: importDefault, isSelected } = rewardSkuId);
        const tmp = closure_13();
        const obj = rewardSkuId(isSelected[9]);
        const currentUser = obj.useCurrentUser();
        const obj2 = rewardSkuId(isSelected[10]);
        const radioA11yNative = obj2.useRadioA11yNative({ selected: isSelected });
        ({ accessibilityRole, accessibilityState } = radioA11yNative);
        const obj3 = rewardSkuId(isSelected[11]);
        const product = obj3.useFetchCollectiblesProduct(rewardSkuId).product;
        const items = [isSelected, currentUser];
        if (null == product) {
          return null;
        } else {
          let stringResult;
          const first = product.items[0];
          const items1 = [tmp.card];
          let selected = isSelected;
          const PressableOpacity = tmp2(isSelected[17]).PressableOpacity;
          if (isSelected) {
            selected = tmp.selected;
          }
          const obj4 = {
            style: items1,
            onPress() {
              return importDefault(rewardSkuId);
            },
            activeOpacity: 0.8,
            disabled: claimed,
            accessibilityRole,
            accessibilityState,
            children: items4,
          };
          items1[1] = selected;
          const items2 = [tmp.preview];
          const obj5 = { style: tmp.previewContainer, children: items3 };
          const obj6 = { style: items2, children: tmp8Result };
          const tmp9 = claimed && tmp.claimed;
          items2[1] = tmp9;
          if (isNameplateRecord(first)) {
            const obj7 = { item: first, animate: isSelected };
            tmp8Result = closure_7(require("NameplateCardPreview"), obj7);
          } else if (isAvatarDecorationRecord(first)) {
            const obj8 = { item: first, size, animate: isSelected, avatarSource: tmp6 };
            tmp8Result = closure_7(require("AvatarDecorationSampleV2"), obj8);
          }
          items3 = [closure_7(closure_4, obj6)];
          let tmp8Result2 = claimed;
          if (tmp8Result2) {
            const obj9 = { size: "lg", style: tmp.checkmark };
            tmp8Result2 = closure_7(tmp2(isSelected[14]).CheckmarkLargeBoldIcon, obj9);
          }
          items3[1] = tmp8Result2;
          items4 = [closure_8(closure_4, obj5)];
          const obj10 = { style: tmp.textContainer, children: items5 };
          const obj11 = {
            variant: "heading-sm/bold",
            color: "mobile-text-heading-primary",
            lineClamp: 1,
            accessibilityRole: "header",
            children: product.name,
          };
          items5 = [closure_7(rewardSkuId(isSelected[15]).Text, obj11)];
          const Text = tmp2(isSelected[15]).Text;
          const intl = tmp2(isSelected[16]).intl;
          const string = intl.string;
          const t = tmp2(isSelected[16]).t;
          if (claimed) {
            stringResult = string(t["6cfuDj"]);
          } else {
            stringResult = string(t.QQsaCc);
          }
          const obj12 = {
            variant: "text-xs/semibold",
            color: "mobile-text-heading-primary",
            lineClamp: 1,
            children: stringResult,
          };
          items5[1] = closure_7(Text, obj12);
          items4[1] = closure_8(closure_4, obj10);
          return closure_8(PressableOpacity, obj4);
        }
      },
);
createStyles = createStyles_mod;
let obj6 = {
  grid: { flexDirection: "column", alignSelf: "center", gap: PX_12 },
  row: { flexDirection: "row", gap: PX_12 },
};
let closure_15 = createStyles.createStyles(obj6);
ReactCompilerGating = ReactCompilerGating_mod;
const tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onSelect) => {
      let claimableRewards;
      let highlightedSkuId;
      let rewardsToDisplay;
      let row;
      let obj = claimableRewards(highlightedSkuId[8]);
      const cResult = obj.c(22);
      ({ rewardsToDisplay, claimableRewards } = onSelect);
      onSelect = onSelect.onSelect;
      const tmp = highlightedSkuId;
      highlightedSkuId = onSelect.highlightedSkuId;
      const tmp3 = closure_15();
      react = tmp3;
      let length = Math.max(
        1,
        Math.floor((onSelect(highlightedSkuId[18])().width - closure_12 + PX_12) / (c10 + PX_12)),
      );
      const tmp4 = onSelect;
      if (cResult[0] === length) {
        let arr;
        let tmp10;
        if (cResult[1] === rewardsToDisplay) {
          arr = cResult[2];
        }
        if (arr.length <= 1) {
          length = rewardsToDisplay.length;
        }
        const _Math = Math;
        const result = length * c10;
        const sum = result + Math.max(0, length - 1) * PX_12;
        if (cResult[3] !== sum) {
          const obj2 = { width: sum };
          cResult[3] = sum;
          cResult[4] = obj2;
          tmp10 = obj2;
        } else {
          tmp10 = cResult[4];
        }
        if (cResult[5] === tmp3.grid) {
          let tmp11;
          let tmp12;
          if (cResult[6] === tmp10) {
            tmp11 = cResult[7];
          }
          if (cResult[8] === claimableRewards) {
            if (cResult[9] === highlightedSkuId) {
              if (cResult[10] === onSelect) {
                if (cResult[11] === arr) {
                  if (cResult[12] === tmp3.row) {
                    tmp12 = cResult[13];
                  }
                  if (cResult[19] === tmp11) {
                    let tmp15;
                    if (cResult[20] === tmp12) {
                      tmp15 = cResult[21];
                    }
                    return tmp15;
                  }
                  class P {
                    constructor(arg0, arg1) {
                      obj = {
                        style: closure_3.row,
                        children: onSelect.map(() => {
                          /* body not rendered: F140676 */
                        }),
                      };
                      return jsx(View, obj, arg1);
                    }
                  }
                  const obj3 = { style: tmp11, children: tmp12 };
                  const tmp17 = closure_7(closure_4, obj3);
                  cResult[19] = tmp11;
                  cResult[20] = tmp12;
                  cResult[21] = tmp17;
                  tmp15 = tmp17;
                }
              }
            }
          }
          if (cResult[14] === claimableRewards) {
            if (cResult[15] === highlightedSkuId) {
              if (cResult[16] === onSelect) {
                let tmp13;
                if (cResult[17] === tmp3.row) {
                  tmp13 = cResult[18];
                }
                const mapped = arr.map(tmp13);
                class P {
                  constructor(arg0, arg1) {
                    obj = {
                      style: closure_3.row,
                      children: onSelect.map(() => {
                        /* body not rendered: F140676 */
                      }),
                    };
                    return jsx(View, obj, arg1);
                  }
                }
                cResult[9] = highlightedSkuId;
                cResult[10] = onSelect;
                cResult[11] = arr;
                cResult[12] = tmp3.row;
                cResult[13] = mapped;
                tmp12 = mapped;
              }
            }
          }
          class P {
            constructor(arg0, arg1) {
              obj = {
                style: closure_3.row,
                children: onSelect.map(() => {
                  /* body not rendered: F140676 */
                }),
              };
              return jsx(View, obj, arg1);
            }
          }
          cResult[14] = claimableRewards;
          cResult[15] = highlightedSkuId;
          cResult[16] = onSelect;
          cResult[17] = tmp3.row;
          cResult[18] = P;
          tmp13 = P;
        }
        const items = [tmp3.grid, tmp10];
        cResult[5] = tmp3.grid;
        cResult[6] = tmp10;
        cResult[7] = items;
        tmp11 = items;
      }
      const tmp4Result = tmp4(tmp[19]);
      const chunkResult = tmp4Result.chunk(rewardsToDisplay, length);
      cResult[0] = length;
      cResult[1] = rewardsToDisplay;
      cResult[2] = chunkResult;
      arr = chunkResult;
    }
  : (rewardsToDisplay) => {
      let items1;
      rewardsToDisplay = rewardsToDisplay.rewardsToDisplay;
      ({ claimableRewards: importDefault, onSelect: dependencyMap, highlightedSkuId: react } = rewardsToDisplay);
      const tmp = closure_15();
      const row = tmp;
      let length = Math.max(1, Math.floor((useWindowDimensionsDefault().width - closure_12 + PX_12) / (c10 + PX_12)));
      const items = [rewardsToDisplay, length];
      const memo = react.useMemo(() => {
        const obj = _modDef12;
        return obj.chunk(rewardsToDisplay, length);
      }, items);
      if (memo.length <= 1) {
        length = rewardsToDisplay.length;
      }
      const result = length * c10;
      let obj = {
        style: items1,
        children: memo.map((arr, index) => {
          let onSelect;
          let obj = {
            style: row.row,
            children: arr.map((rewardSkuId) => {
              let closure_0 = rewardSkuId;
              const obj = {
                rewardSkuId,
                claimed: !closure_1_1.some((item) => item === closure_0),
                isSelected: closure_1_3 === rewardSkuId,
                onSelect,
              };
              return closure_2_7(closure_2_14, obj, rewardSkuId);
            }),
          };
          return metroImportDefault(React3, obj, index);
        }),
      };
      items1 = [tmp.grid, { width: result + Math.max(0, length - 1) * PX_12 }];
      ({ width: result + Math.max(0, length - 1) * PX_12 });
      return closure_7(row, obj);
    };
let result = size.fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUCardsGrid.tsx");

export default tmp7;
