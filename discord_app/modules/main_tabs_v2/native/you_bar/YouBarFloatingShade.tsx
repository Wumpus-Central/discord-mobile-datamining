// discord_app/modules/main_tabs_v2/native/you_bar/YouBarFloatingShade.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import useToken2 from "../../../../design/tokens/native/useToken.tsx";
import client_themes_ClientThemesUtils from "../../../client_themes/native/ClientThemesUtils.tsx";
import useChatLayoutDefault from "../../../chat/native/useChatLayout.tsx";
import LinearGradientDefault from "../../../../../_runtime/05605_LinearGradient.js";
import YouBarConstants from "YouBarConstants.tsx";
import useYouBarTotalHeight from "hooks/useYouBarTotalHeight.tsx";
import GuildsBarConstants from "../../../guilds_bar/native/GuildsBarConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ClientThemesBackgroundStore from "../../../client_themes/ClientThemesBackgroundStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let c9;
let metroImportAll;
let metroImportDefault;
const View = react_native.View;
let closure_5 = YouBarConstants.YOU_BAR_GRADIENT_EXTRA_HEIGHT;
const GUILD_LIST_WIDTH = GuildsBarConstants.GUILD_LIST_WIDTH;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ container: { position: "absolute", bottom: 0, left: 0, right: 0 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let gradientPreset;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(2);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      const useToken = useToken2.useToken;
      let token = null;
      useToken2;
      if (null != stateFromStores) {
        token = useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND_SCRIM);
      }
      return token;
    }
  : () => {
      let gradientPreset;
      const items = [ClientThemesBackgroundStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => gradientPreset.gradientPreset);
      const useToken = useToken2.useToken;
      let token = null;
      useToken2;
      if (null != stateFromStores) {
        token = useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND_SCRIM);
      }
      return token;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let items1;
        let items2;
        let items5;
        let tmp13;
        let tmp14;
        let tmp15;
        const obj = react2;
        const cResult = obj.c(36);
        const tmp4 = closure_10();
        const obj2 = useYouBarTotalHeight;
        const youBarTotalHeight = obj2.useYouBarTotalHeight();
        const sum = youBarTotalHeight + closure_5;
        let width = useWindowDimensionsDefault().width;
        if (useChatLayoutDefault().isChatBesideChannelList) {
          width = tmp8 + GUILD_LIST_WIDTH;
        }
        const tmpResult = client_themes_ClientThemesUtils;
        const gradientValue = tmpResult.useGradientValue(client_themes_ClientThemesUtils.GradientPercentage.END);
        const tmpResult4 = useToken2;
        const token = tmpResult4.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
        let tmp12 = closure_11();
        if (null == tmp12) {
          tmp12 = token;
          if (null != gradientValue) {
            tmp12 = gradientValue;
          }
        }
        if (cResult[0] !== tmp12) {
          const tmpResult5 = utils_ColorUtils;
          let str = tmpResult5.hex2rgb(tmp12, 1);
          if (str == null) {
            str = "transparent";
          }
          cResult[0] = tmp12;
          cResult[1] = str;
          tmp13 = str;
        } else {
          tmp13 = cResult[1];
        }
        if (cResult[2] !== tmp12) {
          const tmpResult6 = utils_ColorUtils;
          let str2 = tmpResult6.hex2rgb(tmp12, 0);
          if (str2 == null) {
            str2 = "transparent";
          }
          cResult[2] = tmp12;
          cResult[3] = str2;
          tmp14 = str2;
        } else {
          tmp14 = cResult[3];
        }
        if (cResult[4] !== youBarTotalHeight) {
          const obj3 = { height: youBarTotalHeight, opacity: 0 };
          cResult[4] = youBarTotalHeight;
          cResult[5] = obj3;
          tmp15 = obj3;
        } else {
          tmp15 = cResult[5];
        }
        if (cResult[6] === tmp4.container) {
          let tmp16;
          if (cResult[7] === tmp15) {
            tmp16 = cResult[8];
          }
          const result = sum / 2;
          const result1 = sum / 2;
          if (cResult[9] === width) {
            if (cResult[10] === result) {
              let tmp20;
              if (cResult[11] === result1) {
                tmp20 = cResult[12];
              }
              if (cResult[13] === tmp4.container) {
                let tmp21;
                if (cResult[14] === tmp20) {
                  tmp21 = cResult[15];
                }
                if (cResult[16] === tmp13) {
                  let tmp22;
                  let tmp26;
                  let tmp25;
                  let tmp24;
                  if (cResult[17] === tmp14) {
                    tmp22 = cResult[18];
                  }
                  const _Symbol = Symbol;
                  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                    const point = { x: 0, y: 0 };
                    const point1 = { x: 0, y: 1 };
                    const items = [0, 1];
                    cResult[19] = point1;
                    cResult[20] = items;
                    cResult[21] = point;
                    tmp26 = point;
                    tmp25 = items;
                    tmp24 = point1;
                  } else {
                    tmp24 = cResult[19];
                    tmp25 = cResult[20];
                    tmp26 = cResult[21];
                  }
                  if (cResult[22] === tmp21) {
                    let tmp27;
                    if (cResult[23] === tmp22) {
                      tmp27 = cResult[24];
                    }
                    const result2 = sum / 2;
                    if (cResult[25] === width) {
                      if (cResult[26] === tmp13) {
                        let tmp31;
                        if (cResult[27] === result2) {
                          tmp31 = cResult[28];
                        }
                        if (cResult[29] === tmp4.container) {
                          let tmp32;
                          if (cResult[30] === tmp31) {
                            tmp32 = cResult[31];
                          }
                          if (cResult[32] === tmp27) {
                            if (cResult[33] === tmp32) {
                              let tmp36;
                              if (cResult[34] === tmp16) {
                                tmp36 = cResult[35];
                              }
                              return tmp36;
                            }
                          }
                          const obj4 = { children: items1 };
                          items1 = [tmp16, tmp27, tmp32];
                          const tmp39 = React4(metroImportAll, obj4);
                          cResult[32] = tmp27;
                          cResult[33] = tmp32;
                          cResult[34] = tmp16;
                          cResult[35] = tmp39;
                          tmp36 = tmp39;
                        }
                        const obj5 = { style: items2 };
                        items2 = [tmp4.container, tmp31];
                        const tmp35 = metroImportDefault(View, obj5);
                        cResult[29] = tmp4.container;
                        cResult[30] = tmp31;
                        cResult[31] = tmp35;
                        tmp32 = tmp35;
                      }
                    }
                    size = { width, height: result2, backgroundColor: tmp13 };
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
                  const tmp29 = metroImportDefault(LinearGradientDefault, obj6);
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
        const obj7 = { style: items5, pointerEvents: "box-only" };
        items5 = [tmp4.container, tmp15];
        const tmp17 = metroImportDefault(View, obj7);
        cResult[6] = tmp4.container;
        cResult[7] = tmp15;
        cResult[8] = tmp17;
        tmp16 = tmp17;
      }
    : () => {
        let items;
        let items1;
        let items2;
        let items3;
        let items4;
        const tmp = closure_10();
        const obj = useYouBarTotalHeight;
        const youBarTotalHeight = obj.useYouBarTotalHeight();
        const sum = youBarTotalHeight + closure_5;
        let width = useWindowDimensionsDefault().width;
        if (useChatLayoutDefault().isChatBesideChannelList) {
          width = tmp7 + GUILD_LIST_WIDTH;
        }
        const tmp2Result = client_themes_ClientThemesUtils;
        const gradientValue = tmp2Result.useGradientValue(client_themes_ClientThemesUtils.GradientPercentage.END);
        const tmp2Result4 = useToken2;
        const token = tmp2Result4.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
        let tmp11 = closure_11();
        if (null == tmp11) {
          tmp11 = token;
          if (null != gradientValue) {
            tmp11 = gradientValue;
          }
        }
        const tmp2Result5 = utils_ColorUtils;
        let str = tmp2Result5.hex2rgb(tmp11, 1);
        if (str == null) {
          str = "transparent";
        }
        const tmp2Result6 = utils_ColorUtils;
        let str2 = tmp2Result6.hex2rgb(tmp11, 0);
        if (str2 == null) {
          str2 = "transparent";
        }
        const obj3 = { style: items, pointerEvents: "box-only" };
        items = [tmp.container, { height: youBarTotalHeight, opacity: 0 }];
        const obj2 = { children: items1 };
        items1 = [metroImportDefault(View, obj3), ,];
        const obj4 = {
          style: items2,
          colors: items3,
          start: { x: 0, y: 0 },
          end: { x: 0, y: 1 },
          locations: [0, 1],
          pointerEvents: "none",
        };
        items2 = [tmp.container];
        size = { bottom: sum / 2, height: sum / 2, width };
        items2[1] = size;
        items3 = [str2, str];
        items1[1] = metroImportDefault(LinearGradientDefault, obj4);
        const obj5 = { style: items4 };
        items4 = [tmp.container, { width, height: sum / 2, backgroundColor: str }];
        items1[2] = metroImportDefault(View, obj5);
        return React4(metroImportAll, obj2);
      },
);
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarFloatingShade.tsx");

export default memoResult;
