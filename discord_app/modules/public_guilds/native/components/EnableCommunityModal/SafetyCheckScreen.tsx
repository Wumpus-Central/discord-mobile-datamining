// === Module 17664: SafetyCheckScreen ===

// Module 17664 (SafetyCheckScreen)
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9063 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9064 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ VerificationLevels: closure_8, GuildExplicitContentFilterTypes: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/SafetyCheckScreen.tsx");

export default function SafetyCheckScreen() {
  let obj = noop;
  const ref = noop.useRef(null);
  let obj1 = guild(first1[6]);
  const token = obj1.useToken(verificationLevel(first1[7]).modules.mobile.TABLE_ROW_PADDING);
  let obj2 = guild(first1[8]);
  const enableCommunitySharedStyles = obj2.useEnableCommunitySharedStyles();
  let obj3 = guild(first1[9]);
  const items = [GuildSettingsStore];
  guild = obj3.useStateFromStoresObject(items, () => props.getProps()).guild;
  verificationLevel = undefined;
  if (guild != null) {
    verificationLevel = guild.verificationLevel;
  }
  if (verificationLevel == null) {
    verificationLevel = constants.NONE;
  }
  verificationLevel = _slicedToArray(noop.useState(verificationLevel), 1)[0];
  let prop;
  if (guild != null) {
    prop = guild.explicitContentFilter;
  }
  if (prop == null) {
    prop = constants2.ALL_MEMBERS;
  }
  first1 = _slicedToArray(obj.useState(prop), 1)[0];
  let tmp20Result = null;
  if (null != guild) {
    obj = { headerRef: ref, currentStep: tmp2(tmp3[11]).EnableCommunityModalSteps.STEP_1, disableNextStep: guild.explicitContentFilter !== tmp17.ALL_MEMBERS || guild.verificationLevel === tmp15.NONE, children: null };
    obj = { style: enableCommunitySharedStyles.content, children: null };
    obj1 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: null };
    const intl = tmp2(tmp3[13]).intl;
    obj1.children = intl.formatToPlainString(tmp2(tmp3[13]).t.tInpJj, { number: 1, total: 3 });
    const items1 = [closure_10(tmp2(tmp3[12]).Text, obj1), , , ];
    obj2 = { resizeMode: "contain", source: tmp7.safetyCheck };
    items1[1] = closure_10(closure_5, obj2);
    obj3 = { style: enableCommunitySharedStyles.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl2 = tmp2(tmp3[13]).intl;
    obj3.children = intl2.string(tmp2(tmp3[13]).t.QrjLYl);
    items1[2] = closure_10(tmp2(tmp3[12]).Heading, obj3);
    const obj4 = { style: enableCommunitySharedStyles.description, variant: "text-md/medium", color: "text-subtle", children: null };
    const intl3 = tmp2(tmp3[13]).intl;
    obj4.children = intl3.string(tmp2(tmp3[13]).t.i1STwu);
    items1[3] = closure_10(tmp2(tmp3[12]).Text, obj4);
    obj.children = items1;
    const items2 = [closure_11(closure_6, obj), ];
    const obj5 = { spacing: 24, style: null, children: null };
    const obj6 = { paddingHorizontal: token };
    obj5.style = obj6;
    const obj7 = { helperText: null, hasIcons: false, children: null };
    const intl4 = tmp2(tmp3[13]).intl;
    obj7.helperText = intl4.string(tmp2(tmp3[13]).t.fHiGA0);
    const obj8 = { formSwitchDisabled: verificationLevel !== tmp16, children: null };
    let tmp4Result = tmp4(tmp3[16]);
    const obj9 = { label: null, value: null, disabled: null, onValueChange: null };
    const intl5 = tmp2(tmp3[13]).intl;
    obj9.label = intl5.string(tmp2(tmp3[13]).t["rkA56+"]);
    obj9.value = guild.verificationLevel !== tmp15.NONE;
    obj9.disabled = verificationLevel !== tmp16;
    obj9.onValueChange = function onValueChange(arg0) {
      if (null != guild) {
        if (arg0) {
          if (tmp.verificationLevel < constants.LOW) {
            let obj = { verificationLevel: tmp2.LOW };
            GuildSettingsActionCreatorsDefault.updateGuild(obj);
          }
        }
        if (!arg0) {
          obj = { verificationLevel };
          obj.updateGuild(obj);
        }
      }
    };
    obj8.children = closure_10(tmp2(tmp3[17]).TableSwitchRow, obj9);
    obj7.children = closure_10(tmp4Result, obj8);
    const items3 = [closure_10(tmp2(tmp3[15]).TableRowGroup, obj7), ];
    const obj10 = { helperText: null, hasIcons: false, children: null };
    const intl6 = tmp2(tmp3[13]).intl;
    obj10.helperText = intl6.string(tmp2(tmp3[13]).t.b0MaDV);
    const obj11 = { formSwitchDisabled: first1 === tmp18, children: null };
    tmp4Result = tmp4(tmp3[16]);
    const obj12 = { label: null, value: null, disabled: null, onValueChange: null };
    const intl7 = tmp2(tmp3[13]).intl;
    obj12.label = intl7.string(tmp2(tmp3[13]).t.zOuzl7);
    obj12.value = guild.explicitContentFilter === tmp17.ALL_MEMBERS;
    obj12.disabled = first1 === tmp18;
    obj12.onValueChange = function onValueChange(arg0) {
      if (null != guild) {
        if (arg0) {
          if (tmp.explicitContentFilter < constants2.ALL_MEMBERS) {
            let obj = { explicitContentFilter: tmp2.ALL_MEMBERS };
            GuildSettingsActionCreatorsDefault.updateGuild(obj);
          }
        }
        if (!arg0) {
          obj = { explicitContentFilter: first1 };
          obj.updateGuild(obj);
        }
      }
    };
    obj11.children = closure_10(tmp2(tmp3[17]).TableSwitchRow, obj12);
    obj10.children = closure_10(tmp4Result, obj11);
    items3[1] = closure_10(tmp2(tmp3[15]).TableRowGroup, obj10);
    obj5.children = items3;
    items2[1] = closure_11(tmp2(tmp3[14]).Stack, obj5);
    obj.children = items2;
    tmp20Result = tmp20(tmp2(tmp3[11]).EnableCommunityModalScreen, obj);
    const tmp21 = guild.explicitContentFilter !== tmp17.ALL_MEMBERS || guild.verificationLevel === tmp15.NONE;
  }
  return tmp20Result;
};