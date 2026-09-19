// === Module 15947: MfaScreenUtils ===

// Module 15947 (MfaScreenUtils)
import nativeDefault from "native" /* 576 */;
import NavigatorConstants from "NavigatorConstants" /* 5894 */;
import createStyles from "createStyles" /* 4756 */;
import size from "module_2" /* 2 */;

let obj = { useScreenStyles: null };
obj.useScreenStyles = createStyles.createStyles((arg0) => {
  const NAV_BAR_HEIGHT = NavigatorConstants.NAV_BAR_HEIGHT;
  if (arg0) {
    let diff = NAV_BAR_HEIGHT;
  } else {
    diff = NAV_BAR_HEIGHT - NavigatorConstants.STATUS_BAR_HEIGHT;
  }
  const obj = { marginTop: diff, marginLeft: null, marginRight: null, paddingBottom: null, flex: 1, flexDirection: "column", justifyContent: "space-between", alignItems: "stretch" };
  const space = nativeDefault.space;
  if (arg0) {
    let PX_16 = space.PX_24;
    let tmp6 = importDefault;
  } else {
    PX_16 = space.PX_16;
    tmp6 = importDefault;
  }
  obj.marginLeft = PX_16;
  const space2 = tmp6(576).space;
  obj.marginRight = arg0 ? space2.PX_24 : space2.PX_16;
  const space3 = tmp6(576).space;
  const obj2 = { contentContainer: obj, mfaContainerHeader: { flexDirection: "column", alignItems: "center", paddingBottom: tmp6(576).space.PX_24 }, mfaContainerHeaderText: null, inputContainer: null, smsContainer: null, smsInput: null, radioItem: null, submit: null };
  obj.paddingBottom = arg0 ? space3.PX_24 : space3.PX_16;
  let num = 0;
  if (!arg0) {
    num = tmp6(576).space.PX_32;
  }
  const obj4 = { marginHorizontal: num, marginTop: null, textAlign: "center" };
  let num2 = 0;
  if (!arg0) {
    num2 = tmp6(576).space.PX_12;
  }
  obj4.marginTop = num2;
  obj2.mfaContainerHeaderText = obj4;
  obj2.inputContainer = { flexDirection: "column", alignSelf: "stretch" };
  obj2.smsContainer = { flexDirection: "column", alignSelf: "stretch" };
  obj2.smsInput = { flexDirection: "row", alignSelf: "stretch" };
  const obj3 = { flexDirection: "column", alignItems: "center", paddingBottom: tmp6(576).space.PX_24 };
  obj2.radioItem = { backgroundColor: tmp6(576).colors.BACKGROUND_SURFACE_HIGH, borderRadius: tmp6(576).radii.md };
  const obj5 = { backgroundColor: tmp6(576).colors.BACKGROUND_SURFACE_HIGH, borderRadius: tmp6(576).radii.md };
  obj2.submit = { paddingTop: tmp6(576).space.PX_24 };
  return obj2;
});
const result = size.fileFinishedImporting("modules/mfa/native/MfaScreenUtils.tsx");

export default obj;