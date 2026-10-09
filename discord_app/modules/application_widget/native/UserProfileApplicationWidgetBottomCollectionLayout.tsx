// discord_app/modules/application_widget/native/UserProfileApplicationWidgetBottomCollectionLayout.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const Text_Text = Text(5087);
const resolvedValuesFromUserApplicationIdentityProfile = Text(13195);
const UserProfileApplicationWidgetSkeletons = Text(13283);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: nativeDefault.space.PX_16,
    columnGap: nativeDefault.space.PX_16,
  },
  item: null,
  itemImage: null,
  itemContent: null,
};
let obj3 = {
  flexDirection: "row",
  flexWrap: "wrap",
  rowGap: nativeDefault.space.PX_16,
  columnGap: nativeDefault.space.PX_16,
};
obj2.item = { width: "47%", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let size = {
  width: 48,
  height: 48,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.itemImage = size;
let obj4 = { width: "47%", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.itemContent = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
let closure_6 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function CollectionItem(arg0) {
      let Text = require;
      let status = dependencyMap;
      const cResult = c.c(26);
      ({ componentConfig, resolveFieldValue } = arg0);
      const tmp2 = closure_6();
      let image;
      if (componentConfig != null) {
        image = componentConfig.fields.image;
      }
      if (cResult[0] === resolveFieldValue) {
        if (cResult[1] === image) {
          let itemImage = cResult[2];
        }
        if (cResult[3] === componentConfig) {
          if (cResult[4] === resolveFieldValue) {
            text = cResult[5];
          }
          if (cResult[6] === componentConfig) {
            if (cResult[7] === resolveFieldValue) {
              let text2 = cResult[8];
            }
            if (cResult[9] === itemImage) {
              if (cResult[10] === tmp2.itemImage) {
                if (cResult[12] === text.status) {
                  if (cResult[13] === text.text) {
                    if (cResult[15] === text2.status) {
                      if (cResult[16] === text2.text) {
                        if (cResult[18] === tmp2.itemContent) {
                          if (cResult[19] === tmp13) {
                            if (cResult[20] === tmp18) {
                              let tmp23 = cResult[21];
                            }
                            if (cResult[22] === tmp2.item) {
                              if (cResult[23] === tmp7) {
                                if (cResult[24] === tmp23) {
                                  let tmp27 = cResult[25];
                                }
                                return tmp27;
                              }
                            }
                            const obj2 = { style: tmp2.item, children: null };
                            const items = [tmp7, tmp23];
                            obj2.children = items;
                            const tmp30 = hasOwnProperty(View, obj2);
                            cResult[22] = tmp2.item;
                            cResult[23] = tmp7;
                            cResult[24] = tmp23;
                            cResult[25] = tmp30;
                            tmp27 = tmp30;
                          }
                        }
                        const obj3 = { style: tmp2.itemContent, children: null };
                        const items1 = [tmp13, cResult[17]];
                        obj3.children = items1;
                        const tmp26 = hasOwnProperty(View, obj3);
                        cResult[18] = tmp2.itemContent;
                        cResult[19] = tmp13;
                        cResult[20] = cResult[17];
                        cResult[21] = tmp26;
                        tmp23 = tmp26;
                      }
                    }
                    if ("value" === text2.status) {
                      Text = Text_Text.Text;
                      const obj4 = {
                        variant: "text-xxs/medium",
                        color: "text-subtle",
                        lineClamp: 2,
                        children: text2.text,
                      };
                      let tmp20 = React4(Text, obj4);
                    } else {
                      tmp20 = React4(UserProfileApplicationWidgetSkeletons.TextSkeleton, {
                        variant: "text-xxs/medium",
                        widthChars: 10,
                      });
                    }
                    status = text2.status;
                    cResult[15] = status;
                    text2 = text2.text;
                    cResult[16] = text2;
                    cResult[17] = tmp20;
                  }
                }
                if ("value" === text.status) {
                  const obj5 = { variant: "text-xs/medium", lineClamp: 2, children: text.text };
                  let tmp15 = React4(Text_Text.Text, obj5);
                } else {
                  tmp15 = React4(UserProfileApplicationWidgetSkeletons.TextSkeleton, {
                    variant: "text-xs/medium",
                    widthChars: 6,
                  });
                }
                ({ status: tmp[12], text } = text);
                cResult[13] = text;
                cResult[14] = tmp15;
              }
            }
            if (null != itemImage) {
              const obj6 = { source: null, style: null, resizeMode: "contain" };
              const obj7 = { uri: itemImage.media.url };
              obj6.source = obj7;
              obj6.style = tmp2.itemImage;
              let tmp9 = React4(FastImageDefault, obj6);
            } else {
              const obj8 = { style: tmp2.itemImage };
              tmp9 = React4(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj8);
            }
            cResult[9] = itemImage;
            itemImage = tmp2.itemImage;
            cResult[10] = itemImage;
            cResult[11] = tmp9;
          }
          const singleStringOrSkeleton = resolvedValuesFromUserApplicationIdentityProfile.resolveSingleStringOrSkeleton(
            componentConfig,
            "description",
            resolveFieldValue,
          );
          cResult[6] = componentConfig;
          cResult[7] = resolveFieldValue;
          cResult[8] = singleStringOrSkeleton;
          text2 = singleStringOrSkeleton;
          const TextResult = resolvedValuesFromUserApplicationIdentityProfile;
        }
        const singleStringOrSkeleton1 = resolvedValuesFromUserApplicationIdentityProfile.resolveSingleStringOrSkeleton(
          componentConfig,
          "name",
          resolveFieldValue,
        );
        cResult[3] = componentConfig;
        cResult[4] = resolveFieldValue;
        cResult[5] = singleStringOrSkeleton1;
        text = singleStringOrSkeleton1;
        const TextResult1 = resolvedValuesFromUserApplicationIdentityProfile;
      }
      const items2 = [resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.MEDIA];
      const fieldValue = resolveFieldValue(image, items2);
      cResult[0] = resolveFieldValue;
      cResult[1] = image;
      cResult[2] = fieldValue;
      itemImage = fieldValue;
    }
  : function CollectionItem(arg0) {
      ({ componentConfig, resolveFieldValue } = arg0);
      const tmp = closure_6();
      let image;
      if (componentConfig != null) {
        image = componentConfig.fields.image;
      }
      const items = [resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.MEDIA];
      const fieldValue = resolveFieldValue(image, items);
      const singleStringOrSkeleton = resolvedValuesFromUserApplicationIdentityProfile.resolveSingleStringOrSkeleton(
        componentConfig,
        "name",
        resolveFieldValue,
      );
      const singleStringOrSkeleton1 = resolvedValuesFromUserApplicationIdentityProfile.resolveSingleStringOrSkeleton(
        componentConfig,
        "description",
        resolveFieldValue,
      );
      const obj3 = { style: tmp.item, children: null };
      if (null != fieldValue) {
        const obj4 = { source: null, style: null, resizeMode: "contain" };
        const obj5 = { uri: fieldValue.media.url };
        obj4.source = obj5;
        obj4.style = tmp.itemImage;
        let tmp11 = React4(FastImageDefault, obj4);
        let tmp12 = React4;
      } else {
        const obj6 = { style: tmp.itemImage };
        tmp11 = React4(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj6);
        tmp12 = React4;
      }
      const items1 = [tmp11];
      const obj7 = { style: tmp.itemContent, children: null };
      if ("value" === singleStringOrSkeleton.status) {
        const obj8 = { variant: "text-xs/medium", lineClamp: 2, children: singleStringOrSkeleton.text };
        let tmp12Result = tmp12(Text_Text.Text, obj8);
      } else {
        tmp12Result = tmp12(UserProfileApplicationWidgetSkeletons.TextSkeleton, {
          variant: "text-xs/medium",
          widthChars: 6,
        });
      }
      const items2 = [tmp12Result];
      if ("value" === singleStringOrSkeleton1.status) {
        const obj9 = {
          variant: "text-xxs/medium",
          color: "text-subtle",
          lineClamp: 2,
          children: singleStringOrSkeleton1.text,
        };
        let tmp12Result2 = tmp12(Text_Text.Text, obj9);
      } else {
        tmp12Result2 = tmp12(UserProfileApplicationWidgetSkeletons.TextSkeleton, {
          variant: "text-xxs/medium",
          widthChars: 10,
        });
      }
      items2[1] = tmp12Result2;
      obj7.children = items2;
      items1[1] = hasOwnProperty(View, obj7);
      obj3.children = items1;
      return hasOwnProperty(View, obj3);
    };
ReactCompilerGating = fn(558);
let obj5 = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/application_widget/native/UserProfileApplicationWidgetBottomCollectionLayout.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileApplicationWidgetBottomCollectionLayout(arg0) {
      const cResult = c.c(18);
      ({ bottomConfig, resolveFieldValue } = arg0);
      const tmp2 = closure_6();
      if (cResult[0] === bottomConfig.components.item_1) {
        if (cResult[1] === resolveFieldValue) {
          let tmp3 = cResult[2];
        }
        if (cResult[3] === bottomConfig.components.item_2) {
          if (cResult[4] === resolveFieldValue) {
            let tmp5 = cResult[5];
          }
          if (cResult[6] === bottomConfig.components.item_3) {
            if (cResult[7] === resolveFieldValue) {
              let tmp9 = cResult[8];
            }
            if (cResult[9] === bottomConfig.components.item_4) {
              if (cResult[10] === resolveFieldValue) {
                let tmp13 = cResult[11];
              }
              if (cResult[12] === tmp2.grid) {
                if (cResult[13] === tmp3) {
                  if (cResult[14] === tmp5) {
                    if (cResult[15] === tmp9) {
                      if (cResult[16] === tmp13) {
                        let tmp17 = cResult[17];
                      }
                      return tmp17;
                    }
                  }
                }
              }
              const obj2 = { style: tmp2.grid, children: null };
              const items = [tmp3, tmp5, tmp9, tmp13];
              obj2.children = items;
              const tmp20 = hasOwnProperty(View, obj2);
              cResult[12] = tmp2.grid;
              cResult[13] = tmp3;
              cResult[14] = tmp5;
              cResult[15] = tmp9;
              cResult[16] = tmp13;
              cResult[17] = tmp20;
              tmp17 = tmp20;
            }
            const obj3 = { componentConfig: bottomConfig.components.item_4, resolveFieldValue };
            const tmp16 = React4(closure_7, obj3);
            cResult[9] = bottomConfig.components.item_4;
            cResult[10] = resolveFieldValue;
            cResult[11] = tmp16;
            tmp13 = tmp16;
          }
          const obj4 = { componentConfig: bottomConfig.components.item_3, resolveFieldValue };
          const tmp12 = React4(closure_7, obj4);
          cResult[6] = bottomConfig.components.item_3;
          cResult[7] = resolveFieldValue;
          cResult[8] = tmp12;
          tmp9 = tmp12;
        }
        const obj5 = { componentConfig: bottomConfig.components.item_2, resolveFieldValue };
        const tmp8 = React4(closure_7, obj5);
        cResult[3] = bottomConfig.components.item_2;
        cResult[4] = resolveFieldValue;
        cResult[5] = tmp8;
        tmp5 = tmp8;
      }
      const tmp4 = React4(closure_7, { componentConfig: bottomConfig.components.item_1, resolveFieldValue });
      cResult[0] = bottomConfig.components.item_1;
      cResult[1] = resolveFieldValue;
      cResult[2] = tmp4;
      tmp3 = tmp4;
      const obj6 = { componentConfig: bottomConfig.components.item_1, resolveFieldValue };
    }
  : function UserProfileApplicationWidgetBottomCollectionLayout(arg0) {
      ({ bottomConfig, resolveFieldValue } = arg0);
      const obj = { style: closure_6().grid, children: null };
      const items = [
        React4(closure_7, { componentConfig: bottomConfig.components.item_1, resolveFieldValue }),
        React4(closure_7, { componentConfig: bottomConfig.components.item_2, resolveFieldValue }),
        React4(closure_7, { componentConfig: bottomConfig.components.item_3, resolveFieldValue }),
        React4(closure_7, { componentConfig: bottomConfig.components.item_4, resolveFieldValue }),
      ];
      obj.children = items;
      return hasOwnProperty(View, obj);
    };
