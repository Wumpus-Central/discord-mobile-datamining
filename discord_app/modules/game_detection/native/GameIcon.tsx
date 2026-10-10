// discord_app/modules/game_detection/native/GameIcon.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef6862 from "../../../../_runtime/metro/06862__.js";
import _modDef6863 from "../../../../_runtime/metro/06863__.js";
import _modDef6864 from "../../../../_runtime/metro/06864__.js";
import _modDef6865 from "../../../../_runtime/metro/06865__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const PremiumSubscriptionSKUs = fn(1392).PremiumSubscriptionSKUs;
const jsx = fn(21).jsx;
const GameIconSizes = { SIZE_24: "size_24", SMALL: "small", NORMAL: "normal", LARGE: "large" };
let obj2 = {
  [GameIconSizes.SIZE_24]: 24,
  [GameIconSizes.SMALL]: 32,
  [GameIconSizes.NORMAL]: 48,
  [GameIconSizes.LARGE]: 80,
};
const createStyles = fn(5092);
let obj4 = {
  gameIcon: { justifyContent: "center", alignItems: "center" },
  size24: null,
  small: null,
  normal: null,
  large: null,
  placeholder: null,
  entityWrapper: null,
};
let size = { width: obj2.size_24, height: obj2.size_24, borderRadius: nativeDefault.radii.sm };
obj4.size24 = size;
const size1 = { width: obj2.small, height: obj2.small, borderRadius: nativeDefault.radii.sm };
obj4.small = size1;
const size2 = { width: obj2.normal, height: obj2.normal, borderRadius: nativeDefault.radii.lg };
obj4.normal = size2;
const size3 = { width: obj2.large, height: obj2.large, borderRadius: nativeDefault.radii.sm };
obj4.large = size3;
obj4.placeholder = { borderRadius: nativeDefault.radii.none, tintColor: nativeDefault.colors.ICON_MUTED };
let obj5 = { borderRadius: nativeDefault.radii.none, tintColor: nativeDefault.colors.ICON_MUTED };
obj4.entityWrapper = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden" };
let closure_8 = createStyles.createStyles(obj4);
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GameIcon(arg0) {
      obj = c;
      const cResult = obj.c(30);
      ({ game, skuId, size, style } = arg0);
      if (undefined === size) {
        size = obj.NORMAL;
      }
      const tmp4 = closure_8();
      if (cResult[0] === tmp4.large) {
        if (cResult[1] === tmp4.normal) {
          if (cResult[2] === tmp4.size24) {
            if (cResult[3] === tmp4.small) {
              let tmp5 = cResult[4];
            }
            if (cResult[5] === game) {
              if (cResult[6] === size) {
                if (cResult[7] === skuId) {
                  if (cResult[8] === style) {
                    if (cResult[9] === tmp4.gameIcon) {
                      if (cResult[10] === tmp4.placeholder) {
                        if (cResult[11] === tmp6) {
                          let tmp7 = cResult[12];
                          let tmp8 = cResult[13];
                        }
                        if (cResult[21] === tmp8) {
                          if (cResult[22] === tmp4.entityWrapper) {
                            let tmp25 = cResult[23];
                          }
                          if (cResult[24] === tmp7) {
                            if (cResult[25] === tmp26) {
                              let tmp27 = cResult[26];
                            }
                            if (cResult[27] === tmp25) {
                              if (cResult[28] === tmp27) {
                                let tmp31 = cResult[29];
                              }
                              return tmp31;
                            }
                            obj2 = { style: tmp25, children: tmp27 };
                            const tmp34 = <View style={tmp25}>{tmp27}</View>;
                            cResult[27] = tmp25;
                            cResult[28] = tmp27;
                            cResult[29] = tmp34;
                            tmp31 = tmp34;
                          }
                          const obj3 = { style: tmp5[size], source: tmp7 };
                          const tmp30 = jsx(FastImageDefault, { style: tmp5[size], source: tmp7 });
                          cResult[24] = tmp7;
                          cResult[25] = tmp5[size];
                          cResult[26] = tmp30;
                          tmp27 = tmp30;
                        }
                        const items = [tmp8, tmp4.entityWrapper];
                        cResult[21] = tmp8;
                        cResult[22] = tmp4.entityWrapper;
                        cResult[23] = items;
                        tmp25 = items;
                      }
                    }
                  }
                }
              }
            }
            const items1 = [tmp4.gameIcon, tmp5[size], style];
            if (null == skuId) {
              let tmp17;
              if (null != game) {
                if (null == undefined) {
                  if (cResult[16] === game) {
                    if (cResult[17] === size) {
                      let tmp18 = cResult[18];
                    }
                    if (null != tmp18) {
                      if (cResult[19] !== tmp18) {
                        const obj4 = { uri: tmp18 };
                        cResult[19] = tmp18;
                        cResult[20] = obj4;
                      }
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
                tmp17 = _modDef6865;
                items1.push(tmp4.placeholder);
              }
              cResult[5] = game;
              cResult[6] = size;
              cResult[7] = skuId;
              cResult[8] = style;
              cResult[9] = tmp4.gameIcon;
              cResult[10] = tmp4.placeholder;
              cResult[11] = tmp6;
              cResult[12] = tmp17;
              cResult[13] = items1;
              tmp7 = tmp17;
              tmp8 = items1;
            } else {
              if (PremiumSubscriptionSKUs.TIER_0 === skuId) {
                let tmp11 = _modDef6862;
                cResult[14] = skuId;
                cResult[15] = tmp11;
              } else if (PremiumSubscriptionSKUs.TIER_1 !== skuId) {
                if (PremiumSubscriptionSKUs.TIER_2 === skuId) {
                  tmp11 = _modDef6864;
                } else {
                  tmp11 = null;
                }
              }
              tmp11 = _modDef6863;
            }
          }
        }
      }
      const obj5 = {
        [closure_1_6.NORMAL]: tmp4.normal,
        [closure_1_6.SMALL]: tmp4.small,
        [closure_1_6.SIZE_24]: tmp4.size24,
        [closure_1_6.LARGE]: tmp4.large,
      };
      cResult[0] = tmp4.large;
      cResult[1] = tmp4.normal;
      cResult[2] = tmp4.size24;
      cResult[3] = tmp4.small;
      cResult[4] = obj5;
      tmp5 = obj5;
    }
  : function GameIcon(style) {
      ({ game, skuId, size } = style);
      if (size === undefined) {
        size = obj.NORMAL;
      }
      const tmp2 = closure_8();
      obj = {
        [closure_1_6.NORMAL]: tmp2.normal,
        [closure_1_6.SMALL]: tmp2.small,
        [closure_1_6.SIZE_24]: tmp2.size24,
        [closure_1_6.LARGE]: tmp2.large,
      };
      const items = [tmp2.gameIcon, obj[size], style.style];
      if (null == skuId) {
        let tmp12;
        if (null != game) {
          if (null == undefined) {
            const iconURL = game.getIconURL(obj2[size]);
            if (null != iconURL) {
              obj2 = { uri: iconURL };
              tmp12 = obj2;
            }
          }
        }
        if (null == tmp12) {
          tmp12 = _modDef6865;
          items.push(tmp2.placeholder);
        }
        const obj3 = { style: null, children: null };
        const items1 = [items, tmp2.entityWrapper];
        obj3.style = items1;
        const obj4 = { style: obj[size], source: tmp12 };
        obj3.children = jsx(FastImageDefault, { style: obj[size], source: tmp12 });
        return <View style={null}>{null}</View>;
      } else if (PremiumSubscriptionSKUs.TIER_0 === skuId) {
      } else if (PremiumSubscriptionSKUs.TIER_1 !== skuId) {
      }
    };
tmp3.Sizes = GameIconSizes;
size = fn(2);
const result = size.fileFinishedImporting("modules/game_detection/native/GameIcon.tsx");

export default tmp3;
export { GameIconSizes };
export const GameIconImageSize = obj2;
