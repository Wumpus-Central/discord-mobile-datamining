// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/typing_indicators/TypingIndicator.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../../design/void/native.tsx";
import shared from "../../../../../../design/shared.tsx";
import useThemeDefault from "../../../../../../hooks/useTheme.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_5 = createStyles.createStyles((arg0) => {
  const obj = {
    ellipsisWrapper: {
      zIndex: 10,
      borderRadius: 17,
      borderWidth: 2,
      borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    },
    ellipsis: null,
    ellipsisDot: null,
  };
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  obj.ellipsis = {
    borderRadius: 13,
    paddingVertical: 4,
    paddingStart: 4,
    paddingEnd: 2,
    marginRight: 0,
    backgroundColor: arg0 ? unsafe_rawColors.BRAND_200 : unsafe_rawColors.BRAND_500,
  };
  const unsafe_rawColors2 = nativeDefault.unsafe_rawColors;
  obj.ellipsisDot = {
    width: 4,
    height: 4,
    backgroundColor: arg0 ? unsafe_rawColors2.BRAND_500 : unsafe_rawColors2.WHITE,
  };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/typing_indicators/TypingIndicator.tsx",
);

export const TypingIndicator = ReactCompilerGating.isReactCompilerEnabled()
  ? (style) => {
      const cResult = c.c(13);
      style = style.style;
      const tmp4 = useThemeDefault();
      if (cResult[0] !== tmp4) {
        const isThemeLightResult = shared.isThemeLight(tmp4);
        cResult[0] = tmp4;
        cResult[1] = isThemeLightResult;
        let tmp5 = isThemeLightResult;
        const tmpResult = shared;
      } else {
        tmp5 = cResult[1];
      }
      const tmp7 = closure_5(tmp5);
      if (cResult[2] === style) {
        if (cResult[3] === tmp7.ellipsisWrapper) {
          let tmp8 = cResult[4];
        }
        if (cResult[5] !== tmp7.ellipsis) {
          const items = [tmp7.ellipsis];
          cResult[5] = tmp7.ellipsis;
          cResult[6] = items;
          let tmp9 = items;
        } else {
          tmp9 = cResult[6];
        }
        if (cResult[7] === tmp7.ellipsisDot) {
          if (cResult[8] === tmp9) {
            let tmp10 = cResult[9];
          }
          if (cResult[10] === tmp8) {
            if (cResult[11] === tmp10) {
              let tmp13 = cResult[12];
            }
            return tmp13;
          }
          const obj2 = { style: tmp8, children: tmp10 };
          const tmp16 = <View style={tmp8}>{tmp10}</View>;
          cResult[10] = tmp8;
          cResult[11] = tmp10;
          cResult[12] = tmp16;
          tmp13 = tmp16;
        }
        const obj3 = { style: tmp9, dotStyle: tmp7.ellipsisDot, disableScale: true };
        const tmp12 = jsx(native.Ellipsis, { style: tmp9, dotStyle: tmp7.ellipsisDot, disableScale: true });
        cResult[7] = tmp7.ellipsisDot;
        cResult[8] = tmp9;
        cResult[9] = tmp12;
        tmp10 = tmp12;
      }
      const items1 = [tmp7.ellipsisWrapper, style];
      cResult[2] = style;
      cResult[3] = tmp7.ellipsisWrapper;
      cResult[4] = items1;
      tmp8 = items1;
    }
  : (style) => {
      const tmp = useThemeDefault();
      const tmp2 = closure_5(shared.isThemeLight(tmp));
      const obj2 = { style: null, children: null };
      const items = [tmp2.ellipsisWrapper, style.style];
      obj2.style = items;
      const obj3 = { style: null, dotStyle: tmp2.ellipsisDot, disableScale: true };
      const items1 = [tmp2.ellipsis];
      obj3.style = items1;
      obj2.children = jsx(native.Ellipsis, { style: null, dotStyle: tmp2.ellipsisDot, disableScale: true });
      return <View style={null}>{null}</View>;
    };
