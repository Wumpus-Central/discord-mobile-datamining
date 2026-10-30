// === Module 10672: UnsupportedFeatureModal ===

// Module 10672 (UnsupportedFeatureModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/UnsupportedFeatureModal.tsx");

export default function UnsupportedFeatureModal(onDismiss) {
  onDismiss = onDismiss.onDismiss;
  let obj = { initialRouteName: "Unsupported", screens: null };
  let obj2 = { Unsupported: null };
  const obj3 = {
    title: onDismiss.title,
    headerLeft: onDismiss(6992).getHeaderCloseButton(function handleClose() {
      ModalActionCreatorsDefault.pop();
      if (onDismiss != null) {
        onDismiss();
      }
    }),
    render() {
      const obj = { style: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 }, children: null };
      const obj2 = { variant: "text-lg/normal", color: "text-default", children: null };
      const intl = onDismiss(1114).intl;
      obj2.children = intl.string(onDismiss(1114).t.I22zuX);
      obj.children = jsx(onDismiss(5619).Text, { variant: "text-lg/normal", color: "text-default", children: null });
      return <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 24 }}>{null}</View>;
    }
  };
  obj2.Unsupported = obj3;
  obj.screens = obj2;
  return jsx(onDismiss(7163).Navigator, { initialRouteName: "Unsupported", screens: null });
};