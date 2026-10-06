// discord_app/modules/media_channel/native/MediaPostMultipleThumbnailActionSheet.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let BottomSheet, markAsDismissed;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  topContainer: obj3,
  setAsThumbnailContainer: obj4,
  contentContainer: { alignItems: "center", flex: 1 },
  title: { marginTop: 24 },
  description: { textAlign: "center" },
};
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
createStyles = createStyles.createStyles;
obj3 = {
  flex: 1,
  width: "100%",
  paddingVertical: 40,
  paddingHorizontal: 12,
  backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING,
  borderRadius: nativeDefault.radii.sm,
};
obj4 = {
  flex: 1,
  flexDirection: "row",
  padding: 12,
  width: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  borderRadius: nativeDefault.radii.sm,
  alignItems: "center",
  justifyContent: "space-between",
};
let closure_7 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (markAsDismissed) => {
      let intl;
      let items;
      let items1;
      let tmp5;
      let tmp6;
      const obj = markAsDismissed(576);
      const cResult = obj.c(37);
      markAsDismissed = markAsDismissed.markAsDismissed;
      const tmp4 = closure_7();
      const bottom = useSafeAreaInsetsDefault().bottom;
      if (cResult[0] !== markAsDismissed) {
        const fn = function h() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        };
        cResult[0] = markAsDismissed;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      const container = tmp4.container;
      if (cResult[2] !== bottom) {
        const obj2 = { paddingBottom: bottom };
        cResult[2] = bottom;
        cResult[3] = obj2;
        tmp6 = obj2;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] === tmp4.contentContainer) {
        let tmp7;
        let tmp10;
        let tmp9;
        let tmp14;
        if (cResult[5] === tmp6) {
          tmp7 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = {
            variant: "text-md/semibold",
            color: "mobile-text-heading-primary",
            children: intl.string(markAsDismissed(1126).t.ews2pj),
          };
          const Text = tmp(4892).Text;
          intl = tmp(1126).intl;
          const tmp12 = closure_5(Text, obj3);
          const tmp13 = closure_5(markAsDismissed(1188).Checkbox, { selected: true });
          cResult[7] = tmp12;
          cResult[8] = tmp13;
          tmp10 = tmp13;
          tmp9 = tmp12;
        } else {
          tmp9 = cResult[7];
          tmp10 = cResult[8];
        }
        if (cResult[9] !== tmp4.setAsThumbnailContainer) {
          const obj4 = { style: tmp4.setAsThumbnailContainer, children: items };
          items = [tmp9, tmp10];
          const tmp17 = closure_6(View, obj4);
          cResult[9] = tmp4.setAsThumbnailContainer;
          cResult[10] = tmp17;
          tmp14 = tmp17;
        } else {
          tmp14 = cResult[10];
        }
        if (cResult[11] === tmp4.topContainer) {
          let tmp18;
          let tmp22;
          let tmp24;
          let tmp27;
          let tmp30;
          let tmp32;
          let tmp35;
          let tmp38;
          let tmp40;
          if (cResult[12] === tmp14) {
            tmp18 = cResult[13];
          }
          const _Symbol2 = Symbol;
          const title = tmp4.title;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult = intl2.string(markAsDismissed(1126).t.WJisip);
            cResult[14] = stringResult;
            tmp22 = stringResult;
          } else {
            tmp22 = cResult[14];
          }
          if (cResult[15] !== tmp4.title) {
            const obj5 = {
              variant: "heading-lg/semibold",
              color: "mobile-text-heading-primary",
              style: title,
              children: tmp22,
            };
            const tmp26 = closure_5(markAsDismissed(4892).Text, obj5);
            cResult[15] = tmp4.title;
            cResult[16] = tmp26;
            tmp24 = tmp26;
          } else {
            tmp24 = cResult[16];
          }
          const _Symbol3 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp29 = closure_5(markAsDismissed(1188).Spacer, { size: 12 });
            cResult[17] = tmp29;
            tmp27 = tmp29;
          } else {
            tmp27 = cResult[17];
          }
          const _Symbol4 = Symbol;
          const description = tmp4.description;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1126).intl;
            const stringResult1 = intl3.string(markAsDismissed(1126).t.X6ZH6d);
            cResult[18] = stringResult1;
            tmp30 = stringResult1;
          } else {
            tmp30 = cResult[18];
          }
          if (cResult[19] !== tmp4.description) {
            const obj6 = { variant: "text-md/normal", color: "text-default", style: description, children: tmp30 };
            const tmp34 = closure_5(markAsDismissed(4892).Text, obj6);
            cResult[19] = tmp4.description;
            cResult[20] = tmp34;
            tmp32 = tmp34;
          } else {
            tmp32 = cResult[20];
          }
          const _Symbol5 = Symbol;
          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp37 = closure_5(markAsDismissed(1188).Spacer, { size: 48 });
            cResult[21] = tmp37;
            tmp35 = tmp37;
          } else {
            tmp35 = cResult[21];
          }
          const _Symbol6 = Symbol;
          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = tmp(1126).intl;
            const stringResult2 = intl4.string(markAsDismissed(1126).t["NX+WJN"]);
            cResult[22] = stringResult2;
            tmp38 = stringResult2;
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
            const tmp42 = closure_5(markAsDismissed(5601).Button, obj7);
            cResult[23] = markAsDismissed;
            cResult[24] = tmp42;
            tmp40 = tmp42;
          } else {
            tmp40 = cResult[24];
          }
          if (cResult[25] === tmp24) {
            if (cResult[26] === tmp32) {
              if (cResult[27] === tmp40) {
                if (cResult[28] === tmp7) {
                  let tmp43;
                  if (cResult[29] === tmp18) {
                    tmp43 = cResult[30];
                  }
                  if (cResult[31] === tmp4.container) {
                    let tmp46;
                    if (cResult[32] === tmp43) {
                      tmp46 = cResult[33];
                    }
                    if (cResult[34] === tmp5) {
                      let tmp50;
                      if (cResult[35] === tmp46) {
                        tmp50 = cResult[36];
                      }
                      return tmp50;
                    }
                    const obj8 = { backdropOpacity: 0.8, onDismiss: tmp5, children: tmp46 };
                    const tmp52 = closure_5(markAsDismissed(6652).BottomSheet, obj8);
                    cResult[34] = tmp5;
                    cResult[35] = tmp46;
                    cResult[36] = tmp52;
                    tmp50 = tmp52;
                  }
                  const obj9 = { style: container, children: tmp43 };
                  const tmp49 = closure_5(View, obj9);
                  cResult[31] = tmp4.container;
                  cResult[32] = tmp43;
                  cResult[33] = tmp49;
                  tmp46 = tmp49;
                }
              }
            }
          }
          const obj10 = { contentContainerStyle: tmp7, children: items1 };
          items1 = [tmp18, tmp24, tmp27, tmp32, tmp35, tmp40];
          const tmp45 = closure_6(markAsDismissed(6119).BottomSheetScrollView, obj10);
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
    }
  : (markAsDismissed) => {
      let BottomSheetScrollView;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let items1;
      let items2;
      let obj2;
      let obj3;
      let obj5;
      markAsDismissed = markAsDismissed.markAsDismissed;
      const tmp = closure_7();
      const bottom = useSafeAreaInsetsDefault().bottom;
      const obj = {
        backdropOpacity: 0.8,
        onDismiss() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        },
        children: closure_5(View, obj2),
      };
      obj2 = { style: tmp.container, children: closure_6(BottomSheetScrollView, obj3) };
      BottomSheet = markAsDismissed(6652).BottomSheet;
      obj3 = { contentContainerStyle: items, children: items2 };
      items = [tmp.contentContainer, { paddingBottom: bottom }];
      const obj4 = { style: tmp.topContainer, children: closure_6(View, obj5) };
      obj5 = { style: tmp.setAsThumbnailContainer, children: items1 };
      BottomSheetScrollView = markAsDismissed(6119).BottomSheetScrollView;
      const obj6 = {
        variant: "text-md/semibold",
        color: "mobile-text-heading-primary",
        children: intl.string(markAsDismissed(1126).t.ews2pj),
      };
      const Text = markAsDismissed(4892).Text;
      intl = markAsDismissed(1126).intl;
      items1 = [closure_5(Text, obj6), closure_5(markAsDismissed(1188).Checkbox, { selected: true })];
      items2 = [closure_5(View, obj4), , , , ,];
      const obj7 = {
        variant: "heading-lg/semibold",
        color: "mobile-text-heading-primary",
        style: tmp.title,
        children: intl2.string(markAsDismissed(1126).t.WJisip),
      };
      const Text2 = markAsDismissed(4892).Text;
      intl2 = markAsDismissed(1126).intl;
      items2[1] = closure_5(Text2, obj7);
      items2[2] = closure_5(markAsDismissed(1188).Spacer, { size: 12 });
      const obj8 = {
        variant: "text-md/normal",
        color: "text-default",
        style: tmp.description,
        children: intl3.string(markAsDismissed(1126).t.X6ZH6d),
      };
      const Text3 = markAsDismissed(4892).Text;
      intl3 = markAsDismissed(1126).intl;
      items2[3] = closure_5(Text3, obj8);
      items2[4] = closure_5(markAsDismissed(1188).Spacer, { size: 48 });
      const obj9 = {
        text: intl4.string(markAsDismissed(1126).t["NX+WJN"]),
        grow: true,
        onPress() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        },
      };
      const Button = markAsDismissed(5601).Button;
      intl4 = markAsDismissed(1126).intl;
      items2[5] = closure_5(Button, obj9);
      return closure_5(BottomSheet, obj);
    };
const result = size.fileFinishedImporting("modules/media_channel/native/MediaPostMultipleThumbnailActionSheet.tsx");

export default tmp5;
