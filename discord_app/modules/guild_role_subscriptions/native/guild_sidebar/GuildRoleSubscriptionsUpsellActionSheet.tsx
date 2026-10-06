// === Module 16211: GuildRoleSubscriptionsUpsellActionSheet ===

// Module 16211 (GuildRoleSubscriptionsUpsellActionSheet)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import FastImageDefault from "FastImage" /* 5981 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6652 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9282 */;
import AssetRegistryDefault from "AssetRegistry" /* 16212 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, guildId;

let metroImportDefault;
let metroRequire;
const View = react_native.View;
const GuildSettingsSections = Constants.GuildSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ title: { marginTop: 24, textAlign: "center" }, description: { marginTop: 8, marginBottom: 24, textAlign: "center" }, dismissButton: { marginTop: 4 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let items;
  let obj = guildId(576);
  const cResult = obj.c(29);
  guildId = guildId.guildId;
  const markAsDismissed = guildId.markAsDismissed;
  const tmp4 = closure_8();
  if (cResult[0] === guildId) {
    let tmp5;
    let tmp6;
    let tmp8;
    let tmp13;
    let tmp15;
    let tmp18;
    let tmp20;
    let tmp23;
    let tmp25;
    let tmp29;
    if (cResult[1] === markAsDismissed) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== markAsDismissed) {
      const fn2 = function _() {
        return markAsDismissed(ContentDismissActionType.UNKNOWN);
      };
      cResult[3] = markAsDismissed;
      cResult[4] = fn2;
      tmp6 = fn2;
    } else {
      tmp6 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { source: markAsDismissed(16212) };
      const tmp11 = markAsDismissed(5981);
      const tmp12 = closure_6(tmp11, obj2);
      cResult[5] = tmp12;
      tmp8 = tmp12;
    } else {
      tmp8 = cResult[5];
    }
    const _Symbol2 = Symbol;
    const title = tmp4.title;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(guildId(1126).t.C0m4rQ);
      cResult[6] = stringResult;
      tmp13 = stringResult;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] !== tmp4.title) {
      const obj3 = { style: title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp13 };
      const tmp17 = closure_6(guildId(4892).Text, obj3);
      cResult[7] = tmp4.title;
      cResult[8] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[8];
    }
    const _Symbol3 = Symbol;
    const description = tmp4.description;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(guildId(1126).t.zOHfEX);
      cResult[9] = stringResult1;
      tmp18 = stringResult1;
    } else {
      tmp18 = cResult[9];
    }
    if (cResult[10] !== tmp4.description) {
      const obj4 = { style: description, variant: "text-sm/medium", color: "text-default", children: tmp18 };
      const tmp22 = closure_6(guildId(4892).Text, obj4);
      cResult[10] = tmp4.description;
      cResult[11] = tmp22;
      tmp20 = tmp22;
    } else {
      tmp20 = cResult[11];
    }
    const _Symbol4 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult2 = intl3.string(guildId(1126).t.OgQQbG);
      cResult[12] = stringResult2;
      tmp23 = stringResult2;
    } else {
      tmp23 = cResult[12];
    }
    if (cResult[13] !== tmp5) {
      const obj5 = { onPress: tmp5, text: tmp23 };
      const tmp27 = closure_6(guildId(5601).Button, obj5);
      cResult[13] = tmp5;
      cResult[14] = tmp27;
      tmp25 = tmp27;
    } else {
      tmp25 = cResult[14];
    }
    const dismissButton = tmp4.dismissButton;
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
      const stringResult3 = obj6.string(guildId(1126).t.WAI6xu);
      cResult[17] = stringResult3;
      tmp29 = stringResult3;
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
      cResult[18] = R;
      cResult[19] = closure_6(guildId(5601).Button, obj7);
      const tmp32 = closure_6(guildId(5601).Button, obj7);
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
      const obj8 = { startExpanded: true, onDismiss: tmp6, children: items };
      items = [tmp8, tmp15, tmp20, tmp25, tmp33];
      cResult[23] = tmp25;
      cResult[24] = tmp33;
      cResult[25] = tmp6;
      cResult[26] = tmp15;
      cResult[27] = tmp20;
      cResult[28] = closure_7(guildId(6652).BottomSheet, obj8);
      const tmp39 = closure_7(guildId(6652).BottomSheet, obj8);
    }
    const obj9 = { style: dismissButton, children: tmp31 };
    cResult[20] = tmp4.dismissButton;
    cResult[21] = tmp31;
    cResult[22] = closure_6(View, obj9);
    const tmp36 = closure_6(View, obj9);
  }
  const fn = function x() {
    markAsDismissed(ContentDismissActionType.UNKNOWN);
    const obj = GuildSettingsActionCreatorsDefault;
    obj.open(guildId, GuildSettingsSections.ROLE_SUBSCRIPTIONS);
  };
  cResult[0] = guildId;
  cResult[1] = markAsDismissed;
  cResult[2] = fn;
  tmp5 = fn;
}) : ((arg0) => {
  let Button2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj7;
  ({ guildId: require, markAsDismissed: importDefault } = arg0);
  const tmp = closure_8();
  let obj = {
    startExpanded: true,
    onDismiss() {
      return importDefault(ContentDismissActionType.UNKNOWN);
    },
    children: items
  };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const obj2 = { source: AssetRegistryDefault };
  const tmp2 = FastImageDefault;
  items = [closure_6(tmp2, obj2), , , , ];
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl5.t.C0m4rQ) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items[1] = closure_6(Text, obj3);
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl5.t.zOHfEX) };
  const Text2 = Text_Text.Text;
  intl2 = intl5.intl;
  items[2] = closure_6(Text2, obj4);
  const obj5 = {
    onPress() {
      importDefault(ContentDismissActionType.UNKNOWN);
      const obj = GuildSettingsActionCreatorsDefault;
      obj.open(require, GuildSettingsSections.ROLE_SUBSCRIPTIONS);
    },
    text: intl3.string(intl5.t.OgQQbG)
  };
  const Button = components_Button_Button.Button;
  intl3 = intl5.intl;
  items[3] = closure_6(Button, obj5);
  const obj6 = { style: tmp.dismissButton, children: closure_6(Button2, obj7) };
  obj7 = {
    onPress() {
      return importDefault(ContentDismissActionType.UNKNOWN);
    },
    text: intl4.string(intl5.t.WAI6xu),
    variant: "secondary"
  };
  Button2 = components_Button_Button.Button;
  intl4 = intl5.intl;
  items[4] = closure_6(View, obj6);
  return closure_7(BottomSheet, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsUpsellActionSheet.tsx");

export default tmp4;