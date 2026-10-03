// === Module 14640: DirectMessageSpamFilterSetting ===

// Module 14640 (DirectMessageSpamFilterSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2028 */;
import ModerationUtils from "ModerationUtils" /* 14641 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11129);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const dmSpamOptions = ModerationUtils.generateDmSpamOptions();
    const mapped = dmSpamOptions.map((value) => ({ value: value.value, label: value.name, subLabel: value.desc }));
    cResult[0] = mapped;
    let first = mapped;
    const tmpResult = ModerationUtils;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => noop.useMemo(() => {
  const dmSpamOptions = ModerationUtils.generateDmSpamOptions();
  return dmSpamOptions.map((value) => ({ value: value.value, label: value.name, subLabel: value.desc }));
}, []));
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.tiCXaH);
  },
  parent: fn(7634).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useOptions: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(1);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const dmSpamOptions = ModerationUtils.generateDmSpamOptions();
      const mapped = dmSpamOptions.map((value) => ({ value: value.value, label: value.name, subLabel: value.desc }));
      cResult[0] = mapped;
      let first = mapped;
      const tmpResult = ModerationUtils;
    } else {
      first = cResult[0];
    }
    return first;
  }) : (() => noop.useMemo(() => {
    const dmSpamOptions = ModerationUtils.generateDmSpamOptions();
    return dmSpamOptions.map((value) => ({ value: value.value, label: value.name, subLabel: value.desc }));
  }, [])),
  useValue: fn(14643).useDerivedDmSpamFilterSettingValue,
  onValueChange: function onDmSpamFilterSettingValueChange(arg0) {
    const DmSpamFilterV2 = UserSettings.DmSpamFilterV2;
    DmSpamFilterV2.updateSetting(Number(arg0));
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.H9XOl3), ];
    const intl2 = util.intl;
    items[1] = intl2.string(util.t.k4W40P);
    return items;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DirectMessageSpamFilterSetting.tsx");

export default radio;