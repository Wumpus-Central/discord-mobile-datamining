// discord_app/modules/build_overrides/native/BuildOverrideModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import build_overrides_BuildOverrideUtils from "BuildOverrideUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import BuildOverrideStore from "../BuildOverrideStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  container: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    paddingHorizontal: 16,
  },
  content: { marginTop: 160, flex: 1, alignItems: "center" },
  imageWrapper: null,
  text: null,
  buildOverrideName: null,
  buildOverrideExpiration: null,
  buildOverrideInvalid: null,
  buttonWrapper: null,
  actionButton: null,
};
let size = {
  width: 100,
  height: 100,
  borderRadius: nativeDefault.radii.round,
  marginBottom: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  alignItems: "center",
  justifyContent: "center",
};
obj2.imageWrapper = size;
obj2.text = { lineHeight: 24, textAlign: "center" };
obj2.buildOverrideName = { marginTop: 8 };
obj2.buildOverrideExpiration = { lineHeight: 24 };
obj2.buildOverrideInvalid = { marginTop: 8 };
obj2.buttonWrapper = { alignSelf: "stretch" };
obj2.actionButton = { marginBottom: 8 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  flex: 1,
  height: "100%",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  paddingHorizontal: 16,
};
size = fn(2);
let result = size.fileFinishedImporting("modules/build_overrides/native/BuildOverrideModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (overrideUrl) => {
      let onPress = dependencyMap;
      const cResult = str(576).c(51);
      overrideUrl = overrideUrl.overrideUrl;
      str = "";
      if (undefined !== overrideUrl) {
        str = overrideUrl;
      }
      const tmp3 = closure_9();
      const obj = str(576);
      const tmp5 = stateFromStores(4797)();
      if (tmpResult.isThemeDark(tmp5)) {
        let tmp4Result = tmp4(13701);
      } else {
        tmp4Result = tmp4(13702);
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [BuildOverrideStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== str) {
        const fn = function x() {
          return BuildOverrideStore.getBuildOverride(str);
        };
        const items1 = [str];
        cResult[1] = str;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp10 = items1;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      tmpResult = str(4735);
      stateFromStores = str(504).useStateFromStores(first, tmp9, tmp10);
      const override = stateFromStores.override;
      if (override != null) {
        const targetBuildOverride = override.targetBuildOverride;
        if (targetBuildOverride != null) {
          const tmp11 = targetBuildOverride[tmp(undefined, 11412).DEVICE_FIELD];
          if (tmp11 != null) {
            let actionButton = tmp11.id;
          }
        }
      }
      let expiresAt;
      if (override != null) {
        expiresAt = override.expiresAt;
      }
      if (cResult[4] === expiresAt) {
        if (cResult[5] === actionButton) {
          if (cResult[6] === tmp4Result) {
            if (cResult[7] === tmp3.buildOverrideExpiration) {
              if (cResult[8] === tmp3.buildOverrideInvalid) {
                if (cResult[9] === tmp3.buildOverrideName) {
                  if (cResult[10] === tmp3.container) {
                    if (cResult[11] === tmp3.content) {
                      if (cResult[12] === tmp3.imageWrapper) {
                        if (cResult[13] === tmp3.text) {
                          let tmp13 = cResult[14];
                          let tmp14 = cResult[15];
                          let flag = cResult[16];
                          let tmp15 = cResult[17];
                          let tmp16 = cResult[18];
                          let tmp17 = cResult[19];
                          let tmp18 = cResult[20];
                          let tmp19 = cResult[21];
                          let flag2 = cResult[22];
                        }
                        if (cResult[31] === tmp13) {
                          if (cResult[32] === tmp16) {
                            if (cResult[33] === tmp17) {
                              if (cResult[34] === tmp18) {
                                if (cResult[35] === tmp19) {
                                  let tmp40 = cResult[36];
                                }
                                if (cResult[37] === stateFromStores.validatedURL) {
                                  if (cResult[38] === actionButton) {
                                    if (cResult[39] === tmp3.actionButton) {
                                      if (cResult[41] === tmp3.buttonWrapper) {
                                        if (cResult[42] === tmp43) {
                                          let tmp51 = cResult[43];
                                        }
                                        if (cResult[44] === tmp14) {
                                          if (cResult[45] === flag) {
                                            if (cResult[46] === tmp15) {
                                              if (cResult[47] === tmp40) {
                                                if (cResult[48] === tmp51) {
                                                  if (cResult[49] === flag2) {
                                                    let tmp55 = cResult[50];
                                                  }
                                                  return tmp55;
                                                }
                                              }
                                            }
                                          }
                                        }
                                        const rect = { top: flag2, bottom: flag, style: tmp15, children: null };
                                        const items2 = [tmp40, tmp51];
                                        rect.children = items2;
                                        const tmp57 = closure_8(tmp14, rect);
                                        cResult[44] = tmp14;
                                        cResult[45] = flag;
                                        cResult[46] = tmp15;
                                        cResult[47] = tmp40;
                                        cResult[48] = tmp51;
                                        cResult[49] = flag2;
                                        cResult[50] = tmp57;
                                        tmp55 = tmp57;
                                      }
                                      const obj2 = { style: tmp3.buttonWrapper, children: cResult[40] };
                                      const tmp54 = closure_6(closure_4, obj2);
                                      cResult[41] = tmp3.buttonWrapper;
                                      cResult[42] = cResult[40];
                                      cResult[43] = tmp54;
                                      tmp51 = tmp54;
                                    }
                                  }
                                }
                                if (null != actionButton) {
                                  const obj3 = { children: null };
                                  const obj4 = { style: tmp3.actionButton, children: null };
                                  const obj6 = { text: null, grow: true, onPress: null };
                                  const intl5 = tmp(1126).intl;
                                  obj6.text = intl5.string(tmp(1126).t.v0MBqF);
                                  obj6.onPress = function onPress() {
                                    str = stateFromStores.validatedURL;
                                    if (str == null) {
                                      str = "";
                                    }
                                    const result = build_overrides_BuildOverrideUtils.setBuildOverrideFromLink(str);
                                  };
                                  obj4.children = closure_6(tmp(5601).Button, obj6);
                                  const items3 = [closure_6(closure_4, obj4)];
                                  const obj7 = { text: null, variant: "secondary", grow: true, onPress: null };
                                  const intl6 = tmp(1126).intl;
                                  obj7.text = intl6.string(tmp(1126).t.b5KKph);
                                  onPress = function onPress() {
                                    return stateFromStores(5099).pop();
                                  };
                                  obj7.onPress = onPress;
                                  items3[1] = closure_6(tmp(5601).Button, obj7);
                                  obj3.children = items3;
                                  let tmp45 = closure_8(closure_7, obj3);
                                } else {
                                  const obj8 = { text: null, grow: true, onPress: null };
                                  const intl4 = tmp(1126).intl;
                                  obj8.text = intl4.string(tmp(1126).t.WRkdCQ);
                                  obj8.onPress = function onPress() {
                                    return stateFromStores(5099).pop();
                                  };
                                  tmp45 = closure_6(tmp(5601).Button, obj8);
                                }
                                stateFromStores = stateFromStores.validatedURL;
                                cResult[37] = stateFromStores;
                                cResult[38] = actionButton;
                                actionButton = tmp3.actionButton;
                                cResult[39] = actionButton;
                                cResult[40] = tmp45;
                              }
                            }
                          }
                        }
                        const obj9 = { style: tmp16, children: null };
                        const items4 = [tmp17, tmp18, tmp19];
                        obj9.children = items4;
                        const tmp42 = closure_8(tmp13, obj9);
                        cResult[31] = tmp13;
                        cResult[32] = tmp16;
                        cResult[33] = tmp17;
                        cResult[34] = tmp18;
                        cResult[35] = tmp19;
                        cResult[36] = tmp42;
                        tmp40 = tmp42;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const tmpResult2 = str(504);
      const tmp4Result2 = stateFromStores(4467);
      let expiresAt1;
      if (override != null) {
        expiresAt1 = override.expiresAt;
      }
      const obj5 = stateFromStores(4467)();
      const durationResult = tmp4Result2.duration(stateFromStores(4467)().diff(expiresAt1));
      const SafeAreaPaddingView = tmp(6626).SafeAreaPaddingView;
      const container = tmp3.container;
      const content = tmp3.content;
      if (cResult[23] !== tmp4Result) {
        const obj10 = { source: tmp4Result };
        const tmp26 = closure_6(closure_3, obj10);
        cResult[23] = tmp4Result;
        cResult[24] = tmp26;
        let tmp23 = tmp26;
      } else {
        tmp23 = cResult[24];
      }
      if (cResult[25] === tmp3.imageWrapper) {
        if (cResult[26] === tmp23) {
          let tmp27 = cResult[27];
        }
        const _Symbol = Symbol;
        if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t["6ILkNN"]);
          cResult[28] = stringResult;
          let tmp29 = stringResult;
        } else {
          tmp29 = cResult[28];
        }
        if (cResult[29] !== tmp3.text) {
          const obj11 = { style: tmp3.text, variant: "text-md/medium", children: tmp29 };
          const tmp33 = closure_6(tmp(4892).Text, obj11);
          cResult[29] = tmp3.text;
          cResult[30] = tmp33;
          let tmp31 = tmp33;
        } else {
          tmp31 = cResult[30];
        }
        if (null != actionButton) {
          const obj12 = { children: null };
          const obj13 = {
            style: tmp3.buildOverrideName,
            variant: "heading-xl/extrabold",
            color: "mobile-text-heading-primary",
            children: actionButton,
          };
          const items5 = [closure_6(tmp(4892).Text, obj13)];
          const obj14 = {
            style: tmp3.buildOverrideExpiration,
            variant: "text-md/medium",
            color: "text-default",
            children: null,
          };
          const intl3 = tmp(1126).intl;
          const obj15 = { expirationDuration: humanizeResult };
          obj14.children = intl3.format(tmp(1126).t.lOsPpu, obj15);
          items5[1] = closure_6(tmp(4892).Text, obj14);
          obj12.children = items5;
          let tmp35 = closure_8(closure_7, obj12);
        } else {
          const obj16 = {
            style: tmp3.buildOverrideInvalid,
            variant: "heading-xl/extrabold",
            color: "mobile-text-heading-primary",
            children: null,
          };
          const intl2 = tmp(1126).intl;
          obj16.children = intl2.string(tmp(1126).t["cz+sue"]);
          tmp35 = closure_6(tmp(4892).Text, obj16);
        }
        let expiresAt2;
        if (override != null) {
          expiresAt2 = override.expiresAt;
        }
        cResult[4] = expiresAt2;
        cResult[5] = actionButton;
        cResult[6] = tmp4Result;
        cResult[7] = tmp3.buildOverrideExpiration;
        cResult[8] = tmp3.buildOverrideInvalid;
        cResult[9] = tmp3.buildOverrideName;
        cResult[10] = tmp3.container;
        cResult[11] = tmp3.content;
        cResult[12] = tmp3.imageWrapper;
        cResult[13] = tmp3.text;
        cResult[14] = closure_4;
        cResult[15] = SafeAreaPaddingView;
        cResult[16] = true;
        cResult[17] = container;
        cResult[18] = content;
        cResult[19] = tmp27;
        cResult[20] = tmp31;
        cResult[21] = tmp35;
        cResult[22] = true;
        flag2 = true;
        tmp19 = tmp35;
        tmp18 = tmp31;
        tmp17 = tmp27;
        tmp16 = content;
        tmp15 = container;
        flag = true;
        tmp14 = SafeAreaPaddingView;
        tmp13 = closure_4;
      }
      const tmp28 = closure_6(closure_4, { style: tmp3.imageWrapper, children: tmp23 });
      cResult[25] = tmp3.imageWrapper;
      cResult[26] = tmp23;
      cResult[27] = tmp28;
      tmp27 = tmp28;
      humanizeResult = tmp4Result2.duration(stateFromStores(4467)().diff(expiresAt1)).humanize();
      const obj17 = { style: tmp3.imageWrapper, children: tmp23 };
    }
  : (overrideUrl) => {
      let str = overrideUrl.overrideUrl;
      if (str === undefined) {
        str = "";
      }
      let stateFromStores;
      const tmp = closure_9();
      const tmp4 = stateFromStores(4797)();
      if (obj.isThemeDark(tmp4)) {
        let tmp2Result = tmp2(13701);
      } else {
        tmp2Result = tmp2(13702);
      }
      obj = str(4735);
      const items = [BuildOverrideStore];
      const items1 = [str];
      stateFromStores = str(504).useStateFromStores(items, () => BuildOverrideStore.getBuildOverride(str), items1);
      const override = stateFromStores.override;
      let id;
      if (override != null) {
        const targetBuildOverride = override.targetBuildOverride;
        if (targetBuildOverride != null) {
          const tmp9 = targetBuildOverride[tmp5(undefined, 11412).DEVICE_FIELD];
          if (tmp9 != null) {
            id = tmp9.id;
          }
        }
      }
      const tmp5Result = str(504);
      const tmp2Result2 = stateFromStores(4467);
      let expiresAt;
      if (override != null) {
        expiresAt = override.expiresAt;
      }
      const obj4 = stateFromStores(4467)();
      const durationResult = tmp2Result2.duration(stateFromStores(4467)().diff(expiresAt));
      const rect = { top: true, bottom: true, style: tmp.container, children: null };
      const obj2 = { style: tmp.content, children: null };
      const humanizeResult = tmp2Result2.duration(stateFromStores(4467)().diff(expiresAt)).humanize();
      const items2 = [
        closure_6(closure_4, { style: tmp.imageWrapper, children: closure_6(closure_3, { source: tmp2Result }) }),
        ,
      ];
      const obj5 = { style: tmp.text, variant: "text-md/medium", children: null };
      const intl = tmp5(1126).intl;
      obj5.children = intl.string(str(1126).t["6ILkNN"]);
      items2[1] = closure_6(str(4892).Text, obj5);
      if (null != id) {
        const obj6 = { children: null };
        const obj7 = {
          style: tmp.buildOverrideName,
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: id,
        };
        const items3 = [closure_6(tmp5(4892).Text, obj7)];
        const obj8 = {
          style: tmp.buildOverrideExpiration,
          variant: "text-md/medium",
          color: "text-default",
          children: null,
        };
        const intl3 = tmp5(1126).intl;
        const obj9 = { expirationDuration: humanizeResult };
        obj8.children = intl3.format(tmp5(1126).t.lOsPpu, obj9);
        items3[1] = closure_6(tmp5(4892).Text, obj8);
        obj6.children = items3;
        let tmp14Result = closure_8(closure_7, obj6);
      } else {
        const obj10 = {
          style: tmp.buildOverrideInvalid,
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: null,
        };
        const intl2 = tmp5(1126).intl;
        obj10.children = intl2.string(tmp5(1126).t["cz+sue"]);
        tmp14Result = closure_6(tmp5(4892).Text, obj10);
      }
      items2[2] = tmp14Result;
      obj2.children = items2;
      const items4 = [closure_8(closure_4, obj2)];
      const obj11 = { style: tmp.buttonWrapper, children: null };
      if (null != id) {
        const obj12 = { children: null };
        const obj13 = { style: tmp.actionButton, children: null };
        const obj14 = { text: null, grow: true, onPress: null };
        const intl5 = tmp5(1126).intl;
        obj14.text = intl5.string(tmp5(1126).t.v0MBqF);
        obj14.onPress = function onPress() {
          str = stateFromStores.validatedURL;
          if (str == null) {
            str = "";
          }
          const result = build_overrides_BuildOverrideUtils.setBuildOverrideFromLink(str);
        };
        obj13.children = closure_6(tmp5(5601).Button, obj14);
        const items5 = [closure_6(closure_4, obj13)];
        const obj15 = { text: null, variant: "secondary", grow: true, onPress: null };
        const intl6 = tmp5(1126).intl;
        obj15.text = intl6.string(tmp5(1126).t.b5KKph);
        obj15.onPress = function onPress() {
          return stateFromStores(5099).pop();
        };
        items5[1] = closure_6(tmp5(5601).Button, obj15);
        obj12.children = items5;
        let tmp12Result2 = closure_8(closure_7, obj12);
      } else {
        const obj16 = { text: null, grow: true, onPress: null };
        const intl4 = tmp5(1126).intl;
        obj16.text = intl4.string(tmp5(1126).t.WRkdCQ);
        obj16.onPress = function onPress() {
          return stateFromStores(5099).pop();
        };
        tmp12Result2 = closure_6(tmp5(5601).Button, obj16);
      }
      obj11.children = tmp12Result2;
      items4[1] = closure_6(closure_4, obj11);
      rect.children = items4;
      return closure_8(str(6626).SafeAreaPaddingView, rect);
    };
