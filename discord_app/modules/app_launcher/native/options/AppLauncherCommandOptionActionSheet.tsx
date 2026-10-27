// discord_app/modules/app_launcher/native/options/AppLauncherCommandOptionActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
let closure_3 = ["option", "children", "contentContainerStyles", "scrollable", "startExpanded"];
const View = fn(17).View;
const DEFAULT_CONTENT_PADDING = fn(1501).DEFAULT_CONTENT_PADDING;
const jsx = fn(21).jsx;
const createStyles = fn(4972);
let obj2 = {
  actionSheetBackground: { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND },
  contentContainer: { paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: DEFAULT_CONTENT_PADDING, flex: 1 },
};
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_KEYBOARD_PANEL_BACKGROUND };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/options/AppLauncherCommandOptionActionSheet.tsx",
);

export const AppLauncherCommandOptionActionSheet = ReactCompilerGating.isReactCompilerEnabled()
  ? function AppLauncherCommandOptionActionSheet(arg0) {
      const cResult = require("c").c(28);
      if (cResult[0] !== arg0) {
        ({ option, children, contentContainerStyles, scrollable, startExpanded } = arg0);
        const tmp12 = _objectWithoutProperties(arg0, closure_3);
        _require = tmp12;
        cResult[0] = arg0;
        cResult[1] = children;
        cResult[2] = contentContainerStyles;
        cResult[3] = option;
        cResult[4] = tmp12;
        cResult[5] = scrollable;
        cResult[6] = startExpanded;
        let tmp6 = option;
        let tmp5 = contentContainerStyles;
        let tmp4 = children;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        _require = cResult[4];
      }
      const tmp15 = closure_7();
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { alignSelf: "flex-start" };
        cResult[7] = obj2;
        let tmp16 = obj2;
      } else {
        tmp16 = cResult[7];
      }
      if (cResult[8] !== tmp7) {
        const obj3 = { style: tmp16, children: null };
        const obj4 = {
          onPress() {
            ActionSheetActionCreatorsDefault.hideActionSheet();
            onDismiss = onDismiss.onDismiss;
            if (onDismiss != null) {
              onDismiss();
            }
          },
        };
        obj3.children = jsx(tmp(7295).ActionSheetCloseButton, {
          onPress() {
            ActionSheetActionCreatorsDefault.hideActionSheet();
            onDismiss = onDismiss.onDismiss;
            if (onDismiss != null) {
              onDismiss();
            }
          },
        });
        const tmp20 = <View style={tmp16}>{null}</View>;
        cResult[8] = tmp7;
        cResult[9] = tmp20;
        let tmp17 = tmp20;
      } else {
        tmp17 = cResult[9];
      }
      if (cResult[10] === tmp6.displayDescription) {
        if (cResult[11] === tmp6.displayName) {
          if (cResult[12] === tmp17) {
            let tmp21 = cResult[13];
          }
          if (cResult[14] === tmp5) {
            if (cResult[15] === tmp15.contentContainer) {
              let tmp23 = cResult[16];
            }
            if (cResult[17] === tmp4) {
              if (cResult[18] === tmp23) {
                let tmp24 = cResult[19];
              }
              if (cResult[20] === tmp6.name) {
                if (cResult[21] === tmp7) {
                  if (cResult[22] === tmp13) {
                    if (cResult[23] === tmp14) {
                      if (cResult[24] === tmp15.actionSheetBackground) {
                        if (cResult[25] === tmp21) {
                          if (cResult[26] === tmp24) {
                            let tmp28 = cResult[27];
                          }
                          return tmp28;
                        }
                      }
                    }
                  }
                }
              }
              const obj5 = {};
              const merged = Object.assign(tmp7);
              obj5.backgroundStyles = tmp15.actionSheetBackground;
              obj5.scrollable = tmp13;
              obj5.startExpanded = tmp14;
              obj5.header = tmp21;
              obj5.children = tmp24;
              const tmp33 = jsx(tmp(5266).BottomSheet, {}, tmp6.name);
              cResult[20] = tmp6.name;
              cResult[21] = tmp7;
              cResult[22] = tmp13;
              cResult[23] = tmp14;
              cResult[24] = tmp15.actionSheetBackground;
              cResult[25] = tmp21;
              cResult[26] = tmp24;
              cResult[27] = tmp33;
              tmp28 = tmp33;
            }
            const obj6 = { style: tmp23, children: tmp4 };
            const tmp27 = <View style={tmp23}>{tmp4}</View>;
            cResult[17] = tmp4;
            cResult[18] = tmp23;
            cResult[19] = tmp27;
            tmp24 = tmp27;
          }
          const items = [tmp15.contentContainer, tmp5];
          cResult[14] = tmp5;
          cResult[15] = tmp15.contentContainer;
          cResult[16] = items;
          tmp23 = items;
        }
      }
      const tmp22 = jsx(require("BottomSheetTitleHeader").BottomSheetTitleHeader, {
        leading: tmp17,
        title: tmp6.displayName,
        subtitle: tmp6.displayDescription,
      });
      cResult[10] = tmp6.displayDescription;
      cResult[11] = tmp6.displayName;
      cResult[12] = tmp17;
      cResult[13] = tmp22;
      tmp21 = tmp22;
      const obj = require("c");
      const obj7 = { leading: tmp17, title: tmp6.displayName, subtitle: tmp6.displayDescription };
    }
  : function AppLauncherCommandOptionActionSheet(startExpanded) {
      ({ option, scrollable } = startExpanded);
      ({ children, contentContainerStyles } = startExpanded);
      if (scrollable === undefined) {
        scrollable = true;
      }
      let flag = startExpanded.startExpanded;
      if (flag === undefined) {
        flag = true;
      }
      const merged = Object.assign(
        startExpanded,
        Object.assign({ option: 0, children: 0, contentContainerStyles: 0, scrollable: 0, startExpanded: 0 }),
      );
      const tmp2 = closure_7();
      const obj = {};
      const merged1 = Object.assign(merged);
      obj.backgroundStyles = tmp2.actionSheetBackground;
      obj.scrollable = scrollable;
      obj.startExpanded = flag;
      const obj3 = { leading: null, title: null, subtitle: null };
      const obj4 = {
        style: { alignSelf: "flex-start" },
        children: jsx(merged(7295).ActionSheetCloseButton, {
          onPress() {
            ActionSheetActionCreatorsDefault.hideActionSheet();
            const onDismiss = merged.onDismiss;
            if (onDismiss != null) {
              onDismiss();
            }
          },
        }),
      };
      obj3.leading = (
        <View style={{ alignSelf: "flex-start" }}>
          {jsx(merged(7295).ActionSheetCloseButton, {
            onPress() {
              ActionSheetActionCreatorsDefault.hideActionSheet();
              const onDismiss = merged.onDismiss;
              if (onDismiss != null) {
                onDismiss();
              }
            },
          })}
        </View>
      );
      ({ displayName: obj2.title, displayDescription: obj2.subtitle } = option);
      obj.header = jsx(merged(7250).BottomSheetTitleHeader, { leading: null, title: null, subtitle: null });
      const obj9 = { style: null, children };
      const items = [tmp2.contentContainer, contentContainerStyles];
      obj9.style = items;
      obj.children = <View style={null}>{children}</View>;
      return jsx(merged(5266).BottomSheet, {}, option.name);
    };
