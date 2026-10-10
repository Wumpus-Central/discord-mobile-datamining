// === Module 12291: GuildPowerupsNotificationContainer ===

// Module 12291 (GuildPowerupsNotificationContainer)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef2600 from "module_2600" /* 2600 */;
import Text_Text from "Text/Text" /* 5088 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6663 */;
import useGuildPowerupTier3OverrideConfigDefault from "useGuildPowerupTier3OverrideConfig" /* 12292 */;
import useGuildPowerupExpiringNotificationsConfigDefault from "useGuildPowerupExpiringNotificationsConfig" /* 12293 */;
import GuildPowerupsWarningDefault from "GuildPowerupsWarning" /* 12296 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { container: { gap: nativeDefault.space.PX_12, margin: nativeDefault.space.PX_16 }, staffContainer: null };
let obj2 = { gap: nativeDefault.space.PX_12, margin: nativeDefault.space.PX_16 };
obj.staffContainer = { padding: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_6 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function Tier3OverrideNotice(text) {
  const cResult = c.c(6);
  text = text.text;
  const tmp4 = closure_6();
  let str = "text-sm/medium";
  if (obj2.useManaTypeConsolidationExperiment("Tier3OverrideNotice")) {
    str = "experimental/body-sm/normal";
  }
  if (cResult[0] === str) {
    if (cResult[1] === text) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.staffContainer) {
      if (cResult[4] === tmp5) {
        let tmp7 = cResult[5];
      }
      return tmp7;
    }
    const obj3 = { style: tmp4.staffContainer, children: tmp5 };
    const tmp10 = React4(View, obj3);
    cResult[3] = tmp4.staffContainer;
    cResult[4] = tmp5;
    cResult[5] = tmp10;
    tmp7 = tmp10;
  }
  const tmp6 = React4(Text_Text.Text, { variant: str, children: text });
  cResult[0] = str;
  cResult[1] = text;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  obj2 = ManaTypeConsolidationExperiment;
}) : (function Tier3OverrideNotice(children) {
  const tmp = closure_6();
  const obj2 = { style: tmp.staffContainer, children: null };
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("Tier3OverrideNotice");
  let str = "text-sm/medium";
  if (manaTypeConsolidationExperiment) {
    str = "experimental/body-sm/normal";
  }
  obj2.children = React4(Text_Text.Text, { variant: str, children: children.text });
  return React4(View, obj2);
});
let ReactCompilerGating = ReactCompilerGating_mod;
let obj3 = { padding: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_SUBTLE };
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsNotificationContainer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupsNotificationContainer(guildId) {
  const cResult = c.c(17);
  guildId = guildId.guildId;
  const tmp4 = closure_6();
  const tmp6 = useGuildPowerupTier3OverrideConfigDefault(guildId);
  const tmp7 = useGuildPowerupExpiringNotificationsConfigDefault(guildId);
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("GuildPowerupsNotificationContainer");
  if (!tmp6.shouldShow) {
    if (!tmp7.shouldShow) {
      return null;
    }
  }
  let str = "text-subtle";
  if (manaTypeConsolidationExperiment) {
    str = "text-strong";
  }
  let str2 = "eyebrow";
  if (manaTypeConsolidationExperiment) {
    str2 = "experimental/heading-lg/semibold";
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(_modDef2600["3FRirU"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === str) {
    if (cResult[2] === str2) {
      let tmp12 = cResult[3];
    }
    if (cResult[4] === tmp6.shouldShow) {
      if (cResult[5] === tmp6.text) {
        let tmp14 = cResult[6];
      }
      if (cResult[7] === tmp7.expiringPowerupNames) {
        if (cResult[8] === tmp7.shouldShow) {
          if (cResult[9] === tmp7.warnings) {
            if (cResult[10] === guildId) {
              let tmp17 = cResult[11];
            }
            if (cResult[12] === tmp4.container) {
              if (cResult[13] === tmp12) {
                if (cResult[14] === tmp14) {
                  if (cResult[15] === tmp17) {
                    let tmp19 = cResult[16];
                  }
                  return tmp19;
                }
              }
            }
            const obj3 = { style: tmp4.container, children: null };
            const items = [tmp12, tmp14, tmp17];
            obj3.children = items;
            const tmp22 = hasOwnProperty(View, obj3);
            cResult[12] = tmp4.container;
            cResult[13] = tmp12;
            cResult[14] = tmp14;
            cResult[15] = tmp17;
            cResult[16] = tmp22;
            tmp19 = tmp22;
          }
        }
      }
      let shouldShow2 = tmp7.shouldShow;
      if (shouldShow2) {
        const obj5 = { guildId, powerupNames: null, warnings: null };
        ({ expiringPowerupNames: obj4.powerupNames, warnings: obj4.warnings } = tmp7);
        shouldShow2 = React4(GuildPowerupsWarningDefault, obj5);
      }
      cResult[7] = tmp7.expiringPowerupNames;
      cResult[8] = tmp7.shouldShow;
      cResult[9] = tmp7.warnings;
      cResult[10] = guildId;
      cResult[11] = shouldShow2;
      tmp17 = shouldShow2;
    }
    let shouldShow = tmp6.shouldShow;
    if (shouldShow) {
      const obj8 = { text: tmp6.text };
      shouldShow = React4(closure_7, obj8);
    }
    cResult[4] = tmp6.shouldShow;
    cResult[5] = tmp6.text;
    cResult[6] = shouldShow;
    tmp14 = shouldShow;
  }
  const tmp13 = React4(Text_Text.Text, { color: str, variant: str2, children: first });
  cResult[1] = str;
  cResult[2] = str2;
  cResult[3] = tmp13;
  tmp12 = tmp13;
}) : (function GuildPowerupsNotificationContainer(guildId) {
  guildId = guildId.guildId;
  const tmp4 = useGuildPowerupTier3OverrideConfigDefault(guildId);
  const tmp5 = useGuildPowerupExpiringNotificationsConfigDefault(guildId);
  const tmp = closure_6();
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("GuildPowerupsNotificationContainer");
  if (tmp4.shouldShow) {
    const obj2 = { style: tmp.container, children: null };
    let str = "text-subtle";
    if (manaTypeConsolidationExperiment) {
      str = "text-strong";
    }
    const obj3 = { color: str, variant: null, children: null };
    let str2 = "eyebrow";
    if (manaTypeConsolidationExperiment) {
      str2 = "experimental/heading-lg/semibold";
    }
    obj3.variant = str2;
    const intl = util.intl;
    obj3.children = intl.string(_modDef2600["3FRirU"]);
    const items = [React4(Text_Text.Text, obj3), , ];
    let shouldShow = tmp4.shouldShow;
    if (shouldShow) {
      const obj4 = { text: tmp4.text };
      shouldShow = React4(closure_7, obj4);
    }
    items[1] = shouldShow;
    let shouldShow2 = tmp5.shouldShow;
    if (shouldShow2) {
      const obj9 = { guildId, powerupNames: null, warnings: null };
      ({ expiringPowerupNames: obj5.powerupNames, warnings: obj5.warnings } = tmp5);
      shouldShow2 = React4(GuildPowerupsWarningDefault, obj9);
    }
    items[2] = shouldShow2;
    obj2.children = items;
    let tmp9Result = hasOwnProperty(View, obj2);
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
});