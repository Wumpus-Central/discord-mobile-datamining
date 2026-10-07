// discord_app/modules/media_channel/native/MediaPostMultipleThumbnailActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 },
  topContainer: null,
  setAsThumbnailContainer: null,
  contentContainer: null,
  title: null,
  description: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
obj2.topContainer = {
  flex: 1,
  width: "100%",
  paddingVertical: 40,
  paddingHorizontal: 12,
  backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING,
  borderRadius: nativeDefault.radii.sm,
};
let obj4 = {
  flex: 1,
  width: "100%",
  paddingVertical: 40,
  paddingHorizontal: 12,
  backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING,
  borderRadius: nativeDefault.radii.sm,
};
obj2.setAsThumbnailContainer = {
  flex: 1,
  flexDirection: "row",
  padding: 12,
  width: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  borderRadius: nativeDefault.radii.sm,
  alignItems: "center",
  justifyContent: "space-between",
};
obj2.contentContainer = { alignItems: "center", flex: 1 };
obj2.title = { marginTop: 24 };
obj2.description = { textAlign: "center" };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = {
  flex: 1,
  flexDirection: "row",
  padding: 12,
  width: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  borderRadius: nativeDefault.radii.sm,
  alignItems: "center",
  justifyContent: "space-between",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_channel/native/MediaPostMultipleThumbnailActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (markAsDismissed) => {
      const cResult = markAsDismissed(576).c(37);
      markAsDismissed = markAsDismissed.markAsDismissed;
      const tmp4 = closure_7();
      const bottom = useSafeAreaInsetsDefault().bottom;
      if (cResult[0] !== markAsDismissed) {
        const fn = function h() {
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
      if (cResult[4] === tmp4.contentContainer) {
        if (cResult[5] === tmp6) {
          let tmp7 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
          const intl = tmp(1126).intl;
          obj3.children = intl.string(tmp(1126).t.ews2pj);
          const tmp12 = closure_5(tmp(4892).Text, obj3);
          const tmp13 = closure_5(tmp(1188).Checkbox, { selected: true });
          cResult[7] = tmp12;
          cResult[8] = tmp13;
          let tmp10 = tmp13;
          let tmp9 = tmp12;
        } else {
          tmp9 = cResult[7];
          tmp10 = cResult[8];
        }
        if (cResult[9] !== tmp4.setAsThumbnailContainer) {
          const obj4 = { style: tmp4.setAsThumbnailContainer, children: null };
          const items = [tmp9, tmp10];
          obj4.children = items;
          const tmp17 = closure_6(View, obj4);
          cResult[9] = tmp4.setAsThumbnailContainer;
          cResult[10] = tmp17;
          let tmp14 = tmp17;
        } else {
          tmp14 = cResult[10];
        }
        if (cResult[11] === tmp4.topContainer) {
          if (cResult[12] === tmp14) {
            let tmp18 = cResult[13];
          }
          const _Symbol2 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult = intl2.string(tmp(1126).t.WJisip);
            cResult[14] = stringResult;
            let tmp22 = stringResult;
          } else {
            tmp22 = cResult[14];
          }
          if (cResult[15] !== tmp4.title) {
            const obj5 = {
              variant: "heading-lg/semibold",
              color: "mobile-text-heading-primary",
              style: tmp4.title,
              children: tmp22,
            };
            const tmp26 = closure_5(tmp(4892).Text, obj5);
            cResult[15] = tmp4.title;
            cResult[16] = tmp26;
            let tmp24 = tmp26;
          } else {
            tmp24 = cResult[16];
          }
          const _Symbol3 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp29 = closure_5(tmp(1188).Spacer, { size: 12 });
            cResult[17] = tmp29;
            let tmp27 = tmp29;
          } else {
            tmp27 = cResult[17];
          }
          const _Symbol4 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1126).intl;
            const stringResult1 = intl3.string(tmp(1126).t.X6ZH6d);
            cResult[18] = stringResult1;
            let tmp30 = stringResult1;
          } else {
            tmp30 = cResult[18];
          }
          if (cResult[19] !== tmp4.description) {
            const obj6 = { variant: "text-md/normal", color: "text-default", style: tmp4.description, children: tmp30 };
            const tmp34 = closure_5(tmp(4892).Text, obj6);
            cResult[19] = tmp4.description;
            cResult[20] = tmp34;
            let tmp32 = tmp34;
          } else {
            tmp32 = cResult[20];
          }
          const _Symbol5 = Symbol;
          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp37 = closure_5(tmp(1188).Spacer, { size: 48 });
            cResult[21] = tmp37;
            let tmp35 = tmp37;
          } else {
            tmp35 = cResult[21];
          }
          const _Symbol6 = Symbol;
          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = tmp(1126).intl;
            const stringResult2 = intl4.string(tmp(1126).t["NX+WJN"]);
            cResult[22] = stringResult2;
            let tmp38 = stringResult2;
          } else {
            tmp38 = cResult[22];
          }
          if (cResult[23] !== markAsDismissed) {
            const obj7 = {
              text: tmp38,
              grow: true,
              onPress() {
                return markAsDismissed(ContentDismissActionType.UNKNOWN);
              },
            };
            const tmp42 = closure_5(tmp(5601).Button, obj7);
            cResult[23] = markAsDismissed;
            cResult[24] = tmp42;
            let tmp40 = tmp42;
          } else {
            tmp40 = cResult[24];
          }
          if (cResult[25] === tmp24) {
            if (cResult[26] === tmp32) {
              if (cResult[27] === tmp40) {
                if (cResult[28] === tmp7) {
                  if (cResult[29] === tmp18) {
                    let tmp43 = cResult[30];
                  }
                  if (cResult[31] === tmp4.container) {
                    if (cResult[32] === tmp43) {
                      let tmp46 = cResult[33];
                    }
                    if (cResult[34] === tmp5) {
                      if (cResult[35] === tmp46) {
                        let tmp50 = cResult[36];
                      }
                      return tmp50;
                    }
                    const obj8 = { backdropOpacity: 0.8, onDismiss: tmp5, children: tmp46 };
                    const tmp52 = closure_5(tmp(6652).BottomSheet, obj8);
                    cResult[34] = tmp5;
                    cResult[35] = tmp46;
                    cResult[36] = tmp52;
                    tmp50 = tmp52;
                  }
                  const obj9 = { style: tmp4.container, children: tmp43 };
                  const tmp49 = closure_5(View, obj9);
                  cResult[31] = tmp4.container;
                  cResult[32] = tmp43;
                  cResult[33] = tmp49;
                  tmp46 = tmp49;
                }
              }
            }
          }
          const obj10 = { contentContainerStyle: tmp7, children: null };
          const items1 = [tmp18, tmp24, tmp27, tmp32, tmp35, tmp40];
          obj10.children = items1;
          const tmp45 = closure_6(tmp(6119).BottomSheetScrollView, obj10);
          cResult[25] = tmp24;
          cResult[26] = tmp32;
          cResult[27] = tmp40;
          cResult[28] = tmp7;
          cResult[29] = tmp18;
          cResult[30] = tmp45;
          tmp43 = tmp45;
        }
        const obj11 = { style: tmp4.topContainer, children: tmp14 };
        const tmp21 = closure_5(View, obj11);
        cResult[11] = tmp4.topContainer;
        cResult[12] = tmp14;
        cResult[13] = tmp21;
        tmp18 = tmp21;
      }
      const items2 = [tmp4.contentContainer, tmp6];
      cResult[4] = tmp4.contentContainer;
      cResult[5] = tmp6;
      cResult[6] = items2;
      tmp7 = items2;
      const obj = markAsDismissed(576);
    }
  : (markAsDismissed) => {
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
      const obj3 = { contentContainerStyle: null, children: null };
      const items = [tmp.contentContainer, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
      obj3.contentContainerStyle = items;
      const obj4 = { style: tmp.topContainer, children: null };
      const obj5 = { style: tmp.setAsThumbnailContainer, children: null };
      const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl = markAsDismissed(1126).intl;
      obj6.children = intl.string(markAsDismissed(1126).t.ews2pj);
      const items1 = [
        closure_5(markAsDismissed(4892).Text, obj6),
        closure_5(markAsDismissed(1188).Checkbox, { selected: true }),
      ];
      obj5.children = items1;
      obj4.children = closure_6(View, obj5);
      const items2 = [closure_5(View, obj4), , , , ,];
      const obj7 = {
        variant: "heading-lg/semibold",
        color: "mobile-text-heading-primary",
        style: tmp.title,
        children: null,
      };
      const intl2 = markAsDismissed(1126).intl;
      obj7.children = intl2.string(markAsDismissed(1126).t.WJisip);
      items2[1] = closure_5(markAsDismissed(4892).Text, obj7);
      items2[2] = closure_5(markAsDismissed(1188).Spacer, { size: 12 });
      const obj8 = { variant: "text-md/normal", color: "text-default", style: tmp.description, children: null };
      const intl3 = markAsDismissed(1126).intl;
      obj8.children = intl3.string(markAsDismissed(1126).t.X6ZH6d);
      items2[3] = closure_5(markAsDismissed(4892).Text, obj8);
      items2[4] = closure_5(markAsDismissed(1188).Spacer, { size: 48 });
      const obj9 = { text: null, grow: true, onPress: null };
      const intl4 = markAsDismissed(1126).intl;
      obj9.text = intl4.string(markAsDismissed(1126).t["NX+WJN"]);
      obj9.onPress = function onPress() {
        return markAsDismissed(ContentDismissActionType.UNKNOWN);
      };
      items2[5] = closure_5(markAsDismissed(5601).Button, obj9);
      obj3.children = items2;
      obj2.children = closure_6(markAsDismissed(6119).BottomSheetScrollView, obj3);
      obj.children = closure_5(View, obj2);
      return closure_5(markAsDismissed(6652).BottomSheet, obj);
    };
