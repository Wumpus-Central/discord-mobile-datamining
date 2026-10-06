// === Module 15308: ShowSpoilersSetting ===

// Module 15308 (ShowSpoilersSetting)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import UserSettings from "UserSettings" /* 2028 */;
import SettingsConstants from "SettingsConstants" /* 7645 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const SpoilerRenderSetting = Constants.SpoilerRenderSetting;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let intl;
  let intl2;
  let intl3;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { label: intl.string(intl4.t["KFH/me"]), value: SpoilerRenderSetting.ON_CLICK };
    intl = intl4.intl;
    const items = [obj2, , ];
    const obj3 = { label: intl2.string(intl4.t.Pe1RbL), value: SpoilerRenderSetting.ALWAYS };
    intl2 = intl4.intl;
    items[1] = obj3;
    const obj4 = { label: intl3.string(intl4.t.K5VTBE), value: SpoilerRenderSetting.IF_MODERATOR };
    intl3 = intl4.intl;
    items[2] = obj4;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => react.useMemo(() => {
  let intl;
  let intl2;
  let intl3;
  const obj = { label: intl.string(intl4.t["KFH/me"]), value: constants.ON_CLICK };
  intl = intl4.intl;
  const items = [obj, , ];
  const obj2 = { label: intl2.string(intl4.t.Pe1RbL), value: constants.ALWAYS };
  intl2 = intl4.intl;
  items[1] = obj2;
  const obj3 = { label: intl3.string(intl4.t.K5VTBE), value: constants.IF_MODERATOR };
  intl3 = intl4.intl;
  items[2] = obj3;
  return items;
}, []));
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t.QgwmVz);
  },
  parent: MobileUserSettings.CHAT,
  useValue: UserSettings.RenderSpoilers.useSetting,
  onValueChange: function onShowSpoilersChange(arg0) {
    const RenderSpoilers = UserSettings.RenderSpoilers;
    RenderSpoilers.updateSetting(arg0);
  },
  useOptions: tmp2
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowSpoilersSetting.tsx");

export default radio;