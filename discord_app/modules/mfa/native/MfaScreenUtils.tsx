// === Module 15521: MfaScreenUtils ===

// Module 15521 (MfaScreenUtils)
import nativeDefault from "native" /* 587 */;
import NavigatorConstants from "NavigatorConstants" /* 6075 */;
import createStyles_mod from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

let createStyles;
let obj = {
  useScreenStyles: createStyles.createStyles((arg0) => {
    let PX_16;
    let diff;
    let num2;
    let obj4;
    let space2;
    let space3;
    let tmp6;
    const NAV_BAR_HEIGHT = NavigatorConstants.NAV_BAR_HEIGHT;
    if (arg0) {
      diff = NAV_BAR_HEIGHT;
    } else {
      diff = NAV_BAR_HEIGHT - NavigatorConstants.STATUS_BAR_HEIGHT;
    }
    const obj = { marginTop: diff, marginLeft: PX_16, marginRight: arg0 ? space2.PX_24 : space2.PX_16, paddingBottom: arg0 ? space3.PX_24 : space3.PX_16, flex: 1, flexDirection: "column", justifyContent: "space-between", alignItems: "stretch" };
    const space = nativeDefault.space;
    if (arg0) {
      PX_16 = space.PX_24;
      tmp6 = importDefault;
    } else {
      PX_16 = space.PX_16;
      tmp6 = importDefault;
    }
    space2 = tmp6(587).space;
    space3 = tmp6(587).space;
    let num = 0;
    const obj2 = { contentContainer: obj, mfaContainerHeader: { flexDirection: "column", alignItems: "center", paddingBottom: tmp6(587).space.PX_24 }, mfaContainerHeaderText: obj4, inputContainer: { flexDirection: "column", alignSelf: "stretch" }, smsContainer: { flexDirection: "column", alignSelf: "stretch" }, smsInput: { flexDirection: "row", alignSelf: "stretch" }, radioItem: { backgroundColor: tmp6(587).colors.BACKGROUND_SURFACE_HIGH, borderRadius: tmp6(587).radii.md }, submit: { paddingTop: tmp6(587).space.PX_24 } };
    ({ flexDirection: "column", alignItems: "center", paddingBottom: tmp6(587).space.PX_24 });
    if (!arg0) {
      num = tmp6(587).space.PX_32;
    }
    obj4 = { marginHorizontal: num, marginTop: num2, textAlign: "center" };
    num2 = 0;
    if (!arg0) {
      num2 = tmp6(587).space.PX_12;
    }
    ({ backgroundColor: tmp6(587).colors.BACKGROUND_SURFACE_HIGH, borderRadius: tmp6(587).radii.md });
    ({ paddingTop: tmp6(587).space.PX_24 });
    return obj2;
  })
};
createStyles = createStyles_mod;
const result = size.fileFinishedImporting("modules/mfa/native/MfaScreenUtils.tsx");

export default obj;