// discord_app/modules/conjure/publish/native/ConjurePublishSheet.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import AppsIcon from "../../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import useConjurePublishActionDefault from "../useConjurePublishAction.tsx";
import useConjureNativePublishOptionsDefault from "useConjureNativePublishOptions.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";

require = fn;
function showCriticalToast(text) {
  ToastActionCreatorsDefault.open("CONJURE_PUBLISH_SHEET_ERROR", { text, variant: "critical" });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const ConjurePublishSheet = "ConjurePublishSheet";
let obj = { screen_capture: fn(9459).ScreenIcon, connect_user_to_voice: fn(8558).VoiceNormalIcon };
let obj2 = {};
obj2[fn(6759).ConjureSupportedSurface.BOT] = fn(11751).RobotIcon;
obj2[fn(6759).ConjureSupportedSurface.ACTIVITY] = fn(12242).ActivitiesIcon;
obj2[fn(6759).ConjureSupportedSurface.PROFILE_WIDGET] = fn(12244).BadgeIcon;
obj2[fn(6759).ConjureSupportedSurface.AUTOMOD] = fn(10926).ShieldIcon;
let closure_12 = { initial: "initialDot", notPublished: "pendingRing", published: "publishedDot" };
const createStyles = fn(4969);
let obj4 = {
  content: { gap: nativeDefault.space.PX_16 },
  nameGroup: null,
  sectionTitle: null,
  followingSection: null,
  row: null,
  sharingRow: null,
  onlyMeIcon: null,
  rowText: null,
  footer: null,
  status: null,
  statusDot: null,
  initialDot: null,
  pendingRing: null,
  publishedDot: null,
};
let obj5 = { gap: nativeDefault.space.PX_16 };
obj4.nameGroup = { gap: nativeDefault.space.PX_8 };
let obj6 = { gap: nativeDefault.space.PX_8 };
obj4.sectionTitle = { marginBottom: nativeDefault.space.PX_4 };
let obj7 = { marginBottom: nativeDefault.space.PX_4 };
obj4.followingSection = { marginTop: -nativeDefault.space.PX_8 };
let obj8 = { marginTop: -nativeDefault.space.PX_8 };
obj4.row = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  minHeight: nativeDefault.space.PX_32 + nativeDefault.space.PX_4,
};
let obj9 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  minHeight: nativeDefault.space.PX_32 + nativeDefault.space.PX_4,
};
obj4.sharingRow = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  marginTop: nativeDefault.space.PX_4,
};
let obj10 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  marginTop: nativeDefault.space.PX_4,
};
obj4.onlyMeIcon = {
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
obj4.rowText = { flex: 1 };
let obj11 = {
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
obj4.footer = {
  gap: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
let obj12 = {
  gap: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj4.status = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
let size = {
  width: nativeDefault.space.PX_12,
  height: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.round,
};
obj4.statusDot = size;
let obj13 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj4.initialDot = { backgroundColor: nativeDefault.colors.ICON_MUTED };
let obj14 = { backgroundColor: nativeDefault.colors.ICON_MUTED };
obj4.pendingRing = { borderWidth: 2, borderStyle: "dotted", borderColor: nativeDefault.colors.TEXT_BRAND };
let obj15 = { borderWidth: 2, borderStyle: "dotted", borderColor: nativeDefault.colors.TEXT_BRAND };
obj4.publishedDot = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
let closure_13 = createStyles.createStyles(obj4);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjurePublishSheet(projectId) {
      const cResult = projectId(576).c(8);
      projectId = projectId.projectId;
      const entryPoint = projectId.entryPoint;
      obj = projectId(576);
      const tmp = projectId;
      const tmp4Result = useConjurePublishActionDefault(
        projectId,
        useConjureNativePublishOptionsDefault(projectId, projectId.guildId),
      );
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureProjectStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== projectId) {
        const fn = function o() {
          return ConjureProjectStore.getProject(projectId);
        };
        const items1 = [projectId];
        cResult[1] = projectId;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp9 = items1;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const stateFromStores = tmp(504).useStateFromStores(first, tmp8, tmp9);
      if (cResult[4] === entryPoint) {
        if (cResult[5] === stateFromStores) {
          if (cResult[6] === tmp4Result) {
            let tmp11 = cResult[7];
          }
          return tmp11;
        }
      }
      let tmp12 = null;
      if (null != tmp4Result) {
        tmp12 = null;
        if (null != stateFromStores) {
          obj2 = { project: stateFromStores, publish: tmp4Result, entryPoint };
          tmp12 = closure_6(closure_16, obj2);
        }
      }
      cResult[4] = entryPoint;
      cResult[5] = stateFromStores;
      cResult[6] = tmp4Result;
      cResult[7] = tmp12;
      tmp11 = tmp12;
      const tmpResult = tmp(504);
    }
  : function ConjurePublishSheet(projectId) {
      projectId = projectId.projectId;
      ({ guildId, entryPoint } = projectId);
      const tmpResult = useConjurePublishActionDefault(
        projectId,
        useConjureNativePublishOptionsDefault(projectId, guildId),
      );
      const items = [ConjureProjectStore];
      const items1 = [projectId];
      const stateFromStores = projectId(504).useStateFromStores(
        items,
        () => ConjureProjectStore.getProject(projectId),
        items1,
      );
      let tmp4 = null;
      if (null != tmpResult) {
        tmp4 = null;
        if (null != stateFromStores) {
          obj2 = { project: stateFromStores, publish: tmpResult, entryPoint };
          tmp4 = closure_6(closure_16, obj2);
        }
      }
      return tmp4;
    };
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PublishSheetBody(entryPoint) {
      const cResult = require("c").c(77);
      ({ project, publish } = entryPoint);
      _require = publish;
      entryPoint = entryPoint.entryPoint;
      const tmp4 = closure_13();
      const tmp6 = entryPoint(12246)(project, publish);
      dependencyMap = tmp6;
      ({ initial: initialChannelNames, editable, identity, sharing } = tmp6);
      if (cResult[0] === initialChannelNames) {
        if (cResult[1] === tmp6.channels) {
          if (cResult[2] === tmp6.components) {
            if (cResult[3] === tmp6.initialChannelNames) {
              if (cResult[6] === entryPoint) {
                if (cResult[7] === tmp6) {
                  if (cResult[10] === editable) {
                    if (cResult[11] === identity) {
                      if (cResult[12] === tmp6.saving) {
                        if (cResult[13] === project) {
                          if (cResult[15] === editable) {
                            if (cResult[16] === identity) {
                              if (cResult[17] === tmp6.description) {
                                if (cResult[18] === tmp6.displayName) {
                                  if (cResult[19] === tmp6.name) {
                                    if (cResult[20] === tmp6.nameError) {
                                      if (cResult[21] === tmp6.saving) {
                                        if (cResult[22] === tmp6.setName) {
                                          if (cResult[23] === tmp4.nameGroup) {
                                            const _Symbol = Symbol;
                                            if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                                              const intl4 = tmp(1128).intl;
                                              const stringResult = intl4.string(tmp5(3830).BqNMms);
                                              cResult[25] = stringResult;
                                              let tmp31 = stringResult;
                                            } else {
                                              tmp31 = cResult[25];
                                            }
                                            if (cResult[26] !== arr) {
                                              obj2 = { title: tmp31, rows: arr };
                                              const tmp36 = closure_6(closure_18, obj2);
                                              cResult[26] = arr;
                                              cResult[27] = tmp36;
                                            }
                                            const _Symbol2 = Symbol;
                                            if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                                              const intl5 = tmp(1128).intl;
                                              const stringResult1 = intl5.string(tmp5(3830).LnqeFd);
                                              cResult[28] = stringResult1;
                                              let tmp37 = stringResult1;
                                            } else {
                                              tmp37 = cResult[28];
                                            }
                                            if (cResult[29] !== tmp6.devicePermissions) {
                                              const _Symbol3 = Symbol;
                                              if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                                                class V {
                                                  constructor(arg0) {
                                                    obj = { icon: closure_1_10[entryPoint], label: null };
                                                    intl = closure_0(closure_2[22]).intl;
                                                    obj.label = intl.string(
                                                      closure_0(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[
                                                        entryPoint
                                                      ],
                                                    );
                                                    return closure_1_6(closure_1_19, obj, entryPoint);
                                                  }
                                                }
                                                cResult[31] = V;
                                              } else {
                                                class V {
                                                  constructor(arg0) {
                                                    obj = { icon: closure_1_10[entryPoint], label: null };
                                                    intl = closure_0(closure_2[22]).intl;
                                                    obj.label = intl.string(
                                                      closure_0(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[
                                                        entryPoint
                                                      ],
                                                    );
                                                    return closure_1_6(closure_1_19, obj, entryPoint);
                                                  }
                                                }
                                              }
                                              const devicePermissions = tmp6.devicePermissions;
                                              const mapped = devicePermissions.map(V);
                                              cResult[29] = tmp6.devicePermissions;
                                              cResult[30] = mapped;
                                            } else {
                                              class V {
                                                constructor(arg0) {
                                                  obj = { icon: closure_1_10[entryPoint], label: null };
                                                  intl = closure_0(closure_2[22]).intl;
                                                  obj.label = intl.string(
                                                    closure_0(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[
                                                      entryPoint
                                                    ],
                                                  );
                                                  return closure_1_6(closure_1_19, obj, entryPoint);
                                                }
                                              }
                                              if (cResult[32] === tmp39) {
                                                class V {
                                                  constructor(arg0) {
                                                    obj = { icon: closure_1_10[entryPoint], label: null };
                                                    intl = closure_0(closure_2[22]).intl;
                                                    obj.label = intl.string(
                                                      closure_0(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[
                                                        entryPoint
                                                      ],
                                                    );
                                                    return closure_1_6(closure_1_19, obj, entryPoint);
                                                  }
                                                }
                                                if (cResult[35] === sharing) {
                                                  class V {
                                                    constructor(arg0) {
                                                      obj = { icon: closure_1_10[entryPoint], label: null };
                                                      intl = closure_0(closure_2[22]).intl;
                                                      obj.label = intl.string(
                                                        closure_0(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[
                                                          entryPoint
                                                        ],
                                                      );
                                                      return closure_1_6(closure_1_19, obj, entryPoint);
                                                    }
                                                  }
                                                }
                                                let tmp51Result = null;
                                                if (null != sharing) {
                                                  class V {
                                                    constructor(arg0) {
                                                      obj = { icon: closure_1_10[entryPoint], label: null };
                                                      intl = closure_0(closure_2[22]).intl;
                                                      obj.label = intl.string(
                                                        closure_0(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[
                                                          entryPoint
                                                        ],
                                                      );
                                                      return closure_1_6(closure_1_19, obj, entryPoint);
                                                    }
                                                  }
                                                  let obj4 = { title: null };
                                                  const intl6 = tmp(1128).intl;
                                                  obj4.title = intl6.string(tmp5(3830).yCgX8i);
                                                  const items = [closure_6(closure_17, obj4)];
                                                  const obj6 = { style: tmp4.sharingRow, children: null };
                                                  if (null != sharing.guild) {
                                                    class V {
                                                      constructor(arg0) {
                                                        obj = { icon: closure_1_10[entryPoint], label: null };
                                                        intl = closure_0(closure_2[22]).intl;
                                                        obj.label = intl.string(
                                                          closure_0(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[
                                                            entryPoint
                                                          ],
                                                        );
                                                        return closure_1_6(closure_1_19, obj, entryPoint);
                                                      }
                                                    }
                                                    tmp58[0] = sharing.guild;
                                                    tmp58[1] = tmp(6868).GuildIconSizes.SMALL_36;
                                                    let tmp53Result = closure_6(tmp5(6868), tmp58);
                                                    const tmp5Result = tmp5(6868);
                                                  } else {
                                                    class V {
                                                      constructor(arg0) {
                                                        obj = { icon: closure_1_10[entryPoint], label: null };
                                                        intl = closure_0(closure_2[22]).intl;
                                                        obj.label = intl.string(
                                                          closure_0(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[
                                                            entryPoint
                                                          ],
                                                        );
                                                        return closure_1_6(closure_1_19, obj, entryPoint);
                                                      }
                                                    }
                                                    tmp55[0] = tmp4.onlyMeIcon;
                                                    const obj7 = { size: "xs", color: tmp5(587).colors.ICON_DEFAULT };
                                                    tmp55[1] = closure_6(tmp(11792).UserIcon, obj7);
                                                    tmp53Result = closure_6(View, tmp55);
                                                  }
                                                  const items1 = [tmp53Result];
                                                  const obj8 = { style: tmp4.rowText, children: null };
                                                  let stringResult2;
                                                  if (sharing.guild != null) {
                                                    class V {
                                                      constructor(arg0) {
                                                        obj = { icon: closure_1_10[entryPoint], label: null };
                                                        intl = closure_0(closure_2[22]).intl;
                                                        obj.label = intl.string(
                                                          closure_0(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[
                                                            entryPoint
                                                          ],
                                                        );
                                                        return closure_1_6(closure_1_19, obj, entryPoint);
                                                      }
                                                    }
                                                  }
                                                  if (stringResult2 == null) {
                                                    class V {
                                                      constructor(arg0) {
                                                        obj = { icon: closure_1_10[entryPoint], label: null };
                                                        intl = closure_0(closure_2[22]).intl;
                                                        obj.label = intl.string(
                                                          closure_0(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[
                                                            entryPoint
                                                          ],
                                                        );
                                                        return closure_1_6(closure_1_19, obj, entryPoint);
                                                      }
                                                    }
                                                    stringResult2 = obj12.string(tmp5(3830)["37xgkF"]);
                                                  }
                                                  const obj9 = {
                                                    variant: "text-sm/medium",
                                                    color: "text-strong",
                                                    lineClamp: 1,
                                                    children: stringResult2,
                                                  };
                                                  const items2 = [closure_6(tmp(5220).Text, obj9)];
                                                  let tmp53Result2 = null;
                                                  if (null != sharing.caption) {
                                                    class V {
                                                      constructor(arg0) {
                                                        obj = { icon: closure_1_10[entryPoint], label: null };
                                                        intl = closure_0(closure_2[22]).intl;
                                                        obj.label = intl.string(
                                                          closure_0(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[
                                                            entryPoint
                                                          ],
                                                        );
                                                        return closure_1_6(closure_1_19, obj, entryPoint);
                                                      }
                                                    }
                                                    tmp61[2] = sharing.caption;
                                                    tmp53Result2 = closure_6(tmp(5220).Text, tmp61);
                                                  }
                                                  const obj10 = { children: null };
                                                  items2[1] = tmp53Result2;
                                                  obj8.children = items2;
                                                  items1[1] = tmp51(View, obj8);
                                                  obj6.children = items1;
                                                  items[1] = tmp51(View, obj6);
                                                  obj10.children = items;
                                                  tmp51Result = tmp51(View, obj10);
                                                }
                                                cResult[35] = sharing;
                                                cResult[36] = tmp4.onlyMeIcon;
                                                cResult[37] = tmp4.rowText;
                                                cResult[38] = tmp4.sharingRow;
                                                cResult[39] = tmp51Result;
                                              }
                                              const obj11 = { title: tmp37, following: tmp39, rows: tmp40 };
                                              const tmp47 = closure_6(closure_18, obj11);
                                              cResult[32] = tmp39;
                                              cResult[33] = tmp40;
                                              cResult[34] = tmp47;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          if (editable) {
                            class V {
                              constructor(arg0) {
                                obj = { icon: closure_1_10[entryPoint], label: null };
                                intl = closure_0(closure_2[22]).intl;
                                obj.label = intl.string(
                                  closure_0(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[entryPoint],
                                );
                                return closure_1_6(closure_1_19, obj, entryPoint);
                              }
                            }
                            const obj13 = {
                              label: null,
                              value: null,
                              onChange: null,
                              maxLength: null,
                              disabled: null,
                              errorMessage: null,
                            };
                            let intl = tmp(1128).intl;
                            obj13.label = intl.string(tmp5(3830).knevPu);
                            ({ name: obj3.value, setName: obj3.onChange } = tmp6);
                            obj13.maxLength = tmp(6759).MAX_PROJECT_NAME_LENGTH;
                            ({ saving: obj3.disabled, nameError } = tmp6);
                            if (nameError == null) {
                              class V {
                                constructor(arg0) {
                                  obj = { icon: closure_1_10[entryPoint], label: null };
                                  intl = closure_0(closure_2[22]).intl;
                                  obj.label = intl.string(
                                    closure_0(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[entryPoint],
                                  );
                                  return closure_1_6(closure_1_19, obj, entryPoint);
                                }
                              }
                            }
                            const obj14 = { children: null };
                            obj13.errorMessage = nameError;
                            const items3 = [tmp27(tmp(6993).TextInput, obj13)];
                            const obj26 = {
                              label: null,
                              placeholder: null,
                              value: null,
                              onChange: null,
                              maxLength: null,
                              disabled: null,
                            };
                            const intl2 = tmp(1128).intl;
                            obj26.label = intl2.string(tmp5(3830).ynaGa1);
                            const intl3 = tmp(1128).intl;
                            obj26.placeholder = intl3.string(tmp5(3830)["I+3UTL"]);
                            ({ description: obj5.value, setDescription: obj5.onChange } = identity);
                            obj26.maxLength = tmp(6759).MAX_APP_DESCRIPTION_LENGTH;
                            obj26.disabled = tmp6.saving;
                            items3[1] = tmp27(tmp(7165).TextArea, obj26);
                            obj14.children = items3;
                            let tmp19Result = closure_8(closure_7, obj14);
                          } else {
                            class V {
                              constructor(arg0) {
                                obj = { icon: closure_1_10[entryPoint], label: null };
                                intl = closure_0(closure_2[22]).intl;
                                obj.label = intl.string(
                                  closure_0(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[entryPoint],
                                );
                                return closure_1_6(closure_1_19, obj, entryPoint);
                              }
                            }
                            tmp21[0] = tmp4.nameGroup;
                            const obj27 = {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              lineClamp: 1,
                              accessibilityRole: "header",
                              children: tmp6.displayName,
                            };
                            const items4 = [closure_6(tmp(5220).Text, obj27)];
                            let tmp22Result = null;
                            if ("" !== tmp6.description) {
                              class V {
                                constructor(arg0) {
                                  obj = { icon: closure_1_10[entryPoint], label: null };
                                  intl = closure_0(closure_2[22]).intl;
                                  obj.label = intl.string(
                                    closure_0(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[entryPoint],
                                  );
                                  return closure_1_6(closure_1_19, obj, entryPoint);
                                }
                              }
                              tmp24[3] = tmp6.description;
                              tmp22Result = closure_6(tmp(5220).Text, tmp24);
                            }
                            items4[1] = tmp22Result;
                            tmp21[1] = items4;
                            tmp19Result = closure_8(View, tmp21);
                          }
                          cResult[15] = editable;
                          cResult[16] = identity;
                          cResult[17] = tmp6.description;
                          cResult[18] = tmp6.displayName;
                          cResult[19] = tmp6.name;
                          cResult[20] = tmp6.nameError;
                          cResult[21] = tmp6.saving;
                          cResult[22] = tmp6.setName;
                          identity = tmp4.nameGroup;
                          cResult[23] = identity;
                          cResult[24] = tmp19Result;
                        }
                      }
                    }
                  }
                  if (editable) {
                    class V {
                      constructor(arg0) {
                        obj = { icon: closure_1_10[entryPoint], label: null };
                        intl = closure_0(closure_2[22]).intl;
                        obj.label = intl.string(closure_0(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[entryPoint]);
                        return closure_1_6(closure_1_19, obj, entryPoint);
                      }
                    }
                    tmp16[0] = identity.iconURL;
                    tmp16[3] = tmp6.saving;
                    tmp16[4] = identity.setIcon;
                    tmp16[5] = function onError(text) {
                      if (null != text) {
                        obj2 = { text, variant: "critical" };
                        entryPoint(5649).open("CONJURE_PUBLISH_SHEET_ERROR", obj2);
                        obj = entryPoint(5649);
                      }
                    };
                    let tmp13Result = closure_6(tmp(11764).ConjureAppIconTile, tmp16);
                  } else {
                    class V {
                      constructor(arg0) {
                        obj = { icon: closure_1_10[entryPoint], label: null };
                        intl = closure_0(closure_2[22]).intl;
                        obj.label = intl.string(closure_0(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[entryPoint]);
                        return closure_1_6(closure_1_19, obj, entryPoint);
                      }
                    }
                    tmp14[0] = project;
                    tmp13Result = closure_6(tmp5(11808), tmp14);
                  }
                  cResult[10] = editable;
                  cResult[11] = identity;
                  cResult[12] = tmp6.saving;
                  cResult[13] = project;
                  cResult[14] = tmp13Result;
                }
              }
              _require = asyncGeneratorStep(async () => {
                if (c3 === 2) {
                  c3 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp6 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "IconComponent", done: null };
                  }
                } else {
                  try {
                    c3 = 2;
                    if (0 === c1) {
                      if (arg0 === 1) {
                        c3 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 3;
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        dependencyMap = 1;
                        c1 = 2;
                        c3 = 1;
                        const obj4 = { value: dependencyMap.save(), done: false };
                        return obj4;
                      }
                    } else if (1 === tmp7) {
                      dependencyMap = 0;
                      const intl = tmp3(dependencyMap[22]).intl;
                      showCriticalToast(intl.string(entryPoint(dependencyMap[23]).Fi7boI));
                      c3 = 3;
                      return { value: "IconComponent", done: null };
                    } else if (arg0 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      dependencyMap = 0;
                      c3 = 3;
                      const obj5 = { value, done: true };
                      return obj5;
                    } else {
                      dependencyMap = 0;
                      if (value) {
                        entryPoint(dependencyMap[24]).hideActionSheet(ConjurePublishSheet);
                        tmp3.run(c1);
                        c3 = 3;
                        return { value: "IconComponent", done: null };
                      } else {
                        c3 = 3;
                        return { value: "IconComponent", done: null };
                      }
                    }
                  } catch (tmp24) {
                    if (tmp4 === dependencyMap) {
                      c3 = tmp2;
                      throw tmp24;
                    } else {
                      c1 = tmp;
                    }
                  }
                }
              });
              function handlePublish() {
                const self = this;
                const apply = closure_0.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              }
              cResult[6] = entryPoint;
              cResult[7] = tmp6;
              cResult[8] = publish;
              cResult[9] = handlePublish;
            }
          }
        }
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor(arg0) {
            obj = { icon: closure_1_10[entryPoint], label: null };
            intl = closure_0(closure_2[22]).intl;
            obj.label = intl.string(closure_0(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[entryPoint]);
            return closure_1_6(closure_1_19, obj, entryPoint);
          }
        }
        cResult[5] = tmp8;
      } else {
        class V {
          constructor(arg0) {
            obj = { icon: closure_1_10[entryPoint], label: null };
            intl = closure_0(closure_2[22]).intl;
            obj.label = intl.string(closure_0(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[entryPoint]);
            return closure_1_6(closure_1_19, obj, entryPoint);
          }
        }
      }
      if (initialChannelNames) {
        class V {
          constructor(arg0) {
            obj = { icon: closure_1_10[entryPoint], label: null };
            intl = closure_0(closure_2[22]).intl;
            obj.label = intl.string(closure_0(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[entryPoint]);
            return closure_1_6(closure_1_19, obj, entryPoint);
          }
        }
        let mapped1 = arr3.map((label) => closure_1_6(closure_1_19, { icon: closure_0(8563).AppsIcon, label }, label));
      } else {
        class V {
          constructor(arg0) {
            obj = { icon: closure_1_10[entryPoint], label: null };
            intl = closure_0(closure_2[22]).intl;
            obj.label = intl.string(closure_0(closure_2[20]).CONJURE_PUBLISH_PERMISSION_LABELS[entryPoint]);
            return closure_1_6(closure_1_19, obj, entryPoint);
          }
        }
        mapped1 = arr2.map((channel) => closure_1_6(closure_1_20, { channel }, channel.id));
      }
      const items5 = [...mapped1, ...components.map(tmp7)];
      components = tmp6.components;
      cResult[0] = initialChannelNames;
      cResult[1] = tmp6.channels;
      ({ components: tmp3[2], initialChannelNames } = tmp6);
      cResult[3] = initialChannelNames;
      cResult[4] = items5;
      obj = require("c");
    }
  : function PublishSheetBody(entryPoint) {
      ({ project, publish } = entryPoint);
      entryPoint = entryPoint.entryPoint;
      closure_3 = async function _handlePublish2() {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c3 = 2;
            if (0 === v2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                dependencyMap = 1;
                v2 = 2;
                c3 = 1;
                const obj4 = { value: dependencyMap.save(), done: false };
                return obj4;
              }
            } else if (1 === tmp7) {
              dependencyMap = 0;
              const intl = tmp3(1128).intl;
              showCriticalToast(intl.string(v2(3830).Fi7boI));
              c3 = 3;
              return { value: "IconComponent", done: null };
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 0;
              c3 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              dependencyMap = 0;
              if (value) {
                v2(5196).hideActionSheet(ConjurePublishSheet);
                closure_128_0.run(closure_128_1);
                c3 = 3;
                return { value: "IconComponent", done: null };
              } else {
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            }
          } catch (tmp24) {
            if (tmp4 === dependencyMap) {
              c3 = tmp2;
              throw tmp24;
            } else {
              v2 = tmp;
            }
          }
        }
      };
      const tmp = closure_13();
      const tmp4 = entryPoint(12246)(project, publish);
      dependencyMap = tmp4;
      ({ editable, identity, sharing } = tmp4);
      if (tmp4.initial) {
        const initialChannelNames = tmp4.initialChannelNames;
        let mapped = initialChannelNames.map((label) =>
          closure_1_6(closure_1_19, { icon: publish(8563).AppsIcon, label }, label),
        );
      } else {
        const channels = tmp4.channels;
        mapped = channels.map((channel) => closure_1_6(closure_1_20, { channel }, channel.id));
      }
      const items = [
        ...mapped,
        ...components.map((label) => {
          const surface = label.surface;
          return closure_1_6(closure_1_19, { icon: obj2[surface], label: label.label }, surface);
        }),
      ];
      components = tmp4.components;
      obj = {
        startExpanded: editable,
        keyboardShouldPersistTaps: "handled",
        dismissAccessibilityLabel: tmp4.displayName,
        children: null,
      };
      obj2 = { style: tmp.content, children: null };
      if (editable) {
        let obj3 = {
          iconURL: identity.iconURL,
          size: 40,
          radius: 12,
          disabled: tmp4.saving,
          onChange: identity.setIcon,
          onError(text) {
            if (null != text) {
              obj2 = { text, variant: "critical" };
              entryPoint(5649).open("CONJURE_PUBLISH_SHEET_ERROR", obj2);
              obj = entryPoint(5649);
            }
          },
        };
        let tmp6Result = closure_6(publish(11764).ConjureAppIconTile, obj3);
      } else {
        let obj4 = { project, size: "card" };
        tmp6Result = closure_6(tmp2(11808), obj4);
      }
      const items1 = [tmp6Result, , , , ,];
      if (editable) {
        let obj5 = { label: null, value: null, onChange: null, maxLength: null, disabled: null, errorMessage: null };
        let intl = publish(1128).intl;
        obj5.label = intl.string(tmp2(3830).knevPu);
        ({ name: obj8.value, setName: obj8.onChange } = tmp4);
        obj5.maxLength = publish(6759).MAX_PROJECT_NAME_LENGTH;
        ({ saving: obj8.disabled, nameError } = tmp4);
        const obj6 = { children: null };
        obj5.errorMessage = nameError;
        const items2 = [closure_6(publish(6993).TextInput, obj5)];
        const obj7 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, disabled: null };
        const intl2 = publish(1128).intl;
        obj7.label = intl2.string(tmp2(3830).ynaGa1);
        const intl3 = publish(1128).intl;
        obj7.placeholder = intl3.string(tmp2(3830)["I+3UTL"]);
        ({ description: obj10.value, setDescription: obj10.onChange } = identity);
        obj7.maxLength = publish(6759).MAX_APP_DESCRIPTION_LENGTH;
        obj7.disabled = tmp4.saving;
        items2[1] = closure_6(publish(7165).TextArea, obj7);
        obj6.children = items2;
        let tmp8Result = closure_8(closure_7, obj6);
      } else {
        const obj9 = { style: tmp.nameGroup, children: null };
        const obj11 = {
          variant: "heading-lg/semibold",
          color: "text-strong",
          lineClamp: 1,
          accessibilityRole: "header",
          children: tmp4.displayName,
        };
        const items3 = [closure_6(publish(5220).Text, obj11)];
        let tmp6Result5 = null;
        if ("" !== tmp4.description) {
          const obj12 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 2, children: tmp4.description };
          tmp6Result5 = closure_6(publish(5220).Text, obj12);
        }
        items3[1] = tmp6Result5;
        obj9.children = items3;
        tmp8Result = closure_8(View, obj9);
      }
      items1[1] = tmp8Result;
      const obj13 = { title: null, rows: null };
      const intl4 = publish(1128).intl;
      obj13.title = intl4.string(entryPoint(3830).BqNMms);
      obj13.rows = items;
      items1[2] = closure_6(closure_18, obj13);
      const obj14 = { title: null, following: null, rows: null };
      const intl5 = publish(1128).intl;
      obj14.title = intl5.string(entryPoint(3830).LnqeFd);
      obj14.following = items.length > 0;
      const devicePermissions = tmp4.devicePermissions;
      obj14.rows = devicePermissions.map((item) => {
        obj = { icon: closure_1_10[item], label: null };
        const intl = publish(1128).intl;
        obj.label = intl.string(publish(12246).CONJURE_PUBLISH_PERMISSION_LABELS[item]);
        return closure_1_6(closure_1_19, obj, item);
      });
      items1[3] = closure_6(closure_18, obj14);
      let tmp8Result2 = null;
      if (null != sharing) {
        const obj15 = { title: null };
        const intl6 = publish(1128).intl;
        obj15.title = intl6.string(tmp2(3830).yCgX8i);
        const items4 = [closure_6(closure_17, obj15)];
        const obj16 = { style: tmp.sharingRow, children: null };
        if (null != sharing.guild) {
          const obj17 = { guild: sharing.guild, size: publish(6868).GuildIconSizes.SMALL_36 };
          let tmp6Result6 = closure_6(tmp2(6868), obj17);
          const tmp2Result = tmp2(6868);
        } else {
          const obj18 = { style: tmp.onlyMeIcon, children: null };
          const obj19 = { size: "xs", color: tmp2(587).colors.ICON_DEFAULT };
          obj18.children = closure_6(publish(11792).UserIcon, obj19);
          tmp6Result6 = closure_6(View, obj18);
        }
        const items5 = [tmp6Result6];
        const obj20 = { style: tmp.rowText, children: null };
        guild = sharing.guild;
        let name;
        if (guild != null) {
          name = guild.name;
        }
        if (name == null) {
          const intl7 = publish(1128).intl;
          name = intl7.string(tmp2(3830)["37xgkF"]);
        }
        const obj21 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: name };
        const items6 = [closure_6(publish(5220).Text, obj21)];
        let tmp6Result7 = null;
        if (null != sharing.caption) {
          const obj22 = { variant: "text-xs/normal", color: "text-subtle", children: sharing.caption };
          tmp6Result7 = closure_6(publish(5220).Text, obj22);
        }
        const obj23 = { children: null };
        items6[1] = tmp6Result7;
        obj20.children = items6;
        items5[1] = closure_8(View, obj20);
        obj16.children = items5;
        items4[1] = closure_8(View, obj16);
        obj23.children = items4;
        tmp8Result2 = closure_8(View, obj23);
      }
      items1[4] = tmp8Result2;
      const obj24 = { style: tmp.footer, children: null };
      const obj25 = { style: tmp.status, children: null };
      const obj26 = { style: null };
      const items7 = [tmp.statusDot, tmp[closure_12[tmp4.mode]]];
      obj26.style = items7;
      const items8 = [closure_6(View, obj26)];
      const obj27 = { style: tmp.rowText, children: null };
      const items9 = [
        closure_6(publish(5220).Text, { variant: "text-sm/normal", color: "text-subtle", children: tmp4.statusText }),
      ];
      let tmp6Result8 = null;
      if (null != tmp4.lastPublishedText) {
        const obj55 = { variant: "text-xs/normal", color: "text-subtle", children: tmp4.lastPublishedText };
        tmp6Result8 = closure_6(publish(5220).Text, obj55);
      }
      items9[1] = tmp6Result8;
      obj27.children = items9;
      items8[1] = closure_8(View, obj27);
      obj25.children = items8;
      const items10 = [closure_8(View, obj25)];
      const obj56 = {
        variant: tmp4.ctaVariant,
        size: "md",
        grow: true,
        text: tmp4.ctaText,
        disabled: null,
        loading: null,
        onPress: null,
      };
      let disabled = publish.disabled;
      if (!disabled) {
        disabled = null != tmp4.nameError;
      }
      obj56.disabled = disabled;
      let saving = publish.publishing;
      if (saving) {
        saving = !(tmp4.initial && publish.showsProgress);
        const tmp22 = tmp4.initial && publish.showsProgress;
      }
      if (!saving) {
        saving = tmp4.saving;
      }
      obj56.loading = saving;
      obj56.onPress = function handlePublish() {
        const self = this;
        const apply = closure_3.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      items10[1] = closure_6(publish(5230).Button, obj56);
      obj24.children = items10;
      items1[5] = closure_8(View, obj24);
      obj2.children = items1;
      obj.children = closure_8(View, obj2);
      return closure_6(publish(7283).ActionSheet, obj);
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SectionTitle(title) {
      const cResult = c.c(3);
      title = title.title;
      const tmp4 = closure_13();
      if (cResult[0] === tmp4.sectionTitle) {
        if (cResult[1] === title) {
          let tmp5 = cResult[2];
        }
        return tmp5;
      }
      const tmp6 = timestampProducer(Text_Text.Text, {
        variant: "text-sm/semibold",
        color: "text-subtle",
        accessibilityRole: "header",
        style: tmp4.sectionTitle,
        children: title,
      });
      cResult[0] = tmp4.sectionTitle;
      cResult[1] = title;
      cResult[2] = tmp6;
      tmp5 = tmp6;
      obj2 = {
        variant: "text-sm/semibold",
        color: "text-subtle",
        accessibilityRole: "header",
        style: tmp4.sectionTitle,
        children: title,
      };
    }
  : function SectionTitle(children) {
      const tmp = closure_13();
      return timestampProducer(Text_Text.Text, {
        variant: "text-sm/semibold",
        color: "text-subtle",
        accessibilityRole: "header",
        style: closure_13().sectionTitle,
        children: children.title,
      });
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RowSection(arg0) {
      const cResult = c.c(6);
      ({ title, rows, following } = arg0);
      let followingSection = undefined !== following && following;
      if (0 === rows.length) {
        return null;
      } else {
        if (followingSection) {
          followingSection = tmp2.followingSection;
        }
        if (cResult[0] !== title) {
          obj2 = { title };
          const tmp6 = timestampProducer(closure_17, obj2);
          cResult[0] = title;
          cResult[1] = tmp6;
          let tmp3 = tmp6;
        } else {
          tmp3 = cResult[1];
        }
        if (cResult[2] === rows) {
          if (cResult[3] === followingSection) {
            if (cResult[4] === tmp3) {
              let tmp7 = cResult[5];
            }
            return tmp7;
          }
        }
        const obj3 = { style: followingSection, children: null };
        const items = [tmp3, rows];
        obj3.children = items;
        const tmp10 = closure_1_8(View, obj3);
        cResult[2] = rows;
        cResult[3] = followingSection;
        cResult[4] = tmp3;
        cResult[5] = tmp10;
        tmp7 = tmp10;
      }
    }
  : function RowSection(title) {
      ({ rows, following } = title);
      if (following === undefined) {
        following = false;
      }
      let tmp3Result = null;
      if (0 !== rows.length) {
        if (following) {
          following = tmp.followingSection;
        }
        obj = { style: following, children: null };
        obj2 = { title: title.title };
        const items = [timestampProducer(closure_17, obj2), rows];
        obj.children = items;
        tmp3Result = closure_1_8(View, obj);
      }
      return tmp3Result;
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ContentRow(arg0) {
      const cResult = c.c(8);
      ({ icon, label } = arg0);
      const tmp4 = closure_13();
      if (cResult[0] !== icon) {
        obj2 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
        const tmp8 = timestampProducer(icon, obj2);
        cResult[0] = icon;
        cResult[1] = tmp8;
        let tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== label) {
        const obj3 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: label };
        const tmp11 = timestampProducer(Text_Text.Text, obj3);
        cResult[2] = label;
        cResult[3] = tmp11;
        let tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === tmp4.row) {
        if (cResult[5] === tmp5) {
          if (cResult[6] === tmp9) {
            let tmp12 = cResult[7];
          }
          return tmp12;
        }
      }
      const obj4 = { style: tmp4.row, children: null };
      const items = [tmp5, tmp9];
      obj4.children = items;
      const tmp13 = closure_1_8(View, obj4);
      cResult[4] = tmp4.row;
      cResult[5] = tmp5;
      cResult[6] = tmp9;
      cResult[7] = tmp13;
      tmp12 = tmp13;
    }
  : function ContentRow(arg0) {
      ({ icon, label } = arg0);
      obj = { style: closure_13().row, children: null };
      const items = [
        timestampProducer(icon, { size: "xs", color: nativeDefault.colors.ICON_MUTED }),
        timestampProducer(Text_Text.Text, {
          variant: "text-sm/medium",
          color: "text-strong",
          lineClamp: 1,
          children: label,
        }),
      ];
      obj.children = items;
      return closure_1_8(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelRow(channel) {
      const cResult = c.c(2);
      let str = useChannelNameDefault(channel.channel);
      if (str == null) {
        str = "";
      }
      if (cResult[0] !== str) {
        obj2 = { icon: AppsIcon.AppsIcon, label: str };
        const tmp7 = timestampProducer(closure_19, obj2);
        cResult[0] = str;
        cResult[1] = tmp7;
        let tmp4 = tmp7;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : function ChannelRow(channel) {
      obj = { icon: AppsIcon.AppsIcon, label: null };
      let str = useChannelNameDefault(channel.channel);
      if (str == null) {
        str = "";
      }
      obj.label = str;
      return timestampProducer(closure_19, obj);
    };
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishSheet.tsx");

export default function showConjurePublishSheet(projectId, guildId, entryPoint) {
  obj2 = { key: ConjurePublishSheet, content: timestampProducer(closure_15, { projectId, guildId, entryPoint }) };
  ActionSheetActionCreators.showActionSheet(obj2);
}
