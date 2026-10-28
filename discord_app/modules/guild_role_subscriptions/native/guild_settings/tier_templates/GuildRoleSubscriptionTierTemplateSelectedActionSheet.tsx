// discord_app/modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateSelectedActionSheet.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(4853).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5004);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateSelectedActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildRoleSubscriptionTierTemplateSelectedActionSheet(markAsDismissed) {
      const cResult = markAsDismissed(576).c(20);
      markAsDismissed = markAsDismissed.markAsDismissed;
      const tmp4 = closure_7();
      const bottom = useSafeAreaInsetsDefault().bottom;
      if (cResult[0] !== markAsDismissed) {
        class S {
          constructor() {
            return markAsDismissed(ContentDismissActionType.UNKNOWN);
          }
        }
        cResult[0] = markAsDismissed;
        cResult[1] = S;
      } else {
        class S {
          constructor() {
            return markAsDismissed(ContentDismissActionType.UNKNOWN);
          }
        }
      }
      if (cResult[2] !== bottom) {
        class S {
          constructor() {
            return markAsDismissed(ContentDismissActionType.UNKNOWN);
          }
        }
        tmp7[0] = bottom;
        cResult[2] = bottom;
        cResult[3] = tmp7;
      } else {
        class S {
          constructor() {
            return markAsDismissed(ContentDismissActionType.UNKNOWN);
          }
        }
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return markAsDismissed(ContentDismissActionType.UNKNOWN);
          }
        }
        const obj2 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
        const intl = tmp(1125).intl;
        obj2.children = intl.string(tmp(1125).t.Y0PTc0);
        const tmp10 = closure_5(tmp(5270).Text, obj2);
        const tmp11 = closure_5(tmp(1199).Spacer, { size: 12 });
        cResult[4] = tmp10;
        cResult[5] = tmp11;
        let tmp9 = tmp11;
        const tmp8 = tmp10;
      } else {
        class S {
          constructor() {
            return markAsDismissed(ContentDismissActionType.UNKNOWN);
          }
        }
        tmp9 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return markAsDismissed(ContentDismissActionType.UNKNOWN);
          }
        }
        const obj3 = { variant: "text-sm/normal", color: "text-default", children: null };
        const intl2 = tmp(1125).intl;
        obj3.children = intl2.string(tmp(1125).t["YSI/1/"]);
        const tmp14 = closure_5(tmp(5270).Text, obj3);
        const tmp15 = closure_5(tmp(1199).Spacer, { size: 48 });
        cResult[6] = tmp14;
        cResult[7] = tmp15;
        let tmp13 = tmp15;
        const tmp12 = tmp14;
      } else {
        class S {
          constructor() {
            return markAsDismissed(ContentDismissActionType.UNKNOWN);
          }
        }
        tmp13 = cResult[7];
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return markAsDismissed(ContentDismissActionType.UNKNOWN);
          }
        }
        const stringResult = obj4.string(tmp(1125).t.MhldXX);
        cResult[8] = stringResult;
        const tmp16 = stringResult;
      } else {
        class S {
          constructor() {
            return markAsDismissed(ContentDismissActionType.UNKNOWN);
          }
        }
      }
      if (cResult[9] !== markAsDismissed) {
        class S {
          constructor() {
            return markAsDismissed(ContentDismissActionType.UNKNOWN);
          }
        }
        const obj5 = {
          text: tmp16,
          onPress() {
            return markAsDismissed(ContentDismissActionType.UNKNOWN);
          },
          grow: true,
        };
        const tmp19 = closure_5(tmp(5280).Button, obj5);
        cResult[9] = markAsDismissed;
        cResult[10] = tmp19;
      } else {
        class S {
          constructor() {
            return markAsDismissed(ContentDismissActionType.UNKNOWN);
          }
        }
      }
      if (cResult[11] === tmp7) {
        class S {
          constructor() {
            return markAsDismissed(ContentDismissActionType.UNKNOWN);
          }
        }
        if (cResult[14] === tmp4.container) {
          class S {
            constructor() {
              return markAsDismissed(ContentDismissActionType.UNKNOWN);
            }
          }
          if (cResult[17] === S) {
            class S {
              constructor() {
                return markAsDismissed(ContentDismissActionType.UNKNOWN);
              }
            }
            return tmp26;
          }
          const obj6 = { backdropOpacity: 0.8, onDismiss: S, children: tmp22 };
          const tmp28 = closure_5(tmp(5301).BottomSheet, obj6);
          cResult[17] = S;
          cResult[18] = tmp22;
          cResult[19] = tmp28;
          tmp26 = tmp28;
        }
        const obj7 = { style: tmp4.container, children: tmp20 };
        const tmp25 = closure_5(View, obj7);
        cResult[14] = tmp4.container;
        cResult[15] = tmp20;
        cResult[16] = tmp25;
      }
      const obj8 = { contentContainerStyle: tmp7, children: null };
      const items = [tmp8, tmp9, tmp12, tmp13, tmp18];
      obj8.children = items;
      const tmp21 = closure_6(markAsDismissed(5305).BottomSheetScrollView, obj8);
      cResult[11] = tmp7;
      cResult[12] = tmp18;
      cResult[13] = tmp21;
      const obj = markAsDismissed(576);
    }
  : function GuildRoleSubscriptionTierTemplateSelectedActionSheet(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      const obj = {
        backdropOpacity: 0.8,
        onDismiss() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        },
        children: null,
      };
      const obj2 = { style: closure_7().container, children: null };
      const obj3 = { contentContainerStyle: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
      const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
      const intl = markAsDismissed(1125).intl;
      obj4.children = intl.string(markAsDismissed(1125).t.Y0PTc0);
      const items = [
        closure_5(markAsDismissed(5270).Text, obj4),
        closure_5(markAsDismissed(1199).Spacer, { size: 12 }),
        ,
        ,
      ];
      const obj5 = { variant: "text-sm/normal", color: "text-default", children: null };
      const intl2 = markAsDismissed(1125).intl;
      obj5.children = intl2.string(markAsDismissed(1125).t["YSI/1/"]);
      items[2] = closure_5(markAsDismissed(5270).Text, obj5);
      items[3] = closure_5(markAsDismissed(1199).Spacer, { size: 48 });
      const obj6 = { text: null, onPress: null, grow: true };
      const intl3 = markAsDismissed(1125).intl;
      obj6.text = intl3.string(markAsDismissed(1125).t.MhldXX);
      obj6.onPress = function onPress() {
        return markAsDismissed(ContentDismissActionType.UNKNOWN);
      };
      items[4] = closure_5(markAsDismissed(5280).Button, obj6);
      obj3.children = items;
      obj2.children = closure_6(markAsDismissed(5305).BottomSheetScrollView, obj3);
      obj.children = closure_5(View, obj2);
      return closure_5(markAsDismissed(5301).BottomSheet, obj);
    };
