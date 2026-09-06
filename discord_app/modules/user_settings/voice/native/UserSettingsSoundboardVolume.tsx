// === Module 9989: UserSettingsSoundboardVolume ===

// Module 9989 (UserSettingsSoundboardVolume)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7162 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7338 */;
import VolumeSliderDefault from "VolumeSlider" /* 9986 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ slider: { marginTop: 4 }, text: { marginTop: 4 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsSoundboardVolume.tsx");

export default function SoundboardVolume() {
  const tmp = closure_8();
  let obj = analyticsLocations(7344);
  const amplitudinalSoundboardVolume = obj.getAmplitudinalSoundboardVolume();
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  obj = { title: null, hasIcons: false, children: null };
  const intl = analyticsLocations(1114).intl;
  obj.title = intl.string(analyticsLocations(1114).t.xbMc8r);
  obj = { label: null, subLabel: null };
  const intl2 = analyticsLocations(1114).intl;
  obj.label = intl2.string(analyticsLocations(1114).t.kbFsAD);
  const obj1 = { children: null };
  const obj2 = { style: tmp.slider, children: null };
  const obj3 = {
    value: amplitudinalSoundboardVolume,
    maxVolume: 100,
    onValueChange(volume) {
      return SoundboardActionCreators.updateUserSoundboardVolume(volume, analyticsLocations);
    },
    accessibilityLabel: null
  };
  const intl3 = analyticsLocations(1114).intl;
  obj3.accessibilityLabel = intl3.string(analyticsLocations(1114).t.kbFsAD);
  obj2.children = closure_5(VolumeSliderDefault, obj3);
  const items = [closure_5(View, obj2), ];
  const obj4 = { style: tmp.text, variant: "text-sm/medium", children: null };
  const intl4 = analyticsLocations(1114).intl;
  const obj5 = { helpCenterArticle: null };
  obj5.helpCenterArticle = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SOUNDBOARD);
  obj4.children = intl4.format(analyticsLocations(1114).t.BPbGq7, obj5);
  items[1] = closure_5(analyticsLocations(4556).Text, obj4);
  obj1.children = items;
  obj.subLabel = closure_7(closure_6, obj1);
  obj.children = closure_5(analyticsLocations(5605).TableRow, obj);
  return closure_5(analyticsLocations(9979).UserSettingsTableRowGroup, obj);
};