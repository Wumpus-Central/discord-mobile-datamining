// === Module 16171: GuildRoleSubscriptionsUpsellActionSheet ===

// Module 16171 (GuildRoleSubscriptionsUpsellActionSheet)
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import FastImageDefault from "FastImage" /* 5974 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6645 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9247 */;
import _modDef16172 from "module_16172" /* 16172 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const GuildSettingsSections = fn(1085).GuildSettingsSections;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let closure_8 = createStyles.createStyles({ title: { marginTop: 24, textAlign: "center" }, description: { marginTop: 8, marginBottom: 24, textAlign: "center" }, dismissButton: { marginTop: 4 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsUpsellActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(576).c(29);
  guildId = guildId.guildId;
  const markAsDismissed = guildId.markAsDismissed;
  const tmp4 = closure_8();
  if (cResult[0] === guildId) {
    if (cResult[1] === markAsDismissed) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] !== markAsDismissed) {
      const fn2 = function _() {
        return markAsDismissed(ContentDismissActionType.UNKNOWN);
      };
      cResult[3] = markAsDismissed;
      cResult[4] = fn2;
      let tmp6 = fn2;
    } else {
      tmp6 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { source: markAsDismissed(16172) };
      const tmp12 = closure_6(markAsDismissed(5974), obj2);
      cResult[5] = tmp12;
      let tmp8 = tmp12;
      const tmp11 = markAsDismissed(5974);
    } else {
      tmp8 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.C0m4rQ);
      cResult[6] = stringResult;
      let tmp13 = stringResult;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] !== tmp4.title) {
      const obj3 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp13 };
      const tmp17 = closure_6(tmp(4886).Text, obj3);
      cResult[7] = tmp4.title;
      cResult[8] = tmp17;
      let tmp15 = tmp17;
    } else {
      tmp15 = cResult[8];
    }
    const _Symbol3 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(tmp(1126).t.zOHfEX);
      cResult[9] = stringResult1;
      let tmp18 = stringResult1;
    } else {
      tmp18 = cResult[9];
    }
    if (cResult[10] !== tmp4.description) {
      const obj4 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: tmp18 };
      const tmp22 = closure_6(tmp(4886).Text, obj4);
      cResult[10] = tmp4.description;
      cResult[11] = tmp22;
      let tmp20 = tmp22;
    } else {
      tmp20 = cResult[11];
    }
    const _Symbol4 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult2 = intl3.string(tmp(1126).t.OgQQbG);
      cResult[12] = stringResult2;
      let tmp23 = stringResult2;
    } else {
      tmp23 = cResult[12];
    }
    if (cResult[13] !== tmp5) {
      const obj5 = { onPress: tmp5, text: tmp23 };
      const tmp27 = closure_6(tmp(5594).Button, obj5);
      cResult[13] = tmp5;
      cResult[14] = tmp27;
      let tmp25 = tmp27;
    } else {
      tmp25 = cResult[14];
    }
    if (cResult[15] !== markAsDismissed) {
      class R {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
      cResult[15] = markAsDismissed;
      cResult[16] = R;
    } else {
      class R {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
    }
    const _Symbol5 = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
      const stringResult3 = obj6.string(tmp(1126).t.WAI6xu);
      cResult[17] = stringResult3;
      const tmp29 = stringResult3;
    } else {
      class R {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
    }
    if (cResult[18] !== R) {
      class R {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
      const obj7 = { onPress: R, text: tmp29, variant: "secondary" };
      const tmp32 = closure_6(tmp(5594).Button, obj7);
      cResult[18] = R;
      cResult[19] = tmp32;
    } else {
      class R {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
    }
    if (cResult[20] === tmp4.dismissButton) {
      class R {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
      if (cResult[23] === tmp25) {
        class R {
          constructor() {
            return markAsDismissed(ContentDismissActionType.UNKNOWN);
          }
        }
      }
      const obj8 = { startExpanded: true, onDismiss: tmp6, children: null };
      const items = [tmp8, tmp15, tmp20, tmp25, tmp33];
      obj8.children = items;
      const tmp39 = closure_7(tmp(6645).BottomSheet, obj8);
      cResult[23] = tmp25;
      cResult[24] = tmp33;
      cResult[25] = tmp6;
      cResult[26] = tmp15;
      cResult[27] = tmp20;
      cResult[28] = tmp39;
    }
    const obj9 = { style: tmp4.dismissButton, children: tmp31 };
    const tmp36 = closure_6(View, obj9);
    cResult[20] = tmp4.dismissButton;
    cResult[21] = tmp31;
    cResult[22] = tmp36;
  }
  const fn = function x() {
    markAsDismissed(ContentDismissActionType.UNKNOWN);
    GuildSettingsActionCreatorsDefault.open(guildId, GuildSettingsSections.ROLE_SUBSCRIPTIONS);
  };
  cResult[0] = guildId;
  cResult[1] = markAsDismissed;
  cResult[2] = fn;
  tmp5 = fn;
  const obj = guildId(576);
}) : ((arg0) => {
  ({ guildId: require, markAsDismissed: importDefault } = arg0);
  const tmp = closure_8();
  const obj = {
    startExpanded: true,
    onDismiss() {
      return importDefault(ContentDismissActionType.UNKNOWN);
    },
    children: null
  };
  const obj2 = { source: _modDef16172 };
  const items = [closure_6(FastImageDefault, obj2), , , , ];
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.C0m4rQ);
  items[1] = closure_6(Text_Text.Text, obj3);
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.zOHfEX);
  items[2] = closure_6(Text_Text.Text, obj4);
  const obj5 = {
    onPress() {
      closure_1_1(ContentDismissActionType.UNKNOWN);
      GuildSettingsActionCreatorsDefault.open(require, GuildSettingsSections.ROLE_SUBSCRIPTIONS);
    },
    text: null
  };
  const intl3 = util.intl;
  obj5.text = intl3.string(util.t.OgQQbG);
  items[3] = closure_6(components_Button_Button.Button, obj5);
  const obj6 = { style: tmp.dismissButton, children: null };
  const obj7 = {
    onPress() {
      return importDefault(ContentDismissActionType.UNKNOWN);
    },
    text: null,
    variant: "secondary"
  };
  const intl4 = util.intl;
  obj7.text = intl4.string(util.t.WAI6xu);
  obj6.children = closure_6(components_Button_Button.Button, obj7);
  items[4] = closure_6(View, obj6);
  obj.children = items;
  return closure_7(Sheet_BottomSheet.BottomSheet, obj);
});