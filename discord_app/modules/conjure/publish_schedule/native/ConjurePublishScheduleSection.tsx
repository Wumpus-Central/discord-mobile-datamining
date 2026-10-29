// discord_app/modules/conjure/publish_schedule/native/ConjurePublishScheduleSection.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef3864 from "../../intl/ConjureUntranslated.messages.js";
import AlertModal from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import useConjurePublishScheduleDefault from "../useConjurePublishSchedule.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4, Fragment: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish_schedule/native/ConjurePublishScheduleSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjurePublishScheduleSection(projectId) {
      const cResult = projectId(576).c(25);
      projectId = projectId.projectId;
      const canEdit = projectId.canEdit;
      const tmp5 = useConjurePublishScheduleDefault(projectId, canEdit);
      importDefault = tmp5;
      if (canEdit) {
        if (tmp5.loaded) {
          if (null == tmp5.saved) {
            if (null == tmp5.error) {
              if (null == tmp5.status) {
                return null;
              }
            }
          }
        }
        if (cResult[0] === projectId) {
          if (cResult[1] === tmp5.remove) {
            let tmp8 = cResult[2];
          }
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            let obj2 = { variant: "heading-md/semibold", children: null };
            let intl = tmp(1125).intl;
            obj2.children = intl.string(tmp4(3864).ptzKKH);
            const tmp12 = closure_3(tmp(5271).Heading, obj2);
            cResult[3] = tmp12;
            let tmp10 = tmp12;
          } else {
            tmp10 = cResult[3];
          }
          if (cResult[4] !== tmp5.loading) {
            let tmp14 = null;
            if (tmp5.loading) {
              const obj3 = { variant: "text-sm/normal", accessibilityLiveRegion: "polite", children: null };
              let intl2 = tmp(1125).intl;
              obj3.children = intl2.string(tmp4(3864)["71yzD9"]);
              tmp14 = closure_3(tmp(5271).Text, obj3);
            }
            cResult[4] = tmp5.loading;
            cResult[5] = tmp14;
            let tmp13 = tmp14;
          } else {
            tmp13 = cResult[5];
          }
          if (cResult[6] === tmp8) {
            if (cResult[7] === tmp5.deleting) {
              if (cResult[8] === tmp5.loaded) {
                if (cResult[9] === tmp5.saved) {
                  let tmp16 = cResult[10];
                }
                if (cResult[11] !== tmp5.error) {
                  let tmp23 = null;
                  if (null != tmp5.error) {
                    const obj4 = {
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      accessibilityRole: "alert",
                      accessibilityLiveRegion: "assertive",
                      children: tmp5.error,
                    };
                    tmp23 = closure_3(tmp(5271).Text, obj4);
                  }
                  cResult[11] = tmp5.error;
                  cResult[12] = tmp23;
                  let tmp22 = tmp23;
                } else {
                  tmp22 = cResult[12];
                }
                if (cResult[13] !== tmp5.status) {
                  let tmp26 = null;
                  if (null != tmp5.status) {
                    const obj5 = {
                      variant: "text-sm/normal",
                      accessibilityLiveRegion: "polite",
                      children: tmp5.status,
                    };
                    tmp26 = closure_3(tmp(5271).Text, obj5);
                  }
                  cResult[13] = tmp5.status;
                  cResult[14] = tmp26;
                  let tmp25 = tmp26;
                } else {
                  tmp25 = cResult[14];
                }
                if (cResult[15] === tmp5.error) {
                  if (cResult[16] === tmp5.loading) {
                    if (cResult[17] === tmp5.retry) {
                      let tmp28 = cResult[18];
                    }
                    if (cResult[19] === tmp13) {
                      if (cResult[20] === tmp16) {
                        if (cResult[21] === tmp22) {
                          if (cResult[22] === tmp25) {
                            if (cResult[23] === tmp28) {
                              let tmp32 = cResult[24];
                            }
                            return tmp32;
                          }
                        }
                      }
                    }
                    const obj6 = { spacing: tmp4(587).space.PX_16, children: null };
                    const items = [tmp10, tmp13, tmp16, tmp22, tmp25, tmp28];
                    obj6.children = items;
                    const tmp34 = closure_4(tmp(6015).Stack, obj6);
                    cResult[19] = tmp13;
                    cResult[20] = tmp16;
                    cResult[21] = tmp22;
                    cResult[22] = tmp25;
                    cResult[23] = tmp28;
                    cResult[24] = tmp34;
                    tmp32 = tmp34;
                  }
                }
                let tmp30 = null;
                if (!tmp5.loading) {
                  tmp30 = null;
                  if (null != tmp5.error) {
                    const obj7 = { variant: "secondary", text: null, onPress: null };
                    const intl5 = tmp(1125).intl;
                    obj7.text = intl5.string(tmp4(3864).iLTcFU);
                    obj7.onPress = tmp5.retry;
                    tmp30 = closure_3(tmp(5281).Button, obj7);
                  }
                }
                cResult[15] = tmp5.error;
                cResult[16] = tmp5.loading;
                cResult[17] = tmp5.retry;
                cResult[18] = tmp30;
                tmp28 = tmp30;
              }
            }
          }
          let tmp18 = null;
          if (tmp5.loaded) {
            tmp18 = null;
            if (null != tmp5.saved) {
              const obj8 = { children: null };
              const obj9 = { variant: "text-sm/normal", color: "text-subtle", children: null };
              let intl3 = tmp(1125).intl;
              obj9.children = intl3.string(tmp4(3864).ubcNP7);
              const items1 = [closure_3(tmp(5271).Text, obj9)];
              const obj10 = { spacing: tmp4(587).space.PX_8, children: null };
              const result = tmp(12306).publishScheduleDetails(tmp5.saved);
              const items2 = [
                result.map((children, index) =>
                  closure_1_3(projectId(dependencyMap[8]).Text, { variant: "text-sm/normal", children }, index),
                ),
              ];
              const obj11 = { variant: "secondary", text: null, disabled: null, onPress: null };
              const intl4 = tmp(1125).intl;
              obj11.text = intl4.string(tmp4(3864).J7ZMMf);
              obj11.disabled = tmp5.deleting;
              obj11.onPress = tmp8;
              items2[1] = closure_3(tmp(5281).Button, obj11);
              obj10.children = items2;
              items1[1] = closure_4(tmp(6015).Stack, obj10);
              obj8.children = items1;
              tmp18 = closure_4(closure_5, obj8);
              const tmpResult = tmp(12306);
            }
          }
          cResult[6] = tmp8;
          cResult[7] = tmp5.deleting;
          cResult[8] = tmp5.loaded;
          cResult[9] = tmp5.saved;
          cResult[10] = tmp18;
          tmp16 = tmp18;
        }
        function confirmDelete() {
          const obj2 = {
            key: "ConjureDeletePublishSchedule-" + projectId,
            title: null,
            content: null,
            confirmText: null,
            variant: "destructive",
            onConfirm: null,
          };
          const intl = util.intl;
          obj2.title = intl.string(_modDef3864["Tw/KaB"]);
          const intl2 = util.intl;
          obj2.content = intl2.string(_modDef3864.qr1iIe);
          const intl3 = util.intl;
          obj2.confirmText = intl3.string(_modDef3864.J7ZMMf);
          obj2.onConfirm = remove.remove;
          AlertModal.showConfirmModal(obj2);
        }
        cResult[0] = projectId;
        cResult[1] = tmp5.remove;
        cResult[2] = confirmDelete;
        tmp8 = confirmDelete;
      } else {
        return null;
      }
      const obj = projectId(576);
    }
  : function ConjurePublishScheduleSection(projectId) {
      projectId = projectId.projectId;
      const canEdit = projectId.canEdit;
      const tmp3 = useConjurePublishScheduleDefault(projectId, canEdit);
      importDefault = tmp3;
      let tmp4 = null;
      if (canEdit) {
        if (tmp3.loaded) {
          if (null == tmp3.saved) {
            if (null == tmp3.error) {
              let tmp6Result2 = null;
            }
            tmp4 = tmp6Result2;
          }
        }
        const obj = { spacing: tmp(587).space.PX_16, children: null };
        let obj2 = { variant: "heading-md/semibold", children: null };
        let intl = projectId(1125).intl;
        obj2.children = intl.string(tmp(3864).ptzKKH);
        const items = [closure_3(projectId(5271).Heading, obj2), , , , ,];
        let tmp8Result = null;
        if (tmp3.loading) {
          const obj3 = { variant: "text-sm/normal", accessibilityLiveRegion: "polite", children: null };
          let intl2 = tmp7(1125).intl;
          obj3.children = intl2.string(tmp(3864)["71yzD9"]);
          tmp8Result = closure_3(tmp7(5271).Text, obj3);
        }
        items[1] = tmp8Result;
        let tmp6Result = null;
        if (tmp3.loaded) {
          tmp6Result = null;
          if (null != tmp3.saved) {
            const obj4 = { children: null };
            const obj5 = { variant: "text-sm/normal", color: "text-subtle", children: null };
            let intl3 = tmp7(1125).intl;
            obj5.children = intl3.string(tmp(3864).ubcNP7);
            const items1 = [closure_3(tmp7(5271).Text, obj5)];
            const obj6 = { spacing: tmp(587).space.PX_8, children: null };
            const result = tmp7(12306).publishScheduleDetails(tmp3.saved);
            const items2 = [
              result.map((children, index) =>
                closure_1_3(projectId(dependencyMap[8]).Text, { variant: "text-sm/normal", children }, index),
              ),
            ];
            const obj7 = { variant: "secondary", text: null, disabled: null, onPress: null };
            const intl4 = tmp7(1125).intl;
            obj7.text = intl4.string(tmp(3864).J7ZMMf);
            obj7.disabled = tmp3.deleting;
            obj7.onPress = function confirmDelete() {
              const obj2 = {
                key: "ConjureDeletePublishSchedule-" + projectId,
                title: null,
                content: null,
                confirmText: null,
                variant: "destructive",
                onConfirm: null,
              };
              const intl = util.intl;
              obj2.title = intl.string(_modDef3864["Tw/KaB"]);
              const intl2 = util.intl;
              obj2.content = intl2.string(_modDef3864.qr1iIe);
              const intl3 = util.intl;
              obj2.confirmText = intl3.string(_modDef3864.J7ZMMf);
              obj2.onConfirm = remove.remove;
              AlertModal.showConfirmModal(obj2);
            };
            items2[1] = closure_3(tmp7(5281).Button, obj7);
            obj6.children = items2;
            items1[1] = closure_4(tmp7(6015).Stack, obj6);
            obj4.children = items1;
            tmp6Result = closure_4(closure_5, obj4);
            const tmp7Result = tmp7(12306);
          }
        }
        items[2] = tmp6Result;
        let tmp8Result4 = null;
        if (null != tmp3.error) {
          const obj8 = {
            variant: "text-sm/normal",
            color: "text-feedback-critical",
            accessibilityRole: "alert",
            accessibilityLiveRegion: "assertive",
            children: tmp3.error,
          };
          tmp8Result4 = closure_3(tmp7(5271).Text, obj8);
        }
        items[3] = tmp8Result4;
        let tmp8Result5 = null;
        if (null != tmp3.status) {
          const obj9 = { variant: "text-sm/normal", accessibilityLiveRegion: "polite", children: tmp3.status };
          tmp8Result5 = closure_3(tmp7(5271).Text, obj9);
        }
        items[4] = tmp8Result5;
        let tmp8Result6 = null;
        if (!tmp3.loading) {
          tmp8Result6 = null;
          if (null != tmp3.error) {
            const obj10 = { variant: "secondary", text: null, onPress: null };
            const intl5 = tmp7(1125).intl;
            obj10.text = intl5.string(tmp(3864).iLTcFU);
            obj10.onPress = tmp3.retry;
            tmp8Result6 = closure_3(tmp7(5281).Button, obj10);
          }
        }
        items[5] = tmp8Result6;
        obj.children = items;
        tmp6Result2 = closure_4(projectId(6015).Stack, obj);
      }
      return tmp4;
    };
