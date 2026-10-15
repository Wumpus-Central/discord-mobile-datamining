// === Module 12081: ConjureAttachmentPills ===

// Module 12081 (ConjureAttachmentPills)
import nativeDefault from "native" /* 587 */;
import conjureAttachmentRequests from "conjureAttachmentRequests" /* 11519 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5151);
let obj2 = { attachmentPills: { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 }, attachmentPill: null };
let obj3 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj2.attachmentPill = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureAttachmentPills.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAttachmentPills(projectId) {
  const cResult = projectId(attachmentPill[6]).c(12);
  projectId = projectId.projectId;
  const attachments = projectId.attachments;
  const tmp2 = closure_6();
  closure_1 = tmp2;
  if (cResult[0] !== projectId) {
    const fn = function o(arg0) {
      const attachmentUrl = conjureAttachmentRequests.getAttachmentUrl(projectId, arg0);
      attachmentUrl.then((result) => closure_1_1(attachmentPill[8]).openURL(result)).catch(() => {

      });
    };
    cResult[0] = projectId;
    cResult[1] = fn;
    attachmentPill = fn;
  } else {
    attachmentPill = cResult[1];
  }
  if (cResult[2] === attachments) {
    if (cResult[3] === attachmentPill) {
      if (cResult[4] === tmp2.attachmentPill) {
        if (cResult[9] === tmp2.attachmentPills) {
          if (cResult[10] === tmp4) {
            let tmp8 = cResult[11];
          }
          return tmp8;
        }
        let obj2 = { style: tmp3, children: cResult[5] };
        const tmp11 = <View style={tmp3}>{cResult[5]}</View>;
        cResult[9] = tmp2.attachmentPills;
        cResult[10] = cResult[5];
        cResult[11] = tmp11;
        tmp8 = tmp11;
      }
    }
  }
  if (cResult[6] === attachmentPill) {
    if (cResult[7] === tmp2.attachmentPill) {
      let tmp5 = cResult[8];
    }
    const mapped = attachments.map(tmp5);
    cResult[2] = attachments;
    cResult[3] = attachmentPill;
    attachmentPill = tmp2.attachmentPill;
    cResult[4] = attachmentPill;
    cResult[5] = mapped;
  }
  const fn2 = function p(id, arg1) {
    if (null != id.id) {
      const obj = {
        style: closure_1.attachmentPill,
        onPress() {
            return attachmentPill(id.id);
          },
        accessibilityLabel: null,
        children: null
      };
      const intl = projectId(attachmentPill[10]).intl;
      const obj2 = { name: id.name };
      obj.accessibilityLabel = intl.formatToPlainString(closure_1(attachmentPill[11]).GtNukg, obj2);
      const obj3 = { variant: "text-xs/medium", color: "text-default", children: id.name };
      obj.children = jsx(projectId(attachmentPill[12]).Text, { variant: "text-xs/medium", color: "text-default", children: id.name });
      let tmp12 = jsx(projectId(attachmentPill[9]).Card, {
        style: closure_1.attachmentPill,
        onPress() {
            return attachmentPill(id.id);
          },
        accessibilityLabel: null,
        children: null
      }, id.id);
    } else {
      const obj4 = { style: closure_1.attachmentPill, children: null };
      const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const intl2 = projectId(attachmentPill[10]).intl;
      const obj6 = { name: id.name };
      obj5.children = intl2.formatToPlainString(closure_1(attachmentPill[11]).nd81jR, obj6);
      obj4.children = jsx(projectId(attachmentPill[12]).Text, { variant: "text-xs/medium", color: "text-muted", children: null });
      const _HermesInternal = HermesInternal;
      tmp12 = <View key={"" + id.name + "-" + arg1} style={closure_1.attachmentPill}>{null}</View>;
    }
    return tmp12;
  };
  cResult[6] = attachmentPill;
  cResult[7] = tmp2.attachmentPill;
  cResult[8] = fn2;
  tmp5 = fn2;
  let obj = projectId(attachmentPill[6]);
}) : (function ConjureAttachmentPills(projectId) {
  projectId = projectId.projectId;
  const attachments = projectId.attachments;
  const tmp = closure_6();
  closure_1 = tmp;
  const items = [projectId];
  dependencyMap = noop.useCallback((arg0) => {
    const attachmentUrl = conjureAttachmentRequests.getAttachmentUrl(projectId, arg0);
    attachmentUrl.then((result) => closure_1_1(dependencyMap[8]).openURL(result)).catch(() => {

    });
  }, items);
  return <View style={tmp.attachmentPills}>{attachments.map((id, index) => {
    if (null != id.id) {
      const obj = {
        style: closure_1.attachmentPill,
        onPress() {
            return closure_2(id.id);
          },
        accessibilityLabel: null,
        children: null
      };
      const intl = projectId(1126).intl;
      const obj2 = { name: id.name };
      obj.accessibilityLabel = intl.formatToPlainString(closure_1(3862).GtNukg, obj2);
      const obj3 = { variant: "text-xs/medium", color: "text-default", children: id.name };
      obj.children = jsx(projectId(5147).Text, { variant: "text-xs/medium", color: "text-default", children: id.name });
      let tmp12 = jsx(projectId(6402).Card, {
        style: closure_1.attachmentPill,
        onPress() {
            return closure_2(id.id);
          },
        accessibilityLabel: null,
        children: null
      }, id.id);
    } else {
      const obj4 = { style: closure_1.attachmentPill, children: null };
      const obj5 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const intl2 = projectId(1126).intl;
      const obj6 = { name: id.name };
      obj5.children = intl2.formatToPlainString(closure_1(3862).nd81jR, obj6);
      obj4.children = jsx(projectId(5147).Text, { variant: "text-xs/medium", color: "text-muted", children: null });
      const _HermesInternal = HermesInternal;
      tmp12 = <View key={"" + id.name + "-" + index} style={closure_1.attachmentPill}>{null}</View>;
    }
    return tmp12;
  })}</View>;
});