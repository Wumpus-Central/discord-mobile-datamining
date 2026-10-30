// === Module 12610: ConjureAttachmentPills ===

// Module 12610 (ConjureAttachmentPills)
import nativeDefault from "native" /* 575 */;
import conjureAttachmentRequests from "conjureAttachmentRequests" /* 12453 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj2 = { attachmentPills: { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 }, attachmentPill: null };
let obj3 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj2.attachmentPill = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureAttachmentPills.tsx");

export default function ConjureAttachmentPills(projectId) {
  projectId = projectId.projectId;
  const attachments = projectId.attachments;
  const tmp = closure_6();
  closure_1 = tmp;
  const items = [projectId];
  dependencyMap = noop.useCallback((arg0) => {
    const attachmentUrl = conjureAttachmentRequests.getAttachmentUrl(projectId, arg0);
    attachmentUrl.then((result) => closure_1_1(dependencyMap[6]).openURL(result)).catch(() => {

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
      const intl = projectId(1114).intl;
      const obj2 = { name: id.name };
      obj.accessibilityLabel = intl.formatToPlainString(closure_1(3865).GtNukg, obj2);
      const obj3 = { variant: "text-xs/medium", color: "text-default", children: id.name };
      obj.children = jsx(projectId(5619).Text, { variant: "text-xs/medium", color: "text-default", children: id.name });
      let tmp12 = jsx(projectId(6971).Card, {
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
      const intl2 = projectId(1114).intl;
      const obj6 = { name: id.name };
      obj5.children = intl2.formatToPlainString(closure_1(3865).nd81jR, obj6);
      obj4.children = jsx(projectId(5619).Text, { variant: "text-xs/medium", color: "text-muted", children: null });
      const _HermesInternal = HermesInternal;
      tmp12 = <View key={"" + id.name + "-" + index} style={closure_1.attachmentPill}>{null}</View>;
    }
    return tmp12;
  })}</View>;
};