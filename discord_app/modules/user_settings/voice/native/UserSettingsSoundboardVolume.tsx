// discord_app/modules/user_settings/voice/native/UserSettingsSoundboardVolume.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Constants from "../../../../Constants.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import useAnalyticsLocationsDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import SoundboardActionCreators from "../../../soundboard/SoundboardActionCreators.tsx";
import VolumeSliderDefault from "../../../../components_native/common/VolumeSlider.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ slider: { marginTop: 4 }, text: { marginTop: 4 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let TableRow;
      let analyticsLocations;
      let first;
      let items;
      let obj6;
      let obj7;
      let tmp10;
      let tmp12;
      let tmp13;
      let tmp15;
      let tmp7Result;
      let tmp8;
      let obj = analyticsLocations(576);
      const cResult = obj.c(17);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = analyticsLocations(6857);
        const amplitudinalSoundboardVolume = tmpResult.getAmplitudinalSoundboardVolume();
        cResult[0] = amplitudinalSoundboardVolume;
        first = amplitudinalSoundboardVolume;
      } else {
        first = cResult[0];
      }
      analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(analyticsLocations(1126).t.xbMc8r);
        cResult[1] = stringResult;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(analyticsLocations(1126).t.kbFsAD);
        cResult[2] = stringResult1;
        tmp10 = stringResult1;
      } else {
        tmp10 = cResult[2];
      }
      const slider = tmp4.slider;
      if (cResult[3] !== analyticsLocations) {
        const fn = function p(volume) {
          const obj = SoundboardActionCreators;
          return obj.updateUserSoundboardVolume(volume, analyticsLocations);
        };
        cResult[3] = analyticsLocations;
        cResult[4] = fn;
        tmp12 = fn;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult2 = intl3.string(analyticsLocations(1126).t.kbFsAD);
        cResult[5] = stringResult2;
        tmp13 = stringResult2;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] !== tmp12) {
        const obj2 = { value: first, maxVolume: 100, onValueChange: tmp12, accessibilityLabel: tmp13 };
        const tmp17 = closure_5(VolumeSliderDefault, obj2);
        cResult[6] = tmp12;
        cResult[7] = tmp17;
        tmp15 = tmp17;
      } else {
        tmp15 = cResult[7];
      }
      if (cResult[8] === tmp4.slider) {
        let tmp18;
        let tmp20;
        let tmp23;
        if (cResult[9] === tmp15) {
          tmp18 = cResult[10];
        }
        const _Symbol = Symbol;
        const text = tmp4.text;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1126).intl;
          const format = intl4.format;
          const obj3 = { helpCenterArticle: tmp7Result.getArticleURL(HelpdeskArticles.SOUNDBOARD) };
          const BPbGq7 = tmp(1126).t.BPbGq7;
          tmp7Result = HelpdeskUtilsDefault;
          const formatResult = format(BPbGq7, obj3);
          cResult[11] = formatResult;
          tmp20 = formatResult;
        } else {
          tmp20 = cResult[11];
        }
        if (cResult[12] !== tmp4.text) {
          const obj4 = { style: text, variant: "text-sm/medium", children: tmp20 };
          const tmp25 = closure_5(analyticsLocations(4892).Text, obj4);
          cResult[12] = tmp4.text;
          cResult[13] = tmp25;
          tmp23 = tmp25;
        } else {
          tmp23 = cResult[13];
        }
        if (cResult[14] === tmp23) {
          let tmp26;
          if (cResult[15] === tmp18) {
            tmp26 = cResult[16];
          }
          return tmp26;
        }
        const obj5 = { title: tmp8, hasIcons: false, children: closure_5(TableRow, obj6) };
        const UserSettingsTableRowGroup = tmp(9670).UserSettingsTableRowGroup;
        obj6 = { label: tmp10, subLabel: closure_7(closure_6, obj7) };
        obj7 = { children: items };
        items = [tmp18, tmp23];
        TableRow = tmp(6000).TableRow;
        const tmp30 = closure_5(UserSettingsTableRowGroup, obj5);
        cResult[14] = tmp23;
        cResult[15] = tmp18;
        cResult[16] = tmp30;
        tmp26 = tmp30;
      }
      const tmp19 = closure_5(View, { style: slider, children: tmp15 });
      cResult[8] = tmp4.slider;
      cResult[9] = tmp15;
      cResult[10] = tmp19;
      tmp18 = tmp19;
    }
  : () => {
      let BPbGq7;
      let TableRow;
      let analyticsLocations;
      let format;
      let intl;
      let intl2;
      let intl3;
      let items;
      let obj3;
      let obj4;
      let obj6;
      let obj8;
      let obj9;
      let tmp3;
      const tmp = closure_8();
      let obj = analyticsLocations(6857);
      const amplitudinalSoundboardVolume = obj.getAmplitudinalSoundboardVolume();
      analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
      const obj2 = {
        title: intl.string(analyticsLocations(1126).t.xbMc8r),
        hasIcons: false,
        children: closure_5(TableRow, obj3),
      };
      const UserSettingsTableRowGroup = analyticsLocations(9670).UserSettingsTableRowGroup;
      intl = analyticsLocations(1126).intl;
      obj3 = { label: intl2.string(analyticsLocations(1126).t.kbFsAD), subLabel: closure_7(closure_6, obj4) };
      TableRow = analyticsLocations(6000).TableRow;
      intl2 = analyticsLocations(1126).intl;
      obj4 = { children: items };
      const obj5 = { style: tmp.slider, children: closure_5(tmp3, obj6) };
      obj6 = {
        value: amplitudinalSoundboardVolume,
        maxVolume: 100,
        onValueChange(volume) {
          const obj = SoundboardActionCreators;
          return obj.updateUserSoundboardVolume(volume, analyticsLocations);
        },
        accessibilityLabel: intl3.string(analyticsLocations(1126).t.kbFsAD),
      };
      tmp3 = VolumeSliderDefault;
      intl3 = analyticsLocations(1126).intl;
      items = [closure_5(View, obj5)];
      const obj7 = { style: tmp.text, variant: "text-sm/medium", children: format(BPbGq7, obj8) };
      const Text = analyticsLocations(4892).Text;
      const intl4 = analyticsLocations(1126).intl;
      format = intl4.format;
      obj8 = { helpCenterArticle: obj9.getArticleURL(HelpdeskArticles.SOUNDBOARD) };
      BPbGq7 = analyticsLocations(1126).t.BPbGq7;
      obj9 = HelpdeskUtilsDefault;
      items[1] = closure_5(Text, obj7);
      return closure_5(UserSettingsTableRowGroup, obj2);
    };
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsSoundboardVolume.tsx");

export default tmp4;
