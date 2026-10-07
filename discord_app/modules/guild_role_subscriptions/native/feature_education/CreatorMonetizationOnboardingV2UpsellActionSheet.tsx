// discord_app/modules/guild_role_subscriptions/native/feature_education/CreatorMonetizationOnboardingV2UpsellActionSheet.tsx
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import GuildSettingsActionCreatorsDefault from "../../../guild_settings/GuildSettingsActionCreators.tsx";
import _modDef16217 from "../../../../../_runtime/metro/16217__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const GuildSettingsSections = fn(1085).GuildSettingsSections;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
let closure_8 = createStyles.createStyles({
  container: { paddingLeft: 24, paddingRight: 24, paddingTop: 24 },
  title: { marginBottom: 6 },
  description: { marginBottom: 24 },
  image: { marginBottom: 24, width: "100%" },
  dismissButton: { marginTop: 4 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/feature_education/CreatorMonetizationOnboardingV2UpsellActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      const cResult = guildId(576).c(34);
      guildId = guildId.guildId;
      const markAsDismissed = guildId.markAsDismissed;
      const tmp4 = closure_8();
      if (cResult[0] === guildId) {
        if (cResult[1] === markAsDismissed) {
          let tmp5 = cResult[2];
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
          const stringResult = obj2.string(tmp(1126).t["v+Jm6X"]);
          cResult[5] = stringResult;
          const tmp8 = stringResult;
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
          const obj3 = {
            style: title,
            accessibilityRole: "header",
            variant: "heading-lg/extrabold",
            color: "mobile-text-heading-primary",
            children: tmp8,
          };
          const tmp11 = closure_6(tmp(4892).Text, obj3);
          cResult[6] = tmp4.title;
          cResult[7] = tmp11;
        } else {
          class N {
            constructor() {
              return markAsDismissed(ContentDismissActionType.UNKNOWN);
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class N {
            constructor() {
              return markAsDismissed(ContentDismissActionType.UNKNOWN);
            }
          }
          const stringResult1 = obj4.string(tmp(1126).t.kUUFbG);
          cResult[8] = stringResult1;
          const tmp12 = stringResult1;
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
          const obj5 = {
            style: tmp4.description,
            accessibilityRole: "text",
            variant: "text-sm/medium",
            color: "text-default",
            children: tmp12,
          };
          const tmp15 = closure_6(tmp(4892).Text, obj5);
          cResult[9] = tmp4.description;
          cResult[10] = tmp15;
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
          const tmp19 = closure_6(markAsDismissed(5981), obj6);
          cResult[11] = tmp4.image;
          cResult[12] = tmp19;
          const tmp18 = markAsDismissed(5981);
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
          const stringResult2 = obj7.string(tmp(1126).t.OgQQbG);
          cResult[13] = stringResult2;
          const tmp20 = stringResult2;
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
          const tmp23 = closure_6(tmp(5601).Button, obj8);
          cResult[14] = tmp5;
          cResult[15] = tmp23;
        } else {
          class N {
            constructor() {
              return markAsDismissed(ContentDismissActionType.UNKNOWN);
            }
          }
        }
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
          const stringResult3 = obj9.string(tmp(1126).t.WAI6xu);
          cResult[18] = stringResult3;
          const tmp25 = stringResult3;
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
          const tmp28 = closure_6(tmp(5601).Button, obj10);
          cResult[19] = P;
          cResult[20] = tmp28;
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
          const obj11 = { style: container, children: null };
          const items = [tmp10, tmp14, tmp16, tmp22, tmp29];
          obj11.children = items;
          const tmp36 = closure_7(View, obj11);
          cResult[24] = tmp4.container;
          cResult[25] = tmp16;
          cResult[26] = tmp22;
          cResult[27] = tmp29;
          cResult[28] = tmp10;
          cResult[29] = tmp14;
          cResult[30] = tmp36;
        }
        const obj12 = { style: tmp4.dismissButton, children: tmp27 };
        const tmp32 = closure_6(View, obj12);
        cResult[21] = tmp4.dismissButton;
        cResult[22] = tmp27;
        cResult[23] = tmp32;
      }
      const fn = function h() {
        markAsDismissed(ContentDismissActionType.UNKNOWN);
        GuildSettingsActionCreatorsDefault.open(guildId, GuildSettingsSections.ROLE_SUBSCRIPTIONS);
      };
      cResult[0] = guildId;
      cResult[1] = markAsDismissed;
      cResult[2] = fn;
      tmp5 = fn;
      const obj = guildId(576);
    }
  : (arg0) => {
      ({ guildId: require, markAsDismissed: importDefault } = arg0);
      const tmp = closure_8();
      const obj = {
        startExpanded: true,
        onDismiss() {
          return importDefault(ContentDismissActionType.UNKNOWN);
        },
        children: null,
      };
      const obj2 = { style: tmp.container, children: null };
      const obj3 = {
        style: tmp.title,
        accessibilityRole: "header",
        variant: "heading-lg/extrabold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl = util.intl;
      obj3.children = intl.string(util.t["v+Jm6X"]);
      const items = [closure_6(Text_Text.Text, obj3), , , ,];
      const obj4 = {
        style: tmp.description,
        accessibilityRole: "text",
        variant: "text-sm/medium",
        color: "text-default",
        children: null,
      };
      const intl2 = util.intl;
      obj4.children = intl2.string(util.t.kUUFbG);
      items[1] = closure_6(Text_Text.Text, obj4);
      const obj5 = { style: tmp.image, resizeMode: "contain", source: _modDef16217 };
      items[2] = closure_6(FastImageDefault, obj5);
      const obj6 = {
        onPress() {
          closure_1_1(ContentDismissActionType.UNKNOWN);
          GuildSettingsActionCreatorsDefault.open(require, GuildSettingsSections.ROLE_SUBSCRIPTIONS);
        },
        text: null,
      };
      const intl3 = util.intl;
      obj6.text = intl3.string(util.t.OgQQbG);
      items[3] = closure_6(components_Button_Button.Button, obj6);
      const obj7 = { style: tmp.dismissButton, children: null };
      const obj8 = {
        onPress() {
          return importDefault(ContentDismissActionType.UNKNOWN);
        },
        text: null,
        variant: "secondary",
      };
      const intl4 = util.intl;
      obj8.text = intl4.string(util.t.WAI6xu);
      obj7.children = closure_6(components_Button_Button.Button, obj8);
      items[4] = closure_6(View, obj7);
      obj2.children = items;
      obj.children = closure_7(View, obj2);
      return closure_6(Sheet_BottomSheet.BottomSheet, obj);
    };
