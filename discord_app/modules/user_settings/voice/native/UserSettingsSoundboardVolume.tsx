// === Module 10098: SoundboardVolume ===

// Module 10098 (SoundboardVolume)
import noopAll from "noop" /* 19 */;
import combinedDefault from "combined" /* 1994 */;
import contextDefault from "context" /* 5962 */;
import VolumeSliderDefault from "VolumeSlider" /* 10095 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { HelpdeskArticles } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
noopAll;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ slider: { marginTop: 4 }, text: { marginTop: 4 } });
const result = require("set").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsSoundboardVolume.tsx");

export default function SoundboardVolume() {
  const tmp = callback3();
  let obj = analyticsLocations(6198);
  const amplitudinalSoundboardVolume = obj.getAmplitudinalSoundboardVolume();
  analyticsLocations = contextDefault().analyticsLocations;
  obj = { title: null, hasIcons: false, children: null };
  const intl = analyticsLocations(1233).intl;
  obj[0] = intl.string(analyticsLocations(1233).t.xbMc8r);
  obj = { label: null, subLabel: null };
  const intl2 = analyticsLocations(1233).intl;
  obj[0] = intl2.string(analyticsLocations(1233).t.kbFsAD);
  obj1 = { children: null };
  const obj2 = { style: tmp.slider, children: null };
  const obj3 = {
    value: amplitudinalSoundboardVolume,
    maxVolume: 100,
    onValueChange(volume) {
      return analyticsLocations(closure_1_2[11]).updateUserSoundboardVolume(volume, analyticsLocations);
    },
    accessibilityLabel: null
  };
  const intl3 = analyticsLocations(1233).intl;
  obj3[3] = intl3.string(analyticsLocations(1233).t.kbFsAD);
  obj2[1] = callback(VolumeSliderDefault, obj3);
  const items = [callback(View, obj2), ];
  const obj4 = { style: tmp.text, variant: "text-sm/medium", children: null };
  const intl4 = analyticsLocations(1233).intl;
  const obj5 = { helpCenterArticle: null };
  const tmp3 = VolumeSliderDefault;
  obj5[0] = combinedDefault.getArticleURL(HelpdeskArticles.SOUNDBOARD);
  obj4[2] = intl4.format(analyticsLocations(1233).t.BPbGq7, obj5);
  items[1] = callback(analyticsLocations(4474).Text, obj4);
  obj1[0] = items;
  obj[1] = callback2(closure_6, obj1);
  obj[2] = callback(analyticsLocations(5608).TableRow, obj);
  return callback(analyticsLocations(10088).UserSettingsTableRowGroup, obj);
};