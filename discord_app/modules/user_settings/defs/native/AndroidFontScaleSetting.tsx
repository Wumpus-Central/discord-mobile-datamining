// discord_app/modules/user_settings/defs/native/AndroidFontScaleSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import CirclePlusIcon from "../../../../design/components/Icon/native/redesign/generated/CirclePlusIcon.tsx";
import CircleMinusIcon from "../../../../design/components/Icon/native/redesign/generated/CircleMinusIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const useFontScaleStore = fn(15079).useFontScaleStore;
const FontScales = fn(1095).FontScales;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11129);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(13);
      const tmp4 = useFontScaleStore();
      if (cResult[0] !== tmp4.persistedFontScale) {
        let index;
        if (null != tmp4.persistedFontScale) {
          index = FontScales.indexOf(tmp4.persistedFontScale);
        }
        cResult[0] = tmp4.persistedFontScale;
        cResult[1] = index;
        let tmp5 = index;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function u(arg0) {
          closure_0 = arg0;
          closure_0(closure_1[7]).batchUpdates(() => state.setState({ fontScale: FontScales[closure_0] }));
        };
        cResult[2] = fn;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[2];
      }
      const fontScale = tmp4.fontScale;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp14 = jsx(CircleMinusIcon.CircleMinusIcon, {});
        const tmp15 = jsx(CirclePlusIcon.CirclePlusIcon, {});
        const intl = util.intl;
        const stringResult = intl.string(util.t.i19n5L);
        cResult[3] = tmp14;
        cResult[4] = tmp15;
        cResult[5] = stringResult;
        let tmp12 = stringResult;
        let tmp11 = tmp15;
        let tmp10 = tmp14;
      } else {
        tmp10 = cResult[3];
        tmp11 = cResult[4];
        tmp12 = cResult[5];
      }
      const text = `${fontScale * 100}%`;
      if (cResult[6] !== `${fontScale * 100}%`) {
        const obj2 = { text };
        cResult[6] = text;
        cResult[7] = obj2;
        let tmp18 = obj2;
      } else {
        tmp18 = cResult[7];
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const index1 = FontScales.indexOf(1);
        cResult[8] = index1;
        let tmp19 = index1;
      } else {
        tmp19 = cResult[8];
      }
      if (cResult[9] === tmp5) {
        if (cResult[10] === tmp18) {
          if (cResult[11] === text) {
            let tmp22 = cResult[12];
          }
          return tmp22;
        }
      }
      const obj3 = {
        value: tmp5,
        minimumValue: 0,
        maximumValue: FontScales.length - 1,
        step: 1,
        onValueChange: tmp9,
        startIcon: tmp10,
        endIcon: tmp11,
        accessibilityLabel: tmp12,
        accessibilityValue: tmp18,
        valueLabel: text,
        defaultValue: tmp19,
      };
      cResult[9] = tmp5;
      cResult[10] = tmp18;
      cResult[11] = text;
      cResult[12] = obj3;
      tmp22 = obj3;
    }
  : () => {
      const tmp = useFontScaleStore();
      closure_0 = tmp;
      let index;
      if (null != tmp.persistedFontScale) {
        index = FontScales.indexOf(tmp.persistedFontScale);
      }
      onValueChange = onValueChange.useCallback((arg0) => {
        closure_0 = arg0;
        closure_0(index[7]).batchUpdates(() => state.setState({ fontScale: FontScales[closure_0] }));
      }, []);
      const items = [index, onValueChange, tmp.fontScale];
      return onValueChange.useMemo(() => {
        const text = `${closure_0.fontScale * 100}%`;
        const obj = {
          value: index,
          minimumValue: 0,
          maximumValue: FontScales.length - 1,
          step: 1,
          onValueChange,
          startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}),
          endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}),
          accessibilityLabel: null,
          accessibilityValue: null,
          valueLabel: null,
          defaultValue: null,
        };
        const intl = util.intl;
        obj.accessibilityLabel = intl.string(util.t.i19n5L);
        obj.accessibilityValue = { text };
        obj.valueLabel = text;
        obj.defaultValue = FontScales.indexOf(1);
        return obj;
      }, items);
    };
const slider = SettingBuilders.createSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.i19n5L);
  },
  parent: fn(7634).MobileUserSettings.APPEARANCE,
  useProps: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(13);
        const tmp4 = useFontScaleStore();
        if (cResult[0] !== tmp4.persistedFontScale) {
          let index;
          if (null != tmp4.persistedFontScale) {
            index = FontScales.indexOf(tmp4.persistedFontScale);
          }
          cResult[0] = tmp4.persistedFontScale;
          cResult[1] = index;
          let tmp5 = index;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function u(arg0) {
            closure_0 = arg0;
            closure_0(closure_1[7]).batchUpdates(() => state.setState({ fontScale: FontScales[closure_0] }));
          };
          cResult[2] = fn;
          let tmp9 = fn;
        } else {
          tmp9 = cResult[2];
        }
        const fontScale = tmp4.fontScale;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp14 = jsx(CircleMinusIcon.CircleMinusIcon, {});
          const tmp15 = jsx(CirclePlusIcon.CirclePlusIcon, {});
          const intl = util.intl;
          const stringResult = intl.string(util.t.i19n5L);
          cResult[3] = tmp14;
          cResult[4] = tmp15;
          cResult[5] = stringResult;
          let tmp12 = stringResult;
          let tmp11 = tmp15;
          let tmp10 = tmp14;
        } else {
          tmp10 = cResult[3];
          tmp11 = cResult[4];
          tmp12 = cResult[5];
        }
        const text = `${fontScale * 100}%`;
        if (cResult[6] !== `${fontScale * 100}%`) {
          const obj2 = { text };
          cResult[6] = text;
          cResult[7] = obj2;
          let tmp18 = obj2;
        } else {
          tmp18 = cResult[7];
        }
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const index1 = FontScales.indexOf(1);
          cResult[8] = index1;
          let tmp19 = index1;
        } else {
          tmp19 = cResult[8];
        }
        if (cResult[9] === tmp5) {
          if (cResult[10] === tmp18) {
            if (cResult[11] === text) {
              let tmp22 = cResult[12];
            }
            return tmp22;
          }
        }
        const obj3 = {
          value: tmp5,
          minimumValue: 0,
          maximumValue: FontScales.length - 1,
          step: 1,
          onValueChange: tmp9,
          startIcon: tmp10,
          endIcon: tmp11,
          accessibilityLabel: tmp12,
          accessibilityValue: tmp18,
          valueLabel: text,
          defaultValue: tmp19,
        };
        cResult[9] = tmp5;
        cResult[10] = tmp18;
        cResult[11] = text;
        cResult[12] = obj3;
        tmp22 = obj3;
      }
    : () => {
        const tmp = useFontScaleStore();
        closure_0 = tmp;
        let index;
        if (null != tmp.persistedFontScale) {
          index = FontScales.indexOf(tmp.persistedFontScale);
        }
        onValueChange = onValueChange.useCallback((arg0) => {
          closure_0 = arg0;
          closure_0(index[7]).batchUpdates(() => state.setState({ fontScale: FontScales[closure_0] }));
        }, []);
        const items = [index, onValueChange, tmp.fontScale];
        return onValueChange.useMemo(() => {
          const text = `${closure_0.fontScale * 100}%`;
          const obj = {
            value: index,
            minimumValue: 0,
            maximumValue: FontScales.length - 1,
            step: 1,
            onValueChange,
            startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}),
            endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}),
            accessibilityLabel: null,
            accessibilityValue: null,
            valueLabel: null,
            defaultValue: null,
          };
          const intl = util.intl;
          obj.accessibilityLabel = intl.string(util.t.i19n5L);
          obj.accessibilityValue = { text };
          obj.valueLabel = text;
          obj.defaultValue = FontScales.indexOf(1);
          return obj;
        }, items);
      },
  usePredicate: fn(1369).isAndroid,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidFontScaleSetting.tsx");

export default slider;
