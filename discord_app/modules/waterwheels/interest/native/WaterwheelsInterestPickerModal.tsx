// === Module 18570: WaterwheelsInterestPickerModal ===

// Module 18570 (WaterwheelsInterestPickerModal)
import noop from "module_19" /* 19 */;

const require = fn;
class WaterwheelsInterestPickerModal {
  constructor() {
    tmp2 = closure_1;
    tmp3 = closure_2;
    tmp = closure_7();
    tmp4 = closure_1(closure_2[6])("WaterwheelsInterestPickerModal");
    closure_0 = tmp4;
    callback = closure_3.useCallback((gameIds) => {
      const result = closure_0(18574).setInterestPickerPicks(gameIds);
      const obj = closure_0(18574);
      const result1 = closure_0(18574).markInterestPickerSeen();
      const obj2 = closure_0(18574);
      callback(6864).popWithKey(closure_1_6);
      const obj3 = callback(6864);
      const rootNavigationRef = closure_0(5322).getRootNavigationRef();
      if (null != rootNavigationRef) {
        const obj5 = { screen: "icymi-screen", params: { inNestedNavigator: true } };
        rootNavigationRef.navigate("icymi", obj5);
      }
    }, []);
    closure_1 = callback;
    items = [, ];
    items[0] = tmp4;
    items[1] = callback;
    effect = closure_3.useEffect(() => {
      if (null == closure_0) {
        callback([]);
      }
    }, items);
    tmp7 = null;
    if (null != tmp4) {
      tmp8 = jsx;
      tmp9 = View;
      obj = { style: null, children: null };
      obj.style = tmp.screen;
      obj1 = { catalog: null, title: null, subtitle: null, minSelection: 1, onContinue: null, onSkip: null };
      obj1.catalog = tmp4;
      tmp11 = closure_0;
      tmp2Result = tmp2(tmp3[9]);
      intl = closure_0(tmp3[10]).intl;
      obj1.title = intl.string(tmp2(tmp3[11])["5MUKTF"]);
      intl2 = closure_0(tmp3[10]).intl;
      obj1.subtitle = intl2.string(tmp2(tmp3[11])["z/57xV"]);
      obj1.onContinue = callback;
      obj1.onSkip = callback;
      obj.children = jsx(tmp2Result, obj1);
      tmp7 = jsx(View, obj);
    }
    return tmp7;
  }
}
const View = fn(17).View;
const jsx = fn(21).jsx;
let c6 = "waterwheels-interest-picker-modal";
const createStyles = fn(5141);
const React5 = createStyles.createStyles({ screen: { flex: 1 } });
WaterwheelsInterestPickerModal.modalConfig = { animation: fn(1072).ModalAnimation.SLIDE_IN_OUT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/WaterwheelsInterestPickerModal.tsx");

export default WaterwheelsInterestPickerModal;
export const WATERWHEELS_INTEREST_PICKER_MODAL_KEY = "waterwheels-interest-picker-modal";