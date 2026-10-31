// === Module 12500: ConjurePublishScheduleSection ===

// Module 12500 (ConjurePublishScheduleSection)
import util from "util" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import AlertModal from "AlertModal" /* 5964 */;
import useConjurePublishScheduleDefault from "useConjurePublishSchedule" /* 12501 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4, Fragment: hasOwnProperty } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish_schedule/native/ConjurePublishScheduleSection.tsx");

export default function ConjurePublishScheduleSection(projectId) {
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
    const obj = { spacing: tmp(575).space.PX_16, children: null };
    let obj2 = { variant: "heading-md/semibold", children: null };
    let intl = projectId(1113).intl;
    obj2.children = intl.string(tmp(3868).ptzKKH);
    const items = [closure_3(projectId(5624).Heading, obj2), , , , , ];
    let tmp8Result = null;
    if (tmp3.loading) {
      const obj3 = { variant: "text-sm/normal", accessibilityLiveRegion: "polite", children: null };
      let intl2 = tmp7(1113).intl;
      obj3.children = intl2.string(tmp(3868)["71yzD9"]);
      tmp8Result = closure_3(tmp7(5624).Text, obj3);
    }
    items[1] = tmp8Result;
    let tmp6Result = null;
    if (tmp3.loaded) {
      tmp6Result = null;
      if (null != tmp3.saved) {
        const obj4 = { children: null };
        const obj5 = { variant: "text-sm/normal", color: "text-subtle", children: null };
        let intl3 = tmp7(1113).intl;
        obj5.children = intl3.string(tmp(3868).ubcNP7);
        const items1 = [closure_3(tmp7(5624).Text, obj5), ];
        const obj6 = { spacing: tmp(575).space.PX_8, children: null };
        const result = tmp7(12502).publishScheduleDetails(tmp3.saved);
        const items2 = [result.map((children, index) => closure_1_3(projectId(dependencyMap[5]).Text, { variant: "text-sm/normal", children }, index)), ];
        const obj7 = { variant: "secondary", text: null, disabled: null, onPress: null };
        const intl4 = tmp7(1113).intl;
        obj7.text = intl4.string(tmp(3868).J7ZMMf);
        obj7.disabled = tmp3.deleting;
        obj7.onPress = function confirmDelete() {
          const obj2 = { key: "ConjureDeletePublishSchedule-" + projectId, title: null, content: null, confirmText: null, variant: "destructive", onConfirm: null };
          const intl = util.intl;
          obj2.title = intl.string(_modDef3868["Tw/KaB"]);
          const intl2 = util.intl;
          obj2.content = intl2.string(_modDef3868.qr1iIe);
          const intl3 = util.intl;
          obj2.confirmText = intl3.string(_modDef3868.J7ZMMf);
          obj2.onConfirm = remove.remove;
          AlertModal.showConfirmModal(obj2);
        };
        items2[1] = closure_3(tmp7(5634).Button, obj7);
        obj6.children = items2;
        items1[1] = closure_4(tmp7(6027).Stack, obj6);
        obj4.children = items1;
        tmp6Result = closure_4(closure_5, obj4);
        const tmp7Result = tmp7(12502);
      }
    }
    items[2] = tmp6Result;
    let tmp8Result4 = null;
    if (null != tmp3.error) {
      const obj8 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", accessibilityLiveRegion: "assertive", children: tmp3.error };
      tmp8Result4 = closure_3(tmp7(5624).Text, obj8);
    }
    items[3] = tmp8Result4;
    let tmp8Result5 = null;
    if (null != tmp3.status) {
      const obj9 = { variant: "text-sm/normal", accessibilityLiveRegion: "polite", children: tmp3.status };
      tmp8Result5 = closure_3(tmp7(5624).Text, obj9);
    }
    items[4] = tmp8Result5;
    let tmp8Result6 = null;
    if (!tmp3.loading) {
      tmp8Result6 = null;
      if (null != tmp3.error) {
        const obj10 = { variant: "secondary", text: null, onPress: null };
        const intl5 = tmp7(1113).intl;
        obj10.text = intl5.string(tmp(3868).iLTcFU);
        obj10.onPress = tmp3.retry;
        tmp8Result6 = closure_3(tmp7(5634).Button, obj10);
      }
    }
    items[5] = tmp8Result6;
    obj.children = items;
    tmp6Result2 = closure_4(projectId(6027).Stack, obj);
  }
  return tmp4;
};