// discord_app/modules/changelog/native/ChangelogInlineImage.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import ChangelogImageUtils from "../../../../discord_common/js/shared/modules/changelog/ChangelogImageUtils.tsx";
import GifTagDefault from "../../user_profile/native/GifTag.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = 0.5625;
const createStyles = fn(5092);
let obj2 = { container: { alignSelf: "center", marginBottom: nativeDefault.space.PX_8 }, image: null, gifTag: null };
let obj3 = { alignSelf: "center", marginBottom: nativeDefault.space.PX_8 };
obj2.image = { borderRadius: nativeDefault.radii.xs };
const rect = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8 };
obj2.gifTag = rect;
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { borderRadius: nativeDefault.radii.xs };
let size = fn(2);
let result = size.fileFinishedImporting("modules/changelog/native/ChangelogInlineImage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ChangelogInlineImage(arg0) {
      const cResult = c.c(41);
      ({ target, alt, title } = arg0);
      let tmp4 = closure_10();
      ({ width, height } = useWindowDimensionsDefault());
      const GifAutoPlay = UserSettings.GifAutoPlay;
      const setting = GifAutoPlay.useSetting();
      [size, closure_1] = noop.useState(null);
      const tmp6 = useWindowDimensionsDefault();
      [tmp10, dependencyMap] = noop.useState(false);
      const tmp9 = _slicedToArray(noop.useState(false), 2);
      [tmp12, _slicedToArray] = noop.useState(false);
      if (!tmp10) {
        if (tmpResult.isChangelogImageUrl(target)) {
          const diff = width - 36;
          const result = 0.5 * height;
          if (cResult[0] === size) {
            if (cResult[1] === diff) {
              if (cResult[2] === title) {
                let tmp15 = cResult[3];
              }
              if (cResult[4] === result) {
                if (cResult[5] === diff) {
                  if (cResult[6] === tmp15) {
                    let tmp19 = cResult[7];
                  }
                  if (cResult[8] === setting) {
                    if (cResult[9] === target) {
                      let tmp21 = cResult[10];
                    }
                    let tmp24 = tmp23;
                    if (null != tmp21) {
                      tmp24 = !tmp12;
                    }
                    let height1;
                    if (size != null) {
                      height1 = size.height;
                    }
                    if (cResult[11] === height1) {
                      let width1;
                      if (size != null) {
                        width1 = size.width;
                      }
                      if (cResult[12] === width1) {
                        let tmp27 = cResult[13];
                      }
                      if (tmp24) {
                        target = tmp21;
                      }
                      if (cResult[14] !== target) {
                        const obj2 = { uri: target };
                        cResult[14] = target;
                        cResult[15] = obj2;
                        let tmp30 = obj2;
                      } else {
                        tmp30 = cResult[15];
                      }
                      if (cResult[16] === tmp19) {
                        if (cResult[17] === tmp4.image) {
                          let tmp31 = cResult[18];
                        }
                        let tmp32 = !tmp23;
                        if (!tmp23) {
                          tmp32 = "" !== alt;
                        }
                        let tmp33;
                        if (!tmp23) {
                          tmp33 = alt;
                        }
                        const _Symbol = Symbol;
                        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                          class Y {
                            constructor() {
                              return closure_2(true);
                            }
                          }
                          cResult[19] = Y;
                        } else {
                          class Y {
                            constructor() {
                              return closure_2(true);
                            }
                          }
                        }
                        if (cResult[20] === tmp27) {
                          class Y {
                            constructor() {
                              return closure_2(true);
                            }
                          }
                        }
                        const obj3 = {
                          source: tmp30,
                          style: tmp31,
                          resizeMode: "contain",
                          accessible: tmp32,
                          accessibilityLabel: tmp33,
                          onLoad: tmp27,
                          onError: Y,
                        };
                        const tmp38 = React5(FastImageDefault, obj3);
                        cResult[20] = tmp27;
                        cResult[21] = tmp30;
                        cResult[22] = tmp31;
                        cResult[23] = tmp32;
                        cResult[24] = tmp33;
                        cResult[25] = tmp38;
                      }
                      const items = [tmp4.image, tmp19];
                      cResult[16] = tmp19;
                      cResult[17] = tmp4.image;
                      cResult[18] = items;
                      tmp31 = items;
                    }
                    if (size != null) {
                      class Y {
                        constructor() {
                          return closure_2(true);
                        }
                      }
                    }
                    cResult[11] = undefined;
                    if (size != null) {
                      class Y {
                        constructor() {
                          return closure_2(true);
                        }
                      }
                    }
                    function handleLoad(nativeEvent) {
                      nativeEvent = nativeEvent.nativeEvent;
                      let source = nativeEvent;
                      if ("source" in nativeEvent) {
                        source = nativeEvent.source;
                      }
                      ({ width, height } = source);
                      let tmp = null;
                      if (width > 0) {
                        tmp = null;
                        if (height > 0) {
                          const size1 = { width, height };
                          tmp = size1;
                        }
                      }
                      let tmp2 = null == tmp;
                      if (!tmp2) {
                        let width1;
                        if (size != null) {
                          width1 = size.width;
                        }
                        let tmp4 = tmp.width === width1;
                        if (tmp4) {
                          let height1;
                          if (size != null) {
                            height1 = size.height;
                          }
                          tmp4 = tmp.height === height1;
                        }
                        tmp2 = tmp4;
                      }
                      if (!tmp2) {
                        closure_1(tmp);
                      }
                    }
                    cResult[12] = undefined;
                    cResult[13] = handleLoad;
                    tmp27 = handleLoad;
                  }
                  let changelogImageStillUrl = null;
                  if (!setting) {
                    class Y {
                      constructor() {
                        return closure_2(true);
                      }
                    }
                    changelogImageStillUrl = null;
                    if (obj5.isAnimatedChangelogImage(target)) {
                      class Y {
                        constructor() {
                          return closure_2(true);
                        }
                      }
                      changelogImageStillUrl = obj6.getChangelogImageStillUrl(target);
                    }
                  }
                  cResult[8] = setting;
                  cResult[9] = target;
                  cResult[10] = changelogImageStillUrl;
                  tmp21 = changelogImageStillUrl;
                }
              }
              const fitChangelogImageResult = ChangelogImageUtils.fitChangelogImage(tmp15, diff, result);
              cResult[4] = result;
              cResult[5] = diff;
              cResult[6] = tmp15;
              cResult[7] = fitChangelogImageResult;
              tmp19 = fitChangelogImageResult;
              const tmpResult3 = ChangelogImageUtils;
            }
          }
          let result1 = ChangelogImageUtils.parseChangelogImageSize(title);
          if (result1 == null) {
            class Y {
              constructor() {
                return closure_2(true);
              }
            }
          }
          if (result1 == null) {
            class Y {
              constructor() {
                return closure_2(true);
              }
            }
            tmp17[0] = diff;
            tmp17[1] = diff * c9;
            result1 = tmp17;
          }
          cResult[0] = size;
          cResult[1] = diff;
          cResult[2] = title;
          cResult[3] = result1;
          tmp15 = result1;
          const tmpResult4 = ChangelogImageUtils;
        }
        tmpResult = ChangelogImageUtils;
      }
      return null;
    }
  : function ChangelogInlineImage(title) {
      ({ target, alt } = title);
      first = undefined;
      closure_1 = undefined;
      c2 = undefined;
      c3 = undefined;
      let tmp = closure_10();
      ({ width, height } = useWindowDimensionsDefault());
      const GifAutoPlay = UserSettings.GifAutoPlay;
      const setting = GifAutoPlay.useSetting();
      [first, closure_1] = noop.useState(null);
      let tmp4 = useWindowDimensionsDefault();
      [tmp10, c2] = noop.useState(false);
      const tmp9 = _slicedToArray(noop.useState(false), 2);
      [tmp12, c3] = noop.useState(false);
      if (!tmp10) {
        if (tmp5Result.isChangelogImageUrl(target)) {
          const diff = width - 36;
          let result = ChangelogImageUtils.parseChangelogImageSize(title.title);
          if (result == null) {
            result = first;
          }
          if (result == null) {
            let size = { width: diff, height: diff * c9 };
            result = size;
          }
          const tmp5Result5 = ChangelogImageUtils;
          let changelogImageStillUrl = null;
          const tmp5Result6 = ChangelogImageUtils;
          if (!setting) {
            changelogImageStillUrl = null;
            if (tmp5Result7.isAnimatedChangelogImage(target)) {
              changelogImageStillUrl = ChangelogImageUtils.getChangelogImageStillUrl(target);
              const tmp5Result8 = ChangelogImageUtils;
            }
            tmp5Result7 = ChangelogImageUtils;
          }
          let tmp19 = tmp18;
          if (null != changelogImageStillUrl) {
            tmp19 = !tmp12;
          }
          let tmp22 = target;
          const fitChangelogImageResult = ChangelogImageUtils.fitChangelogImage(result, diff, 0.5 * height);
          if (tmp19) {
            tmp22 = changelogImageStillUrl;
          }
          const obj = {
            source: null,
            style: null,
            resizeMode: "contain",
            accessible: null,
            accessibilityLabel: null,
            onLoad: null,
            onError: null,
          };
          const obj2 = { uri: tmp22 };
          obj.source = obj2;
          const items = [tmp.image, fitChangelogImageResult];
          obj.style = items;
          let tmp23 = !tmp18;
          if (null == changelogImageStillUrl) {
            tmp23 = "" !== alt;
          }
          obj.accessible = tmp23;
          let tmp24;
          if (null == changelogImageStillUrl) {
            tmp24 = alt;
          }
          obj.accessibilityLabel = tmp24;
          obj.onLoad = function handleLoad(nativeEvent) {
            nativeEvent = nativeEvent.nativeEvent;
            let source = nativeEvent;
            if ("source" in nativeEvent) {
              source = nativeEvent.source;
            }
            ({ width, height } = source);
            let tmp = null;
            if (width > 0) {
              tmp = null;
              if (height > 0) {
                const size1 = { width, height };
                tmp = size1;
              }
            }
            let tmp2 = null == tmp;
            if (!tmp2) {
              const size = first;
              let width1;
              if (first != null) {
                width1 = size.width;
              }
              let tmp4 = tmp.width === width1;
              if (tmp4) {
                let height1;
                if (size != null) {
                  height1 = size.height;
                }
                tmp4 = tmp.height === height1;
              }
              tmp2 = tmp4;
            }
            if (!tmp2) {
              closure_1(tmp);
            }
          };
          obj.onError = function onError() {
            return _undefined(true);
          };
          const tmp20Result = React5(FastImageDefault, obj);
          if (null != changelogImageStillUrl) {
            const obj3 = {
              style: tmp.container,
              accessibilityRole: "button",
              accessibilityLabel: alt,
              accessibilityHint: null,
              onPress: null,
              children: null,
            };
            const intl = util.intl;
            const t = util.t;
            obj3.accessibilityHint = intl.string(tmp12 ? t.ZcgDJX : t.RscU7I);
            obj3.onPress = function onPress() {
              return _undefined2((arg0) => !arg0);
            };
            const items1 = [tmp20Result];
            let tmp20Result2 = null;
            if (tmp19) {
              const obj4 = { style: tmp.gifTag };
              tmp20Result2 = React5(GifTagDefault, obj4);
            }
            items1[1] = tmp20Result2;
            obj3.children = items1;
            let tmp20Result3 = closure_1_8(hasOwnProperty, obj3);
          } else {
            const obj5 = { style: tmp.container, children: tmp20Result };
            tmp20Result3 = React5(timestampProducer, obj5);
          }
          return tmp20Result3;
        }
        tmp5Result = ChangelogImageUtils;
      }
      return null;
    };
