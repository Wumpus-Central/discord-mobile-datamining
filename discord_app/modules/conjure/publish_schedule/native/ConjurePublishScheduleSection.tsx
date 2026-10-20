// discord_app/modules/conjure/publish_schedule/native/ConjurePublishScheduleSection.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef3820 from "../../intl/ConjureUntranslated.messages.js";
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
        if (cResult[0] === projectId) {
          if (cResult[1] === tmp5.remove) {
            let tmp7 = cResult[2];
          }
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            let obj2 = { variant: "heading-md/semibold", children: null };
            let intl = tmp(1128).intl;
            obj2.children = intl.string(tmp4(3820).ptzKKH);
            const tmp11 = closure_3(tmp(5195).Heading, obj2);
            cResult[3] = tmp11;
            let tmp9 = tmp11;
          } else {
            tmp9 = cResult[3];
          }
          if (cResult[4] !== tmp5.loading) {
            let tmp13 = null;
            if (tmp5.loading) {
              const obj3 = { variant: "text-sm/normal", accessibilityLiveRegion: "polite", children: null };
              let intl2 = tmp(1128).intl;
              obj3.children = intl2.string(tmp4(3820)["71yzD9"]);
              tmp13 = closure_3(tmp(5195).Text, obj3);
            }
            cResult[4] = tmp5.loading;
            cResult[5] = tmp13;
            let tmp12 = tmp13;
          } else {
            tmp12 = cResult[5];
          }
          if (cResult[6] === tmp7) {
            if (cResult[7] === tmp5.deleting) {
              if (cResult[8] === tmp5.loaded) {
                if (cResult[9] === tmp5.saved) {
                  let tmp15 = cResult[10];
                }
                if (cResult[11] !== tmp5.error) {
                  let tmp26 = null;
                  if (null != tmp5.error) {
                    const obj4 = {
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      accessibilityRole: "alert",
                      accessibilityLiveRegion: "assertive",
                      children: tmp5.error,
                    };
                    tmp26 = closure_3(tmp(5195).Text, obj4);
                  }
                  cResult[11] = tmp5.error;
                  cResult[12] = tmp26;
                  let tmp25 = tmp26;
                } else {
                  tmp25 = cResult[12];
                }
                if (cResult[13] !== tmp5.status) {
                  let tmp29 = null;
                  if (null != tmp5.status) {
                    const obj5 = {
                      variant: "text-sm/normal",
                      accessibilityLiveRegion: "polite",
                      children: tmp5.status,
                    };
                    tmp29 = closure_3(tmp(5195).Text, obj5);
                  }
                  cResult[13] = tmp5.status;
                  cResult[14] = tmp29;
                  let tmp28 = tmp29;
                } else {
                  tmp28 = cResult[14];
                }
                if (cResult[15] === tmp5.error) {
                  if (cResult[16] === tmp5.loading) {
                    if (cResult[17] === tmp5.retry) {
                      let tmp31 = cResult[18];
                    }
                    if (cResult[19] === tmp12) {
                      if (cResult[20] === tmp15) {
                        if (cResult[21] === tmp25) {
                          if (cResult[22] === tmp28) {
                            if (cResult[23] === tmp31) {
                              let tmp35 = cResult[24];
                            }
                            return tmp35;
                          }
                        }
                      }
                    }
                    const obj6 = { spacing: tmp4(587).space.PX_16, children: null };
                    const items = [tmp9, tmp12, tmp15, tmp25, tmp28, tmp31];
                    obj6.children = items;
                    const tmp37 = closure_4(tmp(5935).Stack, obj6);
                    cResult[19] = tmp12;
                    cResult[20] = tmp15;
                    cResult[21] = tmp25;
                    cResult[22] = tmp28;
                    cResult[23] = tmp31;
                    cResult[24] = tmp37;
                    tmp35 = tmp37;
                  }
                }
                let tmp33 = null;
                if (!tmp5.loading) {
                  tmp33 = null;
                  if (null != tmp5.error) {
                    const obj7 = { variant: "secondary", text: null, onPress: null };
                    const intl6 = tmp(1128).intl;
                    obj7.text = intl6.string(tmp4(3820).iLTcFU);
                    obj7.onPress = tmp5.retry;
                    tmp33 = closure_3(tmp(5205).Button, obj7);
                  }
                }
                cResult[15] = tmp5.error;
                cResult[16] = tmp5.loading;
                cResult[17] = tmp5.retry;
                cResult[18] = tmp33;
                tmp31 = tmp33;
              }
            }
          }
          let tmp18Result2 = null;
          if (tmp5.loaded) {
            if (null == tmp5.saved) {
              const obj8 = { variant: "text-sm/normal", color: "text-subtle", children: null };
              const intl4 = tmp(1128).intl;
              obj8.children = intl4.string(tmp4(3820).sg8WIV);
              let tmp21 = closure_3(tmp(5195).Text, obj8);
              let tmp22 = closure_3;
            } else {
              const obj9 = { variant: "text-sm/normal", color: "text-subtle", children: null };
              let intl3 = tmp(1128).intl;
              obj9.children = intl3.string(tmp4(3820).ubcNP7);
              tmp21 = closure_3(tmp(5195).Text, obj9);
              tmp22 = closure_3;
            }
            const items1 = [tmp21];
            let tmp18Result = null;
            if (null != tmp5.saved) {
              const obj10 = { spacing: tmp4(587).space.PX_8, children: null };
              const result = tmp(11710).publishScheduleDetails(tmp5.saved);
              const items2 = [
                result.map((children, index) =>
                  closure_1_3(projectId(dependencyMap[8]).Text, { variant: "text-sm/normal", children }, index),
                ),
              ];
              const obj11 = { variant: "secondary", text: null, disabled: null, onPress: null };
              const intl5 = tmp(1128).intl;
              obj11.text = intl5.string(tmp4(3820).J7ZMMf);
              obj11.disabled = tmp5.deleting;
              obj11.onPress = tmp7;
              items2[1] = tmp22(tmp(5205).Button, obj11);
              obj10.children = items2;
              tmp18Result = closure_4(tmp(5935).Stack, obj10);
              const tmpResult = tmp(11710);
            }
            const obj12 = { children: null };
            items1[1] = tmp18Result;
            obj12.children = items1;
            tmp18Result2 = closure_4(closure_5, obj12);
          }
          cResult[6] = tmp7;
          cResult[7] = tmp5.deleting;
          cResult[8] = tmp5.loaded;
          cResult[9] = tmp5.saved;
          cResult[10] = tmp18Result2;
          tmp15 = tmp18Result2;
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
          obj2.title = intl.string(_modDef3820["Tw/KaB"]);
          const intl2 = util.intl;
          obj2.content = intl2.string(_modDef3820.qr1iIe);
          const intl3 = util.intl;
          obj2.confirmText = intl3.string(_modDef3820.J7ZMMf);
          obj2.onConfirm = remove.remove;
          AlertModal.showConfirmModal(obj2);
        }
        cResult[0] = projectId;
        cResult[1] = tmp5.remove;
        cResult[2] = confirmDelete;
        tmp7 = confirmDelete;
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
      let tmp5Result4 = null;
      if (canEdit) {
        const obj = { spacing: tmp(587).space.PX_16, children: null };
        let obj2 = { variant: "heading-md/semibold", children: null };
        let intl = projectId(1128).intl;
        obj2.children = intl.string(tmp(3820).ptzKKH);
        const items = [closure_3(projectId(5195).Heading, obj2), , , , ,];
        let tmp7Result = null;
        if (tmp3.loading) {
          const obj3 = { variant: "text-sm/normal", accessibilityLiveRegion: "polite", children: null };
          let intl2 = tmp6(1128).intl;
          obj3.children = intl2.string(tmp(3820)["71yzD9"]);
          tmp7Result = closure_3(tmp6(5195).Text, obj3);
        }
        items[1] = tmp7Result;
        let tmp5Result3 = null;
        if (tmp3.loaded) {
          if (null == tmp3.saved) {
            const obj4 = { variant: "text-sm/normal", color: "text-subtle", children: null };
            const intl4 = tmp6(1128).intl;
            obj4.children = intl4.string(tmp(3820).sg8WIV);
            let tmp7Result5 = closure_3(tmp6(5195).Text, obj4);
          } else {
            const obj5 = { variant: "text-sm/normal", color: "text-subtle", children: null };
            let intl3 = tmp6(1128).intl;
            obj5.children = intl3.string(tmp(3820).ubcNP7);
            tmp7Result5 = closure_3(tmp6(5195).Text, obj5);
          }
          const items1 = [tmp7Result5];
          let tmp5Result = null;
          if (null != tmp3.saved) {
            const obj6 = { spacing: tmp(587).space.PX_8, children: null };
            const result = tmp6(11710).publishScheduleDetails(tmp3.saved);
            const items2 = [
              result.map((children, index) =>
                closure_1_3(projectId(dependencyMap[8]).Text, { variant: "text-sm/normal", children }, index),
              ),
            ];
            const obj7 = { variant: "secondary", text: null, disabled: null, onPress: null };
            const intl5 = tmp6(1128).intl;
            obj7.text = intl5.string(tmp(3820).J7ZMMf);
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
              obj2.title = intl.string(_modDef3820["Tw/KaB"]);
              const intl2 = util.intl;
              obj2.content = intl2.string(_modDef3820.qr1iIe);
              const intl3 = util.intl;
              obj2.confirmText = intl3.string(_modDef3820.J7ZMMf);
              obj2.onConfirm = remove.remove;
              AlertModal.showConfirmModal(obj2);
            };
            items2[1] = closure_3(tmp6(5205).Button, obj7);
            obj6.children = items2;
            tmp5Result = closure_4(tmp6(5935).Stack, obj6);
            const tmp6Result = tmp6(11710);
          }
          const obj8 = { children: null };
          items1[1] = tmp5Result;
          obj8.children = items1;
          tmp5Result3 = closure_4(closure_5, obj8);
        }
        items[2] = tmp5Result3;
        let tmp7Result6 = null;
        if (null != tmp3.error) {
          const obj9 = {
            variant: "text-sm/normal",
            color: "text-feedback-critical",
            accessibilityRole: "alert",
            accessibilityLiveRegion: "assertive",
            children: tmp3.error,
          };
          tmp7Result6 = closure_3(tmp6(5195).Text, obj9);
        }
        items[3] = tmp7Result6;
        let tmp7Result7 = null;
        if (null != tmp3.status) {
          const obj10 = { variant: "text-sm/normal", accessibilityLiveRegion: "polite", children: tmp3.status };
          tmp7Result7 = closure_3(tmp6(5195).Text, obj10);
        }
        items[4] = tmp7Result7;
        let tmp7Result8 = null;
        if (!tmp3.loading) {
          tmp7Result8 = null;
          if (null != tmp3.error) {
            const obj11 = { variant: "secondary", text: null, onPress: null };
            const intl6 = tmp6(1128).intl;
            obj11.text = intl6.string(tmp(3820).iLTcFU);
            obj11.onPress = tmp3.retry;
            tmp7Result8 = closure_3(tmp6(5205).Button, obj11);
          }
        }
        items[5] = tmp7Result8;
        obj.children = items;
        tmp5Result4 = closure_4(projectId(5935).Stack, obj);
      }
      return tmp5Result4;
    };
