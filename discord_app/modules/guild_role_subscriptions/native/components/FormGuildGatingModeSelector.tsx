// === Module 17966: FormGuildGatingModeSelector ===

// Module 17966 (FormGuildGatingModeSelector)
import react_native from "react-native" /* 17 */;
import intl5 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5715 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, isFullServerGating;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { padding: 16 }, space: { height: 8 }, alertHeader: { paddingBottom: 16 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((isFullServerGating) => {
  let alertHeader;
  let items;
  let tmp6;
  let obj = isFullServerGating(576);
  const cResult = obj.c(28);
  isFullServerGating = isFullServerGating.isFullServerGating;
  const onChange = isFullServerGating.onChange;
  const tmp4 = closure_8();
  dependencyMap = tmp4;
  let obj2 = isFullServerGating(17967);
  const roleSubscriptionSettingsDisabled = obj2.useRoleSubscriptionSettingsDisabled();
  if (cResult[0] !== onChange) {
    const fn = function l() {
      onChange(false);
    };
    cResult[0] = onChange;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === isFullServerGating) {
    if (cResult[3] === onChange) {
      let tmp7;
      let tmp8;
      let tmp11;
      let tmp10;
      if (cResult[4] === tmp4.alertHeader) {
        tmp7 = cResult[5];
      }
      const container = tmp4.container;
      if (cResult[6] !== roleSubscriptionSettingsDisabled) {
        let obj3 = { disabled: roleSubscriptionSettingsDisabled };
        cResult[6] = roleSubscriptionSettingsDisabled;
        cResult[7] = obj3;
        tmp8 = obj3;
      } else {
        tmp8 = cResult[7];
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(1126).intl;
        const stringResult = intl.string(isFullServerGating(1126).t.rXqxhF);
        let intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(isFullServerGating(1126).t.yQiJne);
        cResult[8] = stringResult;
        cResult[9] = stringResult1;
        tmp11 = stringResult1;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[8];
        tmp11 = cResult[9];
      }
      if (cResult[10] === tmp6) {
        if (cResult[11] === roleSubscriptionSettingsDisabled) {
          let tmp15;
          let tmp20;
          let tmp25;
          let tmp24;
          if (cResult[12] === !isFullServerGating) {
            tmp15 = cResult[13];
          }
          if (cResult[14] !== tmp4.space) {
            let obj4 = { style: tmp4.space };
            const tmp23 = closure_5(View, obj4);
            cResult[14] = tmp4.space;
            cResult[15] = tmp23;
            tmp20 = tmp23;
          } else {
            tmp20 = cResult[15];
          }
          const _Symbol2 = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            let intl3 = tmp(1126).intl;
            const stringResult2 = intl3.string(isFullServerGating(1126).t.WzC9s6);
            const intl4 = tmp(1126).intl;
            const stringResult3 = intl4.string(isFullServerGating(1126).t.WmagiB);
            cResult[16] = stringResult2;
            cResult[17] = stringResult3;
            tmp25 = stringResult3;
            tmp24 = stringResult2;
          } else {
            tmp24 = cResult[16];
            tmp25 = cResult[17];
          }
          if (cResult[18] === tmp7) {
            if (cResult[19] === isFullServerGating) {
              let tmp28;
              if (cResult[20] === roleSubscriptionSettingsDisabled) {
                tmp28 = cResult[21];
              }
              if (cResult[22] === tmp4.container) {
                if (cResult[23] === tmp28) {
                  if (cResult[24] === tmp8) {
                    if (cResult[25] === tmp15) {
                      let tmp33;
                      if (cResult[26] === tmp20) {
                        tmp33 = cResult[27];
                      }
                      return tmp33;
                    }
                  }
                }
              }
              const obj5 = { style: container, accessibilityRole: "radiogroup", accessibilityState: tmp8, children: items };
              items = [tmp15, tmp20, tmp28];
              const tmp36 = closure_7(View, obj5);
              cResult[22] = tmp4.container;
              cResult[23] = tmp28;
              cResult[24] = tmp8;
              cResult[25] = tmp15;
              cResult[26] = tmp20;
              cResult[27] = tmp36;
              tmp33 = tmp36;
            }
          }
          const obj6 = { icon: onChange(17970), title: tmp24, description: tmp25, selected: isFullServerGating, onPress: tmp7, disabled: roleSubscriptionSettingsDisabled };
          const tmp31 = onChange(17969);
          const tmp32 = closure_5(tmp31, obj6);
          cResult[18] = tmp7;
          cResult[19] = isFullServerGating;
          cResult[20] = roleSubscriptionSettingsDisabled;
          cResult[21] = tmp32;
          tmp28 = tmp32;
        }
      }
      const obj7 = { icon: onChange(11428), title: tmp10, description: tmp11, selected: !isFullServerGating, onPress: tmp6, disabled: roleSubscriptionSettingsDisabled };
      const tmp18 = onChange(17969);
      const tmp19 = closure_5(tmp18, obj7);
      cResult[10] = tmp6;
      cResult[11] = roleSubscriptionSettingsDisabled;
      cResult[12] = !isFullServerGating;
      cResult[13] = tmp19;
      tmp15 = tmp19;
    }
  }
  const fn2 = function v() {
    let intl;
    let intl2;
    let intl3;
    let items;
    let obj2;
    if (!isFullServerGating) {
      const obj = { confirmText: intl.string(intl5.t["NX+WJN"]), children: metroImportDefault(metroRequire, obj2) };
      const show = actions_AlertActionCreatorsDefault.show;
      actions_AlertActionCreatorsDefault;
      intl = intl5.intl;
      obj2 = { children: items };
      const obj3 = { style: alertHeader.alertHeader, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: intl2.string(intl5.t.dmVoOz) };
      const Text = Text_Text.Text;
      intl2 = intl5.intl;
      items = [hasOwnProperty(Text, obj3), ];
      const obj4 = { variant: "text-md/normal", children: intl3.string(intl5.t.mtwzdD) };
      const Text2 = Text_Text.Text;
      intl3 = intl5.intl;
      items[1] = hasOwnProperty(Text2, obj4);
      show(obj);
    }
    onChange(true);
  };
  cResult[2] = isFullServerGating;
  cResult[3] = onChange;
  cResult[4] = tmp4.alertHeader;
  cResult[5] = fn2;
  tmp7 = fn2;
}) : ((isFullServerGating) => {
  let alertHeader;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items2;
  isFullServerGating = isFullServerGating.isFullServerGating;
  const onChange = isFullServerGating.onChange;
  const tmp = closure_8();
  dependencyMap = tmp;
  let obj = isFullServerGating(17967);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  let items = [onChange];
  const items1 = [onChange, isFullServerGating, tmp];
  const callback = react.useCallback(() => {
    onChange(false);
  }, items);
  let obj2 = { style: tmp.container, accessibilityRole: "radiogroup", accessibilityState: { disabled: roleSubscriptionSettingsDisabled }, children: items2 };
  const callback1 = react.useCallback(() => {
    let intl;
    let intl2;
    let intl3;
    let items;
    let obj2;
    if (!isFullServerGating) {
      const obj = { confirmText: intl.string(intl5.t["NX+WJN"]), children: metroImportDefault(metroRequire, obj2) };
      const show = actions_AlertActionCreatorsDefault.show;
      actions_AlertActionCreatorsDefault;
      intl = intl5.intl;
      obj2 = { children: items };
      const obj3 = { style: alertHeader.alertHeader, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: intl2.string(intl5.t.dmVoOz) };
      const Text = Text_Text.Text;
      intl2 = intl5.intl;
      items = [hasOwnProperty(Text, obj3), ];
      const obj4 = { variant: "text-md/normal", children: intl3.string(intl5.t.mtwzdD) };
      const Text2 = Text_Text.Text;
      intl3 = intl5.intl;
      items[1] = hasOwnProperty(Text2, obj4);
      show(obj);
    }
    onChange(true);
  }, items1);
  let obj3 = { icon: onChange(11428), title: intl.string(isFullServerGating(1126).t.rXqxhF), description: intl2.string(isFullServerGating(1126).t.yQiJne), selected: !isFullServerGating, onPress: callback, disabled: roleSubscriptionSettingsDisabled };
  const tmp5 = onChange(17969);
  intl = isFullServerGating(1126).intl;
  intl2 = isFullServerGating(1126).intl;
  items2 = [closure_5(tmp5, obj3), , ];
  let obj4 = { style: tmp.space };
  items2[1] = closure_5(View, obj4);
  const obj5 = { icon: onChange(17970), title: intl3.string(isFullServerGating(1126).t.WzC9s6), description: intl4.string(isFullServerGating(1126).t.WmagiB), selected: isFullServerGating, onPress: callback1, disabled: roleSubscriptionSettingsDisabled };
  const tmp6 = onChange(17969);
  intl3 = isFullServerGating(1126).intl;
  intl4 = isFullServerGating(1126).intl;
  items2[2] = closure_5(tmp6, obj5);
  return closure_7(View, obj2);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormGuildGatingModeSelector.tsx");

export default tmp3;