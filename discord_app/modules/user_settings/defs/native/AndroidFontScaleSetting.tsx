// discord_app/modules/user_settings/defs/native/AndroidFontScaleSetting.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import UserSettingsConstants from "../../UserSettingsConstants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import CirclePlusIcon from "../../../../design/components/Icon/native/redesign/generated/CirclePlusIcon.tsx";
import FontScaleStore from "../../appearance/native/FontScaleStore.tsx";
import CircleMinusIcon from "../../../../design/components/Icon/native/redesign/generated/CircleMinusIcon.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const useFontScaleStore = FontScaleStore.useFontScaleStore;
const FontScales = UserSettingsConstants.FontScales;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let state;
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp18;
      let tmp19;
      let tmp5;
      let tmp9;
      let obj = react2;
      const cResult = obj.c(13);
      const tmp4 = useFontScaleStore();
      if (cResult[0] !== tmp4.persistedFontScale) {
        let index;
        if (null != tmp4.persistedFontScale) {
          index = FontScales.indexOf(tmp4.persistedFontScale);
        }
        cResult[0] = tmp4.persistedFontScale;
        cResult[1] = index;
        tmp5 = index;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function u(arg0) {
          let closure_0 = arg0;
          let obj = closure_0(closure_1[7]);
          obj.batchUpdates(() => {
            const obj = { fontScale: FontScales[closure_0] };
            return state.setState(obj);
          });
        };
        cResult[2] = fn;
        tmp9 = fn;
      } else {
        tmp9 = cResult[2];
      }
      const fontScale = tmp4.fontScale;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp14 = jsx(CircleMinusIcon.CircleMinusIcon, {});
        const tmp15 = jsx(CirclePlusIcon.CirclePlusIcon, {});
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t.i19n5L);
        cResult[3] = tmp14;
        cResult[4] = tmp15;
        cResult[5] = stringResult;
        tmp12 = stringResult;
        tmp11 = tmp15;
        tmp10 = tmp14;
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
        tmp18 = obj2;
      } else {
        tmp18 = cResult[7];
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const index1 = FontScales.indexOf(1);
        cResult[8] = index1;
        tmp19 = index1;
      } else {
        tmp19 = cResult[8];
      }
      if (cResult[9] === tmp5) {
        if (cResult[10] === tmp18) {
          let tmp22;
          if (cResult[11] === text) {
            tmp22 = cResult[12];
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
      let onValueChange;
      let state;
      const tmp = useFontScaleStore();
      let closure_0 = tmp;
      let index;
      if (null != tmp.persistedFontScale) {
        index = FontScales.indexOf(tmp.persistedFontScale);
      }
      onValueChange = onValueChange.useCallback((arg0) => {
        closure_0 = arg0;
        let obj = closure_0(index[7]);
        obj.batchUpdates(() => {
          const obj = { fontScale: FontScales[closure_0] };
          return state.setState(obj);
        });
      }, []);
      const items = [index, onValueChange, tmp.fontScale];
      return onValueChange.useMemo(() => {
        let intl;
        const text = `${closure_0.fontScale * 100}%`;
        const obj = {
          value: index,
          minimumValue: 0,
          maximumValue: FontScales.length - 1,
          step: 1,
          onValueChange,
          startIcon: jsx(CircleMinusIcon.CircleMinusIcon, {}),
          endIcon: jsx(CirclePlusIcon.CirclePlusIcon, {}),
          accessibilityLabel: intl.string(intl2.t.i19n5L),
          accessibilityValue: { text },
          valueLabel: text,
          defaultValue: FontScales.indexOf(1),
        };
        intl = intl2.intl;
        return obj;
      }, items);
    };
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.i19n5L);
  },
  parent: MobileUserSettings.APPEARANCE,
  useProps: tmp2,
  usePredicate: PlatformUtils.isAndroid,
};
const slider = SettingBuilders.createSlider(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidFontScaleSetting.tsx");

export default slider;
