// discord_app/modules/guild_role_subscriptions/native/feature_education/GenericUpsellActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  image: { width: "100%" },
  content: { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 },
  description: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
obj2.description = { marginBottom: nativeDefault.space.PX_16, flex: 1 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { marginBottom: nativeDefault.space.PX_16, flex: 1 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/feature_education/GenericUpsellActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (markAsDismissed) => {
      const cResult = markAsDismissed(576).c(29);
      markAsDismissed = markAsDismissed.markAsDismissed;
      ({ imageSource, header, body, onCTAPress, cta } = markAsDismissed);
      const tmp4 = closure_7();
      const obj = markAsDismissed(576);
      const bottomSheetRef1 = markAsDismissed(7841).useBottomSheetRef();
      ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
      if (cResult[0] !== markAsDismissed) {
        const fn = function h() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        };
        cResult[0] = markAsDismissed;
        cResult[1] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === imageSource) {
        if (cResult[3] === tmp4.image) {
          let tmp7 = cResult[4];
        }
        if (cResult[5] !== bottomSheetClose) {
          const obj3 = { variant: "floating", onPress: bottomSheetClose };
          const tmp11 = closure_5(tmp(6649).ActionSheetHeaderBar, obj3);
          cResult[5] = bottomSheetClose;
          cResult[6] = tmp11;
          let tmp9 = tmp11;
        } else {
          tmp9 = cResult[6];
        }
        if (cResult[7] === tmp7) {
          if (cResult[8] === tmp9) {
            let tmp12 = cResult[9];
          }
          if (cResult[10] !== header) {
            const obj4 = {
              accessibilityRole: "header",
              variant: "heading-xl/medium",
              color: "mobile-text-heading-primary",
              children: header,
            };
            const tmp18 = closure_5(tmp(4886).Text, obj4);
            cResult[10] = header;
            cResult[11] = tmp18;
            let tmp16 = tmp18;
          } else {
            tmp16 = cResult[11];
          }
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp22 = closure_5(tmp(1188).Spacer, { size: 12 });
            cResult[12] = tmp22;
            let tmp20 = tmp22;
          } else {
            tmp20 = cResult[12];
          }
          if (cResult[13] === body) {
            if (cResult[14] === tmp4.description) {
              let tmp23 = cResult[15];
            }
            if (cResult[16] === cta) {
              if (cResult[17] === onCTAPress) {
                let tmp26 = cResult[18];
              }
              if (cResult[19] === tmp4.content) {
                if (cResult[20] === tmp16) {
                  if (cResult[21] === tmp23) {
                    if (cResult[22] === tmp26) {
                      let tmp29 = cResult[23];
                    }
                    if (cResult[24] === bottomSheetRef) {
                      if (cResult[25] === tmp6) {
                        if (cResult[26] === tmp12) {
                          if (cResult[27] === tmp29) {
                            let tmp33 = cResult[28];
                          }
                          return tmp33;
                        }
                      }
                    }
                    const obj5 = {
                      ref: bottomSheetRef,
                      startExpanded: true,
                      onDismiss: tmp6,
                      handleDisabled: true,
                      header: tmp12,
                      children: tmp29,
                    };
                    const tmp35 = closure_5(tmp(6645).BottomSheet, obj5);
                    cResult[24] = bottomSheetRef;
                    cResult[25] = tmp6;
                    cResult[26] = tmp12;
                    cResult[27] = tmp29;
                    cResult[28] = tmp35;
                    tmp33 = tmp35;
                  }
                }
              }
              const obj6 = { style: tmp4.content, children: null };
              const items = [tmp16, tmp20, tmp23, tmp26];
              obj6.children = items;
              const tmp32 = closure_6(View, obj6);
              cResult[19] = tmp4.content;
              cResult[20] = tmp16;
              cResult[21] = tmp23;
              cResult[22] = tmp26;
              cResult[23] = tmp32;
              tmp29 = tmp32;
            }
            const obj7 = { variant: "primary", grow: true, onPress: onCTAPress, text: cta };
            const tmp28 = closure_5(tmp(5594).Button, obj7);
            cResult[16] = cta;
            cResult[17] = onCTAPress;
            cResult[18] = tmp28;
            tmp26 = tmp28;
          }
          const obj8 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: body };
          const tmp25 = closure_5(tmp(4886).Text, obj8);
          cResult[13] = body;
          cResult[14] = tmp4.description;
          cResult[15] = tmp25;
          tmp23 = tmp25;
        }
        const obj9 = { children: null };
        const items1 = [tmp7, tmp9];
        obj9.children = items1;
        const tmp15 = closure_6(View, obj9);
        cResult[7] = tmp7;
        cResult[8] = tmp9;
        cResult[9] = tmp15;
        tmp12 = tmp15;
      }
      const tmp8 = closure_5(FastImageDefault, { source: imageSource, style: tmp4.image });
      cResult[2] = imageSource;
      cResult[3] = tmp4.image;
      cResult[4] = tmp8;
      tmp7 = tmp8;
      const obj10 = { source: imageSource, style: tmp4.image };
      const obj2 = markAsDismissed(7841);
    }
  : (markAsDismissed) => {
      markAsDismissed = markAsDismissed.markAsDismissed;
      ({ imageSource, header, body, onCTAPress, cta } = markAsDismissed);
      const tmp = closure_7();
      const bottomSheetRef1 = markAsDismissed(7841).useBottomSheetRef();
      ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
      const obj2 = {
        ref: bottomSheetRef,
        startExpanded: true,
        onDismiss() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        },
        handleDisabled: true,
        header: null,
        children: null,
      };
      const obj3 = { children: null };
      const items = [
        closure_5(FastImageDefault, { source: imageSource, style: tmp.image }),
        closure_5(markAsDismissed(6649).ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose }),
      ];
      obj3.children = items;
      obj2.header = closure_6(View, obj3);
      const obj5 = { style: tmp.content, children: null };
      const items1 = [
        closure_5(markAsDismissed(4886).Text, {
          accessibilityRole: "header",
          variant: "heading-xl/medium",
          color: "mobile-text-heading-primary",
          children: header,
        }),
        closure_5(markAsDismissed(1188).Spacer, { size: 12 }),
        closure_5(markAsDismissed(4886).Text, {
          style: tmp.description,
          variant: "text-sm/medium",
          color: "text-default",
          children: body,
        }),
        closure_5(markAsDismissed(5594).Button, { variant: "primary", grow: true, onPress: onCTAPress, text: cta }),
      ];
      obj5.children = items1;
      obj2.children = closure_6(View, obj5);
      return closure_5(markAsDismissed(6645).BottomSheet, obj2);
    };
