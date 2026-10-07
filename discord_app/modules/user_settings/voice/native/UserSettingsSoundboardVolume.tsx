// === Module 9682: UserSettingsSoundboardVolume ===

// Module 9682 (UserSettingsSoundboardVolume)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6664 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 6851 */;
import VolumeSliderDefault from "VolumeSlider" /* 9679 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
let closure_8 = createStyles.createStyles({ slider: { marginTop: 4 }, text: { marginTop: 4 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsSoundboardVolume.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = analyticsLocations(576).c(17);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const amplitudinalSoundboardVolume = tmp(6857).getAmplitudinalSoundboardVolume();
    cResult[0] = amplitudinalSoundboardVolume;
    let first = amplitudinalSoundboardVolume;
    const tmpResult = tmp(6857);
  } else {
    first = cResult[0];
  }
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.xbMc8r);
    cResult[1] = stringResult;
    let tmp8 = stringResult;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.kbFsAD);
    cResult[2] = stringResult1;
    let tmp10 = stringResult1;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== analyticsLocations) {
    const fn = function p(volume) {
      return SoundboardActionCreators.updateUserSoundboardVolume(volume, analyticsLocations);
    };
    cResult[3] = analyticsLocations;
    cResult[4] = fn;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(tmp(1126).t.kbFsAD);
    cResult[5] = stringResult2;
    let tmp13 = stringResult2;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== tmp12) {
    const obj2 = { value: first, maxVolume: 100, onValueChange: tmp12, accessibilityLabel: tmp13 };
    const tmp17 = closure_5(VolumeSliderDefault, obj2);
    cResult[6] = tmp12;
    cResult[7] = tmp17;
    let tmp15 = tmp17;
  } else {
    tmp15 = cResult[7];
  }
  if (cResult[8] === tmp4.slider) {
    if (cResult[9] === tmp15) {
      let tmp18 = cResult[10];
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = tmp(1126).intl;
      const obj3 = { helpCenterArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SOUNDBOARD) };
      const formatResult = intl4.format(tmp(1126).t.BPbGq7, obj3);
      cResult[11] = formatResult;
      let tmp20 = formatResult;
      const tmp7Result = HelpdeskUtilsDefault;
    } else {
      tmp20 = cResult[11];
    }
    if (cResult[12] !== tmp4.text) {
      const obj4 = { style: tmp4.text, variant: "text-sm/medium", children: tmp20 };
      const tmp25 = closure_5(tmp(4892).Text, obj4);
      cResult[12] = tmp4.text;
      cResult[13] = tmp25;
      let tmp23 = tmp25;
    } else {
      tmp23 = cResult[13];
    }
    if (cResult[14] === tmp23) {
      if (cResult[15] === tmp18) {
        let tmp26 = cResult[16];
      }
      return tmp26;
    }
    const obj5 = { title: tmp8, hasIcons: false, children: null };
    const obj6 = { label: tmp10, subLabel: null };
    const obj7 = { children: null };
    const items = [tmp18, tmp23];
    obj7.children = items;
    obj6.subLabel = closure_7(closure_6, obj7);
    obj5.children = closure_5(tmp(6000).TableRow, obj6);
    const tmp30 = closure_5(tmp(9670).UserSettingsTableRowGroup, obj5);
    cResult[14] = tmp23;
    cResult[15] = tmp18;
    cResult[16] = tmp30;
    tmp26 = tmp30;
  }
  const tmp19 = closure_5(View, { style: tmp4.slider, children: tmp15 });
  cResult[8] = tmp4.slider;
  cResult[9] = tmp15;
  cResult[10] = tmp19;
  tmp18 = tmp19;
  const obj = analyticsLocations(576);
}) : (() => {
  const tmp = closure_8();
  const amplitudinalSoundboardVolume = analyticsLocations(6857).getAmplitudinalSoundboardVolume();
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const obj2 = { title: null, hasIcons: false, children: null };
  const intl = analyticsLocations(1126).intl;
  obj2.title = intl.string(analyticsLocations(1126).t.xbMc8r);
  const obj3 = { label: null, subLabel: null };
  const intl2 = analyticsLocations(1126).intl;
  obj3.label = intl2.string(analyticsLocations(1126).t.kbFsAD);
  const obj4 = { children: null };
  const obj5 = { style: tmp.slider, children: null };
  const obj6 = {
    value: amplitudinalSoundboardVolume,
    maxVolume: 100,
    onValueChange(volume) {
      return SoundboardActionCreators.updateUserSoundboardVolume(volume, analyticsLocations);
    },
    accessibilityLabel: null
  };
  const obj = analyticsLocations(6857);
  const intl3 = analyticsLocations(1126).intl;
  obj6.accessibilityLabel = intl3.string(analyticsLocations(1126).t.kbFsAD);
  obj5.children = closure_5(VolumeSliderDefault, obj6);
  const items = [closure_5(View, obj5), ];
  const obj7 = { style: tmp.text, variant: "text-sm/medium", children: null };
  const intl4 = analyticsLocations(1126).intl;
  const obj8 = { helpCenterArticle: null };
  obj8.helpCenterArticle = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SOUNDBOARD);
  obj7.children = intl4.format(analyticsLocations(1126).t.BPbGq7, obj8);
  items[1] = closure_5(analyticsLocations(4892).Text, obj7);
  obj4.children = items;
  obj3.subLabel = closure_7(closure_6, obj4);
  obj2.children = closure_5(analyticsLocations(6000).TableRow, obj3);
  return closure_5(analyticsLocations(9670).UserSettingsTableRowGroup, obj2);
});