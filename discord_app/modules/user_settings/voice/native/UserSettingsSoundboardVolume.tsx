// discord_app/modules/user_settings/voice/native/UserSettingsSoundboardVolume.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { VolumeSlider } from "../../../../components_native/common/VolumeSlider.tsx";
import { combined } from "../../../../utils/HelpdeskUtils.tsx";
import { context } from "../../../app_analytics/useAnalyticsLocations.tsx";

let c5;
let closure_6;
let error;
const require = arg1;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ slider: { marginTop: 4 }, text: { marginTop: 4 } });
const result = require("ME").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsSoundboardVolume.tsx");

export default function SoundboardVolume() {
  const tmp = callback3();
  let obj = analyticsLocations(5868);
  const amplitudinalSoundboardVolume = obj.getAmplitudinalSoundboardVolume();
  analyticsLocations = context().analyticsLocations;
  obj = { title: null, hasIcons: false, children: null };
  const intl = analyticsLocations(1236).intl;
  obj[0] = intl.string(analyticsLocations(1236).t.xbMc8r);
  obj = { label: null, subLabel: null };
  const intl2 = analyticsLocations(1236).intl;
  obj[0] = intl2.string(analyticsLocations(1236).t.kbFsAD);
  const obj1 = { children: null };
  const items = [callback(View, { style: tmp.slider, children: callback(VolumeSlider, obj3) }), ];
  const obj4 = { style: tmp.text, variant: "text-sm/medium", children: null };
  const intl3 = analyticsLocations(1236).intl;
  const obj5 = { helpCenterArticle: null };
  const obj2 = { style: tmp.slider, children: callback(VolumeSlider, obj3) };
  obj5[0] = combined.getArticleURL(HelpdeskArticles.SOUNDBOARD);
  obj4[2] = intl3.format(analyticsLocations(1236).t.BPbGq7, obj5);
  items[1] = callback(analyticsLocations(4281).Text, obj4);
  obj1[0] = items;
  obj[1] = callback2(closure_6, obj1);
  obj[2] = callback(analyticsLocations(5315).TableRow, obj);
  return callback(analyticsLocations(10740).UserSettingsTableRowGroup, obj);
};