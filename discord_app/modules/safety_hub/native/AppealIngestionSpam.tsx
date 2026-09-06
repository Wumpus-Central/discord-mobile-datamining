// discord_app/modules/safety_hub/native/AppealIngestionSpam.tsx
import native from "../../../design/void/native.tsx";
import common_SafeAreaView from "../../../components_native/common/SafeAreaView.tsx";
import AppealIngestionModal from "AppealIngestionModal.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_4 = createStyles.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionSpam.tsx");

export default function AppealIngestionSpam() {
  const tmp = closure_4();
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { bottom: true, style: tmp.container, children: jsx(native.LegacyText, { children: "TODO - SPAM" }) };
  obj.children = jsx(common_SafeAreaView.SafeAreaPaddingView, {
    bottom: true,
    style: tmp.container,
    children: jsx(native.LegacyText, { children: "TODO - SPAM" }),
  });
  obj.children = (
    <View bottom style={tmp.container}>
      {jsx(native.LegacyText, { children: "TODO - SPAM" })}
    </View>
  );
  return jsx(AppealIngestionModal.AppealIngestionModalScreen, {
    bottom: true,
    style: tmp.container,
    children: jsx(native.LegacyText, { children: "TODO - SPAM" }),
  });
}
