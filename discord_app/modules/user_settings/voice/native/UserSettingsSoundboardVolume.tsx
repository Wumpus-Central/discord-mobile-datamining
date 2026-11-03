// === Module 12089: UserSettingsSoundboardVolume ===

// Module 12089 (UserSettingsSoundboardVolume)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2190 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7446 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7641 */;
import VolumeSliderDefault from "VolumeSlider" /* 12086 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1072).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5141);
let closure_8 = createStyles.createStyles({ slider: { marginTop: 4 }, text: { marginTop: 4 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsSoundboardVolume.tsx");

export default function SoundboardVolume() {
  const tmp = closure_8();
  const amplitudinalSoundboardVolume = analyticsLocations(7649).getAmplitudinalSoundboardVolume();
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const obj2 = { title: null, hasIcons: false, children: null };
  const intl = analyticsLocations(1113).intl;
  obj2.title = intl.string(analyticsLocations(1113).t.xbMc8r);
  const obj3 = { label: null, subLabel: null };
  const intl2 = analyticsLocations(1113).intl;
  obj3.label = intl2.string(analyticsLocations(1113).t.kbFsAD);
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
  const obj = analyticsLocations(7649);
  const intl3 = analyticsLocations(1113).intl;
  obj6.accessibilityLabel = intl3.string(analyticsLocations(1113).t.kbFsAD);
  obj5.children = closure_5(VolumeSliderDefault, obj6);
  items = [closure_5(View, obj5), ];
  const obj7 = { style: tmp.text, variant: "text-sm/medium", children: null };
  const intl4 = analyticsLocations(1113).intl;
  const obj8 = { helpCenterArticle: null };
  obj8.helpCenterArticle = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SOUNDBOARD);
  obj7.children = intl4.format(analyticsLocations(1113).t.BPbGq7, obj8);
  items[1] = closure_5(analyticsLocations(5747).Text, obj7);
  obj4.children = items;
  obj3.subLabel = closure_7(closure_6, obj4);
  obj2.children = closure_5(analyticsLocations(7101).TableRow, obj3);
  return closure_5(analyticsLocations(12077).UserSettingsTableRowGroup, obj2);
};