// === Module 10692: UnsupportedFeatureModal ===

// Module 10692 (UnsupportedFeatureModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
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
    headerLeft: onDismiss(6998).getHeaderCloseButton(function handleClose() {
      ModalActionCreatorsDefault.pop();
      if (onDismiss != null) {
        onDismiss();
      }
    }),
    render() {
      const obj = { style: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 }, children: null };
      const obj2 = { variant: "text-lg/normal", color: "text-default", children: null };
      const intl = onDismiss(1113).intl;
      obj2.children = intl.string(onDismiss(1113).t.I22zuX);
      obj.children = jsx(onDismiss(5624).Text, { variant: "text-lg/normal", color: "text-default", children: null });
      return <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 24 }}>{null}</View>;
    }
  };
  obj2.Unsupported = obj3;
  obj.screens = obj2;
  return jsx(onDismiss(7169).Navigator, { initialRouteName: "Unsupported", screens: null });
};