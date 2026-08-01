// === Module 14788: ? ===

// Module 14788
import createCacheKey from "createCacheKey";

let obj = { useScreenStyles: null };
obj[0] = createCacheKey.createStyles((arg0) => {
  const NAV_BAR_HEIGHT = require(5144) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT;
  if (arg0) {
    let diff = NAV_BAR_HEIGHT;
  } else {
    diff = NAV_BAR_HEIGHT - tmp(5144).STATUS_BAR_HEIGHT;
  }
  let obj = { marginTop: diff, marginLeft: null, marginRight: null, paddingBottom: null, flex: 1, flexDirection: "column", justifyContent: "space-between", alignItems: "stretch" };
  const space = importDefault(712).space;
  if (arg0) {
    let PX_16 = space.PX_24;
    let tmp6 = tmp5;
  } else {
    PX_16 = space.PX_16;
    tmp6 = tmp5;
  }
  obj[1] = PX_16;
  const space2 = tmp6(712).space;
  obj[2] = arg0 ? space2.PX_24 : space2.PX_16;
  const space3 = tmp6(712).space;
  obj = { contentContainer: obj, mfaContainerHeader: null, mfaContainerHeaderText: null, inputContainer: null, smsContainer: null, smsInput: null, radioItem: null, submit: null };
  obj[3] = arg0 ? space3.PX_24 : space3.PX_16;
  obj = { flexDirection: "column", alignItems: "center", paddingBottom: tmp6(712).space.PX_24 };
  obj[1] = obj;
  let num = 0;
  if (!arg0) {
    num = tmp6(712).space.PX_32;
  }
  const obj1 = { marginHorizontal: num, marginTop: null, textAlign: "center" };
  let num2 = 0;
  if (!arg0) {
    num2 = tmp6(712).space.PX_12;
  }
  obj1[1] = num2;
  obj[2] = obj1;
  obj[3] = { flexDirection: "column", alignSelf: "stretch" };
  obj[4] = { flexDirection: "column", alignSelf: "stretch" };
  obj[5] = { flexDirection: "row", alignSelf: "stretch" };
  obj[6] = { backgroundColor: tmp6(712).colors.BACKGROUND_SURFACE_HIGH, borderRadius: tmp6(712).radii.md };
  const obj2 = { backgroundColor: tmp6(712).colors.BACKGROUND_SURFACE_HIGH, borderRadius: tmp6(712).radii.md };
  tmp = require;
  obj[7] = { paddingTop: tmp6(712).space.PX_24 };
  return obj;
});
const result = require("Themes").fileFinishedImporting("modules/mfa/native/MfaScreenUtils.tsx");

export default obj;