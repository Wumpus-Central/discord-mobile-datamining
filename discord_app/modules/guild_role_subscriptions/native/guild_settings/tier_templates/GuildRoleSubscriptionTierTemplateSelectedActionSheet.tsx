// discord_app/modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateSelectedActionSheet.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 }, button: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
obj2.button = { borderRadius: nativeDefault.radii.xs };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { borderRadius: nativeDefault.radii.xs };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateSelectedActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildRoleSubscriptionTierTemplateSelectedActionSheet(markAsDismissed) {
      const cResult = markAsDismissed(576).c(23);
      markAsDismissed = markAsDismissed.markAsDismissed;
      const tmp4 = closure_7();
      const bottom = useSafeAreaInsetsDefault().bottom;
      if (cResult[0] !== markAsDismissed) {
        const fn = function u() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        };
        cResult[0] = markAsDismissed;
        cResult[1] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== bottom) {
        const obj2 = { paddingBottom: bottom };
        cResult[2] = bottom;
        cResult[3] = obj2;
        let tmp6 = obj2;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
        const intl = tmp(1126).intl;
        obj3.children = intl.string(tmp(1126).t.Y0PTc0);
        const tmp10 = closure_5(tmp(5086).Text, obj3);
        const tmp11 = closure_5(tmp(1200).Spacer, { size: 12 });
        cResult[4] = tmp10;
        cResult[5] = tmp11;
        let tmp8 = tmp11;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[4];
        tmp8 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { variant: "text-sm/normal", color: "text-default", children: null };
        const intl2 = tmp(1126).intl;
        obj4.children = intl2.string(tmp(1126).t["YSI/1/"]);
        const tmp15 = closure_5(tmp(5086).Text, obj4);
        const tmp16 = closure_5(tmp(1200).Spacer, { size: 48 });
        cResult[6] = tmp15;
        cResult[7] = tmp16;
        let tmp13 = tmp16;
        let tmp12 = tmp15;
      } else {
        tmp12 = cResult[6];
        tmp13 = cResult[7];
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult = intl3.string(tmp(1126).t.MhldXX);
        cResult[8] = stringResult;
        let tmp17 = stringResult;
      } else {
        tmp17 = cResult[8];
      }
      if (cResult[9] !== markAsDismissed) {
        class B {
          constructor() {
            return markAsDismissed(ContentDismissActionType.UNKNOWN);
          }
        }
        cResult[9] = markAsDismissed;
        cResult[10] = B;
      } else {
        class B {
          constructor() {
            return markAsDismissed(ContentDismissActionType.UNKNOWN);
          }
        }
      }
      if (cResult[11] === tmp4.button) {
        class B {
          constructor() {
            return markAsDismissed(ContentDismissActionType.UNKNOWN);
          }
        }
        if (cResult[14] === tmp20) {
          class B {
            constructor() {
              return markAsDismissed(ContentDismissActionType.UNKNOWN);
            }
          }
          if (cResult[17] === tmp4.container) {
            class B {
              constructor() {
                return markAsDismissed(ContentDismissActionType.UNKNOWN);
              }
            }
            if (cResult[20] === tmp5) {
              class B {
                constructor() {
                  return markAsDismissed(ContentDismissActionType.UNKNOWN);
                }
              }
              return tmp29;
            }
            const obj5 = { backdropOpacity: 0.8, onDismiss: tmp5, children: tmp25 };
            const tmp31 = closure_5(tmp(6829).BottomSheet, obj5);
            cResult[20] = tmp5;
            cResult[21] = tmp25;
            cResult[22] = tmp31;
            tmp29 = tmp31;
          }
          const obj6 = { style: tmp4.container, children: tmp22 };
          const tmp28 = closure_5(View, obj6);
          cResult[17] = tmp4.container;
          cResult[18] = tmp22;
          cResult[19] = tmp28;
        }
        const obj7 = { contentContainerStyle: tmp6, children: null };
        const items = [tmp7, tmp8, tmp12, tmp13, tmp20];
        obj7.children = items;
        const tmp24 = closure_6(tmp(6298).BottomSheetScrollView, obj7);
        cResult[14] = tmp20;
        cResult[15] = tmp6;
        cResult[16] = tmp24;
      }
      const tmp21 = closure_5(markAsDismissed(5376).BaseTextButton, {
        text: tmp17,
        pillStyle: tmp4.button,
        onPress: B,
        grow: true,
      });
      cResult[11] = tmp4.button;
      cResult[12] = B;
      cResult[13] = tmp21;
      const obj = markAsDismissed(576);
      const obj8 = { text: tmp17, pillStyle: tmp4.button, onPress: B, grow: true };
    }
  : function GuildRoleSubscriptionTierTemplateSelectedActionSheet(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      const tmp = closure_7();
      const obj = {
        backdropOpacity: 0.8,
        onDismiss() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        },
        children: null,
      };
      const obj2 = { style: tmp.container, children: null };
      const obj3 = { contentContainerStyle: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
      const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
      const intl = markAsDismissed(1126).intl;
      obj4.children = intl.string(markAsDismissed(1126).t.Y0PTc0);
      const items = [
        closure_5(markAsDismissed(5086).Text, obj4),
        closure_5(markAsDismissed(1200).Spacer, { size: 12 }),
        ,
        ,
      ];
      const obj5 = { variant: "text-sm/normal", color: "text-default", children: null };
      const intl2 = markAsDismissed(1126).intl;
      obj5.children = intl2.string(markAsDismissed(1126).t["YSI/1/"]);
      items[2] = closure_5(markAsDismissed(5086).Text, obj5);
      items[3] = closure_5(markAsDismissed(1200).Spacer, { size: 48 });
      const obj6 = { text: null, pillStyle: null, onPress: null, grow: true };
      const intl3 = markAsDismissed(1126).intl;
      obj6.text = intl3.string(markAsDismissed(1126).t.MhldXX);
      obj6.pillStyle = tmp.button;
      obj6.onPress = function onPress() {
        return markAsDismissed(ContentDismissActionType.UNKNOWN);
      };
      items[4] = closure_5(markAsDismissed(5376).BaseTextButton, obj6);
      obj3.children = items;
      obj2.children = closure_6(markAsDismissed(6298).BottomSheetScrollView, obj3);
      obj.children = closure_5(View, obj2);
      return closure_5(markAsDismissed(6829).BottomSheet, obj);
    };
