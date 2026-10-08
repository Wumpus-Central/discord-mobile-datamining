// discord_app/modules/main_tabs_v2/native/you_bar/YouBarFloatingShade.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import client_themes_ClientThemesUtils from "../../../client_themes/native/ClientThemesUtils.tsx";
import useChatLayoutDefault from "../../../chat/native/useChatLayout.tsx";
import LinearGradientDefault from "../../../../../_runtime/05387_LinearGradient.js";
import useYouBarTotalHeight from "hooks/useYouBarTotalHeight.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ClientThemesBackgroundStore from "../../../client_themes/ClientThemesBackgroundStore.tsx";

require = fn;
const View = fn(17).View;
let closure_5 = fn(15177).YOU_BAR_GRADIENT_EXTRA_HEIGHT;
const GUILD_LIST_WIDTH = fn(16522).GUILD_LIST_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let closure_10 = createStyles.createStyles({ container: { position: "absolute", bottom: 0, left: 0, right: 0 } });
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useYouBarGradientBackground() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ClientThemesBackgroundStore];
        const fn = function n() {
          return gradientPreset.gradientPreset;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      const tmpResult = initialize;
      let token = null;
      if (null != stateFromStores) {
        token = tmpResult2.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND_SCRIM);
      }
      return token;
    }
  : function useYouBarGradientBackground() {
      const items = [ClientThemesBackgroundStore];
      const stateFromStores = initialize.useStateFromStores(items, () => gradientPreset.gradientPreset);
      let token = null;
      if (null != stateFromStores) {
        token = obj2.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND_SCRIM);
      }
      return token;
    };
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarFloatingShade.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function YouBarFloatingShade() {
        const cResult = c.c(36);
        const tmp4 = closure_10();
        const youBarTotalHeight = useYouBarTotalHeight.useYouBarTotalHeight();
        const sum = youBarTotalHeight + closure_5;
        let width = useWindowDimensionsDefault().width;
        if (useChatLayoutDefault().isChatBesideChannelList) {
          width = tmp8 + GUILD_LIST_WIDTH;
        }
        const gradientValue = client_themes_ClientThemesUtils.useGradientValue(
          client_themes_ClientThemesUtils.GradientPercentage.END,
        );
        const tmpResult = client_themes_ClientThemesUtils;
        const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
        let tmp12 = closure_11();
        if (null == tmp12) {
          tmp12 = token;
          if (null != gradientValue) {
            tmp12 = gradientValue;
          }
        }
        if (cResult[0] !== tmp12) {
          let str = utils_ColorUtils.hex2rgb(tmp12, 1);
          if (str == null) {
            str = "transparent";
          }
          cResult[0] = tmp12;
          cResult[1] = str;
          let tmp13 = str;
          const tmpResult5 = utils_ColorUtils;
        } else {
          tmp13 = cResult[1];
        }
        if (cResult[2] !== tmp12) {
          let str2 = utils_ColorUtils.hex2rgb(tmp12, 0);
          if (str2 == null) {
            str2 = "transparent";
          }
          cResult[2] = tmp12;
          cResult[3] = str2;
          let tmp14 = str2;
          const tmpResult6 = utils_ColorUtils;
        } else {
          tmp14 = cResult[3];
        }
        if (cResult[4] !== youBarTotalHeight) {
          const obj3 = { height: youBarTotalHeight, opacity: 0 };
          cResult[4] = youBarTotalHeight;
          cResult[5] = obj3;
          let tmp15 = obj3;
        } else {
          tmp15 = cResult[5];
        }
        if (cResult[6] === tmp4.container) {
          if (cResult[7] === tmp15) {
            let tmp16 = cResult[8];
          }
          const result = sum / 2;
          const result1 = sum / 2;
          if (cResult[9] === width) {
            if (cResult[10] === result) {
              if (cResult[11] === result1) {
                let tmp20 = cResult[12];
              }
              if (cResult[13] === tmp4.container) {
                if (cResult[14] === tmp20) {
                  let tmp21 = cResult[15];
                }
                if (cResult[16] === tmp13) {
                  if (cResult[17] === tmp14) {
                    let tmp22 = cResult[18];
                  }
                  const _Symbol = Symbol;
                  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                    const point = { x: 0, y: 0 };
                    const point1 = { x: 0, y: 1 };
                    const items = [0, 1];
                    cResult[19] = point1;
                    cResult[20] = items;
                    cResult[21] = point;
                    let tmp26 = point;
                    let tmp25 = items;
                    let tmp24 = point1;
                  } else {
                    tmp24 = cResult[19];
                    tmp25 = cResult[20];
                    tmp26 = cResult[21];
                  }
                  if (cResult[22] === tmp21) {
                    if (cResult[23] === tmp22) {
                      let tmp27 = cResult[24];
                    }
                    const result2 = sum / 2;
                    if (cResult[25] === width) {
                      if (cResult[26] === tmp13) {
                        if (cResult[27] === result2) {
                          let tmp31 = cResult[28];
                        }
                        if (cResult[29] === tmp4.container) {
                          if (cResult[30] === tmp31) {
                            let tmp32 = cResult[31];
                          }
                          if (cResult[32] === tmp27) {
                            if (cResult[33] === tmp32) {
                              if (cResult[34] === tmp16) {
                                let tmp36 = cResult[35];
                              }
                              return tmp36;
                            }
                          }
                          const obj4 = { children: null };
                          const items1 = [tmp16, tmp27, tmp32];
                          obj4.children = items1;
                          const tmp39 = options(closure_1_8, obj4);
                          cResult[32] = tmp27;
                          cResult[33] = tmp32;
                          cResult[34] = tmp16;
                          cResult[35] = tmp39;
                          tmp36 = tmp39;
                        }
                        const obj5 = { style: null };
                        const items2 = [tmp4.container, tmp31];
                        obj5.style = items2;
                        const tmp35 = React5(View, obj5);
                        cResult[29] = tmp4.container;
                        cResult[30] = tmp31;
                        cResult[31] = tmp35;
                        tmp32 = tmp35;
                      }
                    }
                    const size = { width, height: result2, backgroundColor: tmp13 };
                    cResult[25] = width;
                    cResult[26] = tmp13;
                    cResult[27] = result2;
                    cResult[28] = size;
                    tmp31 = size;
                  }
                  const obj6 = {
                    style: tmp21,
                    colors: tmp22,
                    start: tmp26,
                    end: tmp24,
                    locations: tmp25,
                    pointerEvents: "none",
                  };
                  const tmp29 = React5(LinearGradientDefault, obj6);
                  cResult[22] = tmp21;
                  cResult[23] = tmp22;
                  cResult[24] = tmp29;
                  tmp27 = tmp29;
                }
                const items3 = [tmp14, tmp13];
                cResult[16] = tmp13;
                cResult[17] = tmp14;
                cResult[18] = items3;
                tmp22 = items3;
              }
              const items4 = [tmp4.container, tmp20];
              cResult[13] = tmp4.container;
              cResult[14] = tmp20;
              cResult[15] = items4;
              tmp21 = items4;
            }
          }
          const size1 = { bottom: result, height: result1, width };
          cResult[9] = width;
          cResult[10] = result;
          cResult[11] = result1;
          cResult[12] = size1;
          tmp20 = size1;
        }
        const obj7 = { style: null, pointerEvents: "box-only" };
        const items5 = [tmp4.container, tmp15];
        obj7.style = items5;
        const tmp17 = React5(View, obj7);
        cResult[6] = tmp4.container;
        cResult[7] = tmp15;
        cResult[8] = tmp17;
        tmp16 = tmp17;
        const tmpResult4 = useToken;
      }
    : function YouBarFloatingShade() {
        const tmp = closure_10();
        const youBarTotalHeight = useYouBarTotalHeight.useYouBarTotalHeight();
        const sum = youBarTotalHeight + closure_5;
        let width = useWindowDimensionsDefault().width;
        if (useChatLayoutDefault().isChatBesideChannelList) {
          width = tmp7 + GUILD_LIST_WIDTH;
        }
        const gradientValue = client_themes_ClientThemesUtils.useGradientValue(
          client_themes_ClientThemesUtils.GradientPercentage.END,
        );
        const tmp2Result = client_themes_ClientThemesUtils;
        const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
        let tmp11 = closure_11();
        if (null == tmp11) {
          tmp11 = token;
          if (null != gradientValue) {
            tmp11 = gradientValue;
          }
        }
        const tmp2Result4 = useToken;
        let str = utils_ColorUtils.hex2rgb(tmp11, 1);
        if (str == null) {
          str = "transparent";
        }
        const tmp2Result5 = utils_ColorUtils;
        let str2 = utils_ColorUtils.hex2rgb(tmp11, 0);
        if (str2 == null) {
          str2 = "transparent";
        }
        const obj2 = { children: null };
        const obj3 = { style: null, pointerEvents: "box-only" };
        const items = [tmp.container, { height: youBarTotalHeight, opacity: 0 }];
        obj3.style = items;
        const items1 = [React5(View, obj3), ,];
        const obj4 = {
          style: null,
          colors: null,
          start: { x: 0, y: 0 },
          end: { x: 0, y: 1 },
          locations: [0, 1],
          pointerEvents: "none",
        };
        const items2 = [tmp.container];
        const size = { bottom: sum / 2, height: sum / 2, width };
        items2[1] = size;
        obj4.style = items2;
        const items3 = [str2, str];
        obj4.colors = items3;
        items1[1] = React5(LinearGradientDefault, obj4);
        const obj5 = { style: null };
        const items4 = [tmp.container, { width, height: sum / 2, backgroundColor: str }];
        obj5.style = items4;
        items1[2] = React5(View, obj5);
        obj2.children = items1;
        return options(closure_1_8, obj2);
      },
);
