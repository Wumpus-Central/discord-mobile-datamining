// === Module 12728: HubEmailConnectionStudentPrompt ===

// Module 12728 (HubEmailConnectionStudentPrompt)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { HubEmailConnectionSteps } from "HubEmailConnectionSteps" /* 12719 */;
import ME from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;
import importDefaultResult from "createTextStyle" /* 5524 */;

const require = arg1;
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ AnalyticEvents: closure_6, Fonts } = ME);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: { display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }, header: null, row: null };
createCacheKey = {};
const merged = Object.assign(importDefaultResult(Fonts.PRIMARY_BOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
createCacheKey.textAlign = "center";
createCacheKey.marginBottom = 24;
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { borderRadius: ThemesDefault.radii.sm, marginBottom: 8, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderRadius: ThemesDefault.radii.sm, marginBottom: 8, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
const result = require("set").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionStudentPrompt.tsx");

export default function HubEmailConnectionStudentPrompt(onClose) {
  onClose = onClose.onClose;
  const invite = onClose.invite;
  dependencyMap = undefined;
  const tmp = callback3();
  let obj = onClose(1483);
  dependencyMap = obj.useNavigation();
  obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj1 = { style: tmp.header, children: null };
  const intl = onClose(1114).intl;
  obj1[1] = intl.string(onClose(1114).t["+/Pv0h"]);
  const items = [callback(onClose(1178).LegacyText, obj1), , ];
  const obj2 = { DEPRECATED_style: tmp.row, leading: null, trailing: null, label: null, subLabel: null, onPress: null };
  const obj3 = { source: invite(12729) };
  obj2[1] = callback(closure_4, obj3);
  obj2[2] = invite(7137).Arrow;
  const intl2 = onClose(1114).intl;
  obj2[3] = intl2.string(onClose(1114).t["a7a/D+"]);
  const intl3 = onClose(1114).intl;
  obj2[4] = intl3.string(onClose(1114).t.Gsegk8);
  obj2[5] = function onPress() {
    let obj = invite(arr[14]);
    obj.track(closure_1_6.HUB_STUDENT_PROMPT_CLICKED);
    obj = { onClose, invite };
    arr = arr.push(closure_1_5.VERIFY_EMAIL, obj);
  };
  items[1] = callback(invite(7137), obj2);
  const obj4 = { DEPRECATED_style: tmp.row, leading: null, trailing: null, label: null, onPress: null };
  const obj5 = { source: null };
  const tmp2 = invite(7137);
  obj5[0] = invite(12730);
  obj4[1] = callback(closure_4, obj5);
  obj4[2] = invite(7137).Arrow;
  const intl4 = onClose(1114).intl;
  obj4[3] = intl4.string(onClose(1114).t.GLG9n4);
  obj4[4] = onClose;
  items[2] = callback(invite(7137), obj4);
  obj[1] = items;
  obj[0] = callback2(closure_3, obj);
  return callback(onClose(12727).HubEmailConnectionScreen, obj);
};