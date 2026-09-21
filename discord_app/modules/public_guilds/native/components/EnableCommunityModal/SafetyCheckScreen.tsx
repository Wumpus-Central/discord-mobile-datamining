// === Module 18100: SafetyCheckScreen ===

// Module 18100 (SafetyCheckScreen)
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9855 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9856 */;

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
  const ref = noop.useRef(null);
  const token = guild(first1[6]).useToken(verificationLevel(first1[7]).modules.mobile.TABLE_ROW_PADDING);
  let obj2 = guild(first1[6]);
  const enableCommunitySharedStyles = guild(first1[8]).useEnableCommunitySharedStyles();
  let obj3 = guild(first1[8]);
  const items = [GuildSettingsStore];
  guild = guild(first1[9]).useStateFromStoresObject(items, () => props.getProps()).guild;
  verificationLevel = undefined;
  let obj4 = guild(first1[9]);
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
  first1 = _slicedToArray(noop.useState(prop), 1)[0];
  let tmp20Result = null;
  if (null != guild) {
    const obj5 = { headerRef: ref, currentStep: tmp2(tmp3[11]).EnableCommunityModalSteps.STEP_1, disableNextStep: guild.explicitContentFilter !== constants2.ALL_MEMBERS || guild.verificationLevel === constants.NONE, children: null };
    const obj6 = { style: enableCommunitySharedStyles.content, children: null };
    const obj7 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: null };
    const intl = tmp2(tmp3[13]).intl;
    obj7.children = intl.formatToPlainString(tmp2(tmp3[13]).t.tInpJj, { number: 1, total: 3 });
    const items1 = [closure_10(tmp2(tmp3[12]).Text, obj7), , , ];
    const obj8 = { resizeMode: "contain", source: tmp7.safetyCheck };
    items1[1] = closure_10(closure_5, obj8);
    const obj9 = { style: enableCommunitySharedStyles.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl2 = tmp2(tmp3[13]).intl;
    obj9.children = intl2.string(tmp2(tmp3[13]).t.QrjLYl);
    items1[2] = closure_10(tmp2(tmp3[12]).Heading, obj9);
    const obj10 = { style: enableCommunitySharedStyles.description, variant: "text-md/medium", color: "text-subtle", children: null };
    const intl3 = tmp2(tmp3[13]).intl;
    obj10.children = intl3.string(tmp2(tmp3[13]).t.i1STwu);
    items1[3] = closure_10(tmp2(tmp3[12]).Text, obj10);
    obj6.children = items1;
    const items2 = [closure_11(closure_6, obj6), ];
    const obj11 = { spacing: 24, style: null, children: null };
    const obj12 = { paddingHorizontal: token };
    obj11.style = obj12;
    const obj13 = { helperText: null, hasIcons: false, children: null };
    const intl4 = tmp2(tmp3[13]).intl;
    obj13.helperText = intl4.string(tmp2(tmp3[13]).t.fHiGA0);
    const obj14 = { formSwitchDisabled: verificationLevel !== tmp16, children: null };
    const obj15 = { label: null, value: null, disabled: null, onValueChange: null };
    const intl5 = tmp2(tmp3[13]).intl;
    obj15.label = intl5.string(tmp2(tmp3[13]).t["rkA56+"]);
    obj15.value = guild.verificationLevel !== constants.NONE;
    obj15.disabled = verificationLevel !== tmp16;
    obj15.onValueChange = function onValueChange(arg0) {
      if (null != guild) {
        if (arg0) {
          if (tmp.verificationLevel < constants.LOW) {
            const obj2 = { verificationLevel: tmp2.LOW };
            GuildSettingsActionCreatorsDefault.updateGuild(obj2);
          }
        }
        if (!arg0) {
          const obj4 = { verificationLevel };
          GuildSettingsActionCreatorsDefault.updateGuild(obj4);
        }
      }
    };
    obj14.children = closure_10(tmp2(tmp3[17]).TableSwitchRow, obj15);
    obj13.children = closure_10(tmp4(tmp3[16]), obj14);
    const items3 = [closure_10(tmp2(tmp3[15]).TableRowGroup, obj13), ];
    const obj16 = { helperText: null, hasIcons: false, children: null };
    const intl6 = tmp2(tmp3[13]).intl;
    obj16.helperText = intl6.string(tmp2(tmp3[13]).t.b0MaDV);
    const obj17 = { formSwitchDisabled: first1 === tmp18, children: null };
    const tmp21 = guild.explicitContentFilter !== constants2.ALL_MEMBERS || guild.verificationLevel === constants.NONE;
    const tmp4Result = tmp4(tmp3[16]);
    const obj18 = { label: null, value: null, disabled: null, onValueChange: null };
    const intl7 = tmp2(tmp3[13]).intl;
    obj18.label = intl7.string(tmp2(tmp3[13]).t.zOuzl7);
    obj18.value = guild.explicitContentFilter === constants2.ALL_MEMBERS;
    obj18.disabled = first1 === tmp18;
    obj18.onValueChange = function onValueChange(arg0) {
      if (null != guild) {
        if (arg0) {
          if (tmp.explicitContentFilter < constants2.ALL_MEMBERS) {
            const obj2 = { explicitContentFilter: tmp2.ALL_MEMBERS };
            GuildSettingsActionCreatorsDefault.updateGuild(obj2);
          }
        }
        if (!arg0) {
          const obj4 = { explicitContentFilter: first1 };
          GuildSettingsActionCreatorsDefault.updateGuild(obj4);
        }
      }
    };
    obj17.children = closure_10(tmp2(tmp3[17]).TableSwitchRow, obj18);
    obj16.children = closure_10(tmp4(tmp3[16]), obj17);
    items3[1] = closure_10(tmp2(tmp3[15]).TableRowGroup, obj16);
    obj11.children = items3;
    items2[1] = closure_11(tmp2(tmp3[14]).Stack, obj11);
    obj5.children = items2;
    tmp20Result = closure_11(tmp2(tmp3[11]).EnableCommunityModalScreen, obj5);
    const tmp4Result2 = tmp4(tmp3[16]);
  }
  return tmp20Result;
};