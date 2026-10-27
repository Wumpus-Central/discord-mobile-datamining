// discord_app/modules/app_launcher/native/base_components/AppLauncherSelectOptionFormRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_2 = ["option", "selected", "selectedItemName", "unselectedSubLabel", "autoFocus"];
const jsx = fn(21).jsx;
const createStyles = fn(4972);
let obj2 = {
  formRow: {
    flexDirection: "row",
    backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT,
    borderRadius: nativeDefault.radii.lg,
    alignItems: "center",
    flex: 1,
  },
};
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
  alignItems: "center",
  flex: 1,
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/base_components/AppLauncherSelectOptionFormRow.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AppLauncherSelectOptionFormRow(unselectedSubLabel) {
      const cResult = require("c").c(21);
      if (cResult[0] !== unselectedSubLabel) {
        ({ option, selected, selectedItemName } = unselectedSubLabel);
        _require = selectedItemName;
        unselectedSubLabel = unselectedSubLabel.unselectedSubLabel;
        dependencyMap = unselectedSubLabel;
        const autoFocus = unselectedSubLabel.autoFocus;
        const tmp12 = _objectWithoutProperties(unselectedSubLabel, closure_2);
        cResult[0] = unselectedSubLabel;
        cResult[1] = autoFocus;
        cResult[2] = option;
        cResult[3] = tmp12;
        cResult[4] = selected;
        cResult[5] = selectedItemName;
        cResult[6] = unselectedSubLabel;
        let tmp7 = selected;
        let tmp6 = tmp12;
        let tmp5 = option;
        let tmp4 = autoFocus;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
        _require = cResult[5];
        dependencyMap = cResult[6];
      }
      const tmp13 = closure_5();
      const obj = require("c");
      const animationDelayedAutoFocus = require("useAnimationDelayedAutoFocus").useAnimationDelayedAutoFocus(
        tmp4,
        tmp6.onPress,
      );
      let str = "text-md/medium";
      if (tmp7) {
        str = "text-sm/medium";
      }
      let str2 = "text-default";
      if (tmp7) {
        str2 = "interactive-text-default";
      }
      if (cResult[7] === tmp5.displayName) {
        if (cResult[8] === str) {
          if (cResult[9] === str2) {
            let tmp15 = cResult[10];
          }
          if (cResult[11] === tmp7) {
            if (cResult[12] === selectedItemName) {
              if (cResult[13] === tmp9) {
                const _Symbol = Symbol;
                if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp22 = jsx(tmp(6914).TableRowArrow, {});
                  cResult[15] = tmp22;
                  let tmp20 = tmp22;
                } else {
                  tmp20 = cResult[15];
                }
                if (cResult[16] === tmp6) {
                  if (cResult[17] === tmp13.formRow) {
                    if (cResult[18] === tmp15) {
                      if (cResult[19] === tmp17) {
                        let tmp23 = cResult[20];
                      }
                      return tmp23;
                    }
                  }
                }
                const obj2 = {
                  start: true,
                  end: true,
                  style: tmp13.formRow,
                  label: tmp15,
                  subLabel: cResult[14],
                  trailing: tmp20,
                };
                const merged = Object.assign(tmp6);
                const tmp28 = jsx(tmp(8951).FormRow, {
                  start: true,
                  end: true,
                  style: tmp13.formRow,
                  label: tmp15,
                  subLabel: cResult[14],
                  trailing: tmp20,
                });
                cResult[16] = tmp6;
                cResult[17] = tmp13.formRow;
                cResult[18] = tmp15;
                cResult[19] = cResult[14];
                cResult[20] = tmp28;
                tmp23 = tmp28;
              }
            }
          }
          if (tmp7) {
            let fn = () =>
              jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children });
          } else {
            fn = null;
            if (null != tmp9) {
              fn = () =>
                jsx(Text_Text.Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  lineClamp: 1,
                  children: children2,
                });
            }
          }
          cResult[11] = tmp7;
          cResult[12] = selectedItemName;
          cResult[13] = tmp9;
          cResult[14] = fn;
        }
      }
      const tmp16 = jsx(require("Text/Text").Text, {
        variant: str,
        color: str2,
        lineClamp: 1,
        children: tmp5.displayName,
      });
      cResult[7] = tmp5.displayName;
      cResult[8] = str;
      cResult[9] = str2;
      cResult[10] = tmp16;
      tmp15 = tmp16;
      const obj3 = { variant: str, color: str2, lineClamp: 1, children: tmp5.displayName };
      const tmpResult = require("useAnimationDelayedAutoFocus");
    }
  : function AppLauncherSelectOptionFormRow(arg0) {
      ({ selected, selectedItemName: require, unselectedSubLabel } = arg0);
      ({ option, autoFocus } = arg0);
      const merged = Object.assign(
        arg0,
        Object.assign({ option: 0, selected: 0, selectedItemName: 0, unselectedSubLabel: 0, autoFocus: 0 }),
      );
      const tmp2 = closure_5();
      const animationDelayedAutoFocus = require("useAnimationDelayedAutoFocus").useAnimationDelayedAutoFocus(
        autoFocus,
        merged.onPress,
      );
      const obj2 = { start: true, end: true, style: tmp2.formRow, label: null, subLabel: null, trailing: null };
      let str = "text-md/medium";
      if (selected) {
        str = "text-sm/medium";
      }
      const obj3 = { variant: str, color: null, lineClamp: 1, children: null };
      let str2 = "text-default";
      if (selected) {
        str2 = "interactive-text-default";
      }
      obj3.color = str2;
      obj3.children = option.displayName;
      obj2.label = jsx(require("Text/Text").Text, { variant: str, color: null, lineClamp: 1, children: null });
      if (selected) {
        let fn = () =>
          jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children });
      } else {
        fn = null;
        if (null != unselectedSubLabel) {
          fn = () =>
            jsx(Text_Text.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              lineClamp: 1,
              children: unselectedSubLabel,
            });
        }
      }
      obj2.subLabel = fn;
      obj2.trailing = jsx(require("TableRowArrow").TableRowArrow, {});
      const merged1 = Object.assign(merged);
      return jsx(require("Form").FormRow, {
        start: true,
        end: true,
        style: tmp2.formRow,
        label: null,
        subLabel: null,
        trailing: null,
      });
    };
