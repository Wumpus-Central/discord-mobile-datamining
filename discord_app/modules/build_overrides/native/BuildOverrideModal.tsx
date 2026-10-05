// discord_app/modules/build_overrides/native/BuildOverrideModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import build_overrides_BuildOverrideUtils from "BuildOverrideUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import BuildOverrideStore from "../BuildOverrideStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let overrideUrl;

let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
({ Image: c3, View: closure_4 } = react_native);
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  content: { marginTop: 160, flex: 1, alignItems: "center" },
  imageWrapper: size,
  text: { lineHeight: 24, textAlign: "center" },
  buildOverrideName: { marginTop: 8 },
  buildOverrideExpiration: { lineHeight: 24 },
  buildOverrideInvalid: { marginTop: 8 },
  buttonWrapper: { alignSelf: "stretch" },
  actionButton: { marginBottom: 8 },
};
obj2 = {
  flex: 1,
  height: "100%",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  paddingHorizontal: 16,
};
createStyles = createStyles.createStyles;
size = {
  width: 100,
  height: 100,
  borderRadius: nativeDefault.radii.round,
  marginBottom: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  alignItems: "center",
  justifyContent: "center",
};
let closure_9 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (overrideUrl) => {
      let Button2;
      let first;
      let flag;
      let flag2;
      let id;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let items2;
      let items3;
      let items4;
      let items5;
      let obj14;
      let obj5;
      let stateFromStores;
      let str;
      let tmp10;
      let tmp11;
      let tmp16;
      let tmp17;
      let tmp18;
      let tmp19;
      let tmp20;
      let tmp21;
      let tmp22;
      let tmp28;
      let tmp5Result;
      const tmp = str;
      const obj = str(576);
      const cResult = obj.c(51);
      overrideUrl = overrideUrl.overrideUrl;
      str = "";
      if (undefined !== overrideUrl) {
        str = overrideUrl;
      }
      const tmp4 = closure_9();
      const tmp6 = stateFromStores(4791)();
      const tmpResult = tmp(4729);
      if (tmpResult.isThemeDark(tmp6)) {
        tmp5Result = tmp5(13683);
      } else {
        tmp5Result = tmp5(13684);
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [BuildOverrideStore];
        cResult[0] = items;
        first = items;
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
        tmp11 = items1;
        tmp10 = fn;
      } else {
        tmp10 = cResult[2];
        tmp11 = cResult[3];
      }
      const tmpResult2 = tmp(504);
      stateFromStores = tmpResult2.useStateFromStores(first, tmp10, tmp11);
      const override = stateFromStores.override;
      if (override != null) {
        const targetBuildOverride = override.targetBuildOverride;
        if (targetBuildOverride != null) {
          const tmp13 = targetBuildOverride[tmp(undefined, 11399).DEVICE_FIELD];
          if (tmp13 != null) {
            id = tmp13.id;
          }
        }
      }
      let expiresAt;
      const tmp14 = cResult[4];
      if (override != null) {
        expiresAt = override.expiresAt;
      }
      if (tmp14 === expiresAt) {
        if (cResult[5] === id) {
          if (cResult[6] === tmp5Result) {
            if (cResult[7] === tmp4.buildOverrideExpiration) {
              if (cResult[8] === tmp4.buildOverrideInvalid) {
                if (cResult[9] === tmp4.buildOverrideName) {
                  if (cResult[10] === tmp4.container) {
                    if (cResult[11] === tmp4.content) {
                      if (cResult[12] === tmp4.imageWrapper) {
                        if (cResult[13] === tmp4.text) {
                          tmp16 = cResult[14];
                          tmp17 = cResult[15];
                          flag = cResult[16];
                          tmp18 = cResult[17];
                          tmp19 = cResult[18];
                          tmp20 = cResult[19];
                          tmp21 = cResult[20];
                          tmp22 = cResult[21];
                          flag2 = cResult[22];
                        }
                        if (cResult[31] === tmp16) {
                          if (cResult[32] === tmp19) {
                            if (cResult[33] === tmp20) {
                              if (cResult[34] === tmp21) {
                                let tmp45;
                                let tmp50;
                                if (cResult[35] === tmp22) {
                                  tmp45 = cResult[36];
                                }
                                if (cResult[37] === stateFromStores.validatedURL) {
                                  if (cResult[38] === id) {
                                    let tmp48;
                                    if (cResult[39] === tmp4.actionButton) {
                                      tmp48 = cResult[40];
                                    }
                                    if (cResult[41] === tmp4.buttonWrapper) {
                                      let tmp55;
                                      if (cResult[42] === tmp48) {
                                        tmp55 = cResult[43];
                                      }
                                      if (cResult[44] === tmp17) {
                                        if (cResult[45] === flag) {
                                          if (cResult[46] === tmp18) {
                                            if (cResult[47] === tmp45) {
                                              if (cResult[48] === tmp55) {
                                                let tmp59;
                                                if (cResult[49] === flag2) {
                                                  tmp59 = cResult[50];
                                                }
                                                return tmp59;
                                              }
                                            }
                                          }
                                        }
                                      }
                                      const rect = { top: flag2, bottom: flag, style: tmp18, children: items2 };
                                      items2 = [tmp45, tmp55];
                                      const tmp61 = closure_8(tmp17, rect);
                                      cResult[44] = tmp17;
                                      cResult[45] = flag;
                                      cResult[46] = tmp18;
                                      cResult[47] = tmp45;
                                      cResult[48] = tmp55;
                                      cResult[49] = flag2;
                                      cResult[50] = tmp61;
                                      tmp59 = tmp61;
                                    }
                                    const obj2 = { style: tmp4.buttonWrapper, children: tmp48 };
                                    const tmp58 = closure_6(closure_4, obj2);
                                    cResult[41] = tmp4.buttonWrapper;
                                    cResult[42] = tmp48;
                                    cResult[43] = tmp58;
                                    tmp55 = tmp58;
                                  }
                                }
                                if (null != id) {
                                  const obj3 = { children: items3 };
                                  const obj4 = { style: tmp4.actionButton, children: closure_6(Button2, obj5) };
                                  obj5 = {
                                    text: intl5.string(tmp(1126).t.v0MBqF),
                                    grow: true,
                                    onPress() {
                                      str = stateFromStores.validatedURL;
                                      const setBuildOverrideFromLink =
                                        build_overrides_BuildOverrideUtils.setBuildOverrideFromLink;
                                      build_overrides_BuildOverrideUtils;
                                      if (str == null) {
                                        str = "";
                                      }
                                      const result = setBuildOverrideFromLink(str);
                                    },
                                  };
                                  Button2 = tmp(5594).Button;
                                  intl5 = tmp(1126).intl;
                                  items3 = [closure_6(closure_4, obj4)];
                                  const obj6 = {
                                    text: intl6.string(tmp(1126).t.b5KKph),
                                    variant: "secondary",
                                    grow: true,
                                    onPress() {
                                      const arr = stateFromStores(dependencyMap[19]);
                                      return arr.pop();
                                    },
                                  };
                                  const Button3 = tmp(5594).Button;
                                  intl6 = tmp(1126).intl;
                                  items3[1] = closure_6(Button3, obj6);
                                  tmp50 = closure_8(closure_7, obj3);
                                } else {
                                  const obj7 = {
                                    text: intl4.string(tmp(1126).t.WRkdCQ),
                                    grow: true,
                                    onPress() {
                                      const arr = stateFromStores(dependencyMap[19]);
                                      return arr.pop();
                                    },
                                  };
                                  const Button = tmp(5594).Button;
                                  intl4 = tmp(1126).intl;
                                  tmp50 = closure_6(Button, obj7);
                                }
                                cResult[37] = stateFromStores.validatedURL;
                                cResult[38] = id;
                                cResult[39] = tmp4.actionButton;
                                cResult[40] = tmp50;
                                tmp48 = tmp50;
                              }
                            }
                          }
                        }
                        const obj8 = { style: tmp19, children: items4 };
                        items4 = [tmp20, tmp21, tmp22];
                        const tmp47 = closure_8(tmp16, obj8);
                        cResult[31] = tmp16;
                        cResult[32] = tmp19;
                        cResult[33] = tmp20;
                        cResult[34] = tmp21;
                        cResult[35] = tmp22;
                        cResult[36] = tmp47;
                        tmp45 = tmp47;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const duration = stateFromStores(4461).duration;
      stateFromStores(4461);
      let expiresAt1;
      const diff = stateFromStores(4461)().diff;
      stateFromStores(4461)();
      if (override != null) {
        expiresAt1 = override.expiresAt;
      }
      const durationResult = duration(diff(expiresAt1));
      const humanizeResult = durationResult.humanize();
      const SafeAreaPaddingView = tmp(6619).SafeAreaPaddingView;
      const container = tmp4.container;
      const content = tmp4.content;
      if (cResult[23] !== tmp5Result) {
        const obj9 = { source: tmp5Result };
        const tmp31 = closure_6(closure_3, obj9);
        cResult[23] = tmp5Result;
        cResult[24] = tmp31;
        tmp28 = tmp31;
      } else {
        tmp28 = cResult[24];
      }
      if (cResult[25] === tmp4.imageWrapper) {
        let tmp32;
        let tmp34;
        let tmp36;
        let tmp40;
        if (cResult[26] === tmp28) {
          tmp32 = cResult[27];
        }
        const _Symbol = Symbol;
        const text = tmp4.text;
        if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t["6ILkNN"]);
          cResult[28] = stringResult;
          tmp34 = stringResult;
        } else {
          tmp34 = cResult[28];
        }
        if (cResult[29] !== tmp4.text) {
          const obj10 = { style: text, variant: "text-md/medium", children: tmp34 };
          const tmp38 = closure_6(tmp(4886).Text, obj10);
          cResult[29] = tmp4.text;
          cResult[30] = tmp38;
          tmp36 = tmp38;
        } else {
          tmp36 = cResult[30];
        }
        if (null != id) {
          const obj11 = { children: items5 };
          const obj12 = {
            style: tmp4.buildOverrideName,
            variant: "heading-xl/extrabold",
            color: "mobile-text-heading-primary",
            children: id,
          };
          items5 = [closure_6(tmp(4886).Text, obj12)];
          const obj13 = {
            style: tmp4.buildOverrideExpiration,
            variant: "text-md/medium",
            color: "text-default",
            children: intl3.format(tmp(1126).t.lOsPpu, obj14),
          };
          const Text2 = tmp(4886).Text;
          intl3 = tmp(1126).intl;
          obj14 = { expirationDuration: humanizeResult };
          items5[1] = closure_6(Text2, obj13);
          tmp40 = closure_8(closure_7, obj11);
        } else {
          const obj15 = {
            style: tmp4.buildOverrideInvalid,
            variant: "heading-xl/extrabold",
            color: "mobile-text-heading-primary",
            children: intl2.string(tmp(1126).t["cz+sue"]),
          };
          const Text = tmp(4886).Text;
          intl2 = tmp(1126).intl;
          tmp40 = closure_6(Text, obj15);
        }
        let expiresAt2;
        if (override != null) {
          expiresAt2 = override.expiresAt;
        }
        cResult[4] = expiresAt2;
        cResult[5] = id;
        cResult[6] = tmp5Result;
        cResult[7] = tmp4.buildOverrideExpiration;
        cResult[8] = tmp4.buildOverrideInvalid;
        cResult[9] = tmp4.buildOverrideName;
        cResult[10] = tmp4.container;
        cResult[11] = tmp4.content;
        cResult[12] = tmp4.imageWrapper;
        cResult[13] = tmp4.text;
        cResult[14] = closure_4;
        cResult[15] = SafeAreaPaddingView;
        cResult[16] = true;
        cResult[17] = container;
        cResult[18] = content;
        cResult[19] = tmp32;
        cResult[20] = tmp36;
        cResult[21] = tmp40;
        cResult[22] = true;
        flag2 = true;
        tmp22 = tmp40;
        tmp21 = tmp36;
        tmp20 = tmp32;
        tmp19 = content;
        tmp18 = container;
        flag = true;
        tmp17 = SafeAreaPaddingView;
        tmp16 = closure_4;
      }
      const obj16 = { style: tmp4.imageWrapper, children: tmp28 };
      const tmp33 = closure_6(closure_4, obj16);
      cResult[25] = tmp4.imageWrapper;
      cResult[26] = tmp28;
      cResult[27] = tmp33;
      tmp32 = tmp33;
    }
  : (overrideUrl) => {
      let Button2;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let items2;
      let items3;
      let items4;
      let items5;
      let obj13;
      let obj8;
      let tmp14Result2;
      let tmp16Result;
      let tmp2Result;
      let str = overrideUrl.overrideUrl;
      if (str === undefined) {
        str = "";
      }
      let stateFromStores;
      const tmp = closure_9();
      const tmp4 = stateFromStores(4791)();
      const obj = str(4729);
      if (obj.isThemeDark(tmp4)) {
        tmp2Result = tmp2(13683);
      } else {
        tmp2Result = tmp2(13684);
      }
      const items = [BuildOverrideStore];
      const items1 = [str];
      const tmp5Result = str(504);
      stateFromStores = tmp5Result.useStateFromStores(items, () => BuildOverrideStore.getBuildOverride(str), items1);
      const override = stateFromStores.override;
      let id;
      if (override != null) {
        const targetBuildOverride = override.targetBuildOverride;
        if (targetBuildOverride != null) {
          const tmp9 = targetBuildOverride[str(undefined, 11399).DEVICE_FIELD];
          if (tmp9 != null) {
            id = tmp9.id;
          }
        }
      }
      const duration = stateFromStores(4461).duration;
      stateFromStores(4461);
      let expiresAt;
      const diff = stateFromStores(4461)().diff;
      stateFromStores(4461)();
      if (override != null) {
        expiresAt = override.expiresAt;
      }
      const rect = { top: true, bottom: true, style: tmp.container, children: items4 };
      const durationResult = duration(diff(expiresAt));
      const obj2 = { style: tmp.content, children: items2 };
      const obj3 = { style: tmp.imageWrapper, children: closure_6(closure_3, { source: tmp2Result }) };
      const humanizeResult = durationResult.humanize();
      const SafeAreaPaddingView = tmp5(6619).SafeAreaPaddingView;
      items2 = [closure_6(closure_4, obj3), ,];
      const obj4 = { style: tmp.text, variant: "text-md/medium", children: intl.string(str(1126).t["6ILkNN"]) };
      const Text = tmp5(4886).Text;
      intl = tmp5(1126).intl;
      items2[1] = closure_6(Text, obj4);
      if (null != id) {
        const obj5 = { children: items3 };
        const obj6 = {
          style: tmp.buildOverrideName,
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: id,
        };
        items3 = [closure_6(str(4886).Text, obj6)];
        const obj7 = {
          style: tmp.buildOverrideExpiration,
          variant: "text-md/medium",
          color: "text-default",
          children: intl3.format(str(1126).t.lOsPpu, obj8),
        };
        const Text3 = tmp5(4886).Text;
        intl3 = tmp5(1126).intl;
        obj8 = { expirationDuration: humanizeResult };
        items3[1] = closure_6(Text3, obj7);
        tmp16Result = closure_8(closure_7, obj5);
      } else {
        const obj9 = {
          style: tmp.buildOverrideInvalid,
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: intl2.string(str(1126).t["cz+sue"]),
        };
        const Text2 = tmp5(4886).Text;
        intl2 = tmp5(1126).intl;
        tmp16Result = closure_6(Text2, obj9);
      }
      items2[2] = tmp16Result;
      items4 = [closure_8(closure_4, obj2)];
      const obj10 = { style: tmp.buttonWrapper, children: tmp14Result2 };
      if (null != id) {
        const obj11 = { children: items5 };
        const obj12 = { style: tmp.actionButton, children: closure_6(Button2, obj13) };
        obj13 = {
          text: intl5.string(str(1126).t.v0MBqF),
          grow: true,
          onPress() {
            str = stateFromStores.validatedURL;
            const setBuildOverrideFromLink = build_overrides_BuildOverrideUtils.setBuildOverrideFromLink;
            build_overrides_BuildOverrideUtils;
            if (str == null) {
              str = "";
            }
            const result = setBuildOverrideFromLink(str);
          },
        };
        Button2 = tmp5(5594).Button;
        intl5 = tmp5(1126).intl;
        items5 = [closure_6(closure_4, obj12)];
        const obj14 = {
          text: intl6.string(str(1126).t.b5KKph),
          variant: "secondary",
          grow: true,
          onPress() {
            const arr = stateFromStores(dependencyMap[19]);
            return arr.pop();
          },
        };
        const Button3 = tmp5(5594).Button;
        intl6 = tmp5(1126).intl;
        items5[1] = closure_6(Button3, obj14);
        tmp14Result2 = closure_8(closure_7, obj11);
      } else {
        const obj15 = {
          text: intl4.string(str(1126).t.WRkdCQ),
          grow: true,
          onPress() {
            const arr = stateFromStores(dependencyMap[19]);
            return arr.pop();
          },
        };
        const Button = tmp5(5594).Button;
        intl4 = tmp5(1126).intl;
        tmp14Result2 = closure_6(Button, obj15);
      }
      items4[1] = closure_6(closure_4, obj10);
      return closure_8(SafeAreaPaddingView, rect);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/build_overrides/native/BuildOverrideModal.tsx");

export default tmp6;
