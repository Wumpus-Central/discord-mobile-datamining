// === Module 12229: GuildPowerupsNotificationContainer ===

// Module 12229 (GuildPowerupsNotificationContainer)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import _modDef2553 from "module_2553" /* 2553 */;
import Text_Text from "Text/Text" /* 4892 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6477 */;
import useGuildPowerupTier3OverrideConfigDefault from "useGuildPowerupTier3OverrideConfig" /* 12230 */;
import useGuildPowerupExpiringNotificationsConfigDefault from "useGuildPowerupExpiringNotificationsConfig" /* 12231 */;
import GuildPowerupsWarningDefault from "GuildPowerupsWarning" /* 12234 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guildId, text;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, staffContainer: obj3 };
obj2 = { gap: nativeDefault.space.PX_12, margin: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_6 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((text) => {
  const obj = react;
  const cResult = obj.c(6);
  text = text.text;
  const tmp4 = closure_6();
  let str = "text-sm/medium";
  const obj2 = ManaTypeConsolidationExperiment;
  if (obj2.useManaTypeConsolidationExperiment("Tier3OverrideNotice")) {
    str = "experimental/body-sm/normal";
  }
  if (cResult[0] === str) {
    let tmp5;
    if (cResult[1] === text) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.staffContainer) {
      let tmp7;
      if (cResult[4] === tmp5) {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
    const obj3 = { style: tmp4.staffContainer, children: tmp5 };
    const tmp10 = React3(View, obj3);
    cResult[3] = tmp4.staffContainer;
    cResult[4] = tmp5;
    cResult[5] = tmp10;
    tmp7 = tmp10;
  }
  const tmp6 = React3(Text_Text.Text, { variant: str, children: text });
  cResult[0] = str;
  cResult[1] = text;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((text) => {
  let Text;
  let str;
  text = text.text;
  const tmp = closure_6();
  const obj2 = { style: tmp.staffContainer, children: React3(Text, { variant: str, children: text }) };
  const obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("Tier3OverrideNotice");
  str = "text-sm/medium";
  Text = Text_Text.Text;
  if (manaTypeConsolidationExperiment) {
    str = "experimental/body-sm/normal";
  }
  return React3(View, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let items;
  const obj = react;
  const cResult = obj.c(17);
  guildId = guildId.guildId;
  const tmp4 = closure_6();
  const tmp6 = useGuildPowerupTier3OverrideConfigDefault(guildId);
  const tmp7 = useGuildPowerupExpiringNotificationsConfigDefault(guildId);
  const obj2 = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj2.useManaTypeConsolidationExperiment("GuildPowerupsNotificationContainer");
  if (!tmp6.shouldShow) {
    if (!tmp7.shouldShow) {
      return null;
    }
  }
  let str = "text-subtle";
  const container = tmp4.container;
  if (manaTypeConsolidationExperiment) {
    str = "text-strong";
  }
  let str2 = "eyebrow";
  if (manaTypeConsolidationExperiment) {
    str2 = "experimental/heading-lg/semibold";
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(_modDef2553["3FRirU"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === str) {
    let tmp12;
    if (cResult[2] === str2) {
      tmp12 = cResult[3];
    }
    if (cResult[4] === tmp6.shouldShow) {
      let tmp14;
      if (cResult[5] === tmp6.text) {
        tmp14 = cResult[6];
      }
      if (cResult[7] === tmp7.expiringPowerupNames) {
        if (cResult[8] === tmp7.shouldShow) {
          if (cResult[9] === tmp7.warnings) {
            let tmp17;
            if (cResult[10] === guildId) {
              tmp17 = cResult[11];
            }
            if (cResult[12] === tmp4.container) {
              if (cResult[13] === tmp12) {
                if (cResult[14] === tmp14) {
                  let tmp19;
                  if (cResult[15] === tmp17) {
                    tmp19 = cResult[16];
                  }
                  return tmp19;
                }
              }
            }
            const obj3 = { style: container, children: items };
            items = [tmp12, tmp14, tmp17];
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
        shouldShow2 = React3(GuildPowerupsWarningDefault, obj5);
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
      shouldShow = React3(closure_7, obj8);
    }
    cResult[4] = tmp6.shouldShow;
    cResult[5] = tmp6.text;
    cResult[6] = shouldShow;
    tmp14 = shouldShow;
  }
  const tmp13 = React3(Text_Text.Text, { color: str, variant: str2, children: first });
  cResult[1] = str;
  cResult[2] = str2;
  cResult[3] = tmp13;
  tmp12 = tmp13;
}) : ((guildId) => {
  let intl;
  let items;
  let str2;
  let tmp9Result;
  guildId = guildId.guildId;
  const tmp = closure_6();
  const tmp4 = useGuildPowerupTier3OverrideConfigDefault(guildId);
  const tmp5 = useGuildPowerupExpiringNotificationsConfigDefault(guildId);
  const obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsNotificationContainer");
  if (tmp4.shouldShow) {
    let str = "text-subtle";
    const obj2 = { style: tmp.container, children: items };
    const Text = Text_Text.Text;
    if (manaTypeConsolidationExperiment) {
      str = "text-strong";
    }
    const obj3 = { color: str, variant: str2, children: intl.string(_modDef2553["3FRirU"]) };
    str2 = "eyebrow";
    if (manaTypeConsolidationExperiment) {
      str2 = "experimental/heading-lg/semibold";
    }
    intl = intl2.intl;
    items = [React3(Text, obj3), , ];
    let shouldShow = tmp4.shouldShow;
    if (shouldShow) {
      const obj4 = { text: tmp4.text };
      shouldShow = React3(closure_7, obj4);
    }
    items[1] = shouldShow;
    let shouldShow2 = tmp5.shouldShow;
    if (shouldShow2) {
      const obj9 = { guildId, powerupNames: null, warnings: null };
      ({ expiringPowerupNames: obj5.powerupNames, warnings: obj5.warnings } = tmp5);
      shouldShow2 = React3(GuildPowerupsWarningDefault, obj9);
    }
    items[2] = shouldShow2;
    tmp9Result = hasOwnProperty(View, obj2);
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
});
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsNotificationContainer.tsx");

export default tmp4;