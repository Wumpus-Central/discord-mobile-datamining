// discord_app/modules/mfa/native/MfaScreenUtils.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import NavigatorConstants from "../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = { useScreenStyles: null };
obj.useScreenStyles = createStyles.createStyles((arg0) => {
  const NAV_BAR_HEIGHT = NavigatorConstants.NAV_BAR_HEIGHT;
  if (arg0) {
    let diff = NAV_BAR_HEIGHT;
  } else {
    diff = NAV_BAR_HEIGHT - NavigatorConstants.STATUS_BAR_HEIGHT;
  }
  let obj = {
    marginTop: diff,
    marginLeft: null,
    marginRight: null,
    paddingBottom: null,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
  };
  const space = nativeDefault.space;
  if (arg0) {
    let PX_16 = space.PX_24;
    let tmp6 = tmp5;
  } else {
    PX_16 = space.PX_16;
    tmp6 = tmp5;
  }
  obj.marginLeft = PX_16;
  const space2 = tmp6(576).space;
  obj.marginRight = arg0 ? space2.PX_24 : space2.PX_16;
  const space3 = tmp6(576).space;
  obj = {
    contentContainer: obj,
    mfaContainerHeader: null,
    mfaContainerHeaderText: null,
    inputContainer: null,
    smsContainer: null,
    smsInput: null,
    radioItem: null,
    submit: null,
    paddingBottom: arg0 ? space3.PX_24 : space3.PX_16,
  };
  obj = { flexDirection: "column", alignItems: "center", paddingBottom: tmp6(576).space.PX_24 };
  obj.mfaContainerHeader = obj;
  let num = 0;
  if (!arg0) {
    num = tmp6(576).space.PX_32;
  }
  const obj1 = { marginHorizontal: num, marginTop: null, textAlign: "center" };
  let num2 = 0;
  if (!arg0) {
    num2 = tmp6(576).space.PX_12;
  }
  obj1.marginTop = num2;
  obj.mfaContainerHeaderText = obj1;
  obj.inputContainer = { flexDirection: "column", alignSelf: "stretch" };
  obj.smsContainer = { flexDirection: "column", alignSelf: "stretch" };
  obj.smsInput = { flexDirection: "row", alignSelf: "stretch" };
  obj.radioItem = { backgroundColor: tmp6(576).colors.BACKGROUND_SURFACE_HIGH, borderRadius: tmp6(576).radii.md };
  const obj2 = { backgroundColor: tmp6(576).colors.BACKGROUND_SURFACE_HIGH, borderRadius: tmp6(576).radii.md };
  obj.submit = { paddingTop: tmp6(576).space.PX_24 };
  return obj;
});
const result = size.fileFinishedImporting("modules/mfa/native/MfaScreenUtils.tsx");

export default obj;
