// === Module 10825: UnsupportedFeatureModal ===

// Module 10825 (UnsupportedFeatureModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/UnsupportedFeatureModal.tsx");

export default function UnsupportedFeatureModal(onDismiss) {
  onDismiss = onDismiss.onDismiss;
  let obj = { initialRouteName: "Unsupported", screens: null };
  obj = { Unsupported: null };
  obj = {
    title: onDismiss.title,
    headerLeft: onDismiss(5624).getHeaderCloseButton(() => {
      let arr = ModalActionCreatorsDefault;
      arr = arr.pop();
      if (onDismiss != null) {
        onDismiss();
      }
    }),
    render() {
      let obj = { style: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 }, children: null };
      obj = { variant: "text-lg/normal", color: "text-default", children: null };
      const intl = onDismiss(1114).intl;
      obj.children = intl.string(onDismiss(1114).t.I22zuX);
      obj.children = jsx(onDismiss(4556).Text, { variant: "text-lg/normal", color: "text-default", children: null });
      return <View variant="text-lg/normal" color="text-default">{null}</View>;
    }
  };
  obj.Unsupported = obj;
  obj.screens = obj;
  return jsx(onDismiss(7000).Navigator, {
    title: onDismiss.title,
    headerLeft: onDismiss(5624).getHeaderCloseButton(() => {
      let arr = ModalActionCreatorsDefault;
      arr = arr.pop();
      if (onDismiss != null) {
        onDismiss();
      }
    }),
    render() {
      let obj = { style: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 }, children: null };
      obj = { variant: "text-lg/normal", color: "text-default", children: null };
      const intl = onDismiss(1114).intl;
      obj.children = intl.string(onDismiss(1114).t.I22zuX);
      obj.children = jsx(onDismiss(4556).Text, { variant: "text-lg/normal", color: "text-default", children: null });
      return <View variant="text-lg/normal" color="text-default">{null}</View>;
    }
  });
};