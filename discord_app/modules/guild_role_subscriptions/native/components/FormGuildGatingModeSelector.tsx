// discord_app/modules/guild_role_subscriptions/native/components/FormGuildGatingModeSelector.tsx
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let closure_8 = createStyles.createStyles({
  container: { padding: 16 },
  space: { height: 8 },
  alertHeader: { paddingBottom: 16 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/FormGuildGatingModeSelector.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (isFullServerGating) => {
      const cResult = isFullServerGating(576).c(28);
      isFullServerGating = isFullServerGating.isFullServerGating;
      const onChange = isFullServerGating.onChange;
      const tmp4 = closure_8();
      dependencyMap = tmp4;
      let obj = isFullServerGating(576);
      const roleSubscriptionSettingsDisabled = isFullServerGating(17921).useRoleSubscriptionSettingsDisabled();
      if (cResult[0] !== onChange) {
        const fn = function l() {
          onChange(false);
        };
        cResult[0] = onChange;
        cResult[1] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === isFullServerGating) {
        if (cResult[3] === onChange) {
          if (cResult[4] === tmp4.alertHeader) {
            let tmp7 = cResult[5];
          }
          if (cResult[6] !== roleSubscriptionSettingsDisabled) {
            let obj3 = { disabled: roleSubscriptionSettingsDisabled };
            cResult[6] = roleSubscriptionSettingsDisabled;
            cResult[7] = obj3;
            let tmp8 = obj3;
          } else {
            tmp8 = cResult[7];
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            let intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t.rXqxhF);
            let intl2 = tmp(1126).intl;
            const stringResult1 = intl2.string(tmp(1126).t.yQiJne);
            cResult[8] = stringResult;
            cResult[9] = stringResult1;
            let tmp11 = stringResult1;
            let tmp10 = stringResult;
          } else {
            tmp10 = cResult[8];
            tmp11 = cResult[9];
          }
          if (cResult[10] === tmp6) {
            if (cResult[11] === roleSubscriptionSettingsDisabled) {
              if (cResult[12] === tmp14) {
                let tmp15 = cResult[13];
              }
              if (cResult[14] !== tmp4.space) {
                let obj4 = { style: tmp4.space };
                const tmp23 = closure_5(View, obj4);
                cResult[14] = tmp4.space;
                cResult[15] = tmp23;
                let tmp20 = tmp23;
              } else {
                tmp20 = cResult[15];
              }
              const _Symbol2 = Symbol;
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                let intl3 = tmp(1126).intl;
                const stringResult2 = intl3.string(tmp(1126).t.WzC9s6);
                const intl4 = tmp(1126).intl;
                const stringResult3 = intl4.string(tmp(1126).t.WmagiB);
                cResult[16] = stringResult2;
                cResult[17] = stringResult3;
                let tmp25 = stringResult3;
                let tmp24 = stringResult2;
              } else {
                tmp24 = cResult[16];
                tmp25 = cResult[17];
              }
              if (cResult[18] === tmp7) {
                if (cResult[19] === isFullServerGating) {
                  if (cResult[20] === roleSubscriptionSettingsDisabled) {
                    let tmp28 = cResult[21];
                  }
                  if (cResult[22] === tmp4.container) {
                    if (cResult[23] === tmp28) {
                      if (cResult[24] === tmp8) {
                        if (cResult[25] === tmp15) {
                          if (cResult[26] === tmp20) {
                            let tmp33 = cResult[27];
                          }
                          return tmp33;
                        }
                      }
                    }
                  }
                  let obj5 = {
                    style: tmp4.container,
                    accessibilityRole: "radiogroup",
                    accessibilityState: tmp8,
                    children: null,
                  };
                  let items = [tmp15, tmp20, tmp28];
                  obj5.children = items;
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
              const obj6 = {
                icon: onChange(17924),
                title: tmp24,
                description: tmp25,
                selected: isFullServerGating,
                onPress: tmp7,
                disabled: roleSubscriptionSettingsDisabled,
              };
              const tmp32 = closure_5(onChange(17923), obj6);
              cResult[18] = tmp7;
              cResult[19] = isFullServerGating;
              cResult[20] = roleSubscriptionSettingsDisabled;
              cResult[21] = tmp32;
              tmp28 = tmp32;
              const tmp31 = onChange(17923);
            }
          }
          const obj7 = {
            icon: onChange(11415),
            title: tmp10,
            description: tmp11,
            selected: !isFullServerGating,
            onPress: tmp6,
            disabled: roleSubscriptionSettingsDisabled,
          };
          const tmp19 = closure_5(onChange(17923), obj7);
          cResult[10] = tmp6;
          cResult[11] = roleSubscriptionSettingsDisabled;
          cResult[12] = !isFullServerGating;
          cResult[13] = tmp19;
          tmp15 = tmp19;
          const tmp18 = onChange(17923);
        }
      }
      const fn2 = function v() {
        if (!isFullServerGating) {
          const obj2 = { confirmText: null, children: null };
          const intl = util.intl;
          obj2.confirmText = intl.string(util.t["NX+WJN"]);
          const obj3 = { children: null };
          const obj4 = {
            style: alertHeader.alertHeader,
            variant: "heading-lg/bold",
            color: "mobile-text-heading-primary",
            children: null,
          };
          const intl2 = util.intl;
          obj4.children = intl2.string(util.t.dmVoOz);
          const items = [hasOwnProperty(Text_Text.Text, obj4)];
          const obj5 = { variant: "text-md/normal", children: null };
          const intl3 = util.intl;
          obj5.children = intl3.string(util.t.mtwzdD);
          items[1] = hasOwnProperty(Text_Text.Text, obj5);
          obj3.children = items;
          obj2.children = React5(timestampProducer, obj3);
          actions_AlertActionCreatorsDefault.show(obj2);
        }
        onChange(true);
      };
      cResult[2] = isFullServerGating;
      cResult[3] = onChange;
      cResult[4] = tmp4.alertHeader;
      cResult[5] = fn2;
      tmp7 = fn2;
      let obj2 = isFullServerGating(17921);
    }
  : (isFullServerGating) => {
      isFullServerGating = isFullServerGating.isFullServerGating;
      const onChange = isFullServerGating.onChange;
      const tmp = closure_8();
      dependencyMap = tmp;
      const roleSubscriptionSettingsDisabled = isFullServerGating(17921).useRoleSubscriptionSettingsDisabled();
      let items = [onChange];
      const items1 = [onChange, isFullServerGating, tmp];
      const callback = noop.useCallback(() => {
        onChange(false);
      }, items);
      let obj2 = {
        style: tmp.container,
        accessibilityRole: "radiogroup",
        accessibilityState: { disabled: roleSubscriptionSettingsDisabled },
        children: null,
      };
      const callback1 = noop.useCallback(() => {
        if (!isFullServerGating) {
          const obj2 = { confirmText: null, children: null };
          const intl = util.intl;
          obj2.confirmText = intl.string(util.t["NX+WJN"]);
          const obj3 = { children: null };
          const obj4 = {
            style: alertHeader.alertHeader,
            variant: "heading-lg/bold",
            color: "mobile-text-heading-primary",
            children: null,
          };
          const intl2 = util.intl;
          obj4.children = intl2.string(util.t.dmVoOz);
          const items = [hasOwnProperty(Text_Text.Text, obj4)];
          const obj5 = { variant: "text-md/normal", children: null };
          const intl3 = util.intl;
          obj5.children = intl3.string(util.t.mtwzdD);
          items[1] = hasOwnProperty(Text_Text.Text, obj5);
          obj3.children = items;
          obj2.children = React5(timestampProducer, obj3);
          actions_AlertActionCreatorsDefault.show(obj2);
        }
        onChange(true);
      }, items1);
      let obj3 = { icon: null, title: null, description: null, selected: null, onPress: null, disabled: null };
      let obj = isFullServerGating(17921);
      obj3.icon = onChange(11415);
      let intl = isFullServerGating(1126).intl;
      obj3.title = intl.string(isFullServerGating(1126).t.rXqxhF);
      let intl2 = isFullServerGating(1126).intl;
      obj3.description = intl2.string(isFullServerGating(1126).t.yQiJne);
      obj3.selected = !isFullServerGating;
      obj3.onPress = callback;
      obj3.disabled = roleSubscriptionSettingsDisabled;
      const items2 = [closure_5(onChange(17923), obj3), closure_5(View, { style: tmp.space })];
      let obj5 = { icon: null, title: null, description: null, selected: null, onPress: null, disabled: null };
      let obj4 = { style: tmp.space };
      const tmp5 = onChange(17923);
      obj5.icon = onChange(17924);
      let intl3 = isFullServerGating(1126).intl;
      obj5.title = intl3.string(isFullServerGating(1126).t.WzC9s6);
      const intl4 = isFullServerGating(1126).intl;
      obj5.description = intl4.string(isFullServerGating(1126).t.WmagiB);
      obj5.selected = isFullServerGating;
      obj5.onPress = callback1;
      obj5.disabled = roleSubscriptionSettingsDisabled;
      items2[2] = closure_5(onChange(17923), obj5);
      obj2.children = items2;
      return closure_7(View, obj2);
    };
