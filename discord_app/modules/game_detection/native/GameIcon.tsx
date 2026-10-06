// === Module 6674: GameIcon ===

// Module 6674 (GameIcon)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import AssetRegistryDefault from "AssetRegistry" /* 6675 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 6676 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 6677 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 6678 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let obj;

let c3;
let closure_4;
let obj4;
let obj5;
let size;
let size1;
let size2;
let size3;
({ Image: c3, View: closure_4 } = react_native);
const PremiumSubscriptionSKUs = PremiumConstants.PremiumSubscriptionSKUs;
const jsx = Fragment.jsx;
const GameIconSizes = { SIZE_24: "size_24", SMALL: "small", NORMAL: "normal", LARGE: "large" };
let obj2 = { [GameIconSizes.SIZE_24]: 24, [GameIconSizes.SMALL]: 32, [GameIconSizes.NORMAL]: 48, [GameIconSizes.LARGE]: 80 };
let createStyles = createStyles_mod;
const obj3 = { gameIcon: { justifyContent: "center", alignItems: "center" }, size24: size, small: size1, normal: size2, large: size3, placeholder: obj4, entityWrapper: obj5 };
size = { width: obj2.size_24, height: obj2.size_24, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
size1 = { width: obj2.small, height: obj2.small, borderRadius: nativeDefault.radii.sm };
size2 = { width: obj2.normal, height: obj2.normal, borderRadius: nativeDefault.radii.lg };
size3 = { width: obj2.large, height: obj2.large, borderRadius: nativeDefault.radii.sm };
obj4 = { borderRadius: nativeDefault.radii.none, tintColor: nativeDefault.colors.ICON_MUTED };
obj5 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden" };
let closure_9 = createStyles(obj3);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let game;
  let skuId;
  let style;
  obj = react2;
  const cResult = obj.c(30);
  ({ game, skuId, size, style } = arg0);
  if (undefined === size) {
    size = obj.NORMAL;
  }
  const tmp4 = closure_9();
  if (cResult[0] === tmp4.large) {
    if (cResult[1] === tmp4.normal) {
      if (cResult[2] === tmp4.size24) {
        let tmp5;
        if (cResult[3] === tmp4.small) {
          tmp5 = cResult[4];
        }
        if (cResult[5] === game) {
          if (cResult[6] === size) {
            if (cResult[7] === skuId) {
              if (cResult[8] === style) {
                if (cResult[9] === tmp4.gameIcon) {
                  if (cResult[10] === tmp4.placeholder) {
                    let tmp7;
                    let tmp8;
                    if (cResult[11] === tmp5[size]) {
                      tmp7 = cResult[12];
                      tmp8 = cResult[13];
                    }
                    if (cResult[21] === tmp8) {
                      let tmp24;
                      if (cResult[22] === tmp4.entityWrapper) {
                        tmp24 = cResult[23];
                      }
                      if (cResult[24] === tmp7) {
                        let tmp26;
                        if (cResult[25] === tmp5[size]) {
                          tmp26 = cResult[26];
                        }
                        if (cResult[27] === tmp24) {
                          let tmp30;
                          if (cResult[28] === tmp26) {
                            tmp30 = cResult[29];
                          }
                          return tmp30;
                        }
                        const tmp33 = <React3 style={tmp24}>{tmp26}</React3>;
                        cResult[27] = tmp24;
                        cResult[28] = tmp26;
                        cResult[29] = tmp33;
                        tmp30 = tmp33;
                      }
                      const tmp29 = <_false style={tmp5[size]} source={tmp7} />;
                      cResult[24] = tmp7;
                      cResult[25] = tmp5[size];
                      cResult[26] = tmp29;
                      tmp26 = tmp29;
                    }
                    const items = [tmp8, tmp4.entityWrapper];
                    cResult[21] = tmp8;
                    cResult[22] = tmp4.entityWrapper;
                    cResult[23] = items;
                    tmp24 = items;
                  }
                }
              }
            }
          }
        }
        const items1 = [tmp4.gameIcon, tmp5[size], style];
        let tmp10;
        if (null != skuId) {
          let tmp11;
          if (cResult[14] !== skuId) {
            let tmp13;
            if (PremiumSubscriptionSKUs.TIER_0 === skuId) {
              tmp13 = AssetRegistryDefault;
            } else if (PremiumSubscriptionSKUs.TIER_1 === skuId) {
              tmp13 = AssetRegistryDefault2;
            } else if (PremiumSubscriptionSKUs.TIER_2 === skuId) {
              tmp13 = AssetRegistryDefault3;
            } else {
              tmp13 = null;
            }
            cResult[14] = skuId;
            cResult[15] = tmp13;
            tmp11 = tmp13;
          } else {
            tmp11 = cResult[15];
          }
          tmp10 = tmp11;
        }
        let tmp17 = tmp10;
        if (null != game) {
          tmp17 = tmp10;
          if (null == tmp10) {
            if (cResult[16] === game) {
              let tmp18;
              if (cResult[17] === size) {
                tmp18 = cResult[18];
              }
              tmp17 = tmp10;
              if (null != tmp18) {
                let tmp21;
                if (cResult[19] !== tmp18) {
                  const obj4 = { uri: tmp18 };
                  cResult[19] = tmp18;
                  cResult[20] = obj4;
                  tmp21 = obj4;
                } else {
                  tmp21 = cResult[20];
                }
                tmp17 = tmp21;
              }
            }
            const iconURL = game.getIconURL(obj2[size]);
            cResult[16] = game;
            cResult[17] = size;
            cResult[18] = iconURL;
            tmp18 = iconURL;
          }
        }
        if (null == tmp17) {
          tmp17 = AssetRegistryDefault4;
          items1.push(tmp4.placeholder);
        }
        cResult[5] = game;
        cResult[6] = size;
        cResult[7] = skuId;
        cResult[8] = style;
        cResult[9] = tmp4.gameIcon;
        cResult[10] = tmp4.placeholder;
        cResult[11] = tmp5[size];
        cResult[12] = tmp17;
        cResult[13] = items1;
        tmp7 = tmp17;
        tmp8 = items1;
      }
    }
  }
  const obj5 = { [closure_1_7.NORMAL]: tmp4.normal, [closure_1_7.SMALL]: tmp4.small, [closure_1_7.SIZE_24]: tmp4.size24, [closure_1_7.LARGE]: tmp4.large };
  cResult[0] = tmp4.large;
  cResult[1] = tmp4.normal;
  cResult[2] = tmp4.size24;
  cResult[3] = tmp4.small;
  cResult[4] = obj5;
  tmp5 = obj5;
}) : ((style) => {
  let game;
  let skuId;
  ({ game, skuId, size } = style);
  if (size === undefined) {
    size = obj.NORMAL;
  }
  style = style.style;
  const tmp2 = closure_9();
  obj = { [closure_1_7.NORMAL]: tmp2.normal, [closure_1_7.SMALL]: tmp2.small, [closure_1_7.SIZE_24]: tmp2.size24, [closure_1_7.LARGE]: tmp2.large };
  const items = [tmp2.gameIcon, obj[size], style];
  let tmp3;
  if (null != skuId) {
    let tmp5;
    if (PremiumSubscriptionSKUs.TIER_0 === skuId) {
      tmp5 = AssetRegistryDefault;
    } else if (PremiumSubscriptionSKUs.TIER_1 === skuId) {
      tmp5 = AssetRegistryDefault2;
    } else if (PremiumSubscriptionSKUs.TIER_2 === skuId) {
      tmp5 = AssetRegistryDefault3;
    } else {
      tmp5 = null;
    }
    tmp3 = tmp5;
  }
  let tmp12 = tmp3;
  if (null != game) {
    tmp12 = tmp3;
    if (null == tmp3) {
      const iconURL = game.getIconURL(obj2[size]);
      tmp12 = tmp3;
      if (null != iconURL) {
        obj2 = { uri: iconURL };
        tmp12 = obj2;
      }
    }
  }
  if (null == tmp12) {
    tmp12 = AssetRegistryDefault4;
    items.push(tmp2.placeholder);
  }
  const items1 = [items, tmp2.entityWrapper];
  return <React3 style={items1}>{null}</React3>;
});
tmp5.Sizes = GameIconSizes;
size = size_mod;
const result = size.fileFinishedImporting("modules/game_detection/native/GameIcon.tsx");

export default tmp5;
export { GameIconSizes };
export const GameIconImageSize = obj2;