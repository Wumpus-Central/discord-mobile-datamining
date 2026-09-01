// discord_app/modules/user_settings/voice/native/UserSettingsSoundboardVolume.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import combinedDefault from "../../../../utils/HelpdeskUtils.tsx";
import contextDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import VolumeSliderDefault from "../../../../components_native/common/VolumeSlider.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { HelpdeskArticles } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ slider: { marginTop: 4 }, text: { marginTop: 4 } });
const result = require("set").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsSoundboardVolume.tsx");

export default function SoundboardVolume() {
  const tmp = callback3();
  let obj = analyticsLocations(6188);
  const amplitudinalSoundboardVolume = obj.getAmplitudinalSoundboardVolume();
  analyticsLocations = contextDefault().analyticsLocations;
  obj = { title: null, hasIcons: false, children: null };
  const intl = analyticsLocations(1236).intl;
  obj[0] = intl.string(analyticsLocations(1236).t.xbMc8r);
  obj = { label: null, subLabel: null };
  const intl2 = analyticsLocations(1236).intl;
  obj[0] = intl2.string(analyticsLocations(1236).t.kbFsAD);
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
  const intl3 = analyticsLocations(1236).intl;
  obj3[3] = intl3.string(analyticsLocations(1236).t.kbFsAD);
  obj2[1] = callback(VolumeSliderDefault, obj3);
  const items = [callback(View, obj2), ];
  const obj4 = { style: tmp.text, variant: "text-sm/medium", children: null };
  const intl4 = analyticsLocations(1236).intl;
  const obj5 = { helpCenterArticle: null };
  const tmp3 = VolumeSliderDefault;
  obj5[0] = combinedDefault.getArticleURL(HelpdeskArticles.SOUNDBOARD);
  obj4[2] = intl4.format(analyticsLocations(1236).t.BPbGq7, obj5);
  items[1] = callback(analyticsLocations(4474).Text, obj4);
  obj1[0] = items;
  obj[1] = callback2(closure_6, obj1);
  obj[2] = callback(analyticsLocations(5599).TableRow, obj);
  return callback(analyticsLocations(10062).UserSettingsTableRowGroup, obj);
};