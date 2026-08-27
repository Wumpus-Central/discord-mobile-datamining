// === Module 17161: SafetyCheckScreen ===

// Module 17161 (SafetyCheckScreen)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "handleFormInit" /* 9650 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
({ Image: c5, View: closure_6 } = get_ActivityIndicator);
({ VerificationLevels: closure_8, GuildExplicitContentFilterTypes: c9 } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const result = require("set").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/SafetyCheckScreen.tsx");

export default function SafetyCheckScreen() {
  let obj = React;
  const ref = React.useRef(null);
  obj1 = guild(first1[6]);
  const token = obj1.useToken(first(first1[7]).modules.mobile.TABLE_ROW_PADDING);
  let obj2 = guild(first1[8]);
  const enableCommunitySharedStyles = obj2.useEnableCommunitySharedStyles();
  let obj3 = guild(first1[9]);
  const items = [closure_7];
  guild = obj3.useStateFromStoresObject(items, () => props.getProps()).guild;
  let verificationLevel;
  if (guild != null) {
    verificationLevel = guild.verificationLevel;
  }
  if (verificationLevel == null) {
    verificationLevel = constants.NONE;
  }
  first = callback(React.useState(verificationLevel), 1)[0];
  let prop;
  if (guild != null) {
    prop = guild.explicitContentFilter;
  }
  if (prop == null) {
    prop = constants2.ALL_MEMBERS;
  }
  first1 = callback(obj.useState(prop), 1)[0];
  let tmp20Result = null;
  if (null != guild) {
    obj = { headerRef: null, currentStep: null, disableNextStep: null, children: null };
    obj[0] = ref;
    obj[1] = tmp2(tmp3[11]).EnableCommunityModalSteps.STEP_1;
    obj[2] = guild.explicitContentFilter !== tmp17.ALL_MEMBERS || guild.verificationLevel === tmp15.NONE;
    obj = { style: null, children: null };
    obj[0] = enableCommunitySharedStyles.content;
    obj1 = { ref: null, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: null };
    obj1[0] = ref;
    const intl = tmp2(tmp3[13]).intl;
    obj1[4] = intl.formatToPlainString(tmp2(tmp3[13]).t.tInpJj, { number: 1, total: 3 });
    const items1 = [callback2(tmp2(tmp3[12]).Text, obj1), , , ];
    obj2 = { resizeMode: "contain", source: null };
    obj2[1] = tmp7.safetyCheck;
    items1[1] = callback2(closure_5, obj2);
    obj3 = { style: null, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    obj3[0] = enableCommunitySharedStyles.header;
    const intl2 = tmp2(tmp3[13]).intl;
    obj3[3] = intl2.string(tmp2(tmp3[13]).t.QrjLYl);
    items1[2] = callback2(tmp2(tmp3[12]).Heading, obj3);
    const obj4 = { style: null, variant: "text-md/medium", color: "text-subtle", children: null };
    obj4[0] = enableCommunitySharedStyles.description;
    const intl3 = tmp2(tmp3[13]).intl;
    obj4[3] = intl3.string(tmp2(tmp3[13]).t.i1STwu);
    items1[3] = callback2(tmp2(tmp3[12]).Text, obj4);
    obj[1] = items1;
    const items2 = [closure_11(closure_6, obj), ];
    const obj5 = { spacing: 24, style: null, children: null };
    const obj6 = { paddingHorizontal: null };
    obj6[0] = token;
    obj5[1] = obj6;
    const obj7 = { helperText: null, hasIcons: false, children: null };
    const intl4 = tmp2(tmp3[13]).intl;
    obj7[0] = intl4.string(tmp2(tmp3[13]).t.fHiGA0);
    const obj8 = { formSwitchDisabled: null, children: null };
    obj8[0] = first !== tmp16;
    let tmp4Result = tmp4(tmp3[16]);
    const obj9 = { label: null, value: null, disabled: null, onValueChange: null };
    const intl5 = tmp2(tmp3[13]).intl;
    obj9[0] = intl5.string(tmp2(tmp3[13]).t["rkA56+"]);
    obj9[1] = guild.verificationLevel !== tmp15.NONE;
    obj9[2] = first !== tmp16;
    obj9[3] = function onValueChange(arg0) {
      if (null != guild) {
        if (arg0) {
          if (tmp.verificationLevel < closure_1_8.LOW) {
            let obj = { verificationLevel: null };
            obj[0] = tmp2.LOW;
            first(first1[18]).updateGuild(obj);
            const obj3 = first(first1[18]);
          }
        }
        if (!arg0) {
          obj = first(first1[18]);
          obj = { verificationLevel: null };
          obj[0] = first;
          obj.updateGuild(obj);
        }
      }
    };
    obj8[1] = callback2(tmp2(tmp3[17]).TableSwitchRow, obj9);
    obj7[2] = callback2(tmp4Result, obj8);
    const items3 = [callback2(tmp2(tmp3[15]).TableRowGroup, obj7), ];
    const obj10 = { helperText: null, hasIcons: false, children: null };
    const intl6 = tmp2(tmp3[13]).intl;
    obj10[0] = intl6.string(tmp2(tmp3[13]).t.b0MaDV);
    const obj11 = { formSwitchDisabled: null, children: null };
    obj11[0] = first1 === tmp18;
    tmp4Result = tmp4(tmp3[16]);
    const obj12 = { label: null, value: null, disabled: null, onValueChange: null };
    const intl7 = tmp2(tmp3[13]).intl;
    obj12[0] = intl7.string(tmp2(tmp3[13]).t.zOuzl7);
    obj12[1] = guild.explicitContentFilter === tmp17.ALL_MEMBERS;
    obj12[2] = first1 === tmp18;
    obj12[3] = function onValueChange(arg0) {
      if (null != guild) {
        if (arg0) {
          if (tmp.explicitContentFilter < closure_1_9.ALL_MEMBERS) {
            let obj = { explicitContentFilter: null };
            obj[0] = tmp2.ALL_MEMBERS;
            first(first1[18]).updateGuild(obj);
            const obj3 = first(first1[18]);
          }
        }
        if (!arg0) {
          obj = first(first1[18]);
          obj = { explicitContentFilter: null };
          obj[0] = first1;
          obj.updateGuild(obj);
        }
      }
    };
    obj11[1] = callback2(tmp2(tmp3[17]).TableSwitchRow, obj12);
    obj10[2] = callback2(tmp4Result, obj11);
    items3[1] = callback2(tmp2(tmp3[15]).TableRowGroup, obj10);
    obj5[2] = items3;
    items2[1] = closure_11(tmp2(tmp3[14]).Stack, obj5);
    obj[3] = items2;
    tmp20Result = tmp20(tmp2(tmp3[11]).EnableCommunityModalScreen, obj);
    const tmp21 = guild.explicitContentFilter !== tmp17.ALL_MEMBERS || guild.verificationLevel === tmp15.NONE;
  }
  return tmp20Result;
};