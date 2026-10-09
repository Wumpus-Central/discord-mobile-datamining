// discord_app/modules/stickers/native/Sticker.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import shared from "../../../design/shared.tsx";
import StickersUtils from "../StickersUtils.tsx";
import StickersTypes from "../StickersTypes.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef6817 from "../../../../_runtime/metro/06817__.js";
import _modDef6818 from "../../../../_runtime/metro/06818__.js";
import NativeLottieView from "NativeLottieView.tsx";
import NativeAPNGViewDefault from "../../../components_native/common/NativeAPNGView.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../user_settings/ThemeStore.tsx";

const NativeLottieViewDefault = NativeLottieView;

require = fn;
const PixelRatio = fn(17).PixelRatio;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
function getStickerAssetUrl(format_type, size, arg2) {
  if (format_type.format_type === StickersTypes.StickerFormat.LOTTIE) {
    let str = StickersUtils.getStickerAssetUrl(format_type);
    const tmpResult = StickersUtils;
  } else if (format_type.format_type === StickersTypes.StickerFormat.APNG) {
    const obj = { isPreview: !arg2, size };
    str = StickersUtils.getStickerAssetUrl(format_type, obj);
    const tmpResult3 = StickersUtils;
  } else {
    const obj2 = { isPreview: !arg2, size: PixelRatio.getPixelSizeForLayoutSize(size) };
    str = StickersUtils.getStickerAssetUrl(format_type, obj2);
    const tmpResult4 = StickersUtils;
  }
  if (str == null) {
    str = "";
  }
  return str;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/Sticker.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function Sticker(arg0) {
      const cResult = c.c(32);
      ({ sticker, size, animated, opaque } = arg0);
      if (undefined === opaque) {
        let num = 1;
      } else {
        num = 0.3;
      }
      if (cResult[0] === (undefined === animated || animated)) {
        if (cResult[1] === size) {
          if (cResult[2] === sticker) {
            let tmp5 = cResult[3];
          }
          if (cResult[4] !== sticker.name) {
            const intl = util.intl;
            const obj2 = { stickerName: sticker.name };
            const formatToPlainStringResult = intl.formatToPlainString(util.t.rk6pOw, obj2);
            cResult[4] = sticker.name;
            cResult[5] = formatToPlainStringResult;
            let tmp7 = formatToPlainStringResult;
          } else {
            tmp7 = cResult[5];
          }
          if (sticker.format_type === StickersTypes.StickerFormat.LOTTIE) {
            let str4 = sticker.id;
            if (str4 == null) {
              str4 = "";
            }
            const NativeLottieRenderMode = NativeLottieView.NativeLottieRenderMode;
            const tmp31 = tmp4 ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
            if (cResult[6] === tmp7) {
              if (cResult[7] === num) {
                if (cResult[8] === size) {
                  if (cResult[9] === tmp5) {
                    if (cResult[10] === str4) {
                      if (cResult[11] === tmp31) {
                        let tmp32 = cResult[12];
                      }
                      return tmp32;
                    }
                  }
                }
              }
            }
            const size1 = {
              url: tmp5,
              asset: str4,
              width: size,
              height: size,
              opacity: num,
              renderMode: tmp31,
              accessibilityLabel: tmp7,
            };
            const tmp35 = jsx(NativeLottieViewDefault, {
              url: tmp5,
              asset: str4,
              width: size,
              height: size,
              opacity: num,
              renderMode: tmp31,
              accessibilityLabel: tmp7,
            });
            cResult[6] = tmp7;
            cResult[7] = num;
            cResult[8] = size;
            cResult[9] = tmp5;
            cResult[10] = str4;
            cResult[11] = tmp31;
            cResult[12] = tmp35;
            tmp32 = tmp35;
          } else {
            if (sticker.format_type === StickersTypes.StickerFormat.APNG) {
              if ("type" in sticker) {
                StickersUtils;
              }
              if (cResult[13] === num) {
                if (cResult[14] === size) {
                  let tmp9 = cResult[15];
                }
                if (cResult[16] !== sticker.format_type) {
                  const stickerExtensionFromFormatType = StickersUtils.getStickerExtensionFromFormatType(
                    sticker.format_type,
                  );
                  cResult[16] = sticker.format_type;
                  cResult[17] = stickerExtensionFromFormatType;
                  let tmp10 = stickerExtensionFromFormatType;
                  const tmpResult6 = StickersUtils;
                } else {
                  tmp10 = cResult[17];
                }
                const _HermesInternal = HermesInternal;
                const combined = "" + sticker.id + "." + tmp10;
                if (cResult[18] === tmp7) {
                  if (cResult[19] === tmp5) {
                    if (cResult[20] === tmp9) {
                      if (cResult[21] === combined) {
                        let tmp14 = cResult[22];
                      }
                      return tmp14;
                    }
                  }
                }
                const obj3 = { style: tmp9, url: tmp5, name: combined, accessibilityLabel: tmp7 };
                const obj4 = {};
                const merged = Object.assign(obj3);
                const tmp21 = jsx(NativeAPNGViewDefault, {});
                cResult[18] = tmp7;
                cResult[19] = tmp5;
                cResult[20] = tmp9;
                cResult[21] = combined;
                cResult[22] = tmp21;
                tmp14 = tmp21;
              }
              const size2 = { height: size, width: size, opacity: num };
              cResult[13] = num;
              cResult[14] = size;
              cResult[15] = size2;
              tmp9 = size2;
            }
            if (cResult[23] === num) {
              if (cResult[24] === size) {
                let tmp22 = cResult[25];
              }
              if (cResult[26] !== tmp5) {
                const obj5 = { uri: tmp5 };
                cResult[26] = tmp5;
                cResult[27] = obj5;
                let tmp23 = obj5;
              } else {
                tmp23 = cResult[27];
              }
              if (cResult[28] === tmp7) {
                if (cResult[29] === tmp22) {
                  if (cResult[30] === tmp23) {
                    return cResult[31];
                  }
                }
              }
              let obj6 = {
                resizeMode: "contain",
                style: tmp22,
                placeholder: null,
                source: null,
                accessible: true,
                accessibilityLabel: null,
              };
              if (tmpResult7.isThemeDark(ThemeStore.theme)) {
                let tmp25Result = _modDef6817;
              } else {
                tmp25Result = _modDef6818;
              }
              obj6.placeholder = tmp25Result;
              obj6.source = tmp23;
              obj6.accessibilityLabel = tmp7;
              obj6 = (
                <tmp26
                  resizeMode="contain"
                  style={tmp22}
                  placeholder={null}
                  source={null}
                  accessible
                  accessibilityLabel={null}
                />
              );
              cResult[28] = tmp7;
              cResult[29] = tmp22;
              cResult[30] = tmp23;
              cResult[31] = obj6;
              tmpResult7 = shared;
            }
            const size3 = { height: size, width: size, opacity: num };
            cResult[23] = num;
            cResult[24] = size;
            cResult[25] = size3;
            tmp22 = size3;
          }
        }
      }
      if (sticker.format_type === StickersTypes.StickerFormat.LOTTIE) {
        let str = StickersUtils.getStickerAssetUrl(sticker);
        const tmpResult8 = StickersUtils;
      } else if (sticker.format_type === StickersTypes.StickerFormat.APNG) {
        const obj7 = { isPreview: !tmp4, size };
        str = StickersUtils.getStickerAssetUrl(sticker, obj7);
        const tmpResult9 = StickersUtils;
      } else {
        const obj8 = { isPreview: !tmp4, size: PixelRatio.getPixelSizeForLayoutSize(size) };
        str = StickersUtils.getStickerAssetUrl(sticker, obj8);
        const tmpResult10 = StickersUtils;
      }
      if (str == null) {
        str = "";
      }
      cResult[0] = undefined === animated || animated;
      cResult[1] = size;
      cResult[2] = sticker;
      cResult[3] = str;
      tmp5 = str;
    }
  : function Sticker(opaque) {
      ({ sticker, size, animated } = opaque);
      if (animated === undefined) {
        animated = true;
      }
      let flag = opaque.opaque;
      if (flag === undefined) {
        flag = true;
      }
      let num = 0.3;
      if (flag) {
        num = 1;
      }
      if (sticker.format_type === StickersTypes.StickerFormat.LOTTIE) {
        let str = StickersUtils.getStickerAssetUrl(sticker);
        const tmpResult = StickersUtils;
      } else if (sticker.format_type === StickersTypes.StickerFormat.APNG) {
        const obj = { isPreview: !animated, size };
        str = StickersUtils.getStickerAssetUrl(sticker, obj);
        const tmpResult6 = StickersUtils;
      } else {
        const obj2 = { isPreview: !animated, size: PixelRatio.getPixelSizeForLayoutSize(size) };
        str = StickersUtils.getStickerAssetUrl(sticker, obj2);
        const tmpResult7 = StickersUtils;
      }
      if (str == null) {
        str = "";
      }
      const intl = util.intl;
      const formatToPlainStringResult = intl.formatToPlainString(util.t.rk6pOw, { stickerName: sticker.name });
      if (sticker.format_type === StickersTypes.StickerFormat.LOTTIE) {
        const size1 = {
          url: str,
          asset: null,
          width: null,
          height: null,
          opacity: null,
          renderMode: null,
          accessibilityLabel: null,
        };
        let str4 = sticker.id;
        if (str4 == null) {
          str4 = "";
        }
        size1.asset = str4;
        size1.width = size;
        size1.height = size;
        size1.opacity = num;
        const NativeLottieRenderMode = NativeLottieView.NativeLottieRenderMode;
        size1.renderMode = animated ? NativeLottieRenderMode.LOOP : NativeLottieRenderMode.STILL;
        size1.accessibilityLabel = formatToPlainStringResult;
        return jsx(NativeLottieViewDefault, {
          url: str,
          asset: null,
          width: null,
          height: null,
          opacity: null,
          renderMode: null,
          accessibilityLabel: null,
        });
      } else {
        if (sticker.format_type === StickersTypes.StickerFormat.APNG) {
          if ("type" in sticker) {
            StickersUtils;
          }
          const obj4 = { style: null, url: null, name: null, accessibilityLabel: null };
          const size2 = { height: size, width: size, opacity: num };
          obj4.style = size2;
          obj4.url = str;
          const _HermesInternal = HermesInternal;
          obj4.name = "" + sticker.id + "." + StickersUtils.getStickerExtensionFromFormatType(sticker.format_type);
          obj4.accessibilityLabel = formatToPlainStringResult;
          const obj5 = {};
          const tmpResult9 = StickersUtils;
          const merged = Object.assign(obj4);
          return jsx(NativeAPNGViewDefault, {});
        }
        const obj6 = {
          resizeMode: "contain",
          style: null,
          placeholder: null,
          source: null,
          accessible: true,
          accessibilityLabel: null,
        };
        const size3 = { height: size, width: size, opacity: num };
        obj6.style = size3;
        if (tmpResult10.isThemeDark(ThemeStore.theme)) {
          let tmp13Result = _modDef6817;
        } else {
          tmp13Result = _modDef6818;
        }
        obj6.placeholder = tmp13Result;
        const obj7 = { uri: str };
        obj6.source = obj7;
        obj6.accessibilityLabel = formatToPlainStringResult;
        return (
          <tmp14
            resizeMode="contain"
            style={null}
            placeholder={null}
            source={null}
            accessible
            accessibilityLabel={null}
          />
        );
      }
      const obj3 = { stickerName: sticker.name };
    };
export { getStickerAssetUrl };
