// discord_app/modules/application_widget/native/UserProfileApplicationWidgetBottomCollectionLayout.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import _mod8594 from "../../../../discord_common/js/packages/application-widget-renderer/src/index.tsx";
import UserProfileApplicationWidgetSkeletons from "../../user_profile/native/UserProfileApplicationWidgetSkeletons.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let size;
({ Image: c2, View: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { grid: obj2, item: obj3, itemImage: size, itemContent: obj4 };
obj2 = {
  flexDirection: "row",
  flexWrap: "wrap",
  rowGap: nativeDefault.space.PX_16,
  columnGap: nativeDefault.space.PX_16,
};
createStyles = createStyles.createStyles;
obj3 = { width: "47%", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
size = {
  width: 48,
  height: 48,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj4 = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
let closure_6 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let componentConfig;
      let items;
      let items1;
      let obj7;
      let resolveFieldValue;
      const obj = react2;
      const cResult = obj.c(26);
      ({ componentConfig, resolveFieldValue } = arg0);
      const tmp4 = closure_6();
      let image;
      if (componentConfig != null) {
        image = componentConfig.fields.image;
      }
      if (cResult[0] === resolveFieldValue) {
        let tmp6;
        if (cResult[1] === image) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === componentConfig) {
          let tmp8;
          if (cResult[4] === resolveFieldValue) {
            tmp8 = cResult[5];
          }
          if (cResult[6] === componentConfig) {
            let tmp10;
            let tmp14;
            if (cResult[7] === resolveFieldValue) {
              tmp10 = cResult[8];
            }
            if (cResult[9] === tmp6) {
              let tmp12;
              let tmp19;
              if (cResult[10] === tmp4.itemImage) {
                tmp12 = cResult[11];
              }
              if (cResult[12] === tmp8.status) {
                let tmp17;
                let tmp23;
                if (cResult[13] === tmp8.text) {
                  tmp17 = cResult[14];
                }
                if (cResult[15] === tmp10.status) {
                  let tmp21;
                  if (cResult[16] === tmp10.text) {
                    tmp21 = cResult[17];
                  }
                  if (cResult[18] === tmp4.itemContent) {
                    if (cResult[19] === tmp17) {
                      let tmp25;
                      if (cResult[20] === tmp21) {
                        tmp25 = cResult[21];
                      }
                      if (cResult[22] === tmp4.item) {
                        if (cResult[23] === tmp12) {
                          let tmp29;
                          if (cResult[24] === tmp25) {
                            tmp29 = cResult[25];
                          }
                          return tmp29;
                        }
                      }
                      const obj2 = { style: tmp4.item, children: items };
                      items = [tmp12, tmp25];
                      const tmp32 = hasOwnProperty(_false, obj2);
                      cResult[22] = tmp4.item;
                      cResult[23] = tmp12;
                      cResult[24] = tmp25;
                      cResult[25] = tmp32;
                      tmp29 = tmp32;
                    }
                  }
                  const obj3 = { style: tmp4.itemContent, children: items1 };
                  items1 = [tmp17, tmp21];
                  const tmp28 = hasOwnProperty(_false, obj3);
                  cResult[18] = tmp4.itemContent;
                  cResult[19] = tmp17;
                  cResult[20] = tmp21;
                  cResult[21] = tmp28;
                  tmp25 = tmp28;
                }
                if ("value" === tmp10.status) {
                  const obj4 = { variant: "text-xxs/medium", color: "text-subtle", lineClamp: 2, children: tmp10.text };
                  tmp23 = React3(Text_Text.Text, obj4);
                } else {
                  tmp23 = React3(UserProfileApplicationWidgetSkeletons.TextSkeleton, {
                    variant: "text-xxs/medium",
                    widthChars: 10,
                  });
                }
                cResult[15] = tmp10.status;
                cResult[16] = tmp10.text;
                cResult[17] = tmp23;
                tmp21 = tmp23;
              }
              if ("value" === tmp8.status) {
                const obj5 = { variant: "text-xs/medium", lineClamp: 2, children: tmp8.text };
                tmp19 = React3(Text_Text.Text, obj5);
              } else {
                tmp19 = React3(UserProfileApplicationWidgetSkeletons.TextSkeleton, {
                  variant: "text-xs/medium",
                  widthChars: 6,
                });
              }
              cResult[12] = tmp8.status;
              cResult[13] = tmp8.text;
              cResult[14] = tmp19;
              tmp17 = tmp19;
            }
            if (null != tmp6) {
              const obj6 = { source: obj7, style: tmp4.itemImage, resizeMode: "contain" };
              obj7 = { uri: tmp6.media.url };
              tmp14 = React3(React2, obj6);
            } else {
              const obj8 = { style: tmp4.itemImage };
              tmp14 = React3(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj8);
            }
            cResult[9] = tmp6;
            cResult[10] = tmp4.itemImage;
            cResult[11] = tmp14;
            tmp12 = tmp14;
          }
          const tmpResult = _mod8594;
          const singleStringOrSkeleton = tmpResult.resolveSingleStringOrSkeleton(
            componentConfig,
            "description",
            resolveFieldValue,
          );
          cResult[6] = componentConfig;
          cResult[7] = resolveFieldValue;
          cResult[8] = singleStringOrSkeleton;
          tmp10 = singleStringOrSkeleton;
        }
        const tmpResult2 = _mod8594;
        const singleStringOrSkeleton1 = tmpResult2.resolveSingleStringOrSkeleton(
          componentConfig,
          "name",
          resolveFieldValue,
        );
        cResult[3] = componentConfig;
        cResult[4] = resolveFieldValue;
        cResult[5] = singleStringOrSkeleton1;
        tmp8 = singleStringOrSkeleton1;
      }
      const items2 = [_mod8594.ResolvedValueType.MEDIA];
      const fieldValue = resolveFieldValue(image, items2);
      cResult[0] = resolveFieldValue;
      cResult[1] = image;
      cResult[2] = fieldValue;
      tmp6 = fieldValue;
    }
  : (arg0) => {
      let componentConfig;
      let items1;
      let items2;
      let obj5;
      let resolveFieldValue;
      let tmp11;
      let tmp12;
      let tmp12Result;
      let tmp12Result2;
      ({ componentConfig, resolveFieldValue } = arg0);
      const tmp = closure_6();
      let image;
      if (componentConfig != null) {
        image = componentConfig.fields.image;
      }
      const items = [_mod8594.ResolvedValueType.MEDIA];
      const fieldValue = resolveFieldValue(image, items);
      const obj = _mod8594;
      const singleStringOrSkeleton = obj.resolveSingleStringOrSkeleton(componentConfig, "name", resolveFieldValue);
      const obj2 = _mod8594;
      const singleStringOrSkeleton1 = obj2.resolveSingleStringOrSkeleton(
        componentConfig,
        "description",
        resolveFieldValue,
      );
      const obj3 = { style: tmp.item, children: items1 };
      if (null != fieldValue) {
        const obj4 = { source: obj5, style: tmp.itemImage, resizeMode: "contain" };
        obj5 = { uri: fieldValue.media.url };
        tmp11 = React3(React2, obj4);
        tmp12 = React3;
      } else {
        const obj6 = { style: tmp.itemImage };
        tmp11 = React3(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj6);
        tmp12 = React3;
      }
      items1 = [tmp11];
      const obj7 = { style: tmp.itemContent, children: items2 };
      if ("value" === singleStringOrSkeleton.status) {
        const obj8 = { variant: "text-xs/medium", lineClamp: 2, children: singleStringOrSkeleton.text };
        tmp12Result = tmp12(Text_Text.Text, obj8);
      } else {
        tmp12Result = tmp12(UserProfileApplicationWidgetSkeletons.TextSkeleton, {
          variant: "text-xs/medium",
          widthChars: 6,
        });
      }
      items2 = [tmp12Result];
      if ("value" === singleStringOrSkeleton1.status) {
        const obj9 = {
          variant: "text-xxs/medium",
          color: "text-subtle",
          lineClamp: 2,
          children: singleStringOrSkeleton1.text,
        };
        tmp12Result2 = tmp12(Text_Text.Text, obj9);
      } else {
        tmp12Result2 = tmp12(UserProfileApplicationWidgetSkeletons.TextSkeleton, {
          variant: "text-xxs/medium",
          widthChars: 10,
        });
      }
      items2[1] = tmp12Result2;
      items1[1] = hasOwnProperty(_false, obj7);
      return hasOwnProperty(_false, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let bottomConfig;
      let items;
      let resolveFieldValue;
      const obj = react2;
      const cResult = obj.c(18);
      ({ bottomConfig, resolveFieldValue } = arg0);
      const tmp2 = closure_6();
      if (cResult[0] === bottomConfig.components.item_1) {
        let tmp3;
        if (cResult[1] === resolveFieldValue) {
          tmp3 = cResult[2];
        }
        if (cResult[3] === bottomConfig.components.item_2) {
          let tmp5;
          if (cResult[4] === resolveFieldValue) {
            tmp5 = cResult[5];
          }
          if (cResult[6] === bottomConfig.components.item_3) {
            let tmp9;
            if (cResult[7] === resolveFieldValue) {
              tmp9 = cResult[8];
            }
            if (cResult[9] === bottomConfig.components.item_4) {
              let tmp13;
              if (cResult[10] === resolveFieldValue) {
                tmp13 = cResult[11];
              }
              if (cResult[12] === tmp2.grid) {
                if (cResult[13] === tmp3) {
                  if (cResult[14] === tmp5) {
                    if (cResult[15] === tmp9) {
                      let tmp17;
                      if (cResult[16] === tmp13) {
                        tmp17 = cResult[17];
                      }
                      return tmp17;
                    }
                  }
                }
              }
              const obj2 = { style: tmp2.grid, children: items };
              items = [tmp3, tmp5, tmp9, tmp13];
              const tmp20 = hasOwnProperty(_false, obj2);
              cResult[12] = tmp2.grid;
              cResult[13] = tmp3;
              cResult[14] = tmp5;
              cResult[15] = tmp9;
              cResult[16] = tmp13;
              cResult[17] = tmp20;
              tmp17 = tmp20;
            }
            const obj3 = { componentConfig: bottomConfig.components.item_4, resolveFieldValue };
            const tmp16 = React3(closure_7, obj3);
            cResult[9] = bottomConfig.components.item_4;
            cResult[10] = resolveFieldValue;
            cResult[11] = tmp16;
            tmp13 = tmp16;
          }
          const obj4 = { componentConfig: bottomConfig.components.item_3, resolveFieldValue };
          const tmp12 = React3(closure_7, obj4);
          cResult[6] = bottomConfig.components.item_3;
          cResult[7] = resolveFieldValue;
          cResult[8] = tmp12;
          tmp9 = tmp12;
        }
        const obj5 = { componentConfig: bottomConfig.components.item_2, resolveFieldValue };
        const tmp8 = React3(closure_7, obj5);
        cResult[3] = bottomConfig.components.item_2;
        cResult[4] = resolveFieldValue;
        cResult[5] = tmp8;
        tmp5 = tmp8;
      }
      const obj6 = { componentConfig: bottomConfig.components.item_1, resolveFieldValue };
      const tmp4 = React3(closure_7, obj6);
      cResult[0] = bottomConfig.components.item_1;
      cResult[1] = resolveFieldValue;
      cResult[2] = tmp4;
      tmp3 = tmp4;
    }
  : (arg0) => {
      let bottomConfig;
      let items;
      let resolveFieldValue;
      ({ bottomConfig, resolveFieldValue } = arg0);
      const obj = { style: closure_6().grid, children: items };
      items = [, , ,];
      const obj2 = { componentConfig: bottomConfig.components.item_1, resolveFieldValue };
      items[0] = React3(closure_7, obj2);
      const obj3 = { componentConfig: bottomConfig.components.item_2, resolveFieldValue };
      items[1] = React3(closure_7, obj3);
      const obj4 = { componentConfig: bottomConfig.components.item_3, resolveFieldValue };
      items[2] = React3(closure_7, obj4);
      const obj5 = { componentConfig: bottomConfig.components.item_4, resolveFieldValue };
      items[3] = React3(closure_7, obj5);
      return hasOwnProperty(_false, obj);
    };
size = size_mod;
const result = size.fileFinishedImporting(
  "modules/application_widget/native/UserProfileApplicationWidgetBottomCollectionLayout.tsx",
);

export default tmp6;
