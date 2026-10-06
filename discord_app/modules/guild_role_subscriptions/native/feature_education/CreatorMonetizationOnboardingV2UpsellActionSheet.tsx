// === Module 16216: CreatorMonetizationOnboardingV2UpsellActionSheet ===

// Module 16216 (CreatorMonetizationOnboardingV2UpsellActionSheet)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import FastImageDefault from "FastImage" /* 5981 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6652 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9282 */;
import AssetRegistryDefault from "AssetRegistry" /* 16217 */;
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
let closure_8 = createStyles.createStyles({ container: { paddingLeft: 24, paddingRight: 24, paddingTop: 24 }, title: { marginBottom: 6 }, description: { marginBottom: 24 }, image: { marginBottom: 24, width: "100%" }, dismissButton: { marginTop: 4 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let container;
  let items;
  let title;
  let obj = guildId(576);
  const cResult = obj.c(34);
  guildId = guildId.guildId;
  const markAsDismissed = guildId.markAsDismissed;
  const tmp4 = closure_8();
  if (cResult[0] === guildId) {
    let tmp5;
    let tmp8;
    let tmp12;
    let tmp20;
    let tmp25;
    if (cResult[1] === markAsDismissed) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== markAsDismissed) {
      class N {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
      cResult[3] = markAsDismissed;
      cResult[4] = N;
    } else {
      class N {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
    }
    const _Symbol = Symbol;
    ({ container, title } = tmp4);
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
      const stringResult = obj2.string(guildId(1126).t["v+Jm6X"]);
      cResult[5] = stringResult;
      tmp8 = stringResult;
    } else {
      class N {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
    }
    if (cResult[6] !== tmp4.title) {
      class N {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
      const obj3 = { style: title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: tmp8 };
      cResult[6] = tmp4.title;
      cResult[7] = closure_6(guildId(4892).Text, obj3);
      const tmp11 = closure_6(guildId(4892).Text, obj3);
    } else {
      class N {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
    }
    const _Symbol2 = Symbol;
    const description = tmp4.description;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
      const stringResult1 = obj4.string(guildId(1126).t.kUUFbG);
      cResult[8] = stringResult1;
      tmp12 = stringResult1;
    } else {
      class N {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
    }
    if (cResult[9] !== tmp4.description) {
      class N {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
      const obj5 = { style: description, accessibilityRole: "text", variant: "text-sm/medium", color: "text-default", children: tmp12 };
      cResult[9] = tmp4.description;
      cResult[10] = closure_6(guildId(4892).Text, obj5);
      const tmp15 = closure_6(guildId(4892).Text, obj5);
    } else {
      class N {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
    }
    if (cResult[11] !== tmp4.image) {
      class N {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
      const obj6 = { style: tmp4.image, resizeMode: "contain", source: markAsDismissed(16217) };
      const tmp18 = markAsDismissed(5981);
      cResult[11] = tmp4.image;
      cResult[12] = closure_6(tmp18, obj6);
      const tmp19 = closure_6(tmp18, obj6);
    } else {
      class N {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class N {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
      const stringResult2 = obj7.string(guildId(1126).t.OgQQbG);
      cResult[13] = stringResult2;
      tmp20 = stringResult2;
    } else {
      class N {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
    }
    if (cResult[14] !== tmp5) {
      class N {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
      const obj8 = { onPress: tmp5, text: tmp20 };
      cResult[14] = tmp5;
      cResult[15] = closure_6(guildId(5601).Button, obj8);
      const tmp23 = closure_6(guildId(5601).Button, obj8);
    } else {
      class N {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
    }
    const dismissButton = tmp4.dismissButton;
    if (cResult[16] !== markAsDismissed) {
      class P {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
      cResult[16] = markAsDismissed;
      cResult[17] = P;
    } else {
      class P {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
      const stringResult3 = obj9.string(guildId(1126).t.WAI6xu);
      cResult[18] = stringResult3;
      tmp25 = stringResult3;
    } else {
      class P {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
    }
    if (cResult[19] !== P) {
      class P {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
      const obj10 = { onPress: P, text: tmp25, variant: "secondary" };
      cResult[19] = P;
      cResult[20] = closure_6(guildId(5601).Button, obj10);
      const tmp28 = closure_6(guildId(5601).Button, obj10);
    } else {
      class P {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
    }
    if (cResult[21] === tmp4.dismissButton) {
      class P {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
      if (cResult[24] === tmp4.container) {
        class P {
          constructor() {
            return markAsDismissed(ContentDismissActionType.UNKNOWN);
          }
        }
      }
      const obj11 = { style: container, children: items };
      items = [tmp10, tmp14, tmp16, tmp22, tmp29];
      cResult[24] = tmp4.container;
      cResult[25] = tmp16;
      cResult[26] = tmp22;
      cResult[27] = tmp29;
      cResult[28] = tmp10;
      cResult[29] = tmp14;
      cResult[30] = closure_7(View, obj11);
      const tmp36 = closure_7(View, obj11);
    }
    const obj12 = { style: dismissButton, children: tmp27 };
    cResult[21] = tmp4.dismissButton;
    cResult[22] = tmp27;
    cResult[23] = closure_6(View, obj12);
    const tmp32 = closure_6(View, obj12);
  }
  const fn = function h() {
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
  let obj2;
  let obj8;
  ({ guildId: require, markAsDismissed: importDefault } = arg0);
  const tmp = closure_8();
  let obj = {
    startExpanded: true,
    onDismiss() {
      return importDefault(ContentDismissActionType.UNKNOWN);
    },
    children: closure_7(View, obj2)
  };
  obj2 = { style: tmp.container, children: items };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl5.t["v+Jm6X"]) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items = [closure_6(Text, obj3), , , , ];
  const obj4 = { style: tmp.description, accessibilityRole: "text", variant: "text-sm/medium", color: "text-default", children: intl2.string(intl5.t.kUUFbG) };
  const Text2 = Text_Text.Text;
  intl2 = intl5.intl;
  items[1] = closure_6(Text2, obj4);
  const obj5 = { style: tmp.image, resizeMode: "contain", source: AssetRegistryDefault };
  const tmp2 = FastImageDefault;
  items[2] = closure_6(tmp2, obj5);
  const obj6 = {
    onPress() {
      importDefault(ContentDismissActionType.UNKNOWN);
      const obj = GuildSettingsActionCreatorsDefault;
      obj.open(require, GuildSettingsSections.ROLE_SUBSCRIPTIONS);
    },
    text: intl3.string(intl5.t.OgQQbG)
  };
  const Button = components_Button_Button.Button;
  intl3 = intl5.intl;
  items[3] = closure_6(Button, obj6);
  const obj7 = { style: tmp.dismissButton, children: closure_6(Button2, obj8) };
  obj8 = {
    onPress() {
      return importDefault(ContentDismissActionType.UNKNOWN);
    },
    text: intl4.string(intl5.t.WAI6xu),
    variant: "secondary"
  };
  Button2 = components_Button_Button.Button;
  intl4 = intl5.intl;
  items[4] = closure_6(View, obj7);
  return closure_6(BottomSheet, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/CreatorMonetizationOnboardingV2UpsellActionSheet.tsx");

export default tmp4;