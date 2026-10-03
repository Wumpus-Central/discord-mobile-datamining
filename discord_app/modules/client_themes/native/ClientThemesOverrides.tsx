// discord_app/modules/client_themes/native/ClientThemesOverrides.tsx
import c from "../../../../_runtime/00576_c.js";
import client_themes_ClientThemesUtils from "ClientThemesUtils.tsx";
import useIsUsingClientThemeDefault from "useIsUsingClientTheme.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const createStyles = fn(4890);
let closure_4 = createStyles.createStyles({ none: { backgroundColor: "transparent" } });
fn(558);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      const gradientValue = client_themes_ClientThemesUtils.useGradientValue(
        client_themes_ClientThemesUtils.GradientPercentage.END,
      );
      if (cResult[0] !== gradientValue) {
        let tmp5;
        if (null != gradientValue) {
          const obj3 = { backgroundColor: gradientValue };
          tmp5 = obj3;
        }
        cResult[0] = gradientValue;
        cResult[1] = tmp5;
        let tmp3 = tmp5;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : () => {
      const gradientValue = client_themes_ClientThemesUtils.useGradientValue(
        client_themes_ClientThemesUtils.GradientPercentage.END,
      );
      const items = [gradientValue];
      return noop.useMemo(() => {
        let tmp2;
        if (null != gradientValue) {
          const obj = { backgroundColor: tmp };
          tmp2 = obj;
        }
        return tmp2;
      }, items);
    };
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      const gradientValue = client_themes_ClientThemesUtils.useGradientValue(
        client_themes_ClientThemesUtils.GradientPercentage.START,
      );
      if (cResult[0] !== gradientValue) {
        let tmp5;
        if (null != gradientValue) {
          const obj3 = { backgroundColor: gradientValue };
          tmp5 = obj3;
        }
        cResult[0] = gradientValue;
        cResult[1] = tmp5;
        let tmp3 = tmp5;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : () => {
      const gradientValue = client_themes_ClientThemesUtils.useGradientValue(
        client_themes_ClientThemesUtils.GradientPercentage.START,
      );
      const items = [gradientValue];
      return noop.useMemo(() => {
        let tmp2;
        if (null != gradientValue) {
          const obj = { backgroundColor: tmp };
          tmp2 = obj;
        }
        return tmp2;
      }, items);
    };
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      const gradientValue = client_themes_ClientThemesUtils.useGradientValue(
        client_themes_ClientThemesUtils.GradientPercentage.MID,
      );
      if (cResult[0] !== gradientValue) {
        let tmp5;
        if (null != gradientValue) {
          const obj3 = { backgroundColor: gradientValue };
          tmp5 = obj3;
        }
        cResult[0] = gradientValue;
        cResult[1] = tmp5;
        let tmp3 = tmp5;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : () => {
      const gradientValue = client_themes_ClientThemesUtils.useGradientValue(
        client_themes_ClientThemesUtils.GradientPercentage.MID,
      );
      const items = [gradientValue];
      return noop.useMemo(() => {
        let tmp2;
        if (null != gradientValue) {
          const obj = { backgroundColor: tmp };
          tmp2 = obj;
        }
        return tmp2;
      }, items);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/client_themes/native/ClientThemesOverrides.tsx");

export const useGradientBottom = tmp2;
export const useGradientTop = tmp3;
export const useGradientMidpoint = tmp4;
export const useClientThemesOverride = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp2;
      if (useIsUsingClientThemeDefault()) {
        let none = arg0;
        if (arg0 == null) {
          none = tmp.none;
        }
        tmp2 = none;
      }
      return tmp2;
    }
  : (arg0) => {
      let tmp2;
      if (useIsUsingClientThemeDefault()) {
        let none = arg0;
        if (arg0 == null) {
          none = tmp.none;
        }
        tmp2 = none;
      }
      return tmp2;
    };
